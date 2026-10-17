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
      toast('You’re signed in, '+displayName()+'. Your workspace opens in the next update.');
    }else{
      showAuth('signup');
    }
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
    try{await handleCallback();session=await validSession();}catch(_){}
    renderAccount();
    if(session&&new URLSearchParams(location.search).get('join')==='1'){toast('You’re signed in. Your Data Warriors workspace opens in the next update.');}
  })();
})();
