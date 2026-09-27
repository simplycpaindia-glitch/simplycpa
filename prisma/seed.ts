import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import bcrypt from "bcryptjs";
import type { SubjectSeed } from "./seed-data/types";
import { far } from "./seed-data/far";
import { aud } from "./seed-data/aud";
import { reg } from "./seed-data/reg";
import { bar } from "./seed-data/bar";
import { isc } from "./seed-data/isc";
import { tcp } from "./seed-data/tcp";
import { faqs } from "./seed-data/faqs";
import { blogPosts } from "./seed-data/blog";
import { jurisdictions, fees, testingLocations, sources, updates } from "./seed-data/facts";
import { mcqBank } from "./seed-data/mcq-bank";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const subjects: SubjectSeed[] = [far, aud, reg, bar, isc, tcp];

let mcqsCreated = 0;
let mcqsRemoved = 0;

/**
 * Seeding the full question bank means hundreds of sequential inserts, and a
 * serverless Postgres will sometimes drop the connection partway through
 * ("Connection terminated unexpectedly"). Retrying the individual write lets
 * the adapter reconnect instead of losing the whole run. Because the seed is
 * idempotent, a retried insert can never duplicate a question.
 */
async function withRetry<T>(fn: () => Promise<T>, attempts = 5): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const isTransient =
        /Connection terminated|connection closed|ECONNRESET|socket hang up|Timed out|terminating connection/i.test(
          message,
        );
      if (!isTransient || attempt >= attempts) throw error;
      const backoffMs = 500 * 2 ** (attempt - 1);
      console.log(`  transient DB error (attempt ${attempt}/${attempts}), retrying in ${backoffMs}ms: ${message}`);
      await new Promise((resolve) => setTimeout(resolve, backoffMs));
    }
  }
}

async function seedAdminUser() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "admin@simplycpa.local";
  const password = process.env.SEED_ADMIN_PASSWORD ?? "ChangeMe123!";
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: "Admin",
      password: hashed,
      role: "ADMIN",
    },
  });

  console.log(`Admin user ready: ${email} (password from SEED_ADMIN_PASSWORD env or default "ChangeMe123!" — change this after first login)`);
  return user;
}

async function seedSubjects(adminId: string) {
  for (const subjectSeed of subjects) {
    const subject = await prisma.subject.upsert({
      where: { slug: subjectSeed.slug },
      update: {
        name: subjectSeed.name,
        shortName: subjectSeed.shortName,
        type: subjectSeed.type,
        description: subjectSeed.description,
        difficulty: subjectSeed.difficulty,
        estimatedHours: subjectSeed.estimatedHours,
        blueprintUrl: subjectSeed.blueprintUrl,
        order: subjectSeed.order,
      },
      create: {
        slug: subjectSeed.slug,
        name: subjectSeed.name,
        shortName: subjectSeed.shortName,
        type: subjectSeed.type,
        description: subjectSeed.description,
        difficulty: subjectSeed.difficulty,
        estimatedHours: subjectSeed.estimatedHours,
        blueprintUrl: subjectSeed.blueprintUrl,
        order: subjectSeed.order,
      },
    });

    for (const topicSeed of subjectSeed.topics) {
      const topic = await prisma.topic.upsert({
        where: { subjectId_slug: { subjectId: subject.id, slug: topicSeed.slug } },
        update: {
          title: topicSeed.title,
          shortDescription: topicSeed.shortDescription,
          blueprintArea: topicSeed.blueprintArea,
          blueprintStatus: topicSeed.blueprintStatus,
          difficulty: topicSeed.difficulty,
          estimatedMinutes: topicSeed.estimatedMinutes,
          order: topicSeed.order,
          isComingSoon: topicSeed.isComingSoon ?? false,
          status: topicSeed.studyMaterialHtml ? "PUBLISHED" : "DRAFT",
        },
        create: {
          subjectId: subject.id,
          slug: topicSeed.slug,
          title: topicSeed.title,
          shortDescription: topicSeed.shortDescription,
          blueprintArea: topicSeed.blueprintArea,
          blueprintStatus: topicSeed.blueprintStatus,
          difficulty: topicSeed.difficulty,
          estimatedMinutes: topicSeed.estimatedMinutes,
          order: topicSeed.order,
          isComingSoon: topicSeed.isComingSoon ?? false,
          status: topicSeed.studyMaterialHtml ? "PUBLISHED" : "DRAFT",
        },
      });

      if (topicSeed.studyMaterialHtml) {
        await prisma.studyMaterial.upsert({
          where: { topicId: topic.id },
          update: { content: topicSeed.studyMaterialHtml, status: "PUBLISHED", authorId: adminId, lastReviewedAt: new Date() },
          create: { topicId: topic.id, content: topicSeed.studyMaterialHtml, status: "PUBLISHED", authorId: adminId, lastReviewedAt: new Date() },
        });
      }

      if (topicSeed.revisionNoteHtml) {
        await prisma.revisionNote.upsert({
          where: { topicId: topic.id },
          update: { content: topicSeed.revisionNoteHtml, status: "PUBLISHED", authorId: adminId, lastReviewedAt: new Date() },
          create: { topicId: topic.id, content: topicSeed.revisionNoteHtml, status: "PUBLISHED", authorId: adminId, lastReviewedAt: new Date() },
        });
      }

      // Questions defined inline on the topic, plus anything in the separate
      // question bank for this slug. Matching on question text keeps re-seeding
      // idempotent: existing questions are left alone, new ones are appended.
      const bankMcqs = mcqBank[topicSeed.slug] ?? [];
      const allMcqs = [...(topicSeed.mcqs ?? []), ...bankMcqs];

      if (allMcqs.length) {
        const existing = await prisma.mCQ.findMany({
          where: { topicId: topic.id },
          select: { question: true },
        });
        const existingQuestions = new Set(existing.map((m) => m.question.trim()));

        for (const mcqSeed of allMcqs) {
          if (existingQuestions.has(mcqSeed.question.trim())) continue;
          await withRetry(() =>
            prisma.mCQ.create({
              data: {
                topicId: topic.id,
                question: mcqSeed.question,
                explanation: mcqSeed.explanation,
                learningObjective: mcqSeed.learningObjective,
                difficulty: mcqSeed.difficulty,
                questionType: mcqSeed.questionType,
                tags: mcqSeed.tags ?? [],
                status: "PUBLISHED",
                options: { create: mcqSeed.options },
              },
            }),
          );
          existingQuestions.add(mcqSeed.question.trim());
          mcqsCreated++;
        }

        // Because inserts are matched on question text, editing a question's
        // wording in the seed data creates a new row and leaves the superseded
        // one behind. Remove those stragglers so the bank stays declarative —
        // but never touch a question a student has already answered, since that
        // would destroy their attempt history.
        const seededQuestions = new Set(allMcqs.map((m) => m.question.trim()));
        const stale = await prisma.mCQ.findMany({
          where: { topicId: topic.id },
          select: { id: true, question: true, _count: { select: { attempts: true } } },
        });

        for (const candidate of stale) {
          if (seededQuestions.has(candidate.question.trim())) continue;
          if (candidate._count.attempts > 0) {
            console.log(`  KEPT superseded MCQ with ${candidate._count.attempts} attempt(s): ${candidate.question.slice(0, 70)}...`);
            continue;
          }
          await withRetry(() => prisma.mCQ.delete({ where: { id: candidate.id } }));
          mcqsRemoved++;
        }
      }
    }
    // Remove topics that are no longer part of this subject's structure — but only
    // empty "Coming Soon" shells, never anything carrying real content or activity.
    const seededSlugs = subjectSeed.topics.map((t) => t.slug);
    const orphans = await prisma.topic.findMany({
      where: { subjectId: subject.id, slug: { notIn: seededSlugs } },
      include: {
        studyMaterial: true,
        revisionNote: true,
        _count: { select: { mcqs: true, comments: true, progress: true } },
      },
    });

    for (const orphan of orphans) {
      const isEmptyShell =
        !orphan.studyMaterial &&
        !orphan.revisionNote &&
        orphan._count.mcqs === 0 &&
        orphan._count.comments === 0 &&
        orphan._count.progress === 0;

      if (isEmptyShell) {
        await prisma.topic.delete({ where: { id: orphan.id } });
        console.log(`  removed obsolete empty topic: ${subjectSeed.shortName} / ${orphan.slug}`);
      } else {
        console.log(`  KEPT obsolete topic with content/activity (review manually): ${subjectSeed.shortName} / ${orphan.slug}`);
      }
    }

    console.log(`Seeded subject ${subjectSeed.shortName} with ${subjectSeed.topics.length} topics`);
  }
}

async function seedFaqs() {
  for (const faq of faqs) {
    const existing = await prisma.fAQ.findFirst({ where: { question: faq.question } });
    if (existing) {
      // Keep answers in sync with the seed so factual corrections reach existing databases.
      await prisma.fAQ.update({ where: { id: existing.id }, data: { answer: faq.answer, category: faq.category, order: faq.order } });
    } else {
      await prisma.fAQ.create({ data: { ...faq, status: "PUBLISHED" } });
    }
  }
  console.log(`Seeded ${faqs.length} FAQs`);
}

async function seedBlog(adminId: string) {
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        status: "PUBLISHED",
        publishedAt: new Date(),
      },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        status: "PUBLISHED",
        authorId: adminId,
        publishedAt: new Date(),
      },
    });
  }
  console.log(`Seeded ${blogPosts.length} blog posts`);
}

async function seedFacts() {
  const jurisdictionByName = new Map<string, string>();
  for (const j of jurisdictions) {
    const record = await prisma.jurisdiction.upsert({
      where: { name: j.name },
      update: { notes: j.notes },
      create: { name: j.name, notes: j.notes },
    });
    jurisdictionByName.set(j.name, record.id);
  }

  const existingFeeCount = await prisma.fee.count();
  if (existingFeeCount === 0) {
    for (const f of fees) {
      await prisma.fee.create({
        data: {
          jurisdictionId: f.jurisdictionName ? jurisdictionByName.get(f.jurisdictionName) : undefined,
          feeType: f.feeType,
          label: f.label,
          amount: f.amount,
          currency: f.currency,
          effectiveFrom: new Date(f.effectiveFrom),
          sourceUrl: f.sourceUrl,
          lastVerified: new Date(f.lastVerified),
          notes: f.notes,
        },
      });
    }
  }

  const existingLocationCount = await prisma.testingLocation.count();
  if (existingLocationCount === 0) {
    for (const loc of testingLocations) {
      await prisma.testingLocation.create({
        data: {
          city: loc.city,
          country: "India",
          prometricCenterName: loc.prometricCenterName,
          notes: loc.notes,
          sourceUrl: loc.sourceUrl,
          lastVerified: new Date(loc.lastVerified),
        },
      });
    }
  }

  for (const s of sources) {
    const existing = await prisma.source.findFirst({ where: { url: s.url } });
    if (!existing) {
      await prisma.source.create({
        data: { name: s.name, url: s.url, sourceType: s.sourceType, notes: s.notes },
      });
    }
  }

  for (const u of updates) {
    const data = {
      title: u.title,
      body: u.body,
      category: u.category,
      sourceUrl: u.sourceUrl,
      lastVerified: new Date(u.lastVerified),
    };
    const existing = await prisma.update.findFirst({ where: { title: u.title } });
    if (existing) {
      await prisma.update.update({ where: { id: existing.id }, data });
    } else {
      await prisma.update.create({ data });
    }
  }

  console.log("Seeded jurisdictions, fees, testing locations, sources, and updates");
}

async function main() {
  const admin = await seedAdminUser();
  await seedSubjects(admin.id);
  await seedFaqs();
  await seedBlog(admin.id);
  await seedFacts();

  const totalMcqs = await prisma.mCQ.count();
  console.log(`\nMCQs created this run: ${mcqsCreated}, superseded removed: ${mcqsRemoved}. Total in bank: ${totalMcqs}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
