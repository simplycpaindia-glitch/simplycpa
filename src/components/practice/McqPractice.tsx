"use client";

import { useMemo, useState, useTransition } from "react";
import { Flag, Check, X, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { submitMcqBatch } from "@/lib/actions/mcq";

type Option = { id: string; label: string; text: string };
type Question = {
  id: string;
  question: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  options: Option[];
};
type GradedResult = {
  mcqId: string;
  selectedOptionId: string | null;
  correctOptionId: string | null;
  isCorrect: boolean;
  explanation: string;
  options: { id: string; isCorrect: boolean; rationale: string | null }[];
};

export function McqPractice({
  topicId,
  mode = "TOPIC",
  questions,
}: {
  topicId?: string;
  mode?: "TOPIC" | "SUBJECT" | "CUSTOM" | "MOCK" | "INCORRECT_REVIEW" | "BOOKMARKED" | "TIMED";
  questions: Question[];
}) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState<{ score: number; total: number; results: GradedResult[] } | null>(null);
  const [reviewIncorrectOnly, setReviewIncorrectOnly] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const current = questions[index];
  const answeredCount = Object.keys(answers).length;

  const resultsByMcq = useMemo(() => {
    const map = new Map<string, GradedResult>();
    submitted?.results.forEach((r) => map.set(r.mcqId, r));
    return map;
  }, [submitted]);

  function handleSubmit() {
    startTransition(async () => {
      const res = await submitMcqBatch({
        topicId,
        mode,
        answers: questions.map((q) => ({ mcqId: q.id, selectedOptionId: answers[q.id] ?? null })),
      });
      setSubmitted(res);
      setConfirmOpen(false);
      setIndex(0);
    });
  }

  function handleRetry() {
    setSubmitted(null);
    setAnswers({});
    setMarked(new Set());
    setIndex(0);
    setReviewIncorrectOnly(false);
  }

  if (submitted) {
    const visibleQuestions = reviewIncorrectOnly
      ? questions.filter((q) => !resultsByMcq.get(q.id)?.isCorrect)
      : questions;

    return (
      <div>
        <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-3xl font-display font-semibold text-ink-950">
                {submitted.score} / {submitted.total}
              </p>
              <p className="text-sm text-ink-400">
                {Math.round((submitted.score / submitted.total) * 100)}% correct
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setReviewIncorrectOnly((v) => !v)}>
                {reviewIncorrectOnly ? "Show all" : "Review incorrect only"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleRetry}>
                <RotateCcw className="size-3.5" /> Retry set
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {visibleQuestions.map((q, i) => {
            const result = resultsByMcq.get(q.id);
            if (!result) return null;
            return (
              <div key={q.id} className="rounded-xl border border-ink-950/10 p-5">
                <p className="mb-4 text-sm font-medium text-ink-950">
                  {i + 1}. {q.question}
                </p>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt) => {
                    const graded = result.options.find((o) => o.id === opt.id);
                    const isSelected = result.selectedOptionId === opt.id;
                    return (
                      <div
                        key={opt.id}
                        className={cn(
                          "flex items-start gap-3 rounded-lg border px-4 py-2.5 text-sm",
                          graded?.isCorrect && "border-signal-green/50 bg-signal-green/5",
                          isSelected && !graded?.isCorrect && "border-signal-red/50 bg-signal-red/5",
                          !graded?.isCorrect && !isSelected && "border-ink-950/10"
                        )}
                      >
                        <span className="font-semibold text-ink-400">{opt.label}.</span>
                        <span className="flex-1 text-ink-800">{opt.text}</span>
                        {graded?.isCorrect && <Check className="size-4 text-signal-green shrink-0" />}
                        {isSelected && !graded?.isCorrect && <X className="size-4 text-signal-red shrink-0" />}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 rounded-lg bg-paper-100 p-3 text-sm text-ink-400 leading-relaxed">
                  {result.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-400">
          Question {index + 1} of {questions.length} · {answeredCount} answered
        </p>
        <button
          type="button"
          onClick={() =>
            setMarked((prev) => {
              const next = new Set(prev);
              if (next.has(current.id)) {
                next.delete(current.id);
              } else {
                next.add(current.id);
              }
              return next;
            })
          }
          className={cn(
            "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium",
            marked.has(current.id) ? "bg-gold-500/15 text-gold-600" : "text-ink-400 hover:bg-ink-950/5"
          )}
        >
          <Flag className="size-3.5" /> {marked.has(current.id) ? "Marked" : "Mark for review"}
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setIndex(i)}
            className={cn(
              "flex size-8 items-center justify-center rounded-md text-xs font-medium border",
              i === index && "border-ink-950 text-ink-950",
              i !== index && answers[q.id] && "border-signal-green/40 bg-signal-green/10 text-signal-green",
              i !== index && !answers[q.id] && marked.has(q.id) && "border-gold-500/40 bg-gold-500/10 text-gold-600",
              i !== index && !answers[q.id] && !marked.has(q.id) && "border-ink-950/10 text-ink-400"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6">
        <p className="mb-5 text-base font-medium text-ink-950 leading-relaxed select-none">
          {current.question}
        </p>
        <div className="flex flex-col gap-2">
          {current.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setAnswers((prev) => ({ ...prev, [current.id]: opt.id }))}
              className={cn(
                "flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors hover:border-ink-950/30 hover:bg-ink-950/[0.03]",
                answers[current.id] === opt.id ? "border-ink-950/40 bg-ink-950/[0.03]" : "border-ink-950/10"
              )}
            >
              <span className="mt-0.5 font-semibold text-ink-400">{opt.label}.</span>
              <span className="flex-1 text-ink-800">{opt.text}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Button variant="outline" size="sm" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          Previous
        </Button>
        {index < questions.length - 1 ? (
          <Button variant="outline" size="sm" onClick={() => setIndex((i) => i + 1)}>
            Next
          </Button>
        ) : (
          <Button size="sm" onClick={() => setConfirmOpen(true)}>
            Submit
          </Button>
        )}
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/50 p-4">
          <div className="w-full max-w-sm rounded-xl bg-paper-50 p-6">
            <h3 className="font-semibold text-ink-950">Submit this set?</h3>
            <p className="mt-2 text-sm text-ink-400">
              You&apos;ve answered {answeredCount} of {questions.length} questions.
              {answeredCount < questions.length && " Unanswered questions will be marked incorrect."}
            </p>
            <div className="mt-5 flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => setConfirmOpen(false)}>
                Keep going
              </Button>
              <Button size="sm" onClick={handleSubmit} disabled={isPending}>
                {isPending ? "Submitting…" : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
