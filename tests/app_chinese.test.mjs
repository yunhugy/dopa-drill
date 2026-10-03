import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHINESE_SKILLS,
  RAW_QUESTION_BANK,
  getQuestionsForGrade,
  getComprehensiveQuestions,
  buildChineseProblem,
  ChineseDeck,
  questionId,
  CHINESE_QUESTION_COUNT
} from '../app/js/chinese_bank.js';

test('Chinese bank has enough questions and skills for grades 1-6', () => {
  assert.ok(CHINESE_SKILLS.length >= 24, 'At least 24 skills defined');
  assert.ok(CHINESE_QUESTION_COUNT >= 200, 'At least 200 questions in bank');

  for (let g = 1; g <= 6; g++) {
    const list = RAW_QUESTION_BANK.filter((q) => q.grade === g);
    assert.ok(list.length >= 40, `Grade ${g} has at least 40 questions`);
    for (const type of ['idiom', 'pinyin', 'typo', 'poem']) {
      const n = list.filter((q) => q.type === type).length;
      assert.ok(n >= 8, `Grade ${g} has at least 8 ${type} questions`);
    }
  }
});

test('Every bank item has four distinct options including the answer', () => {
  for (const q of RAW_QUESTION_BANK) {
    const uniq = new Set(q.options);
    assert.equal(uniq.size, 4, `Options must be distinct for: ${q.prefix}`);
    assert.ok(q.options.includes(q.missing), `Options must include the answer for: ${q.prefix}`);
    assert.ok(q.explanation && q.explanation.length > 0, `Explanation required for: ${q.prefix}`);
    assert.ok(Number.isInteger(q.grade) && q.grade >= 1 && q.grade <= 6, `Grade in range for: ${q.prefix}`);
  }
});

test('Generated Chinese problem matches dopa-drill engine requirements', () => {
  const problems = getComprehensiveQuestions(10);
  assert.equal(problems.length, 10);

  problems.forEach((p, idx) => {
    assert.equal(p.kind, 'chinese', `Problem #${idx} kind must be chinese`);
    assert.ok(p.title, `Problem #${idx} must have title`);
    assert.ok(Array.isArray(p.options), `Problem #${idx} options must be an array`);
    assert.equal(p.options.length, 4, `Problem #${idx} must have 4 options`);
    assert.ok(p.options.includes(p.answer), `Options must contain answer for #${idx}`);
    assert.equal(p.steps.length, 1, `Must have exactly 1 step`);
    assert.equal(p.steps[0].digit, p.answer, `Step digit must match answer`);
    assert.equal(p.steps[0].cell, 'ch-target', `Step cell must point to target cell`);
    assert.ok(p.explanation, `Problem #${idx} needs an explanation`);
  });
});

test('Grade question generation filters strictly by grade', () => {
  for (let g = 1; g <= 6; g++) {
    const list = getQuestionsForGrade(g, 6);
    assert.equal(list.length, 6);
    list.forEach((p) => {
      assert.equal(p.rawQuestion.grade, g, `Grade should match requested grade ${g}`);
    });
  }
});

test('ChineseDeck never repeats a question until the pool is exhausted', () => {
  const deck = new ChineseDeck(() => 0.42);
  const seen = new Set();
  for (let i = 0; i < CHINESE_QUESTION_COUNT; i++) {
    const id = questionId(deck.next().rawQuestion);
    assert.ok(!seen.has(id), `Duplicate question drawn before pool exhausted: ${id}`);
    seen.add(id);
  }
  assert.equal(seen.size, CHINESE_QUESTION_COUNT);
});

test('ChineseDeck skips questions the player has already seen', () => {
  const seen = new Set(RAW_QUESTION_BANK.slice(0, 200).map(questionId));
  const deck = new ChineseDeck(Math.random, null, seen);
  for (let i = 0; i < 40; i++) {
    const p = deck.next();
    assert.ok(!seen.has(questionId(p.rawQuestion)), 'Deck should avoid already-seen questions while unseen ones remain');
  }
});

test('Grade-scoped deck stays inside its grade', () => {
  const deck = new ChineseDeck(Math.random, (q) => q.grade === 3);
  for (let i = 0; i < 40; i++) {
    assert.equal(deck.next().rawQuestion.grade, 3);
  }
});
