/* ==========================================================================
   TYPING ANIMATION
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  function init() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const { words, typeSpeed, eraseSpeed, holdMs } = Portfolio.config.typing;

    if (Portfolio.utils.prefersReducedMotion()) {
      el.textContent = words[0];
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const word = words[wordIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          return setTimeout(tick, holdMs);
        }
      } else {
        charIndex--;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(tick, deleting ? eraseSpeed : typeSpeed);
    }

    setTimeout(tick, 500);
  }

  Portfolio.typing = { init };

})(window.Portfolio = window.Portfolio || {});
