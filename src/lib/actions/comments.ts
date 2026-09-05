"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const MAX_COMMENT_LENGTH = 4000;

export async function postComment(input: {
  topicId: string;
  body: string;
  kind: "QUESTION" | "EXPLANATION" | "TIP" | "DOUBT";
  parentId?: string;
  path: string;
}) {
  const session = await auth();
  if (!session?.user) return { ok: false, requiresAuth: true };

  const body = input.body.trim();
  if (!body || body.length > MAX_COMMENT_LENGTH) {
    return { ok: false, error: "Comment must be between 1 and 4000 characters." };
  }

  const topic = await prisma.topic.findUnique({ where: { id: input.topicId }, select: { id: true } });
  if (!topic) return { ok: false, error: "Topic not found." };

  await prisma.comment.create({
    data: {
      topicId: input.topicId,
      userId: session.user.id,
      body,
      kind: input.kind,
      parentId: input.parentId,
    },
  });

  revalidatePath(input.path);
  return { ok: true };
}

export async function deleteOwnComment(commentId: string, path: string) {
  const session = await auth();
  if (!session?.user) return { ok: false, requiresAuth: true };

  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (!comment) return { ok: false };

  const isOwner = comment.userId === session.user.id;
  const isStaff = ["ADMIN", "MODERATOR"].includes(session.user.role);
  if (!isOwner && !isStaff) return { ok: false, error: "Not authorized." };

  await prisma.comment.update({ where: { id: commentId }, data: { isDeleted: true, body: "" } });
  revalidatePath(path);
  return { ok: true };
}

export async function toggleUpvote(commentId: string, path: string) {
  const session = await auth();
  if (!session?.user) return { ok: false, requiresAuth: true };

  const existing = await prisma.commentUpvote.findUnique({
    where: { commentId_userId: { commentId, userId: session.user.id } },
  });

  if (existing) {
    await prisma.commentUpvote.delete({ where: { id: existing.id } });
  } else {
    await prisma.commentUpvote.create({ data: { commentId, userId: session.user.id } });
  }
  revalidatePath(path);
  return { ok: true, upvoted: !existing };
}
