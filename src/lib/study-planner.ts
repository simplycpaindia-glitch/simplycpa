/**
 * Study planner: turns a section, an exam date and weekly hours into a week-by-week
 * topic plan. Pure functions only, so the plan can be built in the browser and tested.
 */
import { addDays } from "@/lib/qotd";
import { areaNumber } from "@/lib/blueprint";

export type PlannerTopic = {
  slug: string;
  title: string;
  area: string | null;
  order: number;
  minutes: number;
  difficulty: "EASY" | "MEDIUM" | "HARD";
};

export type PlanItem =
  | { kind: "study"; slug: string; title: string; hours: number; continued: boolean; continues: boolean }
  | { kind: "mock" }
  | { kind: "review"; hours: number };

export type PlanWeek = { index: number; start: string; end: string; phase: "learn" | "review"; items: PlanItem[] };

export type Plan = {
  weeks: PlanWeek[];
  /** SimplyCPA's estimate for the section (or the topics left, if skipping mastered ones). */
  neededHours: number;
  availableHours: number;
  /** Share of the recommended learning time the plan fits in (1 = all of it). */
  coverage: number;
  /** Earliest exam date that would fit the full recommended hours at this weekly pace. */
  earliestComfortableExam: string;
};

/** Share of a section's hours for learning topics; the rest is review and mocks. */
export const LEARN_SHARE = 0.8;
const DIFFICULTY_FACTOR = { EASY: 0.8, MEDIUM: 1, HARD: 1.3 } as const;
const MOCK_EVERY_WEEKS = 3;

const daysBetween = (a: string, b: string) => Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86_400_000);
const roundHalf = (n: number) => Math.round(n * 2) / 2;

/** Hours of learning time per topic, proportional to reading time × difficulty, summing to `budget`. */
export function topicHours(topics: PlannerTopic[], budget: number): Map<string, number> {
  const weight = (t: PlannerTopic) => t.minutes * DIFFICULTY_FACTOR[t.difficulty];
  const total = topics.reduce((s, t) => s + weight(t), 0) || 1;
  return new Map(topics.map((t) => [t.slug, (budget * weight(t)) / total]));
}

export function buildPlan(input: {
  topics: PlannerTopic[];
  sectionHours: number;
  start: string;
  exam: string;
  hoursPerWeek: number;
  /** Topics to leave out (for example, already mastered). */
  skip?: Set<string>;
}): Plan {
  const all = [...input.topics].sort((a, b) => areaNumber(a.area) - areaNumber(b.area) || a.order - b.order);
  const allHours = topicHours(all, input.sectionHours * LEARN_SHARE);
  const topics = all.filter((t) => !input.skip?.has(t.slug));
  const learnNeeded = topics.reduce((s, t) => s + allHours.get(t.slug)!, 0);
  const reviewNeeded = input.sectionHours * (1 - LEARN_SHARE);
  const neededHours = Math.round(learnNeeded + reviewNeeded);

  const weeksCount = Math.max(0, Math.floor(daysBetween(input.start, input.exam) / 7));
  const hpw = Math.max(0, input.hoursPerWeek);
  const reviewWeeks = weeksCount >= 6 ? Math.max(1, Math.round(weeksCount * 0.15)) : weeksCount >= 3 ? 1 : 0;
  const learnWeeks = weeksCount - reviewWeeks;
  const learnCapacity = learnWeeks * hpw;
  const scale = learnNeeded > 0 ? Math.min(1, learnCapacity / learnNeeded) : 1;

  const weeks: PlanWeek[] = Array.from({ length: weeksCount }, (_, i) => ({
    index: i + 1,
    start: addDays(input.start, i * 7),
    end: addDays(input.start, i * 7 + 6),
    phase: i < learnWeeks ? "learn" : "review",
    items: [],
  }));

  // Fill learning weeks in topic order, splitting a topic across weeks when it doesn't fit.
  let w = 0;
  let room = hpw;
  for (const t of topics) {
    let left = roundHalf(allHours.get(t.slug)! * scale);
    let first = true;
    while (left > 0.01 && w < learnWeeks) {
      if (room < 0.5) {
        w++;
        room = hpw;
        continue;
      }
      const take = Math.min(left, roundHalf(room) || room);
      left = roundHalf(left - take);
      room -= take;
      weeks[w].items.push({ kind: "study", slug: t.slug, title: t.title, hours: take, continued: !first, continues: left > 0.01 });
      first = false;
    }
  }

  // A mini-mock every few learning weeks, and in every review week.
  weeks.forEach((wk, i) => {
    if (wk.phase === "learn" && (i + 1) % MOCK_EVERY_WEEKS === 0 && i + 1 < learnWeeks) wk.items.push({ kind: "mock" });
    if (wk.phase === "review") wk.items.push({ kind: "review", hours: hpw }, { kind: "mock" });
  });

  const weeksNeeded = hpw > 0 ? Math.ceil(neededHours / hpw) : 0;
  return {
    weeks,
    neededHours,
    availableHours: weeksCount * hpw,
    coverage: Math.round(scale * 100) / 100,
    earliestComfortableExam: addDays(input.start, weeksNeeded * 7),
  };
}

/** An iCalendar file with one all-day, week-long event per week of the plan. */
export function planToIcs(plan: Plan, sectionName: string): string {
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
  const d = (iso: string) => iso.replace(/-/g, "");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
  const events = plan.weeks.map((wk) => {
    const study = wk.items.filter((x) => x.kind === "study") as Extract<PlanItem, { kind: "study" }>[];
    const summary =
      wk.phase === "review"
        ? `${sectionName}: review week`
        : `${sectionName}: ${study.map((s) => s.title).join(", ") || "catch-up week"}`;
    const lines = [
      ...study.map((s) => `${s.title}: ${s.hours} h${s.continues ? " (continues)" : ""}`),
      ...(wk.items.some((x) => x.kind === "mock") ? ["Take this week's mini-mock"] : []),
      ...(wk.phase === "review" ? ["Revise with quick sheets and your mistake book"] : []),
    ];
    return [
      "BEGIN:VEVENT",
      `UID:simplycpa-plan-${d(wk.start)}-${sectionName.toLowerCase()}@simplycpa.in`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${d(wk.start)}`,
      `DTEND;VALUE=DATE:${d(addDays(wk.end, 1))}`,
      `SUMMARY:${esc(summary)}`,
      `DESCRIPTION:${esc(lines.join("\n"))}`,
      "END:VEVENT",
    ].join("\r\n");
  });
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SimplyCPA//Study planner//EN", "CALSCALE:GREGORIAN", ...events, "END:VCALENDAR", ""].join("\r\n");
}
