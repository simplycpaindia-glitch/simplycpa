"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type D = "bar" | "isc" | "tcp";
type Score = Partial<Record<D, number>>;
type Question = { id: string; text: string; options: { label: string; score: Score }[] };

const QUESTIONS: Question[] = [
  {
    id: "core",
    text: "Which Core section do you enjoy most (or expect to)?",
    options: [
      { label: "FAR: financial accounting and reporting", score: { bar: 2 } },
      { label: "AUD: auditing, controls and evidence", score: { isc: 2 } },
      { label: "REG: tax and business law", score: { tcp: 2 } },
      { label: "I don't know yet", score: {} },
    ],
  },
  {
    id: "work",
    text: "What work do you want to be doing in three to five years?",
    options: [
      { label: "Financial reporting, technical accounting or FP&A", score: { bar: 3 } },
      { label: "IT audit, risk, SOC reports or cybersecurity assurance", score: { isc: 3 } },
      { label: "US tax compliance or tax planning", score: { tcp: 3 } },
      { label: "External audit in general", score: { bar: 1, isc: 1 } },
      { label: "Not decided", score: {} },
    ],
  },
  {
    id: "tech",
    text: "How comfortable are you with technology topics such as networks, databases, access controls and encryption?",
    options: [
      { label: "Comfortable. I work with them or enjoy learning them", score: { isc: 2 } },
      { label: "Some exposure, willing to learn", score: { isc: 1 } },
      { label: "I would rather avoid them", score: { bar: 1, tcp: 1 } },
    ],
  },
  {
    id: "tax",
    text: "How do you feel about detailed tax rules and calculations?",
    options: [
      { label: "I like them", score: { tcp: 2 } },
      { label: "Neutral", score: {} },
      { label: "I would rather avoid them", score: { bar: 1, isc: 1 } },
    ],
  },
  {
    id: "numbers",
    text: "How do you feel about calculation-heavy topics: ratios, variances, consolidations, derivatives?",
    options: [
      { label: "I like them", score: { bar: 2 } },
      { label: "Fine in moderation", score: {} },
      { label: "I prefer concepts and frameworks to calculations", score: { isc: 2 } },
    ],
  },
  {
    id: "background",
    text: "Which is closest to your background today?",
    options: [
      { label: "CA, CMA or strong accounting degree", score: { bar: 1 } },
      { label: "Working in US or international tax", score: { tcp: 2 } },
      { label: "Working in IT audit, risk or a technology role", score: { isc: 2 } },
      { label: "Working in audit or finance generally", score: { bar: 1 } },
      { label: "Student or recent graduate", score: {} },
    ],
  },
];

const INFO: Record<D, { code: string; name: string; extends: string; areas: string[]; suits: string; watch: string }> = {
  bar: {
    code: "BAR",
    name: "Business Analysis and Reporting",
    extends: "FAR",
    areas: ["Business analysis (40–50%)", "Technical accounting and reporting (35–45%)", "State and local governments (10–20%)"],
    suits: "Financial reporting, technical accounting, FP&A and advisory roles, and candidates who are strong in FAR.",
    watch: "It is calculation-heavy and reaches into advanced topics such as consolidations, derivatives and government accounting.",
  },
  isc: {
    code: "ISC",
    name: "Information Systems and Controls",
    extends: "AUD",
    areas: ["Information systems and data management (35–45%)", "Security, confidentiality and privacy (35–45%)", "Considerations for SOC engagements (15–25%)"],
    suits: "IT audit, risk and controls, SOC reporting and cybersecurity assurance, and candidates who liked the controls side of AUD.",
    watch: "Much of the vocabulary is new to accountants. It rewards understanding frameworks more than calculation.",
  },
  tcp: {
    code: "TCP",
    name: "Tax Compliance and Planning",
    extends: "REG",
    areas: [
      "Individual tax compliance and planning, and personal financial planning (30–40%)",
      "Entity tax compliance (30–40%)",
      "Entity tax planning (10–20%)",
      "Property transactions (10–20%)",
    ],
    suits: "US tax compliance and planning roles, and candidates who are strong in REG. Sitting it soon after REG reuses that study.",
    watch: "It is US federal tax in depth. If your work will never involve US tax, the knowledge is less transferable.",
  },
};

export function DisciplineSelector() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answered = Object.keys(answers).length;
  const done = answered === QUESTIONS.length;

  const totals: Record<D, number> = { bar: 0, isc: 0, tcp: 0 };
  for (const q of QUESTIONS) {
    const pick = answers[q.id];
    if (pick === undefined) continue;
    for (const [k, v] of Object.entries(q.options[pick].score)) totals[k as D] += v ?? 0;
  }
  const ranked = (Object.keys(totals) as D[]).sort((a, b) => totals[b] - totals[a]);
  const top = totals[ranked[0]];
  const winners = ranked.filter((d) => totals[d] === top);
  const max = Math.max(top, 1);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <ol className="flex flex-col gap-8">
        {QUESTIONS.map((q, qi) => (
          <li key={q.id}>
            <fieldset>
              <legend className="font-medium text-ink-950">
                <span className="mr-2 text-ink-400">{qi + 1}.</span>
                {q.text}
              </legend>
              <div className="mt-3 flex flex-col gap-2">
                {q.options.map((o, oi) => {
                  const selected = answers[q.id] === oi;
                  return (
                    <label
                      key={o.label}
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
                        onChange={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
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
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Your result</p>
          {!done ? (
            <p className="mt-2 text-sm text-ink-800">
              {answered} of {QUESTIONS.length} answered. Your result appears when you finish.
            </p>
          ) : top === 0 ? (
            <p className="mt-2 text-sm text-ink-800">
              Your answers don&apos;t point anywhere yet, and that is fine. Study a Core section first; the one you enjoy most usually
              answers this question for you.
            </p>
          ) : (
            <>
              <p className="mt-2 font-display text-2xl font-medium text-ink-950">
                {winners.length === 1 ? `${INFO[winners[0]].code} fits best` : `${winners.map((w) => INFO[w].code).join(" and ")} fit equally`}
              </p>
              <p className="mt-1 text-sm text-ink-400">
                Based on what you told us. This is a starting point for your own decision, not a prediction of your score.
              </p>
            </>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {ranked.map((d) => (
              <div key={d} className="text-sm">
                <div className="flex justify-between text-ink-800">
                  <span className="font-medium">{INFO[d].code}</span>
                  <span className="tabular-nums text-ink-400">{totals[d]}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-ink-950/10">
                  <div className="h-full rounded-full bg-gold-500" style={{ width: `${(totals[d] / max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          {answered > 0 && (
            <button type="button" onClick={() => setAnswers({})} className="mt-4 text-sm font-medium text-ink-800 underline underline-offset-2">
              Start again
            </button>
          )}
        </div>

        {done && top > 0 && (
          <div className="mt-4 flex flex-col gap-4">
            {winners.map((d) => (
              <div key={d} className="rounded-xl border border-ink-950/10 p-5 text-sm">
                <p className="font-semibold text-ink-950">
                  {INFO[d].code}: {INFO[d].name}
                </p>
                <p className="mt-1 text-ink-400">Builds on {INFO[d].extends}.</p>
                <ul className="mt-3 list-disc pl-5 text-ink-800">
                  {INFO[d].areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <p className="mt-3 leading-relaxed text-ink-800">
                  <span className="font-medium text-ink-950">Suits:</span> {INFO[d].suits}
                </p>
                <p className="mt-2 leading-relaxed text-ink-800">
                  <span className="font-medium text-ink-950">Know before you choose:</span> {INFO[d].watch}
                </p>
                <Link href={`/cpa/${d}`} className="mt-3 inline-block font-medium text-gold-700 underline underline-offset-2">
                  See every {INFO[d].code} topic
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
