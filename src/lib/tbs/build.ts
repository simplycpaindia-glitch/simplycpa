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

/** Option used in detect-and-correct grids when an item is already right. */
export const NO_ENTRY = "No entry required";
export const DETECT_COLUMNS = ["Item", "Account to debit", "Account to credit", "Amount ($)"];
export const DETECT_INSTRUCTIONS = `For each item, decide whether the draft figures need correcting. If they do, select the account to debit, the account to credit and the amount of the correcting entry. If no correction is needed, select "${NO_ENTRY}" in both account columns and leave the amount blank.`;

/** A detect-and-correct row: one correcting entry (or none). */
export const fix = (label: string, accounts: readonly string[], debit: string, credit: string, amount: number, explanation: string) =>
  row(label, [pick(accounts, debit), pick(accounts, credit), num(amount)], explanation);

export const FAR_RESEARCH_INSTRUCTIONS =
  "For each item, enter the Financial Accounting Standards Board (FASB) Accounting Standards Codification (ASC) paragraph that answers it, as Topic-Subtopic-Section-Paragraph (for example 606-10-25-1). The FASB's free Basic View of the Codification lets you search it after a free registration.";
