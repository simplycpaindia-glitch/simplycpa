export type JurisdictionSeed = { name: string; notes?: string };

export const jurisdictions: JurisdictionSeed[] = [
  { name: "NASBA (National)", notes: "National-level fees and figures administered by NASBA, applicable across participating jurisdictions." },
  { name: "Colorado", notes: "Commonly referenced by international candidates; verify current education requirements directly." },
  { name: "Illinois", notes: "Commonly referenced by international candidates; verify current education requirements directly." },
  { name: "Montana", notes: "Commonly referenced by international candidates; verify current education requirements directly." },
];

export type FeeSeed = {
  jurisdictionName: string | null;
  feeType: "APPLICATION" | "EXAM_SECTION" | "REGISTRATION" | "INTERNATIONAL_ADMIN" | "EVALUATION" | "ETHICS_EXAM" | "OTHER";
  label: string;
  amount: string;
  currency: string;
  effectiveFrom: string;
  sourceUrl: string;
  lastVerified: string;
  notes?: string;
};

const VERIFIED_DATE = "2026-09-01";

export const fees: FeeSeed[] = [
  {
    jurisdictionName: "NASBA (National)",
    feeType: "EXAM_SECTION",
    label: "NASBA per-section exam fee",
    amount: "268.59",
    currency: "USD",
    effectiveFrom: "2026-07-04",
    sourceUrl: "https://www.becker.com/blog/cpa/the-real-cost-of-the-cpa-exam",
    lastVerified: VERIFIED_DATE,
    notes: "Reported figures for 2026 varied across sources ($262.64 vs $268.59) — treat as approximate and reverify with NASBA directly before paying.",
  },
  {
    jurisdictionName: "NASBA (National)",
    feeType: "APPLICATION",
    label: "Initial application fee",
    amount: "96.00",
    currency: "USD",
    effectiveFrom: "2026-01-01",
    sourceUrl: "https://www.becker.com/blog/cpa/the-real-cost-of-the-cpa-exam",
    lastVerified: VERIFIED_DATE,
    notes: "Varies materially by state — some states charge as little as $15 (e.g. Texas) or as much as $171 (e.g. New Hampshire) per section for registration.",
  },
  {
    jurisdictionName: "NASBA (National)",
    feeType: "REGISTRATION",
    label: "Standard per-section registration/eligibility fee",
    amount: "96.00",
    currency: "USD",
    effectiveFrom: "2026-01-01",
    sourceUrl: "https://www.becker.com/blog/cpa/the-real-cost-of-the-cpa-exam",
    lastVerified: VERIFIED_DATE,
    notes: "Standard CPAES-state figure; some states differ significantly.",
  },
  {
    jurisdictionName: "NASBA (National)",
    feeType: "INTERNATIONAL_ADMIN",
    label: "India international administration fee (per Core section)",
    amount: "390.00",
    currency: "USD",
    effectiveFrom: "2026-01-01",
    sourceUrl: "https://accounting.uworld.com/cpa-review/cpa-exam/international/",
    lastVerified: VERIFIED_DATE,
    notes: "Sources disagreed ($460 flat vs $390 Core / $510 Discipline) — confirm current rate directly with NASBA before paying.",
  },
  {
    jurisdictionName: "NASBA (National)",
    feeType: "INTERNATIONAL_ADMIN",
    label: "India international administration fee (Discipline section)",
    amount: "510.00",
    currency: "USD",
    effectiveFrom: "2026-01-01",
    sourceUrl: "https://accounting.uworld.com/cpa-review/cpa-exam/international/",
    lastVerified: VERIFIED_DATE,
  },
  {
    jurisdictionName: "NASBA (National)",
    feeType: "EVALUATION",
    label: "Foreign credential evaluation (typical range)",
    amount: "250.00",
    currency: "USD",
    effectiveFrom: "2026-01-01",
    sourceUrl: "https://nasba.org/internationalexam/",
    lastVerified: VERIFIED_DATE,
    notes: "Typically $100-$400 depending on the evaluation agency and depth of report — this is a midpoint estimate, not a fixed price.",
  },
];

export type TestingLocationSeed = {
  city: string;
  prometricCenterName?: string;
  notes?: string;
  sourceUrl: string;
  lastVerified: string;
};

export const testingLocations: TestingLocationSeed[] = [
  "Ahmedabad", "Bangalore", "Calcutta (Kolkata)", "Chennai", "Hyderabad", "Mumbai", "New Delhi", "Trivandrum",
].map((city) => ({
  city,
  sourceUrl: "https://nasba.org/cpaexam-india/",
  lastVerified: VERIFIED_DATE,
  notes: "Prometric center availability can change — confirm at scheduling time.",
}));

export type SourceSeed = {
  name: string;
  url: string;
  sourceType: "PRIMARY_AICPA" | "PRIMARY_NASBA" | "PRIMARY_OTHER_OFFICIAL" | "SECONDARY_PROVIDER" | "OTHER";
  notes?: string;
};

export const sources: SourceSeed[] = [
  { name: "AICPA & CIMA — CPA Exam Blueprints", url: "https://www.aicpa-cima.com/resources/download/cpa-exam-blueprints", sourceType: "PRIMARY_AICPA", notes: "Authoritative source for exam content areas, task statements, and skill levels." },
  { name: "NASBA — CPA Exam Available in India", url: "https://nasba.org/cpaexam-india/", sourceType: "PRIMARY_NASBA" },
  { name: "NASBA — International Administration", url: "https://nasba.org/internationalexam/", sourceType: "PRIMARY_NASBA" },
  { name: "NASBA — International Evaluation Services (NIES)", url: "https://nasba.org/", sourceType: "PRIMARY_NASBA" },
  { name: "AICPA — Official CPA Exam Sample Tests", url: "https://www.aicpa-cima.com/resources/landing/cpa-exam-practice-and-preparation", sourceType: "PRIMARY_AICPA" },
  { name: "UWorld — CPA Exam Blueprints 2026-2027 Summary", url: "https://accounting.uworld.com/cpa-review/cpa-exam/blueprints/", sourceType: "SECONDARY_PROVIDER" },
  { name: "Becker — The Real Cost of the CPA Exam", url: "https://www.becker.com/blog/cpa/the-real-cost-of-the-cpa-exam", sourceType: "SECONDARY_PROVIDER" },
];

export type UpdateSeed = {
  title: string;
  body: string;
  category: string;
  sourceUrl?: string;
  lastVerified: string;
};

export const updates: UpdateSeed[] = [
  {
    title: "2026 Blueprint refresh: refinements, not structural changes",
    body: "AICPA's updated CPA Exam Blueprints effective January 1, 2026 refine references, clarify representative task statements, and align with current professional standards (including the new SQMS No. 1 quality management standards referenced in AUD). The overall exam structure — three Core sections plus one Discipline, format, and timing — remains unchanged.",
    category: "Blueprint Change",
    sourceUrl: "https://atlascpaindex.com/news/cpa-exam-blueprint-changes-2026",
    lastVerified: VERIFIED_DATE,
  },
  {
    title: "AUD reflects new quality management standards (SQMS No. 1)",
    body: "The 2026 AUD Blueprint updates its Area I references to reflect SQMS No. 1, AICPA's new suite of quality management standards for accounting firms, effective for firms since December 15, 2025.",
    category: "Blueprint Change",
    sourceUrl: "https://www.becker.com/blog/cpa/the-complete-guide-to-the-aud-cpa-exam",
    lastVerified: VERIFIED_DATE,
  },
  {
    title: "Discipline sections remain limited to four testing windows a year",
    body: "BAR, ISC, and TCP continue to be offered only in four testing windows annually (January, April, July, and October), unlike the Core sections which are available continuously across most quarters. Plan Discipline scheduling around these windows.",
    category: "Policy",
    sourceUrl: "https://nasba.org/blog/2026/04/01/how-to-strategically-approach-each-section-of-the-cpa-exam/",
    lastVerified: VERIFIED_DATE,
  },
  {
    title: "Fee figures vary across sources — verify directly with NASBA",
    body: "We found meaningfully different reported figures for the 2026 NASBA per-section fee and the India international administration fee across otherwise reputable sources. This is a reminder that CPA Exam fees change and should always be confirmed directly with NASBA or your state board before you pay — see our Fee Estimator for the figures we currently track, each with its own source and verification date.",
    category: "Fees",
    lastVerified: VERIFIED_DATE,
  },
];
