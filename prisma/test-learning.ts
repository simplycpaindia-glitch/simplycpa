/**
 * Tests for topic mastery, blueprint grouping and the Question of the Day.
 *
 *   npm run test:learning
 */
import { latestByTopic, topicProgress } from "../src/lib/mastery";
import { areaNumber, groupByArea } from "../src/lib/blueprint";
import { addDays, istDate, isValidDate, qotdIdFor, streakFrom } from "../src/lib/qotd";

let failed = 0;
function eq(name: string, actual: unknown, expected: unknown) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${ok ? "" : `\n      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`}`);
}
const at = (s: string) => new Date(s);

// ── Mastery ──
const attempts = [
  { mcqId: "q1", topicId: "t", isCorrect: false, attemptedAt: at("2026-10-01T10:00:00Z") },
  { mcqId: "q1", topicId: "t", isCorrect: true, attemptedAt: at("2026-10-02T10:00:00Z") }, // latest counts
  { mcqId: "q2", topicId: "t", isCorrect: true, attemptedAt: at("2026-10-02T10:00:00Z") },
  { mcqId: "q3", topicId: "t", isCorrect: true, attemptedAt: at("2026-10-03T10:00:00Z") },
  { mcqId: "q3", topicId: "t", isCorrect: false, attemptedAt: at("2026-10-04T10:00:00Z") }, // got worse
];
eq("latest attempt per MCQ wins", latestByTopic(attempts).get("t"), { correct: 2, attempted: 3 });
eq("not started", topicProgress({ studied: false, revised: false, mcqTotal: 10 }).state, "not-started");
eq("attempting MCQs counts as studied", topicProgress({ studied: false, revised: false, mcqTotal: 10, latest: { correct: 1, attempted: 1 } }).state, "studied");
eq("revised", topicProgress({ studied: true, revised: true, mcqTotal: 10, latest: { correct: 5, attempted: 6 } }).state, "revised");
eq("8 of 10 right = mastered", topicProgress({ studied: false, revised: false, mcqTotal: 10, latest: { correct: 8, attempted: 8 } }).state, "mastered");
eq("7 of 10 right = not yet", topicProgress({ studied: true, revised: true, mcqTotal: 10, latest: { correct: 7, attempted: 10 } }).mastered, false);
eq("no MCQs can't be mastered", topicProgress({ studied: true, revised: true, mcqTotal: 0 }).mastered, false);

// ── Blueprint grouping ──
eq("area numbers", ["Area I: X", "Area IV: Y", "Area II: Z", null].map(areaNumber), [1, 4, 2, 99]);
const grouped = groupByArea([
  { blueprintArea: "Area II: B", order: 2 },
  { blueprintArea: "Area I: A", order: 3 },
  { blueprintArea: "Area II: B", order: 1 },
  { blueprintArea: "Area IV: D", order: 0 },
  { blueprintArea: "Area III: C", order: 5 },
]);
eq("areas in Blueprint order (IV after III, not alphabetical)", grouped.map((g) => g.area), ["Area I: A", "Area II: B", "Area III: C", "Area IV: D"]);
eq("topics ordered within an area", grouped[1].topics.map((t) => t.order), [1, 2]);

// ── Dates (India time) ──
eq("00:30 IST is still that day", istDate(at("2026-10-24T19:00:00Z")), "2026-10-25");
eq("23:59 IST", istDate(at("2026-10-24T18:29:00Z")), "2026-10-24");
eq("add days across a month", addDays("2026-10-31", 1), "2026-11-01");
eq("subtract days across a year", addDays("2027-01-01", -1), "2026-12-31");
eq("valid date", [isValidDate("2026-10-24"), isValidDate("2026-02-30"), isValidDate("24-10-2026")], [true, false, false]);

// ── Question of the Day ──
const cands = Array.from({ length: 50 }, (_, i) => ({ id: `m${String(i).padStart(2, "0")}`, createdAt: at("2026-01-01T00:00:00Z") }));
const day = "2026-10-24";
const id1 = qotdIdFor(day, cands);
eq("same date, same question", qotdIdFor(day, cands), id1);
const later = [...cands, { id: "new1", createdAt: at("2026-10-25T03:00:00Z") }, { id: "new2", createdAt: at("2026-10-26T03:00:00Z") }];
eq("MCQs added later don't change a past day", qotdIdFor(day, later), id1);
eq("nothing published yet → none", qotdIdFor("2025-12-31", cands), null);
const picks = new Set(Array.from({ length: 30 }, (_, i) => qotdIdFor(addDays(day, i), cands)));
eq("questions vary from day to day (≥ 15 different in 30 days)", picks.size >= 15, true);

// ── Streaks ──
const S = (...d: string[]) => new Set(d);
eq("answered today and the 2 days before", streakFrom(S("2026-10-22", "2026-10-23", "2026-10-24"), "2026-10-24"), { current: 3, longest: 3, answeredToday: true });
eq("streak alive until today ends", streakFrom(S("2026-10-22", "2026-10-23"), "2026-10-24").current, 2);
eq("a missed day breaks it", streakFrom(S("2026-10-21", "2026-10-22"), "2026-10-24").current, 0);
eq("longest run remembered", streakFrom(S("2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04", "2026-10-24"), "2026-10-24"), { current: 1, longest: 4, answeredToday: true });

console.log(failed ? `\n${failed} failed` : "\nAll passed");
process.exit(failed ? 1 : 0);
