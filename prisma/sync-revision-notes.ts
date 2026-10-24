/**
 * Brings quick sheets (revision notes) in the database in line with the content files in
 * prisma/seed-data/content, one subject at a time. The old text is saved as a
 * ContentVersion first, so any change can be undone from the admin history.
 *
 *   npm run content:sync-revision -- far --dry-run   # report, write nothing
 *   npm run content:sync-revision -- far             # apply
 *   npm run content:sync-revision -- far --force     # also overwrite sheets edited in the admin
 *
 * Safety: a sheet is updated without --force only if the database copy matches the file
 * apart from the "Exam traps" section — so edits made in the admin are never silently lost.
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { contentBySubject } from "./seed-data/content";

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const subjects = args.filter((a) => !a.startsWith("--"));

const TRAPS = /\s*<h3>Exam traps<\/h3>\s*<ul>[\s\S]*?<\/ul>/;
const norm = (s: string) => s.replace("<h3>Exam traps</h3>", "<h3>Traps</h3>").replace(/\s+/g, " ").trim();
/** True when the only difference is the traps section being added or renamed. */
const onlyTrapsChanged = (file: string, db: string) =>
  norm(file) === norm(db) || norm(file.replace(TRAPS, "")) === norm(db);

async function main() {
  if (subjects.length === 0) throw new Error("Name at least one subject, e.g. far");
  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" }, select: { id: true } });
  let updated = 0;
  let unchanged = 0;
  let skipped = 0;

  for (const subjectSlug of subjects) {
    const files = contentBySubject[subjectSlug];
    if (!files) throw new Error(`No content for subject "${subjectSlug}"`);
    for (const [topicSlug, content] of Object.entries(files)) {
      const topic = await prisma.topic.findFirst({
        where: { slug: topicSlug, subject: { slug: subjectSlug } },
        select: { id: true, revisionNote: { select: { id: true, content: true } } },
      });
      if (!topic?.revisionNote) {
        console.log(`missing  ${subjectSlug}/${topicSlug} (no topic or no sheet in the database)`);
        skipped++;
        continue;
      }
      const db = topic.revisionNote.content;
      if (db === content.revision) {
        unchanged++;
        continue;
      }
      if (!force && !onlyTrapsChanged(content.revision, db)) {
        console.log(`SKIP     ${subjectSlug}/${topicSlug} — the database copy has other edits; review, then rerun with --force`);
        skipped++;
        continue;
      }
      console.log(`${dryRun ? "would update" : "update"}  ${subjectSlug}/${topicSlug}`);
      updated++;
      if (dryRun) continue;
      await prisma.$transaction([
        prisma.contentVersion.create({
          data: {
            contentType: "REVISION_NOTE",
            contentId: topic.revisionNote.id,
            content: db,
            changeSummary: "Before sync from seed-data (added Exam traps section)",
            changedById: admin?.id,
          },
        }),
        prisma.revisionNote.update({
          where: { id: topic.revisionNote.id },
          data: { content: content.revision, version: { increment: 1 }, lastReviewedAt: new Date() },
        }),
      ]);
    }
  }
  console.log(`\n${dryRun ? "Dry run — nothing written. " : ""}Sheets: ${updated} ${dryRun ? "to update" : "updated"}, ${unchanged} unchanged, ${skipped} skipped`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
