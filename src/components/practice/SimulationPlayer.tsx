"use client";

import { useState, useSyncExternalStore, useTransition } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { gradeSimulation } from "@/lib/actions/tbs";
import type { GradeResult, PublicCell, PublicSimulation } from "@/lib/tbs/types";

const bestKey = (sim: PublicSimulation) => `tbs-best:${sim.subject}/${sim.slug}`;

// The best score is a per-browser convenience; storage may be unavailable.
function readBest(key: string): number | null {
  try {
    const v = localStorage.getItem(key);
    return v === null ? null : Number(v);
  } catch {
    return null;
  }
}
const subscribeStorage = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
};

export function SimulationPlayer({ sim }: { sim: PublicSimulation }) {
  const empty = () => sim.rows.map((r) => r.cells.map(() => ""));
  const [answers, setAnswers] = useState<string[][]>(empty);
  const [result, setResult] = useState<GradeResult | null>(null);
  const storedBest = useSyncExternalStore(subscribeStorage, () => readBest(bestKey(sim)), () => null);
  const [sessionBest, setSessionBest] = useState<number | null>(null);
  const best = storedBest === null ? sessionBest : Math.max(storedBest, sessionBest ?? 0);
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const set = (r: number, c: number, v: string) =>
    setAnswers((prev) => prev.map((row, i) => (i === r ? row.map((x, j) => (j === c ? v : x)) : row)));

  const submit = () =>
    startTransition(async () => {
      setError(false);
      const res = await gradeSimulation({ subject: sim.subject, slug: sim.slug, answers }).catch(() => null);
      if (!res) return setError(true);
      setResult(res);
      if (best === null || res.correct > best) {
        setSessionBest(res.correct);
        try {
          localStorage.setItem(bestKey(sim), String(res.correct));
        } catch {}
      }
    });

  const retry = () => {
    setAnswers(empty());
    setResult(null);
  };

  const stacked = sim.columns.length === 2;
  const filled = answers.filter((row) => row.some((v) => v.trim() !== "")).length;

  const control = (cell: PublicCell, r: number, c: number, label: string) => {
    const value = answers[r][c];
    const graded = result?.rows[r].cells[c];
    const ring = graded ? (graded.correct ? "border-signal-green/60 bg-signal-green/5" : "border-signal-red/60 bg-signal-red/5") : "border-ink-950/20";
    const common = cn("w-full rounded-md border bg-paper-50 px-2.5 py-2 text-sm text-ink-950 disabled:opacity-100", ring);
    const aria = `${label} — ${sim.columns[c + 1]}`;
    if (cell.kind === "select") {
      return (
        <select aria-label={aria} className={common} value={value} disabled={!!result} onChange={(e) => set(r, c, e.target.value)}>
          <option value="">Select…</option>
          {cell.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        aria-label={aria}
        className={cn(common, cell.kind === "number" && "text-right tabular-nums")}
        inputMode={cell.kind === "number" ? "decimal" : "text"}
        placeholder={cell.kind === "research" ? (sim.subject === "far" ? "e.g. 606-10-25-1" : "e.g. AU-C 500") : undefined}
        value={value}
        disabled={!!result}
        onChange={(e) => set(r, c, e.target.value)}
      />
    );
  };

  const expected = (r: number, c: number) => {
    const g = result?.rows[r].cells[c];
    return g && !g.correct ? <span className="mt-1 block text-xs text-signal-green">Answer: {g.expected}</span> : null;
  };

  const explanation = (r: number) =>
    result && (
      <p className="mt-2 flex gap-2 text-sm leading-relaxed text-ink-800">
        {result.rows[r].correct ? (
          <Check className="mt-0.5 size-4 shrink-0 text-signal-green" aria-label="Correct" />
        ) : (
          <X className="mt-0.5 size-4 shrink-0 text-signal-red" aria-label="Incorrect" />
        )}
        <span>{result.rows[r].explanation}</span>
      </p>
    );

  return (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-ink-800">{sim.instructions}</p>

      {stacked ? (
        <ol className="flex flex-col gap-3">
          {sim.rows.map((row, r) => (
            <li key={r} className="rounded-lg border border-ink-950/10 bg-paper-50 p-4">
              <p className="mb-2 text-sm font-medium text-ink-950">
                {r + 1}. {row.label}
              </p>
              {control(row.cells[0], r, 0, row.label)}
              {expected(r, 0)}
              {explanation(r)}
            </li>
          ))}
        </ol>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-ink-950/10">
          <table className="w-full min-w-[34rem] text-sm">
            <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
              <tr>
                {sim.columns.map((h, i) => (
                  <th key={h} scope="col" className={cn("px-3 py-2.5", i > 0 && "min-w-[8.5rem]")}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-950/10">
              {sim.rows.map((row, r) => (
                <tr key={r} className="align-top">
                  <th scope="row" className="px-3 py-2.5 text-left font-medium text-ink-950">
                    {row.label}
                    {explanation(r)}
                  </th>
                  {row.cells.map((cell, c) => (
                    <td key={c} className="px-3 py-2.5">
                      {control(cell, r, c, row.label)}
                      {expected(r, c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div aria-live="polite" className="mt-5">
        {result ? (
          <div className="rounded-lg border border-ink-950/10 bg-paper-100 p-4">
            <p className="font-display text-lg font-medium text-ink-950">
              {result.correct} of {result.total} right
              {best !== null && best > result.correct && <span className="ml-2 text-sm font-normal text-ink-400">Your best: {best}</span>}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-800">
              <span className="font-medium">Key point:</span> {result.takeaway}
            </p>
            <Button variant="outline" size="sm" className="mt-4" onClick={retry}>
              <RotateCcw className="size-4" /> Try again
            </Button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" onClick={submit} disabled={isPending}>
              {isPending ? "Checking…" : "Check answers"}
            </Button>
            <span className="text-xs text-ink-400">
              {filled} of {sim.rows.length} rows started{best !== null && ` · Your best: ${best} of ${sim.rows.length}`}
            </span>
            {error && <span className="text-sm text-signal-red">Couldn&apos;t check your answers. Please try again.</span>}
          </div>
        )}
      </div>
    </div>
  );
}
