/**
 * Official CPA Exam pass rates, copied exactly from the AICPA's pass-rate page.
 * Update when the AICPA publishes a new quarter (roughly 4–6 weeks after each quarter ends).
 */
export const PASS_RATES_SOURCE = "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates";
export const PASS_RATES_CHECKED = "2026-10-17";

export const SECTIONS = ["AUD", "FAR", "REG", "BAR", "ISC", "TCP"] as const;
export type ExamSection = (typeof SECTIONS)[number];

export const SECTION_INFO: Record<ExamSection, { name: string; kind: "Core" | "Discipline" }> = {
  AUD: { name: "Auditing and Attestation", kind: "Core" },
  FAR: { name: "Financial Accounting and Reporting", kind: "Core" },
  REG: { name: "Taxation and Regulation", kind: "Core" },
  BAR: { name: "Business Analysis and Reporting", kind: "Discipline" },
  ISC: { name: "Information Systems and Controls", kind: "Discipline" },
  TCP: { name: "Tax Compliance and Planning", kind: "Discipline" },
};

export type PassRateYear = {
  year: number;
  /** Quarters published so far, in order. */
  quarters: string[];
  rates: Record<ExamSection, { quarterly: number[]; cumulative: number }>;
};

/** Newest year first. Percentages as published (two decimals). */
export const PASS_RATES: PassRateYear[] = [
  {
    year: 2026,
    quarters: ["Q1", "Q2"],
    rates: {
      AUD: { quarterly: [47.8, 49.38], cumulative: 48.65 },
      FAR: { quarterly: [43.46, 42.47], cumulative: 42.95 },
      REG: { quarterly: [66.65, 66.87], cumulative: 66.78 },
      BAR: { quarterly: [41.3, 45.62], cumulative: 43.64 },
      ISC: { quarterly: [66.79, 67.98], cumulative: 67.45 },
      TCP: { quarterly: [79.28, 79.75], cumulative: 79.53 },
    },
  },
  {
    year: 2025,
    quarters: ["Q1", "Q2", "Q3", "Q4"],
    rates: {
      AUD: { quarterly: [44.3, 49.05, 50.03, 48.78], cumulative: 48.21 },
      FAR: { quarterly: [41.67, 43.52, 43.07, 40.2], cumulative: 42.12 },
      REG: { quarterly: [62.03, 63.58, 66.05, 60.73], cumulative: 63.12 },
      BAR: { quarterly: [37.64, 47.26, 39.46, 39.71], cumulative: 41.94 },
      ISC: { quarterly: [61.23, 71.96, 66.91, 66.75], cumulative: 67.79 },
      TCP: { quarterly: [74.94, 80.63, 76.68, 76.72], cumulative: 77.65 },
    },
  },
];
