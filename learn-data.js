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
  'mod3-t1': `<h1>CREATE DATABASE</h1>
    <p>Before storing any data, we first need a place to store it.</p>
    <p>Think about real life. Before opening a school, hospital, shop, or warehouse — you first need the building.</p>
    <p>Similarly, before creating tables and storing data in SQL, we first create a database.</p>
    <p>A database acts like a digital container. Inside it, we can store tables, data, relationships, and business information. Without a database, there is nowhere to store tables.</p>

    <h2>What is a Database?</h2>
    <p>A database is an organized collection of data. Simple examples:</p>
    <table>
      <thead><tr><th>Real World</th><th>Database Example</th></tr></thead>
      <tbody>
        <tr><td>School</td><td>Student database</td></tr>
        <tr><td>Hospital</td><td>Patient database</td></tr>
        <tr><td>Swiggy</td><td>Orders database</td></tr>
        <tr><td>Bank</td><td>Customer accounts database</td></tr>
      </tbody>
    </table>
    <p>Every modern app you use daily depends on databases. Even Instagram needs databases to remember your posts, followers, likes, and messages. Otherwise every time you open the app:</p>
    <p><em>"New phone, who dis?"</em></p>

    <h2>Why Do We Create Separate Databases?</h2>
    <p>Imagine mixing hospital records, school data, and banking transactions inside one giant messy system. Absolute chaos.</p>
    <p>So companies create separate databases for different purposes.</p>
    <table>
      <thead><tr><th>Database Name</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>school_db</td><td>Student records</td></tr>
        <tr><td>ecommerce_db</td><td>Orders and customers</td></tr>
        <tr><td>banking_db</td><td>Account transactions</td></tr>
      </tbody>
    </table>
    <p>This keeps data organized.</p>

    <h2>SQL Command to Create a Database</h2>
    <p>The command is:</p>
    <pre><code>CREATE DATABASE database_name;</code></pre>

    <h2>Example</h2>
    <pre><code>CREATE DATABASE school;</code></pre>
    <p>Meaning: <em>"Create a database named school."</em> Once executed, a new database gets created.</p>

    <h2>Understanding the Syntax</h2>
    <table>
      <thead><tr><th>Part</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>CREATE</td><td>Create something</td></tr>
        <tr><td>DATABASE</td><td>Type of object</td></tr>
        <tr><td>school</td><td>Database name</td></tr>
      </tbody>
    </table>

    <h2>Real-World Example</h2>
    <p>Suppose you are building a food delivery app. You may create:</p>
    <pre><code>CREATE DATABASE zomato_app;</code></pre>
    <p>Inside this database, you can later create tables like customers, restaurants, orders, and delivery_partners.</p>

    <h2>Rules for Naming Databases</h2>
    <p>Good database names should be simple, meaningful, and easy to understand.</p>
    <p>Good examples:</p>
    <pre><code>school
company_db
hospital_management</code></pre>
    <p>Bad examples:</p>
    <pre><code>abcxyz
newdatabase12345final</code></pre>
    <p>Even future-you will not remember what that means.</p>

    <h2>What Happens Internally?</h2>
    <p>When you run:</p>
    <pre><code>CREATE DATABASE school;</code></pre>
    <p>MySQL creates a new database container, internal storage structure, and space for tables and data. Basically SQL prepares an empty digital room — now you can start adding furniture (tables and data).</p>

    <h2>Viewing Available Databases</h2>
    <p>You can see all databases using:</p>
    <pre><code>SHOW DATABASES;</code></pre>
    <p>Output may look like:</p>
    <table>
      <thead><tr><th>Database</th></tr></thead>
      <tbody>
        <tr><td>information_schema</td></tr>
        <tr><td>mysql</td></tr>
        <tr><td>school</td></tr>
        <tr><td>sys</td></tr>
      </tbody>
    </table>

    <h2>Understanding Default Databases</h2>
    <p>When you install MySQL, some databases already exist — like <code>mysql</code>, <code>sys</code>, and <code>performance_schema</code>. These are system databases. Do not randomly delete them. Otherwise MySQL may stop working. And then suddenly your weekend becomes very productive.</p>

    <h2>Selecting a Database</h2>
    <p>After creating a database, we usually select it using:</p>
    <pre><code>USE school;</code></pre>
    <p>Meaning: <em>"Now work inside the school database."</em> Without selecting the database, SQL may not know where to create tables.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Forgetting Semicolon</h3>
    <p>Wrong:</p>
    <pre><code>CREATE DATABASE school</code></pre>
    <p>Correct:</p>
    <pre><code>CREATE DATABASE school;</code></pre>

    <h3>2. Using Spaces in Database Name</h3>
    <p>Wrong:</p>
    <pre><code>CREATE DATABASE school management;</code></pre>
    <p>Better:</p>
    <pre><code>CREATE DATABASE school_management;</code></pre>

    <h3>3. Creating Duplicate Database</h3>
    <p>If the database already exists, SQL throws an error. To avoid this, use:</p>
    <pre><code>CREATE DATABASE IF NOT EXISTS school;</code></pre>
    <p>Meaning: <em>"Create database only if it does not already exist."</em> Very useful in real projects.</p>

    <h2>Why Database Design Matters</h2>
    <p>A properly organized database improves performance, makes management easier, reduces confusion, and helps teams collaborate better. Good database design saves massive headaches later.</p>

    <h2>Real Industry Example</h2>
    <p>Suppose Flipkart stores customers, products, payments, delivery tracking, and reviews. Without proper databases, managing millions of records becomes impossible. That is why database creation is the first step of every system.</p>

    <h2>Final Thoughts</h2>
    <p><code>CREATE DATABASE</code> may look like a small command. But it is the foundation of everything that comes next. Every application, website, and business system starts by creating databases.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>Database stores organized data</li>
      <li><code>CREATE DATABASE</code> creates a database</li>
      <li><code>SHOW DATABASES</code> displays all databases</li>
      <li><code>USE</code> selects a database</li>
      <li>Database names should be meaningful</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What is a database?</li>
      <li>Why do companies create separate databases?</li>
      <li>Write a query to create a database called <code>company</code>.</li>
      <li>Which command displays all databases?</li>
      <li>What does the <code>USE</code> command do?</li>
      <li>Why should database names be meaningful?</li>
      <li>What is the benefit of <code>IF NOT EXISTS</code>?</li>
    </ol>`,

  'mod3-t2': `<h1>DROP DATABASE</h1>
    <p>In the previous article, we learned how to create databases. But sometimes, we also need to remove them.</p>
    <p>Maybe a project ended, a wrong database was created, a testing database is no longer needed, or a duplicate database exists.</p>
    <p>For this, SQL provides <code>DROP DATABASE</code>. But be careful — this is one of the most dangerous SQL commands. Because once deleted, all tables and data inside the database are removed permanently.</p>
    <p>SQL does not ask: <em>"Are you emotionally prepared for this decision?"</em> It just deletes everything.</p>

    <h2>What Does DROP DATABASE Do?</h2>
    <p>It completely removes the database, all its tables, records, relationships, and stored data. Everything disappears.</p>

    <h2>Syntax</h2>
    <pre><code>DROP DATABASE database_name;</code></pre>

    <h2>Example</h2>
    <pre><code>DROP DATABASE school;</code></pre>
    <p>Meaning: <em>"Delete the school database completely."</em> After execution, the database disappears, the tables disappear, and the data disappears. Gone.</p>

    <h2>Real-Life Analogy</h2>
    <p>Think of <code>CREATE DATABASE</code> as constructing a building. <code>DROP DATABASE</code> means demolishing the entire building — including rooms, furniture, electricity, and everything inside. That is why DROP DATABASE must be used carefully.</p>

    <h2>Checking Databases Before Deleting</h2>
    <p>Always check available databases first:</p>
    <pre><code>SHOW DATABASES;</code></pre>
    <p>This helps avoid deleting the wrong database. Because deleting a production database accidentally is the kind of mistake that creates emergency meetings.</p>

    <h2>Real-World Example</h2>
    <p>Suppose during practice, you created:</p>
    <pre><code>CREATE DATABASE test_project;</code></pre>
    <p>Later you no longer need it. Then:</p>
    <pre><code>DROP DATABASE test_project;</code></pre>
    <p>Simple cleanup.</p>

    <h2>What Happens Internally?</h2>
    <p>When <code>DROP DATABASE</code> runs, MySQL removes database metadata, table structures, stored records, and associated files. It permanently frees storage space.</p>

    <h2>Important Warning</h2>
    <p><code>DROP DATABASE</code> is irreversible. Once deleted, data cannot be recovered easily — unless a backup exists. That is why companies take regular database backups.</p>

    <h2>Beginner Mistake Example</h2>
    <p>Imagine writing:</p>
    <pre><code>DROP DATABASE company;</code></pre>
    <p>instead of:</p>
    <pre><code>DROP DATABASE company_test;</code></pre>
    <p>Congratulations. You just converted a normal day into a career development opportunity.</p>

    <h2>Better Practice: IF EXISTS</h2>
    <p>Safer approach:</p>
    <pre><code>DROP DATABASE IF EXISTS school;</code></pre>
    <p>Meaning: <em>"Delete database only if it exists."</em> This avoids unnecessary errors.</p>

    <h2>Difference Between DROP and DELETE</h2>
    <p>Many beginners confuse these:</p>
    <table>
      <thead><tr><th>Command</th><th>What It Removes</th></tr></thead>
      <tbody>
        <tr><td>DELETE</td><td>Removes rows only</td></tr>
        <tr><td>DROP TABLE</td><td>Removes a table</td></tr>
        <tr><td>DROP DATABASE</td><td>Removes entire database</td></tr>
      </tbody>
    </table>
    <p><code>DROP DATABASE</code> is the biggest level of deletion.</p>

    <h2>Real Industry Importance</h2>
    <p>In companies, databases are extremely valuable — banking transactions, customer details, medical records, business reports. Deleting the wrong database can cause financial loss, service outages, customer trust issues, and major business problems. That is why production database access is heavily restricted.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Forgetting Which Database is Important</h3>
    <p>Never randomly delete databases. Always double-check.</p>

    <h3>2. Using DROP Instead of DELETE</h3>
    <p>If you only wanted to remove one row but ran <code>DROP DATABASE</code> instead — that escalated quickly.</p>

    <h3>3. Not Taking Backup</h3>
    <p>Before deleting any important database: take a backup, confirm the requirement, and double-check the name. Professionals follow this process carefully.</p>

    <h2>Best Practice in Real Companies</h2>
    <p>Most companies restrict DROP permissions, require approvals, maintain backups, and use staging or testing environments. Because data is business gold.</p>

    <h2>Final Thoughts</h2>
    <p><code>DROP DATABASE</code> is powerful. And powerful commands require responsibility.</p>
    <p>As you continue learning SQL, you will notice: SQL is not just about writing queries — it is about handling data responsibly.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li><code>DROP DATABASE</code> removes the entire database</li>
      <li>All tables and records get deleted permanently</li>
      <li><code>SHOW DATABASES</code> helps verify databases before deleting</li>
      <li><code>IF EXISTS</code> avoids unnecessary errors</li>
      <li><code>DROP DATABASE</code> is irreversible without a backup</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What does <code>DROP DATABASE</code> do?</li>
      <li>Why is <code>DROP DATABASE</code> dangerous?</li>
      <li>Write a query to delete a database called <code>company</code>.</li>
      <li>What is the purpose of <code>IF EXISTS</code>?</li>
      <li>What is the difference between <code>DELETE</code> and <code>DROP DATABASE</code>?</li>
      <li>Why are backups important?</li>
      <li>Why do companies restrict DROP permissions?</li>
    </ol>`,
  'mod3-t3': `<h1>CREATE TABLE</h1>
    <p>In the previous articles, we learned how to create and delete databases. But a database alone is empty — like an empty school building, an empty hospital, or an empty warehouse.</p>
    <p>To actually store data, we need tables. Tables are where real data lives. Without tables, a database is just an empty container.</p>

    <h2>What is a Table?</h2>
    <p>A table stores data in rows and columns — just like an Excel sheet.</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
        <tr><td>3</td><td>Aman</td><td>Jaipur</td></tr>
      </tbody>
    </table>
    <table>
      <thead><tr><th>Part</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>Rows</td><td>Individual records</td></tr>
        <tr><td>Columns</td><td>Information fields</td></tr>
      </tbody>
    </table>

    <h2>Real-World Examples of Tables</h2>
    <table>
      <thead><tr><th>Business</th><th>Table Example</th></tr></thead>
      <tbody>
        <tr><td>School</td><td>students</td></tr>
        <tr><td>Swiggy</td><td>orders</td></tr>
        <tr><td>Bank</td><td>accounts</td></tr>
        <tr><td>Hospital</td><td>patients</td></tr>
        <tr><td>E-commerce</td><td>products</td></tr>
      </tbody>
    </table>
    <p>Every app you use daily depends heavily on tables. Even your Instagram followers list is basically stored in tables. Social media apps are just giant table collections with good UI.</p>

    <h2>Why Tables Are Important</h2>
    <p>Tables help organize data properly. Without tables, all information would become messy. Imagine storing customer names, product prices, payment records, and delivery details inside one giant paragraph. Absolute disaster. Tables bring structure.</p>

    <h2>SQL Command to Create a Table</h2>
    <pre><code>CREATE TABLE table_name (
    column_name datatype
);</code></pre>
    <p>This tells SQL: <em>"Create a table with specific columns and data types."</em></p>

    <h2>Your First CREATE TABLE Query</h2>
    <pre><code>CREATE TABLE students (
    student_id INT,
    name VARCHAR(50),
    city VARCHAR(50)
);</code></pre>
    <p>Congratulations. You just created your first table.</p>

    <h2>Understanding the Query Step-by-Step</h2>
    <h3>CREATE TABLE</h3>
    <p>Means: <em>"Create a new table."</em></p>

    <h3>students</h3>
    <p>This is the table name.</p>

    <h3>student_id INT</h3>
    <p>Column name is <code>student_id</code>, data type is <code>INT</code>. INT stores whole numbers.</p>

    <h3>name VARCHAR(50)</h3>
    <p><code>VARCHAR</code> stores text. <code>50</code> means a maximum of 50 characters.</p>

    <h3>city VARCHAR(50)</h3>
    <p>Stores city names like Delhi, Mumbai, Pune.</p>

    <h2>What are Data Types?</h2>
    <p>Data types define: <em>"What kind of data can be stored inside a column."</em></p>
    <table>
      <thead><tr><th>Data Type</th><th>Stores</th></tr></thead>
      <tbody>
        <tr><td>INT</td><td>Numbers</td></tr>
        <tr><td>VARCHAR</td><td>Text</td></tr>
        <tr><td>DATE</td><td>Dates</td></tr>
        <tr><td>FLOAT</td><td>Decimal values</td></tr>
      </tbody>
    </table>
    <p>Without data types, SQL would not know what type of information you want to store.</p>

    <h2>Real-Life Example</h2>
    <p>Suppose you are creating a Swiggy orders table:</p>
    <pre><code>CREATE TABLE orders (
    order_id INT,
    customer_name VARCHAR(100),
    amount FLOAT
);</code></pre>
    <p>Now the table can store order IDs, customer names, and order amounts.</p>

    <h2>Visual Understanding</h2>
    <p>After creating the students table, the structure exists but all rows are empty. Data gets added later.</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
      </tbody>
    </table>

    <h2>Rules for Naming Tables</h2>
    <p>Good table names should be simple, meaningful, and easy to read.</p>
    <p>Good examples:</p>
    <pre><code>students
orders
employees
customers</code></pre>
    <p>Bad examples:</p>
    <pre><code>abcxyz
newtablefinal123</code></pre>
    <p>Even future-you will hate these names.</p>

    <h2>Singular vs Plural Table Names</h2>
    <p>Some developers use <code>student</code>, others use <code>students</code>. Both work. But consistency matters. In most projects, plural names are commonly used.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Forgetting Commas</h3>
    <p>Wrong:</p>
    <pre><code>CREATE TABLE students (
    student_id INT
    name VARCHAR(50)
);</code></pre>
    <p>Correct:</p>
    <pre><code>CREATE TABLE students (
    student_id INT,
    name VARCHAR(50)
);</code></pre>

    <h3>2. Missing Brackets</h3>
    <p>Wrong:</p>
    <pre><code>CREATE TABLE students
student_id INT;</code></pre>
    <p>SQL becomes confused without the parentheses.</p>

    <h3>3. Using Wrong Data Type</h3>
    <p>Example:</p>
    <pre><code>phone_number INT</code></pre>
    <p>Problem: phone numbers are not used for calculations, may contain country codes, and leading zeros may disappear. Better:</p>
    <pre><code>phone_number VARCHAR(15)</code></pre>

    <h3>4. Spelling Mistakes</h3>
    <pre><code>CREAT TABLE students;</code></pre>
    <p>SQL: <em>"I appreciate your confidence but that keyword does not exist."</em></p>

    <h2>Viewing Tables</h2>
    <p>After creating tables, you can view them using:</p>
    <pre><code>SHOW TABLES;</code></pre>
    <p>Output:</p>
    <table>
      <thead><tr><th>Tables</th></tr></thead>
      <tbody><tr><td>students</td></tr></tbody>
    </table>

    <h2>Describing Table Structure</h2>
    <p>To see column details:</p>
    <pre><code>DESCRIBE students;</code></pre>
    <p>Output may show:</p>
    <table>
      <thead><tr><th>Field</th><th>Type</th></tr></thead>
      <tbody>
        <tr><td>student_id</td><td>int</td></tr>
        <tr><td>name</td><td>varchar(50)</td></tr>
        <tr><td>city</td><td>varchar(50)</td></tr>
      </tbody>
    </table>
    <p>Very useful for checking table structure.</p>

    <h2>What Happens Internally?</h2>
    <p>When <code>CREATE TABLE</code> runs, MySQL creates the table structure, defines columns, assigns data types, and allocates storage space. It prepares the table to store future data.</p>

    <h2>Real Industry Importance</h2>
    <p>In real companies, proper table design is extremely important. Bad table design can cause slow queries, confusing data, difficult maintenance, and performance problems. Good database engineers spend serious time designing tables correctly.</p>

    <h2>Real-World Analogy</h2>
    <p>Think of a table like a school admission form. Every student must fill name, roll number, city, and phone number — that structure is predefined. Similarly, SQL tables define what type of information each row should contain.</p>

    <h2>Best Practices</h2>
    <h3>Use Meaningful Column Names</h3>
    <p>Good: <code>customer_name</code> — Bad: <code>cn</code></p>

    <h3>Choose Correct Data Types</h3>
    <p>Store numbers as <code>INT</code>, text as <code>VARCHAR</code>, and dates as <code>DATE</code>.</p>

    <h3>Keep Structure Clean</h3>
    <p>Well-organized tables make future queries easier.</p>

    <h2>Final Thoughts</h2>
    <p><code>CREATE TABLE</code> is one of the most important SQL concepts because tables are where all actual business data lives.</p>
    <p>As you move ahead, you will build more advanced tables with constraints, keys, relationships, and optimized structures. But every database journey starts with:</p>
    <pre><code>CREATE TABLE table_name (...);</code></pre>

    <h2>Quick Revision</h2>
    <ul>
      <li>Tables store data in rows and columns</li>
      <li><code>CREATE TABLE</code> creates tables</li>
      <li>Columns define information fields</li>
      <li>Data types define what data can be stored</li>
      <li><code>SHOW TABLES</code> displays all tables</li>
      <li><code>DESCRIBE</code> shows table structure</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What is a table?</li>
      <li>What is the difference between rows and columns?</li>
      <li>Write a query to create a students table with <code>student_id</code>, <code>name</code>, and <code>city</code>.</li>
      <li>What is <code>VARCHAR</code> used for?</li>
      <li>Which command displays all tables?</li>
      <li>Why are data types important?</li>
      <li>Why should table names be meaningful?</li>
      <li>What does the <code>DESCRIBE</code> command do?</li>
    </ol>`,
  'mod3-t4': `<h1>Data Types in SQL</h1>
    <p>Imagine filling an online form. For name you enter text, for age a number, for date of birth a date, for salary a decimal value. Now imagine if the system allowed "Delhi" as age or "Pizza" as salary. Absolute chaos.</p>
    <p>This is exactly why SQL uses data types. Data types tell SQL: <em>"What kind of data can be stored inside a column."</em> Without data types, databases would become messy and unreliable.</p>

    <h2>What are Data Types?</h2>
    <p>Data types define the type of values allowed, storage format, memory allocation, and data validation rules. In simple words: data types help SQL understand the nature of data.</p>

    <h2>Real-Life Analogy</h2>
    <p>Think of a kitchen. You store rice in containers, water in bottles, ice cream in the freezer, and clothes in the cupboard. Everything has a proper place. Similarly, SQL stores different types of data using different data types.</p>

    <h2>Why Data Types are Important</h2>
    <table>
      <thead><tr><th>Benefit</th><th>Why It Matters</th></tr></thead>
      <tbody>
        <tr><td>Accuracy</td><td>Prevents wrong data</td></tr>
        <tr><td>Performance</td><td>Faster queries</td></tr>
        <tr><td>Storage Optimization</td><td>Uses memory efficiently</td></tr>
        <tr><td>Validation</td><td>Maintains clean data</td></tr>
      </tbody>
    </table>
    <p>Good database design always uses correct data types.</p>

    <h2>Main Categories of Data Types</h2>
    <table>
      <thead><tr><th>Category</th><th>Stores</th></tr></thead>
      <tbody>
        <tr><td>Numeric</td><td>Numbers</td></tr>
        <tr><td>String/Text</td><td>Characters and text</td></tr>
        <tr><td>Date &amp; Time</td><td>Dates and timestamps</td></tr>
        <tr><td>Boolean</td><td>True/False values</td></tr>
      </tbody>
    </table>

    <h2>1. Numeric Data Types</h2>
    <p>Numeric data types store numbers — like age, salary, product quantity, or marks.</p>

    <h3>INT</h3>
    <p><code>INT</code> stores whole numbers.</p>
    <pre><code>age INT</code></pre>
    <p>Valid values: 18, 25, 100. Not allowed: 25.5, Rahul.</p>
    <pre><code>CREATE TABLE students (
    student_id INT,
    age INT
);</code></pre>

    <h3>BIGINT</h3>
    <p>Used for very large numbers — like Aadhaar-scale systems, banking transactions, or large IDs.</p>

    <h3>FLOAT</h3>
    <p><code>FLOAT</code> stores decimal values.</p>
    <pre><code>salary FLOAT</code></pre>
    <p>Values: 50000.50, 99.99, 7.5</p>

    <h3>DECIMAL</h3>
    <p><code>DECIMAL</code> is more precise than FLOAT. Mostly used in banking, financial systems, and payment calculations.</p>
    <pre><code>price DECIMAL(10,2)</code></pre>
    <p>Meaning: total digits = 10, decimal digits = 2. Example values: 99999.99, 1500.50.</p>
    <p>Banks love precision. Because nobody wants: <em>"Sir your balance became approximately ₹4999.87352."</em></p>

    <h2>2. String / Text Data Types</h2>
    <p>These store text — names, cities, email addresses, product names.</p>

    <h3>VARCHAR</h3>
    <p>Most commonly used text data type.</p>
    <pre><code>name VARCHAR(50)</code></pre>
    <p>Meaning: store text up to 50 characters. Examples: Rahul, Priya, Bangalore.</p>

    <h3>CHAR</h3>
    <p><code>CHAR</code> stores fixed-length text. CHAR always reserves fixed space.</p>
    <pre><code>gender CHAR(1)</code></pre>
    <p>Values: M, F.</p>

    <h3>TEXT</h3>
    <p>Used for large text like comments, reviews, or blog content.</p>
    <pre><code>review TEXT</code></pre>

    <h3>VARCHAR vs CHAR</h3>
    <table>
      <thead><tr><th>VARCHAR</th><th>CHAR</th></tr></thead>
      <tbody>
        <tr><td>Variable length</td><td>Fixed length</td></tr>
        <tr><td>Flexible</td><td>Faster for fixed-size data</td></tr>
        <tr><td>Commonly used</td><td>Used less frequently</td></tr>
      </tbody>
    </table>

    <h2>3. Date and Time Data Types</h2>
    <p>Used for storing birth dates, order dates, login timestamps, and transaction times.</p>

    <h3>DATE</h3>
    <p>Stores only the date.</p>
    <pre><code>date_of_birth DATE</code></pre>
    <p>Format: <code>YYYY-MM-DD</code> — example: <code>2001-08-15</code></p>

    <h3>TIME</h3>
    <p>Stores time only.</p>
    <pre><code>login_time TIME</code></pre>

    <h3>DATETIME</h3>
    <p>Stores both date and time. Very useful in real applications.</p>
    <pre><code>created_at DATETIME</code></pre>
    <p>Example value: <code>2025-05-20 10:30:00</code></p>

    <h3>Real-World Example</h3>
    <p>Suppose Swiggy stores order details:</p>
    <pre><code>CREATE TABLE orders (
    order_id INT,
    order_date DATE,
    delivery_time DATETIME
);</code></pre>
    <p>Now SQL can properly track order timings.</p>

    <h2>4. Boolean Data Type</h2>
    <p>Boolean stores TRUE or FALSE.</p>
    <pre><code>is_active BOOLEAN</code></pre>
    <p>Useful for user status, login status, and subscription active/inactive flags.</p>

    <h2>Choosing Correct Data Types</h2>
    <p>This is extremely important. Wrong data type choices create future problems.</p>

    <h3>Example 1: Phone Number</h3>
    <p>Wrong:</p>
    <pre><code>phone_number INT</code></pre>
    <p>Problems: leading zeros may disappear, country codes become tricky, not used for calculations anyway. Better:</p>
    <pre><code>phone_number VARCHAR(15)</code></pre>

    <h3>Example 2: Salary</h3>
    <p>Wrong:</p>
    <pre><code>salary VARCHAR(20)</code></pre>
    <p>Because salary is numeric data. Correct:</p>
    <pre><code>salary DECIMAL(10,2)</code></pre>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Using VARCHAR Everywhere</h3>
    <pre><code>age VARCHAR(10)</code></pre>
    <p>Technically possible. But logically wrong. Numbers should usually use numeric types.</p>

    <h3>2. Using INT for Mobile Numbers</h3>
    <p>Phone numbers are identifiers, not mathematical values. Use <code>VARCHAR</code>.</p>

    <h3>3. Choosing Very Small VARCHAR Size</h3>
    <pre><code>name VARCHAR(5)</code></pre>
    <p>Then someone named Christopher tries to register. SQL: <em>"We only support tiny humans here."</em></p>

    <h3>4. Ignoring Precision for Financial Data</h3>
    <p>Money-related systems should use <code>DECIMAL</code>. Precision matters.</p>

    <h2>Real Industry Importance</h2>
    <p>In real companies, choosing correct data types impacts performance, scalability, query speed, storage costs, and data quality. Database engineers spend serious time designing schemas carefully — because fixing bad database design later becomes painful.</p>

    <h2>Visual Summary</h2>
    <table>
      <thead><tr><th>Data Type</th><th>Best Used For</th></tr></thead>
      <tbody>
        <tr><td>INT</td><td>Whole numbers</td></tr>
        <tr><td>FLOAT</td><td>Decimal values</td></tr>
        <tr><td>DECIMAL</td><td>Money values</td></tr>
        <tr><td>VARCHAR</td><td>Text</td></tr>
        <tr><td>CHAR</td><td>Fixed text</td></tr>
        <tr><td>TEXT</td><td>Large content</td></tr>
        <tr><td>DATE</td><td>Dates</td></tr>
        <tr><td>DATETIME</td><td>Date + time</td></tr>
        <tr><td>BOOLEAN</td><td>True/False</td></tr>
      </tbody>
    </table>

    <h2>Best Practices</h2>
    <h3>Use Smallest Suitable Type</h3>
    <p>Do not waste storage unnecessarily.</p>
    <h3>Use DECIMAL for Money</h3>
    <p>Avoid floating-point precision issues.</p>
    <h3>Use Meaningful Column Names</h3>
    <p><code>salary DECIMAL(10,2)</code> is better than <code>s DECIMAL(10,2)</code>.</p>
    <h3>Think Long-Term</h3>
    <p>Good database design should support future growth.</p>

    <h2>Final Thoughts</h2>
    <p>Data types may look like a small topic. But they are one of the most important foundations in SQL. Correct data types keep databases clean, improve performance, prevent errors, and make applications reliable.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>Data types define what kind of data can be stored</li>
      <li><code>INT</code> stores whole numbers</li>
      <li><code>VARCHAR</code> stores text</li>
      <li><code>DECIMAL</code> is best for money values</li>
      <li><code>DATE</code> stores dates</li>
      <li><code>DATETIME</code> stores both date and time</li>
      <li>Correct data types improve database quality</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What are data types in SQL?</li>
      <li>Why are data types important?</li>
      <li>What is the difference between <code>INT</code> and <code>FLOAT</code>?</li>
      <li>Why is <code>DECIMAL</code> preferred for banking systems?</li>
      <li>What is the difference between <code>VARCHAR</code> and <code>CHAR</code>?</li>
      <li>Which data type should be used for phone numbers?</li>
      <li>What does <code>DATETIME</code> store?</li>
      <li>Why should we avoid using <code>VARCHAR</code> everywhere?</li>
    </ol>`,
  'mod3-t5': `<h1>Constraints in SQL (NOT NULL, UNIQUE, CHECK, DEFAULT)</h1>
    <p>Imagine a school admission form. Some fields are compulsory — student name, phone number, date of birth. Some rules also exist: age cannot be negative, roll number must be unique, default city may be set as Delhi.</p>
    <p>Now imagine if the system allowed empty names, the same roll number for 20 students, or age = -500. Complete chaos.</p>
    <p>This is exactly why SQL uses constraints. Constraints are rules applied on columns that help maintain data quality, accuracy, consistency, and reliability. In simple words: <em>constraints stop bad data from entering the database.</em></p>

    <h2>Why Constraints Matter</h2>
    <p>Databases are used in banking, healthcare, e-commerce, education, and government systems. If incorrect data enters these systems, serious problems can happen — same customer ID for two people, negative product price, empty patient name. Constraints protect databases from such issues.</p>

    <h2>Types of Constraints</h2>
    <table>
      <thead><tr><th>Constraint</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>NOT NULL</td><td>Prevents empty values</td></tr>
        <tr><td>UNIQUE</td><td>Prevents duplicate values</td></tr>
        <tr><td>CHECK</td><td>Applies conditions</td></tr>
        <tr><td>DEFAULT</td><td>Sets default value</td></tr>
      </tbody>
    </table>

    <h2>1. NOT NULL Constraint</h2>
    <p>NOT NULL ensures a column cannot contain empty values.</p>
    <pre><code>CREATE TABLE students (
    student_id INT,
    name VARCHAR(50) NOT NULL
);</code></pre>
    <p>Now SQL will not allow <code>NULL</code> inside the name column.</p>

    <h3>Understanding NULL</h3>
    <p>NULL means missing or unknown value. It does NOT mean 0, empty string, or false. NULL simply means: <em>"No value exists."</em></p>
    <p>Wrong insertion that gets rejected:</p>
    <pre><code>INSERT INTO students (student_id)
VALUES (1);</code></pre>
    <p>SQL throws an error because <code>name</code> is mandatory.</p>

    <h3>Where NOT NULL is Commonly Used</h3>
    <table>
      <thead><tr><th>Column</th><th>Why NOT NULL?</th></tr></thead>
      <tbody>
        <tr><td>Customer Name</td><td>Must exist</td></tr>
        <tr><td>Email</td><td>Important for contact</td></tr>
        <tr><td>Product Price</td><td>Cannot be empty</td></tr>
        <tr><td>Order Date</td><td>Essential information</td></tr>
      </tbody>
    </table>
    <p>Think of NOT NULL like compulsory fields in government forms — you cannot skip name, Aadhaar number, or mobile number. Similarly, SQL forces important columns to always contain values.</p>

    <h2>2. UNIQUE Constraint</h2>
    <p>UNIQUE ensures duplicate values are not allowed.</p>
    <pre><code>CREATE TABLE users (
    user_id INT,
    email VARCHAR(100) UNIQUE
);</code></pre>
    <p>Now two users cannot have the same email.</p>

    <h3>Real-World Usage</h3>
    <table>
      <thead><tr><th>Column</th><th>Why UNIQUE?</th></tr></thead>
      <tbody>
        <tr><td>Email</td><td>One email per user</td></tr>
        <tr><td>Username</td><td>Avoid duplicate accounts</td></tr>
        <tr><td>PAN Number</td><td>Unique identity</td></tr>
        <tr><td>Aadhaar Number</td><td>Must be unique</td></tr>
      </tbody>
    </table>
    <p>If <code>rahul@gmail.com</code> already exists and you try to insert it again, SQL rejects it immediately.</p>
    <p>Imagine Instagram allowing duplicate usernames. Suddenly there are: viratkohli, viratkohli, viratkohli123, original_viratkohli_real_final. Internet would collapse.</p>

    <h2>3. CHECK Constraint</h2>
    <p>CHECK applies conditions on values — data must satisfy a specific rule.</p>
    <pre><code>CREATE TABLE employees (
    employee_id INT,
    age INT CHECK (age >= 18)
);</code></pre>
    <p>Now SQL only allows age values of 18 or greater.</p>
    <p>Without validation, somebody could insert age = -40 or salary = -50000 and the database becomes nonsense. CHECK prevents invalid values.</p>

    <h3>More Examples</h3>
    <p>Product price must be positive:</p>
    <pre><code>price DECIMAL(10,2) CHECK (price > 0)</code></pre>
    <p>Marks should stay within proper range:</p>
    <pre><code>marks INT CHECK (marks BETWEEN 0 AND 100)</code></pre>

    <h2>4. DEFAULT Constraint</h2>
    <p>DEFAULT sets a value automatically if no value is provided.</p>
    <pre><code>CREATE TABLE students (
    student_id INT,
    city VARCHAR(50) DEFAULT 'Delhi'
);</code></pre>
    <p>If city is not given during insertion, SQL automatically stores Delhi.</p>
    <pre><code>INSERT INTO students (student_id)
VALUES (1);</code></pre>
    <p>Result:</p>
    <table>
      <thead><tr><th>student_id</th><th>city</th></tr></thead>
      <tbody><tr><td>1</td><td>Delhi</td></tr></tbody>
    </table>

    <h3>Real-World DEFAULT Examples</h3>
    <table>
      <thead><tr><th>Column</th><th>Default Value</th></tr></thead>
      <tbody>
        <tr><td>Country</td><td>India</td></tr>
        <tr><td>Account Status</td><td>Active</td></tr>
        <tr><td>User Role</td><td>Customer</td></tr>
        <tr><td>Order Status</td><td>Pending</td></tr>
      </tbody>
    </table>

    <h2>Combining Multiple Constraints</h2>
    <p>Constraints can work together on the same table:</p>
    <pre><code>CREATE TABLE employees (
    employee_id INT UNIQUE,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    city VARCHAR(50) DEFAULT 'Pune'
);</code></pre>
    <p>This table now enforces unique employee IDs, mandatory names, valid age condition, and a default city — all at once. Very powerful.</p>

    <h2>Visual Summary</h2>
    <table>
      <thead><tr><th>Constraint</th><th>Main Purpose</th></tr></thead>
      <tbody>
        <tr><td>NOT NULL</td><td>Prevent empty values</td></tr>
        <tr><td>UNIQUE</td><td>Prevent duplicates</td></tr>
        <tr><td>CHECK</td><td>Validate conditions</td></tr>
        <tr><td>DEFAULT</td><td>Insert automatic values</td></tr>
      </tbody>
    </table>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Confusing NULL with Empty String</h3>
    <p><code>NULL</code> is not the same as <code>''</code>. NULL means a missing value — not a blank text.</p>

    <h3>2. Forgetting Business Logic</h3>
    <p>CHECK constraints should make real-world sense. <code>salary CHECK (salary > 0)</code> is logical. <code>age CHECK (age > 200)</code> is not.</p>

    <h3>3. Using UNIQUE Everywhere</h3>
    <p>Not every column should be unique. Many people can live in Delhi, many employees can have the same salary. Think carefully before applying UNIQUE.</p>

    <h3>4. Poor DEFAULT Values</h3>
    <pre><code>status DEFAULT 'abcd'</code></pre>
    <p>Future developers: <em>"What exactly does abcd mean?"</em> Use meaningful, self-explanatory defaults.</p>

    <h2>Real Industry Importance</h2>
    <p>Without constraints, duplicate records appear, invalid data enters the system, reporting becomes incorrect, and business logic breaks. Good database systems rely heavily on constraints.</p>

    <h2>Final Thoughts</h2>
    <p>Constraints are one of the most important concepts in database design. They help databases remain accurate, reliable, clean, and consistent. As databases grow larger, constraints become even more important — because clean data is the foundation of every successful system.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>Constraints apply rules on columns</li>
      <li><code>NOT NULL</code> prevents empty values</li>
      <li><code>UNIQUE</code> prevents duplicates</li>
      <li><code>CHECK</code> validates conditions</li>
      <li><code>DEFAULT</code> inserts automatic values</li>
      <li>Constraints improve data quality</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What are constraints in SQL?</li>
      <li>What does <code>NOT NULL</code> do?</li>
      <li>Why is <code>UNIQUE</code> important?</li>
      <li>Write a <code>CHECK</code> constraint for age &gt;= 18.</li>
      <li>What is the purpose of <code>DEFAULT</code>?</li>
      <li>What is the difference between <code>NULL</code> and an empty string?</li>
      <li>Why are constraints important in real systems?</li>
      <li>Can multiple constraints be used together on one table?</li>
    </ol>`,
  'mod3-t6': `<h1>PRIMARY KEY &amp; FOREIGN KEY</h1>
    <p>Imagine a school with thousands of students. Now suppose two students have the same name, same city, and same class. How will the school uniquely identify each student? Using a roll number, student ID, or admission number.</p>
    <p>Similarly, in databases we also need a way to uniquely identify records. This is where <strong>PRIMARY KEY</strong> comes in. And when we want to connect multiple tables together, we use <strong>FOREIGN KEY</strong>.</p>
    <p>These two concepts are among the most important topics in SQL — because real-world databases are built using relationships.</p>

    <h2>Why Keys are Important</h2>
    <p>Imagine the Swiggy database without proper identifiers. How will the system know which customer placed which order, which payment belongs to which user, or which delivery partner delivered which order? Without keys, data relationships become impossible. Keys help databases remain organized, accurate, connected, and reliable.</p>

    <h2>What is a PRIMARY KEY?</h2>
    <p>A PRIMARY KEY is a column that uniquely identifies each row in a table.</p>
    <ul>
      <li>No two rows can have the same primary key value</li>
      <li>PRIMARY KEY cannot contain NULL values</li>
    </ul>
    <p>Think of Aadhaar number, PAN number, passport number, or employee ID — these uniquely identify people. Similarly, PRIMARY KEY uniquely identifies records in a table.</p>

    <h2>Example Table</h2>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>101</td><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>102</td><td>Priya</td><td>Mumbai</td></tr>
        <tr><td>103</td><td>Aman</td><td>Jaipur</td></tr>
      </tbody>
    </table>
    <p>Here <code>student_id</code> can act as PRIMARY KEY — every value is unique and no NULL values exist.</p>

    <h2>Creating PRIMARY KEY</h2>
    <pre><code>CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50)
);</code></pre>
    <p>Now duplicate <code>student_id</code> is not allowed, and NULL <code>student_id</code> is not allowed.</p>

    <h2>PRIMARY KEY Rules</h2>
    <table>
      <thead><tr><th>Rule</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>Be Unique</td><td>No duplicates allowed</td></tr>
        <tr><td>Not Be NULL</td><td>Every row must have a value</td></tr>
        <tr><td>Identify One Row</td><td>Points to exactly one record</td></tr>
      </tbody>
    </table>
    <p>If <code>student_id = 101</code> already exists and you try to insert another row with <code>student_id = 101</code>, SQL throws an error immediately.</p>

    <h2>Can We Have Multiple PRIMARY KEYS?</h2>
    <p>No. One table can have only <strong>one PRIMARY KEY</strong>. But that PRIMARY KEY can span multiple columns together — this is called a <strong>Composite Primary Key</strong>.</p>

    <h2>Best Column for PRIMARY KEY</h2>
    <p>Good PRIMARY KEY columns are unique, stable, small in size, and non-changing. Common examples: <code>customer_id</code>, <code>employee_id</code>, <code>order_id</code>, <code>product_id</code>.</p>
    <p>Using <code>name</code> as a PRIMARY KEY is a bad idea — multiple people can have the same name. India alone has enough Rahuls to break that system.</p>

    <h2>What is a FOREIGN KEY?</h2>
    <p>FOREIGN KEY creates a relationship between tables — it connects one table with another. This is how relational databases work.</p>

    <h2>Real-World Example</h2>
    <p>Two tables:</p>
    <p><strong>students table</strong></p>
    <table>
      <thead><tr><th>student_id</th><th>name</th></tr></thead>
      <tbody>
        <tr><td>101</td><td>Rahul</td></tr>
        <tr><td>102</td><td>Priya</td></tr>
      </tbody>
    </table>
    <p><strong>orders table</strong></p>
    <table>
      <thead><tr><th>order_id</th><th>student_id</th><th>course</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>101</td><td>SQL</td></tr>
        <tr><td>2</td><td>102</td><td>Python</td></tr>
      </tbody>
    </table>
    <p>Here <code>orders.student_id</code> references <code>students.student_id</code> — this creates the relationship.</p>

    <h2>Creating FOREIGN KEY</h2>
    <pre><code>CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);</code></pre>
    <pre><code>CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_name VARCHAR(50),
    FOREIGN KEY (student_id)
        REFERENCES students(student_id)
);</code></pre>
    <p>Now the two tables are connected.</p>

    <h2>Understanding the Syntax</h2>
    <table>
      <thead><tr><th>Part</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>FOREIGN KEY</td><td>Declares a foreign key</td></tr>
        <tr><td>student_id</td><td>Column in the current table</td></tr>
        <tr><td>REFERENCES</td><td>Links to another table</td></tr>
        <tr><td>students(student_id)</td><td>The referenced column</td></tr>
      </tbody>
    </table>

    <h2>Why FOREIGN KEY Matters</h2>
    <p>FOREIGN KEY maintains relationships, data consistency, and referential integrity. Suppose <code>student_id = 999</code> does not exist in the students table. If someone tries to insert an enrollment with <code>student_id = 999</code>, SQL blocks the insertion. That is the power of FOREIGN KEY.</p>

    <h2>PRIMARY KEY vs FOREIGN KEY</h2>
    <table>
      <thead><tr><th>PRIMARY KEY</th><th>FOREIGN KEY</th></tr></thead>
      <tbody>
        <tr><td>Uniquely identifies rows</td><td>Connects tables</td></tr>
        <tr><td>Exists in parent table</td><td>Exists in child table</td></tr>
        <tr><td>Unique values only</td><td>Can repeat</td></tr>
        <tr><td>Cannot be NULL</td><td>May contain NULL</td></tr>
      </tbody>
    </table>

    <h2>Parent Table and Child Table</h2>
    <p>The <strong>parent table</strong> (e.g. <code>students</code>) contains the PRIMARY KEY. The <strong>child table</strong> (e.g. <code>enrollments</code>) contains the FOREIGN KEY that references the parent.</p>

    <h2>Real Industry Example</h2>
    <p>E-commerce websites use relationships everywhere:</p>
    <table>
      <thead><tr><th>Table</th><th>Connected To</th></tr></thead>
      <tbody>
        <tr><td>customers</td><td>orders</td></tr>
        <tr><td>orders</td><td>payments</td></tr>
        <tr><td>products</td><td>categories</td></tr>
        <tr><td>employees</td><td>departments</td></tr>
      </tbody>
    </table>
    <p>Without FOREIGN KEY relationships, large systems become impossible to manage.</p>

    <h2>What is Referential Integrity?</h2>
    <p>Big name, simple meaning. Referential integrity ensures relationships between tables remain valid. FOREIGN KEY helps enforce this — you cannot add a child record that references a parent that does not exist.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Using Non-Unique Column as PRIMARY KEY</h3>
    <p>Using <code>city</code> as a PRIMARY KEY is wrong — many people can belong to the same city.</p>

    <h3>2. Forgetting PRIMARY KEY</h3>
    <p>Without PRIMARY KEY, duplicate rows become possible and relationships become weak.</p>

    <h3>3. Linking Wrong Columns</h3>
    <p>FOREIGN KEY must reference the correct parent table and correct column. Otherwise relationships break.</p>

    <h3>4. Confusing PRIMARY KEY with UNIQUE</h3>
    <table>
      <thead><tr><th>PRIMARY KEY</th><th>UNIQUE</th></tr></thead>
      <tbody>
        <tr><td>Only one per table</td><td>Multiple allowed per table</td></tr>
        <tr><td>Cannot be NULL</td><td>NULL allowed in many DBMS</td></tr>
      </tbody>
    </table>

    <h2>Best Practices</h2>
    <h3>Use Numeric IDs as PRIMARY KEY</h3>
    <p><code>customer_id</code> is better than using names.</p>
    <h3>Keep Relationships Logical</h3>
    <p>Do not connect unrelated tables.</p>
    <h3>Use Meaningful Column Names</h3>
    <p>Good: <code>student_id</code>, <code>order_id</code>, <code>employee_id</code>.</p>
    <h3>Design Before Coding</h3>
    <p>Good database design saves future headaches. Professional database engineers spend serious time designing relationships properly.</p>

    <h2>Visual Summary</h2>
    <table>
      <thead><tr><th>Concept</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>PRIMARY KEY</td><td>Unique identification of rows</td></tr>
        <tr><td>FOREIGN KEY</td><td>Connects related tables</td></tr>
        <tr><td>Referential Integrity</td><td>Keeps relationships valid</td></tr>
      </tbody>
    </table>

    <h2>Final Thoughts</h2>
    <p>PRIMARY KEY and FOREIGN KEY are the heart of relational databases. They help databases stay organized, avoid duplication, build relationships, and maintain accuracy. As databases become larger, relationships become even more important — because real-world systems are all about connected data.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li>PRIMARY KEY uniquely identifies rows</li>
      <li>PRIMARY KEY cannot contain duplicates or NULL</li>
      <li>FOREIGN KEY connects tables together</li>
      <li>FOREIGN KEY references a PRIMARY KEY in another table</li>
      <li>Relationships improve database structure</li>
      <li>Referential integrity keeps data valid</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What is a PRIMARY KEY?</li>
      <li>Why must PRIMARY KEY values be unique?</li>
      <li>What is a FOREIGN KEY?</li>
      <li>What is the difference between PRIMARY KEY and FOREIGN KEY?</li>
      <li>What is referential integrity?</li>
      <li>Can a FOREIGN KEY contain duplicate values?</li>
      <li>Why should names usually not be used as a PRIMARY KEY?</li>
      <li>What is the difference between a parent table and a child table?</li>
    </ol>`,
  'mod3-t7': `<h1>ALTER TABLE</h1>
    <p>Imagine a school creates a student admission form with name, roll number, and city. Later they realize: <em>"We also need phone number and email."</em> Will they destroy the entire system and rebuild everything? Of course not — they simply modify the structure.</p>
    <p>Similarly in SQL, after creating a table, we often need to add new columns, remove columns, change data types, or rename columns. For this, SQL provides <code>ALTER TABLE</code> — one of the most commonly used SQL commands in real companies, because databases constantly evolve.</p>

    <h2>Why ALTER TABLE is Important</h2>
    <p>Real business requirements keep changing. An e-commerce company may initially store just product name and price, but later need discount percentage, product rating, stock availability, and delivery time. Instead of recreating tables, ALTER TABLE helps modify existing structures.</p>

    <h2>Basic Syntax</h2>
    <pre><code>ALTER TABLE table_name
modification;</code></pre>

    <h2>Example Table</h2>
    <p>Suppose we already have:</p>
    <pre><code>CREATE TABLE students (
    student_id INT,
    name VARCHAR(50),
    city VARCHAR(50)
);</code></pre>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
      </tbody>
    </table>

    <h2>1. ADD COLUMN</h2>
    <p>Add a new <code>phone_number</code> column:</p>
    <pre><code>ALTER TABLE students
ADD phone_number VARCHAR(15);</code></pre>
    <p>Updated table:</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th><th>phone_number</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td><td>NULL</td></tr>
        <tr><td>2</td><td>Priya</td><td>Mumbai</td><td>NULL</td></tr>
      </tbody>
    </table>
    <p>SQL kept old data safe, added the new column, and assigned NULL to existing rows.</p>
    <p>Real-world example — suppose a company never collected emails, then the marketing team says: <em>"We need email campaigns."</em></p>
    <pre><code>ALTER TABLE customers
ADD email VARCHAR(100);</code></pre>
    <p>Problem solved.</p>

    <h2>2. MODIFY COLUMN</h2>
    <p>Sometimes we need to change a data type or size. Suppose <code>phone_number VARCHAR(10)</code> was set initially, but the company starts supporting international numbers and needs a bigger size:</p>
    <pre><code>ALTER TABLE students
MODIFY phone_number VARCHAR(20);</code></pre>
    <p>Same situation applies to names. If <code>name VARCHAR(20)</code> was set and then a customer named <em>Siddharthanandeshwar</em> tries to register — database says: <em>"Brother please shorten your identity."</em> Developers increase the column size using ALTER TABLE.</p>

    <h2>3. DROP COLUMN</h2>
    <p>When a column is no longer needed:</p>
    <pre><code>ALTER TABLE students
DROP COLUMN city;</code></pre>
    <p>The city column disappears — including its structure and all data inside. Permanently. Always double-check before dropping columns.</p>
    <p>Real-world example: suppose the company no longer uses <code>fax_number</code>. Most people today probably do not even know what fax is. So developers remove unused columns to keep the table clean.</p>

    <h2>4. RENAME COLUMN</h2>
    <p>When a column name is unclear — like <code>nm</code> — we can rename it:</p>
    <pre><code>ALTER TABLE students
RENAME COLUMN nm TO name;</code></pre>
    <p>Readable databases help developers, analysts, data engineers, and future teams. Poor names like <code>a1</code>, <code>b2</code>, or <code>x_temp_final</code> confuse everyone — including the person who created them, two months later.</p>

    <h2>5. Rename the Table</h2>
    <p>We can even rename an entire table:</p>
    <pre><code>ALTER TABLE students
RENAME TO college_students;</code></pre>

    <h2>Visual Summary</h2>
    <table>
      <thead><tr><th>Operation</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>ADD</td><td>Add new column</td></tr>
        <tr><td>MODIFY</td><td>Change data type or size</td></tr>
        <tr><td>DROP COLUMN</td><td>Remove a column</td></tr>
        <tr><td>RENAME COLUMN</td><td>Change column name</td></tr>
        <tr><td>RENAME TO</td><td>Change table name</td></tr>
      </tbody>
    </table>

    <h2>Real Industry Importance</h2>
    <p>In real companies, ALTER TABLE is used frequently because applications constantly evolve — adding new features, supporting new countries, collecting additional information, improving business logic. Database structures change over time.</p>

    <h2>Real-Life Analogy</h2>
    <p>Think of ALTER TABLE like a house renovation — adding a new room, removing a wall, expanding the kitchen, or renaming room labels. The structure changes, but the house still exists.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Forgetting Existing Data</h3>
    <p>Before modifying tables, always think: <em>"What happens to old data?"</em> Schema changes can affect millions of rows.</p>

    <h3>2. Using Wrong Data Type During MODIFY</h3>
    <p>Changing <code>salary DECIMAL</code> to <code>salary VARCHAR</code> may create serious problems. Always think logically about the data type you need.</p>

    <h3>3. Dropping Important Columns Accidentally</h3>
    <pre><code>DROP COLUMN customer_email;</code></pre>
    <p>Production team after seeing this: <em>"We need to talk."</em></p>

    <h3>4. Renaming Columns Carelessly</h3>
    <p>Applications may depend on old column names. Changing names without coordination can break running systems.</p>

    <h2>Best Practices</h2>
    <h3>Take Backup Before Major Changes</h3>
    <p>Especially in production databases.</p>
    <h3>Use Meaningful Names</h3>
    <p>Readable structures improve maintainability.</p>
    <h3>Test in Development First</h3>
    <p>Never experiment directly on production databases.</p>
    <h3>Think About Future Growth</h3>
    <p>Design tables flexibly so future changes are less painful.</p>

    <h2>Final Thoughts</h2>
    <p>ALTER TABLE is one of the most practical SQL commands because databases are never static. As businesses grow, database structures must evolve too. Changing requirements are part of every software system.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li><code>ALTER TABLE</code> modifies existing tables</li>
      <li><code>ADD</code> adds new columns</li>
      <li><code>MODIFY</code> changes column structure</li>
      <li><code>DROP COLUMN</code> removes columns permanently</li>
      <li><code>RENAME</code> changes column or table names</li>
      <li>ALTER TABLE is heavily used in real projects</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What is <code>ALTER TABLE</code> used for?</li>
      <li>Write a query to add an <code>email</code> column to the students table.</li>
      <li>Which command changes a column's data type?</li>
      <li>What happens when <code>DROP COLUMN</code> is used?</li>
      <li>Why is <code>ALTER TABLE</code> important in real companies?</li>
      <li>How do you rename a column?</li>
      <li>Why should backups be taken before schema changes?</li>
      <li>What is the difference between <code>CREATE TABLE</code> and <code>ALTER TABLE</code>?</li>
    </ol>`,
  'mod3-t8': `<h1>DROP TABLE &amp; TRUNCATE TABLE</h1>
    <p>Imagine a classroom. Scenario 1: you remove all students from the classroom, but the classroom itself still exists. Scenario 2: you demolish the entire classroom.</p>
    <p>Both actions are different. Similarly in SQL, we have two important commands — <code>TRUNCATE TABLE</code> and <code>DROP TABLE</code>. Both remove data, but they work very differently. Accidentally dropping the wrong table is the kind of mistake that creates emergency meetings.</p>

    <h2>What is DROP TABLE?</h2>
    <p>DROP TABLE completely removes the table structure, all rows, columns, constraints, and the entire table definition. In simple words: <em>DROP TABLE deletes the entire table permanently.</em></p>

    <h2>Syntax</h2>
    <pre><code>DROP TABLE table_name;</code></pre>

    <h2>Example</h2>
    <pre><code>DROP TABLE students;</code></pre>
    <p>After execution the table disappears, data disappears, and structure disappears. Everything is gone. Even running <code>SELECT * FROM students;</code> will throw an error because the table itself no longer exists.</p>

    <h2>Real-Life Analogy</h2>
    <p>DROP TABLE is like demolishing an entire building — not just removing the furniture. The whole structure disappears.</p>

    <h2>Better Practice: IF EXISTS</h2>
    <pre><code>DROP TABLE IF EXISTS students;</code></pre>
    <p>Meaning: <em>"Delete table only if it exists."</em> Avoids unnecessary errors.</p>

    <h2>Real-World Usage of DROP TABLE</h2>
    <p>Companies may use DROP TABLE when temporary tables are no longer needed, old systems are removed, test environments are cleaned, or duplicate tables exist. But in production systems, DROP operations are carefully controlled — because data is valuable.</p>

    <h2>What is TRUNCATE TABLE?</h2>
    <p>TRUNCATE TABLE removes all rows but keeps the table structure, columns, data types, and constraints. In simple words: <em>TRUNCATE empties the table but does not delete the table itself.</em></p>

    <h2>Syntax</h2>
    <pre><code>TRUNCATE TABLE table_name;</code></pre>

    <h2>Example</h2>
    <p>Before TRUNCATE:</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
        <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
      </tbody>
    </table>
    <pre><code>TRUNCATE TABLE students;</code></pre>
    <p>After TRUNCATE — table is empty but structure still exists:</p>
    <table>
      <thead><tr><th>student_id</th><th>name</th><th>city</th></tr></thead>
      <tbody><tr><td colspan="3" style="text-align:center;color:#888;">— no rows —</td></tr></tbody>
    </table>
    <p>Because the table still exists, this still works:</p>
    <pre><code>INSERT INTO students
VALUES (1, 'Aman', 'Pune');</code></pre>

    <h2>Real-Life Analogy</h2>
    <p>TRUNCATE is like removing all students from a classroom. The classroom still exists — only the records are removed.</p>

    <h2>DROP TABLE vs TRUNCATE TABLE</h2>
    <table>
      <thead><tr><th>Feature</th><th>DROP TABLE</th><th>TRUNCATE TABLE</th></tr></thead>
      <tbody>
        <tr><td>Removes Rows</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Removes Structure</td><td>Yes</td><td>No</td></tr>
        <tr><td>Removes Table</td><td>Yes</td><td>No</td></tr>
        <tr><td>Table Exists After</td><td>No</td><td>Yes</td></tr>
        <tr><td>Faster for Emptying Data</td><td>No</td><td>Yes</td></tr>
      </tbody>
    </table>
    <p>TRUNCATE removes all rows quickly by resetting the table internally, instead of deleting rows one by one. That is why TRUNCATE is usually faster than DELETE for clearing entire tables.</p>

    <h2>TRUNCATE vs DELETE</h2>
    <table>
      <thead><tr><th>Feature</th><th>DELETE</th><th>TRUNCATE</th></tr></thead>
      <tbody>
        <tr><td>Removes Specific Rows</td><td>Yes</td><td>No</td></tr>
        <tr><td>WHERE Clause Allowed</td><td>Yes</td><td>No</td></tr>
        <tr><td>Removes All Rows</td><td>Optional</td><td>Always</td></tr>
        <tr><td>Table Structure Remains</td><td>Yes</td><td>Yes</td></tr>
      </tbody>
    </table>
    <pre><code>DELETE FROM students
WHERE city = 'Delhi';</code></pre>
    <p>Only Delhi rows get deleted.</p>
    <pre><code>TRUNCATE TABLE students;</code></pre>
    <p>All rows removed — no filtering possible.</p>

    <h2>Common Beginner Mistakes</h2>
    <h3>1. Using DROP Instead of TRUNCATE</h3>
    <p>You only wanted to empty data but wrote <code>DROP TABLE students;</code> — now the structure also disappears. Suddenly debugging becomes your full-time hobby.</p>

    <h3>2. Expecting WHERE with TRUNCATE</h3>
    <pre><code>TRUNCATE TABLE students
WHERE city = 'Delhi';</code></pre>
    <p>Not allowed. TRUNCATE removes ALL rows only — no filtering.</p>

    <h3>3. Forgetting Backup</h3>
    <p>Before major deletion operations: take a backup, double-check the table name, and confirm the requirement. Professionals follow this carefully.</p>

    <h3>4. Dropping Production Tables Accidentally</h3>
    <p>This is why companies restrict permissions heavily. One wrong query can affect millions of users.</p>

    <h2>Real Industry Example</h2>
    <p>Suppose an analytics team creates temporary reporting tables daily. At the end of the process, old data may be truncated and temporary tables may be dropped. Both commands are useful in real workflows.</p>

    <h2>When to Use Which</h2>
    <p>Use <strong>TRUNCATE</strong> when you want to remove all rows, keep the table structure, and need fast cleanup. Use <strong>DROP</strong> when the table is no longer needed at all and the entire structure should be removed.</p>

    <h2>Visual Summary</h2>
    <table>
      <thead><tr><th>Command</th><th>Main Purpose</th></tr></thead>
      <tbody>
        <tr><td>DROP TABLE</td><td>Delete table completely</td></tr>
        <tr><td>TRUNCATE TABLE</td><td>Remove all rows only</td></tr>
        <tr><td>DELETE</td><td>Remove selected rows</td></tr>
      </tbody>
    </table>

    <h2>Real-World Analogy Summary</h2>
    <table>
      <thead><tr><th>SQL Command</th><th>Real-Life Analogy</th></tr></thead>
      <tbody>
        <tr><td>DELETE</td><td>Remove some students from class</td></tr>
        <tr><td>TRUNCATE</td><td>Empty the entire classroom</td></tr>
        <tr><td>DROP TABLE</td><td>Demolish the classroom completely</td></tr>
      </tbody>
    </table>

    <h2>Final Thoughts</h2>
    <p>DROP TABLE and TRUNCATE TABLE are powerful commands. Understanding their differences is extremely important. As databases grow larger, safe data handling becomes even more critical — because in the real world, data is business gold.</p>

    <h2>Quick Revision</h2>
    <ul>
      <li><code>DROP TABLE</code> removes the table completely — structure and data</li>
      <li><code>TRUNCATE</code> removes all rows but keeps the structure intact</li>
      <li><code>DELETE</code> can remove selected rows using WHERE</li>
      <li>TRUNCATE is faster than DELETE for clearing entire tables</li>
      <li>Always take backups before major deletion operations</li>
    </ul>

    <h2>Practice Questions</h2>
    <ol>
      <li>What does <code>DROP TABLE</code> do?</li>
      <li>What does <code>TRUNCATE TABLE</code> do?</li>
      <li>What is the difference between <code>DROP</code> and <code>TRUNCATE</code>?</li>
      <li>Can <code>TRUNCATE</code> remove selected rows?</li>
      <li>Which command keeps the table structure intact?</li>
      <li>Why is <code>DROP TABLE</code> dangerous?</li>
      <li>What is the difference between <code>DELETE</code> and <code>TRUNCATE</code>?</li>
      <li>When should <code>TRUNCATE</code> be preferred over <code>DELETE</code>?</li>
    </ol>`,

  // ── Module 4 ─────────────────────────────────────────────────
  'mod4-t1': `
    <h1>SELECT: How You Ask a Database for Data</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>It was Arjun's third day at Swiggy's Bengaluru office. He had just settled in with his morning chai when his manager, Priya, walked over and dropped a task on his desk.</p>
    <p>"Arjun, I need a list of all customer names and their cities from our database. Just those two columns, nothing else. Can you do it in the next ten minutes?"</p>
    <p>Arjun opened his laptop, stared at the database tool, and felt the familiar first-week panic. The orders table had millions of rows and dozens of columns. How do you pull out just two specific pieces of information from that mountain of data, quickly, cleanly, and without breaking anything?</p>
    <p>The answer is a single, powerful SQL keyword: SELECT.</p>
    <p>Everything you will ever do in SQL starts with SELECT. It is the very first word in almost every query you will write in your entire career. Understanding it deeply is not optional. It is the foundation everything else is built on.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Think about BookMyShow. Every time someone books a ticket, a row is added to the bookings table. That table might have 30 columns: booking ID, user ID, user name, user phone, user email, movie name, movie ID, theatre name, theatre city, seat number, payment mode, payment amount, booking date, show time, and on and on.</p>
    <p>Now your manager asks: "Show me just the user name and the movie name for all bookings today."</p>
    <p>You do not want all 30 columns. You want two. And you need them fast.</p>
    <p>That is the core problem SELECT solves: letting you choose exactly which columns you want to see, nothing more and nothing less.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>In the days before databases, records were kept in registers, notebooks, and filing cabinets. If you needed a specific piece of information, you had to look through every page until you found it.</p>
    <p>Databases improved on this by storing everything in structured tables. But storing data is only half the job. The other half is retrieving it.</p>
    <p>If every query returned all columns from all rows, you would be drowning in information every time. A table at Flipkart might have 50 columns and 100 million rows. You cannot work with all of that at once.</p>
    <p>The SELECT statement was designed to solve this precisely. It lets you ask the database for a very specific slice of data. You specify the columns you want, you specify the table they live in, and the database fetches exactly that, instantly.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think of the database as a giant filing cabinet with thousands of folders, each folder representing a row of data, and each folder containing dozens of documents representing columns.</p>
    <p>Your job is not to read every document in every folder. Your job is to open the cabinet and pull out just the one document you need from each folder.</p>
    <p>SELECT is your instruction to the filing cabinet: "From every folder in this cabinet, give me only the document labelled 'customer name' and the one labelled 'city'."</p>
    <p>The cabinet does the work. You get exactly what you asked for.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Imagine you are placing an order at a canteen. The menu has 40 items. You do not tell the server, "bring me the entire kitchen." You say, "One masala dosa and one chai, please."</p>
    <p>SQL's SELECT works the same way. The table is the kitchen, full of everything. Your SELECT query is your order: you specify exactly what you want, and the database brings it to you.</p>
    <p>If you say SELECT customer_name, city, the database brings you those two things. If you say SELECT *, you are essentially saying "bring me everything," which is sometimes useful but often overwhelming, like asking the server to bring you the entire menu at once.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>The SELECT statement is how you retrieve data from a database table. It works on a simple principle: you name the columns you want, you name the table they live in, and the database returns every row with only those columns visible.</p>
    <p>There are three main ways to use SELECT:</p>
    <p>First, you can select specific columns by naming them. This is the most common and most professional approach. You get precisely what you need.</p>
    <p>Second, you can use the asterisk symbol (*) which means "select all columns." This is useful when you are exploring a new table for the first time and want to see what is in it.</p>
    <p>Third, you can use SELECT to compute expressions. For example, SELECT 1 + 1 will return 2. SELECT price * quantity will calculate and return the product of two columns. You are not just fetching stored data, you are computing new values on the fly.</p>
    <p>The order in which you list columns in SELECT determines the order they appear in your result. If you write SELECT city, customer_name, the city column appears first in the output even if customer_name comes first in the original table.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>The basic syntax of a SELECT statement is:</p>
    <pre><code class="language-sql">SELECT column1, column2, column3
FROM table_name;</code></pre>
    <p>To select all columns:</p>
    <pre><code class="language-sql">SELECT *
FROM table_name;</code></pre>
    <p>To select with a simple expression:</p>
    <pre><code class="language-sql">SELECT customer_name, price * quantity
FROM orders;</code></pre>
    <p>The semicolon at the end is a statement terminator. Some SQL tools require it, some do not, but including it is always a good habit.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>SELECT</td><td>Keyword that starts every retrieval query</td><td>SELECT</td></tr>
      <tr><td>column1, column2</td><td>The specific column names you want in your result</td><td>customer_name, city</td></tr>
      <tr><td>*</td><td>Shorthand for "all columns in the table"</td><td>SELECT *</td></tr>
      <tr><td>expression</td><td>A calculation you want the database to perform</td><td>price * quantity</td></tr>
      <tr><td>FROM</td><td>Keyword that tells SQL where to look</td><td>FROM</td></tr>
      <tr><td>table_name</td><td>The name of the table containing your data</td><td>orders</td></tr>
      <tr><td>;</td><td>Statement terminator, ends the query</td><td>;</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Here is a sample table from Swiggy's orders database:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>amount</th><th>order_date</th><th>payment_mode</th></tr>
      <tr><td>1001</td><td>Rahul</td><td>Mumbai</td><td>450</td><td>2024-06-10</td><td>UPI</td></tr>
      <tr><td>1002</td><td>Priya</td><td>Bengaluru</td><td>890</td><td>2024-06-10</td><td>Card</td></tr>
      <tr><td>1003</td><td>Neha</td><td>Delhi</td><td>320</td><td>2024-06-11</td><td>Cash</td></tr>
      <tr><td>1004</td><td>Arjun</td><td>Chennai</td><td>1200</td><td>2024-06-11</td><td>UPI</td></tr>
      <tr><td>1005</td><td>Simran</td><td>Hyderabad</td><td>670</td><td>2024-06-12</td><td>Card</td></tr>
    </table>
    <h3>Example 1: Select Specific Columns</h3>
    <p>Priya wants to see only customer names and their cities.</p>
    <pre><code class="language-sql">SELECT customer_name, city
FROM orders;</code></pre>
    <p>Result shows only two columns: customer_name and city, for all five rows.</p>
    <h3>Example 2: Select All Columns</h3>
    <p>Arjun wants to explore the full table before deciding what to filter.</p>
    <pre><code class="language-sql">SELECT *
FROM orders;</code></pre>
    <p>This returns all six columns for all rows. Useful for exploration, not ideal for production queries.</p>
    <h3>Example 3: Select with Column Order Control</h3>
    <p>Column order in SELECT controls how they appear in the result. Putting city first:</p>
    <pre><code class="language-sql">SELECT city, customer_name, amount
FROM orders;</code></pre>
    <p>The output shows city first, then customer name, then amount, regardless of how they are ordered in the actual table.</p>
    <h3>Example 4: Select with Expressions</h3>
    <p>A manager at Paytm wants to see what the order amount would look like with an 18% GST added:</p>
    <pre><code class="language-sql">SELECT customer_name, amount, amount * 1.18
FROM orders;</code></pre>
    <p>The third column is computed on the fly. It does not exist in the table but is calculated for each row.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Do I have to type column names exactly as they are in the table?"</strong></p>
    <p>Yes. Column names must match exactly, including capitalisation in some databases. If the column is named customer_name and you type CustomerName, you may get an error. Always check the table schema first.</p>
    <p><strong>"Is SELECT * bad practice?"</strong></p>
    <p>Using SELECT <em> is fine for exploring data or debugging. In production code, reports, or dashboards, always specify column names. SELECT </em> retrieves all columns even if you only need two, which wastes memory and slows things down on large tables.</p>
    <p><strong>"Does the order of columns in SELECT matter?"</strong></p>
    <p>Yes, for the output only. If you write SELECT amount, city, the result shows amount first and city second. The actual table is not affected in any way.</p>
    <p><strong>"Why does SELECT 1+1 work without a FROM clause?"</strong></p>
    <p>Some databases allow simple expressions without a table. You are asking the database to compute something, not retrieve data from a table. This is useful for quick calculations and testing.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Misspelling a column name or table name. SQL will return an error and nothing will run.</li>
      <li>Using SELECT * in reports or dashboards. It is inefficient and hard to maintain when table structures change.</li>
      <li>Forgetting the FROM clause. SELECT without FROM only works for expressions in some databases.</li>
      <li>Listing the same column twice. Allowed but usually a mistake.</li>
      <li>Expecting SELECT to filter rows. SELECT only controls which columns are shown. To filter rows, you need WHERE.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always name your columns explicitly in production queries. Avoid SELECT * in real work.</li>
      <li>List columns in a logical, readable order.</li>
      <li>Write SQL keywords (SELECT, FROM, WHERE) in uppercase for readability. Column and table names can be lowercase.</li>
      <li>Test your query on a small sample before running it on millions of rows.</li>
      <li>Always double-check that your column names and table names are spelled correctly before running.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Every single data operation at every Indian tech company begins with SELECT. When you open Swiggy and see your past orders, the app runs a SELECT query against the orders table filtered to your user ID. When Flipkart's analytics team builds a sales dashboard, they are writing SELECT queries to pull the right numbers into the right charts.</p>
    <p>IRCTC uses SELECT to display your booking history. Byju's uses it to pull student progress records. PhonePe uses it to fetch transaction logs for your statement.</p>
    <p>There is no SQL without SELECT. It is the starting point for data exploration, reporting, dashboards, and application development.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>DATABASE TABLE: orders
+----------+--------------+-----------+--------+
| order_id | customer_name| city      | amount |
+----------+--------------+-----------+--------+
| 1001     | Rahul        | Mumbai    | 450    |
| 1002     | Priya        | Bengaluru | 890    |
| 1003     | Neha         | Delhi     | 320    |
+----------+--------------+-----------+--------+

QUERY: SELECT customer_name, city FROM orders;

RESULT:
+--------------+-----------+
| customer_name| city      |
+--------------+-----------+
| Rahul        | Mumbai    |
| Priya        | Bengaluru |
| Neha         | Delhi     |
+--------------+-----------+

Only the columns you asked for. All rows. No filtering.</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>SELECT is the keyword that retrieves data from a database table.</li>
      <li>Syntax: SELECT column1, column2 FROM table_name;</li>
      <li>Use * to select all columns, or list specific column names to select only what you need.</li>
      <li>The column order in your SELECT determines the column order in your result.</li>
      <li>SELECT can also compute expressions like price * quantity without storing any new data.</li>
      <li>SELECT alone does not filter rows. That is the job of WHERE.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to show customer_name and phone_number from a table called users.</li>
      <li>Write a query to display all columns from a table called employees.</li>
      <li>From a table called products, select product_name, category, and price in that order.</li>
      <li>Write a SELECT query that computes price multiplied by 1.05 alongside the product_name from a products table.</li>
      <li>From an irctc_bookings table, write a query to show passenger_name, train_name, and journey_date only.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>SELECT is not just a keyword. It is your opening statement in every conversation you will ever have with a database.</p>
    <p>Every analyst at every company, from a fresher on day three to a lead engineer with ten years of experience, writes SELECT queries every single day. It is the most fundamental act in all of SQL.</p>
    <p>Once this feels natural to you, which it will with practice, every more advanced concept you learn will click faster. You will see GROUP BY, JOIN, and subqueries all building on top of this one simple idea: tell the database what you want, and it will get it for you.</p>
    <p>Keep writing queries. Keep experimenting. Every expert was once the person who was not sure whether to use * or list the columns.</p>
    <p>You are already on your way.</p>
  `,
  'mod4-t2': `
    <h1>WHERE: How to Filter Out the Data You Don't Need</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha had been at Flipkart for exactly one week when her manager, Rahul, stopped by her desk with a request.</p>
    <p>"I need all orders placed from Delhi where the amount is greater than five hundred rupees. Can you pull that for me?"</p>
    <p>Neha smiled and opened her SQL editor. But then she paused. She knew how to write SELECT. She had practiced it the day before. But how do you tell the database to give you only the Delhi orders? And only the ones above five hundred? How do you put conditions on what you want?</p>
    <p>She was about to discover the WHERE clause, the single most important filtering tool in all of SQL.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Here is what Flipkart's orders table might look like on any given day:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>amount</th><th>order_date</th><th>status</th></tr>
      <tr><td>2001</td><td>Rahul</td><td>Delhi</td><td>650</td><td>2024-07-01</td><td>Delivered</td></tr>
      <tr><td>2002</td><td>Priya</td><td>Mumbai</td><td>320</td><td>2024-07-01</td><td>Pending</td></tr>
      <tr><td>2003</td><td>Arjun</td><td>Delhi</td><td>420</td><td>2024-07-02</td><td>Delivered</td></tr>
      <tr><td>2004</td><td>Neha</td><td>Bengaluru</td><td>980</td><td>2024-07-02</td><td>Shipped</td></tr>
      <tr><td>2005</td><td>Aman</td><td>Delhi</td><td>1200</td><td>2024-07-03</td><td>Delivered</td></tr>
    </table>
    <p>That is a tiny sample. In reality, Flipkart processes millions of orders every day.</p>
    <p>If you run SELECT * FROM orders, you get everything. Every city, every amount, every status. That is not useful when your manager wants a very specific slice of data.</p>
    <p>The problem is: how do you retrieve only the rows that match specific conditions?</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SELECT tells the database which columns to show. But it does not filter rows. Without some way to filter, every query returns the entire table.</p>
    <p>Imagine working at a bank and asking the system for transaction records. If every query returned all ten crore transactions in the database, you would never find anything useful. You need a way to say: "Only show me the records where the account number is this, and the date is this, and the amount is above this threshold."</p>
    <p>That is exactly what WHERE does. It is the filtering mechanism of SQL. It evaluates a condition for each row in the table. If the condition is true, the row is included in the result. If the condition is false, the row is excluded.</p>
    <p>WHERE was built into SQL from the very beginning because filtering is not a special case in data work. It is the normal case. Most queries need some kind of filter.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think of a massive stack of exam papers from every school in India. All subjects, all classes, all states, piled together.</p>
    <p>Someone asks you: "Give me only the papers from Class 10, where the student scored above 80 in Maths."</p>
    <p>You do not flip through all the papers. You have a condition. You apply that condition, and you pull out only the papers that match.</p>
    <p>WHERE works exactly like that. It is your condition. For every row in the table, SQL asks: "Does this row satisfy the condition?" If yes, it goes into your result. If no, it is ignored.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Think of WHERE as a security checkpoint at an airport.</p>
    <p>Every passenger comes through. The security guard checks their boarding pass against the condition: "Is this person flying to Mumbai on July 5th?"</p>
    <p>Passengers who match the condition go through. Everyone else is turned away.</p>
    <p>SELECT without WHERE is like letting everyone into the terminal. SELECT with WHERE is like running that checkpoint: only the matching rows get through.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>The WHERE clause goes after the FROM clause in your SQL query. It takes a condition, which is an expression that evaluates to either true or false for each row.</p>
    <p>Conditions use comparison operators. Here are the ones you will use most often:</p>
    <ul>
      <li>= means equal to. Used for both numbers and text.</li>
      <li>!= or <> means not equal to.</li>
      <li>> means greater than.</li>
      <li>< means less than.</li>
      <li>>= means greater than or equal to.</li>
      <li><= means less than or equal to.</li>
    </ul>
    <p>For text values, always put the value in single quotes. For numbers, do not use quotes.</p>
    <p>Text condition example: WHERE city = 'Delhi' Number condition example: WHERE amount > 500</p>
    <p>This difference matters. If you write WHERE amount = '500' with quotes around a number, some databases will still work but others will give you unexpected results or errors.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Here is the full syntax:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE condition;</code></pre>
    <p>A complete example using Flipkart's orders:</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount
FROM orders
WHERE city = 'Delhi';</code></pre>
    <p>This returns only the rows where city equals Delhi. All other rows are excluded.</p>
    <p>Another example with a number comparison:</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount
FROM orders
WHERE amount &gt; 500;</code></pre>
    <p>This returns only the rows where amount is greater than 500.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>SELECT column1, column2</td><td>Chooses which columns to display</td><td>customer_name, amount</td></tr>
      <tr><td>FROM table_name</td><td>Specifies which table to query</td><td>orders</td></tr>
      <tr><td>WHERE</td><td>Starts the filtering condition</td><td>WHERE</td></tr>
      <tr><td>condition</td><td>The rule each row must satisfy to appear in results</td><td>city = 'Delhi'</td></tr>
      <tr><td>=</td><td>Checks for exact equality</td><td>city = 'Delhi'</td></tr>
      <tr><td>!= or <></td><td>Checks for inequality</td><td>status != 'Cancelled'</td></tr>
      <tr><td>></td><td>Greater than</td><td>amount > 1000</td></tr>
      <tr><td><</td><td>Less than</td><td>amount < 500</td></tr>
      <tr><td>>=</td><td>Greater than or equal to</td><td>amount >= 500</td></tr>
      <tr><td><=</td><td>Less than or equal to</td><td>amount <= 1000</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using this sample Zomato orders table:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>amount</th><th>payment_mode</th><th>status</th></tr>
      <tr><td>3001</td><td>Rahul</td><td>Delhi</td><td>750</td><td>UPI</td><td>Delivered</td></tr>
      <tr><td>3002</td><td>Priya</td><td>Mumbai</td><td>280</td><td>Cash</td><td>Delivered</td></tr>
      <tr><td>3003</td><td>Arjun</td><td>Delhi</td><td>1400</td><td>Card</td><td>Pending</td></tr>
      <tr><td>3004</td><td>Neha</td><td>Bengaluru</td><td>490</td><td>UPI</td><td>Delivered</td></tr>
      <tr><td>3005</td><td>Simran</td><td>Mumbai</td><td>920</td><td>Card</td><td>Cancelled</td></tr>
    </table>
    <h3>Example 1: Filter by City</h3>
    <p>Fetch only the orders from Delhi.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount
FROM orders
WHERE city = 'Delhi';</code></pre>
    <p>Output: rows for Rahul (3001) and Arjun (3003). Both have city = 'Delhi'.</p>
    <h3>Example 2: Filter by Number Comparison</h3>
    <p>Find all orders where amount is greater than 700.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, city, amount
FROM orders
WHERE amount &gt; 700;</code></pre>
    <p>Output: Rahul (750), Arjun (1400), Simran (920). All have amounts above 700.</p>
    <h3>Example 3: Filter with Not Equal</h3>
    <p>Show all orders that are not cancelled.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, status
FROM orders
WHERE status != 'Cancelled';</code></pre>
    <p>Output: all rows except Simran's order (3005).</p>
    <h3>Example 4: Filter by Less Than or Equal</h3>
    <p>IRCTC wants to find all bookings where the fare is within budget, specifically 500 rupees or less.</p>
    <pre><code class="language-sql">SELECT booking_id, passenger_name, fare
FROM train_bookings
WHERE fare &lt;= 500;</code></pre>
    <p>This returns all bookings where fare is 500 or below, including exactly 500.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Why do I need quotes for text but not for numbers?"</strong></p>
    <p>SQL needs to distinguish between a column name and a value. When you write WHERE city = Delhi without quotes, SQL thinks Delhi is a column name, not a value. Single quotes signal to SQL that you are providing a literal text value.</p>
    <p>Numbers do not need quotes because SQL can tell them apart from column names naturally.</p>
    <p><strong>"What if no rows match my condition?"</strong></p>
    <p>You get an empty result. No rows, no error. The query ran successfully, it just found nothing that matched. This is normal and happens all the time in real data work.</p>
    <p><strong>"Can I use WHERE without a SELECT?"</strong></p>
    <p>WHERE only works as part of a larger SQL statement. You will always have SELECT ... FROM ... WHERE. The WHERE always comes after FROM.</p>
    <p><strong>"Is WHERE case-sensitive for text values?"</strong></p>
    <p>It depends on the database. MySQL is generally case-insensitive for string comparisons by default. PostgreSQL is case-sensitive. It is safest to match the case exactly as it is stored in your data.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Writing WHERE city = Delhi without quotes. SQL will think Delhi is a column name and throw an error.</li>
      <li>Putting WHERE before FROM. The correct order is always SELECT, then FROM, then WHERE.</li>
      <li>Using = with NULL values. WHERE phone = NULL will not work. NULL requires special treatment with IS NULL.</li>
      <li>Typos in column names or values. WHERE cty = 'Delhi' returns no results because cty is not a real column.</li>
      <li>Forgetting that text comparisons may be case-sensitive depending on the database.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always double-check your condition before running on a large table. Run SELECT * FROM table LIMIT 10 first to understand the data.</li>
      <li>Use specific comparison operators. Do not use > when you mean >=. These return different results.</li>
      <li>For text conditions, check your case. If your data stores cities as 'delhi' lowercase and you query for 'Delhi', you may miss rows.</li>
      <li>Keep conditions readable. If your condition is long, break it across multiple lines.</li>
      <li>Test with simple conditions before combining multiple filters with AND and OR.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>The WHERE clause is at the heart of every useful query in production systems across India.</p>
    <p>When you open PhonePe and view your transaction history, the app runs a query like SELECT * FROM transactions WHERE user_id = 'your_id'. That WHERE clause is why you see your transactions and not someone else's.</p>
    <p>When Zomato's operations team investigates a delay complaint, they run something like SELECT * FROM orders WHERE status = 'Delayed' AND city = 'Hyderabad'. The WHERE clause narrows millions of rows down to the exact ones they need to investigate.</p>
    <p>IRCTC uses WHERE to pull up your specific booking. Banks use WHERE to flag transactions above a certain threshold. Byju's uses it to find students who have not logged in for seven days.</p>
    <p>Without WHERE, SQL would return everything, and databases would be nearly unusable at scale.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>FULL TABLE (all 5 rows):
+----------+--------------+-----------+--------+
| order_id | customer_name| city      | amount |
+----------+--------------+-----------+--------+
| 3001     | Rahul        | Delhi     | 750    |
| 3002     | Priya        | Mumbai    | 280    |
| 3003     | Arjun        | Delhi     | 1400   |
| 3004     | Neha         | Bengaluru | 490    |
| 3005     | Simran       | Mumbai    | 920    |
+----------+--------------+-----------+--------+

QUERY: SELECT * FROM orders WHERE city = 'Delhi';

FILTER APPLIED: Does city = 'Delhi'?
Row 3001: Delhi = Delhi? YES  -&gt; included
Row 3002: Mumbai = Delhi? NO  -&gt; excluded
Row 3003: Delhi = Delhi? YES  -&gt; included
Row 3004: Bengaluru = Delhi? NO -&gt; excluded
Row 3005: Mumbai = Delhi? NO  -&gt; excluded

RESULT:
+----------+--------------+-------+--------+
| order_id | customer_name| city  | amount |
+----------+--------------+-------+--------+
| 3001     | Rahul        | Delhi | 750    |
| 3003     | Arjun        | Delhi | 1400   |
+----------+--------------+-------+--------+</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>WHERE filters rows based on a condition you specify.</li>
      <li>It comes after FROM in the query: SELECT ... FROM ... WHERE ...</li>
      <li>Use comparison operators: =, !=, >, <, >=, <=</li>
      <li>Wrap text values in single quotes. Do not quote numbers.</li>
      <li>If no rows match, you get an empty result, not an error.</li>
      <li>WHERE is evaluated row by row. Rows where the condition is true are included. Others are excluded.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find all orders from Mumbai in an orders table that has city, amount, and order_date columns.</li>
      <li>From a students table, find all students who scored more than 85 marks.</li>
      <li>Write a query to show all transactions where the payment_mode is 'UPI' from a payments table.</li>
      <li>From an employees table, find all employees who earn less than 50000 per month.</li>
      <li>Write a query to find all bookings where the status is not 'Cancelled' from a bookings table.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>WHERE is where SQL starts feeling like a real superpower.</p>
    <p>Before WHERE, you were just looking at all the data. After WHERE, you are asking precise, targeted questions. You are not scrolling through spreadsheets anymore. You are getting the exact answer you need.</p>
    <p>Every data analyst, data engineer, and developer who works with databases uses WHERE dozens of times every day. It never goes away. It never becomes less useful. The more complex your work gets, the more important a solid understanding of WHERE becomes.</p>
    <p>Practice it on different conditions: text, numbers, dates, comparisons of all kinds. The more you use it, the more natural it becomes.</p>
    <p>Neha sent her manager that Delhi orders report within three minutes. He asked if she had done this before. She smiled and said it was her first week.</p>
    <p>That could be you too.</p>
  `,
  'mod4-t3': `
    <h1>AND, OR, NOT: When One Condition Is Not Enough</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>It was a busy Friday at Swiggy's data team in Bengaluru. Rahul, a junior analyst, had just learned about the WHERE clause the previous week and was feeling confident. Then his manager, Neha, walked in with a new task.</p>
    <p>"Rahul, I need all orders from Mumbai that are above five hundred rupees AND were placed today. Also, exclude anything paid with cash."</p>
    <p>Rahul stared at his screen. He knew how to filter by city. He knew how to filter by amount. But how do you combine all three conditions in one query? Do you run three separate queries and compare the results?</p>
    <p>That sounded painful and error-prone. There had to be a better way.</p>
    <p>There is. It is called logical operators: AND, OR, and NOT.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Real business questions almost never have just one condition. Think about what actually gets asked in Indian companies every day:</p>
    <p>At Swiggy, the ops team might ask: "Show me all orders from Kolkata that were delivered late AND had a value above two hundred rupees."</p>
    <p>At IRCTC, the support team needs: "Find all bookings in the waitlist OR with a booking error."</p>
    <p>At Paytm, the fraud team wants: "Flag all transactions above fifty thousand rupees that are NOT from verified accounts."</p>
    <p>Every one of these requires combining multiple conditions. You could not answer any of them with a single WHERE condition. You need a way to connect multiple conditions together.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>A single condition in WHERE can answer simple questions. But the moment your question has the words "and also" or "or either" or "but not," you need something more.</p>
    <p>SQL's logical operators were designed to mirror the way humans naturally think about conditions. We combine criteria in our heads all the time. AND, OR, and NOT let you bring that natural logic directly into your queries.</p>
    <p>Without them, you would have to retrieve partial results from multiple queries, combine them manually, and do the filtering yourself outside the database. That is slow, error-prone, and defeats the purpose of having a powerful database engine in the first place.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think about how you use conditions in everyday decisions.</p>
    <p>If you are booking a movie ticket on BookMyShow, you might think: "I want a movie that is in Hindi AND rated above 8 stars." Both conditions must be true. If it is in Hindi but rated 5 stars, it does not make the cut. That is AND.</p>
    <p>Or you might think: "I am okay with a Telugu OR Tamil film." Either one works. If at least one condition is true, you are happy. That is OR.</p>
    <p>And maybe you think: "I do NOT want a horror film." You are ruling out anything that matches one condition. That is NOT.</p>
    <p>You already use this logic every day. SQL just gives you the syntax to write it down.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Imagine you are helping a caterer filter their guest list for a corporate event.</p>
    <p>AND is like saying: "Only invite people who are from the engineering department AND have confirmed their attendance." Both conditions must be true. Miss either one and they are off the list.</p>
    <p>OR is like saying: "Invite anyone who is from the Delhi office OR the Mumbai office." Being in either city qualifies them. They do not need to be in both.</p>
    <p>NOT is like saying: "Invite everyone who is NOT on the dietary restriction list." You are excluding a specific group and including everyone else.</p>
    <p>These three operators let you build any combination of conditions, just like a caterer can define any set of invite rules.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>AND, OR, and NOT are logical operators that connect multiple conditions inside a WHERE clause.</p>
    <p>AND requires all conditions to be true for a row to be included. The more conditions you connect with AND, the stricter the filter becomes and the fewer rows come back.</p>
    <p>OR requires at least one condition to be true. The more conditions you connect with OR, the looser the filter becomes and the more rows come back.</p>
    <p>NOT reverses a condition. WHERE NOT city = 'Delhi' is the same as WHERE city != 'Delhi'. It is useful when it is easier to describe what you do not want than what you do.</p>
    <p>Operator precedence matters. SQL evaluates AND before OR, just like multiplication before addition in arithmetic. This means if you mix AND and OR without brackets, the AND conditions get evaluated first, which can give you unexpected results.</p>
    <p>The solution is always: use brackets to make your intent explicit.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Using AND:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE condition1 AND condition2;</code></pre>
    <p>Using OR:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE condition1 OR condition2;</code></pre>
    <p>Using NOT:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE NOT condition;</code></pre>
    <p>Mixing them with brackets for clarity:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE condition1 AND (condition2 OR condition3);</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Operator</th><th>How It Works</th><th>Strictness</th><th>Example</th></tr>
      <tr><td>AND</td><td>ALL connected conditions must be true</td><td>Strict: fewer results</td><td>WHERE city = 'Mumbai' AND amount > 500</td></tr>
      <tr><td>OR</td><td>AT LEAST ONE condition must be true</td><td>Loose: more results</td><td>WHERE city = 'Delhi' OR city = 'Chennai'</td></tr>
      <tr><td>NOT</td><td>Reverses a condition. True becomes false, false becomes true</td><td>Excludes matches</td><td>WHERE NOT payment_mode = 'Cash'</td></tr>
      <tr><td>() brackets</td><td>Groups conditions, controls evaluation order</td><td>Essential with mixed operators</td><td>WHERE city = 'Mumbai' AND (mode = 'UPI' OR mode = 'Card')</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Here is a sample orders table from Zomato:</p>
    <table>
      <tr><th>order_id</th><th>city</th><th>amount</th><th>payment_mode</th><th>order_date</th><th>status</th></tr>
      <tr><td>4001</td><td>Mumbai</td><td>650</td><td>UPI</td><td>2024-07-10</td><td>Delivered</td></tr>
      <tr><td>4002</td><td>Delhi</td><td>380</td><td>Cash</td><td>2024-07-10</td><td>Delivered</td></tr>
      <tr><td>4003</td><td>Mumbai</td><td>210</td><td>Card</td><td>2024-07-09</td><td>Pending</td></tr>
      <tr><td>4004</td><td>Chennai</td><td>720</td><td>UPI</td><td>2024-07-10</td><td>Delivered</td></tr>
      <tr><td>4005</td><td>Mumbai</td><td>880</td><td>Cash</td><td>2024-07-10</td><td>Cancelled</td></tr>
      <tr><td>4006</td><td>Delhi</td><td>1100</td><td>UPI</td><td>2024-07-11</td><td>Delivered</td></tr>
    </table>
    <h3>Example 1: AND</h3>
    <p>Find all Mumbai orders above 500 rupees.</p>
    <pre><code class="language-sql">SELECT order_id, city, amount
FROM orders
WHERE city = 'Mumbai' AND amount &gt; 500;</code></pre>
    <p>Both conditions must be true. Row 4001 (Mumbai, 650) qualifies. Row 4005 (Mumbai, 880) qualifies. Row 4003 (Mumbai, 210) does not qualify because 210 is not above 500.</p>
    <h3>Example 2: OR</h3>
    <p>Find all orders from Delhi or Chennai.</p>
    <pre><code class="language-sql">SELECT order_id, city, amount
FROM orders
WHERE city = 'Delhi' OR city = 'Chennai';</code></pre>
    <p>Row 4002 (Delhi) qualifies. Row 4004 (Chennai) qualifies. Row 4006 (Delhi) qualifies. Mumbai rows do not.</p>
    <h3>Example 3: NOT</h3>
    <p>Show all orders that are not paid by cash.</p>
    <pre><code class="language-sql">SELECT order_id, payment_mode, amount
FROM orders
WHERE NOT payment_mode = 'Cash';</code></pre>
    <p>This excludes rows 4002 and 4005. All other payment modes (UPI and Card) come through.</p>
    <h3>Example 4: Mixing AND and OR with Brackets</h3>
    <p>Find all Mumbai orders above five hundred rupees that were paid by UPI or Card. You do not want cash orders from Mumbai.</p>
    <pre><code class="language-sql">SELECT order_id, city, amount, payment_mode
FROM orders
WHERE city = 'Mumbai' AND amount &gt; 500 AND (payment_mode = 'UPI' OR payment_mode = 'Card');</code></pre>
    <p>Without the brackets, SQL would evaluate the AND before the OR due to precedence, which could give wrong results. With brackets, the intent is crystal clear: we want Mumbai orders over 500 where the mode is either UPI or Card.</p>
    <p>Only row 4001 (Mumbai, 650, UPI) matches all conditions.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"AND makes results stricter, OR makes them broader. Is that always true?"</strong></p>
    <p>Yes. AND adds restrictions, so fewer rows qualify. OR loosens restrictions, so more rows qualify. Use AND when you need rows to satisfy multiple criteria simultaneously. Use OR when any one criterion is enough.</p>
    <p><strong>"What happens if I forget to use brackets when mixing AND and OR?"</strong></p>
    <p>SQL processes AND before OR due to operator precedence. This often produces incorrect results that are hard to debug because the query runs without an error but returns the wrong data. Always use brackets when mixing these operators.</p>
    <p><strong>"Can NOT be used with AND or OR?"</strong></p>
    <p>Yes. You can write WHERE NOT (city = 'Delhi' AND amount > 500) to exclude rows where both conditions are true. The brackets are critical here too.</p>
    <p><strong>"Why does WHERE city = 'Delhi' OR 'Mumbai' not work?"</strong></p>
    <p>SQL needs a full condition on each side of OR. You cannot shortcut it like natural English. You must write WHERE city = 'Delhi' OR city = 'Mumbai' with the city column repeated.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Forgetting brackets when mixing AND with OR. This is the most common source of logic bugs in SQL.</li>
      <li>Writing WHERE city = 'Delhi' OR 'Mumbai' instead of WHERE city = 'Delhi' OR city = 'Mumbai'.</li>
      <li>Overcomplicating NOT when != would work just as well. WHERE NOT status = 'Active' is the same as WHERE status != 'Active'. Use whichever reads more clearly.</li>
      <li>Using AND when you meant OR, or vice versa. Read your condition out loud in English to check. "Orders from Delhi AND from Mumbai" is impossible for a single row. You almost certainly meant OR.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use brackets when combining AND with OR. Do not rely on operator precedence. Make your logic visible.</li>
      <li>Read your WHERE clause out loud in plain English. If it does not make sense in English, it probably does not do what you want in SQL.</li>
      <li>For multiple OR conditions on the same column, consider IN instead. WHERE city IN ('Delhi', 'Mumbai', 'Chennai') is cleaner than three ORs.</li>
      <li>Test with small data first. Before running on a million rows, run on ten and verify the results match your expectations.</li>
      <li>Keep complex conditions well-indented for readability.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, the analytics team uses AND extensively: "Show all orders placed today, with a delivered status, from tier-2 cities, where the amount is above one thousand." That is four AND conditions in one query.</p>
    <p>At Jio, network operations queries often use OR: "Find all users in Maharashtra OR Gujarat experiencing high latency."</p>
    <p>IRCTC's booking engine uses NOT to filter availability: "Show all trains NOT in the fully booked status."</p>
    <p>Paytm fraud detection uses combinations of all three: "Flag transactions above twenty thousand rupees that are NOT from usual locations AND occurred between midnight and 5 AM."</p>
    <p>These are real-world patterns that show up in almost every industry in India.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>AND: Both conditions must be true
------------------------------------
Condition A: city = 'Mumbai'   TRUE/FALSE
Condition B: amount &gt; 500      TRUE/FALSE

Row qualifies only if BOTH are TRUE

  city='Mumbai'  amount&gt;500  Qualifies?
  YES            YES         YES
  YES            NO          NO
  NO             YES         NO
  NO             NO          NO

OR: At least one condition must be true
------------------------------------
  city='Delhi'  city='Chennai'  Qualifies?
  YES           NO              YES
  NO            YES             YES
  YES           YES             YES
  NO            NO              NO

NOT: Reverses a condition
------------------------------------
  payment='Cash'  NOT payment='Cash'
  TRUE            FALSE
  FALSE           TRUE</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>AND requires all conditions to be true. Stricter filter, fewer results.</li>
      <li>OR requires at least one condition to be true. Looser filter, more results.</li>
      <li>NOT reverses a condition. Excludes matching rows.</li>
      <li>SQL evaluates AND before OR. Always use brackets to make your logic explicit.</li>
      <li>Read your condition in plain English before running it to catch logical mistakes.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <p>Use a students table with columns: name, city, marks, gender, subject.</p>
    <ol>
      <li>Find all students from Bengaluru who scored above 90 marks.</li>
      <li>Show all students from Pune or Mumbai.</li>
      <li>List all students who are NOT from Chennai.</li>
      <li>Find all female students from Delhi who scored above 80 marks.</li>
      <li>Show all students who are from Hyderabad AND scored more than 75, OR are from Mumbai AND scored more than 85.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>AND, OR, NOT are where SQL starts to feel like actual thinking rather than just data retrieval. They let you express complex, nuanced questions to your database in a precise, unambiguous way.</p>
    <p>The most important thing to remember is to use brackets. Every experienced SQL developer has at some point been burned by a query that returned wrong results because they forgot brackets when mixing AND and OR. Learn from their mistakes and bracket everything explicitly.</p>
    <p>Once you are comfortable combining these operators, you will find that almost any filter you can describe in plain English, you can translate directly into SQL. That is a powerful skill.</p>
    <p>Rahul finished that Swiggy query in under two minutes. His manager was impressed. You will get there too.</p>
  `,
  'mod4-t4': `
    <h1>IN and NOT IN: A Shorter Way to Filter Multiple Values</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Priya had just finished her first month as a data analyst at Swiggy. She was comfortable with SELECT, WHERE, and even AND and OR. Then one afternoon her manager, Vikram, gave her a task that made her pause.</p>
    <p>"Pull me all orders from Hyderabad, Bengaluru, Mumbai, Chennai, and Pune from last week. We need it for the regional ops report."</p>
    <p>Priya started typing:</p>
    <p>WHERE city = 'Hyderabad' OR city = 'Bengaluru' OR city = 'Mumbai' OR city = 'Chennai' OR city = 'Pune'</p>
    <p>She stopped. That was already five ORs and it looked terrible. What if Vikram added more cities later? What if the list grew to twenty cities?</p>
    <p>She remembered something she had read briefly: the IN operator. She decided to look it up properly.</p>
    <p>One minute later, her query was clean, professional, and completely readable. That is what IN does.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Here is the situation: you have a column in your table and you want to filter rows where that column matches any one of several specific values.</p>
    <p>Consider this Swiggy orders table:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>amount</th><th>payment_mode</th></tr>
      <tr><td>5001</td><td>Rahul</td><td>Hyderabad</td><td>450</td><td>UPI</td></tr>
      <tr><td>5002</td><td>Neha</td><td>Bengaluru</td><td>680</td><td>Card</td></tr>
      <tr><td>5003</td><td>Arjun</td><td>Delhi</td><td>290</td><td>Cash</td></tr>
      <tr><td>5004</td><td>Simran</td><td>Mumbai</td><td>540</td><td>UPI</td></tr>
      <tr><td>5005</td><td>Priya</td><td>Chennai</td><td>820</td><td>Card</td></tr>
      <tr><td>5006</td><td>Aman</td><td>Pune</td><td>390</td><td>Cash</td></tr>
      <tr><td>5007</td><td>Ravi</td><td>Kolkata</td><td>710</td><td>UPI</td></tr>
    </table>
    <p>You want rows for five specific cities. Using OR works but it gets ugly fast. The IN operator solves this elegantly.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Before IN, the only way to check if a column matched one of several values was to chain multiple OR conditions:</p>
    <pre><code class="language-sql">SELECT * FROM orders
WHERE city = 'Hyderabad' OR city = 'Bengaluru' OR city = 'Mumbai'
   OR city = 'Chennai' OR city = 'Pune';</code></pre>
    <p>This is technically correct but has serious problems. It is hard to read. It is hard to maintain when the list changes. It is easy to make typos. And with ten or twenty values, it becomes unmanageable.</p>
    <p>The IN operator was added to SQL specifically to handle this pattern. It lets you express "match any value from this list" in a single, clean statement. The database understands it and optimises it correctly.</p>
    <p>There is also an important NULL gotcha with NOT IN that many experienced developers have been surprised by. We will cover that carefully.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think about how you text your friends before ordering food. You message the group and ask: "Is anyone coming for lunch? Priya, Aman, or Neha?"</p>
    <p>You are asking if the person is any of those three names. That is IN: "Is this value one of these options?"</p>
    <p>NOT IN is the opposite: "Give me everyone who is NOT in this list." It is like saying: "I want everyone except Priya, Aman, and Neha."</p>
    <p>This is a natural way of thinking about filtering. IN and NOT IN simply let you express this directly in SQL.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Imagine a bouncer at a club who has an approved guest list: Rahul, Priya, Arjun, Neha.</p>
    <p>When someone comes to the door, the bouncer checks: "Is your name in the list?"</p>
    <p>If yes, you are in (IN operator). If no, you are turned away (NOT IN operator).</p>
    <p>SQL's IN does exactly this for your data: it checks if a column's value appears in a list you provide. Matching rows get included in the result. Non-matching rows are filtered out.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>IN checks if a column's value matches any value in a list you specify. If it matches, the row is included in the result. This is functionally equivalent to writing multiple OR conditions, but much cleaner and easier to read.</p>
    <p>NOT IN does the opposite. It excludes any row where the column's value matches any value in the list. Only rows where the value is NOT in the list come through.</p>
    <p>Both operators work with text values and numeric values.</p>
    <p>There is one critical gotcha with NOT IN: if your list contains a NULL value, NOT IN will return zero rows. This happens because SQL cannot confirm that a value is "not equal" to NULL (since NULL means unknown). When a NULL is in the list, SQL cannot be certain whether the column's value equals NULL or not, so it excludes every row to be safe. Always make sure your NOT IN list does not contain NULL.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Using IN:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name IN ('value1', 'value2', 'value3');</code></pre>
    <p>Using NOT IN:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name NOT IN ('value1', 'value2', 'value3');</code></pre>
    <p>For numbers, no quotes are needed:</p>
    <pre><code class="language-sql">SELECT * FROM orders
WHERE amount IN (100, 200, 500, 1000);</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>WHERE column_name</td><td>The column you are checking</td><td>WHERE city</td></tr>
      <tr><td>IN</td><td>Keyword: include rows where value matches anything in the list</td><td>IN</td></tr>
      <tr><td>('val1', 'val2')</td><td>The list of values to match against, in brackets</td><td>('Delhi', 'Mumbai', 'Chennai')</td></tr>
      <tr><td>NOT IN</td><td>Keyword: exclude rows where value matches anything in the list</td><td>NOT IN</td></tr>
      <tr><td>Commas</td><td>Separate each value in the list</td><td>'Delhi', 'Mumbai'</td></tr>
      <tr><td>NULL in list</td><td>Critical gotcha: NOT IN with a NULL in the list returns zero rows</td><td>Avoid NULL in NOT IN lists</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using the same Swiggy orders table from above.</p>
    <h3>Example 1: IN with Text Values</h3>
    <p>Find all orders from Hyderabad, Bengaluru, and Mumbai.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, city, amount
FROM orders
WHERE city IN ('Hyderabad', 'Bengaluru', 'Mumbai');</code></pre>
    <p>This is equivalent to WHERE city = 'Hyderabad' OR city = 'Bengaluru' OR city = 'Mumbai', but far cleaner. Result: rows 5001, 5002, and 5004.</p>
    <h3>Example 2: NOT IN with Text Values</h3>
    <p>Find all orders from cities outside the south: exclude Chennai and Hyderabad.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, city
FROM orders
WHERE city NOT IN ('Chennai', 'Hyderabad');</code></pre>
    <p>Result: rows 5002 (Bengaluru), 5003 (Delhi), 5004 (Mumbai), 5006 (Pune), 5007 (Kolkata). Rows 5001 and 5005 are excluded.</p>
    <h3>Example 3: IN with Numbers</h3>
    <p>A college wants to see students who scored exactly 70, 75, 80, or 85 marks in their final exam.</p>
    <pre><code class="language-sql">SELECT student_id, name, marks
FROM student_scores
WHERE marks IN (70, 75, 80, 85);</code></pre>
    <p>No quotes needed for numbers.</p>
    <h3>Example 4: IN vs Multiple OR Comparison</h3>
    <p>Both queries below return the same result, but the IN version is much cleaner:</p>
    <p>Using OR (messy):</p>
    <pre><code class="language-sql">SELECT * FROM orders
WHERE city = 'Hyderabad' OR city = 'Bengaluru' OR city = 'Mumbai'
   OR city = 'Chennai' OR city = 'Pune';</code></pre>
    <p>Using IN (clean):</p>
    <pre><code class="language-sql">SELECT * FROM orders
WHERE city IN ('Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Pune');</code></pre>
    <p>As the list grows, the IN version scales gracefully. The OR version becomes unreadable.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Can I use IN with both numbers and text in the same list?"</strong></p>
    <p>No. Keep your list values consistent in type. If the column stores numbers, use numbers in the list. If it stores text, use quoted strings. Mixing types can cause unexpected behaviour or errors.</p>
    <p><strong>"What if my IN list has hundreds of values?"</strong></p>
    <p>SQL handles large IN lists, but performance can degrade at very large sizes. For very large lists (hundreds or thousands of values), a better approach is to put those values in a temporary table and use a JOIN. For typical use cases of ten to fifty values, IN is perfectly fine.</p>
    <p><strong>"Why does NOT IN return zero rows when there is a NULL in the list?"</strong></p>
    <p>NULL means unknown. SQL cannot confirm whether a value is "not equal" to something unknown. So when the list has a NULL, SQL cannot safely say that any row's value is definitely not in the list. As a defensive measure, it returns nothing. Always verify your NOT IN list does not contain NULL values.</p>
    <p><strong>"Is IN case-sensitive for text?"</strong></p>
    <p>It depends on the database. MySQL is generally case-insensitive by default. PostgreSQL is case-sensitive. Match the case as it is stored in your database.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Forgetting single quotes for text values. WHERE city IN (Delhi, Mumbai) will fail because SQL treats Delhi and Mumbai as column names, not values.</li>
      <li>Mixing data types in the IN list. Do not write IN ('500', 1000). Keep it consistent.</li>
      <li>Putting a NULL in a NOT IN list and wondering why you get zero rows. This is one of SQL's most surprising behaviours.</li>
      <li>Using IN when you mean BETWEEN. For ranges, BETWEEN is the right tool. IN is for specific, discrete values.</li>
      <li>Forgetting commas between values in the list.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use IN for short to medium lists of specific values, typically up to 50 or 100 items.</li>
      <li>For very large lists, use a subquery or a JOIN with another table.</li>
      <li>Always double-check your NOT IN list for NULL values before running.</li>
      <li>Prefer IN over a chain of OR conditions for readability and maintainability.</li>
      <li>When your IN list might change over time, consider whether the values should be stored in a lookup table instead.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Flipkart uses IN to filter products by multiple categories in search results: "Show electronics, books, and home appliances." One IN query instead of three OR conditions.</p>
    <p>IRCTC uses IN to show trains that run on specific days: "Show trains that run on Monday, Wednesday, or Friday."</p>
    <p>Banks use NOT IN to find customers who have not completed specific verification steps: "Show customers who are NOT in the verified_kyc or pending_kyc lists."</p>
    <p>Swiggy uses IN to pull orders from specific delivery zones during a festive sale to calculate surge pricing needs.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>IN: Does the value appear in the list?
---------------------------------------
city column   IN ('Delhi','Mumbai')   Include?
-----------   ---------------------   --------
Delhi         YES, it's in the list   YES
Mumbai        YES, it's in the list   YES
Chennai       NO, not in the list     NO
Bengaluru     NO, not in the list     NO

NOT IN: Does the value NOT appear in the list?
-----------------------------------------------
city column   NOT IN ('Delhi','Mumbai')  Include?
-----------   ------------------------   --------
Delhi         Delhi IS in list           NO
Mumbai        Mumbai IS in list          NO
Chennai       Chennai NOT in list        YES
Bengaluru     Bengaluru NOT in list      YES

NULL GOTCHA with NOT IN:
If your list contains NULL, NOT IN returns ZERO rows.
Always check: WHERE city NOT IN ('Delhi', NULL) --&gt; 0 rows!</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>IN checks if a column value matches any value in a provided list.</li>
      <li>NOT IN excludes rows where the column matches any value in the list.</li>
      <li>IN is cleaner and more readable than chaining multiple OR conditions.</li>
      <li>Works for both text (with quotes) and numbers (without quotes).</li>
      <li>Critical warning: if a NOT IN list contains NULL, the query returns zero rows.</li>
      <li>For very large value lists, consider a JOIN with a lookup table instead.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to show all orders from Pune, Jaipur, and Lucknow from an orders table.</li>
      <li>Find all students who did NOT score 60, 70, or 80 marks in Science from a student_scores table.</li>
      <li>From a products table, list all products in the categories Electronics, Books, or Clothing.</li>
      <li>Show all employees whose department is NOT HR, Finance, or Legal from an employees table.</li>
      <li>From a movie_bookings table, show all bookings for movies in the languages Hindi, Telugu, and Tamil.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>IN and NOT IN are small in syntax but large in impact. They clean up your queries, make them more readable, and make them easier to maintain as requirements change.</p>
    <p>Whenever you find yourself writing the same column name with OR conditions multiple times, stop and think: this is probably a job for IN.</p>
    <p>And always remember that NOT IN with a NULL in the list is one of SQL's quiet traps. It returns nothing and does not error, so you might not even notice. Keep that in mind and you will save yourself a lot of debugging time.</p>
    <p>Priya's query was done in ten seconds. Vikram added three more cities to the list an hour later, and Priya updated the query in thirty seconds. That is the power of writing clean SQL from the start.</p>
  `,
  'mod4-t5': `
    <h1>BETWEEN: Pick a Range Without Writing Two Conditions</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Arjun was on his second month at Flipkart when his team lead, Sneha, gave him what sounded like a straightforward task during the evening standup.</p>
    <p>"Arjun, can you pull all orders placed between the 1st and the 15th of this month, where the order value is between one thousand and five thousand rupees? We need it for the monthly settlement report."</p>
    <p>Arjun nodded and opened his SQL editor. He thought about how to write this. He knew about WHERE and comparison operators. He could probably write something like WHERE amount >= 1000 AND amount <= 5000. That would work. But it felt slightly clunky, especially when combined with the date range too.</p>
    <p>Sneha noticed him thinking and said: "Have you tried BETWEEN yet?"</p>
    <p>Arjun had not. But ten minutes later, after looking it up and trying it, he understood why she asked. It was cleaner, more readable, and expressed his intent more directly.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Range-based filtering is everywhere in data work. Consider these common requests at Indian companies:</p>
    <p>At IRCTC, the ops team wants all train bookings made between the 1st and 15th of August, the busiest travel period of the year.</p>
    <p>At a bank, the compliance team needs all UPI transactions between five hundred and two thousand rupees for an audit.</p>
    <p>At Byju's, an academic analyst wants to find students who scored between sixty and eighty percent to offer them additional support materials.</p>
    <p>At Zomato, the growth team filters restaurants with ratings between 4.0 and 4.5 for a curated "hidden gems" campaign.</p>
    <p>All of these require selecting rows where a value falls within a specific range. Both the lower boundary and the upper boundary matter. BETWEEN is designed exactly for this.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Before BETWEEN, you would write range conditions using two comparison operators connected with AND:</p>
    <pre><code class="language-sql">WHERE amount &gt;= 1000 AND amount &lt;= 5000</code></pre>
    <p>This works perfectly. The problem is not correctness, it is readability and expressiveness. When you have multiple range conditions in a single query, the compound comparisons pile up quickly and become harder to read.</p>
    <p>SQL developers recognised that range filtering was an extremely common pattern. They created BETWEEN as a cleaner, more expressive way to write the same thing. It also communicates intent more clearly: "I want values in this range" is more direct than "I want values that are greater than or equal to this AND less than or equal to that."</p>
    <p>Both approaches are valid. BETWEEN is simply cleaner for straightforward ranges.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think of BETWEEN as a range checkpoint on a highway. Cars are allowed through only if their registration year is between 2018 and 2024. If you are from 2017, turn back. If you are from 2025, also turn back. You must be within the boundary on both sides.</p>
    <p>Crucially, both the lower boundary and the upper boundary are inclusive. A car registered in 2018 is allowed. A car registered in 2024 is allowed. The boundary values themselves are part of the qualifying range.</p>
    <p>This inclusive behaviour on both ends is one of the most important things to remember about BETWEEN.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Imagine you are a cricket commentator and you want to analyse matches where Virat Kohli scored between 50 and 100 runs. Not below 50 (too small), not above 100 (a century deserves special treatment). Exactly in that range, inclusive of 50 and 100 themselves.</p>
    <p>BETWEEN is like that filter: you define two endpoints, and the database includes every row where the value falls at or between those points.</p>
    <p>Or think about train seat classes. You want to show passengers in coach numbers between 3 and 7. That includes coaches 3, 4, 5, 6, and 7. Both end coaches are included.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>BETWEEN filters rows where a column's value falls within a specified range. The range includes both the lower value and the upper value. This is called a closed interval.</p>
    <p>BETWEEN works with three types of data:</p>
    <p>Numbers: WHERE amount BETWEEN 1000 AND 5000 includes 1000, 2500, and 5000.</p>
    <p>Dates: WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31' includes orders from January 1st all the way through March 31st, inclusive.</p>
    <p>Text (alphabetical): WHERE name BETWEEN 'A' AND 'M' returns names that fall alphabetically from A through M. This is less commonly used but valid.</p>
    <p>You can also use NOT BETWEEN to exclude a range. NOT BETWEEN returns rows where the value is below the lower boundary or above the upper boundary.</p>
    <p>The lower value must always come first. If you write BETWEEN 5000 AND 1000, you will get zero results because SQL does not automatically swap them. Always put the smaller value first.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic BETWEEN:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name BETWEEN lower_value AND upper_value;</code></pre>
    <p>BETWEEN with dates:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE date_column BETWEEN '2024-01-01' AND '2024-03-31';</code></pre>
    <p>NOT BETWEEN:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name NOT BETWEEN lower_value AND upper_value;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>WHERE column_name</td><td>The column whose values you are range-filtering</td><td>WHERE amount</td></tr>
      <tr><td>BETWEEN</td><td>Keyword: include rows where value is at or between the two boundaries</td><td>BETWEEN</td></tr>
      <tr><td>lower_value</td><td>The minimum value, included in results</td><td>1000</td></tr>
      <tr><td>AND</td><td>Required separator between lower and upper values</td><td>AND</td></tr>
      <tr><td>upper_value</td><td>The maximum value, included in results</td><td>5000</td></tr>
      <tr><td>NOT BETWEEN</td><td>Exclude rows where value falls within the range</td><td>NOT BETWEEN</td></tr>
      <tr><td>Inclusivity</td><td>Both lower and upper values are included in results</td><td>BETWEEN 100 AND 500 includes 100 and 500</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using a Flipkart orders table:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>amount</th><th>order_date</th><th>rating</th></tr>
      <tr><td>6001</td><td>Rahul</td><td>Delhi</td><td>800</td><td>2024-06-05</td><td>4.2</td></tr>
      <tr><td>6002</td><td>Priya</td><td>Mumbai</td><td>1200</td><td>2024-06-10</td><td>3.8</td></tr>
      <tr><td>6003</td><td>Neha</td><td>Bengaluru</td><td>3500</td><td>2024-06-15</td><td>4.7</td></tr>
      <tr><td>6004</td><td>Arjun</td><td>Chennai</td><td>5000</td><td>2024-06-20</td><td>4.5</td></tr>
      <tr><td>6005</td><td>Simran</td><td>Hyderabad</td><td>420</td><td>2024-06-25</td><td>3.2</td></tr>
    </table>
    <h3>Example 1: BETWEEN with Numbers</h3>
    <p>Find all orders with amounts between 1000 and 5000 rupees.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount
FROM orders
WHERE amount BETWEEN 1000 AND 5000;</code></pre>
    <p>Result: rows 6002 (1200), 6003 (3500), and 6004 (5000). Note that 5000 is included because BETWEEN is inclusive. Row 6001 (800) and row 6005 (420) are excluded.</p>
    <h3>Example 2: BETWEEN with Dates</h3>
    <p>Show all IRCTC bookings made between July 1st and July 15th, 2024.</p>
    <pre><code class="language-sql">SELECT booking_id, passenger_name, booking_date
FROM train_bookings
WHERE booking_date BETWEEN '2024-07-01' AND '2024-07-15';</code></pre>
    <p>This includes all bookings from July 1st through July 15th, both days inclusive.</p>
    <h3>Example 3: NOT BETWEEN</h3>
    <p>Find all Flipkart orders where the amount is outside the mid-range. Specifically, amounts below 1000 or above 5000.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount
FROM orders
WHERE amount NOT BETWEEN 1000 AND 5000;</code></pre>
    <p>Result: rows 6001 (800) and 6005 (420). Both are below 1000, so they are outside the 1000-5000 range.</p>
    <h3>Example 4: BETWEEN with Order Date Range for a Campaign</h3>
    <p>Zomato wants to pull all orders placed during their summer sale campaign from April 1st to June 30th, 2024, to calculate campaign revenue.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount, order_date
FROM orders
WHERE order_date BETWEEN '2024-04-01' AND '2024-06-30';</code></pre>
    <p>All orders from the full three-month period are included, with both April 1st and June 30th being included in the results.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Is BETWEEN inclusive or exclusive at the boundaries?"</strong></p>
    <p>BETWEEN is always inclusive at both boundaries. BETWEEN 1000 AND 5000 includes both 1000 and 5000 in the results. If you want to exclude the boundaries, you must use > and < instead of BETWEEN.</p>
    <p><strong>"What if I accidentally write the larger value first?"</strong></p>
    <p>For numeric columns, BETWEEN 5000 AND 1000 returns zero rows. SQL does not automatically swap the order. Always write the smaller value first.</p>
    <p><strong>"Can I use BETWEEN for dates?"</strong></p>
    <p>Yes, absolutely. Use standard date format ('YYYY-MM-DD') to ensure compatibility across databases. Date BETWEEN includes the full start and end dates.</p>
    <p><strong>"Is BETWEEN the same as >= AND <=?"</strong></p>
    <p>Yes, functionally identical. BETWEEN 1000 AND 5000 produces the same results as >= 1000 AND <= 5000. BETWEEN is simply a more readable way to express the same thing.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Reversing the range values: BETWEEN 5000 AND 1000 returns nothing. Always lower value first, then higher value.</li>
      <li>Forgetting that BETWEEN is inclusive: if you want to exclude the boundary values, use strict comparison operators (> and <) instead.</li>
      <li>Date format mismatches: if your database stores dates in a different format than you use in the query, you may get zero results or errors. Use the standard 'YYYY-MM-DD' format.</li>
      <li>Using BETWEEN for approximate matches on text when LIKE would be more appropriate.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use BETWEEN instead of >= AND <= for clarity. It communicates range intent more directly.</li>
      <li>Always put the lower value first and higher value second.</li>
      <li>For date ranges, use consistent date formats. Stick to 'YYYY-MM-DD'.</li>
      <li>If you need to exclude boundary values, use > and < instead of BETWEEN.</li>
      <li>Combine BETWEEN with other conditions using AND when filtering on multiple criteria simultaneously.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At every Indian company that deals with financial data, BETWEEN is used constantly for period-based reporting. A bank analyst runs: "Show all transactions between January 1st and March 31st" every quarter for financial reports.</p>
    <p>Zomato's data team uses BETWEEN to segment orders by price range for their promotional campaigns: which orders fall in the affordable range, mid-range, or premium range.</p>
    <p>IRCTC uses BETWEEN to calculate seat occupancy for specific journey date ranges during holiday seasons like Diwali and Eid.</p>
    <p>HR departments use BETWEEN to filter employees by joining year ranges for tenure-based analysis: "Show all employees who joined between 2020 and 2022."</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Number line for: WHERE amount BETWEEN 1000 AND 5000

    |-------|===============================|-------|
    0     999   1000                     5000  5001+

    [999]   : NOT included (below lower boundary)
    [1000]  : INCLUDED (at lower boundary)
    [2500]  : INCLUDED (within range)
    [5000]  : INCLUDED (at upper boundary)
    [5001]  : NOT included (above upper boundary)

Date range for: WHERE order_date BETWEEN '2024-07-01' AND '2024-07-15'

    Jun 30  |  Jul 1 ==================== Jul 15  |  Jul 16
               INCLUDED           INCLUDED
    (Jun 30 excluded)              (Jul 16 excluded)

NOT BETWEEN (opposite):
    |=======|                               |=======|
    Below 1000                           Above 5000
    These rows come through. Middle is excluded.</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>BETWEEN filters rows where a column's value falls within a range.</li>
      <li>Both the lower boundary and upper boundary are inclusive.</li>
      <li>Syntax: WHERE column BETWEEN lower_value AND upper_value</li>
      <li>Works for numbers, dates, and text (alphabetically).</li>
      <li>Always put the smaller value first, then the larger value.</li>
      <li>NOT BETWEEN excludes the range and returns everything outside it.</li>
      <li>BETWEEN is equivalent to >= AND <= but more readable.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>From a students table, write a query to show all students who scored between 70 and 90 marks.</li>
      <li>From a transactions table, find all transactions made between '2024-01-01' and '2024-01-31'.</li>
      <li>From a products table, show all products priced between 200 and 1500 rupees.</li>
      <li>From an employees table, find employees who joined between 2019 and 2022.</li>
      <li>From a movie_bookings table, show bookings NOT in the price range between 100 and 500 rupees.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>BETWEEN is one of those SQL features that, once you know it, you will reach for it naturally every time you need a range filter.</p>
    <p>It is not just a shortcut. It is a more expressive way to write range conditions that makes your intent immediately clear to anyone reading your query. Clean, readable SQL is not just about aesthetics. It reduces bugs, speeds up reviews, and makes your work easier to maintain.</p>
    <p>Arjun finished Sneha's report in under five minutes. The query was clean enough that she reviewed it in thirty seconds and said it looked good. That is what writing clear SQL gets you.</p>
    <p>When you write BETWEEN, you are not just filtering data. You are communicating your intent clearly to the database and to every colleague who reads your code.</p>
  `,
  'mod4-t6': `
    <h1>LIKE and Wildcards: Search When You Don't Know the Exact Value</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>It was Priya's first month at Zomato and she had settled into the routine of writing WHERE clauses with confidence. Then one day her manager, Kiran, came to her with a request that stopped her in her tracks.</p>
    <p>"Priya, can you pull a list of all our restaurant partners whose names contain the word 'Biryani'? Also, we need all customer email addresses that end with gmail.com. Oh, and separately, all phone numbers that start with 99."</p>
    <p>Priya tried to think how to write this. She knew WHERE and = for exact matches. But "contains the word Biryani" was not an exact match. "Ends with gmail.com" was not an exact match either. The restaurant might be called Hyderabadi Biryani House, or Paradise Biryani, or Biryani Bros. They all contain the word but they are all different.</p>
    <p>How do you search for a pattern rather than an exact value?</p>
    <p>That is exactly what LIKE and wildcards are for.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Data in the real world is messy, inconsistent, and partial. In Indian databases especially, you encounter variations in spelling, naming, and format constantly.</p>
    <p>Consider these situations:</p>
    <p>A telecom company like Jio wants to find all customers whose names contain "Kumar" anywhere, which is an extremely common middle or last name.</p>
    <p>Flipkart wants to find all product names that start with "Samsung" to group them for a brand-specific offer.</p>
    <p>An HR system wants to find all company email addresses, which means all emails ending with the company domain.</p>
    <p>IRCTC wants to find all station names that start with "New" to create a list of stations with that prefix.</p>
    <p>In all these cases, you are not looking for an exact value. You are looking for a pattern. LIKE, combined with wildcard characters, lets you express these pattern-based searches directly in SQL.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>The = operator only checks for exact equality. It is like looking for someone whose name is exactly and precisely "Rahul Kumar Sharma". If their name is stored as "Rahul K. Sharma" or "R. K. Sharma", the = operator will not find them.</p>
    <p>Real-world searches need flexibility. You want to find things that look like what you are searching for, not just things that match exactly character for character.</p>
    <p>LIKE was built into SQL to enable pattern matching. It lets you use wildcard characters to represent unknown or variable parts of a string, giving you a powerful and flexible tool for searching text data.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think about searching your own phone's contact list. When you type "Rah" in the search bar, your phone shows Rahul Verma, Rahesh Jain, Priyanka Rahane, and so on. Your phone is not looking for an exact match to "Rah". It is looking for contacts where "Rah" appears anywhere in the name.</p>
    <p>SQL's LIKE does the same thing for database queries. You tell SQL: "Find me all rows where this column contains this pattern." The wildcards are how you tell SQL which parts of the pattern are fixed and which parts can vary.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Imagine you are searching for an old friend in a wedding guest register. You vaguely remember her name starts with "Neha" but you cannot recall the surname.</p>
    <p>You do not check every single name on every page. You scan for anything that begins with "Neha": Neha Gupta, Neha Verma, Neha S., Neha Agarwal. You use a pattern to guide your search.</p>
    <p>LIKE with wildcards lets you do exactly this in SQL. The % wildcard says "anything can go here," and the _ wildcard says "exactly one character goes here." Together they let you define flexible patterns that match many different values at once.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>LIKE is a comparison operator used in WHERE clauses that matches values based on patterns rather than exact strings.</p>
    <p>It uses two wildcard characters:</p>
    <p>The % (percent) wildcard matches zero or more characters. It can represent nothing, one letter, or a hundred letters. It is the "I do not care what is here" symbol.</p>
    <p>The _ (underscore) wildcard matches exactly one character. Whatever character is in that position, the underscore will match it, but it must be exactly one character, no more and no less.</p>
    <p>You combine LIKE with these wildcards to describe patterns:</p>
    <ul>
      <li>'Rahul%' matches anything that starts with Rahul</li>
      <li>'%Singh' matches anything that ends with Singh</li>
      <li>'%Biryani%' matches anything that contains the word Biryani anywhere</li>
      <li>'A_an' matches four-letter strings starting with A and ending with an, with any one character in between</li>
    </ul>
    <p>Case sensitivity depends on the database. MySQL is generally case-insensitive by default for LIKE. PostgreSQL is case-sensitive. Check your specific database's behaviour.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name LIKE 'pattern';</code></pre>
    <p>The pattern must always be in single quotes. Inside the quotes, you use % and _ where you want flexibility.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Pattern</th><th>What It Matches</th><th>Example Matches</th><th>Does Not Match</th></tr>
      <tr><td>'Rahul%'</td><td>Starts with Rahul</td><td>Rahul Sharma, Rahul K., Rahul</td><td>Singh Rahul</td></tr>
      <tr><td>'%Singh'</td><td>Ends with Singh</td><td>Aman Singh, Gurpreet Singh</td><td>Singh Aman</td></tr>
      <tr><td>'%Biryani%'</td><td>Contains Biryani anywhere</td><td>Hyderabadi Biryani, Biryani Bros</td><td>Pizza House</td></tr>
      <tr><td>'A_an'</td><td>A, then one char, then an</td><td>Aman, Alan</td><td>Ayaan, Aryan</td></tr>
      <tr><td>'____'</td><td>Exactly four characters</td><td>Neha, Ajay, Anil</td><td>Rahul (5 chars)</td></tr>
      <tr><td>'98%'</td><td>Starts with 98</td><td>9876543210, 9812345678</td><td>9712345678</td></tr>
      <tr><td>'%@gmail.com'</td><td>Ends with @gmail.com</td><td>user@gmail.com, priya@gmail.com</td><td>user@yahoo.com</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using a Zomato customers table:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>email</th><th>phone</th><th>city</th></tr>
      <tr><td>7001</td><td>Rahul Sharma</td><td>rahul@gmail.com</td><td>9876543210</td><td>Delhi</td></tr>
      <tr><td>7002</td><td>Priya Singh</td><td>priya.singh@yahoo.com</td><td>9812345678</td><td>Mumbai</td></tr>
      <tr><td>7003</td><td>Aman Kumar</td><td>aman.k@gmail.com</td><td>8800112233</td><td>Bengaluru</td></tr>
      <tr><td>7004</td><td>Neha Gupta</td><td>neha@hotmail.com</td><td>9987654321</td><td>Chennai</td></tr>
      <tr><td>7005</td><td>Rahul Verma</td><td>rahulv@gmail.com</td><td>9900001234</td><td>Hyderabad</td></tr>
    </table>
    <h3>Example 1: Names Starting with 'Rahul'</h3>
    <p>Find all customers whose name starts with Rahul.</p>
    <pre><code class="language-sql">SELECT customer_id, name
FROM customers
WHERE name LIKE 'Rahul%';</code></pre>
    <p>Result: rows 7001 (Rahul Sharma) and 7005 (Rahul Verma). Both start with Rahul.</p>
    <h3>Example 2: Email Addresses Ending with '@gmail.com'</h3>
    <p>Find all customers using Gmail.</p>
    <pre><code class="language-sql">SELECT customer_id, name, email
FROM customers
WHERE email LIKE '%@gmail.com';</code></pre>
    <p>Result: rows 7001, 7003, and 7005. All three emails end with @gmail.com.</p>
    <h3>Example 3: Phone Numbers Starting with '99'</h3>
    <p>Find customers whose phone numbers start with 99. These might be in a specific telecom circle.</p>
    <pre><code class="language-sql">SELECT customer_id, name, phone
FROM customers
WHERE phone LIKE '99%';</code></pre>
    <p>Result: rows 7004 (9987654321) and 7005 (9900001234). Both start with 99.</p>
    <h3>Example 4: Names Containing 'Singh' Anywhere</h3>
    <p>Find all customers with Singh anywhere in their name, useful for targeted regional campaigns.</p>
    <pre><code class="language-sql">SELECT customer_id, name
FROM customers
WHERE name LIKE '%Singh%';</code></pre>
    <p>Result: row 7002 (Priya Singh). Singh appears at the end of the name.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Why does 'Rahul%' match 'Priyanka' if she has no Rahul in her name?"</strong></p>
    <p>It does not. 'Rahul%' only matches strings that start with the letters R-a-h-u-l. Priyanka does not start with Rahul, so it does not match. The % after Rahul means "after these letters, anything can follow," but the starting letters must be exactly Rahul.</p>
    <p><strong>"What is the difference between % and _?"</strong></p>
    <p>The % matches any number of characters, including zero. The _ matches exactly one character. 'A_an' would match "Aman" (four letters, one character between A and an) but not "Ayaan" (five letters, two characters between A and an).</p>
    <p><strong>"Does LIKE work on numbers?"</strong></p>
    <p>Technically yes in most databases, but it is unusual. LIKE is primarily used for text columns. For numbers, comparison operators (=, >, BETWEEN) are more appropriate.</p>
    <p><strong>"Is LIKE case-sensitive?"</strong></p>
    <p>It depends on the database. In MySQL with default settings, LIKE is case-insensitive, meaning 'rahul%' and 'Rahul%' return the same results. In PostgreSQL, LIKE is case-sensitive, but you can use ILIKE for case-insensitive matching. Always test your specific database.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Forgetting single quotes around the pattern. WHERE name LIKE Rahul% will cause an error.</li>
      <li>Using = instead of LIKE for pattern matching. WHERE name = 'Rahul%' will literally look for a customer named "Rahul%" with the percent sign as part of the name, which is almost certainly wrong.</li>
      <li>Forgetting that 'Rahul%' also matches just "Rahul" with nothing after it. The % can match zero characters too.</li>
      <li>Using %pattern% everywhere when it should be pattern% or %pattern. Overly broad patterns return too many results and slow down large queries.</li>
      <li>Assuming LIKE is always case-insensitive. It is not in all databases.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Be as specific as possible with your pattern. Use %pattern% only when you genuinely need to match the value anywhere in the string.</li>
      <li>If you need case-insensitive matching on a case-sensitive database, wrap the column in LOWER() and use a lowercase pattern: WHERE LOWER(name) LIKE 'rahul%'.</li>
      <li>Patterns starting with % (like '%Singh') can be slower on large tables because the database cannot use index optimisations on the column. If performance matters on a large dataset, consult your database administrator.</li>
      <li>Test your patterns on a small sample before running on the full table to make sure you are matching what you expect.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Zomato uses LIKE to search restaurant names: when you type "biryani" in the search bar, the backend runs a query with LIKE '%biryani%' against the restaurant name column.</p>
    <p>IRCTC uses LIKE to search train station names. Typing "New" shows all stations starting with New Delhi, New Jalpaiguri, New Cooch Behar, and so on.</p>
    <p>Flipkart's product search system uses pattern matching to surface products whose names contain the typed keywords.</p>
    <p>Banks use LIKE to search customer names when the full name is not known: a customer service agent might search for all customers with 'Kumar' in their name to find a specific account.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>WILDCARD QUICK REFERENCE:

% = any number of characters (including zero)
_ = exactly one character

PATTERN EXAMPLES:
Pattern          Matches                    Does Not Match
--------         -------                    --------------
'Rahul%'         Rahul, Rahul Sharma        Priya Rahul
'%Singh'         Singh, Aman Singh          Singh Aman
'%Biryani%'      Hyderabadi Biryani         Pizza Palace
'A_an'           Aman, Alan                 Ayaan, An
'____'           Neha, Ajay                 Rahul (5 chars)
'98%'            9876543210                 8876543210
'%@gmail.com'    user@gmail.com             user@yahoo.com

HOW TO CHOOSE YOUR PATTERN:
"starts with X"  --&gt;  'X%'
"ends with X"    --&gt;  '%X'
"contains X"     --&gt;  '%X%'
"exactly N chars"--&gt;  '____' (N underscores)
"X then 1 char then Y" --&gt; 'X_Y'</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>LIKE is used in WHERE clauses to match text values based on patterns.</li>
      <li>% matches any number of characters, including zero characters.</li>
      <li>_ matches exactly one character.</li>
      <li>Use 'pattern%' for starts-with, '%pattern' for ends-with, '%pattern%' for contains.</li>
      <li>Always put your pattern in single quotes.</li>
      <li>Case sensitivity depends on your database. MySQL is case-insensitive by default; PostgreSQL is case-sensitive.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Find all customers from a customers table whose name ends with the letter 'a'.</li>
      <li>From a products table, find all products whose product_code starts with 'IND'.</li>
      <li>From a users table, find all email addresses containing 'flipkart'.</li>
      <li>From an employees table, find all employees whose name is exactly four characters long.</li>
      <li>From a contacts table, find all phone numbers where the third digit is 9 (for example: 98 9XXXXXXX pattern, so the pattern would be '98_9%').</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>LIKE and wildcards unlock a whole new dimension of SQL querying. Before this, you could only search for exact values. Now you can search for patterns, which is how real data searches work in real products.</p>
    <p>Every time you use a search bar on an Indian app, whether it is looking for a restaurant name on Zomato, a train station on IRCTC, or a product on Flipkart, there is a LIKE query running somewhere in the backend to find matching results.</p>
    <p>Understanding this puts you closer to how production systems actually work. And when you write LIKE queries yourself, remember: be specific enough to get useful results, but flexible enough to match the variations in real-world data.</p>
    <p>Priya sent Kiran the three result sets within fifteen minutes. Kiran asked if she had learned about LIKE before joining. She had not. She had just looked it up when she needed it and figured it out.</p>
    <p>That is exactly how good SQL skills develop: one well-timed query at a time.</p>
  `,
  'mod4-t7': `
    <h1>IS NULL and IS NOT NULL: How to Find the Data That Is Missing</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha had been at Zomato for three weeks when her manager, Suresh, gave her what seemed like a simple task.</p>
    <p>"Neha, can you find all customers who have not provided a phone number? We need to send them a reminder to update their profile."</p>
    <p>Neha opened the customers table and looked at it. She could see that some rows had phone numbers and some had empty-looking cells in the phone column. She started typing WHERE phone = '' thinking that would catch the blank ones.</p>
    <p>The query ran. She got some results, but something felt off. She ran a quick count: there were far more customers with missing phones than her query had found. She was missing rows.</p>
    <p>Suresh came back and glanced at her screen. "Are you using IS NULL? You need IS NULL for truly missing values. A blank string and a NULL are very different things."</p>
    <p>That conversation taught Neha one of the most important distinctions in SQL.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Think about any user profile on any Indian app: Swiggy, IRCTC, Flipkart, or PhonePe. When you sign up, you fill in some fields and skip others. Maybe you skipped your alternate phone number. Maybe you never added a middle name. Maybe you left the address line 2 blank.</p>
    <p>In the database, these unfilled fields are not stored as empty strings or zeros. They are stored as NULL.</p>
    <p>NULL is SQL's way of representing the concept "this value is unknown" or "this value was never provided." It is different from zero (which is a real number), different from an empty string (which is a real string of length zero), and different from a space (which is also a real string).</p>
    <p>The problem is: how do you find these truly missing values? If you try WHERE phone = NULL, you get zero results. SQL does not behave the way you would expect. That is what this article is about.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Databases needed a way to represent the absence of data. Not zero, not blank, but genuinely absent, unknown, or not applicable.</p>
    <p>Consider: if a customer has not added a date of birth to their Flipkart account, is their date of birth zero? No. Is it an empty string? No. The concept of a birthdate simply does not exist for that customer in the database. That is NULL.</p>
    <p>The challenge is that NULL does not obey normal comparison rules. In SQL, any comparison involving NULL returns neither true nor false. It returns a special state called unknown. This means WHERE phone = NULL evaluates to unknown for every row, and unknown is treated the same as false, so no rows are returned.</p>
    <p>IS NULL and IS NOT NULL were created specifically to detect NULL values correctly. They are the only reliable way to check for the presence or absence of NULL.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think of NULL as a blank form field that was never filled in. Not zero, not empty, just never touched.</p>
    <p>Now imagine you have a stack of registration forms. Some forms have a phone number written in the phone field. Some have the field completely empty, as if the pen never touched it.</p>
    <p>If you look for forms where phone = "nothing", you are looking for forms where someone wrote the word "nothing." That is different from forms where the field was simply never filled in.</p>
    <p>IS NULL finds the forms where the field was never filled in at all. It looks for true absence, not a specific value.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Imagine a teacher asking students to write their blood group on a form before a sports event. Some students write A+, B+, O-, and so on. Some students leave that field blank because they genuinely do not know their blood group.</p>
    <p>The blank is not zero. It is not "unknown" as text. It is just the absence of a value.</p>
    <p>When the school nurse needs to find which students did not fill in their blood group, she looks for the truly blank fields. IS NULL does exactly this in SQL: it finds the rows where a value was never provided, not rows where the value is zero or an empty string.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>NULL in SQL means the absence of a value. It is not zero, not an empty string, and not any specific value at all.</p>
    <p>IS NULL is the correct way to check if a column contains NULL. It returns true for rows where the column has no value.</p>
    <p>IS NOT NULL is the correct way to check if a column has any value at all. It returns true for rows where the column is not NULL, meaning the column contains something.</p>
    <p>The critical rule: never use = NULL or != NULL. These comparisons always return unknown in SQL because NULL cannot be compared to anything, including itself. NULL = NULL is unknown, not true.</p>
    <p>Think of it this way: if someone says "my height is unknown," you cannot meaningfully ask "is your unknown height equal to five feet eight inches?" The question does not make sense. You can only ask "do you have a known height?" (IS NOT NULL) or "is your height unknown?" (IS NULL).</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Finding rows with NULL in a column:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name IS NULL;</code></pre>
    <p>Finding rows where a column has a value:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column_name IS NOT NULL;</code></pre>
    <p>The common mistake that does not work:</p>
    <pre><code class="language-sql">-- This will NEVER return any rows, even if NULLs exist
SELECT * FROM customers WHERE phone = NULL;

-- Use this instead
SELECT * FROM customers WHERE phone IS NULL;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Notes</th></tr>
      <tr><td>IS NULL</td><td>Checks if a column has no value (is absent)</td><td>Returns rows where the column contains NULL</td></tr>
      <tr><td>IS NOT NULL</td><td>Checks if a column has any value (is present)</td><td>Returns rows where the column is not NULL</td></tr>
      <tr><td>= NULL</td><td>Does NOT work for finding NULL values</td><td>Always evaluates to unknown, never matches</td></tr>
      <tr><td>!= NULL or <> NULL</td><td>Does NOT work for excluding NULL values</td><td>Always evaluates to unknown, never matches</td></tr>
      <tr><td>NULL vs ''</td><td>These are different things</td><td>'' is an empty string (a real value); NULL is no value</td></tr>
      <tr><td>NULL vs 0</td><td>These are different things</td><td>0 is a real number; NULL means no number was provided</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Here is a Swiggy customers table with some missing data:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>phone</th><th>email</th><th>alternate_phone</th></tr>
      <tr><td>8001</td><td>Rahul</td><td>9876543210</td><td>rahul@gmail.com</td><td>NULL</td></tr>
      <tr><td>8002</td><td>Priya</td><td>NULL</td><td>priya@yahoo.com</td><td>9812345678</td></tr>
      <tr><td>8003</td><td>Arjun</td><td>9900112233</td><td>NULL</td><td>NULL</td></tr>
      <tr><td>8004</td><td>Neha</td><td>8800001122</td><td>neha@gmail.com</td><td>9811223344</td></tr>
      <tr><td>8005</td><td>Simran</td><td>NULL</td><td>simran@hotmail.com</td><td>NULL</td></tr>
    </table>
    <h3>Example 1: Find Customers with No Phone Number</h3>
    <p>Suresh wants to find customers who have not provided a phone number at all.</p>
    <pre><code class="language-sql">SELECT customer_id, name
FROM customers
WHERE phone IS NULL;</code></pre>
    <p>Result: rows 8002 (Priya) and 8005 (Simran). Both have NULL in the phone column.</p>
    <h3>Example 2: Find Customers with a Phone Number</h3>
    <p>Find customers who do have a phone number on file.</p>
    <pre><code class="language-sql">SELECT customer_id, name, phone
FROM customers
WHERE phone IS NOT NULL;</code></pre>
    <p>Result: rows 8001 (Rahul), 8003 (Arjun), and 8004 (Neha). All three have a non-NULL phone.</p>
    <h3>Example 3: Find Customers Missing Email</h3>
    <p>Flipkart wants to identify users who have not provided an email address for marketing campaigns.</p>
    <pre><code class="language-sql">SELECT customer_id, name
FROM customers
WHERE email IS NULL;</code></pre>
    <p>Result: row 8003 (Arjun). Only Arjun has no email.</p>
    <h3>Example 4: Find Users with Complete Profiles</h3>
    <p>Find customers who have both a phone AND an email on file. These are the most engaged users.</p>
    <pre><code class="language-sql">SELECT customer_id, name, phone, email
FROM customers
WHERE phone IS NOT NULL AND email IS NOT NULL;</code></pre>
    <p>Result: rows 8001 (Rahul) and 8004 (Neha). Both have both phone and email filled in.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Why does WHERE phone = NULL not work?"</strong></p>
    <p>Because NULL is not a value. NULL means "we do not know what the value is." SQL cannot compare something to "we do not know." The result of any comparison with NULL is unknown, which is treated like false, so no rows are returned. Always use IS NULL.</p>
    <p><strong>"Is NULL the same as an empty string ''?"</strong></p>
    <p>No. An empty string is a real value. It is a string with zero characters. NULL means no value exists at all. WHERE phone = '' finds customers who put an empty string as their phone. WHERE phone IS NULL finds customers who never entered anything in that field.</p>
    <p><strong>"Is NULL the same as zero?"</strong></p>
    <p>No. Zero is a real numeric value. NULL means no value was provided. A customer with zero orders is different from a customer whose order count was never recorded.</p>
    <p><strong>"If I filter WHERE amount != 500, will rows with NULL amount be included?"</strong></p>
    <p>No. When the amount is NULL, the comparison NULL != 500 evaluates to unknown, not true. NULL rows are excluded from the results. If you want to include NULL rows when filtering, you must explicitly add OR amount IS NULL.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using = NULL instead of IS NULL. This is the most common mistake with NULLs in SQL and it returns nothing.</li>
      <li>Assuming that WHERE column != 'something' will include NULL rows. It does not. NULL rows are excluded from all comparisons.</li>
      <li>Treating NULL as the same as zero or empty string. They are fundamentally different.</li>
      <li>Not accounting for NULL when writing NOT IN queries. If your NOT IN list contains a NULL, the entire query returns no rows.</li>
      <li>Using COUNT(<em>) vs COUNT(column). COUNT(</em>) counts all rows including those with NULL. COUNT(column) counts only rows where the column is not NULL.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use IS NULL and IS NOT NULL for NULL comparisons. Never use = NULL.</li>
      <li>When filtering with WHERE column != 'value', remember that NULL rows are silently excluded. Add OR column IS NULL if you want them included.</li>
      <li>Keep your data clean. Encourage consistent use of NULL for missing values rather than placeholder strings like 'NA', 'N/A', 'Unknown', or empty strings. Inconsistent handling makes queries much harder to write.</li>
      <li>Be explicit about NULL handling in reports. If a column can contain NULL, mention it in documentation so downstream users know to expect it.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At banks across India, IS NULL is used to find customers whose PAN card or Aadhaar number is missing for KYC compliance checks.</p>
    <p>Flipkart uses IS NOT NULL to verify that product listings have mandatory fields like price and category before publishing them to the website.</p>
    <p>IRCTC uses IS NULL to identify bookings where the seat number has not yet been assigned, which can happen for waitlisted tickets.</p>
    <p>PhonePe uses IS NULL to find transactions where the beneficiary bank details were not captured correctly, flagging them for manual review.</p>
    <p>HR systems at companies like Infosys use IS NULL to find employees who have not filled in their emergency contact information.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>CUSTOMERS TABLE:
+------+--------+-------------+
| id   | name   | phone       |
+------+--------+-------------+
| 8001 | Rahul  | 9876543210  |
| 8002 | Priya  | NULL        |  &lt;-- no phone provided
| 8003 | Arjun  | 9900112233  |
| 8004 | Neha   | NULL        |  &lt;-- no phone provided
+------+--------+-------------+

WHERE phone IS NULL:
+------+--------+
| 8002 | Priya  |  (phone is absent)
| 8004 | Neha   |  (phone is absent)
+------+--------+

WHERE phone IS NOT NULL:
+------+--------+-------------+
| 8001 | Rahul  | 9876543210  |  (phone exists)
| 8003 | Arjun  | 9900112233  |  (phone exists)
+------+--------+-------------+

THE TRAP - NEVER DO THIS:
WHERE phone = NULL  --&gt; returns 0 rows (NULL cannot equal anything)
WHERE phone != NULL --&gt; returns 0 rows (NULL cannot be compared)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>NULL means a value is absent, unknown, or was never provided. It is not zero and not an empty string.</li>
      <li>Use IS NULL to find rows where a column has no value.</li>
      <li>Use IS NOT NULL to find rows where a column does have a value.</li>
      <li>Never use = NULL or != NULL. These always return zero rows.</li>
      <li>NULL rows are excluded from standard comparison operations. Account for this in your WHERE clauses.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>From a customers table, find all customers who have not provided an email address.</li>
      <li>From a students table, list all students who have not filled in their blood group.</li>
      <li>From a products table at Flipkart, find all products where the price is missing (NULL).</li>
      <li>From a bank_accounts table, show all accounts that DO have a registered mobile number.</li>
      <li>From a train_bookings table, find all bookings where the seat number has not yet been assigned.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>NULL handling is one of those SQL topics that trips up beginners and even experienced developers who have not thought carefully about it.</p>
    <p>The key insight is this: NULL is not a value. It is the absence of a value. Because of that, it cannot be compared with normal equality operators. You need the special IS NULL and IS NOT NULL syntax that SQL provides specifically for this purpose.</p>
    <p>Once this clicks, you will start seeing NULL handling opportunities everywhere in your queries. Whenever you write a WHERE clause that filters on a column that might have missing values, you will remember to ask: "Am I handling NULL correctly here?"</p>
    <p>That level of attention to detail is what separates a careful SQL writer from someone who gets subtly wrong results and does not understand why.</p>
    <p>Neha went back, rewrote her query with IS NULL, and found significantly more customers with missing phone numbers than her first attempt had shown. Suresh was impressed that she caught the discrepancy and fixed it. That kind of data accuracy matters at every company.</p>
  `,
  'mod4-t8': `
    <h1>ORDER BY: Sort Your Results Any Way You Want</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Simran had just started as a data analyst at Zomato. She had learned SELECT and WHERE, and she was feeling confident about her SQL. Then her manager, Deepak, gave her a request that seemed simple but had a catch.</p>
    <p>"Simran, I need a list of all restaurants in Mumbai. Sort them by rating, highest rated first. And if two restaurants have the same rating, sort those alphabetically by name."</p>
    <p>Simran wrote her SELECT query quickly. The results came back. Mumbai restaurants were there. But they were in no particular order, random-looking, impossible to read at a glance. The top-rated restaurant was buried somewhere in the middle.</p>
    <p>"Add ORDER BY," Deepak said, glancing at her screen. "Without it, SQL does not guarantee any particular order."</p>
    <p>That was the moment Simran understood why ORDER BY exists.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Raw data without ordering is like a stack of exam papers that have been shuffled after marking. All the information is there, but finding the top scorers requires scanning every single paper.</p>
    <p>Consider these real situations:</p>
    <p>Flipkart wants to show cheapest products first when a customer sorts by price.</p>
    <p>IRCTC needs to display trains in order of departure time so travellers can find the next available train.</p>
    <p>A bank wants its customer service agents to see the most recent transactions at the top of the account history.</p>
    <p>Byju's wants to see students ranked by their test scores to identify top performers for a scholarship program.</p>
    <p>In all these cases, the data exists in the database but is not in a useful order. ORDER BY is what puts it in the order that makes it actionable.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL tables do not store data in any guaranteed order. When you run a query without ORDER BY, the database can return rows in any order it finds convenient: the order rows were inserted, the order they are stored on disk, the order a particular query plan retrieves them. This order can vary between runs of the same query.</p>
    <p>This is a fundamental property of relational databases. Tables are sets of rows, and sets are inherently unordered.</p>
    <p>For any practical use, though, you almost always care about order. Reports need to be sorted. Rankings need to reflect actual rankings. Historical data needs to be in chronological sequence.</p>
    <p>ORDER BY was designed to let you specify exactly what order you want your results in. The database sorts the results before returning them to you.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think about getting a list of your class's marks back from your teacher. If the teacher hands them out in the order they were corrected, the list is meaningless for understanding performance. But if the teacher sorts them from highest to lowest, you can immediately see who the top performers are and where everyone else stands.</p>
    <p>ORDER BY is your instruction to the database to sort results before delivering them. You choose the column to sort by and the direction: ascending (lowest to highest) or descending (highest to lowest).</p>
    <p>Without ORDER BY, you have all the data but no useful arrangement. With ORDER BY, your results are organised exactly as you need.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Think of a wedding catering team organising the seating arrangement. They have a list of all guests, but the list needs to be organised. The event manager says: "Arrange all guests by table number, and within each table, alphabetically by name."</p>
    <p>That is ORDER BY with multiple columns. Sort by table number first (primary sort), then by name within each table (secondary sort).</p>
    <p>SQL's ORDER BY works exactly like this event manager's instruction: sort by this column primarily, and when there are ties, use this other column as the tiebreaker.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>ORDER BY sorts the result set of a query. It always comes at the end of the query, after WHERE if there is one.</p>
    <p>ASC stands for ascending order: A to Z for text, smallest to largest for numbers, earliest to latest for dates. This is the default order if you do not specify anything.</p>
    <p>DESC stands for descending order: Z to A for text, largest to smallest for numbers, latest to earliest for dates.</p>
    <p>You can sort by multiple columns. The first column is the primary sort. When multiple rows have the same value in the primary sort column, the second column is used to break the tie. And so on for additional columns.</p>
    <p>You can also sort by column position number instead of column name. ORDER BY 2 means sort by whatever the second column in your SELECT list is. This is a shortcut but less readable.</p>
    <p>NULL values in ORDER BY: most databases sort NULL values at the end when ascending, and at the beginning when descending. The exact behaviour depends on your database.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic ORDER BY:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
ORDER BY column_name ASC;</code></pre>
    <p>Descending order:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
ORDER BY column_name DESC;</code></pre>
    <p>Multiple columns:</p>
    <pre><code class="language-sql">SELECT column1, column2, column3
FROM table_name
ORDER BY column1 ASC, column2 DESC;</code></pre>
    <p>With WHERE:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column_name DESC;</code></pre>
    <p>By column position:</p>
    <pre><code class="language-sql">SELECT name, rating, city
FROM restaurants
ORDER BY 2 DESC;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>ORDER BY</td><td>Keyword that starts the sort specification</td><td>ORDER BY</td></tr>
      <tr><td>column_name</td><td>The column whose values determine the sort order</td><td>rating</td></tr>
      <tr><td>ASC</td><td>Sort ascending: A-Z, 0-9, earliest-latest. This is the default</td><td>ORDER BY rating ASC</td></tr>
      <tr><td>DESC</td><td>Sort descending: Z-A, 9-0, latest-earliest</td><td>ORDER BY rating DESC</td></tr>
      <tr><td>Multiple columns</td><td>Primary sort, then tiebreaker sort. Comma-separated</td><td>ORDER BY city ASC, amount DESC</td></tr>
      <tr><td>Column position</td><td>Sort by the Nth column in your SELECT list</td><td>ORDER BY 2 DESC</td></tr>
      <tr><td>Default</td><td>If you omit ASC or DESC, SQL uses ASC</td><td>ORDER BY name means ORDER BY name ASC</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Here is a sample Zomato restaurants table:</p>
    <table>
      <tr><th>rest_id</th><th>name</th><th>city</th><th>rating</th><th>avg_price</th></tr>
      <tr><td>9001</td><td>Paradise Biryani</td><td>Hyderabad</td><td>4.7</td><td>350</td></tr>
      <tr><td>9002</td><td>Cafe Coffee Day</td><td>Mumbai</td><td>3.9</td><td>200</td></tr>
      <tr><td>9003</td><td>Delhi Dhaba</td><td>Delhi</td><td>4.2</td><td>280</td></tr>
      <tr><td>9004</td><td>Mainland China</td><td>Mumbai</td><td>4.5</td><td>1200</td></tr>
      <tr><td>9005</td><td>Saravana Bhavan</td><td>Chennai</td><td>4.6</td><td>180</td></tr>
      <tr><td>9006</td><td>Barbeque Nation</td><td>Delhi</td><td>4.5</td><td>900</td></tr>
    </table>
    <h3>Example 1: Sort by Rating, Highest First</h3>
    <p>Show all restaurants ordered by their rating from best to worst.</p>
    <pre><code class="language-sql">SELECT name, city, rating
FROM restaurants
ORDER BY rating DESC;</code></pre>
    <p>Result order: Paradise Biryani (4.7), Saravana Bhavan (4.6), Mainland China (4.5), Barbeque Nation (4.5), Delhi Dhaba (4.2), Cafe Coffee Day (3.9).</p>
    <h3>Example 2: Sort by Average Price, Lowest First</h3>
    <p>Show restaurants ordered by price so budget diners can see the cheapest options first.</p>
    <pre><code class="language-sql">SELECT name, city, avg_price
FROM restaurants
ORDER BY avg_price ASC;</code></pre>
    <p>Result order: Saravana Bhavan (180), Cafe Coffee Day (200), Delhi Dhaba (280), Paradise Biryani (350), Barbeque Nation (900), Mainland China (1200).</p>
    <h3>Example 3: Multiple Column Sort</h3>
    <p>Show Mumbai restaurants sorted by rating descending, and for restaurants with the same rating, sorted by price ascending.</p>
    <pre><code class="language-sql">SELECT name, city, rating, avg_price
FROM restaurants
WHERE city = 'Mumbai'
ORDER BY rating DESC, avg_price ASC;</code></pre>
    <p>Mainland China and Barbeque Nation both have 4.5 rating, so the secondary sort by avg_price determines their order. Barbeque Nation (900) would not appear in this result since it is in Delhi, but the concept is illustrated: ties in the first sort key are broken by the second.</p>
    <h3>Example 4: Sort by Date for Latest Orders First</h3>
    <p>IRCTC wants to display booking history with the most recent bookings at the top.</p>
    <pre><code class="language-sql">SELECT booking_id, passenger_name, journey_date, booking_date
FROM train_bookings
ORDER BY booking_date DESC;</code></pre>
    <p>The most recently made booking appears first, which is what customers expect when they view their booking history.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"If I do not use ORDER BY, will SQL always return data in the same order?"</strong></p>
    <p>No, and this is very important to understand. SQL makes no guarantee about the order of results unless you use ORDER BY. The order might look consistent during testing but change as the table grows, as the database optimises queries differently, or as records are updated and deleted. Never rely on default order.</p>
    <p><strong>"What happens when two rows have the same value in my ORDER BY column?"</strong></p>
    <p>Without a second column in ORDER BY, the order of tied rows is undefined. They will appear in some order, but it is not predictable. Add a second sort column to make ties deterministic.</p>
    <p><strong>"Can I sort by a column that is not in my SELECT list?"</strong></p>
    <p>Yes. You can sort by any column in the table, even if you did not include it in SELECT. However, it can be confusing to sort by a column whose values are not visible in the results.</p>
    <p><strong>"Does ASC or DESC apply to the whole ORDER BY, or just one column?"</strong></p>
    <p>It applies per column. ORDER BY city ASC, amount DESC means sort city ascending AND sort amount descending within ties. Each column has its own direction.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Not using ORDER BY and then being confused why results appear in random order.</li>
      <li>Forgetting that ASC is the default. ORDER BY column and ORDER BY column ASC are identical.</li>
      <li>Using ORDER BY without a secondary sort for tied values, leading to non-deterministic ordering of tied rows.</li>
      <li>Sorting by a calculated expression incorrectly. If you select price * quantity and want to sort by it, reference the alias in ORDER BY.</li>
      <li>Confusing ASC and DESC. If you wanted the highest first but got lowest first, you used ASC when you meant DESC.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use ORDER BY when the order of results matters for your report or application. Never assume a default order.</li>
      <li>Be explicit: always write ASC or DESC even though ASC is the default. It makes your intent clear to anyone reading the query.</li>
      <li>Use multiple sort columns to handle ties deterministically. A common pattern is to add a unique column like ID as the final tiebreaker.</li>
      <li>When combining ORDER BY with LIMIT (to get top N results), ORDER BY must come before LIMIT.</li>
      <li>Keep your primary sort column as the most important dimension. Secondary and tertiary columns are tiebreakers.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Swiggy sorts restaurants by a combination of rating, distance, and delivery time depending on user preferences. When you select "sort by rating" in the app, the backend runs an ORDER BY rating DESC query.</p>
    <p>Flipkart's search results use ORDER BY to implement "sort by price: low to high" and "sort by relevance" options that customers see on every search page.</p>
    <p>IRCTC displays train schedules using ORDER BY departure_time ASC so travellers see the earliest trains first.</p>
    <p>Banks display statement history with ORDER BY transaction_date DESC so the most recent transactions appear at the top, which is what customers expect.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>UNSORTED DATA:
+------------------+---------+--------+
| name             | city    | rating |
+------------------+---------+--------+
| Delhi Dhaba      | Delhi   | 4.2    |
| Paradise Biryani | Hyderabad| 4.7   |
| Cafe Coffee Day  | Mumbai  | 3.9    |
| Saravana Bhavan  | Chennai | 4.6    |
+------------------+---------+--------+

ORDER BY rating DESC (highest first):
+------------------+---------+--------+
| Paradise Biryani | Hyderabad| 4.7   |
| Saravana Bhavan  | Chennai | 4.6    |
| Delhi Dhaba      | Delhi   | 4.2    |
| Cafe Coffee Day  | Mumbai  | 3.9    |
+------------------+---------+--------+

ORDER BY rating ASC (lowest first):
+------------------+---------+--------+
| Cafe Coffee Day  | Mumbai  | 3.9    |
| Delhi Dhaba      | Delhi   | 4.2    |
| Saravana Bhavan  | Chennai | 4.6    |
| Paradise Biryani | Hyderabad| 4.7   |
+------------------+---------+--------+

Multiple columns: ORDER BY city ASC, rating DESC
(Sort by city alphabetically, then by rating within each city)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>ORDER BY sorts the query results before returning them.</li>
      <li>ASC: ascending order (A-Z, 0-9, oldest-newest). This is the default.</li>
      <li>DESC: descending order (Z-A, 9-0, newest-oldest).</li>
      <li>Multiple columns: ORDER BY col1 ASC, col2 DESC sorts by col1 first, uses col2 as tiebreaker.</li>
      <li>SQL does not guarantee any order without ORDER BY. Always use it when order matters.</li>
      <li>ORDER BY comes at the end of the query, after WHERE.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>From a students table, write a query to list all students sorted by marks from highest to lowest.</li>
      <li>From a train_schedules table, show all trains sorted by departure_time earliest first.</li>
      <li>From a products table, list Flipkart products sorted by price ascending, then by product_name alphabetically.</li>
      <li>From a bank_transactions table, show all transactions for account number '1234567890' sorted by transaction_date descending (most recent first).</li>
      <li>From a restaurant table, show restaurants in Delhi sorted by rating descending, and where ratings are equal, sorted by avg_delivery_time ascending.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>ORDER BY might seem like a simple finishing touch, but it is one of the most important parts of writing queries that produce genuinely useful output.</p>
    <p>Data without order is difficult to interpret. A ranked list, a chronological history, a price comparison: all of these need ORDER BY to be meaningful. And because SQL makes no guarantees about order without it, the lesson is simple: if order matters to you, always specify ORDER BY.</p>
    <p>Deepak added one more insight when Simran submitted her final query: "A query that gives you the right data in the right order is always more valuable than one that just gives you the right data."</p>
    <p>She never forgot that.</p>
  `,
  'mod4-t9': `
    <h1>LIMIT and TOP: Stop SQL From Returning Thousands of Rows at Once</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Arjun had just joined Flipkart as a data analyst. On his fourth day, his team lead, Ananya, gave him what sounded like the simplest possible task.</p>
    <p>"Get me the five most recent orders from Bengaluru. Just five. We need to do a spot check."</p>
    <p>Arjun wrote his SELECT query. He added a WHERE clause to filter for Bengaluru. He added an ORDER BY clause to sort by date descending. And then he pressed Run.</p>
    <p>A hundred and thirty thousand rows scrolled across his screen. His laptop fan kicked into overdrive. The result took eight seconds to load.</p>
    <p>"Did you add LIMIT?" Ananya asked, not looking up from her own screen.</p>
    <p>Arjun stared at the query. He had not. He did not know what LIMIT was.</p>
    <p>Sixty seconds later, after adding LIMIT 5, his query returned five rows in under a second. That was the moment he understood why LIMIT exists.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Databases at Indian companies are enormous. Flipkart processes millions of orders a month. Swiggy has tens of millions of users. IRCTC handles hundreds of thousands of bookings daily.</p>
    <p>When you query these systems, you almost never need all the data. You need a slice of it. You need the most recent ten transactions. You need the top five customers by order value. You need the first page of search results.</p>
    <p>If every query returned all matching rows regardless of how many there are, the following problems occur: the query is slow, the result is too large to scroll through meaningfully, it consumes unnecessary memory and network bandwidth, and the application or dashboard that displays the data becomes sluggish.</p>
    <p>LIMIT (and its SQL Server equivalent, TOP) solves all of these by letting you specify the maximum number of rows you want returned.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL's default behaviour is to return all rows that match your conditions. This is logically correct but practically overwhelming when you are working with large datasets.</p>
    <p>The need for row-count limiting comes up in three common scenarios. First, you want the "top N" something: top 10 customers, top 5 products, top 3 cities. Second, you are building a paginated interface where you show results ten or twenty at a time. Third, you are sampling or testing a query and want to see a few rows without waiting for millions.</p>
    <p>Different databases implemented this feature with slightly different syntax. MySQL, PostgreSQL, and SQLite use LIMIT, which comes at the end of the query. SQL Server uses TOP, which comes right after SELECT. Both accomplish the same goal.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you ask a waiter at a restaurant for "the menu." If he brings you every single item ever available including seasonal specials and discontinued items, you would be overwhelmed. You just wanted today's top dishes.</p>
    <p>LIMIT is your instruction to the waiter: "Bring me the top five items, not the whole archive."</p>
    <p>It does not change the menu. It does not delete any dishes. It simply restricts how much is served to you right now.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Think about how Instagram works. When you open the app, you do not see every single post from every account you follow since the beginning of time. You see the most recent 20 posts. When you scroll to the bottom, it loads 20 more.</p>
    <p>That is LIMIT with OFFSET in action. The app asks for 20 posts (LIMIT 20), then the next 20 (LIMIT 20 OFFSET 20), then the next (LIMIT 20 OFFSET 40), and so on. This is called pagination, and it is how every large-scale application handles large datasets.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>LIMIT restricts the number of rows returned by a query. You specify a number, and the database returns at most that many rows.</p>
    <p>TOP does the same thing in SQL Server, but the syntax places it differently: after SELECT and before the column list, instead of at the end of the query.</p>
    <p>LIMIT with OFFSET is a powerful extension for pagination. OFFSET tells the database how many rows to skip before starting to count. LIMIT 10 OFFSET 20 means: skip the first 20 rows, then give me the next 10. This gives you rows 21 through 30, which would be "page 3" if you were paginating with 10 rows per page.</p>
    <p>LIMIT only controls how many rows you get back. It does not change the table. It does not delete rows. The data is all still there.</p>
    <p>An important detail: LIMIT alone, without ORDER BY, returns an unpredictable set of rows. If you want the "top 5" by any meaningful measure, you must combine LIMIT with ORDER BY.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>MySQL, PostgreSQL, SQLite (LIMIT at the end):</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column_name DESC
LIMIT number_of_rows;</code></pre>
    <p>SQL Server (TOP after SELECT):</p>
    <pre><code class="language-sql">SELECT TOP number_of_rows column1, column2
FROM table_name
WHERE condition
ORDER BY column_name DESC;</code></pre>
    <p>LIMIT with OFFSET for pagination (MySQL/PostgreSQL):</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
ORDER BY column_name
LIMIT 10 OFFSET 20;</code></pre>
    <p>This skips 20 rows and returns the next 10.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Database</th><th>Keyword</th><th>Placement</th><th>Example</th></tr>
      <tr><td>MySQL</td><td>LIMIT n</td><td>End of query, after ORDER BY</td><td>SELECT * FROM orders LIMIT 5;</td></tr>
      <tr><td>PostgreSQL</td><td>LIMIT n</td><td>End of query, after ORDER BY</td><td>SELECT * FROM orders LIMIT 5;</td></tr>
      <tr><td>SQLite</td><td>LIMIT n</td><td>End of query, after ORDER BY</td><td>SELECT * FROM orders LIMIT 5;</td></tr>
      <tr><td>SQL Server</td><td>TOP n</td><td>After SELECT, before columns</td><td>SELECT TOP 5 * FROM orders;</td></tr>
      <tr><td>MySQL/PG OFFSET</td><td>LIMIT n OFFSET m</td><td>Skip m rows, then return n</td><td>LIMIT 10 OFFSET 20</td></tr>
      <tr><td>SQL Server OFFSET</td><td>OFFSET m ROWS FETCH NEXT n ROWS ONLY</td><td>After ORDER BY</td><td>ORDER BY id OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using a Flipkart orders table:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>amount</th><th>order_date</th></tr>
      <tr><td>10001</td><td>Rahul</td><td>Bengaluru</td><td>1200</td><td>2024-07-15</td></tr>
      <tr><td>10002</td><td>Priya</td><td>Bengaluru</td><td>650</td><td>2024-07-14</td></tr>
      <tr><td>10003</td><td>Arjun</td><td>Bengaluru</td><td>2400</td><td>2024-07-13</td></tr>
      <tr><td>10004</td><td>Neha</td><td>Bengaluru</td><td>890</td><td>2024-07-12</td></tr>
      <tr><td>10005</td><td>Simran</td><td>Bengaluru</td><td>450</td><td>2024-07-11</td></tr>
      <tr><td>10006</td><td>Vikram</td><td>Bengaluru</td><td>3100</td><td>2024-07-10</td></tr>
    </table>
    <h3>Example 1: Get the 3 Most Recent Orders from Bengaluru</h3>
    <p>Ananya's original request, now answered correctly.</p>
    <pre><code class="language-sql">SELECT order_id, customer_name, amount, order_date
FROM orders
WHERE city = 'Bengaluru'
ORDER BY order_date DESC
LIMIT 3;</code></pre>
    <p>Result: rows 10001, 10002, 10003 (the three most recent dates).</p>
    <h3>Example 2: Top 5 Customers by Order Amount</h3>
    <p>Swiggy wants to identify its top 5 highest-spending customers for a loyalty reward.</p>
    <pre><code class="language-sql">SELECT customer_name, amount
FROM orders
ORDER BY amount DESC
LIMIT 5;</code></pre>
    <p>Returns the 5 rows with the highest amounts.</p>
    <h3>Example 3: SQL Server: Top 5 Most Recent Transactions (SBI)</h3>
    <p>For a bank running SQL Server, show the last 5 transactions for an account.</p>
    <pre><code class="language-sql">SELECT TOP 5 transaction_id, amount, transaction_date
FROM transactions
WHERE account_number = '9876543210'
ORDER BY transaction_date DESC;</code></pre>
    <h3>Example 4: Pagination with LIMIT and OFFSET</h3>
    <p>An e-commerce app shows 10 products per page. This query gets page 3 (rows 21 through 30).</p>
    <pre><code class="language-sql">SELECT product_id, product_name, price
FROM products
ORDER BY product_name ASC
LIMIT 10 OFFSET 20;</code></pre>
    <p>OFFSET 20 skips the first 20 rows (pages 1 and 2). LIMIT 10 then returns the next 10 (page 3). To get page 4, change OFFSET to 30. This is how every paginated app loads data.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Does LIMIT delete data from the table?"</strong></p>
    <p>No. LIMIT only affects the result set that is returned to you. The full table with all its rows remains completely unchanged. You are just asking for a preview.</p>
    <p><strong>"What does LIMIT without ORDER BY do?"</strong></p>
    <p>It returns an unpredictable set of rows. The database may return any rows it finds first, which could vary between runs. LIMIT without ORDER BY is useful only for quick sampling when you do not care which specific rows you get.</p>
    <p><strong>"Can I use both LIMIT and TOP in the same query?"</strong></p>
    <p>No. Use LIMIT for MySQL, PostgreSQL, and SQLite. Use TOP for SQL Server. They serve the same purpose but in different database systems.</p>
    <p><strong>"What is OFFSET used for?"</strong></p>
    <p>OFFSET skips a specified number of rows before starting to return results. It is the mechanism behind pagination. LIMIT 10 OFFSET 0 is the first page, LIMIT 10 OFFSET 10 is the second page, and so on.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using LIMIT without ORDER BY when you want "top" results. Without ORDER BY, LIMIT returns unpredictable rows.</li>
      <li>Using LIMIT in SQL Server where TOP is required.</li>
      <li>Placing LIMIT before WHERE or ORDER BY in MySQL. LIMIT must come at the very end.</li>
      <li>Starting OFFSET from 1 instead of 0. The first row is at offset 0, so the first page is LIMIT 10 OFFSET 0.</li>
      <li>Assuming LIMIT changes the data permanently. It never does.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always pair LIMIT or TOP with ORDER BY when you want the "top" or "most recent" results. The combination gives you meaningful, deterministic results.</li>
      <li>Use LIMIT when exploring new tables. Running SELECT * FROM large_table LIMIT 10 lets you preview the data without loading millions of rows.</li>
      <li>For paginated applications, calculate OFFSET as: (page_number - 1) * rows_per_page.</li>
      <li>In production dashboards, always use LIMIT to prevent slow queries from loading too much data at once.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Flipkart uses LIMIT extensively in its product search: every search result page loads a specific number of products, not the entire catalogue.</p>
    <p>Swiggy's restaurant listing uses LIMIT with ORDER BY to show the top nearby restaurants sorted by rating and distance.</p>
    <p>Bank mobile apps use LIMIT to show the last 10 transactions in the statement view. Loading all transactions since the account was opened would be impractical.</p>
    <p>Byju's uses LIMIT to display the top 5 recommended courses on a student's home screen based on their learning history.</p>
    <p>IRCTC uses LIMIT to show the first 10 available trains on any route search, with options to show more if needed.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>WITHOUT LIMIT:
Query: SELECT * FROM orders WHERE city = 'Bengaluru'
Result: 1,30,000 rows --&gt; overwhelmed, slow, unusable

WITH LIMIT:
Query: SELECT * FROM orders WHERE city = 'Bengaluru' ORDER BY order_date DESC LIMIT 5
Result: 5 rows --&gt; fast, focused, actionable

PAGINATION WITH LIMIT + OFFSET:
Page 1: LIMIT 10 OFFSET 0   --&gt; rows 1-10
Page 2: LIMIT 10 OFFSET 10  --&gt; rows 11-20
Page 3: LIMIT 10 OFFSET 20  --&gt; rows 21-30
Page 4: LIMIT 10 OFFSET 30  --&gt; rows 31-40

MYSQL/POSTGRESQL:
SELECT * FROM orders ORDER BY amount DESC LIMIT 5;
                                               ^^^^^ at the end

SQL SERVER:
SELECT TOP 5 * FROM orders ORDER BY amount DESC;
         ^^^^^ right after SELECT</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>LIMIT restricts the number of rows returned. It does not change the table.</li>
      <li>LIMIT n goes at the end of the query in MySQL, PostgreSQL, and SQLite.</li>
      <li>TOP n goes right after SELECT in SQL Server.</li>
      <li>Always combine LIMIT/TOP with ORDER BY for meaningful "top N" results.</li>
      <li>LIMIT with OFFSET enables pagination: LIMIT 10 OFFSET 20 skips 20 rows and returns the next 10.</li>
      <li>LIMIT is excellent for exploring large tables with a quick preview.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to get the 10 most recently registered users from a users table.</li>
      <li>From a products table, show the 5 cheapest products by price.</li>
      <li>In SQL Server syntax, show the top 3 highest-value transactions from a transactions table.</li>
      <li>Write a pagination query to get the third page of results from an orders table, showing 15 orders per page, sorted by order_date ascending.</li>
      <li>From a students table, find the top 5 students by marks, then write the query again to get the next 5 (ranks 6 through 10).</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>LIMIT and TOP are small additions to your SQL toolkit that have an outsized impact on query performance and usability.</p>
    <p>Every well-built application that works with a database uses limiting to control how much data is fetched at once. Infinite scrolling, paginated search results, "top 10" lists, recent activity feeds: all of these are powered by LIMIT with ORDER BY under the hood.</p>
    <p>When you start applying this in your own queries, you will immediately notice that queries run faster, results are easier to read, and your colleagues will notice that your queries are thoughtfully written. That matters more than beginners usually realise.</p>
    <p>Arjun's five-row query ran in under a second. Ananya spotted the four rows she needed for the spot check and sent him a message: "Good work." That is what focused, efficient SQL looks like.</p>
  `,
  'mod4-t10': `
    <h1>DISTINCT: Remove Duplicates and Get Only Unique Values</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Priya had been at Swiggy for six weeks when her manager, Aditya, called her over for a quick data request.</p>
    <p>"Priya, I need a simple list of all the cities we delivered to last week. Just the city names, one per city, no repeats."</p>
    <p>Priya wrote a SELECT query for the orders table. She added a WHERE clause for last week's dates. She ran it. The result came back with 87,000 rows. Cities repeating endlessly: Mumbai, Mumbai, Delhi, Mumbai, Bengaluru, Chennai, Delhi, Mumbai...</p>
    <p>"This is all 87,000 orders," she said, frowning. "I need just the unique cities."</p>
    <p>Aditya nodded. "Add DISTINCT."</p>
    <p>Two seconds later, Priya had a clean list of 23 city names. That was it.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>In relational databases, repetition is normal. Every order from Mumbai adds another Mumbai to the city column. Every UPI payment adds another UPI to the payment_mode column. This is by design: each row records a real event, and many events share the same attribute values.</p>
    <p>But when you need to understand the scope of your data, repetition becomes noise. You do not want to know "how many orders had Mumbai" when you are just trying to build a list of all cities you serve. You want the unique values.</p>
    <p>Consider these practical needs:</p>
    <p>Zomato needs a list of all unique cuisine types in their restaurant database to populate a search filter.</p>
    <p>Flipkart needs all unique brand names that appeared in orders this month for a brand performance report.</p>
    <p>IRCTC needs all unique routes (source-destination pairs) that were booked during holiday season.</p>
    <p>PhonePe needs all unique bank names used for UPI transactions to audit partner coverage.</p>
    <p>In every case, duplicates are noise. DISTINCT removes them.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SELECT retrieves data row by row. If ten thousand orders came from Mumbai, SELECT city FROM orders returns "Mumbai" ten thousand times.</p>
    <p>You could use GROUP BY to collapse duplicates, but that is for aggregation (counting, summing, averaging). When you just want the unique values themselves without any calculations, that is overkill.</p>
    <p>DISTINCT was added to SQL as a clean, simple way to say: "return each unique value only once." No aggregation needed. No GROUP BY needed. Just deduplicate the output.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you have a bag filled with coloured marbles. Some colours appear many times: ten red, five blue, three green, eight yellow, two red again.</p>
    <p>Your friend asks: "What colours do you have?"</p>
    <p>You do not count them out one by one. You just look through the bag and say: "Red, blue, green, yellow." Four colours, listed once each.</p>
    <p>DISTINCT does exactly this for your query results. It looks through all the rows, finds each unique value, and returns each value exactly once.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Think about a cricket broadcast showing all the players who batted in a match. If a player batted in multiple innings or had multiple balls recorded, their name appears many times in the raw data.</p>
    <p>But the broadcast just wants to show which players participated. Not how many times each entry appears, just who the unique players were.</p>
    <p>DISTINCT is like the scoreboard operator who goes through the full ball-by-ball record and pulls out one entry per player.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>DISTINCT removes duplicate rows from query results. It goes right after the SELECT keyword, before the column list.</p>
    <p>When you use DISTINCT on a single column, it returns each unique value in that column exactly once.</p>
    <p>When you use DISTINCT on multiple columns, it returns each unique combination of those columns exactly once. "Delhi, UPI" and "Delhi, Card" are two different combinations and will both appear even if each occurs thousands of times. But if "Delhi, UPI" occurs five thousand times, it will appear just once.</p>
    <p>DISTINCT is not the same as GROUP BY. GROUP BY is used when you want to perform aggregation (counting rows, summing amounts, etc.) within groups. DISTINCT is used when you just want the unique values themselves with no aggregation.</p>
    <p>COUNT(DISTINCT column) is a special usage that counts how many unique values exist in a column. For example: "How many distinct cities placed orders this month?"</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Single column DISTINCT:</p>
    <pre><code class="language-sql">SELECT DISTINCT column_name
FROM table_name;</code></pre>
    <p>Multiple column DISTINCT:</p>
    <pre><code class="language-sql">SELECT DISTINCT column1, column2
FROM table_name;</code></pre>
    <p>DISTINCT with WHERE:</p>
    <pre><code class="language-sql">SELECT DISTINCT city
FROM orders
WHERE order_date &gt;= '2024-07-01';</code></pre>
    <p>COUNT of distinct values:</p>
    <pre><code class="language-sql">SELECT COUNT(DISTINCT city)
FROM orders;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>SELECT DISTINCT</td><td>Keyword pair that deduplicates results</td><td>SELECT DISTINCT</td></tr>
      <tr><td>column_name</td><td>The column to get unique values from</td><td>city</td></tr>
      <tr><td>Multiple columns</td><td>DISTINCT applies to the combination of all listed columns</td><td>DISTINCT city, payment_mode</td></tr>
      <tr><td>WHERE + DISTINCT</td><td>Filter rows first, then deduplicate</td><td>WHERE city = 'Delhi' --> then DISTINCT on payment_mode</td></tr>
      <tr><td>COUNT(DISTINCT col)</td><td>Count how many unique values exist</td><td>COUNT(DISTINCT city)</td></tr>
      <tr><td>DISTINCT vs GROUP BY</td><td>DISTINCT: just unique rows. GROUP BY: unique groups for aggregation.</td><td>Use DISTINCT when no aggregation needed</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Here is a sample Swiggy orders table:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>city</th><th>payment_mode</th><th>cuisine</th></tr>
      <tr><td>11001</td><td>Rahul</td><td>Mumbai</td><td>UPI</td><td>Chinese</td></tr>
      <tr><td>11002</td><td>Priya</td><td>Delhi</td><td>Card</td><td>North Indian</td></tr>
      <tr><td>11003</td><td>Arjun</td><td>Mumbai</td><td>UPI</td><td>Chinese</td></tr>
      <tr><td>11004</td><td>Neha</td><td>Bengaluru</td><td>Cash</td><td>South Indian</td></tr>
      <tr><td>11005</td><td>Simran</td><td>Delhi</td><td>Card</td><td>North Indian</td></tr>
      <tr><td>11006</td><td>Vikram</td><td>Mumbai</td><td>Cash</td><td>Chinese</td></tr>
    </table>
    <h3>Example 1: All Unique Cities</h3>
    <p>Find every unique city Swiggy delivered to.</p>
    <pre><code class="language-sql">SELECT DISTINCT city
FROM orders;</code></pre>
    <p>Result: Mumbai, Delhi, Bengaluru. Three unique cities, even though Mumbai appears three times and Delhi appears twice in the original data.</p>
    <h3>Example 2: All Unique Payment Modes</h3>
    <p>Find all the payment methods customers used.</p>
    <pre><code class="language-sql">SELECT DISTINCT payment_mode
FROM orders;</code></pre>
    <p>Result: UPI, Card, Cash. Three unique modes.</p>
    <h3>Example 3: Unique City and Cuisine Combinations</h3>
    <p>Which cuisines were ordered in which cities? Each city-cuisine combination appears once.</p>
    <pre><code class="language-sql">SELECT DISTINCT city, cuisine
FROM orders;</code></pre>
    <p>Result: Mumbai/Chinese, Delhi/North Indian, Bengaluru/South Indian. Even though Mumbai/Chinese appears in rows 11001, 11003, and 11006, it appears in the output only once.</p>
    <h3>Example 4: Count of Distinct Cities</h3>
    <p>How many unique cities does Swiggy serve?</p>
    <pre><code class="language-sql">SELECT COUNT(DISTINCT city)
FROM orders;</code></pre>
    <p>Result: 3. This tells you there are 3 distinct cities in the table without listing them.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"I used DISTINCT on two columns but I am still seeing what looks like duplicates."</strong></p>
    <p>When DISTINCT is applied to multiple columns, uniqueness is based on the combination of all listed columns. "Mumbai, UPI" and "Mumbai, Cash" are different combinations and both appear. They are not duplicates from SQL's perspective.</p>
    <p><strong>"Is DISTINCT the same as GROUP BY?"</strong></p>
    <p>Not quite. SELECT DISTINCT city FROM orders is similar to SELECT city FROM orders GROUP BY city in that both return unique city values. But GROUP BY is the right choice when you want aggregations (COUNT, SUM, etc.) per group. For just getting unique values, DISTINCT is simpler and clearer.</p>
    <p><strong>"Does DISTINCT apply to all columns or just the first one?"</strong></p>
    <p>DISTINCT applies to the entire row that is returned. If you write SELECT DISTINCT city, payment_mode, uniqueness is based on the combination of both columns, not just city.</p>
    <p><strong>"Will DISTINCT handle NULL values?"</strong></p>
    <p>Yes. If multiple rows have NULL in the column, DISTINCT treats all NULLs as the same value and includes NULL only once in the results.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using DISTINCT when GROUP BY with aggregation is what you actually need. If you want to count how many orders per city, use GROUP BY, not DISTINCT.</li>
      <li>Expecting DISTINCT on two columns to mean "distinct for each column independently." It means distinct combinations.</li>
      <li>Not noticing that two "identical" values are actually different due to trailing spaces or different capitalisation. "Delhi " and "Delhi" are not the same string. Clean your data if needed.</li>
      <li>Using SELECT DISTINCT * when the table has a unique ID column. Every row will already be distinct because of the ID column, making DISTINCT pointless.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use DISTINCT only when you genuinely need to remove duplicates from your result. It adds processing overhead on large tables.</li>
      <li>If performance is a concern on very large tables, be aware that DISTINCT requires the database to sort or hash the results to find duplicates. For very large datasets, this can be slow.</li>
      <li>Use COUNT(DISTINCT column) to quickly understand how many unique values exist in a column, which is useful for data profiling.</li>
      <li>Do not confuse DISTINCT with a data quality fix. If duplicates exist in your source data when they should not, the real fix is cleaning the source, not just querying with DISTINCT.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Ola uses DISTINCT to determine which unique pickup locations have been used in the past month to plan driver deployment.</p>
    <p>Flipkart uses COUNT(DISTINCT customer_id) to measure unique customers who made purchases during a sale event, not just the number of orders.</p>
    <p>IRCTC uses DISTINCT on route combinations to build their master list of available routes for the route search feature.</p>
    <p>Banks use DISTINCT on beneficiary accounts to understand how many unique payees a customer has added, which is relevant for fraud detection.</p>
    <p>Byju's uses DISTINCT on course IDs to find how many unique courses a student has accessed, giving a measure of learning breadth.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>ORIGINAL CITY COLUMN (87,000 rows example):
Mumbai
Delhi
Mumbai
Bengaluru
Mumbai
Chennai
Delhi
Mumbai
...

SELECT DISTINCT city FROM orders:

Mumbai
Delhi
Bengaluru
Chennai

Only 4 rows. Each unique value appears exactly once.

DISTINCT ON MULTIPLE COLUMNS:
city      + payment_mode = unique combination
---------   ------------   -----------------
Mumbai      UPI            Mumbai/UPI   &lt;-- unique
Mumbai      Card           Mumbai/Card  &lt;-- unique (different combo)
Delhi       UPI            Delhi/UPI    &lt;-- unique
Mumbai      UPI            same as first --&gt; removed by DISTINCT

COUNT(DISTINCT city) = 4 (just the count, not the list)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>DISTINCT removes duplicate rows from query results.</li>
      <li>Use SELECT DISTINCT column FROM table to get unique values in one column.</li>
      <li>DISTINCT on multiple columns returns unique combinations of all listed columns.</li>
      <li>COUNT(DISTINCT column) counts how many distinct values exist in a column.</li>
      <li>DISTINCT is not the same as GROUP BY. Use DISTINCT for unique values, GROUP BY for aggregations.</li>
      <li>NULL values: DISTINCT treats all NULLs as the same and shows NULL only once.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>From a students table, find all unique branch names (CSE, ECE, MBA, etc.).</li>
      <li>From a transactions table, list all distinct payment modes used by customers.</li>
      <li>From a movie_bookings table, find all unique languages of movies booked in 2024.</li>
      <li>From a food_orders table, find all unique city-cuisine combinations ordered in July.</li>
      <li>From a sales table, use COUNT(DISTINCT customer_id) to find how many unique customers made a purchase this quarter.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>DISTINCT is one of those tools that you will reach for constantly in data work. It is not glamorous, but it is incredibly practical. Whenever your manager asks "how many different X are there?" or "give me a list of all X without repeats," DISTINCT is your go-to answer.</p>
    <p>One thing to remember: DISTINCT is for removing duplicates in your output. It is not for fixing duplicates in your source data. If you notice that DISTINCT is required just to get correct-looking results from a table that should not have duplicates, that is a data quality issue worth investigating separately.</p>
    <p>For Priya, those 23 unique city names were exactly what Aditya needed. The regional ops team had their data in thirty seconds. The week's report was built on time.</p>
    <p>That is what clean, well-chosen SQL looks like.</p>
  `,
  'mod4-t11': `
    <h1>Column Aliases (AS): Rename Columns to Something That Actually Makes Sense</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha had been at Zomato for two months and was finally feeling comfortable with SQL. Then came her first task that required presenting results to a non-technical manager.</p>
    <p>She ran her query to pull order data for a weekly performance review. The results came back perfectly. The right rows, the right calculations, exactly what the manager asked for. She pasted it into a message and sent it.</p>
    <p>Her manager called her back almost immediately. "Neha, what is txn_amt? And what is rest_id? And what is ord_cnt? I cannot read any of this."</p>
    <p>Neha looked at her output and saw the problem. The column headers showed the raw database column names: txn_amt, rest_id, cust_nm, and a column simply labelled price * quantity because she had computed that on the fly.</p>
    <p>Her technical query had produced technically correct output, but the labels were unreadable to anyone outside the engineering team.</p>
    <p>That was the day she learned about column aliases.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Databases are designed to be efficient for storage and processing. Column names like txn_amt, cust_id, or rest_nm are short and machine-friendly. But they are terrible for human communication.</p>
    <p>When you write a report, build a dashboard, or share query results with a manager or client, the column headers need to be readable. "Transaction Amount" means something. "txn_amt" means very little to someone outside the data team.</p>
    <p>There is also a second problem: computed columns have no name at all by default. If you write SELECT price <em> quantity FROM orders, the result column is labelled something like price </em> quantity or even just col1, depending on the database. That is meaningless in a report.</p>
    <p>Column aliases solve both problems: they let you rename any column in your output to whatever label you want, without touching the underlying table at all.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Data has two audiences: machines and humans. Databases are optimised for machines. Reports and dashboards are consumed by humans.</p>
    <p>The gap between these two audiences is often the column name. The database stores it as cust_id because that is efficient and consistent. The report needs to show it as "Customer ID" because that is what humans understand at a glance.</p>
    <p>Column aliases were added to SQL to bridge this gap. They are temporary labels that exist only in your query's output. They do not change the table, they do not affect other queries, and they have zero impact on the database itself. They purely serve the purpose of making your output readable.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think about your name. On government documents, you might be listed as "SHARMA, RAHUL KUMAR" in all caps with the surname first. On your WhatsApp profile, you are just "Rahul". At work, your email might show "Rahul S.".</p>
    <p>Your identity is the same in all cases. The representation changes based on the context and the audience.</p>
    <p>Column aliases are exactly like this. The underlying data is the same. The alias just changes how the column is labelled in your specific query's output.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Think about a price tag in a shop. The item in the storeroom database might be catalogued as SKU-4721-BLK-XL. But the price tag on the shelf says "Black T-Shirt, Size XL, Rs 799."</p>
    <p>Same item, different presentation for different audiences. The catalogue code serves the inventory system. The price tag serves the customer.</p>
    <p>Column aliases serve the reader of your SQL output the same way a price tag serves a shopper.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>A column alias is a temporary name you assign to a column in your SELECT statement. You write it using the AS keyword after the column name.</p>
    <p>The alias appears in the output as the column header. The underlying table is completely unaffected.</p>
    <p>You can use aliases on regular columns to rename them. You can use them on calculated expressions to give the result a meaningful name. And you can use them on aggregate functions like SUM or COUNT to label the result clearly.</p>
    <p>The AS keyword is optional: you can place the alias name right after the column with a space instead. However, using AS explicitly is much clearer and is strongly recommended.</p>
    <p>For aliases with spaces or special characters, wrap the alias in single quotes or backticks depending on the database. MySQL accepts backticks: AS <code>Order Total</code>. Most databases accept double quotes: AS "Order Total". Single quotes also work in many databases: AS 'Order Total'.</p>
    <p>Table aliases work the same way: you can give a table a short alias in the FROM clause to make your query shorter, especially in queries with multiple tables.</p>
    <p>One important limitation: you cannot use a column alias in the WHERE clause of the same query. This is because WHERE is evaluated before SELECT in SQL's logical processing order, so the aliases do not exist yet when WHERE runs. You can use aliases in ORDER BY, because ORDER BY is evaluated after SELECT.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Renaming a column:</p>
    <pre><code class="language-sql">SELECT column_name AS alias_name
FROM table_name;</code></pre>
    <p>Renaming with spaces in the alias:</p>
    <pre><code class="language-sql">SELECT column_name AS 'Alias Name'
FROM table_name;</code></pre>
    <p>Renaming a calculated expression:</p>
    <pre><code class="language-sql">SELECT price * quantity AS total_amount
FROM orders;</code></pre>
    <p>Without AS (space alias, less recommended):</p>
    <pre><code class="language-sql">SELECT column_name alias_name
FROM table_name;</code></pre>
    <p>Table alias:</p>
    <pre><code class="language-sql">SELECT o.order_id, o.amount
FROM orders AS o;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Usage</th><th>Syntax</th><th>Example</th><th>Notes</th></tr>
      <tr><td>Rename a column</td><td>col AS new_name</td><td>txn_amt AS 'Transaction Amount'</td><td>AS is optional but recommended</td></tr>
      <tr><td>Alias a calculation</td><td>expr AS name</td><td>price * qty AS 'Total Price'</td><td>Without AS, the column has no readable name</td></tr>
      <tr><td>Alias with spaces</td><td>col AS 'Two Words'</td><td>amount AS 'Order Value'</td><td>Use quotes or backticks for multi-word aliases</td></tr>
      <tr><td>Alias without AS</td><td>col name</td><td>txn_amt total</td><td>Works but less readable</td></tr>
      <tr><td>Table alias</td><td>table AS t</td><td>orders AS o</td><td>Useful in multi-table queries</td></tr>
      <tr><td>Alias in ORDER BY</td><td>ORDER BY alias</td><td>ORDER BY total_amount DESC</td><td>Allowed: SELECT runs before ORDER BY</td></tr>
      <tr><td>Alias in WHERE</td><td>WHERE alias = x</td><td>WHERE total_amount > 100</td><td>NOT ALLOWED: WHERE runs before SELECT</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using a Flipkart orders table with technical column names:</p>
    <table>
      <tr><th>ord_id</th><th>cust_nm</th><th>rest_nm</th><th>txn_amt</th><th>qty</th><th>ord_dt</th></tr>
      <tr><td>12001</td><td>Rahul</td><td>BookMyShow</td><td>650</td><td>2</td><td>2024-07-10</td></tr>
      <tr><td>12002</td><td>Priya</td><td>Zomato</td><td>480</td><td>1</td><td>2024-07-10</td></tr>
      <tr><td>12003</td><td>Arjun</td><td>Swiggy</td><td>1200</td><td>3</td><td>2024-07-11</td></tr>
    </table>
    <h3>Example 1: Renaming Columns for a Manager Report</h3>
    <p>Make all column names readable for a non-technical audience.</p>
    <pre><code class="language-sql">SELECT
    ord_id AS 'Order ID',
    cust_nm AS 'Customer Name',
    txn_amt AS 'Transaction Amount',
    ord_dt AS 'Order Date'
FROM orders;</code></pre>
    <p>Output now shows headers "Order ID", "Customer Name", "Transaction Amount", "Order Date" instead of the technical names.</p>
    <h3>Example 2: Naming a Calculated Column</h3>
    <p>Calculate total value and give it a clear name.</p>
    <pre><code class="language-sql">SELECT
    cust_nm AS 'Customer',
    txn_amt AS 'Unit Price',
    qty AS 'Quantity',
    txn_amt * qty AS 'Total Value'
FROM orders;</code></pre>
    <p>Without the AS 'Total Value' alias, the last column would be labelled "txn_amt * qty" which is confusing in a report.</p>
    <h3>Example 3: Alias Used in ORDER BY</h3>
    <p>Sort results by the aliased calculated column.</p>
    <pre><code class="language-sql">SELECT
    cust_nm AS customer_name,
    txn_amt * qty AS total_value
FROM orders
ORDER BY total_value DESC;</code></pre>
    <p>ORDER BY can reference the alias total_value because ORDER BY runs after SELECT in SQL's processing order.</p>
    <h3>Example 4: Alias That Cannot Be Used in WHERE</h3>
    <p>This is an important gotcha to understand.</p>
    <pre><code class="language-sql">-- This will FAIL in most databases:
SELECT txn_amt * qty AS total_value
FROM orders
WHERE total_value &gt; 500;

-- Use the expression directly in WHERE instead:
SELECT txn_amt * qty AS total_value
FROM orders
WHERE txn_amt * qty &gt; 500;</code></pre>
    <p>WHERE runs before SELECT, so the alias total_value does not exist when WHERE is evaluated. Always use the original expression or column name in WHERE.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Does an alias change the column name in the database permanently?"</strong></p>
    <p>No. Aliases exist only in the output of your specific query. The table structure and column names remain completely unchanged. Run the same SELECT * FROM table and you will see the original column names.</p>
    <p><strong>"Can I use the alias in the WHERE clause?"</strong></p>
    <p>Not in the same query. WHERE is evaluated before SELECT, so the alias does not exist when WHERE runs. Use the original column name or expression in WHERE. However, you can use aliases in ORDER BY.</p>
    <p><strong>"What if my alias has a space in it?"</strong></p>
    <p>Wrap it in single quotes ('Order Total'), double quotes ("Order Total"), or backticks (<code>Order Total</code>). Without quotes, a multi-word alias will cause a syntax error because SQL interprets the second word as something else.</p>
    <p><strong>"Is AS mandatory?"</strong></p>
    <p>No. You can write SELECT txn_amt total_value and it creates an alias "total_value" without AS. But using AS makes your intent unambiguous and the code much easier to read.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using multi-word aliases without quotes. SELECT amount Order Total will fail. Use SELECT amount AS 'Order Total'.</li>
      <li>Trying to use a column alias in WHERE. This is a very common beginner mistake. Use the original column name in WHERE.</li>
      <li>Assuming aliases change the database permanently. They never do.</li>
      <li>Forgetting AS when the alias is easy to miss, leading to confusion about which word is the column and which is the alias.</li>
      <li>Using reserved SQL words as aliases without quoting them. Words like "value", "date", "order" can cause issues. When in doubt, use descriptive non-reserved words.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use AS for clarity. Even though it is optional, it makes queries much more readable.</li>
      <li>Use descriptive, human-friendly aliases. Think about who will read the output. "Total Revenue" is better than "tot_rev".</li>
      <li>For calculated columns, always give an alias. Without one, the header is the full expression, which is unreadable.</li>
      <li>Use snake_case for aliases that will be referenced in ORDER BY (total_value, not "Total Value") to avoid quoting issues.</li>
      <li>Reserve single-word unquoted aliases for simple cases. For anything with spaces or special characters, use quotes.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Zomato, every report shared with the business team uses aliases to translate technical column names into readable labels. "restaurant_id" becomes "Restaurant", "avg_order_value" becomes "Average Order Value".</p>
    <p>Flipkart's dashboards use aliases heavily for calculated KPIs: "total_revenue", "conversion_rate", "return_percentage" are all aliased calculated expressions.</p>
    <p>IRCTC's passenger reports use aliases to make booking data readable for operations staff who are not technical.</p>
    <p>PhonePe uses aliases when building financial reports for auditors who need clear, self-explanatory column headers in every exported spreadsheet.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>DATABASE TABLE:            YOUR QUERY OUTPUT (with aliases):
+--------+---------+      +------------------+------------------+
| cust_nm| txn_amt |      | Customer Name    | Transaction Amount|
+--------+---------+  --&gt; +------------------+------------------+
| Rahul  | 650     |      | Rahul            | 650              |
| Priya  | 480     |      | Priya            | 480              |
+--------+---------+      +------------------+------------------+

The table has NOT changed. Only the column headers in
your result are different.

CALCULATED COLUMN:
SELECT txn_amt * qty          --&gt; column header: txn_amt * qty (ugly)
SELECT txn_amt * qty AS total --&gt; column header: total (clean)

ALIAS IN ORDER BY: OK
SELECT amount AS total FROM orders ORDER BY total DESC; -- WORKS

ALIAS IN WHERE: NOT OK
SELECT amount AS total FROM orders WHERE total &gt; 500; -- FAILS
Use: WHERE amount &gt; 500 instead</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>Column aliases give your result columns readable names using AS.</li>
      <li>Syntax: SELECT column AS 'Alias Name' FROM table</li>
      <li>Aliases are temporary: they exist only in the query output, not in the table.</li>
      <li>Multi-word aliases need quotes: AS 'Order Total' or AS "Order Total"</li>
      <li>AS is optional but strongly recommended for clarity.</li>
      <li>You can use aliases in ORDER BY but NOT in WHERE of the same query.</li>
      <li>Calculated expressions should always have an alias so the output is readable.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>From a students table with columns roll_no, full_name, and marks, write a query that shows "Roll Number", "Student Name", and "Marks Scored" as the column headers.</li>
      <li>From an orders table with price and qty columns, write a query showing "Product Price", "Quantity", and "Total Value" (as price multiplied by qty).</li>
      <li>From a bank_transactions table, rename acc_id as "Account Number", amount as "Amount", and txn_type as "Transaction Type".</li>
      <li>Write a query that selects txn_amt multiplied by 0.18 as "GST Amount" from an orders table, and sorts the results by the alias descending.</li>
      <li>Explain why this query would fail and rewrite it correctly: SELECT txn_amt * qty AS total FROM orders WHERE total > 1000;</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Column aliases might seem like a minor cosmetic feature, but they are one of the most important habits you can develop as a SQL writer.</p>
    <p>Every time you produce output that someone else will read, you are communicating. The clarity of your column headers is part of that communication. Technical abbreviations tell a story to machines. Human-friendly aliases tell a story to people.</p>
    <p>The most valued analysts at companies like Zomato, Flipkart, and Paytm are not just the ones who get the right numbers. They are the ones whose outputs are immediately understandable to anyone who reads them.</p>
    <p>Neha revised her query with proper aliases in under two minutes. Her manager looked at the resubmitted output and said: "Perfect, this is exactly what I needed." She had not changed a single number, just the labels.</p>
    <p>That is the power of communicating clearly through your SQL.</p>
  `,
  'mod4-t12': `
    <h1>CASE: Write If-Else Logic Directly Inside Your SQL Query</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Rahul had been at Flipkart for three months and was handling data requests with growing confidence. Then his manager, Divya, gave him a task that pushed him into new territory.</p>
    <p>"Rahul, I need the orders table with a new column added. Call it 'customer_tier'. If the order amount is above two thousand, it is 'Premium'. Between five hundred and two thousand, it is 'Standard'. Below five hundred, it is 'Basic'. The marketing team needs to segment customers for the upcoming sale."</p>
    <p>Rahul stared at his screen. He knew how to SELECT. He knew WHERE, ORDER BY, DISTINCT. But "add a new column that categorises each row based on its values"? That was something different. He had never done conditional logic inside SQL before.</p>
    <p>Divya saw him thinking. "It is a CASE expression. You will love it."</p>
    <p>Ten minutes later, Rahul had a query that added exactly the column Divya described, computed on the fly for every row, without touching the database at all.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Raw data rarely tells a complete story by itself. Numbers need to be interpreted. Categories help humans understand patterns at a glance.</p>
    <p>Consider these common real-world needs at Indian companies:</p>
    <p>Zomato wants to classify restaurants as "Budget", "Mid-range", or "Fine Dining" based on average order value for a curated collection feature.</p>
    <p>Byju's wants to label each student's test score as "Distinction", "First Class", "Second Class", or "Fail" for a progress report.</p>
    <p>IRCTC wants to show whether a train booking is "Confirmed", "Waitlisted", or "Cancelled" using a readable label instead of the raw codes CNF, WL, and CANCEL.</p>
    <p>Paytm's fraud team wants to flag transactions as "High Risk", "Medium Risk", or "Low Risk" based on amount and frequency.</p>
    <p>All of these require adding interpretive labels to raw data, dynamically, within a query. That is what CASE does.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Databases store raw facts: numbers, dates, codes, identifiers. They do not store interpretations, categories, or labels because those often change based on business rules.</p>
    <p>Before CASE, the only way to categorise data was to retrieve it and do the categorisation in application code or Excel. That means extra steps, extra tools, and the possibility that different people apply different rules.</p>
    <p>CASE expression was created to bring this kind of conditional logic directly into SQL. You can express "if this then that, otherwise this other thing" right inside your SELECT statement. The result is a new column in your output, computed dynamically based on your conditions, without any changes to the underlying table.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think about the way marks translate to grades in a school exam. The teacher has a raw number for each student: 84, 61, 73, 45, 92.</p>
    <p>To produce grade cards, the teacher applies rules: 90 and above is A+, 80 to 89 is A, 70 to 79 is B, and so on.</p>
    <p>The teacher is doing conditional logic: "if the mark falls in this range, assign this grade."</p>
    <p>SQL's CASE expression lets you do exactly this kind of if-then-else categorisation inside a query. You define the conditions, you define the labels, and the database applies them to every single row instantly.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Think of a ticket checker on a Mumbai local train who categorises passengers. He looks at each passenger and applies a rule: "If this person has a first-class pass, mark 'First Class'. If they have a second-class pass, mark 'Second Class'. Otherwise, mark 'No Valid Pass'."</p>
    <p>He does not rewrite anyone's ID card. He just applies a classification based on what he sees, and writes a label.</p>
    <p>SQL's CASE expression does this for your data: it looks at each row, evaluates your conditions against the row's values, and assigns a label based on whichever condition is true.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>There are two forms of CASE expression in SQL.</p>
    <p>The searched CASE (most common) evaluates each WHEN condition independently. Each WHEN contains a full logical condition. SQL goes through them in order, and when it finds the first one that is true for a row, it returns the corresponding THEN value. If none match, ELSE provides the default value.</p>
    <p>The simple CASE compares a single column or expression against a list of specific values. CASE status WHEN 'CNF' THEN 'Confirmed' WHEN 'WL' THEN 'Waitlisted'. This is useful when you are matching exact values rather than ranges.</p>
    <p>The ELSE clause is optional, but if you omit it and no WHEN condition matches, the result for that row is NULL. Always include ELSE unless you genuinely intend to have NULL for unmatched rows.</p>
    <p>Every CASE expression must end with END. The new column it creates should be given an alias using AS to make it readable.</p>
    <p>CASE can be nested: you can put a CASE inside another CASE, though this should be done sparingly for readability.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Searched CASE (conditions with ranges or expressions):</p>
    <pre><code class="language-sql">SELECT column1,
    CASE
        WHEN condition1 THEN result1
        WHEN condition2 THEN result2
        WHEN condition3 THEN result3
        ELSE default_result
    END AS alias_name
FROM table_name;</code></pre>
    <p>Simple CASE (matching a column against specific values):</p>
    <pre><code class="language-sql">SELECT column1,
    CASE column_name
        WHEN value1 THEN result1
        WHEN value2 THEN result2
        ELSE default_result
    END AS alias_name
FROM table_name;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>CASE</td><td>Opens the conditional block</td><td>CASE</td></tr>
      <tr><td>WHEN condition</td><td>The condition to check for each row</td><td>WHEN amount > 2000</td></tr>
      <tr><td>THEN result</td><td>The value to return if the condition is true</td><td>THEN 'Premium'</td></tr>
      <tr><td>Multiple WHEN/THEN</td><td>You can have as many conditions as needed</td><td>WHEN amount > 500 THEN 'Standard'</td></tr>
      <tr><td>ELSE default</td><td>Value returned if no WHEN condition matches</td><td>ELSE 'Basic'</td></tr>
      <tr><td>END</td><td>Closes the conditional block. MANDATORY</td><td>END</td></tr>
      <tr><td>AS alias</td><td>Names the result column. Strongly recommended</td><td>AS customer_tier</td></tr>
      <tr><td>NULL without ELSE</td><td>If no condition matches and no ELSE, result is NULL</td><td>Omit ELSE only intentionally</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using a Flipkart orders table:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>amount</th><th>status</th><th>city</th></tr>
      <tr><td>13001</td><td>Rahul</td><td>2500</td><td>CNF</td><td>Delhi</td></tr>
      <tr><td>13002</td><td>Priya</td><td>750</td><td>WL</td><td>Mumbai</td></tr>
      <tr><td>13003</td><td>Arjun</td><td>380</td><td>CNF</td><td>Bengaluru</td></tr>
      <tr><td>13004</td><td>Neha</td><td>1200</td><td>CANCEL</td><td>Chennai</td></tr>
      <tr><td>13005</td><td>Simran</td><td>4800</td><td>CNF</td><td>Hyderabad</td></tr>
    </table>
    <h3>Example 1: Customer Tier Classification</h3>
    <p>Add a customer_tier column based on order amount.</p>
    <pre><code class="language-sql">SELECT
    order_id,
    customer_name,
    amount,
    CASE
        WHEN amount &gt; 2000 THEN 'Premium'
        WHEN amount &gt;= 500 THEN 'Standard'
        ELSE 'Basic'
    END AS customer_tier
FROM orders;</code></pre>
    <p>Results:</p>
    <table>
      <tr><th>order_id</th><th>customer_name</th><th>amount</th><th>customer_tier</th></tr>
      <tr><td>13001</td><td>Rahul</td><td>2500</td><td>Premium</td></tr>
      <tr><td>13002</td><td>Priya</td><td>750</td><td>Standard</td></tr>
      <tr><td>13003</td><td>Arjun</td><td>380</td><td>Basic</td></tr>
      <tr><td>13004</td><td>Neha</td><td>1200</td><td>Standard</td></tr>
      <tr><td>13005</td><td>Simran</td><td>4800</td><td>Premium</td></tr>
    </table>
    <h3>Example 2: Simple CASE for Status Codes</h3>
    <p>Translate booking status codes into readable labels.</p>
    <pre><code class="language-sql">SELECT
    order_id,
    customer_name,
    CASE status
        WHEN 'CNF' THEN 'Confirmed'
        WHEN 'WL'  THEN 'Waitlisted'
        WHEN 'CANCEL' THEN 'Cancelled'
        ELSE 'Unknown Status'
    END AS booking_status
FROM orders;</code></pre>
    <p>Result: status codes become human-readable labels. Rahul's CNF becomes "Confirmed", Priya's WL becomes "Waitlisted", etc.</p>
    <h3>Example 3: Student Grade Labelling at Byju's</h3>
    <p>A Byju's analyst wants to convert raw marks into grade categories for a report.</p>
    <pre><code class="language-sql">SELECT
    student_name,
    marks,
    CASE
        WHEN marks &gt;= 90 THEN 'Distinction'
        WHEN marks &gt;= 75 THEN 'First Class'
        WHEN marks &gt;= 60 THEN 'Second Class'
        WHEN marks &gt;= 40 THEN 'Pass'
        ELSE 'Fail'
    END AS grade
FROM student_results;</code></pre>
    <p>Note that the conditions are evaluated in order. The first matching WHEN wins. Since we check >= 90 first, a student with 95 marks gets "Distinction" and SQL stops there.</p>
    <h3>Example 4: Transaction Risk Flagging at Paytm</h3>
    <p>Classify transactions by risk level for the fraud team.</p>
    <pre><code class="language-sql">SELECT
    transaction_id,
    amount,
    customer_id,
    CASE
        WHEN amount &gt;= 50000 THEN 'High Risk'
        WHEN amount &gt;= 10000 THEN 'Medium Risk'
        ELSE 'Low Risk'
    END AS risk_level
FROM transactions
ORDER BY risk_level, amount DESC;</code></pre>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>"Do the conditions in CASE need to be mutually exclusive?"</strong></p>
    <p>No, but order matters. SQL evaluates WHEN conditions from top to bottom and stops at the first match. If amount >= 90 comes before amount >= 75, a student with 92 marks matches the first condition and gets "Distinction". They would also match amount >= 75, but SQL never reaches that WHEN because it already matched. Order your conditions from most specific to least specific (highest values first for greater-than conditions).</p>
    <p><strong>"What if I forget ELSE and a row does not match any WHEN?"</strong></p>
    <p>That row gets NULL in the result column. This is usually not what you want. Always include an ELSE clause unless NULL is intentionally acceptable.</p>
    <p><strong>"What if I forget END?"</strong></p>
    <p>SQL will throw a syntax error. CASE must always be closed with END.</p>
    <p><strong>"Can CASE be used in WHERE or ORDER BY?"</strong></p>
    <p>Yes. CASE can be used in ORDER BY for custom sorting logic. For example, you can sort by a classification rather than a raw number. Using CASE in WHERE is technically possible but unusual. The most common use is in SELECT.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Forgetting END at the close of the CASE expression. This always causes a syntax error.</li>
      <li>Omitting ELSE and being surprised by NULL values in unmatched rows.</li>
      <li>Putting conditions in the wrong order. For range conditions, always start from the most restrictive (highest value) and work downward.</li>
      <li>Not giving the CASE expression an alias. Without AS, the column header is the entire CASE block, which is unreadable.</li>
      <li>Using simple CASE when you need searched CASE. Simple CASE only checks equality. For ranges (>, <, BETWEEN), you need searched CASE with full conditions in each WHEN.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always include an ELSE clause. Even if it is ELSE 'Unknown' or ELSE NULL explicitly, it documents your intent.</li>
      <li>Always give your CASE expression an alias using AS. Make the alias descriptive: AS customer_tier, AS risk_level, AS grade_label.</li>
      <li>Order your WHEN conditions from most restrictive to least restrictive for range conditions. Check >= 90 before >= 75.</li>
      <li>Keep CASE expressions readable by indenting each WHEN and THEN on its own line.</li>
      <li>If you have more than 6-7 conditions, consider whether a lookup table with a JOIN might be cleaner and more maintainable.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>Flipkart uses CASE to classify orders in their fulfilment system: same-day delivery orders get one category, next-day another, and standard a third, allowing the operations team to prioritise packing.</p>
    <p>Zomato uses CASE to create "value for money" tiers in restaurant listings: "Budget (under 200)", "Mid-range (200-600)", "Premium (600+)" which you see when browsing restaurants.</p>
    <p>IRCTC uses CASE to convert internal train status codes (CNF, RAC, WL) into the readable labels displayed in the ticket booking interface.</p>
    <p>Byju's uses CASE in their learning analytics to classify students into intervention groups based on engagement scores, directing resources to students who need the most support.</p>
    <p>Banks across India use CASE in transaction monitoring to apply risk scores to transactions before routing them for review.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>RAW DATA:
+----------+--------+
| order_id | amount |
+----------+--------+
| 13001    | 2500   |
| 13002    | 750    |
| 13003    | 380    |
| 13004    | 4800   |
+----------+--------+

CASE LOGIC (applied to each row):
WHEN amount &gt; 2000 THEN 'Premium'
WHEN amount &gt;= 500 THEN 'Standard'
ELSE 'Basic'

Row by row evaluation:
  13001: 2500 &gt; 2000? YES --&gt; 'Premium'
  13002: 750 &gt; 2000? NO. 750 &gt;= 500? YES --&gt; 'Standard'
  13003: 380 &gt; 2000? NO. 380 &gt;= 500? NO. ELSE --&gt; 'Basic'
  13004: 4800 &gt; 2000? YES --&gt; 'Premium'

RESULT:
+----------+--------+---------------+
| order_id | amount | customer_tier |
+----------+--------+---------------+
| 13001    | 2500   | Premium       |
| 13002    | 750    | Standard      |
| 13003    | 380    | Basic         |
| 13004    | 4800   | Premium       |
+----------+--------+---------------+</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <ul>
      <li>CASE adds conditional if-then-else logic inside a SELECT statement.</li>
      <li>Searched CASE: CASE WHEN condition THEN result ... END</li>
      <li>Simple CASE: CASE column WHEN value THEN result ... END</li>
      <li>ELSE provides the default value when no WHEN condition matches.</li>
      <li>If you omit ELSE and no condition matches, the result is NULL.</li>
      <li>END is mandatory to close every CASE expression.</li>
      <li>Always give the CASE expression a meaningful alias using AS.</li>
      <li>Conditions are evaluated in order: the first matching WHEN wins.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>From an orders table, write a CASE expression that labels each order as "Large" if amount > 10000, "Medium" if amount between 2000 and 10000, and "Small" otherwise.</li>
      <li>From a student_results table, write a query that shows student names, marks, and a grade column using CASE: Distinction (90+), Merit (75-89), Pass (50-74), Fail (below 50).</li>
      <li>From a train_bookings table with a status column containing values 'CNF', 'WL', 'RAC', and 'CANCEL', write a simple CASE to show "Confirmed", "Waitlisted", "RAC", and "Cancelled" as readable labels.</li>
      <li>From a transactions table, use CASE to create a column called payment_size: "Micro" for amounts below 100, "Small" for 100-999, "Medium" for 1000-9999, "Large" for 10000 and above.</li>
      <li>Write a CASE query that sorts students by a custom order: show students with grade A first, then B, then C, then others, using CASE inside ORDER BY.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>The CASE expression is the moment SQL stops being a data retrieval tool and becomes a data transformation tool. It lets you bring business logic into your queries: the rules that decide what raw numbers actually mean.</p>
    <p>Every analyst who has presented a data report to a business stakeholder knows the value of this. Raw numbers on their own require explanation. Categorised, labelled data tells a story immediately. "Premium, Standard, Basic" communicates in a second what a column of numbers requires context to understand.</p>
    <p>Learn CASE well, use it with clean formatting and good aliases, and you will produce outputs that are not just correct but immediately useful to anyone who reads them.</p>
    <p>Divya looked at Rahul's query and the formatted result with the customer_tier column neatly labelled. "Perfect," she said. "This is exactly what the marketing team needed."</p>
    <p>Rahul had not changed a single row in the database. He had just asked the right questions in the right way.</p>
    <p>That is the power of good SQL.</p>
  `,

  // ── Module 5 ─────────────────────────────────────────────────
  'mod5-t1': `
    <h1>INSERT INTO: How You Add New Data to a Table</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Priya just joined Swiggy as a junior data analyst. On her third day, her manager Vikram walks over and says: "We just onboarded 200 new restaurant partners in Bangalore. Their details are sitting in a spreadsheet. Can you get them into the <code>restaurants</code> table in our database by end of day?"</p>
    <p>Priya opens her laptop, pulls up the database schema, and realizes: she knows how to query data with SELECT, but she has never actually put new data into a table before. This is the moment every new SQL developer faces. You need INSERT INTO.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Most SQL courses start with SELECT. You learn to read data, filter it, join tables, aggregate it. But at some point, someone hands you a requirement: add this record, load this batch, copy this data over. Reading data is only half the job. Writing data is the other half, and INSERT INTO is where that starts.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>A database table is like an empty register when you first create it. The structure (columns, types, constraints) is defined, but there are no rows. INSERT INTO is the command that puts actual rows into that structure. Without it, a table would always remain empty, and a database with no data is just a very complicated filing cabinet with nothing filed.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a restaurant order slip. The slip has fixed fields: Order ID, Customer Name, Item, Quantity, Price. When a customer places an order, a staff member fills out a new slip and drops it into the stack. INSERT INTO does exactly that for a database table: it creates a new row and fills in the specified fields.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: orders (before)
+----------+----------------+--------+--------+
| order_id | customer_name  | item   | amount |
+----------+----------------+--------+--------+
| 1001     | Ankit Sharma   | Biryani| 280    |
| 1002     | Deepa Nair     | Pizza  | 450    |
+----------+----------------+--------+--------+

You run: INSERT INTO orders (order_id, customer_name, item, amount)
         VALUES (1003, 'Rahul Verma', 'Burger', 199);

Table: orders (after)
+----------+----------------+--------+--------+
| order_id | customer_name  | item   | amount |
+----------+----------------+--------+--------+
| 1001     | Ankit Sharma   | Biryani| 280    |
| 1002     | Deepa Nair     | Pizza  | 450    |
| 1003     | Rahul Verma    | Burger | 199    |  &lt;-- new row
+----------+----------------+--------+--------+</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When you run INSERT INTO, the database engine:</p>
    <ol>
      <li>Identifies the target table</li>
      <li>Matches each value you provide to the corresponding column</li>
      <li>Validates the data types and constraints (NOT NULL, UNIQUE, PRIMARY KEY, etc.)</li>
      <li>If everything checks out, writes the new row to the table</li>
      <li>If anything fails (duplicate primary key, wrong data type, missing required column), it throws an error and rolls back</li>
    </ol>
    <hr>
    <h2>Writing It in SQL</h2>
    <p><strong>Basic single-row insert:</strong></p>
    <pre><code class="language-sql">INSERT INTO orders (order_id, customer_name, item, amount)
VALUES (1003, 'Rahul Verma', 'Burger', 199);</code></pre>
    <p><strong>Inserting multiple rows at once:</strong></p>
    <pre><code class="language-sql">INSERT INTO orders (order_id, customer_name, item, amount)
VALUES
  (1004, 'Simran Kaur', 'Dosa', 120),
  (1005, 'Arjun Mehta', 'Thali', 350),
  (1006, 'Neha Joshi', 'Sandwich', 180);</code></pre>
    <p>This is much faster than running three separate INSERT statements. The database processes them as a single operation.</p>
    <p><strong>INSERT with SELECT (copying data from another table):</strong></p>
    <pre><code class="language-sql">INSERT INTO orders_archive (order_id, customer_name, item, amount)
SELECT order_id, customer_name, item, amount
FROM orders
WHERE order_date &lt; '2024-01-01';</code></pre>
    <p>This copies all orders from before 2024 into an archive table. No VALUES clause needed: the SELECT provides the rows.</p>
    <p><strong>Inserting into all columns (short form):</strong></p>
    <pre><code class="language-sql">INSERT INTO orders
VALUES (1007, 'Kiran Rao', 'Idli', 90, '2024-06-15', 'delivered');</code></pre>
    <p>This works only if you provide a value for every column, in the exact order they were defined in the table. If the table structure ever changes, this statement breaks.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>INSERT INTO</code></td><td>Tells SQL you are adding a new row</td><td><code>INSERT INTO orders</code></td></tr>
      <tr><td><code>table_name</code></td><td>The table you are inserting into</td><td><code>orders</code></td></tr>
      <tr><td><code>(col1, col2, ...)</code></td><td>Lists which columns you are filling</td><td><code>(order_id, customer_name, amount)</code></td></tr>
      <tr><td><code>VALUES</code></td><td>Introduces the actual data</td><td><code>VALUES (1003, 'Rahul', 199)</code></td></tr>
      <tr><td><code>(val1, val2, ...)</code></td><td>The actual values, matching the column list</td><td><code>(1003, 'Rahul Verma', 199)</code></td></tr>
      <tr><td><code>SELECT ...</code></td><td>Used instead of VALUES to pull data from another table</td><td><code>SELECT id, name FROM temp_orders</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample table: <code>customers</code> at Flipkart</strong></p>
    <pre><code>+-------------+------------------+----------+---------------+-----------+
| customer_id | name             | city     | email         | is_active |
+-------------+------------------+----------+---------------+-----------+
| 101         | Ravi Kumar       | Delhi    | ravi@mail.com | true      |
| 102         | Pooja Singh      | Mumbai   | pooja@mail.com| true      |
+-------------+------------------+----------+---------------+-----------+</code></pre>
    <h3>Example 1: Add a single new customer</h3>
    <p>Business question: A new customer just signed up. Add them to the table.</p>
    <pre><code class="language-sql">INSERT INTO customers (customer_id, name, city, email, is_active)
VALUES (103, 'Arjun Mehta', 'Bengaluru', 'arjun@mail.com', true);</code></pre>
    <p>Result: A new row for Arjun Mehta appears in the table.</p>
    <h3>Example 2: Add multiple customers from a city launch</h3>
    <p>Business question: Flipkart just launched in three new cities. Add all three customers at once.</p>
    <pre><code class="language-sql">INSERT INTO customers (customer_id, name, city, email, is_active)
VALUES
  (104, 'Neha Sharma', 'Pune', 'neha@mail.com', true),
  (105, 'Vikram Nair', 'Hyderabad', 'vikram@mail.com', true),
  (106, 'Priya Gupta', 'Chennai', 'priya@mail.com', true);</code></pre>
    <p>Result: Three new rows are added in one operation.</p>
    <h3>Example 3: Skip a column and let it default</h3>
    <p>Business question: A customer record came in without an email. Insert it anyway.</p>
    <pre><code class="language-sql">INSERT INTO customers (customer_id, name, city, is_active)
VALUES (107, 'Suresh Babu', 'Kolkata', true);</code></pre>
    <p>Result: Row is inserted with <code>email</code> set to NULL (or whatever the column default is). If <code>email</code> had a NOT NULL constraint, this would throw an error.</p>
    <h3>Example 4: Copy customers from a staging table</h3>
    <p>Business question: A batch of new customers was loaded into <code>customers_staging</code>. Move them into the main table.</p>
    <pre><code class="language-sql">INSERT INTO customers (customer_id, name, city, email, is_active)
SELECT customer_id, name, city, email, true
FROM customers_staging
WHERE validated = true;</code></pre>
    <p>Result: All validated customers from the staging table are copied into the main <code>customers</code> table.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Column count mismatch:</strong> If you list 4 columns but provide 5 values, SQL throws an error immediately. The number of columns and values must match exactly.</p>
    <p><strong>Skipping the column list:</strong> Running <code>INSERT INTO orders VALUES (...)</code> requires you to know the exact order of every column. If someone adds a column to the table later, your query breaks silently or errors out.</p>
    <p><strong>String quoting:</strong> Text values must be in single quotes. <code>'Rahul Verma'</code> is correct. <code>"Rahul Verma"</code> may work in some databases but is not standard SQL.</p>
    <p><strong>NULL vs empty string:</strong> Skipping a column inserts NULL. Inserting <code>''</code> inserts an empty string. These are different things, and both can cause issues downstream.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p><strong>Mistake 1: Forgetting the WHERE in a later UPDATE after an INSERT.</strong> Not directly related, but a common pattern is to insert a row and then immediately UPDATE it. Always double-check your WHERE clause in that follow-up.</p>
    <p><strong>Mistake 2: Duplicate primary key.</strong> If <code>customer_id</code> is a primary key and you try to insert 103 again, the database rejects it with a constraint violation error. Either use a unique ID or handle conflicts explicitly.</p>
    <p><strong>Mistake 3: Data type mismatch.</strong> Inserting a text string into an integer column fails. Always verify your column types before inserting.</p>
    <p><strong>Mistake 4: Using INSERT INTO table VALUES (...) in production code.</strong> If the table schema changes, this breaks. Always name your columns explicitly.</p>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always list column names explicitly in your INSERT statement, never rely on column order.</li>
      <li>Insert multiple rows in a single statement rather than looping with individual inserts. It is faster and puts less load on the database.</li>
      <li>When loading data from another source, use a staging table first. Validate the staging data before inserting into the production table.</li>
      <li>If you are inserting rows that might already exist, look into INSERT ... ON CONFLICT (PostgreSQL) or MERGE (covered in a later article) rather than blindly inserting.</li>
      <li>Test your INSERT with a SELECT first. Write the SELECT version of your query to confirm you are pulling the right data, then wrap it with INSERT INTO.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, when a delivery partner completes an order, a new row is inserted into the <code>deliveries</code> table with the timestamp, distance, and payout details. At IRCTC, every ticket booking writes a new row to the <code>bookings</code> table. At Paytm, every transaction event inserts a row into the <code>transaction_log</code> table. These are not manual inserts. They are automated inserts triggered by application code. But the SQL underneath is exactly what you just learned.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Data Source
(Form / App / API / Staging Table)
           |
           v
    INSERT INTO statement
           |
     +-----+------+
     |  Validation |   &lt;-- Are column counts correct?
     |  Check      |   &lt;-- Are types correct?
     |             |   &lt;-- Are constraints satisfied?
     +-----+------+
           |
    Pass? Yes / No
     |           |
     v           v
  Row added   Error thrown
  to table    (nothing changes)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these without looking:</p>
    <ul>
      <li>What happens if you skip a NOT NULL column in your INSERT?</li>
      <li>Why is listing column names explicitly safer than relying on column order?</li>
      <li>How do you insert data from one table into another using INSERT with SELECT?</li>
      <li>What error do you get if you try to insert a duplicate primary key?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write an INSERT statement to add a new restaurant called "Spice Garden" with restaurant_id 501, city "Bengaluru", cuisine "South Indian", and rating 4.2 into a table called <code>restaurants</code>.</li>
    </ol>
    <ol>
      <li>Swiggy is onboarding 3 new delivery partners at once. Write a single INSERT statement to add all three to a <code>delivery_partners</code> table with columns: partner_id, name, city, vehicle_type.</li>
    </ol>
    <ol>
      <li>You have a <code>new_users_staging</code> table with columns user_id, name, phone, city. Write an INSERT INTO SELECT to copy all users from that staging table into the main <code>users</code> table where city = 'Mumbai'.</li>
    </ol>
    <ol>
      <li>What happens when you run this on a table where <code>order_id</code> is the primary key and order_id 1001 already exists?</li>
    </ol>
    <pre><code class="language-sql">   INSERT INTO orders (order_id, customer_name) VALUES (1001, 'Test User');</code></pre>
    <ol>
      <li>A <code>products</code> table has columns: product_id, name, price, category, created_at. The <code>created_at</code> column has a DEFAULT of the current timestamp. Write an INSERT that adds a new product without specifying the <code>created_at</code> column.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>INSERT INTO is the entry point for all data in a database. Every row you have ever queried was put there by an INSERT at some point. Understanding how it works, what can go wrong, and how to use it safely is fundamental. Once you are comfortable with single-row inserts, multi-row inserts, and INSERT with SELECT, you have the tools to load data at any scale. The next step is knowing how to change data that is already there, which is what UPDATE covers.</p>
  `,
  'mod5-t2': `
    <h1>UPDATE: How You Change Existing Data in a Table</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Arjun works at Flipkart's catalog team in Bengaluru. One Monday morning, his manager sends a message: "The GST rate changed over the weekend. All electronics products need their prices recalculated with 18% tax included. Can you update the database before the site goes live at 9 AM?"</p>
    <p>Arjun has 45 minutes. There are 4,000 electronics products. He cannot update them one by one. He needs a single SQL statement that finds every electronics product and changes the price column in bulk. This is what UPDATE is for.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Data changes. Prices go up. Addresses change. Order statuses move from "pending" to "delivered". Employee designations get updated after appraisals. A database that cannot be updated would become stale within hours of going live. UPDATE is the command that keeps a database current.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>INSERT adds new rows. But what about rows that already exist and need to change? Deleting and re-inserting a row every time something changes would be messy, slow, and would destroy any history tied to that row's primary key. UPDATE was built to modify specific columns in existing rows, cleanly and efficiently, without touching anything else.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a whiteboard in an office with employee names and their current projects written on it. When someone switches projects, you do not erase their entire entry and rewrite everything. You just erase the project column next to their name and write the new one. UPDATE does exactly that: it reaches into a specific row and changes specific columns, leaving everything else untouched.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: products (before)
+------------+-------------------+----------+----------+
| product_id | name              | price    | category |
+------------+-------------------+----------+----------+
| P001       | Samsung TV 43"    | 32000    | electronics|
| P002       | OnePlus Nord 5G   | 28000    | electronics|
| P003       | Kurti Set         | 899      | fashion  |
+------------+-------------------+----------+----------+

You run: UPDATE products SET price = price * 1.18
         WHERE category = 'electronics';

Table: products (after)
+------------+-------------------+----------+----------+
| product_id | name              | price    | category |
+------------+-------------------+----------+----------+
| P001       | Samsung TV 43"    | 37760    | electronics|  &lt;-- updated
| P002       | OnePlus Nord 5G   | 33040    | electronics|  &lt;-- updated
| P003       | Kurti Set         | 899      | fashion  |  &lt;-- unchanged
+------------+-------------------+----------+----------+</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When you run UPDATE, the database engine:</p>
    <ol>
      <li>Scans the table to find rows that match the WHERE condition</li>
      <li>For each matching row, applies the SET changes to the specified columns</li>
      <li>Validates any constraints (e.g., NOT NULL, data type, CHECK constraints)</li>
      <li>Writes the modified rows back to storage</li>
      <li>If no WHERE is specified, every single row in the table gets updated</li>
    </ol>
    <p>Step 5 is the one that has caused production incidents at many companies. More on that shortly.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p><strong>Basic update, single column:</strong></p>
    <pre><code class="language-sql">UPDATE products
SET price = 35000
WHERE product_id = 'P001';</code></pre>
    <p><strong>Updating multiple columns at once:</strong></p>
    <pre><code class="language-sql">UPDATE products
SET price = 35000,
    category = 'premium_electronics'
WHERE product_id = 'P001';</code></pre>
    <p><strong>Updating with a calculated value:</strong></p>
    <pre><code class="language-sql">UPDATE products
SET price = price * 1.18
WHERE category = 'electronics';</code></pre>
    <p>The right side of the SET can reference the current value of the column. This is how you do percentage increases, decrements, or any math-based update.</p>
    <p><strong>UPDATE with a subquery:</strong></p>
    <pre><code class="language-sql">UPDATE employees
SET department = 'Cloud Infrastructure'
WHERE employee_id IN (
    SELECT employee_id
    FROM project_assignments
    WHERE project_name = 'Jio Cloud 2024'
);</code></pre>
    <p>The subquery finds all employee IDs assigned to a specific project, and the UPDATE changes their department accordingly.</p>
    <p><strong>UPDATE without WHERE (the horror story):</strong></p>
    <pre><code class="language-sql">-- DO NOT run this unless you actually mean it
UPDATE products
SET price = 0;</code></pre>
    <p>This sets every product's price to zero. All 4,000 rows. Instantly. If you do not have a backup and you have already committed this change, you have a very bad day ahead.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>UPDATE</code></td><td>Tells SQL you want to modify existing rows</td><td><code>UPDATE products</code></td></tr>
      <tr><td><code>table_name</code></td><td>The table containing the rows to change</td><td><code>products</code></td></tr>
      <tr><td><code>SET</code></td><td>Introduces the column changes</td><td><code>SET price = 35000</code></td></tr>
      <tr><td><code>col = value</code></td><td>Specifies which column gets what value</td><td><code>price = price * 1.18</code></td></tr>
      <tr><td><code>col1 = v1, col2 = v2</code></td><td>Multiple column updates separated by commas</td><td><code>SET price = 35000, category = 'electronics'</code></td></tr>
      <tr><td><code>WHERE</code></td><td>Filters which rows get updated</td><td><code>WHERE category = 'electronics'</code></td></tr>
      <tr><td>Subquery in WHERE</td><td>Uses results from another query to filter rows</td><td><code>WHERE id IN (SELECT id FROM ...)</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample table: <code>employees</code> at Reliance Jio</strong></p>
    <pre><code>+-------------+------------------+------------+-----------+--------+
| employee_id | name             | department | city      | salary |
+-------------+------------------+------------+-----------+--------+
| E001        | Simran Kaur      | Sales      | Mumbai    | 55000  |
| E002        | Rahul Desai      | Engineering| Pune      | 85000  |
| E003        | Neha Iyer        | Sales      | Chennai   | 52000  |
| E004        | Karan Malhotra   | HR         | Delhi     | 48000  |
+-------------+------------------+------------+-----------+--------+</code></pre>
    <h3>Example 1: Update a single employee's salary</h3>
    <p>Business question: Simran received a promotion. Update her salary to 70,000.</p>
    <pre><code class="language-sql">UPDATE employees
SET salary = 70000
WHERE employee_id = 'E001';</code></pre>
    <p>Result: Only Simran's row is changed. Everyone else stays the same.</p>
    <h3>Example 2: Update multiple columns at once</h3>
    <p>Business question: Rahul transferred to the Bengaluru office and moved to the Cloud team.</p>
    <pre><code class="language-sql">UPDATE employees
SET department = 'Cloud',
    city = 'Bengaluru'
WHERE employee_id = 'E002';</code></pre>
    <p>Result: Both <code>department</code> and <code>city</code> are updated for Rahul in a single statement.</p>
    <h3>Example 3: Calculated update across a department</h3>
    <p>Business question: All Sales employees get a 10% salary hike after the Q3 appraisal.</p>
    <pre><code class="language-sql">UPDATE employees
SET salary = salary * 1.10
WHERE department = 'Sales';</code></pre>
    <p>Result: Simran's salary becomes 77,000 (70,000 x 1.10) and Neha's becomes 57,200 (52,000 x 1.10). HR and Engineering are untouched.</p>
    <h3>Example 4: Update using a subquery</h3>
    <p>Business question: Promote all employees who are currently assigned to the "5G Rollout" project by increasing their salary by 15,000.</p>
    <pre><code class="language-sql">UPDATE employees
SET salary = salary + 15000
WHERE employee_id IN (
    SELECT employee_id
    FROM project_assignments
    WHERE project_name = '5G Rollout'
);</code></pre>
    <p>Result: Only employees linked to the 5G Rollout project in the <code>project_assignments</code> table get the salary bump.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Forgetting the WHERE clause:</strong> This is the single most dangerous mistake in SQL. An UPDATE without WHERE touches every row. Always ask yourself: did I write a WHERE clause? Is it correct?</p>
    <p><strong>Updating the wrong rows:</strong> A WHERE condition that is too broad can update rows you did not intend to change. This is subtler than a missing WHERE and harder to catch.</p>
    <p><strong>Overwriting with stale data:</strong> If your application fetches a value, modifies it in code, and then writes it back, there is a window where another process may have changed the same row. This is a concurrency problem. In critical systems, row-level locking or optimistic concurrency controls are used to handle this.</p>
    <p><strong>Calculated updates with NULL:</strong> If a column contains NULL and you do <code>price = price * 1.18</code>, the result is still NULL. Arithmetic on NULL always produces NULL. Filter out NULLs or handle them with COALESCE if needed.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p><strong>Mistake 1: Running UPDATE without testing the WHERE clause first.</strong> Always run a SELECT with the same WHERE clause to see exactly which rows will be affected before you run the UPDATE.</p>
    <p><strong>Mistake 2: Missing a commit in a transactional context.</strong> In databases that use explicit transactions, your UPDATE is not permanent until you COMMIT. Do not assume the change is saved until you confirm it.</p>
    <p><strong>Mistake 3: Updating a primary key.</strong> Changing a primary key is almost always a bad idea. It breaks foreign key references in other tables. Only do this if you fully understand the cascading impact.</p>
    <p><strong>Mistake 4: Using SET col = NULL without intending to.</strong> If you build your UPDATE query dynamically and a variable ends up being NULL, you will accidentally erase data in that column.</p>
    <hr>
    <h2>Best Practices</h2>
    <p><strong>Test with SELECT first.</strong> Before any UPDATE, run the equivalent SELECT to confirm the rows you are targeting:</p>
    <pre><code class="language-sql">-- First, check what you are about to change
SELECT * FROM products WHERE category = 'electronics';

-- Then, run the update
UPDATE products SET price = price * 1.18 WHERE category = 'electronics';</code></pre>
    <p><strong>Use a transaction for safety:</strong></p>
    <pre><code class="language-sql">BEGIN;
UPDATE employees SET salary = salary * 1.10 WHERE department = 'Sales';
-- Review the result
SELECT * FROM employees WHERE department = 'Sales';
-- If everything looks correct:
COMMIT;
-- If something went wrong:
-- ROLLBACK;</code></pre>
    <p>This gives you a safety net. If the update looks wrong, ROLLBACK undoes it before it becomes permanent.</p>
    <p><strong>Be specific with WHERE.</strong> Whenever possible, use a primary key or unique identifier in the WHERE clause. Filtering by a non-unique column like <code>city</code> or <code>department</code> can be unpredictable if data has duplicates or unexpected values.</p>
    <p><strong>Log what you change.</strong> In production systems, critical updates (salary changes, pricing changes, status changes) are often written to an audit log table with the old value, new value, who made the change, and when.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Zomato, every time a restaurant updates its menu price, an UPDATE runs on the <code>menu_items</code> table. At BookMyShow, when a customer cancels a booking, the <code>bookings</code> table row gets its <code>status</code> column updated from <code>confirmed</code> to <code>cancelled</code>. At Ola, driver ratings are recalculated daily and an UPDATE refreshes the <code>rating</code> column in the <code>drivers</code> table. These are all the same UPDATE command you just learned, running thousands of times a day.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>UPDATE flow:
                     +------------------+
   UPDATE statement  |   WHERE clause   |
   hits the table    |   filter applied |
         |           +--------+---------+
         v                    |
   Scan all rows              v
         |          Matching rows found?
         |                    |
         |           Yes      |     No
         v                    v     v
   Apply SET changes    Update them  Do nothing
   to matching rows          |
         |                   v
         v             Validate constraints
   Write back to             |
   storage               Pass? Yes / No
                             |       |
                             v       v
                         Committed  Error + Rollback</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these without looking:</p>
    <ul>
      <li>What happens when you run UPDATE without a WHERE clause?</li>
      <li>How do you update multiple columns in a single UPDATE statement?</li>
      <li>How do you use a subquery inside an UPDATE?</li>
      <li>What is the safe pattern before running any UPDATE in production?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>In Flipkart's <code>products</code> table, all items in the <code>furniture</code> category need a 5% price increase. Write the UPDATE statement.</li>
    </ol>
    <ol>
      <li>A customer changed their phone number. Write an UPDATE to change the <code>phone</code> column for customer_id = 2048 in a <code>customers</code> table.</li>
    </ol>
    <ol>
      <li>Write an UPDATE that sets the <code>status</code> column to <code>'inactive'</code> for all users in a <code>users</code> table who have not logged in since 2023 (hint: use a <code>last_login</code> column with a date comparison).</li>
    </ol>
    <ol>
      <li>You want to give a 20,000 rupee bonus to all employees in the <code>engineering</code> department who are based in <code>Hyderabad</code>. Write the UPDATE.</li>
    </ol>
    <ol>
      <li>Before running a bulk UPDATE on a <code>pricing</code> table, what SELECT query would you run first to verify you are targeting the right rows? Write both the SELECT and the UPDATE for: increasing all prices in the <code>snacks</code> category by 12%.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>UPDATE is powerful and fast. That combination makes it dangerous if used carelessly. The golden rule every senior analyst will tell you: always SELECT before you UPDATE. Wrap risky updates in a transaction. Keep your WHERE clause tight. One missing WHERE clause on a Friday afternoon has ended more than a few careers. Used carefully, UPDATE is one of the most useful tools in your SQL kit.</p>
  `,
  'mod5-t3': `
    <h1>DELETE: How You Remove Rows from a Table</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha works on the trust and safety team at Zomato. Her manager calls her on a Tuesday and says: "We found 47 fake restaurant accounts created by a spam network. Compliance wants them out of the system before the audit tomorrow morning. Can you remove them?"</p>
    <p>Neha pulls up the list of IDs. She writes a DELETE statement, pastes it into her SQL editor, and hovers over the execute button. Then she pauses. She remembers what her senior told her during onboarding: "Before you run any DELETE, run the SELECT version first. Confirm exactly what you are about to remove." She runs the SELECT. 47 rows, matching perfectly. She runs the DELETE. Done.</p>
    <p>This is the right way to use DELETE.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Data gets stale, incorrect, or invalid. Test records end up in production. Duplicate entries accumulate. Old logs pile up. At some point, you will need to remove rows from a table. DELETE is the tool for that. But it is the command in SQL where the consequences of a mistake are most immediate and most difficult to undo.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Databases are not meant to hold every row forever. Some data has a natural end: a cancelled order, a deactivated account, a session record that expired. DELETE exists to remove rows that no longer belong in a table, keeping the data clean and the table from growing indefinitely.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Think of a guest list for an event. When someone cancels their registration, you draw a line through their entry and remove them from the list. You do not throw away the entire list (that would be DROP). You do not blank out every entry (that would be DELETE without WHERE). You find their specific entry and remove only that one. DELETE with a proper WHERE clause is that precise removal.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: users (before)
+---------+------------------+-----------+-----------+
| user_id | name             | city      | is_active |
+---------+------------------+-----------+-----------+
| U001    | Ravi Shankar     | Delhi     | true      |
| U002    | FakeUser_bot99   | Unknown   | false     |
| U003    | Priya Malhotra   | Bengaluru | true      |
| U004    | SpamAccount_44   | Unknown   | false     |
+---------+------------------+-----------+-----------+

You run: DELETE FROM users WHERE name LIKE 'FakeUser%' OR name LIKE 'SpamAccount%';

Table: users (after)
+---------+------------------+-----------+-----------+
| user_id | name             | city      | is_active |
+---------+------------------+-----------+-----------+
| U001    | Ravi Shankar     | Delhi     | true      |
| U003    | Priya Malhotra   | Bengaluru | true      |
+---------+------------------+-----------+-----------+</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When you run DELETE, the database engine:</p>
    <ol>
      <li>Scans the table for rows matching the WHERE condition</li>
      <li>Marks those rows for removal</li>
      <li>Checks for foreign key constraints: if another table references these rows, the database may block the delete or cascade it depending on the constraint definition</li>
      <li>Removes the rows and records the operation in the transaction log</li>
      <li>If no WHERE clause is given, marks every row in the table for removal</li>
    </ol>
    <p>The operation is logged, which means it can be rolled back within a transaction. This is different from TRUNCATE, which bypasses the row-by-row log in most databases.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p><strong>Basic single-condition delete:</strong></p>
    <pre><code class="language-sql">DELETE FROM users
WHERE user_id = 'U002';</code></pre>
    <p><strong>Delete multiple rows matching a condition:</strong></p>
    <pre><code class="language-sql">DELETE FROM orders
WHERE status = 'cancelled'
AND order_date &lt; '2023-01-01';</code></pre>
    <p><strong>Delete using a subquery:</strong></p>
    <pre><code class="language-sql">DELETE FROM reviews
WHERE restaurant_id IN (
    SELECT restaurant_id
    FROM restaurants
    WHERE is_verified = false
);</code></pre>
    <p><strong>The statement you should never run casually:</strong></p>
    <pre><code class="language-sql">-- This removes ALL rows from the table
DELETE FROM users;</code></pre>
    <p>No error. No warning. Every row is gone. The table structure remains, but it is completely empty.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>DELETE FROM</code></td><td>Tells SQL you want to remove rows</td><td><code>DELETE FROM orders</code></td></tr>
      <tr><td><code>table_name</code></td><td>The table to delete rows from</td><td><code>orders</code></td></tr>
      <tr><td><code>WHERE</code></td><td>Specifies which rows to remove</td><td><code>WHERE status = 'cancelled'</code></td></tr>
      <tr><td>Condition</td><td>The filter that identifies target rows</td><td><code>order_date < '2023-01-01'</code></td></tr>
      <tr><td>Subquery</td><td>Lets you use data from another table to identify rows</td><td><code>WHERE id IN (SELECT id FROM ...)</code></td></tr>
      <tr><td>No WHERE clause</td><td>Removes every single row in the table</td><td>(avoid this unless fully intentional)</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample table: <code>orders</code> at Swiggy</strong></p>
    <pre><code>+----------+----------+-----------+--------+------------+
| order_id | user_id  | status    | amount | order_date |
+----------+----------+-----------+--------+------------+
| O001     | U101     | delivered | 320    | 2024-01-10 |
| O002     | U102     | cancelled | 180    | 2024-01-11 |
| O003     | U103     | delivered | 540    | 2023-06-05 |
| O004     | U104     | cancelled | 90     | 2022-12-20 |
| O005     | U105     | delivered | 275    | 2024-02-01 |
+----------+----------+-----------+--------+------------+</code></pre>
    <h3>Example 1: Delete a specific order</h3>
    <p>Business question: Order O002 was a test order created by the QA team. Remove it.</p>
    <pre><code class="language-sql">DELETE FROM orders
WHERE order_id = 'O002';</code></pre>
    <p>Result: Only row O002 is removed. All other rows remain untouched.</p>
    <h3>Example 2: Delete all cancelled orders older than 2023</h3>
    <p>Business question: Finance wants to clean up cancelled orders from before 2023 to reduce table size.</p>
    <pre><code class="language-sql">DELETE FROM orders
WHERE status = 'cancelled'
AND order_date &lt; '2023-01-01';</code></pre>
    <p>Result: Row O004 is deleted. Row O002 is not deleted because its date is 2024. Row O003 is not deleted because its status is delivered.</p>
    <h3>Example 3: Delete using a subquery</h3>
    <p>Business question: Remove all orders placed by users who have been banned (marked in the <code>banned_users</code> table).</p>
    <pre><code class="language-sql">DELETE FROM orders
WHERE user_id IN (
    SELECT user_id
    FROM banned_users
    WHERE ban_reason = 'fraud'
);</code></pre>
    <p>Result: Any order rows matching a banned user ID are removed.</p>
    <h3>Example 4: Safe delete with SELECT first</h3>
    <p>Business question: Before deleting old delivered orders from 2022, confirm exactly which rows will be affected.</p>
    <pre><code class="language-sql">-- Step 1: Check first
SELECT * FROM orders
WHERE status = 'delivered'
AND order_date &lt; '2023-01-01';

-- Step 2: If the result looks right, run the delete
DELETE FROM orders
WHERE status = 'delivered'
AND order_date &lt; '2023-01-01';</code></pre>
    <p>Result: You see the rows before removing them. No surprises.</p>
    <hr>
    <h2>DELETE vs TRUNCATE vs DROP</h2>
    <p>These three operations are often confused by beginners. They are fundamentally different:</p>
    <table>
      <tr><th>Operation</th><th>What It Does</th><th>Removes Structure?</th><th>Can Be Rolled Back?</th><th>Speed</th></tr>
      <tr><td><code>DELETE</code></td><td>Removes specific rows (or all rows if no WHERE)</td><td>No</td><td>Yes (within a transaction)</td><td>Slower (row-by-row)</td></tr>
      <tr><td><code>TRUNCATE</code></td><td>Removes all rows instantly, resets auto-increment</td><td>No</td><td>Sometimes (depends on database)</td><td>Very fast</td></tr>
      <tr><td><code>DROP</code></td><td>Removes the entire table including structure</td><td>Yes</td><td>No (in most databases)</td><td>Fast</td></tr>
    </table>
    <p>To put it simply:</p>
    <ul>
      <li>DELETE removes selected rows, the table stays</li>
      <li>TRUNCATE empties the whole table, the table stays</li>
      <li>DROP eliminates the table entirely</li>
    </ul>
    <p>If someone tells you "delete that table", clarify whether they mean remove all rows (TRUNCATE) or remove the table structure too (DROP). The difference matters enormously.</p>
    <hr>
    <h2>The Soft Delete Pattern</h2>
    <p>Many production systems at companies like PhonePe and Byju's never actually DELETE rows. Instead, they add an <code>is_deleted</code> column and set it to true. This is called a soft delete.</p>
    <pre><code class="language-sql">-- Instead of this:
DELETE FROM users WHERE user_id = 'U099';

-- Do this:
UPDATE users SET is_deleted = true WHERE user_id = 'U099';</code></pre>
    <p>Then all your queries filter on <code>WHERE is_deleted = false</code> to exclude soft-deleted records.</p>
    <p>Why do companies prefer this:</p>
    <ul>
      <li>You can restore data if a mistake is made</li>
      <li>You can audit who deleted what and when (by adding a <code>deleted_at</code> timestamp and <code>deleted_by</code> column)</li>
      <li>Foreign key references in other tables are not broken</li>
      <li>Regulatory requirements in industries like finance and healthcare often require keeping data even when "deleted"</li>
    </ul>
    <p>The downside is that your table keeps growing. To handle that, companies periodically archive soft-deleted rows to a separate cold-storage table.</p>
    <hr>
    <h2>Cascading Deletes with Foreign Keys</h2>
    <p>If your <code>orders</code> table has a foreign key referencing the <code>users</code> table, and you try to delete a user who has orders, the database will block the delete to prevent orphaned rows.</p>
    <p>You have two options:</p>
    <p><strong>Option 1: Delete child rows first:</strong></p>
    <pre><code class="language-sql">DELETE FROM orders WHERE user_id = 'U101';
DELETE FROM users WHERE user_id = 'U101';</code></pre>
    <p><strong>Option 2: Set the foreign key to CASCADE:</strong></p>
    <p>If the foreign key was defined with <code>ON DELETE CASCADE</code>, deleting the user automatically deletes all their orders. This is powerful but dangerous if not thought through carefully.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>DELETE without WHERE removes all rows.</strong> The table structure stays. It looks like nothing happened. But when you do <code>SELECT * FROM orders</code>, you get zero rows back. This is one of the most painful moments in a developer's career.</p>
    <p><strong>Thinking DELETE and DROP are the same.</strong> DELETE removes rows. DROP removes the table. Very different.</p>
    <p><strong>Forgetting foreign key constraints.</strong> If you try to delete a parent row that has child rows in another table, and there is no CASCADE, the database throws a foreign key violation error.</p>
    <p><strong>DELETE is not always instant.</strong> On a large table with millions of rows, a bulk DELETE can lock the table and cause performance issues. For large cleanups, consider deleting in batches.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p><strong>Mistake 1: Running DELETE without a WHERE clause in a prod console.</strong> Always double-check that your cursor is on the right statement before executing. Using a transaction with BEGIN/ROLLBACK as a safety net saves lives.</p>
    <p><strong>Mistake 2: Confusing DELETE FROM table and TRUNCATE TABLE.</strong> They both empty a table but behave differently in transactions and with auto-increment counters.</p>
    <p><strong>Mistake 3: Deleting a parent record without handling child records.</strong> Always check for foreign key dependencies before deleting rows that other tables reference.</p>
    <p><strong>Mistake 4: Not checking row count before a bulk delete.</strong> Run a <code>SELECT COUNT(*)</code> with the same WHERE condition. If you expect 47 rows and the count shows 4,700, something is wrong with your filter.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Always run the equivalent SELECT before DELETE:</p>
    <pre><code class="language-sql">-- First:
SELECT COUNT(*) FROM orders WHERE status = 'cancelled' AND order_date &lt; '2023-01-01';
-- Verify the count matches your expectations

-- Then:
DELETE FROM orders WHERE status = 'cancelled' AND order_date &lt; '2023-01-01';</code></pre>
    <p>Use transactions for any non-trivial delete:</p>
    <pre><code class="language-sql">BEGIN;
DELETE FROM orders WHERE status = 'cancelled' AND order_date &lt; '2023-01-01';
-- Check row count
SELECT COUNT(*) FROM orders;
-- If satisfied:
COMMIT;
-- If something is wrong:
-- ROLLBACK;</code></pre>
    <p>For large tables, delete in batches to avoid locking issues:</p>
    <pre><code class="language-sql">-- Delete 1000 rows at a time
DELETE FROM logs
WHERE created_at &lt; '2023-01-01'
LIMIT 1000;
-- Run this in a loop until COUNT returns 0</code></pre>
    <p>Consider soft deletes for business-critical data instead of hard deletes.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At IRCTC, when a train is cancelled and all tickets for that train must be voided, a DELETE or status-update runs across the <code>bookings</code> table. At Paytm, expired OTP records are purged from a <code>otp_sessions</code> table every hour using a scheduled DELETE. At Ola, completed ride records older than a certain age are moved to an archive table and then deleted from the primary table to keep queries fast. In all these cases, the logic is: identify the rows, confirm them, delete them.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>DELETE decision tree:

  Want to remove data?
          |
          v
  Remove specific rows        Remove ALL rows         Remove the table
  (WHERE condition)           (keep structure)         entirely
          |                         |                       |
          v                         v                       v
    DELETE FROM              TRUNCATE TABLE              DROP TABLE
    table WHERE              table;                      table;
    condition;
          |
          v
   Check foreign keys?
   Soft delete instead?
   Use a transaction?
          |
          v
   Run SELECT first,
   then DELETE,
   then COMMIT</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these without looking:</p>
    <ul>
      <li>What is the difference between DELETE, TRUNCATE, and DROP?</li>
      <li>What happens when you run DELETE FROM table without a WHERE clause?</li>
      <li>Why do many production systems prefer soft deletes over hard deletes?</li>
      <li>What is a cascading delete and when should you be careful with it?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a DELETE statement to remove all users from a <code>users</code> table at BookMyShow where <code>account_status = 'suspended'</code> and <code>last_login < '2022-01-01'</code>.</li>
    </ol>
    <ol>
      <li>A test order with order_id = 9999 was created during a load test. Write the DELETE to remove it from the <code>orders</code> table. Also write the SELECT you would run before the DELETE.</li>
    </ol>
    <ol>
      <li>Compare DELETE and TRUNCATE: write one scenario where DELETE is the right choice and one where TRUNCATE is the right choice.</li>
    </ol>
    <ol>
      <li>The <code>sessions</code> table at a Paytm-like system accumulates millions of expired rows. They want to delete rows where <code>expires_at < NOW()</code> but the table has 50 million rows. What approach would you recommend and why?</li>
    </ol>
    <ol>
      <li>You want to soft-delete a customer record in the <code>customers</code> table for customer_id = 4421. Write the SQL for a soft delete, assuming the table has <code>is_deleted</code> (boolean) and <code>deleted_at</code> (timestamp) columns.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>DELETE is simple in syntax but serious in consequences. The rule every experienced analyst lives by: SELECT before you DELETE. Use a transaction. Count the rows. When in doubt, soft-delete instead. The cost of a wrong DELETE in production can be hours of recovery work. The cost of running a SELECT check first is three seconds. That trade-off is never worth ignoring.</p>
  `,
  'mod5-t4': `
    <h1>MERGE and UPSERT: Update If It Exists, Insert If It Doesn't</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Simran works on the analytics platform at PhonePe. Every night at midnight, a pipeline runs and pushes daily transaction summaries into a <code>daily_sales</code> table. Each row represents one merchant's total sales for that day.</p>
    <p>The first time the pipeline runs for a given date, it needs to INSERT new rows. But sometimes the pipeline runs twice: maybe it crashed at 11:58 PM and restarted at 12:02 AM, or a late transaction came in and triggered a recalculation. When that happens, the rows for that date already exist. The pipeline cannot just INSERT again (duplicate key error) and it cannot just UPDATE (what if it is genuinely the first run?).</p>
    <p>Simran's manager says: "If the row for today's date and merchant already exists, update the sales total. If it does not exist, create it." This is the exact problem MERGE and UPSERT were built to solve.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>There is a recurring situation in data engineering and application development: you receive a batch of records, and you do not know for each one whether it already exists in your table. You cannot blindly INSERT because duplicates will error out. You cannot blindly UPDATE because new records will silently do nothing. Writing separate IF-EXISTS-THEN-UPDATE-ELSE-INSERT logic in application code is verbose, error-prone, and runs two round trips to the database. SQL has a cleaner solution built into the language.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>MERGE was introduced in SQL:2003 as a standard way to synchronize a target table with a source. The core idea: for each incoming row, check whether it already exists in the target. If it does, update it. If it does not, insert it. One statement handles both cases atomically, meaning either the whole operation succeeds or none of it does.</p>
    <p>Different databases implemented this concept with slightly different syntax, which is why you see MERGE in SQL Server and Oracle, and ON CONFLICT or ON DUPLICATE KEY UPDATE in PostgreSQL and MySQL respectively.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Picture a hotel's daily guest register. At check-in, the receptionist looks up the guest's name. If the guest already has an entry (returning guest from earlier today), they update the room number. If the guest is new, they write a fresh entry. They do not check first in one system and then write in another. It is one operation: look up, then act based on what they find. MERGE works the same way.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Incoming source data (from pipeline):
+-------------+------------+-------------+
| merchant_id | sale_date  | total_sales |
+-------------+------------+-------------+
| M001        | 2024-06-15 | 84000       |
| M002        | 2024-06-15 | 52000       |   &lt;-- M002 is new
+-------------+------------+-------------+

Existing target table: daily_sales
+-------------+------------+-------------+
| merchant_id | sale_date  | total_sales |
+-------------+------------+-------------+
| M001        | 2024-06-15 | 71000       |   &lt;-- already exists, needs update
| M003        | 2024-06-15 | 39000       |
+-------------+------------+-------------+

After MERGE:
+-------------+------------+-------------+
| merchant_id | sale_date  | total_sales |
+-------------+------------+-------------+
| M001        | 2024-06-15 | 84000       |  &lt;-- updated
| M003        | 2024-06-15 | 39000       |  &lt;-- untouched
| M002        | 2024-06-15 | 52000       |  &lt;-- inserted
+-------------+------------+-------------+</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>MERGE and UPSERT both follow the same logical flow:</p>
    <ol>
      <li>For each row in the source, look for a matching row in the target using a join condition (usually on a primary key or unique key)</li>
      <li>If a match is found: execute the MATCHED branch (usually UPDATE)</li>
      <li>If no match is found: execute the NOT MATCHED branch (usually INSERT)</li>
      <li>The whole operation is atomic: either it all goes through or none of it does</li>
    </ol>
    <p>The difference between MERGE and UPSERT is syntax. MERGE is a full statement that explicitly defines source, target, and both branches. UPSERT is a shorthand built into INSERT: try to insert, and if there is a conflict on a unique key, do the update instead.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <h3>MERGE syntax (SQL Server and Oracle)</h3>
    <pre><code class="language-sql">MERGE INTO daily_sales AS target
USING incoming_sales AS source
ON target.merchant_id = source.merchant_id
   AND target.sale_date = source.sale_date
WHEN MATCHED THEN
    UPDATE SET target.total_sales = source.total_sales,
               target.updated_at = GETDATE()
WHEN NOT MATCHED THEN
    INSERT (merchant_id, sale_date, total_sales, updated_at)
    VALUES (source.merchant_id, source.sale_date, source.total_sales, GETDATE());</code></pre>
    <p>You can also add a WHEN NOT MATCHED BY SOURCE branch to delete rows from the target that no longer appear in the source, making the target a perfect mirror of the source.</p>
    <h3>UPSERT with INSERT ON CONFLICT (PostgreSQL)</h3>
    <pre><code class="language-sql">INSERT INTO daily_sales (merchant_id, sale_date, total_sales, updated_at)
VALUES ('M001', '2024-06-15', 84000, NOW())
ON CONFLICT (merchant_id, sale_date)
DO UPDATE SET
    total_sales = EXCLUDED.total_sales,
    updated_at = NOW();</code></pre>
    <p><code>EXCLUDED</code> is a special keyword in PostgreSQL that refers to the row that was proposed for insertion but was blocked by the conflict. So <code>EXCLUDED.total_sales</code> means the new value you were trying to insert.</p>
    <p>If you want to handle a conflict by doing nothing (ignore duplicates silently):</p>
    <pre><code class="language-sql">INSERT INTO daily_sales (merchant_id, sale_date, total_sales)
VALUES ('M001', '2024-06-15', 84000)
ON CONFLICT (merchant_id, sale_date) DO NOTHING;</code></pre>
    <h3>UPSERT with INSERT ON DUPLICATE KEY UPDATE (MySQL)</h3>
    <pre><code class="language-sql">INSERT INTO daily_sales (merchant_id, sale_date, total_sales, updated_at)
VALUES ('M001', '2024-06-15', 84000, NOW())
ON DUPLICATE KEY UPDATE
    total_sales = VALUES(total_sales),
    updated_at = NOW();</code></pre>
    <p><code>VALUES(total_sales)</code> in MySQL refers to the value that was proposed in the INSERT. It is the MySQL equivalent of PostgreSQL's <code>EXCLUDED</code>.</p>
    <p>For inserting multiple rows in one go with MySQL UPSERT:</p>
    <pre><code class="language-sql">INSERT INTO daily_sales (merchant_id, sale_date, total_sales)
VALUES
  ('M001', '2024-06-15', 84000),
  ('M002', '2024-06-15', 52000),
  ('M003', '2024-06-15', 39000)
ON DUPLICATE KEY UPDATE
    total_sales = VALUES(total_sales);</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>MERGE INTO target</code></td><td>The table you want to update or insert into</td><td><code>MERGE INTO daily_sales AS target</code></td></tr>
      <tr><td><code>USING source</code></td><td>The source of incoming data (table, subquery, or VALUES)</td><td><code>USING incoming_sales AS source</code></td></tr>
      <tr><td><code>ON condition</code></td><td>How to match rows between source and target</td><td><code>ON target.merchant_id = source.merchant_id</code></td></tr>
      <tr><td><code>WHEN MATCHED THEN UPDATE</code></td><td>What to do when a matching row exists</td><td><code>UPDATE SET total_sales = source.total_sales</code></td></tr>
      <tr><td><code>WHEN NOT MATCHED THEN INSERT</code></td><td>What to do when no match is found</td><td><code>INSERT (col1, col2) VALUES (...)</code></td></tr>
      <tr><td><code>ON CONFLICT (col)</code></td><td>PostgreSQL: which unique key conflict to handle</td><td><code>ON CONFLICT (merchant_id, sale_date)</code></td></tr>
      <tr><td><code>DO UPDATE SET</code></td><td>PostgreSQL: what to do when the conflict fires</td><td><code>DO UPDATE SET total_sales = EXCLUDED.total_sales</code></td></tr>
      <tr><td><code>EXCLUDED</code></td><td>PostgreSQL: refers to the blocked proposed row</td><td><code>EXCLUDED.total_sales</code></td></tr>
      <tr><td><code>ON DUPLICATE KEY UPDATE</code></td><td>MySQL: fires when a unique/primary key conflict occurs</td><td><code>ON DUPLICATE KEY UPDATE total_sales = VALUES(total_sales)</code></td></tr>
      <tr><td><code>VALUES(col)</code></td><td>MySQL: the value that was proposed in the INSERT</td><td><code>VALUES(total_sales)</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample table: <code>inventory</code> at Flipkart warehouse</strong></p>
    <pre><code>+------------+------------------+----------+------------+
| product_id | product_name     | quantity | updated_at |
+------------+------------------+----------+------------+
| P001       | OnePlus Nord 5G  | 150      | 2024-06-10 |
| P002       | Samsung TV 43"   | 40       | 2024-06-10 |
| P003       | Noise SmartWatch | 200      | 2024-06-10 |
+------------+------------------+----------+------------+</code></pre>
    <h3>Example 1: MERGE to sync a new stock delivery (SQL Server)</h3>
    <p>Business question: A new delivery arrived. P001 has 300 units, P004 is a brand new product with 75 units. Update P001 and insert P004.</p>
    <pre><code class="language-sql">MERGE INTO inventory AS target
USING (
    VALUES ('P001', 'OnePlus Nord 5G', 300),
           ('P004', 'Boat Rockerz 255', 75)
) AS source (product_id, product_name, quantity)
ON target.product_id = source.product_id
WHEN MATCHED THEN
    UPDATE SET target.quantity = source.quantity,
               target.updated_at = GETDATE()
WHEN NOT MATCHED THEN
    INSERT (product_id, product_name, quantity, updated_at)
    VALUES (source.product_id, source.product_name, source.quantity, GETDATE());</code></pre>
    <p>Result: P001's quantity becomes 300. P004 is inserted as a new row. P002 and P003 are untouched.</p>
    <h3>Example 2: PostgreSQL ON CONFLICT for a daily sales sync</h3>
    <p>Business question: The nightly pipeline pushes today's sales. If the row exists, update the total. If not, create it.</p>
    <pre><code class="language-sql">INSERT INTO daily_sales (merchant_id, sale_date, total_sales, updated_at)
VALUES
  ('M001', '2024-06-15', 84000, NOW()),
  ('M002', '2024-06-15', 52000, NOW()),
  ('M003', '2024-06-15', 39000, NOW())
ON CONFLICT (merchant_id, sale_date)
DO UPDATE SET
    total_sales = EXCLUDED.total_sales,
    updated_at = NOW();</code></pre>
    <p>Result: Existing rows are updated. New rows are inserted. One statement handles both cases for all three merchants.</p>
    <h3>Example 3: MySQL UPSERT for updating product stock</h3>
    <p>Business question: A warehouse management system pushes stock counts. Use MySQL UPSERT to keep the inventory current.</p>
    <pre><code class="language-sql">INSERT INTO inventory (product_id, product_name, quantity)
VALUES ('P002', 'Samsung TV 43"', 65)
ON DUPLICATE KEY UPDATE
    quantity = VALUES(quantity),
    updated_at = NOW();</code></pre>
    <p>Result: If P002 exists, quantity is updated to 65. If P002 does not exist, a new row is created.</p>
    <h3>Example 4: UPSERT with DO NOTHING for deduplication</h3>
    <p>Business question: Events are streaming in from multiple sources. Some might be duplicates. Insert each event, but if the event_id already exists, ignore it.</p>
    <pre><code class="language-sql">INSERT INTO events (event_id, merchant_id, event_type, created_at)
VALUES ('EVT-9981', 'M001', 'payment_received', NOW())
ON CONFLICT (event_id) DO NOTHING;</code></pre>
    <p>Result: If EVT-9981 already exists in the table, nothing happens. No error, no duplicate. If it does not exist, it is inserted.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Forgetting that ON CONFLICT requires a unique constraint.</strong> In PostgreSQL, the column(s) you specify in ON CONFLICT must have a UNIQUE or PRIMARY KEY constraint on them. If they do not, the database throws an error saying there is no unique constraint for the conflict target.</p>
    <p><strong>MySQL's VALUES() vs PostgreSQL's EXCLUDED.</strong> These serve the same purpose but use different syntax. Mixing them up across databases is a common mistake when working in a mixed environment.</p>
    <p><strong>MERGE source ordering.</strong> In SQL Server MERGE, if the source has multiple rows that match the same target row, the behavior is undefined and can cause errors. Always ensure your source has unique rows per match key.</p>
    <p><strong>Thinking UPSERT is always better than separate INSERT and UPDATE.</strong> For very simple cases, UPSERT is cleaner. But MERGE with its explicit MATCHED and NOT MATCHED branches gives you more control and is easier to read when the logic is complex.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p><strong>Mistake 1: Using MERGE without checking source uniqueness.</strong> If the USING source has duplicate rows for the same match key, SQL Server MERGE raises an error. Deduplicate your source before merging.</p>
    <p><strong>Mistake 2: Updating all columns when you only need to update a few.</strong> When a conflict fires, you should only update the columns that actually changed. Overwriting unchanged columns with the same values is harmless but wasteful and can cause issues with audit triggers.</p>
    <p><strong>Mistake 3: Not specifying all columns in the INSERT branch of MERGE.</strong> If the NOT MATCHED branch omits a NOT NULL column with no default, the insert will fail for new rows.</p>
    <p><strong>Mistake 4: Assuming ON CONFLICT fires for all errors.</strong> ON CONFLICT only handles unique constraint violations. Type mismatches, NULL violations on other columns, and CHECK constraint failures are separate errors that ON CONFLICT does not catch.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Use UPSERT for simple, single-table syncs where the logic is straightforward. Use MERGE when you need full control: update some columns when matched, skip others, delete rows not in the source, or handle complex multi-table logic.</p>
    <p>Always verify your match key has a proper unique or primary key constraint before relying on ON CONFLICT or ON DUPLICATE KEY.</p>
    <p>Test your UPSERT logic by inserting a new row (confirm INSERT path) and then inserting the same row again (confirm UPDATE path). Both branches should behave as expected.</p>
    <p>When using MERGE in production pipelines (like a nightly ETL job at Paytm or PhonePe), wrap it in a transaction and log how many rows were inserted vs updated for monitoring.</p>
    <p>For PostgreSQL, prefer ON CONFLICT over writing your own IF-EXISTS logic because ON CONFLICT is atomic. Two concurrent sessions cannot both see "no row exists" and both try to INSERT; one will succeed and the other will hit the conflict handler.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At PhonePe, a nightly job uses UPSERT to update merchant transaction summaries. If a merchant already has a row for today, their totals are refreshed. If today is a new merchant's first transaction, a row is created. At Flipkart, inventory sync jobs use MERGE to align warehouse stock counts: products that already exist get quantity updates, new products are inserted. At Byju's, student progress tables are updated using UPSERT: if a student has already started a chapter, their progress percentage is updated; if it is their first time, a new record is created. In all these cases, the business requirement is the same: one operation that handles both cases without the application needing to check first.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>MERGE / UPSERT flow:

   Incoming row from source
           |
           v
   Does a matching row
   exist in target?
   (check via ON condition)
        /       \
      YES        NO
       |          |
       v          v
  WHEN MATCHED  WHEN NOT MATCHED
  --&gt; UPDATE    --&gt; INSERT
  the existing  a new row
  row           into target
       |          |
       v          v
   Change committed to table
   (atomic: both branches in same transaction)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these without looking:</p>
    <ul>
      <li>What problem does MERGE or UPSERT solve that a plain INSERT or UPDATE cannot handle alone?</li>
      <li>What does EXCLUDED refer to in a PostgreSQL ON CONFLICT statement?</li>
      <li>What is the MySQL equivalent of PostgreSQL's EXCLUDED?</li>
      <li>Why must the conflict column in ON CONFLICT have a UNIQUE or PRIMARY KEY constraint?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a PostgreSQL UPSERT for a <code>product_prices</code> table with columns product_id, price, updated_at. The unique key is product_id. If the product already exists, update price and updated_at. If not, insert a new row.</li>
    </ol>
    <ol>
      <li>Write a MySQL UPSERT for an <code>employee_login_counts</code> table with columns employee_id, login_count, last_login. Every time an employee logs in, you want to insert their first login or increment their login count if they already have a row.</li>
    </ol>
    <ol>
      <li>Write a SQL Server MERGE that syncs a <code>customers</code> table from a <code>customers_staging</code> table. The match key is customer_id. When matched, update name and phone. When not matched, insert the full row.</li>
    </ol>
    <ol>
      <li>A PostgreSQL table called <code>stock_levels</code> has columns: warehouse_id, product_id, stock_count. The pair (warehouse_id, product_id) is a unique constraint. Write an ON CONFLICT UPSERT that updates stock_count when the pair already exists.</li>
    </ol>
    <ol>
      <li>A data pipeline loads daily revenue per city into a <code>city_revenue</code> table. Sometimes the pipeline runs twice in a day due to retries. Explain why UPSERT is a better solution here than writing application-level check-then-insert logic, and write the PostgreSQL UPSERT for it.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>MERGE and UPSERT are the tools that make data pipelines reliable. Without them, syncing data between systems requires brittle application logic: query first, check result, branch to insert or update, handle race conditions. With MERGE or UPSERT, the database handles all of that in one atomic statement. Once you understand which syntax your database uses (MERGE for SQL Server and Oracle, ON CONFLICT for PostgreSQL, ON DUPLICATE KEY for MySQL) and when to apply it, you will use it constantly in any data-intensive role.</p>
  `,

  // ── Module 6 ─────────────────────────────────────────────────
  'mod6-t1': `
    <h1>COUNT(): How to Count Rows in Your Query Results</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Priya had just joined Swiggy as a data analyst intern. On her third day, her manager Rohan walked over and said, "We need to know how many orders came in from Bangalore yesterday, and also how many unique customers placed those orders. Can you pull that by end of day?"</p>
    <p>Priya opened her laptop, stared at the <code>orders</code> table, and realised she had no idea how to count rows in SQL. She knew the data was there. She just did not know how to ask for it. That is exactly where COUNT() comes in.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You have a table with thousands of rows. Your manager wants a number. Not the rows themselves, just the count. How many orders? How many customers signed up this month? How many transactions were above 500 rupees?</p>
    <p>You cannot manually scroll through the table. You need SQL to count for you.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Before aggregate functions existed, you had to fetch all the rows and count them in your application code. That meant pulling potentially millions of records across the network just to count them. COUNT() lets the database do the counting itself and return just a single number. It is faster, simpler, and far more practical.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you have a stack of order receipts on your desk. If someone asks "how many receipts do you have?" you count them all, including blank ones. That is COUNT(*). If they ask "how many receipts have a customer name written on them?" you skip the blank ones. That is COUNT(column_name).</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: orders (5 rows)
+----------+-------------+----------+----------+--------+
| order_id | customer_id | city     | status   | amount |
+----------+-------------+----------+----------+--------+
| 1        | 101         | Bangalore| Delivered| 320    |
| 2        | NULL        | Mumbai   | Cancelled| 150    |
| 3        | 102         | Bangalore| Delivered| 480    |
| 4        | 103         | Delhi    | Pending  | 200    |
| 5        | NULL        | Bangalore| Delivered| 560    |
+----------+-------------+----------+----------+--------+

COUNT(*)         = 5   (counts every row)
COUNT(customer_id) = 3   (skips the 2 NULL rows)
COUNT(DISTINCT city) = 3 (Bangalore, Mumbai, Delhi)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>COUNT() is an aggregate function. It scans the rows you give it and returns a single integer. The key rules are:</p>
    <ul>
      <li>COUNT(*) counts every row, including rows where some columns are NULL</li>
      <li>COUNT(column_name) counts only rows where that column is NOT NULL</li>
      <li>COUNT(DISTINCT column_name) counts unique non-NULL values in that column</li>
      <li>COUNT always returns a number, never NULL, even on an empty table (it returns 0)</li>
    </ul>
    <p>This distinction between COUNT(*) and COUNT(column) trips up a lot of beginners. They look the same but behave very differently when NULLs are present.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Count all orders
SELECT COUNT(*) AS total_orders
FROM orders;

-- Count orders where customer_id is not NULL
SELECT COUNT(customer_id) AS orders_with_customer
FROM orders;

-- Count unique cities
SELECT COUNT(DISTINCT city) AS unique_cities
FROM orders;

-- Count orders from Bangalore only
SELECT COUNT(*) AS bangalore_orders
FROM orders
WHERE city = 'Bangalore';</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>COUNT(*)</td><td>Counts all rows including NULLs</td><td>COUNT(*) returns 5 for a 5-row table</td></tr>
      <tr><td>COUNT(column)</td><td>Counts rows where that column is not NULL</td><td>COUNT(customer_id) skips NULL customer rows</td></tr>
      <tr><td>COUNT(DISTINCT column)</td><td>Counts unique non-NULL values</td><td>COUNT(DISTINCT city) returns 3 for Bangalore, Mumbai, Delhi</td></tr>
      <tr><td>WHERE clause</td><td>Filters rows before counting</td><td>WHERE city = 'Bangalore' counts only Bangalore rows</td></tr>
      <tr><td>AS alias</td><td>Gives the result column a readable name</td><td>AS total_orders names the output column</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: orders (Swiggy)</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>status</th><th>amount</th></tr>
      <tr><td>1</td><td>101</td><td>Bangalore</td><td>Delivered</td><td>320</td></tr>
      <tr><td>2</td><td>NULL</td><td>Mumbai</td><td>Cancelled</td><td>150</td></tr>
      <tr><td>3</td><td>102</td><td>Bangalore</td><td>Delivered</td><td>480</td></tr>
      <tr><td>4</td><td>103</td><td>Delhi</td><td>Pending</td><td>200</td></tr>
      <tr><td>5</td><td>NULL</td><td>Bangalore</td><td>Delivered</td><td>560</td></tr>
      <tr><td>6</td><td>104</td><td>Mumbai</td><td>Delivered</td><td>310</td></tr>
      <tr><td>7</td><td>105</td><td>Delhi</td><td>Delivered</td><td>420</td></tr>
      <tr><td>8</td><td>101</td><td>Bangalore</td><td>Cancelled</td><td>180</td></tr>
    </table>
    <h3>Example 1: How many total orders are there?</h3>
    <p>Business question: Rohan wants the total order count in the system.</p>
    <pre><code class="language-sql">SELECT COUNT(*) AS total_orders
FROM orders;</code></pre>
    <p>Output: <code>total_orders = 8</code>. Every row is counted including the two rows where customer_id is NULL.</p>
    <h3>Example 2: How many orders have a known customer?</h3>
    <p>Business question: How many orders are actually linked to a customer account?</p>
    <pre><code class="language-sql">SELECT COUNT(customer_id) AS orders_with_customer
FROM orders;</code></pre>
    <p>Output: <code>orders_with_customer = 6</code>. The two rows where customer_id is NULL are skipped.</p>
    <h3>Example 3: How many unique cities do we have orders from?</h3>
    <p>Business question: In how many cities is Swiggy currently receiving orders?</p>
    <pre><code class="language-sql">SELECT COUNT(DISTINCT city) AS cities_active
FROM orders;</code></pre>
    <p>Output: <code>cities_active = 3</code>. Even though Bangalore appears four times, it is counted once.</p>
    <h3>Example 4: How many delivered orders came from Bangalore?</h3>
    <p>Business question: Rohan's original question from the story.</p>
    <pre><code class="language-sql">SELECT COUNT(*) AS delivered_bangalore
FROM orders
WHERE city = 'Bangalore' AND status = 'Delivered';</code></pre>
    <p>Output: <code>delivered_bangalore = 3</code>. Only rows matching both conditions are counted.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The biggest confusion is COUNT(<em>) vs COUNT(column). People assume they are the same. They are not. If your column has NULLs, COUNT(column) gives you a smaller number than COUNT(</em>), and both answers are technically correct for different questions.</p>
    <p>Another issue: people expect COUNT to return NULL on an empty result set. It never does. Even if no rows match your WHERE clause, COUNT returns 0.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Writing COUNT(order_id, customer_id) thinking it will count combinations. It does not. COUNT takes only one argument or *.</li>
      <li>Using COUNT on the wrong column when NULL matters. If you want total rows, use COUNT(*). If you want to check completeness of a column, use COUNT(column).</li>
      <li>Forgetting DISTINCT when your question involves unique values. COUNT(city) and COUNT(DISTINCT city) are very different.</li>
      <li>Selecting other columns alongside COUNT without GROUP BY. That will either throw an error or give wrong results depending on your database.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use COUNT(*) when you want total rows in a table or result set</li>
      <li>Use COUNT(column) specifically when you want to know how complete a column is</li>
      <li>Use aliases like AS total_orders so your output column has a meaningful name</li>
      <li>Combine COUNT with WHERE to focus on a specific subset before counting</li>
      <li>When in doubt, run COUNT(*) and COUNT(your_column) side by side to spot NULL gaps</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, the ops team uses COUNT to track daily order volume per city. At Flipkart, the business team counts how many products are live in each category. At Paytm, the fraud team counts how many transactions came from unverified accounts (where customer_id is NULL). At IRCTC, the platform team counts how many booking attempts were made versus how many were confirmed. These are not fancy queries. They are basic COUNT queries running behind every dashboard you see.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Your Table (many rows)
        |
        v
   COUNT(*)         --&gt; Counts every row
   COUNT(col)       --&gt; Counts non-NULL values only
   COUNT(DISTINCT)  --&gt; Counts unique non-NULL values
        |
        v
   Single Number Returned</code></pre>
    <p>COUNT collapses many rows into one number. That is the core idea of all aggregate functions.</p>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>What is the difference between COUNT(*) and COUNT(column)?</li>
      <li>What does COUNT return if the table is empty?</li>
      <li>How do you count only unique values?</li>
      <li>Can COUNT be used without WHERE? What does it return then?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to count the total number of orders in the <code>orders</code> table at Swiggy.</li>
    </ol>
    <ol>
      <li>Write a query to count how many orders have a non-NULL customer_id.</li>
    </ol>
    <ol>
      <li>How many unique cities appear in the <code>orders</code> table? Write the query.</li>
    </ol>
    <ol>
      <li>Count the number of cancelled orders using a WHERE clause.</li>
    </ol>
    <ol>
      <li>Write a query that shows the count of delivered orders and the count of cancelled orders side by side in the same result row. (Hint: use COUNT with CASE or two subqueries.)</li>
    </ol>
    <ol>
      <li>If a table has 100 rows and the <code>amount</code> column is NULL in 15 of them, what will COUNT(*) return? What will COUNT(amount) return?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>COUNT() is probably the first aggregate function you will use on the job, and you will use it every single day. The difference between COUNT(*) and COUNT(column) seems small but it reflects a fundamental understanding of how NULLs work in SQL. Get that right early and everything else becomes easier.</p>
  `,
  'mod6-t2': `
    <h1>SUM(): Adding Up Values Across Rows</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Arjun had been working at Flipkart for two months as a junior analyst when his manager Kavitha dropped a message on Slack: "I need this week's total sales revenue from electronics, broken down by city. EOD please."</p>
    <p>Arjun knew all the individual sale records were sitting in the <code>sales</code> table. But there were over 40,000 rows. Adding them up manually was not an option. He needed SQL to do the addition for him. That is exactly what SUM() is built for.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You have a table full of individual transaction amounts, salaries, or prices. Someone asks for the total. Not the individual rows, just the grand total or the total per group. You need a way to tell SQL: "add up all the values in this column."</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>In the early days of databases, to get a total you would pull all the rows into your application, loop through them, and add them up yourself. That was slow and error-prone, especially with millions of rows. SUM() moves this addition directly into the database engine, which is optimised for exactly this kind of operation. You get one number back instead of millions of rows.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you are a cashier at a store and you have a stack of bills from the day's sales. SUM() is like feeding all those bills into a counting machine. It does not matter what order they go in. At the end you get one total.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: sales (partial)
+---------+-----------+-------------+----------+--------+
| sale_id | product   | category    | city     | amount |
+---------+-----------+-------------+----------+--------+
| 1       | Phone     | Electronics | Mumbai   | 15000  |
| 2       | Laptop    | Electronics | Delhi    | 45000  |
| 3       | TV        | Electronics | Mumbai   | 32000  |
| 4       | Shirt     | Clothing    | Delhi    | 800    |
| 5       | Headphones| Electronics | Mumbai   | 2500   |
+---------+-----------+-------------+----------+--------+

SUM(amount)                   = 95300  (all rows)
SUM(amount) WHERE city='Mumbai' = 49500 (Mumbai only)
SUM grouped by city:
  Mumbai = 49500
  Delhi  = 45800</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>SUM() adds up all the values in a specified numeric column. Key rules:</p>
    <ul>
      <li>SUM works only on numeric columns. Using it on a text column throws an error.</li>
      <li>SUM automatically ignores NULL values. If a row has NULL in the amount column, it is skipped silently.</li>
      <li>If all values are NULL, SUM returns NULL (not zero). This is different from COUNT.</li>
      <li>SUM combined with GROUP BY gives you per-group totals.</li>
    </ul>
    <p>The NULL behaviour is important. It means your totals might not include all rows. If data is missing, your sum will be lower than the true total.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Total revenue across all sales
SELECT SUM(amount) AS total_revenue
FROM sales;

-- Total revenue for Electronics only
SELECT SUM(amount) AS electronics_revenue
FROM sales
WHERE category = 'Electronics';

-- Total revenue per city
SELECT city, SUM(amount) AS city_revenue
FROM sales
GROUP BY city;

-- Total revenue per category per city, sorted highest first
SELECT city, category, SUM(amount) AS revenue
FROM sales
GROUP BY city, category
ORDER BY revenue DESC;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>SUM(column)</td><td>Adds all non-NULL values in the column</td><td>SUM(amount) adds up all sale amounts</td></tr>
      <tr><td>WHERE clause</td><td>Filters rows before SUM runs</td><td>WHERE category = 'Electronics' limits rows first</td></tr>
      <tr><td>GROUP BY column</td><td>Splits rows into groups; SUM runs per group</td><td>GROUP BY city gives one total per city</td></tr>
      <tr><td>ORDER BY</td><td>Sorts the output</td><td>ORDER BY revenue DESC shows highest city first</td></tr>
      <tr><td>AS alias</td><td>Names the output column</td><td>AS total_revenue makes the result readable</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: sales (Flipkart)</strong></p>
    <table>
      <tr><th>sale_id</th><th>product</th><th>category</th><th>city</th><th>amount</th><th>sale_date</th></tr>
      <tr><td>1</td><td>Phone</td><td>Electronics</td><td>Mumbai</td><td>15000</td><td>2024-01-05</td></tr>
      <tr><td>2</td><td>Laptop</td><td>Electronics</td><td>Delhi</td><td>45000</td><td>2024-01-06</td></tr>
      <tr><td>3</td><td>TV</td><td>Electronics</td><td>Mumbai</td><td>32000</td><td>2024-01-06</td></tr>
      <tr><td>4</td><td>Shirt</td><td>Clothing</td><td>Delhi</td><td>800</td><td>2024-01-07</td></tr>
      <tr><td>5</td><td>Headphones</td><td>Electronics</td><td>Mumbai</td><td>2500</td><td>2024-01-07</td></tr>
      <tr><td>6</td><td>Jeans</td><td>Clothing</td><td>Bangalore</td><td>1200</td><td>2024-01-08</td></tr>
      <tr><td>7</td><td>Tablet</td><td>Electronics</td><td>Delhi</td><td>18000</td><td>2024-01-08</td></tr>
      <tr><td>8</td><td>Shoes</td><td>Clothing</td><td>Mumbai</td><td>3500</td><td>2024-01-09</td></tr>
    </table>
    <h3>Example 1: What is Flipkart's total revenue across all sales?</h3>
    <p>Business question: Kavitha wants the overall revenue number for the week.</p>
    <pre><code class="language-sql">SELECT SUM(amount) AS total_revenue
FROM sales;</code></pre>
    <p>Output: <code>total_revenue = 118000</code>. Every row's amount is added together.</p>
    <h3>Example 2: What is the total revenue from Electronics only?</h3>
    <p>Business question: How much did the Electronics category bring in?</p>
    <pre><code class="language-sql">SELECT SUM(amount) AS electronics_revenue
FROM sales
WHERE category = 'Electronics';</code></pre>
    <p>Output: <code>electronics_revenue = 112500</code>. The WHERE clause filters out Clothing rows before SUM runs.</p>
    <h3>Example 3: What is the total revenue per city?</h3>
    <p>Business question: Which city is generating the most revenue for Flipkart?</p>
    <pre><code class="language-sql">SELECT city, SUM(amount) AS city_revenue
FROM sales
GROUP BY city
ORDER BY city_revenue DESC;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Mumbai: 53000</li>
      <li>Delhi: 63800</li>
      <li>Bangalore: 1200</li>
    </ul>
    <h3>Example 4: What is the total revenue per category, per city?</h3>
    <p>Business question: Give me a breakdown of revenue by both category and city.</p>
    <pre><code class="language-sql">SELECT city, category, SUM(amount) AS revenue
FROM sales
GROUP BY city, category
ORDER BY city, revenue DESC;</code></pre>
    <p>Output shows each city-category combination with its total. For example, Mumbai-Electronics: 49500, Mumbai-Clothing: 3500, and so on.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>SUM silently ignores NULLs. This is convenient, but it can mislead you. If 20% of your amount column is NULL because data was not captured properly, your SUM will be lower than actual revenue. You will not get a warning. The number just comes back quietly wrong.</p>
    <p>Another trap: using SUM on a text column. If your <code>amount</code> column is stored as VARCHAR instead of a number, SUM will either throw an error or return 0 depending on the database. Always verify your column types before aggregating.</p>
    <p>Also note: if every value in the column is NULL, SUM returns NULL, not 0. This surprises people who expect zero.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using SUM on a non-numeric column. Always check the column data type first.</li>
      <li>Not using GROUP BY when you want per-group sums. Without GROUP BY, SUM collapses everything into one row.</li>
      <li>Selecting extra columns alongside SUM without including them in GROUP BY. This will throw an error in most databases.</li>
      <li>Assuming SUM returns 0 when all values are NULL. It returns NULL.</li>
      <li>Writing SUM(amount, tax) thinking it will add both columns. SUM takes one argument. Use SUM(amount) + SUM(tax) instead.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always alias your SUM column with a meaningful name using AS</li>
      <li>Pair SUM with GROUP BY when you need per-group totals rather than one grand total</li>
      <li>Use COALESCE(column, 0) inside SUM if you want NULLs treated as zero: SUM(COALESCE(amount, 0))</li>
      <li>Round the result if needed: ROUND(SUM(amount), 2)</li>
      <li>Verify data types before writing a SUM query on a new table</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, the finance team runs SUM queries every night to calculate daily gross merchandise value per category. At Zomato, the restaurant partnerships team sums order revenue per restaurant to calculate payout amounts. At PhonePe, the payments team sums transaction amounts per user to check daily limits. At Ola, the driver ops team sums earnings per driver per week for payout processing. SUM is at the core of almost every financial report in any company running on a relational database.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Table rows:
  amount: 15000
  amount: 45000
  amount: 32000
  amount: NULL   &lt;-- ignored silently
  amount: 2500
         |
         v
    SUM(amount)
         |
         v
      94500  (single number returned)


With GROUP BY city:
  Mumbai rows  --&gt; SUM --&gt; Mumbai total
  Delhi rows   --&gt; SUM --&gt; Delhi total
  Bangalore rows -&gt; SUM --&gt; Bangalore total</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>What happens when SUM encounters a NULL value?</li>
      <li>What does SUM return if all values in the column are NULL?</li>
      <li>How do you get totals per group instead of one grand total?</li>
      <li>What error will you get if you use SUM on a text column?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find the total sales amount across the entire <code>sales</code> table.</li>
    </ol>
    <ol>
      <li>Write a query to find the total revenue from the Clothing category only.</li>
    </ol>
    <ol>
      <li>Write a query to get the total revenue per category, sorted from highest to lowest.</li>
    </ol>
    <ol>
      <li>Write a query to get the total revenue per city for the Electronics category only.</li>
    </ol>
    <ol>
      <li>If the <code>amount</code> column has NULL in 3 rows out of 8, what does SUM(amount) return? What does SUM(COALESCE(amount, 0)) return?</li>
    </ol>
    <ol>
      <li>Write a query that shows each city's total revenue alongside the total number of sales in that city (combine SUM and COUNT in one query).</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>SUM() is the workhorse of financial reporting. Every revenue dashboard, every payout report, every sales summary you have ever seen in a product at a company like Flipkart or Paytm is built on top of SUM queries running in the background. Learn it well, and you will be writing those reports yourself.</p>
  `,
  'mod6-t3': `
    <h1>AVG(): Finding the Average Value in a Column</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha had been at Zomato for six weeks when her manager Suresh called a quick standup and said, "Our product team wants to know the average delivery time per city, and the average rating per cuisine type. Can you pull that today?"</p>
    <p>Neha had used SUM and COUNT before, but average was new. She knew the formula: add everything up, divide by the count. But doing that manually for every city would take forever. Then she discovered AVG(), and the query was done in three lines.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You have a column full of numbers. Customer ratings. Delivery times. Product prices. Someone asks: "What is the average?" You need a single representative number for the whole column or for each group within it.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Averages are one of the most common summaries in business. Instead of requiring you to write SUM(column) / COUNT(column) every single time and handle edge cases manually, AVG() does it in one clean function call. The database handles the division, the NULL skipping, and the grouping, all internally.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a teacher grading 30 students. She adds all the marks and divides by 30. That is the class average. AVG() is the database doing the same arithmetic across every row in your result set or group.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Column: delivery_time_mins
Values: 25, 40, 30, NULL, 35, 20

AVG calculation:
  Sum of non-NULL values = 25 + 40 + 30 + 35 + 20 = 150
  Count of non-NULL values = 5  (NULL is skipped)
  AVG = 150 / 5 = 30

If NULL were treated as 0:
  Sum = 150, Count = 6, AVG = 25  &lt;-- different and misleading</code></pre>
    <p>This is the most important thing about AVG: it skips NULLs in both the numerator AND denominator.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>AVG(column) adds up all the non-NULL values in the column and divides by the count of non-NULL rows. The key behaviours:</p>
    <ul>
      <li>NULL values are ignored completely. They are not counted in the denominator either.</li>
      <li>This can skew your average if NULLs represent missing data rather than a true absence of value.</li>
      <li>AVG works only on numeric columns.</li>
      <li>AVG with GROUP BY gives you per-group averages.</li>
      <li>ROUND(AVG(column), 2) is a common pattern to limit decimal places.</li>
    </ul>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Average delivery time across all restaurants
SELECT AVG(delivery_time_mins) AS avg_delivery
FROM restaurants;

-- Average rounded to 2 decimal places
SELECT ROUND(AVG(delivery_time_mins), 2) AS avg_delivery
FROM restaurants;

-- Average delivery time per city
SELECT city, ROUND(AVG(delivery_time_mins), 2) AS avg_delivery
FROM restaurants
GROUP BY city;

-- Average price for two per cuisine type
SELECT cuisine, ROUND(AVG(price_for_two), 2) AS avg_price
FROM restaurants
GROUP BY cuisine
ORDER BY avg_price DESC;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>AVG(column)</td><td>Calculates mean of non-NULL values</td><td>AVG(delivery_time_mins) returns average delivery time</td></tr>
      <tr><td>ROUND(AVG(...), 2)</td><td>Rounds the result to 2 decimal places</td><td>ROUND(AVG(avg_rating), 2) gives 4.23 instead of 4.2333...</td></tr>
      <tr><td>GROUP BY column</td><td>Calculates AVG separately per group</td><td>GROUP BY city gives average per city</td></tr>
      <tr><td>ORDER BY</td><td>Sorts results</td><td>ORDER BY avg_price DESC shows highest average first</td></tr>
      <tr><td>WHERE clause</td><td>Filters rows before AVG runs</td><td>WHERE city = 'Mumbai' averages only Mumbai rows</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: restaurants (Zomato)</strong></p>
    <table>
      <tr><th>restaurant_id</th><th>name</th><th>city</th><th>cuisine</th><th>avg_rating</th><th>delivery_time_mins</th><th>price_for_two</th></tr>
      <tr><td>1</td><td>Spice Garden</td><td>Mumbai</td><td>North Indian</td><td>4.2</td><td>35</td><td>600</td></tr>
      <tr><td>2</td><td>Pizza Hub</td><td>Delhi</td><td>Italian</td><td>4.5</td><td>25</td><td>800</td></tr>
      <tr><td>3</td><td>Dosa Corner</td><td>Bangalore</td><td>South Indian</td><td>4.1</td><td>20</td><td>350</td></tr>
      <tr><td>4</td><td>Burger Barn</td><td>Mumbai</td><td>Fast Food</td><td>3.8</td><td>30</td><td>450</td></tr>
      <tr><td>5</td><td>Biryani Palace</td><td>Delhi</td><td>North Indian</td><td>4.7</td><td>40</td><td>700</td></tr>
      <tr><td>6</td><td>Sushi Stop</td><td>Bangalore</td><td>Japanese</td><td>NULL</td><td>45</td><td>1200</td></tr>
      <tr><td>7</td><td>Noodle House</td><td>Mumbai</td><td>Chinese</td><td>4.0</td><td>35</td><td>550</td></tr>
      <tr><td>8</td><td>Idli World</td><td>Bangalore</td><td>South Indian</td><td>4.3</td><td>15</td><td>300</td></tr>
    </table>
    <h3>Example 1: What is the overall average rating of all restaurants on Zomato?</h3>
    <p>Business question: Suresh wants a platform-wide average rating.</p>
    <pre><code class="language-sql">SELECT ROUND(AVG(avg_rating), 2) AS platform_avg_rating
FROM restaurants;</code></pre>
    <p>Output: <code>platform_avg_rating = 4.23</code>. Note: Sushi Stop has a NULL rating and is skipped. The average is calculated over 7 restaurants, not 8.</p>
    <h3>Example 2: What is the average delivery time per city?</h3>
    <p>Business question: Which city has the fastest average delivery?</p>
    <pre><code class="language-sql">SELECT city, ROUND(AVG(delivery_time_mins), 2) AS avg_delivery_time
FROM restaurants
GROUP BY city
ORDER BY avg_delivery_time ASC;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Bangalore: 26.67 minutes (average of 20, 45, 15)</li>
      <li>Mumbai: 33.33 minutes</li>
      <li>Delhi: 32.50 minutes</li>
    </ul>
    <h3>Example 3: What is the average price for two per cuisine type?</h3>
    <p>Business question: Which cuisines are the most expensive on average?</p>
    <pre><code class="language-sql">SELECT cuisine, ROUND(AVG(price_for_two), 2) AS avg_price
FROM restaurants
GROUP BY cuisine
ORDER BY avg_price DESC;</code></pre>
    <p>Output shows Japanese at the top (1200), then North Indian (650), Italian (800), and so on.</p>
    <h3>Example 4: How does AVG differ from manually doing SUM divided by COUNT?</h3>
    <p>Business question: Verify the AVG result for Mumbai manually.</p>
    <pre><code class="language-sql">-- Using AVG
SELECT ROUND(AVG(delivery_time_mins), 2) AS avg_method
FROM restaurants
WHERE city = 'Mumbai';

-- Manual calculation
SELECT ROUND(SUM(delivery_time_mins) * 1.0 / COUNT(delivery_time_mins), 2) AS manual_method
FROM restaurants
WHERE city = 'Mumbai';</code></pre>
    <p>Both return 33.33. They produce the same result. AVG() is just cleaner syntax for the same operation. The important thing is that both skip NULLs in the same way.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The NULL behaviour in AVG is genuinely dangerous in real data. Here is a concrete example: suppose 10 restaurants are listed in Bangalore but 3 have no rating yet (NULL). AVG(avg_rating) divides by 7, not 10. Your average looks better than it is because you are effectively ignoring the unrated restaurants. In a real product, those unrated places might have bad service. Your average is misleading.</p>
    <p>This is why it matters to understand what NULLs represent in your data before averaging.</p>
    <p>Another trap: comparing AVG values across groups of different sizes. The average delivery time in a city with 2 restaurants is not as reliable as the average in a city with 200.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Forgetting that AVG skips NULLs, leading to optimistic averages in incomplete data</li>
      <li>Using AVG on a text column (throws an error)</li>
      <li>Not using ROUND(), ending up with output like 32.666666666 instead of 32.67</li>
      <li>Selecting extra columns without GROUP BY when using AVG per group</li>
      <li>Confusing AVG with the median. AVG is the arithmetic mean. Outliers can pull it far from the typical value.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use ROUND(AVG(...), 2) or your preferred decimal places for clean output</li>
      <li>Check how many NULLs exist in your column before trusting your average</li>
      <li>Use COUNT(*) alongside AVG to understand how many rows contributed to the average</li>
      <li>When NULLs represent missing data that should count as zero, use AVG(COALESCE(column, 0))</li>
      <li>For skewed data with outliers, consider whether median (using window functions) is more appropriate than AVG</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Zomato, product managers track average delivery time per city to monitor service quality. At Byju's, the learning team monitors average time students spend per lesson module. At BookMyShow, the events team tracks average ticket price per event category. At Amazon India, the seller team monitors average seller rating per product category. At Ola, the operations team tracks average trip duration per city to plan driver supply. Every team with numeric data and a performance target is using AVG constantly.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Column: avg_rating
  4.2, 4.5, 4.1, NULL, 4.7, 4.0, 4.3
                  |
          NULL skipped by AVG
                  |
  Values used: 4.2 + 4.5 + 4.1 + 4.7 + 4.0 + 4.3 = 25.8
  Count used: 6 (not 7)
                  |
            AVG = 25.8 / 6 = 4.30


With GROUP BY city:
  Mumbai restaurants  --&gt; AVG --&gt; Mumbai avg
  Delhi restaurants   --&gt; AVG --&gt; Delhi avg
  Bangalore restaurants --&gt; AVG --&gt; Bangalore avg</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>How does AVG handle NULL values?</li>
      <li>Why can AVG give you a misleading result when your data has lots of NULLs?</li>
      <li>How do you get a rounded average in SQL?</li>
      <li>What is the difference between AVG(column) and SUM(column) / COUNT(*)?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find the average delivery time for all restaurants in the <code>restaurants</code> table.</li>
    </ol>
    <ol>
      <li>Write a query to find the average price for two, rounded to 2 decimal places, for each cuisine type.</li>
    </ol>
    <ol>
      <li>Write a query to find the average rating per city, only for cities where the average rating is above 4.0. (Hint: use HAVING, which you will learn next.)</li>
    </ol>
    <ol>
      <li>If a column has values 10, 20, NULL, 30, what does AVG return? What does AVG(COALESCE(column, 0)) return?</li>
    </ol>
    <ol>
      <li>Write a query that shows each city's average delivery time alongside the number of restaurants in that city. Which city has the most restaurants? Does it also have the best average delivery time?</li>
    </ol>
    <ol>
      <li>What is the difference between AVG(avg_rating) and SUM(avg_rating) / COUNT(*)? When would they give different results?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>AVG is simple to write but requires careful thinking about your data. The NULL behaviour alone can silently corrupt your analysis if you are not paying attention. Once you understand that, you will write better queries and catch issues that less careful analysts miss.</p>
  `,
  'mod6-t4': `
    <h1>MIN() and MAX(): Finding the Smallest and Largest Values</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Rahul had been working as a data analyst at Flipkart for three months. One afternoon his manager Deepa sent a message: "Can you find the cheapest and most expensive product in each category? And also tell me which category launched its first product the earliest?"</p>
    <p>Rahul looked at the <code>products</code> table. The data was there. He just needed SQL to scan the column and pick out the extremes. That is exactly what MIN() and MAX() do.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You have a column of numbers, dates, or text, and you need to find the extreme values. The lowest price. The highest rating. The earliest order date. The latest joining date. You do not want all the rows. You want just the outliers at each end.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Finding a minimum or maximum manually would mean sorting the entire column and picking the top or bottom row. For large tables, that is expensive without the right index. MIN() and MAX() are built-in functions that the database can often resolve with a single index scan, making them fast even on very large tables.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a row of price tags in a store. MIN() is the person who scans all of them and tells you the lowest price. MAX() is the same person telling you the highest. They do not care about the middle. They only care about the extremes.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: products (price column)
  499, 1299, 25000, 799, NULL, 55000, 349

MIN(price) = 349    (lowest non-NULL value)
MAX(price) = 55000  (highest non-NULL value)
NULL is ignored in both cases

For text (alphabetical):
  brands: 'Apple', 'Boat', 'Zebronics', 'Mi'
  MIN(brand) = 'Apple'    (first alphabetically)
  MAX(brand) = 'Zebronics' (last alphabetically)

For dates (chronological):
  dates: 2023-01-15, 2022-06-01, 2024-03-10
  MIN(launch_date) = 2022-06-01  (earliest)
  MAX(launch_date) = 2024-03-10  (latest)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>MIN() returns the smallest value in the specified column. MAX() returns the largest. Key rules:</p>
    <ul>
      <li>Both work on numbers, dates, and text columns</li>
      <li>For text, comparison is alphabetical (based on character encoding)</li>
      <li>For dates, MIN returns the earliest date, MAX returns the latest</li>
      <li>Both functions ignore NULL values silently</li>
      <li>You can use both in the same SELECT statement</li>
      <li>Combine with GROUP BY to get per-group min and max</li>
    </ul>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Overall cheapest and most expensive product
SELECT MIN(price) AS cheapest, MAX(price) AS costliest
FROM products;

-- Earliest and latest product launch
SELECT MIN(launch_date) AS first_launch, MAX(launch_date) AS latest_launch
FROM products;

-- Cheapest and costliest product per category
SELECT category, MIN(price) AS min_price, MAX(price) AS max_price
FROM products
GROUP BY category;

-- Category with the widest price range
SELECT category, MIN(price) AS min_price, MAX(price) AS max_price,
       (MAX(price) - MIN(price)) AS price_range
FROM products
GROUP BY category
ORDER BY price_range DESC;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>MIN(column)</td><td>Returns the lowest non-NULL value</td><td>MIN(price) returns 349 from a list of prices</td></tr>
      <tr><td>MAX(column)</td><td>Returns the highest non-NULL value</td><td>MAX(price) returns 55000 from the same list</td></tr>
      <tr><td>GROUP BY</td><td>Applies MIN/MAX per group</td><td>GROUP BY category gives min/max per category</td></tr>
      <tr><td>MAX - MIN</td><td>Calculates the range</td><td>MAX(price) - MIN(price) gives price spread</td></tr>
      <tr><td>MIN(date)</td><td>Returns the earliest date</td><td>MIN(launch_date) returns the first launch date</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: products (Flipkart)</strong></p>
    <table>
      <tr><th>product_id</th><th>name</th><th>category</th><th>price</th><th>stock</th><th>launch_date</th></tr>
      <tr><td>1</td><td>iPhone 15</td><td>Electronics</td><td>79000</td><td>50</td><td>2023-09-15</td></tr>
      <tr><td>2</td><td>Budget Phone X1</td><td>Electronics</td><td>8999</td><td>200</td><td>2022-03-10</td></tr>
      <tr><td>3</td><td>OLED TV 55"</td><td>Electronics</td><td>55000</td><td>30</td><td>2023-01-20</td></tr>
      <tr><td>4</td><td>Formal Shirt</td><td>Clothing</td><td>799</td><td>500</td><td>2021-06-01</td></tr>
      <tr><td>5</td><td>Running Shoes</td><td>Footwear</td><td>2499</td><td>150</td><td>2022-11-05</td></tr>
      <tr><td>6</td><td>Leather Jacket</td><td>Clothing</td><td>4999</td><td>80</td><td>2023-07-15</td></tr>
      <tr><td>7</td><td>Wireless Earbuds</td><td>Electronics</td><td>1299</td><td>300</td><td>2021-09-01</td></tr>
      <tr><td>8</td><td>Sports Shoes</td><td>Footwear</td><td>NULL</td><td>100</td><td>2024-01-10</td></tr>
    </table>
    <h3>Example 1: What is the cheapest and most expensive product across all categories?</h3>
    <p>Business question: Deepa wants the overall price extremes on the platform.</p>
    <pre><code class="language-sql">SELECT MIN(price) AS cheapest_product, MAX(price) AS costliest_product
FROM products;</code></pre>
    <p>Output: <code>cheapest_product = 799</code>, <code>costliest_product = 79000</code>. The NULL price in row 8 is skipped by both functions.</p>
    <h3>Example 2: What is the price range per category?</h3>
    <p>Business question: Which categories have the widest price spread?</p>
    <pre><code class="language-sql">SELECT category,
       MIN(price) AS min_price,
       MAX(price) AS max_price,
       (MAX(price) - MIN(price)) AS price_range
FROM products
GROUP BY category
ORDER BY price_range DESC;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Electronics: min 1299, max 79000, range 77701</li>
      <li>Clothing: min 799, max 4999, range 4200</li>
      <li>Footwear: min 2499, max NULL (skipped), range NULL</li>
    </ul>
    <h3>Example 3: Which category launched its first product earliest?</h3>
    <p>Business question: When did Flipkart first list a product in each category?</p>
    <pre><code class="language-sql">SELECT category, MIN(launch_date) AS first_listed
FROM products
GROUP BY category
ORDER BY first_listed ASC;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Clothing: 2021-06-01</li>
      <li>Electronics: 2021-09-01</li>
      <li>Footwear: 2022-11-05</li>
    </ul>
    <h3>Example 4: Find the min and max stock levels across all products</h3>
    <p>Business question: Are there any products critically low on stock?</p>
    <pre><code class="language-sql">SELECT MIN(stock) AS lowest_stock, MAX(stock) AS highest_stock
FROM products;</code></pre>
    <p>Output: <code>lowest_stock = 30</code>, <code>highest_stock = 500</code>. The product with 30 units (OLED TV) is worth monitoring.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>MIN and MAX on text columns behave alphabetically, not by string length or any natural sort you might expect. 'Zebronics' would come after 'Apple' because Z comes after A. This is useful when you want alphabetical boundaries but can be confusing if you expected something else.</p>
    <p>NULL handling: like all aggregate functions, MIN and MAX silently ignore NULLs. In Example 2 above, the Footwear category shows NULL for max_price because one of the two footwear rows has a NULL price. If you want NULL treated as zero or some other value, use COALESCE inside the function: MIN(COALESCE(price, 0)).</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using MIN or MAX on a column and being surprised when NULLs distort the result</li>
      <li>Forgetting that MIN/MAX on text is alphabetical, not length-based</li>
      <li>Expecting MIN(date) to return the most recent date. MIN on dates returns the earliest (oldest) date.</li>
      <li>Using MIN and MAX without GROUP BY when you actually want per-category extremes</li>
      <li>Confusing MIN(price) with the row that has the minimum price. MIN returns just the value, not the entire row. To get the full row for the cheapest product, you need a subquery or window function.</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use both MIN and MAX in the same query when you need the full range</li>
      <li>Combine with MAX(col) - MIN(col) to calculate the spread or range</li>
      <li>When working with dates, remember MIN = earliest, MAX = latest</li>
      <li>Use COALESCE to handle NULLs before applying MIN or MAX if NULLs should not be ignored</li>
      <li>To find the actual row (not just the value) with the min or max, use ORDER BY with LIMIT 1 or a subquery</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, the pricing team uses MIN and MAX to monitor price floors and ceilings per category. At BookMyShow, the events team uses MIN(event_date) to find the next upcoming show and MAX(event_date) for the furthest scheduled event. At IRCTC, the ticketing team uses MIN(available_seats) to flag trains at risk of filling up. At Amazon India, the logistics team uses MIN(delivery_time_days) and MAX(delivery_time_days) to report delivery windows per pin code. At Ola, the pricing team uses MAX(surge_multiplier) to audit peak pricing events.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Column scan for MIN:              Column scan for MAX:
  79000                             79000  &lt;-- found
  8999                              8999
  55000                             55000
  799  &lt;-- found                    799
  NULL (skipped)                    NULL (skipped)
  1299                              1299
         |                                 |
    MIN = 799                        MAX = 79000


With GROUP BY category:
  Electronics rows --&gt; MIN --&gt; 1299    MAX --&gt; 79000
  Clothing rows    --&gt; MIN --&gt; 799     MAX --&gt; 4999
  Footwear rows    --&gt; MIN --&gt; 2499    MAX --&gt; NULL (one was NULL)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>What does MIN return on a date column?</li>
      <li>How does MAX handle text columns?</li>
      <li>What happens when all values in a column are NULL for a group?</li>
      <li>How is MIN(price) different from finding the row with the lowest price?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find the cheapest product price and the most expensive product price in the <code>products</code> table.</li>
    </ol>
    <ol>
      <li>Write a query to find the earliest and latest <code>launch_date</code> per category.</li>
    </ol>
    <ol>
      <li>Write a query to find the category with the highest maximum price. (Show the category name and the max price.)</li>
    </ol>
    <ol>
      <li>Write a query to show per-category: minimum price, maximum price, and the price range (difference between max and min).</li>
    </ol>
    <ol>
      <li>What will MIN(price) return for the Footwear category in our sample table, given that one of the two footwear rows has a NULL price?</li>
    </ol>
    <ol>
      <li>Write a query to find which category has the lowest minimum stock level. This could indicate which category needs restocking first.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>MIN and MAX are among the most straightforward aggregate functions, but their behaviour on dates and text catches people off guard. The rule is simple: MIN always picks the lower end, MAX always picks the upper end, and both ignore NULL. Everything else follows from that.</p>
  `,
  'mod6-t5': `
    <h1>GROUP BY: Summarising Data by Category</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Simran had just started her second month at Swiggy as a business analyst. Her manager Karan asked her to pull a report: "Tell me the total revenue and number of orders for each city this month." Simran knew how to get total revenue for the whole table using SUM. But per city? She wrote her first GROUP BY query that afternoon and suddenly the data started making sense in a completely new way.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You have a table where the same city, category, or customer appears across hundreds of rows. Your manager does not want to see all 10,000 rows. They want one summary row per city, one row per category, one row per customer. GROUP BY is the clause that collapses those many rows into groups and lets you aggregate each group separately.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Without GROUP BY, aggregate functions like SUM, COUNT, and AVG collapse the entire table into a single row. That is useful sometimes, but rarely what you actually want. GROUP BY was designed to let you say: "Apply this aggregate function not to the whole table, but separately to each distinct value of this column." It turns a raw transaction log into a business summary.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you have a jar full of different coloured marbles. You want to count how many of each colour there are. You sort the marbles by colour first, make separate piles, then count each pile. GROUP BY is the sorting step. It separates your rows into piles based on a column value, and then the aggregate function counts, sums, or averages each pile.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table before GROUP BY:
  Bangalore | 320
  Mumbai    | 150
  Bangalore | 480
  Delhi     | 200
  Bangalore | 560
  Mumbai    | 310
         |
         | GROUP BY city
         v
Group 1: Bangalore | 320, 480, 560  --&gt; SUM = 1360
Group 2: Mumbai    | 150, 310       --&gt; SUM = 460
Group 3: Delhi     | 200            --&gt; SUM = 200
         |
         v
Output:
  Bangalore | 1360
  Mumbai    | 460
  Delhi     | 200</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>GROUP BY takes all rows that share the same value in the specified column and collapses them into one row. For each group, aggregate functions are then applied. Rules to remember:</p>
    <ul>
      <li>Every column in your SELECT must either appear in GROUP BY, or be inside an aggregate function like SUM, COUNT, AVG, MIN, MAX</li>
      <li>You can GROUP BY multiple columns to create more granular groups</li>
      <li>GROUP BY happens after WHERE (which filters rows) and before HAVING (which filters groups)</li>
      <li>GROUP BY does not guarantee output order. Use ORDER BY to sort results.</li>
    </ul>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Total orders and revenue per city
SELECT city, COUNT(*) AS total_orders, SUM(amount) AS total_revenue
FROM orders
GROUP BY city;

-- Orders per cuisine type
SELECT cuisine, COUNT(*) AS order_count
FROM orders
GROUP BY cuisine
ORDER BY order_count DESC;

-- Revenue per city per cuisine (multiple column GROUP BY)
SELECT city, cuisine, SUM(amount) AS revenue
FROM orders
GROUP BY city, cuisine
ORDER BY city, revenue DESC;

-- WHERE filters before grouping; only count orders above 200
SELECT city, COUNT(*) AS big_orders
FROM orders
WHERE amount &gt; 200
GROUP BY city;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>GROUP BY column</td><td>Groups rows with the same value together</td><td>GROUP BY city makes one group per city</td></tr>
      <tr><td>GROUP BY col1, col2</td><td>Groups by combination of both columns</td><td>GROUP BY city, cuisine gives one row per city-cuisine pair</td></tr>
      <tr><td>SELECT aggregated columns</td><td>One result row per group with calculated values</td><td>SUM(amount) gives total for that group</td></tr>
      <tr><td>WHERE before GROUP BY</td><td>Filters individual rows before grouping happens</td><td>WHERE amount > 200 removes low-value orders first</td></tr>
      <tr><td>ORDER BY after GROUP BY</td><td>Sorts the grouped results</td><td>ORDER BY revenue DESC shows highest revenue city first</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: orders (Swiggy)</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>cuisine</th><th>amount</th><th>order_date</th></tr>
      <tr><td>1</td><td>101</td><td>Bangalore</td><td>North Indian</td><td>320</td><td>2024-01-05</td></tr>
      <tr><td>2</td><td>102</td><td>Mumbai</td><td>Chinese</td><td>150</td><td>2024-01-05</td></tr>
      <tr><td>3</td><td>103</td><td>Bangalore</td><td>South Indian</td><td>480</td><td>2024-01-06</td></tr>
      <tr><td>4</td><td>104</td><td>Delhi</td><td>North Indian</td><td>200</td><td>2024-01-06</td></tr>
      <tr><td>5</td><td>101</td><td>Bangalore</td><td>Chinese</td><td>560</td><td>2024-01-07</td></tr>
      <tr><td>6</td><td>105</td><td>Mumbai</td><td>North Indian</td><td>310</td><td>2024-01-07</td></tr>
      <tr><td>7</td><td>106</td><td>Delhi</td><td>South Indian</td><td>420</td><td>2024-01-08</td></tr>
      <tr><td>8</td><td>102</td><td>Mumbai</td><td>Chinese</td><td>280</td><td>2024-01-08</td></tr>
    </table>
    <h3>Example 1: How many orders came from each city?</h3>
    <p>Business question: Karan wants to know which city has the highest order volume.</p>
    <pre><code class="language-sql">SELECT city, COUNT(*) AS total_orders
FROM orders
GROUP BY city
ORDER BY total_orders DESC;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Bangalore: 3 orders</li>
      <li>Mumbai: 3 orders</li>
      <li>Delhi: 2 orders</li>
    </ul>
    <h3>Example 2: What is the total revenue per city?</h3>
    <p>Business question: Which city is generating the most money for Swiggy?</p>
    <pre><code class="language-sql">SELECT city, SUM(amount) AS total_revenue
FROM orders
GROUP BY city
ORDER BY total_revenue DESC;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Bangalore: 1360</li>
      <li>Mumbai: 740</li>
      <li>Delhi: 620</li>
    </ul>
    <h3>Example 3: Orders per cuisine type, only orders above 200 rupees</h3>
    <p>Business question: For higher-value orders, which cuisine is most popular?</p>
    <pre><code class="language-sql">SELECT cuisine, COUNT(*) AS order_count
FROM orders
WHERE amount &gt; 200
GROUP BY cuisine
ORDER BY order_count DESC;</code></pre>
    <p>The WHERE clause runs first and removes the Mumbai-Chinese order for 150. Then GROUP BY groups the remaining rows by cuisine.</p>
    <h3>Example 4: Revenue per city per cuisine (multi-column GROUP BY)</h3>
    <p>Business question: Break down revenue by both city and cuisine type.</p>
    <pre><code class="language-sql">SELECT city, cuisine, COUNT(*) AS orders, SUM(amount) AS revenue
FROM orders
GROUP BY city, cuisine
ORDER BY city, revenue DESC;</code></pre>
    <p>Output shows separate rows for Bangalore-North Indian, Bangalore-South Indian, Bangalore-Chinese, and so on. Each unique combination becomes its own row.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The most common error in GROUP BY is selecting a column that is not in the GROUP BY clause and not inside an aggregate. For example:</p>
    <pre><code class="language-sql">-- This will throw an error in most databases
SELECT city, cuisine, SUM(amount)
FROM orders
GROUP BY city;
-- ERROR: cuisine is not in GROUP BY and not aggregated</code></pre>
    <p>You must either add <code>cuisine</code> to GROUP BY or remove it from SELECT.</p>
    <p>Another confusion: the order of clauses. WHERE always comes before GROUP BY. You cannot use an aggregate in a WHERE clause. If you want to filter based on an aggregate value (e.g., only cities with more than 5 orders), that belongs in a HAVING clause, not a WHERE clause.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Selecting a column in SELECT that is not in GROUP BY and not aggregated</li>
      <li>Trying to filter by aggregate in WHERE instead of HAVING</li>
      <li>Forgetting ORDER BY and being confused by the unsorted output of GROUP BY</li>
      <li>Using GROUP BY when you did not mean to collapse rows, resulting in fewer rows than expected</li>
      <li>Grouping by the wrong column and not noticing because the query runs without error</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always include all non-aggregated SELECT columns in GROUP BY</li>
      <li>Use aliases with AS for aggregate columns to make output readable</li>
      <li>Add ORDER BY at the end to sort your summary report meaningfully</li>
      <li>Use WHERE to filter rows before grouping to improve performance</li>
      <li>Use HAVING (covered next) to filter groups after grouping</li>
      <li>Test your GROUP BY query with a small sample first before running on full data</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, the city ops team groups orders by city and day to track daily GMV. At Reliance Jio, the product team groups user sessions by plan type to compare engagement. At Amazon India, the seller team groups orders by seller_id to calculate per-seller revenue for payouts. At Paytm, the payments team groups transactions by payment method to understand UPI versus card versus wallet splits. Every summary dashboard you have seen in any Indian product company is powered by GROUP BY.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Raw orders table:
  row 1: Bangalore, 320
  row 2: Mumbai,    150
  row 3: Bangalore, 480        WHERE filters rows first
  row 4: Delhi,     200   --&gt;  (removes rows not matching condition)
  row 5: Bangalore, 560        then GROUP BY groups remaining rows
  row 6: Mumbai,    310        then aggregate runs per group
  row 7: Delhi,     420        then HAVING filters groups
  row 8: Mumbai,    280        then ORDER BY sorts output

Output after GROUP BY city + SUM(amount):
  Bangalore | 1360
  Mumbai    |  740
  Delhi     |  620</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>What happens to rows in a GROUP BY query? Where do they go?</li>
      <li>Why does SQL throw an error if you select a column that is not in GROUP BY and not aggregated?</li>
      <li>What is the difference between WHERE and HAVING in the context of GROUP BY?</li>
      <li>What does GROUP BY on two columns produce?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to count the number of orders per cuisine type in the <code>orders</code> table.</li>
    </ol>
    <ol>
      <li>Write a query to find the total revenue per city, sorted highest to lowest.</li>
    </ol>
    <ol>
      <li>Write a query to find the average order amount per city. Round to 2 decimal places.</li>
    </ol>
    <ol>
      <li>Write a query that groups by both city and cuisine, showing the count of orders and total revenue for each combination.</li>
    </ol>
    <ol>
      <li>Write a query to find, per city, the total revenue from orders that are strictly greater than 300 rupees. (Use WHERE to filter before grouping.)</li>
    </ol>
    <ol>
      <li>The following query has an error. Identify and fix it:</li>
    </ol>
    <pre><code class="language-sql">SELECT city, cuisine, COUNT(*)
FROM orders
GROUP BY city;</code></pre>
    <hr>
    <h2>Final Thoughts</h2>
    <p>GROUP BY is the clause that transforms a raw data table into a business report. Once you understand that every SELECT column must either be in GROUP BY or wrapped in an aggregate, the rest falls into place. Pair it with WHERE for pre-filtering and ORDER BY for sorted output, and you have the foundation of almost every analytical query you will write on the job.</p>
  `,
  'mod6-t6': `
    <h1>HAVING: Filtering Groups After GROUP BY</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Vikram was three weeks into his analyst role at Zomato when his manager Preet gave him a task: "Show me only the cuisines that have more than 50 orders this month. We want to focus our marketing budget on the high-volume ones."</p>
    <p>Vikram wrote a GROUP BY query to count orders per cuisine. That worked. Then he tried to add <code>WHERE COUNT(*) > 50</code> and the query threw an error. He stared at the screen confused. That is the moment almost every SQL learner discovers HAVING.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You have written a GROUP BY query. Now you want to filter the results based on the aggregate value, like "only show cities where total orders exceed 100" or "only show restaurants where average rating is above 4.0." WHERE cannot do this because WHERE runs before the groups are formed. HAVING is the clause that filters after groups are created.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL processes clauses in a specific order: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. By the time GROUP BY runs, WHERE has already done its job. At that point, aggregate values like COUNT(*) and SUM(amount) do not even exist yet as filterable quantities. HAVING was created specifically to filter the groups that GROUP BY produces, using the aggregate values that now exist for each group.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you are sorting people by their department at a company, then counting how many people are in each department. WHERE is a security guard at the entrance who checks each person individually before they enter. HAVING is a manager who reviews the completed headcount per department and says "only show me departments with more than 10 people."</p>
    <p>Two different stages. Two different filters.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Stage 1: WHERE filters individual rows
  (keeps only rows matching the condition)

Stage 2: GROUP BY collapses remaining rows into groups

Stage 3: Aggregates are calculated per group
  Bangalore: COUNT=12, SUM=5400
  Mumbai:    COUNT=3,  SUM=1200
  Delhi:     COUNT=7,  SUM=2800

Stage 4: HAVING filters the groups
  HAVING COUNT(*) &gt; 5 removes Mumbai (only 3 orders)

Stage 5: ORDER BY sorts the remaining groups</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>HAVING is placed after GROUP BY in your query. It filters groups based on aggregate conditions. Rules:</p>
    <ul>
      <li>HAVING almost always requires a GROUP BY (without it, the whole table is one group)</li>
      <li>HAVING uses aggregate functions: COUNT, SUM, AVG, MIN, MAX</li>
      <li>You can use WHERE and HAVING in the same query: WHERE filters rows first, HAVING filters groups after</li>
      <li>HAVING is slower than WHERE because it runs after aggregation, so always push row-level filters into WHERE</li>
      <li>Column aliases from SELECT are not available in HAVING in most databases (use the full aggregate expression)</li>
    </ul>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Cuisines with more than 2 orders
SELECT cuisine, COUNT(*) AS order_count
FROM orders
GROUP BY cuisine
HAVING COUNT(*) &gt; 2;

-- Cities where total revenue exceeds 500
SELECT city, SUM(amount) AS total_revenue
FROM orders
GROUP BY city
HAVING SUM(amount) &gt; 500;

-- Using WHERE and HAVING together
-- Delivered orders only; cuisines with average above 300
SELECT cuisine, AVG(amount) AS avg_order
FROM orders
WHERE status = 'Delivered'
GROUP BY cuisine
HAVING AVG(amount) &gt; 300;

-- Restaurants with average rating above 4.0 and more than 10 orders
SELECT restaurant_id, COUNT(*) AS orders, AVG(amount) AS avg_order
FROM orders
GROUP BY restaurant_id
HAVING COUNT(*) &gt; 10 AND AVG(amount) &gt; 300;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>HAVING aggregate_condition</td><td>Filters groups after aggregation</td><td>HAVING COUNT(*) > 5 keeps only groups with more than 5 rows</td></tr>
      <tr><td>WHERE condition</td><td>Filters individual rows before grouping</td><td>WHERE status = 'Delivered' removes cancelled orders first</td></tr>
      <tr><td>GROUP BY + HAVING</td><td>Together: group then filter groups</td><td>GROUP BY city HAVING SUM(amount) > 1000</td></tr>
      <tr><td>HAVING with multiple conditions</td><td>Filter on multiple aggregate values</td><td>HAVING COUNT(*) > 10 AND AVG(amount) > 300</td></tr>
      <tr><td>AND / OR in HAVING</td><td>Combine conditions</td><td>HAVING AVG(amount) > 200 OR COUNT(*) > 20</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: orders (Zomato)</strong></p>
    <table>
      <tr><th>order_id</th><th>restaurant_id</th><th>city</th><th>cuisine</th><th>amount</th><th>order_date</th></tr>
      <tr><td>1</td><td>R1</td><td>Mumbai</td><td>North Indian</td><td>350</td><td>2024-01-05</td></tr>
      <tr><td>2</td><td>R2</td><td>Delhi</td><td>Chinese</td><td>180</td><td>2024-01-05</td></tr>
      <tr><td>3</td><td>R1</td><td>Mumbai</td><td>North Indian</td><td>420</td><td>2024-01-06</td></tr>
      <tr><td>4</td><td>R3</td><td>Bangalore</td><td>South Indian</td><td>290</td><td>2024-01-06</td></tr>
      <tr><td>5</td><td>R2</td><td>Delhi</td><td>Chinese</td><td>210</td><td>2024-01-07</td></tr>
      <tr><td>6</td><td>R1</td><td>Mumbai</td><td>North Indian</td><td>390</td><td>2024-01-07</td></tr>
      <tr><td>7</td><td>R4</td><td>Bangalore</td><td>Fast Food</td><td>150</td><td>2024-01-08</td></tr>
      <tr><td>8</td><td>R3</td><td>Bangalore</td><td>South Indian</td><td>330</td><td>2024-01-08</td></tr>
      <tr><td>9</td><td>R2</td><td>Delhi</td><td>Chinese</td><td>250</td><td>2024-01-09</td></tr>
      <tr><td>10</td><td>R4</td><td>Bangalore</td><td>Fast Food</td><td>175</td><td>2024-01-09</td></tr>
    </table>
    <h3>Example 1: Which cuisines have more than 2 orders?</h3>
    <p>Business question: Preet wants to focus marketing on high-volume cuisines only.</p>
    <pre><code class="language-sql">SELECT cuisine, COUNT(*) AS order_count
FROM orders
GROUP BY cuisine
HAVING COUNT(*) &gt; 2;</code></pre>
    <p>Output:</p>
    <ul>
      <li>North Indian: 3 orders (passes)</li>
      <li>Chinese: 3 orders (passes)</li>
      <li>South Indian: 2 orders (filtered out, not > 2)</li>
      <li>Fast Food: 2 orders (filtered out)</li>
    </ul>
    <h3>Example 2: Which cities have total revenue above 800?</h3>
    <p>Business question: Which cities are high-value markets for Zomato?</p>
    <pre><code class="language-sql">SELECT city, SUM(amount) AS total_revenue
FROM orders
GROUP BY city
HAVING SUM(amount) &gt; 800;</code></pre>
    <p>Output:</p>
    <ul>
      <li>Mumbai: 1160 (passes)</li>
      <li>Delhi: 640 (filtered out)</li>
      <li>Bangalore: 945 (passes)</li>
    </ul>
    <h3>Example 3: Using WHERE and HAVING together</h3>
    <p>Business question: Among cuisines, which ones have an average order above 280, considering only orders from 2024-01-06 onwards?</p>
    <pre><code class="language-sql">SELECT cuisine, COUNT(*) AS orders, ROUND(AVG(amount), 2) AS avg_amount
FROM orders
WHERE order_date &gt;= '2024-01-06'
GROUP BY cuisine
HAVING AVG(amount) &gt; 280;</code></pre>
    <p>WHERE removes the two rows from 2024-01-05 first. Then GROUP BY groups the remaining 8 rows. Then HAVING filters groups where the average does not reach 280.</p>
    <h3>Example 4: Restaurants with at least 2 orders and average order above 300</h3>
    <p>Business question: Which restaurants are both popular and high-value?</p>
    <pre><code class="language-sql">SELECT restaurant_id, COUNT(*) AS total_orders, ROUND(AVG(amount), 2) AS avg_amount
FROM orders
GROUP BY restaurant_id
HAVING COUNT(*) &gt;= 2 AND AVG(amount) &gt; 300;</code></pre>
    <p>Output:</p>
    <ul>
      <li>R1: 3 orders, avg 386.67 (passes both conditions)</li>
      <li>R2: 3 orders, avg 213.33 (fails AVG condition)</li>
      <li>R3: 2 orders, avg 310.00 (passes both)</li>
      <li>R4: 2 orders, avg 162.50 (fails AVG condition)</li>
    </ul>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The most common mistake is trying to use a WHERE clause with an aggregate:</p>
    <pre><code class="language-sql">-- This throws an error
SELECT city, COUNT(*)
FROM orders
WHERE COUNT(*) &gt; 5
GROUP BY city;
-- ERROR: aggregate functions not allowed in WHERE</code></pre>
    <p>You cannot use COUNT, SUM, AVG, MIN, or MAX inside a WHERE clause. They do not exist at the WHERE stage of query processing. Move that condition to HAVING.</p>
    <p>Another confusion: using the alias from SELECT in HAVING. In most databases this does not work:</p>
    <pre><code class="language-sql">-- Often fails
SELECT city, COUNT(*) AS order_count
FROM orders
GROUP BY city
HAVING order_count &gt; 5;  -- alias not available here in many databases</code></pre>
    <p>Write it as <code>HAVING COUNT(*) > 5</code> instead.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Putting aggregate conditions in WHERE instead of HAVING</li>
      <li>Using column aliases in HAVING (repeat the full aggregate expression instead)</li>
      <li>Using HAVING without GROUP BY thinking it will filter rows (it technically treats the whole table as one group)</li>
      <li>Forgetting that WHERE runs before HAVING, so WHERE is faster for row-level filtering</li>
      <li>Confusing the order: WHERE then GROUP BY then HAVING, not the other way around</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use WHERE for row-level filters (non-aggregate conditions) to improve performance</li>
      <li>Use HAVING only for aggregate-level filters</li>
      <li>If you can write a condition in WHERE, always prefer that over HAVING</li>
      <li>Write the full aggregate expression in HAVING rather than relying on aliases</li>
      <li>Combine WHERE and HAVING in the same query when you need both row-level and group-level filtering</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Zomato, the restaurant quality team uses HAVING AVG(rating) < 3.5 to flag underperforming restaurants. At Swiggy, the growth team uses HAVING COUNT(<em>) > 100 to identify power users for loyalty programs. At Amazon India, the seller team uses HAVING SUM(refunds) > SUM(sales) </em> 0.1 to flag sellers with abnormally high refund rates. At Paytm, the fraud team uses HAVING COUNT(DISTINCT device_id) > 3 to flag accounts logging in from too many devices. HAVING is the clause that makes threshold-based business rules expressible in SQL.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Query execution order for a GROUP BY + HAVING query:

1. FROM orders          --&gt; load the table
2. WHERE status='...'   --&gt; filter individual rows
3. GROUP BY city        --&gt; collapse rows into groups
4. SUM/COUNT per group  --&gt; calculate aggregates for each group
5. HAVING SUM &gt; 500     --&gt; remove groups that don't qualify
6. SELECT city, SUM     --&gt; pick columns to show
7. ORDER BY             --&gt; sort the final output

WHERE = bouncer at the door (checks each person)
HAVING = manager reviewing the final group counts</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>Why can you not use aggregate functions in a WHERE clause?</li>
      <li>What is the difference between WHERE and HAVING?</li>
      <li>What happens if you write HAVING without GROUP BY?</li>
      <li>When should you prefer WHERE over HAVING for performance?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find cuisines with more than 3 orders total in the <code>orders</code> table.</li>
    </ol>
    <ol>
      <li>Write a query to find cities where the total revenue (SUM of amount) is at least 900.</li>
    </ol>
    <ol>
      <li>Write a query to find restaurant_ids where the average order value is below 250.</li>
    </ol>
    <ol>
      <li>Write a query to find cuisines where the maximum order amount exceeds 400. Use HAVING MAX().</li>
    </ol>
    <ol>
      <li>Write a query combining WHERE and HAVING: count orders per city, but only for orders placed in Bangalore or Mumbai, and only show cities where the count is above 2.</li>
    </ol>
    <ol>
      <li>The following query has an error. Identify and fix it:</li>
    </ol>
    <pre><code class="language-sql">SELECT city, COUNT(*) AS orders
FROM orders
WHERE COUNT(*) &gt; 3
GROUP BY city;</code></pre>
    <hr>
    <h2>Final Thoughts</h2>
    <p>HAVING is not complicated once you understand when in the query lifecycle it runs. WHERE is for rows, HAVING is for groups. That one sentence will save you from most errors. Once you start combining WHERE, GROUP BY, and HAVING together, you can express almost any business filtering rule in a single clean query.</p>
  `,
  'mod6-t7': `
    <h1>Combining Aggregates: Using Multiple Functions in One Query</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Ananya had been an analyst at Swiggy for five months. Every Monday morning, her manager Rohit sent her the same message: "Can you send me the city-wise weekly summary?" For weeks, Ananya had been running four separate queries: one for total orders, one for total revenue, one for average order value, and one for the minimum and maximum order amounts. Then one day she combined all of them into a single query. She sent it to Rohit in two minutes instead of fifteen. That is what combining aggregates can do for you.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Dashboards, reports, and management summaries almost never ask for a single number. They ask for a table: total orders, total revenue, average spend, best order, worst order, all in one view. Running separate queries for each number is slow, error-prone, and hard to maintain. You need to write one query that returns all these values at once.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL allows multiple aggregate functions in a single SELECT statement because the database processes all of them in one pass over the data. There is no performance cost to adding COUNT and AVG alongside your SUM. You are not running the query multiple times. The engine scans the rows once and computes all aggregates simultaneously.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a factory inspector walking the production line once. She counts the units produced, calculates the average weight, notes the heaviest unit and the lightest unit, all in the same walk. She does not walk the line four separate times. One pass, multiple measurements. That is what your database does when you put multiple aggregate functions in one SELECT.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>One scan of the orders table:
  Bangalore | 320      COUNT increments
  Bangalore | 480      SUM adds 320+480+560
  Bangalore | 560      AVG tracks total/count
                        MIN compares each value
                        MAX compares each value
         |
         v
Single result row per group:
  Bangalore | count=3 | sum=1360 | avg=453.33 | min=320 | max=560</code></pre>
    <p>All five values computed in one pass. One query. One result set.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>You can use as many aggregate functions as you need in a single SELECT. Each one operates independently on the same set of rows (or group of rows if you have GROUP BY). Rules:</p>
    <ul>
      <li>Each aggregate function is a separate expression in SELECT</li>
      <li>Name each with an alias using AS for readable output</li>
      <li>All non-aggregated columns must appear in GROUP BY</li>
      <li>ROUND() can wrap any aggregate to control decimal places</li>
      <li>ORDER BY can sort by any of the aggregated columns</li>
    </ul>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- Single summary row for the whole table
SELECT
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value,
    MIN(amount) AS smallest_order,
    MAX(amount) AS largest_order
FROM orders;

-- City-wise summary combining all aggregates
SELECT
    city,
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value,
    MIN(amount) AS min_order,
    MAX(amount) AS max_order
FROM orders
GROUP BY city
ORDER BY total_revenue DESC;

-- Filter for delivered orders only, then summarise by city
SELECT
    city,
    COUNT(*) AS delivered_orders,
    SUM(amount) AS delivered_revenue,
    ROUND(AVG(amount), 2) AS avg_delivered_value
FROM orders
WHERE status = 'Delivered'
GROUP BY city
ORDER BY delivered_revenue DESC;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>Multiple aggregates in SELECT</td><td>Each is computed independently in one pass</td><td>COUNT(*), SUM(amount), AVG(amount) all in one query</td></tr>
      <tr><td>AS alias</td><td>Gives each aggregate column a readable name</td><td>AS total_revenue instead of SUM(amount)</td></tr>
      <tr><td>ROUND(AVG(...), 2)</td><td>Rounds the average to 2 decimal places</td><td>ROUND(AVG(amount), 2) gives 453.33 not 453.3333...</td></tr>
      <tr><td>GROUP BY</td><td>Applies all aggregates per group</td><td>GROUP BY city computes each metric per city</td></tr>
      <tr><td>ORDER BY aggregate alias</td><td>Sorts by any computed column</td><td>ORDER BY total_revenue DESC shows top city first</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: orders (Swiggy)</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>cuisine</th><th>amount</th><th>order_date</th><th>status</th></tr>
      <tr><td>1</td><td>101</td><td>Bangalore</td><td>North Indian</td><td>320</td><td>2024-01-05</td><td>Delivered</td></tr>
      <tr><td>2</td><td>102</td><td>Mumbai</td><td>Chinese</td><td>150</td><td>2024-01-05</td><td>Delivered</td></tr>
      <tr><td>3</td><td>103</td><td>Bangalore</td><td>South Indian</td><td>480</td><td>2024-01-06</td><td>Delivered</td></tr>
      <tr><td>4</td><td>104</td><td>Delhi</td><td>North Indian</td><td>200</td><td>2024-01-06</td><td>Cancelled</td></tr>
      <tr><td>5</td><td>101</td><td>Bangalore</td><td>Chinese</td><td>560</td><td>2024-01-07</td><td>Delivered</td></tr>
      <tr><td>6</td><td>105</td><td>Mumbai</td><td>North Indian</td><td>310</td><td>2024-01-07</td><td>Delivered</td></tr>
      <tr><td>7</td><td>106</td><td>Delhi</td><td>South Indian</td><td>420</td><td>2024-01-08</td><td>Delivered</td></tr>
      <tr><td>8</td><td>102</td><td>Mumbai</td><td>Chinese</td><td>280</td><td>2024-01-08</td><td>Delivered</td></tr>
    </table>
    <h3>Example 1: Platform-wide summary in a single row</h3>
    <p>Business question: Rohit wants one snapshot number for the whole platform this week.</p>
    <pre><code class="language-sql">SELECT
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value,
    MIN(amount) AS smallest_order,
    MAX(amount) AS largest_order
FROM orders;</code></pre>
    <p>Output: One row with total_orders=8, total_revenue=2720, avg_order_value=340.00, smallest_order=150, largest_order=560.</p>
    <h3>Example 2: City-wise summary report</h3>
    <p>Business question: The city ops team needs a full summary per city for the weekly review.</p>
    <pre><code class="language-sql">SELECT
    city,
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value,
    MIN(amount) AS min_order,
    MAX(amount) AS max_order
FROM orders
GROUP BY city
ORDER BY total_revenue DESC;</code></pre>
    <p>Output:</p>
    <table>
      <tr><th>city</th><th>total_orders</th><th>total_revenue</th><th>avg_order_value</th><th>min_order</th><th>max_order</th></tr>
      <tr><td>Bangalore</td><td>3</td><td>1360</td><td>453.33</td><td>320</td><td>560</td></tr>
      <tr><td>Mumbai</td><td>3</td><td>740</td><td>246.67</td><td>150</td><td>310</td></tr>
      <tr><td>Delhi</td><td>2</td><td>620</td><td>310.00</td><td>200</td><td>420</td></tr>
    </table>
    <h3>Example 3: Delivered orders summary per city</h3>
    <p>Business question: Exclude cancelled orders from the performance summary.</p>
    <pre><code class="language-sql">SELECT
    city,
    COUNT(*) AS delivered_orders,
    SUM(amount) AS delivered_revenue,
    ROUND(AVG(amount), 2) AS avg_delivered
FROM orders
WHERE status = 'Delivered'
GROUP BY city
ORDER BY delivered_revenue DESC;</code></pre>
    <p>The Delhi cancelled order (200 rupees) is removed by WHERE before grouping, so Delhi shows 1 order instead of 2.</p>
    <h3>Example 4: Cuisine-wise summary with count and revenue</h3>
    <p>Business question: Which cuisines are most profitable?</p>
    <pre><code class="language-sql">SELECT
    cuisine,
    COUNT(*) AS orders,
    SUM(amount) AS revenue,
    ROUND(AVG(amount), 2) AS avg_per_order,
    MAX(amount) AS highest_order
FROM orders
GROUP BY cuisine
ORDER BY revenue DESC;</code></pre>
    <p>Output shows North Indian, Chinese, and South Indian with their full metrics side by side in one result set.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>Aliases work fine in ORDER BY but not in HAVING in most databases. If you write <code>HAVING total_revenue > 500</code> expecting SQL to use the alias you defined in SELECT, it will fail. You must repeat the full expression: <code>HAVING SUM(amount) > 500</code>.</p>
    <p>Another issue: combining aggregates across different columns and misunderstanding what each applies to. COUNT(*) counts all rows including NULLs. SUM(amount) skips NULLs in amount. AVG(amount) also skips NULLs. If you have NULLs in amount, your COUNT and your AVG denominators will disagree, and the combined report can look inconsistent.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Not using aliases for aggregate columns, making output hard to read</li>
      <li>Forgetting ROUND() on AVG, resulting in ugly decimal output in reports</li>
      <li>Selecting a non-aggregated column without including it in GROUP BY</li>
      <li>Using aliases in HAVING instead of repeating the full aggregate expression</li>
      <li>Assuming ORDER BY on a calculated column uses the alias automatically in all databases (MySQL allows it, some others do not)</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always alias every aggregate column in a combined query</li>
      <li>Use ROUND() consistently for any AVG or division result</li>
      <li>Put all non-aggregated columns in GROUP BY</li>
      <li>Use WHERE to filter rows before aggregation when possible</li>
      <li>Structure your SELECT so related aggregates are next to each other for readability</li>
      <li>Order your output by the most important metric (usually total_revenue or total_orders)</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, this exact pattern is the foundation of the weekly city performance report sent to city general managers. At Flipkart, the category team pulls combined aggregates per category for their monthly business review. At BookMyShow, the events team combines COUNT (bookings), SUM (revenue), and AVG (ticket price) per event for post-show analysis. At Reliance Jio, the data team builds recharge summary dashboards with COUNT, SUM, AVG per plan type per circle. The combined aggregate query is the standard template for any summary report in a data-driven team.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>One query, multiple aggregates, one pass through data:

SELECT
    city,                          --&gt; grouping key
    COUNT(*) AS orders,            --&gt; how many rows per group
    SUM(amount) AS revenue,        --&gt; total value per group
    ROUND(AVG(amount), 2) AS avg,  --&gt; average value per group
    MIN(amount) AS lowest,         --&gt; smallest in group
    MAX(amount) AS highest         --&gt; largest in group
FROM orders
GROUP BY city
ORDER BY revenue DESC;

Database executes:
  1. Scan all rows once
  2. Group by city
  3. For each group, compute all 5 aggregates simultaneously
  4. Return one row per city with all 5 columns</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>Why is combining aggregates in one query better than running separate queries?</li>
      <li>Why do you need to use ROUND() for AVG output in reports?</li>
      <li>What happens if you forget to alias an aggregate column?</li>
      <li>Can you use ORDER BY on a calculated column?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a single query that shows, for the entire <code>orders</code> table: total number of orders, total revenue, average order amount (rounded), and the highest order amount.</li>
    </ol>
    <ol>
      <li>Write a city-wise summary showing total orders, total revenue, and average order value per city, sorted by total revenue descending.</li>
    </ol>
    <ol>
      <li>Write a query that shows per cuisine: order count, total revenue, and the minimum and maximum order amounts.</li>
    </ol>
    <ol>
      <li>Modify the city-wise summary to only include delivered orders (filter with WHERE before grouping).</li>
    </ol>
    <ol>
      <li>Write a combined aggregate query and filter with HAVING to show only cities with more than 2 orders AND average order above 300.</li>
    </ol>
    <ol>
      <li>Write a query that shows, for each city, the number of delivered orders and the number of cancelled orders side by side. (Hint: use COUNT with CASE inside.)</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Combining aggregates in one query is not a trick or an advanced technique. It is just the natural way to build summary reports in SQL. Once you write your first combined aggregate query and see a clean multi-column summary come back in one result set, running separate queries will feel unnecessary. This is the form most real analyst queries take.</p>
  `,
  'mod6-t8': `
    <h1>How Aggregate Functions Handle NULL Values</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Rahul had been working at Paytm for two months when his manager Sonal flagged a discrepancy: "Your report says the average wallet balance is 842 rupees. But when I look at the raw data, it seems way higher than what most customers actually hold. Can you double-check?"</p>
    <p>Rahul looked at the data again. The <code>wallet_balance</code> column had 47 NULL values out of 200 rows. AVG was quietly ignoring all of them. The 47 customers with no wallet data were not being counted in the denominator. The average was being calculated over 153 customers, not 200, and it looked artificially inflated. He had no idea this was happening until Sonal caught it.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>In real production databases, columns are rarely fully populated. Customers skip fields. Data pipelines fail for some records. Older rows predate new columns. The result is NULLs scattered through your data. Aggregate functions handle NULLs silently. They do not warn you. They just skip the NULLs and return a result. If you do not know this is happening, your reports will be wrong and you will not know why.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>The SQL standard defines NULL as the absence of a value, not as zero or empty string. Aggregate functions follow this definition: they treat NULL as "not applicable" and exclude it from calculations. This is often the right behaviour. But it requires you to actively think about what NULLs mean in your specific data before you trust your aggregate results.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you are a teacher calculating the class average. Five students took the test. Three handed in their answer sheets. Two were absent and have no score. If you calculate the average of the three scores you have, you are ignoring the two absent students. Is that the right thing to do? It depends on whether "absent" means "zero" or "not applicable." SQL always assumes "not applicable" unless you tell it otherwise.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Table: customers (10 rows)
wallet_balance: 500, 1200, NULL, 800, NULL, 300, NULL, 950, 400, NULL

COUNT(*)             = 10  (counts all rows)
COUNT(wallet_balance)= 6   (skips 4 NULLs)
SUM(wallet_balance)  = 4150 (adds 500+1200+800+300+950+400, skips NULLs)
AVG(wallet_balance)  = 4150/6 = 691.67 (denominator is 6, not 10)

If we treat NULL as 0:
AVG(COALESCE(wallet_balance, 0)) = 4150/10 = 415.00</code></pre>
    <p>These two averages are very different. Which one is right depends on your business question.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>Here is the NULL behaviour for each aggregate function:</p>
    <ul>
      <li>COUNT(*): counts every row, including rows where all columns are NULL</li>
      <li>COUNT(column): skips rows where that specific column is NULL</li>
      <li>SUM(column): adds only non-NULL values, skips NULLs silently</li>
      <li>AVG(column): calculates mean over non-NULL values only; denominator is count of non-NULL rows</li>
      <li>MIN(column): returns the minimum of non-NULL values</li>
      <li>MAX(column): returns the maximum of non-NULL values</li>
    </ul>
    <p>If every value in a column is NULL: SUM, AVG, MIN, MAX all return NULL. COUNT(*) still returns the row count. COUNT(column) returns 0.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- See the difference between COUNT(*) and COUNT(column)
SELECT
    COUNT(*) AS total_rows,
    COUNT(wallet_balance) AS rows_with_balance,
    COUNT(*) - COUNT(wallet_balance) AS null_count
FROM customers;

-- AVG on raw column vs COALESCE to treat NULL as 0
SELECT
    ROUND(AVG(wallet_balance), 2) AS avg_ignoring_nulls,
    ROUND(AVG(COALESCE(wallet_balance, 0)), 2) AS avg_treating_null_as_zero
FROM customers;

-- COALESCE in SUM to ensure NULLs are treated as 0
SELECT
    SUM(COALESCE(last_transaction_amount, 0)) AS total_transactions
FROM customers;

-- NULLIF to avoid accidental zero division
-- Use case: score of 0 should not bring down an average
SELECT
    ROUND(AVG(NULLIF(wallet_balance, 0)), 2) AS avg_ignoring_zeros
FROM customers;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>COUNT(*)</td><td>Counts all rows including NULLs</td><td>Returns 10 for a 10-row table even if all values are NULL</td></tr>
      <tr><td>COUNT(column)</td><td>Counts only non-NULL rows in that column</td><td>Returns 6 if 4 of 10 values are NULL</td></tr>
      <tr><td>COALESCE(col, 0)</td><td>Replaces NULL with 0 (or any value) before aggregating</td><td>SUM(COALESCE(balance, 0)) treats NULL as zero</td></tr>
      <tr><td>NULLIF(col, 0)</td><td>Converts 0 to NULL before aggregating</td><td>AVG(NULLIF(score, 0)) ignores zero scores</td></tr>
      <tr><td>COUNT(*) - COUNT(col)</td><td>Calculates how many NULLs exist in a column</td><td>A quick NULL audit on any column</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: customers (Paytm)</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th><th>phone</th><th>wallet_balance</th><th>last_transaction_amount</th></tr>
      <tr><td>1</td><td>Priya</td><td>Mumbai</td><td>9876543210</td><td>500</td><td>150</td></tr>
      <tr><td>2</td><td>Arjun</td><td>Delhi</td><td>NULL</td><td>1200</td><td>NULL</td></tr>
      <tr><td>3</td><td>Neha</td><td>Bangalore</td><td>9123456780</td><td>NULL</td><td>300</td></tr>
      <tr><td>4</td><td>Vikram</td><td>Mumbai</td><td>9988776655</td><td>800</td><td>500</td></tr>
      <tr><td>5</td><td>Simran</td><td>Delhi</td><td>NULL</td><td>NULL</td><td>NULL</td></tr>
      <tr><td>6</td><td>Rahul</td><td>Bangalore</td><td>9871234560</td><td>300</td><td>80</td></tr>
      <tr><td>7</td><td>Ananya</td><td>Mumbai</td><td>9765432109</td><td>NULL</td><td>120</td></tr>
      <tr><td>8</td><td>Karan</td><td>Delhi</td><td>9654321098</td><td>950</td><td>400</td></tr>
      <tr><td>9</td><td>Deepa</td><td>Bangalore</td><td>9543210987</td><td>400</td><td>NULL</td></tr>
      <tr><td>10</td><td>Sonal</td><td>Mumbai</td><td>NULL</td><td>NULL</td><td>250</td></tr>
    </table>
    <h3>Example 1: Count all rows vs count of non-NULL wallet balances</h3>
    <p>Business question: How many customers actually have a wallet balance on record?</p>
    <pre><code class="language-sql">SELECT
    COUNT(*) AS total_customers,
    COUNT(wallet_balance) AS customers_with_balance,
    COUNT(*) - COUNT(wallet_balance) AS missing_balance_count
FROM customers;</code></pre>
    <p>Output: total_customers=10, customers_with_balance=5, missing_balance_count=5. Half the customers have no balance data.</p>
    <h3>Example 2: Compare AVG with and without COALESCE</h3>
    <p>Business question: What is the average wallet balance? Should we treat unknown balances as zero?</p>
    <pre><code class="language-sql">SELECT
    ROUND(AVG(wallet_balance), 2) AS avg_non_null_only,
    ROUND(AVG(COALESCE(wallet_balance, 0)), 2) AS avg_with_nulls_as_zero
FROM customers;</code></pre>
    <p>Output: avg_non_null_only=690.00 (calculates over 5 customers), avg_with_nulls_as_zero=345.00 (calculates over all 10). The first answer ignores 5 customers entirely. The second treats their missing balance as zero. Both are technically valid but answer different questions.</p>
    <h3>Example 3: SUM with COALESCE for total transaction volume</h3>
    <p>Business question: What is the total transaction amount including customers with no recent transaction (treated as 0)?</p>
    <pre><code class="language-sql">SELECT
    SUM(last_transaction_amount) AS sum_ignoring_nulls,
    SUM(COALESCE(last_transaction_amount, 0)) AS sum_with_nulls_as_zero
FROM customers;</code></pre>
    <p>Output: sum_ignoring_nulls=1800 (adds 150+300+500+80+120+400+250, skips 3 NULLs), sum_with_nulls_as_zero=1800 (same, because COALESCE adds 0 for NULLs which does not change the sum). In this case the result is the same, but conceptually COALESCE makes your intent explicit.</p>
    <h3>Example 4: NULLIF to exclude zero values from an average</h3>
    <p>Business question: Calculate the average wallet balance excluding customers who have exactly zero balance (which might represent inactive accounts).</p>
    <pre><code class="language-sql">SELECT
    ROUND(AVG(NULLIF(wallet_balance, 0)), 2) AS avg_active_balances
FROM customers;</code></pre>
    <p>NULLIF(wallet_balance, 0) converts any 0 values to NULL, causing AVG to skip them just as it skips existing NULLs.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The key trap is assuming that because your query runs without errors, the result is complete. AVG silently returns a higher-than-true average when many values are NULL. SUM silently returns a lower-than-true total when NULLs represent amounts that should count as zero. The database never warns you.</p>
    <p>A practical example with 10 rows and 3 NULLs in amount: AVG(amount) returns the average of the 7 non-NULL values. The denominator is 7, not 10. If those 3 NULL rows represent customers who spent nothing, your average should be calculated over 10. You have to decide and write COALESCE accordingly.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Trusting AVG results without checking how many NULLs exist in the column</li>
      <li>Using COUNT(*) when you meant COUNT(column) or vice versa</li>
      <li>Not auditing NULL counts before writing a summary report on a new table</li>
      <li>Forgetting that SUM returns NULL (not zero) when all values are NULL</li>
      <li>Misusing NULLIF: NULLIF(col, 0) makes zeros disappear from aggregates, which may not be what you want</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Before aggregating any column in production data, run COUNT(*) vs COUNT(column) to understand how many NULLs exist</li>
      <li>Decide explicitly whether NULLs should be treated as zero (use COALESCE) or excluded (default behaviour)</li>
      <li>Document your COALESCE decisions in query comments so future readers understand the assumption</li>
      <li>Use COALESCE in SUM when NULLs represent missing values that should count as zero (e.g., no transaction means zero, not unknown)</li>
      <li>Use the default NULL-skipping for AVG when NULLs represent genuinely not-applicable rows</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Paytm, the finance team always checks null rates in transaction columns before running revenue reports. At Swiggy, incomplete delivery partner records with NULL commission values require COALESCE before summing payouts. At IRCTC, passenger records with NULL seat preferences need careful NULL handling in aggregate seat assignment reports. At Byju's, lesson completion rates require COUNT(completed_at) vs COUNT(<em>) because incomplete lessons have NULL timestamps. At PhonePe, UPI transaction amounts can be NULL for failed attempts, so the fraud team uses COUNT(</em>) vs COUNT(amount) to distinguish attempts from completions.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Table: 10 rows
wallet_balance: 500, 1200, NULL, 800, NULL, 300, NULL, 950, 400, NULL

Default aggregate behaviour (NULL = skip):
  COUNT(*)              = 10
  COUNT(wallet_balance) = 6
  SUM                   = 4150   (6 values summed)
  AVG                   = 691.67 (4150/6, not 4150/10)
  MIN                   = 300
  MAX                   = 1200

With COALESCE(wallet_balance, 0):
  SUM   = 4150   (same, adding 0s)
  AVG   = 415.00 (4150/10, NULLs now count as 0 in denominator)
  COUNT = 10     (no NULLs left after COALESCE)

Choose your approach based on what NULL means in your domain.</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>Why does COUNT(*) return a different number than COUNT(column) when NULLs are present?</li>
      <li>What does AVG return if 5 of 10 rows have NULL in the target column?</li>
      <li>When should you use COALESCE inside an aggregate?</li>
      <li>What does NULLIF do and when would you use it?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to show the total customer count versus the count of customers with a non-NULL wallet_balance in the <code>customers</code> table.</li>
    </ol>
    <ol>
      <li>Write a query to calculate the average wallet_balance two ways: once ignoring NULLs (default) and once treating NULLs as zero. Which is higher?</li>
    </ol>
    <ol>
      <li>Write a query to find how many customers have a NULL phone number.</li>
    </ol>
    <ol>
      <li>Write a query to calculate the total last_transaction_amount, treating NULL as zero using COALESCE.</li>
    </ol>
    <ol>
      <li>Explain in plain English what happens when you run SUM(wallet_balance) on a table where all 10 rows have NULL in wallet_balance.</li>
    </ol>
    <ol>
      <li>Write a query that shows, per city: total customers, customers with a wallet balance, and the average wallet balance (ignoring NULLs). Use COUNT(*), COUNT(col), and AVG(col) together.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>NULL handling is where SQL beginners produce their first incorrect reports without realising it. The fix is not hard: check your NULL counts before trusting any aggregate. Decide whether NULLs mean zero or not-applicable. Write COALESCE explicitly when you want zeros. Leave the default alone when you want to exclude unknowns. That one habit will make your analysis more trustworthy than most.</p>
  `,
  'mod6-t9': `
    <h1>ROLLUP and CUBE: Getting Subtotals and Grand Totals Automatically</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Ananya had been working in data analytics at Flipkart for four months. Every Friday, she had to email the category managers a sales report broken down by region and product category, along with subtotals for each region and a grand total at the bottom. She was doing this by running several GROUP BY queries and manually copying the results into one sheet.</p>
    <p>Her senior colleague Gaurav watched her do this for two Fridays in a row. On the third Friday he said, "You know there is a single query that does all of that at once, right?" He showed her ROLLUP. The entire three-query workflow collapsed into one.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Business reports almost always need more than just the detailed breakdown. They need subtotals (region-level totals) and a grand total row at the bottom. Getting these from a regular GROUP BY requires either multiple queries unioned together or manual post-processing. ROLLUP and CUBE are SQL extensions designed to generate these summary rows automatically in a single query.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>ROLLUP and CUBE are part of the SQL standard for reporting and OLAP (Online Analytical Processing). They were introduced because reporting systems constantly need aggregated data at multiple levels of hierarchy simultaneously. Instead of forcing you to union five GROUP BY queries, the database can produce all levels of aggregation in one pass using these extensions.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a company's sales report formatted like an Excel sheet with subtotals:</p>
    <pre><code>Region: North
  Mobiles   | 1,20,000
  Laptops   | 2,50,000
  Region Total: 3,70,000    &lt;-- subtotal row

Region: South
  Mobiles   | 90,000
  Laptops   | 1,80,000
  Region Total: 2,70,000    &lt;-- subtotal row

Grand Total:  6,40,000      &lt;-- grand total row</code></pre>
    <p>ROLLUP produces this structure automatically. You do not build it by hand.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Regular GROUP BY (col1, col2):
  North | Mobiles  | 120000
  North | Laptops  | 250000
  South | Mobiles  |  90000
  South | Laptops  | 180000

With ROLLUP (col1, col2):
  North | Mobiles  | 120000
  North | Laptops  | 250000
  North | NULL     | 370000   &lt;-- subtotal for North
  South | Mobiles  |  90000
  South | Laptops  | 180000
  South | NULL     | 270000   &lt;-- subtotal for South
  NULL  | NULL     | 640000   &lt;-- grand total

With CUBE (col1, col2):
  North | Mobiles  | 120000
  North | Laptops  | 250000
  North | NULL     | 370000   &lt;-- North subtotal
  South | Mobiles  |  90000
  South | Laptops  | 180000
  South | NULL     | 270000   &lt;-- South subtotal
  NULL  | Mobiles  | 210000   &lt;-- Mobiles subtotal (all regions)
  NULL  | Laptops  | 430000   &lt;-- Laptops subtotal (all regions)
  NULL  | NULL     | 640000   &lt;-- grand total</code></pre>
    <p>CUBE adds every possible combination of subtotals. ROLLUP adds only the hierarchical ones.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p><strong>ROLLUP</strong> generates subtotals along a hierarchy. For GROUP BY ROLLUP(col1, col2), it produces:</p>
    <ul>
      <li>One row per (col1, col2) combination (detailed rows)</li>
      <li>One subtotal row per col1 (col2 is NULL in these rows)</li>
      <li>One grand total row (both col1 and col2 are NULL)</li>
    </ul>
    <p><strong>CUBE</strong> generates subtotals for every possible combination of the listed columns. For GROUP BY CUBE(col1, col2), it produces:</p>
    <ul>
      <li>Detailed rows for each (col1, col2) combination</li>
      <li>Subtotals for each col1 value (col2 = NULL)</li>
      <li>Subtotals for each col2 value (col1 = NULL)</li>
      <li>Grand total row (both NULL)</li>
    </ul>
    <p>The NULL values in ROLLUP and CUBE output rows identify the grouping level. A NULL in the category column means "this is a subtotal or total across all categories."</p>
    <p>The GROUPING() function returns 1 when a column is NULL because of ROLLUP/CUBE (not because the data itself is NULL) and 0 otherwise. Use it with CASE to label those rows as "Total" or "Subtotal."</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <pre><code class="language-sql">-- ROLLUP: subtotals per region + grand total
SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY ROLLUP(region, category);

-- CUBE: all combinations of subtotals
SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY CUBE(region, category);

-- Using GROUPING() to label subtotal/total rows
SELECT
    CASE WHEN GROUPING(region) = 1 THEN 'All Regions' ELSE region END AS region,
    CASE WHEN GROUPING(category) = 1 THEN 'All Categories' ELSE category END AS category,
    SUM(amount) AS revenue
FROM sales
GROUP BY ROLLUP(region, category);

-- ROLLUP with three columns: region &gt; category &gt; product hierarchy
SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY ROLLUP(region, category);</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>GROUP BY ROLLUP(col1, col2)</td><td>Adds subtotals per col1 and a grand total row</td><td>North subtotal, South subtotal, Grand total</td></tr>
      <tr><td>GROUP BY CUBE(col1, col2)</td><td>Adds subtotals for every possible column combination</td><td>All combinations including per-category across regions</td></tr>
      <tr><td>NULL in output</td><td>Identifies a subtotal or total row for that column</td><td>NULL in category means "across all categories"</td></tr>
      <tr><td>GROUPING(col)</td><td>Returns 1 if NULL is from ROLLUP/CUBE, 0 if from real data</td><td>Used to distinguish ROLLUP NULLs from data NULLs</td></tr>
      <tr><td>CASE WHEN GROUPING(col)=1</td><td>Labels total rows with a readable name</td><td>Replaces NULL with 'All Regions' in the output</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table: sales (Flipkart)</strong></p>
    <table>
      <tr><th>sale_id</th><th>region</th><th>category</th><th>amount</th></tr>
      <tr><td>1</td><td>North</td><td>Electronics</td><td>45000</td></tr>
      <tr><td>2</td><td>North</td><td>Electronics</td><td>30000</td></tr>
      <tr><td>3</td><td>North</td><td>Clothing</td><td>8000</td></tr>
      <tr><td>4</td><td>South</td><td>Electronics</td><td>40000</td></tr>
      <tr><td>5</td><td>South</td><td>Clothing</td><td>12000</td></tr>
      <tr><td>6</td><td>South</td><td>Clothing</td><td>9000</td></tr>
      <tr><td>7</td><td>West</td><td>Electronics</td><td>25000</td></tr>
      <tr><td>8</td><td>West</td><td>Clothing</td><td>6000</td></tr>
    </table>
    <h3>Example 1: Basic ROLLUP with region and category</h3>
    <p>Business question: Ananya needs detailed sales + region subtotals + grand total in one result.</p>
    <pre><code class="language-sql">SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY ROLLUP(region, category)
ORDER BY region, category;</code></pre>
    <p>Output includes:</p>
    <ul>
      <li>North | Electronics | 75000</li>
      <li>North | Clothing | 8000</li>
      <li>North | NULL | 83000 (North subtotal)</li>
      <li>South | Clothing | 21000</li>
      <li>South | Electronics | 40000</li>
      <li>South | NULL | 61000 (South subtotal)</li>
      <li>West | Clothing | 6000</li>
      <li>West | Electronics | 25000</li>
      <li>West | NULL | 31000 (West subtotal)</li>
      <li>NULL | NULL | 175000 (grand total)</li>
    </ul>
    <h3>Example 2: ROLLUP with labelled total rows using GROUPING()</h3>
    <p>Business question: Replace NULLs with readable labels in the report.</p>
    <pre><code class="language-sql">SELECT
    CASE WHEN GROUPING(region) = 1 THEN 'Grand Total' ELSE region END AS region,
    CASE WHEN GROUPING(category) = 1 THEN 'All Categories' ELSE category END AS category,
    SUM(amount) AS revenue
FROM sales
GROUP BY ROLLUP(region, category)
ORDER BY region, category;</code></pre>
    <p>Now the subtotal row for North shows "North | All Categories | 83000" and the grand total shows "Grand Total | All Categories | 175000" instead of NULL.</p>
    <h3>Example 3: CUBE for all combinations of subtotals</h3>
    <p>Business question: The finance team wants subtotals by region AND by category independently, not just hierarchically.</p>
    <pre><code class="language-sql">SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY CUBE(region, category)
ORDER BY region, category;</code></pre>
    <p>CUBE adds rows that ROLLUP does not:</p>
    <ul>
      <li>NULL | Electronics | 140000 (Electronics across all regions)</li>
      <li>NULL | Clothing | 35000 (Clothing across all regions)</li>
    </ul>
    <p>These cross-column subtotals are what CUBE adds beyond ROLLUP.</p>
    <h3>Example 4: When to use ROLLUP vs CUBE</h3>
    <p>Business question: Ananya needs just hierarchical subtotals (region, then grand total). The category manager needs subtotals from every angle.</p>
    <pre><code class="language-sql">-- Ananya's use case: hierarchy top-down (ROLLUP)
SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY ROLLUP(region, category);

-- Category manager use case: every possible slice (CUBE)
SELECT region, category, SUM(amount) AS revenue
FROM sales
GROUP BY CUBE(region, category);</code></pre>
    <p>ROLLUP produces fewer rows and is appropriate for hierarchical reports. CUBE produces more rows and is appropriate for pivot-table style analysis.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The NULL values in ROLLUP/CUBE output look like missing data but they are not. A NULL in the <code>category</code> column on a ROLLUP row means "this row represents the total across all categories for this region." If your actual data also has NULL values in the category column, you cannot tell them apart without using GROUPING().</p>
    <p>GROUPING() is the solution: GROUPING(category) returns 1 for ROLLUP-generated NULLs and 0 for NULLs that exist in the actual data. Always use GROUPING() in reports where the data itself might contain NULLs in the grouped columns.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Confusing ROLLUP NULLs with real NULL data in the column</li>
      <li>Using ROLLUP when CUBE was needed (missing cross-column subtotals)</li>
      <li>Not using GROUPING() to label subtotal rows, making the report unreadable</li>
      <li>Not ordering by the GROUP BY columns, making the ROLLUP output hard to follow</li>
      <li>Using CUBE on many columns (3+ columns produce 2^n combinations and can create very large result sets)</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always use GROUPING() with CASE to replace ROLLUP/CUBE NULLs with readable labels</li>
      <li>Use ROLLUP for hierarchical reports (region > category > product) where order matters</li>
      <li>Use CUBE for cross-sectional analysis where you need subtotals from multiple dimensions independently</li>
      <li>Order your results by the grouping columns to make ROLLUP output readable</li>
      <li>Avoid CUBE with more than 2-3 columns as the number of subtotal combinations grows exponentially</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, finance generates monthly category-region revenue reports using ROLLUP to get automated subtotals. At Amazon India, the seller performance team uses ROLLUP on region and fulfillment type to get seller-level, region-level, and grand totals in one query. At Reliance Jio, the revenue team uses ROLLUP on circle and plan type for quarterly earnings summaries. At Paytm, the finance team uses CUBE on payment method and city to analyze transaction volumes from every angle. ROLLUP and CUBE are the SQL features that power the subtotal rows in spreadsheet-style business reports.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>ROLLUP(region, category) generates:
  Level 3: (region, category) -- detailed rows
  Level 2: (region, NULL)     -- subtotals per region
  Level 1: (NULL, NULL)       -- grand total

CUBE(region, category) generates:
  (region, category)  -- detailed rows
  (region, NULL)      -- subtotals per region
  (NULL, category)    -- subtotals per category  &lt;-- extra vs ROLLUP
  (NULL, NULL)        -- grand total

ROLLUP = hierarchy (top-down summary)
CUBE   = all combinations (full pivot)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>What does a NULL in the region column mean in a ROLLUP result?</li>
      <li>How is CUBE different from ROLLUP?</li>
      <li>What does GROUPING(column) return and when do you use it?</li>
      <li>Why would you choose ROLLUP over CUBE?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query using ROLLUP to get total sales by region and category, including region subtotals and a grand total.</li>
    </ol>
    <ol>
      <li>Modify the ROLLUP query to replace NULL values in the output with 'All Regions' and 'All Categories' using GROUPING() and CASE.</li>
    </ol>
    <ol>
      <li>Write a CUBE query on the same <code>sales</code> table. How many additional rows does CUBE produce compared to ROLLUP?</li>
    </ol>
    <ol>
      <li>How would you use ROLLUP with three columns: region, category, and sale_id? What subtotal levels would it produce?</li>
    </ol>
    <ol>
      <li>In a table where the <code>category</code> column itself contains some NULL values (for uncategorised products), how would you distinguish real NULLs from ROLLUP-generated NULLs in the output?</li>
    </ol>
    <ol>
      <li>Write a query to show total revenue by region using ROLLUP, but only for the Electronics category. (Use WHERE to filter before ROLLUP runs.)</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>ROLLUP and CUBE are not beginner features, but they solve a very real problem: generating multi-level summary reports without running multiple queries. Once you understand that NULLs in ROLLUP output mean "total for this group," and that GROUPING() lets you label those rows cleanly, these become genuinely useful tools in your SQL toolkit, especially for the kind of reporting work that data analysts do every week.</p>
  `,

  // ── Module 7 ─────────────────────────────────────────────────
  'mod7-t1': `
    <h1>Joins: How to Combine Data from Two or More Tables</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Priya joined Swiggy's data team two weeks ago. On her third day, her manager Rohit walks over and says, "We need a report showing each customer's name along with the total amount they've spent. Can you pull that?"</p>
    <p>Priya opens the database and finds two tables. One table called <code>customers</code> has customer names and their cities. The other table called <code>orders</code> has order amounts and customer IDs. Neither table alone gives her what she needs. The customer names are in one place, the spending data is in another.</p>
    <p>Rohit notices her confusion and says, "You need to join those two tables. That's how we connect related data in SQL."</p>
    <p>That moment is where most people first understand what a JOIN actually is.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>In any real application, data is stored across multiple tables. At Swiggy, there is a table for customers, a separate table for orders, another for restaurants, and yet another for delivery partners. These tables are connected by shared columns called keys.</p>
    <p>When you need to answer a business question that spans two or more tables, you cannot just look at one table. You need to bring them together. That is exactly what a JOIN does.</p>
    <p>The question Priya faced is a perfect example: customer names live in <code>customers</code>, order amounts live in <code>orders</code>. To answer "how much has each customer spent," you have to combine both tables into a single result.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>You might wonder: why not just put everything into one big table? Why have separate tables at all?</p>
    <p>The answer comes down to a concept called normalization. When you store the same information in multiple places, you create problems. If a customer changes their city, you would have to update every single row in a giant combined table. If you store their name in one place and reference it by ID everywhere else, you only update it once.</p>
    <p>Separate tables also prevent wasted storage. Imagine a customer who places 50 orders. If you stored their name and city on every single order row, you would have 50 copies of the same data. Instead, you store the customer once and just reference their ID on each order row.</p>
    <p>Joins were built to give you the best of both worlds: store data cleanly in separate tables, but query it as if it were all in one place.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Picture two registers at a school office. The first register has student names and their roll numbers. The second register has marks and roll numbers. Neither register alone tells you which student scored what. But if you match rows from both registers using the roll number, you instantly get the complete picture: name, roll number, and marks together.</p>
    <p>SQL JOINs work exactly like that matching process. You tell the database which column to use as the connection point, and it brings the rows together for you.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <p>Here are two tables at Swiggy:</p>
    <p><strong>customers table</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Priya</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Arjun</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Neha</td><td>Bangalore</td></tr>
    </table>
    <p><strong>orders table</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th></tr>
      <tr><td>101</td><td>1</td><td>450</td></tr>
      <tr><td>102</td><td>2</td><td>320</td></tr>
      <tr><td>103</td><td>1</td><td>200</td></tr>
    </table>
    <p>The <code>customer_id</code> column appears in both tables. That shared column is the link. When you JOIN these two tables on <code>customer_id</code>, the database matches row 1 in customers (Priya, Mumbai) with rows 101 and 103 in orders (the two orders where customer_id = 1).</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When you write a JOIN, you tell the database three things:</p>
    <ol>
      <li>Which two tables to combine</li>
      <li>Which column to use for matching (the ON clause)</li>
      <li>What type of JOIN to use (inner, left, right, full, cross, self)</li>
    </ol>
    <p>The database then goes through each row in the first table, finds the matching rows in the second table based on your condition, and combines them into a single output row. If there are multiple matches, you get multiple output rows.</p>
    <p>The ON clause is the heart of any join. It defines what "matching" means. In the school register example, the ON clause would say "match rows where roll numbers are equal." In the Swiggy example, it says "match rows where customer_id is equal."</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>The basic syntax for a JOIN looks like this:</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
JOIN table2 ON table1.matching_column = table2.matching_column;</code></pre>
    <p>For the Swiggy example, getting customer names with their order amounts:</p>
    <pre><code class="language-sql">SELECT customers.name, orders.order_id, orders.amount
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id;</code></pre>
    <p>The <code>ON customers.customer_id = orders.customer_id</code> part is the condition that tells the database how to match rows across both tables.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM customers</code></td><td>Sets the first (left) table</td><td>The starting table in the join</td></tr>
      <tr><td><code>JOIN orders</code></td><td>Brings in the second (right) table</td><td>The table being joined to the first</td></tr>
      <tr><td><code>ON customers.customer_id = orders.customer_id</code></td><td>Defines how rows are matched</td><td>Rows where customer_id is equal in both tables are combined</td></tr>
      <tr><td><code>customers.name</code></td><td>References a column from the left table</td><td>Use <code>table.column</code> format to avoid ambiguity</td></tr>
      <tr><td><code>orders.amount</code></td><td>References a column from the right table</td><td>Clarifies which table the column comes from</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>Using these two tables:</p>
    <p><strong>customers</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Priya</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Arjun</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Neha</td><td>Bangalore</td></tr>
      <tr><td>4</td><td>Rahul</td><td>Chennai</td></tr>
    </table>
    <p><strong>orders</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th></tr>
      <tr><td>101</td><td>1</td><td>450</td></tr>
      <tr><td>102</td><td>2</td><td>320</td></tr>
      <tr><td>103</td><td>1</td><td>200</td></tr>
      <tr><td>104</td><td>5</td><td>780</td></tr>
    </table>
    <h3>Example 1: Basic join to get customer names with orders</h3>
    <p>Business question: Show each order along with the customer name.</p>
    <pre><code class="language-sql">SELECT customers.name, orders.order_id, orders.amount
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id;</code></pre>
    <p>Output explanation: Only rows where customer_id exists in both tables appear. Priya appears twice (orders 101 and 103), Arjun appears once (order 102). Neha and Rahul have no orders so they are excluded. Order 104 has customer_id 5 which does not exist in customers, so it is also excluded.</p>
    <h3>Example 2: Add a WHERE clause after joining</h3>
    <p>Business question: Show orders above 300 rupees with customer names.</p>
    <pre><code class="language-sql">SELECT customers.name, orders.order_id, orders.amount
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id
WHERE orders.amount &gt; 300;</code></pre>
    <p>Output explanation: Same join as above, but now filtered to only rows where amount exceeds 300. Priya's 200-rupee order is removed. You get Priya's 450-rupee order and Arjun's 320-rupee order.</p>
    <h3>Example 3: Using table aliases to shorten the query</h3>
    <p>Business question: Same as Example 1, but written more cleanly.</p>
    <pre><code class="language-sql">SELECT c.name, o.order_id, o.amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <p>Output explanation: Same result as Example 1. The aliases <code>c</code> and <code>o</code> replace the full table names throughout the query, making it easier to read and write, especially in longer queries.</p>
    <h3>Example 4: Aggregate after joining</h3>
    <p>Business question: How much has each customer spent in total?</p>
    <pre><code class="language-sql">SELECT c.name, SUM(o.amount) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name;</code></pre>
    <p>Output explanation: Priya's two orders (450 + 200 = 650) are summed together. Arjun's single order (320) is his total. Neha and Rahul still do not appear because they have no matching orders in the right table.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The ON clause can reference any columns, not just columns named "id." As long as the values in both columns represent the same thing, the join works. You could join on email addresses, phone numbers, or any other shared value.</p>
    <p>When two tables have columns with the same name, SQL needs you to specify which table you mean. Writing <code>customers.customer_id</code> instead of just <code>customer_id</code> removes that ambiguity. This is especially important when both tables have a column called <code>name</code> or <code>status</code>.</p>
    <p>A join does not automatically mean one-to-one matching. If one customer has five orders, the join produces five rows for that customer. The left table row is repeated for each matching right table row.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Writing just <code>customer_id</code> instead of <code>customers.customer_id</code> in the ON clause when both tables have that column causes an error about ambiguous column names. Always specify the table when the column name exists in both tables.</p>
    <p>Forgetting the ON clause entirely turns a JOIN into a CROSS JOIN, which combines every row from table A with every row from table B. On large tables this produces millions of rows and can bring a database to its knees.</p>
    <p>Using the wrong column in the ON clause connects tables through unrelated data and produces nonsense results without any error message. Always double-check that the columns you are joining on actually represent the same concept.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Always use table aliases in any query that references more than one table. It makes queries shorter and easier to read.</p>
    <p>Specify the table name or alias before every column reference in a multi-table query. This makes it immediately clear where each column comes from.</p>
    <p>Start by looking at the data in both tables separately before writing the join. Understanding what values the join column contains in each table helps you predict what the result will look like.</p>
    <p>Add a LIMIT clause when testing joins on large tables. Getting the first 10 rows of a join result is enough to verify the logic before running it on millions of rows.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, every order report that shows customer names joined with order data uses a JOIN. At Flipkart, the page showing a user's order history combines the orders table with the products table to display product names alongside order IDs. At Paytm, transaction reports join the transactions table with the accounts table to show which account holder made each payment.</p>
    <p>Any time you see a report that pulls data from different parts of a system into one view, there is a JOIN behind it. JOINs are used in almost every real-world SQL query beyond the most basic lookups.</p>
    <hr>
    <h2>The Big Picture</h2>
    <p>Here is a visual showing the relationship between the two tables and what a basic JOIN does:</p>
    <pre><code>customers table          orders table
+-------------+          +----------+
| customer_id |&lt;---------| customer_id |
| name        |          | order_id    |
| city        |          | amount      |
+-------------+          +----------+

JOIN result: only rows where customer_id matches in BOTH tables

customers   orders     Result
Priya (1) + order 101 = Priya, 101, 450
Priya (1) + order 103 = Priya, 103, 200
Arjun (2) + order 102 = Arjun, 102, 320
Neha  (3) + no match  = excluded
Rahul (4) + no match  = excluded
          + order 104 (customer 5) = excluded</code></pre>
    <p>Different join types change which rows are kept versus excluded. The chapters ahead cover each type in detail.</p>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you understand these points before continuing:</p>
    <ul>
      <li>A JOIN connects rows from two tables using a shared column</li>
      <li>The ON clause defines what "matching" means</li>
      <li>Rows with no match in the other table are excluded by a basic JOIN (INNER JOIN)</li>
      <li>You need to specify table names or aliases when column names appear in both tables</li>
      <li>The same left-table row can appear multiple times if it matches multiple right-table rows</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>You have a <code>products</code> table (product_id, name, price) and a <code>cart_items</code> table (cart_id, product_id, quantity) at Flipkart. Write a query to show each cart item's product name and price.</li>
    </ol>
    <ol>
      <li>Write the same query from Question 1 using table aliases to shorten it.</li>
    </ol>
    <ol>
      <li>Why would you get duplicate rows in a join result? Give an example using the customers and orders tables from this article.</li>
    </ol>
    <ol>
      <li>A <code>students</code> table has (student_id, name) and a <code>grades</code> table has (student_id, subject, score). Write a query to show each student's name, subject, and score.</li>
    </ol>
    <ol>
      <li>What happens if you forget to write the ON clause in a JOIN? What does the result look like?</li>
    </ol>
    <ol>
      <li>At Paytm, you have a <code>users</code> table and a <code>transactions</code> table connected by <code>user_id</code>. Write a query to find the total transaction amount for each user, showing their name alongside the total.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>JOINs are the single most important concept in SQL for anyone working with real databases. Every application splits its data across multiple tables, and every meaningful query eventually needs to bring some of those tables together. Once you understand that a JOIN is just a way of matching rows using a shared value, the rest becomes a matter of choosing which rows to keep and which to leave out. That is what the next eight articles cover.</p>
  `,
  'mod7-t2': `
    <h1>INNER JOIN: Get Only the Rows That Match in Both Tables</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Arjun is on his second week at Flipkart's analytics team. His manager gives him a task before the morning standup: "Pull a list of all customers who have actually placed an order. We need their names, order IDs, and order status for a report going to the business team today."</p>
    <p>Arjun opens the database and sees two tables. The <code>customers</code> table has names and cities. The <code>orders</code> table has order IDs, amounts, and statuses. He knows from yesterday's training that he needs to join them, but he is not sure which rows should appear in the final result.</p>
    <p>His manager clarifies: "We only want customers who have orders. Anyone who signed up but never bought anything should not be in this report."</p>
    <p>That single sentence describes exactly what an INNER JOIN does.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You will frequently need to pull data that exists across two tables but only want rows where both sides have something to offer. At Flipkart, you might want orders along with customer names, but only for customers who have actually placed an order. At Zomato, you might want restaurant names alongside their reviews, but only for restaurants that have at least one review.</p>
    <p>In all these cases, you do not want rows from one table that have no corresponding row in the other table. You want the intersection, the rows that exist on both sides.</p>
    <p>That is the INNER JOIN.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>The INNER JOIN is the most natural kind of join. It answers the question: "Give me rows from table A and table B that belong together." It filters out anything that does not have a partner on the other side.</p>
    <p>Before JOINs existed in SQL, you would need to write separate queries and combine the results manually in application code. The JOIN syntax was introduced to let the database do this matching work natively, far more efficiently than any code you could write yourself.</p>
    <p>INNER JOIN is also the default behavior when you just write <code>JOIN</code> without specifying a type. This matters because most SQL you will read in production code says <code>JOIN</code>, not <code>INNER JOIN</code>. They are identical.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine two lists pinned to a notice board at a Flipkart warehouse. One list has all registered seller names. The other list has all active shipments with seller IDs. The warehouse manager wants a combined view showing only sellers who currently have active shipments. She goes through both lists and writes down only the names that appear on both. That is exactly what INNER JOIN does: it keeps only the rows that have a match on both sides.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>customers table           orders table
+----+--------+           +----+----+
| id | name   |           | oid| cid|
+----+--------+           +----+----+
|  1 | Priya  |           | 101|  1 |
|  2 | Arjun  |           | 102|  2 |
|  3 | Neha   |           | 103|  1 |
|  4 | Rahul  |           +----+----+
+----+--------+

INNER JOIN result (only rows with matches in both):
Priya  - order 101
Priya  - order 103
Arjun  - order 102
(Neha and Rahul have no orders, so they are excluded)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When you run an INNER JOIN, the database examines each row in the first table and looks for matching rows in the second table based on the ON condition. If it finds a match, it combines those rows into one output row. If it finds multiple matches (a customer with multiple orders), it creates one output row for each match. If it finds no match, the row is silently dropped from the result.</p>
    <p>This two-sided filtering is what distinguishes INNER JOIN from LEFT JOIN and RIGHT JOIN. Both tables contribute to determining which rows survive in the output.</p>
    <p>One-to-many relationships are common. One customer can have many orders. The INNER JOIN handles this by repeating the customer's information for each matching order row.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>The standard syntax for an INNER JOIN:</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
INNER JOIN table2 ON table1.column = table2.column;</code></pre>
    <p>Using just <code>JOIN</code> (which is equivalent):</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
JOIN table2 ON table1.column = table2.column;</code></pre>
    <p>For Arjun's Flipkart task:</p>
    <pre><code class="language-sql">SELECT c.name, o.order_id, o.amount, o.status
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM customers c</code></td><td>Declares the left table with alias <code>c</code></td><td>All rows in customers are candidates</td></tr>
      <tr><td><code>INNER JOIN orders o</code></td><td>Declares the right table with alias <code>o</code></td><td>All rows in orders are candidates</td></tr>
      <tr><td><code>ON c.customer_id = o.customer_id</code></td><td>The matching condition</td><td>Only rows where both customer_ids match survive</td></tr>
      <tr><td><code>c.name</code></td><td>Column from the left table</td><td>The customer's name</td></tr>
      <tr><td><code>o.order_id, o.amount, o.status</code></td><td>Columns from the right table</td><td>Order details</td></tr>
      <tr><td><code>INNER</code> keyword</td><td>Specifies join type</td><td>Can be omitted since it is the default</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>customers table (Flipkart)</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Arjun</td><td>Delhi</td></tr>
      <tr><td>2</td><td>Simran</td><td>Mumbai</td></tr>
      <tr><td>3</td><td>Vikram</td><td>Pune</td></tr>
      <tr><td>4</td><td>Ananya</td><td>Hyderabad</td></tr>
    </table>
    <p><strong>orders table (Flipkart)</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th><th>status</th></tr>
      <tr><td>101</td><td>1</td><td>1200</td><td>Delivered</td></tr>
      <tr><td>102</td><td>2</td><td>3400</td><td>Shipped</td></tr>
      <tr><td>103</td><td>1</td><td>890</td><td>Delivered</td></tr>
      <tr><td>104</td><td>6</td><td>550</td><td>Delivered</td></tr>
    </table>
    <h3>Example 1: Basic INNER JOIN</h3>
    <p>Business question: Show all orders with the customer name who placed them.</p>
    <pre><code class="language-sql">SELECT c.name, o.order_id, o.amount, o.status
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <p>Output explanation: Arjun appears twice (orders 101 and 103) because he has two orders. Simran appears once (order 102). Vikram and Ananya have no orders so they do not appear at all. Order 104 has customer_id 6 which does not exist in the customers table, so it is also excluded. Four candidates from customers, four from orders, but only three rows survive the INNER JOIN.</p>
    <h3>Example 2: INNER JOIN with a WHERE filter</h3>
    <p>Business question: Show only delivered orders with the customer name.</p>
    <pre><code class="language-sql">SELECT c.name, o.order_id, o.amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE o.status = 'Delivered';</code></pre>
    <p>Output explanation: After the join, the WHERE clause filters further. Only rows where status is 'Delivered' remain. Arjun's two delivered orders appear. Simran's 'Shipped' order is removed. The result has two rows: Arjun with order 101 and Arjun with order 103.</p>
    <h3>Example 3: INNER JOIN with GROUP BY and aggregation</h3>
    <p>Business question: What is the total amount each customer has spent?</p>
    <pre><code class="language-sql">SELECT c.name, COUNT(o.order_id) AS total_orders, SUM(o.amount) AS total_spent
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name;</code></pre>
    <p>Output explanation: After joining, the GROUP BY collapses all rows for the same customer. Arjun has two orders totalling 2090. Simran has one order totalling 3400. Customers with no orders are not in the join result so they do not appear in the group either.</p>
    <h3>Example 4: INNER JOIN with ORDER BY</h3>
    <p>Business question: Show all matched orders sorted by amount from highest to lowest.</p>
    <pre><code class="language-sql">SELECT c.name, c.city, o.order_id, o.amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
ORDER BY o.amount DESC;</code></pre>
    <p>Output explanation: The same three rows from Example 1 appear, but now sorted so Simran's 3400-rupee order is first, followed by Arjun's 1200-rupee order, then Arjun's 890-rupee order. The <code>JOIN</code> keyword here works identically to <code>INNER JOIN</code>.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>When a customer has three orders, the INNER JOIN produces three rows with that customer's name repeated. This is correct behavior, not a bug. If you want one row per customer, you need to aggregate with GROUP BY.</p>
    <p>The column used in the ON clause does not have to have the same name in both tables. You might join on <code>customers.customer_id = orders.buyer_id</code> if the second table uses a different column name to store the same information. What matters is that the values in both columns represent the same concept.</p>
    <p>INNER JOIN and <code>JOIN</code> are identical. There is no performance difference between writing one or the other. Most real-world SQL code uses just <code>JOIN</code> for brevity.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Joining on the wrong column produces a result with no error but incorrect data. For example, if you accidentally join <code>customers.customer_id = orders.order_id</code>, the query runs but the output makes no sense. Always verify that the columns in your ON clause actually represent the same thing in both tables.</p>
    <p>Selecting a column that appears in both tables without specifying the table causes an ambiguous column error. If both <code>customers</code> and <code>orders</code> have a column called <code>status</code>, writing <code>SELECT status</code> fails. Write <code>SELECT o.status</code> or <code>SELECT c.status</code> to be explicit.</p>
    <p>Writing a join without an ON clause is valid SQL in some databases but produces a Cartesian product where every row from the first table is combined with every row from the second. With 1000 customers and 10000 orders, you get 10 million rows instantly. Always include the ON clause.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Use table aliases consistently. Once you give a table an alias, use that alias for every column reference in the query. Mixing full table names and aliases in the same query is confusing.</p>
    <p>Place more selective filters in the WHERE clause to reduce the number of rows early. If you only care about orders from one city, filter on city before or after the join. Smaller intermediate results mean faster queries.</p>
    <p>Explicitly write <code>INNER JOIN</code> rather than just <code>JOIN</code> when writing queries that will be read by others. The explicit form makes the intent clear to anyone reading the code, even if they do not remember that <code>JOIN</code> defaults to <code>INNER JOIN</code>.</p>
    <p>Index the columns you join on. A join on <code>customer_id</code> runs much faster when both tables have an index on <code>customer_id</code>. This is covered in detail in the performance tips article later in this module.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, the order management dashboard uses INNER JOINs to show a seller's active orders with product names, quantities, and delivery addresses all combined from multiple tables. Only orders that have matching entries in the products and customer tables appear in the dashboard.</p>
    <p>At BookMyShow, the booking confirmation page uses INNER JOINs to combine the booking record with event details and seat information. If a booking does not have a matching event (which should never happen, but data issues occur), that booking simply does not appear.</p>
    <p>At Paytm, transaction reports use INNER JOINs to match each transaction with the merchant's name and category. Transactions with unrecognized merchant IDs are naturally excluded, which acts as an implicit data quality filter.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>LEFT TABLE (customers)    RIGHT TABLE (orders)
+---------+               +----------+
| Arjun   |               | order 101|
| Simran  |  INNER JOIN   | order 102|
| Vikram  |  keeps only   | order 103|
| Ananya  |  the overlap  | order 104|
+---------+               +----------+

   [customers] [OVERLAP] [orders]
         ^^^
     Only this zone appears in the result

Excluded:
- Vikram and Ananya (in customers, no matching order)
- Order 104 (in orders, no matching customer)</code></pre>
    <p>The INNER JOIN is the most restrictive join type. It keeps only the rows that are confirmed to exist on both sides.</p>
    <hr>
    <h2>Before You Move On</h2>
    <p>Confirm you can answer these before moving to the next article:</p>
    <ul>
      <li>What rows does an INNER JOIN exclude?</li>
      <li>Why does one customer appear multiple times in a join result?</li>
      <li>What is the difference between <code>JOIN</code> and <code>INNER JOIN</code>?</li>
      <li>What does the ON clause do?</li>
      <li>What happens if two tables both have a column called <code>name</code> and you write <code>SELECT name</code>?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>You have a <code>products</code> table (product_id, name, category, price) and a <code>order_items</code> table (item_id, order_id, product_id, quantity) at Flipkart. Write an INNER JOIN to show each order item with the product name and price.</li>
    </ol>
    <ol>
      <li>Using the same tables, write a query to count how many times each product has been ordered. Show the product name and order count, sorted by order count from highest to lowest.</li>
    </ol>
    <ol>
      <li>At Myntra, you have a <code>users</code> table (user_id, name, email) and a <code>reviews</code> table (review_id, user_id, product_id, rating). Write an INNER JOIN to find all users who have submitted at least one review, showing their name and average rating.</li>
    </ol>
    <ol>
      <li>Why would you use an INNER JOIN instead of a LEFT JOIN for Arjun's original task (customers who have placed orders)?</li>
    </ol>
    <ol>
      <li>You join <code>orders</code> and <code>customers</code> using INNER JOIN and get back 500 rows, but you know there are 800 orders and 400 customers in the database. What can you infer from this result?</li>
    </ol>
    <ol>
      <li>Write an INNER JOIN query using aliases that shows each Flipkart customer from Delhi along with their orders.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>INNER JOIN is the workhorse of SQL. It is the join you will write most often because most business questions are about things that exist on both sides: customers who have orders, products that have been sold, employees who belong to departments. Once you are comfortable with INNER JOIN, the other join types are just variations on where to draw the boundary between included and excluded rows.</p>
  `,
  'mod7-t3': `
    <h1>LEFT JOIN: Keep All Rows from the Left Table, Match What You Can</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha is on the growth team at Swiggy. Her manager calls her in and says, "We ran a big referral campaign last month and acquired 5000 new users. I want to know how many of them have placed at least one order, and more importantly, which ones have not ordered at all. Those are the ones we need to re-engage."</p>
    <p>Neha opens the database. The <code>customers</code> table has all 5000 new users. The <code>orders</code> table has orders placed by some of them, but not all. If she uses a regular INNER JOIN, customers who never ordered simply disappear from the result. She would have no way to identify them.</p>
    <p>Her senior, Dev, leans over and says, "You want a LEFT JOIN. It keeps every customer, even the ones with no orders."</p>
    <p>That is the exact moment where LEFT JOIN becomes necessary.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>The INNER JOIN only returns rows that have a match in both tables. But a huge category of real business questions involves finding things that are missing. You want to know which customers have not ordered, which products have never been sold, which employees have not completed their training. For all of these, an INNER JOIN fails you because the missing rows never appear in the result.</p>
    <p>LEFT JOIN is built precisely for this situation. It keeps every row from the left table and attaches whatever matching rows it finds from the right table. Where there is no match, it fills the right table's columns with NULL.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>An INNER JOIN assumes both tables have something to say about every row. But in reality, the left table often contains a superset of records compared to the right table. Customers exist before they place orders. Products exist before they are sold. Employees are hired before they complete any training.</p>
    <p>LEFT JOIN was designed to represent these one-sided relationships without losing the records that have not yet participated in the relationship. It lets you ask "show me everything from table A, and attach table B where it exists" instead of "show me only what exists in both."</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine Swiggy's marketing team has a spreadsheet of all users who downloaded the app this month. Another spreadsheet tracks all orders placed this month. The manager wants a combined sheet showing every user, with their order details filled in if they ordered, and blank cells if they did not.</p>
    <p>That is a LEFT JOIN. Every row from the left list (all users) appears. The right list (orders) fills in where it can, and leaves NULLs where it cannot.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>customers (left)         orders (right)
+----+--------+          +-----+----+------+
| id | name   |          | oid | cid| amt  |
+----+--------+          +-----+----+------+
|  1 | Priya  |          | 101 |  1 | 450  |
|  2 | Arjun  |          | 102 |  2 | 320  |
|  3 | Neha   |          | 103 |  1 | 200  |
|  4 | Rahul  |          +-----+----+------+
+----+--------+

LEFT JOIN result:
Priya  - order 101 - 450
Priya  - order 103 - 200
Arjun  - order 102 - 320
Neha   - NULL      - NULL   (kept, no matching order)
Rahul  - NULL      - NULL   (kept, no matching order)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>In a LEFT JOIN, the database starts with every row in the left table. For each row, it looks for matching rows in the right table using the ON condition. If it finds matches, it combines them and produces output rows just like an INNER JOIN. If it finds no match, it still produces an output row for the left table row, but fills every column from the right table with NULL.</p>
    <p>The result always contains at least as many rows as the left table. If some left table rows match multiple right table rows, the result contains more rows than the left table. But no left table row is ever silently dropped.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic LEFT JOIN syntax:</p>
    <pre><code class="language-sql">SELECT columns
FROM left_table
LEFT JOIN right_table ON left_table.column = right_table.column;</code></pre>
    <p><code>LEFT JOIN</code> and <code>LEFT OUTER JOIN</code> are identical. The word <code>OUTER</code> is optional and changes nothing:</p>
    <pre><code class="language-sql">SELECT columns
FROM left_table
LEFT OUTER JOIN right_table ON left_table.column = right_table.column;</code></pre>
    <p>For Neha's Swiggy task:</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name, c.city, o.order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <p>To find customers who have never ordered (the critical business use case):</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name, c.city
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM customers c</code></td><td>The left table, all rows are preserved</td><td>Every customer appears in the result</td></tr>
      <tr><td><code>LEFT JOIN orders o</code></td><td>The right table, matched where possible</td><td>Orders attached where customer_id matches</td></tr>
      <tr><td><code>ON c.customer_id = o.customer_id</code></td><td>The matching condition</td><td>Rows connected by customer_id</td></tr>
      <tr><td><code>WHERE o.order_id IS NULL</code></td><td>Filter for unmatched left rows</td><td>Keeps only customers who have no order</td></tr>
      <tr><td>NULL values in result</td><td>Fill in when no right-side match exists</td><td>Right-side columns show NULL for unmatched customers</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>customers table (Swiggy)</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Neha</td><td>Bangalore</td></tr>
      <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
      <tr><td>3</td><td>Karan</td><td>Delhi</td></tr>
      <tr><td>4</td><td>Ananya</td><td>Pune</td></tr>
    </table>
    <p><strong>orders table (Swiggy)</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th></tr>
      <tr><td>101</td><td>1</td><td>340</td></tr>
      <tr><td>102</td><td>2</td><td>780</td></tr>
      <tr><td>103</td><td>1</td><td>120</td></tr>
      <tr><td>104</td><td>7</td><td>560</td></tr>
    </table>
    <h3>Example 1: Full LEFT JOIN showing all customers</h3>
    <p>Business question: Show every customer and their orders, including customers with no orders.</p>
    <pre><code class="language-sql">SELECT c.name, c.city, o.order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <p>Output explanation: Neha appears twice because she has two orders. Priya appears once with her order. Karan and Ananya appear once each with NULL for order_id and amount because they have no orders. Order 104 (customer_id 7) does not appear because there is no customer with id 7 in the customers table. The left table drives the result.</p>
    <h3>Example 2: Find customers who have never placed an order</h3>
    <p>Business question: Which customers signed up but never ordered? (Re-engagement target list)</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name, c.city
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;</code></pre>
    <p>Output explanation: After the LEFT JOIN, rows with no match have NULL for all order columns. The WHERE clause then filters to keep only those NULL rows. Result shows Karan (Delhi) and Ananya (Pune). These are the users Neha's team will target for re-engagement.</p>
    <h3>Example 3: Count orders per customer including zero-order customers</h3>
    <p>Business question: How many orders has each customer placed? Include customers with zero orders.</p>
    <pre><code class="language-sql">SELECT c.name, COUNT(o.order_id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name;</code></pre>
    <p>Output explanation: COUNT(o.order_id) counts non-NULL values, so customers with no orders get a count of 0. Neha gets 2, Priya gets 1, Karan and Ananya each get 0. An INNER JOIN would have shown 0 customers with zero orders because those rows would not have existed in the join result.</p>
    <h3>Example 4: LEFT JOIN versus INNER JOIN comparison</h3>
    <p>Business question: Same report as Example 1 but using INNER JOIN to see the difference.</p>
    <pre><code class="language-sql">-- INNER JOIN (excludes non-ordering customers)
SELECT c.name, o.order_id, o.amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;

-- LEFT JOIN (keeps all customers)
SELECT c.name, o.order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <p>Output explanation: The INNER JOIN returns 3 rows: Neha twice and Priya once. The LEFT JOIN returns 5 rows: the same 3 plus Karan with NULLs and Ananya with NULLs. The choice between LEFT JOIN and INNER JOIN determines whether you see the full customer picture or only the active customers.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The most common mistake with LEFT JOIN is placing a filter on the right table column in the WHERE clause instead of the ON clause. When you write <code>WHERE o.amount > 500</code>, you filter out all NULL rows, which turns your LEFT JOIN into an effective INNER JOIN. If you want to filter right-side conditions while still keeping unmatched left rows, put the condition in the ON clause:</p>
    <pre><code class="language-sql">-- This turns LEFT JOIN into INNER JOIN (wrong if you want unmatched rows)
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.amount &gt; 500;

-- This keeps unmatched customers (correct)
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id AND o.amount &gt; 500;</code></pre>
    <p>In the second version, customers with no orders still appear (with NULL for order_id), but among customers who do have orders, only orders above 500 are attached.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Using COUNT(<em>) instead of COUNT(right_table.column) in a LEFT JOIN with GROUP BY inflates the count. COUNT(</em>) counts every row including the NULL row. COUNT(o.order_id) correctly counts only non-NULL values, giving you 0 for customers with no orders instead of 1.</p>
    <p>Assuming the left table is always the table written first in the FROM clause is correct. But when you chain multiple joins, the "left" table for each join is the result of everything joined so far. This takes a bit of practice to visualize.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Always use <code>WHERE right_table.column IS NULL</code> when your goal is to find records in the left table that have no match on the right side. This pattern (sometimes called an anti-join) is one of the most useful things you can do with a LEFT JOIN.</p>
    <p>When using LEFT JOIN with GROUP BY and COUNT, always count a specific column from the right table (like <code>COUNT(o.order_id)</code>) rather than <code>COUNT(*)</code>. This gives accurate zero counts for unmatched rows.</p>
    <p>Choose LEFT JOIN over INNER JOIN any time the left table represents a master list (customers, employees, products) and the right table represents associated events (orders, logs, sales). The master list should drive the result, not be filtered by the presence or absence of events.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, every weekly retention report uses LEFT JOIN to identify users who have not ordered in the past 7 days. The customers table is joined to last week's orders. Users with NULLs on the orders side are the targets for push notifications.</p>
    <p>At Byju's, the learning analytics team uses LEFT JOIN to find students who are enrolled in a course but have not started any lessons. Students table joined to lesson progress, filtered by IS NULL.</p>
    <p>At Amazon India, the seller performance team uses LEFT JOIN to find sellers who are registered but have listed no products. Sellers table joined to the listings table, filtered by IS NULL.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>LEFT JOIN visual:

LEFT TABLE       RIGHT TABLE
[customers]      [orders]

+===========+    +----------+
| ALL ROWS  |    | matched  |
| including |    | rows     |
| unmatched |    | only     |
+===========+    +----------+

Result:
[  ALL of customers  ] + [orders WHERE match exists]
                       + NULL columns WHERE no match

Compare with INNER JOIN:
[ customers ] intersect [ orders ] = matched rows only</code></pre>
    <p>The left table is always fully represented. The right table contributes what it can.</p>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can confidently answer these:</p>
    <ul>
      <li>What does a LEFT JOIN return that an INNER JOIN does not?</li>
      <li>What value fills the right-side columns when there is no match?</li>
      <li>How do you find rows in the left table that have no match in the right table?</li>
      <li>Why does putting a right-side filter in WHERE turn a LEFT JOIN into an INNER JOIN?</li>
      <li>What is the difference between LEFT JOIN and LEFT OUTER JOIN?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>At Swiggy, you have a <code>restaurants</code> table (restaurant_id, name, city) and a <code>reviews</code> table (review_id, restaurant_id, rating). Write a LEFT JOIN to find all restaurants that have never received a review.</li>
    </ol>
    <ol>
      <li>Using the same tables, count the number of reviews for each restaurant. Make sure restaurants with zero reviews show a count of 0.</li>
    </ol>
    <ol>
      <li>At Byju's, you have a <code>students</code> table (student_id, name) and a <code>submissions</code> table (submission_id, student_id, assignment_id, score). Write a query to find students who have not submitted any assignment.</li>
    </ol>
    <ol>
      <li>Explain in plain words what this query does and what its result looks like:</li>
    </ol>
    <pre><code class="language-sql">   SELECT c.name, o.order_id
   FROM customers c
   LEFT JOIN orders o ON c.customer_id = o.customer_id
   WHERE o.order_id IS NULL;</code></pre>
    <ol>
      <li>A LEFT JOIN query returns more rows than the left table has. How is this possible? Give an example.</li>
    </ol>
    <ol>
      <li>At IRCTC, you have a <code>passengers</code> table and a <code>bookings</code> table. Write a LEFT JOIN to find passengers who have not made any booking in 2024.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>LEFT JOIN is one of the most practically useful tools in SQL. The ability to keep all rows from a base table and attach matching data from another table, while using IS NULL to find the unmatched ones, covers a huge proportion of real analytical work. Any time your question starts with "which customers have not..." or "which products have never..." you almost certainly need a LEFT JOIN.</p>
  `,
  'mod7-t4': `
    <h1>RIGHT JOIN: Keep All Rows from the Right Table, Match What You Can</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Rahul has been at Zomato's data team for three weeks. His manager hands him a task: "We onboarded a bunch of new restaurants last quarter. I want to see all of them, along with any orders they have received so far. Some of them have zero orders, but I still want them in the report."</p>
    <p>Rahul writes his query starting with the <code>orders</code> table, then joins the <code>customers</code> table. He types <code>LEFT JOIN</code> and pauses. He realizes his left table is orders, but he wants to keep all restaurants, not all orders. The restaurants live in the right-side table in his current query structure.</p>
    <p>His teammate Kavya looks over and says, "You could either swap the table order and use LEFT JOIN, or keep your current order and use RIGHT JOIN. Both give the same result. Most teams just swap the tables."</p>
    <p>That exchange captures everything important about RIGHT JOIN.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>RIGHT JOIN is the mirror image of LEFT JOIN. Instead of keeping all rows from the left table, it keeps all rows from the right table and attaches whatever matching rows it finds from the left table. Left-side columns come back as NULL where there is no match.</p>
    <p>In practice, you will encounter RIGHT JOIN in legacy SQL code, in queries written by people who prefer to think from the right side, and in interview questions. Understanding it is important. Using it is a personal style choice.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL was designed to be symmetric and intuitive. Once LEFT JOIN existed, it made logical sense to have a RIGHT JOIN that does the same thing from the other direction. Database designers wanted to give query writers flexibility about which table drives the result, regardless of where they place it in the FROM clause.</p>
    <p>In practice, most SQL developers find it easier to consistently use LEFT JOIN and just arrange their tables so the "primary" or "complete" table is always on the left. But RIGHT JOIN was built for situations where the query structure makes it more natural to put the primary table on the right.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine Zomato's city launch team has a list of all restaurants that were supposed to go live in a new city (the right table). They have a separate list of actual orders received so far (the left table). The team wants to see every restaurant from their launch list, along with orders if any exist. The restaurant list must be complete in the output. This is a RIGHT JOIN: the right table (restaurants) is fully preserved.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>orders (left)            customers (right)
+-----+-----+            +----+--------+
| oid | cid |            | id | name   |
+-----+-----+            +----+--------+
| 101 |  1  |            |  1 | Rahul  |
| 102 |  2  |            |  2 | Priya  |
| 103 |  1  |            |  3 | Meena  |
+-----+-----+            +----+--------+

RIGHT JOIN result (all right-table rows kept):
Rahul  - order 101
Rahul  - order 103
Priya  - order 102
Meena  - NULL       (no matching order, but kept because she is in right table)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>In a RIGHT JOIN, the database ensures every row from the right table appears in the output at least once. For each right table row, it searches the left table for matching rows using the ON condition. When matches are found, they are combined. When no match is found, the right table row still appears with NULLs filling all left-side columns.</p>
    <p>The result looks exactly like what a LEFT JOIN would produce if you swapped the table positions. The rows are the same; only the column order and which side shows NULLs changes.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic RIGHT JOIN syntax:</p>
    <pre><code class="language-sql">SELECT columns
FROM left_table
RIGHT JOIN right_table ON left_table.column = right_table.column;</code></pre>
    <p><code>RIGHT JOIN</code> and <code>RIGHT OUTER JOIN</code> are identical:</p>
    <pre><code class="language-sql">SELECT columns
FROM left_table
RIGHT OUTER JOIN right_table ON left_table.column = right_table.column;</code></pre>
    <p>For Rahul's Zomato task:</p>
    <pre><code class="language-sql">SELECT o.order_id, o.amount, r.restaurant_name, r.city
FROM orders o
RIGHT JOIN restaurants r ON o.restaurant_id = r.restaurant_id;</code></pre>
    <p>The equivalent using LEFT JOIN (swapping table order):</p>
    <pre><code class="language-sql">SELECT o.order_id, o.amount, r.restaurant_name, r.city
FROM restaurants r
LEFT JOIN orders o ON r.restaurant_id = o.restaurant_id;</code></pre>
    <p>Both queries produce identical results.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM orders o</code></td><td>The left table</td><td>Orders are candidates for matching</td></tr>
      <tr><td><code>RIGHT JOIN restaurants r</code></td><td>The right table, fully preserved</td><td>Every restaurant appears in result</td></tr>
      <tr><td><code>ON o.restaurant_id = r.restaurant_id</code></td><td>The matching condition</td><td>Rows linked by restaurant_id</td></tr>
      <tr><td>NULL values in left columns</td><td>When no match found on left side</td><td>order_id shows NULL for restaurants with no orders</td></tr>
      <tr><td><code>RIGHT OUTER JOIN</code></td><td>Same as RIGHT JOIN</td><td>The word OUTER is optional</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>orders table (Zomato)</strong></p>
    <table>
      <tr><th>order_id</th><th>restaurant_id</th><th>customer_id</th><th>amount</th></tr>
      <tr><td>201</td><td>10</td><td>1</td><td>650</td></tr>
      <tr><td>202</td><td>10</td><td>2</td><td>420</td></tr>
      <tr><td>203</td><td>12</td><td>3</td><td>880</td></tr>
      <tr><td>204</td><td>99</td><td>1</td><td>310</td></tr>
    </table>
    <p><strong>customers table (Zomato)</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Rahul</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Simran</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Karan</td><td>Hyderabad</td></tr>
      <tr><td>4</td><td>Ananya</td><td>Bengaluru</td></tr>
    </table>
    <h3>Example 1: RIGHT JOIN to keep all customers</h3>
    <p>Business question: Show every customer and their orders, including customers who have not ordered.</p>
    <pre><code class="language-sql">SELECT o.order_id, o.amount, c.name, c.city
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.customer_id;</code></pre>
    <p>Output explanation: Rahul appears twice (orders 201 and 204). Simran appears once (order 202). Karan appears once (order 203). Ananya has no orders so she appears with NULL for order_id and amount. Order 204 references restaurant 99 which exists, but the customer join still works. All 4 customers from the right table appear in the result.</p>
    <h3>Example 2: Find customers with no orders using RIGHT JOIN</h3>
    <p>Business question: Which customers have never ordered from Zomato?</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name, c.city
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;</code></pre>
    <p>Output explanation: The RIGHT JOIN keeps all customers. Where no order exists, order columns are NULL. The WHERE clause then isolates only those NULL-order rows. Ananya is the only customer with no orders. This is the RIGHT JOIN equivalent of the IS NULL anti-join pattern from the LEFT JOIN article.</p>
    <h3>Example 3: The equivalent LEFT JOIN rewrite</h3>
    <p>Business question: Same as Example 1, rewritten as LEFT JOIN.</p>
    <pre><code class="language-sql">-- RIGHT JOIN version
SELECT o.order_id, o.amount, c.name, c.city
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.customer_id;

-- Equivalent LEFT JOIN version (tables swapped)
SELECT o.order_id, o.amount, c.name, c.city
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;</code></pre>
    <p>Output explanation: Both queries return exactly the same rows. The only difference is the order in which you write the tables. This demonstrates why most teams standardize on LEFT JOIN and just control which table they place first in the FROM clause.</p>
    <h3>Example 4: RIGHT JOIN with aggregate</h3>
    <p>Business question: How many orders has each customer placed? Show customers with zero orders too.</p>
    <pre><code class="language-sql">SELECT c.name, COUNT(o.order_id) AS total_orders
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.customer_id, c.name
ORDER BY total_orders DESC;</code></pre>
    <p>Output explanation: All four customers appear. Rahul has 2 orders, Simran has 1, Karan has 1, Ananya has 0. COUNT(o.order_id) correctly returns 0 for Ananya because it counts non-NULL values only.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>RIGHT JOIN is confusing to read because most people think left-to-right when reading code. Seeing <code>FROM orders RIGHT JOIN customers</code> means orders is written first but customers is the preserved table. This feels backward to many readers, which is the main reason most teams avoid RIGHT JOIN entirely and use LEFT JOIN with swapped table order instead.</p>
    <p>The NULL check works the same way as in LEFT JOIN but on the opposite side. In a RIGHT JOIN, if you want to find right-table rows with no match, check <code>WHERE left_table.column IS NULL</code>.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Confusing which table gets preserved is the most common error with RIGHT JOIN. Remind yourself: the word RIGHT refers to the table on the right side of the JOIN keyword. That table is the one that keeps all its rows.</p>
    <p>Putting a filter on the left table's column in the WHERE clause accidentally converts the RIGHT JOIN into an INNER JOIN, just as it does with LEFT JOIN. If you want to filter left-side data while keeping all right-side rows, put the condition in the ON clause.</p>
    <pre><code class="language-sql">-- This effectively becomes an INNER JOIN (wrong if you want all customers)
SELECT o.order_id, c.name
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.customer_id
WHERE o.amount &gt; 500;

-- This keeps all customers (correct)
SELECT o.order_id, c.name
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.customer_id AND o.amount &gt; 500;</code></pre>
    <hr>
    <h2>Best Practices</h2>
    <p>Most experienced SQL writers standardize on LEFT JOIN and put the primary table first in the FROM clause. This makes queries easier to read because the preserved table is always on the left side, consistent with how we read left-to-right.</p>
    <p>If you find yourself writing a RIGHT JOIN, ask whether you can achieve the same result by swapping the table order and using LEFT JOIN. In most cases you can, and the resulting query is easier for colleagues to understand.</p>
    <p>When you encounter RIGHT JOIN in existing code, do not change it without understanding the full query. The person who wrote it may have had a specific reason for the table ordering, or the RIGHT JOIN may be part of a larger query where swapping would require other changes.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Zomato, some legacy reporting queries use RIGHT JOIN when the author started writing from the transactions table and then needed to preserve all restaurant records. Newer code on the same team rewrites these as LEFT JOIN with restaurants first.</p>
    <p>At IRCTC, train schedule reports sometimes use RIGHT JOIN when the base query starts from seat allocations and needs to join against the complete trains table to show trains with no allocations on certain dates.</p>
    <p>At Ola, some driver availability reports use RIGHT JOIN when driver data is the primary reference and trip data is joined from the left side. Teams that maintain these queries are often aware that rewriting them as LEFT JOIN would make them more readable.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>RIGHT JOIN visual:

LEFT TABLE (orders)     RIGHT TABLE (customers)
+----------+            +====================+
| matched  |            | ALL ROWS including |
| rows     |            | unmatched          |
| only     |            +====================+
+----------+

Result:
[orders WHERE match exists] + [ALL of customers]
[NULL columns] WHERE no     + [ALL of customers]
match in orders

Compare with LEFT JOIN (tables swapped):
FROM customers LEFT JOIN orders
[ALL of customers] + [orders WHERE match exists]
= same rows, same data, different writing style</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Test yourself on these before continuing:</p>
    <ul>
      <li>Which table does RIGHT JOIN preserve completely?</li>
      <li>How is RIGHT JOIN different from LEFT JOIN in terms of which rows appear?</li>
      <li>Can every RIGHT JOIN be rewritten as a LEFT JOIN? How?</li>
      <li>What does the column from the left table show when there is no match?</li>
      <li>Why do most teams avoid writing RIGHT JOIN in practice?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>At Zomato, you have a <code>delivery_partners</code> table (partner_id, name, city) and a <code>deliveries</code> table (delivery_id, partner_id, order_id, status). Write a RIGHT JOIN to show all delivery partners along with their deliveries, including partners who have not made any deliveries.</li>
    </ol>
    <ol>
      <li>Rewrite the query from Question 1 as a LEFT JOIN that produces the same result.</li>
    </ol>
    <ol>
      <li>Using the same tables, write a query to find delivery partners who have zero completed deliveries (status = 'Completed').</li>
    </ol>
    <ol>
      <li>In your own words, explain why most SQL developers prefer LEFT JOIN over RIGHT JOIN even when the logic calls for a right-side preserve.</li>
    </ol>
    <ol>
      <li>Write a RIGHT JOIN query at Swiggy to find all restaurants that have received no orders, given a <code>restaurants</code> table and an <code>orders</code> table connected by <code>restaurant_id</code>.</li>
    </ol>
    <ol>
      <li>What is the difference between <code>RIGHT JOIN</code> and <code>RIGHT OUTER JOIN</code>?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>RIGHT JOIN is the less common sibling of LEFT JOIN. Understanding it makes you fluent in all standard join types and prepares you to read and maintain any SQL you encounter in the wild. In your own work, you will likely reach for LEFT JOIN almost always, but knowing why and when RIGHT JOIN exists makes you a more complete SQL writer.</p>
  `,
  'mod7-t5': `
    <h1>FULL OUTER JOIN: Keep Every Row from Both Tables</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Vikram works at a mid-size tech company's finance team. His manager comes to him with an urgent reconciliation task: "We have our internal HR system and a third-party payroll system. Both should have the same employees, but after last month's migration, we are not sure they match up. I need to know which employees are in HR but not in payroll, which are in payroll but not in HR, and which are in both."</p>
    <p>Vikram immediately thinks of LEFT JOIN and RIGHT JOIN. But then he realizes: he needs to find missing records on both sides at the same time. A LEFT JOIN would catch employees missing from payroll. A RIGHT JOIN would catch employees missing from HR. But he needs both in a single report.</p>
    <p>His manager nods: "You want a FULL OUTER JOIN. It keeps everything from both sides."</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>LEFT JOIN and RIGHT JOIN each preserve one side completely. But in data reconciliation tasks, you need to see the complete picture from both sides simultaneously. FULL OUTER JOIN is built for exactly this: it returns every row from both tables, matching what it can, and filling NULLs where there is no match on either side.</p>
    <p>This join type appears less frequently than INNER or LEFT JOIN in day-to-day work, but when you need it, nothing else does the job.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Database systems needed a way to perform a complete comparison between two datasets. Before FULL OUTER JOIN, developers had to run a LEFT JOIN and a RIGHT JOIN separately and combine the results in code. This was error-prone and inefficient.</p>
    <p>FULL OUTER JOIN was built to express this combined operation in a single query: "Give me every row from both tables. Match what matches. Show NULLs where there is no partner on either side."</p>
    <p>It is particularly powerful for data quality checks, synchronization audits, and any situation where two systems are supposed to be mirrors of each other but may have diverged.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine two guest lists at a wedding. One was prepared by the bride's family, the other by the groom's family. Some names appear on both lists. Some appear only on one. A FULL OUTER JOIN of these two lists gives you every name from both lists, showing which list each person is on. People on both lists appear once with data from both sides. People only on one list appear with NULLs for the other side.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>employees (HR system)     departments (org system)
+----+----------+         +------+---------------+
| id | name     |         | dept | dept_name     |
+----+----------+         +------+---------------+
|  1 | Vikram   |         |  A   | Engineering   |
|  2 | Priya    |         |  B   | Marketing     |
|  3 | Karan    |         |  C   | Finance       |
+----+----------+         +------+---------------+

Some employees have no department. Some departments have no employees.

FULL OUTER JOIN result:
Vikram  - Engineering   (match on both sides)
Priya   - Marketing     (match on both sides)
Karan   - NULL          (employee with no department)
NULL    - Finance        (department with no employee)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>In a FULL OUTER JOIN, the database effectively performs a LEFT JOIN and a RIGHT JOIN, then combines the results while removing duplicate rows where both sides matched. The implementation details vary by database engine, but the output is always: every row from the left table appears, every row from the right table appears, matched rows are combined, unmatched rows have NULLs for the missing side.</p>
    <p>An important note: MySQL does not support FULL OUTER JOIN natively. If you are using MySQL (very common in Indian startups), you need to simulate it using a UNION of a LEFT JOIN and a RIGHT JOIN. PostgreSQL, SQL Server, Oracle, and most enterprise databases support FULL OUTER JOIN directly.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Standard syntax (works in PostgreSQL, SQL Server, Oracle):</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
FULL OUTER JOIN table2 ON table1.column = table2.column;</code></pre>
    <p>MySQL workaround (UNION of LEFT JOIN and RIGHT JOIN):</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
LEFT JOIN table2 ON table1.column = table2.column

UNION

SELECT columns
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column;</code></pre>
    <p>For Vikram's reconciliation task:</p>
    <pre><code class="language-sql">SELECT e.employee_id, e.name AS hr_name, p.employee_id AS payroll_id, p.name AS payroll_name
FROM hr_employees e
FULL OUTER JOIN payroll_employees p ON e.employee_id = p.employee_id;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM hr_employees e</code></td><td>Left table, all rows preserved</td><td>All HR employees appear</td></tr>
      <tr><td><code>FULL OUTER JOIN payroll_employees p</code></td><td>Right table, all rows preserved</td><td>All payroll employees appear</td></tr>
      <tr><td><code>ON e.employee_id = p.employee_id</code></td><td>Matching condition</td><td>Rows where employee_id matches are combined</td></tr>
      <tr><td>NULL on left side</td><td>Right-only row (exists in payroll, not in HR)</td><td>HR columns show NULL</td></tr>
      <tr><td>NULL on right side</td><td>Left-only row (exists in HR, not in payroll)</td><td>Payroll columns show NULL</td></tr>
      <tr><td>UNION (MySQL)</td><td>Simulates FULL OUTER JOIN</td><td>Combines LEFT JOIN and RIGHT JOIN results</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>employees table (HR system)</strong></p>
    <table>
      <tr><th>employee_id</th><th>name</th><th>dept_id</th></tr>
      <tr><td>1</td><td>Vikram</td><td>101</td></tr>
      <tr><td>2</td><td>Priya</td><td>102</td></tr>
      <tr><td>3</td><td>Karan</td><td>NULL</td></tr>
      <tr><td>4</td><td>Ananya</td><td>104</td></tr>
    </table>
    <p><strong>departments table</strong></p>
    <table>
      <tr><th>dept_id</th><th>dept_name</th></tr>
      <tr><td>101</td><td>Engineering</td></tr>
      <tr><td>102</td><td>Marketing</td></tr>
      <tr><td>103</td><td>Finance</td></tr>
      <tr><td>105</td><td>Legal</td></tr>
    </table>
    <h3>Example 1: Basic FULL OUTER JOIN</h3>
    <p>Business question: Show all employees and all departments, showing which are connected and which are not.</p>
    <pre><code class="language-sql">SELECT e.name, e.employee_id, d.dept_id, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;</code></pre>
    <p>Output explanation: Vikram and Engineering match (dept 101). Priya and Marketing match (dept 102). Karan has dept_id NULL so he has no match, appearing with NULL for department columns. Ananya has dept_id 104 which does not exist in departments, so she also appears with NULLs on the right side. Finance (103) and Legal (105) exist in departments but have no employees, so they appear with NULLs on the left side.</p>
    <h3>Example 2: Find employees with no department</h3>
    <p>Business question: Which employees are not assigned to any department?</p>
    <pre><code class="language-sql">SELECT e.employee_id, e.name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id
WHERE d.dept_id IS NULL;</code></pre>
    <p>Output explanation: This keeps rows where the right side (departments) is NULL. Karan has no dept_id match, and Ananya's dept_id 104 does not exist in departments. Both appear in the result.</p>
    <h3>Example 3: Find departments with no employees</h3>
    <p>Business question: Which departments are currently empty?</p>
    <pre><code class="language-sql">SELECT d.dept_id, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id
WHERE e.employee_id IS NULL;</code></pre>
    <p>Output explanation: This keeps rows where the left side (employees) is NULL. Finance (103) and Legal (105) have no employees assigned to them. Both appear in the result.</p>
    <h3>Example 4: MySQL workaround for FULL OUTER JOIN</h3>
    <p>Business question: Same as Example 1 but using the MySQL-compatible approach.</p>
    <pre><code class="language-sql">SELECT e.name, e.employee_id, d.dept_id, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id

UNION

SELECT e.name, e.employee_id, d.dept_id, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;</code></pre>
    <p>Output explanation: The LEFT JOIN catches all employees including those without departments. The RIGHT JOIN catches all departments including those without employees. UNION combines both results and removes exact duplicates. The combined result matches what a native FULL OUTER JOIN would return. Note that UNION (not UNION ALL) is important here to avoid duplicate rows for the matched pairs.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>FULL OUTER JOIN can produce a large result set. If each table has 1 million rows and they share only 10% of records, the result could have nearly 2 million rows. Be prepared for large outputs and use WHERE filters when you only need the unmatched portions.</p>
    <p>The MySQL workaround using UNION works correctly, but the column order in both SELECT statements must match exactly. If the first query selects <code>e.name, e.employee_id</code> and the second selects <code>e.employee_id, e.name</code>, UNION will align the columns incorrectly and produce wrong results.</p>
    <p>FULL OUTER JOIN does not mean every combination of rows. That would be a CROSS JOIN. FULL OUTER JOIN still only matches rows based on the ON condition. It just keeps unmatched rows from both sides with NULLs.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Forgetting to use UNION (without ALL) in the MySQL workaround causes duplicate rows for matched records. UNION removes duplicates. UNION ALL keeps them. Always use UNION for the MySQL FULL OUTER JOIN workaround.</p>
    <p>Running a FULL OUTER JOIN on two large tables without any WHERE filter or thinking about the result size first can cause performance problems. Always estimate how many rows will be in the result before running FULL OUTER JOIN on production data.</p>
    <p>Using FULL OUTER JOIN when you actually need INNER JOIN is a common conceptual mistake. If you want only matched rows, use INNER JOIN. FULL OUTER JOIN is specifically for cases where you need to see unmatched rows from both sides.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Use FULL OUTER JOIN primarily for data reconciliation and auditing tasks, not for regular reporting. Most reporting queries need INNER or LEFT JOIN.</p>
    <p>When using the MySQL UNION workaround, add a comment in your query explaining that this is a FULL OUTER JOIN simulation. Code without this context can be confusing for future readers.</p>
    <p>Always identify what the NULL pattern means in your result. A row with NULL on the left side means it came only from the right table. A row with NULL on the right side means it came only from the left table. Document this in your reporting queries.</p>
    <p>Consider adding a calculated column that labels each row's match status:</p>
    <pre><code class="language-sql">SELECT
    e.name AS hr_name,
    p.name AS payroll_name,
    CASE
        WHEN e.employee_id IS NULL THEN 'Payroll only'
        WHEN p.employee_id IS NULL THEN 'HR only'
        ELSE 'Both systems'
    END AS status
FROM hr_employees e
FULL OUTER JOIN payroll_employees p ON e.employee_id = p.employee_id;</code></pre>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, reconciliation jobs run nightly to compare the orders table in the application database against the orders table in the analytics warehouse. FULL OUTER JOIN identifies any orders that exist in one system but not the other, flagging data pipeline issues.</p>
    <p>At PhonePe, monthly financial audits use FULL OUTER JOIN to compare transaction records between their internal ledger and the bank's settlement file. Any transaction present in one and not the other requires investigation.</p>
    <p>At IRCTC, seat availability data is synced between multiple regional systems. FULL OUTER JOIN queries compare the seat inventories across systems to find discrepancies introduced during synchronization.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>FULL OUTER JOIN visual:

LEFT TABLE              RIGHT TABLE
+====================+  +====================+
| ALL ROWS including |  | ALL ROWS including |
| unmatched          |  | unmatched          |
+====================+  +====================+

Result:

[Left only] + [Matched rows combined] + [Right only]
  NULLs on       both sides have          NULLs on
  right side         values               left side

Compare with:
INNER JOIN  = only the middle [Matched] section
LEFT JOIN   = [Left only] + [Matched]
RIGHT JOIN  = [Matched] + [Right only]
FULL OUTER  = [Left only] + [Matched] + [Right only]</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Check your understanding before continuing:</p>
    <ul>
      <li>What does FULL OUTER JOIN return that LEFT JOIN does not?</li>
      <li>When does a row in the result have NULLs on the left side vs. the right side?</li>
      <li>How do you simulate FULL OUTER JOIN in MySQL?</li>
      <li>Why must you use UNION (not UNION ALL) in the MySQL workaround?</li>
      <li>Name two real-world scenarios where FULL OUTER JOIN is the right choice.</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>At Flipkart, you have a <code>sellers</code> table (seller_id, name) and a <code>products</code> table (product_id, seller_id, product_name). Write a FULL OUTER JOIN to find sellers with no products and products with no seller.</li>
    </ol>
    <ol>
      <li>Write the MySQL-compatible version of the query from Question 1.</li>
    </ol>
    <ol>
      <li>Using the employees and departments tables from this article, write a query that shows a "status" column with values 'Employee only', 'Department only', or 'Matched' using a CASE expression.</li>
    </ol>
    <ol>
      <li>If the left table has 500 rows and the right table has 600 rows, and 400 rows match on both sides, how many rows will the FULL OUTER JOIN result have?</li>
    </ol>
    <ol>
      <li>At Paytm, two transaction logs from different systems need to be reconciled. Each has (transaction_id, user_id, amount). Write a FULL OUTER JOIN to find transactions that appear in one log but not the other.</li>
    </ol>
    <ol>
      <li>Explain the difference between FULL OUTER JOIN and CROSS JOIN in one sentence each.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>FULL OUTER JOIN is a specialized but powerful tool. You will not write it every day, but when you need to reconcile two datasets or find discrepancies between two systems, it is exactly the right instrument. The MySQL UNION workaround is worth memorizing since MySQL is widely used across the Indian startup ecosystem, and you will encounter this pattern often in real codebases.</p>
  `,
  'mod7-t6': `
    <h1>CROSS JOIN: Every Row Combined with Every Other Row</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Simran joined Swiggy's menu engineering team last month. Her manager gives her an interesting task: "We are expanding to three new cities and we offer five cuisines. I need a list of every possible city-cuisine combination so the business team can decide which combinations to launch first. Every city should be paired with every cuisine."</p>
    <p>Simran opens her SQL editor and thinks about it. This is not a case where she is trying to match IDs or find related rows. She literally wants every city paired with every cuisine, regardless of any relationship between them. There are 3 cities and 5 cuisines, so she expects 15 rows in the output.</p>
    <p>Her manager nods: "That is a CROSS JOIN. No ON clause needed."</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Most business questions involve finding related data: customers and their orders, employees and their departments. But sometimes you genuinely need to generate all possible combinations of two sets of values. This comes up when planning a product launch across markets, generating a full test matrix, building a scheduling grid, or creating a pricing configuration for all product variants.</p>
    <p>For these cases, you do not want to filter or match. You want the Cartesian product: every row from table A combined with every row from table B.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>In mathematics, the Cartesian product of two sets is the set of all ordered pairs from both sets. SQL's CROSS JOIN is the direct implementation of this operation. It was built for situations where the combination itself is the meaningful output, not the match.</p>
    <p>Before CROSS JOIN syntax existed, the same result was produced by listing two tables in the FROM clause without a JOIN keyword: <code>FROM table1, table2</code>. This old-style syntax is still valid SQL but is discouraged because it looks identical to a query that is missing its WHERE clause.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a snack company that makes 4 flavors and sells them in 3 sizes. The operations team needs a master list of every product variant: small-spicy, small-tangy, small-salted, small-sweet, medium-spicy, and so on, for all 12 combinations. No matching needed. Just every flavor with every size.</p>
    <p>That is a CROSS JOIN: take one list, take another list, combine everything.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>cities table (3 rows)      cuisines table (5 rows)
+----+-----------+         +----+----------+
| id | city_name |         | id | cuisine  |
+----+-----------+         +----+----------+
|  1 | Mumbai    |         |  1 | Biryani  |
|  2 | Delhi     |         |  2 | Pizza    |
|  3 | Bengaluru |         |  3 | Dosa     |
+----+-----------+         +----+----------+

CROSS JOIN result: 3 x 3 = 9 rows (showing subset)
Mumbai   - Biryani
Mumbai   - Pizza
Mumbai   - Dosa
Delhi    - Biryani
Delhi    - Pizza
Delhi    - Dosa
Bengaluru - Biryani
Bengaluru - Pizza
Bengaluru - Dosa</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>A CROSS JOIN does not use an ON clause. It takes every single row from the first table and pairs it with every single row from the second table. If table A has M rows and table B has N rows, the result has M x N rows, always.</p>
    <p>There is no filtering, no matching condition, no NULLs. Every combination is a valid output row.</p>
    <p>The database typically implements this by nesting loops: for each row in table A, iterate through all rows in table B and output one combined row. On small tables this is fast. On large tables this produces a massive result very quickly.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Standard CROSS JOIN syntax:</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
CROSS JOIN table2;</code></pre>
    <p>Old-style syntax that produces the same result (not recommended):</p>
    <pre><code class="language-sql">SELECT columns
FROM table1, table2;</code></pre>
    <p>For Simran's Swiggy task:</p>
    <pre><code class="language-sql">SELECT c.city_name, cu.cuisine_name
FROM cities c
CROSS JOIN cuisines cu
ORDER BY c.city_name, cu.cuisine_name;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM cities c</code></td><td>First table, all rows participate</td><td>3 cities</td></tr>
      <tr><td><code>CROSS JOIN cuisines cu</code></td><td>Second table, all rows participate</td><td>5 cuisines</td></tr>
      <tr><td>No ON clause</td><td>No matching condition needed</td><td>Every combination is valid</td></tr>
      <tr><td>M x N result rows</td><td>Total rows in output</td><td>3 cities x 5 cuisines = 15 rows</td></tr>
      <tr><td><code>ORDER BY</code></td><td>Organizes the combination list</td><td>Groups by city for readability</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>cities table (Swiggy expansion)</strong></p>
    <table>
      <tr><th>city_id</th><th>city_name</th></tr>
      <tr><td>1</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Bengaluru</td></tr>
    </table>
    <p><strong>cuisines table (Swiggy)</strong></p>
    <table>
      <tr><th>cuisine_id</th><th>cuisine_name</th></tr>
      <tr><td>1</td><td>Biryani</td></tr>
      <tr><td>2</td><td>Pizza</td></tr>
      <tr><td>3</td><td>Dosa</td></tr>
      <tr><td>4</td><td>Chinese</td></tr>
    </table>
    <h3>Example 1: Basic CROSS JOIN for launch planning</h3>
    <p>Business question: Generate all city-cuisine combinations for the expansion plan.</p>
    <pre><code class="language-sql">SELECT c.city_name, cu.cuisine_name
FROM cities c
CROSS JOIN cuisines cu
ORDER BY c.city_name, cu.cuisine_name;</code></pre>
    <p>Output explanation: 3 cities x 4 cuisines = 12 rows. Mumbai appears 4 times (once for each cuisine), Delhi appears 4 times, Bengaluru appears 4 times. Every city is paired with every cuisine. The ORDER BY groups the output by city for readability.</p>
    <h3>Example 2: CROSS JOIN to build a scheduling grid</h3>
    <p>Business question: Generate all possible delivery slot and partner combinations for testing.</p>
    <pre><code class="language-sql">SELECT s.slot_name, p.partner_name
FROM delivery_slots s
CROSS JOIN delivery_partners p;</code></pre>
    <p>Output explanation: If there are 6 delivery slots (morning, afternoon, evening, etc.) and 10 delivery partners, the result has 60 rows. This grid is useful for load testing or scheduling optimization.</p>
    <h3>Example 3: CROSS JOIN with a filter (controlled combination)</h3>
    <p>Business question: From all city-cuisine combinations, show only the ones where the city is in the South and the cuisine is a South Indian one.</p>
    <pre><code class="language-sql">SELECT c.city_name, cu.cuisine_name
FROM cities c
CROSS JOIN cuisines cu
WHERE c.region = 'South' AND cu.type = 'South Indian';</code></pre>
    <p>Output explanation: The CROSS JOIN first generates all combinations. The WHERE clause then filters to keep only the relevant subset. This is a legitimate use of CROSS JOIN with a filter.</p>
    <h3>Example 4: CROSS JOIN for product variant generation</h3>
    <p>Business question: Generate all size-color variants for a new Myntra product launch.</p>
    <pre><code class="language-sql">SELECT s.size_label, co.color_name
FROM sizes s
CROSS JOIN colors co
ORDER BY s.size_label, co.color_name;</code></pre>
    <p>Output explanation: If the <code>sizes</code> table has S, M, L, XL (4 rows) and <code>colors</code> has 6 colors, the result has 24 rows. Each row represents one product variant that the inventory team needs to stock. This is a clean, intentional use of CROSS JOIN to generate a configuration matrix.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The most dangerous aspect of CROSS JOIN is accidental usage. If you forget the ON clause in a regular JOIN, some databases silently perform a CROSS JOIN. A query joining a table with 10,000 rows and a table with 5,000 rows produces 50 million rows instead of the expected handful. This can take minutes to run and consume enormous memory.</p>
    <pre><code class="language-sql">-- Intended: INNER JOIN with a matching condition
SELECT c.name, o.order_id
FROM customers c
JOIN orders o;  -- Missing ON clause!
-- This becomes a CROSS JOIN: every customer paired with every order</code></pre>
    <p>Some databases throw an error for a JOIN without ON. Others silently execute the Cartesian product. Always include the ON clause in regular JOINs.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Using CROSS JOIN when you meant INNER JOIN, or accidentally creating a CROSS JOIN by forgetting the ON clause, is the most costly mistake. On tables with millions of rows, this can lock up a database for minutes or longer. Always review your JOIN clauses before running queries on large tables.</p>
    <p>Not anticipating the row count is another common issue. Before writing <code>FROM table1 CROSS JOIN table2</code>, ask yourself: how many rows are in each table? Multiply them. Is that a reasonable number of rows to return?</p>
    <p>Using CROSS JOIN to simulate a relationship that should be expressed with a proper JOIN and ON clause makes queries harder to understand and maintain. CROSS JOIN is for genuine Cartesian product scenarios, not for joining related data.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Always comment your CROSS JOIN to explain that the Cartesian product is intentional:</p>
    <pre><code class="language-sql">-- CROSS JOIN intentional: generating all city-cuisine combinations for launch planning
SELECT c.city_name, cu.cuisine_name
FROM cities c
CROSS JOIN cuisines cu;</code></pre>
    <p>Before running any CROSS JOIN, calculate the expected row count. If the result would be more than a few thousand rows, make sure that is what you actually need and that your database can handle it.</p>
    <p>Use LIMIT when testing CROSS JOIN queries to preview the output before running the full query:</p>
    <pre><code class="language-sql">SELECT c.city_name, cu.cuisine_name
FROM cities c
CROSS JOIN cuisines cu
LIMIT 20;</code></pre>
    <p>Prefer the explicit <code>CROSS JOIN</code> syntax over the old <code>FROM table1, table2</code> syntax. The explicit form makes your intent clear to anyone reading the code.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, the menu analytics team uses CROSS JOIN to generate a "coverage matrix" showing which cuisine types are available in which cities. Empty cells in the matrix represent expansion opportunities.</p>
    <p>At Myntra, the catalog team uses CROSS JOIN to generate all size-color-fabric variants for new product lines before populating them with actual inventory. The generated combinations form the product template.</p>
    <p>At Byju's, the content team uses CROSS JOIN to map all possible subject-grade-language combinations for their content database. This helps identify which combinations are covered and which still need content to be created.</p>
    <p>At Flipkart, pricing operations use CROSS JOIN to generate all product-region-customer-segment pricing configurations during campaign planning. These generated combinations are then populated with specific prices.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>CROSS JOIN visual:

Table A (3 rows)     Table B (4 rows)
+-----+              +-----+
|  A1 |              |  B1 |
|  A2 |              |  B2 |
|  A3 |              |  B3 |
+-----+              |  B4 |
                     +-----+

CROSS JOIN result: 3 x 4 = 12 rows

A1-B1  A1-B2  A1-B3  A1-B4
A2-B1  A2-B2  A2-B3  A2-B4
A3-B1  A3-B2  A3-B3  A3-B4

No filtering. No matching. Every combination appears exactly once.

Warning zone:
Table A: 10,000 rows
Table B: 50,000 rows
CROSS JOIN result: 500,000,000 rows (500 million)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these confidently:</p>
    <ul>
      <li>What result does a CROSS JOIN produce?</li>
      <li>How do you calculate the number of rows in a CROSS JOIN result?</li>
      <li>What syntax mistake accidentally creates a CROSS JOIN?</li>
      <li>Name two real business scenarios where CROSS JOIN is genuinely the right choice.</li>
      <li>Why should you always include a comment when writing CROSS JOIN?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>A Swiggy marketing team has a <code>regions</code> table (4 rows) and a <code>promo_types</code> table (6 rows). How many rows will a CROSS JOIN produce? Write the query.</li>
    </ol>
    <ol>
      <li>At Myntra, you have a <code>sizes</code> table (XS, S, M, L, XL, XXL) and a <code>colors</code> table (10 colors). Write a CROSS JOIN to generate all possible product variants.</li>
    </ol>
    <ol>
      <li>The following query is missing its ON clause. What will happen when it runs? Rewrite it correctly as an INNER JOIN.</li>
    </ol>
    <pre><code class="language-sql">   SELECT c.name, o.order_id
   FROM customers c
   JOIN orders o;</code></pre>
    <ol>
      <li>When is CROSS JOIN the right choice instead of INNER JOIN? Give two examples.</li>
    </ol>
    <ol>
      <li>A table has 1000 rows and another has 2000 rows. How many rows does a CROSS JOIN produce? How long might this take to run compared to an INNER JOIN with proper indexes?</li>
    </ol>
    <ol>
      <li>Write a query at Swiggy to generate all combinations of delivery time slots (morning, afternoon, evening, night) and restaurant categories (fast food, casual dining, cloud kitchen, fine dining) for a coverage analysis.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>CROSS JOIN is a simple concept with a very specific use case. When you genuinely need every combination of two lists, it is the right and efficient tool. When you see it in code you did not write, verify that the Cartesian product was intentional and that the result size is manageable. Most of the time in your career, CROSS JOIN will either be something you reach for deliberately for combination generation, or something you watch out for as an accidental mistake in JOIN syntax.</p>
  `,
  'mod7-t7': `
    <h1>Self Join: Joining a Table to Itself</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Karan is a data analyst at Infosys. His manager asks him to pull an org chart report: "I need a list of every employee along with their manager's name. We want to send it to the project leads so they know who reports to whom."</p>
    <p>Karan opens the database and finds a single <code>employees</code> table. It has an <code>employee_id</code>, a <code>name</code>, a <code>role</code>, and a <code>manager_id</code> column. The <code>manager_id</code> column stores the <code>employee_id</code> of the person's manager.</p>
    <p>He stares at the table and thinks: the employee names are in this table. The manager names are also in this table. Both pieces of data live in the same table. He needs to connect a row in the table to another row in the same table.</p>
    <p>His senior walks by and says, "You need a self join. Join the table to itself using two different aliases."</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Some tables store hierarchical or comparative data where rows in the table reference other rows in the same table. The most common example is an employee hierarchy where each employee's manager is also an employee in the same table. Other examples include product categories that have parent categories, geographic regions that have parent regions, and comments that have reply-to relationships pointing to other comments in the same table.</p>
    <p>A regular join connects two different tables. A self join connects a table to itself. It is the same JOIN operation, but both sides of the join reference the same table. The trick is using two different aliases to tell the database you are treating the same table as two separate instances.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Hierarchical data is extremely common in real databases. Rather than storing manager information in a separate table, most database designs put the reference back into the same table using a foreign key that points to the table's own primary key. This design is clean, efficient, and avoids data duplication.</p>
    <p>SQL supports self joins because querying this type of data requires reading the same table in two roles simultaneously: once as the "child" row and once as the "parent" row. Aliases make this possible by giving the same table two distinct names within a single query.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a company phone directory where each page lists an employee's name and their manager's name. But the phone directory only lists names, not the manager's full details. To get the manager's phone number and designation, you need to look up the manager's name in the same directory.</p>
    <p>That is a self join: you look up information about one person (the employee), then use a reference in their record to look up another person (their manager) in the same directory.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>employees table at Infosys
+----+----------+----------+------------+
| id | name     | role     | manager_id |
+----+----------+----------+------------+
|  1 | Ananya   | Director | NULL       |
|  2 | Karan    | Manager  | 1          |
|  3 | Priya    | Analyst  | 2          |
|  4 | Vikram   | Analyst  | 2          |
|  5 | Rahul    | Manager  | 1          |
+----+----------+----------+------------+

Self join: treat the same table as "employees" and "managers"

e (employee)    m (manager)
Karan (2)  ---- Ananya (1)   [Karan's manager_id = 1 = Ananya's id]
Priya (3)  ---- Karan (2)    [Priya's manager_id = 2 = Karan's id]
Vikram (4) ---- Karan (2)    [Vikram's manager_id = 2 = Karan's id]
Rahul (5)  ---- Ananya (1)   [Rahul's manager_id = 1 = Ananya's id]</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>In a self join, you write the same table name twice in the FROM clause but give each instance a different alias. One alias represents rows in their "employee" role and the other represents rows in their "manager" role.</p>
    <p>The ON clause then connects them: <code>ON employee.manager_id = manager.employee_id</code>. This means: find the row in the manager alias whose <code>employee_id</code> equals the <code>manager_id</code> stored in the employee row.</p>
    <p>The database processes this exactly like a regular two-table join. The alias trick is simply a way to tell the database that the same table is being used in two different roles simultaneously.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic self join syntax:</p>
    <pre><code class="language-sql">SELECT e.name AS employee_name, m.name AS manager_name
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;</code></pre>
    <p>Using LEFT JOIN to include employees with no manager (like the CEO or Director):</p>
    <pre><code class="language-sql">SELECT e.name AS employee_name, m.name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;</code></pre>
    <p>With role information:</p>
    <pre><code class="language-sql">SELECT e.name AS employee_name, e.role, m.name AS manager_name, m.role AS manager_role
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
ORDER BY m.name, e.name;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM employees e</code></td><td>The table in its "employee" role</td><td>Each row represents an employee</td></tr>
      <tr><td><code>JOIN employees m</code></td><td>The same table in its "manager" role</td><td>Each row represents a manager</td></tr>
      <tr><td><code>ON e.manager_id = m.employee_id</code></td><td>Connects employee to their manager</td><td>Links the stored reference to the manager's actual row</td></tr>
      <tr><td><code>e.name AS employee_name</code></td><td>Column from the employee alias</td><td>The subordinate's name</td></tr>
      <tr><td><code>m.name AS manager_name</code></td><td>Column from the manager alias</td><td>The manager's name from the same table</td></tr>
      <tr><td><code>LEFT JOIN</code></td><td>Keeps employees with no manager</td><td>The top-level employee (NULL manager_id) still appears</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>employees table (TCS project team)</strong></p>
    <table>
      <tr><th>employee_id</th><th>name</th><th>role</th><th>manager_id</th></tr>
      <tr><td>1</td><td>Ananya</td><td>CTO</td><td>NULL</td></tr>
      <tr><td>2</td><td>Karan</td><td>VP Eng</td><td>1</td></tr>
      <tr><td>3</td><td>Priya</td><td>Sr Engineer</td><td>2</td></tr>
      <tr><td>4</td><td>Vikram</td><td>Engineer</td><td>3</td></tr>
      <tr><td>5</td><td>Rahul</td><td>VP Product</td><td>1</td></tr>
      <tr><td>6</td><td>Simran</td><td>PM</td><td>5</td></tr>
    </table>
    <h3>Example 1: List every employee with their manager's name</h3>
    <p>Business question: Show each employee and who they directly report to.</p>
    <pre><code class="language-sql">SELECT e.name AS employee, e.role, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
ORDER BY m.name NULLS LAST, e.name;</code></pre>
    <p>Output explanation: Ananya (CTO) appears with NULL as manager because her manager_id is NULL. Karan and Rahul both show Ananya as their manager. Priya shows Karan as her manager. Vikram shows Priya as his manager. Simran shows Rahul as her manager. LEFT JOIN is used so the top-level employee (Ananya) is not excluded just because she has no manager.</p>
    <h3>Example 2: Find employees who are also managers (have direct reports)</h3>
    <p>Business question: Which employees have at least one person reporting to them?</p>
    <pre><code class="language-sql">SELECT DISTINCT m.name AS manager_name, m.role
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;</code></pre>
    <p>Output explanation: The INNER JOIN only keeps rows where a match exists (i.e., someone's manager_id points to this person). DISTINCT removes duplicate entries for managers with multiple reports. Ananya, Karan, Priya, and Rahul appear because at least one employee has their ID as a manager_id. Vikram and Simran have no one reporting to them so they do not appear.</p>
    <h3>Example 3: Find all employees who report directly to Ananya</h3>
    <p>Business question: Who are Ananya's direct reports?</p>
    <pre><code class="language-sql">SELECT e.name, e.role
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
WHERE m.name = 'Ananya';</code></pre>
    <p>Output explanation: The join pairs each employee with their manager. The WHERE clause filters to only keep pairs where the manager's name is Ananya. Karan (VP Eng) and Rahul (VP Product) are Ananya's direct reports. This returns 2 rows.</p>
    <h3>Example 4: Show the full chain with three levels</h3>
    <p>Business question: Show employee, their manager, and their manager's manager (two levels of hierarchy).</p>
    <pre><code class="language-sql">SELECT
    e.name AS employee,
    m.name AS manager,
    gm.name AS grand_manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
LEFT JOIN employees gm ON m.manager_id = gm.employee_id;</code></pre>
    <p>Output explanation: A third alias <code>gm</code> (grand manager) is added for a second level of self join. Vikram shows Priya as manager and Karan as grand manager. Priya shows Karan as manager and Ananya as grand manager. Karan shows Ananya as manager and NULL as grand manager. Ananya shows NULL for both. This shows how self joins can be chained for deeper hierarchies.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>The alias requirement is non-negotiable. If you write <code>FROM employees JOIN employees ON ...</code> without aliases, most databases will throw an error because they cannot distinguish between the two references to the same table. Always use two different aliases.</p>
    <p>Choosing INNER JOIN vs LEFT JOIN matters here. An INNER JOIN on a self join for hierarchy data excludes the top-level row (the person with NULL in manager_id) because NULL does not match any employee_id. Use LEFT JOIN if you want the top-level person to appear in the result.</p>
    <p>Reading a self join requires a mental shift. When you see <code>e.name</code> and <code>m.name</code> in the SELECT, both come from the same physical table. The alias determines which "role" that row is playing in the result.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Using the same alias for both sides of the self join causes a syntax error or makes the ON clause impossible to write meaningfully. Always use clearly named aliases that reflect the role of each instance: <code>e</code> for employee and <code>m</code> for manager, or <code>emp</code> and <code>mgr</code> for clarity.</p>
    <p>Forgetting that a self join on a hierarchy can produce duplicates if the table has data quality issues (like circular references: employee A is manager of B, and B is manager of A). Always validate hierarchy data before running complex multi-level self joins.</p>
    <p>Not using DISTINCT when looking for managers causes each manager to appear once per direct report. If Karan manages three people, he appears three times without DISTINCT.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Always give your aliases meaningful names that reflect what role each instance of the table is playing. In an employee-manager self join, use <code>e</code> and <code>m</code> or <code>emp</code> and <code>mgr</code>, not just <code>a</code> and <code>b</code>.</p>
    <p>Add a comment above the self join explaining what the two aliases represent:</p>
    <pre><code class="language-sql">-- e = employee being listed, m = that employee's manager (same table)
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;</code></pre>
    <p>Use LEFT JOIN for hierarchical self joins unless you specifically want to exclude the top-level record. Including the root node (the person with no manager) almost always makes the report more complete.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Infosys and TCS, org chart reports that show team structures are built on self joins. Every time HR needs to export "all employees and their reporting managers," a self join on the employees table produces that report.</p>
    <p>At Flipkart, the product category hierarchy (Electronics > Mobiles > Smartphones) is stored in a single <code>categories</code> table where each category has a <code>parent_category_id</code>. Self joins traverse this hierarchy for breadcrumb navigation and reporting.</p>
    <p>At Amazon India, the geographic hierarchy (India > South > Karnataka > Bengaluru > Koramangala) uses a similar self-referencing table structure with self joins for location-based analysis.</p>
    <p>At BookMyShow, venue sections (stadium > stand > row > seat) are modeled with self-referencing tables traversed by self joins for seat map generation.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Self Join on employees table:

The same table acts in two roles:

employees (as "e")          employees (as "m")
+----+----------+------+    +----+----------+
| id | name     | mgr  |    | id | name     |
+----+----------+------+    +----+----------+
|  2 | Karan    |  1   |---&gt;|  1 | Ananya   |
|  3 | Priya    |  2   |---&gt;|  2 | Karan    |
|  4 | Vikram   |  3   |---&gt;|  3 | Priya    |
+----+----------+------+    +----+----------+
          ^
          Same physical table
          Two aliases = two logical roles

ON condition: e.manager_id = m.employee_id
(connects an employee row to the row of their manager)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Verify you can answer these before moving on:</p>
    <ul>
      <li>Why do you need two aliases in a self join?</li>
      <li>What does the ON clause look like in an employee-manager self join?</li>
      <li>Why should you use LEFT JOIN instead of INNER JOIN for hierarchy self joins?</li>
      <li>What other types of data besides employee hierarchies use self joins?</li>
      <li>How do you find employees who have no direct reports using a self join?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Using the employees table from this article, write a self join to find all employees who have no manager (the top-level people).</li>
    </ol>
    <ol>
      <li>At an organization, a <code>departments</code> table has (dept_id, dept_name, parent_dept_id). Write a self join to show each department along with its parent department name.</li>
    </ol>
    <ol>
      <li>Write a self join to find all employees at TCS who are managed by a VP-level manager (someone whose role contains 'VP').</li>
    </ol>
    <ol>
      <li>At Flipkart, a <code>categories</code> table has (category_id, category_name, parent_category_id). Write a self join to show each category alongside its parent category name.</li>
    </ol>
    <ol>
      <li>What happens if you use INNER JOIN instead of LEFT JOIN in the employee-manager self join from Example 1? Which rows disappear and why?</li>
    </ol>
    <ol>
      <li>Write a query to count how many direct reports each manager has, using the employees table from this article. Show managers with zero direct reports as well.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Self joins unlock hierarchical data in a way no other join type can. Once you recognize the pattern, where a table's foreign key points back to the same table's primary key, you know a self join is the tool for that data. It takes a bit of practice to get comfortable reading a query where the same table appears twice under different names, but once it clicks, it becomes a natural part of your SQL toolkit.</p>
  `,
  'mod7-t8': `
    <h1>Multiple Joins: Combining Three or More Tables in One Query</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Ananya has been at Swiggy's operations team for a month. Her manager drops a task on her desk: "I need a report showing all orders placed today, with the customer's name, the restaurant's name, and which delivery partner handled the order. Finance needs this for the daily settlement report."</p>
    <p>Ananya looks at the database schema. The <code>orders</code> table has order IDs and foreign keys pointing to other tables, but not the actual names. Customer names live in <code>customers</code>. Restaurant names live in <code>restaurants</code>. Delivery partner names live in <code>delivery_partners</code>.</p>
    <p>To produce this report, she needs to connect four tables in a single query. She has done single joins before. Now she needs to chain them together.</p>
    <p>Her manager says, "Just keep adding JOINs. Each one brings in one more table."</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Real-world reporting queries almost never involve just two tables. A typical order report at any e-commerce or food delivery company pulls from four to eight tables at once: orders, customers, products, sellers, categories, addresses, payment methods, and more. These tables are all connected through the <code>orders</code> table via foreign keys.</p>
    <p>The technique for handling this is straightforward: chain your JOINs. Add one JOIN clause for each additional table you need. Each JOIN brings one more table into the query.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Database normalization splits data across many tables to avoid redundancy. The trade-off is that answering business questions requires reassembling data from multiple sources. SQL was designed to make this reassembly declarative and readable, letting the database engine handle the physical work of combining data from multiple tables efficiently.</p>
    <p>Multiple JOINs in a single query are more efficient than running separate queries and combining results in application code, because the database can optimize the execution plan across all tables simultaneously.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine a school's report card printing system. The student's name is in the students register. The subject names are in the subjects register. The scores are in the marks register. The class teacher's name is in the teachers register. To print a complete report card, the school office connects all four registers using the student ID and subject ID. That multi-register connection is exactly what multiple JOINs do in SQL.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>orders (central table)
+----------+-------------+---------------+--------------------+
| order_id | customer_id | restaurant_id | delivery_partner_id|
+----------+-------------+---------------+--------------------+
    |             |              |                  |
    v             v              v                  v
 orders      customers      restaurants      delivery_partners
 table        table           table              table</code></pre>
    <p>The <code>orders</code> table acts as the hub. Each foreign key column points to a different lookup table. Multiple JOINs radiate outward from the central table.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When you chain multiple JOINs, each JOIN builds on the result of the previous one. The database processes them in sequence:</p>
    <ol>
      <li>Start with the FROM table.</li>
      <li>Apply the first JOIN to produce an intermediate result.</li>
      <li>Apply the second JOIN to the intermediate result.</li>
      <li>Continue until all JOINs are processed.</li>
      <li>Apply WHERE, GROUP BY, ORDER BY at the end.</li>
    </ol>
    <p>The order of JOINs in the query determines readability but the database optimizer may reorder them internally for performance. What matters to you as the writer is that each ON clause correctly specifies the connection between the newly joined table and a table that already exists in the query.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic syntax for three tables:</p>
    <pre><code class="language-sql">SELECT columns
FROM table1
JOIN table2 ON table1.key = table2.key
JOIN table3 ON table2.key = table3.key;</code></pre>
    <p>For Ananya's four-table Swiggy report:</p>
    <pre><code class="language-sql">SELECT
    o.order_id,
    o.order_date,
    o.amount,
    c.name AS customer_name,
    r.restaurant_name,
    dp.partner_name AS delivery_partner
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurants r ON o.restaurant_id = r.restaurant_id
JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id
WHERE DATE(o.order_date) = CURDATE()
ORDER BY o.order_id;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM orders o</code></td><td>The central hub table</td><td>All orders are the starting point</td></tr>
      <tr><td><code>JOIN customers c ON o.customer_id = c.customer_id</code></td><td>First join: brings in customer names</td><td>Links order's customer_id to customers table</td></tr>
      <tr><td><code>JOIN restaurants r ON o.restaurant_id = r.restaurant_id</code></td><td>Second join: brings in restaurant names</td><td>Links order's restaurant_id to restaurants table</td></tr>
      <tr><td><code>JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id</code></td><td>Third join: brings in delivery partner names</td><td>Links order's partner_id to delivery_partners table</td></tr>
      <tr><td><code>WHERE DATE(o.order_date) = CURDATE()</code></td><td>Filters to today's orders</td><td>Applied after all joins are resolved</td></tr>
      <tr><td><code>c.name, r.restaurant_name, dp.partner_name</code></td><td>Columns from joined tables</td><td>Each alias prefix shows which table the column comes from</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>orders table</strong></p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>restaurant_id</th><th>delivery_partner_id</th><th>amount</th><th>order_date</th></tr>
      <tr><td>501</td><td>1</td><td>10</td><td>100</td><td>450</td><td>2024-05-20</td></tr>
      <tr><td>502</td><td>2</td><td>11</td><td>101</td><td>320</td><td>2024-05-20</td></tr>
      <tr><td>503</td><td>1</td><td>10</td><td>102</td><td>190</td><td>2024-05-20</td></tr>
    </table>
    <p><strong>customers table</strong></p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Ananya</td><td>Bengaluru</td></tr>
      <tr><td>2</td><td>Karan</td><td>Mumbai</td></tr>
    </table>
    <p><strong>restaurants table</strong></p>
    <table>
      <tr><th>restaurant_id</th><th>restaurant_name</th></tr>
      <tr><td>10</td><td>Meghana Foods</td></tr>
      <tr><td>11</td><td>Bombay Canteen</td></tr>
    </table>
    <p><strong>delivery_partners table</strong></p>
    <table>
      <tr><th>partner_id</th><th>partner_name</th></tr>
      <tr><td>100</td><td>Ravi Kumar</td></tr>
      <tr><td>101</td><td>Suresh D</td></tr>
      <tr><td>102</td><td>Amol Patil</td></tr>
    </table>
    <h3>Example 1: Basic four-table join</h3>
    <p>Business question: Show all orders with customer name, restaurant name, and delivery partner.</p>
    <pre><code class="language-sql">SELECT
    o.order_id,
    c.name AS customer,
    r.restaurant_name,
    dp.partner_name,
    o.amount
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurants r ON o.restaurant_id = r.restaurant_id
JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id;</code></pre>
    <p>Output explanation: All three orders appear. Order 501 shows Ananya, Meghana Foods, and Ravi Kumar. Order 502 shows Karan, Bombay Canteen, and Suresh D. Order 503 shows Ananya again with Meghana Foods and Amol Patil. All four tables are represented in each row.</p>
    <h3>Example 2: Multi-join with WHERE and ORDER BY</h3>
    <p>Business question: Show orders from Bengaluru customers today, sorted by amount.</p>
    <pre><code class="language-sql">SELECT
    o.order_id,
    c.name AS customer,
    c.city,
    r.restaurant_name,
    o.amount
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurants r ON o.restaurant_id = r.restaurant_id
JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id
WHERE c.city = 'Bengaluru'
ORDER BY o.amount DESC;</code></pre>
    <p>Output explanation: The WHERE clause filters on the <code>customers</code> table, which is already in scope because of the JOIN. Orders 501 and 503 belong to Ananya from Bengaluru. Order 502 belongs to Karan from Mumbai and is excluded. Result shows 2 rows sorted by amount descending.</p>
    <h3>Example 3: Multi-join with GROUP BY and aggregation</h3>
    <p>Business question: How much revenue has each restaurant earned today?</p>
    <pre><code class="language-sql">SELECT
    r.restaurant_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.amount) AS total_revenue
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurants r ON o.restaurant_id = r.restaurant_id
GROUP BY r.restaurant_id, r.restaurant_name
ORDER BY total_revenue DESC;</code></pre>
    <p>Output explanation: After all joins, GROUP BY collapses orders by restaurant. Meghana Foods has 2 orders (501 and 503) totalling 640 rupees. Bombay Canteen has 1 order (502) totalling 320 rupees.</p>
    <h3>Example 4: Mixing JOIN types in a multi-join query</h3>
    <p>Business question: Show all restaurants along with their orders today, including restaurants that received no orders.</p>
    <pre><code class="language-sql">SELECT
    r.restaurant_name,
    o.order_id,
    c.name AS customer
FROM restaurants r
LEFT JOIN orders o ON r.restaurant_id = o.restaurant_id
LEFT JOIN customers c ON o.customer_id = c.customer_id;</code></pre>
    <p>Output explanation: The first LEFT JOIN keeps all restaurants, including those with no orders. The second LEFT JOIN keeps all order rows including the NULL ones. If a restaurant has no orders, order_id and customer name are both NULL. You can mix INNER JOIN and LEFT JOIN in the same query depending on which tables need to preserve all rows.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>Each ON clause in a multi-join query must reference at least one table that is already in the query (from the FROM clause or a previous JOIN). You cannot reference a table in an ON clause before it has been introduced.</p>
    <p>When multiple tables have columns with the same name, always prefix with the alias. In a four-table join, <code>name</code> could mean customer name, restaurant name, or partner name. Writing <code>c.name</code>, <code>r.restaurant_name</code>, and <code>dp.partner_name</code> removes all ambiguity.</p>
    <p>Joining on the wrong column in a multi-table query is easy when several tables have similarly named columns. Always double-check your ON clauses. A join on <code>o.customer_id = dp.partner_id</code> would run without error but produce nonsensical results.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Adding a JOIN without verifying that the join column exists in both tables causes a column-not-found error. Always check the schema before writing a multi-join query.</p>
    <p>Introducing a JOIN that is not actually needed in the query and then filtering on that table's column in WHERE creates an accidental INNER JOIN behavior on a LEFT JOIN chain. Be intentional about which tables you join and why.</p>
    <p>Using <code>SELECT *</code> in a multi-join query produces duplicate column names (like <code>customer_id</code> appearing four times from four different tables) and creates ambiguous columns. Always list specific columns with aliases.</p>
    <hr>
    <h2>Best Practices</h2>
    <p>Start with the most central or smallest table in the FROM clause. In order reports, the <code>orders</code> table is usually the natural starting point because all foreign keys radiate from it.</p>
    <p>Write one JOIN clause per line with consistent indentation. This makes it easy to see how many tables are involved and verify each ON clause:</p>
    <pre><code class="language-sql">FROM orders o
JOIN customers c      ON o.customer_id     = c.customer_id
JOIN restaurants r    ON o.restaurant_id   = r.restaurant_id
JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id</code></pre>
    <p>Test the query incrementally. Write it with just the first JOIN and run it. Verify the result looks correct. Then add the second JOIN and run again. This approach isolates which JOIN introduces a problem if rows count unexpectedly high or low.</p>
    <p>Add column aliases to every column in the SELECT list for multi-join queries. Without aliases, column names in the result can be confusing, especially when two tables have similarly named columns.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, the daily settlement report used by the finance team joins orders, customers, restaurants, delivery partners, and payment methods in a single query. This produces the full transaction picture needed for payouts to restaurants and delivery partners.</p>
    <p>At Flipkart, the seller dashboard shows order items with product names, categories, seller details, and delivery address in one view. This requires joining five to six tables simultaneously.</p>
    <p>At BookMyShow, the booking confirmation email pulls data from bookings, events, venues, seats, and users in a single multi-join query to generate the complete ticket details.</p>
    <p>At Myntra, the returns management system joins returns, orders, products, and customers to show the complete return history with all relevant details for customer support agents.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Multi-join query structure:

orders (hub)
   |
   +--JOIN customers      (adds customer name, city)
   |
   +--JOIN restaurants    (adds restaurant name, type)
   |
   +--JOIN delivery_partners (adds partner name, vehicle)

Each JOIN is applied to the growing result set:

After FROM:          orders rows only
After 1st JOIN:      orders + customer data
After 2nd JOIN:      orders + customer + restaurant data
After 3rd JOIN:      orders + customer + restaurant + partner data
After WHERE/ORDER:   filtered and sorted final result</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these before continuing:</p>
    <ul>
      <li>How do you add a third table to an existing two-table JOIN query?</li>
      <li>Why must you always prefix column names with table aliases in multi-join queries?</li>
      <li>What is the risk of joining on the wrong column in a multi-table query?</li>
      <li>How does the order of JOINs affect readability vs. database execution?</li>
      <li>When would you use LEFT JOIN instead of JOIN in a multi-join chain?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>At Flipkart, you have tables: <code>orders</code> (order_id, customer_id, product_id, seller_id), <code>customers</code> (customer_id, name), <code>products</code> (product_id, product_name, price), <code>sellers</code> (seller_id, seller_name). Write a four-table join to show each order with customer name, product name, price, and seller name.</li>
    </ol>
    <ol>
      <li>Add a WHERE clause to the query from Question 1 to show only orders where the product price is above 2000 rupees.</li>
    </ol>
    <ol>
      <li>At Swiggy, you need to find the top 5 restaurants by revenue for the month of April 2024. The <code>orders</code> table has order amounts and restaurant IDs. The <code>restaurants</code> table has restaurant names. Write the query using a multi-join and GROUP BY.</li>
    </ol>
    <ol>
      <li>Given the four sample tables from this article, write a query that shows the total amount spent by each customer, along with the number of unique restaurants they have ordered from.</li>
    </ol>
    <ol>
      <li>What happens if you include a JOIN to the <code>delivery_partners</code> table but do not use any column from that table in the SELECT list or WHERE clause? Is there any reason to include it?</li>
    </ol>
    <ol>
      <li>At BookMyShow, you have: <code>bookings</code> (booking_id, user_id, event_id, seat_id), <code>users</code> (user_id, name, email), <code>events</code> (event_id, event_name, venue_id), <code>venues</code> (venue_id, venue_name, city). Write a query to show all bookings with user name, event name, and venue city.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Multiple joins are the natural destination of everything you have learned about joins so far. Single-table queries and two-table joins are how you start. Multi-table joins are how you do real work. Every reporting query in a production system at Swiggy, Flipkart, Zomato, or any company that stores data in normalized tables uses multiple joins. Once you are comfortable chaining three or four joins, you can handle almost any reporting query a business throws at you.</p>
  `,
  'mod7-t9': `
    <h1>Join Performance Tips: Writing Joins That Don't Slow Everything Down</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Rahul joined Flipkart's data engineering team six months ago. He has been writing SQL queries comfortably for a while. One Monday morning, his manager Pooja comes to him with a problem: "The daily sales report that goes to the business team takes 40 minutes to run. It used to take 3 minutes. The report deadline is 8 AM and it is barely making it. Can you fix it?"</p>
    <p>Rahul opens the query. It is a join across four tables: orders, customers, products, and sellers. The query looks correct. The results are accurate. But it is slow.</p>
    <p>Pooja says, "Check whether the join columns are indexed. That is almost always the first thing to look at."</p>
    <p>Rahul checks. The <code>orders</code> table has over 20 million rows. The <code>customer_id</code> column in orders has no index. The query was scanning all 20 million rows for every join operation. He adds an index. The query drops to 2 minutes.</p>
    <p>That single change, adding an index on the join column, is the most impactful performance improvement you can make on any join query.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Joins are powerful but they are not free. A join between two large tables without proper indexes can scan tens or hundreds of millions of rows. In a production database handling thousands of queries per minute, a slow join query does not just inconvenience the person who ran it. It competes with every other query for CPU, memory, and I/O resources.</p>
    <p>You will write joins that are fast on a 1000-row development database but crawl on a 50-million-row production table. Understanding why they slow down, and what to do about it, is what separates a junior SQL writer from someone who can work effectively with real production data.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Database engines are sophisticated software built to execute queries as efficiently as possible. But they need information about the data to make smart decisions. Indexes are the primary way you give the database that information: "This column is frequently used for lookups and joins. Build a data structure on it so you can find rows by this value quickly."</p>
    <p>When you write <code>ON o.customer_id = c.customer_id</code>, the database needs to find rows in <code>customers</code> where <code>customer_id</code> matches each value from <code>orders</code>. Without an index, it reads the entire <code>customers</code> table for each row in <code>orders</code>. With an index, it jumps directly to the matching rows.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine the <code>orders</code> table is a filing cabinet with 10 million folders, and the <code>customers</code> table is a phonebook. Without an index, finding a customer's name for each order means reading the phonebook from page 1 every single time. With an index, it is like having an alphabetical phonebook where you can immediately jump to the right page. The query does 10 million fast lookups instead of 10 million full-book scans.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Without index on orders.customer_id:
For each of 20M order rows:
    Scan all 5M customer rows to find matching customer_id
    = 20M x 5M = 100 trillion comparisons (very slow)

With index on orders.customer_id:
For each of 20M order rows:
    Index lookup: jump directly to matching customer_id
    = 20M x log(5M) comparisons (fast)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>There are several key mechanisms that determine join performance. Understanding each helps you diagnose slow queries and apply the right fix.</p>
    <p><strong>Index on join columns</strong>: The single most impactful optimization. Both columns in the ON clause should have indexes. The primary key column (like <code>customers.customer_id</code>) usually has an automatic index. The foreign key column (like <code>orders.customer_id</code>) often does not have an automatic index and must be created manually.</p>
    <p><strong>Filter early with WHERE</strong>: Reducing the number of rows before they enter the join significantly reduces work. If you only need orders from one city, filter on that before or in the same query. Fewer rows = fewer join operations.</p>
    <p><strong>SELECT specific columns</strong>: Fetching 50 columns when you need 5 wastes I/O and memory. This matters more in wide tables with many columns or in databases that store columns separately (columnar storage).</p>
    <p><strong>Join order</strong>: Some database engines care about which table you put first. Joining a small filtered table to a large table is generally faster than the reverse, because the smaller table gives the engine fewer starting points.</p>
    <p><strong>EXPLAIN and EXPLAIN ANALYZE</strong>: These commands show you exactly how the database plans to execute your query. They reveal whether indexes are being used, how many rows each step processes, and where the most time is spent.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Creating an index on a join column:</p>
    <pre><code class="language-sql">-- Add index on the foreign key column in the orders table
CREATE INDEX idx_orders_customer_id ON orders(customer_id);

-- Add index on another commonly joined column
CREATE INDEX idx_orders_restaurant_id ON orders(restaurant_id);</code></pre>
    <p>Using EXPLAIN to see the execution plan:</p>
    <pre><code class="language-sql">EXPLAIN
SELECT c.name, SUM(o.amount)
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name;</code></pre>
    <p>Using EXPLAIN ANALYZE (in PostgreSQL) for actual runtime statistics:</p>
    <pre><code class="language-sql">EXPLAIN ANALYZE
SELECT c.name, SUM(o.amount)
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name;</code></pre>
    <p>Filter before joining using a subquery or CTE when only a subset of rows is needed:</p>
    <pre><code class="language-sql">-- Less efficient: join everything, then filter
SELECT c.name, o.order_id
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE c.city = 'Mumbai' AND o.amount &gt; 500;

-- More efficient on large tables: pre-filter before joining
WITH mumbai_customers AS (
    SELECT customer_id, name FROM customers WHERE city = 'Mumbai'
),
large_orders AS (
    SELECT order_id, customer_id, amount FROM orders WHERE amount &gt; 500
)
SELECT mc.name, lo.order_id
FROM mumbai_customers mc
JOIN large_orders lo ON mc.customer_id = lo.customer_id;</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>Index on join column</td><td>Speeds up row lookup during join</td><td><code>CREATE INDEX idx_orders_cid ON orders(customer_id)</code></td></tr>
      <tr><td>Filter early with WHERE</td><td>Reduces rows before join executes</td><td><code>WHERE o.status = 'Delivered'</code> before joining</td></tr>
      <tr><td>SELECT specific columns</td><td>Reduces data transfer and memory use</td><td><code>SELECT c.name, o.amount</code> not <code>SELECT *</code></td></tr>
      <tr><td>EXPLAIN</td><td>Shows the query execution plan</td><td>Reveals full-table scans vs. index scans</td></tr>
      <tr><td>EXPLAIN ANALYZE</td><td>Shows actual execution time per step</td><td>Identifies the slowest step in a complex join</td></tr>
      <tr><td>Avoid functions on join columns</td><td>Prevents index from being used</td><td>Use <code>o.created_date = '2024-01-01'</code> not <code>YEAR(o.created_date) = 2024</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p>These examples show before-and-after patterns for common performance issues. No sample data tables are needed here because the focus is on query structure.</p>
    <h3>Before/After 1: Slow query without index</h3>
    <p>The Flipkart daily report running 40 minutes:</p>
    <pre><code class="language-sql">-- BEFORE (no index on orders.customer_id, 20M row scan)
SELECT c.name, COUNT(o.order_id), SUM(o.amount)
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE o.order_date &gt;= '2024-01-01'
GROUP BY c.customer_id, c.name;

-- Fix: create index
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(order_date);

-- AFTER: same query now uses index, runs in 2 minutes</code></pre>
    <h3>Before/After 2: Function on join column kills the index</h3>
    <p>A common and invisible performance killer:</p>
    <pre><code class="language-sql">-- BEFORE (function on column prevents index use)
SELECT c.name, o.order_id
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE YEAR(o.order_date) = 2024 AND MONTH(o.order_date) = 3;

-- AFTER (range condition allows index scan)
SELECT c.name, o.order_id
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date &gt;= '2024-03-01' AND o.order_date &lt; '2024-04-01';</code></pre>
    <p>The second version can use an index on <code>order_date</code>. The first forces a full table scan on every row to compute <code>YEAR()</code> and <code>MONTH()</code>.</p>
    <h3>Before/After 3: SELECT * in a multi-join query</h3>
    <pre><code class="language-sql">-- BEFORE (fetches all columns from 4 tables, including large text/blob columns)
SELECT *
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurants r ON o.restaurant_id = r.restaurant_id
JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id;

-- AFTER (fetches only the 6 columns actually needed)
SELECT
    o.order_id,
    o.amount,
    c.name AS customer,
    r.restaurant_name,
    dp.partner_name,
    o.order_date
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurants r ON o.restaurant_id = r.restaurant_id
JOIN delivery_partners dp ON o.delivery_partner_id = dp.partner_id;</code></pre>
    <h3>Before/After 4: FULL OUTER JOIN and CROSS JOIN on large tables</h3>
    <pre><code class="language-sql">-- DANGEROUS: CROSS JOIN on large tables
SELECT *
FROM products p
CROSS JOIN customers c;
-- If products = 100,000 and customers = 500,000: 50 BILLION rows

-- SAFER: only use CROSS JOIN on small dimension tables
SELECT s.size_label, co.color_name
FROM sizes s         -- 6 rows
CROSS JOIN colors co -- 10 rows
;                    -- 60 rows: manageable</code></pre>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p>Indexes on the right columns are not enough if the query does not let the database use them. Wrapping a join column in a function, applying arithmetic to it, or using an implicit type conversion can prevent the index from being used. Always write join and filter conditions in their raw column form.</p>
    <p>Adding more JOINs does not automatically make a query slower, but adding JOINs that produce large intermediate results does. If your first join produces 10 million rows and the second join multiplies them by 5, you have a 50-million-row intermediate table in memory. Pre-filter aggressively before joining.</p>
    <p>EXPLAIN output can look intimidating at first. Focus on two things: whether it says "Index Scan" or "Seq Scan" (sequential scan = full table scan = potentially slow), and how many rows it estimates processing at each step.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <p>Assuming the query is correct means it is fast. A query can return exactly the right results and still take 10x longer than it should because of missing indexes.</p>
    <p>Indexing every column is also a mistake. Indexes consume storage and slow down INSERT, UPDATE, and DELETE operations. Index the columns you actually join and filter on, not every column in the table.</p>
    <p>Not testing on production-sized data is a common trap. A query joining two tables with 1000 rows each runs fine on a development database. The same query on tables with 10 million rows each may time out. Always test performance on data that approximates production size.</p>
    <hr>
    <h2>Best Practices</h2>
    <p><strong>Index the join columns</strong>. Every column that appears in an ON clause should have an index, with the possible exception of primary keys (which are usually indexed automatically).</p>
    <p><strong>Filter early</strong>. Apply WHERE conditions before or during the join to reduce the number of rows being processed.</p>
    <p><strong>Avoid SELECT </strong>*. Fetch only the columns you need. This is especially important in columnar databases and when tables have large binary or text columns.</p>
    <p><strong>Avoid functions on join and filter columns</strong>. Rewrite function-based conditions as range conditions to allow index usage.</p>
    <p><strong>Use EXPLAIN before running a heavy join</strong>. Check the execution plan before running a join on large production tables. One minute of review can save 40 minutes of execution.</p>
    <p><strong>Be careful with FULL OUTER JOIN and CROSS JOIN on large tables</strong>. Both can produce enormous result sets. Pre-filter aggressively and verify expected row counts before running.</p>
    <p><strong>Join order matters for readability, and sometimes for performance</strong>. Put more selective (smaller, filtered) tables earlier in the join chain. Some databases respect this hint in their execution planning.</p>
    <p><strong>Use CTEs or subqueries to pre-filter large tables</strong>. If you only need a subset of rows from a large table, filter it before joining rather than joining the full table and filtering afterward.</p>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, a database performance team reviews slow queries from the query log every week. The most common fix they apply is adding an index on a foreign key column that is heavily used in JOIN conditions.</p>
    <p>At Paytm, transaction reports that used to time out were fixed by pre-filtering the date range before joining with customer and merchant tables. The fix reduced intermediate row counts from 50 million to 200,000.</p>
    <p>At Swiggy, the daily delivery performance report was rewritten to select only 8 specific columns instead of SELECT * across four tables. This alone reduced query runtime by 60% because several of those tables contained large JSON metadata columns.</p>
    <p>At Zomato, the data team introduced a "performance review" step for any query that joins more than two tables: run EXPLAIN, verify index usage, check estimated row counts. This practice has prevented several production slowdowns from reaching end users.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Join Performance Checklist:

Before writing the JOIN:
[ ] Do both join columns have indexes?
[ ] Can I pre-filter either table before joining?
[ ] Do I really need all join types used, or can I simplify?

In the SELECT clause:
[ ] Am I selecting only the columns I need?
[ ] Is SELECT * anywhere in this query? (Replace with specific columns)

In the ON clause:
[ ] Are join columns in their raw form? (No functions wrapping them)
[ ] Are the join column types matching? (No implicit type conversions)

In the WHERE clause:
[ ] Are filters on non-indexed columns unavoidable?
[ ] Can I rewrite function-based filters as range conditions?

Before running on large tables:
[ ] Have I run EXPLAIN to check the plan?
[ ] Does EXPLAIN show Index Scan or Seq Scan?
[ ] What is the estimated row count at each step?
[ ] Is there any CROSS JOIN or FULL OUTER JOIN that could explode the result size?</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Check your understanding before finishing this module:</p>
    <ul>
      <li>Why does an index on a join column make the query faster?</li>
      <li>What is the problem with writing <code>WHERE YEAR(o.order_date) = 2024</code> on an indexed column?</li>
      <li>What does EXPLAIN tell you about a query?</li>
      <li>Why is SELECT * particularly harmful in multi-join queries?</li>
      <li>What is one situation where a FULL OUTER JOIN or CROSS JOIN can cause serious performance problems?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>A query at Swiggy joins <code>orders</code> (10 million rows) and <code>customers</code> (2 million rows) on <code>customer_id</code>. There is no index on <code>orders.customer_id</code>. Estimate roughly how many row comparisons the database makes without the index. What happens after the index is added?</li>
    </ol>
    <ol>
      <li>Rewrite the following query to avoid a function on the join/filter column:</li>
    </ol>
    <pre><code class="language-sql">   SELECT c.name, o.amount
   FROM customers c
   JOIN orders o ON c.customer_id = o.customer_id
   WHERE MONTH(o.order_date) = 5 AND YEAR(o.order_date) = 2024;</code></pre>
    <ol>
      <li>A colleague's query uses <code>SELECT *</code> across a five-table join. The query returns correct data but takes 15 minutes. What is your first suggestion and why?</li>
    </ol>
    <ol>
      <li>Write the CREATE INDEX statement that would help this query run faster:</li>
    </ol>
    <pre><code class="language-sql">   SELECT r.restaurant_name, COUNT(o.order_id)
   FROM orders o
   JOIN restaurants r ON o.restaurant_id = r.restaurant_id
   GROUP BY r.restaurant_id;</code></pre>
    <ol>
      <li>Use EXPLAIN (write the syntax) on the following query to check its execution plan:</li>
    </ol>
    <pre><code class="language-sql">   SELECT c.name, SUM(o.amount)
   FROM customers c
   JOIN orders o ON c.customer_id = o.customer_id
   WHERE o.status = 'Delivered'
   GROUP BY c.customer_id;</code></pre>
    <ol>
      <li>A new analyst writes a CROSS JOIN between the <code>products</code> table (500,000 rows) and the <code>customers</code> table (1,000,000 rows) without realizing it. How many rows will be returned? What should they do instead?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Performance is not a separate topic from correctness. A query that gives the right answer but takes 40 minutes is not a working query in a production environment. The habits covered in this article, indexing join columns, filtering early, selecting specific columns, using EXPLAIN, and avoiding functions on indexed columns, are not advanced techniques. They are the foundation of writing SQL that works in real systems at scale. Once these become instincts, you write efficient queries from the start rather than fixing slow ones after the fact.</p>
  `,

  // ── Module 8 ─────────────────────────────────────────────────
  'mod8-t1': `
    <h1>Subqueries: A Query Inside Another Query</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Arjun joined Swiggy's data team three months ago. One morning, his manager Priya drops by and says, "Hey, I need a list of all orders where the amount is higher than our average order value. Can you pull that?"</p>
    <p>Arjun opens his laptop. He knows he can find the average order value with one query. He also knows he can filter orders with another. But Priya needs one clean result, not two steps. He starts thinking: what if he could put the first query inside the second?</p>
    <p>That is exactly what a subquery lets you do.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>You will often run into situations where the answer to your question depends on another question. You cannot just write a single WHERE clause because the filter value itself needs to be calculated from the data.</p>
    <p>Examples you will face at work:</p>
    <ul>
      <li>Find all orders above the average order value</li>
      <li>List customers who have placed more orders than the typical customer</li>
      <li>Show products priced higher than every product in a specific category</li>
    </ul>
    <p>In each case, the filter is not a fixed number. It is a number you need to compute first. Subqueries handle exactly this.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Before subqueries, analysts had to run one query, note the result, and manually plug that number into a second query. That is slow, error-prone, and falls apart when the data changes.</p>
    <p>SQL designers wanted a way to make queries self-contained. Instead of: "run query A, get 450, now run query B with 450 hardcoded," you should be able to say: "run query B where the filter is whatever query A returns." Subqueries made SQL much more powerful and flexible.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you ask your junior colleague, "What is the average order value this month?" She checks and says, "It is 480 rupees." You then ask your manager, "Show me all orders above 480 rupees."</p>
    <p>Now imagine your colleague is sitting inside your brain. You ask your manager, "Show me all orders above whatever my colleague tells me," and your colleague whispers the number before your manager answers. That is a subquery. The inner query runs first, produces a result, and the outer query uses that result.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Outer Query
  |
  |--- WHERE amount &gt; ( Inner Query )
                             |
                             |--- calculates AVG(amount) = 480
                             |--- returns: 480
  |
  |--- WHERE amount &gt; 480
  |--- returns matching rows</code></pre>
    <p>The database runs the inner query first. It gets a value (or a set of values). Then it runs the outer query using that value.</p>
    <hr>
    <h2>How It Actually Works</h2>
    <p>A subquery is a SELECT statement written inside parentheses, placed within another SQL statement. The database engine executes the inner query first, takes its result, and feeds it to the outer query.</p>
    <p>Key rules:</p>
    <ul>
      <li>A subquery must always be enclosed in parentheses</li>
      <li>It must always contain a SELECT statement</li>
      <li>It can appear in the WHERE clause, the FROM clause, or the SELECT clause</li>
      <li>The outer query treats the subquery result like any other value or table</li>
    </ul>
    <p>The inner query does not know about the outer query (in most cases). It just runs, returns a result, and hands it over.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Here is the basic structure:</p>
    <pre><code class="language-sql">SELECT column1, column2
FROM table_name
WHERE column1 OPERATOR (
    SELECT some_value
    FROM another_table
    WHERE condition
);</code></pre>
    <p>The subquery is the part inside the inner parentheses. It runs first. The outer query runs second.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td>Outer query</td><td>The main query that uses the subquery result</td><td><code>SELECT * FROM orders</code></td></tr>
      <tr><td>Parentheses</td><td>Wrap the subquery so SQL knows where it starts and ends</td><td><code>(SELECT AVG(amount) FROM orders)</code></td></tr>
      <tr><td>Inner SELECT</td><td>Produces the value or values the outer query needs</td><td><code>SELECT MAX(amount) FROM orders</code></td></tr>
      <tr><td>OPERATOR</td><td>Compares the outer column to the subquery result</td><td><code>=</code>, <code>></code>, <code>IN</code>, <code><</code></td></tr>
      <tr><td>Alias (in FROM)</td><td>Required when subquery is used as a table</td><td><code>AS city_summary</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Tables at Swiggy</strong></p>
    <p><code>orders</code> table:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>amount</th></tr>
      <tr><td>101</td><td>1</td><td>Mumbai</td><td>350</td></tr>
      <tr><td>102</td><td>2</td><td>Delhi</td><td>620</td></tr>
      <tr><td>103</td><td>1</td><td>Mumbai</td><td>480</td></tr>
      <tr><td>104</td><td>3</td><td>Bengaluru</td><td>290</td></tr>
      <tr><td>105</td><td>4</td><td>Delhi</td><td>750</td></tr>
      <tr><td>106</td><td>2</td><td>Bengaluru</td><td>410</td></tr>
    </table>
    <p><code>customers</code> table:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Rohan</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Sneha</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Vikram</td><td>Bengaluru</td></tr>
      <tr><td>4</td><td>Anjali</td><td>Delhi</td></tr>
    </table>
    <hr>
    <h3>Example 1: Find orders above average order value</h3>
    <p>Business question: Which orders are above the average order amount?</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE amount &gt; (SELECT AVG(amount) FROM orders);</code></pre>
    <p>The inner query calculates <code>AVG(amount)</code> which comes out to 483. The outer query then returns all orders where amount is greater than 483. You get order_id 102 (620) and 105 (750).</p>
    <hr>
    <h3>Example 2: Find customers who have placed any order in Delhi</h3>
    <p>Business question: List all customers who have at least one order from Delhi.</p>
    <pre><code class="language-sql">SELECT name
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    WHERE city = 'Delhi'
);</code></pre>
    <p>The inner query returns customer_ids 2 and 4 (both have Delhi orders). The outer query finds names for those customer_ids: Sneha and Anjali.</p>
    <hr>
    <h3>Example 3: Find the order with the highest amount</h3>
    <p>Business question: Show the single largest order.</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE amount = (SELECT MAX(amount) FROM orders);</code></pre>
    <p>The inner query returns 750. The outer query finds order_id 105 with that amount.</p>
    <hr>
    <h3>Example 4: Show each customer's name alongside their city from orders</h3>
    <p>Business question: Get distinct cities where orders have been placed, then find customer names from those cities.</p>
    <pre><code class="language-sql">SELECT name, city
FROM customers
WHERE city IN (
    SELECT DISTINCT city
    FROM orders
);</code></pre>
    <p>The inner query returns Mumbai, Delhi, Bengaluru. The outer query returns all customers from those cities, which in this case is everyone.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Forgetting parentheses.</strong> The subquery must be inside parentheses. Without them, SQL cannot parse the query and will throw an error.</p>
    <p><strong>Using a multi-row subquery with =.</strong> If your subquery returns more than one value and you use <code>=</code>, SQL will error. Use <code>IN</code> for multiple values, <code>=</code> only when you are sure the subquery returns exactly one row.</p>
    <p><strong>Expecting the subquery to see outer query columns.</strong> In a regular (non-correlated) subquery, the inner query is completely independent. It does not have access to the outer query's rows. We cover correlated subqueries separately.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Writing <code>WHERE amount = (SELECT amount FROM orders)</code> when the subquery returns multiple rows</li>
      <li>Forgetting to alias a subquery in the FROM clause (SQL requires this)</li>
      <li>Writing complex subqueries when a simple JOIN would work better and be easier to read</li>
      <li>Nesting subqueries five levels deep and then wondering why nobody can read the code</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Keep subqueries simple. If it is getting complex, consider a CTE (Common Table Expression) or a JOIN instead.</li>
      <li>Always alias subqueries used in the FROM clause.</li>
      <li>When a subquery returns one value, use <code>=</code>. When it returns multiple values, use <code>IN</code>.</li>
      <li>Test your inner query independently first to confirm it returns what you expect.</li>
      <li>Add comments when subqueries are non-obvious so teammates can follow the logic.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, analysts use subqueries to find restaurants performing above the platform average. At Flipkart, they pull products priced above a category average. At IRCTC, subqueries help identify routes where cancellation rates exceed the overall average. At Paytm, they find transactions that are statistical outliers by comparing each to an inner query that computes the threshold.</p>
    <p>Subqueries are everywhere in production SQL because real-world questions almost always have a "compared to what?" element baked in.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Types of Subqueries:

1. Scalar Subquery        -- returns ONE value (one row, one column)
   Used in: WHERE, SELECT
   Example: WHERE amount &gt; (SELECT AVG(amount) FROM orders)

2. Row Subquery           -- returns ONE row (multiple columns)
   Less common, used in row-level comparisons

3. Table Subquery         -- returns MULTIPLE rows
   Used in: WHERE ... IN (...), FROM (...)
   Example: WHERE id IN (SELECT id FROM vip_customers)

4. Correlated Subquery    -- references outer query's columns
   Runs once per outer row -- covered separately
   Example: WHERE amount &gt; (SELECT AVG(amount) FROM orders o2
                             WHERE o2.city = o1.city)</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these questions before going further:</p>
    <ul>
      <li>What is a subquery and where can it appear in a SQL statement?</li>
      <li>Which part of a subquery runs first, inner or outer?</li>
      <li>What happens if you use <code>=</code> with a subquery that returns multiple rows?</li>
      <li>What is the difference between a scalar subquery and a table subquery?</li>
      <li>Why must a subquery in the FROM clause have an alias?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find all orders from the <code>orders</code> table where the amount is greater than the average amount of all orders in Mumbai.</li>
    </ol>
    <ol>
      <li>Write a query to list all customers whose <code>customer_id</code> appears in the <code>orders</code> table (use a subquery, not a JOIN).</li>
    </ol>
    <ol>
      <li>Write a query to find the order with the minimum amount using a subquery in the WHERE clause.</li>
    </ol>
    <ol>
      <li>Write a query to find all orders placed by customers from Delhi. Use a subquery to first get customer_ids from the <code>customers</code> table where city is Delhi.</li>
    </ol>
    <ol>
      <li>Write a query using a subquery in the FROM clause that calculates the average order amount per city, then shows only cities where that average is above 400.</li>
    </ol>
    <ol>
      <li>What error would you get if you wrote <code>WHERE customer_id = (SELECT customer_id FROM orders)</code> and the <code>orders</code> table had multiple rows? How would you fix it?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Subqueries are one of those concepts that feel tricky until you use them a few times, and then they feel completely natural. The key insight is simple: a subquery is just a query inside a query. The inner one runs first, hands off its result, and the outer one does its job.</p>
    <p>Once you are comfortable with basic subqueries, correlated subqueries and EXISTS conditions will make much more sense. We will get there step by step.</p>
  `,
  'mod8-t2': `
    <h1>Subquery in WHERE: Filter Rows Based on Another Query's Result</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Divya is a data analyst at Flipkart. Her manager asks her to pull a report: "Show me all orders where the amount is equal to the highest order we have ever received."</p>
    <p>Divya knows the highest order value is somewhere in the data, but she does not know it off the top of her head. She could run one query to find MAX(amount), see it is 9,800, then write a second query hardcoding 9,800 in the WHERE clause. But that breaks the next time the data changes.</p>
    <p>Instead, she writes a single query where the WHERE clause itself finds the maximum. That is a subquery in WHERE, and it is the most commonly used form of subquery in day-to-day SQL work.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Most of the time when you filter data, you know the condition: "where city = 'Mumbai'" or "where amount > 500." But sometimes the threshold or value you want to filter by is not fixed. It depends on the data itself.</p>
    <ul>
      <li>"Show orders above the average" -- the average changes as data changes</li>
      <li>"Show customers in the same tier as our top spender" -- you do not know that tier upfront</li>
      <li>"Show all orders from premium customers" -- you need to look up who the premium customers are</li>
    </ul>
    <p>These situations call for a subquery in the WHERE clause.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL was designed to answer questions in a single statement whenever possible. Hardcoding intermediate results creates brittle queries that break when data updates. The ability to put a SELECT statement inside WHERE means your filter can be dynamic, deriving its value directly from the current state of the data. This makes reports accurate and queries reusable.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you work at a Flipkart warehouse. Your manager says, "Flag every order that costs more than what our most expensive order cost." You call your colleague and ask, "What is our highest order amount?" She checks and says 9,800. You now go through orders and flag anything above 9,800.</p>
    <p>The subquery is your colleague. You do not hard-code the 9,800. You let SQL figure it out at query time.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>SELECT * FROM orders
WHERE amount &gt; (SELECT MAX(amount) FROM orders WHERE city = 'Delhi')

Step 1: Inner query runs
        SELECT MAX(amount) FROM orders WHERE city = 'Delhi'
        Result: 8500

Step 2: Outer query runs with that result
        SELECT * FROM orders WHERE amount &gt; 8500
        Returns rows where amount exceeds 8500</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When SQL encounters a subquery in the WHERE clause, it evaluates the inner query first and produces a result. That result can be:</p>
    <ul>
      <li>A single value (scalar): used with <code>=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
      <li>A list of values: used with <code>IN</code> or <code>NOT IN</code></li>
    </ul>
    <p>The outer WHERE clause then uses that result as if you had typed it directly. The whole thing runs in one statement, which means the result is always current.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Single-value subquery with <code>=</code>:</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE amount = (SELECT MAX(amount) FROM orders);</code></pre>
    <p>Single-value subquery with <code>></code>:</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE amount &gt; (SELECT AVG(amount) FROM orders);</code></pre>
    <p>Multi-value subquery with <code>IN</code>:</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE customer_id IN (SELECT customer_id FROM customers WHERE tier = 'Gold');</code></pre>
    <p>Using <code>NOT IN</code>:</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE customer_id NOT IN (SELECT customer_id FROM customers WHERE tier = 'Gold');</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>WHERE amount =</code></td><td>Outer filter condition waiting for a value</td><td><code>WHERE amount = ...</code></td></tr>
      <tr><td><code>(SELECT MAX(amount) FROM orders)</code></td><td>Inner query that computes the value</td><td>Returns a single number like 9800</td></tr>
      <tr><td><code>IN (SELECT ...)</code></td><td>Checks if outer column is in a list from inner query</td><td><code>WHERE customer_id IN (SELECT ...)</code></td></tr>
      <tr><td><code>NOT IN (SELECT ...)</code></td><td>Excludes rows matching the inner query list</td><td><code>WHERE city NOT IN (SELECT city FROM ...)</code></td></tr>
      <tr><td><code>> (SELECT AVG(...))</code></td><td>Comparison using a computed threshold</td><td><code>WHERE amount > (SELECT AVG(amount) ...)</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Tables at Flipkart</strong></p>
    <p><code>orders</code> table:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>amount</th><th>order_date</th></tr>
      <tr><td>201</td><td>10</td><td>Mumbai</td><td>1200</td><td>2024-01-05</td></tr>
      <tr><td>202</td><td>11</td><td>Delhi</td><td>9800</td><td>2024-01-07</td></tr>
      <tr><td>203</td><td>12</td><td>Bengaluru</td><td>450</td><td>2024-01-09</td></tr>
      <tr><td>204</td><td>10</td><td>Delhi</td><td>3200</td><td>2024-01-10</td></tr>
      <tr><td>205</td><td>13</td><td>Mumbai</td><td>750</td><td>2024-01-12</td></tr>
      <tr><td>206</td><td>14</td><td>Bengaluru</td><td>6100</td><td>2024-01-13</td></tr>
    </table>
    <p><code>customers</code> table:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th><th>tier</th></tr>
      <tr><td>10</td><td>Rahul</td><td>Mumbai</td><td>Gold</td></tr>
      <tr><td>11</td><td>Meera</td><td>Delhi</td><td>Platinum</td></tr>
      <tr><td>12</td><td>Sameer</td><td>Bengaluru</td><td>Silver</td></tr>
      <tr><td>13</td><td>Pooja</td><td>Mumbai</td><td>Gold</td></tr>
      <tr><td>14</td><td>Karan</td><td>Bengaluru</td><td>Platinum</td></tr>
    </table>
    <hr>
    <h3>Example 1: Find the single highest-value order</h3>
    <p>Business question: Which order has the maximum amount placed on Flipkart?</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE amount = (SELECT MAX(amount) FROM orders);</code></pre>
    <p>The inner query finds MAX(amount) = 9800. The outer query returns order_id 202 placed by customer 11 for 9800. This is guaranteed to stay correct even if new data comes in.</p>
    <hr>
    <h3>Example 2: Find orders above average amount</h3>
    <p>Business question: Which orders are performing above the platform average?</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, city, amount
FROM orders
WHERE amount &gt; (SELECT AVG(amount) FROM orders);</code></pre>
    <p>The inner query calculates the average, which is (1200 + 9800 + 450 + 3200 + 750 + 6100) / 6 = 3583. The outer query returns orders 202 (9800), 204 (3200 is not above 3583), and 206 (6100). Orders with amount above 3583 are returned.</p>
    <hr>
    <h3>Example 3: Find orders by Gold or Platinum customers using IN</h3>
    <p>Business question: Pull all orders placed by Gold or Platinum tier customers.</p>
    <pre><code class="language-sql">SELECT o.order_id, o.customer_id, o.amount
FROM orders o
WHERE o.customer_id IN (
    SELECT customer_id
    FROM customers
    WHERE tier IN ('Gold', 'Platinum')
);</code></pre>
    <p>The inner query returns customer_ids 10, 11, 13, 14. The outer query returns all orders placed by those customers: orders 201, 202, 204, 205, 206.</p>
    <hr>
    <h3>Example 4: Find orders from non-premium customers using NOT IN</h3>
    <p>Business question: Which orders were placed by Silver tier customers?</p>
    <pre><code class="language-sql">SELECT order_id, customer_id, amount
FROM orders
WHERE customer_id NOT IN (
    SELECT customer_id
    FROM customers
    WHERE tier IN ('Gold', 'Platinum')
);</code></pre>
    <p>The inner query returns 10, 11, 13, 14. NOT IN excludes those, so only customer_id 12 remains. Order 203 (customer 12, Bengaluru, 450) is returned.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Using <code>=</code> when the subquery returns multiple rows.</strong> If you write <code>WHERE customer_id = (SELECT customer_id FROM customers WHERE tier = 'Gold')</code> and there are multiple Gold customers, SQL throws an error. Use <code>IN</code> for multiple values.</p>
    <p><strong>NOT IN with NULL values in the subquery result.</strong> This is a critical gotcha. If the subquery inside <code>NOT IN</code> returns even one NULL value, the entire NOT IN condition evaluates to UNKNOWN for every row, and your query returns zero rows. This happens because SQL cannot confirm "X is not equal to NULL" since NULL comparisons are undefined. If any NULLs might be present in the subquery result, use NOT EXISTS instead.</p>
    <p><strong>Comparing across different data types.</strong> If customer_id is INT in one table and VARCHAR in another, the comparison may behave unexpectedly depending on the database.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Writing <code>WHERE amount = (SELECT amount FROM orders)</code> when there are multiple rows in the result</li>
      <li>Using <code>NOT IN</code> with a subquery that might return NULLs and wondering why no rows come back</li>
      <li>Forgetting that <code>IN</code> is case-sensitive for string values in some databases</li>
      <li>Using a correlated reference inside a WHERE subquery when you intended a regular subquery (the inner query should not reference the outer table unless you specifically want a correlated subquery)</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Test your inner query alone before embedding it. Verify what it returns.</li>
      <li>Use <code>=</code> only when you are certain the subquery returns exactly one row.</li>
      <li>Avoid <code>NOT IN</code> if the subquery can ever produce NULL. Use <code>NOT EXISTS</code> instead.</li>
      <li>If the subquery is complex, break it out into a CTE for readability.</li>
      <li>Add the table alias in the outer query if there is any ambiguity about which table the columns belong to.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, this pattern is used to flag orders above the daily average for fraud review. At Zomato, analysts pull restaurants with ratings below the platform average for quality checks. At BookMyShow, subqueries in WHERE help find events with ticket sales below projections by comparing against a computed baseline. At IRCTC, they pull trains with delays greater than the average delay on a given route.</p>
    <p>The subquery-in-WHERE pattern shows up wherever the filter condition is a number that must be computed from the data itself.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Subquery in WHERE: Three Main Patterns

Pattern 1: Single Value (scalar)
  WHERE amount = (SELECT MAX(amount) FROM orders)
  WHERE amount &gt; (SELECT AVG(amount) FROM orders)
  Works with: =  &gt;  &lt;  &gt;=  &lt;=  &lt;&gt;

Pattern 2: Multiple Values (list)
  WHERE customer_id IN (SELECT customer_id FROM vip_customers)
  WHERE city NOT IN (SELECT city FROM blacklisted_cities)
  Works with: IN, NOT IN

Pattern 3: NULL Gotcha with NOT IN
  If subquery returns: (10, 11, NULL)
  NOT IN (10, 11, NULL) = UNKNOWN for every row
  Result: 0 rows returned
  Fix: Use NOT EXISTS instead</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Answer these before continuing:</p>
    <ul>
      <li>When should you use <code>=</code> vs <code>IN</code> with a subquery in WHERE?</li>
      <li>What happens when a NOT IN subquery contains a NULL value?</li>
      <li>How do you verify that your subquery is returning the right result before embedding it?</li>
      <li>What is the difference between <code>WHERE amount > (SELECT AVG(amount) FROM orders)</code> and <code>WHERE amount > 500</code>?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query to find all orders at Flipkart where the amount is greater than the average order amount in Bengaluru specifically.</li>
    </ol>
    <ol>
      <li>Write a query to find all customers whose city appears in the list of cities in the <code>orders</code> table (use a subquery in WHERE with IN).</li>
    </ol>
    <ol>
      <li>Write a query to find orders placed by customers who are NOT Silver tier. Use <code>NOT IN</code> with a subquery.</li>
    </ol>
    <ol>
      <li>Write a query to find the most recent order date in the <code>orders</code> table, then return all orders placed on that date using a subquery in WHERE.</li>
    </ol>
    <ol>
      <li>Write a query that finds all orders where the amount is between the minimum and maximum amounts of orders placed in Delhi. Use two subqueries in the WHERE clause.</li>
    </ol>
    <ol>
      <li>Explain in plain words why <code>NOT IN</code> breaks when the subquery returns a NULL. What would you use instead?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>The subquery in WHERE is the workhorse of SQL analysis. It is the first place most people use subqueries, and it solves a very real problem: your filter value is not a fixed number, it is something the data itself tells you. Once you understand when to use <code>=</code> vs <code>IN</code>, and you remember the NULL gotcha with NOT IN, you will be writing these confidently in no time.</p>
  `,
  'mod8-t3': `
    <h1>Subquery in FROM: Creating a Temporary Table Inside Your Query</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Neha is an analyst at Swiggy. Her manager wants to know which cities have an average order value above 500 rupees. Simple enough, she thinks. She starts typing a GROUP BY query with a HAVING clause. But then her manager adds: "And for those cities, also show me how many orders they have."</p>
    <p>Neha realizes she needs to first compute the average per city, then filter those results, and then also show the count. One WHERE clause cannot do this because the filter (average above 500) is itself the result of an aggregation. You cannot filter on aggregated results with WHERE, and HAVING works but does not always compose cleanly with additional calculations layered on top.</p>
    <p>She needs to treat the grouped result as if it were its own table. That is where a subquery in FROM comes in.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Sometimes you need to do two levels of computation:</p>
    <ol>
      <li>First: aggregate or transform data (compute averages, counts, sums per group)</li>
      <li>Then: filter or further aggregate that result</li>
    </ol>
    <p>SQL's WHERE clause runs before GROUP BY, so you cannot use WHERE to filter on aggregated values. HAVING handles some cases, but when you need to aggregate an aggregate, or join a summary result with another table, you need to wrap the first step in a subquery and treat it as a table inside FROM.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>A table in SQL is just a set of rows and columns. There is nothing stopping you from creating a temporary set of rows and columns on the fly inside a query. That is all a subquery in FROM does. It creates what is often called a derived table or inline view: a named, temporary result that lives only for the duration of the query. No permanent storage, no schema changes, just a clean way to build multi-step logic into one statement.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you are running a small report manually. You first summarize data on a scratch pad: city name, average order value, order count. Then you look at that scratch pad and circle only the rows where the average is above 500.</p>
    <p>The scratch pad is your subquery in FROM. You create it, give it a name, and then query it as if it were a real table.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>SELECT city, avg_amount, total_orders
FROM (
    SELECT city, AVG(amount) AS avg_amount, COUNT(*) AS total_orders
    FROM orders
    GROUP BY city
) AS city_summary
WHERE avg_amount &gt; 500;

Step 1: Inner query runs and produces:
        city        | avg_amount | total_orders
        ------------|------------|-------------
        Mumbai      | 415        | 2
        Delhi       | 685        | 3
        Bengaluru   | 350        | 2

Step 2: Outer query filters that result:
        city        | avg_amount | total_orders
        ------------|------------|-------------
        Delhi       | 685        | 3</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>When SQL sees a subquery in the FROM clause, it runs that subquery first and materializes the result as a temporary table in memory. That temporary table is then available to the rest of the query exactly like any other table. You can SELECT from it, JOIN it with other tables, filter it with WHERE, and group it further.</p>
    <p>The only requirement is that the subquery in FROM must be given an alias. Without an alias, SQL cannot refer to the temporary result, and the query fails.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic structure:</p>
    <pre><code class="language-sql">SELECT outer_column, outer_column2
FROM (
    SELECT column1, AGG_FUNCTION(column2) AS alias
    FROM original_table
    GROUP BY column1
) AS temp_name
WHERE outer_column &gt; some_value;</code></pre>
    <p>The subquery goes where a table name would normally go, wrapped in parentheses, followed by AS and an alias name.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>FROM (SELECT ...)</code></td><td>Treats the subquery result as a temporary table</td><td><code>FROM (SELECT city, AVG(amount) AS avg_amt FROM orders GROUP BY city)</code></td></tr>
      <tr><td><code>AS city_summary</code></td><td>Gives the derived table a name the outer query can reference</td><td><code>AS city_summary</code></td></tr>
      <tr><td>Outer <code>SELECT</code></td><td>Picks columns from the derived table</td><td><code>SELECT city, avg_amt</code></td></tr>
      <tr><td>Outer <code>WHERE</code></td><td>Filters the derived table rows</td><td><code>WHERE avg_amt > 500</code></td></tr>
      <tr><td><code>GROUP BY</code> inside</td><td>Aggregates data before the outer query sees it</td><td><code>GROUP BY city</code></td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Table at Swiggy</strong></p>
    <p><code>orders</code> table:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>cuisine</th><th>amount</th></tr>
      <tr><td>301</td><td>1</td><td>Mumbai</td><td>North Indian</td><td>380</td></tr>
      <tr><td>302</td><td>2</td><td>Delhi</td><td>Chinese</td><td>720</td></tr>
      <tr><td>303</td><td>3</td><td>Bengaluru</td><td>South Indian</td><td>310</td></tr>
      <tr><td>304</td><td>1</td><td>Delhi</td><td>Pizza</td><td>550</td></tr>
      <tr><td>305</td><td>4</td><td>Mumbai</td><td>Biryani</td><td>890</td></tr>
      <tr><td>306</td><td>2</td><td>Delhi</td><td>Burgers</td><td>780</td></tr>
      <tr><td>307</td><td>3</td><td>Bengaluru</td><td>Chinese</td><td>420</td></tr>
      <tr><td>308</td><td>5</td><td>Mumbai</td><td>Pizza</td><td>460</td></tr>
    </table>
    <hr>
    <h3>Example 1: Find cities where average order value exceeds 500</h3>
    <p>Business question: Which cities are performing strongly in terms of average order value?</p>
    <pre><code class="language-sql">SELECT city, avg_amount
FROM (
    SELECT city, AVG(amount) AS avg_amount
    FROM orders
    GROUP BY city
) AS city_summary
WHERE avg_amount &gt; 500;</code></pre>
    <p>The inner query groups orders by city and computes AVG(amount): Mumbai = 576.67, Delhi = 683.33, Bengaluru = 365. The outer query filters to show only cities where avg_amount exceeds 500. Result: Mumbai and Delhi are returned.</p>
    <hr>
    <h3>Example 2: Find the city with the highest average order value</h3>
    <p>Business question: Which single city has the best average order performance?</p>
    <pre><code class="language-sql">SELECT city, avg_amount
FROM (
    SELECT city, AVG(amount) AS avg_amount
    FROM orders
    GROUP BY city
) AS city_summary
ORDER BY avg_amount DESC
LIMIT 1;</code></pre>
    <p>The derived table provides averaged data per city. The outer query sorts it and picks the top one. Delhi (683.33) comes out on top.</p>
    <hr>
    <h3>Example 3: Find cuisine types with more than one order</h3>
    <p>Business question: Which cuisines have been ordered more than once across all cities?</p>
    <pre><code class="language-sql">SELECT cuisine, order_count
FROM (
    SELECT cuisine, COUNT(*) AS order_count
    FROM orders
    GROUP BY cuisine
) AS cuisine_stats
WHERE order_count &gt; 1;</code></pre>
    <p>The inner query counts orders per cuisine: Chinese = 2, Pizza = 2, others = 1. The outer query filters to show only cuisines with more than 1 order. Chinese and Pizza appear in the result.</p>
    <hr>
    <h3>Example 4: Find the average of city averages (aggregating an aggregate)</h3>
    <p>Business question: What is the average order value averaged across all cities (not the overall average, but the average of each city's average)?</p>
    <pre><code class="language-sql">SELECT AVG(avg_amount) AS avg_of_city_averages
FROM (
    SELECT city, AVG(amount) AS avg_amount
    FROM orders
    GROUP BY city
) AS city_summary;</code></pre>
    <p>You cannot do <code>AVG(AVG(amount))</code> directly in SQL. But you can wrap the first AVG in a derived table, and then compute AVG on top of it in the outer query. This is the canonical example of why derived tables exist.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Forgetting the alias.</strong> Every subquery in FROM must have an alias. Writing <code>FROM (SELECT ...) WHERE ...</code> without <code>AS something</code> will throw a syntax error in most databases. Even if you never reference the alias name, you still must provide it.</p>
    <p><strong>Trying to use columns from the derived table that were not selected.</strong> The outer query can only see columns that the inner SELECT explicitly includes. If you forgot to include <code>city</code> in the derived table, you cannot reference <code>city</code> in the outer WHERE.</p>
    <p><strong>Thinking derived tables persist.</strong> They exist only for the duration of that single query execution. Nothing is stored permanently.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Omitting the alias after the closing parenthesis of the subquery</li>
      <li>Selecting a column in the outer query that was not included in the inner query</li>
      <li>Writing the WHERE clause inside the subquery when the filter needs to go in the outer query (or vice versa)</li>
      <li>Creating deeply nested derived tables (three or four levels deep) when a CTE would be far more readable</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always give derived tables a meaningful alias that describes what they represent, like <code>city_summary</code> or <code>monthly_totals</code>.</li>
      <li>If you find yourself nesting two or more derived tables inside each other, switch to a CTE. The logic becomes much easier to follow.</li>
      <li>Include only the columns you need in the inner SELECT. There is no point dragging in extra columns you will not use.</li>
      <li>Test the inner query independently to confirm it produces the right grouped result before adding the outer layer.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, derived tables are used to first compute revenue per restaurant per day, then filter for restaurants above a threshold in the outer query. At Myntra, analysts compute category-level average prices in an inner query and then join that derived table with the products table to tag each product with its category rank. At Ola, trip summary data is aggregated at the driver level in a derived table, then filtered for drivers with specific performance metrics. The pattern is: aggregate first, then use the result as a clean input for further filtering or joining.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Derived Table Flow:

Original Table (orders)
        |
        v
[ Inner Query: GROUP BY city, AVG(amount) ]
        |
        v
Derived Table (city_summary):
  city      | avg_amount
  ----------|----------
  Mumbai    | 576.67
  Delhi     | 683.33
  Bengaluru | 365.00
        |
        v
[ Outer Query: WHERE avg_amount &gt; 500 ]
        |
        v
Final Result:
  city    | avg_amount
  --------|----------
  Mumbai  | 576.67
  Delhi   | 683.33

Note: The derived table exists only in memory during query execution.
      It is never written to disk as a permanent table.</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Make sure you can answer these:</p>
    <ul>
      <li>Why can you not use WHERE to filter on an aggregated column directly?</li>
      <li>What is a derived table and how does it differ from a real table?</li>
      <li>Why does a subquery in FROM require an alias?</li>
      <li>When would you use a derived table vs a HAVING clause?</li>
      <li>What is the main reason to switch from nested derived tables to a CTE?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query using a subquery in FROM to find all cities at Swiggy where the total order amount (SUM) exceeds 1500.</li>
    </ol>
    <ol>
      <li>Write a query to find which cuisine type has the highest average order amount. Use a derived table and ORDER BY with LIMIT.</li>
    </ol>
    <ol>
      <li>Write a query that finds customers who have placed more than one order. Use a derived table that counts orders per customer, then filter in the outer query.</li>
    </ol>
    <ol>
      <li>Write a query that computes average amount per city in an inner query, then joins that derived table to the original <code>orders</code> table to show each order alongside its city average.</li>
    </ol>
    <ol>
      <li>Write a query that finds the top 2 cities by total order volume (number of orders). Use a derived table, ORDER BY, and LIMIT.</li>
    </ol>
    <ol>
      <li>Explain why you cannot write: <code>SELECT city, AVG(amount) AS avg_amt FROM orders GROUP BY city WHERE avg_amt > 500</code>. What is the correct way to achieve the same result?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Subqueries in FROM look unusual the first time you see them. Putting a whole SELECT statement where a table name should go feels strange. But once you understand that a derived table is just the result of a query treated as a temporary table, it starts to feel natural. Think of it as: compute first, then query that computation. That mental model will serve you well.</p>
  `,
  'mod8-t4': `
    <h1>Scalar Subquery in SELECT: Adding a Calculated Value to Every Row</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Kabir works at Zomato and his manager asks him to produce a report: "For every order, show the order details along with how many total orders that customer has placed with us."</p>
    <p>Kabir thinks about this. He has an <code>orders</code> table. For each row, he needs to count how many rows exist in that same table for the same customer_id. The count is different for each customer. It is not a single global number. He needs a value calculated per row, driven by data in that row.</p>
    <p>He could do this with a JOIN and GROUP BY. But there is a more direct way: place a SELECT statement inside the SELECT list itself. For each row the outer query produces, the inner SELECT runs and computes the customer's order count. That is a scalar subquery in SELECT.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Sometimes you want to add a computed column to your result set, where the computation depends on data related to each row. Common examples at work:</p>
    <ul>
      <li>Each order alongside the total order count for that customer</li>
      <li>Each product alongside the average price in its category</li>
      <li>Each employee alongside the headcount of their department</li>
      <li>Each transaction alongside the total spend of that user this month</li>
    </ul>
    <p>These are "compare this row to something related to it" questions. A scalar subquery in SELECT is one clean way to answer them.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>SQL was built around the idea that a SELECT list can contain not just column references but also expressions. A subquery is just a more complex expression. Allowing a subquery in the SELECT list lets you compute derived values row by row without requiring a separate aggregation step or a complex JOIN. It is a natural extension of SQL's design.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you are printing order reports at Zomato. For each order slip, you want to stamp it with the customer's total order history. You cannot compute one global total and print the same number everywhere. Each slip needs a different number depending on which customer placed that order.</p>
    <p>A scalar subquery in SELECT does exactly this: it runs a mini-query for each row in the outer result, computing a fresh value based on data from that row.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>SELECT
    order_id,
    customer_id,
    amount,
    (SELECT COUNT(*) FROM orders o2 WHERE o2.customer_id = o1.customer_id) AS total_orders
FROM orders o1;

For each row in o1:
  Row 1: customer_id = 1  --&gt;  inner query counts orders for customer 1  --&gt;  2
  Row 2: customer_id = 2  --&gt;  inner query counts orders for customer 2  --&gt;  3
  Row 3: customer_id = 1  --&gt;  inner query counts orders for customer 1  --&gt;  2
  ...and so on, one execution per outer row</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>A scalar subquery must return exactly one row and one column. If it returns more than one row, SQL throws a runtime error. If it returns no rows, SQL returns NULL for that column in that row.</p>
    <p>Because the subquery runs once for every row in the outer query, it is technically a type of correlated subquery. It references a column from the outer query (like <code>o1.customer_id</code>) to tailor its computation to each row.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic syntax:</p>
    <pre><code class="language-sql">SELECT
    column1,
    column2,
    (SELECT aggregate_function(col) FROM another_table WHERE condition) AS computed_column
FROM main_table;</code></pre>
    <p>The subquery is placed inside the SELECT list, wrapped in parentheses, and given an alias with AS.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>(SELECT COUNT(*) ...)</code></td><td>Inner query computing a single value</td><td>Counts orders for a specific customer</td></tr>
      <tr><td><code>WHERE o2.customer_id = o1.customer_id</code></td><td>Ties the inner query to the current outer row</td><td>Matches the current row's customer</td></tr>
      <tr><td><code>AS total_orders</code></td><td>Names the computed column in the output</td><td>Shows as a column named <code>total_orders</code></td></tr>
      <tr><td>Alias <code>o1</code>, <code>o2</code></td><td>Distinguishes the outer and inner references to the same table</td><td><code>o1</code> is outer, <code>o2</code> is inner</td></tr>
      <tr><td>Returns NULL</td><td>What happens when inner query finds no matching rows</td><td>Customer with no orders returns NULL</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Tables</strong></p>
    <p><code>orders</code> table at Zomato:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>city</th><th>amount</th></tr>
      <tr><td>401</td><td>5</td><td>Mumbai</td><td>480</td></tr>
      <tr><td>402</td><td>6</td><td>Delhi</td><td>920</td></tr>
      <tr><td>403</td><td>5</td><td>Mumbai</td><td>360</td></tr>
      <tr><td>404</td><td>7</td><td>Bengaluru</td><td>710</td></tr>
      <tr><td>405</td><td>6</td><td>Delhi</td><td>1100</td></tr>
      <tr><td>406</td><td>5</td><td>Mumbai</td><td>590</td></tr>
    </table>
    <p><code>products</code> table at Flipkart:</p>
    <table>
      <tr><th>product_id</th><th>name</th><th>category</th><th>price</th></tr>
      <tr><td>1</td><td>Phone A</td><td>Electronics</td><td>15000</td></tr>
      <tr><td>2</td><td>Phone B</td><td>Electronics</td><td>22000</td></tr>
      <tr><td>3</td><td>T-Shirt X</td><td>Clothing</td><td>499</td></tr>
      <tr><td>4</td><td>Jeans Y</td><td>Clothing</td><td>1299</td></tr>
      <tr><td>5</td><td>Laptop Z</td><td>Electronics</td><td>55000</td></tr>
      <tr><td>6</td><td>Kurta W</td><td>Clothing</td><td>799</td></tr>
    </table>
    <hr>
    <h3>Example 1: Show each order with the customer's total order count</h3>
    <p>Business question: For every order placed, how many total orders has that customer made?</p>
    <pre><code class="language-sql">SELECT
    o1.order_id,
    o1.customer_id,
    o1.amount,
    (SELECT COUNT(*) FROM orders o2 WHERE o2.customer_id = o1.customer_id) AS total_orders_by_customer
FROM orders o1;</code></pre>
    <p>For order 401 (customer 5), the inner query counts 3 orders for customer 5. For order 402 (customer 6), the inner query counts 2 orders for customer 6. For order 404 (customer 7), the inner query counts 1 order for customer 7. Each row now shows the customer's lifetime order count alongside the order details.</p>
    <hr>
    <h3>Example 2: Show each order with the customer's total spending</h3>
    <p>Business question: For every order, how much has that customer spent in total across all their orders?</p>
    <pre><code class="language-sql">SELECT
    o1.order_id,
    o1.customer_id,
    o1.amount,
    (SELECT SUM(o2.amount) FROM orders o2 WHERE o2.customer_id = o1.customer_id) AS customer_total_spend
FROM orders o1;</code></pre>
    <p>Customer 5 appears in three rows. Each time, the inner query sums 480 + 360 + 590 = 1430 and returns 1430 for all three of customer 5's rows. This is a useful pattern for loyalty analysis reports.</p>
    <hr>
    <h3>Example 3: Show each product with the average price in its category</h3>
    <p>Business question: For each product at Flipkart, what is the average price of all products in the same category?</p>
    <pre><code class="language-sql">SELECT
    p1.product_id,
    p1.name,
    p1.category,
    p1.price,
    (SELECT AVG(p2.price) FROM products p2 WHERE p2.category = p1.category) AS category_avg_price
FROM products p1;</code></pre>
    <p>For Phone A (Electronics), the inner query averages prices of all Electronics: (15000 + 22000 + 55000) / 3 = 30666.67. For T-Shirt X (Clothing), the inner query averages Clothing: (499 + 1299 + 799) / 3 = 865.67. Each product now shows its own price alongside the category average, which makes it easy to see which products are above or below average.</p>
    <hr>
    <h3>Example 4: What happens when the inner query returns more than one row</h3>
    <p>Business question: This example shows the error case.</p>
    <pre><code class="language-sql">-- This will throw an error because the subquery returns multiple rows
SELECT
    order_id,
    (SELECT amount FROM orders WHERE city = 'Mumbai') AS mumbai_amount
FROM orders;</code></pre>
    <p>There are three Mumbai orders (401, 403, 406). The subquery returns three rows, but a scalar subquery is only allowed to return one. SQL will throw: "Subquery returns more than 1 row." The fix is to aggregate: <code>(SELECT AVG(amount) FROM orders WHERE city = 'Mumbai')</code>.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>The subquery returns more than one row.</strong> This is the most common error. If your subquery has any chance of returning multiple rows, you must add an aggregation (COUNT, SUM, AVG, MAX, MIN) or a LIMIT 1 to ensure exactly one row comes back.</p>
    <p><strong>Performance with large tables.</strong> A scalar subquery in SELECT runs once per output row. If your outer query returns 100,000 rows, the inner query runs 100,000 times. This is often fine for small datasets, but on large tables it can be significantly slower than rewriting the query with a JOIN or a window function. Always check query performance in production.</p>
    <p><strong>NULL values.</strong> If the inner query finds no matching rows, it returns NULL. Make sure your reporting handles NULLs appropriately, especially if you plan to do arithmetic with the computed column.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Writing a subquery in SELECT that returns a list of values instead of one value</li>
      <li>Forgetting to alias the tables (o1, o2) when the subquery references the same table as the outer query, causing ambiguous column references</li>
      <li>Using scalar subqueries on large tables without realizing they run once per row, causing slow reports</li>
      <li>Not giving the computed column an alias, which results in a confusing column name in the output</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Always alias your scalar subquery column with a descriptive name using AS.</li>
      <li>When the outer and inner queries reference the same table, always use table aliases to distinguish them.</li>
      <li>For large tables, consider rewriting scalar subqueries as JOINs with GROUP BY or as window functions. They are faster.</li>
      <li>Test the inner query independently with a hardcoded value before embedding it. Confirm it returns exactly one row.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Zomato, scalar subqueries in SELECT are used to annotate each order with the customer's lifetime order count for churn analysis dashboards. At Amazon India, product listing pages are built from queries that show each item alongside the count of reviews, computed as a scalar subquery. At Byju's, course performance reports show each student's quiz score alongside the class average for that quiz, computed per row using a scalar subquery. At PhonePe, transaction logs show each entry alongside the user's total transaction count for fraud pattern detection.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Scalar Subquery in SELECT: How It Flows

Outer Query produces Row 1: order_id=401, customer_id=5
    |
    +--&gt; Scalar Subquery runs: SELECT COUNT(*) FROM orders WHERE customer_id=5
    |    Returns: 3
    |
Output Row 1: 401 | 5 | 480 | 3

Outer Query produces Row 2: order_id=402, customer_id=6
    |
    +--&gt; Scalar Subquery runs: SELECT COUNT(*) FROM orders WHERE customer_id=6
    |    Returns: 2
    |
Output Row 2: 402 | 6 | 920 | 2

... repeats for every row in the outer query

Key constraint: inner query MUST return exactly 1 row and 1 column.
               More than 1 row = runtime error.
               0 rows = NULL in that column.</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Check that you can answer these:</p>
    <ul>
      <li>What makes a subquery "scalar"?</li>
      <li>What error do you get if the scalar subquery returns more than one row?</li>
      <li>Why can scalar subqueries be slow on large tables, and what are the alternatives?</li>
      <li>What value does SQL return in the output column if the scalar subquery finds no matching rows?</li>
      <li>Why do you need table aliases (o1, o2) when the subquery and outer query reference the same table?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query that shows each order from the <code>orders</code> table along with the maximum amount ever ordered by that same customer.</li>
    </ol>
    <ol>
      <li>Write a query that shows each product from the <code>products</code> table along with the total number of products in the same category.</li>
    </ol>
    <ol>
      <li>Write a query that shows each order from the <code>orders</code> table along with the city-level average amount for that order's city.</li>
    </ol>
    <ol>
      <li>A scalar subquery returns NULL for some rows. Write a query that replaces those NULLs with 0 using COALESCE.</li>
    </ol>
    <ol>
      <li>Write a query that shows each customer_id from the <code>orders</code> table along with the total amount they have spent. Use a scalar subquery in SELECT, not a GROUP BY.</li>
    </ol>
    <ol>
      <li>Explain why the following query would fail and how to fix it: <code>SELECT order_id, (SELECT city FROM orders) AS city FROM orders</code>.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Scalar subqueries in SELECT are one of the more elegant SQL patterns. They let you annotate every row with a computed value that relates specifically to that row. The constraint is simple: one row, one column. Respect that constraint, watch out for performance on large tables, and this tool will be a clean addition to your query writing toolkit.</p>
  `,
  'mod8-t5': `
    <h1>Correlated Subqueries: When the Inner Query Depends on the Outer Query</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Rohit is a data analyst at Swiggy. His manager asks him: "For each customer, find their most recent order." Not the most recent order overall, but the most recent one for each individual customer.</p>
    <p>Rohit stares at the problem. He cannot just write <code>WHERE order_date = MAX(order_date)</code> because that would give him the most recent order across all customers, not per customer. He cannot use a simple subquery that runs once, because the answer is different for every customer.</p>
    <p>He needs a subquery that, for each customer row in the outer query, goes back into the orders table and finds the maximum date specifically for that customer. The inner query needs to know which customer the outer query is currently looking at. That is a correlated subquery, and it is one of the most powerful patterns in SQL.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Some questions in data work require comparing each row against a subset of data that is specific to that row:</p>
    <ul>
      <li>Find each customer's most recent order</li>
      <li>Find each employee's salary relative to their own department's average</li>
      <li>Find orders that are the largest order for their respective city</li>
      <li>Find products that are priced above the average for their own category</li>
    </ul>
    <p>In all these cases, the comparison value is not global. It changes based on which row you are currently processing. A regular subquery runs once and gives you a global value. A correlated subquery runs once per row and gives you a row-specific value.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>Regular subqueries are independent. They run, produce a result, and that result is reused for every row in the outer query. But some problems require a fresh computation for each row. SQL designers allowed inner queries to reference columns from the outer query to make this possible. This small extension, letting the inner query see the current outer row, unlocks a whole class of row-by-row analysis that would otherwise require complex joins or application-level loops.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you are reviewing employee salary files. For each employee, you want to know if they earn more than the average salary in their department. You cannot just compute the company-wide average once. You need the average for their specific department.</p>
    <p>So for each employee, you step back, look up all salaries in their department, compute the average for just that department, and compare. Then you move to the next employee and repeat. A correlated subquery does exactly this: for each row in the outer query, it runs the inner query with that row's values as inputs.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>Regular Subquery: runs ONCE
  SELECT * FROM orders
  WHERE amount &gt; (SELECT AVG(amount) FROM orders)
  --&gt; Inner query runs once, returns 600
  --&gt; Outer query uses 600 for every row check

Correlated Subquery: runs ONCE PER OUTER ROW
  SELECT * FROM orders o1
  WHERE amount &gt; (SELECT AVG(amount) FROM orders o2 WHERE o2.city = o1.city)
  --&gt; Row 1: o1.city = 'Mumbai'  --&gt; inner runs, returns avg for Mumbai
  --&gt; Row 2: o1.city = 'Delhi'   --&gt; inner runs, returns avg for Delhi
  --&gt; Row 3: o1.city = 'Mumbai'  --&gt; inner runs, returns avg for Mumbai again</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>A correlated subquery contains a reference to a column from the outer query. Because of this reference, the inner query cannot be evaluated independently. It must be re-evaluated for every row the outer query processes.</p>
    <p>The execution order is:</p>
    <ol>
      <li>Outer query fetches a row</li>
      <li>Inner query runs using values from that row</li>
      <li>Inner query returns a result</li>
      <li>Outer query uses that result to evaluate the condition for this row</li>
      <li>Outer query moves to the next row and repeats</li>
    </ol>
    <p>This is powerful but slower than a regular subquery. If the outer query has 50,000 rows and the inner query scans a table with 50,000 rows, the total work is 50,000 x 50,000 operations. Always check performance with EXPLAIN.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Classic example: find each customer's most recent order.</p>
    <pre><code class="language-sql">SELECT o1.order_id, o1.customer_id, o1.order_date, o1.amount
FROM orders o1
WHERE o1.order_date = (
    SELECT MAX(o2.order_date)
    FROM orders o2
    WHERE o2.customer_id = o1.customer_id
);</code></pre>
    <p>Here <code>o2.customer_id = o1.customer_id</code> is the correlation. The inner query references <code>o1.customer_id</code> from the outer query. Without that reference, the inner query would just return the global maximum date for everyone.</p>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>o1</code></td><td>Alias for the outer query's table</td><td><code>FROM orders o1</code></td></tr>
      <tr><td><code>o2</code></td><td>Alias for the inner query's table (same physical table)</td><td><code>FROM orders o2</code></td></tr>
      <tr><td><code>o2.customer_id = o1.customer_id</code></td><td>Correlation: ties inner query to current outer row</td><td>Filters inner query to the current customer</td></tr>
      <tr><td><code>SELECT MAX(o2.order_date)</code></td><td>Computes the value specific to the current row</td><td>Returns most recent date for that customer</td></tr>
      <tr><td>Runs once per row</td><td>The inner query executes fresh for each outer row</td><td>Produces different results for different customers</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Tables at Swiggy</strong></p>
    <p><code>orders</code> table:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th><th>order_date</th></tr>
      <tr><td>501</td><td>20</td><td>450</td><td>2024-01-03</td></tr>
      <tr><td>502</td><td>21</td><td>800</td><td>2024-01-05</td></tr>
      <tr><td>503</td><td>20</td><td>620</td><td>2024-01-08</td></tr>
      <tr><td>504</td><td>22</td><td>310</td><td>2024-01-10</td></tr>
      <tr><td>505</td><td>21</td><td>950</td><td>2024-01-12</td></tr>
      <tr><td>506</td><td>20</td><td>280</td><td>2024-01-15</td></tr>
    </table>
    <p><code>employees</code> table (generic company):</p>
    <table>
      <tr><th>employee_id</th><th>name</th><th>department</th><th>salary</th></tr>
      <tr><td>1</td><td>Aditya</td><td>Engineering</td><td>85000</td></tr>
      <tr><td>2</td><td>Shreya</td><td>Engineering</td><td>92000</td></tr>
      <tr><td>3</td><td>Manoj</td><td>Marketing</td><td>60000</td></tr>
      <tr><td>4</td><td>Priya</td><td>Marketing</td><td>72000</td></tr>
      <tr><td>5</td><td>Tarun</td><td>Engineering</td><td>78000</td></tr>
      <tr><td>6</td><td>Kavita</td><td>Marketing</td><td>65000</td></tr>
    </table>
    <hr>
    <h3>Example 1: Find each customer's most recent order</h3>
    <p>Business question: For each customer, which is their latest order on the platform?</p>
    <pre><code class="language-sql">SELECT o1.order_id, o1.customer_id, o1.order_date, o1.amount
FROM orders o1
WHERE o1.order_date = (
    SELECT MAX(o2.order_date)
    FROM orders o2
    WHERE o2.customer_id = o1.customer_id
);</code></pre>
    <p>For customer 20, the inner query finds MAX(order_date) = 2024-01-15, so order 506 is returned. For customer 21, MAX is 2024-01-12, so order 505 is returned. For customer 22, MAX is 2024-01-10, so order 504 is returned. Result has three rows, one per customer.</p>
    <hr>
    <h3>Example 2: Find employees earning more than their department's average</h3>
    <p>Business question: Which employees are paid above the average salary in their own department?</p>
    <pre><code class="language-sql">SELECT e1.name, e1.department, e1.salary
FROM employees e1
WHERE e1.salary &gt; (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);</code></pre>
    <p>For Engineering, the department average is (85000 + 92000 + 78000) / 3 = 85000. Shreya (92000) is above average. Aditya (85000) is equal, not above. Tarun (78000) is below. For Marketing, the average is (60000 + 72000 + 65000) / 3 = 65666.67. Priya (72000) is above. Result: Shreya and Priya.</p>
    <hr>
    <h3>Example 3: Find orders where the customer spent more than their own average</h3>
    <p>Business question: Which specific orders are above that customer's personal average order value?</p>
    <pre><code class="language-sql">SELECT o1.order_id, o1.customer_id, o1.amount
FROM orders o1
WHERE o1.amount &gt; (
    SELECT AVG(o2.amount)
    FROM orders o2
    WHERE o2.customer_id = o1.customer_id
);</code></pre>
    <p>Customer 20 has orders 450, 620, 280. Their average is 450. Orders above 450: order 503 (620). Customer 21 has 800 and 950. Average is 875. Order 505 (950) is above. Result includes those qualifying orders.</p>
    <hr>
    <h3>Example 4: Find customers who have placed more than 2 orders (using correlated approach)</h3>
    <p>Business question: Which customers are active with more than 2 orders?</p>
    <pre><code class="language-sql">SELECT DISTINCT o1.customer_id
FROM orders o1
WHERE (
    SELECT COUNT(*)
    FROM orders o2
    WHERE o2.customer_id = o1.customer_id
) &gt; 2;</code></pre>
    <p>For customer 20, the inner query counts 3 orders. 3 > 2 is true, so customer 20 is included. For customers 21 and 22, counts are 2 and 1. They do not qualify. Result: customer 20.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Performance on large tables.</strong> Correlated subqueries run once per outer row. On a table with millions of rows, this means millions of inner query executions. This is the most important thing to watch for. In production, always run EXPLAIN to see the query execution plan.</p>
    <p><strong>Confusing correlated and regular subqueries.</strong> If your inner query does not reference anything from the outer query, it is a regular subquery. If it does, it is correlated. The presence of an outer table alias reference inside the inner WHERE is the tell.</p>
    <p><strong>Getting the aliases wrong.</strong> When the inner and outer query reference the same table, you must use different aliases. Without aliases, SQL cannot distinguish which instance of the table you mean.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Forgetting to add different table aliases when the inner and outer query use the same table</li>
      <li>Writing a correlated subquery when a regular subquery would do, adding unnecessary per-row computation</li>
      <li>Not indexing the columns used in the correlation condition, which makes performance much worse</li>
      <li>Using correlated subqueries in SELECT on large result sets without considering window functions as a faster alternative</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use correlated subqueries when the logic is clearest expressed this way, but always benchmark against the JOIN equivalent on real data.</li>
      <li>Ensure that the columns referenced in the correlation condition are indexed. This is the single biggest performance lever.</li>
      <li>Consider rewriting as a window function (RANK, MAX OVER PARTITION BY) for large datasets where per-row performance matters.</li>
      <li>Document why you used a correlated subquery in a comment, especially in team code where other analysts may not immediately recognize the pattern.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, correlated subqueries are used to find each restaurant's best-performing day by comparing daily revenue to each restaurant's own average. At Flipkart, they identify each product's most recent price update. At IRCTC, they find which booking is the most recent per user for session analysis. At Paytm, they detect whether a transaction amount exceeds a user's personal average, which is useful for fraud flagging. The pattern is used wherever "compare this to its own group's statistic" is the question being asked.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>Correlated vs Regular Subquery: Execution Model

Regular Subquery:
  Outer Query (N rows)
       |
       +-- Inner Query runs ONCE
       |   Returns: 600
       |
       +-- All N rows compared against 600

Correlated Subquery:
  Outer Query Row 1  --&gt;  Inner Query runs (for customer 20)  --&gt;  Returns 450
  Outer Query Row 2  --&gt;  Inner Query runs (for customer 21)  --&gt;  Returns 875
  Outer Query Row 3  --&gt;  Inner Query runs (for customer 20)  --&gt;  Returns 450
  ...
  Outer Query Row N  --&gt;  Inner Query runs (for this row)     --&gt;  Returns X

  Total inner query executions = N (one per outer row)
  On large tables, this can be millions of executions.
  Window functions are often faster for these use cases.</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Answer these before moving on:</p>
    <ul>
      <li>What makes a subquery "correlated" rather than regular?</li>
      <li>How many times does a correlated subquery execute relative to the outer query?</li>
      <li>What is the performance risk of correlated subqueries on large tables?</li>
      <li>How do you rewrite a correlated subquery for finding the max-per-group as a window function (conceptually)?</li>
      <li>Why do you need two different aliases when the inner and outer query use the same table?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a correlated subquery to find each department's highest-paid employee from the <code>employees</code> table.</li>
    </ol>
    <ol>
      <li>Write a correlated subquery to find all orders where the amount is greater than the average amount for that order's city.</li>
    </ol>
    <ol>
      <li>Write a correlated subquery to find customers who have placed at least 2 orders in the <code>orders</code> table.</li>
    </ol>
    <ol>
      <li>Write a correlated subquery to find each employee who earns less than the average salary in their department.</li>
    </ol>
    <ol>
      <li>Write a correlated subquery to find the second most recent order for each customer. (Hint: find orders where there is exactly one order newer than it for that customer.)</li>
    </ol>
    <ol>
      <li>Explain the performance difference between: <code>WHERE amount > (SELECT AVG(amount) FROM orders)</code> and <code>WHERE amount > (SELECT AVG(o2.amount) FROM orders o2 WHERE o2.customer_id = o1.customer_id)</code>. Which one runs the inner query more times and why?</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>Correlated subqueries are the point where SQL starts feeling genuinely powerful. The ability to ask "compared to the rest of its own group" questions is crucial for real analytics work. Just remember: with power comes responsibility. Always check performance before deploying correlated subqueries on large production tables.</p>
  `,
  'mod8-t6': `
    <h1>EXISTS and NOT EXISTS: Check Whether a Subquery Returns Any Rows</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Priyanka is an analyst at Flipkart. Her manager says: "Get me a list of all customers who have placed at least one order in the last 30 days."</p>
    <p>Priyanka could use a JOIN. She could use IN with a subquery. But her manager then adds: "The orders table has 80 million rows. The last query someone wrote was timing out."</p>
    <p>A teammate suggests EXISTS. Priyanka has seen the keyword before but has not really used it. Her teammate explains: EXISTS does not pull any data from the subquery. It just checks whether any rows match. As soon as it finds the first match, it stops and returns TRUE. It never reads the whole table. That makes it efficient for exactly this kind of "does a matching row exist?" question.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>A common class of questions in analytics is not "what is the value?" but "does this thing exist?":</p>
    <ul>
      <li>Has this customer placed any order?</li>
      <li>Does this restaurant have any active listings?</li>
      <li>Is there at least one complaint logged for this user?</li>
      <li>Has this product been purchased at all this quarter?</li>
    </ul>
    <p>You do not need to retrieve data from the subquery. You just need a yes/no answer. EXISTS is built for this.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>IN with a subquery retrieves all matching values and checks membership against that list. For large tables, this means pulling potentially millions of values into memory before doing any comparison. EXISTS is fundamentally different: it runs the subquery and stops at the first row that satisfies the condition. No full scan, no list-building. SQL designers added EXISTS specifically to give analysts an efficient way to do existence checks without materializing the entire subquery result.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p>Imagine you want to know if any Flipkart orders exist for a specific customer. You could read the entire orders file, extract all customer IDs, and check if the customer's ID is in that list. That is IN.</p>
    <p>Or you could flip through the orders file until you find one order for that customer, then stop. You do not care about the rest. You just needed confirmation that at least one exists. That is EXISTS.</p>
    <p>For a file with 80 million rows, the difference between "read all of it" and "stop at the first match" is enormous.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>EXISTS:
  For each customer in outer query:
    Run subquery looking for any order with this customer_id
    First match found? --&gt; TRUE, include this customer, STOP scanning orders
    No match found? ----&gt; FALSE, exclude this customer

NOT EXISTS:
  For each customer in outer query:
    Run subquery looking for any order with this customer_id
    No match found? ----&gt; TRUE, include this customer (they have no orders)
    Any match found? --&gt; FALSE, exclude this customer (they have at least one order)</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p>EXISTS is used in a WHERE clause. It takes a subquery as its argument. The subquery is a correlated subquery that references the outer query's current row. EXISTS evaluates to TRUE if the subquery returns at least one row, and FALSE if it returns zero rows.</p>
    <p>The subquery inside EXISTS does not return data to the outer query. It is only evaluated for whether it produces any rows. Because of this, it is common practice to write <code>SELECT 1</code> inside the EXISTS subquery rather than selecting actual column data. The 1 is just a placeholder. The column list does not matter at all.</p>
    <p>NOT EXISTS is the inverse. It returns TRUE when the subquery returns zero rows, meaning no match was found.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Basic EXISTS syntax:</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);</code></pre>
    <p>NOT EXISTS syntax:</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>EXISTS (...)</code></td><td>Returns TRUE if subquery returns at least one row</td><td>Checks if customer has any orders</td></tr>
      <tr><td><code>NOT EXISTS (...)</code></td><td>Returns TRUE if subquery returns zero rows</td><td>Checks if customer has placed NO orders</td></tr>
      <tr><td><code>SELECT 1</code></td><td>Placeholder inside EXISTS subquery</td><td>The 1 has no significance; any value works</td></tr>
      <tr><td>Correlation condition</td><td>Ties the inner query to the current outer row</td><td><code>WHERE o.customer_id = c.customer_id</code></td></tr>
      <tr><td>Stops at first match</td><td>EXISTS short-circuits when the first row is found</td><td>Does not read the entire orders table per row</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Tables at Flipkart</strong></p>
    <p><code>customers</code> table:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Rohit</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Ananya</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Vijay</td><td>Bengaluru</td></tr>
      <tr><td>4</td><td>Deepa</td><td>Hyderabad</td></tr>
    </table>
    <p><code>orders</code> table:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th></tr>
      <tr><td>601</td><td>1</td><td>850</td></tr>
      <tr><td>602</td><td>2</td><td>1200</td></tr>
      <tr><td>603</td><td>1</td><td>460</td></tr>
      <tr><td>604</td><td>3</td><td>790</td></tr>
    </table>
    <hr>
    <h3>Example 1: Find customers who have placed at least one order</h3>
    <p>Business question: Which registered customers are active buyers?</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);</code></pre>
    <p>The subquery checks for each customer whether any order exists with their customer_id. Rohit (1) has orders 601 and 603, EXISTS is TRUE. Ananya (2) has order 602, TRUE. Vijay (3) has order 604, TRUE. Deepa (4) has no orders, EXISTS is FALSE, she is excluded. Result: Rohit, Ananya, Vijay.</p>
    <hr>
    <h3>Example 2: Find customers who have never placed an order</h3>
    <p>Business question: Which customers have registered but never bought anything?</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);</code></pre>
    <p>For Rohit, Ananya, and Vijay, the subquery returns rows, so NOT EXISTS is FALSE and they are excluded. For Deepa, the subquery returns no rows, NOT EXISTS is TRUE, and she is included. Result: Deepa. This kind of query is essential for re-engagement campaigns.</p>
    <hr>
    <h3>Example 3: Find customers who placed a high-value order</h3>
    <p>Business question: Which customers have placed at least one order above 1000?</p>
    <pre><code class="language-sql">SELECT c.customer_id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
    AND o.amount &gt; 1000
);</code></pre>
    <p>The subquery looks for orders where the customer_id matches AND the amount is above 1000. Only Ananya (order 602, 1200) qualifies. Rohit's orders are 850 and 460, neither above 1000. Result: Ananya.</p>
    <hr>
    <h3>Example 4: NOT EXISTS with NULLs -- why it is safer than NOT IN</h3>
    <p>Business question: This example contrasts EXISTS vs IN behavior with NULLs.</p>
    <p>Suppose the <code>orders</code> table has a row with a NULL customer_id:</p>
    <pre><code class="language-sql">-- If orders contains a row with customer_id = NULL:

-- NOT IN breaks -- returns 0 rows even if there are non-matching customers
SELECT name FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);
-- Returns 0 rows because NOT IN (1, 2, 3, NULL) is UNKNOWN for every value

-- NOT EXISTS works correctly
SELECT c.name FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);
-- Returns Deepa correctly, because the NULL row does not affect the EXISTS check</code></pre>
    <p>The EXISTS/NOT EXISTS approach checks each pair individually. A NULL in the orders table does not poison the result for every other row the way it does with NOT IN.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Writing SELECT <em> inside EXISTS.</strong> Many people write <code>SELECT </em> FROM orders WHERE ...</code> inside EXISTS. This works, but it is misleading because EXISTS does not use the column data at all. The convention is <code>SELECT 1</code> to make it clear that only row existence matters.</p>
    <p><strong>Forgetting the correlation condition.</strong> If you write <code>WHERE EXISTS (SELECT 1 FROM orders)</code> without correlating to the outer query, the subquery returns rows for every execution and EXISTS is always TRUE. Every customer would be returned regardless of whether they have orders. Always include the correlation.</p>
    <p><strong>Using EXISTS when you need the actual values.</strong> EXISTS only tells you whether rows exist. If you need the data from the related rows, you need a JOIN or IN.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Omitting the correlation condition, which makes EXISTS always TRUE or always FALSE</li>
      <li>Confusing NOT EXISTS with NOT IN and not understanding why their NULL behavior differs</li>
      <li>Using <code>SELECT column_name</code> inside EXISTS instead of <code>SELECT 1</code>, which works but signals a misunderstanding of how EXISTS works</li>
      <li>Applying EXISTS where a simple JOIN would be more readable and equally performant</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use <code>SELECT 1</code> inside EXISTS subqueries as a convention that signals intent.</li>
      <li>Always include a proper correlation condition.</li>
      <li>Prefer NOT EXISTS over NOT IN when there is any chance the subquery could return NULLs.</li>
      <li>Index the columns used in the correlation condition. EXISTS can scan very efficiently with proper indexes.</li>
      <li>Use EXISTS when you only need to know if a relationship exists, not when you need data from the related table.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Flipkart, NOT EXISTS is used to find customers in the CRM who have registered but never converted to buyers, targeting them for first-purchase offers. At Ola, EXISTS checks whether a driver has any completed trips before including them in performance reports. At BookMyShow, NOT EXISTS helps find events with no ticket sales, which are then flagged for promotional action. At Paytm, EXISTS is used to verify whether a UPI handle has any linked transactions before processing certain account operations. Existence checks are one of the most common real-world query patterns.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>EXISTS vs NOT EXISTS: Two Sides of the Same Pattern

customers table:       orders table:
customer_id  name      order_id  customer_id  amount
1            Rohit     601       1            850
2            Ananya    602       2            1200
3            Vijay     603       1            460
4            Deepa     604       3            790

EXISTS (has orders?):
  Rohit   --&gt; finds order 601 --&gt; stops --&gt; TRUE  --&gt; included
  Ananya  --&gt; finds order 602 --&gt; stops --&gt; TRUE  --&gt; included
  Vijay   --&gt; finds order 604 --&gt; stops --&gt; TRUE  --&gt; included
  Deepa   --&gt; no match found  --&gt;        FALSE --&gt; excluded
  Result: Rohit, Ananya, Vijay

NOT EXISTS (has NO orders?):
  Rohit   --&gt; finds order 601 --&gt; stops --&gt; FALSE --&gt; excluded
  Ananya  --&gt; finds order 602 --&gt; stops --&gt; FALSE --&gt; excluded
  Vijay   --&gt; finds order 604 --&gt; stops --&gt; FALSE --&gt; excluded
  Deepa   --&gt; no match found  --&gt;        TRUE  --&gt; included
  Result: Deepa

NULL Safety:
  NOT IN: one NULL in subquery result --&gt; 0 rows returned
  NOT EXISTS: NULLs in subquery do not affect the outer result</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Check that you can answer these:</p>
    <ul>
      <li>What does EXISTS return when the subquery finds at least one row?</li>
      <li>Why is <code>SELECT 1</code> written inside EXISTS subqueries?</li>
      <li>What happens if you forget the correlation condition in an EXISTS subquery?</li>
      <li>Why is NOT EXISTS safer than NOT IN when NULLs might be present?</li>
      <li>When would you use EXISTS and when would you use a JOIN instead?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write a query using EXISTS to find all customers who have placed at least one order above 500 rupees.</li>
    </ol>
    <ol>
      <li>Write a query using NOT EXISTS to find all customers who have no orders in the <code>orders</code> table at all.</li>
    </ol>
    <ol>
      <li>Write a query using NOT EXISTS to find all customers who have never placed an order in Mumbai.</li>
    </ol>
    <ol>
      <li>Explain in plain words what happens when you write <code>WHERE EXISTS (SELECT 1 FROM orders)</code> without a correlation condition. What does the query return?</li>
    </ol>
    <ol>
      <li>Write a query using EXISTS to find customers who have placed more than one order. (Hint: within the EXISTS subquery, use a GROUP BY or a self-join approach.)</li>
    </ol>
    <ol>
      <li>Compare the output of these two queries when the <code>orders</code> table has a row with customer_id = NULL: one using NOT IN and one using NOT EXISTS. Explain the difference in results.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>EXISTS and NOT EXISTS are clean, efficient, and NULL-safe tools for existence checks. Once you have seen the NULL problem with NOT IN, you will naturally reach for NOT EXISTS in situations where the subquery might contain NULLs. Remember: EXISTS does not care what the subquery returns. It only cares whether the subquery returns anything at all.</p>
  `,
  'mod8-t7': `
    <h1>IN vs EXISTS: Which One Should You Use and When?</h1>
    <hr>
    <h2>Let's Start Here</h2>
    <p>Siddharth is a senior analyst at Swiggy and is mentoring Isha, a fresher who just learned subqueries. Isha asks: "I want to find all customers who have placed at least one order. I can write this with IN or with EXISTS. They both seem to give the same result. Does it matter which one I use?"</p>
    <p>Siddharth pulls up a chair. "It depends," he says. "They look similar, but they work very differently under the hood. And there is one case where NOT IN will silently give you wrong results while NOT EXISTS works perfectly. That one gotcha alone is worth understanding."</p>
    <p>He opens a query window and starts walking her through it.</p>
    <hr>
    <h2>The Problem You'll Actually Face</h2>
    <p>Both IN and EXISTS can answer "which rows in table A have a match in table B?" But they do it differently, and the difference matters in three situations:</p>
    <ul>
      <li>When the subquery table is very large (performance matters)</li>
      <li>When the result set from the subquery is very small (performance matters the other way)</li>
      <li>When the subquery can return NULL values (correctness matters)</li>
    </ul>
    <p>Knowing which to use avoids both slow queries and incorrect results.</p>
    <hr>
    <h2>Why Was This Built in the First Place?</h2>
    <p>IN was designed for membership checks: is a value in a list? The list could be hardcoded or come from a subquery. EXISTS was designed specifically for existence checks: does any related row exist? The two serve slightly different conceptual purposes. Understanding those purposes tells you which to reach for.</p>
    <hr>
    <h2>Think of It This Way</h2>
    <p><strong>IN is like a guest list check.</strong> The bouncer prints the entire guest list first, then checks if your name is on it. If the list is short, it is fast. If the list has 10 million names, printing it takes a while.</p>
    <p><strong>EXISTS is like a doorbell check.</strong> The bouncer rings the apartment and asks, "Is there anyone here for this guest?" The moment someone answers, the check is done. The bouncer does not need to know how many people are inside. As soon as one person answers, the result is YES.</p>
    <p>For large inner tables, the doorbell approach is faster. For small inner tables, both are roughly equivalent.</p>
    <hr>
    <h2>A Simple Way to Picture It</h2>
    <pre><code>IN:
  SELECT name FROM customers
  WHERE customer_id IN (SELECT customer_id FROM orders);

  Step 1: Execute full subquery --&gt; collect all customer_ids from orders
          Result list: [1, 2, 1, 3, 2, 1, 3, ...]  (could be millions)
  Step 2: For each customer, check if their id is in that list

EXISTS:
  SELECT name FROM customers c
  WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);

  For each customer:
    Run subquery looking for first matching order
    Found? --&gt; TRUE, include customer, stop inner scan
    Not found? --&gt; FALSE, exclude customer</code></pre>
    <hr>
    <h2>How It Actually Works</h2>
    <p><strong>IN mechanism:</strong> SQL executes the subquery completely and builds a result set (a list). It then checks each row of the outer query against that list. If the subquery returns 5 million order rows, SQL builds a set of 5 million values. The outer query then does a lookup for each customer in that set.</p>
    <p><strong>EXISTS mechanism:</strong> SQL runs the subquery as a correlated subquery for each outer row. As soon as the subquery finds one row that satisfies the condition, it returns TRUE and stops. It never fully materializes the subquery result.</p>
    <p><strong>The performance crossover:</strong> For small subquery results (a few hundred or thousand rows), IN is often faster because the list lookup is very efficient. For large subquery tables (millions of rows), EXISTS is typically faster because it short-circuits at the first match.</p>
    <hr>
    <h2>Writing It in SQL</h2>
    <p>Using IN:</p>
    <pre><code class="language-sql">SELECT name
FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);</code></pre>
    <p>Using EXISTS (equivalent):</p>
    <pre><code class="language-sql">SELECT c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);</code></pre>
    <p>NOT IN:</p>
    <pre><code class="language-sql">SELECT name
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);</code></pre>
    <p>NOT EXISTS (equivalent):</p>
    <pre><code class="language-sql">SELECT c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);</code></pre>
    <hr>
    <h2>What Each Part Means</h2>
    <table>
      <tr><th>Part</th><th>What It Does</th><th>Example</th></tr>
      <tr><td><code>IN (subquery)</code></td><td>Checks if value is in the full result set</td><td><code>WHERE customer_id IN (SELECT customer_id FROM orders)</code></td></tr>
      <tr><td><code>EXISTS (subquery)</code></td><td>Checks if at least one row matches the condition</td><td><code>WHERE EXISTS (SELECT 1 FROM orders o WHERE ...)</code></td></tr>
      <tr><td>Subquery result with IN</td><td>Full list built and stored in memory</td><td>All customer_ids from orders collected</td></tr>
      <tr><td>Subquery result with EXISTS</td><td>Not materialized, only checked row by row</td><td>Stops at first match per outer row</td></tr>
      <tr><td>NOT IN + NULL</td><td>UNKNOWN for every comparison</td><td>Returns 0 rows silently</td></tr>
      <tr><td>NOT EXISTS + NULL</td><td>Unaffected by NULLs in related table</td><td>Returns correct rows</td></tr>
    </table>
    <hr>
    <h2>Let's Try It Out</h2>
    <p><strong>Sample Tables at Swiggy</strong></p>
    <p><code>customers</code> table:</p>
    <table>
      <tr><th>customer_id</th><th>name</th><th>city</th></tr>
      <tr><td>1</td><td>Aryan</td><td>Mumbai</td></tr>
      <tr><td>2</td><td>Divya</td><td>Delhi</td></tr>
      <tr><td>3</td><td>Suresh</td><td>Bengaluru</td></tr>
      <tr><td>4</td><td>Nisha</td><td>Hyderabad</td></tr>
    </table>
    <p><code>orders</code> table:</p>
    <table>
      <tr><th>order_id</th><th>customer_id</th><th>amount</th></tr>
      <tr><td>701</td><td>1</td><td>650</td></tr>
      <tr><td>702</td><td>2</td><td>890</td></tr>
      <tr><td>703</td><td>1</td><td>420</td></tr>
      <tr><td>704</td><td>3</td><td>310</td></tr>
    </table>
    <hr>
    <h3>Example 1: Customers with orders -- IN vs EXISTS comparison</h3>
    <p>Business question: Find all customers who have placed at least one order.</p>
    <p>Using IN:</p>
    <pre><code class="language-sql">SELECT name
FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);</code></pre>
    <p>Using EXISTS:</p>
    <pre><code class="language-sql">SELECT c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);</code></pre>
    <p>Both return Aryan, Divya, Suresh. Nisha has no orders and is excluded in both cases. The results are identical. The difference is in how they work internally.</p>
    <hr>
    <h3>Example 2: Customers with no orders -- NOT IN vs NOT EXISTS</h3>
    <p>Business question: Find all customers who have never placed an order.</p>
    <p>Using NOT IN:</p>
    <pre><code class="language-sql">SELECT name
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);</code></pre>
    <p>Using NOT EXISTS:</p>
    <pre><code class="language-sql">SELECT c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);</code></pre>
    <p>Both return Nisha. Results match here because there are no NULLs in the data.</p>
    <hr>
    <h3>Example 3: The NULL problem with NOT IN</h3>
    <p>Business question: This example demonstrates when NOT IN silently returns wrong results.</p>
    <p>Suppose we insert a row with a NULL customer_id into orders:</p>
    <pre><code class="language-sql">-- Imagine orders table has an extra row: (705, NULL, 500)

-- NOT IN now returns 0 rows:
SELECT name
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);
-- Returns: (empty result set)

-- NOT EXISTS still returns Nisha correctly:
SELECT c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);
-- Returns: Nisha</code></pre>
    <p>Why does NOT IN fail? The subquery returns (1, 2, 1, 3, NULL). SQL evaluates <code>customer_id NOT IN (1, 2, 1, 3, NULL)</code>. For any value X, <code>X != NULL</code> is UNKNOWN in SQL's three-valued logic. Since NOT IN requires the value to be "not equal to every item in the list," and one item is NULL (meaning the comparison is UNKNOWN), the entire expression evaluates to UNKNOWN for every customer. UNKNOWN is not TRUE, so no rows pass the filter. Zero rows returned.</p>
    <p>NOT EXISTS avoids this because it does not compare values directly against NULL. It checks per-row whether the correlated subquery returns any rows, and a NULL customer_id in orders does not create a matching row for any specific customer.</p>
    <hr>
    <h3>Example 4: Performance example -- large inner table</h3>
    <p>Business question: Show which pattern to prefer when inner table is large.</p>
    <p>For a conceptual understanding:</p>
    <pre><code class="language-sql">-- When orders has 50 million rows:

-- IN: reads all 50 million rows, builds list, then checks each customer
SELECT name FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);

-- EXISTS: for each of the 4 customers, scans orders until first match found
-- With an index on orders.customer_id, this finds the first match almost instantly
SELECT c.name FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);

-- EXISTS with an index is significantly faster for large inner tables</code></pre>
    <p>With a proper index on <code>orders.customer_id</code>, EXISTS does a near-instant index lookup for each customer instead of reading the full 50-million-row table.</p>
    <hr>
    <h2>Things That Trip People Up</h2>
    <p><strong>Assuming IN and NOT IN are always interchangeable with EXISTS and NOT EXISTS.</strong> They are equivalent when no NULLs exist. The moment NULLs appear in the subquery result, NOT IN behaves unexpectedly.</p>
    <p><strong>Not realizing this is a silent failure.</strong> NOT IN with a NULL subquery does not throw an error. It just returns zero rows. If your analyst instinct says "this should return some rows" and the result is empty, check for NULLs in the subquery.</p>
    <p><strong>Over-optimizing prematurely.</strong> On small tables, use whichever is clearer to read. Performance optimization matters for large production tables. Do not rewrite working readable code for a theoretical performance gain on a table with 500 rows.</p>
    <hr>
    <h2>Common Mistakes</h2>
    <ul>
      <li>Using NOT IN on a subquery that joins to a table with nullable foreign keys</li>
      <li>Assuming that IN is always faster than EXISTS or vice versa (it depends on table sizes)</li>
      <li>Writing EXISTS without the correlation condition (makes EXISTS always TRUE or always FALSE)</li>
      <li>Choosing NOT IN for "does not exist" queries without checking if NULLs are possible</li>
    </ul>
    <hr>
    <h2>Best Practices</h2>
    <ul>
      <li>Use IN for small, known value lists where NULLs are not a concern.</li>
      <li>Use EXISTS when checking for the presence of related rows in large tables.</li>
      <li>Always use NOT EXISTS instead of NOT IN when the subquery involves a nullable column.</li>
      <li>When in doubt, run both versions with EXPLAIN and compare the execution plans.</li>
      <li>Add a comment when you deliberately chose one over the other for performance or NULL-safety reasons.</li>
    </ul>
    <hr>
    <h2>How Companies Use This Every Day</h2>
    <p>At Swiggy, EXISTS is the standard for checking whether a restaurant has any active menu items before including it in search results. At Amazon India, NOT EXISTS is used to find products with no inventory entries rather than NOT IN, specifically because the inventory table has nullable SKU columns. At Paytm, IN is used for small fixed-category lookups (like checking transaction types against a short list), while EXISTS handles large-scale user activity checks. At Myntra, analysts were bitten by the NOT IN NULL bug early on and now have a team guideline: use NOT EXISTS for any "find records with no matching entry" query.</p>
    <hr>
    <h2>The Big Picture</h2>
    <pre><code>IN vs EXISTS: Side-by-Side Comparison

Feature               | IN                          | EXISTS
----------------------|-----------------------------|-------------------------------
How it works          | Builds full list, checks membership | Checks row by row, stops at first match
Subquery materialized | Yes, full result built        | No, evaluates until first match
Better for small inner| Yes, list lookup is fast      | Similar performance
Better for large inner| Slower (builds big list)      | Faster (stops early)
NULL handling (positive)| Works correctly             | Works correctly
NOT IN with NULL      | Silent failure (0 rows)       | NOT EXISTS works correctly
Correlation needed    | No                           | Yes (typically correlated)
SELECT list           | The column values matter      | SELECT 1 (values ignored)
Readability           | Natural for simple lookups    | Clearer for "existence" semantics

When to use IN:
  - Checking against a small fixed list: WHERE city IN ('Mumbai', 'Delhi')
  - Subquery returns a small result set
  - No NULLs in the subquery column

When to use EXISTS:
  - Large inner table (benefits from early exit)
  - Checking for the presence of related rows
  - Any NOT scenario where NULLs might be present
  - When you need NULL-safe behavior</code></pre>
    <hr>
    <h2>Before You Move On</h2>
    <p>Answer these before continuing:</p>
    <ul>
      <li>What is the fundamental difference in how IN and EXISTS work internally?</li>
      <li>When does NOT IN return zero rows even though you expect results?</li>
      <li>In what scenario is EXISTS likely to outperform IN on large tables?</li>
      <li>Why does NOT EXISTS handle NULLs correctly but NOT IN does not?</li>
      <li>When is IN perfectly fine to use and the EXISTS performance argument does not apply?</li>
    </ul>
    <hr>
    <h2>Practice Questions</h2>
    <ol>
      <li>Write both an IN version and an EXISTS version of a query that finds all customers at Swiggy who have placed at least one order over 700 rupees. Verify they return the same result.</li>
    </ol>
    <ol>
      <li>Write a NOT IN query to find customers with no orders. Then add a NULL row to the orders table conceptually. Explain what the NOT IN query now returns and why.</li>
    </ol>
    <ol>
      <li>Write a NOT EXISTS version of the same query from question 2 and explain why it still returns the correct result.</li>
    </ol>
    <ol>
      <li>Your colleague wrote: <code>WHERE product_id NOT IN (SELECT product_id FROM order_items)</code>. The <code>order_items</code> table has a nullable <code>product_id</code> column. What is the risk here? How would you rewrite it?</li>
    </ol>
    <ol>
      <li>You have a <code>customers</code> table with 1,000 rows and an <code>orders</code> table with 50 million rows. You want to find customers who have placed at least one order. Would you use IN or EXISTS and why?</li>
    </ol>
    <ol>
      <li>Write a query using IN that finds customers from the <code>customers</code> table who live in cities where at least one order has been placed. Then rewrite it using EXISTS.</li>
    </ol>
    <hr>
    <h2>Final Thoughts</h2>
    <p>IN and EXISTS are two ways to ask the same type of question, but with different internal behavior and one critical difference in NULL handling. For day-to-day work, the NULL safety of NOT EXISTS is reason enough to make it your default for "find rows with no match" queries. For performance-sensitive code on large tables, EXISTS with a properly indexed correlation condition is usually the better choice. Know both tools and know when each one fits.</p>
  `,

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
