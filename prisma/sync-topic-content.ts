/**
 * Updates one topic's study material and revision note in the database from the
 * content files. The old text is saved as a ContentVersion first, so any change can
 * be undone from the admin history.
 *
 *   npm run content:sync-topic -- aud engagement-acceptance-and-quality-management --dry-run
 *   npm run content:sync-topic -- aud engagement-acceptance-and-quality-management
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { contentBySubject } from "./seed-data/content";

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const [subjectSlug, topicSlug] = args.filter((a) => !a.startsWith("--"));

async function main() {
  const content = contentBySubject[subjectSlug]?.[topicSlug];
  if (!content) throw new Error(`No content file for ${subjectSlug}/${topicSlug}`);
  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" }, select: { id: true } });
  const topic = await prisma.topic.findFirst({
    where: { slug: topicSlug, subject: { slug: subjectSlug } },
    select: { studyMaterial: { select: { id: true, content: true } }, revisionNote: { select: { id: true, content: true } } },
  });
  if (!topic?.studyMaterial || !topic.revisionNote) throw new Error(`${subjectSlug}/${topicSlug} has no study material or revision note in the database`);

  const study = topic.studyMaterial;
  const revision = topic.revisionNote;
  const changes = [study.content !== content.study && "study material", revision.content !== content.revision && "revision note"].filter(Boolean);
  if (changes.length === 0) return console.log("Already up to date.");
  console.log(`${dryRun ? "Would update" : "Updating"} ${changes.join(" and ")} for ${subjectSlug}/${topicSlug}`);
  if (dryRun) return;

  const summary = "Before sync from seed-data content files";
  await prisma.$transaction([
    ...(study.content !== content.study
      ? [
          prisma.contentVersion.create({ data: { contentType: "STUDY_MATERIAL", contentId: study.id, content: study.content, changeSummary: summary, changedById: admin?.id } }),
          prisma.studyMaterial.update({ where: { id: study.id }, data: { content: content.study, version: { increment: 1 }, lastReviewedAt: new Date() } }),
        ]
      : []),
    ...(revision.content !== content.revision
      ? [
          prisma.contentVersion.create({ data: { contentType: "REVISION_NOTE", contentId: revision.id, content: revision.content, changeSummary: summary, changedById: admin?.id } }),
          prisma.revisionNote.update({ where: { id: revision.id }, data: { content: content.revision, version: { increment: 1 }, lastReviewedAt: new Date() } }),
        ]
      : []),
  ]);
  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
