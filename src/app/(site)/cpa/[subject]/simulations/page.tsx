import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { areaWeight, groupByArea } from "@/lib/blueprint";
import { getSimulations } from "@/lib/tbs";
import { FORMAT_LABEL } from "@/lib/tbs/types";

async function getData(slug: string) {
  const sims = getSimulations(slug);
  if (sims.length === 0) return null;
  const subject = await prisma.subject.findUnique({
    where: { slug },
    include: { topics: { where: { isComingSoon: false }, orderBy: { order: "asc" }, select: { slug: true, title: true, blueprintArea: true, order: true } } },
  });
  if (!subject) return null;
  return { subject, sims };
}

export async function generateMetadata({ params }: PageProps<"/cpa/[subject]/simulations">): Promise<Metadata> {
  const { subject: slug } = await params;
  const data = await getData(slug);
  if (!data) return {};
  const name = data.subject.shortName;
  return {
    title: `${name} Task-Based Simulations — Free Practice`,
    description: `${data.sims.length} free ${name} task-based simulations (TBS) in the exam's formats — journal entries, calculations, document review and research — graded with explanations.`,
    alternates: { canonical: `/cpa/${slug}/simulations` },
  };
}

export default async function SimulationsPage({ params }: PageProps<"/cpa/[subject]/simulations">) {
  const { subject: slug } = await params;
  const data = await getData(slug);
  if (!data) notFound();
  const { subject, sims } = data;

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/cpa" className="hover:text-ink-950">CPA Exam</Link>
            <span>/</span>
            <Link href={`/cpa/${subject.slug}`} className="hover:text-ink-950">{subject.shortName}</Link>
            <span>/</span>
            <span>Simulations</span>
          </div>
          <h1 className="font-display text-4xl font-medium text-ink-950">{subject.shortName} task-based simulations</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Task-based simulations (TBS) are the case-study questions that carry about half the score in {subject.shortName}. Each one here
            gives you a short scenario, the documents you need and an answer grid in a real exam format. Check your answers to see
            what was right and why.
          </p>
          <p className="mt-3 text-sm text-ink-400">
            {sims.length} simulations · at least 2 per topic · No sign-in needed
          </p>
        </Container>
      </div>

      <Container className="py-12">
        {groupByArea(subject.topics).map((group) => (
          <section key={group.area} className="mb-10">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold-700">
              {group.area}
              {areaWeight(subject.slug, group.area) && (
                <span className="ml-2 font-medium normal-case tracking-normal text-ink-400">· {areaWeight(subject.slug, group.area)} of the exam</span>
              )}
            </h2>
            <div className="flex flex-col gap-6">
              {group.topics.map((topic) => {
                const list = sims.filter((s) => s.topic === topic.slug);
                if (list.length === 0) return null;
                return (
                  <div key={topic.slug}>
                    <h3 className="font-display text-lg font-medium text-ink-950">
                      <Link href={`/cpa/${subject.slug}/${topic.slug}`} className="hover:underline">{topic.title}</Link>
                    </h3>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {list.map((s) => (
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
                              <span>{s.rows.length} answers</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
