/* Data Warriors — admin dashboard. Owner-only; every read/action goes
   through dw_admin_* RPCs that enforce user_profiles.is_admin server-side.
   Reuses the AnalystWorld session (msql_sess) and dw_* RPC conventions. */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://wyxutuqckkdkraawyxff.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eHV0dXFja2tka3JhYXd5eGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzQ3NzksImV4cCI6MjA5MzcxMDc3OX0.ale0hHkE36PPQwKiqo5ViS3bi28krpU8gHXiWCKyLAU';
  var AUTH = SUPABASE_URL + '/auth/v1';
  var API = SUPABASE_URL + '/rest/v1';

  var root = document.getElementById('admRoot');
  var toastEl = document.getElementById('toast'), toastTimer;
  var session = null, view = 'overview', overview = null, members = null, requests = null, reqFilter = 'pending', reported = null, bound = false, memberQ = '';

  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){toastEl.classList.remove('show');},3400);}
  function readSession(){try{return JSON.parse(localStorage.getItem('msql_sess')||'null');}catch(_){return null;}}
  function saveSession(s){session=s;try{localStorage.setItem('msql_sess',JSON.stringify(s));}catch(_){}}
  function authHeaders(){return {'Content-Type':'application/json','apikey':SUPABASE_ANON};}
  function fmtDate(d){ if(!d) return '—'; try{var x=new Date((''+d).length<=10?d+'T00:00:00':d);return x.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});}catch(_){return d;} }
  function fmtAgo(ts){ if(!ts) return '—'; try{var s=(Date.now()-new Date(ts).getTime())/1000; if(s<60)return 'just now'; if(s<3600)return Math.floor(s/60)+'m ago'; if(s<86400)return Math.floor(s/3600)+'h ago'; if(s<2592000)return Math.floor(s/86400)+'d ago'; return fmtDate(ts);}catch(_){return '';} }

  async function refreshNow(){
    var s=session||readSession(); if(!s||!s.refresh_token) return false;
    try{ var rr=await fetch(AUTH+'/token?grant_type=refresh_token',{method:'POST',headers:authHeaders(),body:JSON.stringify({refresh_token:s.refresh_token})});
      var r=await rr.json(); if(r&&r.access_token){ r.expires_at=Math.floor(Date.now()/1000)+(r.expires_in||3600); if(!r.user&&s.user) r.user=s.user; saveSession(r); return true; } }catch(_){}
    return false;
  }
  async function freshToken(){ if(!session||!session.access_token) return SUPABASE_ANON; if(session.expires_at && Date.now()/1000 > session.expires_at-60){ await refreshNow(); } return (session&&session.access_token)?session.access_token:SUPABASE_ANON; }
  async function rpc(name, params){
    function call(tok){ return fetch(API+'/rpc/'+name,{method:'POST',headers:{'Content-Type':'application/json','apikey':SUPABASE_ANON,'Authorization':'Bearer '+tok},body:JSON.stringify(params||{})}); }
    var token=await freshToken(), res=await call(token);
    if(res.status===401 && session && session.refresh_token){ if(await refreshNow()){ res=await call(session.access_token); } }
    var data=await res.json().catch(function(){return null;});
    if(!res.ok){ var msg=(data&&(data.message||data.hint||data.details))||''; if(res.status===401||/jwt|token|expired/i.test(msg)){ throw new Error('Your session expired — please log in again on Data Warriors.'); } throw new Error(msg||'Something went wrong.'); }
    return data;
  }
  async function validSession(){
    var s=readSession(); if(!s||!s.access_token) return null;
    if(s.expires_at && Date.now()/1000 > s.expires_at-60){ if(!s.refresh_token) return null; session=s; if(!await refreshNow()) return null; s=session; }
    if(!s.user||!s.user.id){ try{var ur=await fetch(AUTH+'/user',{headers:{apikey:SUPABASE_ANON,Authorization:'Bearer '+s.access_token}});var u=await ur.json();if(u.id){s.user=u;saveSession(s);}}catch(_){} }
    session=s; return s.user&&s.user.id?s:null;
  }

  function gate(html){ root.innerHTML='<div class="adm-gate">'+html+'</div>'; }

  /* ---------- views ---------- */
  function shell(){
    var tabs=[['overview','Overview'],['members','Members'],['requests','Requests'],['moderation','Moderation']];
    var pend = overview && overview.pending_recovery ? overview.pending_recovery : 0;
    root.innerHTML =
      '<header class="ws-head"><div class="ws-head-in">'+
        '<a class="brand" href="/data-warriors">Analyst<span>World</span><em>Admin</em></a>'+
        '<div class="ws-head-mid"><span class="ws-daychip">⚙️ Data Warriors control</span></div>'+
        '<div class="ws-head-right"><a class="link-btn" href="/data-warriors" style="text-decoration:none">← Workspace</a><button class="link-btn" data-adm="refresh">Refresh</button></div>'+
      '</div></header>'+
      '<nav class="ws-tabs">'+tabs.map(function(t){return '<button class="ws-tab'+(t[0]===view?' on':'')+'" data-adm="view" data-view="'+t[0]+'">'+t[1]+(t[0]==='requests'&&pend?' <span class="jb-pop">'+pend+'</span>':'')+'</button>';}).join('')+'</nav>'+
      '<main class="ws-body">'+(
        view==='members'?viewMembers():
        view==='requests'?viewRequests():
        view==='moderation'?viewModeration():
        viewOverview()
      )+'</main>';
  }

  function viewOverview(){
    if(!overview) return '<p class="empty-note">Loading…</p>';
    var o=overview;
    var cards=[
      ['Members',o.members,'registered'],
      ['Active today',o.active_today,'logged something'],
      ['Profiles complete',o.profiles_complete,'of '+o.members],
      ['Applications',o.apps_total,o.apps_today+' today'],
      ['Prep entries',o.prep_total,o.prep_today+' today'],
      ['Shared posts',o.community_active,'on the board'],
      ['Pending requests',o.pending_recovery,'need review'],
      ['Reported jobs',o.reported_jobs,'flagged'],
      ['Completion rate',o.members?Math.round(o.profiles_complete/o.members*100)+'%':'0%','profiles'],
      ['Avg apps/member',o.members?(o.apps_total/o.members).toFixed(1):'0','all time']
    ];
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Platform overview</h2><span class="ws-range-note">Live</span></div>'+
      '<div class="adm-ov">'+cards.map(function(c){return '<div class="kpi"><span>'+esc(c[0])+'</span><strong>'+esc(c[1])+'</strong><em>'+esc(c[2])+'</em></div>';}).join('')+'</div></section>';
    if(o.pending_recovery){ html+='<section class="ws-sec"><a class="comm-nudge" data-adm="view" data-view="requests"><span class="cn-ic">⏳</span><span class="cn-txt"><b>'+o.pending_recovery+' continuation request'+(o.pending_recovery===1?'':'s')+' waiting</b><em>Approve within 24h to keep a member’s streak alive, or let it reset.</em></span><span class="cn-go">Review →</span></a></section>'; }
    html+='<section class="ws-sec"><a class="comm-nudge" data-adm="view" data-view="members"><span class="cn-ic">👥</span><span class="cn-txt"><b>Browse members</b><em>Profiles, activity and live challenge day for everyone in the challenge.</em></span><span class="cn-go">Open →</span></a></section>';
    return html;
  }

  function viewMembers(){
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Members</h2><span class="ws-range-note">'+(members?members.total:'…')+' total</span></div>'+
      '<input class="adm-search" type="search" placeholder="Search name, email or target role…" data-adm="memsearch" value="'+esc(memberQ)+'">';
    if(!members){ html+='<p class="empty-note">Loading members…</p></section>'; return html; }
    if(!members.members.length){ html+='<div class="empty-state"><h3>No members found</h3><p>Try a different search.</p></div></section>'; return html; }
    html+='<div class="adm-table-wrap"><table class="adm"><thead><tr>'+
      '<th>#</th><th>Member</th><th>Target role</th><th>Day</th><th>Apps</th><th>Prep</th><th>Subjects</th><th>Profile</th><th>Last seen</th><th>Links</th>'+
      '</tr></thead><tbody>'+members.members.map(memberRow).join('')+'</tbody></table></div></section>';
    return html;
  }
  function memberRow(m){
    var links='';
    if(m.linkedin_url) links+='<a href="'+esc(m.linkedin_url)+'" target="_blank" rel="noopener noreferrer">in</a>';
    if(m.github_url) links+='<a href="'+esc(m.github_url)+'" target="_blank" rel="noopener noreferrer">gh</a>';
    if(m.resume_url) links+='<a href="'+esc(m.resume_url)+'" target="_blank" rel="noopener noreferrer">CV</a>';
    return '<tr>'+
      '<td>'+esc(m.member_number)+'</td>'+
      '<td class="adm-name"><b>'+esc(m.name||'—')+'</b><span>'+esc(m.email||'')+'</span></td>'+
      '<td>'+(m.target_role?esc(m.target_role):'<em style="color:var(--muted-2)">—</em>')+'</td>'+
      '<td><span class="adm-daypill'+(m.day?'':' zero')+'">'+(m.day||0)+'/45</span>'+(m.today_complete?' <span class="adm-done" title="Today complete">✓</span>':'')+'</td>'+
      '<td>'+esc(m.apps)+'</td>'+
      '<td>'+esc(m.prep)+'</td>'+
      '<td>'+esc(m.active_subjects)+'</td>'+
      '<td><span class="adm-tag '+(m.profile_complete?'ok':'no')+'">'+(m.profile_complete?'complete':'partial')+'</span></td>'+
      '<td>'+fmtAgo(m.last_seen)+'</td>'+
      '<td class="adm-links">'+(links||'<span style="color:var(--muted-2)">—</span>')+'</td>'+
    '</tr>';
  }

  function viewRequests(){
    var filters=[['pending','Pending'],['approved','Approved'],['rejected','Rejected'],['all','All']];
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Continuation requests</h2></div>'+
      '<p class="empty-note" style="margin-bottom:12px">When a member breaks their streak they can ask to continue. Approve to grant a one-day grace (their missed day counts and the streak carries on); otherwise it resets to Day 1.</p>'+
      '<div class="filter-chips">'+filters.map(function(f){return '<button class="fchip'+(reqFilter===f[0]?' on':'')+'" data-adm="reqfilter" data-f="'+f[0]+'">'+f[1]+'</button>';}).join('')+'</div>';
    if(!requests){ html+='<p class="empty-note">Loading…</p></section>'; return html; }
    if(!requests.length){ html+='<div class="empty-state"><h3>Nothing here</h3><p>No '+(reqFilter==='all'?'':reqFilter+' ')+'continuation requests.</p></div></section>'; return html; }
    html+=requests.map(reqRow).join('')+'</section>';
    return html;
  }
  function reqRow(r){
    var when=r.within_24h?'<span class="adm-tag ok">within 24h</span>':'<span class="adm-tag no">over 24h</span>';
    var st = r.status==='pending'
      ? '<div class="rq-actions"><button class="btn primary sm" data-adm="approve" data-id="'+esc(r.id)+'">Approve</button><button class="mini-btn" data-adm="reject" data-id="'+esc(r.id)+'">Reject</button></div>'
      : '<span class="adm-tag '+(r.status==='approved'?'ok':'no')+'">'+esc(r.status)+'</span>';
    return '<div class="adm-req"><div><b>#'+esc(r.member_number)+' · '+esc(r.name||'')+'</b>'+
      '<div class="app-meta"><span>'+esc(r.email||'')+'</span><span>missed '+fmtDate(r.missed_day)+'</span><span>now Day '+(r.current_day||0)+'</span>'+(r.status==='pending'?' '+when:'')+'</div>'+
      (r.reason?'<div class="app-meta" style="margin-top:4px">“'+esc(r.reason)+'”</div>':'')+
      '</div>'+st+'</div>';
  }

  function viewModeration(){
    var html='<section class="ws-sec"><div class="ws-sec-h"><h2>Community moderation</h2></div>'+
      '<p class="empty-note" style="margin-bottom:12px">Jobs members reported, or that were auto-hidden after 3+ reports. Keep the board clean and real.</p>';
    if(!reported){ html+='<p class="empty-note">Loading…</p></section>'; return html; }
    if(!reported.length){ html+='<div class="empty-state"><h3>All clear</h3><p>No reported or hidden posts right now.</p></div></section>'; return html; }
    html+='<div class="app-list">'+reported.map(function(j){
      var reasons=(j.reasons||[]).join(', ');
      return '<div class="app-row"><div class="app-main"><div class="app-title"><b>'+esc(j.role)+'</b> <span class="at-co">'+esc(j.company)+'</span></div>'+
        '<div class="app-meta"><span class="st st-'+esc(j.status)+'">'+esc(j.status)+'</span><span>'+esc(j.report_count)+' report'+(j.report_count===1?'':'s')+'</span>'+(reasons?'<span>'+esc(reasons)+'</span>':'')+' · <a href="'+esc(j.job_url)+'" target="_blank" rel="noopener noreferrer">link</a></div></div>'+
        '<div class="app-ctrl">'+
          (j.status!=='active'?'<button class="mini-btn" data-adm="job" data-id="'+esc(j.id)+'" data-status="active">Restore</button>':'')+
          (j.status!=='removed'?'<button class="mini-btn" data-adm="job" data-id="'+esc(j.id)+'" data-status="removed">Remove</button>':'')+
        '</div></div>';
    }).join('')+'</div></section>';
    return html;
  }

  /* ---------- loaders ---------- */
  async function loadOverview(){ try{ overview=await rpc('dw_admin_overview',{}); }catch(e){ toast(e.message); } }
  async function loadMembers(){ try{ members=await rpc('dw_admin_members',{p_search:memberQ||null,p_limit:200,p_offset:0}); }catch(e){ members={total:0,members:[]}; toast(e.message); } }
  async function loadRequests(){ try{ requests=await rpc('dw_admin_recovery_requests',{p_status:reqFilter}); }catch(e){ requests=[]; toast(e.message); } }
  async function loadReported(){ try{ reported=await rpc('dw_admin_reported_jobs',{}); }catch(e){ reported=[]; toast(e.message); } }

  async function ensureView(){
    if(view==='overview' && !overview) await loadOverview();
    else if(view==='members' && !members) await loadMembers();
    else if(view==='requests' && !requests) await loadRequests();
    else if(view==='moderation' && !reported) await loadReported();
    shell();
  }

  /* ---------- events ---------- */
  function bind(){
    if(bound) return; bound=true;
    root.addEventListener('click', function(ev){
      var b=ev.target.closest('[data-adm]'); if(!b) return;
      var act=b.getAttribute('data-adm');
      if(act==='view'){ view=b.getAttribute('data-view'); ensureView(); return; }
      if(act==='refresh'){ overview=members=requests=reported=null; ensureView(); toast('Refreshed.'); return; }
      if(act==='reqfilter'){ reqFilter=b.getAttribute('data-f'); requests=null; loadRequests().then(shell); return; }
      if(act==='approve'||act==='reject'){
        var approve=act==='approve';
        if(!approve && !confirm('Reject this continuation request? Their streak stays reset to Day 1.')) return;
        rpc('dw_admin_decide_recovery',{p_id:b.getAttribute('data-id'),p_approve:approve}).then(function(){ requests=null; overview=null; return Promise.all([loadRequests(),loadOverview()]); }).then(shell).then(function(){ toast(approve?'Approved — streak continued.':'Request rejected.'); }).catch(function(e){ toast(e.message); });
        return;
      }
      if(act==='job'){
        var status=b.getAttribute('data-status');
        if(status==='removed' && !confirm('Remove this post from the community board?')) return;
        rpc('dw_admin_set_job_status',{p_id:b.getAttribute('data-id'),p_status:status}).then(function(){ reported=null; overview=null; return Promise.all([loadReported(),loadOverview()]); }).then(shell).then(function(){ toast('Updated.'); }).catch(function(e){ toast(e.message); });
        return;
      }
    });
    var si;
    root.addEventListener('input', function(ev){ if(ev.target.getAttribute('data-adm')==='memsearch'){ clearTimeout(si); var q=ev.target.value; si=setTimeout(function(){ memberQ=q; loadMembers().then(shell); },350); } });
  }

  /* ---------- init ---------- */
  (async function init(){
    var s=await validSession();
    if(!s){ gate('<h1>Admin access</h1><p>Please log in on <a href="/data-warriors">Data Warriors</a> first, then reopen this page.</p>'); return; }
    var who; try{ who=await rpc('dw_whoami',{}); }catch(e){ gate('<h1>Something went wrong</h1><p>'+esc(e.message)+'</p>'); return; }
    if(!who || !who.is_admin){ gate('<h1>Not authorized</h1><p>This dashboard is for Data Warriors admins only. <a href="/data-warriors">Back to your workspace →</a></p>'); return; }
    bind();
    await loadOverview();
    shell();
  })();
})();
