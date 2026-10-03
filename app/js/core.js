// Frame clock, tweens, springs and small math helpers.
// Everything is driven by performance.now() with dual timer/RAF drivers so it runs
// flawlessly in all environments (Safari, headless, background tabs).

const tasks = new Set();
let last = performance.now();
let running = false;

export const now = () => performance.now();

export function onFrame(fn) {
  tasks.add(fn);
  return () => tasks.delete(fn);
}

function tick() {
  const t = performance.now();
  const dt = Math.min(0.05, Math.max(0, (t - last) / 1000));
  last = t;
  for (const fn of [...tasks]) {
    try { fn(dt, t); } catch {}
  }
}

export function startClock() {
  if (running) return;
  running = true;
  last = performance.now();
  setInterval(tick, 16);
  function raf() {
    tick();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// Rock-solid wait implementation
export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.max(0, ms));
  });
}

// Rock-solid tween implementation powered by high-frequency timer
export function tween(duration, fn, ease = easeOutCubic) {
  return new Promise((resolve) => {
    if (duration <= 0) {
      try { fn(ease(1), 1); } catch {}
      resolve();
      return;
    }
    const t0 = performance.now();
    try { fn(ease(0), 0); } catch {}
    const timer = setInterval(() => {
      const elapsed = performance.now() - t0;
      const k = Math.min(1, elapsed / duration);
      try { fn(ease(k), k); } catch {}
      if (k >= 1) {
        clearInterval(timer);
        resolve();
      }
    }, 16);
  });
}

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, k) => a + (b - a) * k;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a));
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (list) => list[Math.floor(Math.random() * list.length)];
export const chance = (p) => Math.random() < p;

export const easeLinear = (k) => k;
export const easeOutCubic = (k) => 1 - (1 - k) ** 3;
export const easeInCubic = (k) => k * k * k;
export const easeInOutCubic = (k) => (k < 0.5 ? 4 * k * k * k : 1 - (-2 * k + 2) ** 3 / 2);
export const easeOutQuint = (k) => 1 - (1 - k) ** 5;
export const easeInQuad = (k) => k * k;
export const easeOutQuad = (k) => 1 - (1 - k) * (1 - k);
export const easeOutBack = (k, s = 1.9) => 1 + (s + 1) * (k - 1) ** 3 + s * (k - 1) ** 2;
export const easeInBack = (k, s = 1.7) => (s + 1) * k * k * k - s * k * k;
export const easeOutElastic = (k) => (k === 0 || k === 1 ? k : 2 ** (-10 * k) * Math.sin((k * 10 - 0.75) * (2 * Math.PI / 3)) + 1);

// Critically-damped-ish spring used for squash, ears and small offsets.
export class Spring {
  constructor(value = 0, stiffness = 320, damping = 16) {
    this.value = value;
    this.target = value;
    this.velocity = 0;
    this.stiffness = stiffness;
    this.damping = damping;
  }
  kick(v) { this.velocity += v; }
  step(dt) {
    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      const a = (this.target - this.value) * this.stiffness - this.velocity * this.damping;
      this.velocity += a * h;
      this.value += this.velocity * h;
    }
    return this.value;
  }
}

export function quadPoint(a, c, b, t) {
  const u = 1 - t;
  return { x: u * u * a.x + 2 * u * t * c.x + t * t * b.x, y: u * u * a.y + 2 * u * t * c.y + t * t * b.y };
}

export function centerOf(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height };
}

export const params = new URLSearchParams(typeof location !== 'undefined' ? location.search : '');
