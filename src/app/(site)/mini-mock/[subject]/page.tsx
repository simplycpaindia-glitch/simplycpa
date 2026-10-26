import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { MockRunner } from "@/components/practice/MockRunner";
import { MOCK_MINUTES } from "@/lib/mini-mock";
import { getThisWeeksResult, getWeeklyMock } from "@/lib/mini-mock-data";
import { formatIsoDate } from "@/lib/utils";

export async function generateMetadata({ params }: PageProps<"/mini-mock/[subject]">): Promise<Metadata> {
  const { subject } = await params;
  const name = subject.toUpperCase();
  return {
    title: `${name} Mini-Mock: This Week's Timed Practice Test`,
    // The questions change weekly, so the hub page is the one to index.
    robots: { index: false, follow: true },
    alternates: { canonical: `/mini-mock/${subject}` },
  };
}

// Picks this week's questions on each request (they change every Monday).
export const dynamic = "force-dynamic";

export default async function MiniMockPage({ params }: PageProps<"/mini-mock/[subject]">) {
  const { subject: slug } = await params;
  const [mock, session] = await Promise.all([getWeeklyMock(slug), auth()]);
  if (!mock) notFound();
  const previous = session?.user ? await getThisWeeksResult(session.user.id, mock.subject.id, mock.week) : null;

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-8">
        <Container className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/mini-mock" className="hover:text-ink-950">Mini-mocks</Link>
            <span>/</span>
            <span className="text-ink-950">{mock.subject.shortName}</span>
          </div>
          <h1 className="font-display text-3xl font-medium text-ink-950">{mock.subject.shortName} mini-mock</h1>
          <p className="mt-2 text-ink-400">
            {mock.subject.name} · week of {formatIsoDate(mock.week)} · {mock.questions.length} questions · {MOCK_MINUTES} minutes
          </p>
          {previous && (
            <p className="mt-2 text-sm text-ink-800">
              You took this week&apos;s mock and scored {previous.score}/{previous.totalQuestions}. You can take it again; both scores are saved.
            </p>
          )}
        </Container>
      </div>
      <Container className="max-w-3xl py-8">
        {mock.questions.length === 0 ? (
          <p className="text-ink-400">There aren&apos;t enough questions for a mock in this section yet.</p>
        ) : (
          <MockRunner
            subject={{ id: mock.subject.id, slug: mock.subject.slug, shortName: mock.subject.shortName }}
            week={mock.week}
            questions={mock.questions}
            minutes={MOCK_MINUTES}
            isLoggedIn={!!session?.user}
          />
        )}
      </Container>
    </>
  );
}
