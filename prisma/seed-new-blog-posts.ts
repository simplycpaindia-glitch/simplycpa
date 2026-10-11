/**
 * Publishes blog posts from the seed data that aren't in the database yet. Posts that
 * already exist are left untouched, so edits made in the admin panel are never
 * overwritten (unlike the full seed, which re-applies every post).
 *
 *   npm run db:seed-new-blog
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { blogPosts } from "./seed-data/blog";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "admin@simplycpa.local";
  const admin = await prisma.user.findUnique({ where: { email }, select: { id: true } });

  const existing = new Set(
    (await prisma.blogPost.findMany({ select: { slug: true } })).map((p) => p.slug)
  );
  const missing = blogPosts.filter((post) => !existing.has(post.slug));

  for (const post of missing) {
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
    console.log(`Created ${post.slug}`);
  }
  console.log(`Created ${missing.length} new blog posts; left ${existing.size} existing posts untouched`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
