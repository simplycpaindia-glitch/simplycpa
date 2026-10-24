import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SimulationExhibits } from "@/components/practice/SimulationExhibits";
import { SimulationPlayer } from "@/components/practice/SimulationPlayer";
import { getSimulation, getSimulations } from "@/lib/tbs";
import { toPublic } from "@/lib/tbs/grade";
import { FORMAT_LABEL } from "@/lib/tbs/types";

async function getData(subjectSlug: string, slug: string) {
  const sim = getSimulation(subjectSlug, slug);
  if (!sim) return null;
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug }, select: { id: true, slug: true, shortName: true } });
  if (!subject) return null;
  const topic = await prisma.topic.findUnique({
    where: { subjectId_slug: { subjectId: subject.id, slug: sim.topic } },
    select: { slug: true, title: true },
  });
  return { sim, subject, topic };
}

export function generateStaticParams({ params }: { params: { subject: string } }) {
  return getSimulations(params.subject).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cpa/[subject]/simulations/[slug]">): Promise<Metadata> {
  const { subject, slug } = await params;
  const data = await getData(subject, slug);
  if (!data) return {};
  const { sim } = data;
  const first = sim.scenario[0];
  return {
    title: `${sim.title} · ${data.subject.shortName} Simulation`,
    description: `Free ${data.subject.shortName} task-based simulation (${FORMAT_LABEL[sim.format].toLowerCase()}): ${first.length > 120 ? `${first.slice(0, 117)}…` : first}`,
    alternates: { canonical: `/cpa/${subject}/simulations/${slug}` },
  };
}

export default async function SimulationPage({ params }: PageProps<"/cpa/[subject]/simulations/[slug]">) {
  const { subject: subjectSlug, slug } = await params;
  const data = await getData(subjectSlug, slug);
  if (!data) notFound();
  const { sim, subject, topic } = data;
  const siblings = getSimulations(subjectSlug).filter((s) => s.topic === sim.topic && s.slug !== sim.slug);

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-8">
        <Container className="max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href={`/cpa/${subject.slug}`} className="hover:text-ink-950">{subject.shortName}</Link>
            <span>/</span>
            <Link href={`/cpa/${subject.slug}/simulations`} className="hover:text-ink-950">Simulations</Link>
            <span>/</span>
            <span className="text-ink-950">{sim.title}</span>
          </div>
          <h1 className="font-display text-3xl font-medium text-balance text-ink-950">{sim.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-400">
            <Badge tone="neutral">{FORMAT_LABEL[sim.format]}</Badge>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" /> Suggested time: {sim.minutes} min
            </span>
            {topic && (
              <Link href={`/cpa/${subject.slug}/${topic.slug}`} className="underline underline-offset-2 hover:text-ink-950">
                {topic.title}
              </Link>
            )}
          </div>
        </Container>
      </div>

      <Container className="max-w-4xl py-10">
        <section aria-labelledby="scenario">
          <h2 id="scenario" className="font-display text-xl font-medium text-ink-950">Scenario</h2>
          <div className="mt-3 flex flex-col gap-3">
            {sim.scenario.map((p, i) => (
              <p key={i} className="leading-relaxed text-ink-800">{p}</p>
            ))}
          </div>
        </section>

        {sim.exhibits && sim.exhibits.length > 0 && (
          <section aria-labelledby="exhibits" className="mt-8">
            <h2 id="exhibits" className="font-display text-xl font-medium text-ink-950">Exhibits</h2>
            <div className="mt-3">
              <SimulationExhibits exhibits={sim.exhibits} />
            </div>
          </section>
        )}

        <section aria-labelledby="task" className="mt-8">
          <h2 id="task" className="font-display text-xl font-medium text-ink-950">Your task</h2>
          <div className="mt-3">
            <SimulationPlayer sim={toPublic(sim)} />
          </div>
        </section>

        <nav aria-label="More practice" className="mt-12 border-t border-ink-950/10 pt-6 text-sm">
          {siblings.length > 0 && (
            <p className="text-ink-800">
              Next on this topic:{" "}
              {siblings.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 && ", "}
                  <Link href={`/cpa/${subject.slug}/simulations/${s.slug}`} className="font-medium underline underline-offset-2">{s.title}</Link>
                </span>
              ))}
            </p>
          )}
          <p className="mt-2 text-ink-400">
            {topic && (
              <>
                <Link href={`/cpa/${subject.slug}/${topic.slug}`} className="underline underline-offset-2 hover:text-ink-950">Study {topic.title}</Link>
                {" · "}
              </>
            )}
            <Link href={`/cpa/${subject.slug}/simulations`} className="underline underline-offset-2 hover:text-ink-950">All {subject.shortName} simulations</Link>
          </p>
        </nav>
      </Container>
    </>
  );
}
