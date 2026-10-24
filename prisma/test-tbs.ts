/**
 * Checks the task-based simulation data and grader.
 *
 *   npm run test:tbs
 */
import { far } from "./seed-data/far";
import { aud } from "./seed-data/aud";
import { farSimulations } from "../src/lib/tbs/data/far";
import { audSimulations } from "../src/lib/tbs/data/aud";
import { cellCorrect, grade, parseAmount, referenceMatches, toPublic } from "../src/lib/tbs/grade";
import type { Cell, Simulation } from "../src/lib/tbs/types";

let failed = 0;
function eq(name: string, actual: unknown, expected: unknown) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failed++;
  if (!ok) console.log(`FAIL  ${name}\n      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

// ── Grader ──
eq("parse $ and commas", parseAmount("$1,250"), 1250);
eq("parse parentheses as negative", parseAmount("(300)"), -300);
eq("parse minus", parseAmount("-10,000"), -10000);
eq("blank is 0", parseAmount("  "), 0);
eq("junk is null", parseAmount("abc"), null);
eq("ASC prefix and leading zero", referenceMatches("ASC 606-10-25-01", "606-10-25-1"), true);
eq("spaces as separators", referenceMatches("855 10 25 3", "855-10-25-3"), true);
eq("dots as separators", referenceMatches("855.10.25.3", "855-10-25-3"), true);
eq("wrong paragraph", referenceMatches("606-10-25-2", "606-10-25-1"), false);
eq("missing paragraph", referenceMatches("606-10-25", "606-10-25-1"), false);
eq("AU-C section with paragraph", referenceMatches("AU-C 570.10", "AU-C 570"), true);
eq("AU-C without hyphen", referenceMatches("auc 570", "AU-C 570"), true);
eq("AU-C wrong section", referenceMatches("AU-C 57", "AU-C 570"), false);
eq("AU-C vs AR-C", referenceMatches("AR-C 570", "AU-C 570"), false);
eq("number within tolerance", cellCorrect({ kind: "number", answer: 3.73, tolerance: 0.01 }, "3.734"), true);
eq("number outside tolerance", cellCorrect({ kind: "number", answer: 100 }, "101"), false);

// ── Data ──
const topicsBySubject: Record<string, Set<string>> = {
  far: new Set(far.topics.map((t) => t.slug)),
  aud: new Set(aud.topics.map((t) => t.slug)),
};

function answerFor(cell: Cell): string {
  if (cell.kind === "number") return String(cell.answer);
  return cell.answer;
}

function checkSubject(subject: "far" | "aud", sims: Simulation[]) {
  if (sims.length === 0) return;
  const slugs = new Set<string>();
  const perTopic = new Map<string, number>();
  for (const s of sims) {
    const where = `${subject}/${s.slug}`;
    if (s.subject !== subject) eq(`${where} subject`, s.subject, subject);
    if (slugs.has(s.slug)) eq(`${where} slug is unique`, false, true);
    slugs.add(s.slug);
    if (!topicsBySubject[subject].has(s.topic)) eq(`${where} topic exists`, s.topic, "a real topic slug");
    perTopic.set(s.topic, (perTopic.get(s.topic) ?? 0) + 1);
    s.rows.forEach((r, i) => {
      if (r.cells.length !== s.columns.length - 1) eq(`${where} row ${i + 1} cell count`, r.cells.length, s.columns.length - 1);
      r.cells.forEach((c) => {
        if (c.kind === "select" && !c.options.includes(c.answer)) eq(`${where} row ${i + 1} answer is an option`, c.answer, c.options);
      });
      if (!r.explanation.trim()) eq(`${where} row ${i + 1} has an explanation`, false, true);
    });
    if (s.format === "journal-entry") {
      const debits = s.rows.reduce((t, r) => t + (r.cells[0].kind === "number" ? r.cells[0].answer : 0), 0);
      const credits = s.rows.reduce((t, r) => t + (r.cells[1].kind === "number" ? r.cells[1].answer : 0), 0);
      eq(`${where} debits equal credits`, debits, credits);
    }
    const full = grade(s, s.rows.map((r) => r.cells.map(answerFor)));
    eq(`${where} correct answers score full marks`, full.correct, s.rows.length);
    const blank = grade(s, []);
    if (blank.correct === s.rows.length) eq(`${where} blank answers don't score full marks`, blank.correct < s.rows.length, true);
    const pub = JSON.stringify(toPublic(s));
    if (pub.includes(s.takeaway) || s.rows.some((r) => pub.includes(r.explanation))) eq(`${where} public data hides explanations`, false, true);
  }
  for (const t of topicsBySubject[subject]) eq(`${subject}/${t} has 2 simulations`, perTopic.get(t) ?? 0, 2);
  console.log(`${subject}: ${sims.length} simulations, ${sims.reduce((n, s) => n + s.rows.length, 0)} answer rows checked`);
}

checkSubject("far", farSimulations);
checkSubject("aud", audSimulations);

console.log(failed ? `\n${failed} failed` : "\nAll passed");
process.exit(failed ? 1 : 0);
