"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
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
  explanation,
}: {
  mcqId: string;
  question: string;
  subjectShortName: string;
  topicTitle: string;
  topicHref: string;
  options: Option[];
  explanation: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<{ isCorrect: boolean; correctOptionId: string | null } | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSelect(optionId: string) {
    if (result) return;
    setSelected(optionId);
    startTransition(async () => {
      const res = await submitMcqAnswer({ mcqId, selectedOptionId: optionId });
      setResult({ isCorrect: res.isCorrect, correctOptionId: res.correctOptionId });
    });
  }

  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-6 shadow-sm select-none">
      <div className="mb-4 flex items-center gap-2 text-xs font-medium text-ink-400">
        <span className="rounded-full bg-ink-950 px-2.5 py-0.5 text-paper-50">{subjectShortName}</span>
        <span>{topicTitle}</span>
      </div>

      <p className="mb-5 text-base font-medium text-ink-950 leading-relaxed">{question}</p>

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
                !result && "hover:border-ink-950/30 hover:bg-ink-950/[0.03]",
                isSelected && !result && "border-ink-950/40 bg-ink-950/[0.03]",
                isCorrectOption && "border-signal-green/50 bg-signal-green/5",
                isWrongSelection && "border-signal-red/50 bg-signal-red/5",
                !isSelected && !isCorrectOption && "border-ink-950/10"
              )}
            >
              <span className="mt-0.5 font-semibold text-ink-400">{opt.label}.</span>
              <span className="flex-1 text-ink-800">{opt.text}</span>
              {isCorrectOption && <Check className="size-4 shrink-0 text-signal-green" />}
              {isWrongSelection && <X className="size-4 shrink-0 text-signal-red" />}
            </button>
          );
        })}
      </div>

      {result && (
        <div className="mt-5 rounded-lg bg-paper-100 p-4">
          <p className={cn("mb-1 text-sm font-semibold", result.isCorrect ? "text-signal-green" : "text-signal-red")}>
            {result.isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="text-sm text-ink-400 leading-relaxed">{explanation}</p>
          <div className="mt-4">
            <Button href={topicHref} size="sm" variant="outline">
              Practice 20 more on {topicTitle}
            </Button>
          </div>
        </div>
      )}

      {!result && (
        <p className="mt-3 text-xs text-ink-400">
          Or <Link href={topicHref} className="underline">jump straight to {topicTitle}</Link>.
        </p>
      )}
    </div>
  );
}
