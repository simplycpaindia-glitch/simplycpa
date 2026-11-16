import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { MockRunner } from "@/components/practice/MockRunner";
import { READINESS_SECONDS_EACH } from "@/lib/readiness";
import { getReadinessCheck } from "@/lib/readiness-data";

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params;
  return {
    title: `${subject.toUpperCase()} Readiness Check`,
    // The questions change monthly, so the hub page is the one to index.
    robots: { index: false, follow: true },
    alternates: { canonical: `/tools/cpa-readiness-check/${subject}` },
  };
}

// Picks this month's questions on each request.
export const dynamic = "force-dynamic";

export default async function ReadinessCheckPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const [check, session] = await Promise.all([getReadinessCheck(slug), auth()]);
  if (!check) notFound();
  const minutes = Math.round((check.questions.length * READINESS_SECONDS_EACH) / 60);
  const monthName = new Date(`${check.month}-01T00:00:00Z`).toLocaleDateString("en-IN", { timeZone: "UTC", month: "long", year: "numeric" });

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-8">
        <Container className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/tools" className="hover:text-ink-950">Tools</Link>
            <span>/</span>
            <Link href="/tools/cpa-readiness-check" className="hover:text-ink-950">Readiness Check</Link>
            <span>/</span>
            <span className="text-ink-950">{check.subject.shortName}</span>
          </div>
          <h1 className="font-display text-3xl font-medium text-ink-950">{check.subject.shortName} readiness check</h1>
          <p className="mt-2 text-ink-400">
            {check.subject.name} · {monthName} · {check.questions.length} questions from {check.topics} topics · {minutes} minutes
          </p>
        </Container>
      </div>
      <Container className="max-w-3xl py-8">
        {check.questions.length === 0 ? (
          <p className="text-ink-400">There aren&apos;t enough questions for a readiness check in this section yet.</p>
        ) : (
          <MockRunner
            kind="readiness"
            subject={{ id: check.subject.id, slug: check.subject.slug, shortName: check.subject.shortName }}
            week={check.month}
            questions={check.questions}
            minutes={minutes}
            isLoggedIn={!!session?.user}
          />
        )}
      </Container>
    </>
  );
}
