import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-6">Privacy Policy</h1>
      <p className="text-sm text-ink-400">Last updated 13 October 2026.</p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account details.</strong> Your email address, and — if you choose — a name and a securely hashed
          password (never stored in plain text). If you sign in with Google, we receive your Google account&apos;s email
          address, name and profile picture URL from Google.
        </li>
        <li>
          <strong>Community profile.</strong> Your public username, the date you confirmed you are 18 or older, the date
          and version of the community guidelines you accepted, and whether you opted in to update emails.
        </li>
        <li>
          <strong>Sign-in records.</strong> Each time you sign in we record the time, the method (Google, email code or
          password), your browser&apos;s user-agent string, and a one-way keyed hash of your IP address. We do not store your
          IP address itself. These records protect accounts and help us stop abuse. You can see your recent sign-ins on
          your <Link href="/account">account page</Link>.
        </li>
        <li>
          <strong>Sign-in codes.</strong> When you ask for an email code we store a one-way hash of the code (never the code
          itself), when it expires, how many wrong attempts were made, and a hashed IP address for rate limiting.
        </li>
        <li>
          <strong>What you post and do.</strong> Study-wall posts, &ldquo;helpful&rdquo; reactions and reports you send;
          study progress, practice attempts, bookmarks and comments. When a post is rejected by our automatic checks we keep
          the first 200 characters and the reason, so moderators can spot repeated abuse. With each post we also store the
          study hours you add (if any) and the result of the AI check (allow, review or reject, the category and a short
          reason), which only moderators can see.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        To run your account, show your progress back to you, publish what you choose to post, keep the community safe
        (automatic checks, moderation and rate limits), and — only if you opted in — send occasional updates. We do not
        sell your personal data.
      </p>

      <h2>Who else processes it</h2>
      <ul>
        <li>Our hosting and database providers, which store the data for us.</li>
        <li>Our email provider, which delivers sign-in codes to your inbox.</li>
        <li>Google, if you choose to sign in with Google.</li>
        <li>
          Anthropic, if AI review is enabled. The text of each study-wall post (and nothing else — not your email, username
          or account details) is sent to Anthropic&apos;s Claude model to check it against the community guidelines.
          Under Anthropic&apos;s commercial terms, this data is not used to train its models by default.
        </li>
        <li>Cloudflare Turnstile, if enabled, which checks that sign-in requests come from a person rather than a bot.</li>
        <li>Vercel Web Analytics, which measures page views without cookies.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use a session cookie to keep you signed in. We do not use third-party advertising trackers.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Your account data stays until you delete your account. Used or expired sign-in codes are only needed for a short
        time and are periodically deleted. Moderation records are kept while the related account exists.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>Delete any of your study-wall posts or comments at any time.</li>
        <li>Turn update emails on or off on your <Link href="/account">account page</Link>.</li>
        <li>
          Delete your account — and with it your posts, reactions, reports, progress, comments and sign-in records — from
          your <Link href="/account">account page</Link>. You can also ask us to correct your data via the{" "}
          <Link href="/contact">contact page</Link>.
        </li>
      </ul>
      <p>
        The community is for people aged 18 and over. We process personal data in line with India&apos;s Digital Personal
        Data Protection Act, 2023.
      </p>
    </Container>
  );
}
