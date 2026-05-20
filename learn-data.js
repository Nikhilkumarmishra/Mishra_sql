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
