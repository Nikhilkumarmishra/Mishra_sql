/* Run with external test dependencies; production has no npm dependencies.
 * See docs/new-homepage.md for setup. Screenshots stay outside the repository.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const {launch, legacyDependencies, freezeLegacy} = require('./browser-helpers.cjs');
const {default: AxeBuilder} = require('@axe-core/playwright');
const initSqlJs = require('sql.js');
const base = process.env.AW_BASE_URL || 'http://localhost:3000';
const output = process.env.AW_QA_DIR || '/home/user/aw-qa';
fs.mkdirSync(output, {recursive:true});
const report = {viewports:[], tests:[], errors:[], legacyNetwork:'CDN same-version npm assets; Supabase read responses stubbed empty. No live account writes.'};
const passed = message => {report.tests.push(message); console.log('PASS',message)};
const legacySource = fs.readFileSync('app.js','utf8');
const questions = vm.runInNewContext(legacySource.slice(0,legacySource.indexOf('// ← end of QUESTIONS array')) + '\nQUESTIONS;');
const learn = {};
vm.runInNewContext(fs.readFileSync('learn-data.js','utf8'),learn);
const slug = value => value.toLowerCase().replace(/[()]/g,'').replace(/[^a-z0-9\s_-]/g,' ').replace(/[\s_]+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');
const sqlText = page => page.locator('.aw-code-line').allTextContents().then(lines=>lines.join('\n'));

(async()=>{
  const baselineCommit = '8b059f1f59bddadc587fddf2a9185d3e79e2fc3a';
  const before = JSON.parse(execFileSync('git',['show',baselineCommit+':vercel.json'],{encoding:'utf8'}));
  const after = JSON.parse(fs.readFileSync('vercel.json','utf8'));
  assert.deepEqual(after.rewrites.slice(2),before.rewrites);
  assert.deepEqual(after.rewrites.slice(0,2),[
    {source:'/new-page',destination:'/new-page.html'}, {source:'/new-page/',destination:'/new-page.html'}]);
  const originalFiles = new Set(execFileSync('git',['ls-tree','-r','--name-only',baselineCommit],{encoding:'utf8'}).trim().split('\n'));
  const changed = execFileSync('git',['diff','--name-only',baselineCommit],{encoding:'utf8'}).trim().split('\n').filter(file=>originalFiles.has(file));
  assert.deepEqual(changed,['vercel.json']);
  passed('Every existing tracked file unchanged except the two additive exact Vercel rewrites');
  const SQL = await initSqlJs();
  const browser = await launch();
  try {
    const context = await browser.newContext({viewport:{width:1440,height:1000},colorScheme:'light',reducedMotion:'reduce'});
    const page = await context.newPage();
    const pageErrors = [], failed = [], external = [];
    page.on('pageerror',e=>pageErrors.push(e.message));
    page.on('requestfailed',r=>failed.push(r.url()));
    page.on('request',r=>{if(!r.url().startsWith(base)) external.push(r.url())});
    await page.goto(base+'/new-page');
    await page.evaluate(()=>document.fonts.ready);
    assert.match(await page.title(),/AnalystWorld.*SQL/);
    assert.equal(await page.locator('h1').count(),1);
    await page.reload();
    assert.equal(new URL(page.url()).pathname,'/new-page');
    for(const route of ['/new-page/','/new-page.html']){await page.goto(base+route);assert.equal(await page.locator('h1').count(),1)}
    await page.goto(base+'/new-page');
    passed('Direct /new-page, trailing slash, document route and browser refresh');
    for(const width of [360,390,768,1024,1440]){
      for(const theme of ['light','dark']){
        await page.setViewportSize({width,height:900});
        await page.selectOption('#aw-theme',theme);
        assert.equal(await page.locator('html').getAttribute('data-aw-theme'),theme);
        const dimensions=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));
        assert.ok(dimensions.scroll<=dimensions.viewport,`No overflow at ${width}/${theme}`);
        for(const tab of ['select','aggregate','join']){
          await page.locator(`#aw-tab-${tab}`).click();
          assert.equal(await page.locator('.aw-concepts [aria-selected=true]').count(),1);
          assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
        }
        await page.locator('#aw-tab-select').click();
        await page.screenshot({path:path.join(output,`new-${width}-${theme}.png`),fullPage:true,animations:'disabled'});
        const axe = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
        if(axe.violations.length) console.log(JSON.stringify(axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),null,2));
        assert.equal(axe.violations.length,0,`Axe ${width}/${theme}`);
        report.viewports.push({width,theme,overflow:false,axeViolations:0});
      }
    }
    passed('Five viewport widths × both themes; no overflow; zero automated WCAG A/AA violations');
    for(const [tab,num] of [['select','26'],['aggregate','01'],['join','48']]){
      await page.locator(`#aw-tab-${tab}`).click();
      const question=questions.find(q=>q.num===num);
      assert.equal(await page.locator('#aw-example-title').textContent(),question.title);
      const query=await sqlText(page);
      const db=new SQL.Database();db.run(question.seed);
      const result=db.exec(query)[0];db.close();
      const displayed=await page.locator('#aw-result tbody tr').evaluateAll(rows=>rows.map(r=>[...r.cells].map(c=>c.textContent)));
      assert.deepEqual(displayed,result.values.map(r=>r.map(String)));
      for(const test of question.testCases){
        const testDb=new SQL.Database();testDb.run(test.seed||question.seed);
        const res=testDb.exec(query)[0];testDb.close();
        const rows=res.values.map(row=>Object.fromEntries(res.columns.map((key,i)=>[key,row[i]])));
        assert.ok(test.check(rows),question.title+': '+test.name);
      }
    }
    passed('All three preview queries match seeded database results and pass original question test cases');
    const links=await page.locator('a[href]').evaluateAll(items=>items.map(a=>a.getAttribute('href')));
    for(const href of links){
      assert.ok(href && href!=='#');
      if(href.startsWith('#')) assert.ok(await page.locator(href).count());
      if(href.startsWith('/learn/')){
        const [, , mod,topic]=href.split('/');const data=learn.LEARN_DATA.find(m=>slug(m.title)===mod);assert.ok(data,href);
        const entry=topic?data.topics.find(t=>slug(t.title)===topic):data.topics[0];assert.ok(entry,href);assert.ok(learn.LEARN_CONTENT[entry.id]?.length>100,href);
      }
      if(href.startsWith('/problems/')&&!href.includes('advanced')){
        const q=questions.find(q=>q.num===href.split('/')[2]);assert.ok(q);assert.equal(href,`/problems/${q.num}/${slug(q.title)}`);
      }
    }
    passed('All local anchors and lesson/question destinations correspond to real content');
    await page.selectOption('#aw-theme','dark');await page.reload();assert.equal(await page.locator('html').getAttribute('data-aw-theme'),'dark');
    await page.emulateMedia({colorScheme:'light'});assert.equal(await page.locator('html').getAttribute('data-aw-theme'),'dark');
    await page.selectOption('#aw-theme','system');await page.emulateMedia({colorScheme:'dark'});await page.waitForFunction(()=>document.documentElement.dataset.awTheme==='dark');
    await page.emulateMedia({colorScheme:'light'});await page.waitForFunction(()=>document.documentElement.dataset.awTheme==='light');
    const keys=await page.evaluate(()=>Object.keys(localStorage));assert.deepEqual(keys,['aw-new-theme']);
    passed('Manual theme persists; system tracks OS changes; no legacy localStorage keys touched');
    await page.locator('#aw-tab-select').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#aw-tab-aggregate').getAttribute('aria-selected'),'true');
    await page.keyboard.press('End');assert.equal(await page.locator('#aw-tab-join').getAttribute('aria-selected'),'true');
    await page.keyboard.press('Home');assert.equal(await page.locator('#aw-tab-select').getAttribute('aria-selected'),'true');
    await page.setViewportSize({width:390,height:844});
    const menu=page.locator('.aw-menu-button');await menu.focus();await page.keyboard.press('Enter');assert.equal(await menu.getAttribute('aria-expanded'),'true');
    await page.keyboard.press('Escape');assert.equal(await menu.getAttribute('aria-expanded'),'false');assert.ok(await menu.evaluate(el=>el===document.activeElement));
    await menu.click();await page.locator('#aw-mobile-nav a[href="#beginners"]').click();assert.equal(await menu.getAttribute('aria-expanded'),'false');assert.equal(new URL(page.url()).hash,'#beginners');
    await page.evaluate(()=>window.scrollTo(0,0));await menu.click();await page.locator('h1').click();assert.equal(await menu.getAttribute('aria-expanded'),'false');
    await menu.click();await page.setViewportSize({width:1440,height:900});await page.waitForFunction(()=>document.querySelector('.aw-menu-button').getAttribute('aria-expanded')==='false');
    assert.equal(await page.locator('html').evaluate(el=>getComputedStyle(el).scrollBehavior),'auto');
    assert.equal(await page.locator('.aw-hero-copy').evaluate(el=>getComputedStyle(el).animationName),'none');
    passed('Keyboard tabs, mobile menu, Escape focus restoration, anchors, outside-click and reduced-motion');
    assert.deepEqual(pageErrors,[]);assert.deepEqual(failed,[]);assert.deepEqual(external,[]);
    passed('No new-page runtime errors, missing assets, external requests or analytics');
    const blocked=await browser.newContext({colorScheme:'dark'});await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('Storage blocked')}})});
    const bp=await blocked.newPage();await bp.goto(base+'/new-page');await bp.selectOption('#aw-theme','light');assert.equal(await bp.locator('html').getAttribute('data-aw-theme'),'light');await blocked.close();
    const nojs=await browser.newContext({javaScriptEnabled:false,colorScheme:'dark'});const np=await nojs.newPage();await np.goto(base+'/new-page');assert.ok(await np.locator('h1').isVisible());assert.equal(await np.locator('html').evaluate(el=>getComputedStyle(el).colorScheme),'dark');await nojs.close();
    passed('Blocked localStorage does not break controls; static content and system theme survive disabled JS');
    await context.close();

    const legacyBrowser=await launch(true);
    const legacy=await legacyBrowser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1});
    const lp=await legacy.newPage();await legacyDependencies(lp);
    await lp.goto(base+'/home');await freezeLegacy(lp);
    await lp.screenshot({path:path.join(output,'home-after.png'),fullPage:true});
    const baseline=path.join(output,'home-before.png');
    if(fs.existsSync(baseline)) {
      assert.ok(fs.readFileSync(baseline).equals(fs.readFileSync(path.join(output,'home-after.png'))),'Home before/after screenshot exact match');
      passed('Original /home before/after screenshot is byte-identical (same local dependency fixtures)');
    }
    await lp.goto(base+'/new-page');await lp.locator('.aw-hero-actions .aw-button').click();
    await lp.waitForSelector('#app-page.active');assert.match(lp.url(),/\/problems\/26\/show-all-employee-names/);
    await lp.evaluate(()=>{editor.setValue('SELECT name FROM employees;');runQuery()});
    assert.equal(await lp.locator('#outputStatus').textContent(),'3 rows');assert.match(await lp.locator('#outputBody').textContent(),/Alice/);
    await lp.evaluate(()=>submitQuery());assert.equal(await lp.locator('#outputLabel').textContent(),'Login required');assert.ok(await lp.locator('#loginEmail').isVisible());
    passed('Primary CTA opens original editor; original Run works unauthenticated; Submit retains login requirement');
    await lp.goto(base+'/profile');await lp.waitForSelector('#loginEmail',{state:'visible'});assert.match(lp.url(),/\/home$/);
    passed('Log in/progress URL invokes the existing login flow');
    await lp.goto(base+'/learn/introduction-to-sql/your-first-sql-query');await lp.waitForSelector('#learn-page.active');assert.match(await lp.locator('#learn-page').textContent(),/Your First SQL Query/);
    await lp.goto(base+'/problems/01/first-and-last-page-of-each-session?track=advanced');await lp.waitForSelector('#app-page.active');assert.equal(await lp.evaluate(()=>activeTrack),'advanced');assert.equal(await lp.evaluate(()=>filteredQuestions[currentQ].title),'First and Last Page of Each Session');
    await lp.reload();await lp.waitForSelector('#app-page.active');assert.equal(await lp.evaluate(()=>activeTrack),'advanced');
    passed('Beginner lesson and advanced-track deep link/refresh work through the original router');
    await lp.goto(base+'/resources');await lp.waitForSelector('#resources-page.active');
    await lp.goto(base+'/home#questions-section');await lp.waitForSelector('#landing-page.active');assert.ok(await lp.locator('#landingQCards').textContent());
    passed('Existing resource navigation and full practice catalogue still render');
    await legacyBrowser.close();
  } finally {await browser.close()}
  fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2));
  console.log('All checks passed. Artifacts:',output);
})().catch(e=>{report.errors.push(e.stack);fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2));console.error(e);process.exit(1)});
