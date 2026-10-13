import "server-only";
import { prisma } from "@/lib/prisma";
import { computeStats, type StudyStats } from "./streaks";

export type { StudyStats };

export async function getStudyStats(userId: string): Promise<StudyStats> {
  const posts = await prisma.journalPost.findMany({
    where: { userId, status: "PUBLISHED" },
    select: { createdAt: true, studyHours: true },
  });
  return computeStats(posts);
}
