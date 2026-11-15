import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogCategoryBlurb, blogCategorySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import { formatDate } from "@/lib/utils";

/** Published posts in the category this slug stands for, plus every category name for the side list. */
async function load(slug: string) {
  const all = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    select: { slug: true, title: true, excerpt: true, category: true, publishedAt: true },
  });
  const counts = new Map<string, number>();
  for (const p of all) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  const categories = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count }));
  const name = categories.find((c) => blogCategorySlug(c.name) === slug)?.name;
  return { name, categories, posts: all.filter((p) => p.category === name) };
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const { name, posts } = await load(category);
  if (!name) return {};
  return {
    title: `${name}: US CPA Articles and Guides`,
    description: `${posts.length} articles. ${blogCategoryBlurb(name)} Free, plain-English and sourced, for US CPA candidates.`.trim(),
    alternates: { canonical: `/blog/category/${category}` },
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const { name, categories, posts } = await load(category);
  if (!name || posts.length === 0) notFound();

  const url = `${SITE_URL}/blog/category/${category}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${name}: US CPA articles`,
      url,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/blog/${p.slug}` })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name, item: url },
      ],
    },
  ];

  return (
    <Container className="py-12 sm:py-16">
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
        <Link href="/" className="hover:text-ink-950">Home</Link>
        <span aria-hidden>/</span>
        <Link href="/blog" className="hover:text-ink-950">Articles</Link>
        <span aria-hidden>/</span>
        <span>{name}</span>
      </nav>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">Knowledge Centre</p>
      <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">{name}</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-400">
        {blogCategoryBlurb(name)} {posts.length} {posts.length === 1 ? "article" : "articles"}.
      </p>

      <nav aria-label="Categories" className="mt-6 flex flex-wrap gap-2">
        <Link href="/blog" className="rounded-full bg-paper-100 px-3 py-1.5 text-sm font-medium text-ink-800 hover:bg-paper-200">
          All articles
        </Link>
        {categories.map((c) =>
          c.name === name ? (
            <span key={c.name} aria-current="page" className="rounded-full bg-ink-950 px-3 py-1.5 text-sm font-medium text-paper-50">
              {c.name} <span className="opacity-60">{c.count}</span>
            </span>
          ) : (
            <Link key={c.name} href={`/blog/category/${blogCategorySlug(c.name)}`} className="rounded-full bg-paper-100 px-3 py-1.5 text-sm font-medium text-ink-800 hover:bg-paper-200">
              {c.name} <span className="opacity-60">{c.count}</span>
            </Link>
          ),
        )}
      </nav>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full p-6 transition-shadow hover:shadow-md">
              <h2 className="font-display text-xl font-semibold leading-snug text-ink-950">{post.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-ink-400">{post.excerpt}</p>
              {post.publishedAt && <p className="mt-4 text-xs text-ink-400">{formatDate(post.publishedAt)}</p>}
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
