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

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const subjects: SubjectSeed[] = [far, aud, reg, bar, isc, tcp];

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

      if (topicSeed.mcqs?.length) {
        const existingCount = await prisma.mCQ.count({ where: { topicId: topic.id } });
        if (existingCount === 0) {
          for (const mcqSeed of topicSeed.mcqs) {
            await prisma.mCQ.create({
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
            });
          }
        }
      }
    }
    console.log(`Seeded subject ${subjectSeed.shortName} with ${subjectSeed.topics.length} topics`);
  }
}

async function seedFaqs() {
  for (const faq of faqs) {
    const existing = await prisma.fAQ.findFirst({ where: { question: faq.question } });
    if (!existing) {
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

  const existingUpdateCount = await prisma.update.count();
  if (existingUpdateCount === 0) {
    for (const u of updates) {
      await prisma.update.create({
        data: {
          title: u.title,
          body: u.body,
          category: u.category,
          sourceUrl: u.sourceUrl,
          lastVerified: new Date(u.lastVerified),
        },
      });
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
