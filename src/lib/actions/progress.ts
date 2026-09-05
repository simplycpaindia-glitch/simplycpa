"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function markStudyComplete(topicId: string, path: string) {
  const session = await auth();
  if (!session?.user) return { ok: false, requiresAuth: true };

  await prisma.userProgress.upsert({
    where: { userId_topicId: { userId: session.user.id, topicId } },
    create: { userId: session.user.id, topicId, status: "IN_PROGRESS", studyCompletedAt: new Date() },
    update: { studyCompletedAt: new Date(), status: "IN_PROGRESS" },
  });
  revalidatePath(path);
  return { ok: true };
}

export async function markRevisionComplete(topicId: string, path: string) {
  const session = await auth();
  if (!session?.user) return { ok: false, requiresAuth: true };

  const existing = await prisma.userProgress.findUnique({
    where: { userId_topicId: { userId: session.user.id, topicId } },
  });

  await prisma.userProgress.upsert({
    where: { userId_topicId: { userId: session.user.id, topicId } },
    create: {
      userId: session.user.id,
      topicId,
      status: existing?.studyCompletedAt ? "COMPLETED" : "IN_PROGRESS",
      revisionCompletedAt: new Date(),
    },
    update: {
      revisionCompletedAt: new Date(),
      status: existing?.studyCompletedAt ? "COMPLETED" : "IN_PROGRESS",
    },
  });
  revalidatePath(path);
  return { ok: true };
}
