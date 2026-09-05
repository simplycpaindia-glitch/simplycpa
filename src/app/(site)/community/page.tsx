import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Community",
  description: "Recent student discussions across every CPA topic.",
};

export default async function CommunityPage() {
  const comments = await prisma.comment.findMany({
    where: { isDeleted: false },
    orderBy: { createdAt: "desc" },
    take: 30,
    include: {
      user: { select: { name: true } },
      topic: { select: { slug: true, title: true, subject: { select: { slug: true, shortName: true } } } },
    },
  });

  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Community"
        title="Recent discussions"
        description="Every topic page has its own discussion — questions, tips, and doubts from other candidates. Here's what's been asked recently."
      />
      <div className="mt-10 flex flex-col divide-y divide-ink-950/10 max-w-3xl">
        {comments.map((c) => (
          <Link
            key={c.id}
            href={`/cpa/${c.topic.subject.slug}/${c.topic.slug}#discussion`}
            className="py-4 block hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
              <Badge tone="neutral">{c.topic.subject.shortName}</Badge>
              <span>{c.topic.title}</span>
              <span>· {c.user.name ?? "Student"}</span>
              <span>· {formatDate(c.createdAt)}</span>
            </div>
            <p className="mt-1 text-sm text-ink-800 line-clamp-2">{c.body}</p>
          </Link>
        ))}
        {comments.length === 0 && (
          <p className="py-6 text-ink-400">No discussions yet — be the first to ask something on any topic page.</p>
        )}
      </div>
    </Container>
  );
}
