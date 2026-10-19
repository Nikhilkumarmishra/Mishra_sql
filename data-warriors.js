/* Data Warriors — landing + workspace. Isolated page; reuses the same
   Supabase project and msql_sess session as AnalystWorld. All challenge
   state flows through the owner-scoped dw_* RPCs. */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
  var AUTH = SUPABASE_URL + '/auth/v1';
  var API = SUPABASE_URL + '/rest/v1';

  var dialog = document.getElementById('authDialog');
  var authContent = document.getElementById('authContent');
  var toastEl = document.getElementById('toast');
  var session = null, toastTimer;
  var state = null, currentRange = 7, currentView = 'dashboard', wsBound = false, community = null;
  var SOURCES = ['LinkedIn','Naukri','Hirist','Company site','Referral','Other'];
  var RANGES = [['Today',1],['3 days',3],['7 days',7],['10 days',10],['15 days',15],['30 days',30],['45 days',45]];

  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function toast(msg){toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){toastEl.classList.remove('show');},3400);}
  function readSession(){try{return JSON.parse(localStorage.getItem('msql_sess')||'null');}catch(_){return null;}}
  function saveSession(s){session=s;try{localStorage.setItem('msql_sess',JSON.stringify(s));}catch(_){}}
  function displayName(){var u=session&&session.user;return (u&&((u.user_metadata&&(u.user_metadata.full_name||u.user_metadata.name))||(u.email&&u.email.split('@')[0])))||'Warrior';}
  function authHeaders(){return {'Content-Type':'application/json','apikey':SUPABASE_ANON};}
  function tzGuess(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||'Asia/Kolkata';}catch(_){return 'Asia/Kolkata';}}
  function normUrl(u){ u=String(u||'').trim(); if(!u) return null; if(!/^https?:\/\//i.test(u)) u='https://'+u.replace(/^\/+/,''); return u; }
  // Refresh the access token using the stored refresh token.
  async function refreshNow(){
    var s=session||readSession(); if(!s||!s.refresh_token) return false;
    try{
      var rr=await fetch(AUTH+'/token?grant_type=refresh_token',{method:'POST',headers:authHeaders(),body:JSON.stringify({refresh_token:s.refresh_token})});
      var r=await rr.json();
      if(r&&r.access_token){ r.expires_at=Math.floor(Date.now()/1000)+(r.expires_in||3600); if(!r.user&&s.user) r.user=s.user; saveSession(r); return true; }
    }catch(_){}
    return false;
  }
  async function freshToken(){
    if(!session||!session.access_token) return SUPABASE_ANON;
    if(session.expires_at && Date.now()/1000 > session.expires_at-60){ await refreshNow(); }
    return (session&&session.access_token)?session.access_token:SUPABASE_ANON;
  }
  async function rpc(name, params){
    function call(tok){ return fetch(API+'/rpc/'+name,{method:'POST',headers:{'Content-Type':'application/json','apikey':SUPABASE_ANON,'Authorization':'Bearer '+tok},body:JSON.stringify(params||{})}); }
    var token = await freshToken();
    var res = await call(token);
    if(res.status===401 && session && session.refresh_token){ if(await refreshNow()){ res = await call(session.access_token); } }
    var data = await res.json().catch(function(){return null;});
    if(!res.ok){
      var msg=(data&&(data.message||data.hint||data.details))||'';
      if(res.status===401 || /jwt|token|expired/i.test(msg)){ throw new Error('Your session expired — please log in again.'); }
      throw new Error(msg||'Something went wrong. Please try again.');
    }
    return data;
  }

  async function validSession(){
    var s=readSession(); if(!s||!s.access_token) return null;
    if(s.expires_at && Date.now()/1000 > s.expires_at-60){
      if(!s.refresh_token) return null;
      try{
        var rr=await fetch(AUTH+'/token?grant_type=refresh_token',{method:'POST',headers:authHeaders(),body:JSON.stringify({refresh_token:s.refresh_token})});
        var refreshed=await rr.json(); if(!refreshed.access_token) return null;
        refreshed.expires_at=Math.floor(Date.now()/1000)+(refreshed.expires_in||3600); saveSession(refreshed); s=refreshed;
      }catch(_){return null;}
    }
    if(!s.user||!s.user.id){
      try{var ur=await fetch(AUTH+'/user',{headers:{apikey:SUPABASE_ANON,Authorization:'Bearer '+s.access_token}});var u=await ur.json();if(u.id){s.user=u;saveSession(s);}}catch(_){}
    }
    return s.user&&s.user.id?s:null;
  }

  /* ---------- account area / nav ---------- */
  function renderAccount(){
    var el=document.getElementById('accountArea'); if(!el) return;
    if(session&&session.user){
      el.innerHTML='<span class="sign">'+esc(session.user.email||displayName())+'</span> · <button class="link-btn" data-action="logout">Log out</button>';
    }else{ el.innerHTML=''; }
  }

  /* ---------- primary CTA ---------- */
  function start(){
    if(session&&session.user){ register(); }
    else { try{localStorage.setItem('dw_pending_registration','1');}catch(_){ } showAuth('signup'); }
  }

  /* ---------- auth dialog ---------- */
  function formHtml(mode){
    var signup=mode==='signup';
    authContent.innerHTML='<form class="auth-form" id="authForm">'+
      '<h2>'+(signup?'Create your free workspace':'Welcome back')+'</h2>'+
      '<p>'+(signup?'Your AnalystWorld account is your Data Warriors account — no second login.':'Log in with the account you use on AnalystWorld.')+'</p>'+
      (signup?'<label for="dwName">Full name</label><input id="dwName" name="name" autocomplete="name" required maxlength="100">':'')+
      '<label for="dwEmail">Email</label><input id="dwEmail" name="email" type="email" autocomplete="email" required>'+
      '<label for="dwPassword">Password</label><input id="dwPassword" name="password" type="password" autocomplete="'+(signup?'new-password':'current-password')+'" minlength="6" required>'+
      '<div class="auth-error" id="authError"></div>'+
      '<button class="btn primary" type="submit">'+(signup?'Create account & continue':'Log in')+'</button>'+
      '<p class="switch">'+(signup?'Already have an account?':'New to AnalystWorld?')+' <button type="button" data-action="auth-switch" data-mode="'+(signup?'login':'signup')+'">'+(signup?'Log in':'Create account')+'</button></p>'+
      '<p class="switch"><button type="button" data-action="google-login">Continue with Google</button></p>'+
    '</form>';
  }
  function showAuth(mode){formHtml(mode);if(!dialog.open)dialog.showModal();}
  function safeReturn(){return window.location.origin+'/data-warriors?join=1';}

  async function authenticate(ev){
    ev.preventDefault();
    var form=ev.target,fd=new FormData(form),signup=!!fd.get('name');
    var email=String(fd.get('email')||'').trim(),password=String(fd.get('password')||'');
    var err=document.getElementById('authError'),btn=form.querySelector('button[type=submit]');
    err.textContent='';btn.disabled=true;btn.textContent='Please wait…';
    try{
      var endpoint=signup?'/signup?redirect_to='+encodeURIComponent(safeReturn()):'/token?grant_type=password';
      var body=signup?{email:email,password:password,data:{full_name:String(fd.get('name')).trim()}}:{email:email,password:password};
      var res=await fetch(AUTH+endpoint,{method:'POST',headers:authHeaders(),body:JSON.stringify(body)});
      var data=await res.json();
      if(!res.ok||data.error||data.msg){throw new Error(data.error_description||data.msg||'Could not authenticate. Check your details and try again.');}
      if(data.access_token){
        data.expires_at=Math.floor(Date.now()/1000)+(data.expires_in||3600);
        saveSession(data);dialog.close();renderAccount();
        toast('Welcome, '+displayName()+'.');
        afterAuth();
      }else{
        err.textContent='Account created. Check your email to confirm, then return here and log in.';
        btn.disabled=false;btn.textContent='Create account & continue';
      }
    }catch(e){err.textContent=e.message;btn.disabled=false;btn.textContent=signup?'Create account & continue':'Log in';}
  }
  function google(){try{localStorage.setItem('dw_pending_registration','1');}catch(_){}
    window.location.href=AUTH+'/authorize?provider=google&redirect_to='+encodeURIComponent(safeReturn());}
  async function handleCallback(){
    var hash=window.location.hash; if(hash.indexOf('access_token')<0) return;
    var q=new URLSearchParams(hash.slice(1)),access=q.get('access_token'); if(!access) return;
    var s={access_token:access,refresh_token:q.get('refresh_token'),expires_in:Number(q.get('expires_in')||3600),expires_at:Math.floor(Date.now()/1000)+Number(q.get('expires_in')||3600),token_type:q.get('token_type')||'bearer'};
    try{var u=await fetch(AUTH+'/user',{headers:{apikey:SUPABASE_ANON,Authorization:'Bearer '+access}}).then(function(r){return r.json();});if(u.id)s.user=u;}catch(_){}
    saveSession(s);history.replaceState({},'', '/data-warriors');
  }
  function logout(){session=null;state=null;community=null;profile=null;profilePrompted=false;try{localStorage.removeItem('msql_sess');}catch(_){}exitToLanding();renderAccount();toast('You are signed out.');}

  /* ---------- delegated events ---------- */
  document.addEventListener('click',function(ev){
    var b=ev.target.closest('[data-action]'); if(!b) return;
    var act=b.getAttribute('data-action');
    if(act==='start')start();
    else if(act==='auth-switch')formHtml(b.getAttribute('data-mode'));
    else if(act==='google-login')google();
    else if(act==='logout')logout();
  });
  document.addEventListener('submit',function(ev){if(ev.target.id==='authForm')authenticate(ev);else if(ev.target.id==='profileForm')saveProfileForm(ev);});

  /* ---------- nav: scrolled state + mobile toggle + smooth close ---------- */
  var nav=document.getElementById('nav'),navLinks=document.getElementById('navLinks'),navToggle=document.getElementById('navToggle');
  function onScroll(){nav.classList.toggle('scrolled',window.scrollY>8);}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(navToggle){navToggle.addEventListener('click',function(){var open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',open?'true':'false');});
    navLinks.addEventListener('click',function(e){if(e.target.tagName==='A'){navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}});}

  /* ---------- scroll reveal + emphasis (count-up, bar-fill) ---------- */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  // zero fill-bars up front so they animate from empty when their section reveals
  if(!reduce){document.querySelectorAll('[data-fill] .bar > b').forEach(function(b){b.setAttribute('data-w',b.style.width||'0');b.style.width='0';});}
  function countUp(el){
    var target=parseFloat(el.getAttribute('data-count')); if(isNaN(target))return;
    if(reduce){el.textContent=String(target);return;}
    var t0=performance.now(),dur=850; el.textContent='0';
    (function tick(now){var p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=String(Math.round(target*e));if(p<1)requestAnimationFrame(tick);})(performance.now());
  }
  function activate(el){
    el.classList.add('is-visible');
    if(!reduce){el.querySelectorAll('.bar > b[data-w]').forEach(function(b){var w=b.getAttribute('data-w');requestAnimationFrame(function(){b.style.width=w;});});}
    el.querySelectorAll('[data-count]').forEach(countUp);
  }
  var animated=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver'in window)){animated.forEach(activate);}
  else{
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){activate(en.target);io.unobserve(en.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.12});
    animated.forEach(function(el){io.observe(el);});
  }

  /* ================= WORKSPACE (registered users) ================= */
  var wsEl = document.getElementById('workspace');
  var prepCat = null, prepType = 'practice', jobStatus = 'applied', jobSource = 'LinkedIn', appFilter = 'all';
  var commDays = 7, commFormOpen = false;
  var COMM_FILTERS = [['24 hours',1],['3 days',3],['7 days',7],['All time',0]];
  var profile = null, profilePrompted = false, profileEditMode = false;
  var TARGET_ROLES = ['Data Analyst','Business Analyst','Product Analyst','Marketing Analyst','Growth Analyst','BI Analyst','Analytics Engineer','MIS Analyst','Data Scientist','Data Engineer','Financial Analyst','Operations Analyst','Other'];

  function profileComplete(){ return !!(profile && profile.complete); }
  function profileSubmitLabel(){ return profileEditMode ? 'Save changes' : 'Save &amp; start my journey →'; }
  function showProfileForm(isEdit){
    profileEditMode = !!isEdit;
    var pd=document.getElementById('profileDialog'), pc=document.getElementById('profileContent');
    if(!pd||!pc) return;
    var p=profile||{}, yNow=new Date().getFullYear(), years='';
    for(var y=yNow+1; y>=yNow-14; y--){ years+='<option value="'+y+'"'+(Number(p.passout_year)===y?' selected':'')+'>'+y+'</option>'; }
    var name = p.full_name || (session&&session.user&&session.user.user_metadata&&(session.user.user_metadata.full_name||session.user.user_metadata.name)) || '';
    pc.innerHTML =
      '<form class="profile-form" id="profileForm">'+
        '<div class="pf-head"><div class="pf-eyebrow">YOUR PROFILE</div><h2>'+(profileEditMode?'Edit your profile':'One quick step to begin 🚀')+'</h2>'+
        '<p>'+(profileEditMode?'Keep your details current — your target role and links power your dashboard and keep you job-ready.':'Set up your profile so your effort counts and you show up job-ready. Takes under a minute — then your Data Warriors journey starts.')+'</p></div>'+
        '<div class="pf-grid">'+
          '<label class="pf-field"><span>Full name</span><input name="full_name" required maxlength="100" value="'+esc(name)+'"></label>'+
          '<label class="pf-field"><span>Target role</span><select name="target_role" required><option value="">Select…</option>'+TARGET_ROLES.map(function(r){return '<option'+(p.target_role===r?' selected':'')+'>'+r+'</option>';}).join('')+'</select></label>'+
          '<label class="pf-field"><span>Highest qualification</span><input name="education" required maxlength="80" placeholder="e.g. B.Tech (CSE), B.Sc Statistics, MBA" value="'+esc(p.education||'')+'"></label>'+
          '<label class="pf-field"><span>Passout year</span><select name="passout_year" required><option value="">Select…</option>'+years+'</select></label>'+
          '<label class="pf-field wide"><span>LinkedIn profile</span><input name="linkedin" type="text" inputmode="url" required placeholder="linkedin.com/in/yourname" value="'+esc(p.linkedin_url||'')+'"></label>'+
          '<label class="pf-field wide"><span>Resume link <em>· Google Drive, public</em></span><input name="resume" type="text" inputmode="url" required placeholder="drive.google.com/file/…" value="'+esc(p.resume_url||'')+'"><small class="pf-hint">Upload your resume to Google Drive → <b>Share</b> → "Anyone with the link" → paste it here.</small></label>'+
          '<label class="pf-field wide"><span>GitHub <em>· optional</em></span><input name="github" type="text" inputmode="url" placeholder="github.com/yourname" value="'+esc(p.github_url||'')+'"></label>'+
        '</div>'+
        '<div class="pf-error" id="profileError"></div>'+
        '<button class="btn primary" type="submit">'+profileSubmitLabel()+'</button>'+
      '</form>';
    if(!pd.open) pd.showModal();
  }
  async function saveProfileForm(ev){
    ev.preventDefault();
    var f=ev.target, fd=new FormData(f), err=document.getElementById('profileError'), btn=f.querySelector('button[type=submit]');
    err.textContent=''; btn.disabled=true; btn.textContent='Saving…';
    try{
      await rpc('dw_save_profile',{p_full_name:fd.get('full_name'),p_target_role:fd.get('target_role'),p_education:fd.get('education'),p_passout_year:parseInt(fd.get('passout_year'),10),p_linkedin:fd.get('linkedin'),p_resume:fd.get('resume'),p_github:fd.get('github')||null});
      try{ profile=await rpc('dw_get_profile',{}); }catch(_){ profile={complete:true}; }
      try{ document.getElementById('profileDialog').close(); }catch(_){ }
      toast(profileEditMode ? 'Profile updated.' : 'Profile complete — welcome aboard! 🚀');
      renderWorkspace();
    }catch(e){ err.textContent=e.message; btn.disabled=false; btn.textContent=(profileEditMode?'Save changes':'Save & start my journey →'); }
  }

  function register(){
    if(!session){ try{localStorage.setItem('dw_pending_registration','1');}catch(_){ } showAuth('signup'); return Promise.resolve(); }
    return rpc('dw_register',{p_timezone:tzGuess()}).then(function(){ return loadWorkspace(currentRange); })
      .then(function(){ toast('Your workspace is ready.'); }).catch(function(e){ toast(e.message); });
  }
  async function loadWorkspace(days){
    if(days) currentRange = days;
    state = await rpc('dw_get_state',{p_days:currentRange});
    if(state && state.registered){ enterWorkspace(); } else { exitToLanding(); }
  }
  async function afterAuth(){
    var pending=false; try{pending=localStorage.getItem('dw_pending_registration')==='1'; localStorage.removeItem('dw_pending_registration');}catch(_){ }
    try{ var st=await rpc('dw_get_state',{p_days:currentRange}); if(st&&st.registered){ state=st; enterWorkspace(); return; } }catch(_){ }
    if(pending){ await register(); }
  }

  // ---- clean deep-link routing: /data-warriors/<view> ----
  var WS_VIEWS=['dashboard','applications','prep','community','profile'];
  function viewFromPath(){ var m=location.pathname.replace(/\/+$/,'').match(/\/data-warriors\/([a-z]+)$/i); return (m && WS_VIEWS.indexOf(m[1].toLowerCase())>=0) ? m[1].toLowerCase() : null; }
  function syncUrl(replace){ try{ var want='/data-warriors/'+currentView; if(location.pathname.replace(/\/+$/,'')!==want){ history[replace?'replaceState':'pushState']({dwView:currentView},'',want); } }catch(_){ } }

  async function enterWorkspace(){
    var main=document.getElementById('main'), nav=document.getElementById('nav'), ft=document.querySelector('.footer');
    if(main) main.hidden=true; if(nav) nav.style.display='none'; if(ft) ft.style.display='none';
    var bee=document.getElementById('bee'); if(bee) bee.style.display='none';
    var sp=document.getElementById('sparkles'); if(sp) sp.style.display='none';
    document.body.classList.add('ws-mode');
    wsEl.hidden=false;
    if(!wsBound){ bindWorkspace(); wsBound=true; }
    try{ profile = await rpc('dw_get_profile',{}); }catch(_){ if(!profile) profile={complete:true}; }
    var pv=viewFromPath(); currentView = pv || currentView || 'dashboard';
    renderWorkspace();
    syncUrl(true);
    if(currentView==='community' && !community) loadCommunity();
    window.scrollTo(0,0);
    if(!profileComplete() && !profilePrompted){ profilePrompted=true; showProfileForm(); }
  }
  function exitToLanding(){
    var main=document.getElementById('main'), nav=document.getElementById('nav'), ft=document.querySelector('.footer');
    if(main) main.hidden=false; if(nav) nav.style.display=''; if(ft) ft.style.display='';
    document.body.classList.remove('ws-mode');
    wsEl.hidden=true; wsEl.innerHTML=''; currentView='dashboard';
    try{ if(viewFromPath()) history.replaceState({},'','/data-warriors'); }catch(_){ }
  }
  function setView(v){ currentView=v; syncUrl(false); if(v==='community' && !community){ renderWorkspace(); loadCommunity(); } else { renderWorkspace(); } }
  function setRange(days){ loadWorkspace(days); }

  /* ---- small render helpers ---- */
  function pct(a,b){ return Math.max(0,Math.min(100, Math.round((a/Math.max(1,b))*100))); }
  function ring(count,target){
    var r=22,c=2*Math.PI*r,off=c*(1-Math.min(1,count/Math.max(1,target))),done=count>=target;
    return '<div class="ring '+(done?'done':'')+'"><svg viewBox="0 0 56 56" aria-hidden="true"><circle class="rt" cx="28" cy="28" r="'+r+'"/><circle class="rf" cx="28" cy="28" r="'+r+'" style="stroke-dasharray:'+c.toFixed(1)+';stroke-dashoffset:'+off.toFixed(1)+'"/></svg><span class="ring-num">'+count+'<em>/'+target+'</em></span></div>';
  }
  function statusChip(s){ return '<span class="st st-'+esc(s)+'">'+esc(s)+'</span>'; }
  function fmtDate(d){ if(!d) return ''; try{var x=new Date(d+'T00:00:00');return x.toLocaleDateString(undefined,{month:'short',day:'numeric'});}catch(_){return d;} }
  function fmtAgo(ts){ try{var s=(Date.now()-new Date(ts).getTime())/1000; if(s<60)return 'just now'; if(s<3600)return Math.floor(s/60)+'m ago'; if(s<86400)return Math.floor(s/3600)+'h ago'; return Math.floor(s/86400)+'d ago';}catch(_){return '';} }

  function renderWorkspace(){
    if(!state) return;
    var m=state.member, name=displayName(), ch=state.challenge||{day:0,target:45};
    var role=(profile&&profile.target_role)?profile.target_role:'';
    wsEl.innerHTML =
      '<header class="ws-head"><div class="ws-head-in">'+
        '<a class="brand" href="/home">Analyst<span>World</span><em>Data Warriors</em></a>'+
        '<div class="ws-head-mid">'+
          '<span class="ws-daychip">🔥 Day '+Math.max(0,ch.day||0)+'<i>/'+(ch.target||45)+'</i></span>'+
          (role?'<button class="ws-rolechip" data-ws="view" data-view="profile">🎯 '+esc(role)+'</button>':'')+
        '</div>'+
        '<div class="ws-head-right">'+
          '<label class="ws-range-wrap">Range <select class="ws-range" data-ws="range">'+RANGES.map(function(r){return '<option value="'+r[1]+'"'+(r[1]===currentRange?' selected':'')+'>'+r[0]+'</option>';}).join('')+'</select></label>'+
          '<span class="ws-user">'+esc(session&&session.user&&session.user.email||name)+'</span>'+
          '<button class="link-btn" data-ws="logout">Log out</button>'+
        '</div>'+
      '</div></header>'+
      '<nav class="ws-tabs">'+['dashboard','Dashboard','applications','Applications','prep','Practice','community','Community','profile','Profile'].reduce(function(a,_,i,arr){if(i%2)return a;return a+'<button class="ws-tab'+(arr[i]===currentView?' on':'')+'" data-ws="view" data-view="'+arr[i]+'">'+arr[i+1]+'</button>';},'')+'</nav>'+
      '<main class="ws-body">'+ (
        currentView==='applications'?viewApplications():
        currentView==='prep'?viewPrep():
        currentView==='community'?viewCommunity():
        currentView==='profile'?viewProfile():
        viewDashboard()
      )+'</main>';
  }

  /* ---- Dashboard view ---- */
  function onboardDone(){ try{return localStorage.getItem('dw_onboard_done')==='1';}catch(_){return false;} }
  function restartBanner(ch){
    var missed=ch.last_missed, rec=ch.recovery, recHtml;
    if(rec && rec.status==='pending'){ recHtml='<span class="rb-pending">⏳ Continuation requested — an admin will review within 24h. If it isn’t approved in time, your new streak stands from today.</span>'; }
    else if(rec && rec.status==='approved'){ recHtml='<span class="rb-ok">✓ Continuation approved — your streak carries on.</span>'; }
    else if(rec && rec.status==='rejected'){ recHtml='<span class="rb-no">Continuation wasn’t approved. Rebuild from Day 1 — you’ve got this.</span>'; }
    else { recHtml='<button class="btn ghost sm" data-ws="request-recovery" data-day="'+esc(missed||'')+'">Request a one-time continuation</button>'; }
    return '<section class="ws-sec"><div class="panel restart-banner">'+
      '<div class="rb-ic">↻</div><div class="rb-txt">'+
        '<h3>You missed '+(missed?fmtDate(missed):'a day')+' — back to Day 1</h3>'+
        '<p>The challenge is won on <b>consistency</b>, and the chain broke. That’s how it works — one missed day resets the count. Finish today’s mission to start a new streak, stronger this time.</p>'+
        '<div class="rb-actions">'+recHtml+'</div>'+
      '</div></div></section>';
  }
  function viewDashboard(){
    var k=state.kpis, t=state.today, tg=state.targets, s=state.streak, ch=state.challenge||{}, cats=state.categories||[];
    var active=cats.filter(function(c){return c.is_active;});
    var rangeLabel=(RANGES.filter(function(r){return r[1]===currentRange;})[0]||['',''])[0];
    var appsTarget=tg.applications, subjTarget=tg.prep;
    var appsOk=t.applications_applied>=appsTarget, subjectsOk=active.length>0 && active.every(function(c){return c.today_count>=subjTarget;});
    var todayComplete=!!ch.today_complete || (appsOk && subjectsOk);
    var day=Math.max(0,ch.day||0), target=ch.target||45, phase1=ch.phase1||10;
    var kpis=[['Applications',k.applications,'applied'],['Responses',k.responses,'heard back'],['Interviews',k.interviews,'reached'],['Prep entries',k.prep_sessions,'logged'],['Active days',k.active_days,'in range'],['Saved',k.saved,'parked']];
    var html='';
    if(!profileComplete()){
      html+='<section class="ws-sec"><div class="panel profile-prompt"><div class="pp-txt"><div class="pp-eyebrow">ALMOST THERE</div><h2>Complete your profile to start the challenge 🚀</h2><p>Add your target role, education and links — under a minute. It unlocks your tracker and keeps you job-ready.</p></div><button class="btn primary" data-ws="open-profile">Complete my profile</button></div></section>';
    }
    // restart / missed banner
    if(ch.restart){ html+=restartBanner(ch); }
    // challenge hero
    var phaseTxt, progPct=Math.min(100, Math.round(day/target*100));
    if(day===0){ phaseTxt='Today is <b>Day 1</b>. Finish all of today’s missions below to start your streak.'; }
    else if(day<phase1){ phaseTxt='<b>Day '+day+' of '+phase1+'</b> — proving your consistency. '+(phase1-day)+' more unbroken day'+(phase1-day===1?'':'s')+' to clear phase one.'; }
    else if(day<target){ phaseTxt='Consistency proven ✓ · <b>Day '+day+' of '+target+'</b>. '+(target-day)+' day'+(target-day===1?'':'s')+' to the finish line.'; }
    else { phaseTxt='🏆 45 days, every single one. You showed up — now go close the offer.'; }
    html+='<section class="ws-sec"><div class="panel chal-hero">'+
      '<div class="chal-top"><div class="chal-eyebrow">THE 45-DAY JOB CHALLENGE</div>'+
        '<div class="chal-day">Day <b>'+day+'</b><i>/ '+target+'</i></div></div>'+
      '<div class="chal-bar"><span style="width:'+progPct+'%"></span><i class="chal-tick" style="left:'+(phase1/target*100).toFixed(1)+'%" title="Day 10 — consistency proven"></i></div>'+
      '<p class="chal-phase">'+phaseTxt+'</p>'+
      '<div class="chal-stats"><span>🔥 Best streak <b>'+(ch.best||0)+'</b></span><span>✅ Complete days <b>'+(ch.complete_days||0)+'</b></span>'+(ch.qualified?'<span class="chal-q">Phase one cleared</span>':'')+'</div>'+
    '</div></section>';
    // today's mission — the 3 daily pillars
    html+='<section class="ws-sec"><div class="panel mission'+(todayComplete?' is-done':'')+'">'+
      '<div class="mission-h"><h3>Today’s mission</h3><span class="mission-date">'+fmtDate(state.today_date)+'</span></div>'+
      '<p class="mission-sub">Every day, three moves: apply to <b>'+appsTarget+'</b> companies, and log <b>'+subjTarget+'</b> topics in <b>each</b> subject you’re practising (keep communication in there too).</p>'+
      '<div class="mission-rings">'+
        '<div class="mr"><div class="mr-ring">'+ring(t.applications_applied,appsTarget)+'</div><span class="mr-name">Apply</span><button class="btn primary xs" data-ws="view" data-view="applications">Log</button></div>'+
        active.map(function(c){return '<div class="mr"><div class="mr-ring">'+ring(c.today_count,subjTarget)+'</div><span class="mr-name">'+esc(c.name)+'</span><button class="btn ghost xs" data-ws="view" data-view="prep">Log</button></div>';}).join('')+
      '</div>'+
      (active.length?'':'<p class="empty-note">Choose the subjects you’ll practise (SQL, Python, Communication…) in <a data-ws="view" data-view="prep">Practice</a> to switch on your daily mission.</p>')+
      (todayComplete
        ? '<div class="mission-done">✓ Today is complete — Day '+Math.max(1,day)+' locked in. Rest, and show up again tomorrow.</div>'
        : '<div class="mission-todo">Fill every ring to complete today and move the challenge forward.</div>')+
    '</div></section>';
    // community nudge
    html+='<section class="ws-sec"><a class="comm-nudge" data-ws="view" data-view="community"><span class="cn-ic">💼</span><span class="cn-txt"><b>Roles shared by the community</b><em>Explore openings other members posted — and apply to the ones relevant to you.</em></span><span class="cn-go">Explore →</span></a></section>';
    // progress KPIs
    html+='<section class="ws-sec"><div class="ws-sec-h"><h2>Your progress</h2><span class="ws-range-note">Last '+esc(rangeLabel)+'</span></div>'+
      '<div class="kpi-row">'+kpis.map(function(x){return '<div class="kpi"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><em>'+x[2]+'</em></div>';}).join('')+'</div></section>';
    // insights
    html+='<section class="ws-sec"><div class="ws-grid2">';
    // sources
    html+='<div class="panel"><h3>Which sources respond</h3>'+ (state.sources.length?state.sources.map(function(s2){return '<div class="src-rate"><span class="src">'+esc(s2.source)+'</span><i class="bar"><b style="width:'+pct(s2.responses,s2.applied)+'%"></b></i><strong>'+s2.responses+' / '+s2.applied+'</strong></div>';}).join(''):'<p class="empty-note">No applications in this range yet. Log a few to see which platforms reply.</p>') +'</div>';
    // prep by subject
    html+='<div class="panel"><h3>Prep by subject</h3>'+ (state.prep_by_subject.length?state.prep_by_subject.map(function(p){var mx=state.prep_by_subject[0].total;return '<div class="src-rate"><span class="src">'+esc(p.name)+'</span><i class="bar"><b style="width:'+pct(p.total,mx)+'%"></b></i><strong>'+p.total+'</strong></div>';}).join(''):'<p class="empty-note">No prep logged in this range yet.</p>') +'</div>';
    html+='</div></section>';
    // follow-ups + consistency + recent
    html+='<section class="ws-sec"><div class="ws-grid3">';
    html+='<div class="panel"><h3>Follow-ups due</h3>'+ (state.follow_ups.length?state.follow_ups.map(function(f){return '<div class="fu"><span class="org-dot'+(f.overdue?' od':'')+'"></span><div><b>'+esc(f.company)+'</b><em>'+esc(f.role)+' · '+(f.overdue?'overdue':fmtDate(f.follow_up_date))+'</em></div></div>';}).join(''):'<p class="empty-note">No follow-ups scheduled.</p>') +'</div>';
    html+='<div class="panel"><h3>Consistency</h3><div class="consist">'+ state.consistency.map(function(c){var tot=c.apps+c.prep,h=Math.min(100,tot*8);return '<span class="cbar" title="'+c.date+': '+c.apps+' apps, '+c.prep+' prep" style="height:'+Math.max(6,h)+'%"></span>';}).join('') +'</div><p class="subtle">Daily activity over the range.</p></div>';
    html+='<div class="panel"><h3>Recent activity</h3>'+ (state.recent.length?'<div class="recent">'+state.recent.slice(0,8).map(function(r){return r.kind==='app'?'<div class="rc"><span class="rc-k app">Job</span>'+esc(r.company)+' · '+esc(r.role)+' <em>'+fmtAgo(r.at)+'</em></div>':'<div class="rc"><span class="rc-k prep">'+esc(r.type)+'</span>'+esc(r.category)+' · '+esc(r.topic)+' <em>'+fmtAgo(r.at)+'</em></div>';}).join('')+'</div>':'<p class="empty-note">Nothing logged yet.</p>') +'</div>';
    html+='</div></section>';
    return html;
  }

  /* ---- Profile view ---- */
  function pvField(label,val){ return '<div class="pvf"><span class="pvf-l">'+esc(label)+'</span><span class="pvf-v">'+(val?esc(val):'<em>—</em>')+'</span></div>'; }
  function pvLink(label,url){
    if(!url) return '<div class="pvf"><span class="pvf-l">'+esc(label)+'</span><span class="pvf-v"><em>Not added</em></span></div>';
    var show=String(url).replace(/^https?:\/\//i,'').replace(/\/+$/,'');
    return '<div class="pvf"><span class="pvf-l">'+esc(label)+'</span><a class="pvf-v link" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(show)+' ↗</a></div>';
  }
  function viewProfile(){
    var m=state.member, p=profile||{}, ch=state.challenge||{};
    if(!profileComplete()){
      return '<section class="ws-sec"><div class="panel profile-prompt"><div class="pp-txt"><div class="pp-eyebrow">INCOMPLETE</div><h2>Complete your profile</h2><p>Your target role and links power your dashboard and keep you job-ready. It takes under a minute.</p></div><button class="btn primary" data-ws="edit-profile">Complete profile</button></div></section>';
    }
    var name=p.full_name||displayName(), role=p.target_role||'', initial=(name||'W').trim().charAt(0).toUpperCase();
    var html='<section class="ws-sec"><div class="panel profile-view">'+
      '<div class="pv-head"><div class="pv-avatar">'+esc(initial)+'</div>'+
        '<div class="pv-id"><h2>'+esc(name)+'</h2>'+(role?'<div class="pv-target">🎯 Targeting <b>'+esc(role)+'</b></div>':'')+
          '<div class="pv-badges"><span class="pv-badge">Member #'+m.number+'</span>'+(m.is_founding?'<span class="pv-badge founding">Founding</span>':'')+'<span class="pv-badge day">🔥 Day '+Math.max(0,ch.day||0)+'/'+(ch.target||45)+'</span></div>'+
        '</div><button class="btn ghost sm pv-edit" data-ws="edit-profile">Edit</button></div>'+
      '<div class="pv-grid">'+
        pvField('Target role',role)+
        pvField('Highest qualification',p.education)+
        pvField('Passout year',p.passout_year)+
        pvLink('LinkedIn',p.linkedin_url)+
        pvLink('Resume',p.resume_url)+
        pvLink('GitHub',p.github_url)+
      '</div>'+
    '</div></section>';
    return html;
  }

  /* ---- Applications view ---- */
  function viewApplications(){
    var apps=state.applications, tg=state.targets, t=state.today;
    var filtered=apps.filter(function(a){ if(appFilter==='all')return true; if(appFilter==='saved')return a.status==='saved'; if(appFilter==='applied')return a.status!=='saved'; return a.status===appFilter; });
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Job applications</h2><span class="ws-range-note">'+t.applications_applied+' / '+tg.applications+' applied today</span></div>'+
      '<form class="quick-add" data-ws-form="job">'+
        '<div class="qa-row"><input name="company" placeholder="Company" required maxlength="120"><input name="role" placeholder="Role / title" required maxlength="120"></div>'+
        '<div class="qa-row"><input class="wide" name="url" type="text" inputmode="url" placeholder="Job URL (optional)" maxlength="1000"></div>'+
        '<div class="chips" data-chips="source">'+SOURCES.map(function(s){return '<button type="button" class="chip'+(s===jobSource?' on':'')+'" data-source="'+esc(s)+'">'+esc(s)+'</button>';}).join('')+'</div>'+
        '<div class="qa-actions"><div class="seg"><button type="button" class="seg-btn'+(jobStatus==='applied'?' on':'')+'" data-status="applied">Applied</button><button type="button" class="seg-btn'+(jobStatus==='saved'?' on':'')+'" data-status="saved">Saved for later</button></div><button class="btn primary sm" type="submit">Add</button></div>'+
      '</form>';
    html+='<div class="filter-chips">'+[['all','All'],['applied','Applied'],['saved','Saved'],['interview','Interview'],['offer','Offer'],['rejected','Rejected']].map(function(f){return '<button class="fchip'+(appFilter===f[0]?' on':'')+'" data-ws="appfilter" data-filter="'+f[0]+'">'+f[1]+'</button>';}).join('')+'</div>';
    html+= filtered.length? '<div class="app-list">'+filtered.map(appRow).join('')+'</div>' : '<div class="empty-state"><h3>No applications here yet</h3><p>Add your first one above — company, role, where you found it. It takes seconds.</p></div>';
    html+='</section>';
    return html;
  }
  function appRow(a){
    var statuses=['saved','applied','screening','interview','offer','rejected'];
    return '<div class="app-row" data-id="'+a.id+'">'+
      '<div class="app-main"><div class="app-title"><b>'+esc(a.role)+'</b> <span class="at-co">'+esc(a.company)+'</span></div>'+
        '<div class="app-meta"><span class="src">'+esc(a.source)+'</span>'+(a.date_applied?'<span>applied '+fmtDate(a.date_applied)+'</span>':'<span>saved</span>')+(a.job_url?' · <a href="'+esc(a.job_url)+'" target="_blank" rel="noopener noreferrer">link</a>':'')+'</div></div>'+
      '<div class="app-ctrl">'+
        '<select class="app-status" data-ws="status" data-id="'+a.id+'">'+statuses.map(function(s){return '<option value="'+s+'"'+(s===a.status?' selected':'')+'>'+s+'</option>';}).join('')+'</select>'+
        '<label class="fu-date" title="Follow-up date">⏰<input type="date" value="'+(a.follow_up_date||'')+'" data-ws="followup" data-id="'+a.id+'"></label>'+
        '<button class="icon-btn" data-ws="delapp" data-id="'+a.id+'" aria-label="Delete">×</button>'+
      '</div></div>';
  }

  /* ---- Prep view ---- */
  function viewPrep(){
    var cats=state.categories, active=cats.filter(function(c){return c.is_active;});
    if(!prepCat || !active.some(function(c){return c.id===prepCat;})) prepCat = active.length?active[0].id:null;
    var tg=state.targets;
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Interview prep</h2><span class="ws-range-note">'+state.today.prep_total+' / '+tg.prep+' entries today</span></div>';
    html+='<form class="quick-add" data-ws-form="prep">'+
      '<div class="chips" data-chips="cat">'+active.map(function(c){return '<button type="button" class="chip'+(c.id===prepCat?' on':'')+'" data-cat="'+c.id+'">'+esc(c.name)+'</button>';}).join('')+ (active.length?'':'<span class="empty-note">Activate a skill below to start logging.</span>') +'</div>'+
      '<div class="qa-row"><input class="wide" name="topic" placeholder="What did you work on? (e.g. Window functions)" required maxlength="160"></div>'+
      '<div class="qa-row"><input class="wide" name="url" type="text" inputmode="url" placeholder="Resource link (optional)" maxlength="1000"></div>'+
      '<div class="qa-actions"><div class="seg"><button type="button" class="seg-btn'+(prepType==='practice'?' on':'')+'" data-type="practice">Practice</button><button type="button" class="seg-btn'+(prepType==='learn'?' on':'')+'" data-type="learn">Learn</button></div><button class="btn primary sm" type="submit"'+(active.length?'':' disabled')+'>Add entry</button></div>'+
    '</form>';
    // category rings
    html+='<div class="cat-rings">'+active.map(function(c){return '<div class="cr">'+ring(c.today_count,tg.prep)+'<span>'+esc(c.name)+'</span><em>'+c.streak+'🔥</em></div>';}).join('')+'</div>';
    // today entries
    html+='<div class="ws-sec-h sub"><h3>Today’s entries</h3></div>';
    html+= state.today_prep.length? '<div class="prep-list">'+state.today_prep.map(function(p){return '<div class="prep-row"><span class="dot '+esc(p.type)+'">'+esc(p.type)+'</span><span class="pr-cat">'+esc(p.category)+'</span><span class="pr-topic">'+esc(p.topic)+(p.resource_url?' · <a href="'+esc(p.resource_url)+'" target="_blank" rel="noopener noreferrer">link</a>':'')+'</span><button class="icon-btn" data-ws="delprep" data-id="'+p.id+'" aria-label="Delete">×</button></div>';}).join('')+'</div>' : '<p class="empty-note">No entries yet today. Pick a skill and log what you practised.</p>';
    // manage skills
    html+='<div class="ws-sec-h sub"><h3>Your skills</h3></div><div class="skills-manage">'+cats.map(function(c){return '<div class="skill-row'+(c.is_active?'':' off')+'"><span>'+esc(c.name)+(c.is_default?' <em>default</em>':'')+'</span><div class="skill-ctrl"><button class="mini-btn" data-ws="togglecat" data-id="'+c.id+'" data-active="'+(c.is_active?'0':'1')+'">'+(c.is_active?'Deactivate':'Activate')+'</button>'+(c.is_default?'':'<button class="icon-btn" data-ws="delcat" data-id="'+c.id+'" aria-label="Remove">×</button>')+'</div></div>';}).join('')+
      '<form class="add-skill" data-ws-form="cat"><input name="name" placeholder="Add a skill (Python, Power BI, DAX…)" maxlength="40"><button class="mini-btn" type="submit">Add</button></form></div>';
    html+='</section>';
    return html;
  }

  /* ---- Community view ---- */
  function viewCommunity(){
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Community job board</h2>'+
        '<button class="btn '+(commFormOpen?'ghost':'primary')+' sm" data-ws="toggle-share">'+(commFormOpen?'× Close':'+ Add a community post')+'</button></div>'+
      '<div class="comm-reco">💡 <b>Opportunities members are tracking</b> — shared anonymously — plus roles posted directly. Open &amp; apply to what fits, then hit <b>+ Track</b> to add it to your Applications.</div>';
    if(commFormOpen){
      html+='<form class="quick-add" data-ws-form="share">'+
        '<div class="qa-row"><input name="company" placeholder="Company" required maxlength="120"><input name="role" placeholder="Role" required maxlength="120"></div>'+
        '<div class="qa-row"><input class="wide" name="url" type="text" inputmode="url" placeholder="Original job URL (https://…)" required maxlength="1000"></div>'+
        '<div class="qa-row"><input name="location" placeholder="Location (optional)" maxlength="80"><select name="work_mode"><option value="">Work mode</option><option value="remote">Remote</option><option value="hybrid">Hybrid</option><option value="onsite">On-site</option></select></div>'+
        '<div class="qa-actions"><span class="subtle">Please share only real, public listings.</span><button class="btn primary sm" type="submit">Share opportunity</button></div>'+
      '</form>';
    }
    html+='<div class="comm-tools"><div class="filter-chips">'+COMM_FILTERS.map(function(f){return '<button class="fchip'+(commDays===f[1]?' on':'')+'" data-ws="commdays" data-days="'+f[1]+'">'+f[0]+'</button>';}).join('')+'</div>'+
      '<input type="search" class="comm-search-input" placeholder="Search company, role, location…" data-ws="commsearch" value="'+esc(community&&community.q||'')+'"></div>';
    if(!community){ html+='<div class="empty-note">Loading opportunities…</div>'; }
    else if(!community.jobs.length){ html+='<div class="empty-state"><h3>No opportunities in this window</h3><p>Try <b>All time</b>, or add a post. As members log jobs with a link, they show up here automatically.</p></div>'; }
    else {
      html+='<div class="ws-range-note" style="margin:4px 0 12px">'+community.total+' opportunit'+(community.total===1?'y':'ies')+'</div><div class="job-board">'+community.jobs.map(jobCard).join('')+'</div>';
    }
    html+='</section>';
    return html;
  }
  function jobCard(j){
    var meta='';
    if(j.location) meta+='<span>'+esc(j.location)+'</span>';
    if(j.work_mode) meta+='<span class="jb-mode">'+esc(j.work_mode)+'</span>';
    if(j.source) meta+='<span>'+esc(j.source)+'</span>';
    meta+='<span>added '+fmtAgo(j.last_at)+'</span>';
    return '<div class="jb-card"><div class="jb-top"><div><b>'+esc(j.role)+'</b><span class="jb-co">'+esc(j.company)+'</span></div>'+(Number(j.members)>1?'<span class="jb-pop">'+j.members+' tracking</span>':'')+'</div>'+
      '<div class="jb-meta">'+meta+'</div>'+
      '<div class="jb-actions"><a class="btn primary sm" href="'+esc(j.job_url)+'" target="_blank" rel="noopener noreferrer">Open &amp; apply →</a>'+
        (j.mine?'<span class="jb-intracker">✓ In your tracker</span>':'<button class="mini-btn" data-ws="trackjob" data-company="'+esc(j.company)+'" data-role="'+esc(j.role)+'" data-url="'+esc(j.job_url)+'">+ Track</button>')+
        (j.reported?'<span class="jb-reported">Reported</span>':'<button class="jb-report" data-ws="reportjob" data-key="'+esc(j.url_key)+'">Report</button>')+
      '</div></div>';
  }
  async function loadCommunity(days, q){
    if(days!==undefined && days!==null) commDays=days;
    if(q===undefined) q = (community && community.q) || '';
    try{ community = await rpc('dw_community_feed',{p_days:commDays, p_search:q||null, p_limit:40, p_offset:0}); community.q=q||''; community.days=commDays; }
    catch(e){ community={jobs:[],total:0,q:q||'',days:commDays}; toast(e.message); }
    if(currentView==='community') renderWorkspace();
  }

  /* ---- workspace actions (delegated) ---- */
  function bindWorkspace(){
    window.addEventListener('popstate', function(){
      if(state && state.registered){ var pv=viewFromPath()||'dashboard'; if(pv!==currentView){ currentView=pv; if(pv==='community' && !community){ renderWorkspace(); loadCommunity(); } else renderWorkspace(); } }
    });
    wsEl.addEventListener('click', function(ev){
      var b=ev.target.closest('[data-ws],[data-source],[data-cat],[data-status],[data-type]'); if(!b) return;
      var act=b.getAttribute('data-ws');
      if(b.hasAttribute('data-source')){ jobSource=b.getAttribute('data-source'); b.parentNode.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===b);}); return; }
      if(b.hasAttribute('data-cat')){ prepCat=b.getAttribute('data-cat'); b.parentNode.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===b);}); return; }
      if(b.hasAttribute('data-type')){ prepType=b.getAttribute('data-type'); b.parentNode.querySelectorAll('.seg-btn').forEach(function(x){x.classList.toggle('on',x===b);}); return; }
      if(b.hasAttribute('data-status') && b.classList.contains('seg-btn')){ jobStatus=b.getAttribute('data-status'); b.parentNode.querySelectorAll('.seg-btn').forEach(function(x){x.classList.toggle('on',x===b);}); return; }
      if(act==='view'){ setView(b.getAttribute('data-view')); return; }
      if(act==='dismiss-onboard'){ try{localStorage.setItem('dw_onboard_done','1');}catch(_){ } renderWorkspace(); return; }
      if(act==='open-profile'){ showProfileForm(false); return; }
      if(act==='edit-profile'){ showProfileForm(true); return; }
      if(act==='request-recovery'){ var rd=b.getAttribute('data-day'); if(!rd){ toast('Nothing to continue.'); return; } doAction(rpc('dw_request_recovery',{p_missed_day:rd}),'Continuation requested — an admin will review within 24h.'); return; }
      if(act==='trackjob'){ rpc('dw_add_application',{p_company:b.getAttribute('data-company'),p_role:b.getAttribute('data-role'),p_source:'Community',p_url:b.getAttribute('data-url'),p_status:'saved'}).then(function(){ toast('Saved to your Applications.'); return loadCommunity(commDays, community&&community.q); }).catch(function(e){ toast(e.message); }); return; }
      if(act==='toggle-share'){ commFormOpen=!commFormOpen; renderWorkspace(); return; }
      if(act==='commdays'){ loadCommunity(parseInt(b.getAttribute('data-days'),10), community&&community.q); return; }
      if(act==='logout'){ logout(); return; }
      if(act==='appfilter'){ appFilter=b.getAttribute('data-filter'); renderWorkspace(); return; }
      if(act==='delapp'){ doAction(rpc('dw_delete_application',{p_id:b.getAttribute('data-id')}),'Removed.'); return; }
      if(act==='delprep'){ doAction(rpc('dw_delete_prep',{p_id:b.getAttribute('data-id')}),'Removed.'); return; }
      if(act==='togglecat'){ doAction(rpc('dw_set_category_active',{p_id:b.getAttribute('data-id'),p_active:b.getAttribute('data-active')==='1'}),'Updated.'); return; }
      if(act==='delcat'){ doAction(rpc('dw_delete_category',{p_id:b.getAttribute('data-id')}),'Skill removed.'); return; }
      if(act==='reportjob'){ if(confirm('Report this opportunity as expired or no longer valid? After a few reports it is hidden from the feed.')){ rpc('dw_report_job',{p_url_key:b.getAttribute('data-key')}).then(function(){toast('Thanks — reported.');loadCommunity(commDays, community&&community.q);}).catch(function(e){toast(e.message);}); } return; }
    });
    wsEl.addEventListener('change', function(ev){
      var el=ev.target, act=el.getAttribute('data-ws');
      if(act==='range'){ setRange(parseInt(el.value,10)); return; }
      if(act==='status'){ doAction(rpc('dw_update_application',{p_id:el.getAttribute('data-id'),p_status:el.value}),'Status updated.'); return; }
      if(act==='followup'){ var v=el.value||null; doAction(rpc('dw_update_application',{p_id:el.getAttribute('data-id'),p_follow_up:v,p_clear_follow_up:!v}),'Follow-up set.'); return; }
    });
    wsEl.addEventListener('submit', function(ev){
      var f=ev.target, kind=f.getAttribute('data-ws-form'); if(!kind) return; ev.preventDefault();
      var fd=new FormData(f);
      if((kind==='job'||kind==='prep'||kind==='share') && !profileComplete()){ toast('Complete your profile to start logging.'); showProfileForm(); return; }
      if(kind==='job'){ doAction(rpc('dw_add_application',{p_company:fd.get('company'),p_role:fd.get('role'),p_source:jobSource,p_url:normUrl(fd.get('url')),p_status:jobStatus}),'Application added.'); }
      else if(kind==='prep'){ if(!prepCat){toast('Add or activate a skill first.');return;} doAction(rpc('dw_add_prep',{p_category_id:prepCat,p_type:prepType,p_topic:fd.get('topic'),p_url:normUrl(fd.get('url'))}),'Logged. Keep going!'); }
      else if(kind==='cat'){ var n=(fd.get('name')||'').trim(); if(!n)return; doAction(rpc('dw_add_category',{p_name:n}),'Skill added.'); }
      else if(kind==='share'){ rpc('dw_share_job',{p_company:fd.get('company'),p_role:fd.get('role'),p_url:normUrl(fd.get('url')),p_source:null,p_location:fd.get('location')||null,p_work_mode:fd.get('work_mode')||null}).then(function(r){ toast(r&&r.duplicate?'Already on the board — thanks!':'Shared with the community.'); f.reset(); loadCommunity(community&&community.q); }).catch(function(e){toast(e.message);}); }
    });
    var si;
    wsEl.addEventListener('input', function(ev){ if(ev.target.getAttribute('data-ws')==='commsearch'){ clearTimeout(si); var q=ev.target.value; si=setTimeout(function(){loadCommunity(commDays, q);},350); } });
  }
  function doAction(promise, okMsg){
    promise.then(function(){ return loadWorkspace(currentRange); }).then(function(){ if(okMsg) toast(okMsg); }).catch(function(e){ toast(e.message); if(/log in again/i.test(e.message||'')){ showAuth('login'); } });
  }

  /* ---------- firefly-bee: idle hover + flutter, swims on scroll, returns home ---------- */
  (function bee(){
    if(reduce||window.innerWidth<760)return;
    var el=document.getElementById('bee'); if(!el)return;
    var cv=document.getElementById('sparkles'),ctx=cv&&cv.getContext('2d');
    var dpr=Math.min(window.devicePixelRatio||1,2),parts=[];
    function resize(){if(!ctx)return;cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
    resize();window.addEventListener('resize',resize,{passive:true});
    function homeX(){return innerWidth-96;} function homeY(){return innerHeight-132;}
    function clamp(v,a,b){return v<a?a:v>b?b:v;}
    var bx=homeX(),by=homeY(),vx=0,vy=0,dir=1;
    // scroll "nudge" that decays smoothly — no hard state switch, so no stop-jerk
    var nudgeX=0,nudgeY=0,lastY=window.scrollY;
    window.addEventListener('scroll',function(){
      var y=window.scrollY,dy=y-lastY; lastY=y;
      nudgeY+=clamp(dy,-46,46)*0.6; nudgeX+=(Math.random()-0.5)*6;
    },{passive:true});
    el.classList.add('show');
    function loop(now){
      nudgeX*=0.9; nudgeY*=0.9;
      if(Math.abs(nudgeX)<0.05)nudgeX=0; if(Math.abs(nudgeY)<0.05)nudgeY=0;
      nudgeX=clamp(nudgeX,-70,70); nudgeY=clamp(nudgeY,-170,170);
      var tx=clamp(homeX()+Math.sin(now*0.0012)*15-nudgeX,70,innerWidth-50);
      var ty=clamp(homeY()+Math.cos(now*0.0016)*12-nudgeY,80,innerHeight-60);
      // spring-damper: smooths every direction change, including when scrolling stops
      vx=(vx+(tx-bx)*0.10)*0.72; vy=(vy+(ty-by)*0.10)*0.72;
      bx+=vx; by+=vy;
      var speed=Math.hypot(vx,vy);
      if(vx<-0.25)dir=-1; else if(vx>0.25)dir=1;
      var tilt=clamp(vx*1.3,-10,10);
      el.style.transform='translate('+(bx-30).toFixed(1)+'px,'+(by-35).toFixed(1)+'px) rotate('+tilt.toFixed(1)+'deg) scaleX('+dir+')';
      if(ctx){
        if(speed>0.5&&parts.length<60){var n=speed>5?2:1;for(var k=0;k<n;k++)parts.push({x:bx-dir*7,y:by+12,life:1,r:5+Math.random()*4});}
        if(Math.random()<0.14&&parts.length<60)parts.push({x:bx+(Math.random()*16-8),y:by+16+(Math.random()*8),life:.7,r:2+Math.random()*2});
        ctx.clearRect(0,0,innerWidth,innerHeight);
        ctx.globalCompositeOperation='lighter';
        for(var i=parts.length-1;i>=0;i--){var p=parts[i];p.life-=0.022;if(p.life<=0){parts.splice(i,1);continue;}
          var a=Math.max(0,p.life),rr=p.r*(0.6+a*0.6),g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,rr);
          g.addColorStop(0,'rgba(255,228,140,'+(a*0.7)+')');g.addColorStop(.5,'rgba(255,198,32,'+(a*0.33)+')');g.addColorStop(1,'rgba(255,198,32,0)');
          ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,rr,0,6.283);ctx.fill();
        }
        ctx.globalCompositeOperation='source-over';
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  })();

  /* ---------- init ---------- */
  (async function init(){
    try{await handleCallback();session=await validSession();}catch(_){ }
    renderAccount();
    if(!session) return;
    try{ var st=await rpc('dw_get_state',{p_days:currentRange}); if(st&&st.registered){ state=st; enterWorkspace(); return; } }catch(_){ }
    var pending=false; try{pending=localStorage.getItem('dw_pending_registration')==='1';}catch(_){ }
    if(pending||new URLSearchParams(location.search).get('join')==='1'){ try{localStorage.removeItem('dw_pending_registration');}catch(_){ } await register(); }
  })();
})();
