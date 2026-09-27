/**
 * Checks the long-form topic content against the abbreviation convention: the first
 * time a short form (e.g. "OCI") appears on a page, it must be written as
 * "Full Form (OCI)". The study page and the revision sheet are checked separately.
 *
 *   npx tsx prisma/check-abbreviations.ts [subject]
 */
import { contentBySubject } from "./seed-data/content";
import { far } from "./seed-data/far";
import { aud } from "./seed-data/aud";
import { reg } from "./seed-data/reg";
import { bar } from "./seed-data/bar";
import { isc } from "./seed-data/isc";
import { tcp } from "./seed-data/tcp";

// Tokens that look like abbreviations but aren't, or that need no expansion.
const IGNORE = new Set([
  "US", "USA", "I", "II", "III", "IV", "V", "VI", "VII", "A", "B", "C", "D", "E", "F", "N", "X",
  "OK", "TIP", "EXAM", "EXAMPLE", "IMPORTANT", "COMMON", "TRAP", "NOTE", "WARNING", "KEY", "RULE",
  "AND", "OR", "NOT", "THE", "IF", "THEN", "ELSE", "NO", "YES", "ALL", "ANY", "EXCEPT", "ONLY",
  "COMING", "CHANGE", "NEW", "UPDATE", "REMEMBER", "WATCH", "OUT",
  "EE", // Series EE savings bonds — a product name, not an abbreviation
  "NEC", "MISC", "EZ", "PF", // parts of form names (Form 1099-NEC, 990-EZ, 990-PF)
  "MITRE", "ATT&CK", // proper names (the MITRE ATT&CK knowledge base)
  // Structured query language keywords shown in examples
  "SELECT", "FROM", "WHERE", "JOIN", "ON", "GROUP", "BY", "HAVING", "ORDER", "SUM", "COUNT", "AVG", "DESC", "ASC",
]);

// Matches short forms such as "OCI", "PP&E", "ASUs", and hyphenated ones such as "AU-C".
const abbreviationPattern = /\b([A-Z][A-Z0-9&]*[A-Z0-9](?:-[A-Z]+)?(?:s)?)\b/g;

function check(label: string, html: string): string[] {
  const text = html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&");
  const seen = new Set<string>();
  const problems: string[] = [];
  // Words of a memory aid — written in quotes ("MY LEGS") or after "memory aid:" — are not
  // abbreviations of anything, so they are exempt.
  for (const m of text.matchAll(/(?:[Mm]emory aid:?\s*|["“])((?:[A-Z]{2,}[\s-]?)+)/g)) {
    m[1].split(/[\s-]+/).filter(Boolean).forEach((word) => seen.add(word));
  }
  for (const match of text.matchAll(abbreviationPattern)) {
    let token = match[1];
    // Treat plurals such as "ASUs" as the base form.
    if (/[A-Z]s$/.test(token)) token = token.slice(0, -1);
    if (IGNORE.has(token) || token.length < 2 || /^\d/.test(token)) continue;
    if (seen.has(token)) continue;
    seen.add(token);
    const before = text.slice(Math.max(0, match.index! - 1), match.index!);
    const after = text.slice(match.index! + match[1].length, match.index! + match[1].length + 1);
    // Multi-word short forms such as "(PCI DSS)" count as introduced when the whole
    // bracketed group is short-form words.
    const groupStart = text.lastIndexOf("(", match.index!);
    const groupEnd = text.indexOf(")", match.index!);
    const group = groupStart >= 0 && groupEnd > match.index! ? text.slice(groupStart + 1, groupEnd) : "";
    const inShortFormGroup = group !== "" && /^[A-Z&]{2,}(?: [A-Z&]{2,})+$/.test(group.trim());
    const introduced = inShortFormGroup || (before === "(" && (after === ")" || after === "," || after === ";"));
    // A mnemonic is allowed when written in quotes ("PUFI") or introduced as "memory aid: PUFI".
    const quoted = /["“]$/.test(before) && /["”]/.test(after);
    const mnemonic = quoted || /memory aid:?\s*$/i.test(text.slice(Math.max(0, match.index! - 20), match.index!));
    if (!introduced && !mnemonic) {
      const context = text.slice(Math.max(0, match.index! - 40), match.index! + token.length + 20).replace(/\s+/g, " ");
      problems.push(`${label}: "${token}" first used without expansion … ${context} …`);
    }
  }
  return problems;
}

const only = process.argv[2];
let total = 0;
for (const [subject, topics] of Object.entries(contentBySubject)) {
  if (only && subject !== only) continue;
  for (const [slug, content] of Object.entries(topics)) {
    const problems = [...check(`${subject}/${slug} study`, content.study), ...check(`${subject}/${slug} revision`, content.revision)];
    problems.forEach((p) => console.log(p));
    total += problems.length;
  }
}
// Titles and descriptions shown in lists are checked too — each field on its own.
for (const subject of [far, aud, reg, bar, isc, tcp]) {
  if (only && subject.slug !== only) continue;
  const fields: [string, string][] = [[`${subject.slug} description`, subject.description]];
  for (const t of subject.topics) {
    fields.push([`${subject.slug}/${t.slug} title`, t.title], [`${subject.slug}/${t.slug} shortDescription`, t.shortDescription]);
  }
  for (const [label, value] of fields) {
    const problems = check(label, value);
    problems.forEach((p) => console.log(p));
    total += problems.length;
  }
}
console.log(total === 0 ? "All abbreviations are introduced correctly." : `\n${total} problem(s).`);
process.exitCode = total === 0 ? 0 : 1;
