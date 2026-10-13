/** Pure streak/hours maths for study stats. No server imports, so tests can run it directly. */

const WEEK_MS = 7 * 24 * 3_600_000;
const IST_OFFSET_MS = 5.5 * 3_600_000;
// 1970-01-05 was a Monday, so week indexes start on Monday (IST).
const FIRST_MONDAY_UTC = Date.UTC(1970, 0, 5);

/** Index of the Monday-to-Sunday week (India time) that contains `date`. */
export function istWeekIndex(date: Date): number {
  return Math.floor((date.getTime() + IST_OFFSET_MS - FIRST_MONDAY_UTC) / WEEK_MS);
}

export type StudyStats = {
  /** Consecutive weeks with a published post, ending this week or last week. */
  currentStreak: number;
  longestStreak: number;
  weeksActive: number;
  totalHours: number;
  hoursThisWeek: number;
};

export function computeStats(posts: { createdAt: Date; studyHours: number | null }[], now = new Date()): StudyStats {
  const weeks = new Set(posts.map((p) => istWeekIndex(p.createdAt)));
  const thisWeek = istWeekIndex(now);

  // A streak stays alive until the current week ends without a post.
  let start = weeks.has(thisWeek) ? thisWeek : thisWeek - 1;
  let currentStreak = 0;
  while (weeks.has(start)) {
    currentStreak++;
    start--;
  }

  let longestStreak = 0;
  for (const w of weeks) {
    if (weeks.has(w - 1)) continue; // only count from the start of each run
    let len = 0;
    while (weeks.has(w + len)) len++;
    longestStreak = Math.max(longestStreak, len);
  }

  const round = (n: number) => Math.round(n * 10) / 10;
  return {
    currentStreak,
    longestStreak,
    weeksActive: weeks.size,
    totalHours: round(posts.reduce((s, p) => s + (p.studyHours ?? 0), 0)),
    hoursThisWeek: round(posts.filter((p) => istWeekIndex(p.createdAt) === thisWeek).reduce((s, p) => s + (p.studyHours ?? 0), 0)),
  };
}
