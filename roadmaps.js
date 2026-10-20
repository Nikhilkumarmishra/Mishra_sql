/* Analyst World — Roadmaps. Standalone, premium, interactive skill
   roadmaps reverse-engineered from 28,000+ data job descriptions.
   Reuses the AnalystWorld Supabase session (msql_sess) for the gated
   PDF download. Content lives in ROADMAPS so skills are data, not markup. */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
  var AUTH = SUPABASE_URL + '/auth/v1';

  var ROLES = ['Data Analyst','Business Analyst','Product Analyst','Marketing Analyst','Data Scientist','Data Engineer','Analytics Engineer','BI / MIS Analyst'];

  /* ===================== CONTENT ===================== */
  var ROADMAPS = {
    sql: {
      name:'SQL', icon:'🗄️', color:'#f01920',
      tagline:'The language every data role speaks',
      blurb:'If a data job description lists one hard skill, it is SQL. This path takes you from your first SELECT to the window functions and analytical patterns that get people hired.',
      hours:'~40–50 hrs', outcome:'Query any database, answer real business questions, and clear SQL interview rounds.',
      tracks:[
        { name:'Beginner SQL', summary:'The daily 80% of an analyst’s job — query, filter, aggregate, join.',
          sections:[
            { name:'Foundations', topics:['What a database, table, row & column are','RDBMS vs a spreadsheet — why SQL scales','Core data types (INT, VARCHAR, DATE, BOOLEAN, DECIMAL)','Your first SELECT … FROM'] },
            { name:'Filtering & sorting', topics:['WHERE with =, <>, >, <, BETWEEN','AND / OR / NOT and precedence','IN, LIKE & wildcards (%, _)','IS NULL vs = NULL (a classic trap)','ORDER BY (ASC/DESC, multiple keys)','LIMIT / TOP / FETCH'] },
            { name:'Aggregation & grouping', topics:['COUNT, SUM, AVG, MIN, MAX','GROUP BY fundamentals','HAVING vs WHERE','DISTINCT & counting uniques',{t:'Conditional aggregation',sub:['SUM(CASE WHEN …)','Building simple pivots in SQL']}] },
            { name:'Joining tables', topics:[{t:'INNER JOIN',sub:['Matching on keys','One-to-many vs many-to-many']},'LEFT / RIGHT JOIN','FULL OUTER JOIN','SELF JOIN','Anti-joins (finding non-matches)','UNION vs UNION ALL'] },
            { name:'Shaping results', topics:['Aliases (AS) for columns & tables','CASE WHEN expressions','String functions (CONCAT, TRIM, SUBSTRING, REPLACE)','Date functions (DATEDIFF, DATE_TRUNC, EXTRACT)','CAST / CONVERT between types','Handling NULLs (COALESCE, NULLIF)'] }
          ] },
        { name:'Advanced SQL', summary:'What separates a hire from a “maybe” — subqueries, windows, performance.',
          sections:[
            { name:'Subqueries & CTEs', topics:['Scalar & correlated subqueries','Subqueries in WHERE / FROM / SELECT',{t:'Common Table Expressions (WITH)',sub:['Readable multi-step queries','Chaining several CTEs']},'Recursive CTEs (hierarchies & trees)'] },
            { name:'Window functions', topics:['OVER(), PARTITION BY, ORDER BY','ROW_NUMBER, RANK, DENSE_RANK','LAG & LEAD (period-over-period)','Running totals & moving averages','NTILE & percentiles','FIRST_VALUE / LAST_VALUE'] },
            { name:'Analytical patterns', topics:['Top-N per group','Month-over-month & year-over-year growth','Retention & cohort analysis','Funnel conversion in SQL','Sessionisation of events','De-duplication strategies'] },
            { name:'Performance & correctness', topics:['How indexes work (and when they help)','Reading a query plan (EXPLAIN)','SARGable filters & avoiding full scans','Anti-patterns (SELECT *, functions on filtered columns)','Transactions & ACID basics'] },
            { name:'Interview & on-the-job', topics:['Writing readable, reviewable SQL','Turning a business question into a query','Case drills: revenue, churn, growth, funnels','Timed mock SQL interview sets'] }
          ] }
      ] },
    python: {
      name:'Python', icon:'🐍', color:'#f01920',
      tagline:'From scripting to Pandas, NumPy & charts',
      blurb:'Python is the second pillar of modern data work and the gateway to data science and engineering. Start with core programming, then master the data libraries that do the real work.',
      hours:'~55–70 hrs', outcome:'Automate work, clean & analyse data with Pandas, and build the base for data science.',
      tracks:[
        { name:'Core Python', summary:'Programming fundamentals every data professional needs.',
          sections:[
            { name:'Getting set up', topics:['Install Python + VS Code / Jupyter','Anaconda vs pip & virtual environments','Scripts vs notebooks — when to use which'] },
            { name:'Language basics', topics:['Variables & data types (int, float, str, bool)','Operators & expressions','Strings & f-strings','Lists, tuples, sets & dictionaries','Indexing & slicing'] },
            { name:'Control flow & functions', topics:['if / elif / else','for & while loops','Comprehensions (list / dict / set)',{t:'Functions',sub:['Arguments, defaults, *args / **kwargs','Return values & scope']},'Lambda, map, filter','Error handling (try / except)'] },
            { name:'Working with data', topics:['Nested structures (lists of dicts)','Iterating & transforming collections','Reading & writing files (CSV, JSON, text)','Modules, imports & installing packages'] }
          ] },
        { name:'Python for Data (Libraries)', summary:'The analyst & scientist toolkit — NumPy, Pandas, visualisation.',
          sections:[
            { name:'NumPy', topics:['Arrays vs lists','Vectorised math & broadcasting','Aggregations across axes','Random numbers & sampling'] },
            { name:'Pandas — the core skill', topics:[{t:'Series & DataFrame',sub:['Creating & inspecting','dtypes & memory']},'Reading data (read_csv, read_excel, read_sql)','Selecting & filtering (loc, iloc, boolean masks)','GroupBy & aggregation','Merge, join & concat','Pivot tables & reshaping (melt / pivot)','Dates & time series (resample, rolling)','Missing data & duplicates','apply, map & vectorised string ops'] },
            { name:'Visualisation', topics:['Matplotlib fundamentals','Seaborn for statistical charts','Plotly for interactive charts','Choosing the right chart'] },
            { name:'From notebook to impact', topics:['Cleaning a messy real-world dataset','An end-to-end EDA workflow','Automating a recurring report','Your first model with scikit-learn'] }
          ] }
      ] },
    excel: {
      name:'Excel', icon:'📊', color:'#f01920',
      tagline:'Still the #1 tool in most analyst JDs',
      blurb:'Excel appears in more data job descriptions than any BI tool. Master the formulas, PivotTables and dashboards that hiring managers actually test.',
      hours:'~25–35 hrs', outcome:'Clean data, build PivotTable analyses, and ship interactive dashboards.',
      tracks:[
        { name:'Excel Foundations', summary:'The core skills and formulas every analyst must own.',
          sections:[
            { name:'Core skills', topics:['Navigation & essential keyboard shortcuts','Cell references (relative, absolute, mixed)','Number, date & custom formatting','Paste Special & fill tricks'] },
            { name:'Must-know formulas', topics:['IF, nested IF, IFS','VLOOKUP / HLOOKUP','XLOOKUP & INDEX-MATCH',{t:'Conditional math',sub:['SUMIF(S)','COUNTIF(S)','AVERAGEIF(S)']},'Text functions (LEFT, RIGHT, MID, TRIM, CONCAT)','Date functions (TODAY, DATEDIF, EOMONTH)','Error handling (IFERROR)'] },
            { name:'Data cleaning', topics:['Remove Duplicates & Text-to-Columns','Find & Replace with wildcards','Data Validation & drop-downs','Flash Fill'] }
          ] },
        { name:'Analysis & Dashboards', summary:'Turn raw data into decisions and visuals.',
          sections:[
            { name:'Analysis tools', topics:['Sorting & custom sorts','Filters & Advanced Filter','PivotTables (rows, columns, values, filters)','PivotCharts & slicers','Grouping dates & values','Calculated fields'] },
            { name:'Power features', topics:['Conditional formatting (rules, data bars, heatmaps)','What-If (Goal Seek, Data Tables, Scenarios)','Intro to Power Query (get & transform)','Intro to Power Pivot & the data model','Your first DAX measures'] },
            { name:'Dashboards & storytelling', topics:['Dashboard design principles','KPI cards & sparklines','Interactive dashboards with slicers','Presenting insights to stakeholders'] }
          ] }
      ] },
    powerbi: {
      name:'Power BI', icon:'📈', color:'#f01920',
      tagline:'The BI tool exploding across job posts',
      blurb:'Power BI is the fastest-growing requirement in analyst JDs. Go from connecting data to writing DAX and shipping dashboards stakeholders rely on.',
      hours:'~35–45 hrs', outcome:'Model data, write DAX, and publish refreshing dashboards in the Power BI Service.',
      tracks:[
        { name:'Power BI Essentials', summary:'Get data in, model it, and build clear visuals.',
          sections:[
            { name:'Get & shape data', topics:['Power BI Desktop tour','Connecting to sources (Excel, CSV, SQL, web)','Power Query: clean & transform','Merge & append queries','Data types & column profiling'] },
            { name:'Model your data', topics:['Star schema & why it matters','Relationships & cardinality','Fact vs dimension tables','Creating a proper date table'] },
            { name:'Build visuals', topics:['Core visuals (bar, line, card, table, matrix)','Slicers & filters (visual / page / report)','Drill-through & drill-down','Bookmarks & buttons','Formatting for clarity'] }
          ] },
        { name:'DAX & Pro Power BI', summary:'Where the real analysis — and the senior salary — happens.',
          sections:[
            { name:'DAX foundations', topics:['Calculated columns vs measures',{t:'Context',sub:['Row context','Filter context']},'CALCULATE — the heart of DAX','Aggregators (SUM, AVERAGE, COUNTROWS)','FILTER & ALL'] },
            { name:'Time intelligence & patterns', topics:['Totals, YTD, MTD','Month-over-month & year-over-year','Running totals','RANKX & top-N','Variance vs target'] },
            { name:'Ship it', topics:['Performance & model-size tips','Publishing to the Power BI Service','Refresh schedules & gateways','Row-level security (RLS)','Report UX best practices'] }
          ] }
      ] },
    stats: {
      name:'Statistics', icon:'🎯', color:'#f01920',
      tagline:'The reasoning behind the numbers',
      blurb:'Statistics is what turns a chart into a decision — and it is the backbone of data-scientist and product-analyst interviews. Build real intuition, not just formulas.',
      hours:'~30–40 hrs', outcome:'Reason about data correctly, run A/B tests, and answer analytical interview questions.',
      tracks:[
        { name:'Statistics for Analysts', summary:'Describe data and reason about uncertainty.',
          sections:[
            { name:'Descriptive statistics', topics:['Mean, median & mode','Variance & standard deviation','Percentiles, quartiles & IQR','Distributions & skew','Outliers and how to treat them'] },
            { name:'Probability basics', topics:['Probability rules','Conditional probability & Bayes (intuition)','Common distributions (normal, binomial, Poisson)','The Central Limit Theorem'] },
            { name:'Inference', topics:['Sampling & sampling bias','Confidence intervals','Hypothesis testing (null / alt, p-values)','t-test, chi-square & ANOVA — when to use each','Type I & Type II errors'] }
          ] },
        { name:'Applied for Data Roles', summary:'Make statistics decision-ready for the job.',
          sections:[
            { name:'Relationships & modelling', topics:['Correlation vs causation','Simple & multiple linear regression','Logistic regression (intuition)','R² & evaluating a model'] },
            { name:'Experimentation', topics:['A/B testing end-to-end','Choosing metrics & guardrails','Statistical vs practical significance','Reading & questioning results'] }
          ] }
      ] },
    ml: {
      name:'Machine Learning', icon:'🤖', color:'#f01920',
      tagline:'Turn data into predictions',
      blurb:'Machine learning is the leap from describing the past to predicting the future — and the core of every data-scientist role. Learn the workflow, the models, and how to ship them, without the maths overwhelm.',
      hours:'~50–65 hrs', outcome:'Frame a problem, build & evaluate models in scikit-learn, and explain the results.',
      tracks:[
        { name:'ML Foundations', summary:'The concepts and workflow behind every model.',
          sections:[
            { name:'Core concepts', topics:['What machine learning is (vs rule-based code)','Supervised vs unsupervised vs reinforcement','Features, labels & the train/test split','Overfitting, underfitting & the bias–variance tradeoff','The end-to-end ML workflow'] },
            { name:'Preparing data', topics:['Cleaning & handling missing values','Encoding categorical variables','Feature scaling (normalise vs standardise)','Feature engineering & selection','Cross-validation'] },
            { name:'Evaluating models', topics:['Regression metrics (MAE, RMSE, R²)','Classification metrics (accuracy, precision, recall, F1)','Confusion matrix & ROC-AUC','Choosing the right metric for the problem'] }
          ] },
        { name:'Algorithms & Applied ML', summary:'The models you’ll actually use on the job.',
          sections:[
            { name:'Supervised models', topics:['Linear & logistic regression',{t:'Tree-based models',sub:['Decision trees','Random forests','Gradient boosting (XGBoost, LightGBM)']},'k-Nearest Neighbours','Support Vector Machines','Naive Bayes'] },
            { name:'Unsupervised models', topics:['k-Means clustering','Hierarchical clustering','PCA & dimensionality reduction','Anomaly detection basics'] },
            { name:'Doing ML in Python', topics:['scikit-learn: fit / predict / score','Pipelines & preprocessing','Hyperparameter tuning (grid & random search)','Saving & loading models'] },
            { name:'Toward production', topics:['Intro to neural networks & deep learning','Avoiding data leakage','Model drift & monitoring (concept)','Explaining model results to stakeholders'] }
          ] }
      ] },
    genai: {
      name:'Gen AI', icon:'✨', color:'#f01920',
      tagline:'The skill every data pro now needs',
      blurb:'Generative AI has changed how every data role works. Start from “what is an LLM and an API” and build up to RAG, agents, and using AI safely in real data workflows — no ML background required.',
      hours:'~20–30 hrs', outcome:'Understand LLMs, prompt them well, and build grounded AI workflows for data tasks.',
      tracks:[
        { name:'Gen AI Foundations', summary:'What everyone in data should understand now.',
          sections:[
            { name:'The basics', topics:['What Generative AI is (vs traditional ML)','What an LLM (Large Language Model) is','Tokens, context windows & how models “read” text','What an API is & how an app calls an LLM','Models & providers (GPT, Claude, Gemini, open models)','Cost, latency & rate limits — the practical trade-offs'] },
            { name:'Prompting well', topics:['Anatomy of a strong prompt','Zero-shot, few-shot & role prompting','System vs user messages','Structured output (JSON) & formatting','Reducing hallucinations — grounding & constraints','Iterating & evaluating prompts'] }
          ] },
        { name:'Building with Gen AI', summary:'From chatbot to real data workflows.',
          sections:[
            { name:'Core building blocks', topics:['Embeddings & vector search (what & why)',{t:'Retrieval-Augmented Generation (RAG)',sub:['Chunking & indexing your documents','Retrieve → augment → generate']},'Function / tool calling','Agents & multi-step workflows (intro)'] },
            { name:'Gen AI for data roles', topics:['Writing SQL & Python with AI assistance','Summarising & extracting from documents','Exploring & cleaning data with LLMs','“Chat with your data” tools (concept)'] },
            { name:'Use it responsibly', topics:['Data privacy — what not to paste into public tools','Bias, accuracy & verifying outputs','Prompt injection & basic safety','Keeping a human in the loop'] }
          ] }
      ] },
    cloud: {
      name:'Cloud', icon:'☁️', color:'#f01920',
      tagline:'A must for data engineering',
      blurb:'Modern data runs on the cloud. This path takes you from “what is the cloud” to the storage, compute and data-platform services data engineers are hired for — vendor-agnostic, with AWS/Azure/GCP mapped along the way.',
      hours:'~35–45 hrs', outcome:'Understand cloud building blocks and stand up a basic cloud data pipeline.',
      tracks:[
        { name:'Cloud Foundations', summary:'The backbone of every modern data stack.',
          sections:[
            { name:'Cloud basics', topics:['What “the cloud” actually is','IaaS vs PaaS vs SaaS','The big three (AWS, Azure, GCP) at a glance','Regions, zones & the shared-responsibility model','Cost basics & free tiers'] },
            { name:'Core building blocks', topics:['Compute (VMs & serverless functions)','Object storage (S3 / Blob / GCS)','Managed databases (SQL & NoSQL)','Identity & access (IAM, roles, least privilege)','Networking basics (VPC, security groups)'] }
          ] },
        { name:'Cloud for Data & Engineering', summary:'What data engineers are actually hired for.',
          sections:[
            { name:'Data platforms', topics:['Cloud data warehouses (BigQuery, Redshift, Snowflake)','Data lakes & lakehouses','Managed ETL / ELT services','Orchestration (Airflow / managed schedulers)'] },
            { name:'Pipelines & practice', topics:[{t:'Building a data pipeline',sub:['Ingest → store → transform → serve','Batch vs streaming']},'Infrastructure as Code (Terraform basics)','Containers & Docker (intro)','CI/CD for data (concept)'] },
            { name:'Run it well', topics:['Monitoring & logging','Cost optimisation for data workloads','Security & compliance basics','Choosing the right service for the job'] }
          ] }
      ] }
    };
  var SKILL_ORDER = ['sql','python','excel','powerbi','stats','ml','genai','cloud'];

  /* clean, cohesive monochrome icons (inherit currentColor) */
  var S0='<svg class="rm-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">';
  var IC = {
    sql: S0+'<ellipse cx="12" cy="5.4" rx="7" ry="2.6"/><path d="M5 5.4V18c0 1.45 3.13 2.6 7 2.6s7-1.15 7-2.6V5.4"/><path d="M5 11.7c0 1.45 3.13 2.6 7 2.6s7-1.15 7-2.6"/></svg>',
    python: S0+'<path d="M8.5 7.5l-4 4.5 4 4.5"/><path d="M15.5 7.5l4 4.5-4 4.5"/><path d="M13.6 5.5l-3.2 13"/></svg>',
    excel: S0+'<rect x="4" y="4" width="16" height="16" rx="2.4"/><path d="M4 9.4h16M4 14.6h16M9.4 4v16M14.6 4v16"/></svg>',
    powerbi: S0+'<path d="M3.5 20.5h17"/><rect x="5" y="12" width="3.1" height="6" rx="1"/><rect x="10.45" y="8" width="3.1" height="10" rx="1"/><rect x="15.9" y="4.5" width="3.1" height="13.5" rx="1"/></svg>',
    stats: S0+'<path d="M3 19.5h18"/><path d="M3.5 19.5C7.2 19.5 8 6.5 12 6.5s4.8 13 8.5 13"/><circle cx="12" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
    ml: S0+'<rect x="7" y="7" width="10" height="10" rx="1.6"/><rect x="10" y="10" width="4" height="4" rx="1"/><path d="M10 7V4.5M14 7V4.5M10 19.5V17M14 19.5V17M7 10H4.5M7 14H4.5M19.5 10H17M19.5 14H17"/></svg>',
    genai: '<svg class="rm-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.3C12.6 8 13.2 8.6 17.7 9.2 13.2 9.8 12.6 10.4 12 15.1 11.4 10.4 10.8 9.8 6.3 9.2 10.8 8.6 11.4 8 12 3.3Z"/><path d="M18.2 13.8c.22 1.6.4 1.78 2 2-1.6.22-1.78.4-2 2-.22-1.6-.4-1.78-2-2 1.6-.22 1.78-.4 2-2Z"/></svg>',
    cloud: S0+'<path d="M17.5 10.3h-1.2A6 6 0 1 0 8 19.5h9.5a4.6 4.6 0 0 0 0-9.2Z"/></svg>',
    soon: S0+'<path d="M12 5v14M5 12h14"/></svg>'
  };
  var IC_DL   = '<svg class="rm-bic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4.2-4.2M12 15l4.2-4.2M4 20h16"/></svg>';
  var IC_LINK = '<svg class="rm-bic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 13.5a4 4 0 0 0 5.66 0l2.5-2.5a4 4 0 1 0-5.66-5.66l-1.3 1.3"/><path d="M14.5 10.5a4 4 0 0 0-5.66 0l-2.5 2.5a4 4 0 1 0 5.66 5.66l1.3-1.3"/></svg>';
  var IC_IN   = '<svg class="rm-bic li" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';

  /* role-based personalisation: recommended skills (in priority order) */
  var RECO = {
    'Data Analyst':['sql','excel','powerbi','stats','genai'],
    'Business Analyst':['excel','sql','powerbi','stats','genai'],
    'Product Analyst':['sql','stats','python','genai'],
    'Marketing Analyst':['excel','sql','powerbi','genai'],
    'Data Scientist':['python','stats','ml','sql','genai'],
    'Data Engineer':['sql','python','cloud','genai'],
    'Analytics Engineer':['sql','python','cloud','powerbi','genai'],
    'BI / MIS Analyst':['powerbi','excel','sql','genai']
  };
  var currentRole = ''; try{ currentRole = localStorage.getItem('rm_role')||''; }catch(_){ }

  /* ===================== helpers ===================== */
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function byId(id){return document.getElementById(id);}
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function toast(msg){var t=byId('rmToast'); if(!t)return; t.textContent=msg; t.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(function(){t.classList.remove('show');},3200);}
  function slug(s){return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');}

  function topicText(t){ return (t && typeof t==='object') ? t.t : t; }
  function eachTopic(skillKey, fn){ var sk=ROADMAPS[skillKey]; sk.tracks.forEach(function(tr,ti){ tr.sections.forEach(function(se,si){ se.topics.forEach(function(tp,pi){ fn(tr,se,tp,ti,si,pi); }); }); }); }
  function countTopics(skillKey){ var n=0; eachTopic(skillKey,function(){n++;}); return n; }
  function topicId(skillKey,ti,si,pi){ return skillKey+'.'+ti+'.'+si+'.'+pi; }

  /* ===================== progress (localStorage) ===================== */
  function doneMap(){ try{return JSON.parse(localStorage.getItem('rm_done')||'{}');}catch(_){return {};} }
  function saveDone(m){ try{localStorage.setItem('rm_done',JSON.stringify(m));}catch(_){} }
  function isDone(id){ return !!doneMap()[id]; }
  function toggleDone(id){ var m=doneMap(); if(m[id]) delete m[id]; else m[id]=1; saveDone(m); return !!m[id]; }
  function skillDone(skillKey){ var m=doneMap(), n=0; eachTopic(skillKey,function(tr,se,tp,ti,si,pi){ if(m[topicId(skillKey,ti,si,pi)]) n++; }); return n; }

  /* ===================== theme ===================== */
  function applyTheme(t){ document.documentElement.setAttribute('data-theme', t); try{localStorage.setItem('msql_theme',t);}catch(_){} var b=byId('rmThemeToggle'); if(b) b.textContent = (t==='dark'?'☀️':'🌙'); }
  function toggleTheme(){ applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'); }

  /* ===================== session / google login ===================== */
  function readSession(){ try{return JSON.parse(localStorage.getItem('msql_sess')||'null');}catch(_){return null;} }
  function loggedIn(){ var s=readSession(); return !!(s && s.access_token && s.user && s.user.id); }
  function userName(){ var s=readSession(); var u=s&&s.user; return (u&&((u.user_metadata&&(u.user_metadata.full_name||u.user_metadata.name))||(u.email&&u.email.split('@')[0])))||''; }
  function returnUrl(){ return window.location.origin + '/roadmaps' + (currentSkill?('?skill='+currentSkill):''); }
  function googleLogin(){ try{ localStorage.setItem('rm_pending_dl', currentSkill||''); }catch(_){ } window.location.href = AUTH + '/authorize?provider=google&redirect_to=' + encodeURIComponent(returnUrl()); }
  function handleCallback(){
    var hash=window.location.hash; if(hash.indexOf('access_token')<0) return;
    var q=new URLSearchParams(hash.slice(1)), at=q.get('access_token'); if(!at) return;
    var s={access_token:at, refresh_token:q.get('refresh_token'), expires_in:Number(q.get('expires_in')||3600), expires_at:Math.floor(Date.now()/1000)+Number(q.get('expires_in')||3600), token_type:q.get('token_type')||'bearer'};
    try{ localStorage.setItem('msql_sess', JSON.stringify(s)); }catch(_){}
    history.replaceState({},'', '/roadmaps' + (currentSkill?('?skill='+currentSkill):''));
    fetch(AUTH+'/user',{headers:{apikey:SUPABASE_ANON,Authorization:'Bearer '+at}}).then(function(r){return r.json();}).then(function(u){ if(u&&u.id){ s.user=u; try{localStorage.setItem('msql_sess',JSON.stringify(s));}catch(_){} } }).catch(function(){});
  }

  /* ===================== render: grid ===================== */
  var currentSkill = null;
  var skillView = byId('rmSkill'), gridView = byId('rmGrid'), heroEl = document.querySelector('.rm-hero');

  function ringSvg(pct){ var r=20,c=2*Math.PI*r,off=c*(1-pct/100); return '<svg class="rm-ring" viewBox="0 0 48 48" aria-hidden="true"><circle class="rt" cx="24" cy="24" r="'+r+'"/><circle class="rf" cx="24" cy="24" r="'+r+'" style="stroke-dasharray:'+c.toFixed(1)+';stroke-dashoffset:'+off.toFixed(1)+'"/></svg><span class="rm-ring-num">'+pct+'%</span>'; }

  function renderRoleBar(){
    var bar=byId('rmRoleBar'); if(!bar) return;
    var lead = currentRole ? ('Recommended skills for a <b>'+esc(currentRole)+'</b> appear first.') : 'Targeting a specific role? Personalise your path.';
    bar.innerHTML = '<div class="rm-role-lead">'+(currentRole?'🎯 ':'')+lead+(currentRole?' <button class="rm-role-clear" data-role-clear="1">Clear</button>':'')+'</div>'+
      '<div class="rm-role-chips">'+ROLES.map(function(r){return '<button class="rm-role-chip'+(currentRole===r?' on':'')+'" data-role="'+esc(r)+'">'+esc(r)+'</button>';}).join('')+'</div>';
  }
  function renderGrid(){
    var order=SKILL_ORDER.slice();
    var reco = currentRole && RECO[currentRole] ? RECO[currentRole] : null;
    if(reco){ order.sort(function(a,b){ var ia=reco.indexOf(a), ib=reco.indexOf(b); ia=ia<0?99:ia; ib=ib<0?99:ib; return ia-ib; }); }
    gridView.innerHTML = order.map(function(k){
      var s=ROADMAPS[k], total=countTopics(k), done=skillDone(k), pct=total?Math.round(done/total*100):0, rec = reco && reco.indexOf(k)>=0;
      return '<button class="rm-card'+(rec?' rec':'')+'" data-skill="'+k+'">'+
        (rec?'<span class="rm-reco">★ For '+esc(currentRole)+'</span>':'')+
        '<div class="rm-card-top"><span class="rm-ic">'+IC[k]+'</span>'+(done?'<span class="rm-card-ring">'+ringSvg(pct)+'</span>':'<span class="rm-card-arrow">→</span>')+'</div>'+
        '<h3>'+esc(s.name)+'</h3>'+
        '<p class="rm-card-tag">'+esc(s.tagline)+'</p>'+
        '<div class="rm-card-meta"><span>'+total+' topics</span><span>•</span><span>'+esc(s.hours)+'</span></div>'+
      '</button>';
    }).join('') + '<div class="rm-card rm-card-soon"><div class="rm-card-top"><span class="rm-ic">'+IC.soon+'</span></div><h3>More roadmaps</h3><p class="rm-card-tag">Tableau, Deep Learning, MLOps, Git &amp; more — curated next.</p><div class="rm-card-meta"><span>Coming soon</span></div></div>';
  }

  /* ===================== render: one skill ===================== */
  function topicRow(skillKey,tr,se,tp,ti,si,pi){
    var id=topicId(skillKey,ti,si,pi), done=isDone(id), txt=topicText(tp), hasSub = tp && typeof tp==='object' && tp.sub && tp.sub.length;
    var html='<div class="rm-topic'+(done?' done':'')+(hasSub?' has-sub':'')+'" data-tid="'+id+'">'+
      '<button class="rm-check" data-check="'+id+'" aria-label="Mark complete"><span class="rm-tick">✓</span></button>'+
      '<div class="rm-topic-body">'+
        '<button class="rm-topic-head"'+(hasSub?' data-subtoggle="1"':'')+'><span class="rm-topic-t">'+esc(txt)+'</span>'+(hasSub?'<span class="rm-sub-caret">▾</span>':'')+'</button>';
    if(hasSub){ html+='<div class="rm-sub"><div class="rm-sub-in"><ul>'+tp.sub.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div></div>'; }
    html+='</div></div>';
    return html;
  }
  function sectionBlock(skillKey,tr,se,ti,si){
    var doneN=0; se.topics.forEach(function(tp,pi){ if(isDone(topicId(skillKey,ti,si,pi))) doneN++; });
    var html='<div class="rm-sec" data-sec="'+ti+'-'+si+'">'+
      '<button class="rm-sec-head"><span class="rm-sec-dot"></span><span class="rm-sec-name">'+esc(se.name)+'</span><span class="rm-sec-count">'+doneN+'/'+se.topics.length+'</span><span class="rm-caret">▾</span></button>'+
      '<div class="rm-sec-body"><div class="rm-sec-in">'+se.topics.map(function(tp,pi){return topicRow(skillKey,tr,se,tp,ti,si,pi);}).join('')+'</div></div>'+
    '</div>';
    return html;
  }
  function trackBlock(skillKey,tr,ti){
    var total=0,done=0; tr.sections.forEach(function(se,si){ se.topics.forEach(function(tp,pi){ total++; if(isDone(topicId(skillKey,ti,si,pi))) done++; }); });
    var pct=total?Math.round(done/total*100):0;
    var html='<div class="rm-track'+(ti===0?' open':'')+'" data-track="'+ti+'">'+
      '<button class="rm-track-head"><span class="rm-track-n">'+(ti+1)+'</span>'+
        '<div class="rm-track-ttl"><b>'+esc(tr.name)+'</b><em>'+esc(tr.summary)+'</em></div>'+
        '<div class="rm-track-prog"><i style="width:'+pct+'%"></i></div>'+
        '<span class="rm-caret big">▾</span></button>'+
      '<div class="rm-track-body"><div class="rm-track-in">'+tr.sections.map(function(se,si){return sectionBlock(skillKey,tr,se,ti,si);}).join('')+'</div></div>'+
    '</div>';
    return html;
  }
  function renderSkill(key){
    currentSkill=key; var s=ROADMAPS[key]; if(!s){ showGrid(); return; }
    var total=countTopics(key), done=skillDone(key), pct=total?Math.round(done/total*100):0;
    skillView.innerHTML =
      '<div class="rm-sk-head">'+
        '<button class="rm-back" data-back="1">← All roadmaps</button>'+
        '<div class="rm-sk-hero">'+
          '<div class="rm-sk-hero-l"><div class="rm-sk-ic">'+IC[key]+'</div>'+
            '<div><div class="rm-sk-eyebrow">ROADMAP · BEGINNER → JOB-READY</div><h1>'+esc(s.name)+' <span>Roadmap</span></h1>'+
            '<p>'+esc(s.blurb)+'</p>'+
            '<div class="rm-sk-meta"><span>📚 '+total+' topics</span><span>⏱ '+esc(s.hours)+'</span><span>🎯 '+s.tracks.length+' tracks</span></div></div>'+
          '</div>'+
          '<div class="rm-sk-hero-r"><div class="rm-sk-ringwrap">'+ringSvg(pct)+'</div><span class="rm-sk-ringlbl">'+done+' / '+total+' done</span></div>'+
        '</div>'+
        '<div class="rm-sk-outcome">🏁 <b>Outcome:</b> '+esc(s.outcome)+'</div>'+
      '</div>'+
      '<div class="rm-tracks">'+s.tracks.map(function(tr,ti){return trackBlock(key,tr,ti);}).join('')+'</div>'+
      '<div class="rm-dlbar">'+
        '<div class="rm-dl-txt"><b>Take this roadmap with you.</b><span>Download a clean, branded PDF — curated &amp; verified by Nikhil Mishra, Co-founder.</span></div>'+
        '<div class="rm-dl-actions">'+
          '<button class="rm-btn li" data-share="linkedin">'+IC_IN+'Share on LinkedIn</button>'+
          '<button class="rm-btn ghost" data-share="copy">'+IC_LINK+'Copy link</button>'+
          '<button class="rm-btn primary" data-dl="1">'+IC_DL+'Download PDF</button>'+
        '</div>'+
      '</div>';
    window.scrollTo(0,0);
  }

  function showGrid(){ currentSkill=null; skillView.hidden=true; gridView.parentElement.hidden=false; if(heroEl) heroEl.style.display=''; renderRoleBar(); renderGrid(); try{ if(location.search) history.replaceState({},'','/roadmaps'); }catch(_){} window.scrollTo(0,0); }
  function showSkill(key){ gridView.parentElement.hidden=true; skillView.hidden=false; if(heroEl) heroEl.style.display='none'; renderSkill(key); try{ history.replaceState({},'','/roadmaps?skill='+key); }catch(_){} }

  /* ===================== PDF ===================== */
  function doDownload(){
    if(!loggedIn()){ googleLogin(); return; }
    var key=currentSkill, s=ROADMAPS[key]; if(!s) return;
    if(!window.jspdf || !window.jspdf.jsPDF){ toast('Preparing… tap again in a second.'); return; }
    var jsPDF=window.jspdf.jsPDF, doc=new jsPDF({unit:'pt',format:'a4'});
    var W=doc.internal.pageSize.getWidth(), H=doc.internal.pageSize.getHeight(), M=54, y=0;
    var RED=[240,25,32], INK=[17,17,17], MUT=[120,120,128];
    function footer(){ doc.setDrawColor(230); doc.line(M,H-46,W-M,H-46); doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(150);
      doc.text('Curated & verified by Nikhil Mishra · Co-founder, Analyst World', M, H-30);
      doc.text('analystworld.in/roadmaps', W-M, H-30, {align:'right'}); }
    function header(){
      doc.setFillColor(13,14,19); doc.rect(0,0,W,96,'F');
      doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(20); doc.text('Analyst', M, 44);
      var aw=doc.getTextWidth('Analyst'); doc.setTextColor(RED[0],RED[1],RED[2]); doc.text('World', M+aw+4, 44);
      doc.setTextColor(200,200,205); doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.text('ROADMAPS', M, 62);
      doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(15); doc.text(s.name+' Roadmap  ·  Beginner → Job-ready', M, 84);
      y=124;
    }
    header();
    doc.setTextColor(MUT[0],MUT[1],MUT[2]); doc.setFont('helvetica','normal'); doc.setFontSize(9.5);
    doc.text(doc.splitTextToSize('Reverse-engineered from 28,000+ data job descriptions across Naukri, LinkedIn & more. Relevant for Data / Business / Product / Marketing Analysts, Data Scientists, Data & Analytics Engineers.', W-M*2), M, y); y+=34;
    function ensure(h){ if(y+h>H-60){ footer(); doc.addPage(); header(); } }
    s.tracks.forEach(function(tr,ti){
      ensure(40);
      doc.setFillColor(RED[0],RED[1],RED[2]); doc.circle(M+7,y-3,7,'F'); doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.text(String(ti+1),M+7,y,{align:'center'});
      doc.setTextColor(INK[0],INK[1],INK[2]); doc.setFontSize(13); doc.text(tr.name, M+22, y); y+=15;
      doc.setTextColor(MUT[0],MUT[1],MUT[2]); doc.setFont('helvetica','italic'); doc.setFontSize(9); doc.text(tr.summary, M+22, y); y+=18;
      tr.sections.forEach(function(se,si){
        ensure(26);
        doc.setFont('helvetica','bold'); doc.setFontSize(10.5); doc.setTextColor(INK[0],INK[1],INK[2]); doc.text(se.name, M+22, y); y+=14;
        se.topics.forEach(function(tp){
          var lines=doc.splitTextToSize('•  '+topicText(tp), W-M*2-34);
          ensure(lines.length*12+2);
          doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor(55,55,60); doc.text(lines, M+34, y); y+=lines.length*12+1;
          if(tp && typeof tp==='object' && tp.sub){ tp.sub.forEach(function(x){ var sl=doc.splitTextToSize('–  '+x, W-M*2-50); ensure(sl.length*11+1); doc.setTextColor(120,120,128); doc.setFontSize(8.8); doc.text(sl, M+50, y); y+=sl.length*11; }); }
        });
        y+=6;
      });
      y+=8;
    });
    footer();
    doc.save('AnalystWorld-'+key+'-roadmap.pdf');
    toast('Your '+s.name+' roadmap is downloading.');
  }

  /* ===================== share ===================== */
  function shareLinkedIn(){ var url=returnUrl(); window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(url),'_blank','noopener,width=640,height=600'); }
  function copyLink(){ var url=returnUrl(); var cap='Following the Analyst World '+(ROADMAPS[currentSkill]?ROADMAPS[currentSkill].name:'')+' roadmap to land a data role 🚀 '+url;
    if(navigator.clipboard){ navigator.clipboard.writeText(cap).then(function(){toast('Link + caption copied.');},function(){toast(url);}); } else { toast(url); } }

  /* ===================== events ===================== */
  document.addEventListener('click', function(ev){
    var el;
    if((el=ev.target.closest('[data-skill]'))){ showSkill(el.getAttribute('data-skill')); return; }
    if(ev.target.closest('[data-back]')){ showGrid(); return; }
    if(ev.target.closest('[data-role-clear]')){ currentRole=''; try{localStorage.removeItem('rm_role');}catch(_){} renderRoleBar(); renderGrid(); return; }
    if((el=ev.target.closest('[data-role]'))){ var r=el.getAttribute('data-role'); currentRole=(currentRole===r?'':r); try{ currentRole?localStorage.setItem('rm_role',currentRole):localStorage.removeItem('rm_role'); }catch(_){} renderRoleBar(); renderGrid(); return; }
    if((el=ev.target.closest('.rm-track-head'))){ el.parentElement.classList.toggle('open'); return; }
    if((el=ev.target.closest('.rm-sec-head'))){ el.parentElement.classList.toggle('open'); return; }
    if((el=ev.target.closest('[data-subtoggle]'))){ el.closest('.rm-topic').classList.toggle('sub-open'); return; }
    if((el=ev.target.closest('[data-check]'))){ var id=el.getAttribute('data-check'); toggleDone(id); refreshProgress(id); return; }
    if(ev.target.closest('[data-dl]')){ doDownload(); return; }
    if((el=ev.target.closest('[data-share]'))){ el.getAttribute('data-share')==='copy'?copyLink():shareLinkedIn(); return; }
    if(ev.target.closest('#rmThemeToggle')){ toggleTheme(); return; }
  });
  function refreshProgress(id){
    var row=skillView.querySelector('.rm-topic[data-tid="'+id+'"]'); if(row) row.classList.toggle('done', isDone(id));
    // update section + track + hero counts without a full re-render
    var s=ROADMAPS[currentSkill]; if(!s) return;
    skillView.querySelectorAll('.rm-sec').forEach(function(secEl){
      var p=secEl.getAttribute('data-sec').split('-'), ti=+p[0], si=+p[1], se=s.tracks[ti].sections[si], d=0;
      se.topics.forEach(function(tp,pi){ if(isDone(topicId(currentSkill,ti,si,pi))) d++; });
      var c=secEl.querySelector('.rm-sec-count'); if(c) c.textContent=d+'/'+se.topics.length;
    });
    skillView.querySelectorAll('.rm-track').forEach(function(trEl){
      var ti=+trEl.getAttribute('data-track'), tr=s.tracks[ti], tot=0,d=0;
      tr.sections.forEach(function(se,si){ se.topics.forEach(function(tp,pi){ tot++; if(isDone(topicId(currentSkill,ti,si,pi))) d++; }); });
      var bar=trEl.querySelector('.rm-track-prog i'); if(bar) bar.style.width=(tot?Math.round(d/tot*100):0)+'%';
    });
    var total=countTopics(currentSkill), done=skillDone(currentSkill), pct=total?Math.round(done/total*100):0;
    var rw=skillView.querySelector('.rm-sk-ringwrap'); if(rw) rw.innerHTML=ringSvg(pct);
    var lbl=skillView.querySelector('.rm-sk-ringlbl'); if(lbl) lbl.textContent=done+' / '+total+' done';
  }

  /* ===================== init ===================== */
  (function init(){
    applyTheme(localStorage.getItem('msql_theme')||'light');
    handleCallback();
    var qs=new URLSearchParams(location.search), sk=qs.get('skill');
    if(sk && ROADMAPS[sk]) showSkill(sk); else showGrid();
    // resume a pending download after google login
    var pend=null; try{ pend=localStorage.getItem('rm_pending_dl'); }catch(_){}
    if(pend!==null){ try{localStorage.removeItem('rm_pending_dl');}catch(_){}
      if(loggedIn()){ if(pend && ROADMAPS[pend]){ showSkill(pend); } setTimeout(doDownload, 700); } }
    // roles marquee fill
    var rl=byId('rmRoles'); if(rl) rl.innerHTML = ROLES.concat(ROLES).map(function(r){return '<span>'+esc(r)+'</span>';}).join('<i>•</i>');
  })();
})();
