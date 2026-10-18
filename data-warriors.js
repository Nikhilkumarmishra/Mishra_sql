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
  function logout(){session=null;state=null;community=null;try{localStorage.removeItem('msql_sess');}catch(_){}exitToLanding();renderAccount();toast('You are signed out.');}

  /* ---------- delegated events ---------- */
  document.addEventListener('click',function(ev){
    var b=ev.target.closest('[data-action]'); if(!b) return;
    var act=b.getAttribute('data-action');
    if(act==='start')start();
    else if(act==='auth-switch')formHtml(b.getAttribute('data-mode'));
    else if(act==='google-login')google();
    else if(act==='logout')logout();
  });
  document.addEventListener('submit',function(ev){if(ev.target.id==='authForm')authenticate(ev);});

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
  var WS_VIEWS=['dashboard','applications','prep','community'];
  function viewFromPath(){ var m=location.pathname.replace(/\/+$/,'').match(/\/data-warriors\/([a-z]+)$/i); return (m && WS_VIEWS.indexOf(m[1].toLowerCase())>=0) ? m[1].toLowerCase() : null; }
  function syncUrl(replace){ try{ var want='/data-warriors/'+currentView; if(location.pathname.replace(/\/+$/,'')!==want){ history[replace?'replaceState':'pushState']({dwView:currentView},'',want); } }catch(_){ } }

  function enterWorkspace(){
    var main=document.getElementById('main'), nav=document.getElementById('nav'), ft=document.querySelector('.footer');
    if(main) main.hidden=true; if(nav) nav.style.display='none'; if(ft) ft.style.display='none';
    var bee=document.getElementById('bee'); if(bee) bee.style.display='none';
    var sp=document.getElementById('sparkles'); if(sp) sp.style.display='none';
    document.body.classList.add('ws-mode');
    wsEl.hidden=false;
    if(!wsBound){ bindWorkspace(); wsBound=true; }
    var pv=viewFromPath(); currentView = pv || currentView || 'dashboard';
    renderWorkspace();
    syncUrl(true);
    if(currentView==='community' && !community) loadCommunity();
    window.scrollTo(0,0);
  }
  function exitToLanding(){
    var main=document.getElementById('main'), nav=document.getElementById('nav'), ft=document.querySelector('.footer');
    if(main) main.hidden=false; if(nav) nav.style.display=''; if(ft) ft.style.display='';
    document.body.classList.remove('ws-mode');
    wsEl.hidden=true; wsEl.innerHTML='';
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
    var m=state.member, name=displayName();
    wsEl.innerHTML =
      '<header class="ws-head"><div class="ws-head-in">'+
        '<a class="brand" href="/home">Analyst<span>World</span><em>Data Warriors</em></a>'+
        '<div class="ws-streak"><b>'+(state.streak.current)+'</b> day streak · Day '+Math.max(1,m.day_number)+'</div>'+
        '<div class="ws-head-right">'+
          '<label class="ws-range-wrap">Range <select class="ws-range" data-ws="range">'+RANGES.map(function(r){return '<option value="'+r[1]+'"'+(r[1]===currentRange?' selected':'')+'>'+r[0]+'</option>';}).join('')+'</select></label>'+
          '<span class="ws-user">'+esc(session&&session.user&&session.user.email||name)+'</span>'+
          '<button class="link-btn" data-ws="logout">Log out</button>'+
        '</div>'+
      '</div></header>'+
      '<nav class="ws-tabs">'+['dashboard','Dashboard','applications','Applications','prep','Prep','community','Community'].reduce(function(a,_,i,arr){if(i%2)return a;return a+'<button class="ws-tab'+(arr[i]===currentView?' on':'')+'" data-ws="view" data-view="'+arr[i]+'">'+arr[i+1]+'</button>';},'')+'</nav>'+
      '<main class="ws-body">'+ (
        currentView==='applications'?viewApplications():
        currentView==='prep'?viewPrep():
        currentView==='community'?viewCommunity():
        viewDashboard()
      )+'</main>';
  }

  /* ---- Dashboard view ---- */
  function viewDashboard(){
    var k=state.kpis, t=state.today, tg=state.targets, s=state.streak, rangeLabel=(RANGES.filter(function(r){return r[1]===currentRange;})[0]||['',''])[0];
    var kpis=[['Applications',k.applications,'applied'],['Responses',k.responses,'heard back'],['Interviews',k.interviews,'reached'],['Prep sessions',k.prep_sessions,'logged'],['Active days',k.active_days,'in range'],['Saved',k.saved,'parked']];
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Your progress</h2><span class="ws-range-note">Last '+esc(rangeLabel)+'</span></div>'+
      '<div class="kpi-row">'+kpis.map(function(x){return '<div class="kpi"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><em>'+x[2]+'</em></div>';}).join('')+'</div></section>';
    // today goal
    html+='<section class="ws-sec"><div class="ws-grid2">'+
      '<div class="panel goal"><h3>Today’s goal</h3><div class="goal-rings">'+
        '<div class="gr">'+ring(t.applications_applied,tg.applications)+'<span>Applications</span></div>'+
        '<div class="gr">'+ring(t.prep_total,tg.prep)+'<span>Prep entries</span></div>'+
      '</div>'+(t.day_complete?'<div class="goal-done">✓ Day complete — streak counted</div>':'<div class="goal-todo">Hit both targets to complete today.</div>')+
      '<div class="inline-cta"><button class="btn primary sm" data-ws="view" data-view="applications">Log a job</button><button class="btn ghost sm" data-ws="view" data-view="prep">Log prep</button></div></div>'+
      '<div class="panel challenge-panel"><h3>10-day challenge</h3><div class="dots10">'+Array.apply(null,{length:10}).map(function(_,i){var on=i<s.current;return '<span class="d10'+(on?' on':'')+'">'+(i+1)+'</span>';}).join('')+'</div>'+
        '<p class="subtle">'+(s.qualified?'🎉 You’ve completed a 10-day streak — Super Warriors (coming soon).':'Current streak '+s.current+' / 10 · longest '+s.max+'. Complete '+tg.applications+' apps + '+tg.prep+' prep on 10 straight days.')+'</p></div>'+
      '</div></section>';
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
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Community job board</h2><span class="ws-range-note">Share 5 · discover more</span></div>'+
      '<p class="section-intro" style="margin:0 0 18px">Post opportunities you find and discover roles other members shared. The feed grows as more people contribute.</p>'+
      '<form class="quick-add" data-ws-form="share">'+
        '<div class="qa-row"><input name="company" placeholder="Company" required maxlength="120"><input name="role" placeholder="Role" required maxlength="120"></div>'+
        '<div class="qa-row"><input class="wide" name="url" type="text" inputmode="url" placeholder="Original job URL (https://…)" required maxlength="1000"></div>'+
        '<div class="qa-row"><input name="location" placeholder="Location (optional)" maxlength="80"><select name="work_mode"><option value="">Work mode</option><option value="remote">Remote</option><option value="hybrid">Hybrid</option><option value="onsite">On-site</option></select></div>'+
        '<div class="qa-actions"><span class="subtle">Please share only real, public listings.</span><button class="btn primary sm" type="submit">Share opportunity</button></div>'+
      '</form>'+
      '<div class="comm-search"><input type="search" placeholder="Search company, role, location…" data-ws="commsearch" value="'+esc(community&&community.q||'')+'"></div>';
    if(!community){ html+='<div class="empty-note">Loading opportunities…</div>'; }
    else if(!community.jobs.length){ html+='<div class="empty-state"><h3>No opportunities yet</h3><p>Be the first to share a role — it helps everyone preparing alongside you.</p></div>'; }
    else {
      html+='<div class="ws-range-note" style="margin:4px 0 12px">'+community.total+' active opportunities</div><div class="job-board">'+community.jobs.map(function(j){
        return '<div class="jb-card"><div class="jb-top"><div><b>'+esc(j.role)+'</b><span class="jb-co">'+esc(j.company)+'</span></div>'+(j.mine?'<span class="jb-mine">You shared</span>':'')+'</div>'+
          '<div class="jb-meta">'+(j.location?'<span>'+esc(j.location)+'</span>':'')+(j.work_mode?'<span class="jb-mode">'+esc(j.work_mode)+'</span>':'')+(j.source?'<span>'+esc(j.source)+'</span>':'')+'<span>'+fmtDate(j.shared_date)+'</span></div>'+
          '<div class="jb-actions"><a class="btn primary sm" href="'+esc(j.job_url)+'" target="_blank" rel="noopener noreferrer">Open &amp; apply →</a>'+(j.reported?'<span class="subtle">Reported</span>':'<button class="mini-btn" data-ws="reportjob" data-id="'+j.id+'">Report</button>')+'</div></div>';
      }).join('')+'</div>';
    }
    html+='</section>';
    return html;
  }
  async function loadCommunity(q){
    try{ community = await rpc('dw_community_feed',{p_limit:40,p_offset:0,p_search:q||null}); community.q=q||''; }
    catch(e){ community={jobs:[],total:0,q:q||''}; toast(e.message); }
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
      if(act==='logout'){ logout(); return; }
      if(act==='appfilter'){ appFilter=b.getAttribute('data-filter'); renderWorkspace(); return; }
      if(act==='delapp'){ doAction(rpc('dw_delete_application',{p_id:b.getAttribute('data-id')}),'Removed.'); return; }
      if(act==='delprep'){ doAction(rpc('dw_delete_prep',{p_id:b.getAttribute('data-id')}),'Removed.'); return; }
      if(act==='togglecat'){ doAction(rpc('dw_set_category_active',{p_id:b.getAttribute('data-id'),p_active:b.getAttribute('data-active')==='1'}),'Updated.'); return; }
      if(act==='delcat'){ doAction(rpc('dw_delete_category',{p_id:b.getAttribute('data-id')}),'Skill removed.'); return; }
      if(act==='reportjob'){ var reason=prompt('Why report this? (expired, broken, duplicate, spam, other)'); if(reason){ rpc('dw_report_job',{p_job_id:b.getAttribute('data-id'),p_reason:reason.toLowerCase().trim()}).then(function(){toast('Thanks — reported.');loadCommunity(community&&community.q);}).catch(function(e){toast(e.message);}); } return; }
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
      if(kind==='job'){ doAction(rpc('dw_add_application',{p_company:fd.get('company'),p_role:fd.get('role'),p_source:jobSource,p_url:normUrl(fd.get('url')),p_status:jobStatus}),'Application added.'); }
      else if(kind==='prep'){ if(!prepCat){toast('Add or activate a skill first.');return;} doAction(rpc('dw_add_prep',{p_category_id:prepCat,p_type:prepType,p_topic:fd.get('topic'),p_url:normUrl(fd.get('url'))}),'Logged. Keep going!'); }
      else if(kind==='cat'){ var n=(fd.get('name')||'').trim(); if(!n)return; doAction(rpc('dw_add_category',{p_name:n}),'Skill added.'); }
      else if(kind==='share'){ rpc('dw_share_job',{p_company:fd.get('company'),p_role:fd.get('role'),p_url:normUrl(fd.get('url')),p_source:null,p_location:fd.get('location')||null,p_work_mode:fd.get('work_mode')||null}).then(function(r){ toast(r&&r.duplicate?'Already on the board — thanks!':'Shared with the community.'); f.reset(); loadCommunity(community&&community.q); }).catch(function(e){toast(e.message);}); }
    });
    var si;
    wsEl.addEventListener('input', function(ev){ if(ev.target.getAttribute('data-ws')==='commsearch'){ clearTimeout(si); var q=ev.target.value; si=setTimeout(function(){loadCommunity(q);},350); } });
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
