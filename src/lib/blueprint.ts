/** Blueprint-area helpers for section pages. */

const ROMAN: Record<string, number> = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };

/** "Area III: Select Transactions" → 3 (unknown or missing areas sort last). */
export function areaNumber(area: string | null | undefined): number {
  const m = area?.match(/^Area\s+([IVX]+)\b/);
  return (m && ROMAN[m[1]]) || 99;
}

/**
 * Share of each section's exam by blueprint area, from the AICPA's Uniform CPA
 * Examination Blueprints effective January 1, 2026 (unchanged in the 2027 edition).
 * Keyed by section slug, then area number.
 */
export const BLUEPRINTS_EDITION = "2026 (unchanged for 2027)";
const AREA_WEIGHTS: Record<string, Record<number, string>> = {
  aud: { 1: "15–25%", 2: "25–35%", 3: "30–40%", 4: "10–20%" },
  far: { 1: "30–40%", 2: "30–40%", 3: "25–35%" },
  reg: { 1: "10–20%", 2: "15–25%", 3: "5–15%", 4: "22–32%", 5: "23–33%" },
  bar: { 1: "40–50%", 2: "35–45%", 3: "10–20%" },
  isc: { 1: "35–45%", 2: "35–45%", 3: "15–25%" },
  tcp: { 1: "30–40%", 2: "30–40%", 3: "10–20%", 4: "10–20%" },
};

/** "far", "Area II: Select Balance Sheet Accounts" → "30–40%" (undefined if unknown). */
export function areaWeight(subject: string, area: string | null | undefined): string | undefined {
  return AREA_WEIGHTS[subject]?.[areaNumber(area)];
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
