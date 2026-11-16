/**
 * Readiness check: a short diagnostic that takes at least one question from every topic
 * in a section, so the result shows where a candidate is weak rather than how they would
 * score. The set is the same for everyone in a calendar month (India time) and then
 * changes. Pure functions; data loading lives in readiness-data.ts.
 */
import { istDate } from "@/lib/qotd";

/** Fewest questions in a check. Sections with more topics than this get one per topic. */
export const READINESS_MIN_SIZE = 20;
/** Time allowed per question, in seconds. */
export const READINESS_SECONDS_EACH = 90;

/** "2026-11": the month a check belongs to. */
export const currentReadinessMonth = (now = new Date()) => istDate(now).slice(0, 7);

function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

export type ReadinessCandidate = { id: string; topicId: string; topicOrder: number };

/**
 * One question per topic in syllabus order, then further rounds across topics (in a seeded
 * order) until the check has at least READINESS_MIN_SIZE questions or the bank runs out.
 */
export function pickReadiness(candidates: ReadinessCandidate[], opts: { subject: string; month: string }): string[] {
  const seed = (id: string) => hash(`readiness:${opts.subject}:${opts.month}:${id}`);
  const byTopic = new Map<string, ReadinessCandidate[]>();
  for (const c of candidates) byTopic.set(c.topicId, [...(byTopic.get(c.topicId) ?? []), c]);
  const queues = [...byTopic.values()].map((qs) => qs.sort((a, b) => seed(a.id) - seed(b.id))).sort((a, b) => a[0].topicOrder - b[0].topicOrder);

  const picked = queues.map((q) => q[0].id);
  const target = Math.max(READINESS_MIN_SIZE, queues.length);
  const extraOrder = [...queues].sort((a, b) => seed(a[0].topicId) - seed(b[0].topicId));
  for (let round = 1; picked.length < target; round++) {
    let any = false;
    for (const q of extraOrder) {
      if (picked.length === target) break;
      if (q[round]) {
        picked.push(q[round].id);
        any = true;
      }
    }
    if (!any) break;
  }
  // Present in syllabus order, so related questions sit together.
  const order = new Map(candidates.map((c) => [c.id, c.topicOrder]));
  return picked.sort((a, b) => order.get(a)! - order.get(b)! || seed(a) - seed(b));
}

export type ReadinessBand = "strong" | "developing" | "priority";

/** Strong at 75% or more, developing from 50%, otherwise a priority. */
export function readinessBand(right: number, total: number): ReadinessBand {
  const pct = total === 0 ? 0 : right / total;
  return pct >= 0.75 ? "strong" : pct >= 0.5 ? "developing" : "priority";
}

export const READINESS_BAND_LABEL: Record<ReadinessBand, string> = {
  strong: "Strong",
  developing: "Developing",
  priority: "Priority",
};
