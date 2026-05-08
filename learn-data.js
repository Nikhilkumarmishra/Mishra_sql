// ================================================================
//  MishraSQL — learn-data.js
//  All Learn SQL content. Add article HTML to topic.content fields.
// ================================================================

var LEARN_DATA = [
  {
    id: 'mod1', icon: '🏗️', title: 'Foundation',
    topics: [
      { id: 'mod1-t1', title: 'What is Data?' },
      { id: 'mod1-t2', title: 'What is a Database?' },
      { id: 'mod1-t3', title: 'What is DBMS?' },
      { id: 'mod1-t4', title: 'Types of DBMS' },
      { id: 'mod1-t5', title: 'What is RDBMS?' },
      { id: 'mod1-t6', title: 'DBMS vs RDBMS' },
      { id: 'mod1-t7', title: 'Popular Database Systems' },
      { id: 'mod1-t8', title: 'Real-world Uses of Databases' },
    ]
  },
  {
    id: 'mod2', icon: '📖', title: 'Introduction to SQL',
    topics: [
      { id: 'mod2-t1', title: 'What is SQL?' },
      { id: 'mod2-t2', title: 'History of SQL' },
      { id: 'mod2-t3', title: 'SQL Sublanguages (DDL, DML, DCL, TCL)' },
      { id: 'mod2-t4', title: 'SQL vs NoSQL' },
      { id: 'mod2-t5', title: 'Setting Up a SQL Environment' },
      { id: 'mod2-t6', title: 'Your First SQL Query' },
    ]
  },
  {
    id: 'mod3', icon: '📖', title: 'Database & Table Basics',
    topics: [
      { id: 'mod3-t1', title: 'CREATE DATABASE' },
      { id: 'mod3-t2', title: 'DROP DATABASE' },
      { id: 'mod3-t3', title: 'CREATE TABLE' },
      { id: 'mod3-t4', title: 'Data Types in SQL' },
      { id: 'mod3-t5', title: 'Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)' },
      { id: 'mod3-t6', title: 'PRIMARY KEY & FOREIGN KEY' },
      { id: 'mod3-t7', title: 'ALTER TABLE' },
      { id: 'mod3-t8', title: 'DROP TABLE & TRUNCATE TABLE' },
    ]
  },
  {
    id: 'mod4', icon: '📖', title: 'Querying Data (SELECT)',
    topics: [
      { id: 'mod4-t1',  title: 'SELECT Statement' },
      { id: 'mod4-t2',  title: 'WHERE Clause' },
      { id: 'mod4-t3',  title: 'AND, OR, NOT' },
      { id: 'mod4-t4',  title: 'IN and NOT IN' },
      { id: 'mod4-t5',  title: 'BETWEEN' },
      { id: 'mod4-t6',  title: 'LIKE and Wildcards' },
      { id: 'mod4-t7',  title: 'IS NULL / IS NOT NULL' },
      { id: 'mod4-t8',  title: 'ORDER BY' },
      { id: 'mod4-t9',  title: 'LIMIT / TOP' },
      { id: 'mod4-t10', title: 'DISTINCT' },
      { id: 'mod4-t11', title: 'Column Aliases (AS)' },
      { id: 'mod4-t12', title: 'CASE Expression' },
    ]
  },
  {
    id: 'mod5', icon: '📖', title: 'Modifying Data',
    topics: [
      { id: 'mod5-t1', title: 'INSERT INTO' },
      { id: 'mod5-t2', title: 'UPDATE' },
      { id: 'mod5-t3', title: 'DELETE' },
      { id: 'mod5-t4', title: 'MERGE / UPSERT' },
    ]
  },
  {
    id: 'mod6', icon: '📖', title: 'Aggregate Functions',
    topics: [
      { id: 'mod6-t1', title: 'COUNT()' },
      { id: 'mod6-t2', title: 'SUM()' },
      { id: 'mod6-t3', title: 'AVG()' },
      { id: 'mod6-t4', title: 'MIN() and MAX()' },
      { id: 'mod6-t5', title: 'GROUP BY' },
      { id: 'mod6-t6', title: 'HAVING' },
      { id: 'mod6-t7', title: 'Combining Aggregates' },
      { id: 'mod6-t8', title: 'NULL Handling in Aggregates' },
      { id: 'mod6-t9', title: 'ROLLUP and CUBE' },
    ]
  },
  {
    id: 'mod7', icon: '📖', title: 'Joins',
    topics: [
      { id: 'mod7-t1', title: 'What are Joins?' },
      { id: 'mod7-t2', title: 'INNER JOIN' },
      { id: 'mod7-t3', title: 'LEFT JOIN' },
      { id: 'mod7-t4', title: 'RIGHT JOIN' },
      { id: 'mod7-t5', title: 'FULL OUTER JOIN' },
      { id: 'mod7-t6', title: 'CROSS JOIN' },
      { id: 'mod7-t7', title: 'Self Join' },
      { id: 'mod7-t8', title: 'Multiple Joins' },
      { id: 'mod7-t9', title: 'Join Performance Tips' },
    ]
  },
  {
    id: 'mod8', icon: '📖', title: 'Subqueries',
    topics: [
      { id: 'mod8-t1', title: 'What is a Subquery?' },
      { id: 'mod8-t2', title: 'Subquery in WHERE' },
      { id: 'mod8-t3', title: 'Subquery in FROM (Derived Tables)' },
      { id: 'mod8-t4', title: 'Scalar Subquery in SELECT' },
      { id: 'mod8-t5', title: 'Correlated Subqueries' },
      { id: 'mod8-t6', title: 'EXISTS / NOT EXISTS' },
      { id: 'mod8-t7', title: 'IN vs EXISTS' },
    ]
  },
  {
    id: 'mod9', icon: '📖', title: 'CTEs & Advanced Queries',
    topics: [
      { id: 'mod9-t1', title: 'Common Table Expressions (CTEs)' },
      { id: 'mod9-t2', title: 'Recursive CTEs' },
      { id: 'mod9-t3', title: 'Multiple CTEs' },
      { id: 'mod9-t4', title: 'CTE vs Subquery' },
    ]
  },
  {
    id: 'mod10', icon: '📖', title: 'Window Functions',
    topics: [
      { id: 'mod10-t1',  title: 'Introduction to Window Functions' },
      { id: 'mod10-t2',  title: 'OVER() Clause' },
      { id: 'mod10-t3',  title: 'PARTITION BY' },
      { id: 'mod10-t4',  title: 'ORDER BY in Window Functions' },
      { id: 'mod10-t5',  title: 'ROW_NUMBER()' },
      { id: 'mod10-t6',  title: 'RANK() and DENSE_RANK()' },
      { id: 'mod10-t7',  title: 'NTILE()' },
      { id: 'mod10-t8',  title: 'LAG() and LEAD()' },
      { id: 'mod10-t9',  title: 'FIRST_VALUE() and LAST_VALUE()' },
      { id: 'mod10-t10', title: 'Frame Specification (ROWS / RANGE)' },
    ]
  },
  {
    id: 'mod11', icon: '📖', title: 'String & Date Functions',
    topics: [
      { id: 'mod11-t1', title: 'Common String Functions Overview' },
      { id: 'mod11-t2', title: 'CONCAT, LENGTH, UPPER, LOWER' },
      { id: 'mod11-t3', title: 'SUBSTRING, TRIM, REPLACE' },
      { id: 'mod11-t4', title: 'Date Functions Overview' },
      { id: 'mod11-t5', title: 'DATE_FORMAT, EXTRACT, DATEDIFF' },
      { id: 'mod11-t6', title: 'Working with Timestamps' },
    ]
  },
  {
    id: 'mod12', icon: '📖', title: 'Stored Procedures & Functions',
    topics: [
      { id: 'mod12-t1', title: 'What are Stored Procedures?' },
      { id: 'mod12-t2', title: 'Creating a Stored Procedure' },
      { id: 'mod12-t3', title: 'Parameters in Stored Procedures' },
      { id: 'mod12-t4', title: 'User-Defined Functions (UDFs)' },
      { id: 'mod12-t5', title: 'Scalar vs Table-Valued Functions' },
      { id: 'mod12-t6', title: 'Triggers' },
      { id: 'mod12-t7', title: 'Cursors (and When to Avoid Them)' },
    ]
  },
  {
    id: 'mod13', icon: '📖', title: 'Indexes & Performance',
    topics: [
      { id: 'mod13-t1', title: 'What is an Index?' },
      { id: 'mod13-t2', title: 'Clustered vs Non-Clustered Index' },
      { id: 'mod13-t3', title: 'Composite Indexes' },
      { id: 'mod13-t4', title: 'EXPLAIN / Query Execution Plans' },
      { id: 'mod13-t5', title: 'Index Best Practices' },
      { id: 'mod13-t6', title: 'Common Performance Anti-patterns' },
    ]
  },
  {
    id: 'mod14', icon: '📖', title: 'Transactions & ACID',
    topics: [
      { id: 'mod14-t1', title: 'What is a Transaction?' },
      { id: 'mod14-t2', title: 'ACID Properties' },
      { id: 'mod14-t3', title: 'COMMIT and ROLLBACK' },
      { id: 'mod14-t4', title: 'SAVEPOINT' },
      { id: 'mod14-t5', title: 'Isolation Levels' },
      { id: 'mod14-t6', title: 'Deadlocks and Locking' },
    ]
  },
  {
    id: 'mod15', icon: '📖', title: 'Database Design',
    topics: [
      { id: 'mod15-t1', title: 'Entity-Relationship (ER) Model' },
      { id: 'mod15-t2', title: 'Normalization (1NF, 2NF, 3NF)' },
      { id: 'mod15-t3', title: 'Denormalization' },
      { id: 'mod15-t4', title: 'Primary and Foreign Keys' },
      { id: 'mod15-t5', title: 'One-to-Many & Many-to-Many Relationships' },
      { id: 'mod15-t6', title: 'Database Design Best Practices' },
    ]
  },
  {
    id: 'mod16', icon: '📖', title: 'Interview Prep',
    topics: [
      { id: 'mod16-t1', title: 'Top SQL Interview Questions' },
      { id: 'mod16-t2', title: 'Window Functions Interview Q&A' },
      { id: 'mod16-t3', title: 'Query Optimization Questions' },
      { id: 'mod16-t4', title: 'Real-world SQL Scenarios' },
    ]
  },
];

// Article content map — add HTML content here for each topic id.
// Keys match topic ids above. Leave empty string = show "Coming Soon".
var LEARN_CONTENT = {
  // ── Module 1: Foundation ─────────────────────────────────────
  'mod1-t1': `
    <h1>What is Data?</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t2': `
    <h1>What is a Database?</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t3': `
    <h1>What is DBMS?</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t4': `
    <h1>Types of DBMS</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t5': `
    <h1>What is RDBMS?</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t6': `
    <h1>DBMS vs RDBMS</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t7': `
    <h1>Popular Database Systems</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  'mod1-t8': `
    <h1>Real-world Uses of Databases</h1>
    <div class="coming-soon-block">
      <div class="cs-icon">🚧</div>
      <div class="cs-title">Article coming soon</div>
      <div class="cs-sub">Our team is working on this content. Check back soon!</div>
    </div>`,

  // ── Module 2 ─────────────────────────────────────────────────
  'mod2-t1': `<h1>What is SQL?</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod2-t2': `<h1>History of SQL</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod2-t3': `<h1>SQL Sublanguages (DDL, DML, DCL, TCL)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod2-t4': `<h1>SQL vs NoSQL</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod2-t5': `<h1>Setting Up a SQL Environment</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod2-t6': `<h1>Your First SQL Query</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 3 ─────────────────────────────────────────────────
  'mod3-t1': `<h1>CREATE DATABASE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t2': `<h1>DROP DATABASE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t3': `<h1>CREATE TABLE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t4': `<h1>Data Types in SQL</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t5': `<h1>Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t6': `<h1>PRIMARY KEY & FOREIGN KEY</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t7': `<h1>ALTER TABLE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod3-t8': `<h1>DROP TABLE & TRUNCATE TABLE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 4 ─────────────────────────────────────────────────
  'mod4-t1':  `<h1>SELECT Statement</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t2':  `<h1>WHERE Clause</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t3':  `<h1>AND, OR, NOT</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t4':  `<h1>IN and NOT IN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t5':  `<h1>BETWEEN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t6':  `<h1>LIKE and Wildcards</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t7':  `<h1>IS NULL / IS NOT NULL</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t8':  `<h1>ORDER BY</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t9':  `<h1>LIMIT / TOP</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t10': `<h1>DISTINCT</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t11': `<h1>Column Aliases (AS)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod4-t12': `<h1>CASE Expression</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 5 ─────────────────────────────────────────────────
  'mod5-t1': `<h1>INSERT INTO</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod5-t2': `<h1>UPDATE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod5-t3': `<h1>DELETE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod5-t4': `<h1>MERGE / UPSERT</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 6 ─────────────────────────────────────────────────
  'mod6-t1': `<h1>COUNT()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t2': `<h1>SUM()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t3': `<h1>AVG()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t4': `<h1>MIN() and MAX()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t5': `<h1>GROUP BY</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t6': `<h1>HAVING</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t7': `<h1>Combining Aggregates</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t8': `<h1>NULL Handling in Aggregates</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod6-t9': `<h1>ROLLUP and CUBE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 7 ─────────────────────────────────────────────────
  'mod7-t1': `<h1>What are Joins?</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t2': `<h1>INNER JOIN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t3': `<h1>LEFT JOIN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t4': `<h1>RIGHT JOIN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t5': `<h1>FULL OUTER JOIN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t6': `<h1>CROSS JOIN</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t7': `<h1>Self Join</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t8': `<h1>Multiple Joins</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod7-t9': `<h1>Join Performance Tips</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 8 ─────────────────────────────────────────────────
  'mod8-t1': `<h1>What is a Subquery?</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod8-t2': `<h1>Subquery in WHERE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod8-t3': `<h1>Subquery in FROM (Derived Tables)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod8-t4': `<h1>Scalar Subquery in SELECT</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod8-t5': `<h1>Correlated Subqueries</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod8-t6': `<h1>EXISTS / NOT EXISTS</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod8-t7': `<h1>IN vs EXISTS</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 9 ─────────────────────────────────────────────────
  'mod9-t1': `<h1>Common Table Expressions (CTEs)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod9-t2': `<h1>Recursive CTEs</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod9-t3': `<h1>Multiple CTEs</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod9-t4': `<h1>CTE vs Subquery</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 10 ────────────────────────────────────────────────
  'mod10-t1':  `<h1>Introduction to Window Functions</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t2':  `<h1>OVER() Clause</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t3':  `<h1>PARTITION BY</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t4':  `<h1>ORDER BY in Window Functions</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t5':  `<h1>ROW_NUMBER()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t6':  `<h1>RANK() and DENSE_RANK()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t7':  `<h1>NTILE()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t8':  `<h1>LAG() and LEAD()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t9':  `<h1>FIRST_VALUE() and LAST_VALUE()</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod10-t10': `<h1>Frame Specification (ROWS / RANGE)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 11 ────────────────────────────────────────────────
  'mod11-t1': `<h1>Common String Functions Overview</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod11-t2': `<h1>CONCAT, LENGTH, UPPER, LOWER</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod11-t3': `<h1>SUBSTRING, TRIM, REPLACE</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod11-t4': `<h1>Date Functions Overview</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod11-t5': `<h1>DATE_FORMAT, EXTRACT, DATEDIFF</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod11-t6': `<h1>Working with Timestamps</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 12 ────────────────────────────────────────────────
  'mod12-t1': `<h1>What are Stored Procedures?</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod12-t2': `<h1>Creating a Stored Procedure</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod12-t3': `<h1>Parameters in Stored Procedures</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod12-t4': `<h1>User-Defined Functions (UDFs)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod12-t5': `<h1>Scalar vs Table-Valued Functions</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod12-t6': `<h1>Triggers</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod12-t7': `<h1>Cursors (and When to Avoid Them)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 13 ────────────────────────────────────────────────
  'mod13-t1': `<h1>What is an Index?</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod13-t2': `<h1>Clustered vs Non-Clustered Index</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod13-t3': `<h1>Composite Indexes</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod13-t4': `<h1>EXPLAIN / Query Execution Plans</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod13-t5': `<h1>Index Best Practices</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod13-t6': `<h1>Common Performance Anti-patterns</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 14 ────────────────────────────────────────────────
  'mod14-t1': `<h1>What is a Transaction?</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod14-t2': `<h1>ACID Properties</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod14-t3': `<h1>COMMIT and ROLLBACK</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod14-t4': `<h1>SAVEPOINT</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod14-t5': `<h1>Isolation Levels</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod14-t6': `<h1>Deadlocks and Locking</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 15 ────────────────────────────────────────────────
  'mod15-t1': `<h1>Entity-Relationship (ER) Model</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod15-t2': `<h1>Normalization (1NF, 2NF, 3NF)</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod15-t3': `<h1>Denormalization</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod15-t4': `<h1>Primary and Foreign Keys</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod15-t5': `<h1>One-to-Many & Many-to-Many Relationships</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod15-t6': `<h1>Database Design Best Practices</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,

  // ── Module 16 ────────────────────────────────────────────────
  'mod16-t1': `<h1>Top SQL Interview Questions</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod16-t2': `<h1>Window Functions Interview Q&A</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod16-t3': `<h1>Query Optimization Questions</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
  'mod16-t4': `<h1>Real-world SQL Scenarios</h1><div class="coming-soon-block"><div class="cs-icon">🚧</div><div class="cs-title">Article coming soon</div><div class="cs-sub">Our team is working on this content. Check back soon!</div></div>`,
};

// Build a flat ordered list of all topic ids for prev/next navigation
var LEARN_FLAT_TOPICS = (function() {
  var list = [];
  LEARN_DATA.forEach(function(mod) {
    mod.topics.forEach(function(t) {
      list.push({ id: t.id, title: t.title, modId: mod.id, modTitle: mod.title });
    });
  });
  return list;
})();
