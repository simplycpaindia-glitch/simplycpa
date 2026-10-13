import "server-only";
import { prisma } from "@/lib/prisma";

/**
 * Trust levels, earned automatically from behaviour (the Discourse model, simplified).
 * Every threshold here is also published on the community guidelines page.
 *
 *   NEW      — everyone starts here.
 *   MEMBER   — account ≥ 3 days old, ≥ 2 published posts, nothing removed in 30 days.
 *   TRUSTED  — account ≥ 30 days old, ≥ 15 published posts, ≥ 10 "helpful" received,
 *              nothing removed in 90 days.
 *
 * Effects:
 *   - NEW members' posts are held when the AI check is unsure ("review"); established
 *     members' posts publish in that case.
 *   - Only reports from MEMBER or TRUSTED accounts count towards auto-hiding a post, so
 *     a batch of brand-new accounts can't hide someone's post. All reports still reach
 *     moderators.
 *   - TRUSTED members get a badge on their profile.
 */
export type TrustLevel = "NEW" | "MEMBER" | "TRUSTED";

export const TRUST = {
  MEMBER: { minAgeDays: 3, minPublished: 2, cleanDays: 30 },
  TRUSTED: { minAgeDays: 30, minPublished: 15, minHelpful: 10, cleanDays: 90 },
} as const;

const DAY = 24 * 3_600_000;

export async function getTrustLevel(userId: string): Promise<TrustLevel> {
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { createdAt: true, isBanned: true } });
  if (!user || user.isBanned) return "NEW";
  const ageDays = (Date.now() - user.createdAt.getTime()) / DAY;
  if (ageDays < TRUST.MEMBER.minAgeDays) return "NEW";

  const [published, removed30, removed90] = await Promise.all([
    prisma.journalPost.count({ where: { userId, status: "PUBLISHED" } }),
    prisma.journalPost.count({ where: { userId, status: "REMOVED", reviewedAt: { gte: new Date(Date.now() - TRUST.MEMBER.cleanDays * DAY) } } }),
    prisma.journalPost.count({ where: { userId, status: "REMOVED", reviewedAt: { gte: new Date(Date.now() - TRUST.TRUSTED.cleanDays * DAY) } } }),
  ]);
  if (published < TRUST.MEMBER.minPublished || removed30 > 0) return "NEW";

  if (ageDays >= TRUST.TRUSTED.minAgeDays && published >= TRUST.TRUSTED.minPublished && removed90 === 0) {
    const helpful = await prisma.journalReaction.count({ where: { post: { userId, status: "PUBLISHED" } } });
    if (helpful >= TRUST.TRUSTED.minHelpful) return "TRUSTED";
  }
  return "MEMBER";
}

export const TRUST_LABEL: Record<TrustLevel, string> = {
  NEW: "New member",
  MEMBER: "Member",
  TRUSTED: "Trusted member",
};
