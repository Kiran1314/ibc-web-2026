'use client';

import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { applyStaggerDelays, playImmediate, resetReveals } from '@/lib/reveal';

// Services page tabs. Tab labels/icons come in as props; each panel's content is server-rendered
// and passed in, so this component only owns which panel is showing.
export default function ServicesTabs({ tabs, panels }) {
  const [active, setActive] = useState(tabs[0].id);
  const tabListRef = useRef(null);

  const runPanelEffects = (id) => {
    const panel = document.getElementById(`sp-${id}`);
    if (!panel) return;
    applyStaggerDelays(panel);
    const text = panel.querySelector('.sphdr>div:first-child');
    if (text) playImmediate(text);
    const grid = panel.querySelector('.sfeat-grid');
    if (grid) resetReveals(grid);
  };

  const scrollPanelToTop = (id) => {
    const panel = document.getElementById(`sp-${id}`);
    if (!panel) return;
    const stickyOffset = 70 + (tabListRef.current?.offsetHeight || 0);
    const panelPaddingTop = Number.parseFloat(window.getComputedStyle(panel).paddingTop) || 0;
    const top = window.scrollY + panel.getBoundingClientRect().top + panelPaddingTop - stickyOffset;
    window.scrollTo({ top, behavior: 'auto' });
  };

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash.startsWith('service-')) return;
      const id = hash.slice('service-'.length);
      if (!tabs.some((tab) => tab.id === id)) return;
      setActive(id);
      requestAnimationFrame(() => {
        runPanelEffects(id);
        scrollPanelToTop(id);
      });
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [tabs]);

  const select = (id) => {
    flushSync(() => setActive(id));
    runPanelEffects(id);
    scrollPanelToTop(id);
  };

  return (
    <>
      <div className="stabs reveal" role="tablist" ref={tabListRef} aria-label="Service categories">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`service-${tab.id}`}
            className={`stab${active === tab.id ? ' active' : ''}`}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`sp-${tab.id}`}
            onClick={() => select(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`spanel${active === tab.id ? ' active' : ''}`}
          id={`sp-${tab.id}`}
          role="tabpanel"
          tabIndex={0}
        >
          {panels[tab.id]}
        </div>
      ))}
    </>
  );
}
