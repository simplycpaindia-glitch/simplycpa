"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { Check, Clock, Coffee, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SimulationExhibits } from "@/components/practice/SimulationExhibits";
import { gradeFullMock } from "@/lib/actions/full-mock";
import { scoreReport } from "@/lib/mini-mock";
import { BREAK_AFTER_TESTLET, BREAK_MINUTES, EXAM_MINUTES, weightedPercent } from "@/lib/full-mock";
import type { GradeResult, PublicCell, PublicSimulation } from "@/lib/tbs/types";

type Option = { id: string; label: string; text: string };
type Mcq = { id: string; question: string; options: Option[]; topic: { slug: string; title: string }; area: string | null };
type Testlet = { kind: "mcq"; mcqs: Mcq[] } | { kind: "tbs"; sims: PublicSimulation[] };

type Saved = {
  /** Exam clock end, while the clock is running. */
  endsAt: number;
  /** Exam time left when the clock was paused for the break. */
  pausedLeft: number | null;
  breakEndsAt: number | null;
  breakOffered: boolean;
  testlet: number;
  mcq: Record<string, string>;
  sims: Record<string, string[][]>;
};
type Phase = "intro" | "running" | "break-offer" | "break" | "done";
type Results = Awaited<ReturnType<typeof gradeFullMock>>;

const pad = (n: number) => String(n).padStart(2, "0");
const clock = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 3600)}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
};

export function FullMockRunner({
  subject,
  month,
  testlets,
  mcqWeight,
  isLoggedIn,
}: {
  subject: { id: string; slug: string; shortName: string };
  month: string;
  testlets: Testlet[];
  mcqWeight: number;
  isLoggedIn: boolean;
}) {
  const storageKey = `full-mock:${subject.slug}:${month}`;
  const [phase, setPhase] = useState<Phase>("intro");
  const [state, setState] = useState<Saved | null>(null);
  const [now, setNow] = useState(0);
  const [index, setIndex] = useState(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [usedMs, setUsedMs] = useState(0);
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();
  const submitted = useRef(false);

  const allMcqs = useMemo(() => testlets.flatMap((t) => (t.kind === "mcq" ? t.mcqs : [])), [testlets]);
  const allSims = useMemo(() => testlets.flatMap((t) => (t.kind === "tbs" ? t.sims : [])), [testlets]);

  const persist = (s: Saved | null) => {
    try {
      if (s) localStorage.setItem(storageKey, JSON.stringify(s));
      else localStorage.removeItem(storageKey);
    } catch {
      // Storage unavailable: the exam still works, but a reload would lose progress.
    }
  };
  const update = (fn: (s: Saved) => Saved) =>
    setState((prev) => {
      if (!prev) return prev;
      const next = fn(prev);
      persist(next);
      return next;
    });

  // Resume an attempt that was in progress before a reload.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const s = JSON.parse(raw) as Saved;
      const clockEnd = s.pausedLeft !== null ? Date.now() + s.pausedLeft : s.endsAt;
      if (clockEnd > Date.now() - 10 * 60_000) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring browser-only state once on mount
        setState(s);
        setNow(Date.now());
        setPhase(s.breakEndsAt ? "break" : "running");
      } else localStorage.removeItem(storageKey);
    } catch {}
  }, [storageKey]);

  const submitAll = useCallback(() => {
    if (submitted.current || !state) return;
    submitted.current = true;
    setConfirmOpen(false);
    const left = state.pausedLeft ?? state.endsAt - Date.now();
    setUsedMs(Math.min(EXAM_MINUTES * 60_000, EXAM_MINUTES * 60_000 - Math.max(0, left)));
    startTransition(async () => {
      try {
        const res = await gradeFullMock({
          subjectId: subject.id,
          subject: subject.slug,
          mcqAnswers: allMcqs.map((q) => ({ mcqId: q.id, selectedOptionId: state.mcq[q.id] ?? null })),
          simAnswers: allSims.map((s) => ({ slug: s.slug, answers: state.sims[s.slug] ?? [] })),
        });
        setResults(res);
        setPhase("done");
        persist(null);
      } catch {
        submitted.current = false;
        setError(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- persist only touches storage
  }, [state, allMcqs, allSims, subject.id, subject.slug]);

  // Tick once a second while the exam or the break is running.
  useEffect(() => {
    if (phase !== "running" && phase !== "break" && phase !== "break-offer") return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  // Time up: submit everything. Break over: restart the exam clock.
  useEffect(() => {
    if (!state) return;
    if ((phase === "running" || phase === "break-offer") && state.pausedLeft === null && now >= state.endsAt) submitAll();
    if (phase === "break" && state.breakEndsAt && now >= state.breakEndsAt) endBreak();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- endBreak reads the latest state through update
  }, [phase, now, state, submitAll]);

  const start = () => {
    const s: Saved = { endsAt: Date.now() + EXAM_MINUTES * 60_000, pausedLeft: null, breakEndsAt: null, breakOffered: false, testlet: 0, mcq: {}, sims: {} };
    setState(s);
    persist(s);
    setNow(Date.now());
    setIndex(0);
    setPhase("running");
  };

  const finishTestlet = () => {
    if (!state) return;
    setConfirmOpen(false);
    const next = state.testlet + 1;
    if (next >= testlets.length) return submitAll();
    update((s) => ({ ...s, testlet: next, breakOffered: s.breakOffered || next === BREAK_AFTER_TESTLET }));
    setIndex(0);
    if (next === BREAK_AFTER_TESTLET && !state.breakOffered) setPhase("break-offer");
    window.scrollTo({ top: 0 });
  };

  const takeBreak = () => {
    update((s) => ({ ...s, pausedLeft: Math.max(0, s.endsAt - Date.now()), breakEndsAt: Date.now() + BREAK_MINUTES * 60_000 }));
    setNow(Date.now());
    setPhase("break");
  };
  function endBreak() {
    update((s) => ({ ...s, endsAt: Date.now() + (s.pausedLeft ?? 0), pausedLeft: null, breakEndsAt: null }));
    setNow(Date.now());
    setPhase("running");
  }

  // ── Intro ──
  if (phase === "intro") {
    const mcqCount = allMcqs.length;
    const simCount = allSims.length;
    return (
      <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6">
        <h2 className="font-display text-xl font-medium text-ink-950">Exam conditions</h2>
        <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-ink-800">
          <li>
            Five testlets, like the real exam: two of multiple-choice questions ({mcqCount} in total), then three of task-based simulations ({simCount} in
            total).
          </li>
          <li>{EXAM_MINUTES / 60} hours on one clock. When it reaches zero, everything you have answered is submitted.</li>
          <li>Once you submit a testlet you cannot go back to it.</li>
          <li>
            After testlet {BREAK_AFTER_TESTLET} you are offered a {BREAK_MINUTES}-minute break that does not use exam time. You can decline it.
          </li>
          <li>Your progress is saved in this browser, so a reload will not lose your answers.</li>
          <li>
            You will see a score weighted {Math.round(mcqWeight * 100)}% multiple choice and {Math.round((1 - mcqWeight) * 100)}% simulations, then every
            explanation.
          </li>
        </ul>
        <p className="mt-4 text-sm text-ink-400">
          Use the AICPA&apos;s free sample tests for the real exam software and tools. This mock reproduces the structure, timing and question types.
        </p>
        {!isLoggedIn && (
          <p className="mt-2 text-sm text-ink-400">
            <Link href={`/login?callbackUrl=/mock-exam/${subject.slug}`} className="underline underline-offset-2">
              Sign in
            </Link>{" "}
            to add the questions you miss to your mistake book. You can also take it without signing in.
          </p>
        )}
        <Button className="mt-5" onClick={start}>
          Start the {subject.shortName} mock exam
        </Button>
      </div>
    );
  }

  // ── Results ──
  if (phase === "done" && results) {
    const report = scoreReport(
      allMcqs.map((q) => ({ id: q.id, topic: q.topic, area: q.area })),
      results.mcq.results.map((r) => ({ mcqId: r.mcqId, isCorrect: r.isCorrect })),
    );
    const tbsRight = results.sims.reduce((n, s) => n + s.result.correct, 0);
    const tbsTotal = results.sims.reduce((n, s) => n + s.result.total, 0);
    const pct = weightedPercent(report.right, report.total, tbsRight, tbsTotal, mcqWeight);
    const missed = allMcqs.filter((q) => !results.mcq.results.find((r) => r.mcqId === q.id)?.isCorrect);
    return (
      <div>
        <div aria-live="polite" className="rounded-xl border border-ink-950/10 bg-paper-100 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">Your result</p>
          <p className="mt-1 font-display text-4xl font-medium text-ink-950">{pct}%</p>
          <p className="mt-1 text-sm text-ink-800">
            Multiple choice {report.right} of {report.total} · Simulations {tbsRight} of {tbsTotal} answers · Exam time used {clock(usedMs)}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-ink-400">
            A raw percentage weighted like the exam ({Math.round(mcqWeight * 100)}/{Math.round((1 - mcqWeight) * 100)}). The real exam reports a scaled score
            that also reflects question difficulty, so this does not convert to the 75 needed to pass. Use it to find weak areas.
          </p>
        </div>

        <section className="mt-8">
          <h2 className="font-display text-xl font-medium text-ink-950">Multiple choice by blueprint area</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {report.areas.map((a) => (
              <li key={a.area} className="flex items-center gap-3 text-sm">
                <span className="w-48 shrink-0 text-ink-800 sm:w-80">{a.area}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-ink-950/10" aria-hidden>
                  <span className="block h-full rounded-full bg-gold-500" style={{ width: `${(a.right / a.total) * 100}%` }} />
                </span>
                <span className="w-14 text-right tabular-nums text-ink-950">
                  {a.right}/{a.total}
                </span>
              </li>
            ))}
          </ul>
          {report.topics.filter((t) => t.right < t.total).length > 0 && (
            <p className="mt-3 text-sm text-ink-800">
              Weakest topics:{" "}
              {report.topics
                .filter((t) => t.right < t.total)
                .slice(0, 4)
                .map((t, i) => (
                  <span key={t.slug}>
                    {i > 0 && ", "}
                    <Link href={`/cpa/${subject.slug}/${t.slug}`} className="font-medium underline underline-offset-2">
                      {t.title}
                    </Link>
                  </span>
                ))}
              .
            </p>
          )}
        </section>

        <section className="mt-8">
          <h2 className="font-display text-xl font-medium text-ink-950">Simulations</h2>
          <ul className="mt-3 flex flex-col gap-3">
            {allSims.map((sim) => {
              const r = results.sims.find((s) => s.slug === sim.slug)?.result;
              return (
                <li key={sim.slug} className="rounded-lg border border-ink-950/10 p-4">
                  <details>
                    <summary className="flex cursor-pointer flex-wrap items-baseline justify-between gap-2">
                      <span className="font-medium text-ink-950">{sim.title}</span>
                      <span className="text-sm tabular-nums text-ink-800">{r ? `${r.correct} of ${r.total}` : "Not graded"}</span>
                    </summary>
                    {r && <SimReview sim={sim} result={r} answers={state?.sims[sim.slug]} />}
                  </details>
                  <Link href={`/cpa/${subject.slug}/simulations/${sim.slug}`} className="mt-2 inline-block text-sm text-gold-700 underline underline-offset-2">
                    Try it again on its own
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium text-ink-950">Multiple-choice questions you missed ({missed.length})</h2>
          <ol className="mt-4 flex flex-col gap-4">
            {missed.map((q) => {
              const g = results.mcq.results.find((r) => r.mcqId === q.id);
              return (
                <li key={q.id} className="rounded-xl border border-ink-950/10 p-5">
                  <p className="text-sm font-medium text-ink-950">{q.question}</p>
                  <p className="mt-1 text-xs text-ink-400">{q.topic.title}</p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {q.options.map((o) => {
                      const correct = g?.correctOptionId === o.id;
                      const chosenWrong = g?.selectedOptionId === o.id && !correct;
                      return (
                        <li
                          key={o.id}
                          className={cn(
                            "flex items-start gap-2 rounded-md border px-3 py-2 text-sm",
                            correct && "border-signal-green/50 bg-signal-green/5",
                            chosenWrong && "border-signal-red/50 bg-signal-red/5",
                            !correct && !chosenWrong && "border-ink-950/10",
                          )}
                        >
                          <span className="font-semibold text-ink-400">{o.label}.</span>
                          <span className="flex-1 text-ink-800">{o.text}</span>
                          {correct && <Check className="size-4 shrink-0 text-signal-green" aria-label="Correct answer" />}
                          {chosenWrong && <X className="size-4 shrink-0 text-signal-red" aria-label="Your answer" />}
                        </li>
                      );
                    })}
                  </ul>
                  {!g?.selectedOptionId && <p className="mt-2 text-xs text-signal-red">Not answered</p>}
                  <p className="mt-3 rounded-lg bg-paper-100 p-3 text-sm leading-relaxed text-ink-400">{g?.explanation}</p>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    );
  }

  if (!state) return null;

  // ── Break ──
  if (phase === "break-offer" || phase === "break") {
    const examLeft = state.pausedLeft ?? state.endsAt - now;
    return (
      <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6 text-center">
        <Coffee className="mx-auto size-8 text-gold-700" aria-hidden />
        {phase === "break-offer" ? (
          <>
            <h2 className="mt-3 font-display text-2xl font-medium text-ink-950">Standard break</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-800">
              You have finished testlet {BREAK_AFTER_TESTLET}. You may take a {BREAK_MINUTES}-minute break that does not count against your exam time,
              or continue now. Exam time left: <span className="font-mono tabular-nums">{clock(examLeft)}</span>.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button onClick={takeBreak}>Take the break</Button>
              <Button variant="outline" onClick={() => setPhase("running")}>
                Continue without a break
              </Button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mt-3 font-display text-2xl font-medium text-ink-950">On break</h2>
            <p className="mt-2 font-mono text-3xl tabular-nums text-ink-950" role="timer" aria-label="Break time left">
              {clock((state.breakEndsAt ?? now) - now)}
            </p>
            <p className="mt-2 text-sm text-ink-400">The exam clock is paused at {clock(examLeft)} and restarts when the break ends.</p>
            <Button className="mt-5" onClick={endBreak}>
              End the break and continue
            </Button>
          </>
        )}
      </div>
    );
  }

  // ── Running ──
  const testlet = testlets[state.testlet];
  const left = state.endsAt - now;
  const items = testlet.kind === "mcq" ? testlet.mcqs.length : testlet.sims.length;
  const answered =
    testlet.kind === "mcq"
      ? testlet.mcqs.filter((q) => state.mcq[q.id]).length
      : testlet.sims.filter((s) => (state.sims[s.slug] ?? []).some((r) => r.some((v) => v.trim() !== ""))).length;
  const last = state.testlet === testlets.length - 1;

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-4 mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-ink-950/10 bg-paper-50/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        <p className={cn("flex items-center gap-1.5 font-mono text-lg tabular-nums", left < 15 * 60_000 ? "text-signal-red" : "text-ink-950")} role="timer" aria-label="Exam time left">
          <Clock className="size-4" aria-hidden /> {clock(left)}
        </p>
        <p className="text-sm text-ink-400">
          Testlet {state.testlet + 1} of {testlets.length} · {answered} of {items} {testlet.kind === "mcq" ? "answered" : "started"}
        </p>
        <Button size="sm" onClick={() => setConfirmOpen(true)} disabled={isPending}>
          {isPending ? "Submitting…" : last ? "Submit exam" : "Submit testlet"}
        </Button>
      </div>

      <nav aria-label="Items in this testlet" className="mb-5 flex flex-wrap gap-1.5">
        {Array.from({ length: items }, (_, i) => {
          const done =
            testlet.kind === "mcq"
              ? !!state.mcq[testlet.mcqs[i].id]
              : (state.sims[testlet.sims[i].slug] ?? []).some((r) => r.some((v) => v.trim() !== ""));
          return (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-current={i === index ? "step" : undefined}
              aria-label={`${testlet.kind === "mcq" ? "Question" : "Simulation"} ${i + 1}${done ? ", started" : ""}`}
              className={cn(
                "flex h-8 min-w-8 items-center justify-center rounded-md border px-2 text-xs font-medium",
                i === index && "border-ink-950 text-ink-950",
                i !== index && done && "border-signal-green/40 bg-signal-green/10 text-signal-green",
                i !== index && !done && "border-ink-950/10 text-ink-400",
              )}
            >
              {testlet.kind === "mcq" ? i + 1 : `TBS ${i + 1}`}
            </button>
          );
        })}
      </nav>

      {testlet.kind === "mcq" ? (
        <McqItem
          q={testlet.mcqs[index]}
          n={index + 1}
          total={testlet.mcqs.length}
          chosen={state.mcq[testlet.mcqs[index].id]}
          onChoose={(oid) => update((s) => ({ ...s, mcq: { ...s.mcq, [testlet.mcqs[index].id]: oid } }))}
        />
      ) : (
        <SimItem
          sim={testlet.sims[index]}
          values={state.sims[testlet.sims[index].slug]}
          onChange={(values) => update((s) => ({ ...s, sims: { ...s.sims, [testlet.sims[index].slug]: values } }))}
        />
      )}

      <div className="mt-5 flex items-center justify-between">
        <Button variant="outline" size="sm" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          Previous
        </Button>
        <Button variant="outline" size="sm" disabled={index === items - 1} onClick={() => setIndex((i) => i + 1)}>
          Next
        </Button>
      </div>

      {error && <p className="mt-4 text-sm text-signal-red">Couldn&apos;t submit. Your answers are saved; check your connection and press Submit again.</p>}

      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/50 p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="w-full max-w-sm rounded-xl bg-paper-50 p-6">
            <h3 id="confirm-title" className="font-semibold text-ink-950">
              {last ? "Submit the exam?" : `Submit testlet ${state.testlet + 1}?`}
            </h3>
            <p className="mt-2 text-sm text-ink-400">
              {answered} of {items} {testlet.kind === "mcq" ? "answered" : "started"}. You cannot return to this testlet once you submit it.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setConfirmOpen(false)}>
                Keep working
              </Button>
              <Button size="sm" onClick={finishTestlet}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function McqItem({ q, n, total, chosen, onChoose }: { q: Mcq; n: number; total: number; chosen?: string; onChoose: (id: string) => void }) {
  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6">
      <p className="text-xs text-ink-400">
        Question {n} of {total}
      </p>
      <p className="mt-2 text-base font-medium leading-relaxed text-ink-950">{q.question}</p>
      <div className="mt-5 flex flex-col gap-2">
        {q.options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChoose(o.id)}
            aria-pressed={chosen === o.id}
            className={cn(
              "flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors hover:border-ink-950/30",
              chosen === o.id ? "border-ink-950/50 bg-ink-950/[0.04]" : "border-ink-950/10",
            )}
          >
            <span className="mt-0.5 font-semibold text-ink-400">{o.label}.</span>
            <span className="flex-1 text-ink-800">{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SimItem({ sim, values, onChange }: { sim: PublicSimulation; values?: string[][]; onChange: (v: string[][]) => void }) {
  const answers = values ?? sim.rows.map((r) => r.cells.map(() => ""));
  const set = (r: number, c: number, v: string) => onChange(answers.map((row, i) => (i === r ? row.map((x, j) => (j === c ? v : x)) : row)));
  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-5 sm:p-6">
      <h2 className="font-display text-xl font-medium text-ink-950">{sim.title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink-800">
        {sim.scenario.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {sim.exhibits && sim.exhibits.length > 0 && (
        <div className="mt-4">
          <SimulationExhibits exhibits={sim.exhibits} />
        </div>
      )}
      <p className="mt-5 text-sm font-medium text-ink-950">{sim.instructions}</p>
      <ol className="mt-3 flex flex-col gap-3">
        {sim.rows.map((row, r) => (
          <li key={r} className="rounded-lg border border-ink-950/10 p-3">
            <p className="mb-2 text-sm font-medium text-ink-950">
              {r + 1}. {row.label}
            </p>
            <div className={cn("grid gap-2", row.cells.length > 1 && "sm:grid-cols-2", row.cells.length > 2 && "lg:grid-cols-3")}>
              {row.cells.map((cell, c) => (
                <label key={c} className="flex flex-col gap-1 text-xs text-ink-400">
                  {row.cells.length > 1 || sim.columns[c + 1] !== "Answer" ? sim.columns[c + 1] : null}
                  <CellInput cell={cell} value={answers[r]?.[c] ?? ""} onChange={(v) => set(r, c, v)} subject={sim.subject} />
                </label>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CellInput({ cell, value, onChange, subject }: { cell: PublicCell; value: string; onChange: (v: string) => void; subject: string }) {
  const cls = "w-full rounded-md border border-ink-950/20 bg-paper-50 px-2.5 py-2 text-sm text-ink-950";
  if (cell.kind === "select")
    return (
      <select className={cls} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select…</option>
        {cell.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  return (
    <input
      className={cn(cls, cell.kind === "number" && "text-right tabular-nums")}
      inputMode={cell.kind === "number" ? "decimal" : "text"}
      placeholder={cell.kind === "research" ? (subject === "far" ? "e.g. 606-10-25-1" : subject === "aud" ? "e.g. AU-C 500" : "e.g. 1031") : undefined}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function SimReview({ sim, result, answers }: { sim: PublicSimulation; result: GradeResult; answers?: string[][] }) {
  return (
    <div className="mt-3">
      <ol className="flex flex-col gap-2">
        {sim.rows.map((row, r) => {
          const g = result.rows[r];
          return (
            <li key={r} className="rounded-md bg-paper-100 p-3 text-sm">
              <p className="flex gap-2 font-medium text-ink-950">
                {g.correct ? <Check className="mt-0.5 size-4 shrink-0 text-signal-green" aria-label="Correct" /> : <X className="mt-0.5 size-4 shrink-0 text-signal-red" aria-label="Incorrect" />}
                <span>{row.label}</span>
              </p>
              {!g.correct && (
                <p className="mt-1 pl-6 text-xs text-ink-400">
                  Your answer: {(answers?.[r] ?? []).map((v) => v || "blank").join(" · ") || "blank"} · Correct: {g.cells.map((c) => c.expected).join(" · ")}
                </p>
              )}
              <p className="mt-1 pl-6 text-ink-800">{g.explanation}</p>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-sm text-ink-800">
        <span className="font-medium">Key point:</span> {result.takeaway}
      </p>
    </div>
  );
}
