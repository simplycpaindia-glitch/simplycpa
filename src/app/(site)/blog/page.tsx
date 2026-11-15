import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { BlogBrowser } from "@/components/blog/BlogBrowser";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { blogCategorySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: "US CPA Knowledge Centre: Auditing, FAR Concepts, Exam Guides and Careers",
  description:
    "Plain-English explainers on auditing, US GAAP and tax concepts, CPA exam guides, fees, eligibility and careers — written for Indian candidates and sourced from official bodies.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    select: { slug: true, title: true, excerpt: true, category: true, publishedAt: true },
  });

  return (
    <Container className="py-16">
      <SectionHeading
        as="h1"
        eyebrow="Knowledge Centre"
        title="Articles"
        description="Concepts explained, exam strategy, eligibility and careers. Filter by category or search for a topic."
      />
      {posts.length > 0 && (
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-400">
          <span>Category pages:</span>
          {[...new Set(posts.map((p) => p.category))].sort().map((c) => (
            <Link key={c} href={`/blog/category/${blogCategorySlug(c)}`} className="text-gold-700 underline underline-offset-2">
              {c}
            </Link>
          ))}
        </p>
      )}
      <div className="mt-10">
        {posts.length === 0 ? (
          <p className="text-ink-400">No articles published yet.</p>
        ) : (
          <BlogBrowser
            posts={posts.map((p) => ({
              slug: p.slug,
              title: p.title,
              excerpt: p.excerpt,
              category: p.category,
              date: p.publishedAt ? formatDate(p.publishedAt) : null,
            }))}
          />
        )}
      </div>
    </Container>
  );
}
