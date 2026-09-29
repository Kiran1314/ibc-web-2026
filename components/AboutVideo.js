'use client';

import { useRef, useState } from 'react';

const VIDEO_URL = 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FAUSpage_main%2FIBC%202026%20Services%20video%2010th%20august_1.webm?alt=media&token=73d07e33-1c41-4d9d-9c72-51460dd1ca98';

export default function AboutVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="avwrap about-video reveal">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="IBC Studio services film"
      />
      <button
        className="about-video-sound"
        type="button"
        onClick={toggleSound}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        aria-pressed={!isMuted}
      >
        {isMuted ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 10v4h4l5 4V6l-5 4H4z" />
            <path d="m16 9 5 6m0-6-5 6" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 10v4h4l5 4V6l-5 4H4z" />
            <path d="M16 9a4 4 0 0 1 0 6m2-9a7 7 0 0 1 0 12" />
          </svg>
        )}
        <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
      </button>
    </div>
  );
}
