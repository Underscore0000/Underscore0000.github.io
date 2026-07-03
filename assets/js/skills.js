(function (Portfolio) {
  'use strict';

  function cardTemplate(s, i) {
    return `
    <div class="skill-card reveal reveal-delay-${(i % 6) + 1}">
      <div class="skill-card__top">
        <i class="bi ${s.icon} skill-card__icon"></i>
        <span class="skill-card__level mono">${s.level}%</span>
      </div>
      <div class="skill-card__name">${s.name}</div>
      <div class="skill-bar"><div class="skill-bar__fill" data-level="${s.level}"></div></div>
    </div>`;
  }

  function render() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    grid.innerHTML = Portfolio.skills.map(cardTemplate).join('');
  }

  Portfolio.skillsFx = { init: render };

})(window.Portfolio = window.Portfolio || {});