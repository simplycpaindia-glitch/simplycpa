/**
 * Adds new FAQs from the seed data to the database. Insert-only: it never changes or
 * deletes an existing FAQ (matched on the question text), so answers edited in the
 * admin screen are safe.
 *
 *   npm run faq:sync -- --dry-run     # report what would be added
 *   npm run faq:sync                  # add them
 *   npm run faq:sync -- --update      # also replace the answer of existing FAQs whose
 *                                     # answer in the seed data has changed (overwrites
 *                                     # admin edits to those answers; dry-run first)
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { faqs } from "./seed-data/faqs";

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const dryRun = process.argv.includes("--dry-run");
const update = process.argv.includes("--update");

async function main() {
  const seen = new Set<string>();
  for (const f of faqs) {
    if (seen.has(f.question)) throw new Error(`Duplicate question in the seed data: ${f.question}`);
    seen.add(f.question);
    if (!f.answer.trim() || !f.category.trim()) throw new Error(`Missing answer or category: ${f.question}`);
  }

  const rows = await prisma.fAQ.findMany({ select: { id: true, question: true, answer: true } });
  const existing = new Set(rows.map((f) => f.question));
  const toAdd = faqs.filter((f) => !existing.has(f.question));

  if (update) {
    const byQuestion = new Map(faqs.map((f) => [f.question, f]));
    const changed = rows.filter((r) => byQuestion.has(r.question) && byQuestion.get(r.question)!.answer !== r.answer);
    for (const r of changed) {
      console.log(`  ${dryRun ? "would update" : "update"}  ${r.question}`);
      if (!dryRun) await prisma.fAQ.update({ where: { id: r.id }, data: { answer: byQuestion.get(r.question)!.answer } });
    }
    console.log(`${changed.length} answer(s) ${dryRun ? "would be updated" : "updated"}.`);
  }

  const byCategory = new Map<string, number>();
  for (const f of toAdd) byCategory.set(f.category, (byCategory.get(f.category) ?? 0) + 1);
  for (const [c, n] of byCategory) console.log(`  ${dryRun ? "would add" : "add"} ${n}  ${c}`);

  if (!dryRun) for (const f of toAdd) await prisma.fAQ.create({ data: { ...f, status: "PUBLISHED" } });
  console.log(`${dryRun ? "Dry run: " : ""}${toAdd.length} FAQ(s) ${dryRun ? "would be added" : "added"}; ${existing.size} already in the database.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
