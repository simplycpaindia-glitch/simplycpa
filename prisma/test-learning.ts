/**
 * Tests for topic mastery, blueprint grouping and the Question of the Day.
 *
 *   npm run test:learning
 */
import { latestByTopic, topicProgress } from "../src/lib/mastery";
import { areaNumber, areaWeight, groupByArea } from "../src/lib/blueprint";
import { addDays, istDate, isValidDate, qotdIdFor, streakFrom } from "../src/lib/qotd";
import { mistakeStatus } from "../src/lib/mistakes";
import { allocate, pickMock, scoreReport, weekStart, weightMidpoint } from "../src/lib/mini-mock";
import { buildPlan, planToIcs, topicHours } from "../src/lib/study-planner";

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
eq("area weights from the Blueprints", [areaWeight("far", "Area II: Select Balance Sheet Accounts"), areaWeight("reg", "Area V: Federal Taxation of Entities"), areaWeight("isc", "Area III: SOC Engagements")], ["30–40%", "23–33%", "15–25%"]);
eq("unknown area has no weight", [areaWeight("far", "Area IV: Nothing"), areaWeight("far", null), areaWeight("xyz", "Area I: X")], [undefined, undefined, undefined]);

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

// ── Mistake book (1-3-7 days, India time) ──
const ist = (d: string, h = 10) => new Date(`${d}T${String(h).padStart(2, "0")}:00:00+05:30`);
const W = (d: string) => ({ isCorrect: false, attemptedAt: ist(d) });
const R = (d: string) => ({ isCorrect: true, attemptedAt: ist(d) });
eq("never wrong → not in the book", mistakeStatus([R("2026-10-01")]), { inBook: false });
eq("wrong → due next day", mistakeStatus([W("2026-10-01")]), { inBook: true, cleared: false, stage: 0, dueDate: "2026-10-02" });
eq("right on the due day → next due 3 days later", mistakeStatus([W("2026-10-01"), R("2026-10-02")]), { inBook: true, cleared: false, stage: 1, dueDate: "2026-10-05" });
eq("right too early doesn't count", mistakeStatus([W("2026-10-01"), R("2026-10-01")]), { inBook: true, cleared: false, stage: 0, dueDate: "2026-10-02" });
eq("1, 3, 7 days → cleared", mistakeStatus([W("2026-10-01"), R("2026-10-02"), R("2026-10-05"), R("2026-10-12")]), { inBook: true, cleared: true, stage: 3 });
eq("late review still counts", mistakeStatus([W("2026-10-01"), R("2026-10-09")]), { inBook: true, cleared: false, stage: 1, dueDate: "2026-10-12" });
eq("wrong again starts over", mistakeStatus([W("2026-10-01"), R("2026-10-02"), W("2026-10-05")]), { inBook: true, cleared: false, stage: 0, dueDate: "2026-10-06" });
eq("order of input doesn't matter", mistakeStatus([R("2026-10-02"), W("2026-10-01")]), { inBook: true, cleared: false, stage: 1, dueDate: "2026-10-05" });
eq("11:30 pm and 12:30 am IST are different days", mistakeStatus([{ isCorrect: false, attemptedAt: ist("2026-10-01", 23) }, { isCorrect: true, attemptedAt: new Date("2026-10-01T19:00:00Z") }]), { inBook: true, cleared: false, stage: 1, dueDate: "2026-10-05" });
// ── Mini-mocks ──
eq("Monday is its own week start", weekStart("2026-10-26"), "2026-10-26");
eq("Sunday belongs to the week before", weekStart("2026-11-01"), "2026-10-26");
eq("Wednesday", weekStart("2026-10-28"), "2026-10-26");
eq("weight midpoint", [weightMidpoint("30–40%"), weightMidpoint("5–15%"), weightMidpoint(undefined)], [35, 10, 1]);
const alloc = allocate([{ key: "I", weight: 35, available: 50 }, { key: "II", weight: 35, available: 50 }, { key: "III", weight: 30, available: 50 }], 30);
eq("allocation follows weights and sums to 30", [alloc.get("I"), alloc.get("II"), alloc.get("III")], [11, 10, 9]);
const short = allocate([{ key: "I", weight: 50, available: 3 }, { key: "II", weight: 50, available: 40 }], 30);
eq("an area short of questions gives its share to others", [short.get("I"), short.get("II")], [3, 27]);
const pool = Array.from({ length: 120 }, (_, i) => ({
  id: `q${i}`,
  topicId: `t${i % 12}`,
  topicOrder: i % 12,
  area: i % 12 < 4 ? "Area I: A" : i % 12 < 8 ? "Area II: B" : "Area III: C",
  createdAt: at("2026-01-01T00:00:00Z"),
}));
const mockOpts = { subject: "far", week: "2026-10-26", weights: (a: string | null) => (a?.startsWith("Area III") ? 30 : 35) };
const mock1 = pickMock(pool, mockOpts);
eq("30 questions, no duplicates", [mock1.length, new Set(mock1).size], [30, 30]);
eq("same week, same mock", pickMock(pool, mockOpts), mock1);
eq("a different week gives a different mock", pickMock(pool, { ...mockOpts, week: "2026-11-02" }).join() !== mock1.join(), true);
const topicOf = (id: string) => pool.find((p) => p.id === id)!.topicId;
eq("every topic is covered", new Set(mock1.map(topicOf)).size, 12);
const newer = [...pool, { id: "late", topicId: "t0", topicOrder: 0, area: "Area I: A", createdAt: at("2026-10-27T00:00:00Z") }];
eq("questions added mid-week don't change the mock", pickMock(newer, mockOpts), mock1);
const rep = scoreReport(
  [
    { id: "a", topic: { slug: "x", title: "X" }, area: "Area I: A" },
    { id: "b", topic: { slug: "x", title: "X" }, area: "Area I: A" },
    { id: "c", topic: { slug: "y", title: "Y" }, area: "Area II: B" },
  ],
  [{ mcqId: "a", isCorrect: true }, { mcqId: "b", isCorrect: false }, { mcqId: "c", isCorrect: false }],
);
eq("score report: totals, weakest topic first, areas in order", [rep.right, rep.total, rep.topics.map((t) => t.slug), rep.areas.map((a) => `${a.right}/${a.total}`)], [1, 3, ["y", "x"], ["1/2", "0/1"]]);

// ── Study planner ──
const ptopics = [
  { slug: "a", title: "A", area: "Area II: B", order: 1, minutes: 60, difficulty: "MEDIUM" as const },
  { slug: "b", title: "B", area: "Area I: A", order: 2, minutes: 60, difficulty: "HARD" as const },
  { slug: "c", title: "C", area: "Area I: A", order: 1, minutes: 30, difficulty: "EASY" as const },
];
const th = topicHours(ptopics, 100);
eq("topic hours follow reading time × difficulty and sum to the budget", [Math.round([...th.values()].reduce((s, n) => s + n, 0)), th.get("b")! > th.get("a")!, th.get("a")! > th.get("c")!], [100, true, true]);
const roomy = buildPlan({ topics: ptopics, sectionHours: 100, start: "2026-11-02", exam: "2027-01-11", hoursPerWeek: 10 });
eq("10 weeks: 8 to learn, 2 to review", [roomy.weeks.length, roomy.weeks.filter((w) => w.phase === "review").length], [10, 2]);
eq("topics in blueprint order (Area I first)", roomy.weeks.flatMap((w) => w.items).filter((x) => x.kind === "study").map((x) => (x as { slug: string }).slug).filter((s, i, arr) => arr.indexOf(s) === i), ["c", "b", "a"]);
eq("no week holds more than the weekly hours", roomy.weeks.every((w) => w.items.reduce((s, x) => s + (x.kind === "study" ? x.hours : 0), 0) <= 10.01), true);
eq("all 80 learning hours placed when there's room", roomy.weeks.flatMap((w) => w.items).reduce((s, x) => s + (x.kind === "study" ? x.hours : 0), 0), 80);
eq("enough time means full coverage", [roomy.coverage, roomy.availableHours, roomy.neededHours], [1, 100, 100]);
eq("mini-mocks every 3 learning weeks and in review weeks", roomy.weeks.map((w) => (w.items.some((x) => x.kind === "mock") ? 1 : 0)).join(""), "0010010011");
const tight = buildPlan({ topics: ptopics, sectionHours: 100, start: "2026-11-02", exam: "2026-11-30", hoursPerWeek: 10 });
eq("4 weeks at 10 hours: plan is scaled down and says when it would fit", [tight.weeks.length, tight.coverage < 1, tight.earliestComfortableExam], [4, true, "2027-01-11"]);
const skipping = buildPlan({ topics: ptopics, sectionHours: 100, start: "2026-11-02", exam: "2027-01-11", hoursPerWeek: 10, skip: new Set(["b"]) });
eq("skipping a mastered topic leaves it out and lowers the hours needed", [skipping.weeks.flatMap((w) => w.items).some((x) => x.kind === "study" && x.slug === "b"), skipping.neededHours < 100], [false, true]);
eq("exam date before the start gives an empty plan", buildPlan({ topics: ptopics, sectionHours: 100, start: "2026-11-02", exam: "2026-10-01", hoursPerWeek: 10 }).weeks.length, 0);
const ics = planToIcs(roomy, "FAR");
eq("calendar file: one event per week, all-day dates", [(ics.match(/BEGIN:VEVENT/g) ?? []).length, ics.includes("DTSTART;VALUE=DATE:20261102"), ics.includes("DTEND;VALUE=DATE:20261109")], [10, true, true]);

console.log(failed ? `\n${failed} failed` : "\nAll passed");
process.exit(failed ? 1 : 0);
