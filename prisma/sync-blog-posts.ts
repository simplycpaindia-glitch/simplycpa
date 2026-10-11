/**
 * Brings published blog posts and the fee/source/update facts in line with the seed
 * data. Unlike db:seed-new-blog, this DOES overwrite existing posts whose title,
 * excerpt, category or content differ from the seed — but it first saves the old
 * content as a ContentVersion, so any admin edit can be recovered from history.
 *
 *   npm run db:sync-blog              # apply
 *   npm run db:sync-blog -- --dry-run # report what would change, write nothing
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { blogPosts } from "./seed-data/blog";
import { fees, sources, updates } from "./seed-data/facts";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const dryRun = process.argv.includes("--dry-run");

async function syncPosts() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "admin@simplycpa.local";
  const admin = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  const existing = new Map((await prisma.blogPost.findMany()).map((p) => [p.slug, p]));

  let created = 0;
  let updated = 0;
  for (const post of blogPosts) {
    const current = existing.get(post.slug);
    if (!current) {
      console.log(`create  ${post.slug}`);
      created++;
      if (!dryRun) {
        await prisma.blogPost.create({
          data: {
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            status: "PUBLISHED",
            authorId: admin?.id,
            publishedAt: new Date(),
          },
        });
      }
      continue;
    }

    const changed =
      current.title !== post.title ||
      current.excerpt !== post.excerpt ||
      current.category !== post.category ||
      current.content !== post.content;
    if (!changed) continue;

    console.log(`update  ${post.slug}`);
    updated++;
    if (!dryRun) {
      await prisma.$transaction([
        prisma.contentVersion.create({
          data: {
            contentType: "BLOG_POST",
            contentId: current.id,
            content: current.content,
            changeSummary: "Snapshot before db:sync-blog (Crux summary box, official sources only)",
            changedById: admin?.id,
          },
        }),
        prisma.blogPost.update({
          where: { id: current.id },
          data: {
            title: post.title,
            excerpt: post.excerpt,
            category: post.category,
            content: post.content,
          },
        }),
      ]);
    }
  }
  console.log(`Posts: ${created} created, ${updated} updated, ${blogPosts.length - created - updated} unchanged`);
}

async function syncFacts() {
  const nasba = await prisma.jurisdiction.findUnique({ where: { name: "NASBA (National)" } });

  // Fees are matched on type + label. International fees are replaced as a set, because
  // the seed now tracks one flat India fee instead of separate Core/Discipline rows.
  const seedIntl = fees.filter((f) => f.feeType === "INTERNATIONAL_ADMIN");
  const dbIntl = await prisma.fee.findMany({ where: { feeType: "INTERNATIONAL_ADMIN" } });
  const intlInSync =
    dbIntl.length === seedIntl.length &&
    seedIntl.every((s) => dbIntl.some((d) => d.label === s.label && Number(d.amount) === Number(s.amount) && d.sourceUrl === s.sourceUrl));
  if (!intlInSync) {
    console.log(`replace ${dbIntl.length} international fee row(s) with ${seedIntl.length}`);
  }

  for (const f of fees) {
    const data = {
      jurisdictionId: f.jurisdictionName ? nasba?.id : null,
      feeType: f.feeType,
      label: f.label,
      amount: f.amount,
      currency: f.currency,
      effectiveFrom: new Date(f.effectiveFrom),
      sourceUrl: f.sourceUrl,
      lastVerified: new Date(f.lastVerified),
      notes: f.notes ?? null,
    };
    if (f.feeType === "INTERNATIONAL_ADMIN") continue;
    const current = await prisma.fee.findFirst({ where: { feeType: f.feeType, label: f.label } });
    if (current && current.sourceUrl === f.sourceUrl && Number(current.amount) === Number(f.amount)) continue;
    console.log(`${current ? "update " : "create "} fee: ${f.label}`);
    if (dryRun) continue;
    if (current) await prisma.fee.update({ where: { id: current.id }, data });
    else await prisma.fee.create({ data });
  }
  if (!intlInSync && !dryRun) {
    await prisma.$transaction([
      prisma.fee.deleteMany({ where: { feeType: "INTERNATIONAL_ADMIN" } }),
      ...seedIntl.map((f) =>
        prisma.fee.create({
          data: {
            jurisdictionId: nasba?.id,
            feeType: f.feeType,
            label: f.label,
            amount: f.amount,
            currency: f.currency,
            effectiveFrom: new Date(f.effectiveFrom),
            sourceUrl: f.sourceUrl,
            lastVerified: new Date(f.lastVerified),
            notes: f.notes ?? null,
          },
        })
      ),
    ]);
  }

  // Remove review-provider sources nothing links to any more, then add missing official ones.
  const stale = await prisma.source.findMany({
    where: { sourceType: "SECONDARY_PROVIDER" },
    include: { _count: { select: { studyMaterials: true, revisionNotes: true, mcqs: true } } },
  });
  for (const s of stale) {
    const linked = s._count.studyMaterials + s._count.revisionNotes + s._count.mcqs;
    if (linked > 0) {
      console.log(`keep    source (still linked ${linked}x): ${s.name}`);
      continue;
    }
    console.log(`delete  source: ${s.name}`);
    if (!dryRun) await prisma.source.delete({ where: { id: s.id } });
  }
  for (const s of sources) {
    if (await prisma.source.findFirst({ where: { url: s.url } })) continue;
    console.log(`create  source: ${s.name}`);
    if (!dryRun) {
      await prisma.source.create({ data: { name: s.name, url: s.url, sourceType: s.sourceType, notes: s.notes } });
    }
  }

  for (const u of updates) {
    const current = await prisma.update.findFirst({ where: { title: u.title } });
    const data = {
      title: u.title,
      body: u.body,
      category: u.category,
      sourceUrl: u.sourceUrl ?? null,
      lastVerified: new Date(u.lastVerified),
    };
    if (current && current.body === data.body && current.sourceUrl === data.sourceUrl) continue;
    console.log(`${current ? "update " : "create "} radar update: ${u.title}`);
    if (dryRun) continue;
    if (current) await prisma.update.update({ where: { id: current.id }, data });
    else await prisma.update.create({ data });
  }
}

async function main() {
  if (dryRun) console.log("Dry run — nothing will be written.\n");
  await syncPosts();
  await syncFacts();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
