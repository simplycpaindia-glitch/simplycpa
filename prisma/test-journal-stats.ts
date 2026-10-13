/**
 * Tests for study streaks and hours (weeks are Monday–Sunday, India time).
 *
 *   npm run test:stats
 */
import { computeStats, istWeekIndex } from "../src/lib/journal/streaks";

let failed = 0;
function eq(name: string, actual: unknown, expected: unknown) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${ok ? "" : `\n      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`}`);
}

// IST timestamps written with an explicit offset.
const ist = (s: string) => new Date(`${s}+05:30`);
const post = (s: string, h: number | null = null) => ({ createdAt: ist(s), studyHours: h });

// Week boundaries: 2026-10-12 is a Monday.
eq("Sunday 23:59 IST and Monday 00:00 IST are different weeks",
  istWeekIndex(ist("2026-10-12T00:00:00")) - istWeekIndex(ist("2026-10-11T23:59:59")), 1);
eq("Monday 00:00 IST and Sunday 23:59 IST same week",
  istWeekIndex(ist("2026-10-18T23:59:59")), istWeekIndex(ist("2026-10-12T00:00:00")));
eq("Monday 01:00 IST is still Sunday in UTC but counts as the new week",
  istWeekIndex(ist("2026-10-12T01:00:00")), istWeekIndex(ist("2026-10-14T12:00:00")));

const now = ist("2026-10-14T12:00:00"); // Wednesday

eq("no posts", computeStats([], now), { currentStreak: 0, longestStreak: 0, weeksActive: 0, totalHours: 0, hoursThisWeek: 0 });

eq("post this week only", computeStats([post("2026-10-13T09:00:00", 2)], now),
  { currentStreak: 1, longestStreak: 1, weeksActive: 1, totalHours: 2, hoursThisWeek: 2 });

eq("streak survives when last post was last week",
  computeStats([post("2026-10-05T10:00:00"), post("2026-09-28T10:00:00")], now).currentStreak, 2);

eq("streak broken by a missed week",
  computeStats([post("2026-09-28T10:00:00")], now).currentStreak, 0);

eq("several posts in one week count once",
  computeStats([post("2026-10-12T08:00:00", 1), post("2026-10-13T08:00:00", 1.5), post("2026-10-14T08:00:00", 0.5)], now),
  { currentStreak: 1, longestStreak: 1, weeksActive: 1, totalHours: 3, hoursThisWeek: 3 });

const history = [
  // run of 3 weeks in August/September
  post("2026-08-24T10:00:00", 5), post("2026-08-31T10:00:00", 5), post("2026-09-07T10:00:00", 5),
  // gap, then current run of 2
  post("2026-10-06T10:00:00", 4), post("2026-10-13T10:00:00", 2.5),
];
eq("longest vs current streak", computeStats(history, now),
  { currentStreak: 2, longestStreak: 3, weeksActive: 5, totalHours: 21.5, hoursThisWeek: 2.5 });

eq("posts without hours add nothing", computeStats([post("2026-10-13T10:00:00"), post("2026-10-12T10:00:00", 1)], now).totalHours, 1);

eq("float rounding", computeStats([post("2026-10-13T10:00:00", 0.1), post("2026-10-13T11:00:00", 0.2)], now).totalHours, 0.3);

console.log(failed ? `\n${failed} failed` : "\nAll passed");
process.exit(failed ? 1 : 0);
