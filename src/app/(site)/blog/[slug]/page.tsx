import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RichContent } from "@/components/content/RichContent";
import { formatDate } from "@/lib/utils";

async function getPost(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug },
    include: { author: { select: { name: true } } },
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({ where: { status: "PUBLISHED" }, select: { slug: true } });
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || post.status !== "PUBLISHED") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: { "@type": "Person", name: post.author?.name ?? "SimplyCPA" },
  };

  return (
    <Container className="max-w-3xl py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mb-4 flex items-center gap-2 text-xs text-ink-400">
        <Link href="/blog" className="hover:text-ink-950">Blog</Link>
        <span>/</span>
        <span>{post.category}</span>
      </div>
      <Badge tone="gold">{post.category}</Badge>
      <h1 className="mt-3 font-display text-4xl font-medium text-balance">{post.title}</h1>
      <p className="mt-3 text-sm text-ink-400">
        {post.author?.name ?? "SimplyCPA"}
        {post.publishedAt && ` · ${formatDate(post.publishedAt)}`}
      </p>
      <div className="mt-8">
        <RichContent html={post.content} />
      </div>
    </Container>
  );
}
