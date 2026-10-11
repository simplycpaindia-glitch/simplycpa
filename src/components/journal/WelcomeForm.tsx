"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { completeProfile } from "@/lib/actions/profile";
import { checkUsername } from "@/lib/journal/moderation";
import { USERNAME_MAX } from "@/lib/journal/constants";

export function WelcomeForm({ existingUsername, callbackUrl }: { existingUsername: string | null; callbackUrl: string }) {
  const [state, action, pending] = useActionState(completeProfile, undefined);
  const [username, setUsername] = useState("");
  const live = !existingUsername && username ? checkUsername(username) : null;

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      {existingUsername ? (
        <p className="text-sm text-ink-800">
          Signed in as <strong>@{existingUsername}</strong>.
        </p>
      ) : (
        <div>
          <label htmlFor="username" className="mb-1.5 block text-sm font-medium text-ink-950">
            Public username
          </label>
          <div className="flex items-center rounded-lg border border-ink-950/15 focus-within:border-ink-950/40">
            <span className="pl-3.5 text-sm text-ink-400">@</span>
            <input
              id="username"
              name="username"
              required
              autoComplete="username"
              maxLength={USERNAME_MAX}
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s/g, ""))}
              className="w-full rounded-lg bg-transparent px-1.5 py-2.5 text-sm outline-none"
              aria-describedby="username-help"
            />
          </div>
          <p id="username-help" className={live ? "mt-1.5 text-xs text-signal-red" : "mt-1.5 text-xs text-ink-400"}>
            {live ?? "3–20 lowercase letters, numbers or underscores. Shown on your posts; it can't be changed later."}
          </p>
        </div>
      )}

      <fieldset className="flex flex-col gap-3 rounded-lg border border-ink-950/10 p-4 text-sm text-ink-800">
        <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-ink-400">Please confirm</legend>
        <label className="flex items-start gap-2.5">
          <input type="checkbox" name="ageConfirmed" required className="mt-0.5" />
          <span>
            I am <strong>18 years or older</strong>. <span className="text-ink-400">(Required)</span>
          </span>
        </label>
        <label className="flex items-start gap-2.5">
          <input type="checkbox" name="guidelinesAccepted" required className="mt-0.5" />
          <span>
            I have read and agree to the{" "}
            <Link href="/community-guidelines" target="_blank" className="underline">
              community guidelines
            </Link>{" "}
            and{" "}
            <Link href="/privacy" target="_blank" className="underline">
              privacy policy
            </Link>
            , including: text only, up to 3 posts in 24 hours, no links, no contact details and no real exam questions.{" "}
            <span className="text-ink-400">(Required)</span>
          </span>
        </label>
        <label className="flex items-start gap-2.5">
          <input type="checkbox" name="marketingOptIn" className="mt-0.5" />
          <span>
            Email me occasional SimplyCPA updates. <span className="text-ink-400">(Optional — you can change this any time in your account.)</span>
          </span>
        </label>
      </fieldset>

      {state?.error && (
        <p role="alert" className="rounded-lg bg-signal-red/10 px-3 py-2 text-sm text-signal-red">
          {state.error}
        </p>
      )}

      <Button type="submit" disabled={pending || !!live}>
        {pending ? "Saving…" : "Continue"}
      </Button>
    </form>
  );
}
