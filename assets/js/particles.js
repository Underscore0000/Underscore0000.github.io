/* ==========================================================================
   PARTICLES
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  function init() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas || Portfolio.utils.prefersReducedMotion()) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles, rafId;
    const COUNT = window.innerWidth < 700 ? 34 : 70;

    function resize() {
      const hero = canvas.closest('.hero');
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
    }

    function makeParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.15,
      }));
    }

    function getAccentColor() {
      const styles = getComputedStyle(document.documentElement);
      return styles.getPropertyValue('--accent-rgb').trim() || '255,180,84';
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const rgb = getAccentColor();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.a})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    }

    resize();
    makeParticles();
    draw();

    window.addEventListener('resize', Portfolio.utils.debounce(() => {
      cancelAnimationFrame(rafId);
      resize();
      makeParticles();
      draw();
    }, 200));
  }

  Portfolio.particles = { init };

})(window.Portfolio = window.Portfolio || {});
