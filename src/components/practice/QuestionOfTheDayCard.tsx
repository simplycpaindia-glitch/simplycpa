"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Check, Flame, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { submitMcqAnswer } from "@/lib/actions/mcq";

type Option = { id: string; label: string; text: string };

export function QuestionOfTheDayCard({
  mcqId,
  question,
  subjectShortName,
  topicTitle,
  topicHref,
  options,
  isToday,
  isLoggedIn,
  streak,
  shareUrl,
}: {
  mcqId: string;
  question: string;
  subjectShortName: string;
  topicTitle: string;
  topicHref: string;
  options: Option[];
  /** Only today's question counts towards the streak. */
  isToday: boolean;
  isLoggedIn: boolean;
  /** Current streak before answering (null when signed out). */
  streak: { current: number; answeredToday: boolean } | null;
  shareUrl: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<{ isCorrect: boolean; correctOptionId: string | null; explanation: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSelect(optionId: string) {
    if (result) return;
    setSelected(optionId);
    startTransition(async () => {
      const res = await submitMcqAnswer({ mcqId, selectedOptionId: optionId });
      setResult({ isCorrect: res.isCorrect, correctOptionId: res.correctOptionId, explanation: res.explanation });
    });
  }

  // Answering today's question keeps the streak going (one answer is enough).
  const streakAfter = streak && isToday && result && !streak.answeredToday ? streak.current + 1 : streak?.current ?? 0;
  const shareText = `CPA Question of the Day (${subjectShortName} · ${topicTitle}) — can you get it right? ${shareUrl}`;

  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6 shadow-sm" aria-busy={isPending}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-400">
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-ink-950 px-2.5 py-0.5 text-paper-50">{subjectShortName}</span>
          <span>{topicTitle}</span>
        </span>
        {isToday && streak && streak.current > 0 && !result && (
          <span className="flex items-center gap-1 text-ink-800" title="Days in a row you've answered the Question of the Day">
            <Flame className="size-3.5 text-gold-700" aria-hidden /> {streak.current}-day streak
          </span>
        )}
      </div>

      <p className="mb-5 text-base font-medium leading-relaxed text-ink-950">{question}</p>

      <div className="flex flex-col gap-2">
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          const isCorrectOption = result && result.correctOptionId === opt.id;
          const isWrongSelection = result && isSelected && !result.isCorrect;

          return (
            <button
              key={opt.id}
              type="button"
              disabled={!!result || isPending}
              onClick={() => handleSelect(opt.id)}
              className={cn(
                "flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                !result && !isPending && "hover:border-ink-950/30 hover:bg-ink-950/[0.03]",
                isPending && !isSelected && "opacity-60",
                isSelected && !result && "border-ink-950/40 bg-ink-950/[0.03]",
                isCorrectOption && "border-signal-green/50 bg-signal-green/5",
                isWrongSelection && "border-signal-red/50 bg-signal-red/5",
                !isSelected && !isCorrectOption && "border-ink-950/10",
              )}
            >
              <span className="mt-0.5 font-semibold text-ink-400">{opt.label}.</span>
              <span className="flex-1 text-ink-800">{opt.text}</span>
              {isPending && isSelected && <Loader2 className="size-4 shrink-0 animate-spin text-ink-400" aria-hidden />}
              {isCorrectOption && <Check className="size-4 shrink-0 text-signal-green" />}
              {isWrongSelection && <X className="size-4 shrink-0 text-signal-red" />}
            </button>
          );
        })}
      </div>

      {/* Announces "Checking…" and then the result to screen readers. */}
      <div aria-live="polite" className="sr-only">
        {isPending ? "Checking your answer…" : result ? (result.isCorrect ? "Correct." : "Not quite.") : ""}
      </div>
      {isPending && <p className="mt-3 text-xs text-ink-400">Checking your answer…</p>}

      {result && (
        <div className="mt-5 rounded-lg bg-paper-100 p-4">
          <p className={cn("mb-1 flex items-center gap-1.5 text-sm font-semibold", result.isCorrect ? "text-signal-green" : "text-signal-red")}>
            {result.isCorrect ? <Check className="size-4" aria-hidden /> : <X className="size-4" aria-hidden />}
            {result.isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="text-sm leading-relaxed text-ink-400">{result.explanation}</p>

          {isToday && (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-800">
              <Flame className="size-4 text-gold-700" aria-hidden />
              {isLoggedIn ? (
                <>
                  {streakAfter}-day streak — come back tomorrow to keep it going.
                </>
              ) : (
                <>
                  <Link href="/login?callbackUrl=/question-of-the-day" className="font-medium underline">
                    Sign in
                  </Link>{" "}
                  to keep a daily streak.
                </>
              )}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <Button href={topicHref} size="sm" variant="outline">
              More practice on {topicTitle}
            </Button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center rounded-md border border-ink-950/20 px-3 text-sm font-medium text-ink-950 hover:border-ink-950/50"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      )}

      {!result && !isPending && (
        <p className="mt-3 text-xs text-ink-400">
          Or <Link href={topicHref} className="underline">jump straight to {topicTitle}</Link>.
        </p>
      )}
    </div>
  );
}
