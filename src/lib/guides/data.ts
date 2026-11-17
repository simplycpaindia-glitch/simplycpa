import type { Guide } from "./types";
import { INDIA_TEST_CITIES, INDIA_TEST_CITIES_SOURCE, PROMETRIC_LOCATOR, USD_INR, formatInr, indiaTestCitiesText, toInr } from "@/lib/india";
import { INDIA_INTERNATIONAL_FEE_USD } from "@/lib/trackers/pathways";

const CHECKED = "2026-11-17";

const AICPA_BLUEPRINTS = { label: "AICPA & CIMA — CPA Exam Blueprints", url: "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam" };
const AICPA_PASS = { label: "AICPA & CIMA — CPA Exam scoring and pass rates", url: "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates" };
const NASBA_LICENCE = { label: "NASBA — How to get a CPA licence", url: "https://nasba.org/licensure/gettingacpalicense/howtogetlicensed/" };
const NASBA_PATHWAYS = { label: "NASBA — New CPA licensure pathways", url: "https://nasba.org/pathways/" };
const NASBA_INDIA = { label: "NASBA — CPA Exam in India", url: INDIA_TEST_CITIES_SOURCE };
const NIES = { label: "NASBA International Evaluation Services (NIES)", url: "https://nasba.org/products/nasbainternationalevaluationservices/" };
const BLS = { label: "US Bureau of Labor Statistics — Accountants and Auditors (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm" };
const MRA = { label: "NASBA — International mutual recognition agreements", url: "https://nasba.org/international/mra/" };

const usdToInrText = (usd: number) => `about ${formatInr(Math.round(toInr(usd) / 1000) * 1000)}`;
const fxNote = `Rupee figures use ₹${USD_INR.rate} to the dollar (${USD_INR.source}, ${USD_INR.asOf}).`;

const BLS_MEDIAN = 83_680;
const BLS_P10 = 56_020;
const BLS_P90 = 144_090;

export const GUIDES: Guide[] = [
  {
    slug: "us-cpa-eligibility-for-indian-students",
    short: "CPA eligibility for Indian students",
    title: "US CPA Eligibility for Indian Students (2026): B.Com, M.Com, CA",
    description:
      "Can you sit the US CPA Exam after B.Com, M.Com or CA? How 120 and 150 credit hours work, how Indian degrees are evaluated, and the new 120-hour licence route.",
    eyebrow: "Eligibility",
    h1: "US CPA eligibility for Indian students",
    intro:
      "Eligibility comes down to one number: how many US semester credit hours your Indian education is worth once it has been evaluated. Here is how that works for B.Com, M.Com and CA candidates, and how the new licensure pathway changes things.",
    checked: CHECKED,
    keyPoints: [
      "To sit the exam: most state boards want about 120 evaluated US semester hours, usually with set amounts of accounting and business credit.",
      "For the licence: the traditional route is 150 hours plus one year of experience. A growing number of states also accept 120 hours plus two years — see the [state-by-state tracker](/cpa-licensure-pathways).",
      "B.Com: a three-year B.Com is often evaluated below 120 hours on its own. An M.Com, CA or CMA coursework, or extra credits usually close the gap.",
      "CA: Indian CA candidates often reach the hours they need when CA study is evaluated alongside the degree, but evaluation rules differ by agency and board.",
      "Nothing is final until an approved agency evaluates your documents. Try our [eligibility navigator](/tools/cpa-eligibility-navigator) first.",
    ],
    body: [
      { type: "h2", text: "Two thresholds: sitting for the exam and getting the licence" },
      {
        type: "p",
        text: "Exam eligibility and licensure are separate. Each US state board sets the education you need to sit the exam (commonly 120 semester hours) and, separately, what you need for a licence. Many candidates qualify to sit long before they qualify to be licensed.",
      },
      {
        type: "table",
        head: ["Stage", "Typical education", "Typical experience"],
        rows: [
          ["Sit the CPA Exam", "About 120 semester hours, with accounting and business credits", "None"],
          ["Licence — traditional route", "150 semester hours", "About one year, verified by a licensed CPA"],
          ["Licence — new pathway (where adopted)", "120 semester hours (a bachelor's degree)", "About two years"],
        ],
        caption: "The details vary by board. Always check your chosen board's current rules.",
      },
      { type: "h2", text: "How Indian degrees are counted" },
      {
        type: "p",
        text: "Boards do not read Indian marksheets directly. A credential evaluation agency converts your degrees into US semester hours and subject credits. Most boards accept agencies that belong to NACES, and NASBA's own service, [NIES](https://nasba.org/products/nasbainternationalevaluationservices/), was built to place international candidates with a suitable board.",
      },
      {
        type: "list",
        items: [
          "B.Com (three years): often evaluated below 120 hours by itself, so many graduates add an M.Com or additional credits.",
          "B.Com + M.Com: commonly enough to sit, and sometimes enough for 150 hours, depending on the agency and courses.",
          "CA (Inter or Final) with a degree: CA coursework may add credit, but treatment differs between agencies and boards.",
          "Distance or online degrees: generally acceptable if the university is recognised, but check with the agency first.",
        ],
      },
      { type: "h2", text: "Choosing a state board" },
      {
        type: "p",
        text: "You do not need to live in the state whose board you apply through. Indian candidates pick a board whose education and experience rules they can meet, and which allows testing in India. Compare boards in our [state boards guide](/state-boards).",
      },
      { type: "h2", text: "Step by step" },
      {
        type: "steps",
        items: [
          { title: "Estimate your hours", body: "Use the [eligibility navigator](/tools/cpa-eligibility-navigator) to see roughly where your education stands." },
          { title: "Shortlist boards", body: "Pick two or three boards whose rules fit, using [state boards compared](/state-boards)." },
          { title: "Get your credentials evaluated", body: "Send transcripts to an agency your board accepts. This sets your official hours." },
          { title: "Apply and book", body: `Apply to the board, receive your Notice to Schedule, and book a Prometric seat in one of India's ${INDIA_TEST_CITIES.length} test cities.` },
        ],
      },
    ],
    faqs: [
      { q: "Can I do US CPA after B.Com in India?", a: "Yes, but a three-year B.Com is often evaluated below the 120 hours most boards require to sit. Many candidates add an M.Com, CA coursework or extra credits. An evaluation confirms your position." },
      { q: "Is M.Com enough for US CPA eligibility?", a: "B.Com plus M.Com commonly meets the 120-hour requirement to sit the exam, and in some evaluations reaches 150 hours for the licence. It depends on the courses and the agency." },
      { q: "Can a CA student take the US CPA Exam?", a: "Often yes, once CA coursework and the degree are evaluated together. See [US CPA eligibility for CA students](/blog/us-cpa-eligibility-for-indian-ca-students) for the details." },
      { q: "Do I need 150 credits for the CPA?", a: "Not always. Most boards let you sit with about 120, and many states now offer a licence route with 120 hours plus two years of experience. Check the [licensure pathways tracker](/cpa-licensure-pathways)." },
      { q: "Do I have to live in the US state I apply to?", a: "No. Residency is generally not required to apply through a board, which is why Indian candidates choose the board whose rules suit them." },
    ],
    sources: [NASBA_LICENCE, NASBA_PATHWAYS, NIES, NASBA_INDIA],
    related: [
      { label: "Eligibility navigator", href: "/tools/cpa-eligibility-navigator" },
      { label: "CPA licensure pathways by state", href: "/cpa-licensure-pathways" },
      { label: "State boards compared", href: "/state-boards" },
      { label: "US CPA fees in rupees", href: "/us-cpa-fees-in-inr" },
      { label: "CPA for Indian students", href: "/indian-candidates" },
    ],
  },
  {
    slug: "us-cpa-salary-in-india",
    short: "US CPA salary",
    title: "US CPA Salary in India and the USA (2026): What the Data Shows",
    description:
      "What US CPAs earn: official US pay data from the Bureau of Labor Statistics, why there is no official India figure, and what really drives CPA pay in India.",
    eyebrow: "Salary",
    h1: "US CPA salary in India and the USA",
    intro:
      "Coaching sites quote very different salary figures, often inconsistent even on the same website. Here is what official data actually says, and how to think about pay in India, where no official survey exists.",
    checked: CHECKED,
    keyPoints: [
      `USA: the median annual wage for accountants and auditors was $${BLS_MEDIAN.toLocaleString("en-US")} in May 2025 (${usdToInrText(BLS_MEDIAN)}), per the US Bureau of Labor Statistics.`,
      `Range: the lowest 10% earned less than $${BLS_P10.toLocaleString("en-US")} and the highest 10% more than $${BLS_P90.toLocaleString("en-US")}.`,
      "India: there is no government or regulator survey of US CPA salaries in India. Any single number is an estimate from job sites or training providers.",
      "What drives pay in India: the employer type (Big 4, mid-tier, captive centre), US-facing work, licence status and years of experience.",
    ],
    body: [
      { type: "h2", text: "Official US data" },
      {
        type: "table",
        head: ["Measure (May 2025)", "US dollars", "In rupees"],
        rows: [
          ["Median annual wage, accountants and auditors", `$${BLS_MEDIAN.toLocaleString("en-US")}`, usdToInrText(BLS_MEDIAN)],
          ["Lowest 10% earned less than", `$${BLS_P10.toLocaleString("en-US")}`, usdToInrText(BLS_P10)],
          ["Highest 10% earned more than", `$${BLS_P90.toLocaleString("en-US")}`, usdToInrText(BLS_P90)],
        ],
        caption: `Source: US Bureau of Labor Statistics. ${fxNote} Converting a US salary to rupees ignores the very different cost of living.`,
      },
      {
        type: "p",
        text: "The BLS projects employment of accountants and auditors to grow 5% from 2025 to 2035, with about 115,300 openings a year on average. It notes that becoming a licensed CPA may improve job prospects, and that any accountant who files a report with the SEC must be a licensed CPA.",
      },
      { type: "h2", text: "Why we do not publish a single India figure" },
      {
        type: "p",
        text: "In India, US CPAs work in Big 4 delivery centres, mid-sized firms serving US clients, global capability centres of US companies and outsourcing providers. Pay varies widely across these, and there is no official dataset. Figures you see online are estimates, and they often contradict each other.",
      },
      { type: "h2", text: "What actually moves your pay" },
      {
        type: "list",
        items: [
          "Employer type: US-facing audit and advisory teams and captive centres of US companies usually pay more than general outsourcing roles.",
          "Licence, not just passed sections: a licensed CPA can sign off work and often moves faster up the ladder.",
          "Specialisation: technical accounting, US tax, IT audit and SOC reporting command premiums.",
          "Experience: pay rises with years of relevant US GAAP, GAAS or US tax experience.",
          "Mobility: transfers to the US or the Middle East change the picture entirely — see [US CPA jobs in the USA](/us-cpa-jobs-in-usa-for-indians).",
        ],
      },
      {
        type: "callout",
        title: "A practical way to judge an offer",
        text: "Compare offers within the same city and role level, using several job sites and conversations with people in the role, rather than relying on any one published figure.",
      },
    ],
    faqs: [
      { q: "What is the salary of a US CPA in India?", a: "There is no official survey. Pay depends on employer type, role, licence status and experience. We explain the drivers in [US CPA salary in India: roles and career paths](/blog/us-cpa-salary-in-india-roles-experience)." },
      { q: "What do accountants earn in the USA?", a: `The median annual wage for accountants and auditors was $${BLS_MEDIAN.toLocaleString("en-US")} in May 2025, according to the US Bureau of Labor Statistics.` },
      { q: "Does a CPA licence increase salary?", a: "The BLS says becoming a licensed CPA may improve job prospects. In practice, a licence also allows you to sign off on certain work, which supports promotion." },
      { q: "Is US CPA salary higher than CA salary in India?", a: "It depends on the role. CPAs are typically paid more in US-facing roles; CAs in Indian statutory, tax and regulatory work. Many professionals hold both. See [CA vs CPA](/ca-vs-cpa)." },
    ],
    sources: [BLS],
    related: [
      { label: "US CPA jobs in the USA for Indians", href: "/us-cpa-jobs-in-usa-for-indians" },
      { label: "US CPA jobs in India", href: "/blog/us-cpa-jobs-in-india-roles" },
      { label: "CA vs CPA", href: "/ca-vs-cpa" },
      { label: "Is US CPA worth it in India?", href: "/blog/is-us-cpa-worth-it-for-an-indian-ca" },
    ],
  },
  {
    slug: "ca-vs-cpa",
    short: "CA vs CPA",
    title: "CA vs CPA (2026): Differences, Exams, Eligibility and Careers",
    description:
      "Indian CA vs US CPA compared: who awards them, exam structure, experience, pass rates, recognition and careers — and when it makes sense to hold both.",
    eyebrow: "Comparison",
    h1: "CA vs CPA: which one, or both?",
    intro:
      "The Indian CA and the US CPA are not rivals so much as credentials for different markets. Here is a side-by-side comparison using official sources.",
    checked: CHECKED,
    keyPoints: [
      "CA (India) is awarded by ICAI and is the standard credential for Indian audit, tax and company law work.",
      "CPA (USA) is a licence issued by a US state board after passing the Uniform CPA Exam set by the AICPA, and is the credential for US GAAP, US auditing and US tax work.",
      "The CPA Exam is four sections: three Core (FAR, AUD, REG) and one Discipline (BAR, ISC or TCP).",
      "Many Indian professionals hold both: CA for Indian work, CPA for US-facing roles.",
    ],
    body: [
      { type: "h2", text: "Side by side" },
      {
        type: "table",
        head: ["", "Indian CA", "US CPA"],
        rows: [
          ["Awarded by", "Institute of Chartered Accountants of India (ICAI)", "A US state board of accountancy, after the AICPA's Uniform CPA Exam"],
          ["Exams", "Foundation, Intermediate and Final levels", "Four sections: FAR, AUD, REG and one of BAR, ISC or TCP"],
          ["Where you can sit", "India", `Prometric centres in ${INDIA_TEST_CITIES.length} Indian cities, the US and other countries`],
          ["Practical experience", "Articleship (practical training) under a practising CA", "Usually one or two years, depending on the licensure route, verified by a CPA"],
          ["Core technical content", "Ind AS, Indian tax, Indian company law", "US GAAP, US auditing standards, US federal tax and business law"],
          ["Best for", "Indian statutory audit, tax and compliance", "US-facing audit, reporting, tax and advisory"],
        ],
      },
      { type: "h2", text: "Exam difficulty and pass rates" },
      {
        type: "p",
        text: "The AICPA publishes CPA pass rates by section. For 2025 they ranged from about 42% (FAR and BAR) to about 78% (TCP). See the full figures in our [pass rate tracker](/cpa-exam-pass-rates). ICAI publishes CA results for each attempt.",
      },
      { type: "h2", text: "When the CPA makes sense for a CA" },
      {
        type: "list",
        items: [
          "Your work, or target work, involves US clients, US subsidiaries or Big 4 US-facing teams.",
          "You want to work in the US, or in markets that value US credentials.",
          "You want to specialise in US GAAP reporting, SOX controls, US tax or IT audit.",
        ],
      },
      {
        type: "p",
        text: "If you are a CA candidate, check how your CA study counts towards CPA eligibility in our [eligibility guide](/us-cpa-eligibility-for-indian-students).",
      },
    ],
    faqs: [
      { q: "Is CPA better than CA?", a: "Neither is better in general. CA is the credential for Indian audit and tax; CPA is the credential for US-facing work. Choose based on the work you want to do." },
      { q: "Can a CA become a US CPA?", a: "Yes. Many CAs qualify to sit the CPA Exam once their education is evaluated. See [can an Indian CA become a US CPA](/blog/can-indian-chartered-accountant-become-us-cpa)." },
      { q: "Is the CPA Exam harder than CA?", a: "They test different things. The CPA has fewer exams but covers unfamiliar US law and tax for Indian candidates. Pass rates per section are published by the AICPA; see our [pass rate tracker](/cpa-exam-pass-rates)." },
      { q: "Can I do CA and CPA together?", a: "Some candidates do, but the workload is heavy. Many finish CA first and then use it towards CPA eligibility." },
    ],
    sources: [AICPA_PASS, AICPA_BLUEPRINTS, NASBA_LICENCE, { label: "ICAI — The Institute of Chartered Accountants of India", url: "https://www.icai.org/" }],
    related: [
      { label: "CPA vs ACCA", href: "/cpa-vs-acca" },
      { label: "CPA vs CFA", href: "/cpa-vs-cfa" },
      { label: "CPA vs CMA vs ACCA", href: "/blog/cpa-vs-cma-vs-acca" },
      { label: "Eligibility for Indian students", href: "/us-cpa-eligibility-for-indian-students" },
    ],
  },
  {
    slug: "us-cpa-course-duration",
    short: "How long the CPA takes",
    title: "How Long Does the US CPA Take? Duration and Timeline (2026)",
    description:
      "How long the US CPA takes from India: study hours per section, the 30-month credit window, Discipline testing windows, evaluation and licensing time.",
    eyebrow: "Timeline",
    h1: "How long does the US CPA take?",
    intro:
      "Most working candidates in India take 12 to 18 months to pass all four sections, plus time before and after for evaluation and licensing. Here is where the time goes.",
    checked: CHECKED,
    keyPoints: [
      "Study: roughly 400–550 hours in total across four sections, by our section guides' estimates.",
      "Pace: at 15 hours a week, that is about 7–9 months of study, before revision and gaps between sections.",
      "Credit window: most boards give you 30 months from passing your first section to pass the rest.",
      "Disciplines (BAR, ISC, TCP) are tested only in set windows each quarter, which can add waiting time.",
      "Before and after: allow time for credential evaluation before you apply, and for experience and an ethics exam (if required) before the licence.",
    ],
    body: [
      { type: "h2", text: "Study hours by section" },
      {
        type: "table",
        head: ["Section", "Suggested hours", "Guide"],
        rows: [
          ["FAR", "120+", "[The FAR exam](/blog/far-exam-complete-guide)"],
          ["AUD", "110–140", "[The AUD exam](/blog/aud-exam-complete-guide)"],
          ["REG", "100–130", "[The REG exam](/blog/reg-exam-complete-guide)"],
          ["BAR", "110–140", "[The BAR exam](/blog/bar-exam-complete-guide)"],
          ["ISC", "90–120", "[The ISC exam](/blog/isc-exam-complete-guide)"],
          ["TCP", "80–110", "[The TCP exam](/blog/tcp-exam-complete-guide)"],
        ],
        caption: "You take FAR, AUD, REG and one Discipline. Estimates are ours; your background changes them a lot.",
      },
      { type: "h2", text: "A realistic timeline from India" },
      {
        type: "steps",
        items: [
          { title: "Evaluation and application (1–3 months)", body: "Credential evaluation, board application and your Notice to Schedule." },
          { title: "First section (2–3 months)", body: "Many start with FAR. Use the [section order planner](/tools/cpa-section-order) to choose." },
          { title: "Remaining sections (6–12 months)", body: "Keep gaps short so early passes do not expire under your board's credit window." },
          { title: "Licence (after passing)", body: "Complete the experience requirement and any ethics exam your board requires." },
        ],
      },
      {
        type: "callout",
        title: "Plan with dates, not hopes",
        text: "Our free [study planner](/study-planner) turns your hours and exam dates into weekly targets, and the [exam countdown](/tools/cpa-exam-countdown) keeps you on track.",
      },
    ],
    faqs: [
      { q: "Can I finish the US CPA in 6 months?", a: "Some full-time candidates pass all four sections in about six months, but most people working full-time take 12 to 18 months." },
      { q: "How long is the CPA credit window?", a: "Most boards now give 30 months from the date you pass your first section to pass the remaining sections. Check your board's rule." },
      { q: "How many hours should I study for the CPA?", a: "Plan for roughly 400–550 hours in total, more for FAR and BAR, less for TCP if you have just passed REG." },
      { q: "How long after passing do I get my CPA licence?", a: "It depends on your board's experience requirement (often one or two years) and any ethics exam, plus processing time." },
    ],
    sources: [AICPA_BLUEPRINTS, NASBA_LICENCE, { label: "AICPA & CIMA — CPA Exam score release timeline", url: "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score" }],
    related: [
      { label: "Section order planner", href: "/tools/cpa-section-order" },
      { label: "Study planner", href: "/study-planner" },
      { label: "Score release dates", href: "/cpa-score-release-dates" },
      { label: "US CPA syllabus", href: "/us-cpa-syllabus" },
    ],
  },
  {
    slug: "us-cpa-syllabus",
    short: "US CPA syllabus",
    title: "US CPA Syllabus 2026–2027: All Six Sections and Blueprint Weights",
    description:
      "The US CPA syllabus for every section — FAR, AUD, REG, BAR, ISC and TCP — with official blueprint area weights, question counts and links to free study material.",
    eyebrow: "Syllabus",
    h1: "US CPA syllabus: every section at a glance",
    intro:
      "The AICPA's blueprints define the CPA syllabus. Every candidate takes three Core sections and chooses one Discipline. Here is what each covers, with the official weights.",
    checked: CHECKED,
    keyPoints: [
      "Core (everyone takes): FAR, AUD and REG.",
      "Discipline (choose one): BAR, ISC or TCP.",
      "Each section is four hours, mixing multiple-choice questions and task-based simulations.",
      "The 2027 blueprints make small changes to tasks and references, but the area weights are unchanged.",
    ],
    body: [
      { type: "h2", text: "Format of each section" },
      {
        type: "table",
        head: ["Section", "MCQs", "Simulations", "Score weighting"],
        rows: [
          ["[FAR](/cpa/far) — Financial Accounting and Reporting", "50", "7", "50% / 50%"],
          ["[AUD](/cpa/aud) — Auditing and Attestation", "78", "7", "50% / 50%"],
          ["[REG](/cpa/reg) — Taxation and Regulation", "72", "8", "50% / 50%"],
          ["[BAR](/cpa/bar) — Business Analysis and Reporting", "50", "7", "50% / 50%"],
          ["[ISC](/cpa/isc) — Information Systems and Controls", "82", "6", "60% / 40%"],
          ["[TCP](/cpa/tcp) — Tax Compliance and Planning", "68", "7", "50% / 50%"],
        ],
      },
      { type: "h2", text: "Content areas and weights" },
      {
        type: "table",
        head: ["Section", "Content areas (weight)"],
        rows: [
          ["FAR", "Financial reporting (30–40%); select balance sheet accounts (30–40%); select transactions (25–35%)"],
          ["AUD", "Ethics and general principles (15–25%); risk assessment (25–35%); further procedures and evidence (30–40%); conclusions and reporting (10–20%)"],
          ["REG", "Ethics and federal tax procedures (10–20%); business law (15–25%); property transactions (5–15%); individuals (22–32%); entities (23–33%)"],
          ["BAR", "Business analysis (40–50%); technical accounting and reporting (35–45%); state and local governments (10–20%)"],
          ["ISC", "Information systems and data management (35–45%); security, confidentiality and privacy (35–45%); SOC engagements (15–25%)"],
          ["TCP", "Individual compliance and planning (30–40%); entity compliance (30–40%); entity planning (10–20%); property transactions (10–20%)"],
        ],
        caption: "From the AICPA blueprints (2026 and 2027 editions; weights unchanged).",
      },
      {
        type: "p",
        text: "Each section page on SimplyCPA lists every topic in blueprint order, with free notes, practice questions and simulations. Not sure which Discipline to pick? Try the [Discipline selector](/tools/cpa-discipline-selector).",
      },
    ],
    faqs: [
      { q: "How many papers are there in US CPA?", a: "Four: three Core sections (FAR, AUD, REG) and one Discipline of your choice (BAR, ISC or TCP)." },
      { q: "Which is the hardest CPA section?", a: "By pass rate, FAR and BAR have been the lowest, at around 42% in 2025. See the [pass rate tracker](/cpa-exam-pass-rates)." },
      { q: "Is the CPA syllabus changing in 2027?", a: "The 2027 blueprints make small revisions in five sections and none in TCP, without changing area weights. See our [Pulse story on the 2027 blueprints](/pulse/2027-cpa-exam-blueprints-published)." },
      { q: "What is the passing score for the CPA?", a: "75 on a 0–99 scaled score. It is not a percentage of questions answered correctly." },
    ],
    sources: [AICPA_BLUEPRINTS, AICPA_PASS],
    related: [
      { label: "Study all sections", href: "/cpa" },
      { label: "Discipline selector", href: "/tools/cpa-discipline-selector" },
      { label: "Full mock exams", href: "/mock-exam" },
      { label: "How long the CPA takes", href: "/us-cpa-course-duration" },
    ],
  },
  {
    slug: "us-cpa-jobs-in-usa-for-indians",
    short: "US CPA jobs in the USA",
    title: "US CPA Jobs in the USA for Indians (2026): Visas, Transfers and Pay",
    description:
      "How Indian accountants with a US CPA get to work in the USA: H-1B rules and the lottery, the $100,000 payment and its court status, L-1 transfers, and official pay data.",
    eyebrow: "Working abroad",
    h1: "Working in the USA as an Indian CPA",
    intro:
      "A US CPA makes you employable by US firms, but working in the US also needs a visa. Here is how the main routes work, from official USCIS information, including the 2025–26 changes.",
    checked: CHECKED,
    keyPoints: [
      "H-1B: for specialty occupations needing at least a bachelor's degree. 65,000 new visas a year, plus 20,000 for holders of a US master's degree or higher.",
      "Selection: since fiscal year 2027, the H-1B lottery gives more weight to higher wage levels (Level IV entered four times, Level I once).",
      "The $100,000 payment for certain new H-1B petitions (September 2025 proclamation) was set aside by a US court in June 2026; USCIS says it is complying while the government considers next steps.",
      "L-1: an employer can transfer you to a related US company if you have worked for it abroad for one continuous year in the past three years.",
      `Pay: the US median for accountants and auditors was $${BLS_MEDIAN.toLocaleString("en-US")} in May 2025 (BLS).`,
    ],
    body: [
      { type: "h2", text: "Route 1: the H-1B visa" },
      {
        type: "list",
        items: [
          "The job must be a specialty occupation that normally requires a bachelor's degree or higher in a related field (or its equivalent).",
          "There are 65,000 new H-1B visas or statuses a year (up to 6,800 reserved for Chile and Singapore), plus 20,000 for people with a US master's degree or higher.",
          "Employers register candidates in March. For fiscal year 2027 the registration fee was $215, and USCIS has since said both caps were reached.",
          "Initial stay is up to three years, extendable to six years in total.",
          "Universities, their affiliated nonprofits and some research organisations are exempt from the cap.",
        ],
      },
      {
        type: "table",
        head: ["Wage level offered", "Entries in the lottery"],
        rows: [
          ["Level IV", "4"],
          ["Level III", "3"],
          ["Level II", "2"],
          ["Level I", "1"],
        ],
        caption: "Weighted selection from fiscal year 2027, applied only when random selection is needed. Source: USCIS.",
      },
      {
        type: "callout",
        title: "The $100,000 H-1B payment: where it stands",
        text: "A September 2025 proclamation required a $100,000 payment for certain new H-1B petitions for workers outside the US. On 8 June 2026 a federal court in Massachusetts vacated the guidance implementing it, and on 24 July 2026 the appeals court refused to pause that ruling. USCIS says it will comply while DHS considers next steps, and that it still plans to collect the payment if the order is lifted. Check USCIS before relying on this.",
      },
      { type: "h2", text: "Route 2: an intracompany transfer (L-1)" },
      {
        type: "p",
        text: "If you work for a company abroad that has a qualifying relationship (parent, branch, subsidiary or affiliate) with a US company, it may transfer you after you have worked for it for one continuous year in the previous three. L-1A (managers and executives) allows up to seven years in total; L-1B (specialised knowledge) up to five. Note that many Indian member firms of global networks are separate legal entities, so check whether a qualifying relationship exists.",
      },
      { type: "h2", text: "Route 3: study in the US first" },
      {
        type: "p",
        text: "A master's degree from a US institution qualifies you for the separate 20,000-place advanced degree allocation in the H-1B lottery, and US credits can also help you reach 150 hours for a licence. It is a large investment, so weigh it carefully.",
      },
      { type: "h2", text: "The CPA licence and US jobs" },
      {
        type: "p",
        text: "The BLS notes that any accountant who files a report with the SEC must be a licensed CPA, and that a licence may improve job prospects. US employers often value licensed CPAs for audit and tax roles. Check whether your board's experience rules let you complete licensure from India before you move.",
      },
    ],
    faqs: [
      { q: "Can I get a job in the USA after US CPA from India?", a: "Yes, but you also need a US work visa, most commonly the H-1B or an L-1 transfer. The CPA improves your profile but does not give you a right to work in the US." },
      { q: "How many H-1B visas are there each year?", a: "65,000 under the regular cap, plus 20,000 for people with a US master's degree or higher. Cap-exempt employers, such as universities, are not limited." },
      { q: "Is the $100,000 H-1B fee still in force?", a: "A court vacated the guidance implementing it in June 2026 and the appeals court refused to stay that ruling in July 2026. USCIS says it is complying for now. Check USCIS for the latest position." },
      { q: "Can my Big 4 employer in India transfer me to the US?", a: "Possibly, through an L-1 visa, if the Indian and US entities have a qualifying relationship and you have worked for the Indian entity for one continuous year in the past three." },
    ],
    sources: [
      { label: "USCIS — H-1B specialty occupations", url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" },
      { label: "USCIS — H-1B cap season", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-cap-season" },
      { label: "USCIS — H-1B electronic registration process", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process" },
      { label: "USCIS — L-1A intracompany transferee executive or manager", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager" },
      { label: "USCIS — L-1B intracompany transferee specialized knowledge", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1b-intracompany-transferee-specialized-knowledge" },
      BLS,
    ],
    related: [
      { label: "US CPA salary in India and the USA", href: "/us-cpa-salary-in-india" },
      { label: "Where a US CPA is recognised abroad", href: "/us-cpa-recognition-abroad" },
      { label: "CPA licensure pathways", href: "/cpa-licensure-pathways" },
    ],
  },
  {
    slug: "us-cpa-recognition-abroad",
    short: "US CPA recognition abroad",
    title: "Where Is the US CPA Recognised? Mutual Recognition Agreements (2026)",
    description:
      "The countries and bodies with mutual recognition agreements with US CPAs — including CPA Australia, CPA Canada and Chartered Accountants Ireland — and what that means for Indians.",
    eyebrow: "Working abroad",
    h1: "Where the US CPA is recognised",
    intro:
      "Mutual recognition agreements let qualified accountants move between countries without completely re-qualifying. Here are the agreements US CPAs have, from NASBA, and what they mean if you are planning a career outside India.",
    checked: CHECKED,
    keyPoints: [
      "NASBA and the AICPA, through their International Qualifications Appraisal Board, list seven current mutual recognition agreements.",
      "They cover South Africa (SAICA), Australia (CPA Australia, CA ANZ), New Zealand (CA ANZ), Canada (CPA Canada), Ireland (Chartered Accountants Ireland, CPA Ireland) and Mexico (IMCP).",
      "India's ICAI is not on NASBA's list of agreements.",
      "Each agreement has its own conditions, such as extra exams or experience, so read the agreement before you plan a move.",
    ],
    body: [
      { type: "h2", text: "The current agreements" },
      {
        type: "table",
        head: ["Body", "Country"],
        rows: [
          ["South African Institute of Chartered Accountants (SAICA)", "South Africa"],
          ["CPA Australia", "Australia"],
          ["Chartered Accountants Australia and New Zealand (CA ANZ)", "Australia and New Zealand"],
          ["CPA Canada", "Canada"],
          ["Chartered Accountants Ireland", "Ireland"],
          ["Institute of Certified Public Accountants in Ireland (CPA Ireland)", "Ireland"],
          ["Instituto Mexicano de Contadores Públicos (IMCP)", "Mexico"],
        ],
        caption: "Source: NASBA, International Qualifications Appraisal Board.",
      },
      {
        type: "p",
        text: "NASBA describes these agreements as letting qualified accountants from the other country practise in the US without completely re-credentialing, with similar recognition for US CPAs in that country.",
      },
      { type: "h2", text: "What about the Middle East and other markets?" },
      {
        type: "p",
        text: "Many employers in the Gulf and elsewhere hire US CPAs for audit, reporting and finance roles, especially for companies reporting under US GAAP or to US parents. That is employer demand rather than a formal recognition agreement, so check local licensing rules if you need to sign audit reports.",
      },
      { type: "h2", text: "For Indian candidates" },
      {
        type: "list",
        items: [
          "Your US CPA is earned through a US state board, wherever you sat the exam, so the agreements apply to the licence you hold.",
          "If you plan to move to one of these countries, read that body's agreement for its extra requirements.",
          "If you plan to work in the US itself, see [US CPA jobs in the USA](/us-cpa-jobs-in-usa-for-indians).",
        ],
      },
    ],
    faqs: [
      { q: "Is the US CPA valid in Canada and Australia?", a: "CPA Canada, CPA Australia and CA ANZ have mutual recognition agreements with the US, which give a route to recognition, subject to each agreement's conditions." },
      { q: "Is the US CPA recognised in India?", a: "ICAI is not on NASBA's list of mutual recognition agreements, so a US CPA does not make you an Indian CA. Employers in India still value it for US-facing work." },
      { q: "Is the US CPA recognised in Dubai and the UAE?", a: "There is no mutual recognition agreement listed for the UAE, but many employers there hire US CPAs for audit and finance roles." },
    ],
    sources: [MRA],
    related: [
      { label: "US CPA jobs in the USA", href: "/us-cpa-jobs-in-usa-for-indians" },
      { label: "CPA vs ACCA", href: "/cpa-vs-acca" },
      { label: "CA vs CPA", href: "/ca-vs-cpa" },
    ],
  },
  {
    slug: "cpa-vs-acca",
    short: "CPA vs ACCA",
    title: "CPA vs ACCA (2026): Which Is Better for Indian Students?",
    description:
      "US CPA vs ACCA for Indian students: exams, experience requirements, where each is valued and how to choose — using information from ACCA and the AICPA.",
    eyebrow: "Comparison",
    h1: "CPA vs ACCA: which fits your career?",
    intro:
      "Both are respected international accounting qualifications, but they point to different markets. Here is a factual comparison to help you choose.",
    checked: CHECKED,
    keyPoints: [
      "US CPA: four exam sections, then a licence from a US state board with work experience.",
      "ACCA: nine Applied Knowledge and Applied Skills exams, Strategic Professional exams, an Ethics and Professional Skills module, and 36 months of supervised experience.",
      "CPA is built around US GAAP, US auditing and US tax; ACCA around IFRS and international standards.",
      "ACCA says its qualification is changing from 2027, so check its site for the latest structure.",
    ],
    body: [
      { type: "h2", text: "Side by side" },
      {
        type: "table",
        head: ["", "US CPA", "ACCA"],
        rows: [
          ["Awarded by", "A US state board, after the AICPA's Uniform CPA Exam", "ACCA (Association of Chartered Certified Accountants), UK-based"],
          ["Exams", "4 sections: FAR, AUD, REG + one of BAR, ISC or TCP", "9 Applied Knowledge and Applied Skills exams, then Strategic Professional exams"],
          ["Ethics", "Tested in AUD and REG; some boards also need an ethics exam", "Ethics and Professional Skills module, about 20 hours"],
          ["Experience", "Usually one or two years, depending on the licence route", "36 months of supervised experience in an accounting or finance role"],
          ["Exemptions", "None; all four sections must be passed", "Possible for the nine AK and AS exams for relevant prior qualifications; none for Strategic Professional"],
          ["Standards focus", "US GAAP, US GAAS and PCAOB, US federal tax", "IFRS and international standards"],
        ],
      },
      { type: "h2", text: "How to choose" },
      {
        type: "list",
        items: [
          "Choose CPA if your work is US-facing: US clients, US-listed companies, US tax, SOX or SOC work.",
          "Choose ACCA if you are aiming for IFRS-based roles in the UK, Europe, the Middle East or Asia, or want exemptions from prior study.",
          "Indian CAs often find either a natural next step; compare the time each would take given your exemptions and eligibility.",
        ],
      },
      {
        type: "p",
        text: "Check your CPA eligibility with our [eligibility navigator](/tools/cpa-eligibility-navigator), and see the broader comparison in [CPA vs CMA vs ACCA](/blog/cpa-vs-cma-vs-acca).",
      },
    ],
    faqs: [
      { q: "Is CPA better than ACCA for Indians?", a: "For US-facing roles, yes; for IFRS-based roles in the UK, Europe or the Middle East, ACCA may fit better. Many choose based on the employer they want." },
      { q: "How many exams are there in ACCA and CPA?", a: "The CPA has four sections. ACCA has nine Applied Knowledge and Applied Skills exams plus Strategic Professional exams, an ethics module and 36 months of experience." },
      { q: "Does ACCA give exemptions to US CPAs?", a: "ACCA assesses exemptions case by case for qualifications equivalent to its exams, using its exemptions calculator. Its general exemptions page does not list the US CPA, so check ACCA directly." },
    ],
    sources: [
      { label: "ACCA — Exemptions", url: "https://www.accaglobal.com/gb/en/student/getting-started/exemptions.html" },
      { label: "ACCA — Ethics and Professional Skills module", url: "https://www.accaglobal.com/gb/en/student/ethics/ethics-and-professional-skills.html" },
      { label: "ACCA — 36 months' practical experience", url: "https://www.accaglobal.com/gb/en/student/practical-experience-per/36-months-practical-experience.html" },
      AICPA_BLUEPRINTS,
    ],
    related: [
      { label: "CA vs CPA", href: "/ca-vs-cpa" },
      { label: "CPA vs CFA", href: "/cpa-vs-cfa" },
      { label: "Where the US CPA is recognised", href: "/us-cpa-recognition-abroad" },
    ],
  },
  {
    slug: "cpa-vs-cfa",
    short: "CPA vs CFA",
    title: "CPA vs CFA (2026): Accounting Licence or Investment Charter?",
    description:
      "US CPA vs CFA compared: what each covers, exam structure, experience requirements and pass rates from the AICPA and CFA Institute, and which suits your career.",
    eyebrow: "Comparison",
    h1: "CPA vs CFA: which one is for you?",
    intro:
      "The CPA is an accounting licence; the CFA is an investment management charter. They overlap in financial reporting but lead to different careers.",
    checked: CHECKED,
    keyPoints: [
      "CPA: four exam sections and a state licence, focused on accounting, audit and tax.",
      "CFA: three levels, each a 4.5-hour exam, focused on investment analysis and portfolio management.",
      "CFA charterholders need 4,000 hours of relevant work experience over at least three years.",
      "CFA Institute reports 10-year average pass rates of 41% (Level I), 45% (Level II) and 52% (Level III).",
    ],
    body: [
      { type: "h2", text: "Side by side" },
      {
        type: "table",
        head: ["", "US CPA", "CFA"],
        rows: [
          ["Awarded by", "A US state board, after the AICPA's Uniform CPA Exam", "CFA Institute"],
          ["Exams", "4 sections, 4 hours each", "3 levels, 4.5 hours each"],
          ["Focus", "Financial reporting, audit, US tax and business law", "Investment analysis, valuation, portfolio management and ethics"],
          ["Experience", "Usually one or two years for the licence", "4,000 hours over at least three years"],
          ["Pass rates", "About 42%–78% by section in 2025 (AICPA)", "10-year averages: 41%, 45% and 52% by level"],
          ["Typical careers", "Audit, accounting, tax, controllership", "Equity research, asset management, investment banking"],
        ],
      },
      {
        type: "p",
        text: "If you enjoy valuation and markets, the CFA fits. If you want to work in audit, reporting or tax — especially for US companies — the CPA does. Some finance professionals hold both.",
      },
    ],
    faqs: [
      { q: "Is CPA or CFA better?", a: "They lead to different careers. CPA suits accounting, audit and tax; CFA suits investment analysis and portfolio management." },
      { q: "Is the CFA harder than the CPA?", a: "Both are demanding. CFA Institute reports 10-year average pass rates of 41% to 52% by level; CPA section pass rates were about 42% to 78% in 2025." },
      { q: "Can I do CPA and CFA together?", a: "It is possible, but each takes hundreds of study hours. Most people finish one before starting the other." },
    ],
    sources: [
      { label: "CFA Institute — CFA Program", url: "https://www.cfainstitute.org/en/programs/cfa-program" },
      { label: "CFA Institute — CFA Program exam", url: "https://www.cfainstitute.org/programs/cfa-program/exam" },
      AICPA_PASS,
    ],
    related: [
      { label: "CA vs CPA", href: "/ca-vs-cpa" },
      { label: "CPA vs ACCA", href: "/cpa-vs-acca" },
      { label: "US CPA salary", href: "/us-cpa-salary-in-india" },
    ],
  },
];

// ---------------------------------------------------------------------------------------
// City guides: one per Indian city with a Prometric CPA test centre (from NASBA's list).

type CityInfo = { name: string; slug: string; state: string; nearby: string[] };

export const CITY_INFO: CityInfo[] = [
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", nearby: ["Vadodara", "Surat", "Rajkot", "Gandhinagar"] },
  { name: "Bengaluru", slug: "bengaluru", state: "Karnataka", nearby: ["Mysuru", "Mangaluru", "Hubballi"] },
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu", nearby: ["Coimbatore", "Madurai", "Puducherry", "Tiruchirappalli"] },
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana", nearby: ["Warangal", "Vijayawada", "Visakhapatnam"] },
  { name: "Kolkata", slug: "kolkata", state: "West Bengal", nearby: ["Bhubaneswar", "Guwahati", "Ranchi"] },
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra", nearby: ["Thane", "Navi Mumbai", "Pune", "Nashik"] },
  { name: "New Delhi", slug: "delhi", state: "Delhi", nearby: ["Gurugram", "Noida", "Faridabad", "Jaipur", "Chandigarh"] },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram", state: "Kerala", nearby: ["Kochi", "Kollam", "Kozhikode"] },
];

const otherCities = (name: string) => CITY_INFO.filter((c) => c.name !== name).map((c) => c.name);

export function cityGuide(c: CityInfo): Guide {
  const fee = INDIA_INTERNATIONAL_FEE_USD;
  return {
    slug: c.slug,
    short: `US CPA in ${c.name}`,
    title: `US CPA in ${c.name} (2026): Test Centre, Fees and Free Preparation`,
    description: `Taking the US CPA Exam in ${c.name}: the Prometric test city, booking steps, the India testing fee in rupees, and free study resources for candidates in ${c.state}.`,
    eyebrow: `${c.state}`,
    h1: `US CPA in ${c.name}`,
    intro: `${c.name} is one of the ${INDIA_TEST_CITIES.length} Indian cities where you can sit the US CPA Exam at a Prometric test centre. Here is how to sit it there, what it costs in rupees, and how to prepare for free.`,
    checked: CHECKED,
    keyPoints: [
      `${c.name} has a Prometric CPA test centre, listed by NASBA. Candidates from ${c.nearby.join(", ")} often test here.`,
      `Testing in India adds an international fee of $${fee} per section (${usdToInrText(fee)}), on top of the board's exam fees.`,
      "You first need eligibility through a US state board and a Notice to Schedule before you can book.",
      "All preparation can be done from home: SimplyCPA's notes, questions, simulations and mock exams are free.",
    ],
    body: [
      { type: "h2", text: `Sitting the exam in ${c.name}` },
      {
        type: "steps",
        items: [
          { title: "Check eligibility", body: "Use the [eligibility navigator](/tools/cpa-eligibility-navigator) and read [eligibility for Indian students](/us-cpa-eligibility-for-indian-students)." },
          { title: "Apply to a state board", body: "Choose a board that allows testing in India — compare them in [state boards](/state-boards)." },
          { title: "Register for international testing", body: `Pay the India testing fee of $${fee} per section when you register for testing outside the US.` },
          { title: `Book a seat in ${c.name}`, body: `Use [Prometric's CPA locator](${PROMETRIC_LOCATOR}) to choose the ${c.name} centre and a date.` },
        ],
      },
      {
        type: "p",
        text: `If ${c.name}'s seats are full, the other Indian test cities are ${otherCities(c.name).join(", ")}. See [CPA exam centres in India](/cpa-exam-centres-india).`,
      },
      { type: "h2", text: "What it costs in rupees" },
      {
        type: "p",
        text: `Besides the international fee of ${usdToInrText(fee)} per section, you pay the board's application and section fees and a credential evaluation. Our [fees in rupees](/us-cpa-fees-in-inr) page adds them up, with sources and dates. ${fxNote}`,
      },
      { type: "h2", text: `Preparing from ${c.name}` },
      {
        type: "list",
        items: [
          "Study topic by topic in [all six sections](/cpa), with free notes and practice questions.",
          "Plan your order with the [section order planner](/tools/cpa-section-order), then build a schedule in the [study planner](/study-planner).",
          "Test yourself under exam conditions with free [full mock exams](/mock-exam).",
        ],
      },
    ],
    faqs: [
      { q: `Is there a US CPA exam centre in ${c.name}?`, a: `Yes. NASBA lists ${c.name} among the Indian cities with Prometric CPA test centres. Check Prometric's locator for current seats.` },
      { q: `How much does it cost to take the CPA Exam in ${c.name}?`, a: `On top of the board's fees, testing in India costs $${fee} per section (${usdToInrText(fee)}). See [US CPA fees in rupees](/us-cpa-fees-in-inr) for the full breakdown.` },
      { q: `Do I need coaching in ${c.name} to pass the CPA?`, a: "No. Many candidates self-study. SimplyCPA's notes, practice questions, simulations and mock exams are free and work from anywhere." },
      { q: `Which Indian cities have CPA test centres?`, a: `${indiaTestCitiesText()}.` },
    ],
    sources: [NASBA_INDIA, { label: "Prometric — CPA Exam test centre locator", url: PROMETRIC_LOCATOR }],
    related: [
      { label: "CPA exam centres in India", href: "/cpa-exam-centres-india" },
      { label: "US CPA fees in rupees", href: "/us-cpa-fees-in-inr" },
      { label: "Eligibility for Indian students", href: "/us-cpa-eligibility-for-indian-students" },
      ...CITY_INFO.filter((o) => o.slug !== c.slug).slice(0, 3).map((o) => ({ label: `US CPA in ${o.name}`, href: `/us-cpa-in/${o.slug}` })),
    ],
  };
}

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const getCity = (slug: string) => CITY_INFO.find((c) => c.slug === slug);
