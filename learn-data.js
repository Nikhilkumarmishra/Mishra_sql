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
