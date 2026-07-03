/* ==========================================================================
   NAVBAR
   ========================================================================== */
(function (Portfolio) {
  'use strict';
  const { qs, qsa, throttle } = Portfolio.utils;

  function init() {
    const navbar = qs('.navbar');
    const burger = qs('.nav-burger');
    const mobile = qs('.nav-mobile');
    const scrim = qs('.nav-scrim');
    const links = qsa('.nav-link');
    const sections = qsa('main .section[id]');

    if (!navbar) return;

    const onScroll = throttle(() => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 24);
      updateActive();
    }, 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function openMobile() {
      mobile.classList.add('is-open');
      scrim.classList.add('is-visible');
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMobile() {
      mobile.classList.remove('is-open');
      scrim.classList.remove('is-visible');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    if (burger) {
      burger.addEventListener('click', () => {
        burger.classList.contains('is-open') ? closeMobile() : openMobile();
      });
    }
    if (scrim) scrim.addEventListener('click', closeMobile);

    // smooth scroll for every in-page link
    qsa('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = qs(id);
        if (!target) return;
        e.preventDefault();
        closeMobile();
        const offset = 76;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        history.replaceState(null, '', id);
      });
    });

    function updateActive() {
      let currentId = sections[0] && sections[0].id;
      const scrollPos = window.scrollY + 120;
      sections.forEach((sec) => {
        if (sec.offsetTop <= scrollPos) currentId = sec.id;
      });
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + currentId);
      });
    }

    // keyboard: Escape closes mobile menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobile();
    });
  }

  Portfolio.navbar = { init };

})(window.Portfolio = window.Portfolio || {});
