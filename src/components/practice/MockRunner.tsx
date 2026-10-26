"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { Check, Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { submitMcqBatch } from "@/lib/actions/mcq";
import { scoreReport } from "@/lib/mini-mock";

type Option = { id: string; label: string; text: string };
type Question = { id: string; question: string; options: Option[]; topic: { slug: string; title: string }; area: string | null };
type Graded = { mcqId: string; selectedOptionId: string | null; correctOptionId: string | null; isCorrect: boolean; explanation: string };
type Saved = { endsAt: number; answers: Record<string, string> };

const pad = (n: number) => String(n).padStart(2, "0");
const clock = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
};

export function MockRunner({
  subject,
  week,
  questions,
  minutes,
  isLoggedIn,
}: {
  subject: { id: string; slug: string; shortName: string };
  week: string;
  questions: Question[];
  minutes: number;
  isLoggedIn: boolean;
}) {
  const storageKey = `mini-mock:${subject.slug}:${week}`;
  const [phase, setPhase] = useState<"intro" | "running" | "done">("intro");
  const [endsAt, setEndsAt] = useState(0);
  const [now, setNow] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [results, setResults] = useState<Graded[] | null>(null);
  const [usedMs, setUsedMs] = useState(0);
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();
  const submitted = useRef(false);

  const save = (s: Saved | null) => {
    try {
      if (s) sessionStorage.setItem(storageKey, JSON.stringify(s));
      else sessionStorage.removeItem(storageKey);
    } catch {}
  };

  // Resume a mock that was in progress before a reload.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) return;
      const s = JSON.parse(raw) as Saved;
      // Still running, or ran out within the last 10 minutes (then it submits straight away);
      // older abandoned attempts are dropped rather than scored.
      if (s.endsAt > Date.now() - 10 * 60_000) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring browser-only state once on mount
        setAnswers(s.answers);
        setEndsAt(s.endsAt);
        setNow(Date.now());
        setPhase("running");
      } else sessionStorage.removeItem(storageKey);
    } catch {}
  }, [storageKey]);

  const submit = useCallback(() => {
    if (submitted.current) return;
    submitted.current = true;
    setConfirmOpen(false);
    const startedAt = endsAt - minutes * 60_000;
    setUsedMs(Math.min(Date.now(), endsAt) - startedAt);
    startTransition(async () => {
      try {
        const res = await submitMcqBatch({
          subjectId: subject.id,
          mode: "MOCK",
          answers: questions.map((q) => ({ mcqId: q.id, selectedOptionId: answers[q.id] ?? null })),
        });
        setResults(res.results);
        setPhase("done");
        save(null);
      } catch {
        submitted.current = false;
        setError(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- save only touches storage
  }, [answers, endsAt, minutes, questions, subject.id]);

  // Tick once a second while running; submit automatically when time is up.
  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);
  useEffect(() => {
    if (phase === "running" && endsAt && now >= endsAt) submit();
  }, [phase, now, endsAt, submit]);

  const start = () => {
    const end = Date.now() + minutes * 60_000;
    setEndsAt(end);
    setNow(Date.now());
    setPhase("running");
    save({ endsAt: end, answers: {} });
  };

  const choose = (qid: string, oid: string) => {
    const next = { ...answers, [qid]: oid };
    setAnswers(next);
    save({ endsAt, answers: next });
  };

  const report = useMemo(
    () => (results ? scoreReport(questions.map((q) => ({ id: q.id, topic: q.topic, area: q.area })), results) : null),
    [results, questions],
  );

  if (phase === "intro") {
    return (
      <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6">
        <h2 className="font-display text-xl font-medium text-ink-950">Before you start</h2>
        <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-ink-800">
          <li>{questions.length} questions, {minutes} minutes: about {Math.round((minutes * 60) / questions.length)} seconds a question, close to real exam pacing.</li>
          <li>The timer can&apos;t be paused. When it reaches zero, your answers are submitted automatically.</li>
          <li>You can move between questions and change answers until you submit. Unanswered questions count as wrong.</li>
          <li>You&apos;ll get a score report by area and topic, then every question with its explanation.</li>
        </ul>
        {!isLoggedIn && (
          <p className="mt-4 text-sm text-ink-400">
            <Link href={`/login?callbackUrl=/mini-mock/${subject.slug}`} className="underline underline-offset-2">Sign in</Link> to save your score and
            track it week by week. You can also take it without signing in.
          </p>
        )}
        <Button className="mt-5" onClick={start}>Start the {subject.shortName} mini-mock</Button>
      </div>
    );
  }

  if (phase === "done" && report && results) {
    const pct = Math.round((report.right / report.total) * 100);
    const weakest = report.topics.filter((t) => t.right < t.total).slice(0, 3);
    return (
      <div>
        <div aria-live="polite" className="rounded-xl border border-ink-950/10 bg-paper-100 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">Your score</p>
          <p className="mt-1 font-display text-4xl font-medium text-ink-950">
            {report.right} / {report.total} <span className="text-2xl text-ink-400">({pct}%)</span>
          </p>
          <p className="mt-1 text-sm text-ink-400">Time used: {clock(usedMs)} of {minutes}:00{isLoggedIn ? " · Saved to your history" : ""}</p>
          <p className="mt-3 text-xs text-ink-400">
            This is a raw percentage, not the exam&apos;s scaled score, so it doesn&apos;t map directly to the 75 needed to pass.
          </p>
        </div>

        <section aria-labelledby="by-area" className="mt-8">
          <h2 id="by-area" className="font-display text-xl font-medium text-ink-950">By blueprint area</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {report.areas.map((a) => (
              <li key={a.area} className="flex items-center gap-3 text-sm">
                <span className="w-56 shrink-0 text-ink-800 sm:w-80">{a.area}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-ink-950/10" aria-hidden>
                  <span className="block h-full rounded-full bg-gold-500" style={{ width: `${(a.right / a.total) * 100}%` }} />
                </span>
                <span className="w-14 text-right tabular-nums text-ink-950">{a.right}/{a.total}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="by-topic" className="mt-8">
          <h2 id="by-topic" className="font-display text-xl font-medium text-ink-950">By topic, weakest first</h2>
          <div className="mt-3 overflow-x-auto rounded-lg border border-ink-950/10">
            <table className="w-full min-w-[30rem] text-sm">
              <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="px-4 py-2.5">Topic</th>
                  <th scope="col" className="px-4 py-2.5 text-right">Right</th>
                  <th scope="col" className="px-4 py-2.5 text-right">Next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10">
                {report.topics.map((t) => (
                  <tr key={t.slug}>
                    <th scope="row" className="px-4 py-2.5 text-left font-medium text-ink-950">{t.title}</th>
                    <td className="px-4 py-2.5 text-right tabular-nums">{t.right}/{t.total}</td>
                    <td className="px-4 py-2.5 text-right">
                      {t.right < t.total ? (
                        <Link href={`/cpa/${subject.slug}/${t.slug}`} className="underline underline-offset-2">Study<span className="sr-only"> {t.title}</span></Link>
                      ) : (
                        <span className="text-signal-green">All right</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {weakest.length > 0 && (
            <p className="mt-3 text-sm text-ink-800">
              Focus next on: {weakest.map((t, i) => (
                <span key={t.slug}>
                  {i > 0 && ", "}
                  <Link href={`/cpa/${subject.slug}/${t.slug}#mcqs`} className="font-medium underline underline-offset-2">{t.title}</Link>
                </span>
              ))}
              .{isLoggedIn && " Questions you got wrong are now in your mistake book."}
            </p>
          )}
        </section>

        <section aria-labelledby="review" className="mt-10">
          <h2 id="review" className="font-display text-xl font-medium text-ink-950">Review every question</h2>
          <ol className="mt-4 flex flex-col gap-4">
            {questions.map((q, i) => {
              const g = results.find((r) => r.mcqId === q.id);
              return (
                <li key={q.id} className="rounded-xl border border-ink-950/10 p-5">
                  <p className="text-sm font-medium text-ink-950">
                    {i + 1}. {q.question}
                  </p>
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

  // Running
  const q = questions[index];
  const left = endsAt - now;
  const answered = Object.keys(answers).length;
  return (
    <div>
      <div className="sticky top-16 z-10 -mx-4 mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-ink-950/10 bg-paper-50/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        <p className={cn("flex items-center gap-1.5 font-mono text-lg tabular-nums", left < 5 * 60_000 ? "text-signal-red" : "text-ink-950")} role="timer" aria-label="Time left">
          <Clock className="size-4" aria-hidden /> {clock(left)}
        </p>
        <p className="text-sm text-ink-400">{answered} of {questions.length} answered</p>
        <Button size="sm" onClick={() => setConfirmOpen(true)} disabled={isPending}>
          {isPending ? "Submitting…" : "Submit"}
        </Button>
      </div>

      <nav aria-label="Questions" className="mb-5 flex flex-wrap gap-1.5">
        {questions.map((x, i) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-current={i === index ? "step" : undefined}
            aria-label={`Question ${i + 1}${answers[x.id] ? ", answered" : ""}`}
            className={cn(
              "flex size-8 items-center justify-center rounded-md border text-xs font-medium",
              i === index && "border-ink-950 text-ink-950",
              i !== index && answers[x.id] && "border-signal-green/40 bg-signal-green/10 text-signal-green",
              i !== index && !answers[x.id] && "border-ink-950/10 text-ink-400",
            )}
          >
            {i + 1}
          </button>
        ))}
      </nav>

      <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6">
        <p className="text-xs text-ink-400">Question {index + 1} of {questions.length}</p>
        <p className="mt-2 text-base font-medium leading-relaxed text-ink-950">{q.question}</p>
        <div className="mt-5 flex flex-col gap-2">
          {q.options.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => choose(q.id, o.id)}
              aria-pressed={answers[q.id] === o.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors hover:border-ink-950/30",
                answers[q.id] === o.id ? "border-ink-950/50 bg-ink-950/[0.04]" : "border-ink-950/10",
              )}
            >
              <span className="mt-0.5 font-semibold text-ink-400">{o.label}.</span>
              <span className="flex-1 text-ink-800">{o.text}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Button variant="outline" size="sm" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>Previous</Button>
        <Button variant="outline" size="sm" disabled={index === questions.length - 1} onClick={() => setIndex((i) => i + 1)}>Next</Button>
      </div>

      {error && <p className="mt-4 text-sm text-signal-red">Couldn&apos;t submit. Check your connection and press Submit again.</p>}

      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/50 p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="w-full max-w-sm rounded-xl bg-paper-50 p-6">
            <h3 id="confirm-title" className="font-semibold text-ink-950">Submit your mini-mock?</h3>
            <p className="mt-2 text-sm text-ink-400">
              You&apos;ve answered {answered} of {questions.length}. {answered < questions.length && "Unanswered questions count as wrong. "}You have {clock(left)} left.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setConfirmOpen(false)}>Keep going</Button>
              <Button size="sm" onClick={submit}>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
