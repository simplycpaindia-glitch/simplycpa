/**
 * Adds new FAQs from the seed data to the database. Insert-only: it never changes or
 * deletes an existing FAQ (matched on the question text), so answers edited in the
 * admin screen are safe.
 *
 *   npm run faq:sync -- --dry-run     # report what would be added
 *   npm run faq:sync                  # add them
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { faqs } from "./seed-data/faqs";

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const dryRun = process.argv.includes("--dry-run");

async function main() {
  const seen = new Set<string>();
  for (const f of faqs) {
    if (seen.has(f.question)) throw new Error(`Duplicate question in the seed data: ${f.question}`);
    seen.add(f.question);
    if (!f.answer.trim() || !f.category.trim()) throw new Error(`Missing answer or category: ${f.question}`);
  }

  const existing = new Set((await prisma.fAQ.findMany({ select: { question: true } })).map((f) => f.question));
  const toAdd = faqs.filter((f) => !existing.has(f.question));

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
