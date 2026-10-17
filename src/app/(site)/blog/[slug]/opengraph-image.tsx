import { prisma } from "@/lib/prisma";
import { clip, ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "SimplyCPA blog post";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug }, select: { title: true, category: true, status: true } });
  if (!post || post.status !== "PUBLISHED") return ogImage({ eyebrow: "Blog", title: "SimplyCPA blog" });
  return ogImage({ eyebrow: `Blog · ${post.category}`, title: clip(post.title, 110) });
}
