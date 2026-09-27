/**
 * Structural checks on the MCQ bank. Run before seeding — a malformed question
 * is far cheaper to catch here than after it reaches students.
 *
 *   npm run mcq:validate
 */
import { mcqBank } from "./seed-data/mcq-bank";
import { far } from "./seed-data/far";
import { aud } from "./seed-data/aud";
import { reg } from "./seed-data/reg";
import { bar } from "./seed-data/bar";
import { isc } from "./seed-data/isc";
import { tcp } from "./seed-data/tcp";
import type { SubjectSeed } from "./seed-data/types";

const subjects: SubjectSeed[] = [far, aud, reg, bar, isc, tcp];

const knownSlugs = new Set(subjects.flatMap((s) => s.topics.map((t) => t.slug)));
const errors: string[] = [];
const warnings: string[] = [];

// Question text must be unique across the whole bank, not just within a topic:
// the seed script dedupes on question text per topic, so a question repeated
// across two topics would silently appear twice to a student practising both.
const seenQuestions = new Map<string, string>();

let total = 0;

for (const [slug, questions] of Object.entries(mcqBank)) {
  if (!knownSlugs.has(slug)) {
    errors.push(`Unknown topic slug "${slug}" — no topic with that slug exists, so these ${questions.length} questions would never be seeded.`);
    continue;
  }

  questions.forEach((q, i) => {
    total++;
    const where = `${slug}[${i}]`;

    if (q.options.length !== 4) {
      errors.push(`${where}: has ${q.options.length} options, expected 4.`);
    }

    const correct = q.options.filter((o) => o.isCorrect);
    if (correct.length !== 1) {
      errors.push(`${where}: has ${correct.length} correct options, expected exactly 1.`);
    }

    const labels = q.options.map((o) => o.label);
    if (new Set(labels).size !== labels.length) {
      errors.push(`${where}: duplicate option labels (${labels.join(", ")}).`);
    }

    const optionTexts = q.options.map((o) => o.text.trim().toLowerCase());
    if (new Set(optionTexts).size !== optionTexts.length) {
      errors.push(`${where}: two options have identical text.`);
    }

    const previous = seenQuestions.get(q.question.trim().toLowerCase());
    if (previous) {
      errors.push(`${where}: question text duplicates ${previous}.`);
    } else {
      seenQuestions.set(q.question.trim().toLowerCase(), where);
    }

    if (!q.explanation || q.explanation.trim().length < 80) {
      warnings.push(`${where}: explanation is short — students need the reasoning, not just the answer.`);
    }

    const missingRationale = q.options.filter((o) => !o.rationale?.trim()).length;
    if (missingRationale > 0) {
      warnings.push(`${where}: ${missingRationale} option(s) missing a rationale.`);
    }
  });
}

// Near-duplicates: two questions in the same topic that open identically are
// usually testing the same concept twice, which the content brief rules out.
// This compares bank questions against the inline ones too, since a student
// practising a topic sees both together.
const openings = new Map<string, string[]>();
for (const subject of subjects) {
  for (const topic of subject.topics) {
    const combined = [...(topic.mcqs ?? []), ...(mcqBank[topic.slug] ?? [])];
    for (const q of combined) {
      const key = `${topic.slug}::${q.question.trim().slice(0, 40).toLowerCase()}`;
      openings.set(key, [...(openings.get(key) ?? []), q.question]);
    }
  }
}
for (const [key, questions] of openings) {
  if (questions.length < 2) continue;
  warnings.push(
    `${key.split("::")[0]}: ${questions.length} questions open identically — likely testing the same concept twice:\n${questions.map((q) => `          - ${q.slice(0, 100)}`).join("\n")}`,
  );
}

// Coverage: which topics still have no bank questions at all.
const covered = new Set(Object.keys(mcqBank));
for (const subject of subjects) {
  const uncovered = subject.topics.filter((t) => !t.isComingSoon && !covered.has(t.slug));
  if (uncovered.length) {
    warnings.push(`${subject.shortName}: ${uncovered.length} of ${subject.topics.length} topics have no bank questions yet (${uncovered.map((t) => t.slug).join(", ")}).`);
  }
}

console.log(`Bank: ${total} questions across ${covered.size} topics.\n`);

for (const w of warnings) console.log(`  warn  ${w}`);
for (const e of errors) console.error(`  ERROR ${e}`);

if (errors.length) {
  console.error(`\n${errors.length} error(s). Fix before seeding.`);
  process.exit(1);
}
console.log(`\nNo structural errors.${warnings.length ? ` ${warnings.length} warning(s) above.` : ""}`);
