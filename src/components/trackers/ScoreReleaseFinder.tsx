"use client";

import { useState } from "react";
import { estimateRelease } from "@/lib/trackers/score-release";
import { formatIsoDate } from "@/lib/utils";

const SECTIONS = [
  { id: "AUD", kind: "core" },
  { id: "FAR", kind: "core" },
  { id: "REG", kind: "core" },
  { id: "BAR", kind: "discipline" },
  { id: "ISC", kind: "discipline" },
  { id: "TCP", kind: "discipline" },
] as const;

const fmt = (iso: string) => formatIsoDate(iso, { weekday: true });

export function ScoreReleaseFinder() {
  const [section, setSection] = useState<(typeof SECTIONS)[number]["id"]>("FAR");
  const [date, setDate] = useState("");
  const kind = SECTIONS.find((s) => s.id === section)!.kind;
  const result = date ? estimateRelease(kind, date) : null;

  return (
    <div className="rounded-xl border border-gold-400/60 bg-gold-500/5 p-5">
      <p className="font-semibold text-ink-950">When will I get my score?</p>
      <div className="mt-4 flex flex-wrap items-end gap-4">
        <label className="flex flex-col gap-1 text-sm text-ink-800">
          Section
          <select
            value={section}
            onChange={(e) => setSection(e.target.value as typeof section)}
            className="rounded-md border border-ink-950/15 bg-paper-50 px-3 py-2 text-ink-950"
          >
            {SECTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id} ({s.kind === "core" ? "Core" : "Discipline"})
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm text-ink-800">
          Test date
          <input
            type="date"
            value={date}
            min="2026-07-01"
            max="2028-06-30"
            onChange={(e) => setDate(e.target.value)}
            className="rounded-md border border-ink-950/15 bg-paper-50 px-3 py-2 text-ink-950"
          />
        </label>
      </div>

      <div className="mt-4 text-sm text-ink-800" aria-live="polite">
        {!result && <p className="text-ink-400">Pick your section and test date to see the AICPA&apos;s target date.</p>}

        {result?.kind === "rolling" && (
          <>
            <p className="text-base">
              Target score release: <strong className="text-ink-950">{fmt(result.release)}</strong>
            </p>
            <p className="mt-1">
              That&apos;s if the AICPA receives your exam file from Prometric by {formatIsoDate(result.receivedBy)}.
              {result.ifLater ? (
                <>
                  {" "}Your file can reach the AICPA after your test date; if it arrives later than that, the target is{" "}
                  <strong className="text-ink-950">{fmt(result.ifLater.release)}</strong>.
                </>
              ) : (
                <> If it arrives later, the next release falls under the new schedule from July 2027.</>
              )}
            </p>
          </>
        )}

        {result?.kind === "window" && (
          <>
            <p className="text-base">
              Target score release: <strong className="text-ink-950">{fmt(result.window.release)}</strong>
            </p>
            <p className="mt-1">
              For testing between {formatIsoDate(result.window.from)} and {formatIsoDate(result.window.to)}.
            </p>
          </>
        )}

        {result?.kind === "no-testing" && (
          <p>
            {result.reason}
            {result.next && (
              <>
                {" "}The next testing window runs {formatIsoDate(result.next.from)} to {formatIsoDate(result.next.to)}, with a
                target release of <strong className="text-ink-950">{fmt(result.next.release)}</strong>.
              </>
            )}
          </p>
        )}

        {result?.kind === "out-of-range" && (
          <p>The AICPA hasn&apos;t published a target for that date. The schedule below runs from July 2026 to June 2028.</p>
        )}

        {result && result.kind !== "out-of-range" && (
          <p className="mt-3 text-xs text-ink-400">
            Target dates from the AICPA, which can change. Some state boards take a day or more longer to post scores.
          </p>
        )}
      </div>
    </div>
  );
}
