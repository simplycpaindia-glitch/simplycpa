import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RichContent } from "@/components/content/RichContent";
import { formatDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";
import { AboutSimplyCPA, Byline } from "@/components/content/AboutSimplyCPA";

async function getPost(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug },
  });
}

/** Up to three other posts, same category first, so readers (and crawlers) keep moving through the site. */
async function getRelatedPosts(post: { id: string; category: string }) {
  const select = { id: true, slug: true, title: true, category: true } as const;
  const sameCategory = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED", category: post.category, id: { not: post.id } },
    orderBy: { publishedAt: "desc" },
    take: 3,
    select,
  });
  if (sameCategory.length >= 3) return sameCategory;
  const others = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED", id: { notIn: [post.id, ...sameCategory.map((p) => p.id)] } },
    orderBy: { publishedAt: "desc" },
    take: 3 - sameCategory.length,
    select,
  });
  return [...sameCategory, ...others];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.excerpt,
      siteName: "SimplyCPA",
      section: post.category,
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      ...(post.coverImageUrl && { images: [post.coverImageUrl] }),
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
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

  const related = await getRelatedPosts(post);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const wasUpdated =
    post.publishedAt && post.updatedAt.getTime() - post.publishedAt.getTime() > 24 * 60 * 60 * 1000;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: post.category,
      datePublished: post.publishedAt?.toISOString(),
      dateModified: post.updatedAt.toISOString(),
      ...(post.coverImageUrl && { image: post.coverImageUrl }),
      // Articles are credited to SimplyCPA as an organisation (see /editorial-standards).
      author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SimplyCPA", url: SITE_URL },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SimplyCPA", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <Container className="max-w-3xl py-16">
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-ink-400">
        <Link href="/blog" className="hover:text-ink-950">Blog</Link>
        <span>/</span>
        <span>{post.category}</span>
      </nav>
      <Badge tone="gold">{post.category}</Badge>
      <h1 className="mt-3 font-display text-4xl font-medium text-balance">{post.title}</h1>
      <div className="mt-3">
        <Byline
          published={post.publishedAt ? formatDate(post.publishedAt) : undefined}
          updated={wasUpdated ? formatDate(post.updatedAt) : undefined}
        />
      </div>
      <div className="mt-8">
        <RichContent html={post.content} />
      </div>
      <AboutSimplyCPA />

      {related.length > 0 && (
        <section className="mt-16 border-t border-ink-950/10 pt-10">
          <h2 className="font-display text-2xl font-medium">Keep reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`}>
                <Card className="h-full p-5 hover:shadow-md transition-shadow">
                  <p className="text-xs text-gold-700">{p.category}</p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink-950">{p.title}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
