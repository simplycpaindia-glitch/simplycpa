import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export async function BlogPreview() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });
  if (posts.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Knowledge Centre" title="From the blog" />
          <Button href="/blog" variant="outline" size="sm">
            All articles
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full p-5 hover:border-ink-950/25 transition-colors">
                <Badge tone="neutral">{post.category}</Badge>
                <h3 className="mt-3 font-semibold text-ink-950 leading-snug">{post.title}</h3>
                <p className="mt-2 text-xs text-ink-400 line-clamp-3">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
