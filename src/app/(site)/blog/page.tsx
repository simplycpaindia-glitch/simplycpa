import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "CPA basics, career guidance, study strategy, and updates — written for Indian candidates.",
};

export default async function BlogIndexPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Knowledge Centre" title="Blog" description="Strategy, career guidance, and what's actually changing in the CPA world — written for Indian candidates." />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full p-6 hover:shadow-md transition-shadow">
              <Badge tone="gold">{post.category}</Badge>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink-950 leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-ink-400 line-clamp-3">{post.excerpt}</p>
              {post.publishedAt && (
                <p className="mt-4 text-xs text-ink-400">{formatDate(post.publishedAt)}</p>
              )}
            </Card>
          </Link>
        ))}
      </div>
      {posts.length === 0 && <p className="text-ink-400">No articles published yet.</p>}
    </Container>
  );
}
