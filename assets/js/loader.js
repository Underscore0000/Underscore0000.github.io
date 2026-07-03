/* ==========================================================================
   LOADER
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  function init() {
    const loader = document.getElementById('loader');
    const pctEl = document.getElementById('loader-pct');
    if (!loader) return;

    let pct = 0;
    const tick = setInterval(() => {
      pct = Math.min(100, pct + Math.round(Math.random() * 18) + 4);
      if (pctEl) pctEl.textContent = pct + '%';
      if (pct >= 100) clearInterval(tick);
    }, 130);

    window.addEventListener('load', () => {
      setTimeout(() => {
        pct = 100;
        if (pctEl) pctEl.textContent = '100%';
        loader.classList.add('is-hidden');
        document.body.classList.remove('is-loading');
        document.body.classList.add('is-loaded');
      }, 650);
    });
  }

  Portfolio.loader = { init };

})(window.Portfolio = window.Portfolio || {});
