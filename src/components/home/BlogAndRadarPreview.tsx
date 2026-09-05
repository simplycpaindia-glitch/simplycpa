import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export async function BlogAndRadarPreview() {
  const [posts, updates] = await Promise.all([
    prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
      take: 3,
    }),
    prisma.update.findMany({
      orderBy: { publishedAt: "desc" },
      take: 4,
    }),
  ]);

  if (posts.length === 0 && updates.length === 0) return null;

  return (
    <section className="py-20 bg-paper-100">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Knowledge Centre" title="From the blog" />
              <Button href="/blog" variant="outline" size="sm">
                All articles
              </Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full p-5 hover:shadow-md transition-shadow">
                    <Badge tone="gold">{post.category}</Badge>
                    <h3 className="mt-3 font-semibold text-ink-950 leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-400 line-clamp-3">{post.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="CPA Radar" title="What changed recently" />
              <Button href="/radar" variant="outline" size="sm">
                All updates
              </Button>
            </div>
            <div className="mt-8 flex flex-col divide-y divide-ink-950/10">
              {updates.map((u) => (
                <div key={u.id} className="py-4">
                  <div className="flex items-center gap-2 text-xs text-ink-400">
                    <Badge tone="neutral">{u.category}</Badge>
                    <span>Last verified {formatDate(u.lastVerified)}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-ink-950">{u.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
