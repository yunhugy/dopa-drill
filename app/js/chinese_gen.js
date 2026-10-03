// Auto-generated Chinese question bank: pinyin + idiom questions built from
// data tables (chinese_pinyin_data.js, chinese_idiom_data.js).
//
// Design: the generator produces bank items in the EXACT same shape as the
// handwritten RAW_QUESTION_BANK entries in chinese_bank.js:
//   { grade, type, prefix, missing, suffix, options[4], explanation }
// so the existing deck (ChineseDeck), no-repeat logic, tests and UI work
// unchanged. Generation is deterministic: a fixed seed drives all random
// choices, so the bank is stable across loads and tests.
//
// What is generated vs handwritten:
// - pinyin: every (character, reading) pair in PINYIN_TABLE becomes one question.
// - idiom: every IDIOM_TABLE row becomes one question (blank position is fixed
//   per row, chosen for the most test-worthy character).
// Distractors: pinyin uses the character's other readings first, then tone
// variants; idioms use homophones from HOMOPHONE_POOL.
import { PINYIN_TABLE } from './chinese_pinyin_data.js';
import { IDIOM_TABLE, HOMOPHONE_POOL } from './chinese_idiom_data.js';

// ---------------------------------------------------------------- RNG
// mulberry32: tiny seeded PRNG so generated banks are deterministic.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sampleDistinct(rng, arr, n, exclude) {
  const seen = new Set();
  if (exclude !== undefined && exclude !== null) seen.add(exclude);
  const order = arr.slice();
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const picked = [];
  for (const x of order) {
    if (picked.length >= n) break;
    if (!seen.has(x)) { seen.add(x); picked.push(x); }
  }
  return picked;
}

// ---------------------------------------------------------------- Pinyin tone helpers
const TONE_MAP = {
  a: ['ā', 'á', 'ǎ', 'à'],
  e: ['ē', 'é', 'ě', 'è'],
  i: ['ī', 'í', 'ǐ', 'ì'],
  o: ['ō', 'ó', 'ǒ', 'ò'],
  u: ['ū', 'ú', 'ǔ', 'ù'],
  'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
};
const TONED_TO_BASE = {};
for (const [base, tones] of Object.entries(TONE_MAP)) {
  tones.forEach((ch, idx) => { TONED_TO_BASE[ch] = [base, idx + 1]; });
}
// Strip tone marks to a toneless key, with ü -> v (matches HOMOPHONE_POOL keys).
export function stripTones(s) {
  return [...s].map((ch) => {
    if (ch === 'ü' || ch === 'ǖ' || ch === 'ǘ' || ch === 'ǚ' || ch === 'ǜ') return 'v';
    const hit = TONED_TO_BASE[ch];
    return hit ? hit[0] : ch;
  }).join('');
}
// All tone variants of a reading except the reading itself, e.g. 'lè' -> ['lē','lé','lě'].
function toneVariants(reading) {
  const chars = [...reading];
  let idx = -1, base = null, tone = 0;
  for (let i = 0; i < chars.length; i++) {
    const hit = TONED_TO_BASE[chars[i]];
    if (hit) { idx = i; [base, tone] = hit; break; }
  }
  const out = [];
  if (idx >= 0) {
    for (let t = 1; t <= 4; t++) {
      if (t === tone) continue;
      const c = chars.slice(); c[idx] = TONE_MAP[base][t - 1];
      out.push(c.join(''));
    }
    return out;
  }
  // Neutral tone: put tones on the main vowel (a/e/o first, else last vowel).
  let vi = chars.findIndex((c) => 'aeo'.includes(c));
  if (vi < 0) {
    for (let i = chars.length - 1; i >= 0; i--) {
      if ('iuüv'.includes(chars[i])) { vi = i; break; }
    }
  }
  if (vi < 0) return out;
  const b = chars[vi] === 'v' ? 'ü' : chars[vi];
  for (let t = 1; t <= 4; t++) {
    const c = chars.slice(); c[vi] = TONE_MAP[b][t - 1];
    out.push(c.join(''));
  }
  return out;
}

// ---------------------------------------------------------------- Pinyin generation
function buildPinyinItem(entry, readingIdx) {
  const [reading, example, gloss] = entry.readings[readingIdx];
  const others = entry.readings.filter((_, i) => i !== readingIdx).map((r) => r[0]);
  const rng = mulberry32(hashStr(`${entry.char}|${reading}`));
  // A tone variant of the answer can coincide with another reading of the
  // same character (e.g. hǎo -> hào), so track everything used.
  const used = new Set([reading]);
  const distractors = [];
  for (const o of others) {
    if (distractors.length < 3 && !used.has(o)) { used.add(o); distractors.push(o); }
  }
  if (distractors.length < 3) {
    const variants = toneVariants(reading).filter((v) => !used.has(v));
    for (const v of sampleDistinct(rng, variants, 3 - distractors.length)) {
      used.add(v); distractors.push(v);
    }
  }
  // Last-resort fallback (should not happen with the shipped table).
  const fallbackTones = ['mā', 'má', 'mǎ', 'mà'];
  for (const c of fallbackTones) {
    if (distractors.length >= 3) break;
    if (!used.has(c)) { used.add(c); distractors.push(c); }
  }
  const explanation = `“${entry.char}”` +
    entry.readings.map(([r, ex, gl]) => `${gl}读 ${r}`).join('；') + '。';
  return {
    grade: entry.grade,
    type: 'pinyin',
    prefix: `“${example}”的“${entry.char}”读作：`,
    missing: reading,
    suffix: '',
    options: [reading, ...distractors],
    explanation,
  };
}

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export function genPinyinBank() {
  const items = [];
  for (const entry of PINYIN_TABLE) {
    for (let i = 0; i < entry.readings.length; i++) {
      items.push(buildPinyinItem(entry, i));
    }
  }
  return items;
}

// ---------------------------------------------------------------- Idiom generation
function buildIdiomItem(row) {
  const [idiom, pinyin, meaning, blank, grade] = row;
  const chars = [...idiom];
  const answer = chars[blank];
  const answerKey = stripTones(pinyin.split(' ')[blank]);
  const rng = mulberry32(hashStr(idiom));
  const pool = (HOMOPHONE_POOL[answerKey] || []).filter((c) => c !== answer);
  let distractors = sampleDistinct(rng, pool, 3, answer);
  // Fallback: borrow from other pools so the item is never short.
  if (distractors.length < 3) {
    const spare = [];
    for (const k of Object.keys(HOMOPHONE_POOL)) {
      for (const c of HOMOPHONE_POOL[k]) {
        if (c !== answer && !distractors.includes(c) && !spare.includes(c)) spare.push(c);
      }
    }
    for (const c of sampleDistinct(rng, spare, 3 - distractors.length)) distractors.push(c);
  }
  const before = chars.slice(0, blank).join(' ');
  const prefix = before ? before + ' ' : '';
  return {
    grade,
    type: 'idiom',
    prefix,
    missing: answer,
    suffix: '',
    options: [answer, ...distractors],
    explanation: `${idiom}：${meaning}`,
  };
}

export function genIdiomBank() {
  return IDIOM_TABLE.map(buildIdiomItem);
}

// ---------------------------------------------------------------- Combined bank
// Built once at import time with fixed seeds: deterministic across loads.
export const GENERATED_PINYIN_BANK = genPinyinBank();
export const GENERATED_IDIOM_BANK = genIdiomBank();
export const GENERATED_QUESTION_BANK = [...GENERATED_PINYIN_BANK, ...GENERATED_IDIOM_BANK];
