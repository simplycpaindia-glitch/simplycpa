import { cn } from "@/lib/utils";
import type { Exhibit } from "@/lib/tbs/types";

const numeric = (s: string) => /^[\s$()\-–—\d,.%]*$/.test(s);

export function SimulationExhibits({ exhibits }: { exhibits: Exhibit[] }) {
  return (
    <div className="flex flex-col gap-4">
      {exhibits.map((ex) => {
        // Columns of figures are right-aligned, like a ledger.
        const right = ex.table?.head.map((_, c) => c > 0 && ex.table!.rows.every((row) => numeric(row[c] ?? ""))) ?? [];
        return (
          <figure key={ex.title} className="rounded-lg border border-ink-950/10 bg-paper-50">
            <figcaption className="border-b border-ink-950/10 bg-paper-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
              {ex.title}
            </figcaption>
            <div className="p-4">
              {ex.text?.map((p, i) => (
                <p key={i} className="mb-2 text-sm leading-relaxed text-ink-800 last:mb-0">
                  {p}
                </p>
              ))}
              {ex.table && (
                <div className={cn("overflow-x-auto", ex.text && "mt-3")}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-ink-950/15 text-left text-xs text-ink-400">
                        {ex.table.head.map((h, i) => (
                          <th key={i} scope="col" className={cn("py-1.5 pr-4 font-medium", right[i] && "text-right")}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-950/5">
                      {ex.table.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((v, c) => (
                            <td key={c} className={cn("py-1.5 pr-4 align-top text-ink-800", right[c] && "text-right tabular-nums")}>
                              {v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </figure>
        );
      })}
    </div>
  );
}
