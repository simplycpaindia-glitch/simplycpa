"use server";

import { getSimulation } from "@/lib/tbs";
import { grade } from "@/lib/tbs/grade";
import type { GradeResult } from "@/lib/tbs/types";
import { submitMcqBatch } from "@/lib/actions/mcq";

/**
 * Grades a whole full-length mock in one round trip. Multiple-choice answers go through the
 * same grading as other practice (and are saved for signed-in readers, so mistakes reach the
 * mistake book); simulations are graded on the server, so no answers reach the browser first.
 */
export async function gradeFullMock(input: {
  subjectId: string;
  subject: string;
  mcqAnswers: { mcqId: string; selectedOptionId: string | null }[];
  simAnswers: { slug: string; answers: string[][] }[];
}): Promise<{ mcq: Awaited<ReturnType<typeof submitMcqBatch>>; sims: { slug: string; result: GradeResult }[] }> {
  const mcqAnswers = (input.mcqAnswers ?? []).slice(0, 120);
  const mcq = await submitMcqBatch({ subjectId: input.subjectId, mode: "CUSTOM", answers: mcqAnswers });

  const sims = (input.simAnswers ?? []).slice(0, 12).flatMap(({ slug, answers }) => {
    const sim = getSimulation(input.subject, slug);
    if (!sim || !Array.isArray(answers)) return [];
    const clean = sim.rows.map((row, r) =>
      row.cells.map((_, c) => {
        const v = answers[r]?.[c];
        return typeof v === "string" ? v.slice(0, 200) : "";
      }),
    );
    const result = grade(sim, clean);
    // The grader reads a blank cell as 0 (so journal entries can leave one side empty). In a
    // timed exam that would give credit for simulations never opened, so an untouched
    // simulation scores nothing.
    const untouched = clean.every((r) => r.every((v) => v.trim() === ""));
    if (untouched) {
      return [{ slug, result: { ...result, correct: 0, rows: result.rows.map((r) => ({ ...r, correct: false, cells: r.cells.map((c) => ({ ...c, correct: false })) })) } }];
    }
    return [{ slug, result }];
  });

  return { mcq, sims };
}
