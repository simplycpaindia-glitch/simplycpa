import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-6">Privacy Policy</h1>

      <h2>What we collect</h2>
      <p>
        When you create an account, we store your name, email address, and a securely hashed
        password (we never store your password in plain text). As you use the site, we store
        your study progress, MCQ attempts, bookmarks, and comments so you can pick up where you
        left off.
      </p>

      <h2>How we use it</h2>
      <p>
        Your data is used to run your account, show your progress and practice history back to
        you, and moderate community content. We do not sell your personal data to third parties.
      </p>

      <h2>Cookies</h2>
      <p>
        We use a session cookie to keep you logged in. We do not use third-party advertising
        trackers.
      </p>

      <h2>Your choices</h2>
      <p>
        You can edit or delete your comments at any time. To request deletion of your account
        and associated data, contact us via the Contact page.
      </p>
    </Container>
  );
}
