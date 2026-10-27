-- =====================================================================
--  Quizz: rich content support (SQL / Python quizzes)
--  Widen question / option / explanation limits so a question stem can
--  carry a small dataset table + a code block, and options can hold a
--  full SQL/Python snippet. Everything stays plain text in the DB; the
--  client renders a safe markdown subset (code blocks, tables, inline
--  code, bold). Loosening a CHECK is additive and instant — no rewrite,
--  no lock on existing rows, no impact on plain-text quizzes already live.
-- =====================================================================

-- question stem: 500 -> 5000 (room for a dataset table + a code block)
alter table public.quiz_questions drop constraint if exists quiz_questions_text_check;
alter table public.quiz_questions
  add constraint quiz_questions_text_check
  check (length(btrim(text)) between 1 and 5000);

-- options: 200 -> 2000 each (a full query can be the option)
alter table public.quiz_questions drop constraint if exists quiz_questions_option_a_check;
alter table public.quiz_questions
  add constraint quiz_questions_option_a_check
  check (length(btrim(option_a)) between 1 and 2000);

alter table public.quiz_questions drop constraint if exists quiz_questions_option_b_check;
alter table public.quiz_questions
  add constraint quiz_questions_option_b_check
  check (length(btrim(option_b)) between 1 and 2000);

alter table public.quiz_questions drop constraint if exists quiz_questions_option_c_check;
alter table public.quiz_questions
  add constraint quiz_questions_option_c_check
  check (length(btrim(option_c)) between 1 and 2000);

alter table public.quiz_questions drop constraint if exists quiz_questions_option_d_check;
alter table public.quiz_questions
  add constraint quiz_questions_option_d_check
  check (length(btrim(option_d)) between 1 and 2000);

-- explanation: 1000 -> 4000 (explanations often include a worked table)
alter table public.quiz_answer_key drop constraint if exists quiz_answer_key_explanation_check;
alter table public.quiz_answer_key
  add constraint quiz_answer_key_explanation_check
  check (explanation is null or length(explanation) <= 4000);

-- ---------------------------------------------------------------------
-- Re-create quiz_save_questions with the widened truncation lengths so
-- long code/table content is no longer silently clipped on save. Body is
-- identical to the original except for the left(...) limits.
-- ---------------------------------------------------------------------
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
    values (p_quiz_id, i, left(v_text,5000), left(va,2000), left(vb,2000), left(vc,2000), left(vd,2000), vtime)
    returning id into qid;

    insert into public.quiz_answer_key(question_id, correct_option, explanation)
    values (qid, vcorrect, left(vexpl,4000));

    i := i + 1;
  end loop;

  update public.quiz_quizzes set updated_at = now() where id = p_quiz_id;
  return jsonb_build_object('ok', true, 'count', i);
end $$;
