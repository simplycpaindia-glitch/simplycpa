/**
 * Weekly mini-mocks: 30 questions per section, the same for everyone in a given week
 * (weeks start on Monday, India time), split across blueprint areas by exam weight and
 * spread across topics. Pure functions; the data loading lives in mini-mock-data.ts.
 */
import { addDays, istDate } from "@/lib/qotd";
import { areaNumber } from "@/lib/blueprint";

export const MOCK_SIZE = 30;
export const MOCK_MINUTES = 45;

/** Monday of the week containing `date` (YYYY-MM-DD, India time). */
export function weekStart(date: string): string {
  const day = new Date(`${date}T00:00:00Z`).getUTCDay(); // 0 = Sunday
  return addDays(date, -((day + 6) % 7));
}

export const currentWeekStart = (now = new Date()) => weekStart(istDate(now));

/** "30–40%" → 35 */
export function weightMidpoint(range: string | undefined): number {
  const m = range?.match(/(\d+)\D+(\d+)/);
  return m ? (Number(m[1]) + Number(m[2])) / 2 : 1;
}

/** Splits `total` across areas in proportion to their weights (largest remainder), capped by availability. */
export function allocate(areas: { key: string; weight: number; available: number }[], total: number): Map<string, number> {
  const sum = areas.reduce((s, a) => s + a.weight, 0) || 1;
  const raw = areas.map((a) => ({ ...a, exact: (a.weight / sum) * total }));
  const out = new Map(raw.map((a) => [a.key, Math.min(Math.floor(a.exact), a.available)]));
  let left = total - [...out.values()].reduce((s, n) => s + n, 0);
  // Hand out the remainder by largest fractional part first; then, if an area ran short of
  // questions, keep giving its share to areas that still have some, one at a time.
  const order = [...raw].sort((a, b) => (b.exact % 1) - (a.exact % 1));
  for (const a of order) {
    const n = out.get(a.key)!;
    if (left > 0 && n < a.available && n < Math.ceil(a.exact)) {
      out.set(a.key, n + 1);
      left--;
    }
  }
  while (left > 0) {
    const open = order.filter((a) => out.get(a.key)! < a.available);
    if (open.length === 0) break;
    for (const a of open) {
      if (left === 0) break;
      out.set(a.key, out.get(a.key)! + 1);
      left--;
    }
  }
  return out;
}

function fnv(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

export type MockCandidate = { id: string; topicId: string; topicOrder: number; area: string | null; createdAt: Date };

/**
 * Picks the week's questions: only those created before the week began, split across
 * areas by weight, and within an area taken round-robin across topics in a seeded order.
 */
export function pickMock(
  candidates: MockCandidate[],
  opts: { subject: string; week: string; weights: (area: string | null) => number; size?: number },
): string[] {
  const size = opts.size ?? MOCK_SIZE;
  const cutoff = new Date(`${opts.week}T00:00:00+05:30`);
  const eligible = candidates.filter((c) => c.createdAt < cutoff);
  const seed = (id: string) => fnv(`${opts.subject}:${opts.week}:${id}`);

  const byArea = new Map<string, MockCandidate[]>();
  for (const c of eligible) {
    const key = c.area ?? "Other";
    byArea.set(key, [...(byArea.get(key) ?? []), c]);
  }
  const areaKeys = [...byArea.keys()].sort((a, b) => areaNumber(a) - areaNumber(b) || a.localeCompare(b));
  const counts = allocate(
    areaKeys.map((key) => ({ key, weight: opts.weights(key === "Other" ? null : key), available: byArea.get(key)!.length })),
    Math.min(size, eligible.length),
  );

  const picked: string[] = [];
  for (const key of areaKeys) {
    const want = counts.get(key) ?? 0;
    // Group by topic, shuffle each topic's questions by seed, then deal one per topic in turn.
    const byTopic = new Map<string, MockCandidate[]>();
    for (const c of byArea.get(key)!) byTopic.set(c.topicId, [...(byTopic.get(c.topicId) ?? []), c]);
    const queues = [...byTopic.values()]
      .map((qs) => qs.sort((a, b) => seed(a.id) - seed(b.id)))
      .sort((a, b) => seed(a[0].topicId) - seed(b[0].topicId));
    let taken = 0;
    for (let round = 0; taken < want; round++) {
      let any = false;
      for (const q of queues) {
        if (taken === want) break;
        if (q[round]) {
          picked.push(q[round].id);
          taken++;
          any = true;
        }
      }
      if (!any) break;
    }
  }
  return picked;
}

export type MockResult = { mcqId: string; isCorrect: boolean };
export type MockQuestionMeta = { id: string; topic: { slug: string; title: string }; area: string | null };

/** Groups results by topic and area for the score report, weakest topics first. */
export function scoreReport(meta: MockQuestionMeta[], results: MockResult[]) {
  const correct = new Map(results.map((r) => [r.mcqId, r.isCorrect]));
  const tally = <K extends string>(keyOf: (m: MockQuestionMeta) => K) => {
    const map = new Map<K, { right: number; total: number }>();
    for (const m of meta) {
      const k = keyOf(m);
      const t = map.get(k) ?? { right: 0, total: 0 };
      t.total++;
      if (correct.get(m.id)) t.right++;
      map.set(k, t);
    }
    return map;
  };
  const topics = [...tally((m) => m.topic.slug)].map(([slug, t]) => ({ slug, title: meta.find((m) => m.topic.slug === slug)!.topic.title, ...t }));
  topics.sort((a, b) => a.right / a.total - b.right / b.total || b.total - a.total || a.title.localeCompare(b.title));
  const areas = [...tally((m) => m.area ?? "Other")].map(([area, t]) => ({ area, ...t })).sort((a, b) => areaNumber(a.area) - areaNumber(b.area));
  const right = results.filter((r) => r.isCorrect).length;
  return { right, total: meta.length, areas, topics };
}
