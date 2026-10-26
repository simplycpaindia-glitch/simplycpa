/**
 * Checks the glossary data.
 *
 *   npm run test:glossary
 */
import { far } from "./seed-data/far";
import { aud } from "./seed-data/aud";
import { reg } from "./seed-data/reg";
import { bar } from "./seed-data/bar";
import { isc } from "./seed-data/isc";
import { tcp } from "./seed-data/tcp";
import { glossary, pickQuestions } from "../src/lib/glossary";

let failed = 0;
const fail = (msg: string) => {
  failed++;
  console.log(`FAIL  ${msg}`);
};

const topics = new Set([far, aud, reg, bar, isc, tcp].flatMap((s) => s.topics.map((t) => `${s.slug}/${t.slug}`)));
const slugs = new Set<string>();
for (const t of glossary) {
  if (slugs.has(t.slug)) fail(`${t.slug}: duplicate slug`);
  slugs.add(t.slug);
  if (!/^[a-z0-9-]+$/.test(t.slug)) fail(`${t.slug}: slug must be lowercase letters, digits and hyphens`);
  if (!topics.has(`${t.section}/${t.topic}`)) fail(`${t.slug}: unknown topic ${t.section}/${t.topic}`);
  if (t.definition.length < 80 || t.definition.length > 420) fail(`${t.slug}: definition should be one or two sentences (${t.definition.length} characters)`);
  if (t.takeaways.length < 3) fail(`${t.slug}: needs at least 3 takeaways`);
  if (t.match.length === 0) fail(`${t.slug}: needs at least one match keyword`);
}
for (const t of glossary) for (const r of t.related ?? []) if (!slugs.has(r)) fail(`${t.slug}: related term "${r}" doesn't exist`);

// Question picking prefers matches, then tops up from the topic.
const qs = [
  { question: "What is goodwill?", tags: [] as string[] },
  { question: "Something else", tags: [] },
  { question: "Another", tags: ["goodwill impairment"] },
  { question: "Fourth", tags: [] },
];
const picked = pickQuestions({ ...glossary.find((g) => g.slug === "goodwill")!, match: ["goodwill"] }, qs);
if (picked.map((q) => q.question).join("|") !== "What is goodwill?|Another|Something else") fail(`pickQuestions order: ${picked.map((q) => q.question).join("|")}`);

console.log(`${glossary.length} terms checked`);
console.log(failed ? `\n${failed} failed` : "All passed");
process.exit(failed ? 1 : 0);
