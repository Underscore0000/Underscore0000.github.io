/* ==========================================================================
   CUSTOM CURSOR 
   ========================================================================== */
(function (Portfolio) {
  'use strict';
  const { qsa, isTouch, prefersReducedMotion } = Portfolio.utils;

  function init() {
    if (isTouch() || prefersReducedMotion()) return;

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function loop() {
      dotX = mouseX;
      dotY = mouseY;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    const interactiveSel = 'a, button, .btn, .project-card, .skill-card, .contact-card, input, textarea';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(interactiveSel)) ring.classList.add('is-active');
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(interactiveSel)) ring.classList.remove('is-active');
    });
  }

  Portfolio.cursor = { init };

})(window.Portfolio = window.Portfolio || {});
