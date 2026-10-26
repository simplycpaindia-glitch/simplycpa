"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, Download, Printer } from "lucide-react";
import { cn, formatIsoDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { addDays, istDate } from "@/lib/qotd";
import { buildPlan, planToIcs, type PlannerTopic } from "@/lib/study-planner";

export type PlannerSubject = {
  slug: string;
  shortName: string;
  name: string;
  hours: number;
  topics: PlannerTopic[];
  mastered: string[];
};

type Form = { subject: string; start: string; exam: string; hours: number; skipMastered: boolean };
const STORAGE_KEY = "study-planner";

const shortDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { timeZone: "UTC", day: "numeric", month: "short" });

export function StudyPlanner({ subjects, isLoggedIn }: { subjects: PlannerSubject[]; isLoggedIn: boolean }) {
  const today = istDate(new Date());
  const [form, setForm] = useState<Form>({ subject: subjects[0]?.slug ?? "far", start: today, exam: addDays(today, 12 * 7), hours: 12, skipMastered: false });

  // Remember the last plan's settings in this browser.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") as Partial<Form> | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring browser-only settings once on mount
      if (saved) setForm((f) => ({ ...f, ...saved, start: saved.start && saved.start >= today ? saved.start : today }));
    } catch {}
  }, [today]);
  const update = (patch: Partial<Form>) =>
    setForm((f) => {
      const next = { ...f, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });

  const subject = subjects.find((s) => s.slug === form.subject) ?? subjects[0];
  const plan = useMemo(
    () =>
      subject &&
      buildPlan({
        topics: subject.topics,
        sectionHours: subject.hours,
        start: form.start,
        exam: form.exam,
        hoursPerWeek: form.hours,
        skip: form.skipMastered ? new Set(subject.mastered) : undefined,
      }),
    [subject, form],
  );

  if (!subject || !plan) return null;
  const tooSoon = plan.weeks.length === 0;
  const short = plan.coverage < 1;

  const download = () => {
    const blob = new Blob([planToIcs(plan, subject.shortName)], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), { href: url, download: `simplycpa-${subject.slug}-study-plan.ics` });
    a.click();
    URL.revokeObjectURL(url);
  };

  const field = "mt-1 w-full rounded-md border border-ink-950/20 bg-paper-50 px-3 py-2 text-sm";

  return (
    <div>
      <form className="grid gap-4 rounded-xl border border-ink-950/10 bg-paper-100/60 p-5 sm:grid-cols-2 lg:grid-cols-4 print:hidden" onSubmit={(e) => e.preventDefault()}>
        <label className="text-sm font-medium text-ink-950">
          Section
          <select className={field} value={form.subject} onChange={(e) => update({ subject: e.target.value })}>
            {subjects.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortName}: {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-ink-950">
          Start date
          <input type="date" className={field} value={form.start} min={today} onChange={(e) => e.target.value && update({ start: e.target.value })} />
        </label>
        <label className="text-sm font-medium text-ink-950">
          Exam date
          <input type="date" className={field} value={form.exam} min={addDays(form.start, 7)} onChange={(e) => e.target.value && update({ exam: e.target.value })} />
        </label>
        <label className="text-sm font-medium text-ink-950">
          Hours a week
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={60}
            className={field}
            value={form.hours}
            onChange={(e) => update({ hours: Math.min(60, Math.max(1, Number(e.target.value) || 1)) })}
          />
        </label>
        {isLoggedIn && subject.mastered.length > 0 && (
          <label className="flex items-center gap-2 text-sm text-ink-800 sm:col-span-2 lg:col-span-4">
            <input type="checkbox" checked={form.skipMastered} onChange={(e) => update({ skipMastered: e.target.checked })} />
            Leave out the {subject.mastered.length} {subject.shortName} topic{subject.mastered.length === 1 ? "" : "s"} you&apos;ve already mastered
          </label>
        )}
      </form>

      {tooSoon ? (
        <p className="mt-6 rounded-lg border border-signal-red/30 bg-signal-red/5 p-4 text-sm text-ink-800">
          Your exam date needs to be at least a week after your start date.
        </p>
      ) : (
        <>
          <div aria-live="polite" className={cn("mt-6 rounded-xl border p-5", short ? "border-gold-500/50 bg-gold-500/5" : "border-signal-green/30 bg-signal-green/5")}>
            <p className="font-display text-xl font-medium text-ink-950">
              {plan.weeks.length} weeks · {plan.availableHours} hours available · about {plan.neededHours} recommended
            </p>
            {short ? (
              <p className="mt-2 text-sm leading-relaxed text-ink-800">
                That&apos;s tight: the plan below fits about {Math.round(plan.coverage * 100)}% of the recommended learning time into your
                weeks. To cover everything at {form.hours} hours a week, an exam date around{" "}
                <button type="button" className="font-medium underline underline-offset-2" onClick={() => update({ exam: plan.earliestComfortableExam })}>
                  {formatIsoDate(plan.earliestComfortableExam)}
                </button>{" "}
                would fit, or add more hours a week.
              </p>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-ink-800">
                You have enough time to cover every topic, with the last {plan.weeks.filter((w) => w.phase === "review").length} week
                {plan.weeks.filter((w) => w.phase === "review").length === 1 ? "" : "s"} kept for review and mini-mocks.
              </p>
            )}
            <p className="mt-2 text-xs text-ink-400">
              Recommended hours are SimplyCPA&apos;s estimate for {subject.shortName} ({subject.hours} hours in total), split across topics by length and
              difficulty. Adjust to your own pace.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 print:hidden">
              <Button size="sm" variant="outline" onClick={download}>
                <Download className="size-4" /> Add to calendar (.ics)
              </Button>
              <Button size="sm" variant="outline" onClick={() => window.print()}>
                <Printer className="size-4" /> Print
              </Button>
            </div>
          </div>

          <ol className="mt-6 flex flex-col gap-3">
            {plan.weeks.map((wk) => (
              <li key={wk.index} className="break-inside-avoid rounded-lg border border-ink-950/10 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-ink-950">
                    <CalendarDays className="mr-1.5 inline size-4 text-ink-400" aria-hidden />
                    Week {wk.index}: {shortDate(wk.start)} – {shortDate(wk.end)}
                  </p>
                  {wk.phase === "review" && <span className="text-xs font-semibold uppercase tracking-wide text-gold-700">Review</span>}
                </div>
                <ul className="mt-2 flex flex-col gap-1 text-sm">
                  {wk.items.map((it, i) =>
                    it.kind === "study" ? (
                      <li key={i} className="flex justify-between gap-3">
                        <Link href={`/cpa/${subject.slug}/${it.slug}`} className="text-ink-800 underline-offset-2 hover:underline">
                          {it.title}
                          {it.continued && <span className="text-ink-400"> (continued)</span>}
                          {it.continues && <span className="text-ink-400"> (part)</span>}
                        </Link>
                        <span className="shrink-0 tabular-nums text-ink-400">{it.hours} h</span>
                      </li>
                    ) : it.kind === "mock" ? (
                      <li key={i}>
                        <Link href={`/mini-mock/${subject.slug}`} className="font-medium text-ink-950 underline-offset-2 hover:underline">
                          Take this week&apos;s {subject.shortName} mini-mock
                        </Link>
                      </li>
                    ) : (
                      <li key={i} className="text-ink-800">
                        Revise with the <Link href={`/quick-sheets/${subject.slug}`} className="underline underline-offset-2">quick sheets</Link> and your{" "}
                        <Link href="/dashboard/mistakes" className="underline underline-offset-2">mistake book</Link>; redo the topics your mini-mocks
                        show as weakest.
                      </li>
                    ),
                  )}
                  {wk.items.length === 0 && <li className="text-ink-400">Catch-up week: finish anything that slipped.</li>}
                </ul>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
