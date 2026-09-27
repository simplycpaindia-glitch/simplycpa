import type { McqSeed } from "../types";

/**
 * A bank of additional MCQs keyed by topic slug.
 *
 * Kept separate from the topic definitions so the question bank can grow
 * without making the subject files unmanageable. The seed script matches on
 * question text, so re-seeding is idempotent and additive — existing questions
 * are left alone and only genuinely new ones are inserted.
 */
export type McqBank = Record<string, McqSeed[]>;
