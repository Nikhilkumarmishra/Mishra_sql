/* Deliberately independent of msql_theme and all authentication storage. */
(() => {
  let preference = 'system';
  try {
    const saved = localStorage.getItem('aw-new-theme');
    if (['light', 'dark', 'system'].includes(saved)) preference = saved;
  } catch (_) { /* Private browsing/storage restrictions: use system. */ }
  const root = document.documentElement;
  root.dataset.awPreference = preference;
  root.dataset.awTheme = preference === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : preference;
  document.querySelector('meta[name="theme-color"]').content =
    root.dataset.awTheme === 'dark' ? '#111511' : '#fafaf7';
})();
