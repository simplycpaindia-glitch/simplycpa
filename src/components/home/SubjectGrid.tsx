import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";

export async function SubjectGrid() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: { select: { topics: true } },
      topics: { select: { mcqs: { where: { status: "PUBLISHED" }, select: { id: true } } } },
    },
  });

  const core = subjects.filter((s) => s.type === "CORE");
  const discipline = subjects.filter((s) => s.type === "DISCIPLINE");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="What do you want to study?"
          description="Every candidate takes the three Core sections. Then you choose one Discipline."
        />

        <div className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
            Core sections
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {core.map((s) => (
              <SubjectCard key={s.id} subject={s} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
            Discipline — choose one
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {discipline.map((s) => (
              <SubjectCard key={s.id} subject={s} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SubjectCard({
  subject,
}: {
  subject: {
    id: string;
    slug: string;
    shortName: string;
    name: string;
    type: string;
    _count: { topics: number };
    topics: { mcqs: { id: string }[] }[];
  };
}) {
  const mcqCount = subject.topics.reduce((sum, t) => sum + t.mcqs.length, 0);

  return (
    <Link
      href={`/cpa/${subject.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-ink-950/10 bg-paper-50 p-5 transition-colors hover:border-ink-950/25"
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <span className="font-display text-2xl font-semibold text-ink-950">
            {subject.shortName}
          </span>
          {subject.type === "DISCIPLINE" && <Badge tone="neutral">Discipline</Badge>}
        </div>
        <p className="mt-1 text-sm text-ink-400">{subject.name}</p>
        <p className="mt-3 text-sm text-ink-800">{subject._count.topics} Topics</p>
        <p className="mt-1 text-xs text-ink-400">
          Study Material · Revision · {mcqCount > 0 ? `${mcqCount} MCQs` : "MCQs"}
        </p>
      </div>
      <span className="mt-5 flex items-center gap-1 text-sm font-medium text-ink-950">
        Start Studying
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
