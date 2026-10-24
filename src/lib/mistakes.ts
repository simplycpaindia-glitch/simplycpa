/**
 * Mistake book — spaced re-attempts of questions the reader got wrong (pure logic).
 *
 * A wrong answer puts a question in the book, due 1 day later. Each correct answer given
 * on or after its due day moves it to the next interval (3 days, then 7). After three
 * spaced correct answers it's cleared. A wrong answer at any point starts it over.
 * Correct answers before the due day don't count, so the spacing is real.
 * Days are India-time calendar days.
 */
import { addDays, istDate } from "@/lib/qotd";

export const INTERVALS = [1, 3, 7] as const;

export type Attempt = { isCorrect: boolean; attemptedAt: Date };
export type MistakeStatus =
  | { inBook: false }
  | { inBook: true; cleared: true; stage: number }
  | { inBook: true; cleared: false; stage: number; dueDate: string };

/** `attempts` for one question, in any order. */
export function mistakeStatus(attempts: Attempt[]): MistakeStatus {
  const sorted = [...attempts].sort((a, b) => a.attemptedAt.getTime() - b.attemptedAt.getTime());
  let lastWrong = -1;
  sorted.forEach((a, i) => {
    if (!a.isCorrect) lastWrong = i;
  });
  if (lastWrong < 0) return { inBook: false };

  let stage = 0;
  let refDay = istDate(sorted[lastWrong].attemptedAt);
  for (const a of sorted.slice(lastWrong + 1)) {
    if (stage >= INTERVALS.length) break;
    const due = addDays(refDay, INTERVALS[stage]);
    if (istDate(a.attemptedAt) >= due) {
      stage++;
      refDay = istDate(a.attemptedAt);
    }
  }
  if (stage >= INTERVALS.length) return { inBook: true, cleared: true, stage };
  return { inBook: true, cleared: false, stage, dueDate: addDays(refDay, INTERVALS[stage]) };
}
