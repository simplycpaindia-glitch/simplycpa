/** Every free student tool, in one list, so the hub, the menus and the homepage never disagree. */
export type Tool = {
  href: string;
  name: string;
  blurb: string;
  /** Which stage of the CPA journey the tool helps with. */
  stage: "Decide" | "Plan" | "Study" | "Track";
  isNew?: boolean;
};

export const TOOLS: Tool[] = [
  {
    href: "/tools/cpa-eligibility-navigator",
    name: "Eligibility Navigator",
    blurb: "Answer four questions to see where your education probably stands against 120 and 150 hours, and which boards to look at first.",
    stage: "Decide",
    isNew: true,
  },
  {
    href: "/tools/cpa-discipline-selector",
    name: "Discipline Selector",
    blurb: "BAR, ISC or TCP? Six questions about your background and plans, with the reasoning shown.",
    stage: "Decide",
    isNew: true,
  },
  {
    href: "/fees",
    name: "Fee Estimator",
    blurb: "What the exam will cost, built from fees we track at their official source, each with a verification date.",
    stage: "Plan",
  },
  {
    href: "/us-cpa-fees-in-inr",
    name: "CPA Fees in INR",
    blurb: "The same fees converted to rupees, with the exchange rate and its date shown.",
    stage: "Plan",
  },
  {
    href: "/study-planner",
    name: "Study Planner",
    blurb: "A week-by-week, topic-by-topic plan to your exam date, with review weeks and mini-mocks.",
    stage: "Plan",
  },
  {
    href: "/tools/cpa-exam-countdown",
    name: "Exam Countdown",
    blurb: "Track your exam dates, see days left and the AICPA's target score release date for each one.",
    stage: "Track",
    isNew: true,
  },
  {
    href: "/cpa-score-release-dates",
    name: "Score Release Finder",
    blurb: "Enter a test date to see when the AICPA targets releasing your score.",
    stage: "Track",
  },
  {
    href: "/cpa-licensure-pathways",
    name: "120 vs 150 by State",
    blurb: "Which boards have the new 120-hour licensure pathway, and from when.",
    stage: "Decide",
  },
  {
    href: "/question-of-the-day",
    name: "Question of the Day",
    blurb: "One exam-style question a day with a full explanation.",
    stage: "Study",
  },
  {
    href: "/mini-mock",
    name: "Weekly Mini-Mocks",
    blurb: "30 questions in 45 minutes, by section, to test yourself under time pressure.",
    stage: "Study",
  },
  {
    href: "/dashboard",
    name: "Progress Dashboard",
    blurb: "Topics completed, accuracy, mistakes to redo and bookmarks. Needs a free account to save across devices.",
    stage: "Track",
  },
];

export const TOOL_STAGES: { stage: Tool["stage"]; title: string }[] = [
  { stage: "Decide", title: "Decide: is the CPA right for me, and how?" },
  { stage: "Plan", title: "Plan: cost and schedule" },
  { stage: "Study", title: "Study: practise every day" },
  { stage: "Track", title: "Track: dates and progress" },
];
