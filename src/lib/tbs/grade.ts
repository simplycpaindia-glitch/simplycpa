import type { Cell, GradeResult, PublicCell, PublicSimulation, Simulation } from "./types";

/** "$1,250", "1250.00", "(300)" and "-300" all parse; blank is 0. */
export function parseAmount(input: string): number | null {
  const t = input.trim().replace(/[$,\s]/g, "");
  if (t === "") return 0;
  const negative = /^\(.*\)$/.test(t) || t.startsWith("-");
  const n = Number(t.replace(/[()]/g, "").replace(/^-/, ""));
  if (!Number.isFinite(n)) return null;
  return negative ? -n : n;
}

/**
 * Standards references compare loosely: "ASC 606-10-25-01" matches "606-10-25-1",
 * and "AUC 570" or "AU-C 570.10" matches a section-level answer of "AU-C 570".
 */
export function referenceMatches(input: string, answer: string): boolean {
  const norm = (s: string) =>
    s
      .toUpperCase()
      .replace(/\b(FASB|ASC|SECTION|PARAGRAPH|PARA)\b\.?/g, "")
      .replace(/\b(AU|AR|AT)[\s-]*C\b/, "$1-C ")
      .replace(/\s+/g, "");
  const a = norm(answer);
  const u = norm(input);
  if (/^(AU|AR|AT)-C/.test(a)) return u === a || u.startsWith(`${a}.`);
  // Codification references: any separator ("855 10 25 3", "855.10.25.3") works.
  const parts = (s: string) =>
    s
      .toUpperCase()
      .replace(/\b(FASB|ASC|SECTION|PARAGRAPH|PARA)\b\.?/g, "")
      .split(/[^0-9A-Z]+/)
      .filter(Boolean)
      .map((p) => (/^\d+$/.test(p) ? String(Number(p)) : p));
  const ap = parts(answer);
  const up = parts(input);
  return ap.length === up.length && ap.every((p, i) => p === up[i]);
}

const formatNumber = (n: number) => (n < 0 ? `(${Math.abs(n).toLocaleString("en-US")})` : n.toLocaleString("en-US"));

export function expectedText(cell: Cell): string {
  if (cell.kind === "number") return cell.answer === 0 ? "0 / blank" : formatNumber(cell.answer);
  return cell.answer;
}

export function cellCorrect(cell: Cell, input: string): boolean {
  if (cell.kind === "select") return input === cell.answer;
  if (cell.kind === "research") return referenceMatches(input, cell.answer);
  const n = parseAmount(input);
  return n !== null && Math.abs(n - cell.answer) <= (cell.tolerance ?? 0.5);
}

/** A row scores only when every cell in it is right. */
export function grade(sim: Simulation, answers: string[][]): GradeResult {
  const rows = sim.rows.map((row, r) => {
    const cells = row.cells.map((cell, c) => ({
      correct: cellCorrect(cell, answers[r]?.[c] ?? ""),
      expected: expectedText(cell),
    }));
    return { correct: cells.every((c) => c.correct), cells, explanation: row.explanation };
  });
  return { correct: rows.filter((r) => r.correct).length, total: rows.length, rows, takeaway: sim.takeaway };
}

export function toPublic(sim: Simulation): PublicSimulation {
  return {
    slug: sim.slug,
    subject: sim.subject,
    topic: sim.topic,
    title: sim.title,
    format: sim.format,
    minutes: sim.minutes,
    scenario: sim.scenario,
    exhibits: sim.exhibits,
    instructions: sim.instructions,
    columns: sim.columns,
    rows: sim.rows.map((row) => ({
      label: row.label,
      cells: row.cells.map((cell): PublicCell => (cell.kind === "select" ? { kind: "select", options: cell.options } : { kind: cell.kind })),
    })),
  };
}
