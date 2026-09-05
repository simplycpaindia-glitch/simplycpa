"use client";

import { useActionState } from "react";
import { bulkImportMcqs } from "@/lib/actions/admin-mcq";

export function CsvImportForm() {
  const [state, formAction, pending] = useActionState(bulkImportMcqs, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-xl">
      <input type="file" name="file" accept=".csv" required className="text-sm" />
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-md bg-ink-950 px-5 py-2.5 text-sm font-medium text-paper-50 disabled:opacity-50"
      >
        {pending ? "Importing…" : "Import CSV"}
      </button>

      {state?.error && <p className="text-sm text-signal-red">{state.error}</p>}
      {state && !state.error && (
        <div className="rounded-lg bg-paper-100 p-4 text-sm">
          <p className="text-signal-green font-medium">{state.imported} questions imported.</p>
          {state.skipped > 0 && (
            <p className="mt-1 text-ink-400">
              {state.skipped} rows skipped (missing topic match, correct answer, or an option) —
              rows: {state.skippedRows?.join(", ")}
            </p>
          )}
        </div>
      )}
    </form>
  );
}
