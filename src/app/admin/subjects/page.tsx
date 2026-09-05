import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default async function AdminSubjectsPage() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { topics: true } } },
  });

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Subjects</h1>
      <div className="flex flex-col gap-3">
        {subjects.map((s) => (
          <Link key={s.id} href={`/admin/subjects/${s.id}`}>
            <Card className="p-5 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-ink-950">{s.shortName}</span>
                  <Badge tone={s.type === "CORE" ? "dark" : "gold"}>{s.type}</Badge>
                </div>
                <p className="text-sm text-ink-400">{s.name}</p>
              </div>
              <span className="text-sm text-ink-400">{s._count.topics} topics</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
