/* ==========================================================================
   PROJECTS
   ========================================================================== */
(function (Portfolio) {
  'use strict';
  const { qs, qsa } = Portfolio.utils;

  function cardTemplate(p, i) {
    return `
    <article class="project-card panel reveal reveal-delay-${(i % 6) + 1}" data-category="${p.category}">
      <div class="project-card__glow"></div>
      <div class="project-card__media">
        <img src="${p.image}" alt="${p.name} project screenshot" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <div class="fallback-mark" style="display:none;">
          <i class="bi bi-terminal" style="font-size:28px;"></i>
        </div>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.name}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <div class="project-card__badges">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-card__footer">
          <span class="tag" style="border-color:transparent;padding-left:0;">
            <span class="dot" style="margin-right:6px;"></span>${p.category}
          </span>
          <a class="project-card__link" href="${p.repo}" target="_blank" rel="noopener">
            <i class="bi bi-github"></i> Code
          </a>
        </div>
      </div>
    </article>`;
  }

  function render() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = Portfolio.projects.map(cardTemplate).join('');
  }

  function initFilters() {
    const filterBar = document.getElementById('projects-filters');
    if (!filterBar) return;
    const buttons = qsa('.filter-btn', filterBar);

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const cat = btn.dataset.filter;
        qsa('.project-card').forEach((card) => {
          const match = cat === 'all' || card.dataset.category === cat;
          card.classList.toggle('is-hidden', !match);
        });
      });
    });
  }

  Portfolio.projectsFx = {
    init() {
      render();
      initFilters();
    },
  };

})(window.Portfolio = window.Portfolio || {});
