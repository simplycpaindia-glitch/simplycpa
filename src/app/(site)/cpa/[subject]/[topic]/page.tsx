import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { AboutSimplyCPA, Byline } from "@/components/content/AboutSimplyCPA";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge, DifficultyBadge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { RichContent } from "@/components/content/RichContent";
import { MarkCompleteButton } from "@/components/practice/MarkCompleteButton";
import { OnThisPage } from "@/components/content/OnThisPage";
import { ReadingControls } from "@/components/content/ReadingControls";
import { withHeadingIds } from "@/lib/content/headings";
import { McqPractice } from "@/components/practice/McqPractice";
import { Comments } from "@/components/discussion/Comments";
import { formatDate, formatMinutes } from "@/lib/utils";
import { getSimulations } from "@/lib/tbs";
import { FORMAT_LABEL } from "@/lib/tbs/types";

async function getTopic(subjectSlug: string, topicSlug: string) {
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug } });
  if (!subject) return null;

  const topic = await prisma.topic.findUnique({
    where: { subjectId_slug: { subjectId: subject.id, slug: topicSlug } },
    include: {
      studyMaterial: true,
      revisionNote: true,
      mcqs: {
        where: { status: "PUBLISHED" },
        include: { options: { select: { id: true, label: true, text: true } } },
      },
      comments: {
        where: { isDeleted: false },
        include: { user: { select: { id: true, name: true } }, upvotes: true },
        orderBy: { createdAt: "asc" },
      },
    },
  });
  if (!topic) return null;
  return { subject, topic };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}): Promise<Metadata> {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const data = await getTopic(subjectSlug, topicSlug);
  if (!data) return {};
  return {
    title: `${data.topic.title} · ${data.subject.shortName}`,
    description: data.topic.shortDescription,
    alternates: { canonical: `/cpa/${data.subject.slug}/${data.topic.slug}` },
    // Placeholder pages stay out of search results until their content exists.
    robots: data.topic.isComingSoon ? { index: false, follow: true } : undefined,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const data = await getTopic(subjectSlug, topicSlug);
  if (!data) notFound();
  const { subject, topic } = data;

  const session = await auth();
  const progress = session?.user
    ? await prisma.userProgress.findUnique({
        where: { userId_topicId: { userId: session.user.id, topicId: topic.id } },
      })
    : null;

  const path = `/cpa/${subject.slug}/${topic.slug}`;

  const siblings = await prisma.topic.findMany({
    where: { subjectId: subject.id, isComingSoon: false },
    orderBy: { order: "asc" },
    select: { id: true, slug: true, title: true },
  });
  const index = siblings.findIndex((t) => t.id === topic.id);
  const prevTopic = index > 0 ? siblings[index - 1] : null;
  const nextTopic = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;

  if (topic.isComingSoon) {
    return (
      <Container className="py-24 text-center">
        <Badge tone="neutral">Coming Soon</Badge>
        <h1 className="mt-4 font-display text-3xl font-medium">{topic.title}</h1>
        <p className="mt-3 max-w-md mx-auto text-ink-400">
          This topic&apos;s study material and MCQs are still being written. Check back soon,
          or explore other {subject.shortName} topics in the meantime.
        </p>
        <Link href={`/cpa/${subject.slug}`} className="mt-6 inline-block text-sm underline">
          Back to {subject.shortName}
        </Link>
      </Container>
    );
  }

  const commentData = topic.comments.map((c) => ({
    id: c.id,
    body: c.body,
    kind: c.kind,
    isDeleted: c.isDeleted,
    isPinned: c.isPinned,
    createdAt: c.createdAt.toISOString(),
    userName: c.user.name ?? "Student",
    userId: c.userId,
    upvoteCount: c.upvotes.length,
    hasUpvoted: session?.user ? c.upvotes.some((u) => u.userId === session.user.id) : false,
    canDelete: session?.user
      ? c.userId === session.user.id || ["ADMIN", "MODERATOR"].includes(session.user.role)
      : false,
  }));

  // Section headings get ids so the "On this page" list can link to them.
  const study = topic.studyMaterial ? withHeadingIds(topic.studyMaterial.content) : null;
  const isLoggedIn = !!session?.user;
  const simulations = getSimulations(subject.slug).filter((s) => s.topic === topic.slug);

  const tabs = [
    study && {
      id: "study",
      label: "Study",
      content: (
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
          <div className="min-w-0">
            <div className="mb-6 flex justify-end">
              <ReadingControls />
            </div>
            <OnThisPage headings={study.headings} variant="inline" />
            <RichContent html={study.html} />
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink-950/10 pt-6">
              <MarkCompleteButton
                isComplete={!!progress?.studyCompletedAt}
                isLoggedIn={isLoggedIn}
                topicId={topic.id}
                path={path}
                kind="study"
              />
              {topic.mcqs.length > 0 && (
                <a
                  href="#mcqs"
                  className="inline-flex h-9 items-center rounded-md border border-ink-950/20 px-4 text-sm font-medium text-ink-950 hover:border-ink-950/50"
                >
                  Practise {topic.mcqs.length} MCQs
                </a>
              )}
            </div>
          </div>
          <aside>
            <OnThisPage headings={study.headings} variant="sidebar" />
          </aside>
        </div>
      ),
    },
    topic.revisionNote && {
      id: "revision",
      label: "5-Minute Revision",
      content: (
        <div>
          <p className="mb-6 flex items-center gap-1.5 text-sm text-ink-400">
            <Clock className="size-4" /> Read time: ~5 minutes
          </p>
          <RichContent html={topic.revisionNote.content} />
          <div className="mt-8 flex flex-wrap gap-2">
            <MarkCompleteButton
              isComplete={!!progress?.revisionCompletedAt}
              isLoggedIn={isLoggedIn}
              topicId={topic.id}
              path={path}
              kind="revision"
            />
            <Button href={`/quick-sheets/${subject.slug}/${topic.slug}`} variant="outline" size="sm">
              Open as Quick Sheet
            </Button>
          </div>
        </div>
      ),
    },
    topic.mcqs.length > 0 && {
      id: "mcqs",
      label: `MCQs (${topic.mcqs.length})`,
      content: (
        <McqPractice
          topicId={topic.id}
          questions={topic.mcqs.map((m) => ({
            id: m.id,
            question: m.question,
            difficulty: m.difficulty,
            options: m.options,
          }))}
        />
      ),
    },
    simulations.length > 0 && {
      id: "simulations",
      label: `Simulations (${simulations.length})`,
      content: (
        <div>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink-400">
            Task-based simulations are the exam&apos;s case-study questions: a short scenario, supporting documents and an answer grid.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {simulations.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/cpa/${subject.slug}/simulations/${s.slug}`}
                  className="flex h-full flex-col rounded-lg border border-ink-950/10 p-4 hover:border-ink-950/30"
                >
                  <span className="font-medium text-ink-950">{s.title}</span>
                  <span className="mt-2 flex flex-wrap items-center gap-2 text-xs text-ink-400">
                    <Badge tone="neutral">{FORMAT_LABEL[s.format]}</Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" /> ~{s.minutes} min
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/cpa/${subject.slug}/simulations`} className="mt-4 inline-block text-sm underline underline-offset-2">
            All {subject.shortName} simulations
          </Link>
        </div>
      ),
    },
    {
      id: "discussion",
      label: `Discussion (${commentData.length})`,
      content: (
        <Comments
          topicId={topic.id}
          path={path}
          comments={commentData}
          isLoggedIn={!!session?.user}
        />
      ),
    },
  ].filter(Boolean) as { id: string; label: string; content: React.ReactNode }[];

  // Content is credited to SimplyCPA as an organisation (see /editorial-standards).
  const updated = topic.studyMaterial?.updatedAt ?? topic.updatedAt;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: topic.title,
      description: topic.shortDescription,
      url: `${SITE_URL}${path}`,
      learningResourceType: "Study notes",
      educationalLevel: "Professional",
      about: `US CPA Exam — ${subject.shortName} (${subject.name})`,
      inLanguage: "en",
      dateModified: updated.toISOString(),
      author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SimplyCPA", url: SITE_URL },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SimplyCPA", url: SITE_URL },
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "CPA", item: `${SITE_URL}/cpa` },
        { "@type": "ListItem", position: 3, name: subject.shortName, item: `${SITE_URL}/cpa/${subject.slug}` },
        { "@type": "ListItem", position: 4, name: topic.title, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400 mb-4">
            <Link href="/cpa" className="hover:text-ink-950">CPA</Link>
            <span>/</span>
            <Link href={`/cpa/${subject.slug}`} className="hover:text-ink-950">{subject.shortName}</Link>
            <span>/</span>
            <span className="text-ink-950">{topic.title}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-balance">{topic.title}</h1>
          <p className="mt-2 max-w-2xl text-ink-400">{topic.shortDescription}</p>
          <div className="mt-2">
            <Byline updated={formatDate(updated)} />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <DifficultyBadge difficulty={topic.difficulty} />
            {topic.estimatedMinutes && (
              <span className="flex items-center gap-1 text-xs text-ink-400">
                <Clock className="size-3.5" /> {formatMinutes(topic.estimatedMinutes)}
              </span>
            )}
            {topic.blueprintArea && <Badge tone="neutral">{topic.blueprintArea}</Badge>}
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <Tabs tabs={tabs} />
        <AboutSimplyCPA />

        {(prevTopic || nextTopic) && (
          <nav
            aria-label={`More ${subject.shortName} topics`}
            className="mt-16 grid gap-3 border-t border-ink-950/10 pt-8 sm:grid-cols-2"
          >
            {prevTopic ? (
              <Link
                href={`/cpa/${subject.slug}/${prevTopic.slug}`}
                className="group rounded-lg border border-ink-950/10 p-4 hover:border-ink-950/25"
              >
                <span className="flex items-center gap-1 text-xs text-ink-400">
                  <ArrowLeft className="size-3.5" /> Previous topic
                </span>
                <span className="mt-1 block font-medium text-ink-950 group-hover:underline">{prevTopic.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {nextTopic && (
              <Link
                href={`/cpa/${subject.slug}/${nextTopic.slug}`}
                className="group rounded-lg border border-ink-950/10 p-4 text-right hover:border-ink-950/25"
              >
                <span className="flex items-center justify-end gap-1 text-xs text-ink-400">
                  Next topic <ArrowRight className="size-3.5" />
                </span>
                <span className="mt-1 block font-medium text-ink-950 group-hover:underline">{nextTopic.title}</span>
              </Link>
            )}
          </nav>
        )}
      </Container>
    </>
  );
}
