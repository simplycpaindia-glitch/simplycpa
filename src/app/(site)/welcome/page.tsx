import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { WelcomeForm } from "@/components/journal/WelcomeForm";
import { getCommunityUser } from "@/lib/journal/profile";
import { safeCallbackPath } from "@/lib/journal/security";

export const metadata: Metadata = { title: "Set up your profile", robots: { index: false } };

export default async function WelcomePage({ searchParams }: PageProps<"/welcome">) {
  const { callbackUrl: rawCallback } = await searchParams;
  const callbackUrl = safeCallbackPath(rawCallback, "/what-i-studied");

  const session = await auth();
  if (!session?.user) redirect(`/login?callbackUrl=${encodeURIComponent(`/welcome?callbackUrl=${callbackUrl}`)}`);
  const user = await getCommunityUser(session.user.id);
  if (!user) redirect("/login");
  if (user.isProfileComplete) redirect(callbackUrl);

  return (
    <Container className="max-w-md py-16">
      <h1 className="font-display text-3xl font-medium text-ink-950">
        {user.needsGuidelinesReaccept ? "Updated community guidelines" : "Welcome to SimplyCPA"}
      </h1>
      <p className="mb-8 mt-2 text-sm text-ink-400">
        {user.needsGuidelinesReaccept
          ? "We've updated our community guidelines. Please review and accept them to keep posting."
          : "Choose how you'll appear on the study wall. Your email address is never shown to other members."}
      </p>
      <WelcomeForm existingUsername={user.username} callbackUrl={callbackUrl} />
      {!callbackUrl.startsWith("/what-i-studied") && (
        <p className="mt-6 text-center text-sm">
          <Link href={callbackUrl} className="text-ink-400 underline hover:text-ink-950">
            Skip for now — you only need this to post on the study wall
          </Link>
        </p>
      )}
    </Container>
  );
}
