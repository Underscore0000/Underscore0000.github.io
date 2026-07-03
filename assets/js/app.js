/* ==========================================================================
   APP
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  function boot() {
    Portfolio.loader.init();
    Portfolio.theme.init();
    Portfolio.navbar.init();
    Portfolio.typing.init();
    Portfolio.scrollFx.init();
    Portfolio.particles.init();
    Portfolio.cursor.init();

    Portfolio.projectsFx.init();
    Portfolio.skillsFx.init();
    Portfolio.contactFx.init();

    Portfolio.animationsFx.init();
    Portfolio.observerFx.init();

    document.getElementById('year').textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})(window.Portfolio = window.Portfolio || {});
