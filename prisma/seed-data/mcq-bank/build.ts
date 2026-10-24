import type { McqSeed } from "../types";

const LABELS = ["A", "B", "C", "D"] as const;

/**
 * Compact builder for bank questions: options are [text, rationale] pairs in
 * A–D order, and `correct` is the index of the right one.
 */
export function mcq(
  question: string,
  options: [string, string][],
  correct: 0 | 1 | 2 | 3,
  explanation: string,
  difficulty: McqSeed["difficulty"],
  questionType: McqSeed["questionType"],
  tags: string[] = [],
): McqSeed {
  return {
    question,
    options: options.map(([text, rationale], i) => ({ label: LABELS[i], text, isCorrect: i === correct, rationale })),
    explanation,
    difficulty,
    questionType,
    tags,
  };
}
