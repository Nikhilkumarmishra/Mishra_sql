/* Route-local enhancements only. No auth, scoring, progress or engine code. */
(() => {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const selector = document.getElementById('aw-theme');
  const applyTheme = (preference) => {
    root.dataset.awPreference = preference;
    root.dataset.awTheme = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    selector.value = preference;
    selector.title = `Colour theme: ${preference}`;
    document.querySelector('meta[name="theme-color"]').content =
      root.dataset.awTheme === 'dark' ? '#111511' : '#fafaf7';
  };
  applyTheme(root.dataset.awPreference || 'system');
  selector.addEventListener('change', () => {
    applyTheme(selector.value);
    try { localStorage.setItem('aw-new-theme', selector.value); } catch (_) { /* Session-only preference. */ }
  });
  media.addEventListener('change', () => {
    if (root.dataset.awPreference === 'system') applyTheme('system');
  });
  window.addEventListener('storage', event => {
    if (event.key === 'aw-new-theme' || event.key === null) {
      applyTheme(['light', 'dark'].includes(event.newValue) ? event.newValue : 'system');
    }
  });

  const menuButton = document.querySelector('.aw-menu-button');
  const menu = document.getElementById('aw-mobile-nav');
  const setMenu = (open, restoreFocus = false) => {
    menu.hidden = !open;
    document.querySelector('.aw-header').classList.toggle('aw-menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    setMenu(false);
    if (link.hash && link.pathname === location.pathname) {
      const destination = document.querySelector(link.hash);
      if (destination) {
        if (!destination.hasAttribute('tabindex')) destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  document.querySelector('.aw-header').addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      if (!menu.hidden && !document.querySelector('.aw-header').contains(document.activeElement)) setMenu(false);
    });
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
    if (event.matches && !menu.hidden) setMenu(false, menu.contains(document.activeElement));
  });

  // Read-only excerpts of the existing questions. Tests compare these outputs
  // against their original seeds using the real sql.js engine. No simulated Run.
  const examples = {
    select: {
      title: 'Show All Employee Names', difficulty: 'Easy',
      description: 'Start with the essentials. Retrieve names from a table.',
      query: 'SELECT name\nFROM employees;',
      columns: ['name'], rows: [['Alice'], ['Bob'], ['Carol']],
      url: '/problems/26/show-all-employee-names',
    },
    aggregate: {
      title: 'Top Spending Departments', difficulty: 'Easy',
      description: 'Go a step further. Turn individual rows into a summary.',
      query: 'SELECT department, SUM(salary) AS total_salary\nFROM employees\nGROUP BY department\nORDER BY total_salary DESC;',
      columns: ['department', 'total_salary'],
      rows: [['Engineering', 285000], ['Marketing', 214000], ['HR', 116000]],
      url: '/problems/01/top-spending-departments',
    },
    join: {
      title: 'Customers And Their Orders', difficulty: 'Easy',
      description: 'Connect the pieces. Find answers across two tables.',
      query: 'SELECT c.customer_name, o.amount\nFROM orders o JOIN customers c\n  ON c.customer_id = o.customer_id\nORDER BY o.order_id;',
      columns: ['customer_name', 'amount'], rows: [['Alice', 5000], ['Bob', 7000], ['Alice', 3000]],
      url: '/problems/48/customers-and-their-orders',
    },
  };
  const tabs = [...document.querySelectorAll('[data-example]')];
  const code = document.getElementById('aw-example-code');
  const panel = document.getElementById('aw-exercise');
  const table = document.getElementById('aw-result');
  const keywords = /\b(SELECT|FROM|SUM|AS|GROUP BY|ORDER BY|DESC|JOIN|ON)\b/g;
  function showExample(tab) {
    const example = examples[tab.dataset.example];
    tabs.forEach(button => {
      const selected = button === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    document.getElementById('aw-example-title').textContent = example.title;
    document.getElementById('aw-example-description').textContent = example.description;
    document.getElementById('aw-difficulty').textContent = example.difficulty;
    document.getElementById('aw-example-link').href = example.url;
    code.replaceChildren();
    example.query.split('\n').forEach(line => {
      const row = document.createElement('span');
      row.className = 'aw-code-line';
      line.split(keywords).forEach((part, index) => {
        const token = document.createElement('span');
        token.textContent = part;
        if (index % 2) token.className = 'aw-syntax';
        row.append(token);
      });
      code.append(row);
    });
    table.caption.textContent = `Expected output for ${example.title}`;
    const heading = table.tHead.rows[0];
    heading.replaceChildren();
    example.columns.forEach(column => {
      const cell = document.createElement('th');
      cell.scope = 'col'; cell.textContent = column; heading.append(cell);
    });
    const body = table.tBodies[0];
    body.replaceChildren();
    example.rows.forEach(values => {
      const row = body.insertRow();
      values.forEach(value => { row.insertCell().textContent = value; });
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showExample(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); tabs[next].focus(); showExample(tabs[next]);
    });
  });
})();
