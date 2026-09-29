'use client';

import { useState } from 'react';

export default function Faq({ items }) {
  const [open, setOpen] = useState(-1);
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div className={`fi${open === i ? ' open' : ''}`} key={item.q}>
          <button
            className="fq"
            type="button"
            aria-controls={`faq-answer-${i + 1}`}
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.q}
            <span className="fic">+</span>
          </button>
          <div className="fa" id={`faq-answer-${i + 1}`}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
