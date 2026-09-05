import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Saved for Later" };

export default async function BookmarksPage() {
  const user = await requireUser();
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  const topicIds = bookmarks.filter((b) => b.targetType === "TOPIC").map((b) => b.targetId);
  const topics = topicIds.length
    ? await prisma.topic.findMany({
        where: { id: { in: topicIds } },
        include: { subject: true },
      })
    : [];
  const topicById = new Map(topics.map((t) => [t.id, t]));

  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Dashboard" title="Saved for later" />
      <div className="mt-8 flex flex-col divide-y divide-ink-950/10 max-w-2xl">
        {bookmarks.map((b) => {
          const topic = b.targetType === "TOPIC" ? topicById.get(b.targetId) : null;
          if (!topic) return null;
          return (
            <Link
              key={b.id}
              href={`/cpa/${topic.subject.slug}/${topic.slug}`}
              className="py-4 hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md"
            >
              <p className="text-xs text-ink-400">{topic.subject.shortName}</p>
              <p className="text-sm font-medium text-ink-950">{topic.title}</p>
            </Link>
          );
        })}
        {bookmarks.length === 0 && (
          <p className="py-6 text-sm text-ink-400">Nothing saved yet — bookmark a topic to see it here.</p>
        )}
      </div>
    </Container>
  );
}
