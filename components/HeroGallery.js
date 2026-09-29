'use client';

import { useEffect, useRef, useState } from 'react';

const PHOTOS = [
  'broadcast-studio.jpg', 'camera-viewfinder.jpg', 'conference-panel.jpg', 'control-room.jpg',
  'crane-lift.jpg', 'exhibition-gimbal-2.jpg', 'gallery-interview.jpg', 'gear-closeup.jpg',
  'gimbal-exhibition.jpg', 'green-screen.jpg', 'port-industrial.jpg', 'studio-mic.jpg',
  'sunset-silhouette.jpg', 'vocal-booth.jpg', 'vocal-performance.jpg',
];
const POSITIONS = { 'vocal-booth.jpg': 'center 20%', 'vocal-performance.jpg': 'center 25%' };

// px per ms: normal speed, and the slower speed while hovering the strip
const CRUISE = 0.0718;
const SLOW = 0.0472;

function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Card({ file, hidden }) {
  const pos = POSITIONS[file];
  const style = { '--hero-img': `url('/assets/images/opt/hero/${file}')` };
  if (pos) style['--hero-pos'] = pos;
  return <div className="ibc-hero-card" aria-hidden={hidden ? 'true' : undefined} style={style}></div>;
}

// Home hero photo strip: a fresh random order on every page load, shown twice back to back so the
// scroll loops seamlessly. The scroll runs on the compositor (Web Animations), so main-thread
// work can't make it stutter, and it eases down to a slower pace while hovered.
export default function HeroGallery() {
  const [photos, setPhotos] = useState(null);
  const trackRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    setPhotos(shuffle(PHOTOS));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const gallery = galleryRef.current;
    if (!photos || !track || !gallery) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !track.animate) return;

    const ratio = SLOW / CRUISE;
    let anim = null;
    let rate = 1;
    let target = 1;
    let easing = false;
    let last = 0;
    let raf = 0;
    let resizeTimer;

    const build = () => {
      const cards = track.querySelectorAll('.ibc-hero-card');
      const loop = cards.length > 1 ? cards[Math.floor(cards.length / 2)].offsetLeft - cards[0].offsetLeft : 0;
      if (!loop) return;
      const duration = loop / CRUISE;
      let progress = 0;
      if (anim) {
        progress = anim.effect.getComputedTiming().progress || 0;
        anim.cancel();
      }
      anim = track.animate(
        [{ transform: 'translate3d(0,0,0)' }, { transform: `translate3d(${-loop}px,0,0)` }],
        { duration, iterations: Infinity, easing: 'linear' }
      );
      anim.currentTime = progress * duration;
      anim.playbackRate = rate;
    };
    const step = (time) => {
      const dt = last ? Math.min(time - last, 50) : 16;
      last = time;
      rate += (target - rate) * (1 - Math.exp(-dt / 380));
      if (Math.abs(target - rate) < 0.002) {
        rate = target;
        easing = false;
        last = 0;
      }
      if (anim) anim.playbackRate = rate;
      if (easing) raf = requestAnimationFrame(step);
    };
    const setTarget = (value) => {
      target = value;
      if (!easing) {
        easing = true;
        last = 0;
        raf = requestAnimationFrame(step);
      }
    };
    const enter = () => {
      track.classList.add('is-inspecting');
      setTarget(ratio);
    };
    const leave = () => {
      track.classList.remove('is-inspecting');
      setTarget(1);
    };
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    };

    gallery.addEventListener('pointerenter', enter);
    gallery.addEventListener('pointerleave', leave);
    window.addEventListener('resize', onResize);
    build();

    return () => {
      gallery.removeEventListener('pointerenter', enter);
      gallery.removeEventListener('pointerleave', leave);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(raf);
      if (anim) anim.cancel();
      track.classList.remove('is-inspecting');
    };
  }, [photos]);

  return (
    <div className="ibc-hero-gallery" role="region" aria-label="IBC Studio work gallery" ref={galleryRef}>
      <div className="ibc-hero-track" ref={trackRef}>
        {photos && photos.map((file) => <Card file={file} key={file} />)}
        {photos && photos.map((file) => <Card file={file} hidden key={`${file}-copy`} />)}
      </div>
    </div>
  );
}
