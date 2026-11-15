import type { PulseArticle } from "./types";

const AICPA_SCORES = "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score";
const AICPA_BLUEPRINTS = "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam";
const AICPA_UI_2027 = "https://www.aicpa-cima.com/professional-insights/article/cpa-exam-user-interface-changes-coming-in-2027";
const NASBA_EXAM_NEWS = "https://nasba.org/exams/news/";
const NASBA_INTERNATIONAL = "https://nasba.org/internationalexam/";
const NASBA_PATHWAYS = "https://nasba.org/pathways/";

/**
 * Newest first. Every fact below was read on the linked official page on the `verified`
 * date. Don't add a story you haven't read at its source.
 */
export const PULSE_ARTICLES: PulseArticle[] = [
  {
    slug: "cpa-exam-scores-released-10-november-2026",
    title: "Core scores are out for 10 November. The next release is targeted for 24 November",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "NASBA processed 8,397 AUD, FAR and REG scores on 10 November 2026. Here are the remaining target dates for this year, including the October Discipline window.",
    eventDate: "2026-11-10",
    published: "2026-11-15",
    verified: "2026-11-15",
    body: [
      {
        type: "p",
        text: "NASBA's Exam News page records that on 10 November 2026 it received and processed 2,715 AUD scores, 3,716 FAR scores and 1,966 REG scores from the AICPA, along with scores for international candidates. That is 8,397 Core scores in one release.",
      },
      {
        type: "p",
        text: "If you sat a Core section and your result is not there yet, the usual reason is timing: Core scores follow the date the AICPA receives your exam file from Prometric, not the date you sat.",
      },
      { type: "h2", text: "Remaining target dates for 2026" },
      {
        type: "table",
        head: ["Section", "If the AICPA has your exam file by / you tested in", "Target release date"],
        rows: [
          ["AUD, FAR, REG", "15 November 2026", "24 November 2026"],
          ["AUD, FAR, REG", "8 December 2026", "16 December 2026"],
          ["AUD, FAR, REG", "31 December 2026", "12 January 2027"],
          ["BAR, ISC, TCP", "1–31 October 2026 window", "15 December 2026"],
        ],
      },
      {
        type: "p",
        text: "These are the AICPA's target dates, and the AICPA says they can change. Your state board or NASBA releases the score to you, so it can appear a little later than the target date.",
      },
      { type: "h2", text: "If you are waiting on an October Discipline score" },
      {
        type: "p",
        text: "BAR, ISC and TCP have one release per testing window. October candidates should expect a result around 15 December, which is too late to plan a retake before the January 2027 window opens without preparing in advance. If you are unsure how it went, keep revising lightly rather than stopping completely.",
      },
    ],
    whyItMatters: [
      "A Core exam file that reaches the AICPA one day after a cut-off moves your score to the next release, often two weeks later.",
      "Your 30-month credit window (at most boards) is measured from score release dates, so these dates affect your overall timeline, not just your nerves.",
      "Discipline candidates get one release per window, so book the next window before the score arrives if a retake is possible.",
    ],
    sources: [
      { label: "NASBA: Exam News (10 November 2026 score release)", url: NASBA_EXAM_NEWS },
      { label: "AICPA: Find out when you'll get your CPA Exam score", url: AICPA_SCORES },
    ],
    related: [
      { label: "Score release date finder", href: "/cpa-score-release-dates" },
      { label: "CPA Exam pass rates by section", href: "/cpa-exam-pass-rates" },
      { label: "Exam countdown", href: "/tools/cpa-exam-countdown" },
    ],
  },
  {
    slug: "2027-cpa-exam-blueprints-published",
    title: "The 2027 CPA Exam Blueprints are published, with a summary of changes",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "The AICPA's Blueprint page now offers the Blueprints effective 1 January 2027 and a separate Summary of Changes. Here is what to download and how to use it.",
    eventDate: "2026-11-12",
    published: "2026-11-15",
    verified: "2026-11-15",
    body: [
      {
        type: "p",
        text: "The AICPA's page on what is tested on the CPA Exam, dated 12 November 2026 when we read it, now carries two downloads for next year: the Uniform CPA Examination Blueprints effective 1 January 2027, and a Summary of Changes to the Exam Blueprints effective 1 January 2027.",
      },
      {
        type: "p",
        text: "The same page lists separate documents on how the PCAOB's quality control standard (QC 1000) and the 2025 tax law (H.R. 1) are tested, and it restates the AICPA's policy on new pronouncements: once a change becomes eligible for testing, the content it replaced is removed.",
      },
      { type: "h2", text: "What we have and have not confirmed" },
      {
        type: "list",
        items: [
          "Confirmed: the 2027 Blueprints and the Summary of Changes are published and available on the AICPA's page.",
          "Confirmed: the exam keeps its structure of three Core sections and one Discipline section, each with five testlets.",
          "Not yet confirmed by us: the line-by-line changes in each section. Some course providers describe the revisions as limited. We are reading the Summary of Changes against our own topic pages and will update this article, and the affected topics, when that review is complete.",
        ],
      },
      { type: "h2", text: "What to do now" },
      {
        type: "list",
        items: [
          "Sitting in 2026: nothing changes for you. Keep studying from the 2026 Blueprint.",
          "Sitting on or after 1 January 2027: download the Summary of Changes and read the pages for your section. It is short.",
          "Studying across the year end: study the common content first and leave anything the summary marks as added or removed until you know your exam date.",
        ],
      },
    ],
    whyItMatters: [
      "The Blueprint is the only official statement of what can be tested. Course providers and free sites, including this one, work from it.",
      "Changes apply from the exam date, not from when you started studying.",
      "Most Blueprint revisions are small. Reading the summary takes minutes and removes a lot of second-hand worry.",
    ],
    sources: [{ label: "AICPA: Learn what is tested on the CPA Exam (Blueprints and Summary of Changes)", url: AICPA_BLUEPRINTS }],
    related: [
      { label: "Free CPA resources: Blueprints and sample tests", href: "/free-cpa-resources" },
      { label: "All six sections, topic by topic", href: "/cpa" },
      { label: "Study planner", href: "/study-planner" },
    ],
  },
  {
    slug: "cpa-exam-july-2027-new-platform-blackout",
    title: "July 2027: a new exam platform, an 11-day testing blackout and fewer score releases",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "The CPA Exam moves to a new delivery platform in July 2027. No testing from 1 to 11 July, and for the following 12 months scores are released once per testing window.",
    eventDate: "2026-08-19",
    published: "2026-11-15",
    verified: "2026-11-15",
    body: [
      {
        type: "p",
        text: "The AICPA announced on 19 August 2026 that the CPA Exam will move to a new technology delivery platform beginning in July 2027, with changes to the user interface. The stated reasons are better accessibility, an improved processing cycle and a more modern exam experience.",
      },
      { type: "h2", text: "The dates" },
      {
        type: "list",
        items: [
          "1–11 July 2027: testing blackout. No appointments are available.",
          "12 July 2027: testing resumes on the new platform.",
          "13 July 2027: the last score release on the old schedule, for Core exam files the AICPA receives by 30 June 2027.",
        ],
      },
      { type: "p", text: "The AICPA describes these as current target dates." },
      { type: "h2", text: "Why scores slow down" },
      {
        type: "p",
        text: "The AICPA says interface changes can influence how exam questions perform statistically, so questions must be recalibrated using candidate responses from the new platform before scores can be reported. The score release schedule is adjusted for 12 months after the launch.",
      },
      {
        type: "p",
        text: "In practice, Core sections change from a release roughly every two weeks to one release per testing window:",
      },
      {
        type: "table",
        head: ["Sections", "Testing window", "Target score release"],
        rows: [
          ["AUD, FAR, REG", "12 July – 30 September 2027", "19 October 2027"],
          ["AUD, FAR, REG", "1 October – 15 December 2027", "28 December 2027"],
          ["AUD, FAR, REG", "1 January – 15 March 2028", "28 March 2028"],
          ["AUD, FAR, REG", "1 April – 15 June 2028", "27 June 2028"],
          ["BAR, ISC, TCP", "12 July – 12 August 2027", "28 September 2027"],
          ["BAR, ISC, TCP", "1–31 October 2027", "17 December 2027"],
          ["BAR, ISC, TCP", "1–31 January 2028", "17 March 2028"],
          ["BAR, ISC, TCP", "1–30 April 2028", "16 June 2028"],
        ],
      },
      { type: "h2", text: "What has not been announced" },
      {
        type: "p",
        text: "The announcement does not say that exam content or structure changes, and it does not yet say when sample tests or tutorials for the new interface will be available. The AICPA says more information is coming.",
      },
    ],
    whyItMatters: [
      "A Core candidate who sits on 12 July 2027 waits until about 19 October for a score. The same exam taken in June is scored by 13 July.",
      "With one release per window, you cannot sit, see a fail and retake in the same window. That makes each attempt from July 2027 more expensive in time.",
      "If you can be ready, sitting a Core section by late June 2027 keeps you on the faster schedule. If you cannot, plan for the wait rather than being surprised by it.",
      "Check how your state board measures the 30-month credit window before you plan sections on either side of the change.",
    ],
    sources: [
      { label: "AICPA: CPA Exam user interface changes coming in 2027 (19 August 2026)", url: AICPA_UI_2027 },
      { label: "AICPA: Find out when you'll get your CPA Exam score", url: AICPA_SCORES },
    ],
    related: [
      { label: "Score release date finder", href: "/cpa-score-release-dates" },
      { label: "Study planner", href: "/study-planner" },
      { label: "Exam countdown", href: "/tools/cpa-exam-countdown" },
    ],
  },
  {
    slug: "120-hour-pathway-states-effective-by-january-2027",
    title: "Six more boards switch on the 120-hour licensure pathway by 1 January 2027",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "New York, Arizona, California, Colorado, Illinois and Indiana have new-pathway laws taking effect between 21 November 2026 and 1 January 2027, according to NASBA's list.",
    eventDate: "2026-10-01",
    published: "2026-11-15",
    verified: "2026-11-15",
    body: [
      {
        type: "p",
        text: "For decades a CPA licence needed 150 semester hours of education and about a year of experience. Most US jurisdictions have now passed laws adding a second route: a bachelor's degree, usually 120 semester hours, plus two years of experience.",
      },
      {
        type: "p",
        text: "NASBA keeps the official list of this legislation. Its pathways page said the map was current as of 1 October 2026 when we read it on 15 November 2026. On that list, six jurisdictions have effective dates falling in the next few weeks:",
      },
      {
        type: "table",
        head: ["Jurisdiction", "New pathway effective"],
        rows: [
          ["New York", "21 November 2026"],
          ["Arizona", "31 December 2026"],
          ["California", "1 January 2027"],
          ["Colorado", "1 January 2027"],
          ["Illinois", "1 January 2027"],
          ["Indiana", "1 January 2027"],
        ],
      },
      { type: "h2", text: "What this does not change" },
      {
        type: "list",
        items: [
          "The CPA Exam is the same exam whichever pathway you use.",
          "An effective date is when the law starts. Boards may still be finalising rules and forms, so read the board's own page before you apply.",
          "Each board still sets which accounting and business courses count. A bachelor's degree alone is not always enough.",
        ],
      },
      { type: "h2", text: "For Indian candidates" },
      {
        type: "p",
        text: "The question is still how your education is evaluated in US semester hours. A three-year B.Com is commonly evaluated at about 90 hours, which is short of 120 under either pathway. A B.Com with an M.Com or MBA usually clears 120. Only a formal credential evaluation settles it.",
      },
    ],
    whyItMatters: [
      "If you have 120 evaluated hours but not 150, more boards are now a realistic route to a licence, not just to the exam.",
      "The trade-off is a second year of experience, which is usually verified by a licensed CPA.",
      "California and New York are two of the largest licensing jurisdictions, so employer familiarity with the new route will grow quickly.",
    ],
    sources: [{ label: "NASBA: New licensure pathways legislation (current as of 1 October 2026)", url: NASBA_PATHWAYS }],
    related: [
      { label: "120 vs 150 by state: full tracker", href: "/cpa-licensure-pathways" },
      { label: "Eligibility navigator", href: "/tools/cpa-eligibility-navigator" },
      { label: "CPA for Indian students", href: "/indian-candidates" },
    ],
  },
  {
    slug: "india-international-testing-fee-check-november-2026",
    title: "Fee check: testing in India still costs $460 per section on top of the exam fee",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "We re-read NASBA's international administration page on 15 November 2026. The India fee is unchanged at $460 per section, for all six sections, and is non-refundable.",
    eventDate: "2026-11-15",
    published: "2026-11-15",
    verified: "2026-11-15",
    body: [
      {
        type: "p",
        text: "NASBA's international administration page lists a separate fee schedule for India: $460.00 for each of AUD, FAR, REG, BAR, ISC and TCP. The general international fee shown on the same page for other locations is $390.00 per section.",
      },
      {
        type: "p",
        text: "The page says these fees are charged in addition to the normal exam fees and are non-refundable. It does not state an effective date for either schedule, so treat the figure as correct on the day we checked it and confirm it on NASBA's page before you pay.",
      },
      { type: "h2", text: "What that adds up to" },
      {
        type: "p",
        text: "Four sections taken in India carry $1,840 in international fees before any exam, application or evaluation fees. A retake pays the international fee again.",
      },
    ],
    whyItMatters: [
      "Third-party sites still quote $390 for India. Budgeting on that figure leaves you $280 short across four sections.",
      "Because the fee is non-refundable, pay it only once your exam date is realistic.",
    ],
    sources: [{ label: "NASBA: International administration of the CPA Exam", url: NASBA_INTERNATIONAL }],
    related: [
      { label: "Fee estimator", href: "/fees" },
      { label: "US CPA fees in INR", href: "/us-cpa-fees-in-inr" },
      { label: "Exam centres in India", href: "/cpa-exam-centres-india" },
    ],
  },
];
