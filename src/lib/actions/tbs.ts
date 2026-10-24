"use server";

import { getSimulation } from "@/lib/tbs";
import { grade } from "@/lib/tbs/grade";
import type { GradeResult } from "@/lib/tbs/types";

/** Answers and explanations leave the server only here, after the reader submits. */
export async function gradeSimulation(input: { subject: string; slug: string; answers: string[][] }): Promise<GradeResult | null> {
  const sim = getSimulation(input.subject, input.slug);
  if (!sim || !Array.isArray(input.answers)) return null;
  const answers = sim.rows.map((row, r) =>
    row.cells.map((_, c) => {
      const v = input.answers[r]?.[c];
      return typeof v === "string" ? v.slice(0, 200) : "";
    }),
  );
  return grade(sim, answers);
}
