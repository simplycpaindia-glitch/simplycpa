/** Blueprint-area helpers for section pages. */

const ROMAN: Record<string, number> = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };

/** "Area III: Select Transactions" → 3 (unknown or missing areas sort last). */
export function areaNumber(area: string | null | undefined): number {
  const m = area?.match(/^Area\s+([IVX]+)\b/);
  return (m && ROMAN[m[1]]) || 99;
}

/** Groups topics under their blueprint area, areas in Blueprint order, topics in their own order within each. */
export function groupByArea<T extends { blueprintArea: string | null; order: number }>(topics: T[]) {
  const groups = new Map<string, T[]>();
  for (const t of topics) {
    const key = t.blueprintArea ?? "Other topics";
    groups.set(key, [...(groups.get(key) ?? []), t]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => areaNumber(a) - areaNumber(b) || a.localeCompare(b))
    .map(([area, ts]) => ({ area, topics: ts.sort((x, y) => x.order - y.order) }));
}
