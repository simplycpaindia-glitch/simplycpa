"use client";

import { useActionState, useState, useTransition } from "react";
import { deleteMyAccount, setMarketingOptIn } from "@/lib/actions/profile";

export function MarketingToggle({ initial }: { initial: boolean }) {
  const [on, setOn] = useState(initial);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  return (
    <label className="flex items-start gap-2.5 text-sm text-ink-800">
      <input
        type="checkbox"
        checked={on}
        disabled={pending}
        onChange={(e) => {
          const next = e.target.checked;
          setOn(next);
          setError(null);
          startTransition(async () => {
            const res = await setMarketingOptIn(next);
            if (!res.ok) {
              setOn(!next);
              setError(res.error);
            }
          });
        }}
        className="mt-0.5"
      />
      <span>
        Email me occasional SimplyCPA updates (optional).
        {error && <span className="block text-signal-red">{error}</span>}
      </span>
    </label>
  );
}

export function DeleteAccountForm() {
  const [state, action, pending] = useActionState(deleteMyAccount, undefined);
  return (
    <form action={action} className="flex flex-col gap-3">
      <p className="text-sm text-ink-800">
        This permanently deletes your account, your study-wall posts, your reactions and reports, your study progress,
        comments and sign-in records. It can&apos;t be undone.
      </p>
      <label htmlFor="confirm-delete" className="text-sm font-medium text-ink-950">
        Type DELETE to confirm
      </label>
      <input
        id="confirm-delete"
        name="confirm"
        autoComplete="off"
        className="w-full max-w-xs rounded-lg border border-ink-950/15 px-3.5 py-2 text-sm outline-none focus:border-ink-950/40"
      />
      {state?.error && <p className="text-sm text-signal-red">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-md bg-signal-red px-4 py-2 text-sm font-medium text-paper-50 hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Deleting…" : "Delete my account"}
      </button>
    </form>
  );
}
