/* ==========================================================================
   CONTACT
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  function cardTemplate(c, i) {
    return `
    <a class="contact-card reveal reveal-delay-${i + 1}" href="${c.href}" target="_blank" rel="noopener">
      <div class="contact-card__icon"><i class="bi ${c.icon}"></i></div>
      <div>
        <div class="contact-card__label">${c.label}</div>
        <div class="contact-card__value">${c.value}</div>
      </div>
      <i class="bi bi-arrow-up-right contact-card__arrow"></i>
    </a>`;
  }

  function render() {
    const grid = document.getElementById('contact-grid');
    if (!grid) return;
    grid.innerHTML = Portfolio.config.contact.map(cardTemplate).join('');
  }

  Portfolio.contactFx = { init: render };

})(window.Portfolio = window.Portfolio || {});
