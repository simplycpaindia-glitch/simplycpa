import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { Badge, DifficultyBadge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

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
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400 mb-4">
            <Link href="/cpa" className="hover:text-ink-950">CPA Exam</Link>
            <span>/</span>
            <span>{subject.shortName}</span>
          </div>

          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="font-display text-4xl font-medium text-ink-950">{subject.shortName}</h1>
            <Badge tone={subject.type === "CORE" ? "dark" : "neutral"}>
              {subject.type === "CORE" ? "Core section" : "Discipline"}
            </Badge>
          </div>
          <p className="mt-1 text-lg text-ink-400">{subject.name}</p>
          <p className="mt-4 max-w-2xl text-ink-400 leading-relaxed">{subject.description}</p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-400">
            <span>{subject.topics.length} topics</span>
            <span>{totalMcqs} MCQs</span>
            <DifficultyBadge difficulty={subject.difficulty} />
            {subject.estimatedHours && <span>~{subject.estimatedHours} hrs total study time</span>}
            {subject.blueprintUrl && (
              <a
                href={subject.blueprintUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-ink-950"
              >
                <ExternalLink className="size-3.5" /> Official Blueprint
              </a>
            )}
          </div>
          <p className="mt-2 text-xs text-ink-400">Last updated {formatDate(subject.lastUpdated)}</p>
        </Container>
      </div>

      <Container className="py-12">
        <h2 className="mb-4 font-display text-xl font-medium">Topics</h2>
        <div className="overflow-x-auto rounded-lg border border-ink-950/10">
          <table className="w-full text-sm">
            <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
              <tr>
                <th className="px-4 py-3 w-10">#</th>
                <th className="px-4 py-3">Topic</th>
                <th className="px-4 py-3 text-center">Study</th>
                <th className="px-4 py-3 text-center">Revise</th>
                <th className="px-4 py-3 text-center">Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-950/10">
              {subject.topics.map((topic, i) => {
                const status = progressMap.get(topic.id) ?? "NOT_STARTED";
                if (topic.isComingSoon) {
                  return (
                    <tr key={topic.id} className="opacity-50">
                      <td className="px-4 py-3 text-ink-400">{i + 1}</td>
                      <td className="px-4 py-3">
                        <span className="font-medium text-ink-950">{topic.title}</span>{" "}
                        <Badge tone="neutral">Coming Soon</Badge>
                      </td>
                      <td className="px-4 py-3 text-center text-ink-400">—</td>
                      <td className="px-4 py-3 text-center text-ink-400">—</td>
                      <td className="px-4 py-3 text-center text-ink-400">—</td>
                    </tr>
                  );
                }
                const base = `/cpa/${subject.slug}/${topic.slug}`;
                return (
                  <tr key={topic.id} className="hover:bg-ink-950/[0.02]">
                    <td className="px-4 py-3 text-ink-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={base} className="font-medium text-ink-950 hover:underline">
                        {topic.title}
                      </Link>
                      {status === "COMPLETED" && <Badge tone="green" className="ml-2">Done</Badge>}
                      {status === "IN_PROGRESS" && <Badge tone="gold" className="ml-2">In progress</Badge>}
                      <p className="mt-0.5 text-xs text-ink-400 line-clamp-1">{topic.shortDescription}</p>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link href={base} className="text-ink-800 hover:underline">→</Link>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link href={`/quick-sheets/${subject.slug}/${topic.slug}`} className="text-ink-800 hover:underline">→</Link>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link href={`${base}#mcqs`} className="text-ink-800 hover:underline">
                        {topic.mcqs.length > 0
                          ? `${topic.mcqs.length} MCQ${topic.mcqs.length === 1 ? "" : "s"}`
                          : "→"}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
