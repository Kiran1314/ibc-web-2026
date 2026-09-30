'use client';

import { useEffect, useLayoutEffect, useRef, useState, useTransition } from 'react';
import { createPortal } from 'react-dom';
import { filters, tagBars, items, placeholderIcons } from '@/lib/workData';
import { audioCategories, audioLanguages, audioTracksData } from '@/lib/audiotracks';
import { photographyData } from '@/lib/photographyData';

const PAGE_SIZE = 12;
const START = { cat: 'all', tag: 'all', audioType: 'categories' };
const toFilterValue = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const audioItems = audioTracksData.map((track) => {
  const label = track.category || track.language;
  return {
    c: 'audio',
    tags: toFilterValue(label),
    audiotype: track.type === 'category' ? 'categories' : 'languages',
    title: track.title,
    sub: label,
    label,
    audioUrl: track.audioUrl,
    trackId: track.id,
  };
});

const photographyItems = photographyData.map((category) => ({
  c: 'photo',
  tags: toFilterValue(category.label),
  title: category.label,
  sub: 'Photography',
  label: 'Photography',
  img: category.images[0],
  images: category.images,
  photoId: category.id,
}));

const workItems = [...items.filter((item) => item.c !== 'audio' && item.c !== 'photo'), ...photographyItems, ...audioItems];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function matches(item, { cat, tag, audioType }) {
  const matchesCat = cat === 'all' ? item.c !== 'audio' : item.c === cat;
  const matchesAudioType = cat !== 'audio' || item.audiotype === audioType;
  const matchesTag = tag === 'all' || item.tags.split(' ').includes(tag);
  return matchesCat && matchesAudioType && matchesTag;
}

function computeVisible(filter, limit) {
  let eligible = 0;
  const visible = workItems.map((item) => {
    if (!matches(item, filter)) return false;
    eligible++;
    return eligible <= limit;
  });
  return { visible, eligible, shown: visible.filter(Boolean).length };
}

const formatAudioTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

function AudioMiniPlayer({ item }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration ? (currentTime / duration) * 100 : 0;

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  const restart = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className={`waudio-player${isPlaying ? ' is-playing' : ''}`}>
      <audio
        ref={audioRef}
        src={item.audioUrl}
        preload="none"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <button className="waudio-play" type="button" onClick={togglePlayback} aria-label={`${isPlaying ? 'Pause' : 'Play'} ${item.title}`}>
        {isPlaying ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
      <div className="waudio-trackline">
        <input
          className="waudio-seek"
          type="range"
          min="0"
          max={duration || 1}
          step="0.1"
          value={duration ? Math.min(currentTime, duration) : 0}
          style={{ '--audio-progress': `${progress}%` }}
          onChange={(event) => {
            const nextTime = Number(event.target.value);
            audioRef.current.currentTime = nextTime;
            setCurrentTime(nextTime);
          }}
          aria-label={`Seek ${item.title}`}
        />
        <div className="waudio-times" aria-hidden="true">
          <span>{formatAudioTime(currentTime)}</span>
          <span>{formatAudioTime(duration)}</span>
        </div>
      </div>
      <button className="waudio-action" type="button" onClick={restart} aria-label={`Restart ${item.title}`} title="Restart">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11a9 9 0 1 1 2.6 6.4M3 4v7h7" /></svg>
      </button>
      <button className="waudio-volume" type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'} title={isMuted ? 'Unmute' : 'Mute'}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 10v4h4l5 4V6l-5 4H4z" />
          {isMuted ? <path d="m16 9 5 6m0-6-5 6" /> : <path d="M16 9a4 4 0 0 1 0 12" />}
        </svg>
      </button>
    </div>
  );
}

function WorkItem({ item, hidden, onPlay, onGallery, itemRef, isPriority }) {
  const dataAttrs = { 'data-c': item.c, 'data-tags': item.tags };
  if (item.audiotype) dataAttrs['data-audiotype'] = item.audiotype;
  return (
    <div className={`witem reveal${item.audioUrl ? ' witem-audio' : ''}`} {...dataAttrs} ref={itemRef} style={hidden ? { display: 'none' } : undefined}>
      {item.yt ? (
        <button
          className="wv-thumb"
          type="button"
          data-yt={item.yt}
          data-title={item.ytTitle}
          aria-label={`Play ${item.ytTitle} video`}
          onClick={() => onPlay(item.yt, item.ytTitle)}
        >
          <img 
            src={item.img} 
            alt="" 
            loading={isPriority ? "eager" : "lazy"} 
            fetchPriority={isPriority ? "high" : "auto"}
            decoding="async" 
            width="320" 
            height="180" 
          />
          <span className="wv-badges">
            {item.badges.map((badge) => (
              <span className="wbadge" key={badge}>
                {badge}
              </span>
            ))}
          </span>
          <span className="wv-play">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </span>
        </button>
      ) : item.audioUrl ? null : item.img ? (
        <button
          className="wv-thumb wphoto-thumb"
          type="button"
          aria-label={`Open ${item.title} photo gallery`}
          onClick={() => onGallery(item)}
        >
          <img 
            src={item.img} 
            alt={item.title} 
            loading={isPriority ? "eager" : "lazy"} 
            fetchPriority={isPriority ? "high" : "auto"}
            decoding="async" 
            width="640" 
            height="360" 
          />
          <span className="wv-badges">
            <span className="wbadge">Photography</span>
          </span>
          <span className="wphoto-view" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
          </span>
        </button>
      ) : (
        <div className="wdummy-thumb">
          <span className="wdummy-badge">Sample</span>
          <div className="wdummy-ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: placeholderIcons[item.c] }}
            />
          </div>
          <span className="wdummy-label">{item.label}</span>
        </div>
      )}
      {item.audioUrl && <AudioMiniPlayer item={item} />}
      <div className={`wi${item.audioUrl ? ' waudio-meta' : ''}`}>
        <h3>{item.title}</h3>
        <p>{item.audioUrl ? `${item.sub} · Voiceover Track` : item.sub}</p>
      </div>
    </div>
  );
}

export default function WorkExplorer() {
  const [ui, setUi] = useState(START);
  const [applied, setApplied] = useState({ ...START, limit: PAGE_SIZE });
  const [lightbox, setLightbox] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const gridRef = useRef(null);
  const barRef = useRef(null);
  const sentinelRef = useRef(null);
  const itemRefs = useRef([]);
  const closeRef = useRef(null);
  const galleryCloseRef = useRef(null);
  const lastFocus = useRef(null);
  const popQueue = useRef(null);
  const timer = useRef(0);
  const preloadedCategories = useRef(new Set());

  const { visible, eligible, shown } = computeVisible(applied, applied.limit);

  useEffect(() => {
    setMounted(true);
    return () => clearTimeout(timer.current);
  }, []);

  // Preload resources (audio / images) on category hover for instant load upon click
  const handleCategoryHover = (cat) => {
    if (preloadedCategories.current.has(cat)) return;
    preloadedCategories.current.add(cat);

    // Preload first few images/audio items matching this category
    const matchingItems = workItems.filter(item => (cat === 'all' ? item.c !== 'audio' : item.c === cat)).slice(0, 4);
    matchingItems.forEach(item => {
      if (item.img) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = item.img;
        link.as = 'image';
        document.head.appendChild(link);
      }
      if (item.audioUrl) {
        const audio = new Audio();
        audio.preload = 'metadata';
        audio.src = item.audioUrl;
      }
    });
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => barRef.current.classList.toggle('is-stuck', !entry.isIntersecting),
      { rootMargin: '-71px 0px 0px 0px', threshold: 0 }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, []);

  const realignSticky = () => {
    if (barRef.current.classList.contains('is-stuck')) {
      window.scrollBy(0, Math.ceil(sentinelRef.current.getBoundingClientRect().top - 70));
    }
  };

  const switchView = (apply) => {
    if (prefersReducedMotion()) {
      apply();
      return;
    }
    gridRef.current?.classList.add('is-switching');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      apply();
      gridRef.current?.classList.remove('is-switching');
    }, 120); // Slightly tightened transition timeout for snappier feedback
  };

  const pickCategory = (cat) => {
    realignSticky();
    const next = { cat, tag: 'all', audioType: 'categories', limit: PAGE_SIZE };
    setUi(next);
    startTransition(() => {
      switchView(() => setApplied(next));
    });
  };

  const pickTag = (tag) => {
    setUi((u) => ({ ...u, tag }));
    startTransition(() => {
      switchView(() => setApplied((a) => ({ ...a, tag, limit: PAGE_SIZE })));
    });
  };

  const pickAudioType = (audioType) => {
    realignSticky();
    setUi((u) => ({ ...u, audioType, tag: 'all' }));
    startTransition(() => {
      switchView(() => setApplied((a) => ({ ...a, audioType, tag: 'all', limit: PAGE_SIZE })));
    });
  };

  const loadMore = () => {
    const limit = applied.limit + PAGE_SIZE;
    if (!prefersReducedMotion()) {
      const before = computeVisible(applied, applied.limit).visible;
      const after = computeVisible(applied, limit).visible;
      popQueue.current = after.map((shown, index) => (shown && !before[index] ? index : -1)).filter((index) => index >= 0);
    }
    setApplied((current) => ({ ...current, limit }));
  };

  useLayoutEffect(() => {
    if (!popQueue.current) return;
    popQueue.current.forEach((index, order) => {
      const element = itemRefs.current[index];
      if (!element) return;
      element.style.animationDelay = `${Math.min(order * 0.06, 0.4)}s`;
      element.classList.add('wv-pop');
    });
    popQueue.current = null;
  }, [applied.limit]);

  const openLightbox = (id, title) => {
    lastFocus.current = document.activeElement;
    setLightbox({ id, title });
  };
  const closeLightbox = () => {
    setLightbox(null);
    if (lastFocus.current) lastFocus.current.focus();
  };
  const openGallery = (item) => {
    lastFocus.current = document.activeElement;
    setGallery({ title: item.title, images: item.images, index: 0 });
  };
  const closeGallery = () => {
    setGallery(null);
    if (lastFocus.current) lastFocus.current.focus();
  };
  const moveGallery = (offset) => {
    setGallery((current) => {
      if (!current) return current;
      const index = (current.index + offset + current.images.length) % current.images.length;
      return { ...current, index };
    });
  };

  useEffect(() => {
    document.body.classList.toggle('wlb-open', !!lightbox || !!gallery);
    if (lightbox && closeRef.current) closeRef.current.focus();
    if (gallery && galleryCloseRef.current) galleryCloseRef.current.focus();
    return () => document.body.classList.remove('wlb-open');
  }, [lightbox, gallery]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  useEffect(() => {
    if (!gallery) return;
    const onKey = (event) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') moveGallery(-1);
      if (event.key === 'ArrowRight') moveGallery(1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [gallery]);

  const activeFor = (bar) => {
    if (bar.kind === 'type') return ui.audioType;
    const inUse = ui.cat === bar.for && (!bar.audiotype || bar.audiotype === ui.audioType);
    return inUse ? ui.tag : 'all';
  };

  return (
    <>
      <div id="wstickySentinel" className="wsticky-sentinel" ref={sentinelRef}></div>
      <div className={`wsticky-bar${ui.cat === 'audio' ? ' is-audio-view' : ''}`} id="wstickyBar" ref={barRef}>
        <div className="wfilter" aria-label="Filter portfolio by service">
          {filters.map((f) => (
            <button
              key={f.cat}
              className={`wfbtn${ui.cat === f.cat ? ' active' : ''}`}
              id={f.id || undefined}
              aria-pressed={ui.cat === f.cat}
              onClick={() => pickCategory(f.cat)}
              onMouseEnter={() => handleCategoryHover(f.cat)}
              onFocus={() => handleCategoryHover(f.cat)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      {tagBars.map((bar) => {
        const visibleBar = ui.cat === bar.for && (!bar.audiotype || bar.audiotype === ui.audioType);
        const current = activeFor(bar);
        const buttons = bar.id === 'wtagbarWrap-audio-categories'
          ? audioCategories.map((category) => ({
              text: category.name,
              value: category.name === 'All Categories' ? 'all' : toFilterValue(category.name),
              icon: category.icon,
              count: category.count,
            }))
          : bar.id === 'wtagbarWrap-audio-languages'
            ? audioLanguages.map((language) => ({
                text: language.name,
                value: language.name === 'All Languages' ? 'all' : toFilterValue(language.name),
                icon: language.icon,
                count: language.count,
              }))
            : bar.buttons;
        return (
          <div
            key={bar.id}
            className={`wtagbar-wrap${visibleBar ? ' is-visible' : ''}`}
            id={bar.id}
            data-for={bar.for}
            data-audiotype={bar.audiotype || undefined}
          >
            <div className="wtagbar" id={bar.innerId || undefined} role="group" aria-label={bar.label}>
              {buttons.map((b) => {
                const active = current === b.value;
                return (
                  <button
                    key={b.value}
                    className={`wtagbtn${active ? ' active' : ''}`}
                    type="button"
                    aria-pressed={active}
                    onClick={() => (bar.kind === 'type' ? pickAudioType(b.value) : pickTag(b.value))}
                  >
                    {b.icon && <img src={b.icon} alt="" width="14" height="14" loading="lazy" decoding="async" />}
                    <span>{b.text}</span>
                    {Number.isFinite(b.count) && <span className="wtag-count">({b.count})</span>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className={`wgrid${ui.cat === 'audio' ? ' wgrid-audio' : ''}${isPending ? ' is-pending' : ''}`} id="wgrid" ref={gridRef}>
        {workItems.map((item, i) => (
          <WorkItem
            key={item.trackId || i}
            item={item}
            hidden={!visible[i]}
            onPlay={openLightbox}
            onGallery={openGallery}
            isPriority={i < 4}
            itemRef={(element) => {
              itemRefs.current[i] = element;
            }}
          />
        ))}
      </div>
      <div className="wload-wrap">
        <p className="wload-count" id="wloadcount">
          {eligible ? `Showing ${shown} of ${eligible}` : ''}
        </p>
        <button
          className="btn-o"
          id="wloadmore"
          type="button"
          onClick={loadMore}
          style={shown < eligible ? undefined : { display: 'none' }}
        >
          Load More →
        </button>
      </div>
      {mounted &&
        createPortal(
          <div
            id="wlightbox"
            className={lightbox ? 'is-open' : undefined}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <div className="wlb-inner">
              <button className="wlb-close" type="button" onClick={closeLightbox} aria-label="Close video" ref={closeRef}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <div className="wlb-frame-wrap">
                {lightbox && (
                  <iframe
                    id="wlbFrame"
                    src={`https://www.youtube-nocookie.com/embed/${lightbox.id}?autoplay=1&rel=0`}
                    title={lightbox.title || 'Video player'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                )}
              </div>
              <p className="wlb-title" id="wlbTitle">
                {lightbox ? lightbox.title : ''}
              </p>
            </div>
          </div>,
          document.body
        )}
      {gallery && (
        <div
          className="wphotolightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery.title} gallery`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div className="wphotolightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button className="wphoto-close" type="button" onClick={closeGallery} aria-label="Close photo gallery" ref={galleryCloseRef}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <button className="wphoto-nav is-previous" type="button" onClick={() => moveGallery(-1)} aria-label="Previous photo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <figure className="wphoto-frame">
              <img src={gallery.images[gallery.index]} alt={`${gallery.title}, photo ${gallery.index + 1}`} decoding="async" />
              <figcaption>
                <span>{gallery.title}</span>
                <span>{gallery.index + 1} / {gallery.images.length}</span>
              </figcaption>
            </figure>
            <button className="wphoto-nav is-next" type="button" onClick={() => moveGallery(1)} aria-label="Next photo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}