import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { Badge, DifficultyBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/Card";
import { formatMinutes, formatDate } from "@/lib/utils";

async function getSubject(slug: string) {
  return prisma.subject.findUnique({
    where: { slug },
    include: {
      topics: {
        orderBy: { order: "asc" },
        include: { mcqs: { where: { status: "PUBLISHED" }, select: { id: true } } },
      },
    },
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) return {};
  return {
    title: `${subject.shortName} — ${subject.name}`,
    description: subject.description,
  };
}

export async function generateStaticParams() {
  const subjects = await prisma.subject.findMany({ select: { slug: true } });
  return subjects.map((s) => ({ subject: s.slug }));
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) notFound();

  const session = await auth();
  const progressMap = new Map<string, string>();
  if (session?.user) {
    const progress = await prisma.userProgress.findMany({
      where: { userId: session.user.id, topic: { subjectId: subject.id } },
    });
    progress.forEach((p) => progressMap.set(p.topicId, p.status));
  }

  const totalMcqs = subject.topics.reduce((sum, t) => sum + t.mcqs.length, 0);

  return (
    <>
      <section className="bg-ink-950 py-16 text-paper-50">
        <Container>
          <div className="flex flex-wrap items-center gap-2 text-xs text-paper-50/50 mb-4">
            <Link href="/cpa" className="hover:text-paper-50">CPA Exam</Link>
            <span>/</span>
            <span>{subject.shortName}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <Badge tone={subject.type === "CORE" ? "gold" : "neutral"}>
                {subject.type === "CORE" ? "Core section" : "Discipline"}
              </Badge>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium">
                {subject.shortName}
              </h1>
              <p className="mt-1 text-lg text-paper-50/70">{subject.name}</p>
              <p className="mt-4 max-w-2xl text-paper-50/60 leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-paper-50/70">
            <span className="flex items-center gap-1.5">
              <DifficultyBadge difficulty={subject.difficulty} />
            </span>
            {subject.estimatedHours && (
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" /> ~{subject.estimatedHours} hrs study time
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-4" /> {subject.topics.length} topics · {totalMcqs}+ MCQs
            </span>
            {subject.blueprintUrl && (
              <a
                href={subject.blueprintUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-paper-50"
              >
                <ExternalLink className="size-4" /> Official Blueprint
              </a>
            )}
          </div>
          <p className="mt-3 text-xs text-paper-50/40">
            Last updated {formatDate(subject.lastUpdated)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {[
            { label: "Complete Study Material", body: "Exam-oriented explanations for every topic" },
            { label: "Quick Revision Notes", body: "The 20% you need the night before" },
            { label: "MCQ Practice", body: "Explained, server-graded questions" },
            { label: "Student Discussions", body: "Ask doubts, read others' explanations" },
          ].map((f) => (
            <div key={f.label} className="rounded-lg border border-ink-950/10 p-4">
              <p className="text-sm font-semibold text-ink-950">{f.label}</p>
              <p className="mt-1 text-xs text-ink-400">{f.body}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-medium mb-6">Topics</h2>
        <div className="flex flex-col gap-3">
          {subject.topics.map((topic, i) => {
            const status = progressMap.get(topic.id) ?? "NOT_STARTED";
            return (
              <Link
                key={topic.id}
                href={topic.isComingSoon ? "#" : `/cpa/${subject.slug}/${topic.slug}`}
                aria-disabled={topic.isComingSoon}
                className={`group flex items-center gap-4 rounded-xl border border-ink-950/10 p-5 transition-shadow ${
                  topic.isComingSoon ? "opacity-60 pointer-events-none" : "hover:shadow-md"
                }`}
              >
                <span className="font-display text-xl text-ink-400 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-ink-950">{topic.title}</h3>
                    {topic.isComingSoon && <Badge tone="neutral">Coming Soon</Badge>}
                    {status === "COMPLETED" && <Badge tone="green">Completed</Badge>}
                    {status === "IN_PROGRESS" && <Badge tone="gold">In Progress</Badge>}
                  </div>
                  <p className="mt-1 text-sm text-ink-400 line-clamp-1">{topic.shortDescription}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-ink-400">
                    <span>Study Material · Revision Notes</span>
                    <span>{topic.mcqs.length} MCQs</span>
                    {topic.estimatedMinutes && <span>{formatMinutes(topic.estimatedMinutes)}</span>}
                  </div>
                  {status !== "NOT_STARTED" && (
                    <ProgressBar
                      value={status === "COMPLETED" ? 100 : 50}
                      className="mt-3 max-w-xs"
                    />
                  )}
                </div>
                <ArrowRight className="size-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
}
