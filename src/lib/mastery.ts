/**
 * Topic progress states (Khan Academy-style mastery), derived from what the reader has
 * actually done — no extra tables:
 *   Not started → Studied (marked studied) → Revised (marked revised) → Mastered
 *   (at least MASTERY_THRESHOLD of the topic's published MCQs correct on the latest attempt).
 * Pure functions, so they can be tested without a database.
 */
export const MASTERY_THRESHOLD = 0.8;

export type TopicProgress = {
  studied: boolean;
  revised: boolean;
  /** MCQs whose most recent attempt was correct. */
  mcqCorrect: number;
  /** MCQs attempted at least once. */
  mcqAttempted: number;
  mcqTotal: number;
  mastered: boolean;
  state: "not-started" | "studied" | "revised" | "mastered";
};

export type AttemptRow = { mcqId: string; topicId: string; isCorrect: boolean; attemptedAt: Date };

/** Latest attempt per MCQ, grouped by topic. */
export function latestByTopic(attempts: AttemptRow[]) {
  const latest = new Map<string, AttemptRow>();
  for (const a of attempts) {
    const prev = latest.get(a.mcqId);
    if (!prev || a.attemptedAt > prev.attemptedAt) latest.set(a.mcqId, a);
  }
  const byTopic = new Map<string, { correct: number; attempted: number }>();
  for (const a of latest.values()) {
    const t = byTopic.get(a.topicId) ?? { correct: 0, attempted: 0 };
    t.attempted++;
    if (a.isCorrect) t.correct++;
    byTopic.set(a.topicId, t);
  }
  return byTopic;
}

export function topicProgress(input: {
  studied: boolean;
  revised: boolean;
  mcqTotal: number;
  latest?: { correct: number; attempted: number };
}): TopicProgress {
  const correct = input.latest?.correct ?? 0;
  const attempted = input.latest?.attempted ?? 0;
  const mastered = input.mcqTotal > 0 && correct / input.mcqTotal >= MASTERY_THRESHOLD;
  const state = mastered ? "mastered" : input.revised ? "revised" : input.studied || attempted > 0 ? "studied" : "not-started";
  return { studied: input.studied, revised: input.revised, mcqCorrect: correct, mcqAttempted: attempted, mcqTotal: input.mcqTotal, mastered, state };
}

export const STATE_LABEL: Record<TopicProgress["state"], string> = {
  "not-started": "Not started",
  studied: "Studied",
  revised: "Revised",
  mastered: "Mastered",
};
