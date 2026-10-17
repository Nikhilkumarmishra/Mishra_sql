/* Data Warriors — landing interactions. Isolated page; reuses the same
   Supabase project and msql_sess session as AnalystWorld. The daily
   dashboard / challenge RPCs are wired in a later phase. */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
  var AUTH = SUPABASE_URL + '/auth/v1';

  var dialog = document.getElementById('authDialog');
  var authContent = document.getElementById('authContent');
  var toastEl = document.getElementById('toast');
  var session = null, toastTimer;

  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function toast(msg){toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){toastEl.classList.remove('show');},3400);}
  function readSession(){try{return JSON.parse(localStorage.getItem('msql_sess')||'null');}catch(_){return null;}}
  function saveSession(s){session=s;try{localStorage.setItem('msql_sess',JSON.stringify(s));}catch(_){}}
  function displayName(){var u=session&&session.user;return (u&&((u.user_metadata&&(u.user_metadata.full_name||u.user_metadata.name))||(u.email&&u.email.split('@')[0])))||'Warrior';}
  function authHeaders(){return {'Content-Type':'application/json','apikey':SUPABASE_ANON};}

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
    if(session&&session.user){
      toast('You’re signed in, '+displayName()+'. Your daily dashboard opens in the next update.');
    }else{
      showAuth('signup');
    }
  }

  /* ---------- auth dialog ---------- */
  function formHtml(mode){
    var signup=mode==='signup';
    authContent.innerHTML='<form class="auth-form" id="authForm">'+
      '<h2>'+(signup?'Start your 10-day streak':'Welcome back')+'</h2>'+
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
    var form=ev.currentTarget,fd=new FormData(form),signup=!!fd.get('name');
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
        toast('Welcome, '+displayName()+'. You’re ready for Data Warriors.');
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
  function logout(){session=null;try{localStorage.removeItem('msql_sess');}catch(_){}renderAccount();toast('You are signed out.');}

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

  /* ---------- scroll reveal ---------- */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var reveals=document.querySelectorAll('.reveal');
  if(reduce||!('IntersectionObserver'in window)){reveals.forEach(function(el){el.classList.add('is-visible');});}
  else{
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('is-visible');io.unobserve(en.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.12});
    reveals.forEach(function(el){io.observe(el);});
  }

  /* ---------- cursor sparkles (desktop, subtle) ---------- */
  (function sparkles(){
    var fine=window.matchMedia&&window.matchMedia('(pointer:fine)').matches;
    if(reduce||!fine||window.innerWidth<860)return;
    var cv=document.getElementById('sparkles'); if(!cv)return; var ctx=cv.getContext('2d');
    var dpr=Math.min(window.devicePixelRatio||1,2),parts=[],last=0,running=false;
    function resize(){cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
    resize();window.addEventListener('resize',resize,{passive:true});
    function spawn(x,y){
      if(parts.length>26)return;
      var n=1+(Math.random()<.35?1:0);
      for(var i=0;i<n;i++){parts.push({x:x+(Math.random()*10-5),y:y+(Math.random()*10-5),vx:(Math.random()-.5)*.5,vy:-(Math.random()*.7+.2),life:1,r:Math.random()*1.6+1,c:Math.random()<.5?'240,25,32':'17,17,17'});}
      if(!running){running=true;requestAnimationFrame(loop);}
    }
    function loop(){
      ctx.clearRect(0,0,innerWidth,innerHeight);
      for(var i=parts.length-1;i>=0;i--){var p=parts[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.012;p.life-=.028;
        if(p.life<=0){parts.splice(i,1);continue;}
        ctx.globalAlpha=Math.max(0,p.life)*.6;ctx.fillStyle='rgba('+p.c+',1)';
        ctx.beginPath();ctx.arc(p.x,p.y,p.r*p.life,0,6.283);ctx.fill();
      }
      ctx.globalAlpha=1;
      if(parts.length){requestAnimationFrame(loop);}else{running=false;}
    }
    window.addEventListener('mousemove',function(e){var t=performance.now();if(t-last<36)return;last=t;spawn(e.clientX,e.clientY);},{passive:true});
  })();

  /* ---------- init ---------- */
  (async function init(){
    try{await handleCallback();session=await validSession();}catch(_){}
    renderAccount();
    if(session&&new URLSearchParams(location.search).get('join')==='1'){toast('You’re signed in. Your Data Warriors dashboard opens in the next update.');}
  })();
})();
