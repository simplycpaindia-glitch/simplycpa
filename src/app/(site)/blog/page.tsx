import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { BlogBrowser } from "@/components/blog/BlogBrowser";
import { formatDate } from "@/lib/utils";

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
