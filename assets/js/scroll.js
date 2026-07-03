/* ==========================================================================
   SCROLL PROGRESS + BACK TO TOP
   ========================================================================== */
(function (Portfolio) {
  'use strict';
  const { throttle } = Portfolio.utils;

  function init() {
    const bar = document.getElementById('scroll-progress');
    const backTop = document.getElementById('back-to-top');

    const onScroll = throttle(() => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      if (bar) bar.style.width = pct + '%';
      if (backTop) backTop.classList.toggle('is-visible', scrollTop > 480);
    }, 60);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backTop) {
      backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  Portfolio.scrollFx = { init };

})(window.Portfolio = window.Portfolio || {});
