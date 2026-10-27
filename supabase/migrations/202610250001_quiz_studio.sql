-- =====================================================================
-- AnalystWorld Quizz — Quiz Studio RPCs (Phase C).
--
-- Authoring layer: create/update quizzes, replace their question set
-- (text + options go to quiz_questions, the correct answer + explanation
-- go to the deny-all quiz_answer_key in the same transaction), list the
-- host's quizzes, load one for editing, publish / unpublish / delete.
--
-- Every function is SECURITY DEFINER, ownership-checked against
-- auth.uid(), additive, and granted to authenticated only — same house
-- pattern as Phase B and Data Warriors. No existing object is altered.
-- =====================================================================
begin;

-- ── internal: assert the caller owns the quiz, return its row ────────
create or replace function public.quiz_owned(p_quiz_id uuid)
returns public.quiz_quizzes language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); q public.quiz_quizzes%rowtype;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  select * into q from public.quiz_quizzes where id = p_quiz_id;
  if q.id is null then raise exception 'Quiz not found.'; end if;
  if q.owner <> uid then raise exception 'That quiz isn''t yours.'; end if;
  return q;
end $$;

-- ── create a new draft quiz ──────────────────────────────────────────
create or replace function public.quiz_create(
  p_title text, p_description text default null,
  p_cover text default null, p_default_timer int default 20)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); q public.quiz_quizzes%rowtype; t int;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  if length(btrim(coalesce(p_title,''))) < 1 then raise exception 'Give your quiz a title.'; end if;
  t := coalesce(p_default_timer, 20);
  if t < 5 or t > 300 then t := 20; end if;
  -- keep host tracking fresh
  insert into public.quiz_hosts(user_id, source) values (uid, 'quizzes_studio')
    on conflict (user_id) do update set last_active = now();
  insert into public.quiz_quizzes(owner, title, description, cover, default_timer)
  values (uid, btrim(p_title),
          nullif(btrim(coalesce(p_description,'')),''),
          nullif(btrim(coalesce(p_cover,'')),''), t)
  returning * into q;
  return jsonb_build_object('ok', true, 'id', q.id);
end $$;

-- ── update quiz metadata ─────────────────────────────────────────────
create or replace function public.quiz_update(
  p_quiz_id uuid, p_title text, p_description text default null,
  p_cover text default null, p_default_timer int default null)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare q public.quiz_quizzes%rowtype; t int;
begin
  q := public.quiz_owned(p_quiz_id);
  if length(btrim(coalesce(p_title,''))) < 1 then raise exception 'Give your quiz a title.'; end if;
  t := coalesce(p_default_timer, q.default_timer);
  if t < 5 or t > 300 then t := q.default_timer; end if;
  update public.quiz_quizzes set
    title = btrim(p_title),
    description = nullif(btrim(coalesce(p_description,'')),''),
    cover = nullif(btrim(coalesce(p_cover,'')),''),
    default_timer = t,
    updated_at = now()
  where id = p_quiz_id;
  return jsonb_build_object('ok', true, 'id', p_quiz_id);
end $$;

-- ── replace the whole question set (text + answer key, atomic) ───────
-- p_questions: jsonb array of
--   {"text":..,"a":..,"b":..,"c":..,"d":..,"correct":"A|B|C|D",
--    "explanation":..(opt),"time":..(opt int)}
create or replace function public.quiz_save_questions(p_quiz_id uuid, p_questions jsonb)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare
  q public.quiz_quizzes%rowtype;
  item jsonb; i int := 0; qid uuid;
  v_text text; va text; vb text; vc text; vd text; vcorrect text; vexpl text; vtime int;
  n int;
begin
  q := public.quiz_owned(p_quiz_id);

  -- guard: never rewrite questions out from under a live game
  if exists (select 1 from public.quiz_sessions s
             where s.quiz_id = p_quiz_id and s.state <> 'COMPLETED') then
    raise exception 'This quiz has a live game running — end it before editing.';
  end if;

  if p_questions is null or jsonb_typeof(p_questions) <> 'array' then
    raise exception 'No questions to save.';
  end if;
  n := jsonb_array_length(p_questions);
  if n < 1 then raise exception 'Add at least one question.'; end if;
  if n > 100 then raise exception 'That''s over the 100-question limit.'; end if;

  -- replace: delete existing (answer key cascades) then re-insert
  delete from public.quiz_questions where quiz_id = p_quiz_id;

  for item in select * from jsonb_array_elements(p_questions) loop
    v_text   := btrim(coalesce(item->>'text',''));
    va       := btrim(coalesce(item->>'a',''));
    vb       := btrim(coalesce(item->>'b',''));
    vc       := btrim(coalesce(item->>'c',''));
    vd       := btrim(coalesce(item->>'d',''));
    vcorrect := upper(btrim(coalesce(item->>'correct','')));
    vexpl    := nullif(btrim(coalesce(item->>'explanation','')),'');
    vtime    := nullif(item->>'time','')::int;

    if v_text = '' then raise exception 'Question %: the question text is empty.', i+1; end if;
    if va=''or vb=''or vc=''or vd='' then raise exception 'Question %: all four options are required.', i+1; end if;
    if vcorrect not in ('A','B','C','D') then raise exception 'Question %: mark the correct option (A–D).', i+1; end if;
    if vtime is not null and (vtime < 5 or vtime > 300) then vtime := null; end if;

    insert into public.quiz_questions(quiz_id, idx, text, option_a, option_b, option_c, option_d, time_override)
    values (p_quiz_id, i, left(v_text,500), left(va,200), left(vb,200), left(vc,200), left(vd,200), vtime)
    returning id into qid;

    insert into public.quiz_answer_key(question_id, correct_option, explanation)
    values (qid, vcorrect, left(vexpl,1000));

    i := i + 1;
  end loop;

  update public.quiz_quizzes set updated_at = now() where id = p_quiz_id;
  return jsonb_build_object('ok', true, 'count', i);
end $$;

-- ── publish / unpublish ──────────────────────────────────────────────
create or replace function public.quiz_publish(p_quiz_id uuid, p_publish boolean default true)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare q public.quiz_quizzes%rowtype; cnt int;
begin
  q := public.quiz_owned(p_quiz_id);
  if p_publish then
    select count(*) into cnt from public.quiz_questions where quiz_id = p_quiz_id;
    if cnt < 1 then raise exception 'Add at least one question before publishing.'; end if;
    update public.quiz_quizzes set status='published', updated_at=now() where id=p_quiz_id;
  else
    update public.quiz_quizzes set status='draft', updated_at=now() where id=p_quiz_id;
  end if;
  return jsonb_build_object('ok', true, 'status', case when p_publish then 'published' else 'draft' end);
end $$;

-- ── delete a quiz (cascades questions / answer key / sessions) ───────
create or replace function public.quiz_delete(p_quiz_id uuid)
returns jsonb language plpgsql security definer
set search_path = pg_catalog, public, auth as $$
declare q public.quiz_quizzes%rowtype;
begin
  q := public.quiz_owned(p_quiz_id);
  delete from public.quiz_quizzes where id = p_quiz_id;
  return jsonb_build_object('ok', true);
end $$;

-- ── list the caller's quizzes (with question + game counts) ──────────
create or replace function public.quiz_my_quizzes()
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare uid uuid := auth.uid(); rows jsonb;
begin
  if uid is null then raise exception 'Please log in first.'; end if;
  select coalesce(jsonb_agg(x order by x.updated_at desc), '[]'::jsonb) into rows
  from (
    select q.id, q.title, q.description, q.cover, q.status, q.default_timer,
           q.created_at, q.updated_at,
           (select count(*) from public.quiz_questions qq where qq.quiz_id = q.id) as question_count,
           (select count(*) from public.quiz_sessions s where s.quiz_id = q.id) as games_count
    from public.quiz_quizzes q
    where q.owner = uid
  ) x;
  return jsonb_build_object('ok', true, 'quizzes', rows);
end $$;

-- ── load one quiz for editing (owner only — includes answer key) ─────
create or replace function public.quiz_get_quiz(p_quiz_id uuid)
returns jsonb language plpgsql stable security definer
set search_path = pg_catalog, public, auth as $$
declare q public.quiz_quizzes%rowtype; qs jsonb;
begin
  q := public.quiz_owned(p_quiz_id);
  select coalesce(jsonb_agg(x order by x.idx), '[]'::jsonb) into qs
  from (
    select qq.idx, qq.text, qq.option_a as a, qq.option_b as b, qq.option_c as c, qq.option_d as d,
           qq.time_override as time, ak.correct_option as correct, ak.explanation
    from public.quiz_questions qq
    left join public.quiz_answer_key ak on ak.question_id = qq.id
    where qq.quiz_id = p_quiz_id
  ) x;
  return jsonb_build_object('ok', true,
    'quiz', jsonb_build_object('id', q.id, 'title', q.title, 'description', q.description,
      'cover', q.cover, 'status', q.status, 'default_timer', q.default_timer),
    'questions', qs);
end $$;

-- ── grants: authenticated only; internal helper stays private ────────
revoke all on function public.quiz_owned(uuid)                         from public, anon, authenticated;
revoke all on function public.quiz_create(text,text,text,int)          from public, anon, authenticated;
revoke all on function public.quiz_update(uuid,text,text,text,int)     from public, anon, authenticated;
revoke all on function public.quiz_save_questions(uuid,jsonb)          from public, anon, authenticated;
revoke all on function public.quiz_publish(uuid,boolean)               from public, anon, authenticated;
revoke all on function public.quiz_delete(uuid)                        from public, anon, authenticated;
revoke all on function public.quiz_my_quizzes()                        from public, anon, authenticated;
revoke all on function public.quiz_get_quiz(uuid)                      from public, anon, authenticated;

grant execute on function public.quiz_create(text,text,text,int)       to authenticated;
grant execute on function public.quiz_update(uuid,text,text,text,int)  to authenticated;
grant execute on function public.quiz_save_questions(uuid,jsonb)       to authenticated;
grant execute on function public.quiz_publish(uuid,boolean)            to authenticated;
grant execute on function public.quiz_delete(uuid)                     to authenticated;
grant execute on function public.quiz_my_quizzes()                     to authenticated;
grant execute on function public.quiz_get_quiz(uuid)                   to authenticated;

commit;
