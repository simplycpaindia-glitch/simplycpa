import { prisma } from "@/lib/prisma";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import { radarAnchor } from "@/lib/radar";

// RSS 2.0 feed of new articles and CPA Radar updates, refreshed at most hourly.
export const revalidate = 3600;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

type Item = { title: string; link: string; description: string; date: Date; category: string };

export async function GET() {
  const [posts, updates] = await Promise.all([
    prisma.blogPost.findMany({
      where: { status: "PUBLISHED", publishedAt: { not: null } },
      orderBy: { publishedAt: "desc" },
      take: 30,
      select: { slug: true, title: true, excerpt: true, category: true, publishedAt: true },
    }),
    prisma.update.findMany({ orderBy: { publishedAt: "desc" }, take: 20 }),
  ]);

  const items: Item[] = [
    ...posts.map((p) => ({ title: p.title, link: `${SITE_URL}/blog/${p.slug}`, description: p.excerpt, date: p.publishedAt!, category: p.category })),
    ...updates.map((u) => ({
      title: `CPA Radar: ${u.title}`,
      link: `${SITE_URL}/radar#${radarAnchor(u.id)}`,
      description: u.body,
      date: u.publishedAt,
      category: "CPA Radar",
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(`${SITE_NAME} — ${SITE_TAGLINE}`)}</title>
<link>${SITE_URL}</link>
<description>New US CPA study articles and dated, sourced CPA Exam updates from SimplyCPA.</description>
<language>en-in</language>
<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items[0] ? `<lastBuildDate>${items[0].date.toUTCString()}</lastBuildDate>` : ""}
${items
  .map(
    (i) => `<item>
<title>${esc(i.title)}</title>
<link>${esc(i.link)}</link>
<guid isPermaLink="true">${esc(i.link)}</guid>
<pubDate>${i.date.toUTCString()}</pubDate>
<category>${esc(i.category)}</category>
<description>${esc(i.description)}</description>
</item>`,
  )
  .join("\n")}
</channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
