// ================================================================
//  MishraSQL — app.js
//  All question data lives in the QUESTIONS array below.
//  To add a new question, copy the template at the bottom of
//  this comment block and paste it as a new entry in the array.
//
//  QUESTION TEMPLATE — copy from here ─────────────────────────
//
//  {
//    id: 3,                         // next number in sequence (0-based)
//    num: "04",                     // display number e.g. "04"
//    title: "Your Question Title",
//    difficulty: "Easy",            // "Easy" | "Medium" | "Hard"
//    tags: ["GROUP BY", "SUM"],     // concepts shown as tags
//
//    // Problem description shown on the left panel.
//    // Supports <strong>, <code>, <p> HTML tags.
//    desc: `<p>Describe the problem here. Use <strong>bold</strong>
//            and <code>column_name</code> for emphasis.</p>`,
//
//    // Schema: one key per table. col = column name, type = SQL type,
//    // note = "" or "pk" (marks it as Primary Key).
//    schema: {
//      your_table: [
//        { col: "id",     type: "INTEGER", note: "pk" },
//        { col: "name",   type: "TEXT",    note: "" },
//        { col: "amount", type: "INTEGER", note: "" },
//      ]
//    },
//
//    // SQL to create and populate the default database for Run.
//    seed: `CREATE TABLE your_table(id INTEGER, name TEXT, amount INTEGER);
//  INSERT INTO your_table VALUES (1,'Alice',500),(2,'Bob',300);`,
//
//    // Sample output shown in the problem panel (just for display).
//    example: {
//      cols: ["name", "total"],
//      rows: [["Alice", 500], ["Bob", 300]]
//    },
//
//    // Hint shown when user clicks "Show hint".
//    // Supports <strong> tags.
//    hint: "Use <strong>GROUP BY name</strong> and SUM(amount).",
//
//    // Test cases — the Submit button runs ALL of these.
//    // Add as many as you want. Each has:
//    //   name  — label shown in the results panel
//    //   seed  — null means use the default seed above;
//    //           provide a full seed string to test with different data
//    //   check — a function that receives the result rows as an array
//    //           of objects and returns true (pass) or false (fail)
//    testCases: [
//      {
//        name: "Correct rows returned",
//        seed: null,
//        check: (rows) => rows.length === 2
//      },
//      {
//        name: "Alice total is correct",
//        seed: null,
//        check: (rows) => {
//          const r = rows.find(r => r.name === "Alice");
//          return r && Number(r.total) === 500;
//        }
//      },
//      {
//        name: "Works with extra data",
//        seed: `CREATE TABLE your_table(id INTEGER, name TEXT, amount INTEGER);
//  INSERT INTO your_table VALUES (1,'Alice',500),(2,'Bob',300),(3,'Carol',400);`,
//        check: (rows) => rows.length === 3
//      },
//    ]
//  },
//
// ─────────────────────────────────────────────────────────────
// ================================================================

const QUESTIONS = [

  // ── QUESTION 1 ───────────────────────────────────────────────
  {
    id: 0,
    num: "01",
    title: "Top Spending Departments",
    difficulty: "Easy",
    tags: ["GROUP BY", "SUM", "ORDER BY"],
    desc: `<p>You are given an <strong>employees</strong> table that records each employee's department and salary.</p>
<p>Write a query to find the <strong>total salary expenditure per department</strong>, ordered from highest to lowest total salary.</p>
<p>Return columns: <code>department</code>, <code>total_salary</code>.</p>`,
    schema: {
      employees: [
        { col: "emp_id",     type: "INTEGER", note: "pk" },
        { col: "name",       type: "TEXT",    note: "" },
        { col: "department", type: "TEXT",    note: "" },
        { col: "salary",     type: "INTEGER", note: "" },
      ]
    },
    seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice','Engineering',95000),(2,'Bob','Engineering',88000),
(3,'Carol','Marketing',72000),(4,'Dave','Marketing',68000),
(5,'Eve','HR',55000),(6,'Frank','Engineering',102000),
(7,'Grace','HR',61000),(8,'Hank','Marketing',74000);`,
    example: {
      cols: ["department", "total_salary"],
      rows: [["Engineering", 285000], ["Marketing", 214000], ["HR", 116000]]
    },
    hint: "Use <strong>GROUP BY department</strong>, wrap salary in <strong>SUM()</strong> aliased as total_salary, then <strong>ORDER BY total_salary DESC</strong>.",
    testCases: [
      {
        name: "All 3 departments returned",
        seed: null,
        check: (rows) => {
          const d = rows.map(r => r.department);
          return d.includes("Engineering") && d.includes("Marketing") && d.includes("HR") && rows.length === 3;
        }
      },
      {
        name: "Engineering total = 285,000",
        seed: null,
        check: (rows) => {
          const e = rows.find(r => r.department === "Engineering");
          return e && Number(e.total_salary) === 285000;
        }
      },
      {
        name: "Results ordered high → low",
        seed: null,
        check: (rows) => {
          for (let i = 1; i < rows.length; i++)
            if (Number(rows[i].total_salary) > Number(rows[i-1].total_salary)) return false;
          return rows.length > 0;
        }
      },
      {
        name: "New 'Sales' department handled correctly",
        seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice','Engineering',95000),(2,'Bob','Engineering',88000),
(3,'Carol','Marketing',72000),(4,'Dave','Marketing',68000),
(5,'Eve','HR',55000),(6,'Frank','Engineering',102000),
(7,'Grace','HR',61000),(8,'Hank','Marketing',74000),
(9,'Ivy','Sales',80000),(10,'Jack','Sales',77000);`,
        check: (rows) => {
          const s = rows.find(r => r.department === "Sales");
          return s && Number(s.total_salary) === 157000;
        }
      }
    ]
  },

  // ── QUESTION 2 ───────────────────────────────────────────────
  {
    id: 1,
    num: "02",
    title: "High-Volume Product Categories",
    difficulty: "Medium",
    tags: ["GROUP BY", "HAVING", "SUM", "ORDER BY"],
    desc: `<p>You have an <strong>orders</strong> table that records product purchases.</p>
<p>Write a query to find all product categories where the <strong>total quantity ordered exceeds 100</strong>.</p>
<p>Return <code>category</code> and <code>total_quantity</code>, sorted <strong>alphabetically</strong> by category.</p>`,
    schema: {
      orders: [
        { col: "order_id", type: "INTEGER", note: "pk" },
        { col: "product",  type: "TEXT",    note: "" },
        { col: "category", type: "TEXT",    note: "" },
        { col: "quantity", type: "INTEGER", note: "" },
        { col: "price",    type: "REAL",    note: "" },
      ]
    },
    seed: `CREATE TABLE orders(order_id INTEGER,product TEXT,category TEXT,quantity INTEGER,price REAL);
INSERT INTO orders VALUES
(1,'Laptop','Electronics',30,999.99),(2,'Phone','Electronics',45,699.99),
(3,'Tablet','Electronics',28,449.99),(4,'Shirt','Clothing',60,29.99),
(5,'Pants','Clothing',55,49.99),(6,'Jacket','Clothing',20,89.99),
(7,'Desk','Furniture',15,299.99),(8,'Chair','Furniture',22,199.99),
(9,'Headphones','Electronics',12,149.99),(10,'Socks','Clothing',80,9.99);`,
    example: {
      cols: ["category", "total_quantity"],
      rows: [["Clothing", 215], ["Electronics", 115]]
    },
    hint: "Use <strong>GROUP BY category</strong>, <strong>SUM(quantity) AS total_quantity</strong>, then filter with <strong>HAVING SUM(quantity) > 100</strong>. ORDER BY category.",
    testCases: [
      {
        name: "Only categories above 100 returned",
        seed: null,
        check: (rows) => rows.every(r => Number(r.total_quantity) > 100) && rows.length === 2
      },
      {
        name: "Furniture (37 total) excluded",
        seed: null,
        check: (rows) => !rows.some(r => r.category === "Furniture")
      },
      {
        name: "Sorted alphabetically A→Z",
        seed: null,
        check: (rows) => {
          for (let i = 1; i < rows.length; i++)
            if (rows[i].category < rows[i-1].category) return false;
          return rows.length > 0;
        }
      },
      {
        name: "New 'Stationery' category (120 qty) included",
        seed: `CREATE TABLE orders(order_id INTEGER,product TEXT,category TEXT,quantity INTEGER,price REAL);
INSERT INTO orders VALUES
(1,'Laptop','Electronics',30,999.99),(2,'Phone','Electronics',45,699.99),
(3,'Tablet','Electronics',28,449.99),(4,'Shirt','Clothing',60,29.99),
(5,'Pants','Clothing',55,49.99),(6,'Jacket','Clothing',20,89.99),
(7,'Desk','Furniture',15,299.99),(8,'Chair','Furniture',22,199.99),
(9,'Headphones','Electronics',12,149.99),(10,'Socks','Clothing',80,9.99),
(11,'Pen','Stationery',50,1.99),(12,'Notebook','Stationery',70,4.99);`,
        check: (rows) => rows.some(r => r.category === "Stationery" && Number(r.total_quantity) === 120)
      }
    ]
  },

  // ── QUESTION 3 ───────────────────────────────────────────────
  {
    id: 2,
    num: "03",
    title: "Consistent High Performers",
    difficulty: "Medium",
    tags: ["GROUP BY", "HAVING", "AVG", "COUNT"],
    desc: `<p>The <strong>sales_reps</strong> table tracks monthly sales amounts for each representative.</p>
<p>Find all reps who have made sales in <strong>at least 3 different months</strong> AND whose <strong>average monthly sales exceed 5,000</strong>.</p>
<p>Return: <code>name</code>, <code>active_months</code> (count of months), <code>avg_sales</code> (rounded to 2 decimal places). Order by avg_sales <strong>descending</strong>.</p>`,
    schema: {
      sales_reps: [
        { col: "rep_id", type: "INTEGER", note: "" },
        { col: "name",   type: "TEXT",    note: "" },
        { col: "month",  type: "TEXT",    note: "e.g. '2024-01'" },
        { col: "sales",  type: "INTEGER", note: "" },
      ]
    },
    seed: `CREATE TABLE sales_reps(rep_id INTEGER,name TEXT,month TEXT,sales INTEGER);
INSERT INTO sales_reps VALUES
(1,'Alice','2024-01',6000),(1,'Alice','2024-02',7500),(1,'Alice','2024-03',5500),(1,'Alice','2024-04',8000),
(2,'Bob','2024-01',3000),(2,'Bob','2024-02',4500),
(3,'Carol','2024-01',5200),(3,'Carol','2024-02',6100),(3,'Carol','2024-03',5800),
(4,'Dave','2024-01',2000),(4,'Dave','2024-02',2500),(4,'Dave','2024-03',3000),(4,'Dave','2024-04',2800),
(5,'Eve','2024-01',9000),(5,'Eve','2024-02',8500),(5,'Eve','2024-03',7200);`,
    example: {
      cols: ["name", "active_months", "avg_sales"],
      rows: [["Eve", 3, "8233.33"], ["Alice", 4, "6750.00"], ["Carol", 3, "5700.00"]]
    },
    hint: "GROUP BY rep_id, name. Use <strong>COUNT(month)</strong> for active_months, <strong>ROUND(AVG(sales),2)</strong> for avg_sales. Filter: <strong>HAVING COUNT(month) >= 3 AND AVG(sales) > 5000</strong>.",
    testCases: [
      {
        name: "Alice, Carol, Eve returned (3 reps)",
        seed: null,
        check: (rows) => {
          const n = rows.map(r => r.name);
          return n.includes("Alice") && n.includes("Carol") && n.includes("Eve") && rows.length === 3;
        }
      },
      {
        name: "Bob (2 months) and Dave (low avg) excluded",
        seed: null,
        check: (rows) => !rows.some(r => r.name === "Bob" || r.name === "Dave")
      },
      {
        name: "Ordered by avg_sales descending",
        seed: null,
        check: (rows) => {
          for (let i = 1; i < rows.length; i++)
            if (Number(rows[i].avg_sales) > Number(rows[i-1].avg_sales)) return false;
          return rows.length > 0;
        }
      },
      {
        name: "New qualifying rep 'Frank' included",
        seed: `CREATE TABLE sales_reps(rep_id INTEGER,name TEXT,month TEXT,sales INTEGER);
INSERT INTO sales_reps VALUES
(1,'Alice','2024-01',6000),(1,'Alice','2024-02',7500),(1,'Alice','2024-03',5500),(1,'Alice','2024-04',8000),
(2,'Bob','2024-01',3000),(2,'Bob','2024-02',4500),
(3,'Carol','2024-01',5200),(3,'Carol','2024-02',6100),(3,'Carol','2024-03',5800),
(4,'Dave','2024-01',2000),(4,'Dave','2024-02',2500),(4,'Dave','2024-03',3000),(4,'Dave','2024-04',2800),
(5,'Eve','2024-01',9000),(5,'Eve','2024-02',8500),(5,'Eve','2024-03',7200),
(6,'Frank','2024-01',6000),(6,'Frank','2024-02',6500),(6,'Frank','2024-03',7000);`,
        check: (rows) => rows.some(r => r.name === "Frank")
      }
    ]
  },

  // ── ADD MORE QUESTIONS HERE ───────────────────────────────────
  // Copy the template from the top of this file and paste it here.
  // The site will automatically pick it up — nav pills, landing
  // page cards, progress bar, and everything else updates itself.
  // ─────────────────────────────────────────────────────────────

]; // ← end of QUESTIONS array


// ================================================================
//  ENGINE — do not edit below unless you know what you're doing
// ================================================================

let SQL = null;
let currentQ = 0;
let solvedSet = new Set();

// ── INIT ─────────────────────────────────────────────────────────
async function init() {
  try {
    SQL = await initSqlJs({
      locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${f}`
    });
    document.getElementById('loadingScreen').style.display = 'none';
    buildPills();
    buildLandingCards();
    updateHeroCount();
    showLanding();
  } catch(e) {
    document.getElementById('loadingScreen').innerHTML =
      `<div style="color:#e55;font-family:monospace;font-size:14px;padding:24px">
        Failed to load SQL engine: ${e.message}
      </div>`;
  }
}

// ── LANDING PAGE BUILDERS ─────────────────────────────────────────
function updateHeroCount() {
  const el = document.getElementById('heroStatCount');
  if (el) el.textContent = QUESTIONS.length;
}

function buildLandingCards() {
  const wrap = document.getElementById('landingQCards');
  if (!wrap) return;
  wrap.innerHTML = QUESTIONS.map((q, i) => `
    <div class="q-card" onclick="showApp(${i})">
      <div class="q-card-num">${q.num}</div>
      <div class="q-card-title">${q.title}</div>
      <div class="q-card-topic">${q.tags.join(' · ')}</div>
      <div class="badge ${q.difficulty.toLowerCase()}">${q.difficulty}</div>
      <div class="q-card-arrow">→</div>
    </div>
  `).join('');
}

// ── NAV PILLS ─────────────────────────────────────────────────────
function buildPills() {
  const wrap = document.getElementById('qPillsWrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-pill';
    btn.id = `pill-${i}`;
    btn.textContent = `${q.num}  ${q.title}`;
    btn.onclick = () => renderQuestion(i);
    wrap.appendChild(btn);
  });
}

// ── NAVIGATION ────────────────────────────────────────────────────
function showLanding() {
  document.getElementById('landing-page').classList.add('active');
  document.getElementById('app-page').classList.remove('active');
}

function showApp(qIdx) {
  if (qIdx !== undefined) currentQ = qIdx;
  document.getElementById('landing-page').classList.remove('active');
  document.getElementById('app-page').classList.add('active');
  renderQuestion(currentQ);
}

function scrollToFeatures() {
  document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
}

function scrollToQuestions() {
  document.getElementById('questions-section').scrollIntoView({ behavior: 'smooth' });
}

// ── RENDER QUESTION ───────────────────────────────────────────────
function renderQuestion(idx) {
  currentQ = idx;
  const q = QUESTIONS[idx];

  // Update pills
  document.querySelectorAll('.q-pill').forEach((p, i) => {
    p.className = 'q-pill'
      + (solvedSet.has(i) ? ' solved' : '')
      + (i === idx ? ' active' : '');
  });

  // Difficulty badge
  const badge = document.getElementById('diffBadge');
  badge.textContent = q.difficulty;
  badge.className = `diff-badge diff-${q.difficulty.toLowerCase()}`;

  // Reset output area
  document.getElementById('sqlEditor').value = '';
  document.getElementById('outputBody').innerHTML = `
    <div class="empty-state">
      <div class="es-icon">◈</div>
      Run your query to see results
    </div>`;
  document.getElementById('outputStatus').textContent = '';
  document.getElementById('outputLabel').textContent = 'Output';
  document.getElementById('tcWrap').style.display = 'none';
  document.getElementById('solvedBanner').className = 'solved-banner';

  // Build schema HTML
  const schemaHTML = Object.entries(q.schema).map(([tbl, cols]) => `
    <div class="schema-box">
      <div class="schema-header">⊞ ${tbl}</div>
      <table class="schema-tbl">
        <tr><th>Column</th><th>Type</th><th></th></tr>
        ${cols.map(c => `
          <tr>
            <td>${c.col}</td>
            <td class="col-type">${c.type}</td>
            <td>${c.note === 'pk' ? '<span class="col-pk">PK</span>' : ''}</td>
          </tr>`).join('')}
      </table>
    </div>`).join('');

  // Build example output HTML
  const exHTML = `
    <div class="example-section">
      <div class="example-label">Expected output (sample data)</div>
      <div class="example-wrap">
        <table class="ex-table">
          <tr>${q.example.cols.map(c => `<th>${c}</th>`).join('')}</tr>
          ${q.example.rows.map(r => `<tr>${r.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}
        </table>
      </div>
    </div>`;

  // Build tags HTML
  const tagsHTML = q.tags.map(t => `<span class="prob-tag">${t}</span>`).join('');

  // Render left panel
  document.getElementById('leftPanel').innerHTML = `
    <div class="prob-header">
      <div class="prob-num">Problem ${q.num}</div>
      <div class="prob-title">${q.title}</div>
      <div class="prob-tags">${tagsHTML}</div>
    </div>
    <div class="prob-body">
      ${q.desc}
      ${schemaHTML}
      ${exHTML}
      <div class="hint-wrap">
        <button class="hint-btn" onclick="toggleHint()">💡 Show hint</button>
        <div class="hint-text" id="hintText">${q.hint}</div>
      </div>
    </div>`;
}

function toggleHint() {
  document.getElementById('hintText').classList.toggle('open');
}

// ── SQL HELPERS ───────────────────────────────────────────────────
function execQuery(seed, query) {
  const db = new SQL.Database();
  db.run(seed);
  const res = db.exec(query);
  db.close();
  return res;
}

function toRows(result) {
  if (!result || result.length === 0) return [];
  const { columns, values } = result[0];
  return values.map(v => {
    const obj = {};
    columns.forEach((c, i) => obj[c] = v[i]);
    return obj;
  });
}

function renderTable(result) {
  if (!result || result.length === 0)
    return '<div class="empty-state" style="padding:12px 0">Query returned 0 rows.</div>';
  const { columns, values } = result[0];
  const ths = columns.map(c => `<th>${c}</th>`).join('');
  const trs = values.map(v =>
    `<tr>${v.map(cell =>
      `<td>${cell === null ? '<em style="color:var(--hint)">NULL</em>' : cell}</td>`
    ).join('')}</tr>`
  ).join('');
  return `<div class="res-table-wrap"><table class="res-table"><tr>${ths}</tr>${trs}</table></div>`;
}

// ── RUN ───────────────────────────────────────────────────────────
function runQuery() {
  if (!SQL) { showOutputErr('SQL engine not ready yet.'); return; }
  const query = document.getElementById('sqlEditor').value.trim();
  if (!query) { showOutputErr('Write a SQL query first.'); return; }

  const q = QUESTIONS[currentQ];
  document.getElementById('outputLabel').textContent = 'Output';
  document.getElementById('tcWrap').style.display = 'none';

  try {
    const res = execQuery(q.seed, query);
    const count = res[0]?.values?.length ?? 0;
    const status = document.getElementById('outputStatus');
    status.textContent = `${count} row${count !== 1 ? 's' : ''}`;
    status.className = 'output-status-text ost-ok';
    document.getElementById('outputBody').innerHTML = renderTable(res);
  } catch(e) {
    showOutputErr(e.message);
  }
}

// ── SUBMIT ────────────────────────────────────────────────────────
function submitQuery() {
  if (!SQL) return;
  const query = document.getElementById('sqlEditor').value.trim();
  if (!query) { showOutputErr('Write a SQL query first.'); return; }

  const q = QUESTIONS[currentQ];
  document.getElementById('outputLabel').textContent = 'Submission';
  document.getElementById('outputBody').innerHTML = '';

  let allPass = true;
  const results = [];

  q.testCases.forEach(tc => {
    const seed = tc.seed || q.seed;
    try {
      const res = execQuery(seed, query);
      const rows = toRows(res);
      const pass = tc.check(rows);
      allPass = allPass && pass;
      results.push({ name: tc.name, pass, err: null });
    } catch(e) {
      allPass = false;
      results.push({ name: tc.name, pass: false, err: e.message });
    }
  });

  const passed = results.filter(r => r.pass).length;
  const statusEl = document.getElementById('outputStatus');
  statusEl.textContent = `${passed}/${results.length} passed`;
  statusEl.className = `output-status-text ${allPass ? 'ost-pass' : 'ost-fail'}`;

  document.getElementById('tcList').innerHTML = results.map(r => `
    <div class="tc-row">
      <div class="tc-dot ${r.pass ? 'pass' : 'fail'}"></div>
      <div class="tc-name">${r.name}</div>
      <div class="tc-res ${r.pass ? 'pass' : 'fail'}">${r.pass ? '✓ Passed' : (r.err ? '⚠ Error' : '✗ Failed')}</div>
    </div>
    ${r.err ? `<div class="tc-err">${r.err}</div>` : ''}
  `).join('');

  document.getElementById('tcWrap').style.display = 'block';

  if (allPass) {
    solvedSet.add(currentQ);
    document.getElementById('solvedBanner').className = 'solved-banner show';
    const pill = document.getElementById(`pill-${currentQ}`);
    if (pill) pill.classList.add('solved');
    updateProgress();
  }
}

// ── UTILS ─────────────────────────────────────────────────────────
function updateProgress() {
  const pct = (solvedSet.size / QUESTIONS.length) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

function resetEditor() {
  document.getElementById('sqlEditor').value = '';
  document.getElementById('sqlEditor').focus();
}

function showOutputErr(msg) {
  document.getElementById('outputStatus').textContent = '';
  document.getElementById('outputBody').innerHTML = `<div class="err-block">${msg}</div>`;
}

// ── START ─────────────────────────────────────────────────────────
init();
