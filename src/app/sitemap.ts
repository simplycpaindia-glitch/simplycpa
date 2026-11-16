import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL as base } from "@/lib/site";
import { RESOURCES_CHECKED } from "@/lib/free-resources";
import { PASS_RATES_CHECKED } from "@/lib/trackers/pass-rates";
import { SCORE_RELEASE_CHECKED } from "@/lib/trackers/score-release";
import { PATHWAYS_CHECKED } from "@/lib/trackers/pathways";
import { allSimulations } from "@/lib/tbs";
import { glossary } from "@/lib/glossary";
import { pulseArticles, pulseLastChanged } from "@/lib/pulse";
import { TOOLS } from "@/lib/tools";
import { faqCategorySlug } from "@/lib/faq";
import { blogCategorySlug } from "@/lib/blog";
import { BOARDS, BOARDS_READ } from "@/lib/state-boards";

// Rebuilt at most hourly, so new posts and topics appear without waiting for a deploy.
export const revalidate = 3600;

/**
 * lastModified is only set where we know when the content really changed. Stamping every
 * page with "now" on each crawl teaches search engines to ignore the field entirely.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [subjects, topics, posts, quickSheetTopics, faqCategories, latest] = await Promise.all([
    prisma.subject.findMany({ select: { slug: true, lastUpdated: true } }),
    prisma.topic.findMany({
      where: { isComingSoon: false },
      select: { slug: true, updatedAt: true, subject: { select: { slug: true } } },
    }),
    prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      select: { slug: true, updatedAt: true, category: true },
    }),
    prisma.topic.findMany({
      where: { revisionNote: { isNot: null } },
      select: { slug: true, updatedAt: true, subject: { select: { slug: true } } },
    }),
    prisma.fAQ.groupBy({ by: ["category"], where: { status: "PUBLISHED" }, _max: { updatedAt: true } }),
    Promise.all([
      prisma.topic.aggregate({ where: { isComingSoon: false }, _max: { updatedAt: true } }),
      prisma.blogPost.aggregate({ where: { status: "PUBLISHED" }, _max: { updatedAt: true } }),
      prisma.fAQ.aggregate({ where: { status: "PUBLISHED" }, _max: { updatedAt: true } }),
      prisma.update.aggregate({ _max: { lastVerified: true } }),
      prisma.source.aggregate({ _max: { dateChecked: true } }),
      prisma.journalPost.aggregate({ where: { status: "PUBLISHED" }, _max: { createdAt: true } }),
    ]),
  ]);
  const [topicMax, blogMax, faqMax, radarMax, sourceMax, wallMax] = latest;
  const quickSheetMax = quickSheetTopics.reduce<Date | undefined>((m, t) => (!m || t.updatedAt > m ? t.updatedAt : m), undefined);

  const dated: Record<string, Date | null | undefined> = {
    "": topicMax._max.updatedAt,
    "/cpa": topicMax._max.updatedAt,
    "/quick-sheets": quickSheetMax,
    "/blog": blogMax._max.updatedAt,
    "/faq": faqMax._max.updatedAt,
    "/pulse": new Date(Math.max(new Date(pulseLastChanged()).getTime(), radarMax._max.lastVerified?.getTime() ?? 0)),
    "/sources": sourceMax._max.dateChecked,
    "/what-i-studied": wallMax._max.createdAt,
    // Trackers change when we re-check their official data.
    "/free-cpa-resources": new Date(RESOURCES_CHECKED),
    "/cpa-exam-pass-rates": new Date(PASS_RATES_CHECKED),
    "/cpa-score-release-dates": new Date(SCORE_RELEASE_CHECKED),
    "/cpa-licensure-pathways": new Date(PATHWAYS_CHECKED),
  };
  const undated = [
    "/question-of-the-day",
    "/mini-mock",
    "/mock-exam",
    "/study-planner",
    "/tools",
    ...TOOLS.map((t) => t.href).filter((h) => h.startsWith("/tools/")),
    "/question-of-the-day/archive",
    "/start-here",
    "/roadmap",
    "/fees",
    "/indian-candidates",
    "/us-cpa-fees-in-inr",
    "/cpa-exam-centres-india",
    "/community",
    "/community-guidelines",
    "/about",
    "/editorial-standards",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const staticRoutes: MetadataRoute.Sitemap = [
    ...Object.entries(dated).map(([path, d]) => ({ url: `${base}${path}`, ...(d && { lastModified: d }) })),
    ...undated.map((path) => ({ url: `${base}${path}` })),
  ];

  const subjectRoutes = subjects.map((s) => ({
    url: `${base}/cpa/${s.slug}`,
    lastModified: s.lastUpdated,
  }));

  const topicRoutes = topics.map((t) => ({
    url: `${base}/cpa/${t.subject.slug}/${t.slug}`,
    lastModified: t.updatedAt,
  }));

  const quickSheetSubjects = [...new Set(quickSheetTopics.map((t) => t.subject.slug))].map((slug) => ({
    url: `${base}/quick-sheets/${slug}`,
  }));

  const quickSheetRoutes = quickSheetTopics.map((t) => ({
    url: `${base}/quick-sheets/${t.subject.slug}/${t.slug}`,
    lastModified: t.updatedAt,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.updatedAt,
  }));

  const sims = allSimulations();
  const simulationRoutes = [
    ...[...new Set(sims.map((s) => s.subject))].map((subject) => ({ url: `${base}/cpa/${subject}/simulations` })),
    ...sims.map((s) => ({ url: `${base}/cpa/${s.subject}/simulations/${s.slug}` })),
  ];

  const glossaryRoutes = [{ url: `${base}/glossary` }, ...glossary.map((t) => ({ url: `${base}/glossary/${t.slug}` }))];

  const pulseRoutes = pulseArticles.map((a) => ({ url: `${base}/pulse/${a.slug}`, lastModified: new Date(a.updated ?? a.published) }));

  const faqRoutes = faqCategories.map((c) => ({
    url: `${base}/faq/${faqCategorySlug(c.category)}`,
    ...(c._max.updatedAt && { lastModified: c._max.updatedAt }),
  }));

  const boardRoutes = [{ url: `${base}/state-boards`, lastModified: new Date(BOARDS_READ) }, ...BOARDS.map((b) => ({ url: `${base}/state-boards/${b.slug}`, lastModified: new Date(BOARDS_READ) }))];
  const blogCategoryRoutes = [...new Set(posts.map((p) => p.category))].map((c) => ({ url: `${base}/blog/category/${blogCategorySlug(c)}` }));

  return [...staticRoutes, ...pulseRoutes, ...faqRoutes, ...boardRoutes, ...blogCategoryRoutes, ...subjectRoutes, ...topicRoutes, ...simulationRoutes, ...glossaryRoutes, ...quickSheetSubjects, ...quickSheetRoutes, ...blogRoutes];
}
