import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { DeleteAccountForm, MarketingToggle } from "@/components/account/AccountForms";
import { formatDate } from "@/lib/utils";
import { getCommunityUser } from "@/lib/journal/profile";

export const metadata: Metadata = { title: "Your account", robots: { index: false } };

const METHOD_LABEL: Record<string, string> = {
  google: "Google",
  "email-code": "Email code",
  password: "Password",
};

function describeBrowser(ua: string | null) {
  if (!ua) return "Unknown device";
  const browser = /Edg\//.test(ua) ? "Edge" : /Chrome\//.test(ua) ? "Chrome" : /Firefox\//.test(ua) ? "Firefox" : /Safari\//.test(ua) ? "Safari" : "Browser";
  const os = /Android/.test(ua) ? "Android" : /iPhone|iPad/.test(ua) ? "iOS" : /Windows/.test(ua) ? "Windows" : /Mac OS X/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "";
  return os ? `${browser} on ${os}` : browser;
}

export default async function AccountPage() {
  const sessionUser = await requireUser();
  const user = await getCommunityUser(sessionUser.id);
  if (!user) return null;

  const signIns = await prisma.signInEvent.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: { id: true, method: true, createdAt: true, userAgent: true },
  });

  return (
    <Container className="max-w-2xl py-16">
      <h1 className="font-display text-3xl font-medium text-ink-950">Your account</h1>

      <section className="mt-8 rounded-xl border border-ink-950/10 bg-paper-50 p-5">
        <h2 className="font-semibold text-ink-950">Profile</h2>
        <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 text-sm">
          <dt className="text-ink-400">Username</dt>
          <dd>
            {user.username ? (
              <Link href={`/what-i-studied/u/${user.username}`} className="underline">@{user.username}</Link>
            ) : (
              <Link href="/welcome?callbackUrl=/account" className="underline">Choose a username</Link>
            )}
          </dd>
          <dt className="text-ink-400">Email (private)</dt>
          <dd>{user.email}</dd>
          <dt className="text-ink-400">Member since</dt>
          <dd>{formatDate(user.createdAt)}</dd>
          {user.isBanned && (
            <>
              <dt className="text-ink-400">Status</dt>
              <dd className="text-signal-red">Suspended from posting</dd>
            </>
          )}
        </dl>
      </section>

      <section className="mt-6 rounded-xl border border-ink-950/10 bg-paper-50 p-5">
        <h2 className="font-semibold text-ink-950">Email preferences</h2>
        <div className="mt-3">
          <MarketingToggle initial={user.marketingOptIn} />
        </div>
        <p className="mt-2 text-xs text-ink-400">Sign-in codes are always sent when you ask for one, whatever this setting.</p>
      </section>

      <section className="mt-6 rounded-xl border border-ink-950/10 bg-paper-50 p-5">
        <h2 className="font-semibold text-ink-950">Recent sign-ins</h2>
        <p className="mt-1 text-xs text-ink-400">If you don&apos;t recognise one, sign out and <Link href="/contact" className="underline">contact us</Link>.</p>
        {signIns.length === 0 ? (
          <p className="mt-3 text-sm text-ink-400">No sign-ins recorded yet.</p>
        ) : (
          <ul className="mt-3 divide-y divide-ink-950/5 text-sm">
            {signIns.map((s) => (
              <li key={s.id} className="flex justify-between gap-4 py-2">
                <span>{METHOD_LABEL[s.method] ?? s.method} · {describeBrowser(s.userAgent)}</span>
                <span className="text-ink-400">{s.createdAt.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-6 rounded-xl border border-signal-red/20 bg-paper-50 p-5">
        <h2 className="font-semibold text-signal-red">Delete account</h2>
        <div className="mt-3">
          {user.isStaff ? (
            <p className="text-sm text-ink-400">Staff accounts must be removed by another administrator.</p>
          ) : (
            <DeleteAccountForm />
          )}
        </div>
      </section>
    </Container>
  );
}
