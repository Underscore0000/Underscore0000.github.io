/* ==========================================================================
   UTILITIES
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  const qs = (sel, ctx) => (ctx || document).querySelector(sel);
  const qsa = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function debounce(fn, wait) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  function throttle(fn, wait) {
    let last = 0;
    let raf = null;
    return function (...args) {
      const now = performance.now();
      if (now - last >= wait) {
        last = now;
        fn.apply(this, args);
      } else if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = null;
          last = performance.now();
          fn.apply(this, args);
        });
      }
    };
  }

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
  const lerp = (a, b, t) => a + (b - a) * t;
  const isTouch = () => window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Portfolio.utils = { qs, qsa, debounce, throttle, clamp, lerp, isTouch, prefersReducedMotion };

})(window.Portfolio = window.Portfolio || {});
