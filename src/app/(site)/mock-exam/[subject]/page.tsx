import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { FullMockRunner } from "@/components/practice/FullMockRunner";
import { EXAM_MINUTES } from "@/lib/full-mock";
import { getFullMock } from "@/lib/full-mock-data";

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params;
  return {
    title: `${subject.toUpperCase()} Full-Length Mock Exam`,
    // The form changes monthly, so the hub page is the one to index.
    robots: { index: false, follow: true },
    alternates: { canonical: `/mock-exam/${subject}` },
  };
}

// Picks this month's form on each request.
export const dynamic = "force-dynamic";

export default async function FullMockPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const [mock, session] = await Promise.all([getFullMock(slug), auth()]);
  if (!mock) notFound();
  const monthName = new Date(`${mock.month}-01T00:00:00Z`).toLocaleDateString("en-IN", { timeZone: "UTC", month: "long", year: "numeric" });
  const mcqs = mock.testlets.reduce((n, t) => n + (t.kind === "mcq" ? t.mcqs.length : 0), 0);
  const sims = mock.testlets.reduce((n, t) => n + (t.kind === "tbs" ? t.sims.length : 0), 0);

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-8">
        <Container className="max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/mock-exam" className="hover:text-ink-950">Mock exams</Link>
            <span>/</span>
            <span className="text-ink-950">{mock.subject.shortName}</span>
          </div>
          <h1 className="font-display text-3xl font-medium text-ink-950">{mock.subject.shortName} full-length mock exam</h1>
          <p className="mt-2 text-ink-400">
            {mock.subject.name} · {monthName} form · {mcqs} multiple-choice questions and {sims} simulations · {EXAM_MINUTES / 60} hours
          </p>
          {!mock.complete && (
            <p className="mt-2 text-sm text-signal-red">This section&apos;s question bank is not yet large enough for a complete form, so this mock is shorter than the real exam.</p>
          )}
        </Container>
      </div>
      <Container className="max-w-4xl py-8">
        <FullMockRunner
          subject={{ id: mock.subject.id, slug: mock.subject.slug, shortName: mock.subject.shortName }}
          month={mock.month}
          testlets={mock.testlets}
          mcqWeight={mock.mcqWeight}
          isLoggedIn={!!session?.user}
        />
      </Container>
    </>
  );
}
