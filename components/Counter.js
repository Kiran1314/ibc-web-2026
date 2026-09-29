'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION = 1700;

// Stat number that counts up from 0 when scrolled into view. "1K" style values are expanded to the
// full number (1000); non-numeric values (e.g. "UAE") are rendered as-is.
export default function Counter({ value, suffix, ...rest }) {
  const m = value.match(/^([\d.,]+)(k)?$/i);
  const numeric = !!m;
  let target = 0;
  if (numeric) {
    target = parseFloat(m[1].replace(/,/g, ''));
    if (m[2]) target *= 1000;
    target = Math.round(target);
  }

  const ref = useRef(null);
  const [text, setText] = useState(numeric ? String(target) : value);

  useEffect(() => {
    if (!numeric) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setText('0');
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const frame = (now) => {
          const p = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setText(String(Math.round(eased * target)));
          if (p < 1) raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      },
      { threshold: 0.4, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [numeric, target]);

  return (
    <span className="snum" ref={ref} {...rest}>
      {numeric ? <span className="snum-count">{text}</span> : text}
      <span className="a">{suffix}</span>
    </span>
  );
}
