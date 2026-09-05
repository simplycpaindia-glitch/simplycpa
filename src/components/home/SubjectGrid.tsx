import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";
import { formatMinutes } from "@/lib/utils";

export async function SubjectGrid() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { topics: true } } },
  });

  return (
    <section className="py-20 bg-paper-100">
      <Container>
        <SectionHeading
          eyebrow="Explore Subjects"
          title="Every section, organized the way you'll actually study it"
          description="Topic by topic, not one giant PDF. Each subject below links straight into study material, revision notes, and MCQ practice."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/cpa/${subject.slug}`}
              className="group rounded-xl border border-ink-950/10 bg-paper-50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge tone={subject.type === "CORE" ? "dark" : "gold"}>
                    {subject.type === "CORE" ? "Core" : "Discipline"}
                  </Badge>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950">
                    {subject.shortName}
                  </h3>
                  <p className="text-sm text-ink-400">{subject.name}</p>
                </div>
                <ArrowUpRight className="size-5 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-4 flex gap-4 text-xs text-ink-400">
                <span>{subject._count.topics} topics</span>
                {subject.estimatedHours && (
                  <span>{formatMinutes(subject.estimatedHours * 60)} study time</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
