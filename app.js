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
{
  id: 3,
  num: "04",
  title: "Cities With Multiple Customers",
  difficulty: "Easy",
  tags: ["GROUP BY", "COUNT", "HAVING"],

  desc: `<p>You are given a <strong>customers</strong> table containing customer city information.</p>
         <p>Write a query to find cities having <strong>more than 1 customer</strong>.</p>
         <p>Return columns: <code>city</code>, <code>customer_count</code>.</p>`,

  schema: {
    customers: [
      { col: "customer_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "city", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE customers(customer_id INTEGER,name TEXT,city TEXT);
INSERT INTO customers VALUES
(1,'Alice','Delhi'),
(2,'Bob','Mumbai'),
(3,'Carol','Delhi'),
(4,'David','Pune'),
(5,'Eve','Mumbai');`,

  example: {
    cols: ["city", "customer_count"],
    rows: [["Delhi",2],["Mumbai",2]]
  },

  hint: "Use <strong>GROUP BY city</strong> and filter using <strong>HAVING COUNT(*) > 1</strong>.",

  testCases: [
    {
      name: "Two cities returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Delhi count correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.city === "Delhi");
        return r && Number(r.customer_count) === 2;
      }
    },
    {
      name: "Mumbai count correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.city === "Mumbai");
        return r && Number(r.customer_count) === 2;
      }
    },
  ]
},

{
  id: 4,
  num: "05",
  title: "Total Revenue By Product",
  difficulty: "Easy",
  tags: ["GROUP BY", "SUM", "ORDER BY"],

  desc: `<p>You are given a <strong>sales</strong> table containing product sales data.</p>
         <p>Write a query to calculate the <strong>total revenue</strong> generated by each product.</p>
         <p>Return columns: <code>product_name</code>, <code>total_revenue</code>.</p>`,

  schema: {
    sales: [
      { col: "sale_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE sales(sale_id INTEGER,product_name TEXT,amount INTEGER);
INSERT INTO sales VALUES
(1,'Laptop',50000),
(2,'Phone',30000),
(3,'Laptop',45000),
(4,'Tablet',20000),
(5,'Phone',25000);`,

  example: {
    cols: ["product_name", "total_revenue"],
    rows: [["Laptop",95000],["Phone",55000],["Tablet",20000]]
  },

  hint: "Use <strong>SUM(amount)</strong> with <strong>GROUP BY product_name</strong>.",

  testCases: [
    {
      name: "All products returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Laptop revenue correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.product_name === "Laptop");
        return r && Number(r.total_revenue) === 95000;
      }
    },
    {
      name: "Phone revenue correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.product_name === "Phone");
        return r && Number(r.total_revenue) === 55000;
      }
    },
  ]
},

{
  id: 5,
  num: "06",
  title: "Employees Earning Above Average Salary",
  difficulty: "Medium",
  tags: ["AVG", "SUBQUERY", "WHERE"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to find employees earning <strong>more than the average salary</strong>.</p>
         <p>Return columns: <code>name</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice',50000),
(2,'Bob',40000),
(3,'Carol',70000),
(4,'David',30000),
(5,'Eve',80000);`,

  example: {
    cols: ["name", "salary"],
    rows: [["Carol",70000],["Eve",80000]]
  },

  hint: "Use a <strong>subquery</strong> with <strong>AVG(salary)</strong> inside the WHERE clause.",

  testCases: [
    {
      name: "Correct number of employees returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Carol included",
      seed: null,
      check: (rows) => rows.some(r => r.name === "Carol")
    },
    {
      name: "Eve salary correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.name === "Eve");
        return r && Number(r.salary) === 80000;
      }
    },
  ]
},

{
  id: 6,
  num: "07",
  title: "Rank Employees By Salary",
  difficulty: "Medium",
  tags: ["WINDOW FUNCTION", "RANK", "ORDER BY"],

  desc: `<p>You are given an <strong>employees</strong> table containing employee salaries.</p>
         <p>Write a query to assign a salary rank to each employee using the <strong>RANK()</strong> window function.</p>
         <p>Higher salary should get a better rank.</p>
         <p>Return columns: <code>name</code>, <code>salary</code>, <code>salary_rank</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice',90000),
(2,'Bob',75000),
(3,'Carol',90000),
(4,'David',60000),
(5,'Eve',50000);`,

  example: {
    cols: ["name", "salary", "salary_rank"],
    rows: [
      ["Alice",90000,1],
      ["Carol",90000,1],
      ["Bob",75000,3],
      ["David",60000,4],
      ["Eve",50000,5]
    ]
  },

  hint: "Use <strong>RANK() OVER(ORDER BY salary DESC)</strong>.",

  testCases: [
    {
      name: "All employees ranked",
      seed: null,
      check: (rows) => rows.length === 5
    },
    {
      name: "Top salary rank is 1",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.name === "Alice");
        return r && Number(r.salary_rank) === 1;
      }
    },
    {
      name: "Same salary gets same rank",
      seed: null,
      check: (rows) => {
        const a = rows.find(r => r.name === "Alice");
        const c = rows.find(r => r.name === "Carol");
        return a && c && Number(a.salary_rank) === Number(c.salary_rank);
      }
    },
  ]
},

{
  id: 7,
  num: "08",
  title: "Running Total Of Daily Sales",
  difficulty: "Medium",
  tags: ["WINDOW FUNCTION", "SUM OVER", "ORDER BY"],

  desc: `<p>You are given a <strong>sales</strong> table containing daily sales data.</p>
         <p>Write a query to calculate the <strong>running total</strong> of sales ordered by date.</p>
         <p>Return columns: <code>sale_date</code>, <code>amount</code>, <code>running_total</code>.</p>`,

  schema: {
    sales: [
      { col: "sale_id", type: "INTEGER", note: "pk" },
      { col: "sale_date", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE sales(sale_id INTEGER,sale_date TEXT,amount INTEGER);
INSERT INTO sales VALUES
(1,'2025-01-01',1000),
(2,'2025-01-02',1500),
(3,'2025-01-03',2000),
(4,'2025-01-04',1200);`,

  example: {
    cols: ["sale_date", "amount", "running_total"],
    rows: [
      ["2025-01-01",1000,1000],
      ["2025-01-02",1500,2500],
      ["2025-01-03",2000,4500],
      ["2025-01-04",1200,5700]
    ]
  },

  hint: "Use <strong>SUM(amount) OVER(ORDER BY sale_date)</strong>.",

  testCases: [
    {
      name: "All rows returned",
      seed: null,
      check: (rows) => rows.length === 4
    },
    {
      name: "Final running total correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.sale_date === "2025-01-04");
        return r && Number(r.running_total) === 5700;
      }
    },
    {
      name: "Second row running total correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.sale_date === "2025-01-02");
        return r && Number(r.running_total) === 2500;
      }
    },
  ]
},

{
  id: 8,
  num: "09",
  title: "Previous Month Sales Comparison",
  difficulty: "Hard",
  tags: ["WINDOW FUNCTION", "LAG", "ORDER BY"],

  desc: `<p>You are given a <strong>monthly_sales</strong> table containing monthly revenue data.</p>
         <p>Write a query to display the current month's sales along with the <strong>previous month's sales</strong> using the <strong>LAG()</strong> function.</p>
         <p>Return columns: <code>month</code>, <code>sales</code>, <code>previous_month_sales</code>.</p>`,

  schema: {
    monthly_sales: [
      { col: "month_id", type: "INTEGER", note: "pk" },
      { col: "month", type: "TEXT", note: "" },
      { col: "sales", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE monthly_sales(month_id INTEGER,month TEXT,sales INTEGER);
INSERT INTO monthly_sales VALUES
(1,'January',5000),
(2,'February',7000),
(3,'March',6500),
(4,'April',8000);`,

  example: {
    cols: ["month", "sales", "previous_month_sales"],
    rows: [
      ["January",5000,null],
      ["February",7000,5000],
      ["March",6500,7000],
      ["April",8000,6500]
    ]
  },

  hint: "Use <strong>LAG(sales) OVER(ORDER BY month_id)</strong>.",

  testCases: [
    {
      name: "All months returned",
      seed: null,
      check: (rows) => rows.length === 4
    },
    {
      name: "February previous sales correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.month === "February");
        return r && Number(r.previous_month_sales) === 5000;
      }
    },
    {
      name: "First month previous sales is null",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.month === "January");
        return r && (r.previous_month_sales === null || r.previous_month_sales === undefined);
      }
    },
  ]
},

{
  id: 9,
  num: "10",
  title: "Top Scoring Student In Each Class",
  difficulty: "Medium",
  tags: ["WINDOW FUNCTION", "ROW_NUMBER", "PARTITION BY"],

  desc: `<p>You are given a <strong>students</strong> table containing student marks.</p>
         <p>Write a query to find the <strong>highest scoring student</strong> from each class using a window function.</p>
         <p>Return columns: <code>class</code>, <code>name</code>, <code>marks</code>.</p>`,

  schema: {
    students: [
      { col: "student_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "class", type: "TEXT", note: "" },
      { col: "marks", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE students(student_id INTEGER,name TEXT,class TEXT,marks INTEGER);
INSERT INTO students VALUES
(1,'Alice','10A',88),
(2,'Bob','10A',95),
(3,'Carol','10B',91),
(4,'David','10B',85),
(5,'Eve','10C',97);`,

  example: {
    cols: ["class", "name", "marks"],
    rows: [
      ["10A","Bob",95],
      ["10B","Carol",91],
      ["10C","Eve",97]
    ]
  },

  hint: "Use <strong>ROW_NUMBER() OVER(PARTITION BY class ORDER BY marks DESC)</strong>.",

  testCases: [
    {
      name: "One student per class returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Bob selected for 10A",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.class === "10A");
        return r && r.name === "Bob";
      }
    },
    {
      name: "Highest marks for 10B correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.class === "10B");
        return r && Number(r.marks) === 91;
      }
    },
  ]
},

{
  id: 10,
  num: "11",
  title: "Dense Rank Products By Price",
  difficulty: "Medium",
  tags: ["WINDOW FUNCTION", "DENSE_RANK", "ORDER BY"],

  desc: `<p>You are given a <strong>products</strong> table containing product prices.</p>
         <p>Write a query to assign a <strong>dense rank</strong> based on product price in descending order.</p>
         <p>Products with the same price should receive the same rank without skipping numbers.</p>
         <p>Return columns: <code>product_name</code>, <code>price</code>, <code>price_rank</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,price INTEGER);
INSERT INTO products VALUES
(1,'Laptop',80000),
(2,'Phone',50000),
(3,'Tablet',50000),
(4,'Monitor',30000),
(5,'Keyboard',10000);`,

  example: {
    cols: ["product_name", "price", "price_rank"],
    rows: [
      ["Laptop",80000,1],
      ["Phone",50000,2],
      ["Tablet",50000,2],
      ["Monitor",30000,3],
      ["Keyboard",10000,4]
    ]
  },

  hint: "Use <strong>DENSE_RANK() OVER(ORDER BY price DESC)</strong>.",

  testCases: [
    {
      name: "All products ranked",
      seed: null,
      check: (rows) => rows.length === 5
    },
    {
      name: "Same prices get same rank",
      seed: null,
      check: (rows) => {
        const p1 = rows.find(r => r.product_name === "Phone");
        const p2 = rows.find(r => r.product_name === "Tablet");
        return p1 && p2 && Number(p1.price_rank) === Number(p2.price_rank);
      }
    },
    {
      name: "Ranks are dense",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.product_name === "Monitor");
        return r && Number(r.price_rank) === 3;
      }
    },
  ]
},

{
  id: 11,
  num: "12",
  title: "Moving Average Of Temperatures",
  difficulty: "Hard",
  tags: ["WINDOW FUNCTION", "AVG OVER", "ROWS BETWEEN"],

  desc: `<p>You are given a <strong>weather</strong> table containing daily temperatures.</p>
         <p>Write a query to calculate the <strong>3-day moving average</strong> of temperature.</p>
         <p>The moving average should include the current day and the previous 2 days.</p>
         <p>Return columns: <code>day</code>, <code>temperature</code>, <code>moving_avg</code>.</p>`,

  schema: {
    weather: [
      { col: "day_id", type: "INTEGER", note: "pk" },
      { col: "day", type: "TEXT", note: "" },
      { col: "temperature", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE weather(day_id INTEGER,day TEXT,temperature INTEGER);
INSERT INTO weather VALUES
(1,'Mon',30),
(2,'Tue',33),
(3,'Wed',36),
(4,'Thu',39),
(5,'Fri',42);`,

  example: {
    cols: ["day", "temperature", "moving_avg"],
    rows: [
      ["Mon",30,30],
      ["Tue",33,31.5],
      ["Wed",36,33],
      ["Thu",39,36],
      ["Fri",42,39]
    ]
  },

  hint: "Use <strong>AVG(temperature) OVER(ORDER BY day_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)</strong>.",

  testCases: [
    {
      name: "All days returned",
      seed: null,
      check: (rows) => rows.length === 5
    },
    {
      name: "Wednesday moving average correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.day === "Wed");
        return r && Number(r.moving_avg) === 33;
      }
    },
    {
      name: "Friday moving average correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.day === "Fri");
        return r && Number(r.moving_avg) === 39;
      }
    },
  ]
},

{
  id: 12,
  num: "13",
  title: "Employees Earning More Than Average Salary",
  difficulty: "Medium",
  tags: ["SUBQUERY", "AVG", "WHERE"],

  desc: `<p>You are given an <strong>employees</strong> table containing employee salaries.</p>
         <p>Write a query to find employees earning <strong>more than the average salary</strong>.</p>
         <p>Return columns: <code>name</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice',50000),
(2,'Bob',40000),
(3,'Carol',70000),
(4,'David',30000),
(5,'Eve',80000);`,

  example: {
    cols: ["name", "salary"],
    rows: [["Carol",70000],["Eve",80000]]
  },

  hint: "Use a <strong>subquery</strong> with <strong>AVG(salary)</strong> inside the WHERE clause.",

  testCases: [
    {
      name: "Correct employees returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Carol included",
      seed: null,
      check: (rows) => rows.some(r => r.name === "Carol")
    },
    {
      name: "Eve salary correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.name === "Eve");
        return r && Number(r.salary) === 80000;
      }
    },
  ]
},

{
  id: 13,
  num: "14",
  title: "Products Priced Above Category Average",
  difficulty: "Hard",
  tags: ["SUBQUERY", "CORRELATED SUBQUERY", "AVG"],

  desc: `<p>You are given a <strong>products</strong> table containing category and price information.</p>
         <p>Write a query to find products priced <strong>above the average price of their category</strong>.</p>
         <p>Return columns: <code>product_name</code>, <code>category</code>, <code>price</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "category", type: "TEXT", note: "" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,category TEXT,price INTEGER);
INSERT INTO products VALUES
(1,'iPhone','Electronics',900),
(2,'Laptop','Electronics',1200),
(3,'Chair','Furniture',200),
(4,'Table','Furniture',500),
(5,'Sofa','Furniture',700);`,

  example: {
    cols: ["product_name", "category", "price"],
    rows: [["Laptop","Electronics",1200],["Sofa","Furniture",700]]
  },

  hint: "Use a <strong>correlated subquery</strong> with AVG(price) filtered by category.",

  testCases: [
    {
      name: "Two products returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Laptop included",
      seed: null,
      check: (rows) => rows.some(r => r.product_name === "Laptop")
    },
    {
      name: "Sofa price correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.product_name === "Sofa");
        return r && Number(r.price) === 700;
      }
    },
  ]
},

{
  id: 14,
  num: "15",
  title: "Customers With Highest Order Amount",
  difficulty: "Medium",
  tags: ["SUBQUERY", "MAX", "WHERE"],

  desc: `<p>You are given an <strong>orders</strong> table containing customer order details.</p>
         <p>Write a query to find customers who placed the <strong>highest order amount</strong>.</p>
         <p>Return columns: <code>customer_name</code>, <code>amount</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,customer_name TEXT,amount INTEGER);
INSERT INTO orders VALUES
(1,'Alice',5000),
(2,'Bob',7000),
(3,'Carol',7000),
(4,'David',4500);`,

  example: {
    cols: ["customer_name", "amount"],
    rows: [["Bob",7000],["Carol",7000]]
  },

  hint: "Use a subquery with <strong>MAX(amount)</strong> inside the WHERE clause.",

  testCases: [
    {
      name: "Top customers returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Bob included",
      seed: null,
      check: (rows) => rows.some(r => r.customer_name === "Bob")
    },
    {
      name: "All returned amounts are highest",
      seed: null,
      check: (rows) => rows.every(r => Number(r.amount) === 7000)
    },
  ]
},

{
  id: 15,
  num: "16",
  title: "Departments With More Employees Than HR",
  difficulty: "Hard",
  tags: ["SUBQUERY", "GROUP BY", "HAVING"],

  desc: `<p>You are given an <strong>employees</strong> table containing department information.</p>
         <p>Write a query to find departments having <strong>more employees than the HR department</strong>.</p>
         <p>Return columns: <code>department</code>, <code>employee_count</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT);
INSERT INTO employees VALUES
(1,'Alice','HR'),
(2,'Bob','HR'),
(3,'Carol','Engineering'),
(4,'David','Engineering'),
(5,'Eve','Engineering'),
(6,'Frank','Sales');`,

  example: {
    cols: ["department", "employee_count"],
    rows: [["Engineering",3]]
  },

  hint: "First calculate HR employee count using a subquery, then compare using HAVING.",

  testCases: [
    {
      name: "Engineering returned",
      seed: null,
      check: (rows) => rows.length === 1 && rows[0].department === "Engineering"
    },
    {
      name: "Engineering count correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.department === "Engineering");
        return r && Number(r.employee_count) === 3;
      }
    },
    {
      name: "HR not included",
      seed: null,
      check: (rows) => !rows.some(r => r.department === "HR")
    },
  ]
},

{
  id: 16,
  num: "17",
  title: "Second Highest Salary",
  difficulty: "Medium",
  tags: ["SUBQUERY", "MAX", "NESTED QUERY"],

  desc: `<p>You are given an <strong>employees</strong> table containing employee salaries.</p>
         <p>Write a query to find the <strong>second highest salary</strong>.</p>
         <p>Return columns: <code>name</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice',90000),
(2,'Bob',70000),
(3,'Carol',85000),
(4,'David',60000);`,

  example: {
    cols: ["name", "salary"],
    rows: [["Carol",85000]]
  },

  hint: "Use nested subqueries with <strong>MAX(salary)</strong>.",

  testCases: [
    {
      name: "One employee returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Carol returned",
      seed: null,
      check: (rows) => rows[0].name === "Carol"
    },
    {
      name: "Second highest salary correct",
      seed: null,
      check: (rows) => Number(rows[0].salary) === 85000
    },
  ]
},

{
  id: 17,
  num: "18",
  title: "Average Salary By Department Using CTE",
  difficulty: "Medium",
  tags: ["CTE", "AVG", "GROUP BY"],

  desc: `<p>You are given an <strong>employees</strong> table containing department and salary information.</p>
         <p>Write a query using a <strong>CTE</strong> to calculate the average salary for each department.</p>
         <p>Return columns: <code>department</code>, <code>avg_salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice','Engineering',90000),
(2,'Bob','Engineering',70000),
(3,'Carol','HR',60000),
(4,'David','HR',50000),
(5,'Eve','Sales',80000);`,

  example: {
    cols: ["department", "avg_salary"],
    rows: [["Engineering",80000],["HR",55000],["Sales",80000]]
  },

  hint: "Create a CTE first, then calculate <strong>AVG(salary)</strong> using <strong>GROUP BY department</strong>.",

  testCases: [
    {
      name: "All departments returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Engineering average correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.department === "Engineering");
        return r && Number(r.avg_salary) === 80000;
      }
    },
    {
      name: "HR average correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.department === "HR");
        return r && Number(r.avg_salary) === 55000;
      }
    },
  ]
},

{
  id: 18,
  num: "19",
  title: "Top Customer By Total Spending",
  difficulty: "Medium",
  tags: ["CTE", "SUM", "ORDER BY"],

  desc: `<p>You are given an <strong>orders</strong> table containing customer order data.</p>
         <p>Write a query using a <strong>CTE</strong> to find the customer with the <strong>highest total spending</strong>.</p>
         <p>Return columns: <code>customer_name</code>, <code>total_spent</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,customer_name TEXT,amount INTEGER);
INSERT INTO orders VALUES
(1,'Alice',5000),
(2,'Bob',7000),
(3,'Alice',3000),
(4,'Carol',4000),
(5,'Bob',2000);`,

  example: {
    cols: ["customer_name", "total_spent"],
    rows: [["Bob",9000]]
  },

  hint: "Use a CTE to calculate total spending per customer, then sort in descending order.",

  testCases: [
    {
      name: "One customer returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Bob returned",
      seed: null,
      check: (rows) => rows[0].customer_name === "Bob"
    },
    {
      name: "Total spending correct",
      seed: null,
      check: (rows) => Number(rows[0].total_spent) === 9000
    },
  ]
},


{
  id: 19,
  num: "20",
  title: "Employees Above Department Average",
  difficulty: "Hard",
  tags: ["CTE", "AVG", "JOIN"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query using a <strong>CTE</strong> to find employees earning more than their department's average salary.</p>
         <p>Return columns: <code>name</code>, <code>department</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice','Engineering',90000),
(2,'Bob','Engineering',70000),
(3,'Carol','HR',60000),
(4,'David','HR',50000),
(5,'Eve','Sales',85000),
(6,'Frank','Sales',75000);`,

  example: {
    cols: ["name", "department", "salary"],
    rows: [["Alice","Engineering",90000],["Carol","HR",60000],["Eve","Sales",85000]]
  },

  hint: "Create a CTE with department average salary and join it back with employees table.",

  testCases: [
    {
      name: "Correct number of employees returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Alice included",
      seed: null,
      check: (rows) => rows.some(r => r.name === "Alice")
    },
    {
      name: "Frank not included",
      seed: null,
      check: (rows) => !rows.some(r => r.name === "Frank")
    },
  ]
},

{
  id: 20,
  num: "21",
  title: "Monthly Sales Summary Using CTE",
  difficulty: "Medium",
  tags: ["CTE", "SUM", "GROUP BY"],

  desc: `<p>You are given a <strong>sales</strong> table containing monthly sales records.</p>
         <p>Write a query using a <strong>CTE</strong> to calculate total monthly sales.</p>
         <p>Return columns: <code>month</code>, <code>total_sales</code>.</p>`,

  schema: {
    sales: [
      { col: "sale_id", type: "INTEGER", note: "pk" },
      { col: "month", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE sales(sale_id INTEGER,month TEXT,amount INTEGER);
INSERT INTO sales VALUES
(1,'January',5000),
(2,'January',7000),
(3,'February',4000),
(4,'February',6000),
(5,'March',8000);`,

  example: {
    cols: ["month", "total_sales"],
    rows: [["January",12000],["February",10000],["March",8000]]
  },

  hint: "Use a CTE with <strong>GROUP BY month</strong> and <strong>SUM(amount)</strong>.",

  testCases: [
    {
      name: "Three months returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "January sales correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.month === "January");
        return r && Number(r.total_sales) === 12000;
      }
    },
    {
      name: "February sales correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.month === "February");
        return r && Number(r.total_sales) === 10000;
      }
    },
  ]
},

{
  id: 21,
  num: "22",
  title: "Second Highest Product Price Using CTE",
  difficulty: "Hard",
  tags: ["CTE", "DENSE_RANK", "WINDOW FUNCTION"],

  desc: `<p>You are given a <strong>products</strong> table containing product prices.</p>
         <p>Write a query using a <strong>CTE</strong> to find the product with the <strong>second highest price</strong>.</p>
         <p>Return columns: <code>product_name</code>, <code>price</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,price INTEGER);
INSERT INTO products VALUES
(1,'Laptop',90000),
(2,'Phone',70000),
(3,'Tablet',85000),
(4,'Monitor',50000);`,

  example: {
    cols: ["product_name", "price"],
    rows: [["Tablet",85000]]
  },

  hint: "Use a CTE with <strong>DENSE_RANK()</strong> ordered by price descending.",

  testCases: [
    {
      name: "One product returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Tablet returned",
      seed: null,
      check: (rows) => rows[0].product_name === "Tablet"
    },
    {
      name: "Price correct",
      seed: null,
      check: (rows) => Number(rows[0].price) === 85000
    },
  ]
},

{
  id: 22,
  num: "23",
  title: "Top 2 Highest Paid Employees Per Department",
  difficulty: "Hard",
  tags: ["CTE", "WINDOW FUNCTION", "ROW_NUMBER"],

  desc: `<p>You are given an <strong>employees</strong> table containing department and salary details.</p>
         <p>Write a query using a <strong>CTE</strong> and window function to find the <strong>top 2 highest paid employees</strong> in each department.</p>
         <p>Return columns: <code>department</code>, <code>name</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice','Engineering',95000),
(2,'Bob','Engineering',85000),
(3,'Carol','Engineering',75000),
(4,'David','HR',70000),
(5,'Eve','HR',65000),
(6,'Frank','HR',50000);`,

  example: {
    cols: ["department", "name", "salary"],
    rows: [
      ["Engineering","Alice",95000],
      ["Engineering","Bob",85000],
      ["HR","David",70000],
      ["HR","Eve",65000]
    ]
  },

  hint: "Use a CTE with <strong>ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC)</strong>.",

  testCases: [
    {
      name: "Four rows returned",
      seed: null,
      check: (rows) => rows.length === 4
    },
    {
      name: "Top Engineering employee correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.department === "Engineering" && r.name === "Alice");
        return r && Number(r.salary) === 95000;
      }
    },
    {
      name: "Lowest ranked employees excluded",
      seed: null,
      check: (rows) => !rows.some(r => r.name === "Carol" || r.name === "Frank")
    },
  ]
},


{
  id: 23,
  num: "24",
  title: "Running Total Of Customer Orders",
  difficulty: "Medium",
  tags: ["CTE", "WINDOW FUNCTION", "SUM OVER"],

  desc: `<p>You are given an <strong>orders</strong> table containing customer order amounts.</p>
         <p>Write a query using a <strong>CTE</strong> and window function to calculate the <strong>running total</strong> of orders for each customer.</p>
         <p>Return columns: <code>customer_name</code>, <code>order_id</code>, <code>amount</code>, <code>running_total</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,customer_name TEXT,amount INTEGER);
INSERT INTO orders VALUES
(1,'Alice',1000),
(2,'Alice',2000),
(3,'Alice',1500),
(4,'Bob',3000),
(5,'Bob',1000);`,

  example: {
    cols: ["customer_name", "order_id", "amount", "running_total"],
    rows: [
      ["Alice",1,1000,1000],
      ["Alice",2,2000,3000],
      ["Alice",3,1500,4500],
      ["Bob",4,3000,3000],
      ["Bob",5,1000,4000]
    ]
  },

  hint: "Use <strong>SUM(amount) OVER(PARTITION BY customer_name ORDER BY order_id)</strong> inside a CTE.",

  testCases: [
    {
      name: "All rows returned",
      seed: null,
      check: (rows) => rows.length === 5
    },
    {
      name: "Alice final running total correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.customer_name === "Alice" && Number(r.order_id) === 3);
        return r && Number(r.running_total) === 4500;
      }
    },
    {
      name: "Bob running total correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.customer_name === "Bob" && Number(r.order_id) === 5);
        return r && Number(r.running_total) === 4000;
      }
    },
  ]
},

{
  id: 24,
  num: "25",
  title: "Latest Order For Each Customer",
  difficulty: "Hard",
  tags: ["CTE", "WINDOW FUNCTION", "RANK"],

  desc: `<p>You are given an <strong>orders</strong> table containing customer orders.</p>
         <p>Write a query using a <strong>CTE</strong> and window function to find the <strong>latest order</strong> placed by each customer.</p>
         <p>Return columns: <code>customer_name</code>, <code>order_date</code>, <code>amount</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
      { col: "order_date", type: "TEXT", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,customer_name TEXT,order_date TEXT,amount INTEGER);
INSERT INTO orders VALUES
(1,'Alice','2025-01-01',1000),
(2,'Alice','2025-01-05',2000),
(3,'Bob','2025-01-03',1500),
(4,'Bob','2025-01-08',3000),
(5,'Carol','2025-01-02',2500);`,

  example: {
    cols: ["customer_name", "order_date", "amount"],
    rows: [
      ["Alice","2025-01-05",2000],
      ["Bob","2025-01-08",3000],
      ["Carol","2025-01-02",2500]
    ]
  },

  hint: "Use a CTE with <strong>RANK() OVER(PARTITION BY customer_name ORDER BY order_date DESC)</strong>.",

  testCases: [
    {
      name: "One latest order per customer",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Bob latest order correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.customer_name === "Bob");
        return r && r.order_date === "2025-01-08";
      }
    },
    {
      name: "Alice latest amount correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.customer_name === "Alice");
        return r && Number(r.amount) === 2000;
      }
    },
  ]
},

{
  id: 25,
  num: "26",
  title: "Show All Employee Names",
  difficulty: "Easy",
  tags: ["SELECT"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to display all employee names.</p>
         <p>Return column: <code>name</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT);
INSERT INTO employees VALUES
(1,'Alice','HR'),
(2,'Bob','Engineering'),
(3,'Carol','Sales');`,

  example: {
    cols: ["name"],
    rows: [["Alice"],["Bob"],["Carol"]]
  },

  hint: "Use <strong>SELECT name FROM employees</strong>.",

  testCases: [
    {
      name: "All employee names returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Alice included",
      seed: null,
      check: (rows) => rows.some(r => r.name === "Alice")
    },
    {
      name: "Only name column returned",
      seed: null,
      check: (rows) => Object.keys(rows[0]).length === 1
    },
  ]
},

{
  id: 26,
  num: "27",
  title: "Find All Products",
  difficulty: "Easy",
  tags: ["SELECT"],

  desc: `<p>You are given a <strong>products</strong> table.</p>
         <p>Write a query to display all product details.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,price INTEGER);
INSERT INTO products VALUES
(1,'Laptop',80000),
(2,'Phone',50000),
(3,'Tablet',30000);`,

  example: {
    cols: ["product_id", "product_name", "price"],
    rows: [
      [1,"Laptop",80000],
      [2,"Phone",50000],
      [3,"Tablet",30000]
    ]
  },

  hint: "Use <strong>SELECT *</strong> to display all columns.",

  testCases: [
    {
      name: "All rows returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Laptop exists",
      seed: null,
      check: (rows) => rows.some(r => r.product_name === "Laptop")
    },
    {
      name: "All columns returned",
      seed: null,
      check: (rows) => Object.keys(rows[0]).length === 3
    },
  ]
},


{
  id: 27,
  num: "28",
  title: "Show Customer Cities",
  difficulty: "Easy",
  tags: ["SELECT"],

  desc: `<p>You are given a <strong>customers</strong> table.</p>
         <p>Write a query to display customer names and their cities.</p>
         <p>Return columns: <code>name</code>, <code>city</code>.</p>`,

  schema: {
    customers: [
      { col: "customer_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "city", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE customers(customer_id INTEGER,name TEXT,city TEXT);
INSERT INTO customers VALUES
(1,'Alice','Delhi'),
(2,'Bob','Mumbai'),
(3,'Carol','Pune');`,

  example: {
    cols: ["name", "city"],
    rows: [["Alice","Delhi"],["Bob","Mumbai"],["Carol","Pune"]]
  },

  hint: "Select multiple columns using <strong>SELECT name, city</strong>.",

  testCases: [
    {
      name: "All customers returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Mumbai present",
      seed: null,
      check: (rows) => rows.some(r => r.city === "Mumbai")
    },
    {
      name: "Correct columns returned",
      seed: null,
      check: (rows) => rows[0].name && rows[0].city
    },
  ]
},

{
  id: 28,
  num: "29",
  title: "Display Student Marks",
  difficulty: "Easy",
  tags: ["SELECT"],

  desc: `<p>You are given a <strong>students</strong> table.</p>
         <p>Write a query to display student names and marks.</p>
         <p>Return columns: <code>name</code>, <code>marks</code>.</p>`,

  schema: {
    students: [
      { col: "student_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "marks", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE students(student_id INTEGER,name TEXT,marks INTEGER);
INSERT INTO students VALUES
(1,'Alice',85),
(2,'Bob',72),
(3,'Carol',91);`,

  example: {
    cols: ["name", "marks"],
    rows: [["Alice",85],["Bob",72],["Carol",91]]
  },

  hint: "Use <strong>SELECT name, marks FROM students</strong>.",

  testCases: [
    {
      name: "All students returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Carol marks correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.name === "Carol");
        return r && Number(r.marks) === 91;
      }
    },
    {
      name: "Marks column returned",
      seed: null,
      check: (rows) => "marks" in rows[0]
    },
  ]
},

{
  id: 29,
  num: "30",
  title: "Show Employee Departments",
  difficulty: "Easy",
  tags: ["SELECT"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to display employee names and departments.</p>
         <p>Return columns: <code>name</code>, <code>department</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT);
INSERT INTO employees VALUES
(1,'Alice','HR'),
(2,'Bob','Engineering'),
(3,'Carol','Finance');`,

  example: {
    cols: ["name", "department"],
    rows: [["Alice","HR"],["Bob","Engineering"],["Carol","Finance"]]
  },

  hint: "Use <strong>SELECT name, department FROM employees</strong>.",

  testCases: [
    {
      name: "All employees returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Engineering department exists",
      seed: null,
      check: (rows) => rows.some(r => r.department === "Engineering")
    },
    {
      name: "Correct columns returned",
      seed: null,
      check: (rows) => rows[0].name && rows[0].department
    },
  ]
},

{
  id: 30,
  num: "31",
  title: "Find Maximum Employee Salary",
  difficulty: "Easy",
  tags: ["MAX", "AGGREGATE FUNCTION"],

  desc: `<p>You are given an <strong>employees</strong> table containing salary details.</p>
         <p>Write a query to find the <strong>highest salary</strong>.</p>
         <p>Return column: <code>highest_salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice',50000),
(2,'Bob',70000),
(3,'Carol',65000);`,

  example: {
    cols: ["highest_salary"],
    rows: [[70000]]
  },

  hint: "Use <strong>MAX(salary)</strong>.",

  testCases: [
    {
      name: "Highest salary correct",
      seed: null,
      check: (rows) => Number(rows[0].highest_salary) === 70000
    },
    {
      name: "Single row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "highest_salary" in rows[0]
    },
  ]
},

{
  id: 31,
  num: "32",
  title: "Find Maximum Product Price",
  difficulty: "Easy",
  tags: ["MAX", "AGGREGATE FUNCTION"],

  desc: `<p>You are given a <strong>products</strong> table.</p>
         <p>Write a query to find the <strong>maximum product price</strong>.</p>
         <p>Return column: <code>max_price</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,price INTEGER);
INSERT INTO products VALUES
(1,'Phone',50000),
(2,'Laptop',90000),
(3,'Tablet',30000);`,

  example: {
    cols: ["max_price"],
    rows: [[90000]]
  },

  hint: "Use <strong>MAX(price)</strong>.",

  testCases: [
    {
      name: "Maximum price correct",
      seed: null,
      check: (rows) => Number(rows[0].max_price) === 90000
    },
    {
      name: "One row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "max_price" in rows[0]
    },
  ]
},

{
  id: 32,
  num: "33",
  title: "Find Minimum Product Price",
  difficulty: "Easy",
  tags: ["MIN", "AGGREGATE FUNCTION"],

  desc: `<p>You are given a <strong>products</strong> table.</p>
         <p>Write a query to find the <strong>lowest product price</strong>.</p>
         <p>Return column: <code>min_price</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,price INTEGER);
INSERT INTO products VALUES
(1,'Phone',50000),
(2,'Laptop',90000),
(3,'Keyboard',5000);`,

  example: {
    cols: ["min_price"],
    rows: [[5000]]
  },

  hint: "Use <strong>MIN(price)</strong>.",

  testCases: [
    {
      name: "Minimum price correct",
      seed: null,
      check: (rows) => Number(rows[0].min_price) === 5000
    },
    {
      name: "Single row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column exists",
      seed: null,
      check: (rows) => "min_price" in rows[0]
    },
  ]
},

{
  id: 33,
  num: "34",
  title: "Find Minimum Employee Age",
  difficulty: "Easy",
  tags: ["MIN", "AGGREGATE FUNCTION"],

  desc: `<p>You are given an <strong>employees</strong> table containing employee ages.</p>
         <p>Write a query to find the <strong>youngest employee age</strong>.</p>
         <p>Return column: <code>youngest_age</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "age", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,age INTEGER);
INSERT INTO employees VALUES
(1,'Alice',28),
(2,'Bob',35),
(3,'Carol',24);`,

  example: {
    cols: ["youngest_age"],
    rows: [[24]]
  },

  hint: "Use <strong>MIN(age)</strong>.",

  testCases: [
    {
      name: "Youngest age correct",
      seed: null,
      check: (rows) => Number(rows[0].youngest_age) === 24
    },
    {
      name: "One row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "youngest_age" in rows[0]
    },
  ]
},

{
  id: 34,
  num: "35",
  title: "Count Total Employees",
  difficulty: "Easy",
  tags: ["COUNT", "AGGREGATE FUNCTION"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to count the <strong>total number of employees</strong>.</p>
         <p>Return column: <code>total_employees</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT);
INSERT INTO employees VALUES
(1,'Alice'),
(2,'Bob'),
(3,'Carol'),
(4,'David');`,

  example: {
    cols: ["total_employees"],
    rows: [[4]]
  },

  hint: "Use <strong>COUNT(*)</strong>.",

  testCases: [
    {
      name: "Employee count correct",
      seed: null,
      check: (rows) => Number(rows[0].total_employees) === 4
    },
    {
      name: "One row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column exists",
      seed: null,
      check: (rows) => "total_employees" in rows[0]
    },
  ]
},


{
  id: 35,
  num: "36",
  title: "Count Total Orders",
  difficulty: "Easy",
  tags: ["COUNT", "AGGREGATE FUNCTION"],

  desc: `<p>You are given an <strong>orders</strong> table.</p>
         <p>Write a query to count the <strong>total number of orders</strong>.</p>
         <p>Return column: <code>total_orders</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,customer_name TEXT);
INSERT INTO orders VALUES
(1,'Alice'),
(2,'Bob'),
(3,'Carol');`,

  example: {
    cols: ["total_orders"],
    rows: [[3]]
  },

  hint: "Use <strong>COUNT(*)</strong>.",

  testCases: [
    {
      name: "Order count correct",
      seed: null,
      check: (rows) => Number(rows[0].total_orders) === 3
    },
    {
      name: "Single row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "total_orders" in rows[0]
    },
  ]
},


{
  id: 36,
  num: "37",
  title: "Find Total Sales Amount",
  difficulty: "Easy",
  tags: ["SUM", "AGGREGATE FUNCTION"],

  desc: `<p>You are given a <strong>sales</strong> table containing sales amounts.</p>
         <p>Write a query to calculate the <strong>total sales amount</strong>.</p>
         <p>Return column: <code>total_sales</code>.</p>`,

  schema: {
    sales: [
      { col: "sale_id", type: "INTEGER", note: "pk" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE sales(sale_id INTEGER,amount INTEGER);
INSERT INTO sales VALUES
(1,5000),
(2,3000),
(3,2000);`,

  example: {
    cols: ["total_sales"],
    rows: [[10000]]
  },

  hint: "Use <strong>SUM(amount)</strong>.",

  testCases: [
    {
      name: "Total sales correct",
      seed: null,
      check: (rows) => Number(rows[0].total_sales) === 10000
    },
    {
      name: "One row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column exists",
      seed: null,
      check: (rows) => "total_sales" in rows[0]
    },
  ]
},


{
  id: 37,
  num: "38",
  title: "Find Total Product Price",
  difficulty: "Easy",
  tags: ["SUM", "AGGREGATE FUNCTION"],

  desc: `<p>You are given a <strong>products</strong> table.</p>
         <p>Write a query to calculate the <strong>sum of all product prices</strong>.</p>
         <p>Return column: <code>total_price</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,price INTEGER);
INSERT INTO products VALUES
(1,1000),
(2,2000),
(3,3000);`,

  example: {
    cols: ["total_price"],
    rows: [[6000]]
  },

  hint: "Use <strong>SUM(price)</strong>.",

  testCases: [
    {
      name: "Total price correct",
      seed: null,
      check: (rows) => Number(rows[0].total_price) === 6000
    },
    {
      name: "Single row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "total_price" in rows[0]
    },
  ]
},


{
  id: 38,
  num: "39",
  title: "Find Average Employee Salary",
  difficulty: "Easy",
  tags: ["AVG", "AGGREGATE FUNCTION"],

  desc: `<p>You are given an <strong>employees</strong> table containing salaries.</p>
         <p>Write a query to find the <strong>average employee salary</strong>.</p>
         <p>Return column: <code>avg_salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,salary INTEGER);
INSERT INTO employees VALUES
(1,40000),
(2,60000),
(3,50000);`,

  example: {
    cols: ["avg_salary"],
    rows: [[50000]]
  },

  hint: "Use <strong>AVG(salary)</strong>.",

  testCases: [
    {
      name: "Average salary correct",
      seed: null,
      check: (rows) => Number(rows[0].avg_salary) === 50000
    },
    {
      name: "One row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column exists",
      seed: null,
      check: (rows) => "avg_salary" in rows[0]
    },
  ]
},

{
  id: 39,
  num: "40",
  title: "Find Average Product Price",
  difficulty: "Easy",
  tags: ["AVG", "AGGREGATE FUNCTION"],

  desc: `<p>You are given a <strong>products</strong> table containing product prices.</p>
         <p>Write a query to find the <strong>average product price</strong>.</p>
         <p>Return column: <code>avg_price</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "price", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,price INTEGER);
INSERT INTO products VALUES
(1,10000),
(2,20000),
(3,30000);`,

  example: {
    cols: ["avg_price"],
    rows: [[20000]]
  },

  hint: "Use <strong>AVG(price)</strong>.",

  testCases: [
    {
      name: "Average price correct",
      seed: null,
      check: (rows) => Number(rows[0].avg_price) === 20000
    },
    {
      name: "Single row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "avg_price" in rows[0]
    },
  ]
},


{
  id: 40,
  num: "41",
  title: "Employees With High Salary And HR Department",
  difficulty: "Easy",
  tags: ["WHERE", "AND", "OPERATORS"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to find employees who belong to the <strong>HR department</strong> and have salary greater than <strong>50000</strong>.</p>
         <p>Return columns: <code>name</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);
INSERT INTO employees VALUES
(1,'Alice','HR',60000),
(2,'Bob','Engineering',70000),
(3,'Carol','HR',45000),
(4,'David','Sales',55000);`,

  example: {
    cols: ["name", "salary"],
    rows: [["Alice",60000]]
  },

  hint: "Use <strong>AND</strong> inside the WHERE clause.",

  testCases: [
    {
      name: "Only one employee returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Alice returned",
      seed: null,
      check: (rows) => rows[0].name === "Alice"
    },
    {
      name: "Salary correct",
      seed: null,
      check: (rows) => Number(rows[0].salary) === 60000
    },
  ]
},


{
  id: 41,
  num: "42",
  title: "Products In Electronics Or Furniture",
  difficulty: "Easy",
  tags: ["WHERE", "OR", "OPERATORS"],

  desc: `<p>You are given a <strong>products</strong> table.</p>
         <p>Write a query to display products belonging to <strong>Electronics</strong> or <strong>Furniture</strong> category.</p>
         <p>Return columns: <code>product_name</code>, <code>category</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "category", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,category TEXT);
INSERT INTO products VALUES
(1,'Laptop','Electronics'),
(2,'Chair','Furniture'),
(3,'Pen','Stationery'),
(4,'Phone','Electronics');`,

  example: {
    cols: ["product_name", "category"],
    rows: [
      ["Laptop","Electronics"],
      ["Chair","Furniture"],
      ["Phone","Electronics"]
    ]
  },

  hint: "Use <strong>OR</strong> inside the WHERE clause.",

  testCases: [
    {
      name: "Three products returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Stationery excluded",
      seed: null,
      check: (rows) => !rows.some(r => r.category === "Stationery")
    },
    {
      name: "Laptop included",
      seed: null,
      check: (rows) => rows.some(r => r.product_name === "Laptop")
    },
  ]
},


{
  id: 42,
  num: "43",
  title: "Students With Marks Between 70 And 90",
  difficulty: "Easy",
  tags: ["BETWEEN", "WHERE", "OPERATORS"],

  desc: `<p>You are given a <strong>students</strong> table containing student marks.</p>
         <p>Write a query to find students scoring between <strong>70 and 90</strong>.</p>
         <p>Return columns: <code>name</code>, <code>marks</code>.</p>`,

  schema: {
    students: [
      { col: "student_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "marks", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE students(student_id INTEGER,name TEXT,marks INTEGER);
INSERT INTO students VALUES
(1,'Alice',85),
(2,'Bob',65),
(3,'Carol',90),
(4,'David',72);`,

  example: {
    cols: ["name", "marks"],
    rows: [
      ["Alice",85],
      ["Carol",90],
      ["David",72]
    ]
  },

  hint: "Use <strong>BETWEEN 70 AND 90</strong>.",

  testCases: [
    {
      name: "Three students returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Bob excluded",
      seed: null,
      check: (rows) => !rows.some(r => r.name === "Bob")
    },
    {
      name: "Carol included",
      seed: null,
      check: (rows) => rows.some(r => r.name === "Carol")
    },
  ]
},


{
  id: 43,
  num: "44",
  title: "Employees In Selected Departments",
  difficulty: "Easy",
  tags: ["IN", "WHERE", "OPERATORS"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to display employees working in <strong>HR</strong> or <strong>Sales</strong> departments using the <strong>IN</strong> operator.</p>
         <p>Return columns: <code>name</code>, <code>department</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT);
INSERT INTO employees VALUES
(1,'Alice','HR'),
(2,'Bob','Engineering'),
(3,'Carol','Sales'),
(4,'David','Finance');`,

  example: {
    cols: ["name", "department"],
    rows: [
      ["Alice","HR"],
      ["Carol","Sales"]
    ]
  },

  hint: "Use <strong>IN ('HR','Sales')</strong>.",

  testCases: [
    {
      name: "Two employees returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Engineering excluded",
      seed: null,
      check: (rows) => !rows.some(r => r.department === "Engineering")
    },
    {
      name: "Sales employee included",
      seed: null,
      check: (rows) => rows.some(r => r.department === "Sales")
    },
  ]
},


{
  id: 44,
  num: "45",
  title: "Products Not In Electronics Category",
  difficulty: "Easy",
  tags: ["NOT IN", "WHERE", "OPERATORS"],

  desc: `<p>You are given a <strong>products</strong> table.</p>
         <p>Write a query to display products that are <strong>not in the Electronics category</strong>.</p>
         <p>Return columns: <code>product_name</code>, <code>category</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
      { col: "category", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT,category TEXT);
INSERT INTO products VALUES
(1,'Laptop','Electronics'),
(2,'Chair','Furniture'),
(3,'Pen','Stationery'),
(4,'Phone','Electronics');`,

  example: {
    cols: ["product_name", "category"],
    rows: [
      ["Chair","Furniture"],
      ["Pen","Stationery"]
    ]
  },

  hint: "Use <strong>NOT IN ('Electronics')</strong>.",

  testCases: [
    {
      name: "Two products returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Electronics excluded",
      seed: null,
      check: (rows) => !rows.some(r => r.category === "Electronics")
    },
    {
      name: "Furniture included",
      seed: null,
      check: (rows) => rows.some(r => r.category === "Furniture")
    },
  ]
},

{
  id: 45,
  num: "46",
  title: "Orders Greater Than 5000",
  difficulty: "Easy",
  tags: ["WHERE", ">", "OPERATORS"],

  desc: `<p>You are given an <strong>orders</strong> table.</p>
         <p>Write a query to display orders having amount greater than <strong>5000</strong>.</p>
         <p>Return columns: <code>order_id</code>, <code>amount</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "amount",   type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,amount INTEGER);
INSERT INTO orders VALUES
(1,3000),
(2,7000),
(3,4500),
(4,9000);`,

  example: {
    cols: ["order_id", "amount"],
    rows: [
      [2, 7000],
      [4, 9000]
    ]
  },

  hint: "Use <strong>WHERE amount > 5000</strong>.",

  testCases: [
    {
      name: "Two orders returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "7000 included",
      seed: null,
      check: (rows) => rows.some(r => Number(r.amount) === 7000)
    },
    {
      name: "3000 excluded",
      seed: null,
      check: (rows) => !rows.some(r => Number(r.amount) === 3000)
    },
  ]
},

{
  id: 46,
  num: "47",
  title: "Employee Department Names",
  difficulty: "Easy",
  tags: ["JOIN", "INNER JOIN"],

  desc: `<p>You are given <strong>employees</strong> and <strong>departments</strong> tables.</p>
         <p>Write a query to display employee names along with their department names.</p>
         <p>Return columns: <code>name</code>, <code>department_name</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "dept_id", type: "INTEGER", note: "" },
    ],
    departments: [
      { col: "dept_id", type: "INTEGER", note: "pk" },
      { col: "department_name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,dept_id INTEGER);
CREATE TABLE departments(dept_id INTEGER,department_name TEXT);

INSERT INTO employees VALUES
(1,'Alice',1),
(2,'Bob',2),
(3,'Carol',1);

INSERT INTO departments VALUES
(1,'HR'),
(2,'Engineering');`,

  example: {
    cols: ["name", "department_name"],
    rows: [
      ["Alice","HR"],
      ["Bob","Engineering"],
      ["Carol","HR"]
    ]
  },

  hint: "Use <strong>INNER JOIN</strong> on <code>dept_id</code>.",

  testCases: [
    {
      name: "All employees returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Bob department correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.name === "Bob");
        return r && r.department_name === "Engineering";
      }
    },
    {
      name: "HR employees included",
      seed: null,
      check: (rows) => rows.filter(r => r.department_name === "HR").length === 2
    },
  ]
},

{
  id: 47,
  num: "48",
  title: "Customers And Their Orders",
  difficulty: "Easy",
  tags: ["JOIN", "INNER JOIN"],

  desc: `<p>You are given <strong>customers</strong> and <strong>orders</strong> tables.</p>
         <p>Write a query to display customer names with their order amounts.</p>
         <p>Return columns: <code>customer_name</code>, <code>amount</code>.</p>`,

  schema: {
    customers: [
      { col: "customer_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
    ],
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_id", type: "INTEGER", note: "" },
      { col: "amount", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE customers(customer_id INTEGER,customer_name TEXT);
CREATE TABLE orders(order_id INTEGER,customer_id INTEGER,amount INTEGER);

INSERT INTO customers VALUES
(1,'Alice'),
(2,'Bob');

INSERT INTO orders VALUES
(1,1,5000),
(2,2,7000),
(3,1,3000);`,

  example: {
    cols: ["customer_name", "amount"],
    rows: [
      ["Alice",5000],
      ["Bob",7000],
      ["Alice",3000]
    ]
  },

  hint: "Join both tables using <code>customer_id</code>.",

  testCases: [
    {
      name: "Three rows returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Bob order correct",
      seed: null,
      check: (rows) => rows.some(r => r.customer_name === "Bob" && Number(r.amount) === 7000)
    },
    {
      name: "Alice has two orders",
      seed: null,
      check: (rows) => rows.filter(r => r.customer_name === "Alice").length === 2
    },
  ]
},


{
  id: 48,
  num: "49",
  title: "Students And Their Courses",
  difficulty: "Medium",
  tags: ["JOIN", "LEFT JOIN"],

  desc: `<p>You are given <strong>students</strong> and <strong>courses</strong> tables.</p>
         <p>Write a query to display all students along with their course names.</p>
         <p>Students without a course should also appear.</p>
         <p>Return columns: <code>student_name</code>, <code>course_name</code>.</p>`,

  schema: {
    students: [
      { col: "student_id", type: "INTEGER", note: "pk" },
      { col: "student_name", type: "TEXT", note: "" },
      { col: "course_id", type: "INTEGER", note: "" },
    ],
    courses: [
      { col: "course_id", type: "INTEGER", note: "pk" },
      { col: "course_name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE students(student_id INTEGER,student_name TEXT,course_id INTEGER);
CREATE TABLE courses(course_id INTEGER,course_name TEXT);

INSERT INTO students VALUES
(1,'Alice',1),
(2,'Bob',2),
(3,'Carol',NULL);

INSERT INTO courses VALUES
(1,'SQL'),
(2,'Python');`,

  example: {
    cols: ["student_name", "course_name"],
    rows: [
      ["Alice","SQL"],
      ["Bob","Python"],
      ["Carol",null]
    ]
  },

  hint: "Use <strong>LEFT JOIN</strong> to keep all students.",

  testCases: [
    {
      name: "All students returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Carol included",
      seed: null,
      check: (rows) => rows.some(r => r.student_name === "Carol")
    },
    {
      name: "Carol course is null",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.student_name === "Carol");
        return r && (r.course_name === null || r.course_name === undefined);
      }
    },
  ]
},


{
  id: 49,
  num: "50",
  title: "Orders With Product Names",
  difficulty: "Medium",
  tags: ["JOIN", "INNER JOIN"],

  desc: `<p>You are given <strong>orders</strong> and <strong>products</strong> tables.</p>
         <p>Write a query to display order id, product name, and quantity ordered.</p>
         <p>Return columns: <code>order_id</code>, <code>product_name</code>, <code>quantity</code>.</p>`,

  schema: {
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "product_id", type: "INTEGER", note: "" },
      { col: "quantity", type: "INTEGER", note: "" },
    ],
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE orders(order_id INTEGER,product_id INTEGER,quantity INTEGER);
CREATE TABLE products(product_id INTEGER,product_name TEXT);

INSERT INTO orders VALUES
(1,1,2),
(2,2,1),
(3,1,4);

INSERT INTO products VALUES
(1,'Laptop'),
(2,'Phone');`,

  example: {
    cols: ["order_id", "product_name", "quantity"],
    rows: [
      [1,"Laptop",2],
      [2,"Phone",1],
      [3,"Laptop",4]
    ]
  },

  hint: "Join tables using <code>product_id</code>.",

  testCases: [
    {
      name: "Three rows returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "Laptop orders correct",
      seed: null,
      check: (rows) => rows.filter(r => r.product_name === "Laptop").length === 2
    },
    {
      name: "Phone quantity correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.product_name === "Phone");
        return r && Number(r.quantity) === 1;
      }
    },
  ]
},

{
  id: 50,
  num: "51",
  title: "Employees And Manager Names",
  difficulty: "Hard",
  tags: ["SELF JOIN", "JOIN"],

  desc: `<p>You are given an <strong>employees</strong> table where each employee may have a manager.</p>
         <p>Write a query to display employee names along with their manager names.</p>
         <p>Return columns: <code>employee_name</code>, <code>manager_name</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "employee_name", type: "TEXT", note: "" },
      { col: "manager_id", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,employee_name TEXT,manager_id INTEGER);

INSERT INTO employees VALUES
(1,'Alice',NULL),
(2,'Bob',1),
(3,'Carol',1),
(4,'David',2);`,

  example: {
    cols: ["employee_name", "manager_name"],
    rows: [
      ["Bob","Alice"],
      ["Carol","Alice"],
      ["David","Bob"]
    ]
  },

  hint: "Use a <strong>SELF JOIN</strong> on the employees table.",

  testCases: [
    {
      name: "Three rows returned",
      seed: null,
      check: (rows) => rows.length === 3
    },
    {
      name: "David manager correct",
      seed: null,
      check: (rows) => {
        const r = rows.find(r => r.employee_name === "David");
        return r && r.manager_name === "Bob";
      }
    },
    {
      name: "Alice not included as employee",
      seed: null,
      check: (rows) => !rows.some(r => r.employee_name === "Alice")
    },
  ]
},

{
  id: 51,
  num: "52",
  title: "Employees Working In Same Department",
  difficulty: "Medium",
  tags: ["SELF JOIN", "JOIN"],

  desc: `<p>You are given an <strong>employees</strong> table.</p>
         <p>Write a query to find pairs of employees working in the <strong>same department</strong>.</p>
         <p>Do not pair an employee with themselves.</p>
         <p>Return columns: <code>employee1</code>, <code>employee2</code>, <code>department</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT);

INSERT INTO employees VALUES
(1,'Alice','HR'),
(2,'Bob','HR'),
(3,'Carol','Engineering'),
(4,'David','Engineering');`,

  example: {
    cols: ["employee1", "employee2", "department"],
    rows: [
      ["Alice","Bob","HR"],
      ["Carol","David","Engineering"]
    ]
  },

  hint: "Use a <strong>SELF JOIN</strong> on department and avoid matching same employee ids.",

  testCases: [
    {
      name: "Two employee pairs returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "HR pair exists",
      seed: null,
      check: (rows) => rows.some(r => r.department === "HR")
    },
    {
      name: "No self pairing",
      seed: null,
      check: (rows) => rows.every(r => r.employee1 !== r.employee2)
    },
  ]
},

{
  id: 52,
  num: "53",
  title: "Find Customers From Same City",
  difficulty: "Medium",
  tags: ["SELF JOIN", "JOIN"],

  desc: `<p>You are given a <strong>customers</strong> table.</p>
         <p>Write a query to find customers belonging to the <strong>same city</strong>.</p>
         <p>Do not include duplicate or self pairs.</p>
         <p>Return columns: <code>customer1</code>, <code>customer2</code>, <code>city</code>.</p>`,

  schema: {
    customers: [
      { col: "customer_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
      { col: "city", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE customers(customer_id INTEGER,customer_name TEXT,city TEXT);

INSERT INTO customers VALUES
(1,'Alice','Delhi'),
(2,'Bob','Mumbai'),
(3,'Carol','Delhi'),
(4,'David','Mumbai');`,

  example: {
    cols: ["customer1", "customer2", "city"],
    rows: [
      ["Alice","Carol","Delhi"],
      ["Bob","David","Mumbai"]
    ]
  },

  hint: "Use a SELF JOIN on city and compare customer ids to avoid duplicates.",

  testCases: [
    {
      name: "Two city pairs returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "Delhi pair exists",
      seed: null,
      check: (rows) => rows.some(r => r.city === "Delhi")
    },
    {
      name: "No duplicate reversed pairs",
      seed: null,
      check: (rows) => !rows.some(r => r.customer1 === "Carol" && r.customer2 === "Alice")
    },
  ]
},


{
  id: 53,
  num: "54",
  title: "All Product And Color Combinations",
  difficulty: "Easy",
  tags: ["CROSS JOIN", "JOIN"],

  desc: `<p>You are given <strong>products</strong> and <strong>colors</strong> tables.</p>
         <p>Write a query to display all possible combinations of products and colors.</p>
         <p>Return columns: <code>product_name</code>, <code>color_name</code>.</p>`,

  schema: {
    products: [
      { col: "product_id", type: "INTEGER", note: "pk" },
      { col: "product_name", type: "TEXT", note: "" },
    ],
    colors: [
      { col: "color_id", type: "INTEGER", note: "pk" },
      { col: "color_name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE products(product_id INTEGER,product_name TEXT);
CREATE TABLE colors(color_id INTEGER,color_name TEXT);

INSERT INTO products VALUES
(1,'Shirt'),
(2,'Shoes');

INSERT INTO colors VALUES
(1,'Red'),
(2,'Blue');`,

  example: {
    cols: ["product_name", "color_name"],
    rows: [
      ["Shirt","Red"],
      ["Shirt","Blue"],
      ["Shoes","Red"],
      ["Shoes","Blue"]
    ]
  },

  hint: "Use <strong>CROSS JOIN</strong> to generate all combinations.",

  testCases: [
    {
      name: "Four combinations returned",
      seed: null,
      check: (rows) => rows.length === 4
    },
    {
      name: "Shirt Red exists",
      seed: null,
      check: (rows) => rows.some(r => r.product_name === "Shirt" && r.color_name === "Red")
    },
    {
      name: "Shoes Blue exists",
      seed: null,
      check: (rows) => rows.some(r => r.product_name === "Shoes" && r.color_name === "Blue")
    },
  ]
},


{
  id: 54,
  num: "55",
  title: "Generate Food And Drink Combos",
  difficulty: "Easy",
  tags: ["CROSS JOIN", "JOIN"],

  desc: `<p>You are given <strong>foods</strong> and <strong>drinks</strong> tables.</p>
         <p>Write a query to generate all possible food and drink combinations.</p>
         <p>Return columns: <code>food_name</code>, <code>drink_name</code>.</p>`,

  schema: {
    foods: [
      { col: "food_id", type: "INTEGER", note: "pk" },
      { col: "food_name", type: "TEXT", note: "" },
    ],
    drinks: [
      { col: "drink_id", type: "INTEGER", note: "pk" },
      { col: "drink_name", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE foods(food_id INTEGER,food_name TEXT);
CREATE TABLE drinks(drink_id INTEGER,drink_name TEXT);

INSERT INTO foods VALUES
(1,'Pizza'),
(2,'Burger');

INSERT INTO drinks VALUES
(1,'Coke'),
(2,'Juice');`,

  example: {
    cols: ["food_name", "drink_name"],
    rows: [
      ["Pizza","Coke"],
      ["Pizza","Juice"],
      ["Burger","Coke"],
      ["Burger","Juice"]
    ]
  },

  hint: "Use <strong>CROSS JOIN</strong> between foods and drinks tables.",

  testCases: [
    {
      name: "Four combinations returned",
      seed: null,
      check: (rows) => rows.length === 4
    },
    {
      name: "Pizza Juice exists",
      seed: null,
      check: (rows) => rows.some(r => r.food_name === "Pizza" && r.drink_name === "Juice")
    },
    {
      name: "Burger Coke exists",
      seed: null,
      check: (rows) => rows.some(r => r.food_name === "Burger" && r.drink_name === "Coke")
    },
  ]
},


{
  id: 55,
  num: "56",
  title: "Second Highest Salary In Each Department",
  difficulty: "Hard",
  tags: ["WINDOW FUNCTION", "DENSE_RANK", "PARTITION BY"],

  desc: `<p>You are given an <strong>employees</strong> table containing department and salary details.</p>
         <p>Write a query to find the <strong>second highest salary</strong> in each department.</p>
         <p>Return columns: <code>department</code>, <code>name</code>, <code>salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "department", type: "TEXT", note: "" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,name TEXT,department TEXT,salary INTEGER);

INSERT INTO employees VALUES
(1,'Alice','HR',90000),
(2,'Bob','HR',70000),
(3,'Carol','HR',60000),
(4,'David','Engineering',120000),
(5,'Eve','Engineering',100000),
(6,'Frank','Engineering',95000);`,

  example: {
    cols: ["department", "name", "salary"],
    rows: [
      ["HR","Bob",70000],
      ["Engineering","Eve",100000]
    ]
  },

  hint: "Use <strong>DENSE_RANK()</strong> partitioned by department.",

  testCases: [
    {
      name: "Two rows returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "HR second highest correct",
      seed: null,
      check: (rows) => rows.some(r => r.department === "HR" && r.name === "Bob")
    },
    {
      name: "Engineering second highest correct",
      seed: null,
      check: (rows) => rows.some(r => r.department === "Engineering" && Number(r.salary) === 100000)
    },
  ]
},


{
  id: 56,
  num: "57",
  title: "Find Duplicate Email Addresses",
  difficulty: "Medium",
  tags: ["GROUP BY", "HAVING", "COUNT"],

  desc: `<p>You are given a <strong>users</strong> table.</p>
         <p>Write a query to find duplicate email addresses.</p>
         <p>Return columns: <code>email</code>, <code>duplicate_count</code>.</p>`,

  schema: {
    users: [
      { col: "user_id", type: "INTEGER", note: "pk" },
      { col: "name", type: "TEXT", note: "" },
      { col: "email", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE users(user_id INTEGER,name TEXT,email TEXT);

INSERT INTO users VALUES
(1,'Alice','alice@gmail.com'),
(2,'Bob','bob@gmail.com'),
(3,'Carol','alice@gmail.com'),
(4,'David','david@gmail.com'),
(5,'Eve','bob@gmail.com');`,

  example: {
    cols: ["email", "duplicate_count"],
    rows: [
      ["alice@gmail.com",2],
      ["bob@gmail.com",2]
    ]
  },

  hint: "Use <strong>GROUP BY email</strong> with <strong>HAVING COUNT(*) > 1</strong>.",

  testCases: [
    {
      name: "Two duplicate emails found",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "alice@gmail.com exists",
      seed: null,
      check: (rows) => rows.some(r => r.email === "alice@gmail.com")
    },
    {
      name: "Duplicate count correct",
      seed: null,
      check: (rows) => rows.every(r => Number(r.duplicate_count) === 2)
    },
  ]
},


{
  id: 57,
  num: "58",
  title: "Customers Who Never Placed Orders",
  difficulty: "Hard",
  tags: ["LEFT JOIN", "NULL", "JOINS"],

  desc: `<p>You are given <strong>customers</strong> and <strong>orders</strong> tables.</p>
         <p>Write a query to find customers who <strong>never placed any order</strong>.</p>
         <p>Return column: <code>customer_name</code>.</p>`,

  schema: {
    customers: [
      { col: "customer_id", type: "INTEGER", note: "pk" },
      { col: "customer_name", type: "TEXT", note: "" },
    ],
    orders: [
      { col: "order_id", type: "INTEGER", note: "pk" },
      { col: "customer_id", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE customers(customer_id INTEGER,customer_name TEXT);
CREATE TABLE orders(order_id INTEGER,customer_id INTEGER);

INSERT INTO customers VALUES
(1,'Alice'),
(2,'Bob'),
(3,'Carol');

INSERT INTO orders VALUES
(1,1),
(2,1),
(3,2);`,

  example: {
    cols: ["customer_name"],
    rows: [["Carol"]]
  },

  hint: "Use <strong>LEFT JOIN</strong> and check for NULL values.",

  testCases: [
    {
      name: "One customer returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Carol returned",
      seed: null,
      check: (rows) => rows[0].customer_name === "Carol"
    },
    {
      name: "Alice excluded",
      seed: null,
      check: (rows) => !rows.some(r => r.customer_name === "Alice")
    },
  ]
},


{
  id: 58,
  num: "59",
  title: "Consecutive Login Days",
  difficulty: "Hard",
  tags: ["WINDOW FUNCTION", "LAG", "DATE"],

  desc: `<p>You are given a <strong>logins</strong> table containing user login dates.</p>
         <p>Write a query to find users who logged in on <strong>consecutive days</strong>.</p>
         <p>Return columns: <code>user_id</code>, <code>login_date</code>.</p>`,

  schema: {
    logins: [
      { col: "login_id", type: "INTEGER", note: "pk" },
      { col: "user_id", type: "INTEGER", note: "" },
      { col: "login_date", type: "TEXT", note: "" },
    ]
  },

  seed: `CREATE TABLE logins(login_id INTEGER,user_id INTEGER,login_date TEXT);

INSERT INTO logins VALUES
(1,101,'2025-01-01'),
(2,101,'2025-01-02'),
(3,101,'2025-01-05'),
(4,102,'2025-01-03'),
(5,102,'2025-01-04');`,

  example: {
    cols: ["user_id", "login_date"],
    rows: [
      [101,"2025-01-02"],
      [102,"2025-01-04"]
    ]
  },

  hint: "Use <strong>LAG()</strong> to compare previous login dates.",

  testCases: [
    {
      name: "Two consecutive login rows returned",
      seed: null,
      check: (rows) => rows.length === 2
    },
    {
      name: "User 101 included",
      seed: null,
      check: (rows) => rows.some(r => Number(r.user_id) === 101)
    },
    {
      name: "Correct login date for user 102",
      seed: null,
      check: (rows) => rows.some(r => Number(r.user_id) === 102 && r.login_date === "2025-01-04")
    },
  ]
},


{
  id: 59,
  num: "60",
  title: "Find Median Salary",
  difficulty: "Hard",
  tags: ["WINDOW FUNCTION", "CTE", "ROW_NUMBER"],

  desc: `<p>You are given an <strong>employees</strong> table containing salaries.</p>
         <p>Write a query to find the <strong>median salary</strong>.</p>
         <p>Return column: <code>median_salary</code>.</p>`,

  schema: {
    employees: [
      { col: "emp_id", type: "INTEGER", note: "pk" },
      { col: "salary", type: "INTEGER", note: "" },
    ]
  },

  seed: `CREATE TABLE employees(emp_id INTEGER,salary INTEGER);

INSERT INTO employees VALUES
(1,30000),
(2,40000),
(3,50000),
(4,60000),
(5,70000);`,

  example: {
    cols: ["median_salary"],
    rows: [[50000]]
  },

  hint: "Use <strong>ROW_NUMBER()</strong> and total row count inside a CTE.",

  testCases: [
    {
      name: "Median salary correct",
      seed: null,
      check: (rows) => Number(rows[0].median_salary) === 50000
    },
    {
      name: "Single row returned",
      seed: null,
      check: (rows) => rows.length === 1
    },
    {
      name: "Correct column returned",
      seed: null,
      check: (rows) => "median_salary" in rows[0]
    },
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

// ── SUPABASE CONFIG ───────────────────────────────────────────────
const SUPABASE_URL  = 'https://wyxutuqckkdkraawyxff.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';

// ── AUTH CLIENT — pure fetch(), zero CDN dependency ───────────────
var Auth = (function () {
  var A   = SUPABASE_URL + '/auth/v1';
  var DB  = SUPABASE_URL + '/rest/v1';
  var KEY = 'msql_sess';
  var _listeners = [];

  function bh()        { return { 'Content-Type':'application/json', 'apikey': SUPABASE_ANON }; }
  function ah(tok)     { return Object.assign(bh(), { 'Authorization':'Bearer '+tok }); }
  function save(s)     { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch(e){} }
  function clear()     { try { localStorage.removeItem(KEY); } catch(e){} }
  function read()      { try { var s=localStorage.getItem(KEY); return s?JSON.parse(s):null; } catch(e){return null;} }
  function emit(ev, s) { _listeners.forEach(function(cb){ try{cb(ev,s);}catch(e){} }); }

  function refresh(sess) {
    if (!sess || !sess.access_token) return Promise.resolve(null);
    if (Date.now()/1000 < (sess.expires_at||0) - 60) return Promise.resolve(sess);
    if (!sess.refresh_token) { clear(); return Promise.resolve(null); }
    return fetch(A+'/token?grant_type=refresh_token', {
      method:'POST', headers:bh(), body:JSON.stringify({refresh_token:sess.refresh_token})
    }).then(function(r){return r.json();}).then(function(d){
      if (!d.access_token){ clear(); return null; }
      d.expires_at = Math.floor(Date.now()/1000)+(d.expires_in||3600);
      save(d); return d;
    }).catch(function(){ return sess; });
  }

  function fromTable(table) {
    var sess  = read();
    var tok   = sess && sess.access_token ? sess.access_token : SUPABASE_ANON;
    var cols  = '*';
    var filts = [];
    var isSingle = false;
    var _order   = null;
    var _limit   = null;
    var q = {
      select:  function(c){ cols=c||'*'; return q; },
      eq:      function(col,val){ filts.push(col+'=eq.'+encodeURIComponent(val)); return q; },
      neq:     function(col,val){ filts.push(col+'=neq.'+encodeURIComponent(val)); return q; },
      order:   function(col,asc){ _order = col+'.'+(asc?'asc':'desc'); return q; },
      limit:   function(n){ _limit = n; return q; },
      single:  function(){ isSingle=true; return q; },
      then: function(res, rej) {
        var url = DB+'/'+table+'?select='+cols+(filts.length?'&'+filts.join('&'):'');
        if (_order) url += '&order='+_order;
        if (_limit) url += '&limit='+_limit;
        var hdrs = ah(tok);
        if (isSingle) hdrs['Accept'] = 'application/vnd.pgrst.object+json';
        return fetch(url, {headers:hdrs})
          .then(function(r){return r.json();})
          .then(function(d){
            if (isSingle) {
              res(d && !d.code ? {data:d, error:null} : {data:null, error:d});
            } else {
              res(Array.isArray(d) ? {data:d,error:null} : {data:[],error:d});
            }
          }).catch(rej);
      },
      insert: function(body) {
        return fetch(DB+'/'+table, {
          method:'POST',
          headers: Object.assign(ah(tok), {'Prefer':'return=representation'}),
          body: JSON.stringify(body)
        }).then(function(r){
          return r.ok ? r.json().then(function(d){return {data:d,error:null};}) : r.json().then(function(e){return {data:null,error:e};});
        }).catch(function(e){return {data:null,error:{message:e.message}};});
      },
      update: function(body) {
        var url = DB+'/'+table+(filts.length?'?'+filts.join('&'):'');
        return fetch(url, {
          method:'PATCH',
          headers: Object.assign(ah(tok), {'Prefer':'return=minimal'}),
          body: JSON.stringify(body)
        }).then(function(r){
          return r.ok ? {data:body,error:null} : r.json().then(function(e){return {data:null,error:e};});
        }).catch(function(e){return {data:null,error:{message:e.message}};});
      },
      upsert: function(body) {
        return fetch(DB+'/'+table, {
          method:'POST',
          headers: Object.assign(ah(tok), {'Prefer':'resolution=merge-duplicates,return=minimal'}),
          body: JSON.stringify(body)
        }).then(function(r){
          return r.ok ? {data:body,error:null} : r.json().then(function(e){return {data:null,error:e};});
        }).catch(function(e){return {data:null,error:{message:e.message}};});
      }
    };
    return q;
  }

  return {
    getSession: function() {
      return refresh(read()).then(function(s){ return {data:{session:s},error:null}; });
    },
    onAuthStateChange: function(cb) { _listeners.push(cb); },
    signInWithPassword: function(creds) {
      return fetch(A+'/token?grant_type=password', {
        method:'POST', headers:bh(),
        body:JSON.stringify({email:creds.email, password:creds.password})
      }).then(function(r){return r.json();}).then(function(d){
        if (!d.access_token) return {data:null, error:{message:d.error_description||d.msg||'Login failed.'}};
        d.expires_at = Math.floor(Date.now()/1000)+(d.expires_in||3600);
        save(d); emit('SIGNED_IN', d);
        return {data:{session:d}, error:null};
      }).catch(function(){ return {data:null,error:{message:'Network error — check your connection.'}}; });
    },
    signUp: function(creds) {
      var body = {email:creds.email, password:creds.password};
      if (creds.options && creds.options.data) body.data = creds.options.data;
      return fetch(A+'/signup', {method:'POST',headers:bh(),body:JSON.stringify(body)})
        .then(function(r){return r.json();}).then(function(d){
          if (d.error||d.msg) return {data:null,error:{message:d.error_description||d.msg||'Signup failed.'}};
          if (d.access_token){
            d.expires_at=Math.floor(Date.now()/1000)+(d.expires_in||3600);
            save(d); emit('SIGNED_IN',d);
            return {data:{session:d},error:null};
          }
          return {data:{session:null},error:null};
        }).catch(function(){ return {data:null,error:{message:'Network error — check your connection.'}}; });
    },
    signOut: function() {
      var s=read(); clear(); emit('SIGNED_OUT',null);
      if (s && s.access_token)
        fetch(A+'/logout',{method:'POST',headers:ah(s.access_token)}).catch(function(){});
      return Promise.resolve({error:null});
    },
    updateUser: function(payload) {
      var s=read(); if (!s||!s.access_token) return Promise.resolve({error:{message:'Not logged in'}});
      return fetch(A+'/user',{method:'PUT',headers:ah(s.access_token),body:JSON.stringify(payload)})
        .then(function(r){return r.json();})
        .then(function(d){ return d.id ? {data:{user:d},error:null} : {data:null,error:d}; })
        .catch(function(e){return {error:{message:e.message}};});
    },
    signInWithGoogle: function() {
      var redirectTo = encodeURIComponent(window.location.origin + '/index.html');
      window.location.href = A + '/authorize?provider=google&redirect_to=' + redirectTo;
    },
    handleOAuthCallback: async function() {
      var hash = window.location.hash;
      if (!hash || hash.indexOf('access_token') === -1) return null;
      var params = {};
      hash.replace(/^#/, '').split('&').forEach(function(p) {
        var kv = p.split('='); params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]||'');
      });
      if (!params.access_token) return null;
      params.expires_at = Math.floor(Date.now()/1000) + (parseInt(params.expires_in)||3600);
      // Fetch full user object so session.user exists for the rest of init()
      try {
        var r = await fetch(A + '/user', {
          headers: { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + params.access_token }
        });
        var u = await r.json();
        if (u && u.id) params.user = u;
      } catch(e) {}
      save(params);
      // Clean the URL — remove the token hash so refresh doesn't re-process it
      history.replaceState(null, '', window.location.pathname + window.location.search);
      return params;
    },
    from: fromTable,
    rpc: function(fnName, params) {
      var s   = (function(){ try{ var x=localStorage.getItem('msql_sess'); return x?JSON.parse(x):null; }catch(e){return null;} })();
      var tok = s && s.access_token ? s.access_token : SUPABASE_ANON;
      return fetch(SUPABASE_URL + '/rest/v1/rpc/' + fnName, {
        method: 'POST',
        headers: { 'Content-Type':'application/json','apikey':SUPABASE_ANON,'Authorization':'Bearer '+tok },
        body: JSON.stringify(params || {})
      }).then(function(r){ return r.json(); })
        .then(function(d){ return Array.isArray(d) ? {data:d,error:null} : {data:null,error:d}; })
        .catch(function(e){ return {data:null,error:{message:e.message}}; });
    }
  };
})();

// ── THEME ─────────────────────────────────────────────────────────
function initTheme() {
  var t = localStorage.getItem('msql_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('msql_theme', theme);
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  var next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.add('theme-transitioning');
  setTheme(next);
  setTimeout(function() {
    document.documentElement.classList.remove('theme-transitioning');
  }, 350);
}

// ── STATE ─────────────────────────────────────────────────────────
let SQL               = null;
let currentQ          = 0;
let filteredQuestions = QUESTIONS;
let activeTag         = "ALL";
let solvedSet         = new Set();
let solvedAtMap       = {};
let editor            = null;
let currentUser       = null;
let userProfile       = null;
let profileQFilter    = 'all';
let prevPage          = 'landing';

// ── INIT ─────────────────────────────────────────────────────────
async function init() {
  initTheme();
  try {
    SQL = await initSqlJs({
      locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${f}`
    });

    // Handle OAuth redirect (Google login)
    await Auth.handleOAuthCallback();

    // Auth runs in background — never blocks site from appearing
    Auth.onAuthStateChange(async function(event, session) {
      if (event === 'SIGNED_IN' && session && session.user) {
        currentUser = session.user;
        await loadUserProgress(currentUser.id);
        await loadUserProfile(currentUser.id);
        trackUserActivity(currentUser);
        updateAuthUI(currentUser);
        closeAuthModal();
      } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        userProfile  = null;
        solvedSet    = new Set();
        solvedAtMap  = {};
        updateAuthUI(null);
        updateProgress();
        buildPills();
      }
    });

    Auth.getSession().then(async function(res) {
      var session = res.data && res.data.session;
      if (session && session.user) {
        currentUser = session.user;
        await loadUserProgress(currentUser.id);
        await loadUserProfile(currentUser.id);
        trackUserActivity(currentUser);
        updateAuthUI(currentUser);
      }
    }).catch(function(e) { console.warn('Auth session check failed:', e.message); });

    checkAnnouncement();

    document.getElementById('loadingScreen').style.display = 'none';
    buildPills();
    buildTopicFilters();
    buildLandingCards();
    updateHeroCount();
    initTestimonials();
    showLanding();
    initEditor();

  } catch(e) {
    document.getElementById('loadingScreen').innerHTML =
      `<div style="color:#e55;font-family:monospace;font-size:14px;padding:24px;text-align:center">
        <div style="font-size:24px;margin-bottom:12px">⚠️</div>
        Failed to load SQL engine: ${e.message}
      </div>`;
  }
}

function initEditor() {
  const textarea = document.getElementById('sqlEditor');

  editor = CodeMirror.fromTextArea(textarea, {
    mode: 'text/x-sql',
    theme: 'material-darker',
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    smartIndent: true,
    indentUnit: 2,
    tabSize: 2,
  });

  editor.setSize('100%', '100%');

  editor.setValue(`-- Write your SQL query here...
-- Press ▶ Run to test, Submit to check all cases`);
}
// ── LANDING PAGE BUILDERS ─────────────────────────────────────────
function updateHeroCount() {
  const el = document.getElementById('heroStatCount');
  if (el) el.textContent = QUESTIONS.length;
}

// ── STREAK ────────────────────────────────────────────────────────
function computeStreak() {
  const vals = Object.values(solvedAtMap).filter(Boolean);
  if (!vals.length) return 0;
  const days = new Set(vals.map(ts => new Date(ts).toDateString()));
  const today = new Date(); today.setHours(0,0,0,0);
  const todayStr = today.toDateString();
  const yestStr  = new Date(today - 864e5).toDateString();
  if (!days.has(todayStr) && !days.has(yestStr)) return 0;
  let streak = 0;
  let cur = days.has(todayStr) ? new Date(today) : new Date(today - 864e5);
  while (days.has(cur.toDateString())) { streak++; cur = new Date(cur - 864e5); }
  return streak;
}

// ── DAILY CHALLENGE ───────────────────────────────────────────────
function updateDailyChallenge() {
  if (!QUESTIONS.length) return;
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start) / 864e5);
  const q = QUESTIONS[dayOfYear % QUESTIONS.length];
  const solved = solvedSet.has(q.id);
  const titleEl = document.getElementById('dcTitle');
  const diffEl  = document.getElementById('dcDiff');
  const topicEl = document.getElementById('dcTopic');
  const hintEl  = document.getElementById('dcSolvedHint');
  if (titleEl) titleEl.textContent = q.title;
  if (diffEl)  { diffEl.textContent = q.difficulty; diffEl.className = 'badge ' + q.difficulty.toLowerCase(); }
  if (topicEl) topicEl.textContent = q.tags[0];
  if (hintEl)  hintEl.textContent = solved ? '✓ You solved this one!' : 'Fresh question every day';
  if (hintEl)  hintEl.style.color = solved ? 'var(--accent)' : 'var(--hint)';
  const btn = document.querySelector('#dailyChallengeSection .btn-primary');
  if (btn) { btn.textContent = solved ? '✓ Solve Again →' : 'Solve It Now →'; }
}

function startDailyChallenge() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start) / 864e5);
  const q = QUESTIONS[dayOfYear % QUESTIONS.length];
  const idx = filteredQuestions.findIndex(fq => fq.id === q.id);
  showApp(idx >= 0 ? idx : 0);
}

// ── LANDING PERSONALISATION ───────────────────────────────────────
function updateLandingPersonalization() {
  const loggedIn = !!currentUser;
  const guestEl  = document.getElementById('heroGuest');
  const userEl   = document.getElementById('heroUser');
  if (!guestEl || !userEl) return;

  if (!loggedIn) {
    guestEl.style.display = '';
    userEl.style.display  = 'none';
    const statsEl = document.getElementById('heroStats');
    if (statsEl) statsEl.style.marginTop = '';
    return;
  }

  guestEl.style.display = 'none';
  userEl.style.display  = '';

  // Name
  const name = (userProfile && (userProfile.display_name || userProfile.full_name))
    || (currentUser.user_metadata && (currentUser.user_metadata.full_name || currentUser.user_metadata.name))
    || currentUser.email.split('@')[0];
  const firstName = name.split(' ')[0];
  const nameEl = document.getElementById('heroUserName');
  if (nameEl) nameEl.textContent = firstName;

  // Progress
  const solved = solvedSet.size;
  const total  = QUESTIONS.length;
  const pct    = total ? Math.round((solved / total) * 100) : 0;
  const solvedEl = document.getElementById('heroSolvedCount');
  const fillEl   = document.getElementById('heroProgFill');
  const pctEl    = document.getElementById('heroProgPct');
  const msgEl    = document.getElementById('heroProgressMsg');
  if (solvedEl) solvedEl.textContent = solved;
  if (fillEl)   fillEl.style.width   = pct + '%';
  if (pctEl)    pctEl.textContent    = pct + '%';
  if (msgEl) {
    if (solved === 0)         msgEl.textContent = 'Solve your first question today — it only takes 5 minutes.';
    else if (pct < 25)        msgEl.textContent = 'Great start! Keep the momentum going.';
    else if (pct < 50)        msgEl.textContent = 'You\'re in the top half — most people stop here. Don\'t.';
    else if (pct < 75)        msgEl.textContent = 'Past the halfway mark. Your certificate is in sight.';
    else if (solved < total)  msgEl.textContent = 'Almost there! ' + (total - solved) + ' questions left to earn your certificate.';
    else                      msgEl.textContent = '🎉 All 60 done! Claim your certificate below.';
  }

  // Streak
  const streak = computeStreak();
  const pillEl = document.getElementById('heroStreakPill');
  const valEl  = document.getElementById('heroStreakVal');
  const navBadge = document.getElementById('navStreakBadge');
  const navCount = document.getElementById('navStreakCount');
  if (streak > 0) {
    if (pillEl)   { pillEl.style.display = 'flex'; if (valEl) valEl.textContent = streak; }
    if (navBadge) { navBadge.style.display = 'flex'; if (navCount) navCount.textContent = streak; }
  } else {
    if (pillEl)   pillEl.style.display = 'none';
    if (navBadge) navBadge.style.display = 'none';
  }

  // Update daily challenge solved state
  updateDailyChallenge();
}

function buildLandingCards() {
  const wrap = document.getElementById('landingQCards');

  if (!wrap) return;

  // EMPTY STATE
  if (filteredQuestions.length === 0) {
    wrap.innerHTML = `
      <div class="empty-state">
        No questions found for this topic.
      </div>
    `;
    return;
  }

  wrap.innerHTML = filteredQuestions.map((q, i) => `
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
  filteredQuestions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-pill';
    btn.id = `pill-${i}`;
    btn.textContent = `${q.num}  ${q.title}`;
    btn.onclick = () => renderQuestion(i);
    wrap.appendChild(btn);
  });
}

// ── AUTH UI ───────────────────────────────────────────────────────
function updateAuthUI(user) {
  const loggedIn = !!user;
  const initials = loggedIn ? getInitials(user.user_metadata?.full_name || user.email) : '';
  const name     = loggedIn ? (user.user_metadata?.full_name || user.email.split('@')[0]) : '';

  document.getElementById('landingNavAuth').style.display = loggedIn ? 'none' : 'flex';
  document.getElementById('landingNavUser').style.display = loggedIn ? 'flex' : 'none';
  if (loggedIn) {
    document.getElementById('landingUserAvatar').textContent = initials;
    document.getElementById('landingUserName').textContent   = name;
  }

  document.getElementById('appLoginBtn').style.display = loggedIn ? 'none' : 'flex';
  document.getElementById('appUser').style.display     = loggedIn ? 'flex' : 'none';
  if (loggedIn) {
    document.getElementById('appUserAvatar').textContent = initials;
    document.getElementById('appUserName').textContent   = name;
  }

  // Show admin nav link only to admins
  var adminLink = document.getElementById('adminNavLink');
  if (adminLink) adminLink.style.display = (loggedIn && userProfile && userProfile.is_admin) ? 'inline-flex' : 'none';

  updateLandingPersonalization();
}

function getInitials(str) {
  return str.split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// ── AUTH MODAL ────────────────────────────────────────────────────
function openAuthModal(tab = 'login') {
  switchTab(tab);
  document.getElementById('authModalOverlay').classList.add('open');
  setTimeout(() => {
    const el = tab === 'login'
      ? document.getElementById('loginEmail')
      : document.getElementById('signupName');
    if (el) el.focus();
  }, 120);
}

function closeAuthModal() {
  document.getElementById('authModalOverlay').classList.remove('open');
  clearAuthErrors();
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('authModalOverlay')) closeAuthModal();
}

function switchTab(tab) {
  document.getElementById('formLogin').style.display  = tab === 'login'  ? 'block' : 'none';
  document.getElementById('formSignup').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('tabLogin').classList.toggle('active',  tab === 'login');
  document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
  clearAuthErrors();
}

function clearAuthErrors() {
  document.getElementById('loginError').textContent  = '';
  document.getElementById('signupError').textContent = '';
}

function setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  btn.disabled      = loading;
  btn.style.opacity = loading ? '0.6' : '1';
  btn.textContent   = loading ? 'Please wait...'
    : (btnId === 'loginBtn' ? 'Login →' : 'Create Account →');
}

// ── LOGIN / SIGNUP / LOGOUT ───────────────────────────────────────
async function handleLogin() {
  const errEl    = document.getElementById('loginError');
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) { errEl.textContent = 'Please fill in all fields.'; return; }
  errEl.textContent = '';
  setLoading('loginBtn', true);
  const result = await Auth.signInWithPassword({ email, password });
  setLoading('loginBtn', false);
  if (result.error) {
    errEl.textContent = result.error.message.includes('Invalid') ? 'Wrong email or password.' : result.error.message;
  }
}

async function handleSignup() {
  const errEl    = document.getElementById('signupError');
  const name     = document.getElementById('signupName').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  if (!name || !email || !password) { errEl.textContent = 'Please fill in all fields.'; return; }
  if (password.length < 6)          { errEl.textContent = 'Password must be at least 6 characters.'; return; }
  errEl.textContent = '';
  setLoading('signupBtn', true);
  const result = await Auth.signUp({ email, password, options: { data: { full_name: name } } });
  setLoading('signupBtn', false);
  if (result.error) {
    errEl.textContent = result.error.message;
  } else if (result.data && result.data.session) {
    errEl.style.color = '#00c896';
    errEl.textContent = '✓ Account created! You are now logged in.';
  } else {
    errEl.style.color = '#00c896';
    errEl.textContent = '✓ Account created! Check your email to confirm, then log in.';
  }
}

async function logoutUser() {
  await Auth.signOut();
}

// ── USER PROGRESS ─────────────────────────────────────────────────
async function loadUserProgress(userId) {
  try {
    const { data, error } = await Auth.from('user_progress').select('question_id,solved_at').eq('user_id', userId);
    if (error) { console.error('Progress load error:', error); return; }
    solvedSet   = new Set((data || []).map(r => r.question_id));
    solvedAtMap = {};
    (data || []).forEach(r => { solvedAtMap[r.question_id] = r.solved_at; });
    updateProgress();
    buildPills();
    updateLandingPersonalization();
  } catch(e) { console.warn('loadUserProgress failed:', e.message); }
}

async function saveUserProgress(questionId) {
  if (!currentUser) return;
  try {
    const { error } = await Auth.from('user_progress').upsert(
      { user_id: currentUser.id, question_id: questionId, solved_at: new Date().toISOString() }
    );
    if (error) console.error('Progress save error:', error);
  } catch(e) { console.warn('saveUserProgress failed:', e.message); }
}

// ── USER PROFILE ──────────────────────────────────────────────────
async function loadUserProfile(userId) {
  if (!userId) return;
  try {
    const { data, error } = await Auth.from('user_profiles').select('*').eq('id', userId).single();
    if (error && error.code !== 'PGRST116') { console.error('Profile load error:', error); return; }
    userProfile = data || null;
  } catch(e) { console.warn('loadUserProfile failed:', e.message); }
}

async function saveProfile() {
  if (!currentUser) return;
  const displayName   = document.getElementById('pfDisplayName').value.trim();
  const fullName      = document.getElementById('pfFullName').value.trim();
  const qualification = document.getElementById('pfQualification').value.trim();
  const linkedin      = document.getElementById('pfLinkedin').value.trim();
  const resume        = document.getElementById('pfResume').value.trim();
  const bio           = document.getElementById('pfBio').value.trim();
  const errEl         = document.getElementById('profileSaveError');
  const btn           = document.getElementById('profileSaveBtn');

  if (linkedin && !isValidUrl(linkedin)) { errEl.style.color='var(--red)'; errEl.textContent='LinkedIn URL is not valid.'; return; }
  if (resume  && !isValidUrl(resume))   { errEl.style.color='var(--red)'; errEl.textContent='Resume URL is not valid.'; return; }

  btn.disabled = true; btn.textContent = 'Saving...'; errEl.textContent = '';

  const profileData = {
    id: currentUser.id,
    full_name: fullName || null,
    display_name: displayName || null,
    qualification: qualification || null,
    linkedin_url: linkedin || null,
    resume_url: resume || null,
    bio: bio || null,
    updated_at: new Date().toISOString()
  };

  const { error } = await Auth.from('user_profiles').upsert(profileData);
  btn.disabled = false; btn.textContent = 'Save Changes';

  if (error) {
    errEl.style.color = 'var(--red)';
    errEl.textContent = 'Save failed: ' + error.message;
  } else {
    userProfile = profileData;
    errEl.style.color = '#00c896';
    errEl.textContent = '✓ Profile saved!';
    setTimeout(() => { if (errEl.textContent === '✓ Profile saved!') errEl.textContent = ''; }, 3000);
    if (fullName) {
      await Auth.updateUser({ data: { full_name: fullName } });
      if (!currentUser.user_metadata) currentUser.user_metadata = {};
      currentUser.user_metadata.full_name = fullName;
      updateAuthUI(currentUser);
    }
    renderProfileCard();
  }
}

function isValidUrl(str) {
  try { new URL(str); return true; } catch { return false; }
}

// ── PROFILE PAGE RENDER ───────────────────────────────────────────
function renderProfilePage() {
  renderProfileCard();
  renderProfileForm();
  renderProfileStats();
  renderProfileQList('all');
}

function renderProfileCard() {
  if (!currentUser) return;
  const name     = userProfile?.display_name || userProfile?.full_name
                || currentUser.user_metadata?.full_name || currentUser.email.split('@')[0];
  const initials = getInitials(name);
  const joined   = new Date(currentUser.created_at).toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' });

  document.getElementById('profileAvatar').textContent      = initials;
  document.getElementById('profileDisplayName').textContent = name;
  document.getElementById('profileEmail').textContent       = currentUser.email;
  document.getElementById('profileJoined').textContent      = 'Joined ' + joined;

  let linksHTML = '';
  if (userProfile?.linkedin_url) linksHTML += `<a class="profile-link-btn" href="${userProfile.linkedin_url}" target="_blank" rel="noopener">🔗 LinkedIn</a>`;
  if (userProfile?.resume_url)   linksHTML += `<a class="profile-link-btn" href="${userProfile.resume_url}" target="_blank" rel="noopener">📄 Resume</a>`;
  if (linksHTML) {
    const cardInfo = document.getElementById('profileJoined').parentElement;
    const existing = cardInfo.querySelector('.profile-links');
    if (existing) existing.remove();
    const linksDiv = document.createElement('div');
    linksDiv.className = 'profile-links';
    linksDiv.innerHTML = linksHTML;
    cardInfo.appendChild(linksDiv);
  }
}

function renderProfileForm() {
  document.getElementById('pfDisplayName').value   = userProfile?.display_name || '';
  document.getElementById('pfFullName').value      = userProfile?.full_name || currentUser?.user_metadata?.full_name || '';
  document.getElementById('pfQualification').value = userProfile?.qualification || '';
  document.getElementById('pfLinkedin').value      = userProfile?.linkedin_url || '';
  document.getElementById('pfResume').value        = userProfile?.resume_url || '';
  document.getElementById('pfBio').value           = userProfile?.bio || '';
  document.getElementById('profileSaveError').textContent = '';
}

function renderProfileStats() {
  const total  = QUESTIONS.length;
  const solved = solvedSet.size;
  const pct    = total > 0 ? Math.round((solved / total) * 100) : 0;
  const easySolved   = QUESTIONS.filter(q => q.difficulty === 'Easy'   && solvedSet.has(q.id)).length;
  const mediumSolved = QUESTIONS.filter(q => q.difficulty === 'Medium' && solvedSet.has(q.id)).length;
  const hardSolved   = QUESTIONS.filter(q => q.difficulty === 'Hard'   && solvedSet.has(q.id)).length;

  document.getElementById('statSolved').textContent  = solved;
  document.getElementById('statTotal').textContent   = total;
  document.getElementById('statPercent').textContent = pct + '%';
  document.getElementById('statEasy').textContent    = easySolved;
  document.getElementById('statMedium').textContent  = mediumSolved;
  document.getElementById('statHard').textContent    = hardSolved;
  document.getElementById('profileProgressFill').style.width = pct + '%';
  document.getElementById('profileProgressLabel').textContent = `${solved} of ${total} problems solved (${pct}%)`;
  if (typeof CertFlow !== 'undefined') CertFlow.renderCertProfileBlock();
  renderProfileThemeToggle();
}

function renderProfileThemeToggle() {
  const el = document.getElementById('profileThemeRow');
  if (!el) return;
  const isDark = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';
  el.innerHTML = `
    <div>
      <div class="profile-theme-label">${isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}</div>
      <div class="profile-theme-desc">${isDark ? 'Easy on the eyes for long sessions' : 'Clean and bright for focus'}</div>
    </div>
    <button class="theme-toggle-lg" onclick="toggleTheme();renderProfileThemeToggle();" title="Switch theme">
      <span class="tt-moon">🌙</span>
      <span class="tt-sun">☀️</span>
      <div class="tt-thumb"></div>
    </button>`;
}

function filterProfileQ(filter) {
  profileQFilter = filter;
  ['filterAll','filterSolved','filterUnsolved'].forEach(id => document.getElementById(id).classList.remove('active'));
  const map = { all:'filterAll', solved:'filterSolved', unsolved:'filterUnsolved' };
  document.getElementById(map[filter]).classList.add('active');
  renderProfileQList(filter);
}

function renderProfileQList(filter) {
  const wrap = document.getElementById('profileQList');
  if (!wrap) return;
  let qs = QUESTIONS;
  if (filter === 'solved')   qs = QUESTIONS.filter(q => solvedSet.has(q.id));
  if (filter === 'unsolved') qs = QUESTIONS.filter(q => !solvedSet.has(q.id));

  if (qs.length === 0) {
    wrap.innerHTML = `<div class="profile-q-empty"><div class="es-icon">${filter==='solved'?'🎯':'○'}</div>${filter==='solved'?'No questions solved yet. Start practicing!':'All questions solved! 🎉'}</div>`;
    return;
  }
  wrap.innerHTML = qs.map(q => {
    const isSolved  = solvedSet.has(q.id);
    const solvedAt  = solvedAtMap[q.id]
      ? new Date(solvedAtMap[q.id]).toLocaleDateString('en-IN', {day:'2-digit',month:'short',year:'numeric'})
      : '';
    return `<div class="profile-q-row" onclick="goToProblem(${q.id})">
      <div class="profile-q-status ${isSolved?'solved':'unsolved'}">${isSolved?'✓':''}</div>
      <div class="profile-q-num">${q.num}</div>
      <div class="profile-q-title">${q.title}</div>
      <div class="profile-q-tags">${q.tags.slice(0,2).join(' · ')}</div>
      <div class="badge ${q.difficulty.toLowerCase()}" style="font-size:10px;padding:2px 8px">${q.difficulty}</div>
      ${isSolved && solvedAt ? `<div class="profile-q-solved-at">${solvedAt}</div>` : ''}
    </div>`;
  }).join('');
}

function goToProblem(questionId) {
  const idx = QUESTIONS.findIndex(q => q.id === questionId);
  if (idx === -1) return;
  filteredQuestions = QUESTIONS;
  activeTag = 'ALL';
  currentQ  = idx;
  _hideAllPages();
  document.getElementById('app-page').classList.add('active');
  buildPills();
  renderQuestion(idx);
}

// ── NAVIGATION ────────────────────────────────────────────────────
function _hideAllPages() {
  ['landing-page','app-page','learn-page','profile-page'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
}

function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  // Duplicate cards for seamless infinite loop
  const clone = track.innerHTML;
  track.innerHTML = clone + clone;
}

function showLanding() {
  _hideAllPages();
  document.getElementById('landing-page').classList.add('active');
  updateDailyChallenge();
  updateLandingPersonalization();
}

function showApp(qIdx) {
  if (qIdx !== undefined) currentQ = qIdx;
  _hideAllPages();
  document.getElementById('app-page').classList.add('active');
  renderQuestion(currentQ);
}

function showProfile() {
  if (!currentUser) { openAuthModal('login'); return; }
  const landingActive = document.getElementById('landing-page').classList.contains('active');
  prevPage = landingActive ? 'landing' : 'app';
  _hideAllPages();
  document.getElementById('profile-page').classList.add('active');
  renderProfilePage();
}

function goBackFromProfile() {
  _hideAllPages();
  if (prevPage === 'app') {
    document.getElementById('app-page').classList.add('active');
  } else {
    document.getElementById('landing-page').classList.add('active');
  }
}

// ── ACTIVITY TRACKING ─────────────────────────────────────────────
function trackUserActivity(user) {
  if (!user) return;
  Auth.from('user_profiles').upsert({
    id:           user.id,
    email:        user.email,
    last_seen_at: new Date().toISOString()
  }).catch(function(){});
}

// ── ANNOUNCEMENT BANNER ───────────────────────────────────────────
async function checkAnnouncement() {
  try {
    var dismissed = localStorage.getItem('msql_dismissed_ann') || '';
    var result    = await Auth.from('site_config').select('*').eq('key','announcement').single();
    var msg       = (result.data && result.data.value) ? result.data.value.trim() : '';
    updateAnnouncementBanner(msg, dismissed);
  } catch(e) {}
}

function updateAnnouncementBanner(msg, dismissed) {
  var banner = document.getElementById('announcementBanner');
  var textEl = document.getElementById('announcementText');
  if (!banner) return;
  if (!msg || msg === (dismissed !== undefined ? dismissed : localStorage.getItem('msql_dismissed_ann') || '')) {
    banner.style.display = 'none';
    return;
  }
  textEl.textContent   = msg;
  banner.style.display = 'flex';
}

function dismissAnnouncement() {
  var textEl = document.getElementById('announcementText');
  localStorage.setItem('msql_dismissed_ann', textEl ? textEl.textContent : '');
  document.getElementById('announcementBanner').style.display = 'none';
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
  const q = filteredQuestions[idx];

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
  editor.setValue('');
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

function buildTopicFilters() {
  const wrap = document.getElementById("topicFilters");

  if (!wrap) return;

  const allTags = [
    "ALL",
    ...new Set(
      QUESTIONS.flatMap(q => q.tags || [])
    )
  ];

  wrap.innerHTML = allTags.map(tag => `
    <button
      class="topic-filter ${tag === activeTag ? "active" : ""}"
      onclick="filterQuestions('${tag}')"
    >
      ${tag}
    </button>
  `).join("");
}

function filterQuestions(tag) {
  activeTag = tag;

  if (tag === "ALL") {
    filteredQuestions = QUESTIONS;
  } else {
    filteredQuestions = QUESTIONS.filter(q =>
      q.tags && q.tags.includes(tag)
    );
  }

  currentQ = 0;

  buildTopicFilters();
  buildLandingCards();
  buildQuestionPills();
  renderQuestion();
  
}

// ── RUN ───────────────────────────────────────────────────────────
function runQuery() {
  if (!SQL) { showOutputErr('SQL engine not ready yet.'); return; }
  const query = editor.getValue().trim();
  if (!query) { showOutputErr('Write a SQL query first.'); return; }

  const q = filteredQuestions[currentQ];
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
  if (!currentUser) {
    openAuthModal('login');
    document.getElementById('outputLabel').textContent  = 'Login required';
    document.getElementById('outputStatus').textContent = '';
    document.getElementById('outputBody').innerHTML = `
      <div class="login-nudge">
        <div class="login-nudge-icon">🔒</div>
        <div class="login-nudge-title">Login to Submit</div>
        <div class="login-nudge-sub">Run is free for everyone. Login to submit and save your progress.</div>
        <button class="login-nudge-btn" onclick="openAuthModal('login')">Login / Sign Up</button>
      </div>`;
    return;
  }

  if (!SQL) return;
  const query = editor.getValue().trim();
  if (!query) { showOutputErr('Write a SQL query first.'); return; }

  const q = filteredQuestions[currentQ];
  document.getElementById('outputLabel').textContent = 'Submission';
  document.getElementById('outputBody').innerHTML    = '';

  let allPass = true;
  const results = [];

  q.testCases.forEach(tc => {
    const seed = tc.seed || q.seed;
    try {
      const res  = execQuery(seed, query);
      const rows = toRows(res);
      const pass = tc.check(rows);
      allPass    = allPass && pass;
      results.push({ name: tc.name, pass, err: null });
    } catch(e) {
      allPass = false;
      results.push({ name: tc.name, pass: false, err: e.message });
    }
  });

  const passed   = results.filter(r => r.pass).length;
  const statusEl = document.getElementById('outputStatus');
  statusEl.textContent = `${passed}/${results.length} passed`;
  statusEl.className   = `output-status-text ${allPass ? 'ost-pass' : 'ost-fail'}`;

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
    solvedSet.add(q.id);
    document.getElementById('solvedBanner').className = 'solved-banner show';
    const pill = document.getElementById(`pill-${currentQ}`);
    if (pill) pill.classList.add('solved');
    updateProgress();
    saveUserProgress(q.id);
  }
}

// ── UTILS ─────────────────────────────────────────────────────────
function updateProgress() {
  const pct = (solvedSet.size / QUESTIONS.length) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

function resetEditor() {
  editor.setValue('');
  editor.focus();
}

function showOutputErr(msg) {
  document.getElementById('outputStatus').textContent = '';
  document.getElementById('outputBody').innerHTML = `<div class="err-block">${msg}</div>`;
}

// ================================================================
//  CERTIFICATION FLOW
// ================================================================

// ── EmailJS config — sign up free at emailjs.com, fill in below ──
var EMAILJS_SERVICE_ID  = '';   // e.g. 'service_abc123'
var EMAILJS_TEMPLATE_ID = '';   // e.g. 'template_xyz789'
var EMAILJS_PUBLIC_KEY  = '';   // e.g. 'user_XXXXXXXXXXXX'

// ── 15 MCQ questions ─────────────────────────────────────────────
var CERT_MCQ = [
  {
    q: "What is the key difference between WHERE and HAVING?",
    opts: [
      "WHERE filters rows before aggregation; HAVING filters groups after GROUP BY",
      "HAVING filters rows before aggregation; WHERE filters groups after GROUP BY",
      "They are completely interchangeable",
      "WHERE only works with numeric columns"
    ],
    ans: 0, topic: "Filtering"
  },
  {
    q: "Which JOIN type returns all rows from the LEFT table and NULL-filled columns for unmatched rows in the RIGHT table?",
    opts: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
    ans: 2, topic: "JOINs"
  },
  {
    q: "What is the difference between COUNT(*) and COUNT(column_name)?",
    opts: [
      "COUNT(*) is faster; COUNT(column) is slower",
      "COUNT(*) counts all rows including NULLs; COUNT(column) counts only non-NULL values",
      "They always return the same result",
      "COUNT(*) only works on numeric types"
    ],
    ans: 1, topic: "Aggregates"
  },
  {
    q: "SELECT dept, SUM(salary) FROM employees GROUP BY dept HAVING SUM(salary) > 50000 — what does HAVING do here?",
    opts: [
      "Filters individual employees with salary > 50000 before grouping",
      "Filters departments whose total salary exceeds 50000 after grouping",
      "Sorts departments by total salary descending",
      "Creates a new computed column in the output"
    ],
    ans: 1, topic: "HAVING"
  },
  {
    q: "How does DENSE_RANK() differ from RANK()?",
    opts: [
      "DENSE_RANK() skips rank numbers after ties; RANK() does not",
      "DENSE_RANK() does NOT skip rank numbers after ties; RANK() does skip them",
      "They always return identical results",
      "DENSE_RANK() only works with date columns"
    ],
    ans: 1, topic: "Window Functions"
  },
  {
    q: "In SQL, what does the expression NULL = NULL evaluate to?",
    opts: ["TRUE", "FALSE", "NULL", "0"],
    ans: 2, topic: "NULL Handling"
  },
  {
    q: "What does COALESCE(NULL, NULL, 7, 99) return?",
    opts: ["NULL", "99", "7", "Error"],
    ans: 2, topic: "NULL Handling"
  },
  {
    q: "Which of the following is a correctly written subquery?",
    opts: [
      "SELECT * FROM (SELECT id FROM orders WHERE amount > 1000) AS high_orders",
      "SELECT * SUBQUERY orders WHERE amount > 1000",
      "SELECT * WHERE id IN QUERY (SELECT id FROM orders)",
      "INNER SELECT id FROM orders WHERE amount > 1000"
    ],
    ans: 0, topic: "Subqueries"
  },
  {
    q: "What is a CTE (Common Table Expression)?",
    opts: [
      "A permanent table stored in the database schema",
      "A temporary named result set defined before the main query using the WITH keyword",
      "A type of index that speeds up GROUP BY queries",
      "A constraint that prevents duplicate column values"
    ],
    ans: 1, topic: "CTEs"
  },
  {
    q: "SELECT * FROM orders WHERE amount BETWEEN 100 AND 500 — are the values 100 and 500 included in the results?",
    opts: [
      "No — BETWEEN is exclusive on both ends (101–499 only)",
      "Yes — BETWEEN is inclusive on both ends (100 and 500 are included)",
      "Only the lower bound 100 is included",
      "Only the upper bound 500 is included"
    ],
    ans: 1, topic: "Operators"
  },
  {
    q: "This query has a mistake: SELECT dept, name, COUNT(*) FROM employees GROUP BY dept — what is wrong?",
    opts: [
      "COUNT(*) cannot be used with GROUP BY",
      "'name' is neither in the GROUP BY clause nor wrapped in an aggregate — this violates SQL rules",
      "GROUP BY must appear before the WHERE clause",
      "Nothing is wrong; this query is perfectly valid"
    ],
    ans: 1, topic: "GROUP BY"
  },
  {
    q: "What does ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) assign?",
    opts: [
      "A unique sequential number to each row, restarting at 1 for each department, ordered by salary descending",
      "The total count of rows per department",
      "The department with the highest salary",
      "It filters to keep only the top-salary row per department"
    ],
    ans: 0, topic: "Window Functions"
  },
  {
    q: "Which statement about a LEFT JOIN is correct?",
    opts: [
      "Returns only rows with a match in both tables",
      "Returns all rows from the right table; left rows with no match get NULL",
      "Returns all rows from the left table; right-side columns are NULL when there is no match",
      "LEFT JOIN and INNER JOIN always produce the same result"
    ],
    ans: 2, topic: "JOINs"
  },
  {
    q: "You want rows from 'customers' that have at least one matching row in 'orders'. Which is most appropriate?",
    opts: [
      "SELECT * FROM customers WHERE NOT EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.id)",
      "SELECT * FROM customers WHERE EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.id)",
      "SELECT * FROM customers HAVING COUNT(orders) > 0",
      "SELECT * FROM customers WHERE customer_id IN orders"
    ],
    ans: 1, topic: "Subqueries"
  },
  {
    q: "What is the correct logical execution order of SQL clauses?",
    opts: [
      "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
      "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
      "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY",
      "WHERE → FROM → GROUP BY → SELECT → HAVING → ORDER BY"
    ],
    ans: 1, topic: "SQL Fundamentals"
  }
];

// ── CertFlow module ───────────────────────────────────────────────
var CertFlow = (function () {

  var PASS_MARK    = 10;
  var COOLDOWN_MS  = 24 * 60 * 60 * 1000;
  var TOTAL_SEC    = 15 * 60;

  var LS_STARTED = 'msql_cert_started';
  var LS_ORDER   = 'msql_cert_order';
  var LS_ANSWERS = 'msql_cert_answers';

  var _state       = null;  // 'eligible'|'in_test'|'cooldown'|'pass_pending'|'certified'
  var _qOrder      = [];    // shuffled MCQ indices
  var _currentQ    = 0;
  var _answers     = [];    // array of selected option indices
  var _timerSec    = TOTAL_SEC;
  var _timerRef    = null;
  var _rating      = 0;
  var _certDataUrl = null;
  var _lastAttemptId = null;
  var _lastScore   = 0;

  // ── shuffle helper ──────────────────────────────────────────
  function _shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ── screen switcher ──────────────────────────────────────────
  function _show(screenId, stepNum) {
    document.querySelectorAll('.cert-screen').forEach(function (el) {
      el.classList.remove('active');
    });
    var el = document.getElementById(screenId);
    if (el) el.classList.add('active');

    var stepsEl = document.getElementById('certProgressSteps');
    if (stepsEl) {
      stepsEl.style.display = stepNum ? 'flex' : 'none';
      if (stepNum) {
        [1, 2, 3].forEach(function (n) {
          var dot = document.getElementById('certProg' + n);
          if (dot) {
            dot.classList.toggle('active',   n === stepNum);
            dot.classList.toggle('done',     n < stepNum);
          }
        });
      }
    }
  }

  // ── load cert status from DB + localStorage ──────────────────
  async function _loadState() {
    if (!currentUser) return;

    // Already certified?
    if (userProfile && userProfile.is_certified) { _state = 'certified'; return; }

    // In-progress test in localStorage?
    var savedStart = localStorage.getItem(LS_STARTED);
    var savedOrder = localStorage.getItem(LS_ORDER);
    if (savedStart && savedOrder) {
      var elapsed = Date.now() - parseInt(savedStart, 10);
      if (elapsed < TOTAL_SEC * 1000) {
        _state      = 'in_test';
        _timerSec   = Math.max(0, TOTAL_SEC - Math.floor(elapsed / 1000));
        _qOrder     = JSON.parse(savedOrder);
        _answers    = JSON.parse(localStorage.getItem(LS_ANSWERS) || '[]');
        _currentQ   = _answers.length;
        return;
      }
      // Timer expired while away — treat as failed attempt, clear
      _clearLS();
    }

    // Check DB for latest attempt
    try {
      var r = await Auth.from('certification_attempts')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', false)
        .limit(1);

      var rows = r.data || [];
      if (rows.length > 0) {
        var latest = rows[0];
        _lastAttemptId = latest.id;
        _lastScore     = latest.score || 0;

        if (latest.passed) {
          _state = 'pass_pending'; // passed but feedback not submitted yet
          return;
        }
        if (latest.submitted_at) {
          var coolEnd = new Date(latest.submitted_at).getTime() + COOLDOWN_MS;
          if (Date.now() < coolEnd) {
            _state = 'cooldown';
            return;
          }
        }
      }
    } catch (e) {}

    _state = 'eligible';
  }

  // ── open modal ───────────────────────────────────────────────
  async function open() {
    if (!currentUser) { openAuthModal('login'); return; }
    await _loadState();
    document.getElementById('certModal').style.display = 'flex';

    if (_state === 'certified') {
      var _vName = (userProfile && (userProfile.display_name || userProfile.full_name)) || currentUser.email.split('@')[0];
      _drawCertificate('certCanvasView', _vName);
      _show('certScreenView', null);
    } else if (_state === 'in_test') {
      _resumeTest();
    } else if (_state === 'pass_pending') {
      _prefillEmail();
      _show('certScreenFeedback', 2);
    } else if (_state === 'cooldown') {
      _showCooldownScreen();
    } else {
      _show('certScreenHub', null);
    }
  }

  function close() {
    document.getElementById('certModal').style.display = 'none';
    if (_timerRef) { clearInterval(_timerRef); _timerRef = null; }
  }

  // ── start / resume test ──────────────────────────────────────
  async function startTest() {
    // Create DB attempt row
    try {
      var prev = await Auth.from('certification_attempts')
        .select('attempt_num')
        .eq('user_id', currentUser.id)
        .order('created_at', false)
        .limit(1);
      var prevRows = prev.data || [];
      var attemptNum = prevRows.length > 0 ? (prevRows[0].attempt_num + 1) : 1;

      var ins = await Auth.from('certification_attempts').insert({
        user_id:     currentUser.id,
        started_at:  new Date().toISOString(),
        attempt_num: attemptNum
      });
      if (ins.data && ins.data[0]) _lastAttemptId = ins.data[0].id;
    } catch (e) {}

    _qOrder   = _shuffle(CERT_MCQ.map(function (_, i) { return i; }));
    _answers  = [];
    _currentQ = 0;
    _timerSec = TOTAL_SEC;

    localStorage.setItem(LS_STARTED, Date.now().toString());
    localStorage.setItem(LS_ORDER,   JSON.stringify(_qOrder));
    localStorage.setItem(LS_ANSWERS, '[]');

    _show('certScreenTest', 1);
    _renderQuestion();
    _startTimer();
  }

  function _resumeTest() {
    _show('certScreenTest', 1);
    _renderQuestion();
    _startTimer();
  }

  // ── timer ────────────────────────────────────────────────────
  function _startTimer() {
    if (_timerRef) clearInterval(_timerRef);
    _updateTimerUI();
    _timerRef = setInterval(function () {
      _timerSec--;
      _updateTimerUI();
      if (_timerSec <= 0) {
        clearInterval(_timerRef);
        _timerRef = null;
        _submitTest(true);
      }
    }, 1000);
  }

  function _updateTimerUI() {
    var m   = Math.floor(_timerSec / 60);
    var s   = _timerSec % 60;
    var txt = m + ':' + (s < 10 ? '0' : '') + s;
    var el  = document.getElementById('certTimerVal');
    if (el) {
      el.textContent = txt;
      el.classList.toggle('cert-timer-warn', _timerSec <= 120);
    }
    var fill = document.getElementById('certTimerFill');
    if (fill) {
      var pct = (_timerSec / TOTAL_SEC) * 100;
      fill.style.width = pct + '%';
      fill.classList.toggle('cert-timer-fill-warn', _timerSec <= 120);
    }
  }

  // ── render question ──────────────────────────────────────────
  function _renderQuestion() {
    var qIdx = _qOrder[_currentQ];
    var mcq  = CERT_MCQ[qIdx];

    var counter = document.getElementById('certQCounter');
    if (counter) counter.textContent = 'Question ' + (_currentQ + 1) + ' of ' + CERT_MCQ.length;

    var qText = document.getElementById('certQText');
    if (qText) qText.textContent = mcq.q;

    var optList = document.getElementById('certOptionsList');
    if (optList) {
      optList.innerHTML = mcq.opts.map(function (opt, i) {
        return '<div class="cert-option" onclick="CertFlow.selectOpt(' + i + ')">' +
          '<span class="cert-opt-letter">' + String.fromCharCode(65 + i) + '</span>' +
          '<span class="cert-opt-text">' + opt + '</span>' +
        '</div>';
      }).join('');
    }

    var nextBtn = document.getElementById('certNextBtn');
    if (nextBtn) {
      nextBtn.disabled    = true;
      nextBtn.textContent = _currentQ === CERT_MCQ.length - 1 ? 'Submit Test →' : 'Next →';
    }
  }

  function selectOpt(i) {
    document.querySelectorAll('.cert-option').forEach(function (el, idx) {
      el.classList.toggle('selected', idx === i);
    });
    var nextBtn = document.getElementById('certNextBtn');
    if (nextBtn) {
      nextBtn.disabled   = false;
      nextBtn._selected  = i;
    }
  }

  function nextQ() {
    var nextBtn = document.getElementById('certNextBtn');
    var selected = nextBtn ? nextBtn._selected : null;
    if (selected === null || selected === undefined) return;

    _answers.push(selected);
    localStorage.setItem(LS_ANSWERS, JSON.stringify(_answers));

    _currentQ++;
    if (_currentQ >= CERT_MCQ.length) {
      if (_timerRef) { clearInterval(_timerRef); _timerRef = null; }
      _submitTest(false);
    } else {
      _renderQuestion();
    }
  }

  // ── submit & score ───────────────────────────────────────────
  async function _submitTest(timedOut) {
    var score = 0;
    _answers.forEach(function (sel, i) {
      var qIdx = _qOrder[i];
      if (CERT_MCQ[qIdx] && sel === CERT_MCQ[qIdx].ans) score++;
    });
    _lastScore = score;

    var passed = score >= PASS_MARK;
    var now    = new Date().toISOString();

    // Update DB attempt row
    if (_lastAttemptId) {
      try {
        await Auth.from('certification_attempts')
          .eq('id', _lastAttemptId)
          .update({ submitted_at: now, score: score, passed: passed });
      } catch (e) {}
    }

    _clearLS();

    if (passed) {
      _state = 'pass_pending';
      document.getElementById('certPassScore').textContent = score + ' / ' + CERT_MCQ.length;
      _show('certScreenPass', 1);
    } else {
      _state = 'cooldown';
      _showFailScreen(score, timedOut);
    }
  }

  function _showCooldownScreen() {
    document.getElementById('certFailScore').textContent = _lastScore + ' / ' + CERT_MCQ.length;
    _renderWeakTopics(_lastScore);
    _renderCooldown();
    _show('certScreenFail', null);
  }

  function _showFailScreen(score, timedOut) {
    document.getElementById('certFailScore').textContent = score + ' / ' + CERT_MCQ.length;
    _renderWeakTopics(score);
    _renderCooldown();
    if (timedOut) {
      var msg = document.getElementById('certCooldownMsg');
      if (msg) {
        var existing = msg.innerHTML;
        msg.innerHTML = '<p class="cert-timeout-note">⏱ Time ran out. ' + (existing || '') + '</p>';
      }
    }
    _show('certScreenFail', null);
  }

  function _renderWeakTopics(score) {
    var wrong = [];
    _answers.forEach(function (sel, i) {
      var qIdx = _qOrder[i];
      if (CERT_MCQ[qIdx] && sel !== CERT_MCQ[qIdx].ans) wrong.push(CERT_MCQ[qIdx].topic);
    });
    // deduplicate
    var topics = wrong.filter(function (t, i) { return wrong.indexOf(t) === i; });
    var el = document.getElementById('certWeakTopics');
    if (el) {
      el.innerHTML = topics.length
        ? '<p class="cert-weak-label">Topics to review:</p>' +
          topics.map(function (t) { return '<span class="cert-weak-pill">' + t + '</span>'; }).join('')
        : '';
    }
  }

  function _renderCooldown() {
    var el = document.getElementById('certCooldownMsg');
    if (!el) return;
    // Estimate cooldown from submitted_at in last DB row (we may not have it locally)
    // So just show 24h message
    var retakeDate = new Date(Date.now() + COOLDOWN_MS);
    var retakeStr  = retakeDate.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    el.innerHTML = '<p>Retake unlocks on <strong>' + retakeStr + '</strong></p>';
  }

  // ── feedback ─────────────────────────────────────────────────
  function showFeedback() {
    _prefillEmail();
    _show('certScreenFeedback', 2);
  }

  function _prefillEmail() {
    var emailEl = document.getElementById('certFbEmail');
    if (emailEl && currentUser && currentUser.email) emailEl.value = currentUser.email;
  }

  function setRating(n) {
    _rating = n;
    document.querySelectorAll('.cert-star').forEach(function (star, i) {
      star.classList.toggle('lit', i < n);
    });
  }

  async function submitFeedback() {
    var btn     = document.getElementById('certSubmitFbBtn');
    var statusEl = document.getElementById('certFbStatus');
    var email   = (document.getElementById('certFbEmail').value || '').trim();
    var enjoyed  = (document.getElementById('certFbEnjoy').value || '').trim();
    var suggest  = (document.getElementById('certFbSuggest').value || '').trim();

    if (!email) { statusEl.textContent = 'Please enter your email.'; return; }
    if (!_rating) { statusEl.textContent = 'Please rate the platform.'; return; }

    btn.disabled    = true;
    btn.textContent = 'Sending…';
    statusEl.textContent = '';

    // Save feedback
    try {
      await Auth.from('cert_feedback').insert({
        user_id:    currentUser.id,
        rating:     _rating,
        enjoyed:    enjoyed,
        suggestions: suggest
      });
    } catch (e) {}

    // Mark certified in DB
    try {
      await Auth.from('user_profiles')
        .eq('id', currentUser.id)
        .update({
          is_certified:        true,
          certificate_sent_at: new Date().toISOString(),
          certified_score:     _lastScore
        });
      if (userProfile) {
        userProfile.is_certified        = true;
        userProfile.certificate_sent_at = new Date().toISOString();
      }
    } catch (e) {}

    _state = 'certified';
    _clearLS();

    // Draw certificate
    var name = (userProfile && (userProfile.display_name || userProfile.full_name)) || currentUser.email.split('@')[0];
    _certDataUrl = _drawCertificate('certCanvas', name);

    // Send email
    document.getElementById('certSuccessEmail').textContent = email;
    _sendCertEmail(name, email);

    _show('certScreenSuccess', 3);
    btn.disabled    = false;
    btn.textContent = 'Submit & Get Certificate →';

    // Refresh profile cert block if visible
    renderCertProfileBlock();
  }

  // ── certificate canvas ───────────────────────────────────────
  function _drawCertificate(canvasId, name) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    var W = 1000, H = 700;
    canvas.width  = W;
    canvas.height = H;
    var ctx = canvas.getContext('2d');
    ctx.textAlign = 'center';

    // ── Deep navy background ────────────────────────────────────
    var bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0,   '#08090f');
    bg.addColorStop(0.5, '#0e0f1a');
    bg.addColorStop(1,   '#0a0b14');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // ── Radial glow centre ──────────────────────────────────────
    var glow = ctx.createRadialGradient(W/2, H/2, 80, W/2, H/2, 420);
    glow.addColorStop(0,   'rgba(139,92,246,0.07)');
    glow.addColorStop(1,   'rgba(139,92,246,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    // ── Gold outer border ───────────────────────────────────────
    var goldGrad = ctx.createLinearGradient(0, 0, W, H);
    goldGrad.addColorStop(0,    '#c9a84c');
    goldGrad.addColorStop(0.25, '#f0d060');
    goldGrad.addColorStop(0.5,  '#c9a84c');
    goldGrad.addColorStop(0.75, '#f0d060');
    goldGrad.addColorStop(1,    '#c9a84c');
    ctx.strokeStyle = goldGrad;
    ctx.lineWidth   = 3;
    _roundRect(ctx, 18, 18, W - 36, H - 36, 14, false, true);

    // ── Purple inner border ─────────────────────────────────────
    ctx.strokeStyle = 'rgba(139,92,246,0.4)';
    ctx.lineWidth   = 1;
    _roundRect(ctx, 30, 30, W - 60, H - 60, 10, false, true);

    // ── Corner ornaments ────────────────────────────────────────
    function _corner(cx, cy) {
      ctx.strokeStyle = goldGrad;
      ctx.lineWidth = 1.5;
      var s = 22;
      ctx.beginPath(); ctx.moveTo(cx - s, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy + s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + s, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy - s); ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#f0d060'; ctx.fill();
    }
    _corner(54, 54); _corner(W - 54, 54); _corner(54, H - 54); _corner(W - 54, H - 54);

    // ── Top gold divider line ───────────────────────────────────
    var divGrad = ctx.createLinearGradient(100, 0, W - 100, 0);
    divGrad.addColorStop(0,    'transparent');
    divGrad.addColorStop(0.2,  '#c9a84c');
    divGrad.addColorStop(0.8,  '#c9a84c');
    divGrad.addColorStop(1,    'transparent');
    ctx.strokeStyle = divGrad;
    ctx.lineWidth   = 1;
    ctx.beginPath(); ctx.moveTo(100, 108); ctx.lineTo(W - 100, 108); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(100, H - 108); ctx.lineTo(W - 100, H - 108); ctx.stroke();

    // ── ANALYST WORLD brand ─────────────────────────────────────
    ctx.fillStyle = '#f0d060';
    ctx.font      = 'bold 13px Arial, sans-serif';
    ctx.fillText('A N A L Y S T   W O R L D', W / 2, 72);

    ctx.fillStyle = 'rgba(240,208,96,0.45)';
    ctx.font      = '11px Arial';
    ctx.fillText('India\'s Leading Analyst Platform', W / 2, 90);

    // ── CERTIFICATE OF ACHIEVEMENT ──────────────────────────────
    ctx.fillStyle = 'rgba(196,181,253,0.9)';
    ctx.font      = '11px Arial, sans-serif';
    ctx.fillText('C E R T I F I C A T E   O F   A C H I E V E M E N T', W / 2, 138);

    // ── Thin decorative rule under title ────────────────────────
    ctx.strokeStyle = 'rgba(139,92,246,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(W/2 - 160, 148); ctx.lineTo(W/2 + 160, 148); ctx.stroke();

    // ── This certifies that ─────────────────────────────────────
    ctx.fillStyle = '#6b7280';
    ctx.font      = '15px Georgia, serif';
    ctx.fillText('This proudly certifies that', W / 2, 188);

    // ── Recipient name ──────────────────────────────────────────
    var displayName = (name && name.trim()) ? name.trim() : 'Analyst';
    ctx.fillStyle = '#ffffff';
    ctx.font      = 'bold 52px Georgia, serif';
    ctx.fillText(displayName, W / 2, 268);

    // Name gold underline
    var nw = ctx.measureText(displayName).width;
    var uGrad = ctx.createLinearGradient(W/2 - nw/2, 0, W/2 + nw/2, 0);
    uGrad.addColorStop(0, 'transparent');
    uGrad.addColorStop(0.3, '#c9a84c');
    uGrad.addColorStop(0.7, '#f0d060');
    uGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = uGrad;
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(W/2 - nw/2 - 20, 282);
    ctx.lineTo(W/2 + nw/2 + 20, 282);
    ctx.stroke();

    // ── has successfully completed ──────────────────────────────
    ctx.fillStyle = '#9ca3af';
    ctx.font      = '16px Georgia, serif';
    ctx.fillText('has successfully completed the', W / 2, 326);

    // ── Certification title ─────────────────────────────────────
    ctx.fillStyle = '#c4b5fd';
    ctx.font      = 'bold 26px Georgia, serif';
    ctx.fillText('SQL Analyst Certification', W / 2, 368);

    // ── Description ─────────────────────────────────────────────
    ctx.fillStyle = '#4b5563';
    ctx.font      = '13px Arial, sans-serif';
    ctx.fillText('Demonstrating advanced proficiency in SQL querying, data aggregation,', W / 2, 406);
    ctx.fillText('JOINs, window functions, CTEs, subqueries, and analytical problem-solving.', W / 2, 424);

    // ── Bottom section: date left | seal centre | score right ───
    var dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

    // Left — Issue date
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6b7280';
    ctx.font      = '11px Arial, sans-serif';
    ctx.fillText('DATE OF ISSUE', 220, 482);
    ctx.fillStyle = '#e8e6e0';
    ctx.font      = '13px Georgia, serif';
    ctx.fillText(dateStr, 220, 500);
    ctx.strokeStyle = 'rgba(240,208,96,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(140, 510); ctx.lineTo(300, 510); ctx.stroke();

    // Right — Score
    ctx.fillStyle = '#6b7280';
    ctx.font      = '11px Arial, sans-serif';
    ctx.fillText('APTITUDE SCORE', W - 220, 482);
    ctx.fillStyle = '#a78bfa';
    ctx.font      = 'bold 18px Georgia, serif';
    ctx.fillText(_lastScore + ' / ' + CERT_MCQ.length, W - 220, 502);
    ctx.strokeStyle = 'rgba(139,92,246,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(W - 300, 510); ctx.lineTo(W - 140, 510); ctx.stroke();

    // Centre seal
    ctx.beginPath();
    ctx.arc(W / 2, 494, 32, 0, Math.PI * 2);
    var sealGrad = ctx.createRadialGradient(W/2, 494, 4, W/2, 494, 32);
    sealGrad.addColorStop(0,   '#a78bfa');
    sealGrad.addColorStop(0.6, '#7c3aed');
    sealGrad.addColorStop(1,   '#5b21b6');
    ctx.fillStyle   = sealGrad;
    ctx.fill();
    ctx.strokeStyle = '#f0d060';
    ctx.lineWidth   = 2;
    ctx.stroke();

    // Seal star
    ctx.fillStyle = '#f0d060';
    ctx.font      = '22px Arial';
    ctx.fillText('★', W / 2, 502);

    // ── Footer ──────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(107,114,128,0.6)';
    ctx.font      = '10px Arial, sans-serif';
    ctx.fillText('analyst.world  ·  India\'s Leading Analyst Platform', W / 2, H - 42);

    var dataUrl = canvas.toDataURL('image/png');
    _certDataUrl = dataUrl;
    return dataUrl;
  }

  function _roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  // ── email ────────────────────────────────────────────────────
  function _sendCertEmail(name, email) {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) return;
    try {
      var dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name:    name,
        to_email:   email,
        cert_date:  dateStr,
        score:      _lastScore + ' / ' + CERT_MCQ.length,
        platform:   'MishraSQL · Analyst World',
        profile_url: window.location.origin + '/index.html'
      }, EMAILJS_PUBLIC_KEY);
    } catch (e) {}
  }

  // ── download ─────────────────────────────────────────────────
  function downloadCert() {
    var dataUrl = _certDataUrl;
    if (!dataUrl) {
      var name = (userProfile && (userProfile.display_name || userProfile.full_name)) || 'certificate';
      dataUrl = _drawCertificate(
        document.getElementById('certCanvasView') ? 'certCanvasView' : 'certCanvas',
        name
      );
    }
    if (!dataUrl) return;
    var a       = document.createElement('a');
    a.href      = dataUrl;
    a.download  = 'MishraSQL-Certificate.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // ── profile block renderer ───────────────────────────────────
  function renderCertProfileBlock() {
    var block = document.getElementById('certProfileBlock');
    if (!block) return;

    var total  = QUESTIONS.length;
    var solved = typeof solvedSet !== 'undefined' ? solvedSet.size : 0;

    // Hide block entirely if neither eligible nor certified
    if (solved < total && !(userProfile && userProfile.is_certified)) {
      block.style.display = 'none';
      return;
    }

    block.style.display = 'block';

    if (userProfile && userProfile.is_certified) {
      var certDate = userProfile.certificate_sent_at
        ? new Date(userProfile.certificate_sent_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
        : '';
      block.innerHTML =
        '<div class="cert-profile-certified">' +
          '<div class="cert-profile-badge">🏆 Certified SQL Analyst</div>' +
          (certDate ? '<p class="cert-profile-date">Certified on ' + certDate + '</p>' : '') +
          '<button class="cert-btn-small" onclick="CertFlow.open()">View Certificate</button>' +
        '</div>';
    } else if (solved >= total) {
      block.innerHTML =
        '<div class="cert-profile-eligible">' +
          '<div class="cert-profile-eligible-text">' +
            '<span class="cert-fire">🎓</span>' +
            '<div>' +
              '<strong>You\'ve solved all ' + total + ' problems!</strong>' +
              '<p>Claim your official SQL Analyst Certificate.</p>' +
            '</div>' +
          '</div>' +
          '<button class="cert-btn-claim" onclick="CertFlow.open()">Claim Certificate →</button>' +
        '</div>';
    }
  }

  // ── localStorage helpers ─────────────────────────────────────
  function _clearLS() {
    localStorage.removeItem(LS_STARTED);
    localStorage.removeItem(LS_ORDER);
    localStorage.removeItem(LS_ANSWERS);
  }

  return {
    open:            open,
    close:           close,
    startTest:       startTest,
    selectOpt:       selectOpt,
    nextQ:           nextQ,
    showFeedback:    showFeedback,
    setRating:       setRating,
    submitFeedback:  submitFeedback,
    downloadCert:    downloadCert,
    renderCertProfileBlock: renderCertProfileBlock
  };
})();

// ── START ─────────────────────────────────────────────────────────
if (!window.MISHRA_ADMIN_PANEL) init();
