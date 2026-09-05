"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { login } from "@/lib/actions/auth";

export function LoginForm({ callbackUrl }: { callbackUrl?: string }) {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="callbackUrl" value={callbackUrl ?? "/dashboard"} />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <Field label="Password" name="password" type="password" autoComplete="current-password" />
      {state?.error && <p className="text-sm text-signal-red">{state.error}</p>}
      <Button type="submit" disabled={pending} className="mt-2">
        {pending ? "Logging in…" : "Log in"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-ink-950/15 px-3.5 py-2.5 text-sm outline-none focus:border-ink-950/40"
      />
    </div>
  );
}
