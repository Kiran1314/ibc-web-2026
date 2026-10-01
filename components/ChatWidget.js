'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Go from '@/components/Go';

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Chat state lives on <body> (`chat-open`) because the CSS animates the panel and fab from there.
  useEffect(() => {
    document.body.classList.toggle('chat-open', open);
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest('.chat-panel,.chat-fab')) return;
      setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <>
    <div className="chat-panel" aria-label="IBC Studio chat panel">
      <div className="chat-head">
        <div className="chat-avatar">
          IBC
        </div>
        <div>
          <h4>
            IBC Studio Assistant
          </h4>
          <p>
            Tell us what you need and we will guide you to the right team.
          </p>
        </div>
      </div>
      <div className="chat-body">
        <div className="chat-msg">
          <p>
            Hello. How can we help with your project today?
          </p>
        </div>
        <div className="chat-actions">
          <Go as="button" to="/services" className="chat-chip">
            I need production services
          </Go>
          <Go as="button" to="/ibc-intelligence" className="chat-chip">
            I want AI consultancy
          </Go>
          <Go as="button" to="/contact" className="chat-chip">
            I want to request a quote
          </Go>
        </div>
        <a className="btn-p chat-wa" href="https://wa.me/971559958905" target="_blank" rel="noopener">
          Continue on WhatsApp →
        </a>
        <p className="chat-note">
          WhatsApp: +971 55 995 8905
        </p>
      </div>
    </div>
      <button
        type="button"
        className="chat-fab"
        title="Chat with us on WhatsApp"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open IBC Studio chat"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </button>
    </>
  );
}
