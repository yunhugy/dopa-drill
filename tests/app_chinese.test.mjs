import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHINESE_SKILLS,
  RAW_QUESTION_BANK,
  getQuestionsForGrade,
  getComprehensiveQuestions,
  buildChineseProblem
} from '../app/js/chinese_bank.js';

test('Chinese bank has enough questions and skills for grades 1-6', () => {
  assert.ok(CHINESE_SKILLS.length >= 18, 'At least 18 skills defined');
  assert.ok(RAW_QUESTION_BANK.length >= 50, 'At least 50 questions in bank');

  for (let g = 1; g <= 6; g++) {
    const list = RAW_QUESTION_BANK.filter((q) => q.grade === g);
    assert.ok(list.length >= 5, `Grade ${g} has at least 5 questions`);
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
    assert.ok(p.steps.length === 1, `Must have exactly 1 step`);
    assert.equal(p.steps[0].digit, p.answer, `Step digit must match answer`);
    assert.equal(p.steps[0].cell, 'ch-target', `Step cell must point to target cell`);
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
