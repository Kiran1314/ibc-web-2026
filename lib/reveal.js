// Scroll-reveal engine (client only). Elements that should fade up already carry the `reveal`
// class in the server-rendered markup; this module adds `in-view` as they scroll into view.

const STAGGER_GRIDS = ['.ahwrap', '.ihg', '.ics', '.itm', '.iwk', '.srv-grid', '.tgrid', '.sfeat-grid', '.bgrid', '.cpgrid', '.client-stat-grid', '.stats-bar', '.itgs'];

let observer = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -160px 0px' }
    );
  }
  return observer;
}

// Stagger delay resets every `row` items instead of climbing across a whole grid, so long lists
// (like the 140+ client badges) still cascade row by row. Column count comes from layout width,
// which is 0 for anything display:none (inactive services tabs) — so this is re-run when a panel
// becomes visible.
export function applyStaggerDelays(scope = document) {
  STAGGER_GRIDS.forEach((sel) => {
    scope.querySelectorAll(sel).forEach((parent) => {
      if (!parent.clientWidth) return;
      const first = parent.firstElementChild;
      const cols = Math.max(1, Math.round(parent.clientWidth / (first ? first.offsetWidth || 160 : 160)));
      [...parent.children]
        .filter((child) => child.classList.contains('reveal'))
        .forEach((child, i) => child.style.setProperty('--reveal-delay', `${(i % cols) * 0.055}s`));
    });
  });
}

export function resetReveals(scope = document) {
  const io = getObserver();
  scope.querySelectorAll('.reveal').forEach((el) => {
    el.classList.remove('in-view');
    io.unobserve(el);
    io.observe(el);
  });
}

// For content that should react to a direct click rather than scrolling into view.
export function playImmediate(el) {
  getObserver().unobserve(el);
  el.classList.remove('in-view');
  void el.offsetWidth;
  requestAnimationFrame(() => el.classList.add('in-view'));
}

export function initReveal() {
  applyStaggerDelays();
  resetReveals(document);
  return () => {
    if (observer) observer.disconnect();
    observer = null;
  };
}
