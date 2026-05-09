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

    <h2>Imagine This First</h2>
    <p>You wake up in the morning and check your phone.</p>
    <p>You see:</p>
    <ul>
      <li>12 WhatsApp messages</li>
      <li>3 missed calls</li>
      <li>Your battery is 18%</li>
      <li>Today's temperature is 39°C</li>
      <li>Your Swiggy order is "Out for Delivery"</li>
    </ul>
    <p>All these small pieces of information are called <strong>data</strong>.</p>
    <p>Data is simply <strong>information</strong>. That is it. No scary definition. Just information.</p>

    <h2>Simple Definition</h2>
    <p>Data is a collection of facts, details, numbers, text, images, or information.</p>
    <table>
      <tr><th>Example</th><th>Is it Data?</th></tr>
      <tr><td>Your name</td><td>Yes</td></tr>
      <tr><td>Your age</td><td>Yes</td></tr>
      <tr><td>Your marks</td><td>Yes</td></tr>
      <tr><td>A selfie photo</td><td>Yes</td></tr>
      <tr><td>A voice note</td><td>Yes</td></tr>
      <tr><td>IPL score</td><td>Yes</td></tr>
    </table>

    <h2>Types of Data Around Us</h2>
    <h3>Text Data</h3>
    <ul><li>Your name</li><li>Address</li><li>Instagram bio</li></ul>
    <h3>Number Data</h3>
    <ul><li>Salary</li><li>Phone number</li><li>Age</li><li>Bank balance</li></ul>
    <h3>Image Data</h3>
    <ul><li>Photos</li><li>Aadhaar scan</li><li>Profile picture</li></ul>
    <h3>Audio Data</h3>
    <ul><li>Voice notes</li><li>Songs</li><li>Call recordings</li></ul>
    <h3>Video Data</h3>
    <ul><li>YouTube videos</li><li>CCTV footage</li><li>Reels</li></ul>

    <h2>Real Life Example</h2>
    <p>Imagine a school. Every student has: Name, Roll number, Class, Marks, Attendance.</p>
    <p>All this information together becomes student data. Now imagine 5,000 students. That becomes a LOT of data.</p>

    <h2>Why is Data Important?</h2>
    <p>Because companies use data to make decisions.</p>
    <h3>Amazon</h3>
    <p>Amazon checks what you search, what you buy, what you ignore — then recommends products. Amazon basically knows our shopping habits better than our relatives.</p>
    <h3>YouTube</h3>
    <p>YouTube watches what videos you click, how long you watch, what you skip — then traps you into watching "Just one more video" at 2:13 AM.</p>
    <h3>Zomato and Swiggy</h3>
    <p>They track your location, favorite food, and order timings. That is why biryani ads magically appear exactly when you are hungry. Suspicious. Very suspicious.</p>

    <h2>Data vs Information</h2>
    <p>This confuses many beginners. Let us simplify it.</p>
    <p><strong>Raw Data:</strong></p>
    <table>
      <tr><th>Student</th><th>Marks</th></tr>
      <tr><td>Rahul</td><td>95</td></tr>
      <tr><td>Priya</td><td>88</td></tr>
      <tr><td>Aman</td><td>72</td></tr>
    </table>
    <p><strong>Processed Meaning:</strong> "Rahul scored highest in class." — This is information.</p>
    <p>So: <strong>Data = raw facts</strong> &nbsp;·&nbsp; <strong>Information = useful meaning from data</strong></p>

    <h2>Important Point</h2>
    <p>Data alone is not useful. Organized data becomes powerful. And this is exactly why databases exist — which brings us to the next topic.</p>`,

  'mod1-t2': `
    <h1>What is a Database?</h1>

    <h2>First Think About Your Phone Gallery</h2>
    <p>Imagine your phone gallery had no folders, no search, no sorting, no albums. 10,000 random photos everywhere.</p>
    <p>Finding one Aadhaar photo would feel like finding a charger in an Indian household. Impossible.</p>
    <p>That is where organization matters.</p>

    <h2>Simple Definition</h2>
    <p>A <strong>database</strong> is an organized collection of data. It stores information properly so we can:</p>
    <ul>
      <li>Save data</li>
      <li>Search data</li>
      <li>Update data</li>
      <li>Delete data</li>
      <li>Manage data easily</li>
    </ul>

    <h2>Real Life Example</h2>
    <p>Imagine a library. Books are arranged properly — by subject, by author, by category. Because of this organization, finding a book becomes easy. A database works exactly like that.</p>

    <h2>Example of a School Database</h2>
    <table>
      <tr><th>Roll No</th><th>Name</th><th>Class</th><th>Marks</th></tr>
      <tr><td>101</td><td>Rahul</td><td>10</td><td>92</td></tr>
      <tr><td>102</td><td>Priya</td><td>10</td><td>88</td></tr>
      <tr><td>103</td><td>Aman</td><td>10</td><td>76</td></tr>
    </table>
    <p>This table is part of a database. Everything is organized. Easy to search. Easy to update. Easy to manage.</p>

    <h2>Where Do We Use Databases?</h2>
    <p>Almost everywhere.</p>
    <h3>Instagram</h3>
    <p>Stores user accounts, followers, posts, likes, and comments.</p>
    <h3>Banking Apps</h3>
    <p>Stores account balance, transactions, and customer details. And thankfully remembers your money better than you remember your UPI PIN.</p>
    <h3>Hospital Systems</h3>
    <p>Stores patient records, reports, medicines, and doctor schedules.</p>
    <h3>E-commerce Apps</h3>
    <p>Stores product details, orders, payments, and delivery status.</p>

    <h2>Why Databases are Important</h2>
    <p>Without databases:</p>
    <ul>
      <li>Data gets messy</li>
      <li>Searching becomes slow</li>
      <li>Duplicate information increases</li>
      <li>Management becomes difficult</li>
    </ul>
    <p>Imagine Flipkart storing customer orders in random notebooks. India would receive pressure cookers instead of phones every day.</p>

    <h2>Database is Like a Smart Digital Store Room</h2>
    <p>You store information. The database keeps everything organized. Whenever needed, you can quickly find anything. That is the power of databases.</p>`,

  'mod1-t3': `
    <h1>What is a DBMS?</h1>

    <h2>First Understand the Problem</h2>
    <p>We now know: <strong>Data = information</strong> and <strong>Database = organized collection of data</strong>.</p>
    <p>But who manages the database? Who handles saving data, searching data, updating data, security, and backup?</p>
    <p>That is where <strong>DBMS</strong> comes in.</p>

    <h2>Simple Definition</h2>
    <p>DBMS stands for <strong>Database Management System</strong>. It is software that helps us create, manage, and control databases.</p>
    <p>In simple words: <strong>DBMS is the manager of the database.</strong></p>

    <h2>Real Life Analogy</h2>
    <p>Imagine a huge shopping mall. The mall has shops, products, customers, and staff. Now someone must manage everything. That manager is like DBMS.</p>

    <h2>What Does a DBMS Do?</h2>
    <h3>Stores Data</h3>
    <p>It saves information properly.</p>
    <h3>Retrieves Data</h3>
    <p>It helps find data quickly. Example: "Show all students with marks above 90."</p>
    <h3>Updates Data</h3>
    <p>Example: Changing a student's address.</p>
    <h3>Deletes Data</h3>
    <p>Example: Removing old records.</p>
    <h3>Controls Security</h3>
    <p>Not everyone should access everything. A student should not be able to edit school fees. Imagine giving every employee access to company salaries — office gossip would become a national sport.</p>

    <h2>Examples of DBMS</h2>
    <ul>
      <li>MySQL</li>
      <li>PostgreSQL</li>
      <li>Oracle</li>
      <li>SQL Server</li>
      <li>SQLite</li>
    </ul>

    <h2>Important Point</h2>
    <p><strong>Database</strong> = storage place &nbsp;·&nbsp; <strong>DBMS</strong> = software that manages that storage</p>
    <p>Think like this: Database = kitchen ingredients. DBMS = the cook managing everything. Without the cook, chaos. Without DBMS, database management becomes very difficult.</p>`,

  'mod1-t4': `
    <h1>Types of DBMS</h1>

    <h2>Why Different Types Exist</h2>
    <p>Different companies have different needs — very fast systems, flexible data, structured tables, huge scalability. That is why multiple types of DBMS exist.</p>

    <h2>1. Hierarchical DBMS</h2>
    <h3>Structure</h3>
    <p>Data is stored like a tree. Parent → Child relationship.</p>
    <pre><code>Company
└── Department
    └── Employees</code></pre>
    <h3>Real Life Example</h3>
    <p>Think about family trees: Grandfather → Father → Son. One parent can have many children.</p>
    <h3>Problem</h3>
    <p>Very rigid structure. Not flexible. Hard to manage complex relationships.</p>
    <p>It behaves like strict Indian parents — "Everything must stay in proper hierarchy." No freedom.</p>

    <h2>2. Network DBMS</h2>
    <h3>Structure</h3>
    <p>More flexible than hierarchical. One record can connect with multiple records.</p>
    <p>Example: A student can join Cricket club, Music club, and Coding club — multiple connections are possible.</p>
    <h3>Problem</h3>
    <p>Can become very complicated. Like trying to understand who is whose cousin in a big Indian wedding. After some point, everyone is just "Bhaiya".</p>

    <h2>3. Relational DBMS (RDBMS)</h2>
    <p>This is the <strong>most popular type today</strong>. Data is stored in tables.</p>
    <table>
      <tr><th>Student_ID</th><th>Name</th><th>Marks</th></tr>
      <tr><td>1</td><td>Rahul</td><td>90</td></tr>
      <tr><td>2</td><td>Priya</td><td>85</td></tr>
    </table>
    <p>Tables can connect with each other using relationships. Tables are easy to understand, organize, search, and manage.</p>
    <p><strong>Examples:</strong> MySQL, PostgreSQL, Oracle, SQL Server — this is what we mainly learn in SQL.</p>

    <h2>4. NoSQL Databases</h2>
    <p>Modern apps generate huge amounts of data — Instagram reels, WhatsApp chats, YouTube comments, Netflix recommendations. Traditional tables sometimes become limiting, so NoSQL databases were created.</p>
    <p>NoSQL databases are more flexible. They can store JSON, Documents, Key-value data, and Graph data.</p>
    <p><strong>Examples:</strong> MongoDB, Cassandra, Redis</p>
    <p>RDBMS is like a properly arranged Indian kitchen — everything has a fixed place. NoSQL is like a hostel room — flexible, but sometimes dangerous.</p>`,

  'mod1-t5': `
    <h1>What is RDBMS?</h1>

    <h2>Simple Definition</h2>
    <p>RDBMS stands for <strong>Relational Database Management System</strong>. It is a type of DBMS where data is stored in tables and relationships are created between tables.</p>

    <h2>Why "Relational"?</h2>
    <p>Because tables are related to each other.</p>
    <p><strong>Students Table:</strong></p>
    <table>
      <tr><th>Student_ID</th><th>Name</th></tr>
      <tr><td>1</td><td>Rahul</td></tr>
      <tr><td>2</td><td>Priya</td></tr>
    </table>
    <p><strong>Marks Table:</strong></p>
    <table>
      <tr><th>Student_ID</th><th>Marks</th></tr>
      <tr><td>1</td><td>90</td></tr>
      <tr><td>2</td><td>88</td></tr>
    </table>
    <p><code>Student_ID</code> connects both tables. This relationship is the heart of RDBMS.</p>

    <h2>Benefits of RDBMS</h2>
    <h3>Organized Data</h3>
    <p>Tables keep data clean.</p>
    <h3>Reduced Duplication</h3>
    <p>Avoids repeating unnecessary information.</p>
    <h3>Easy Searching</h3>
    <p>SQL queries make searching powerful.</p>
    <h3>Security</h3>
    <p>Different users can get different permissions.</p>
    <h3>Data Integrity</h3>
    <p>Keeps data accurate and consistent.</p>

    <h2>Popular RDBMS Software</h2>
    <ul>
      <li>MySQL</li>
      <li>PostgreSQL</li>
      <li>Oracle</li>
      <li>SQL Server</li>
      <li>SQLite</li>
    </ul>

    <h2>Why Companies Love RDBMS</h2>
    <p>Because business data is structured. Banks. Schools. Hospitals. E-commerce. All need organized systems.</p>
    <p>RDBMS is like a disciplined school topper — everything neat, everything labeled, everything in proper order. NoSQL is the creative friend whose desk looks illegal but somehow still finds everything.</p>`,

  'mod1-t6': `
    <h1>DBMS vs RDBMS</h1>

    <h2>First Understand One Thing</h2>
    <p>Every RDBMS is a DBMS. But every DBMS is not an RDBMS.</p>
    <p>Just like: Every biryani is rice. But not every rice dish is biryani. Important life lesson.</p>

    <h2>Main Differences</h2>
    <h3>DBMS</h3>
    <ul>
      <li>May not use tables</li>
      <li>Simpler systems</li>
      <li>Less relationship support</li>
    </ul>
    <h3>RDBMS</h3>
    <ul>
      <li>Uses tables</li>
      <li>Supports relationships</li>
      <li>More powerful</li>
      <li>Better security</li>
      <li>Better scalability</li>
    </ul>

    <h2>Easy Comparison Table</h2>
    <table>
      <tr><th>Feature</th><th>DBMS</th><th>RDBMS</th></tr>
      <tr><td>Full Form</td><td>Database Management System</td><td>Relational Database Management System</td></tr>
      <tr><td>Structure</td><td>Files or various models</td><td>Tables</td></tr>
      <tr><td>Relationships</td><td>Limited</td><td>Strong</td></tr>
      <tr><td>Security</td><td>Lower</td><td>Higher</td></tr>
      <tr><td>Large Applications</td><td>Not ideal</td><td>Very suitable</td></tr>
      <tr><td>Examples</td><td>XML DB</td><td>MySQL, Oracle</td></tr>
    </table>

    <h2>Real Life Analogy</h2>
    <p>DBMS is like storing notes in separate notebooks. RDBMS is like Google Sheets where everything is connected smartly.</p>

    <h2>Which One is Used More Today?</h2>
    <p><strong>RDBMS.</strong> Because modern businesses need structure, relationships, accuracy, and fast searching. That is why SQL became so important.</p>`,

  'mod1-t7': `
    <h1>Popular Database Systems</h1>

    <h2>Why Learn Different Databases?</h2>
    <p>Different companies use different databases. Learning the basics helps you adapt easily. The good news? SQL concepts remain mostly similar.</p>

    <h2>1. MySQL</h2>
    <p>MySQL is one of the world's most popular databases. Used by websites, startups, small businesses, and learning platforms.</p>
    <p><strong>Why Beginners Love It:</strong> Easy to learn, lightweight, fast, huge community support.</p>
    <p>Many students start SQL with MySQL. It is basically the Hero Splendor of databases — Reliable. Simple. Everywhere.</p>

    <h2>2. PostgreSQL</h2>
    <p>PostgreSQL is more advanced and feature-rich. Companies love it for large-scale applications.</p>
    <p><strong>Advantages:</strong> Very stable, highly secure, advanced features, excellent performance.</p>
    <p>Used by big tech companies, data-heavy platforms, and enterprise systems.</p>

    <h2>3. Oracle Database</h2>
    <p>Oracle is used by huge organizations — especially banks, government systems, and large corporations.</p>
    <p><strong>Why Companies Use It:</strong> Very powerful, high security, handles massive data.</p>
    <p><strong>Problem:</strong> Can be expensive. Oracle licensing discussions can scare managers more than production bugs.</p>

    <h2>4. SQL Server</h2>
    <p>Created by Microsoft. Works very well with Windows-based systems.</p>
    <p><strong>Popular in:</strong> Corporate companies, enterprise software, business reporting systems.</p>
    <p><strong>Features:</strong> Strong tools, good integration, easy management interface.</p>

    <h2>5. SQLite</h2>
    <p>SQLite is lightweight. No big server setup needed.</p>
    <p><strong>Used in:</strong> Mobile apps, small applications, embedded systems.</p>
    <p>Many apps on your phone quietly use SQLite behind the scenes. Silent worker. No drama. Unlike group projects in college.</p>

    <h2>Quick Comparison</h2>
    <table>
      <tr><th>Database</th><th>Best For</th></tr>
      <tr><td>MySQL</td><td>Beginners and websites</td></tr>
      <tr><td>PostgreSQL</td><td>Advanced applications</td></tr>
      <tr><td>Oracle</td><td>Large enterprises</td></tr>
      <tr><td>SQL Server</td><td>Microsoft ecosystem</td></tr>
      <tr><td>SQLite</td><td>Mobile and lightweight apps</td></tr>
    </table>`,

  'mod1-t8': `
    <h1>Where is a Database Used?</h1>

    <h2>Short Answer</h2>
    <p>Everywhere. Seriously. If an app stores information, there is probably a database behind it.</p>

    <h2>1. Banking Systems</h2>
    <p>Banks store customer accounts, transactions, loans, and credit card data. Imagine your bank forgetting your balance after every restart. Nationwide panic.</p>

    <h2>2. Social Media Apps</h2>
    <p>Instagram stores photos, likes, comments, followers, and messages. Without databases, your followers list would disappear faster than motivation after New Year resolutions.</p>

    <h2>3. E-commerce Platforms</h2>
    <p>Amazon and Flipkart store products, orders, payments, customer details, and delivery tracking.</p>

    <h2>4. Hospital Systems</h2>
    <p>Hospitals manage patient records, test reports, medicines, and appointments. Databases help doctors access information quickly.</p>

    <h2>5. Schools and Colleges</h2>
    <p>Stores student details, attendance, marks, fees, and timetables.</p>

    <h2>6. Food Delivery Apps</h2>
    <p>Swiggy and Zomato manage restaurants, orders, delivery partners, and live tracking.</p>

    <h2>7. OTT Platforms</h2>
    <p>Netflix and Hotstar store watch history, recommendations, and user accounts. That is why Netflix somehow knows you watched one crime thriller and suddenly recommends 48 more.</p>

    <h2>8. Railway and Flight Booking</h2>
    <p>Stores passenger details, seat availability, ticket bookings, and timings. Without databases, Tatkal booking would become even more terrifying. Hard to imagine, but possible.</p>

    <h2>Final Thoughts for Module 1</h2>
    <p>In this module, you learned:</p>
    <ul>
      <li>What data is</li>
      <li>What databases are</li>
      <li>Why DBMS exists</li>
      <li>Different types of DBMS</li>
      <li>What RDBMS means</li>
      <li>DBMS vs RDBMS</li>
      <li>Popular databases</li>
      <li>Real-world database usage</li>
    </ul>
    <p>This foundation is extremely important. Do not rush. If these basics become clear, learning SQL becomes much easier.</p>
    <p>Most students struggle in SQL because they directly jump into commands without understanding why databases exist in the first place. You are building the right foundation.</p>`,

  // ── Module 2 ─────────────────────────────────────────────────
  'mod2-t1': `
    <h1>What is SQL?</h1>

    <h2>Introduction</h2>
    <p>Imagine you walk into a huge supermarket like D-Mart or Reliance Fresh. Thousands of products are placed on shelves — Rice, Biscuits, Shampoo, Maggi, Cold drinks, Chips.</p>
    <p>Now imagine the manager suddenly asks: <em>"How many packets of Maggi were sold today?"</em></p>
    <p>Will the staff start counting packets manually one by one? Of course not. They use a database. And to talk with that database, they use a language called <strong>SQL</strong>.</p>
    <p>SQL is one of the most important skills in the world of data. Whether you become a Data Analyst, Data Scientist, Backend Developer, Software Engineer, Business Analyst, or AI Engineer — SQL will follow you everywhere like that one relative who asks: <em>"Beta... package kitna hai?"</em></p>

    <h2>So, What Exactly is SQL?</h2>
    <p>SQL stands for <strong>Structured Query Language</strong>.</p>
    <p>It is a language used to:</p>
    <ul>
      <li>Store data</li>
      <li>Retrieve data</li>
      <li>Update data</li>
      <li>Delete data</li>
      <li>Manage databases</li>
    </ul>
    <p>In simple words: <strong>SQL helps us talk to databases.</strong> Just like Hindi helps us talk to people.</p>

    <h2>Real-Life Example</h2>
    <p>Suppose Zomato stores millions of orders daily. If the company wants answers like — Which food sells the most? Which city orders the most biryani? Which restaurant earns the highest revenue? — they use SQL.</p>
    <pre><code>SELECT *
FROM orders;</code></pre>
    <p>Meaning: <em>"Show me all orders."</em> Simple.</p>

    <h2>Why SQL is So Popular</h2>
    <table>
      <tr><th>Feature</th><th>Why It Matters</th></tr>
      <tr><td>Easy to Learn</td><td>English-like syntax</td></tr>
      <tr><td>Powerful</td><td>Can handle millions of rows</td></tr>
      <tr><td>Fast</td><td>Retrieves data quickly</td></tr>
      <tr><td>Industry Standard</td><td>Used everywhere</td></tr>
      <tr><td>Beginner Friendly</td><td>Great first tech skill</td></tr>
    </table>

    <h2>SQL Works with Tables</h2>
    <p>Databases store data in tables. Example:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
      <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
      <tr><td>3</td><td>Aman</td><td>Jaipur</td></tr>
    </table>
    <p>Rows = records &nbsp;·&nbsp; Columns = fields. SQL helps us work with these tables.</p>

    <h2>Common Things You Can Do Using SQL</h2>
    <h3>1. Read Data</h3>
    <pre><code>SELECT * FROM customers;</code></pre>
    <h3>2. Filter Data</h3>
    <pre><code>SELECT *
FROM customers
WHERE city = 'Delhi';</code></pre>
    <h3>3. Add New Data</h3>
    <pre><code>INSERT INTO customers
VALUES (4, 'Riya', 'Pune');</code></pre>
    <h3>4. Update Existing Data</h3>
    <pre><code>UPDATE customers
SET city = 'Bangalore'
WHERE customer_id = 1;</code></pre>
    <h3>5. Delete Data</h3>
    <pre><code>DELETE FROM customers
WHERE customer_id = 4;</code></pre>

    <h2>Where SQL is Used in Real World</h2>
    <table>
      <tr><th>Industry</th><th>Usage</th></tr>
      <tr><td>Banking</td><td>Transaction records</td></tr>
      <tr><td>E-commerce</td><td>Orders &amp; customers</td></tr>
      <tr><td>Healthcare</td><td>Patient records</td></tr>
      <tr><td>Social Media</td><td>User activity</td></tr>
      <tr><td>Education</td><td>Student management</td></tr>
      <tr><td>Food Delivery</td><td>Order tracking</td></tr>
      <tr><td>OTT Platforms</td><td>Watch history</td></tr>
    </table>
    <p>Even when you book train tickets on IRCTC… SQL is silently working in the background. Hopefully not crashing during Tatkal booking.</p>

    <h2>Is SQL Difficult?</h2>
    <p>Not at all. SQL is one of the easiest technical skills to start with. Most beginners fear coding because programming languages look scary. But SQL feels almost like English.</p>
    <pre><code>SELECT name
FROM students;</code></pre>
    <p>Even someone seeing SQL for the first time can guess what it does.</p>

    <h2>SQL vs Excel</h2>
    <table>
      <tr><th>Excel</th><th>SQL</th></tr>
      <tr><td>Good for small data</td><td>Good for huge data</td></tr>
      <tr><td>Manual work</td><td>Automated querying</td></tr>
      <tr><td>Slower for large datasets</td><td>Much faster</td></tr>
      <tr><td>Limited scalability</td><td>Enterprise-level scalability</td></tr>
    </table>
    <p>Excel is like a scooter. SQL is like a metro train. Both useful. But different scale.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>SQL stands for Structured Query Language</li>
      <li>SQL is used to communicate with databases</li>
      <li>SQL works mainly with tables</li>
      <li>SQL can read, insert, update, and delete data</li>
      <li>SQL is used in almost every industry</li>
      <li>SQL is beginner friendly</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What does SQL stand for?</li>
      <li>Why do companies use SQL?</li>
      <li>What is a database table?</li>
      <li>Write a query to display all records from a table called <code>employees</code>.</li>
      <li>Name three industries where SQL is used.</li>
    </ol>`,

  'mod2-t2': `
    <h1>History of SQL</h1>

    <h2>Introduction</h2>
    <p>Today SQL is everywhere. But have you ever wondered — Who created SQL? Why was it invented? What problem was it trying to solve?</p>
    <p>To understand SQL deeply, we should know its history. And the story is actually very interesting.</p>

    <h2>Before SQL Existed</h2>
    <p>In the early days of computers (1960s), storing data was painful. Companies used file systems — data was stored in separate files.</p>
    <p>Problems:</p>
    <ul>
      <li>Very slow</li>
      <li>Difficult to manage</li>
      <li>Data duplication</li>
      <li>Hard to search data</li>
      <li>No proper relationships</li>
    </ul>
    <p>Imagine keeping <code>customer.txt</code>, <code>orders.txt</code>, <code>payment.txt</code> and then manually connecting everything. Basically like trying to find one Aadhaar photocopy in an Indian government office. Possible? Yes. Easy? Absolutely not.</p>

    <h2>The Big Revolution: Relational Model</h2>
    <p>In 1970, a computer scientist named <strong>Edgar F. Codd</strong>, working at IBM, introduced a revolutionary idea:</p>
    <p><strong>The Relational Database Model.</strong></p>
    <p>He said: <em>"Instead of storing data randomly, let us store it in related tables."</em></p>
    <p>This idea completely changed the database world.</p>
    <p>Before this, data was messy, complex to maintain, and difficult to query. Codd's model introduced Tables, Rows, Columns, and Relationships — which made databases cleaner, faster, and easier to manage.</p>

    <h2>Birth of SQL</h2>
    <p>IBM wanted to implement Codd's relational model. So in the 1970s, IBM researchers created a language called <strong>SEQUEL</strong> — Structured English Query Language.</p>
    <p>Later, due to trademark issues, the name became <strong>SQL</strong>.</p>
    <p>Pronounced as <em>"Ess Queue Ell"</em> or <em>"Sequel"</em> — both are accepted. Although saying "Sequel" sounds cooler.</p>

    <h2>Major Milestones in SQL History</h2>
    <table>
      <tr><th>Year</th><th>Event</th></tr>
      <tr><td>1970</td><td>Relational model proposed by Edgar F. Codd</td></tr>
      <tr><td>1974</td><td>SQL developed at IBM</td></tr>
      <tr><td>1979</td><td>Oracle released commercial SQL database</td></tr>
      <tr><td>1986</td><td>SQL became ANSI standard</td></tr>
      <tr><td>1987</td><td>ISO standardized SQL</td></tr>
      <tr><td>1990s</td><td>SQL became industry standard</td></tr>
      <tr><td>Today</td><td>Used worldwide</td></tr>
    </table>

    <h2>What is ANSI Standard?</h2>
    <p>ANSI stands for <strong>American National Standards Institute</strong>. When SQL became a standard, different companies could support similar syntax and developers could switch databases easily.</p>
    <p>MySQL, PostgreSQL, SQL Server, and Oracle all use SQL — though each has some small differences.</p>

    <h2>Popular Databases That Use SQL</h2>
    <table>
      <tr><th>Database</th><th>Company</th></tr>
      <tr><td>MySQL</td><td>Oracle</td></tr>
      <tr><td>PostgreSQL</td><td>Open Source</td></tr>
      <tr><td>SQL Server</td><td>Microsoft</td></tr>
      <tr><td>Oracle Database</td><td>Oracle</td></tr>
      <tr><td>SQLite</td><td>Open Source</td></tr>
    </table>

    <h2>Why SQL Survived for So Long</h2>
    <p>Technology changes fast. But SQL has survived for decades. Because it is Simple, Reliable, Powerful, Scalable, and Easy to understand.</p>
    <p>Even modern companies like Google, Amazon, Netflix, Swiggy, and Flipkart still use SQL databases heavily.</p>
    <p>SQL is older than many people learning it today. Yet it is still one of the most demanded skills in tech. That's legendary consistency. Even Bollywood reboots don't survive this long.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>Earlier systems stored data in files — slow and messy</li>
      <li>Edgar F. Codd introduced the relational model in 1970</li>
      <li>IBM created SQL in the 1970s (originally called SEQUEL)</li>
      <li>SQL became an international ANSI/ISO standard in 1986–87</li>
      <li>SQL is still widely used today across every industry</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>Who introduced the relational database model?</li>
      <li>What was SQL originally called?</li>
      <li>Why were old file systems problematic?</li>
      <li>What is ANSI?</li>
      <li>Name three popular SQL databases.</li>
    </ol>`,
  'mod2-t3': `
    <h1>SQL Sublanguages (DDL, DML, DCL, TCL)</h1>

    <h2>Introduction</h2>
    <p>SQL is huge. And instead of putting every command into one big confusing bucket, SQL is divided into smaller categories called <strong>SQL Sublanguages</strong>.</p>
    <p>Think of it like Indian cuisine. We don't call everything simply "food." We separate North Indian, South Indian, Street Food, Desserts. Similarly, SQL commands are grouped based on what they do.</p>

    <h2>Main Types of SQL Commands</h2>
    <table>
      <tr><th>Type</th><th>Full Form</th><th>Purpose</th></tr>
      <tr><td>DDL</td><td>Data Definition Language</td><td>Structure management</td></tr>
      <tr><td>DML</td><td>Data Manipulation Language</td><td>Working with data</td></tr>
      <tr><td>DCL</td><td>Data Control Language</td><td>Permissions &amp; security</td></tr>
      <tr><td>TCL</td><td>Transaction Control Language</td><td>Managing transactions</td></tr>
    </table>

    <h2>1. DDL — Data Definition Language</h2>
    <p>DDL is used to define database structure — creating tables, modifying tables, deleting tables.</p>
    <table>
      <tr><th>Command</th><th>Purpose</th></tr>
      <tr><td>CREATE</td><td>Create objects</td></tr>
      <tr><td>ALTER</td><td>Modify structure</td></tr>
      <tr><td>DROP</td><td>Delete objects</td></tr>
      <tr><td>TRUNCATE</td><td>Remove all records</td></tr>
    </table>
    <h3>CREATE TABLE</h3>
    <pre><code>CREATE TABLE students (
    student_id INT,
    name VARCHAR(50),
    city VARCHAR(50)
);</code></pre>
    <h3>ALTER TABLE</h3>
    <pre><code>ALTER TABLE students
ADD age INT;</code></pre>
    <p>Adds a new column to an existing table.</p>
    <h3>DROP TABLE</h3>
    <pre><code>DROP TABLE students;</code></pre>
    <p>Deletes the table completely. Dangerous command. Like giving scissors to a toddler.</p>

    <h2>What is TRUNCATE?</h2>
    <p>Many beginners confuse DELETE, TRUNCATE, and DROP. Let us simplify.</p>
    <table>
      <tr><th>Command</th><th>What It Does</th></tr>
      <tr><td>DELETE</td><td>Removes selected rows</td></tr>
      <tr><td>TRUNCATE</td><td>Removes all rows only</td></tr>
      <tr><td>DROP</td><td>Removes entire table</td></tr>
    </table>
    <pre><code>TRUNCATE TABLE students;</code></pre>
    <p>The table structure remains. But all data disappears.</p>

    <h2>2. DML — Data Manipulation Language</h2>
    <p>DML is used to work with data inside tables. This is the category you will use most often.</p>
    <table>
      <tr><th>Command</th><th>Purpose</th></tr>
      <tr><td>INSERT</td><td>Add data</td></tr>
      <tr><td>UPDATE</td><td>Modify data</td></tr>
      <tr><td>DELETE</td><td>Remove data</td></tr>
      <tr><td>SELECT</td><td>Retrieve data</td></tr>
    </table>
    <h3>INSERT</h3>
    <pre><code>INSERT INTO students
VALUES (1, 'Rahul', 'Delhi');</code></pre>
    <h3>SELECT</h3>
    <pre><code>SELECT *
FROM students;</code></pre>
    <h3>UPDATE</h3>
    <pre><code>UPDATE students
SET city = 'Mumbai'
WHERE student_id = 1;</code></pre>
    <h3>DELETE</h3>
    <pre><code>DELETE FROM students
WHERE student_id = 1;</code></pre>

    <h2>Why WHERE Clause is Important</h2>
    <p>Imagine writing:</p>
    <pre><code>DELETE FROM students;</code></pre>
    <p>Without WHERE — entire table data gets deleted. One missing WHERE has destroyed more careers than Monday morning meetings. Always be careful.</p>

    <h2>3. DCL — Data Control Language</h2>
    <p>DCL controls permissions, access, and security. Imagine a company database — should every employee be allowed to delete data? Absolutely not. Otherwise one frustrated intern can accidentally delete production tables. Then suddenly everyone becomes "in a meeting."</p>
    <table>
      <tr><th>Command</th><th>Purpose</th></tr>
      <tr><td>GRANT</td><td>Give permissions</td></tr>
      <tr><td>REVOKE</td><td>Remove permissions</td></tr>
    </table>
    <pre><code>GRANT SELECT ON students TO analyst;</code></pre>
    <p>Meaning: "Allow analyst to view data."</p>
    <pre><code>REVOKE SELECT ON students FROM analyst;</code></pre>
    <p>Meaning: "Remove viewing permission."</p>
    <p>Data security is extremely important for bank records, Aadhaar data, and customer transactions. DCL helps control who can do what.</p>

    <h2>4. TCL — Transaction Control Language</h2>
    <p>TCL manages transactions. A transaction is a group of SQL operations. Example: money transferred from one bank account to another. If one step fails, we should reverse everything — otherwise money can disappear midway. And people become very emotional when money disappears.</p>
    <table>
      <tr><th>Command</th><th>Purpose</th></tr>
      <tr><td>COMMIT</td><td>Save changes permanently</td></tr>
      <tr><td>ROLLBACK</td><td>Undo changes</td></tr>
      <tr><td>SAVEPOINT</td><td>Create checkpoints</td></tr>
    </table>
    <pre><code>START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE account_id = 2;

COMMIT;</code></pre>
    <p>This ensures safe money transfer. If the second update fails, <code>ROLLBACK</code> cancels all changes and returns the database to the previous safe state.</p>

    <h2>Easy Way to Remember All 4</h2>
    <table>
      <tr><th>Category</th><th>Think Like</th></tr>
      <tr><td>DDL</td><td>Building the house</td></tr>
      <tr><td>DML</td><td>Living inside the house</td></tr>
      <tr><td>DCL</td><td>Security guard</td></tr>
      <tr><td>TCL</td><td>Emergency control system</td></tr>
    </table>

    <h2>Quick Revision</h2>
    <table>
      <tr><th>Category</th><th>Main Purpose</th></tr>
      <tr><td>DDL</td><td>Structure</td></tr>
      <tr><td>DML</td><td>Data handling</td></tr>
      <tr><td>DCL</td><td>Security</td></tr>
      <tr><td>TCL</td><td>Transactions</td></tr>
    </table>

    <h2>Practice Questions</h2>
    <ol>
      <li>What does DDL stand for?</li>
      <li>Which command is used to modify table structure?</li>
      <li>What is the difference between DELETE and TRUNCATE?</li>
      <li>Which category handles permissions?</li>
      <li>What is the purpose of COMMIT?</li>
      <li>What does ROLLBACK do?</li>
      <li>Why is the WHERE clause important in DELETE queries?</li>
    </ol>`,

  'mod2-t4': `
    <h1>SQL vs NoSQL</h1>

    <h2>Introduction</h2>
    <p>As data started growing massively, companies realized: <em>"Traditional databases are great… but sometimes we need more flexibility."</em> This gave rise to <strong>NoSQL Databases</strong>.</p>
    <p>Beginners often get confused between SQL, NoSQL, Relational, and Non-relational. Let us simplify everything.</p>

    <h2>What is a SQL Database?</h2>
    <p>SQL databases store data in <strong>Tables</strong>. Data is structured — fixed columns, defined schema, organized relationships.</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
    </table>
    <p><strong>Examples:</strong> MySQL, PostgreSQL, SQL Server</p>
    <p><strong>What is Schema?</strong> Schema means the structure of the database. If a students table has student_id, name, and city — every row must follow that structure. SQL databases are strict about structure.</p>

    <h2>What is a NoSQL Database?</h2>
    <p>NoSQL databases are more flexible. They may store data as Documents, Key-value pairs, Graphs, or Collections.</p>
    <pre><code>{
  "name": "Rahul",
  "city": "Delhi",
  "skills": ["SQL", "Python"]
}</code></pre>
    <p><strong>Examples:</strong> MongoDB, Cassandra, Redis</p>

    <h2>Main Differences</h2>
    <table>
      <tr><th>SQL</th><th>NoSQL</th></tr>
      <tr><td>Structured data</td><td>Flexible data</td></tr>
      <tr><td>Tables</td><td>Documents / collections</td></tr>
      <tr><td>Fixed schema</td><td>Dynamic schema</td></tr>
      <tr><td>Strong relationships</td><td>Flexible relationships</td></tr>
      <tr><td>Vertical scaling</td><td>Horizontal scaling</td></tr>
    </table>

    <h2>Understanding Scaling</h2>
    <p><strong>Vertical Scaling</strong> — adding more power to one machine (more RAM, better CPU).</p>
    <p><strong>Horizontal Scaling</strong> — adding more machines. NoSQL databases are generally better for massive scaling.</p>

    <h2>Real-Life Examples</h2>
    <h3>SQL Example — Banking</h3>
    <p>Banks need accuracy, consistency, and strong transactions. You cannot randomly lose ₹50,000 during a transfer. Therefore banks prefer SQL databases.</p>
    <h3>NoSQL Example — Social Media</h3>
    <p>Instagram user data changes constantly — Posts, Images, Comments, Likes, Stories. Flexible structure helps. So many modern apps use NoSQL.</p>

    <h2>SQL Advantages</h2>
    <ul>
      <li><strong>Strong Structure</strong> — very organized</li>
      <li><strong>ACID Properties</strong> — reliable transactions</li>
      <li><strong>Powerful Querying</strong> — excellent for analytics</li>
      <li><strong>Mature Ecosystem</strong> — used for decades</li>
    </ul>

    <h2>NoSQL Advantages</h2>
    <ul>
      <li><strong>Flexible Schema</strong> — easy to store changing data</li>
      <li><strong>High Scalability</strong> — can handle massive traffic</li>
      <li><strong>Faster for Certain Applications</strong> — especially real-time systems</li>
    </ul>

    <h2>Which One is Better?</h2>
    <p>Neither. It depends on the problem.</p>
    <table>
      <tr><th>Use Case</th><th>Better Choice</th></tr>
      <tr><td>Banking</td><td>SQL</td></tr>
      <tr><td>Analytics</td><td>SQL</td></tr>
      <tr><td>Social Media</td><td>NoSQL</td></tr>
      <tr><td>Real-time apps</td><td>NoSQL</td></tr>
      <tr><td>Complex joins</td><td>SQL</td></tr>
    </table>
    <p>Many companies use <strong>both</strong> — SQL for transactions, NoSQL for app activity. Like Indian weddings combining Punjabi songs, South Indian food, Gujarati dance, and one uncle forcing everyone to do bhangra.</p>

    <h2>Final Thoughts</h2>
    <p>As a beginner, focus on SQL first. It builds strong fundamentals, teaches data structure properly, and is widely used in analytics. Once SQL becomes comfortable, learning NoSQL becomes much easier.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>SQL uses tables — NoSQL uses flexible structures</li>
      <li>SQL is structured — NoSQL is flexible</li>
      <li>SQL is better for transactions and analytics</li>
      <li>NoSQL is better for scale and flexible data</li>
      <li>Both are important in modern tech</li>
    </ul>`,
  'mod2-t5': `<h1>Setting Up a SQL Environment</h1>
    <p>Now comes the exciting part.</p>
    <p>Until now, we were only understanding theory. But SQL becomes truly fun when you actually start writing queries. For that, we need a SQL environment.</p>
    <p>Think of it like setting up a cricket ground before playing. Bat ready. Pitch ready. Players ready. Now match can begin.</p>

    <h2>What Do We Need?</h2>
    <p>To practice SQL, we need two things:</p>
    <table>
      <thead><tr><th>Component</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>Database System</td><td>Stores data</td></tr>
        <tr><td>SQL Tool / Editor</td><td>Write queries</td></tr>
      </tbody>
    </table>

    <h2>Best Option for Beginners</h2>
    <p>For beginners, MySQL is a fantastic choice. Why? Because it is:</p>
    <ul>
      <li>Free</li>
      <li>Popular</li>
      <li>Beginner friendly</li>
      <li>Widely used</li>
    </ul>
    <p>Many companies use MySQL in real projects. So learning it is a great investment.</p>

    <h2>Understanding the Setup</h2>
    <p>Many beginners think: <em>"Installing SQL means installing one software."</em></p>
    <p>Actually, there are usually two parts:</p>
    <table>
      <thead><tr><th>Software</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>MySQL Server</td><td>Stores and manages databases</td></tr>
        <tr><td>MySQL Workbench</td><td>Interface to write queries</td></tr>
      </tbody>
    </table>
    <p>Think of it this way:</p>
    <ul>
      <li>MySQL Server = Kitchen</li>
      <li>MySQL Workbench = Dining table where you interact</li>
    </ul>

    <h2>Step 1: Install MySQL Server</h2>
    <p>MySQL Server is the actual database engine. It handles:</p>
    <ul>
      <li>Databases</li>
      <li>Tables</li>
      <li>Data storage</li>
      <li>Query execution</li>
    </ul>
    <p>Without the server, there is no database.</p>

    <h2>Step 2: Install MySQL Workbench</h2>
    <p>Workbench is where you:</p>
    <ul>
      <li>Write SQL queries</li>
      <li>Run queries</li>
      <li>View outputs</li>
      <li>Create databases</li>
      <li>Manage tables</li>
    </ul>
    <p>It is basically your SQL playground.</p>

    <h2>During Installation</h2>
    <p>You may see many technical options. Do not panic.</p>
    <p>Every beginner reaches that stage where the installer shows 35 checkboxes and suddenly confidence disappears.</p>
    <p>Just:</p>
    <ul>
      <li>Choose default setup</li>
      <li>Continue next</li>
      <li>Set password carefully</li>
      <li>Finish installation</li>
    </ul>
    <p>Done.</p>

    <h2>Setting Root Password</h2>
    <p>During installation, MySQL asks you to create a password. This password is important.</p>
    <p>Please do not set:</p>
    <pre><code>password123</code></pre>
    <p>Hackers also passed kindergarten. Choose a proper password and save it safely.</p>

    <h2>Opening MySQL Workbench</h2>
    <p>After installation, open MySQL Workbench. You will usually connect using:</p>
    <table>
      <thead><tr><th>Field</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>Username</td><td>root</td></tr>
        <tr><td>Password</td><td>Your chosen password</td></tr>
      </tbody>
    </table>
    <p>Once connected, you are officially inside MySQL.</p>
    <p>Congratulations. You are now talking to databases. Very few people know how powerful that skill becomes later.</p>

    <h2>Creating Your First Database</h2>
    <p>Now let us create a database.</p>
    <pre><code>CREATE DATABASE school;</code></pre>
    <p>Meaning: <em>"Create a database named school."</em> Simple.</p>

    <h2>Selecting the Database</h2>
    <p>Before working inside a database, we must select it.</p>
    <pre><code>USE school;</code></pre>
    <p>Meaning: <em>"Now work inside the school database."</em></p>

    <h2>Creating Your First Table</h2>
    <pre><code>CREATE TABLE students (
    student_id INT,
    name VARCHAR(50),
    city VARCHAR(50)
);</code></pre>
    <table>
      <thead><tr><th>Part</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>CREATE TABLE</td><td>Create a new table</td></tr>
        <tr><td>student_id INT</td><td>Integer column</td></tr>
        <tr><td>name VARCHAR(50)</td><td>Text column (max 50 chars)</td></tr>
        <tr><td>city VARCHAR(50)</td><td>Text column (max 50 chars)</td></tr>
      </tbody>
    </table>

    <h2>Adding Data into Table</h2>
    <pre><code>INSERT INTO students
VALUES (1, 'Rahul', 'Delhi');</code></pre>
    <p>Now one row gets inserted into the table.</p>

    <h2>Viewing Data</h2>
    <pre><code>SELECT *
FROM students;</code></pre>
    <p>Output:</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
      </tbody>
    </table>
    <p>And just like that… you interacted with your first database.</p>

    <h2>Online SQL Platforms</h2>
    <p>If your laptop is slow, or you do not want installation right now, you can practice online. Popular platforms:</p>
    <ul>
      <li>DB Fiddle</li>
      <li>SQL Fiddle</li>
      <li>SQLite Online</li>
    </ul>
    <p>These are useful for beginners. But eventually, working locally is better for serious learning.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Forgetting Semicolon</h3>
    <p>Wrong:</p>
    <pre><code>SELECT * FROM students</code></pre>
    <p>Correct:</p>
    <pre><code>SELECT * FROM students;</code></pre>

    <h3>2. Typing Mistakes</h3>
    <pre><code>SELEC * FROM students;</code></pre>
    <p>SQL: <em>"I have absolutely no idea what you mean."</em></p>

    <h3>3. Wrong Database Selected</h3>
    <p>Always check:</p>
    <pre><code>USE database_name;</code></pre>
    <p>Otherwise tables may get created somewhere else.</p>

    <h3>4. Forgetting Password</h3>
    <p>Every SQL learner eventually experiences this. You confidently set a password. Then after two days: <em>"What was it again?"</em> Classic developer moment.</p>

    <h2>Best Learning Advice</h2>
    <p>Do not just read SQL. Practice it. Because SQL is a practical skill.</p>
    <p>Watching SQL tutorials without practice is like watching cooking videos and expecting biryani to appear automatically. Does not work.</p>

    <h2>Why Practice Matters</h2>
    <p>The more queries you write:</p>
    <ul>
      <li>Faster you learn</li>
      <li>Better you remember</li>
      <li>More confident you become</li>
    </ul>
    <p>SQL rewards consistency. Even 20 minutes daily is enough.</p>

    <h2>Final Thoughts</h2>
    <p>Setting up your SQL environment is the first real step into the world of databases. Once setup is complete, you can:</p>
    <ul>
      <li>Create databases</li>
      <li>Build tables</li>
      <li>Insert data</li>
      <li>Run queries</li>
      <li>Solve real business problems</li>
    </ul>
    <p>And this is where the real fun begins.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>SQL environment is needed to practice SQL</li>
      <li>MySQL Server stores data</li>
      <li>MySQL Workbench helps execute queries</li>
      <li><code>CREATE DATABASE</code> creates databases</li>
      <li><code>USE</code> selects a database</li>
      <li>Practice is extremely important</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>Why do we need a SQL environment?</li>
      <li>What is the role of MySQL Server?</li>
      <li>What is MySQL Workbench used for?</li>
      <li>Which command selects a database?</li>
      <li>Write a query to create a database called <code>company</code>.</li>
      <li>Why is practice important in SQL?</li>
      <li>What happens if you forget to select the correct database?</li>
    </ol>`,

  'mod2-t6': `<h1>Your First SQL Query</h1>
    <p>This is the moment every SQL learner waits for. Your first SQL query.</p>
    <p>Think of it like your first cricket shot, your first bike ride, your first Maggi cooked without burning the pan. Once you write your first query, confidence starts building.</p>

    <h2>The Most Famous SQL Query</h2>
    <pre><code>SELECT *
FROM students;</code></pre>
    <p>This is probably the most written SQL query in history. And today, you will fully understand it.</p>

    <h2>Breaking the Query into Parts</h2>

    <h3>Understanding SELECT</h3>
    <pre><code>SELECT</code></pre>
    <p>Means: <em>"Choose data."</em> Whenever you want to retrieve data from a table, you use SELECT.</p>

    <h3>Understanding *</h3>
    <pre><code>*</code></pre>
    <p>Means: <em>"All columns."</em> So instead of writing every column name manually, we use <code>*</code>.</p>

    <h3>Understanding FROM</h3>
    <pre><code>FROM students</code></pre>
    <p>Means: <em>"Take data from the students table."</em></p>

    <h3>Complete Meaning</h3>
    <pre><code>SELECT *
FROM students;</code></pre>
    <p>Means: <em>"Show all columns from the students table."</em> Very simple.</p>

    <h2>Example Table</h2>
    <p>Suppose the students table contains:</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
        <tr><td>3</td><td>Aman</td><td>Jaipur</td></tr>
      </tbody>
    </table>

    <h2>Output of Query</h2>
    <pre><code>SELECT *
FROM students;</code></pre>
    <p>Output:</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
        <tr><td>3</td><td>Aman</td><td>Jaipur</td></tr>
      </tbody>
    </table>
    <p>SQL simply displays all records.</p>

    <h2>Selecting Specific Columns</h2>
    <p>Instead of all columns, you can choose specific columns.</p>
    <pre><code>SELECT name, city
FROM students;</code></pre>
    <p>Output:</p>
    <table>
      <thead><tr><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>Priya</td><td>Mumbai</td></tr>
        <tr><td>Aman</td><td>Jaipur</td></tr>
      </tbody>
    </table>

    <h2>Why This is Useful</h2>
    <p>In real companies, tables may contain 50 columns, 100 columns, even more. You usually only need relevant columns. So selecting specific columns improves:</p>
    <ul>
      <li>Readability</li>
      <li>Speed</li>
      <li>Performance</li>
    </ul>

    <h2>Filtering Data Using WHERE</h2>
    <p>Suppose we only want students from Delhi.</p>
    <pre><code>SELECT *
FROM students
WHERE city = 'Delhi';</code></pre>
    <p>Now SQL returns only Delhi records.</p>
    <p>WHERE acts like a filter. It tells SQL: <em>"Only show rows matching this condition."</em></p>

    <h2>More Examples</h2>
    <h3>Show only names</h3>
    <pre><code>SELECT name
FROM students;</code></pre>

    <h3>Show only Mumbai students</h3>
    <pre><code>SELECT *
FROM students
WHERE city = 'Mumbai';</code></pre>

    <h3>Show student_id and name</h3>
    <pre><code>SELECT student_id, name
FROM students;</code></pre>

    <h2>Reading SQL Like English</h2>
    <p>This is the secret to learning SQL quickly. Read queries like sentences.</p>
    <pre><code>SELECT name
FROM students
WHERE city = 'Mumbai';</code></pre>
    <p>English version: <em>"Show names from students where city is Mumbai."</em> Suddenly SQL feels much easier.</p>

    <h2>SQL Formatting Best Practice</h2>
    <p>Good formatting improves readability.</p>
    <p>Preferred:</p>
    <pre><code>SELECT name, city
FROM students
WHERE city = 'Delhi';</code></pre>
    <p>Avoid:</p>
    <pre><code>select name,city from students where city='Delhi';</code></pre>
    <p>Both work. But readable SQL is professional SQL.</p>

    <h2>Common Beginner Errors</h2>

    <h3>1. Missing Quotes</h3>
    <p>Wrong:</p>
    <pre><code>WHERE city = Delhi</code></pre>
    <p>Correct:</p>
    <pre><code>WHERE city = 'Delhi'</code></pre>
    <p>Text values usually need quotes.</p>

    <h3>2. Wrong Table Name</h3>
    <p>Wrong:</p>
    <pre><code>FROM student</code></pre>
    <p>Correct:</p>
    <pre><code>FROM students</code></pre>
    <p>SQL gets confused if the table does not exist.</p>

    <h3>3. Forgetting Semicolon</h3>
    <p>Wrong:</p>
    <pre><code>SELECT * FROM students</code></pre>
    <p>Correct:</p>
    <pre><code>SELECT * FROM students;</code></pre>

    <h3>4. Typing Errors</h3>
    <pre><code>SELEC * FROM students;</code></pre>
    <p>SQL: <em>"Brother… at least spell SELECT correctly."</em></p>

    <h2>Why SQL Queries Matter</h2>
    <p>Queries help businesses answer questions. Examples:</p>
    <ul>
      <li>Which products sell most?</li>
      <li>Which customers spend most?</li>
      <li>Which city generates highest revenue?</li>
      <li>Which employee has highest sales?</li>
    </ul>
    <p>SQL turns raw data into useful information.</p>

    <h2>Real-World Example</h2>
    <p>Suppose Swiggy wants to know: <em>"Which city orders the most biryani?"</em></p>
    <p>SQL query can answer that within seconds. Without SQL, some poor employee would be counting orders manually until retirement.</p>

    <h2>Best Way to Improve in SQL</h2>
    <p>Practice daily. Even 20 minutes daily helps. Because SQL is learned by:</p>
    <ul>
      <li>Writing queries</li>
      <li>Making mistakes</li>
      <li>Fixing mistakes</li>
      <li>Repeating practice</li>
    </ul>
    <p>Every SQL expert once wrote broken queries. Completely normal.</p>

    <h2>Final Thoughts</h2>
    <p>Your first SQL query is the beginning of your data journey. Today you learned how to:</p>
    <ul>
      <li>Retrieve all data</li>
      <li>Select specific columns</li>
      <li>Filter records</li>
      <li>Read SQL logically</li>
    </ul>
    <p>This is the foundation for everything ahead. Soon you will write joins, aggregations, window functions, and advanced analytics queries. But every expert once started with:</p>
    <pre><code>SELECT * FROM table_name;</code></pre>

    <h2>Quick Revision</h2>
    <ul>
      <li><code>SELECT</code> retrieves data</li>
      <li><code>*</code> means all columns</li>
      <li><code>FROM</code> specifies the table</li>
      <li><code>WHERE</code> filters records</li>
      <li>SQL should be written cleanly</li>
      <li>Practice improves SQL skills</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What does SELECT do?</li>
      <li>What does <code>*</code> represent?</li>
      <li>Write a query to display only the <code>name</code> column from the students table.</li>
    </ol>`,

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
