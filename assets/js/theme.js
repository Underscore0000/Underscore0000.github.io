/* ==========================================================================
   THEME
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* storage unavailable — ignore */ }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'light' ? '#f5f3ee' : '#0a0e0f');
    }
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  function toggle() {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setStoredTheme(next);
  }

  function init() {
    const stored = getStoredTheme();
    applyTheme(stored || getSystemTheme());

    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);

    // react to system changes only if the user hasn't chosen manually
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!getStoredTheme()) applyTheme(e.matches ? 'light' : 'dark');
    });
  }

  Portfolio.theme = { init, toggle, applyTheme };

})(window.Portfolio = window.Portfolio || {});
