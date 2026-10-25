/**
 * Task-based simulations (TBS): a scenario, supporting exhibits and an answer grid.
 * The full Simulation (with answers) stays on the server; the browser gets a
 * PublicSimulation until the reader submits.
 */

export type TbsFormat = "journal-entry" | "detect-and-correct" | "calculation" | "document-review" | "research" | "classification";

export const FORMAT_LABEL: Record<TbsFormat, string> = {
  "journal-entry": "Journal entry",
  "detect-and-correct": "Detect and correct",
  calculation: "Calculation",
  "document-review": "Document review",
  research: "Research",
  classification: "Classification",
};

export type Cell =
  | { kind: "select"; options: readonly string[]; answer: string }
  /** Blank counts as 0, so journal-entry rows can leave the unused side empty. */
  | { kind: "number"; answer: number; tolerance?: number }
  /** A reference to the standards, e.g. "606-10-25-1" (FASB Codification) or "AU-C 570". */
  | { kind: "research"; answer: string };

export type Row = { label: string; cells: Cell[]; explanation: string };

export type Exhibit = {
  title: string;
  text?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type Simulation = {
  slug: string;
  subject: "far" | "aud";
  /** Topic slug within the subject. */
  topic: string;
  title: string;
  format: TbsFormat;
  /** Suggested time, in minutes. */
  minutes: number;
  scenario: string[];
  exhibits?: Exhibit[];
  instructions: string;
  /** Header for the label column, then one per cell. */
  columns: string[];
  rows: Row[];
  /** The one thing to remember, shown after grading. */
  takeaway: string;
};

export type PublicCell = { kind: "select"; options: readonly string[] } | { kind: "number" } | { kind: "research" };

export type PublicSimulation = Omit<Simulation, "rows" | "takeaway"> & {
  rows: { label: string; cells: PublicCell[] }[];
};

export type GradeResult = {
  correct: number;
  total: number;
  rows: { correct: boolean; cells: { correct: boolean; expected: string }[]; explanation: string }[];
  takeaway: string;
};
