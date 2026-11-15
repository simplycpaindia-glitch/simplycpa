"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { estimateRelease } from "@/lib/trackers/score-release";
import { formatIsoDate, todayIst } from "@/lib/utils";

const SECTIONS = [
  { id: "FAR", kind: "core" },
  { id: "AUD", kind: "core" },
  { id: "REG", kind: "core" },
  { id: "BAR", kind: "discipline" },
  { id: "ISC", kind: "discipline" },
  { id: "TCP", kind: "discipline" },
] as const;
type SectionId = (typeof SECTIONS)[number]["id"];
type Exam = { id: string; section: SectionId; date: string };

const KEY = "simplycpa:exam-countdown";
const fmt = (iso: string) => formatIsoDate(iso, { weekday: true });
const daysBetween = (from: string, to: string) => Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000);

function save(exams: Exam[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(exams));
  } catch {
    // storage unavailable (private mode): the list still works until the page is closed
  }
}

export function ExamCountdown() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [today, setToday] = useState<string | null>(null);
  const [section, setSection] = useState<SectionId>("FAR");
  const [date, setDate] = useState("");

  useEffect(() => {
    let saved: Exam[] = [];
    try {
      const parsed = JSON.parse(localStorage.getItem(KEY) ?? "[]");
      if (Array.isArray(parsed)) saved = parsed.filter((e) => e && typeof e.date === "string" && SECTIONS.some((s) => s.id === e.section));
    } catch {
      // nothing saved, or storage unavailable
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read once after mount so server and client HTML match
    setExams(saved);
    setToday(todayIst());
  }, []);

  function add(e: React.FormEvent) {
    e.preventDefault();
    if (!date) return;
    const next = [...exams, { id: `${section}-${date}-${exams.length}-${Date.now()}`, section, date }].sort((a, b) => a.date.localeCompare(b.date));
    setExams(next);
    save(next);
    setDate("");
  }

  function remove(id: string) {
    const next = exams.filter((x) => x.id !== id);
    setExams(next);
    save(next);
  }

  const input = "rounded-md border border-ink-950/15 bg-paper-50 px-3 py-2.5 text-sm text-ink-950";

  return (
    <div>
      <form onSubmit={add} className="flex flex-wrap items-end gap-4 rounded-xl border border-gold-400/60 bg-gold-500/5 p-5">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-950">
          Section
          <select className={input} value={section} onChange={(e) => setSection(e.target.value as SectionId)}>
            {SECTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id} ({s.kind === "core" ? "Core" : "Discipline"})
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-950">
          Exam date
          <input type="date" required className={input} value={date} min="2026-07-01" max="2028-06-30" onChange={(e) => setDate(e.target.value)} />
        </label>
        <button type="submit" className="rounded-md bg-ink-950 px-4 py-2.5 text-sm font-medium text-paper-50 hover:bg-ink-800">
          Add exam
        </button>
        <p className="basis-full text-xs text-ink-400">Saved in this browser only. No account needed.</p>
      </form>

      <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite">
        {today && exams.length === 0 && (
          <p className="text-ink-400 sm:col-span-2">No exams yet. Add the section and date you are aiming for, even if it isn&apos;t booked.</p>
        )}
        {today &&
          exams.map((x) => {
            const kind = SECTIONS.find((s) => s.id === x.section)!.kind;
            const days = daysBetween(today, x.date);
            const est = estimateRelease(kind, x.date);
            return (
              <article key={x.id} className="rounded-xl border border-ink-950/10 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">{x.section}</p>
                    <p className="mt-1 text-sm text-ink-400">{fmt(x.date)}</p>
                  </div>
                  <button type="button" onClick={() => remove(x.id)} aria-label={`Remove ${x.section} on ${fmt(x.date)}`} className="rounded-md p-2 text-ink-400 hover:bg-ink-950/5 hover:text-ink-950">
                    <Trash2 className="size-4" aria-hidden />
                  </button>
                </div>
                <p className="mt-3 font-display text-4xl font-medium tabular-nums text-ink-950">
                  {days > 0 ? days : days === 0 ? "Today" : "Done"}
                  {days > 0 && <span className="ml-2 text-base font-normal text-ink-400">{days === 1 ? "day to go" : "days to go"}</span>}
                </p>
                {days > 7 && <p className="mt-1 text-sm text-ink-400">About {Math.floor(days / 7)} weeks of study time.</p>}

                <div className="mt-4 border-t border-ink-950/10 pt-4 text-sm leading-relaxed text-ink-800">
                  {est.kind === "rolling" && (
                    <p>
                      Target score release: <strong>{fmt(est.release)}</strong>, if the AICPA receives your exam file by {fmt(est.receivedBy)}
                      {est.ifLater && <>; otherwise {fmt(est.ifLater.release)}</>}.
                    </p>
                  )}
                  {est.kind === "window" && (
                    <p>
                      Target score release: <strong>{fmt(est.window.release)}</strong> (one release for the {fmt(est.window.from)} to {fmt(est.window.to)} window).
                    </p>
                  )}
                  {est.kind === "no-testing" && (
                    <p className="text-signal-red">
                      {x.section} is not tested on this date. {est.reason}
                      {est.next && <> The next window opens {fmt(est.next.from)}.</>}
                    </p>
                  )}
                  {est.kind === "out-of-range" && <p className="text-ink-400">The AICPA hasn&apos;t published a score release date for this exam date.</p>}
                </div>
                {days > 0 && (
                  <Link href="/study-planner" className="mt-3 inline-block text-sm font-medium text-gold-700 underline underline-offset-2">
                    Build a study plan to this date
                  </Link>
                )}
              </article>
            );
          })}
      </div>
    </div>
  );
}
