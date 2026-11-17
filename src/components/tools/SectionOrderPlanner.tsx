"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Core = "far" | "aud" | "reg";
type Disc = "bar" | "isc" | "tcp";
type Section = Core | Disc;

type Option<T> = { label: string; value: T };
type Question<T> = { id: string; text: string; options: Option<T>[] };

const BACKGROUND: Question<"accounting" | "audit" | "tax" | "student"> = {
  id: "background",
  text: "Which is closest to your background today?",
  options: [
    { label: "CA, CMA or a strong accounting degree", value: "accounting" },
    { label: "Working in audit or assurance", value: "audit" },
    { label: "Working in US or international tax", value: "tax" },
    { label: "Student or recent graduate", value: "student" },
  ],
};

const GOAL: Question<"foundation" | "momentum" | "hardest"> = {
  id: "goal",
  text: "What do you want most from your first section?",
  options: [
    { label: "A strong foundation for the sections that follow", value: "foundation" },
    { label: "An early pass, for confidence and momentum", value: "momentum" },
    { label: "Get the hardest one done while I'm fresh", value: "hardest" },
  ],
};

const DISCIPLINE: Question<Disc | "undecided"> = {
  id: "discipline",
  text: "Which Discipline are you leaning towards?",
  options: [
    { label: "BAR: Business Analysis and Reporting", value: "bar" },
    { label: "ISC: Information Systems and Controls", value: "isc" },
    { label: "TCP: Tax Compliance and Planning", value: "tcp" },
    { label: "Not decided yet", value: "undecided" },
  ],
};

const SEASON: Question<"none" | "jan-apr" | "year-end"> = {
  id: "season",
  text: "Is there a busy season at work when you can't study much?",
  options: [
    { label: "No, my workload is steady", value: "none" },
    { label: "Yes, January to April (US tax season)", value: "jan-apr" },
    { label: "Yes, around year-end audits and closings", value: "year-end" },
  ],
};

const QUESTIONS = [BACKGROUND, GOAL, DISCIPLINE, SEASON] as Question<string>[];

const NAME: Record<Section, string> = {
  far: "FAR — Financial Accounting and Reporting",
  aud: "AUD — Auditing and Attestation",
  reg: "REG — Taxation and Regulation",
  bar: "BAR — Business Analysis and Reporting",
  isc: "ISC — Information Systems and Controls",
  tcp: "TCP — Tax Compliance and Planning",
};

const PAIR: Record<Disc, Core> = { bar: "far", isc: "aud", tcp: "reg" };

type Step = { section: Section | "discipline"; why: string };

function plan(a: Record<string, string>): { steps: Step[]; tips: string[] } {
  const bg = a.background;
  const goal = a.goal;
  const disc = a.discipline as Disc | "undecided";

  // First section.
  let first: Core;
  let firstWhy: string;
  if (goal === "hardest") {
    first = "far";
    firstWhy = "FAR covers the most material and has the lowest pass rate of the Core sections. Taking it first, while your energy is highest, gets the biggest hurdle out of the way.";
  } else if (goal === "momentum") {
    first = bg === "audit" ? "aud" : bg === "accounting" ? "far" : "reg";
    firstWhy =
      first === "reg"
        ? "REG has the highest pass rate of the Core sections, and an early pass builds the habits and confidence you need for the rest."
        : first === "aud"
          ? "Your audit experience makes AUD the section where you start with the biggest head start, which is the surest route to an early pass."
          : "Your accounting background gives you a head start in FAR, so it is both a foundation and your most likely early pass.";
  } else {
    first = bg === "audit" ? "aud" : bg === "tax" ? "reg" : "far";
    firstWhy =
      first === "far"
        ? "FAR's accounting knowledge underpins AUD (you audit the numbers FAR teaches you to prepare) and BAR, so it is the natural foundation."
        : first === "aud"
          ? "Starting where your daily work is strongest turns experience into a pass quickly, and AUD's risk-and-evidence thinking helps across sections."
          : "Your tax work gives you a head start in REG, and REG's entity tax topics also prepare you for TCP.";
  }

  // Remaining Core sections in the default order FAR → AUD → REG.
  const core: Core[] = [first, ...(["far", "aud", "reg"] as Core[]).filter((s) => s !== first)];
  const coreWhy: Record<Core, string> = {
    far: "FAR knowledge supports AUD and BAR, so it is better earlier than later.",
    aud: "AUD builds on the financial statements you studied in FAR.",
    reg: "REG is largely self-contained, so it slots in well wherever your timetable allows.",
  };

  const steps: Step[] = [{ section: first, why: firstWhy }];
  const pushDiscipline = (after: Core) => {
    if (disc !== "undecided" && PAIR[disc] === after) {
      steps.push({
        section: disc,
        why: `${disc.toUpperCase()} builds directly on ${after.toUpperCase()}. Taking it next, while that material is fresh, saves the most relearning.`,
      });
    }
  };
  pushDiscipline(first);
  for (const s of core.slice(1)) {
    steps.push({ section: s, why: coreWhy[s] });
    pushDiscipline(s);
  }
  if (disc === "undecided") {
    steps.push({
      section: "discipline",
      why: "Decide once you have studied a Core section or two; the one you enjoy most usually points to the Discipline that builds on it.",
    });
  }

  const tips: string[] = [
    "Disciplines are tested only in set windows each quarter, so book your Discipline around those dates rather than fitting the window to your plan.",
    "Your credit window starts when you pass your first section. Keep the gaps between sections short so that early passes don't expire.",
  ];
  if (a.season === "jan-apr") tips.unshift("Avoid sitting REG or TCP during January to April: those are the months your tax work will crowd out study. Use them for a lighter review instead.");
  if (a.season === "year-end") tips.unshift("Plan your heaviest section (usually FAR) away from your year-end busy months, and book exams for just before or after them.");
  return { steps, tips };
}

export function SectionOrderPlanner() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = QUESTIONS.every((q) => answers[q.id]);
  const result = done ? plan(answers) : null;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
      <ol className="flex flex-col gap-8">
        {QUESTIONS.map((q, qi) => (
          <li key={q.id}>
            <fieldset>
              <legend className="font-medium text-ink-950">
                <span className="mr-2 text-ink-400">{qi + 1}.</span>
                {q.text}
              </legend>
              <div className="mt-3 flex flex-col gap-2">
                {q.options.map((o) => {
                  const selected = answers[q.id] === o.value;
                  return (
                    <label
                      key={o.value}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm",
                        selected ? "border-ink-950 bg-paper-100 text-ink-950" : "border-ink-950/15 text-ink-800 hover:border-ink-950/40",
                      )}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        className="mt-0.5 accent-[var(--color-gold-600)]"
                        checked={selected}
                        onChange={() => setAnswers((a) => ({ ...a, [q.id]: o.value }))}
                      />
                      {o.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="lg:sticky lg:top-24 lg:self-start" aria-live="polite">
        <div className="rounded-xl border border-gold-400/60 bg-gold-500/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Your suggested order</p>
          {!result ? (
            <p className="mt-2 text-sm text-ink-800">
              {Object.keys(answers).length} of {QUESTIONS.length} answered. Your order appears when you finish.
            </p>
          ) : (
            <>
              <ol className="mt-3 flex flex-col gap-4">
                {result.steps.map((s, i) => (
                  <li key={s.section} className="text-sm">
                    <p className="font-semibold text-ink-950">
                      {i + 1}.{" "}
                      {s.section === "discipline" ? (
                        "Your Discipline (BAR, ISC or TCP)"
                      ) : (
                        <Link href={`/cpa/${s.section}`} className="underline underline-offset-2">
                          {NAME[s.section]}
                        </Link>
                      )}
                    </p>
                    <p className="mt-1 leading-relaxed text-ink-800">{s.why}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-ink-400">A starting point based on your answers, not a rule. Any order leads to the same licence.</p>
            </>
          )}
          {Object.keys(answers).length > 0 && (
            <button type="button" onClick={() => setAnswers({})} className="mt-4 text-sm font-medium text-ink-800 underline underline-offset-2">
              Start again
            </button>
          )}
        </div>

        {result && (
          <div className="mt-4 rounded-xl border border-ink-950/10 p-5 text-sm">
            <p className="font-semibold text-ink-950">Timing tips for your plan</p>
            <ul className="mt-2 list-disc pl-5 leading-relaxed text-ink-800">
              {result.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3">
              <Link href="/study-planner" className="font-medium text-gold-700 underline underline-offset-2">
                Turn this order into a dated study plan
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
