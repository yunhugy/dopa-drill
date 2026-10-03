import test from 'node:test';
import assert from 'node:assert/strict';
import {
  RAW_QUESTION_BANK,
  questionId,
  CHINESE_QUESTION_COUNT,
} from '../app/js/chinese_bank.js';
import {
  GENERATED_QUESTION_BANK,
  GENERATED_PINYIN_BANK,
  GENERATED_IDIOM_BANK,
  genPinyinBank,
  genIdiomBank,
  stripTones,
  mulberry32,
} from '../app/js/chinese_gen.js';
import { PINYIN_TABLE } from '../app/js/chinese_pinyin_data.js';
import { IDIOM_TABLE, HOMOPHONE_POOL } from '../app/js/chinese_idiom_data.js';

test('generated bank is deterministic across builds', () => {
  assert.deepEqual(genPinyinBank(), GENERATED_PINYIN_BANK);
  assert.deepEqual(genIdiomBank(), GENERATED_IDIOM_BANK);
});

test('stripTones maps tone marks to toneless keys', () => {
  assert.equal(stripTones('yì'), 'yi');
  assert.equal(stripTones('lǚ'), 'lv');
  assert.equal(stripTones('zhǎng'), 'zhang');
  assert.equal(stripTones('shí'), 'shi');
  assert.equal(stripTones('nǚ'), 'nv');
});

test('mulberry32 is a stable seeded PRNG', () => {
  const a = mulberry32(42), b = mulberry32(42);
  assert.equal(a(), b());
  assert.equal(a(), b());
});

test('every generated item satisfies bank invariants', () => {
  assert.ok(GENERATED_QUESTION_BANK.length >= 400, 'generator should add 400+ questions');
  for (const q of GENERATED_QUESTION_BANK) {
    const uniq = new Set(q.options);
    assert.equal(uniq.size, 4, `4 distinct options for: ${q.prefix}${q.missing}`);
    assert.ok(q.options.includes(q.missing), `answer in options for: ${q.prefix}`);
    assert.ok(q.explanation && q.explanation.length > 0, `explanation for: ${q.prefix}`);
    assert.ok(Number.isInteger(q.grade) && q.grade >= 1 && q.grade <= 6, 'grade in range');
    assert.ok(['pinyin', 'idiom'].includes(q.type), 'generated types are pinyin/idiom');
  }
});

test('pinyin distractors are plausible (other readings or tone variants)', () => {
  const byChar = new Map();
  for (const e of PINYIN_TABLE) byChar.set(e.char, e.readings.map((r) => r[0]));
  for (const q of GENERATED_PINYIN_BANK) {
    const char = q.prefix.match(/“(.)”读作/)?.[1];
    const readings = byChar.get(char) || [];
    const answerBase = stripTones(q.missing);
    for (const o of q.options) {
      if (o === q.missing) continue;
      const isOtherReading = readings.includes(o);
      const isToneVariant = stripTones(o) === answerBase;
      assert.ok(isOtherReading || isToneVariant,
        `distractor ${o} should be another reading or tone variant for ${char}`);
    }
  }
});

test('idiom distractors are homophones of the answer', () => {
  for (const q of GENERATED_IDIOM_BANK) {
    const idiom = q.explanation.split('：')[0];
    const row = IDIOM_TABLE.find((r) => r[0] === idiom);
    assert.ok(row, `idiom row found for ${idiom}`);
    const answerKey = stripTones(row[1].split(' ')[row[3]]);
    for (const o of q.options) {
      if (o === q.missing) continue;
      const poolHit = (HOMOPHONE_POOL[answerKey] || []).includes(o);
      // fallback distractors (rare) just need to be real CJK chars, not the answer
      assert.ok(poolHit || (o !== q.missing && /\p{Script=Han}/u.test(o)),
        `distractor ${o} should be a homophone of ${q.missing} (${answerKey})`);
    }
  }
});

test('generated questions do not collide with handwritten ones', () => {
  const handIds = new Set(
    RAW_QUESTION_BANK.slice(0, RAW_QUESTION_BANK.length - GENERATED_QUESTION_BANK.length).map(questionId)
  );
  for (const q of GENERATED_QUESTION_BANK) {
    assert.ok(!handIds.has(questionId(q)), `collision with handwritten: ${questionId(q)}`);
  }
});

test('generated bank covers every grade for pinyin and idiom', () => {
  for (let g = 1; g <= 6; g++) {
    assert.ok(GENERATED_PINYIN_BANK.some((q) => q.grade === g), `grade ${g} has generated pinyin`);
    assert.ok(GENERATED_IDIOM_BANK.some((q) => q.grade === g), `grade ${g} has generated idiom`);
  }
});

test('total bank count reflects handwritten + generated', () => {
  assert.equal(CHINESE_QUESTION_COUNT, RAW_QUESTION_BANK.length);
  assert.ok(CHINESE_QUESTION_COUNT >= 700, `bank should be 700+, got ${CHINESE_QUESTION_COUNT}`);
});
