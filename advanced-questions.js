// ADVANCED TRACK — 51 questions, generated & validated in sql.js. ids offset 1000. Do not hand-edit.
const ADVANCED_QUESTIONS = [
{
  id:1000, num:"01", title:"First and Last Page of Each Session", difficulty:"Hard",
  tags:["JOIN","WINDOW FUNCTION","ROW_NUMBER","CTE"],
  desc:"<p>The <strong>events</strong> table logs every page a visitor hits during a session (<code>visit_id</code>), ordered by <code>sequence_number</code>. <strong>page_hierarchy</strong> maps <code>page_id</code> to a <code>page_name</code>.</p>\n<p>For each session, find the <strong>first page visited</strong> and the <strong>last page visited</strong>, along with their timestamps.</p>\n<p>Return: <code>visit_id</code>, <code>first_page</code>, <code>first_event_time</code>, <code>last_page</code>, <code>last_event_time</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"page_hierarchy":[{"col":"page_id","type":"INTEGER","note":"pk"},{"col":"page_name","type":"TEXT","note":""},{"col":"product_category","type":"TEXT","note":"nullable"},{"col":"product_id","type":"INTEGER","note":"nullable"}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["visit_id","first_page","first_event_time","last_page","last_event_time"],"rows":[["v001","Home Page","2020-01-15 10:00:00","Confirmation","2020-01-15 10:03:30"],["v002","Home Page","2020-01-16 09:00:00","Salmon","2020-01-16 09:00:40"]]},
  hint:"Use <strong>ROW_NUMBER() OVER(PARTITION BY visit_id ORDER BY sequence_number)</strong> ascending for the first page and descending for the last, then join both back to page_hierarchy.",
  testCases:[
    { name:"One row per session (6)", seed:null, check:(r)=>r.length===6 },
    { name:"Every session starts at Home Page", seed:null, check:(r)=>r.every(x=>x.first_page==="Home Page") },
    { name:"v002 goes Home Page -> Salmon", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v002");return x&&x.first_page==="Home Page"&&x.last_page==="Salmon";} },
    { name:"v001 ends at Confirmation", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v001");return x&&x.last_page==="Confirmation";} },
  ]
},
{
  id:1001, num:"02", title:"Distinct Product Pages per Session", difficulty:"Medium",
  tags:["JOIN","AGGREGATE FUNCTION","COUNT","GROUP BY"],
  desc:"<p>Join <strong>events</strong> to <strong>page_hierarchy</strong>. Pages that are not products have a NULL <code>product_category</code>.</p>\n<p>For each session, count the number of <strong>distinct products</strong> viewed. Ignore non-product pages (where <code>product_category IS NULL</code>).</p>\n<p>Return: <code>visit_id</code>, <code>unique_products_viewed</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"page_hierarchy":[{"col":"page_id","type":"INTEGER","note":"pk"},{"col":"page_name","type":"TEXT","note":""},{"col":"product_category","type":"TEXT","note":"nullable"},{"col":"product_id","type":"INTEGER","note":"nullable"}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["visit_id","unique_products_viewed"],"rows":[["v001",2],["v002",1],["v003",2]]},
  hint:"Filter <strong>product_category IS NOT NULL</strong>, then <strong>COUNT(DISTINCT product_id)</strong> grouped by visit_id.",
  testCases:[
    { name:"6 sessions returned", seed:null, check:(r)=>r.length===6 },
    { name:"v001 viewed 2 distinct products", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v001");return x&&Number(x.unique_products_viewed)===2;} },
    { name:"v002 viewed 1 distinct product", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v002");return x&&Number(x.unique_products_viewed)===1;} },
  ]
},
{
  id:1002, num:"03", title:"Sessions From Home Page to Salmon", difficulty:"Hard",
  tags:["JOIN","WINDOW FUNCTION","ROW_NUMBER","CTE"],
  desc:"<p>Identify sessions where the visitor <strong>started at the Home Page</strong> and <strong>ended at the Salmon</strong> product page.</p>\n<p>Return: <code>visit_id</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"page_hierarchy":[{"col":"page_id","type":"INTEGER","note":"pk"},{"col":"page_name","type":"TEXT","note":""},{"col":"product_category","type":"TEXT","note":"nullable"},{"col":"product_id","type":"INTEGER","note":"nullable"}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["visit_id"],"rows":[["v002"],["v003"]]},
  hint:"Rank events ascending and descending per session; keep sessions whose first page is 'Home Page' and last page is 'Salmon'.",
  testCases:[
    { name:"Exactly 2 sessions", seed:null, check:(r)=>r.length===2 },
    { name:"v002 included", seed:null, check:(r)=>r.some(x=>x.visit_id==="v002") },
    { name:"v003 included", seed:null, check:(r)=>r.some(x=>x.visit_id==="v003") },
    { name:"v001 (ends at Confirmation) excluded", seed:null, check:(r)=>!r.some(x=>x.visit_id==="v001") },
  ]
},
{
  id:1003, num:"04", title:"Top 2 Most Visited Pages", difficulty:"Hard",
  tags:["WINDOW FUNCTION","ROW_NUMBER","JOIN","GROUP BY"],
  desc:"<p>Find the <strong>top 2 most visited pages</strong> across all sessions (by number of events on each page).</p>\n<p>Return: <code>page_name</code>, <code>total_views</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"page_hierarchy":[{"col":"page_id","type":"INTEGER","note":"pk"},{"col":"page_name","type":"TEXT","note":""},{"col":"product_category","type":"TEXT","note":"nullable"},{"col":"product_id","type":"INTEGER","note":"nullable"}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["page_name","total_views"],"rows":[["Home Page",6],["Salmon",4]]},
  hint:"Count events per page, then use <strong>ROW_NUMBER() OVER(ORDER BY COUNT(*) DESC)</strong> and keep rank &lt;= 2.",
  testCases:[
    { name:"Exactly 2 rows", seed:null, check:(r)=>r.length===2 },
    { name:"Home Page is #1 with 6 views", seed:null, check:(r)=>{const x=r.find(y=>y.page_name==="Home Page");return x&&Number(x.total_views)===6;} },
    { name:"Salmon is in the top 2", seed:null, check:(r)=>r.some(x=>x.page_name==="Salmon") },
  ]
},
{
  id:1004, num:"05", title:"Average Time Spent on Each Page", difficulty:"Hard",
  tags:["WINDOW FUNCTION","LEAD","JOIN","DATE"],
  desc:"<p>For each page, calculate the <strong>average time spent</strong> in seconds. Time spent on a page = the difference between the current event and the <strong>next event</strong> in the same session.</p>\n<p>Ignore the last event of each session (it has no next event). Return: <code>page_name</code>, <code>avg_time_seconds</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"page_hierarchy":[{"col":"page_id","type":"INTEGER","note":"pk"},{"col":"page_name","type":"TEXT","note":""},{"col":"product_category","type":"TEXT","note":"nullable"},{"col":"product_id","type":"INTEGER","note":"nullable"}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["page_name","avg_time_seconds"],"rows":[["Salmon",20],["Tuna",90],["Lobster",60]]},
  hint:"Use <strong>LEAD(event_time) OVER(PARTITION BY visit_id ORDER BY sequence_number)</strong>, then average <code>(julianday(next)-julianday(current))*86400</code>.",
  testCases:[
    { name:"Tuna avg time = 90s", seed:null, check:(r)=>{const x=r.find(y=>y.page_name==="Tuna");return x&&Number(x.avg_time_seconds)===90;} },
    { name:"Lobster avg time = 60s", seed:null, check:(r)=>{const x=r.find(y=>y.page_name==="Lobster");return x&&Number(x.avg_time_seconds)===60;} },
    { name:"Salmon avg time = 20s", seed:null, check:(r)=>{const x=r.find(y=>y.page_name==="Salmon");return x&&Number(x.avg_time_seconds)===20;} },
  ]
},
{
  id:1005, num:"06", title:"Sessions Spanning Multiple Categories", difficulty:"Medium",
  tags:["JOIN","GROUP BY","HAVING","COUNT"],
  desc:"<p>List every <code>visit_id</code> where the visitor viewed <strong>2 or more different product categories</strong> in the same session.</p>\n<p>Return: <code>visit_id</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"page_hierarchy":[{"col":"page_id","type":"INTEGER","note":"pk"},{"col":"page_name","type":"TEXT","note":""},{"col":"product_category","type":"TEXT","note":"nullable"},{"col":"product_id","type":"INTEGER","note":"nullable"}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["visit_id"],"rows":[["v001"],["v003"],["v004"]]},
  hint:"Join to page_hierarchy, filter out NULL categories, group by visit_id and use <strong>HAVING COUNT(DISTINCT product_category) &gt;= 2</strong>.",
  testCases:[
    { name:"Exactly 3 sessions", seed:null, check:(r)=>r.length===3 },
    { name:"v001 included", seed:null, check:(r)=>r.some(x=>x.visit_id==="v001") },
    { name:"v002 (single category) excluded", seed:null, check:(r)=>!r.some(x=>x.visit_id==="v002") },
  ]
},
{
  id:1006, num:"07", title:"Total Page Views per Session", difficulty:"Medium",
  tags:["AGGREGATE FUNCTION","COUNT","GROUP BY","WHERE"],
  desc:"<p>The team wants to measure engagement per visit. Count the <strong>total number of page views</strong> for each session.</p>\n<p>Rules: only include page-view events (<code>event_type = 1</code>) and ignore rows where <code>page_id</code> is NULL.</p>\n<p>Return: <code>visit_id</code>, <code>page_view_count</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["visit_id","page_view_count"],"rows":[["v001",6],["v002",2],["v003",4]]},
  hint:"Filter <strong>event_type = 1 AND page_id IS NOT NULL</strong>, then <strong>COUNT(*)</strong> grouped by visit_id.",
  testCases:[
    { name:"6 sessions returned", seed:null, check:(r)=>r.length===6 },
    { name:"v001 has 6 page views", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v001");return x&&Number(x.page_view_count)===6;} },
    { name:"v002 has 2 page views", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v002");return x&&Number(x.page_view_count)===2;} },
  ]
},
{
  id:1007, num:"08", title:"Unique Pages Viewed per Session", difficulty:"Medium",
  tags:["AGGREGATE FUNCTION","COUNT","GROUP BY"],
  desc:"<p>Instead of total views, the product team wants <strong>content diversity</strong>: how many <strong>distinct pages</strong> each session touched.</p>\n<p>Rules: only <code>event_type = 1</code>, ignore NULL <code>page_id</code>. Return: <code>visit_id</code>, <code>unique_pages_viewed</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["visit_id","unique_pages_viewed"],"rows":[["v001",5],["v002",2],["v003",4]]},
  hint:"This needs <strong>COUNT(DISTINCT page_id)</strong>, not COUNT(*). v001 views a page twice, so its unique count is lower than its total.",
  testCases:[
    { name:"6 sessions returned", seed:null, check:(r)=>r.length===6 },
    { name:"v001 has 5 unique pages (not 6)", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v001");return x&&Number(x.unique_pages_viewed)===5;} },
    { name:"v003 has 4 unique pages", seed:null, check:(r)=>{const x=r.find(y=>y.visit_id==="v003");return x&&Number(x.unique_pages_viewed)===4;} },
  ]
},
{
  id:1008, num:"09", title:"Average Page Views per Visit per User", difficulty:"Hard",
  tags:["SUBQUERY","AGGREGATE FUNCTION","AVG","GROUP BY"],
  desc:"<p>Measure engagement consistency. For each user (<code>cookie_id</code>), compute the <strong>average number of page views per visit</strong>.</p>\n<p>Rules: only <code>event_type = 1</code>, ignore NULL <code>page_id</code>; a visit is a <code>visit_id</code>. Return: <code>cookie_id</code>, <code>avg_page_views_per_visit</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["cookie_id","avg_page_views_per_visit"],"rows":[["c1",4.5],["c2",2.5],["c3",4]]},
  hint:"First count page views per (cookie_id, visit_id) in a subquery, then take <strong>AVG</strong> of those counts per cookie_id.",
  testCases:[
    { name:"4 users returned", seed:null, check:(r)=>r.length===4 },
    { name:"c1 averages 4.5 views/visit", seed:null, check:(r)=>{const x=r.find(y=>y.cookie_id==="c1");return x&&Number(x.avg_page_views_per_visit)===4.5;} },
    { name:"c2 averages 2.5 views/visit", seed:null, check:(r)=>{const x=r.find(y=>y.cookie_id==="c2");return x&&Number(x.avg_page_views_per_visit)===2.5;} },
  ]
},
{
  id:1009, num:"10", title:"First Purchase Timestamp per User", difficulty:"Medium",
  tags:["JOIN","AGGREGATE FUNCTION","MIN","GROUP BY"],
  desc:"<p>Purchases are events with <code>event_type = 3</code>. Join <strong>users</strong> to <strong>events</strong> on <code>cookie_id</code>.</p>\n<p>Find <strong>when each user made their first purchase</strong>. Users with no purchase should not appear. Return: <code>user_id</code>, <code>first_purchase_time</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["user_id","first_purchase_time"],"rows":[[1,"2020-01-15 10:03:30"],[2,"2020-02-05 12:02:00"],[4,"2020-01-18 20:02:20"]]},
  hint:"Filter <strong>event_type = 3</strong>, then <strong>MIN(event_time)</strong> grouped by user_id.",
  testCases:[
    { name:"3 users purchased", seed:null, check:(r)=>r.length===3 },
    { name:"User 1 first purchase correct", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&x.first_purchase_time==="2020-01-15 10:03:30";} },
    { name:"User 3 (no purchase) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===3) },
  ]
},
{
  id:1010, num:"11", title:"User Purchase Timeline Summary", difficulty:"Medium",
  tags:["JOIN","AGGREGATE FUNCTION","GROUP BY"],
  desc:"<p>Build a timeline view of purchasing. For each user who has purchased (<code>event_type = 3</code>), return how many purchases they made and when they first and last purchased.</p>\n<p>Return: <code>user_id</code>, <code>total_purchases</code>, <code>first_purchase</code>, <code>last_purchase</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["user_id","total_purchases","first_purchase","last_purchase"],"rows":[[1,1,"2020-01-15 10:03:30","2020-01-15 10:03:30"]]},
  hint:"Group purchases by user_id; use <strong>COUNT(*)</strong>, <strong>MIN(event_time)</strong> and <strong>MAX(event_time)</strong>.",
  testCases:[
    { name:"3 users returned", seed:null, check:(r)=>r.length===3 },
    { name:"User 1 has 1 purchase", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.total_purchases)===1;} },
    { name:"first_purchase and last_purchase present", seed:null, check:(r)=>("first_purchase" in r[0])&&("last_purchase" in r[0]) },
  ]
},
{
  id:1011, num:"12", title:"Purchase Intensity per User", difficulty:"Hard",
  tags:["SUBQUERY","AGGREGATE FUNCTION","GROUP BY"],
  desc:"<p>Summarise buying behaviour at the user level. For each user, count how many visits contained a purchase, the total purchases, and the average purchases per purchasing visit.</p>\n<p>Purchases are <code>event_type = 3</code>. Return: <code>user_id</code>, <code>visits_with_purchase</code>, <code>total_purchases</code>, <code>avg_purchases_per_visit</code>.</p>",
  schema:{"events":[{"col":"visit_id","type":"TEXT","note":""},{"col":"cookie_id","type":"TEXT","note":""},{"col":"page_id","type":"INTEGER","note":"nullable"},{"col":"event_type","type":"INTEGER","note":"1=view,2=cart,3=purchase"},{"col":"sequence_number","type":"INTEGER","note":""},{"col":"event_time","type":"TIMESTAMP","note":""}],"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"\nCREATE TABLE page_hierarchy(page_id INTEGER, page_name TEXT, product_category TEXT, product_id INTEGER);\nINSERT INTO page_hierarchy VALUES\n(1,'Home Page',NULL,NULL),(2,'All Products',NULL,NULL),\n(3,'Salmon','Fish',1),(4,'Kingfish','Fish',2),(5,'Tuna','Fish',3),\n(6,'Russian Caviar','Luxury',4),(7,'Black Truffle','Luxury',5),\n(8,'Abalone','Shellfish',6),(9,'Lobster','Shellfish',7),(10,'Crab','Shellfish',8),(11,'Oyster','Shellfish',9),\n(12,'Checkout',NULL,NULL),(13,'Confirmation',NULL,NULL);\n\nCREATE TABLE users(user_id INTEGER, cookie_id TEXT, start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),  -- Wed\n(2,'c2','2020-01-02'),  -- Thu\n(3,'c3','2020-01-02'),  -- Thu (same-day as user 2 -> RANK tie)\n(4,'c4','2020-01-05'),  -- Sun (weekend)\n(5,'c5','2020-01-11'),  -- Sat (weekend, 6-day gap)\n(6,'c6','2020-02-01'),  -- Sat (new month, weekend, 21-day gap)\n(7,'c7','2020-02-03'),  -- Mon\n(8,'c8','2020-02-04');  -- Tue (consecutive day to user 7)\n\nCREATE TABLE events(visit_id TEXT, cookie_id TEXT, page_id INTEGER, event_type INTEGER, sequence_number INTEGER, event_time TEXT);\nINSERT INTO events VALUES\n-- v001 / c1 : Home -> ... -> Confirmation (purchase). 2 categories (Fish, Shellfish).\n-- Revisits 'All Products' (seq 5) so total views (6) > unique pages (4).\n('v001','c1',1,1,1,'2020-01-15 10:00:00'),('v001','c1',2,1,2,'2020-01-15 10:00:30'),\n('v001','c1',3,1,3,'2020-01-15 10:01:00'),('v001','c1',3,2,4,'2020-01-15 10:01:20'),\n('v001','c1',2,1,5,'2020-01-15 10:01:40'),\n('v001','c1',9,1,6,'2020-01-15 10:02:00'),('v001','c1',12,1,7,'2020-01-15 10:03:00'),\n('v001','c1',13,3,8,'2020-01-15 10:03:30'),\n-- v002 / c2 : Home -> Salmon (ends at Salmon)\n('v002','c2',1,1,1,'2020-01-16 09:00:00'),('v002','c2',3,1,2,'2020-01-16 09:00:40'),\n-- v003 / c3 : Home -> ... -> Salmon. 2 categories (Luxury, Fish)\n('v003','c3',1,1,1,'2020-01-17 14:00:00'),('v003','c3',2,1,2,'2020-01-17 14:00:30'),\n('v003','c3',6,1,3,'2020-01-17 14:01:10'),('v003','c3',3,1,4,'2020-01-17 14:02:00'),\n-- v004 / c1 : second visit, has a NULL page (ad impression). 2 categories (Fish, Shellfish)\n('v004','c1',1,1,1,'2020-01-20 08:00:00'),('v004','c1',NULL,4,2,'2020-01-20 08:00:10'),\n('v004','c1',5,1,3,'2020-01-20 08:01:00'),('v004','c1',9,1,4,'2020-01-20 08:02:30'),\n-- v005 / c4 : purchase. 1 category (Shellfish)\n('v005','c4',1,1,1,'2020-01-18 20:00:00'),('v005','c4',8,1,2,'2020-01-18 20:00:45'),\n('v005','c4',8,2,3,'2020-01-18 20:01:10'),('v005','c4',12,1,4,'2020-01-18 20:02:00'),\n('v005','c4',13,3,5,'2020-01-18 20:02:20'),\n-- v006 / c2 : second visit for user 2, purchase in Feb\n('v006','c2',1,1,1,'2020-02-05 12:00:00'),('v006','c2',7,1,2,'2020-02-05 12:00:50'),\n('v006','c2',12,1,3,'2020-02-05 12:01:30'),('v006','c2',13,3,4,'2020-02-05 12:02:00');\n",
  example:{"cols":["user_id","visits_with_purchase","total_purchases","avg_purchases_per_visit"],"rows":[[1,1,1,1]]},
  hint:"In a subquery, count purchases per (user_id, visit_id); then aggregate per user with COUNT, SUM and AVG.",
  testCases:[
    { name:"3 users returned", seed:null, check:(r)=>r.length===3 },
    { name:"User 1 total_purchases = 1", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.total_purchases)===1;} },
    { name:"avg_purchases_per_visit present", seed:null, check:(r)=>"avg_purchases_per_visit" in r[0] },
  ]
},
{
  id:1012, num:"13", title:"Number Users by Signup Order", difficulty:"Medium",
  tags:["WINDOW FUNCTION","ROW_NUMBER","ORDER BY"],
  desc:"<p>Assign a <strong>row number</strong> to each user based on <code>start_date</code>, so the earliest signup gets number 1.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>, <code>row_num</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date","row_num"],"rows":[[1,"c1","2020-01-01",1],[2,"c2","2020-01-02",2]]},
  hint:"Use <strong>ROW_NUMBER() OVER(ORDER BY start_date)</strong>.",
  testCases:[
    { name:"All 8 users numbered", seed:null, check:(r)=>r.length===8 },
    { name:"Earliest user gets 1", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.row_num)===1;} },
    { name:"Row numbers are unique 1..8", seed:null, check:(r)=>new Set(r.map(x=>Number(x.row_num))).size===8 },
  ]
},
{
  id:1013, num:"14", title:"Rank Users by Signup Date", difficulty:"Medium",
  tags:["WINDOW FUNCTION","RANK","ORDER BY"],
  desc:"<p>Rank users by <code>start_date</code> so that users who joined on the <strong>same day get the same rank</strong>.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>, <code>join_rank</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date","join_rank"],"rows":[[1,"c1","2020-01-01",1],[2,"c2","2020-01-02",2],[3,"c3","2020-01-02",2]]},
  hint:"Use <strong>RANK()</strong> (not ROW_NUMBER) so ties share a rank and the next rank is skipped.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"Users 2 and 3 (same day) share rank 2", seed:null, check:(r)=>{const a=r.find(y=>Number(y.user_id)===2),b=r.find(y=>Number(y.user_id)===3);return a&&b&&Number(a.join_rank)===2&&Number(b.join_rank)===2;} },
    { name:"Rank after the tie is 4 (skipped)", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===4);return x&&Number(x.join_rank)===4;} },
  ]
},
{
  id:1014, num:"15", title:"Cumulative Signups Over Time", difficulty:"Hard",
  tags:["WINDOW FUNCTION","COUNT","ROWS BETWEEN"],
  desc:"<p>Compute the <strong>cumulative number of users</strong> who joined up to and including each user's <code>start_date</code> (a running total).</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>, <code>cumulative_users</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date","cumulative_users"],"rows":[[1,"c1","2020-01-01",1],[2,"c2","2020-01-02",2]]},
  hint:"Use <strong>COUNT(*) OVER(ORDER BY start_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)</strong>.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"Final cumulative = 8", seed:null, check:(r)=>Math.max(...r.map(x=>Number(x.cumulative_users)))===8 },
    { name:"First user cumulative = 1", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.cumulative_users)===1;} },
  ]
},
{
  id:1015, num:"16", title:"Flag Users Who Joined Close Together", difficulty:"Hard",
  tags:["WINDOW FUNCTION","LAG","DATE","CASE"],
  desc:"<p>Mark each user based on how soon after the previous signup they joined: label them <code>Joined Close</code> if within 7 days of the previous user, otherwise <code>Normal Join</code>.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>, <code>join_proximity</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date","join_proximity"],"rows":[[1,"c1","2020-01-01","Normal Join"],[2,"c2","2020-01-02","Joined Close"]]},
  hint:"Use <strong>LAG(start_date)</strong> and compare with <code>(julianday(start_date)-julianday(prev)) &lt;= 7</code> inside a CASE.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"First user is Normal Join (no previous)", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&x.join_proximity==="Normal Join";} },
    { name:"User 6 (21-day gap) is Normal Join", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===6);return x&&x.join_proximity==="Normal Join";} },
    { name:"User 2 (1-day gap) is Joined Close", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===2);return x&&x.join_proximity==="Joined Close";} },
  ]
},
{
  id:1016, num:"17", title:"Most Recent User", difficulty:"Medium",
  tags:["SUBQUERY","MAX","WHERE"],
  desc:"<p>Using a subquery, find the <strong>latest user</strong> to join (the one with the maximum <code>start_date</code>).</p><p>Return: <code>user_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date"],"rows":[[8,"2020-02-04"]]},
  hint:"Filter <code>start_date = (SELECT MAX(start_date) FROM users)</code>.",
  testCases:[
    { name:"One user returned", seed:null, check:(r)=>r.length===1 },
    { name:"It is user 8", seed:null, check:(r)=>Number(r[0].user_id)===8 },
    { name:"Date is the latest", seed:null, check:(r)=>r[0].start_date==="2020-02-04" },
  ]
},
{
  id:1017, num:"18", title:"Users Who Joined Before a Date", difficulty:"Medium",
  tags:["SUBQUERY","WHERE","DATE"],
  desc:"<p>List all users who joined <strong>before 1 February 2020</strong>.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[1,"c1","2020-01-01"],[2,"c2","2020-01-02"]]},
  hint:"Compare <code>start_date &lt; '2020-02-01'</code>.",
  testCases:[
    { name:"5 January users returned", seed:null, check:(r)=>r.length===5 },
    { name:"February users excluded", seed:null, check:(r)=>!r.some(x=>x.start_date>='2020-02-01') },
    { name:"User 1 included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===1) },
  ]
},
{
  id:1018, num:"19", title:"Earliest User in Each Month", difficulty:"Hard",
  tags:["SUBQUERY","CORRELATED SUBQUERY","DATE"],
  desc:"<p>Using a correlated subquery, find users whose <code>start_date</code> is the <strong>earliest within their own month</strong>.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[1,"c1","2020-01-01"],[6,"c6","2020-02-01"]]},
  hint:"Match <code>start_date = (SELECT MIN(start_date) FROM users WHERE same year and month as the outer row)</code> using <code>strftime('%Y', ...)</code> and <code>strftime('%m', ...)</code>.",
  testCases:[
    { name:"2 users (one per month)", seed:null, check:(r)=>r.length===2 },
    { name:"January earliest is user 1", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===1) },
    { name:"February earliest is user 6", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===6) },
  ]
},
{
  id:1019, num:"20", title:"Count Users Who Joined Before Each User", difficulty:"Hard",
  tags:["SUBQUERY","CORRELATED SUBQUERY","COUNT"],
  desc:"<p>For each user, use a <strong>correlated subquery</strong> to count how many users joined strictly before them.</p><p>Return: <code>user_id</code>, <code>start_date</code>, <code>users_before</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date","users_before"],"rows":[[1,"2020-01-01",0],[2,"2020-01-02",1],[3,"2020-01-02",1]]},
  hint:"Correlate: <code>(SELECT COUNT(*) FROM users u2 WHERE u2.start_date &lt; u1.start_date)</code>.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"First user has 0 before", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.users_before)===0;} },
    { name:"Same-day users 2 and 3 both have 1 before", seed:null, check:(r)=>{const a=r.find(y=>Number(y.user_id)===2),b=r.find(y=>Number(y.user_id)===3);return a&&b&&Number(a.users_before)===1&&Number(b.users_before)===1;} },
  ]
},
{
  id:1020, num:"21", title:"Gaps Larger Than Average", difficulty:"Hard",
  tags:["CTE","LAG","DATE","AVG"],
  desc:"<p>Using a CTE, list users whose gap from the previous signup is <strong>greater than the average gap</strong>.</p><p>Return: <code>user_id</code>, <code>start_date</code>, <code>gap_days</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date","gap_days"],"rows":[[5,"2020-01-11",6],[6,"2020-02-01",21]]},
  hint:"In a CTE compute each gap with <code>julianday(start_date)-julianday(LAG(start_date) OVER(ORDER BY start_date))</code>, then keep rows above <code>AVG(gap_days)</code>.",
  testCases:[
    { name:"2 users returned", seed:null, check:(r)=>r.length===2 },
    { name:"User 6 (21-day gap) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===6) },
    { name:"User 5 (6-day gap) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===5) },
  ]
},
{
  id:1021, num:"22", title:"First 3 Users Each Month", difficulty:"Hard",
  tags:["CTE","WINDOW FUNCTION","ROW_NUMBER","DATE"],
  desc:"<p>Using a CTE with a window function, list the <strong>first 3 users who joined in each month</strong>.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[1,"c1","2020-01-01"],[2,"c2","2020-01-02"],[3,"c3","2020-01-02"]]},
  hint:"Partition ROW_NUMBER by year+month: <code>PARTITION BY strftime('%Y',start_date), strftime('%m',start_date) ORDER BY start_date</code>, then keep rn &lt;= 3.",
  testCases:[
    { name:"6 users (3 per month x 2 months)", seed:null, check:(r)=>r.length===6 },
    { name:"User 1 (first in Jan) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===1) },
    { name:"User 5 (4th in Jan) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===5) },
  ]
},
{
  id:1022, num:"23", title:"Users Who Joined After a Given User", difficulty:"Medium",
  tags:["SUBQUERY","WHERE","DATE"],
  desc:"<p>Using a subquery, list all users who joined <strong>after the user with user_id = 2</strong>.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[4,"c4","2020-01-05"],[5,"c5","2020-01-11"]]},
  hint:"Compare against <code>(SELECT start_date FROM users WHERE user_id = 2)</code>.",
  testCases:[
    { name:"5 users returned", seed:null, check:(r)=>r.length===5 },
    { name:"User 3 (same day as user 2) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===3) },
    { name:"User 4 included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===4) },
  ]
},
{
  id:1023, num:"24", title:"User Signup Rank", difficulty:"Easy",
  tags:["WINDOW FUNCTION","RANK","ORDER BY"],
  desc:"<p>Show the <strong>order in which users signed up</strong>. Users who signed up on the same day should get the same rank.</p><p>Return: <code>user_id</code>, <code>start_date</code>, <code>signup_rank</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date","signup_rank"],"rows":[[1,"2020-01-01",1],[2,"2020-01-02",2],[3,"2020-01-02",2]]},
  hint:"Use <strong>RANK() OVER(ORDER BY start_date)</strong>.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"First user rank 1", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.signup_rank)===1;} },
    { name:"Same-day users share rank", seed:null, check:(r)=>{const a=r.find(y=>Number(y.user_id)===2),b=r.find(y=>Number(y.user_id)===3);return a&&b&&Number(a.signup_rank)===Number(b.signup_rank);} },
  ]
},
{
  id:1024, num:"25", title:"Previous Signup Date", difficulty:"Easy",
  tags:["WINDOW FUNCTION","LAG","ORDER BY"],
  desc:"<p>For each user, show the <strong>previous user's signup date</strong> (ordered by <code>start_date</code>). For the first user, show their own date.</p><p>Return: <code>user_id</code>, <code>start_date</code>, <code>previous_signup_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date","previous_signup_date"],"rows":[[1,"2020-01-01","2020-01-01"],[2,"2020-01-02","2020-01-01"]]},
  hint:"Use <strong>LAG(start_date, 1, start_date)</strong> so the first row falls back to its own date.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"First user's previous = itself", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&x.previous_signup_date==="2020-01-01";} },
    { name:"User 2's previous = 2020-01-01", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===2);return x&&x.previous_signup_date==="2020-01-01";} },
  ]
},
{
  id:1025, num:"26", title:"Days Since First Signup", difficulty:"Medium",
  tags:["WINDOW FUNCTION","DATE"],
  desc:"<p>For each user, compute how many <strong>days after the first-ever signup</strong> they joined.</p><p>Return: <code>user_id</code>, <code>start_date</code>, <code>days_since_first_signup</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date","days_since_first_signup"],"rows":[[1,"2020-01-01",0],[5,"2020-01-11",10]]},
  hint:"Subtract the global minimum: <code>julianday(start_date) - julianday(MIN(start_date) OVER())</code>.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"First user = 0 days", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===1);return x&&Number(x.days_since_first_signup)===0;} },
    { name:"User 6 = 31 days", seed:null, check:(r)=>{const x=r.find(y=>Number(y.user_id)===6);return x&&Number(x.days_since_first_signup)===31;} },
  ]
},
{
  id:1026, num:"27", title:"Signup Order per Cookie", difficulty:"Medium",
  tags:["WINDOW FUNCTION","ROW_NUMBER","PARTITION BY"],
  desc:"<p>A single browser (<code>cookie_id</code>) can be tied to several signups. Number the signups <strong>within each cookie</strong> in date order.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>, <code>signup_order_per_cookie</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES (1,'c1','2020-01-01'),(2,'c1','2020-01-05'),(3,'c2','2020-01-02'),(4,'c2','2020-01-08'),(5,'c2','2020-01-10'),(6,'c3','2020-01-03');",
  example:{"cols":["user_id","cookie_id","start_date","signup_order_per_cookie"],"rows":[[1,"c1","2020-01-01",1],[2,"c1","2020-01-05",2],[3,"c2","2020-01-02",1]]},
  hint:"Use <strong>ROW_NUMBER() OVER(PARTITION BY cookie_id ORDER BY start_date)</strong>.",
  testCases:[
    { name:"6 rows", seed:null, check:(r)=>r.length===6 },
    { name:"Each cookie starts at order 1", seed:null, check:(r)=>{const firsts=r.filter(x=>Number(x.signup_order_per_cookie)===1).length;return firsts===3;} },
    { name:"c2 reaches order 3", seed:null, check:(r)=>r.some(x=>x.cookie_id==="c2"&&Number(x.signup_order_per_cookie)===3) },
  ]
},
{
  id:1027, num:"28", title:"Cumulative User Count Over Time", difficulty:"Hard",
  tags:["WINDOW FUNCTION","COUNT","ROWS BETWEEN"],
  desc:"<p>Track platform growth: compute a <strong>running total of users</strong> ordered by <code>start_date</code>.</p><p>Return: <code>user_id</code>, <code>start_date</code>, <code>cumulative_users</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date","cumulative_users"],"rows":[[1,"2020-01-01",1],[2,"2020-01-02",2]]},
  hint:"Use <strong>COUNT(*) OVER(ORDER BY start_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)</strong>.",
  testCases:[
    { name:"8 rows", seed:null, check:(r)=>r.length===8 },
    { name:"Ends at 8", seed:null, check:(r)=>Math.max(...r.map(x=>Number(x.cumulative_users)))===8 },
    { name:"Monotonically non-decreasing", seed:null, check:(r)=>{const v=r.map(x=>Number(x.cumulative_users));for(let i=1;i<v.length;i++)if(v[i]<v[i-1])return false;return true;} },
  ]
},
{
  id:1028, num:"29", title:"Second Earliest Signup", difficulty:"Hard",
  tags:["SUBQUERY","MIN","DATE"],
  desc:"<p>Find the users who joined on the <strong>second earliest</strong> <code>start_date</code>. If several users share that date, return all of them.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[2,"c2","2020-01-02"],[3,"c3","2020-01-02"]]},
  hint:"The second earliest date = <code>MIN(start_date)</code> among rows whose date is greater than the overall <code>MIN(start_date)</code>.",
  testCases:[
    { name:"2 users share the second-earliest date", seed:null, check:(r)=>r.length===2 },
    { name:"Both on 2020-01-02", seed:null, check:(r)=>r.every(x=>x.start_date==="2020-01-02") },
    { name:"Earliest user (user 1) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===1) },
  ]
},
{
  id:1029, num:"30", title:"Longest Gap Between Signups", difficulty:"Hard",
  tags:["WINDOW FUNCTION","LAG","DATE","MAX"],
  desc:"<p>Find the <strong>maximum number of days</strong> between two consecutive user signups.</p><p>Return a single column: <code>max_gap</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["max_gap"],"rows":[[21]]},
  hint:"Compute each gap with LAG, then take the MAX over the non-null gaps.",
  testCases:[
    { name:"One row", seed:null, check:(r)=>r.length===1 },
    { name:"Max gap = 21 days", seed:null, check:(r)=>Number(r[0].max_gap)===21 },
    { name:"Column is max_gap", seed:null, check:(r)=>"max_gap" in r[0] },
  ]
},
{
  id:1030, num:"31", title:"User After the Longest Gap", difficulty:"Hard",
  tags:["CTE","LAG","DATE"],
  desc:"<p>Find the user(s) who joined <strong>immediately after the longest gap</strong> between consecutive signups.</p><p>Return: <code>user_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","start_date"],"rows":[[6,"2020-02-01"]]},
  hint:"In a CTE compute each gap with LAG, then keep rows where <code>gap_days = (SELECT MAX(gap_days) FROM cte)</code>.",
  testCases:[
    { name:"One user returned", seed:null, check:(r)=>r.length===1 },
    { name:"It is user 6", seed:null, check:(r)=>Number(r[0].user_id)===6 },
    { name:"On 2020-02-01", seed:null, check:(r)=>r[0].start_date==="2020-02-01" },
  ]
},
{
  id:1031, num:"32", title:"Same Weekday as the First User", difficulty:"Hard",
  tags:["SUBQUERY","DATE"],
  desc:"<p>Retrieve users who joined on the <strong>same weekday</strong> as the earliest user.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES (1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-08'),(4,'c4','2020-01-05'),(5,'c5','2020-01-15');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[1,"c1","2020-01-01"],[3,"c3","2020-01-08"],[5,"c5","2020-01-15"]]},
  hint:"Compare <code>strftime('%w', start_date)</code> with the weekday of the earliest user (<code>ORDER BY start_date LIMIT 1</code>).",
  testCases:[
    { name:"3 users on the same weekday", seed:null, check:(r)=>r.length===3 },
    { name:"Earliest user (user 1) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===1) },
    { name:"User 2 (different weekday) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===2) },
  ]
},
{
  id:1032, num:"33", title:"Users Who Joined on Consecutive Days", difficulty:"Hard",
  tags:["WINDOW FUNCTION","LAG","DATE"],
  desc:"<p>Retrieve users who joined <strong>exactly one day</strong> after the previous signup (consecutive days).</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[2,"c2","2020-01-02"],[8,"c8","2020-02-04"]]},
  hint:"Use LAG to get the previous date, then keep rows where the day difference equals 1.",
  testCases:[
    { name:"2 users returned", seed:null, check:(r)=>r.length===2 },
    { name:"User 8 (Feb 4 after Feb 3) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===8) },
    { name:"Same-day user 3 excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===3) },
  ]
},
{
  id:1033, num:"34", title:"Users Who Joined Within 2 Days", difficulty:"Hard",
  tags:["WINDOW FUNCTION","LAG","DATE"],
  desc:"<p>Retrieve users who joined <strong>within 2 days</strong> of the previous signup.</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[2,"c2","2020-01-02"],[3,"c3","2020-01-02"],[7,"c7","2020-02-03"],[8,"c8","2020-02-04"]]},
  hint:"Keep rows where <code>0 &lt;= day difference &lt;= 2</code> and the previous date is not null.",
  testCases:[
    { name:"4 users returned", seed:null, check:(r)=>r.length===4 },
    { name:"User 7 (2-day gap) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===7) },
    { name:"User 5 (6-day gap) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===5) },
  ]
},
{
  id:1034, num:"35", title:"Employees Hired After the First Hire", difficulty:"Medium",
  tags:["SUBQUERY","MIN","WHERE","DATE"],
  desc:"<p>The HR team wants everyone who joined <strong>after the very first employee</strong>. Using a subquery, return employees whose <code>Hire_Date</code> is later than the earliest hire date.</p><p>Return: <code>Employee_Id</code>, <code>First_Name</code>, <code>Hire_Date</code>.</p>",
  schema:{"Employee":[{"col":"Employee_Id","type":"INTEGER","note":"pk"},{"col":"First_Name","type":"TEXT","note":""},{"col":"Last_Name","type":"TEXT","note":""},{"col":"Hire_Date","type":"DATE","note":""},{"col":"City","type":"TEXT","note":""},{"col":"State","type":"TEXT","note":""}]},
  seed:"CREATE TABLE Employee(Employee_Id INTEGER,First_Name TEXT,Last_Name TEXT,Hire_Date TEXT,City TEXT,State TEXT);\nINSERT INTO Employee VALUES\n(101,'Ojas','Phansekar','2016-04-14','Mumbai','MH'),(102,'Vrushali','Patil','2018-06-21','Pune','MH'),\n(103,'Pratik','Parija','2019-09-13','Delhi','DL'),(104,'Chetan','Mehta','2011-04-12','Pune','MH'),\n(105,'Anugraha','Rao','2017-08-16','Mumbai','MH'),(106,'Rasagnya','Reddy','2015-07-25','Delhi','DL'),\n(107,'Shantanu','Savant','2014-03-10','Chennai','TN');",
  example:{"cols":["Employee_Id","First_Name","Hire_Date"],"rows":[[101,"Ojas","2016-04-14"],[103,"Pratik","2019-09-13"]]},
  hint:"Filter <code>Hire_Date &gt; (SELECT MIN(Hire_Date) FROM Employee)</code>.",
  testCases:[
    { name:"6 of 7 employees returned", seed:null, check:(r)=>r.length===6 },
    { name:"Earliest hire (104) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.Employee_Id)===104) },
    { name:"Employee 103 included", seed:null, check:(r)=>r.some(x=>Number(x.Employee_Id)===103) },
  ]
},
{
  id:1035, num:"36", title:"Same City as the Most Recent Hire", difficulty:"Medium",
  tags:["SUBQUERY","MAX","WHERE"],
  desc:"<p>Find employees who live in the <strong>same city as the most recently hired employee</strong>.</p><p>Return: <code>Employee_Id</code>, <code>First_Name</code>, <code>City</code>, <code>Hire_Date</code>.</p>",
  schema:{"Employee":[{"col":"Employee_Id","type":"INTEGER","note":"pk"},{"col":"First_Name","type":"TEXT","note":""},{"col":"Last_Name","type":"TEXT","note":""},{"col":"Hire_Date","type":"DATE","note":""},{"col":"City","type":"TEXT","note":""},{"col":"State","type":"TEXT","note":""}]},
  seed:"CREATE TABLE Employee(Employee_Id INTEGER,First_Name TEXT,Last_Name TEXT,Hire_Date TEXT,City TEXT,State TEXT);\nINSERT INTO Employee VALUES\n(101,'Ojas','Phansekar','2016-04-14','Mumbai','MH'),(102,'Vrushali','Patil','2018-06-21','Pune','MH'),\n(103,'Pratik','Parija','2019-09-13','Delhi','DL'),(104,'Chetan','Mehta','2011-04-12','Pune','MH'),\n(105,'Anugraha','Rao','2017-08-16','Mumbai','MH'),(106,'Rasagnya','Reddy','2015-07-25','Delhi','DL'),\n(107,'Shantanu','Savant','2014-03-10','Chennai','TN');",
  example:{"cols":["Employee_Id","First_Name","City","Hire_Date"],"rows":[[103,"Pratik","Delhi","2019-09-13"],[106,"Rasagnya","Delhi","2015-07-25"]]},
  hint:"Nest subqueries: the city of the row with <code>MAX(Hire_Date)</code>, then all employees in that city.",
  testCases:[
    { name:"Both Delhi employees returned", seed:null, check:(r)=>r.length===2 },
    { name:"Most recent hire (103) included", seed:null, check:(r)=>r.some(x=>Number(x.Employee_Id)===103) },
    { name:"All rows are in Delhi", seed:null, check:(r)=>r.every(x=>x.City==="Delhi") },
  ]
},
{
  id:1036, num:"37", title:"Customers Missing State Information", difficulty:"Medium",
  tags:["CTE","NULL","WHERE"],
  desc:"<p>The data-quality team needs customers whose <code>state_province</code> is <strong>NULL or empty</strong>. Use a CTE.</p><p>Return: <code>customer_id</code>, <code>first_name</code>, <code>city</code>.</p>",
  schema:{"Customers":[{"col":"customer_id","type":"INTEGER","note":"pk"},{"col":"first_name","type":"TEXT","note":""},{"col":"last_name","type":"TEXT","note":""},{"col":"email","type":"TEXT","note":""},{"col":"address","type":"TEXT","note":""},{"col":"city","type":"TEXT","note":""},{"col":"state_province","type":"TEXT","note":"nullable"}]},
  seed:"CREATE TABLE Customers(customer_id INTEGER,first_name TEXT,last_name TEXT,email TEXT,address TEXT,city TEXT,state_province TEXT);\nINSERT INTO Customers VALUES\n(1,'Estrella','Thomke','e','a','Mumbai','MH'),(2,'Agata','Pude','e','a','Mumbai',NULL),\n(3,'Reinald','Mac','e','a','Delhi',''),(4,'Leighton','Doyle','e','a','Pune','MH'),\n(5,'Gal','Morris','e','a','Delhi','DL'),(6,'Nomi','Roy','e','a','Pune',NULL),\n(7,'Solo','Person','e','a','Chennai','TN');",
  example:{"cols":["customer_id","first_name","city"],"rows":[[2,"Agata","Mumbai"],[3,"Reinald","Delhi"],[6,"Nomi","Pune"]]},
  hint:"Filter <code>state_province IS NULL OR state_province = ''</code> inside the CTE.",
  testCases:[
    { name:"3 customers returned", seed:null, check:(r)=>r.length===3 },
    { name:"Customer 2 (NULL state) included", seed:null, check:(r)=>r.some(x=>Number(x.customer_id)===2) },
    { name:"Customer with a state (1) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.customer_id)===1) },
  ]
},
{
  id:1037, num:"38", title:"Cities With Multiple Customers", difficulty:"Hard",
  tags:["CTE","GROUP BY","HAVING","COUNT"],
  desc:"<p>Marketing wants cities that have <strong>more than one customer</strong>. Use a CTE that counts customers per city.</p><p>Return: <code>city</code>, <code>customer_count</code>.</p>",
  schema:{"Customers":[{"col":"customer_id","type":"INTEGER","note":"pk"},{"col":"first_name","type":"TEXT","note":""},{"col":"last_name","type":"TEXT","note":""},{"col":"email","type":"TEXT","note":""},{"col":"address","type":"TEXT","note":""},{"col":"city","type":"TEXT","note":""},{"col":"state_province","type":"TEXT","note":"nullable"}]},
  seed:"CREATE TABLE Customers(customer_id INTEGER,first_name TEXT,last_name TEXT,email TEXT,address TEXT,city TEXT,state_province TEXT);\nINSERT INTO Customers VALUES\n(1,'Estrella','Thomke','e','a','Mumbai','MH'),(2,'Agata','Pude','e','a','Mumbai',NULL),\n(3,'Reinald','Mac','e','a','Delhi',''),(4,'Leighton','Doyle','e','a','Pune','MH'),\n(5,'Gal','Morris','e','a','Delhi','DL'),(6,'Nomi','Roy','e','a','Pune',NULL),\n(7,'Solo','Person','e','a','Chennai','TN');",
  example:{"cols":["city","customer_count"],"rows":[["Delhi",2],["Mumbai",2],["Pune",2]]},
  hint:"Group by city in a CTE, then keep rows where <code>customer_count &gt; 1</code>.",
  testCases:[
    { name:"3 cities returned", seed:null, check:(r)=>r.length===3 },
    { name:"Chennai (single customer) excluded", seed:null, check:(r)=>!r.some(x=>x.city==="Chennai") },
    { name:"Every returned city has count > 1", seed:null, check:(r)=>r.every(x=>Number(x.customer_count)>1) },
  ]
},
{
  id:1038, num:"39", title:"Employees With Above-Average Gross Salary", difficulty:"Hard",
  tags:["CTE","SUBQUERY","AVG","JOIN"],
  desc:"<p>Finance wants employees earning <strong>more than the average gross salary</strong>. Join <strong>AccountDetails</strong> to <strong>Salary</strong> on <code>Account_Id</code> in a CTE, then compare against the average.</p><p>Return: <code>Employee_Id</code>, <code>Gross_Salary</code>, <code>Bank_Name</code>.</p>",
  schema:{"AccountDetails":[{"col":"Account_Id","type":"INTEGER","note":"pk"},{"col":"Bank_Name","type":"TEXT","note":""},{"col":"Account_Number","type":"TEXT","note":""},{"col":"Employee_Id","type":"INTEGER","note":""}],"Salary":[{"col":"Salary_Id","type":"INTEGER","note":"pk"},{"col":"Gross_Salary","type":"REAL","note":""},{"col":"Hourly_Pay","type":"REAL","note":""},{"col":"State_Tax","type":"REAL","note":""},{"col":"Federal_Tax","type":"REAL","note":""},{"col":"Account_Id","type":"INTEGER","note":""}]},
  seed:"CREATE TABLE AccountDetails(Account_Id INTEGER,Bank_Name TEXT,Account_Number TEXT,Employee_Id INTEGER);\nINSERT INTO AccountDetails VALUES (40,'HDFC','A40',101),(41,'HDFC','A41',102),(42,'ICICI','A42',103),(43,'ICICI','A43',104);\nCREATE TABLE Salary(Salary_Id INTEGER,Gross_Salary REAL,Hourly_Pay REAL,State_Tax REAL,Federal_Tax REAL,Account_Id INTEGER);\nINSERT INTO Salary VALUES (1,50000,30,200,1000,40),(2,70000,40,300,1300,41),(3,90000,50,400,1500,42),(4,110000,60,500,1800,43);",
  example:{"cols":["Employee_Id","Gross_Salary","Bank_Name"],"rows":[[103,90000,"ICICI"],[104,110000,"ICICI"]]},
  hint:"Average gross salary is 80,000. Compare each joined row against <code>(SELECT AVG(Gross_Salary) FROM Salary)</code>.",
  testCases:[
    { name:"2 employees above average", seed:null, check:(r)=>r.length===2 },
    { name:"Employee 104 (110k) included", seed:null, check:(r)=>r.some(x=>Number(x.Employee_Id)===104) },
    { name:"Below-average employee 101 (50k) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.Employee_Id)===101) },
  ]
},
{
  id:1039, num:"40", title:"Employees Without Any Leave", difficulty:"Hard",
  tags:["CTE","SUBQUERY","NOT IN"],
  desc:"<p>HR wants employees who have <strong>never taken any leave</strong>. Using a CTE and a subquery, return account holders whose <code>Employee_Id</code> does not appear in <strong>LeaveTable</strong>.</p><p>Return: <code>Employee_Id</code>, <code>Account_Number</code>.</p>",
  schema:{"AccountDetails":[{"col":"Account_Id","type":"INTEGER","note":"pk"},{"col":"Bank_Name","type":"TEXT","note":""},{"col":"Account_Number","type":"TEXT","note":""},{"col":"Employee_Id","type":"INTEGER","note":""}],"LeaveTable":[{"col":"Leave_Id","type":"INTEGER","note":"pk"},{"col":"Employee_Id","type":"INTEGER","note":""},{"col":"Leave_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE AccountDetails(Account_Id INTEGER,Bank_Name TEXT,Account_Number TEXT,Employee_Id INTEGER);\nINSERT INTO AccountDetails VALUES (40,'HDFC','A101',101),(41,'HDFC','A102',102),(42,'ICICI','A103',103),(43,'ICICI','A104',104),(44,'SBI','A105',105);\nCREATE TABLE LeaveTable(Leave_Id INTEGER,Employee_Id INTEGER,Leave_date TEXT);\nINSERT INTO LeaveTable VALUES (301,103,'2019-12-01'),(302,104,'2019-12-02');",
  example:{"cols":["Employee_Id","Account_Number"],"rows":[[101,"A101"],[102,"A102"],[105,"A105"]]},
  hint:"Use <code>WHERE Employee_Id NOT IN (SELECT Employee_Id FROM LeaveTable)</code>.",
  testCases:[
    { name:"3 employees without leave", seed:null, check:(r)=>r.length===3 },
    { name:"Employee 103 (has leave) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.Employee_Id)===103) },
    { name:"Employee 101 included", seed:null, check:(r)=>r.some(x=>Number(x.Employee_Id)===101) },
  ]
},
{
  id:1040, num:"41", title:"Employees in the Least-Staffed City", difficulty:"Hard",
  tags:["SUBQUERY","GROUP BY","HAVING","MIN"],
  desc:"<p>To spot locations with low workforce presence, find employees who live in the city (or cities) with the <strong>minimum number of employees</strong>.</p><p>Return: <code>First_Name</code>, <code>Last_Name</code>.</p>",
  schema:{"Employee":[{"col":"Employee_Id","type":"INTEGER","note":"pk"},{"col":"First_Name","type":"TEXT","note":""},{"col":"Last_Name","type":"TEXT","note":""},{"col":"Hire_Date","type":"DATE","note":""},{"col":"City","type":"TEXT","note":""},{"col":"State","type":"TEXT","note":""}]},
  seed:"CREATE TABLE Employee(Employee_Id INTEGER,First_Name TEXT,Last_Name TEXT,Hire_Date TEXT,City TEXT,State TEXT);\nINSERT INTO Employee VALUES\n(101,'Ojas','Phansekar','2016-04-14','Mumbai','MH'),(102,'Vrushali','Patil','2018-06-21','Pune','MH'),\n(103,'Pratik','Parija','2019-09-13','Delhi','DL'),(104,'Chetan','Mehta','2011-04-12','Pune','MH'),\n(105,'Anugraha','Rao','2017-08-16','Mumbai','MH'),(106,'Rasagnya','Reddy','2015-07-25','Delhi','DL'),\n(107,'Shantanu','Savant','2014-03-10','Chennai','TN');",
  example:{"cols":["First_Name","Last_Name"],"rows":[["Shantanu","Savant"]]},
  hint:"Find the minimum per-city count with a nested subquery, then keep cities whose count equals that minimum.",
  testCases:[
    { name:"Only the Chennai employee returned", seed:null, check:(r)=>r.length===1 },
    { name:"It is Shantanu Savant", seed:null, check:(r)=>r[0].First_Name==="Shantanu"&&r[0].Last_Name==="Savant" },
    { name:"No one from a larger city", seed:null, check:(r)=>!r.some(x=>x.Last_Name==="Phansekar") },
  ]
},
{
  id:1041, num:"42", title:"Employees With a Leave After Their Hire Date", difficulty:"Hard",
  tags:["CTE","JOIN","MIN","DATE"],
  desc:"<p>Using a CTE, find employees who have taken <strong>at least one leave after their hire date</strong>, and show that first leave.</p><p>Return: <code>Employee_Id</code>, <code>First_Name</code>, <code>Last_Name</code>, <code>Hire_Date</code>, <code>first_leave_date</code>.</p>",
  schema:{"Employee":[{"col":"Employee_Id","type":"INTEGER","note":"pk"},{"col":"First_Name","type":"TEXT","note":""},{"col":"Last_Name","type":"TEXT","note":""},{"col":"Hire_Date","type":"DATE","note":""},{"col":"City","type":"TEXT","note":""},{"col":"State","type":"TEXT","note":""}],"LeaveTable":[{"col":"Leave_Id","type":"INTEGER","note":"pk"},{"col":"Employee_Id","type":"INTEGER","note":""},{"col":"Leave_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE Employee(Employee_Id INTEGER,First_Name TEXT,Last_Name TEXT,Hire_Date TEXT,City TEXT,State TEXT);\nINSERT INTO Employee VALUES\n(101,'Ojas','Phansekar','2016-04-14','Mumbai','MH'),(102,'Vrushali','Patil','2018-06-21','Pune','MH'),\n(103,'Pratik','Parija','2019-09-13','Delhi','DL'),(104,'Chetan','Mehta','2011-04-12','Pune','MH'),\n(105,'Anugraha','Rao','2017-08-16','Mumbai','MH'),(106,'Rasagnya','Reddy','2015-07-25','Delhi','DL'),\n(107,'Shantanu','Savant','2014-03-10','Chennai','TN');\nCREATE TABLE LeaveTable(Leave_Id INTEGER,Employee_Id INTEGER,Leave_date TEXT);\nINSERT INTO LeaveTable VALUES (201,104,'2019-12-01'),(202,106,'2019-12-05'),(203,107,'2019-12-04'),(204,102,'2019-12-02');",
  example:{"cols":["Employee_Id","First_Name","Last_Name","Hire_Date","first_leave_date"],"rows":[[104,"Chetan","Mehta","2011-04-12","2019-12-01"]]},
  hint:"In a CTE take <code>MIN(Leave_date)</code> per employee, join to Employee, and keep rows where the first leave is after <code>Hire_Date</code>.",
  testCases:[
    { name:"4 employees with a leave", seed:null, check:(r)=>r.length===4 },
    { name:"Employee 101 (no leave) excluded", seed:null, check:(r)=>!r.some(x=>Number(x.Employee_Id)===101) },
    { name:"Employee 104's first leave is 2019-12-01", seed:null, check:(r)=>{const x=r.find(y=>Number(y.Employee_Id)===104);return x&&x.first_leave_date==="2019-12-01";} },
  ]
},
{
  id:1042, num:"43", title:"Classify Listings by Price", difficulty:"Medium",
  tags:["CASE","CONDITIONAL","OPERATORS"],
  desc:"<p>Segment each Airbnb listing into a price band: <code>Budget</code> if price &lt; 50, <code>Mid Range</code> if price is 50 to 150, otherwise <code>Premium</code>.</p><p>Return: <code>host_id</code>, <code>neighbourhood</code>, <code>price</code>, <code>price_category</code>.</p>",
  schema:{"airbnb_nyc":[{"col":"host_id","type":"INTEGER","note":"pk"},{"col":"name","type":"TEXT","note":""},{"col":"neighbourhood","type":"TEXT","note":""},{"col":"room_type","type":"TEXT","note":""},{"col":"beds","type":"INTEGER","note":""},{"col":"number_of_reviews","type":"INTEGER","note":""},{"col":"price","type":"INTEGER","note":""},{"col":"review_scores_rating","type":"INTEGER","note":"nullable"}]},
  seed:"CREATE TABLE airbnb_nyc(host_id INTEGER,name TEXT,neighbourhood TEXT,room_type TEXT,beds INTEGER,number_of_reviews INTEGER,price INTEGER,review_scores_rating INTEGER);\nINSERT INTO airbnb_nyc VALUES\n(5162530,'1BR in Williamsburg','Brooklyn','Entire home',1,25,145,90),\n(33134899,'Private room in Bushwick','Brooklyn','Private room',1,0,37,NULL),\n(39608626,'Sunny Room in Harlem','Manhattan','Private room',2,8,28,80),\n(10101010,'Gorgeous 1BR in Manhattan','Manhattan','Entire home',2,0,199,NULL),\n(20202020,'Luxury Loft in Manhattan','Manhattan','Entire home',4,55,549,95),\n(30303030,'Cozy Studio in Queens','Queens','Entire home',1,10,75,70);",
  example:{"cols":["host_id","neighbourhood","price","price_category"],"rows":[[5162530,"Brooklyn",145,"Mid Range"],[33134899,"Brooklyn",37,"Budget"],[20202020,"Manhattan",549,"Premium"]]},
  hint:"Use a <strong>CASE</strong> with <code>price &lt; 50</code>, <code>price BETWEEN 50 AND 150</code>, and an ELSE.",
  testCases:[
    { name:"All 6 listings returned", seed:null, check:(r)=>r.length===6 },
    { name:"Price 37 is Budget", seed:null, check:(r)=>{const x=r.find(y=>Number(y.price)===37);return x&&x.price_category==="Budget";} },
    { name:"Price 549 is Premium", seed:null, check:(r)=>{const x=r.find(y=>Number(y.price)===549);return x&&x.price_category==="Premium";} },
    { name:"Price 145 is Mid Range", seed:null, check:(r)=>{const x=r.find(y=>Number(y.price)===145);return x&&x.price_category==="Mid Range";} },
  ]
},
{
  id:1043, num:"44", title:"Classify Listings by Review Volume", difficulty:"Medium",
  tags:["CASE","CONDITIONAL","OPERATORS"],
  desc:"<p>Assign a review status from <code>number_of_reviews</code>: <code>No Reviews</code> for 0, <code>Low Reviews</code> for 1 to 10, and <code>Highly Reviewed</code> for more than 10.</p><p>Return: <code>host_id</code>, <code>name</code>, <code>number_of_reviews</code>, <code>review_status</code>.</p>",
  schema:{"airbnb_nyc":[{"col":"host_id","type":"INTEGER","note":"pk"},{"col":"name","type":"TEXT","note":""},{"col":"neighbourhood","type":"TEXT","note":""},{"col":"room_type","type":"TEXT","note":""},{"col":"beds","type":"INTEGER","note":""},{"col":"number_of_reviews","type":"INTEGER","note":""},{"col":"price","type":"INTEGER","note":""},{"col":"review_scores_rating","type":"INTEGER","note":"nullable"}]},
  seed:"CREATE TABLE airbnb_nyc(host_id INTEGER,name TEXT,neighbourhood TEXT,room_type TEXT,beds INTEGER,number_of_reviews INTEGER,price INTEGER,review_scores_rating INTEGER);\nINSERT INTO airbnb_nyc VALUES\n(5162530,'1BR in Williamsburg','Brooklyn','Entire home',1,25,145,90),\n(33134899,'Private room in Bushwick','Brooklyn','Private room',1,0,37,NULL),\n(39608626,'Sunny Room in Harlem','Manhattan','Private room',2,8,28,80),\n(10101010,'Gorgeous 1BR in Manhattan','Manhattan','Entire home',2,0,199,NULL),\n(20202020,'Luxury Loft in Manhattan','Manhattan','Entire home',4,55,549,95),\n(30303030,'Cozy Studio in Queens','Queens','Entire home',1,10,75,70);",
  example:{"cols":["host_id","name","number_of_reviews","review_status"],"rows":[[5162530,"1BR in Williamsburg",25,"Highly Reviewed"],[33134899,"Private room in Bushwick",0,"No Reviews"],[39608626,"Sunny Room in Harlem",8,"Low Reviews"]]},
  hint:"CASE on <code>number_of_reviews = 0</code>, <code>BETWEEN 1 AND 10</code>, else.",
  testCases:[
    { name:"6 listings returned", seed:null, check:(r)=>r.length===6 },
    { name:"0 reviews -> No Reviews", seed:null, check:(r)=>r.filter(x=>Number(x.number_of_reviews)===0).every(x=>x.review_status==="No Reviews") },
    { name:"25 reviews -> Highly Reviewed", seed:null, check:(r)=>{const x=r.find(y=>Number(y.number_of_reviews)===25);return x&&x.review_status==="Highly Reviewed";} },
  ]
},
{
  id:1044, num:"45", title:"Classify Listings by Size", difficulty:"Medium",
  tags:["CASE","CONDITIONAL"],
  desc:"<p>Classify each listing by bed count: <code>Studio</code> for 1 bed, <code>Small</code> for 2 beds, <code>Large</code> for 3 or more.</p><p>Return: <code>host_id</code>, <code>name</code>, <code>beds</code>, <code>listing_size</code>.</p>",
  schema:{"airbnb_nyc":[{"col":"host_id","type":"INTEGER","note":"pk"},{"col":"name","type":"TEXT","note":""},{"col":"neighbourhood","type":"TEXT","note":""},{"col":"room_type","type":"TEXT","note":""},{"col":"beds","type":"INTEGER","note":""},{"col":"number_of_reviews","type":"INTEGER","note":""},{"col":"price","type":"INTEGER","note":""},{"col":"review_scores_rating","type":"INTEGER","note":"nullable"}]},
  seed:"CREATE TABLE airbnb_nyc(host_id INTEGER,name TEXT,neighbourhood TEXT,room_type TEXT,beds INTEGER,number_of_reviews INTEGER,price INTEGER,review_scores_rating INTEGER);\nINSERT INTO airbnb_nyc VALUES\n(5162530,'1BR in Williamsburg','Brooklyn','Entire home',1,25,145,90),\n(33134899,'Private room in Bushwick','Brooklyn','Private room',1,0,37,NULL),\n(39608626,'Sunny Room in Harlem','Manhattan','Private room',2,8,28,80),\n(10101010,'Gorgeous 1BR in Manhattan','Manhattan','Entire home',2,0,199,NULL),\n(20202020,'Luxury Loft in Manhattan','Manhattan','Entire home',4,55,549,95),\n(30303030,'Cozy Studio in Queens','Queens','Entire home',1,10,75,70);",
  example:{"cols":["host_id","name","beds","listing_size"],"rows":[[5162530,"1BR in Williamsburg",1,"Studio"],[39608626,"Sunny Room in Harlem",2,"Small"],[20202020,"Luxury Loft in Manhattan",4,"Large"]]},
  hint:"CASE on <code>beds = 1</code>, <code>beds = 2</code>, else Large.",
  testCases:[
    { name:"6 listings returned", seed:null, check:(r)=>r.length===6 },
    { name:"1 bed -> Studio", seed:null, check:(r)=>r.filter(x=>Number(x.beds)===1).every(x=>x.listing_size==="Studio") },
    { name:"4 beds -> Large", seed:null, check:(r)=>{const x=r.find(y=>Number(y.beds)===4);return x&&x.listing_size==="Large";} },
  ]
},
{
  id:1045, num:"46", title:"Hiring Count by Year and Quarter", difficulty:"Hard",
  tags:["DATE","GROUP BY","AGGREGATE FUNCTION"],
  desc:"<p>The HR team wants quarter-wise hiring trends. Count the number of employees hired in <strong>each quarter of each year</strong>, sorted by year then quarter.</p><p>Return: <code>Year</code>, <code>Quarter</code>, <code>Hire_Count</code>.</p>",
  schema:{"staff":[{"col":"id","type":"INTEGER","note":"pk"},{"col":"last_name","type":"TEXT","note":""},{"col":"email","type":"TEXT","note":""},{"col":"gender","type":"TEXT","note":""},{"col":"department","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""},{"col":"salary","type":"INTEGER","note":""},{"col":"job_title","type":"TEXT","note":""},{"col":"region","type":"INTEGER","note":""},{"col":"company_division","type":"TEXT","note":""},{"col":"company_regions","type":"TEXT","note":""},{"col":"country","type":"TEXT","note":""}]},
  seed:"CREATE TABLE staff(id INTEGER,last_name TEXT,email TEXT,gender TEXT,department TEXT,start_date TEXT,salary INTEGER,job_title TEXT,region INTEGER,company_division TEXT,company_regions TEXT,country TEXT);\nINSERT INTO staff VALUES\n(1,'Sharma','e','M','Sales','2009-02-10',50000,'Rep',1,'Retail','North','India'),\n(2,'Patel','e','F','Sales','2010-05-20',52000,'Rep',1,'Retail','West','India'),\n(3,'Kumar','e','M','Tech','2011-08-15',80000,'Eng',2,'Product','South','India'),\n(4,'Reddy','e','F','Tech','2010-03-05',78000,'Eng',2,'Product','South','India'),\n(5,'Singh','e','M','HR','2009-11-30',45000,'Exec',3,'Ops','North','India'),\n(6,'Gupta','e','F','HR','2012-03-25',47000,'Exec',3,'Ops','North','India'),\n(7,'Nair','e','M','Sales','2010-07-18',53000,'Rep',1,'Retail','South','India'),\n(8,'Bose','e','M','Tech','2011-01-09',81000,'Eng',2,'Product','East','India'),\n(9,'Iyer','e','F','Tech','2010-05-25',79000,'Eng',2,'Product','South','India'),\n(10,'Rao','e','M','Sales','2011-08-20',54000,'Rep',1,'Retail','West','India');",
  example:{"cols":["Year","Quarter","Hire_Count"],"rows":[[2009,1,1],[2010,2,2],[2011,3,2]]},
  hint:"In SQLite: year is <code>strftime('%Y', start_date)</code>; quarter is <code>(CAST(strftime('%m', start_date) AS INTEGER)+2)/3</code>.",
  testCases:[
    { name:"8 year-quarter groups", seed:null, check:(r)=>r.length===8 },
    { name:"2010 Q2 has 2 hires", seed:null, check:(r)=>{const x=r.find(y=>Number(y.Year)===2010&&Number(y.Quarter)===2);return x&&Number(x.Hire_Count)===2;} },
    { name:"Total hires across groups = 10", seed:null, check:(r)=>r.reduce((s,x)=>s+Number(x.Hire_Count),0)===10 },
  ]
},
{
  id:1046, num:"47", title:"Hiring Split by Half-Year", difficulty:"Hard",
  tags:["DATE","CASE","GROUP BY"],
  desc:"<p>Group employees by whether they were hired in the <strong>first half</strong> (Jan to Jun) or <strong>second half</strong> (Jul to Dec) of the year, and count each group.</p><p>Return: <code>Half_Year</code>, <code>Hire_Count</code>.</p>",
  schema:{"staff":[{"col":"id","type":"INTEGER","note":"pk"},{"col":"last_name","type":"TEXT","note":""},{"col":"email","type":"TEXT","note":""},{"col":"gender","type":"TEXT","note":""},{"col":"department","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""},{"col":"salary","type":"INTEGER","note":""},{"col":"job_title","type":"TEXT","note":""},{"col":"region","type":"INTEGER","note":""},{"col":"company_division","type":"TEXT","note":""},{"col":"company_regions","type":"TEXT","note":""},{"col":"country","type":"TEXT","note":""}]},
  seed:"CREATE TABLE staff(id INTEGER,last_name TEXT,email TEXT,gender TEXT,department TEXT,start_date TEXT,salary INTEGER,job_title TEXT,region INTEGER,company_division TEXT,company_regions TEXT,country TEXT);\nINSERT INTO staff VALUES\n(1,'Sharma','e','M','Sales','2009-02-10',50000,'Rep',1,'Retail','North','India'),\n(2,'Patel','e','F','Sales','2010-05-20',52000,'Rep',1,'Retail','West','India'),\n(3,'Kumar','e','M','Tech','2011-08-15',80000,'Eng',2,'Product','South','India'),\n(4,'Reddy','e','F','Tech','2010-03-05',78000,'Eng',2,'Product','South','India'),\n(5,'Singh','e','M','HR','2009-11-30',45000,'Exec',3,'Ops','North','India'),\n(6,'Gupta','e','F','HR','2012-03-25',47000,'Exec',3,'Ops','North','India'),\n(7,'Nair','e','M','Sales','2010-07-18',53000,'Rep',1,'Retail','South','India'),\n(8,'Bose','e','M','Tech','2011-01-09',81000,'Eng',2,'Product','East','India'),\n(9,'Iyer','e','F','Tech','2010-05-25',79000,'Eng',2,'Product','South','India'),\n(10,'Rao','e','M','Sales','2011-08-20',54000,'Rep',1,'Retail','West','India');",
  example:{"cols":["Half_Year","Hire_Count"],"rows":[["First Half",6],["Second Half",4]]},
  hint:"Use a CASE on <code>CAST(strftime('%m', start_date) AS INTEGER) &lt;= 6</code>, then GROUP BY the result.",
  testCases:[
    { name:"2 groups", seed:null, check:(r)=>r.length===2 },
    { name:"First Half = 6", seed:null, check:(r)=>{const x=r.find(y=>y.Half_Year==="First Half");return x&&Number(x.Hire_Count)===6;} },
    { name:"Second Half = 4", seed:null, check:(r)=>{const x=r.find(y=>y.Half_Year==="Second Half");return x&&Number(x.Hire_Count)===4;} },
  ]
},
{
  id:1047, num:"48", title:"Employees Hired After a Date", difficulty:"Medium",
  tags:["DATE","WHERE"],
  desc:"<p>Retrieve employees who joined <strong>after 1 January 2010</strong>.</p><p>Return: <code>id</code>, <code>last_name</code>, <code>department</code>, <code>start_date</code>.</p>",
  schema:{"staff":[{"col":"id","type":"INTEGER","note":"pk"},{"col":"last_name","type":"TEXT","note":""},{"col":"email","type":"TEXT","note":""},{"col":"gender","type":"TEXT","note":""},{"col":"department","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""},{"col":"salary","type":"INTEGER","note":""},{"col":"job_title","type":"TEXT","note":""},{"col":"region","type":"INTEGER","note":""},{"col":"company_division","type":"TEXT","note":""},{"col":"company_regions","type":"TEXT","note":""},{"col":"country","type":"TEXT","note":""}]},
  seed:"CREATE TABLE staff(id INTEGER,last_name TEXT,email TEXT,gender TEXT,department TEXT,start_date TEXT,salary INTEGER,job_title TEXT,region INTEGER,company_division TEXT,company_regions TEXT,country TEXT);\nINSERT INTO staff VALUES\n(1,'Sharma','e','M','Sales','2009-02-10',50000,'Rep',1,'Retail','North','India'),\n(2,'Patel','e','F','Sales','2010-05-20',52000,'Rep',1,'Retail','West','India'),\n(3,'Kumar','e','M','Tech','2011-08-15',80000,'Eng',2,'Product','South','India'),\n(4,'Reddy','e','F','Tech','2010-03-05',78000,'Eng',2,'Product','South','India'),\n(5,'Singh','e','M','HR','2009-11-30',45000,'Exec',3,'Ops','North','India'),\n(6,'Gupta','e','F','HR','2012-03-25',47000,'Exec',3,'Ops','North','India'),\n(7,'Nair','e','M','Sales','2010-07-18',53000,'Rep',1,'Retail','South','India'),\n(8,'Bose','e','M','Tech','2011-01-09',81000,'Eng',2,'Product','East','India'),\n(9,'Iyer','e','F','Tech','2010-05-25',79000,'Eng',2,'Product','South','India'),\n(10,'Rao','e','M','Sales','2011-08-20',54000,'Rep',1,'Retail','West','India');",
  example:{"cols":["id","last_name","department","start_date"],"rows":[[2,"Patel","Sales","2010-05-20"],[3,"Kumar","Tech","2011-08-15"]]},
  hint:"Dates stored as YYYY-MM-DD compare directly: <code>start_date &gt; '2010-01-01'</code>.",
  testCases:[
    { name:"8 employees after the date", seed:null, check:(r)=>r.length===8 },
    { name:"2009 hires excluded", seed:null, check:(r)=>!r.some(x=>x.start_date<'2010-01-01') },
    { name:"Employee 4 (2010-03-05) included", seed:null, check:(r)=>r.some(x=>Number(x.id)===4) },
  ]
},
{
  id:1048, num:"49", title:"Employees With a March Anniversary", difficulty:"Medium",
  tags:["DATE","WHERE"],
  desc:"<p>The team is running an anniversary campaign for <strong>March</strong>. Find employees whose joining month is March, and show the month name.</p><p>Return: <code>id</code>, <code>last_name</code>, <code>start_date</code>, <code>Anniversary_Month</code>.</p>",
  schema:{"staff":[{"col":"id","type":"INTEGER","note":"pk"},{"col":"last_name","type":"TEXT","note":""},{"col":"email","type":"TEXT","note":""},{"col":"gender","type":"TEXT","note":""},{"col":"department","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""},{"col":"salary","type":"INTEGER","note":""},{"col":"job_title","type":"TEXT","note":""},{"col":"region","type":"INTEGER","note":""},{"col":"company_division","type":"TEXT","note":""},{"col":"company_regions","type":"TEXT","note":""},{"col":"country","type":"TEXT","note":""}]},
  seed:"CREATE TABLE staff(id INTEGER,last_name TEXT,email TEXT,gender TEXT,department TEXT,start_date TEXT,salary INTEGER,job_title TEXT,region INTEGER,company_division TEXT,company_regions TEXT,country TEXT);\nINSERT INTO staff VALUES\n(1,'Sharma','e','M','Sales','2009-02-10',50000,'Rep',1,'Retail','North','India'),\n(2,'Patel','e','F','Sales','2010-05-20',52000,'Rep',1,'Retail','West','India'),\n(3,'Kumar','e','M','Tech','2011-08-15',80000,'Eng',2,'Product','South','India'),\n(4,'Reddy','e','F','Tech','2010-03-05',78000,'Eng',2,'Product','South','India'),\n(5,'Singh','e','M','HR','2009-11-30',45000,'Exec',3,'Ops','North','India'),\n(6,'Gupta','e','F','HR','2012-03-25',47000,'Exec',3,'Ops','North','India'),\n(7,'Nair','e','M','Sales','2010-07-18',53000,'Rep',1,'Retail','South','India'),\n(8,'Bose','e','M','Tech','2011-01-09',81000,'Eng',2,'Product','East','India'),\n(9,'Iyer','e','F','Tech','2010-05-25',79000,'Eng',2,'Product','South','India'),\n(10,'Rao','e','M','Sales','2011-08-20',54000,'Rep',1,'Retail','West','India');",
  example:{"cols":["id","last_name","start_date","Anniversary_Month"],"rows":[[4,"Reddy","2010-03-05","March"],[6,"Gupta","2012-03-25","March"]]},
  hint:"Filter <code>strftime('%m', start_date) = '03'</code>. SQLite has no MONTHNAME, so map the month with a CASE.",
  testCases:[
    { name:"2 March joiners", seed:null, check:(r)=>r.length===2 },
    { name:"All labelled March", seed:null, check:(r)=>r.every(x=>x.Anniversary_Month==="March") },
    { name:"Employee 4 included", seed:null, check:(r)=>r.some(x=>Number(x.id)===4) },
  ]
},
{
  id:1049, num:"50", title:"Most Recent Signups", difficulty:"Easy",
  tags:["ORDER BY","LIMIT"],
  desc:"<p>Retrieve the <strong>last 3 users</strong> who joined the platform (most recent first).</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[8,"c8","2020-02-04"],[7,"c7","2020-02-03"],[6,"c6","2020-02-01"]]},
  hint:"Use <strong>ORDER BY start_date DESC</strong> with <strong>LIMIT 3</strong>.",
  testCases:[
    { name:"Exactly 3 users", seed:null, check:(r)=>r.length===3 },
    { name:"Most recent (user 8) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===8) },
    { name:"Ordered most-recent first", seed:null, check:(r)=>r[0].start_date>=r[1].start_date&&r[1].start_date>=r[2].start_date },
  ]
},
{
  id:1050, num:"51", title:"Weekend Signups", difficulty:"Medium",
  tags:["DATE","WHERE","IN"],
  desc:"<p>Retrieve users who joined on a <strong>weekend</strong> (Saturday or Sunday).</p><p>Return: <code>user_id</code>, <code>cookie_id</code>, <code>start_date</code>.</p>",
  schema:{"users":[{"col":"user_id","type":"INTEGER","note":"pk"},{"col":"cookie_id","type":"TEXT","note":""},{"col":"start_date","type":"DATE","note":""}]},
  seed:"CREATE TABLE users(user_id INTEGER,cookie_id TEXT,start_date TEXT);\nINSERT INTO users VALUES\n(1,'c1','2020-01-01'),(2,'c2','2020-01-02'),(3,'c3','2020-01-02'),(4,'c4','2020-01-05'),\n(5,'c5','2020-01-11'),(6,'c6','2020-02-01'),(7,'c7','2020-02-03'),(8,'c8','2020-02-04');",
  example:{"cols":["user_id","cookie_id","start_date"],"rows":[[4,"c4","2020-01-05"],[5,"c5","2020-01-11"],[6,"c6","2020-02-01"]]},
  hint:"In SQLite, <code>strftime('%w', start_date)</code> gives 0 for Sunday and 6 for Saturday — keep those.",
  testCases:[
    { name:"3 weekend users", seed:null, check:(r)=>r.length===3 },
    { name:"User 4 (Sunday) included", seed:null, check:(r)=>r.some(x=>Number(x.user_id)===4) },
    { name:"Weekday user 1 excluded", seed:null, check:(r)=>!r.some(x=>Number(x.user_id)===1) },
  ]
},
];
if (typeof module !== "undefined" && module.exports) module.exports = ADVANCED_QUESTIONS;
