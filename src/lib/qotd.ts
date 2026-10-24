/**
 * Question of the Day — pure logic (no database), so it can be tested.
 *
 * Days run on India time. Each date's question is picked by a fixed hash of the date from
 * the MCQs that already existed at the start of that day, so adding new MCQs never changes
 * a past day's question (the archive stays stable).
 */
const IST_OFFSET_MS = 5.5 * 3_600_000;
const DAY_MS = 86_400_000;

/** "YYYY-MM-DD" for the India-time calendar day containing `d`. */
export function istDate(d: Date): string {
  return new Date(d.getTime() + IST_OFFSET_MS).toISOString().slice(0, 10);
}

/** The instant an India-time day starts. */
export function istDayStart(date: string): Date {
  return new Date(`${date}T00:00:00+05:30`);
}

export function addDays(date: string, days: number): string {
  return istDate(new Date(istDayStart(date).getTime() + days * DAY_MS + 1));
}

export const isValidDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && istDate(istDayStart(s)) === s;

/** FNV-1a 32-bit hash: stable across runtimes. */
function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

export type Candidate = { id: string; createdAt: Date };

/**
 * Today's question id. `candidates` must be every published MCQ, sorted by createdAt then id.
 * Only those created before the day began are eligible.
 */
export function qotdIdFor(date: string, candidates: Candidate[]): string | null {
  const start = istDayStart(date).getTime();
  let eligible = 0;
  while (eligible < candidates.length && candidates[eligible].createdAt.getTime() < start) eligible++;
  if (eligible === 0) return null;
  return candidates[hash(`qotd:${date}`) % eligible].id;
}

/**
 * Streak of consecutive days answered, ending today — or yesterday, since a streak stays
 * alive until today ends. `answered` holds the dates on which the reader answered that
 * day's question.
 */
export function streakFrom(answered: Set<string>, today: string): { current: number; longest: number; answeredToday: boolean } {
  const answeredToday = answered.has(today);
  let day = answeredToday ? today : addDays(today, -1);
  let current = 0;
  while (answered.has(day)) {
    current++;
    day = addDays(day, -1);
  }
  let longest = 0;
  for (const d of answered) {
    if (answered.has(addDays(d, -1))) continue; // count from the start of each run
    let len = 0;
    let x = d;
    while (answered.has(x)) {
      len++;
      x = addDays(x, 1);
    }
    longest = Math.max(longest, len);
  }
  return { current, longest, answeredToday };
}
