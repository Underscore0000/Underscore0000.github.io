/* ==========================================================================
   INTERSECTION OBSERVER
   ========================================================================== */
(function (Portfolio) {
  'use strict';
  const { qsa } = Portfolio.utils;

  function initReveal() {
    const targets = qsa('.reveal');
    if (!('IntersectionObserver' in window) || !targets.length) {
      targets.forEach((t) => t.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((t) => io.observe(t));
  }

  function animateCount(el) {
    const raw = el.dataset.count || el.textContent;
    const match = raw.match(/(\d+)/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = raw.replace(match[1], '');
    const dur = 1200;
    const start = performance.now();

    function step(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const nums = qsa('.stat-card__num');
    const bars = qsa('.skill-bar__fill');
    if (!('IntersectionObserver' in window)) {
      nums.forEach(animateCount);
      bars.forEach((b) => { b.style.width = b.dataset.level + '%'; });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.classList.contains('stat-card__num')) {
            animateCount(entry.target);
          } else if (entry.target.classList.contains('skill-bar__fill')) {
            entry.target.style.width = entry.target.dataset.level + '%';
          }
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((n) => io.observe(n));
    bars.forEach((b) => io.observe(b));
  }

  Portfolio.observerFx = {
    init() {
      initReveal();
      initCounters();
    },
  };

})(window.Portfolio = window.Portfolio || {});
