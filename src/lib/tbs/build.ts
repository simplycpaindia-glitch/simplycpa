import type { Cell, Row } from "./types";

// Small builders that keep the simulation data files readable.

export const num = (answer: number, tolerance?: number): Cell =>
  tolerance === undefined ? { kind: "number", answer } : { kind: "number", answer, tolerance };

export const pick = (options: readonly string[], answer: string): Cell => ({ kind: "select", options, answer });

export const ref = (answer: string): Cell => ({ kind: "research", answer });

export const row = (label: string, cells: Cell | Cell[], explanation: string): Row => ({
  label,
  cells: Array.isArray(cells) ? cells : [cells],
  explanation,
});

/** A journal-entry line: debit and credit columns, the unused side left blank (0). */
export const line = (label: string, debit: number, credit: number, explanation: string): Row =>
  row(label, [num(debit), num(credit)], explanation);

export const JE_COLUMNS = ["Account", "Debit ($)", "Credit ($)"];

export const FAR_RESEARCH_INSTRUCTIONS =
  "For each item, enter the Financial Accounting Standards Board (FASB) Accounting Standards Codification (ASC) paragraph that answers it, as Topic-Subtopic-Section-Paragraph (for example 606-10-25-1). The FASB's free Basic View of the Codification lets you search it after a free registration.";
