/**
 * State boards commonly considered by Indian candidates, summarised from each board's page
 * on nasba.org (checked October 2026; the same facts as the "Which state" blog post).
 * Pathway dates and India testing come from the licensure pathways tracker so the two
 * never disagree. "—" means the board's page doesn't say.
 */
import { JURISDICTIONS, PATHWAYS_SOURCE } from "@/lib/trackers/pathways";

export const BOARDS_CHECKED = "2026-10";
export const BOARDS_SOURCE = "https://nasba.org/exams/cpaexam/";
export { PATHWAYS_SOURCE };

type BoardFacts = {
  name: string;
  educationToSit: string;
  sitEarly: string;
  evaluator: string;
  caCoursework: string;
  creditWindow: string;
};

const FACTS: BoardFacts[] = [
  {
    name: "Alaska",
    educationToSit: "Bachelor's + 24 accounting hours + business law, economics and maths/statistics/computer science; or bachelor's + 15 accounting hours; other options",
    sitEarly: "Yes, within 18 semester hours of the degree",
    evaluator: "NIES only",
    caCoursework: "Not accepted",
    creditWindow: "30 months",
  },
  {
    name: "Colorado",
    educationToSit: "Bachelor's or higher with at least 120 hours; 27 accounting hours (21 above introductory, including a US auditing standards course); 21 business hours",
    sitEarly: "No",
    evaluator: "NIES, NACES members or AICE",
    caCoursework: "—",
    creditWindow: "30 months",
  },
  {
    name: "Guam",
    educationToSit: "Bachelor's in accounting from an accredited business school; or a business degree + 24 upper-level accounting hours; or bachelor's + 24 accounting + 24 business hours",
    sitEarly: "Yes, if finishing within 18 months",
    evaluator: "NIES, FACS or ERES",
    caCoursework: "Professional training not accepted",
    creditWindow: "30 months",
  },
  {
    name: "Massachusetts",
    educationToSit: "Bachelor's; 120 of the 150 hours; 21 accounting hours; 9 business hours (a US Social Security number is required)",
    sitEarly: "Yes, within 90 days",
    evaluator: "NIES or CED",
    caCoursework: "Not accepted",
    creditWindow: "30 months",
  },
  {
    name: "Montana",
    educationToSit: "24 accounting hours above introductory level + 24 business hours",
    sitEarly: "No",
    evaluator: "NIES",
    caCoursework: "May be acceptable if the academic pathway was completed",
    creditWindow: "30 months",
  },
  {
    name: "New Hampshire",
    educationToSit: "Bachelor's with 120 hours; 30 accounting hours; 24 business hours",
    sitEarly: "—",
    evaluator: "NIES",
    caCoursework: "Not accepted",
    creditWindow: "30 months",
  },
  {
    name: "New York",
    educationToSit: "120 hours with specified accounting and business content (content areas expand from November 21, 2026)",
    sitEarly: "—",
    evaluator: "NIES (for exam eligibility only)",
    caCoursework: "Not accepted",
    creditWindow: "30 months",
  },
  {
    name: "Washington",
    educationToSit: "Bachelor's with an accounting concentration (24 accounting + 24 business hours)",
    sitEarly: "No",
    evaluator: "NIES only",
    caCoursework: "—",
    creditWindow: "36 months",
  },
];

export type IndiaBoard = BoardFacts & { pathwayEffective: string | "listed" | null; testsInIndia: boolean };

export const INDIA_BOARDS: IndiaBoard[] = FACTS.map((f) => {
  const j = JURISDICTIONS.find((x) => x.name === f.name);
  if (!j) throw new Error(`${f.name} is missing from the pathways tracker`);
  return { ...f, pathwayEffective: j.pathwayEffective, testsInIndia: j.testsInIndia };
});

/** Where each common Indian profile usually starts looking. Always subject to the evaluation. */
export const PROFILES = [
  {
    profile: "Three-year B.Com only",
    boards: "Alaska, Guam, Montana",
    why: "Rules built around accounting and business hours, or allowing you to sit before the degree is complete, subject to how your degree is evaluated.",
  },
  {
    profile: "B.Com + M.Com (or an MBA)",
    boards: "Most boards, including Colorado, Washington and New Hampshire",
    why: "Total hours usually reach 120; choose on credit mix, credit window and your licensing plans.",
  },
  {
    profile: "Chartered Accountant (with a B.Com)",
    boards: "Montana first, then any board your academic credits qualify for",
    why: "Montana says CA training may be acceptable alongside a completed academic pathway; most boards don't count it.",
  },
  {
    profile: "Want the most time to pass",
    boards: "Washington",
    why: "A 36-month credit window, compared with 30 months at most boards.",
  },
] as const;
