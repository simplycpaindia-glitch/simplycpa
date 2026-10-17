import { prisma } from "@/lib/prisma";
import { clip, ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "SimplyCPA study topic";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ subject: string; topic: string }> }) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug }, select: { id: true, shortName: true, name: true } });
  const topic = subject
    ? await prisma.topic.findUnique({ where: { subjectId_slug: { subjectId: subject.id, slug: topicSlug } }, select: { title: true, shortDescription: true } })
    : null;
  if (!subject || !topic) return ogImage({ eyebrow: "US CPA", title: "SimplyCPA study library" });
  return ogImage({
    eyebrow: `${subject.shortName} · ${subject.name}`,
    title: clip(topic.title, 90),
    subtitle: topic.shortDescription ? clip(topic.shortDescription, 150) : "Study material, 5-minute revision and practice MCQs.",
  });
}
