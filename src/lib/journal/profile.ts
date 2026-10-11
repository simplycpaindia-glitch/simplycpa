import "server-only";
import { prisma } from "@/lib/prisma";
import { GUIDELINES_VERSION } from "./constants";

const STAFF_ROLES = new Set(["ADMIN", "EDITOR", "MODERATOR"]);

export type CommunityUser = {
  id: string;
  email: string;
  username: string | null;
  role: string;
  isStaff: boolean;
  isBanned: boolean;
  marketingOptIn: boolean;
  /** Has a username, confirmed 18+, and accepted the current guidelines. */
  isProfileComplete: boolean;
  needsGuidelinesReaccept: boolean;
  createdAt: Date;
};

export async function getCommunityUser(userId: string): Promise<CommunityUser | null> {
  const u = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      username: true,
      role: true,
      isBanned: true,
      marketingOptIn: true,
      ageConfirmedAt: true,
      guidelinesAcceptedAt: true,
      guidelinesVersion: true,
      createdAt: true,
    },
  });
  if (!u) return null;
  const accepted = !!u.guidelinesAcceptedAt && u.guidelinesVersion === GUIDELINES_VERSION;
  return {
    id: u.id,
    email: u.email,
    username: u.username,
    role: u.role,
    isStaff: STAFF_ROLES.has(u.role),
    isBanned: u.isBanned,
    marketingOptIn: u.marketingOptIn,
    isProfileComplete: !!u.username && !!u.ageConfirmedAt && accepted,
    needsGuidelinesReaccept: !!u.username && !accepted,
    createdAt: u.createdAt,
  };
}
