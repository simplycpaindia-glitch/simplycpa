"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { auth, signOut } from "@/lib/auth";
import { GUIDELINES_VERSION } from "@/lib/journal/constants";
import { checkUsername, normaliseUsername } from "@/lib/journal/moderation";
import { getCommunityUser } from "@/lib/journal/profile";
import { safeCallbackPath } from "@/lib/journal/security";

export type ProfileFormState = { error?: string; field?: string } | undefined;

/** One-time community set-up: username, 18+ confirmation, guidelines, optional emails. */
export async function completeProfile(_prev: ProfileFormState, formData: FormData): Promise<ProfileFormState> {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/welcome");

  const current = await getCommunityUser(session.user.id);
  if (!current) redirect("/login?callbackUrl=/welcome");

  const ageConfirmed = formData.get("ageConfirmed") === "on";
  const guidelinesAccepted = formData.get("guidelinesAccepted") === "on";
  const marketingOptIn = formData.get("marketingOptIn") === "on";

  // Existing members only re-accept updated guidelines; their username is fixed.
  let username = current.username;
  if (!username) {
    const raw = String(formData.get("username") ?? "");
    const problem = checkUsername(raw);
    if (problem) return { error: problem, field: "username" };
    username = normaliseUsername(raw);
  }
  if (!ageConfirmed) return { error: "You must be 18 or older to post on SimplyCPA.", field: "ageConfirmed" };
  if (!guidelinesAccepted) return { error: "Please accept the community guidelines to continue.", field: "guidelinesAccepted" };

  const now = new Date();
  try {
    await prisma.user.update({
      where: { id: current.id },
      data: {
        username,
        ageConfirmedAt: now,
        guidelinesAcceptedAt: now,
        guidelinesVersion: GUIDELINES_VERSION,
        marketingOptIn,
        marketingOptInAt: marketingOptIn ? now : null,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return { error: "That username is taken — please choose another.", field: "username" };
    }
    throw err;
  }

  revalidatePath("/what-i-studied");
  redirect(safeCallbackPath(formData.get("callbackUrl"), "/what-i-studied"));
}

export async function setMarketingOptIn(optIn: boolean) {
  const session = await auth();
  if (!session?.user) return { ok: false as const, error: "Please sign in." };
  await prisma.user.update({
    where: { id: session.user.id },
    data: { marketingOptIn: optIn, marketingOptInAt: optIn ? new Date() : null },
  });
  revalidatePath("/account");
  return { ok: true as const };
}

export type DeleteAccountState = { error?: string } | undefined;

/**
 * Permanently deletes the signed-in account and everything attached to it (posts,
 * reactions, reports, progress, comments, sign-in records). Staff accounts must be
 * removed by another administrator so the site can't be locked out by accident.
 */
export async function deleteMyAccount(_prev: DeleteAccountState, formData: FormData): Promise<DeleteAccountState> {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/account");
  if (String(formData.get("confirm") ?? "").trim() !== "DELETE") {
    return { error: 'Type DELETE in capital letters to confirm.' };
  }
  const me = await getCommunityUser(session.user.id);
  if (!me) redirect("/");
  if (me.isStaff) return { error: "Staff accounts can't be deleted here. Ask another administrator." };

  await prisma.$transaction([
    // Comment replies reference their parent with NO ACTION, so detach other people's
    // replies from this user's comments before those comments are cascade-deleted.
    prisma.comment.updateMany({ where: { parent: { userId: me.id } }, data: { parentId: null } }),
    prisma.user.delete({ where: { id: me.id } }),
  ]);
  revalidatePath("/what-i-studied");
  await signOut({ redirectTo: "/?account=deleted" });
  return undefined;
}
