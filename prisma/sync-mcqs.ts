/**
 * Adds new questions from the seed data and question bank to existing topics.
 * Unlike db:seed it only inserts: it never deletes questions, never changes
 * existing ones and never touches study material or revision notes.
 *
 *   npm run mcq:sync -- bar isc            # apply, for the named subjects
 *   npm run mcq:sync -- bar --dry-run      # report what would be added
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import type { SubjectSeed } from "./seed-data/types";
import { far } from "./seed-data/far";
import { aud } from "./seed-data/aud";
import { reg } from "./seed-data/reg";
import { bar } from "./seed-data/bar";
import { isc } from "./seed-data/isc";
import { tcp } from "./seed-data/tcp";
import { mcqBank } from "./seed-data/mcq-bank";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const only = new Set(args.filter((a) => !a.startsWith("--")));
const subjects = [far, aud, reg, bar, isc, tcp].filter((s: SubjectSeed) => only.size === 0 || only.has(s.slug));

async function main() {
  if (only.size === 0) throw new Error("Name at least one subject, e.g. npm run mcq:sync -- bar --dry-run");
  let added = 0;
  for (const subjectSeed of subjects) {
    const subject = await prisma.subject.findUnique({ where: { slug: subjectSeed.slug }, select: { id: true } });
    if (!subject) throw new Error(`Subject ${subjectSeed.slug} is not in the database; run db:seed first.`);
    let subjectAdded = 0;
    for (const topicSeed of subjectSeed.topics) {
      const all = [...(topicSeed.mcqs ?? []), ...(mcqBank[topicSeed.slug] ?? [])];
      if (all.length === 0) continue;
      const topic = await prisma.topic.findUnique({
        where: { subjectId_slug: { subjectId: subject.id, slug: topicSeed.slug } },
        select: { id: true, mcqs: { select: { question: true } } },
      });
      if (!topic) {
        console.log(`  skip  ${topicSeed.slug}: topic not in the database`);
        continue;
      }
      const existing = new Set(topic.mcqs.map((m) => m.question.trim()));
      const fresh = all.filter((m) => !existing.has(m.question.trim()));
      if (fresh.length === 0) continue;
      console.log(`  ${dryRun ? "would add" : "add"} ${fresh.length}  ${subjectSeed.slug}/${topicSeed.slug}`);
      if (!dryRun) {
        for (const m of fresh) {
          await prisma.mCQ.create({
            data: {
              topicId: topic.id,
              question: m.question,
              explanation: m.explanation,
              learningObjective: m.learningObjective,
              difficulty: m.difficulty,
              questionType: m.questionType,
              tags: m.tags ?? [],
              status: "PUBLISHED",
              options: { create: m.options },
            },
          });
        }
      }
      subjectAdded += fresh.length;
    }
    console.log(`${subjectSeed.shortName}: ${subjectAdded} ${dryRun ? "to add" : "added"}`);
    added += subjectAdded;
  }
  console.log(dryRun ? `\nDry run: ${added} question(s) would be added.` : `\nAdded ${added} question(s).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
