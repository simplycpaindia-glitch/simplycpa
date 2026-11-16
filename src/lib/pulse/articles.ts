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
    slug: "irs-2027-inflation-adjustments",
    title: "IRS sets 2027 tax figures: $33,200 joint standard deduction, $20,000 gift exclusion",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "Revenue Procedure 2026-35 adjusts almost 70 provisions for tax year 2027, for returns filed in 2028. The standard deduction, brackets, gift and estate exclusions and the child tax credit all rise.",
    eventDate: "2026-11-05",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "On 5 November 2026 the IRS published its annual inflation adjustments for tax year 2027 (news release IR-2026-133, Revenue Procedure 2026-35). They cover almost 70 provisions and generally apply to returns filed in 2028. The figures below are as the IRS published them.",
      },
      { type: "h2", text: "Standard deduction" },
      {
        type: "table",
        head: ["Filing status", "2027"],
        rows: [
          ["Married filing jointly", "$33,200 (up $1,000 from 2026)"],
          ["Single and married filing separately", "$16,600"],
          ["Head of household", "$24,925"],
        ],
      },
      { type: "h2", text: "Where each rate starts" },
      {
        type: "table",
        head: ["Rate", "Single: income over", "Married filing jointly: income over"],
        rows: [
          ["10%", "$0", "$0"],
          ["12%", "$12,800", "$25,600"],
          ["22%", "$52,025", "$104,050"],
          ["24%", "$109,125", "$218,250"],
          ["32%", "$208,325", "$416,650"],
          ["35%", "$264,550", "$529,100"],
          ["37%", "$661,375", "$793,650"],
        ],
      },
      { type: "h2", text: "Other figures candidates meet in REG and TCP" },
      {
        type: "table",
        head: ["Item", "2027", "2026"],
        rows: [
          ["Annual gift tax exclusion", "$20,000", "$19,000"],
          ["Estate basic exclusion amount", "$15,480,000", "$15,000,000"],
          ["Annual exclusion for gifts to a non-citizen spouse", "$201,000", "$194,000"],
          ["Child tax credit (maximum / refundable portion)", "$2,300 / $1,800", "$2,200 / $1,700"],
          ["Maximum earned income credit, three or more children", "$8,496", "$8,231"],
          ["AMT exemption, unmarried individuals", "$93,000 (phase-out from $515,950)", "—"],
          ["Foreign earned income exclusion", "$137,300", "$132,900"],
          ["Section 179 expensing limit", "$2,640,000", "$2,560,000"],
          ["Health FSA salary reduction limit", "$3,500", "$3,400"],
          ["Qualified transportation and parking, per month", "$350", "$340"],
        ],
      },
      {
        type: "p",
        text: "Personal exemptions remain at zero. The Lifetime Learning Credit phase-out range is not indexed and stays at $80,000 to $90,000 ($160,000 to $180,000 for joint returns).",
      },
    ],
    whyItMatters: [
      "The CPA Exam tests tax law in effect six months before the testing window, so these 2027 figures belong to exams from mid-2027 onward. Check your review course's tax-year cut-off before memorising any number.",
      "Indian candidates who work on US expatriate returns will use the $137,300 foreign earned income exclusion for 2027 years.",
      "The $20,000 annual gift exclusion and $15.48 million estate exclusion are classic REG and TCP calculation inputs.",
    ],
    sources: [
      {
        label: "IRS: IR-2026-133, tax inflation adjustments for tax year 2027 (5 November 2026)",
        url: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2027-taxpayers-continue-to-benefit-from-the-working-families-tax-cuts",
      },
    ],
    related: [
      { label: "REG: adjustments and deductions", href: "/cpa/reg/individual-taxation-adjustments-and-deductions" },
      { label: "REG: trusts, estates and gift tax", href: "/cpa/reg/trusts-estates-and-gift-tax-basics" },
      { label: "TCP: estate and gift tax planning", href: "/cpa/tcp/estate-and-gift-tax-planning" },
    ],
  },
  {
    slug: "irs-2027-retirement-plan-limits",
    title: "2027 retirement limits: 401(k) deferrals rise to $25,500, IRA limit stays at $7,500",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "IRS Notice 2026-66 raises the 401(k), 403(b), 457 and TSP deferral limit by $1,000 and the age-50 catch-up to $8,500. IRA contributions stay at $7,500, but the income phase-out ranges move up.",
    eventDate: "2026-11-12",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "On 12 November 2026 the IRS announced the 2027 cost-of-living adjustments for retirement plans (news release IR-2026-136, Notice 2026-66).",
      },
      {
        type: "table",
        head: ["Limit", "2027", "2026"],
        rows: [
          ["401(k), 403(b), governmental 457 and TSP elective deferrals", "$25,500", "$24,500"],
          ["Catch-up, age 50 and over (those plans)", "$8,500", "$8,000"],
          ["Higher catch-up at ages 60 to 63 (SECURE 2.0)", "$11,750", "—"],
          ["IRA contribution limit", "$7,500", "$7,500"],
          ["IRA catch-up, age 50 and over", "$1,100", "$1,100"],
          ["SIMPLE plan contribution limit", "$17,500", "$17,000"],
        ],
      },
      { type: "h2", text: "Income phase-out ranges" },
      {
        type: "table",
        head: ["Situation", "2027", "2026"],
        rows: [
          ["Traditional IRA deduction: single, covered by a workplace plan", "$83,000 to $93,000", "$81,000 to $91,000"],
          ["Traditional IRA deduction: joint, contributing spouse covered", "$133,000 to $153,000", "$129,000 to $149,000"],
          ["Traditional IRA deduction: not covered, spouse covered", "$250,000 to $260,000", "$242,000 to $252,000"],
          ["Roth IRA contributions: single and head of household", "$158,000 to $173,000", "$153,000 to $168,000"],
          ["Roth IRA contributions: married filing jointly", "$250,000 to $260,000", "$242,000 to $252,000"],
          ["Married filing separately (both IRA types)", "$0 to $10,000", "$0 to $10,000 (not indexed)"],
        ],
      },
      {
        type: "p",
        text: "With the age-50 catch-up, a participant aged 50 or over can defer up to $34,000 in 2027.",
      },
    ],
    whyItMatters: [
      "REG and TCP test the structure more than the numbers: deduction phase-outs apply only when the taxpayer or spouse is covered by a workplace plan, and Roth contributions phase out by income for everyone.",
      "The ages 60 to 63 catch-up is a SECURE 2.0 rule that question writers like because it breaks the simple 'age 50' pattern.",
      "If you are planning a move to the US for work, these are the limits your first US payroll will use.",
    ],
    sources: [
      {
        label: "IRS: IR-2026-136, 401(k) limit increases to $25,500 for 2027, IRA limit remains $7,500 (12 November 2026)",
        url: "https://www.irs.gov/newsroom/401k-limit-increases-to-25500-for-2027-ira-limit-remains-7500",
      },
    ],
    related: [
      { label: "REG: retirement plans", href: "/cpa/reg/retirement-plans-and-tax-planning-basics" },
      { label: "TCP: retirement planning strategies", href: "/cpa/tcp/retirement-planning-strategies" },
    ],
  },
  {
    slug: "non-itemizer-charitable-deduction-2026",
    title: "From 2026 returns, non-itemizers can deduct up to $1,000 of cash gifts to charity",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "A permanent deduction for taxpayers who take the standard deduction starts with tax year 2026: up to $1,000, or $2,000 on a joint return, for cash gifts to qualifying charities. Donor-advised funds do not count.",
    eventDate: "2026-11-10",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "On 10 November 2026 the IRS reminded taxpayers (news release IR-2026-135) that a permanent charitable deduction for people who do not itemize begins with tax year 2026, so it first appears on returns filed in 2027. The IRS credits the Working Families Tax Cuts legislation.",
      },
      { type: "h2", text: "The rules as the IRS states them" },
      {
        type: "list",
        items: [
          "Up to $1,000 of qualifying cash contributions, or $2,000 for married couples filing jointly.",
          "Available only to taxpayers who do not itemize deductions.",
          "Only cash contributions to qualified charitable organizations count. Noncash gifts, such as clothing or shares, do not.",
          "Cash given to supporting organizations, or to set up or maintain a donor-advised fund, does not qualify.",
          "Keep a receipt, canceled check, bank record or written statement from the charity showing its name, the date and the amount.",
        ],
      },
      {
        type: "p",
        text: "The IRS points readers to Publication 6196, Charitable Contribution Deduction Tips for Non-Itemizers, and to its Tax Exempt Organization Search tool to check that a charity qualifies.",
      },
    ],
    whyItMatters: [
      "A classic REG trap was that charitable gifts help only itemizers. From 2026 that is no longer true for cash gifts within these limits, so check which tax year your review materials cover.",
      "The exclusions are testable details: cash only, and not to donor-advised funds or supporting organizations.",
      "Expect this in TCP planning questions about bunching deductions, where the choice between itemizing and the standard deduction now has an extra variable.",
    ],
    sources: [
      {
        label: "IRS: IR-2026-135, permanent charitable contribution deduction for taxpayers who do not itemize (10 November 2026)",
        url: "https://www.irs.gov/newsroom/irs-reminder-permanent-charitable-contribution-deduction-begins-for-returns-filed-next-year-for-taxpayers-who-do-not-itemize",
      },
    ],
    related: [
      { label: "REG: adjustments and deductions", href: "/cpa/reg/individual-taxation-adjustments-and-deductions" },
      { label: "TCP: individual tax planning", href: "/cpa/tcp/individual-tax-planning-strategies" },
    ],
  },
  {
    slug: "irs-tax-pro-account-business-payments",
    title: "Tax professionals can now pay business clients' IRS balances through Tax Pro Account",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "The IRS has extended Tax Pro Account so authorised practitioners can make payments for business clients, including federal tax deposits and extension payments. Before, they could only view business balances.",
    eventDate: "2026-11-06",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "On 6 November 2026 the IRS announced (news release IR-2026-134) that authorised tax professionals can now make certain payments on behalf of business clients through Tax Pro Account, its online portal for practitioners. Until now they could see business clients' balances and payment activity but could not pay.",
      },
      { type: "h2", text: "Payments now available for business clients" },
      {
        type: "list",
        items: ["A full or partial balance due", "An amended return", "An extension", "A proposed tax assessment", "A federal tax deposit"],
      },
      {
        type: "p",
        text: "The IRS says practitioners must hold the appropriate authorisation for the client and the tax matters involved. Tax Pro Account, launched in July 2021, already let practitioners manage authorisations, link Centralized Authorization File (CAF) numbers, view client balances, pay for individual clients and set up payment plans for individuals.",
      },
    ],
    whyItMatters: [
      "Many Indian accounting firms prepare US business returns remotely. Paying deposits and balances directly, under a proper authorisation, removes a step that used to need the client.",
      "REG tests who may represent a taxpayer and under what authorisation. The practical version is Form 2848 (power of attorney) versus Form 8821 (information only); check which one a task needs before relying on the portal.",
    ],
    sources: [
      {
        label: "IRS: IR-2026-134, IRS expands Tax Pro Account for business client payments (6 November 2026)",
        url: "https://www.irs.gov/newsroom/irs-expands-tax-pro-account-for-business-client-payments",
      },
    ],
    related: [
      { label: "REG: Circular 230 and practitioner ethics", href: "/cpa/reg/circular-230-and-practitioner-ethics" },
      { label: "REG: IRS procedures", href: "/cpa/reg/irs-procedures-and-appeals" },
    ],
  },
  {
    slug: "sec-executive-compensation-disclosure-proposal-2026",
    title: "SEC proposes rewriting executive pay disclosure: two named officers and three new tables",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "The SEC's proposal would cut the named executive officers to the CEO and CFO in most cases, replace the four main pay tables with three, and raise the perquisite reporting threshold from $10,000 to $150,000.",
    eventDate: "2026-11-13",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "On 13 November 2026 the Securities and Exchange Commission proposed amendments to Item 402 of Regulation S-K, the rule that governs how public companies disclose executive and director pay (press release 2026-114). Chairman Paul Atkins said the amendments \"reflect a comprehensive reform of Item 402\".",
      },
      { type: "h2", text: "Main proposed changes" },
      {
        type: "table",
        head: ["Area", "Today", "Proposed"],
        rows: [
          ["Named executive officers", "Typically five or more people", "The principal executive officer and principal financial officer in most cases"],
          ["Pay tables", "Four primary tables", "Three: Earned Compensation, Granted Compensation and Status of Equity Awards"],
          ["Perquisites reporting threshold", "$10,000 in aggregate", "$150,000, with a de minimis tracking exclusion"],
          ["Compensation discussion and analysis", "Fifteen example topics", "More principles-based, covering three topics"],
          ["Pay versus performance", "'Compensation actually paid'", "Total compensation from the Earned Compensation Table, with fewer performance measures"],
          ["Pay ratio", "Median of all employees", "Median of US full-time employees, determined every five years"],
        ],
      },
      {
        type: "p",
        text: "The proposal would also remove the clawback check boxes from annual report cover pages and some clawback disclosures. Comments are open for 60 days after the proposal is published in the Federal Register.",
      },
      { type: "h2", text: "Where it stands" },
      {
        type: "p",
        text: "This is a proposal, not a final rule. Nothing changes for current filings until the SEC adopts final amendments.",
      },
    ],
    whyItMatters: [
      "BAR tests public company reporting, including Regulation S-K and S-X. Exams test adopted rules, so learn today's requirements until a final rule is issued.",
      "Proxy statements are among the first documents an auditor's client team reviews for related-party and compensation disclosures, so the change would reach audit work too.",
    ],
    sources: [
      {
        label: "SEC: Press release 2026-114, SEC Proposes Executive and Director Compensation Disclosure Reforms (13 November 2026)",
        url: "https://www.sec.gov/newsroom/press-releases/2026-114-sec-proposes-executive-director-compensation-disclosure-reforms",
      },
      {
        label: "SEC: Statement of Chairman Atkins on the proposal (13 November 2026)",
        url: "https://www.sec.gov/newsroom/speeches-statements/atkins-statement-proposing-release-executive-compensation-disclosure-reform-111326",
      },
    ],
    related: [
      { label: "BAR: public company reporting", href: "/cpa/bar/public-company-reporting-topics" },
      { label: "FAR: SEC reporting", href: "/cpa/far/sec-reporting-segments-and-interim-reporting" },
    ],
  },
  {
    slug: "fasb-indexation-proposal-815-40",
    title: "FASB proposes replacing the 'fixed-for-fixed' test for warrants and other equity-linked contracts",
    category: "accounting-regulation",
    status: "reported",
    summary:
      "A proposed update to Subtopic 815-40 would swap the fixed-for-fixed indexation assessment for an 'acceptable variables approach', so more contracts could qualify for equity classification. Comments are due 4 January 2027.",
    eventDate: "2026-11-02",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "The Financial Accounting Standards Board has issued a proposed Accounting Standards Update, Derivatives and Hedging—Contracts in Entity's Own Equity (Subtopic 815-40): Targeted Improvements to Indexation, according to the Journal of Accountancy and Accounting Today. Accounting Today reported it on 2 November 2026. We could not open FASB's own news page, so this story is marked as reported.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "To be classified in equity, a contract such as a warrant must be 'indexed to the entity's own stock'. Stakeholders told FASB the current guidance is complicated, costly to apply and a frequent cause of restatements, and that similar features are assessed differently in practice. When a contract fails the test it is a liability measured at fair value, and investors often strip those fair value changes out of their analysis.",
      },
      { type: "h2", text: "What the proposal would do" },
      {
        type: "list",
        items: [
          "Replace the current fixed-for-fixed assessment with an 'acceptable variables approach'.",
          "FASB expects more contracts to be considered indexed to the entity's own stock as a result.",
          "Add an annual disclosure of the variables that could cause, or did cause, the settlement amount of equity-classified contracts to vary significantly.",
        ],
      },
      { type: "p", text: "Comments are due by 4 January 2027." },
    ],
    whyItMatters: [
      "Warrant classification is a FAR equity topic and a BAR derivatives topic. Until a final standard is issued and effective, the exams test the current fixed-for-fixed rule.",
      "Warrant restatements were common at US special purpose acquisition companies, many of which have support teams in India. Simpler rules would change that work.",
    ],
    sources: [
      {
        label: "Journal of Accountancy: FASB proposes simpler approach for equity-linked contracts (November 2026)",
        url: "https://www.journalofaccountancy.com/news/2026/nov/fasb-proposes-simpler-approach-for-equity-linked-contracts/",
      },
      {
        label: "Accounting Today: FASB proposes to improve indexation guidance (2 November 2026)",
        url: "https://www.accountingtoday.com/news/fasb-proposes-to-improve-indexation-guidance",
      },
      {
        label: "FASB: news release on the proposed indexation improvements",
        url: "https://fasb.org/news-and-meetings/in-the-news/fasb-seeks-public-comment-on-proposed-targeted-improvements-to-indexation-guidance-425800",
      },
    ],
    related: [
      { label: "BAR: derivatives and hedge accounting", href: "/cpa/bar/derivatives-and-hedge-accounting" },
      { label: "FAR: equity and earnings per share", href: "/cpa/far/equity-and-earnings-per-share" },
    ],
  },
  {
    slug: "fasb-consideration-payable-to-customer-proposal",
    title: "FASB proposal: when payments to your customer's customers reduce your revenue",
    category: "accounting-regulation",
    status: "reported",
    summary:
      "A proposed amendment to Topic 606 would treat payments made on a customer's behalf, or to a customer's customers, as consideration payable to a customer when the entity promised them explicitly or implicitly. Comments close 23 November 2026.",
    eventDate: "2026-10-22",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "On 22 October 2026 FASB issued a proposed Accounting Standards Update, Revenue from Contracts with Customers (Topic 606): Consideration Payable to a Customer, according to the Journal of Accountancy and Accounting Today. Accounting Today says the proposal came from a recommendation of the Emerging Issues Task Force.",
      },
      { type: "h2", text: "The issue" },
      {
        type: "p",
        text: "Under Topic 606, consideration payable to a customer reduces the transaction price, and therefore revenue, unless it pays for a distinct good or service from the customer. The guidance does not say clearly when payments to parties outside the distribution chain count, so similar payments are accounted for differently.",
      },
      { type: "h2", text: "What the proposal says" },
      {
        type: "p",
        text: "Payments made on behalf of a customer, or to a customer of the entity's customer, would be consideration payable to a customer when made in connection with the entity satisfying its promise to the customer, if either:",
      },
      {
        type: "list",
        items: [
          "the entity has explicitly promised to make the payment, or",
          "the customer reasonably expects the payment, because the entity implicitly promised it or the payment is in substance a price concession.",
        ],
      },
      { type: "p", text: "Comments are due by 23 November 2026." },
    ],
    whyItMatters: [
      "Consideration payable to a customer is a FAR revenue topic: coupons, rebates and slotting fees reduce revenue rather than being expenses.",
      "Platform businesses that pay incentives to end users, such as ride-hailing, food delivery and payment apps, are where this matters most.",
      "It is still a proposal. Learn the current rule for the exam.",
    ],
    sources: [
      {
        label: "Journal of Accountancy: FASB seeks to reduce inconsistencies tied to customer-related payments (22 October 2026)",
        url: "https://www.journalofaccountancy.com/news/2026/oct/fasb-seeks-to-reduce-inconsistencies-tied-to-customer-related-payments/",
      },
      {
        label: "Accounting Today: FASB proposes to clarify guidance on consideration payable to customers (22 October 2026)",
        url: "https://www.accountingtoday.com/news/fasb-proposes-to-clarity-guidance-on-consideration-payable-to-customers",
      },
      {
        label: "FASB: news release on the proposal",
        url: "https://www.fasb.org/news-and-meetings/in-the-news/fasb-seeks-public-comment-on-proposal-to-clarify-the-consideration-payable-to-a-customer-guidance-425699",
      },
    ],
    related: [
      { label: "FAR: revenue recognition", href: "/cpa/far/revenue-recognition" },
      { label: "BAR: revenue for specific industries", href: "/cpa/bar/revenue-for-specific-industries" },
    ],
  },
  {
    slug: "oklahoma-cpa-pathways-effective-november-2026",
    title: "Oklahoma's new CPA licensure pathways are now in effect",
    category: "exam-policy",
    status: "reported",
    summary:
      "From 1 November 2026, Oklahoma candidates can choose among three routes to a CPA licence, including a bachelor's degree plus two years' experience, and the state moves to individual-based mobility.",
    eventDate: "2026-11-01",
    published: "2026-11-17",
    verified: "2026-11-17",
    body: [
      {
        type: "p",
        text: "The Oklahoma Society of CPAs reports that a licensure modernisation bill signed on 6 May 2026 lets candidates choose any of three pathways to a CPA licence from 1 November 2026. The law aligns Oklahoma with the ninth edition of the Uniform Accountancy Act.",
      },
      { type: "h2", text: "What changes" },
      {
        type: "list",
        items: [
          "A new pathway: a bachelor's degree, two years' experience and passing the CPA Exam.",
          "An individual-based mobility model for CPAs practising across state lines.",
          "Safe harbour protections for CPAs licensed under the current requirements.",
        ],
      },
      {
        type: "p",
        text: "The society's article does not cover exam credit rules or foreign-educated candidates. Those details sit with the Oklahoma Accountancy Board, so check its rules before you apply.",
      },
      { type: "h2", text: "Other states on the same path" },
      {
        type: "p",
        text: "Colorado's SB26-076, signed on 4 May 2026, adds new pathways from 1 January 2027, with its mobility changes taking effect when the state board adopts new rules, according to the Colorado Society of CPAs.",
      },
    ],
    whyItMatters: [
      "Indian candidates with a three-year BCom often struggle with the 150-hour rule. A bachelor's-plus-two-years pathway can make licensure possible without extra credits, if the board accepts your degree's evaluation.",
      "Individual-based mobility matters if you plan to practise in more than one state after licensure.",
      "Exam eligibility and licensure are separate. A new licensure pathway does not by itself change when you may sit for the exam.",
    ],
    sources: [
      {
        label: "Oklahoma Society of CPAs: CPA licensure modernisation bill signed into law (May 2026)",
        url: "https://oscpa.com/news/11e8c2f1-6419-4177-a870-2e364d805174:cpa-licensure-modernization-bill-signed-into-law-addressing-accounting-workforce-challenges",
      },
      {
        label: "Colorado Society of CPAs: CPA licensure modernisation signed into law (4 May 2026)",
        url: "https://cocpa.org/news/14364392-cpa-licensure-modernization-signed-into-law-2026-05-04",
      },
    ],
    related: [
      { label: "CPA licensure pathways", href: "/cpa-licensure-pathways" },
      { label: "State boards", href: "/state-boards" },
      { label: "Eligibility navigator", href: "/tools/cpa-eligibility-navigator" },
    ],
  },
  {
    slug: "cpa-exam-pass-rates-q3-2026",
    title: "Third-quarter 2026 pass rates: AUD passes 50% for the year, FAR stays the lowest Core section",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "The AICPA's pass rates for July to September 2026 show AUD at 52.23% and ISC above 70%. FAR remains the lowest Core section at 44.49%, and TCP the highest of all at 80.08%.",
    eventDate: "2026-10-22",
    published: "2026-11-16",
    verified: "2026-11-16",
    body: [
      {
        type: "p",
        text: "The AICPA's scoring and pass rates page, dated 22 October 2026 when we read it, now includes the third quarter of 2026. These are the figures as published.",
      },
      {
        type: "table",
        head: ["Section", "Q1 2026", "Q2 2026", "Q3 2026", "2026 so far", "2025 full year"],
        rows: [
          ["AUD", "47.80%", "49.38%", "52.23%", "50.03%", "48.21%"],
          ["FAR", "43.46%", "42.47%", "44.49%", "43.54%", "42.12%"],
          ["REG", "66.65%", "66.87%", "65.37%", "66.32%", "63.12%"],
          ["BAR", "41.30%", "45.62%", "44.35%", "43.88%", "41.94%"],
          ["ISC", "66.79%", "67.98%", "70.22%", "68.56%", "67.79%"],
          ["TCP", "79.28%", "79.75%", "80.08%", "79.75%", "77.65%"],
        ],
      },
      { type: "h2", text: "What stands out" },
      {
        type: "list",
        items: [
          "AUD's third quarter (52.23%) is its best of the year and lifts its 2026 figure just above half.",
          "FAR is still the Core section fewest candidates pass. Fewer than 45 in 100 passed in every quarter this year.",
          "REG dipped slightly in the third quarter but remains about three points above its 2025 full-year rate.",
          "Every section's 2026 rate so far is higher than its 2025 full-year rate.",
          "The gap between the Disciplines is wide: about 36 points between BAR and TCP.",
        ],
      },
      { type: "h2", text: "How to read these numbers" },
      {
        type: "p",
        text: "A pass rate describes the candidates who sat a section as much as the section itself. TCP is taken mostly by candidates who work in tax and have just passed REG. BAR draws candidates willing to take on the most calculation-heavy material. Neither figure tells you how you would do. The AICPA also states that scores are not curved, so there is no quota of passes per quarter.",
      },
    ],
    whyItMatters: [
      "Use pass rates to set expectations, not to choose a Discipline. Fit with your background matters more than a 30-point gap.",
      "FAR and BAR have the lowest rates and the most material. Give them the most weeks in your plan.",
      "A section where roughly half of candidates fail is one where a retake is normal. Budget time and fees for one.",
    ],
    sources: [
      { label: "AICPA: Learn more about CPA Exam scoring and pass rates", url: "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates" },
    ],
    related: [
      { label: "Pass rate tracker: every quarter", href: "/cpa-exam-pass-rates" },
      { label: "Discipline selector", href: "/tools/cpa-discipline-selector" },
      { label: "Study planner", href: "/study-planner" },
    ],
  },
  {
    slug: "pcaob-enforcement-specialised-units-november-2026",
    title: "PCAOB sets up five specialised enforcement units, including one for AI in audits",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "The US audit regulator has reorganised its enforcement division into five units covering fraud response, advanced AI, the largest firms, smaller firms and non-US firms.",
    eventDate: "2026-11-10",
    published: "2026-11-16",
    verified: "2026-11-16",
    body: [
      {
        type: "p",
        text: "On 10 November 2026 the Public Company Accounting Oversight Board (PCAOB), which oversees audits of US public companies, announced five specialised units within its Division of Enforcement and Investigations. Each will be led by a unit chief and staffed by attorneys, accountants and other staff.",
      },
      { type: "h2", text: "The five units" },
      {
        type: "table",
        head: ["Unit", "What it will focus on"],
        rows: [
          ["Strategic Risk", "How auditors identify, evaluate and respond to signs of fraud and other significant accounting issues."],
          [
            "Super Intelligence",
            "Risks and possible misconduct linked to the use of what the PCAOB calls Super Intelligence in public company audits, without discouraging appropriate use. The unit will also build such tools for the division's own work.",
          ],
          ["Global Network Firm", "Investigations involving the largest registered accounting firms and the people associated with them."],
          ["Non-Affiliate Firm", "Investigations involving firms with smaller public company and broker-dealer audit practices. The PCAOB says firm size will not shield misconduct."],
          ["International", "Investigations involving non-US registered firms, using staff with language skills and cross-border experience, and working with foreign regulators."],
        ],
      },
      {
        type: "p",
        text: "The PCAOB says its enforcement division will continue to coordinate with the Securities and Exchange Commission, including the SEC's Financial Reporting and Accounting Unit and its Office of the Chief Accountant.",
      },
      { type: "h2", text: "What this is, and is not" },
      {
        type: "list",
        items: [
          "It is a reorganisation of enforcement staff. It does not change any auditing standard.",
          "It does not announce any investigation or penalty.",
          "It signals where the regulator intends to look: fraud response, technology used in audits, and firms outside the US.",
        ],
      },
    ],
    whyItMatters: [
      "Firms in India that audit, or do audit work for, US-listed companies are registered with the PCAOB. A dedicated international unit means that work is squarely within its enforcement focus.",
      "The fraud unit matches what AUD tests heavily: the auditor's responsibility to identify and respond to fraud risk.",
      "The regulator now treats the use of AI in audits as an enforcement subject, in the same year the 2027 Blueprint adds AI-generated evidence to AUD.",
      "For the exam, remember the split: the PCAOB sets standards for and inspects audits of issuers, while the AICPA sets standards for audits of private companies.",
    ],
    sources: [
      {
        label: "PCAOB: PCAOB Announces New Specialized Units in Enforcement Division (10 November 2026)",
        url: "https://pcaobus.org/news-events/news-releases/news-release-detail/pcaob-announces-new-specialized-units-in-enforcement-division",
      },
    ],
    related: [
      { label: "AUD: fraud risk", href: "/cpa/aud/fraud-risk" },
      { label: "AUD: evidence types and procedures", href: "/cpa/aud/evidence-types-and-procedures" },
      { label: "Key terms: PCAOB, GAAS and issuers", href: "/faq/key-terms" },
    ],
  },
  {
    slug: "pcaob-comfort-letter-proposal-as-6101",
    title: "PCAOB proposes dropping the 135-day limit on comfort letters",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "A proposed amendment to AS 6101 would replace a fixed 135-day rule with a test based on the company's own reporting obligations. Comments are due by 4 January 2027.",
    eventDate: "2026-11-03",
    published: "2026-11-16",
    verified: "2026-11-16",
    body: [
      {
        type: "p",
        text: "On 3 November 2026 the PCAOB issued for public comment targeted amendments to AS 6101, its standard on letters for underwriters and certain other requesting parties. These letters are known as comfort letters. Comments are due by 4 January 2027.",
      },
      { type: "h2", text: "What a comfort letter is" },
      {
        type: "p",
        text: "When a public company raises capital, the underwriter, usually an investment bank, may ask the company's auditor for a letter about unaudited interim figures and other financial information in the offering document. In it the auditor can give negative assurance on changes in specified items since the latest financial statements: a statement that nothing came to the auditor's attention to suggest a problem.",
      },
      { type: "h2", text: "The rule being changed" },
      {
        type: "p",
        text: "Under the current standard, an auditor may give that negative assurance only as of a date less than 135 days after the end of the most recent period that was audited or reviewed. The PCAOB says this assumes quarterly reporting, and that the standard has not been substantially amended since it was adopted as an interim standard in 2003.",
      },
      {
        type: "p",
        text: "The PCAOB's example is a calendar-year company. Once 135 days have passed after the third-quarter date of 30 September, the auditor cannot give negative assurance until the annual report is filed, even though the company is up to date with every filing requirement. Underwriters may be unwilling to proceed without it.",
      },
      { type: "h2", text: "The proposal" },
      {
        type: "list",
        items: [
          "Replace the 135-day convention with a test tied to the company's reporting obligations, whatever those obligations are in future.",
          "Keep the decision to give negative assurance a matter of the auditor's professional judgment.",
          "It is a proposal. Nothing changes until the PCAOB adopts a final amendment and the SEC approves it.",
        ],
      },
    ],
    whyItMatters: [
      "This is not yet testable. The exam tests a new requirement only once it is effective and eligible under the AICPA's policy on new pronouncements. Learn the current 135-day rule if your material covers it.",
      "It is a good worked example of negative assurance, a concept AUD tests in reviews and other limited-assurance work.",
      "If you work on US capital markets engagements, this would change when comfort letters can be issued around year end.",
    ],
    sources: [
      {
        label: "PCAOB: PCAOB Seeks Stakeholder Feedback on Proposal to Update Rules Related to Auditor Comfort Letters (3 November 2026)",
        url: "https://pcaobus.org/news-events/news-releases/news-release-detail/pcaob-seeks-stakeholder-feedback-on-proposal-to-update-rules-related-to-auditor-comfort-letters",
      },
    ],
    related: [
      { label: "AUD: reviews, compilations and agreed-upon procedures", href: "/cpa/aud/reviews-compilations-and-aup" },
      { label: "AUD: audit reports", href: "/cpa/aud/audit-reports" },
      { label: "Key terms: PCAOB, GAAS and issuers", href: "/faq/key-terms" },
    ],
  },
  {
    slug: "fasb-equity-method-proposal-october-2026",
    title: "FASB proposes one test for the equity method, whatever the investee's legal form",
    category: "accounting-regulation",
    status: "confirmed",
    summary:
      "A proposed standard would apply a single threshold, significant influence, to all equity method investments and clarify earnings in complex allocation structures. Comments are due 11 January 2027.",
    eventDate: "2026-10-28",
    published: "2026-11-16",
    verified: "2026-11-16",
    body: [
      {
        type: "p",
        text: "On 28 October 2026 the Financial Accounting Standards Board (FASB) issued a proposed Accounting Standards Update on equity method investments. Comments are due by 11 January 2027.",
      },
      { type: "h2", text: "What the FASB says is wrong today" },
      {
        type: "list",
        items: [
          "Different criteria for applying the equity method to investments in corporations and to investments in partnerships and similar entities.",
          "No authoritative guidance on allocating earnings in complex allocation structures for investments outside real estate.",
          "The cost and complexity of applying the method.",
        ],
      },
      { type: "h2", text: "What the proposal would do" },
      {
        type: "list",
        items: [
          "Require a single threshold, significant influence, for applying the equity method, regardless of the legal form of the investee.",
          "Change some of the indicators of significant influence in Subtopic 323-10.",
          "Clarify how investors apply the method when the investee has a complex allocation structure.",
        ],
      },
      { type: "h2", text: "Also open from the FASB" },
      {
        type: "p",
        text: "The FASB's news page lists these other proposals and standards from recent months. We have read the titles and dates there, not each document.",
      },
      {
        type: "table",
        head: ["Date", "Item"],
        rows: [
          ["2 November 2026", "Proposal: targeted improvements to indexation guidance"],
          ["22 October 2026", "Proposal: clarifying the guidance on consideration payable to a customer"],
          ["23 September 2026", "Proposal: accounting for residential mortgage servicing rights"],
          ["9 September 2026", "Final standard: investment company fair value reporting"],
          ["2 September 2026", "Proposal: Codification improvements"],
          ["18 August 2026", "Proposal: cash equivalents disclosures, and the cash equivalents evaluation for certain digital assets"],
        ],
      },
    ],
    whyItMatters: [
      "Nothing changes for the exam yet. A proposal is not testable; study the equity method as it stands, including the significant influence concept that this proposal keeps.",
      "The direction is worth knowing: significant influence would become the one question to ask, which is how FAR already teaches the method for corporate investees.",
      "If you work in US GAAP reporting, partnership and limited liability company investments are where practice would change most.",
      "Several of these proposals touch topics FAR and BAR test: revenue, cash equivalents and digital assets. Watch for final standards, which become testable later under the AICPA's policy on new pronouncements.",
    ],
    sources: [
      {
        label: "FASB: FASB Seeks Public Comment on Proposed Targeted Improvements to the Accounting for Equity Method Investments (28 October 2026)",
        url: "https://www.fasb.org/news-and-meetings/in-the-news/fasb-seeks-public-comment-on-proposed-targeted-improvements-to-the-accounting-for-equity-method-investments-425722",
      },
      { label: "FASB: In the News", url: "https://www.fasb.org/news-and-meetings/in-the-news" },
    ],
    related: [
      { label: "FAR: investments in debt and equity securities", href: "/cpa/far/investments-debt-and-equity-securities" },
      { label: "FAR: business combinations and consolidations", href: "/cpa/far/business-combinations-and-consolidations" },
      { label: "Key terms: FASB, the Codification and US GAAP", href: "/faq/key-terms" },
    ],
  },
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
    title: "2027 CPA Exam Blueprint changes: small revisions in five sections, none in TCP",
    category: "exam-policy",
    status: "confirmed",
    summary:
      "The AICPA's revisions effective 1 January 2027 touch AUD, FAR, REG, BAR and ISC, and leave TCP alone. None is meant to change the scope of a section significantly. Here is each change.",
    eventDate: "2026-09-16",
    published: "2026-11-15",
    updated: "2026-11-15",
    verified: "2026-11-15",
    body: [
      {
        type: "p",
        text: "The AICPA Board of Examiners approved revisions to the Uniform CPA Examination Blueprints on 16 September 2026, effective for exams from 1 January 2027. The AICPA's Blueprint page now offers the 2027 Blueprints and a six-page Summary of Revisions. We read the summary in full.",
      },
      {
        type: "p",
        text: "For every section that changes, the summary says the revision is not intended to significantly change the nature or scope of the content eligible for testing. The summary lists no changes to the area weightings.",
      },
      { type: "h2", text: "What changes, section by section" },
      {
        type: "table",
        head: ["Section", "Where", "What changed"],
        rows: [
          [
            "AUD",
            "Area III: reliability of data and information",
            "The task on validating reliability now names authenticity and susceptibility to management bias alongside completeness and accuracy, adds checking search or query criteria as an example procedure, and covers information generated using technology, including artificial intelligence.",
          ],
          [
            "AUD",
            "Area III: sufficient appropriate evidence",
            "Information generated using technology, including artificial intelligence, is added as an example of a source of information used as audit evidence.",
          ],
          [
            "AUD",
            "Area III: sampling techniques",
            "The examples now separate the sampling method (attributes, variables) from the planned procedure (test of controls, test of details).",
          ],
          [
            "AUD",
            "Area III: investments in securities",
            "The task is reworded to focus on audit considerations for the measurement and disclosure of fair value.",
          ],
          ["FAR", "Section introduction", "A reference is added to National Council on Governmental Accounting Statements and Interpretations, to match BAR. No task changes."],
          [
            "REG",
            "Area IV: gross income",
            "The capital gain task now gives examples of investments (stocks, bonds, digital assets) and clarifies how digital assets fall within it.",
          ],
          [
            "BAR",
            "Area III: state and local government long-term liabilities",
            "The task on other post-employment benefits now covers plans administered through a trust and plans that are not.",
          ],
          [
            "ISC",
            "Section introduction and Area I",
            "Blockchain is narrowed. The task on using the Committee of Sponsoring Organizations (COSO) internal control framework to evaluate blockchain risks is removed, along with the related reference. Blockchain remains only as an example of a system that accounting systems interact with.",
          ],
          ["TCP", "None", "No revisions."],
        ],
      },
      { type: "h2", text: "What to do" },
      {
        type: "list",
        items: [
          "Sitting in 2026: nothing changes. Study from the 2026 Blueprint.",
          "Sitting AUD from January 2027: be ready for evidence questions where the information comes from an automated or artificial-intelligence tool. The test is the same as for any evidence: is it relevant and reliable?",
          "Sitting REG from January 2027: know that digital assets are treated as property, so a sale or exchange produces a capital gain or loss.",
          "Sitting BAR from January 2027: know the difference between a net liability (plan administered through a trust) and a total liability (no trust) for government post-employment benefits.",
          "Sitting ISC from January 2027: spend less time on blockchain controls. Know what a blockchain is and how it connects to accounting systems.",
          "Sitting FAR or TCP: no change to what you study.",
        ],
      },
      {
        type: "p",
        text: "We have updated the four SimplyCPA topics these revisions touch: audit evidence, individual gross income, government-wide financial statements and emerging technology.",
      },
    ],
    whyItMatters: [
      "These are clarifications, not a new syllabus. If you have been studying from 2026 material, almost all of it carries over.",
      "The Blueprint that applies is the one in force on your exam date, not the one in force when you started studying.",
      "The AUD wording on artificial intelligence is the clearest signal yet of where evidence questions are heading.",
    ],
    sources: [
      {
        label: "AICPA: Summary of revisions to the Uniform CPA Examination Blueprints, effective 1 January 2027 (PDF)",
        url: "https://assets.ctfassets.net/rb9cdnjh59cm/5CsrSRU2mFGsmWEo9FqwLy/83e5ec97beab5daff376dba518589e75/Summary_of_Changes_to_the_Exam_Blueprints_effective_01012027.pdf",
      },
      { label: "AICPA: Learn what is tested on the CPA Exam (Blueprint downloads)", url: AICPA_BLUEPRINTS },
    ],
    related: [
      { label: "AUD: evidence types and procedures", href: "/cpa/aud/evidence-types-and-procedures" },
      { label: "REG: individual gross income", href: "/cpa/reg/individual-taxation-gross-income" },
      { label: "BAR: government-wide financial statements", href: "/cpa/bar/government-wide-financial-statements" },
      { label: "ISC: emerging technology", href: "/cpa/isc/emerging-technology-considerations" },
      { label: "Free CPA resources: Blueprints and sample tests", href: "/free-cpa-resources" },
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
