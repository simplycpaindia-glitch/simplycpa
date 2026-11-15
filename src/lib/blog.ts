/** Knowledge Centre categories: URL slugs and a one-line description for each. */
export const blogCategorySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BLURBS: Record<string, string> = {
  "CPA Basics": "What the US CPA is, how the exam works and how to get started.",
  "Indian Students": "Eligibility, state boards, credential evaluation and the process from India.",
  "Study Strategy": "Section order, study plans, revision and exam technique.",
  "Concepts Explained": "US GAAP and reporting topics explained with worked examples.",
  Auditing: "Risk, evidence, internal control, reports and attestation.",
  Tax: "US federal tax for individuals and entities, and business law.",
  "Information Systems": "Systems, security, privacy and SOC engagements for ISC.",
  Career: "Roles, employers and what the qualification leads to.",
  "CPA vs Other Qualifications": "How the CPA compares with CA, ACCA, CMA and others.",
  "Exam Updates": "Changes to the exam, and what they mean for candidates.",
};

export const blogCategoryBlurb = (name: string) => BLURBS[name] ?? "";

type NextLink = { label: string; href: string };

const STUDY_LOOP: NextLink[] = [
  { label: "Quick sheets", href: "/quick-sheets" },
  { label: "Question of the Day", href: "/question-of-the-day" },
  { label: "Glossary", href: "/glossary" },
];

const NEXT: Record<string, NextLink[]> = {
  "Indian Students": [
    { label: "Eligibility navigator", href: "/tools/cpa-eligibility-navigator" },
    { label: "State boards compared", href: "/state-boards" },
    { label: "Fees in rupees", href: "/us-cpa-fees-in-inr" },
    { label: "Eligibility FAQs", href: "/faq/eligibility" },
  ],
  "CPA Basics": [
    { label: "Start here", href: "/start-here" },
    { label: "Discipline selector", href: "/tools/cpa-discipline-selector" },
    { label: "Basics FAQs", href: "/faq/basics" },
    { label: "All tools", href: "/tools" },
  ],
  "Study Strategy": [
    { label: "Study planner", href: "/study-planner" },
    { label: "Exam countdown", href: "/tools/cpa-exam-countdown" },
    { label: "Weekly mini-mocks", href: "/mini-mock" },
    { label: "Preparation FAQs", href: "/faq/preparation" },
  ],
  Career: [
    { label: "Career FAQs", href: "/faq/career" },
    { label: "Discipline selector", href: "/tools/cpa-discipline-selector" },
    { label: "The CPA Pulse", href: "/pulse" },
  ],
  "CPA vs Other Qualifications": [
    { label: "CPA and CA FAQs", href: "/faq/ca-indian-students" },
    { label: "Eligibility navigator", href: "/tools/cpa-eligibility-navigator" },
    { label: "Start here", href: "/start-here" },
  ],
  "Exam Updates": [
    { label: "The CPA Pulse", href: "/pulse" },
    { label: "Score release dates", href: "/cpa-score-release-dates" },
    { label: "Pass rates", href: "/cpa-exam-pass-rates" },
    { label: "2027 changes FAQs", href: "/faq/2027-changes" },
  ],
  "Concepts Explained": [{ label: "FAR topics", href: "/cpa/far" }, { label: "FAR simulations", href: "/cpa/far/simulations" }, ...STUDY_LOOP],
  Auditing: [{ label: "AUD topics", href: "/cpa/aud" }, { label: "AUD simulations", href: "/cpa/aud/simulations" }, ...STUDY_LOOP],
  Tax: [{ label: "REG topics", href: "/cpa/reg" }, { label: "TCP topics", href: "/cpa/tcp" }, ...STUDY_LOOP],
  "Information Systems": [{ label: "ISC topics", href: "/cpa/isc" }, ...STUDY_LOOP],
};

/** Tools and pages to offer at the end of an article in this category. */
export const blogNextLinks = (category: string): NextLink[] => NEXT[category] ?? [{ label: "All tools", href: "/tools" }, { label: "FAQs", href: "/faq" }];
