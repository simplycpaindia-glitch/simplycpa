import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const [subjects, topics, posts, quickSheetTopics] = await Promise.all([
    prisma.subject.findMany({ select: { slug: true, lastUpdated: true } }),
    prisma.topic.findMany({
      where: { isComingSoon: false },
      select: { slug: true, updatedAt: true, subject: { select: { slug: true } } },
    }),
    prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      select: { slug: true, updatedAt: true },
    }),
    prisma.topic.findMany({
      where: { revisionNote: { isNot: null } },
      select: { slug: true, updatedAt: true, subject: { select: { slug: true } } },
    }),
  ]);

  const staticRoutes = [
    "",
    "/cpa",
    "/start-here",
    "/quick-sheets",
    "/faq",
    "/blog",
    "/roadmap",
    "/fees",
    "/indian-candidates",
    "/radar",
    "/sources",
    "/community",
    "/about",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/contact",
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));

  const quickSheetRoutes = quickSheetTopics.map((t) => ({
    url: `${base}/quick-sheets/${t.subject.slug}/${t.slug}`,
    lastModified: t.updatedAt,
  }));

  const subjectRoutes = subjects.map((s) => ({
    url: `${base}/cpa/${s.slug}`,
    lastModified: s.lastUpdated,
  }));

  const topicRoutes = topics.map((t) => ({
    url: `${base}/cpa/${t.subject.slug}/${t.slug}`,
    lastModified: t.updatedAt,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.updatedAt,
  }));

  return [...staticRoutes, ...subjectRoutes, ...topicRoutes, ...quickSheetRoutes, ...blogRoutes];
}
