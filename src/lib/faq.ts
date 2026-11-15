/**
 * FAQ categories: URL slugs, display order and a one-line description for each.
 * Categories come from the database (staff can add one in the admin screen); a category
 * that isn't listed here still works and is shown after the listed ones.
 */
export const faqCategorySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const META: { name: string; blurb: string }[] = [
  { name: "Basics", blurb: "What the US CPA is, who runs it and how the exam is structured." },
  { name: "Eligibility", blurb: "Credits, degrees, professional qualifications and who can sit." },
  { name: "State Selection", blurb: "Choosing a state board, and what the common ones require." },
  { name: "Application", blurb: "Evaluation, applying, the Notice to Schedule and booking." },
  { name: "Fees", blurb: "What it costs, when you pay and how to avoid wasted fees." },
  { name: "India", blurb: "Sitting the exam in India: centres, fees and experience." },
  { name: "CA / Indian Students", blurb: "CPA alongside CA, and how it compares with other qualifications." },
  { name: "Exam", blurb: "Sections, timing, the passing score and the credit window." },
  { name: "Exam Format", blurb: "Testlets, simulations, weighting, breaks and tools." },
  { name: "Section Guide", blurb: "What each section covers and how many questions it has." },
  { name: "Disciplines", blurb: "BAR, ISC and TCP: what they cover and how to choose." },
  { name: "Exam Day", blurb: "What to bring, test-centre rules and the last week." },
  { name: "Scores", blurb: "Score release, what 75 means, failing and pass rates." },
  { name: "2027 Changes", blurb: "The 2027 Blueprint, the new platform and the July blackout." },
  { name: "Preparation", blurb: "Study hours, order, practice and getting ready." },
  { name: "US GAAP vs IFRS", blurb: "What changes for accountants trained on Ind AS or IFRS." },
  { name: "Key Terms", blurb: "The bodies, laws and standards the exam assumes you know." },
  { name: "Licensing", blurb: "Experience, the ethics exam and keeping the licence." },
  { name: "Career", blurb: "Roles, employers and what the qualification is worth." },
  { name: "Using SimplyCPA", blurb: "How this site works and how to report an error." },
];

const ORDER = new Map(META.map((m, i) => [m.name, i]));

export const faqCategoryBlurb = (name: string) => META.find((m) => m.name === name)?.blurb ?? "";

/** Sorts category names into the order above; unlisted categories follow alphabetically. */
export const sortFaqCategories = (names: string[]) =>
  [...names].sort((a, b) => (ORDER.get(a) ?? 999) - (ORDER.get(b) ?? 999) || a.localeCompare(b));
