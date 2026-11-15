/**
 * State board pages for international candidates. Every fact in `BOARDS` was read on the
 * board's own CPA Exam page on nasba.org on BOARDS_READ. "Not stated" means the page is
 * silent; nothing here is inferred. `goodFit` and `thinkTwice` are SimplyCPA's reading of
 * those facts for a candidate educated in India, and are labelled as such on the page.
 *
 * Pathway dates and India testing come from the licensure pathways tracker, so the two
 * never disagree. When re-checking, re-read each `source` and update BOARDS_READ.
 */
import { JURISDICTIONS, type Jurisdiction } from "@/lib/trackers/pathways";

export const BOARDS_READ = "2026-11-16";

export type StateBoard = {
  slug: string;
  name: string;
  /** One line for cards and meta descriptions. */
  summary: string;
  /** Education needed to sit, as separate requirements or options. */
  educationToSit: string[];
  educationNote?: string;
  sitEarly: string;
  personal: { age: string; residency: string; ssn: string };
  fees: { evaluationApplication: number; examApplication: number; examSection: number; note?: string };
  evaluators: string;
  professionalTraining: string;
  creditWindow: { months: number; detail: string };
  licensureNote: string;
  /** Dated changes the page announces. */
  notices: string[];
  goodFit: string[];
  thinkTwice: string[];
  source: string;
};

const nasba = (slug: string) => `https://nasba.org/exams/cpaexam/${slug}/`;

export const BOARDS: StateBoard[] = [
  {
    slug: "alaska",
    name: "Alaska",
    summary: "Several routes to sit, including a bachelor's degree with 15 accounting hours, and you can sit shortly before graduating.",
    educationToSit: [
      "A bachelor's degree with 24 semester hours of accounting, 3 of business law, 3 of economics and 3 of mathematics, statistics or computer science; or",
      "A bachelor's degree with 15 semester hours of accounting; or",
      "Within 18 semester hours of completing a bachelor's degree, with 15 semester hours of accounting done; or",
      "A bachelor's degree with one year of public accounting experience under the direct supervision of a CPA.",
    ],
    educationNote: "The page says advanced degrees are not accepted in place of a bachelor's degree.",
    sitEarly: "Yes, on the third route: within 18 semester hours of finishing the bachelor's degree, with 15 accounting hours completed.",
    personal: { age: "At least 18", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 121, examApplication: 109, examSection: 268.59 },
    evaluators: "NASBA International Evaluation Services (NIES) only.",
    professionalTraining: "Not accepted. Coursework from a Chartered Accountant or similar programme is treated as professional training.",
    creditWindow: { months: 30, detail: "Rolling 30 months, starting on the score release date of your first passed section." },
    licensureNote: "The exam page does not summarise licensure requirements.",
    notices: [],
    goodFit: [
      "You have a bachelor's degree with limited accounting credit: one route needs only 15 accounting hours.",
      "You are close to finishing your degree and want to start sitting.",
    ],
    thinkTwice: [
      "A master's degree cannot stand in for the bachelor's degree, so the evaluation of your bachelor's degree is what matters.",
      "CA, CMA or CS coursework adds nothing here.",
    ],
    source: nasba("alaska"),
  },
  {
    slug: "colorado",
    name: "Colorado",
    summary: "120 hours with 27 accounting and 21 business hours, a required US auditing standards course, and a choice of evaluators.",
    educationToSit: [
      "A bachelor's degree or higher with at least 120 credit hours of higher education.",
      "At least 27 semester hours of accounting. 21 of them must be above introductory level and include an auditing course of at least 3 hours concentrating on US generally accepted auditing standards.",
      "At least 21 semester hours of business administration.",
      "Up to 3 internship hours can count towards accounting and up to 3 towards business.",
    ],
    sitEarly: "No. All educational requirements must be complete when you apply.",
    personal: {
      age: "Not stated",
      residency: "No residency requirement",
      ssn: "Not required for the exam. Required for the licence, although a sworn affidavit is accepted from foreign nationals who are not physically in the US.",
    },
    fees: { evaluationApplication: 96, examApplication: 96, examSection: 268.59 },
    evaluators: "NIES, any member of NACES, or the Association of International Credential Evaluators (AICE).",
    professionalTraining: "Not stated on the page.",
    creditWindow: { months: 30, detail: "Rolling 30 months, starting on the score release date of your first passed section." },
    licensureNote: "Not summarised on the exam page; it refers to the board's Rule 1.5E.",
    notices: [],
    goodFit: [
      "You have a bachelor's and a master's degree totalling 120 hours or more with a commerce background.",
      "You want a choice of evaluator rather than NIES only.",
    ],
    thinkTwice: [
      "The US auditing standards course is a hard requirement. Auditing papers from an Indian degree usually do not cover US standards, so expect to add a course.",
      "Plan for the Social Security number or affidavit step before licensing.",
    ],
    source: nasba("colorado"),
  },
  {
    slug: "guam",
    name: "Guam",
    summary: "Lets candidates sit up to 18 months before finishing their degree, with three education options built around accounting credit.",
    educationToSit: [
      "A bachelor's degree or higher with an accounting major from an AACSB-accredited institution; or",
      "A bachelor's degree or higher with a business major from an AACSB or ACBSP institution, including 24 semester hours of accounting above principles level covering financial accounting and reporting, auditing and attestation, taxation, and managerial or cost accounting; or",
      "A US bachelor's degree or its equivalent from an accredited institution, with the same 24 accounting hours plus 24 business hours that include 6 of economics, 3 of finance and 3 of business law.",
    ],
    educationNote: "Most candidates educated in India fall under the third option.",
    sitEarly: "Yes. Upper-division undergraduates, or those accepted into an advanced degree, may sit if they can complete the requirements within 18 months of their first exam section. A Certificate of Enrollment is required.",
    personal: { age: "At least 18", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 136, examApplication: 116, examSection: 268.59, note: "The page also links to a Guam surcharge without stating the amount." },
    evaluators: "NIES, Foreign Academic Credential Service (FACS) or Educational Records Evaluation Service (ERES).",
    professionalTraining: "Not accepted. The page says professional training is not acceptable towards the requirements.",
    creditWindow: { months: 30, detail: "Rolling 30 months, starting on the score release date of your first passed section." },
    licensureNote: "The page notes a 150-hour requirement for licensure applications received on or after 16 December 2021.",
    notices: [],
    goodFit: [
      "You are still studying and want to begin the exam before you graduate.",
      "Your degree has 24 accounting and 24 business hours with the named subjects.",
    ],
    thinkTwice: [
      "If you sit early, the remaining requirements must be finished within 18 months of your first section.",
      "Check the surcharge amount before budgeting.",
    ],
    source: nasba("guam"),
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    summary: "Requires a US Social Security number, which rules it out for most candidates based in India.",
    educationToSit: [
      "A bachelor's degree.",
      "120 of the 150 semester hours from an accredited institution, or 120 of 150 completed within 90 days of sitting.",
      "21 semester hours of accounting: financial accounting, auditing, taxation and management or cost accounting.",
      "9 semester hours of business: business law, finance and information systems.",
    ],
    sitEarly: "Yes, if a Certificate of Enrollment shows the requirements will be complete within 90 days of your first section. The final transcript is due within 90 days, or the scores are voided.",
    personal: { age: "At least 18", residency: "No residency requirement", ssn: "Required" },
    fees: { evaluationApplication: 136, examApplication: 148, examSection: 268.59 },
    evaluators: "NIES or the Center for Educational Documentation (CED).",
    professionalTraining: "Not accepted. Coursework from a Chartered Accountant or similar programme is treated as professional training.",
    creditWindow: { months: 30, detail: "Rolling 30 months, starting on the score release date of your first passed section." },
    licensureNote: "Not summarised on the exam page; it cites the board's regulation and links to a licensure page.",
    notices: [],
    goodFit: ["You already hold a US Social Security number and have 120 hours with 21 accounting hours."],
    thinkTwice: [
      "Without a Social Security number you cannot apply here at all.",
      "If you sit early and the final transcript is late, your scores are voided.",
    ],
    source: nasba("massachusetts"),
  },
  {
    slug: "michigan",
    name: "Michigan",
    summary: "120 hours with 24 accounting hours across six named areas, including governmental accounting, and any NACES evaluator is accepted.",
    educationToSit: [
      "A bachelor's degree with a concentration in accounting, totalling at least 120 semester hours.",
      "At least 24 semester hours of accounting covering all six areas: accounting information systems, auditing and attestation, cost or managerial accounting, financial accounting and reporting, governmental or fund accounting, and taxation.",
      "At least 24 semester hours of general business other than accounting, such as business law, economics, finance, management, marketing, statistics or information technology.",
    ],
    sitEarly: "Not stated on the page.",
    personal: { age: "Not stated", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 96, examApplication: 96, examSection: 268.59 },
    evaluators: "NIES or any member of NACES.",
    professionalTraining: "Not accepted. Coursework from a Chartered Accountant or similar programme is treated as professional training.",
    creditWindow: { months: 30, detail: "Rolling 30 months from the score release date. The board may grant exceptions for hardship or other good cause on written request." },
    licensureNote: "Not stated on the exam page beyond a link to the Michigan board.",
    notices: [],
    goodFit: ["You have 120 hours with broad accounting coverage and want to use a NACES evaluator."],
    thinkTwice: [
      "Governmental or fund accounting and accounting information systems are both required. Many Indian commerce degrees do not include US-style fund accounting.",
    ],
    source: nasba("michigan"),
  },
  {
    slug: "montana",
    name: "Montana",
    summary: "Written around subject hours rather than a total, and the only board here that says Chartered Accountant training may count.",
    educationToSit: [
      "Credit from a recognised, accredited institution that offers a bachelor's degree.",
      "At least 24 semester hours of accounting above introductory level, including at least one course each in financial accounting, auditing, taxation and management accounting.",
      "At least 24 semester hours of business courses, such as information systems, business law, finance, economics, marketing, ethics or quantitative applications.",
    ],
    educationNote: "The page states no total number of hours to sit. All requirements must be met when you apply.",
    sitEarly: "No. All educational requirements must be met at the time of application.",
    personal: { age: "Not stated", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 146, examApplication: 96, examSection: 268.59 },
    evaluators: "NASBA International Evaluation Services (NIES).",
    professionalTraining:
      "May be acceptable. The page says training completed in a Chartered Accountant programme may be acceptable towards the education requirements for the exam or licensure. Candidates must still complete the academic pathway and submit an international evaluation of that coursework.",
    creditWindow: { months: 30, detail: "Rolling 30 months from the score release date. The board may grant exceptions for hardship or good cause on timely written request." },
    licensureNote: "The exam page states a bachelor's degree and a minimum of 150 semester hours for licensure.",
    notices: [],
    goodFit: [
      "You have a three-year degree with strong accounting and business content: the rule is stated in subject hours, not total hours.",
      "You are a Chartered Accountant and want your training considered.",
    ],
    thinkTwice: [
      "The page states 150 hours for the licence, so being able to sit does not mean you can license here without more credit. Compare this with the pathway status shown on this page and confirm with the board.",
      "You need one course in each of four accounting areas, not just 24 hours in total.",
    ],
    source: nasba("montana"),
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    summary: "120 hours with 30 accounting and 24 business hours. Experience for the licence can be earned before, during or after the exam.",
    educationToSit: [
      "A bachelor's degree or higher with 120 semester hours.",
      "30 semester hours of accounting covering financial accounting, management accounting, auditing and taxation.",
      "24 semester hours of business other than accounting, such as business law, information systems, finance, ethics or economics.",
    ],
    sitEarly: "Not stated on the page.",
    personal: { age: "Not stated", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 96, examApplication: 171, examSection: 268.59 },
    evaluators: "NASBA International Evaluation Services (NIES).",
    professionalTraining:
      "Not accepted. Chartered Accountant coursework is treated as professional training, and the board does not accept credit towards a Chartered Accountant designation.",
    creditWindow: { months: 30, detail: "Rolling 30 months from the score release date. The board may grant exceptions for hardship or other good cause on written request." },
    licensureNote: "The certificate requires public accounting or governmental experience, which may be earned before, during or after the exam.",
    notices: [],
    goodFit: [
      "You have a bachelor's and a master's degree in commerce with 30 or more accounting hours.",
      "You already have relevant experience: it can count even if earned before the exam.",
    ],
    thinkTwice: ["The 30 accounting hours are higher than most boards here.", "The exam application fee is the highest of these boards."],
    source: nasba("new-hampshire"),
  },
  {
    slug: "new-york",
    name: "New York",
    summary: "120 hours with named accounting courses. The required content expands on 21 November 2026.",
    educationToSit: [
      "Before 21 November 2026: 120 semester hours including one course in each of financial accounting and reporting (upper level), cost or management accounting, taxation, and auditing (upper level).",
      "On or after 21 November 2026: 120 semester hours including one course in each of five accounting areas (the four above plus accounting information systems) and one course in each of five business areas: information systems and technology, US business law, business data analytics, economics, and finance.",
    ],
    educationNote: "The page gives no total accounting-hour or business-hour counts.",
    sitEarly: "The page describes sitting after 120 semester hours of coursework rather than after a degree.",
    personal: { age: "At least 18", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 96, examApplication: 96, examSection: 268.59 },
    evaluators: "NIES for exam eligibility. The page says NIES is not authorised to approve applicants with education outside the US for licensure.",
    professionalTraining: "Not accepted. Chartered Accountant coursework is treated as professional training, and commercial CPA review courses do not count.",
    creditWindow: { months: 30, detail: "Rolling 30 months from the score release date. The board may grant exceptions for hardship or other good cause on written request." },
    licensureNote: "Not summarised on the exam page; it links to the New York State Education Department.",
    notices: ["The accounting and business content requirements change on 21 November 2026."],
    goodFit: ["You want a New York licence specifically and your coursework covers each named area."],
    thinkTwice: [
      "From 21 November 2026 you need a US business law course and a business data analytics course, which Indian degrees rarely include.",
      "Education from outside the US is assessed separately for the licence, so an exam approval does not settle licensing.",
    ],
    source: nasba("new-york"),
  },
  {
    slug: "washington",
    name: "Washington",
    summary: "A 36-month credit window, the longest here, with a 24 plus 24 hour accounting concentration. No exceptions to the window.",
    educationToSit: [
      "A bachelor's degree with an accounting concentration or its equivalent; or",
      "A post-graduate degree with an accounting concentration or its equivalent; or",
      "A bachelor's degree with an accounting concentration plus an additional 30 semester hours of college education.",
      "An accounting concentration means 24 semester hours of accounting and 24 semester hours of business administration, at undergraduate or graduate level. Extra accounting hours can count towards the business requirement.",
    ],
    sitEarly: "No. You must meet the education requirements before you apply.",
    personal: { age: "Not stated", residency: "No residency requirement", ssn: "Not required" },
    fees: { evaluationApplication: 96, examApplication: 103, examSection: 268.59 },
    evaluators: "NASBA International Evaluation Services (NIES).",
    professionalTraining: "Not stated on the page.",
    creditWindow: { months: 36, detail: "Rolling 36 months from the score release date. The page says the board will not grant exceptions for any reason." },
    licensureNote: "Not stated on the exam page.",
    notices: ["The third education option expires on 31 December 2035."],
    goodFit: [
      "You are working and want the most time to pass: 36 months rather than 30.",
      "Your accounting hours exceed 24 and can cover a shortfall in business hours.",
    ],
    thinkTwice: ["The window is longer but fixed: no hardship extensions.", "You must hold the degree before you apply."],
    source: nasba("washington"),
  },
];

export const getBoard = (slug: string) => BOARDS.find((b) => b.slug === slug);

/** The board's row in the licensure pathways tracker (pathway date and India testing). */
export function boardJurisdiction(b: StateBoard): Jurisdiction {
  const j = JURISDICTIONS.find((x) => x.name === b.name);
  if (!j) throw new Error(`${b.name} is missing from the pathways tracker`);
  return j;
}

/** Fees to pass all four sections first time while testing in India, excluding the international fee. */
export const boardBaseCost = (b: StateBoard) => b.fees.evaluationApplication + b.fees.examApplication + 4 * b.fees.examSection;
