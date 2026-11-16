/**
 * Full-length mock exams: one section, the real exam's five testlets and four hours.
 * The structure below is from the AICPA's "Learn what is tested on the CPA Exam" page
 * (read 16 November 2026) and the scoring weights from its scoring page. Pure functions;
 * data loading lives in full-mock-data.ts.
 */
import { istDate } from "@/lib/qotd";

export type SectionStructure = {
  /** Multiple-choice questions in testlets 1 and 2. */
  mcq: [number, number];
  /** Task-based simulations in testlets 3, 4 and 5. */
  tbs: [number, number, number];
  /** Share of the score from multiple-choice questions. */
  mcqWeight: number;
};

export const EXAM_STRUCTURE: Record<string, SectionStructure> = {
  aud: { mcq: [39, 39], tbs: [2, 3, 2], mcqWeight: 0.5 },
  far: { mcq: [25, 25], tbs: [2, 3, 2], mcqWeight: 0.5 },
  reg: { mcq: [36, 36], tbs: [2, 3, 3], mcqWeight: 0.5 },
  bar: { mcq: [25, 25], tbs: [2, 3, 2], mcqWeight: 0.5 },
  isc: { mcq: [41, 41], tbs: [1, 3, 2], mcqWeight: 0.6 },
  tcp: { mcq: [34, 34], tbs: [2, 3, 2], mcqWeight: 0.5 },
};

export const EXAM_MINUTES = 240;
export const BREAK_MINUTES = 15;
/** The standard break is offered after this testlet (the first simulation testlet). */
export const BREAK_AFTER_TESTLET = 3;

/** "2026-11": the month a form belongs to. Forms change on the first of each month, India time. */
export const currentMockMonth = (now = new Date()) => istDate(now).slice(0, 7);

function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

/** A stable shuffle: the same items, seed and month always give the same order. */
export function seededOrder<T>(items: T[], key: (t: T) => string, seed: string): T[] {
  return [...items].sort((a, b) => hash(`${seed}:${key(a)}`) - hash(`${seed}:${key(b)}`) || key(a).localeCompare(key(b)));
}

/**
 * Picks the simulations for a form: one per topic in a seeded order, so the form covers
 * as many topics as possible, then a second round if more are needed.
 */
export function pickSimulations<T extends { slug: string; topic: string }>(sims: T[], count: number, seed: string): T[] {
  const ordered = seededOrder(sims, (s) => s.slug, seed);
  const picked: T[] = [];
  const usedTopics = new Set<string>();
  for (const s of ordered) {
    if (picked.length === count) break;
    if (!usedTopics.has(s.topic)) {
      picked.push(s);
      usedTopics.add(s.topic);
    }
  }
  for (const s of ordered) {
    if (picked.length === count) break;
    if (!picked.includes(s)) picked.push(s);
  }
  return picked;
}

/** Splits a list into consecutive groups of the given sizes. */
export function splitInto<T>(items: T[], sizes: readonly number[]): T[][] {
  const out: T[][] = [];
  let i = 0;
  for (const n of sizes) {
    out.push(items.slice(i, i + n));
    i += n;
  }
  return out;
}

/** The weighted raw percentage, using the exam's weighting between the two question types. */
export function weightedPercent(mcqRight: number, mcqTotal: number, tbsRight: number, tbsTotal: number, mcqWeight: number): number {
  const mcq = mcqTotal ? mcqRight / mcqTotal : 0;
  const tbs = tbsTotal ? tbsRight / tbsTotal : 0;
  return Math.round((mcq * mcqWeight + tbs * (1 - mcqWeight)) * 1000) / 10;
}
