"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { register } from "@/lib/actions/auth";

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(register, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <Field label="Name" name="name" type="text" autoComplete="name" />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <Field label="Password" name="password" type="password" autoComplete="new-password" />
      <p className="-mt-2 text-xs text-ink-400">
        At least 8 characters, with a letter and a number.
      </p>
      {state?.error && <p className="text-sm text-signal-red">{state.error}</p>}
      <Button type="submit" disabled={pending} className="mt-2">
        {pending ? "Creating account…" : "Create free account"}
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
