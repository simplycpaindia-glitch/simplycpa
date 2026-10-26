import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, sixth batch. */
export const disciplineTermsF: GlossaryTerm[] = [
  // BAR
  {
    slug: "residual-income",
    term: "Residual income",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Residual income is an investment center's operating income minus a required return on its invested capital (the minimum rate of return × invested capital). It measures the income earned above the cost of the capital used.",
    takeaways: [
      "Unlike return on investment, it encourages managers to accept any project earning more than the minimum rate.",
      "Economic value added is a variant using after-tax operating income and the weighted-average cost of capital.",
      "Because it is an absolute amount, larger divisions tend to show larger residual income.",
    ],
    example: "Operating income $200,000, invested capital $1,000,000, minimum return 12%: residual income is $200,000 − $120,000 = $80,000.",
    related: ["dupont-analysis", "free-cash-flow"],
    match: ["residual income", "economic value added", "return on investment"],
  },
  {
    slug: "reverse-acquisition",
    term: "Reverse acquisition",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "In a reverse acquisition, the company that legally issues shares is the acquiree for accounting purposes, because the owners of the other company end up controlling the combined entity, as when a private company merges into a public shell.",
    takeaways: [
      "The consolidated statements continue those of the legal subsidiary (the accounting acquirer).",
      "Equity is adjusted to show the legal parent's share structure.",
      "Consideration is measured as the shares the accounting acquirer would have had to issue.",
    ],
    related: ["push-down-accounting", "step-acquisition", "variable-interest-entity"],
    match: ["reverse acquisition", "legal acquirer", "accounting acquirer"],
  },
  {
    slug: "net-investment-hedge",
    term: "Net investment hedge",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A net investment hedge protects against the foreign currency risk of a net investment in a foreign operation, using a derivative or foreign-currency debt as the hedging instrument.",
    takeaways: [
      "Gains and losses on the hedging instrument go to other comprehensive income, in the cumulative translation adjustment.",
      "They are reclassified to earnings only when the foreign operation is sold or substantially liquidated.",
      "Nonderivative instruments, such as a loan in the foreign currency, can qualify only for this type of hedge and certain fair value hedges.",
    ],
    related: ["cumulative-translation-adjustment", "cash-flow-hedge", "fair-value-hedge"],
    match: ["net investment"],
  },
  {
    slug: "current-rate-method",
    term: "Current rate method",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "The current rate method translates a foreign entity's statements from its functional currency into the reporting currency: assets and liabilities at the balance sheet date rate, and income and expenses at the rates when they occurred (or a weighted average).",
    takeaways: [
      "Equity accounts use historical rates.",
      "The resulting difference is the translation adjustment, reported in other comprehensive income.",
      "It applies when the functional currency is the foreign currency; the temporal method applies when remeasuring into the functional currency.",
    ],
    related: ["temporal-method", "functional-currency", "cumulative-translation-adjustment"],
    match: ["current rate", "translat"],
  },
  {
    slug: "net-periodic-pension-cost",
    term: "Net periodic pension cost",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "Net periodic pension cost for a defined benefit plan is made up of service cost, interest cost, the expected return on plan assets (a reduction), amortization of prior service cost, and amortization of net gains or losses.",
    takeaways: [
      "Only service cost is reported in operating income; the other components are presented outside it.",
      "Only service cost can be capitalized, for example into inventory.",
      "Net gains and losses are amortized only to the extent they exceed the corridor.",
    ],
    related: ["projected-benefit-obligation", "prior-service-cost", "corridor-approach"],
    match: ["pension cost", "service cost", "interest cost", "expected return"],
  },
  {
    slug: "graded-vesting",
    term: "Graded vesting",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "Under graded vesting, a share-based award vests in installments, such as 25% a year over four years, rather than all at once at the end (cliff vesting).",
    takeaways: [
      "For awards with only service conditions, companies choose to recognize cost straight-line over the whole period or separately for each tranche.",
      "Under straight-line, the cumulative cost must be at least the grant-date value of the portion already vested.",
      "Recognizing each tranche separately front-loads the cost.",
    ],
    related: ["grant-date-fair-value", "restricted-stock-unit"],
    match: ["graded vesting", "cliff vesting", "tranche"],
  },
  {
    slug: "sensitivity-analysis",
    term: "Sensitivity analysis",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "Sensitivity analysis shows how a result, such as projected profit or net present value, changes when one assumption changes while the others stay the same. It shows which assumptions matter most.",
    takeaways: [
      "Scenario analysis changes several assumptions at once, for example best, base and worst cases.",
      "Monte Carlo simulation runs many trials using probability distributions for the inputs.",
      "Assumptions the result is most sensitive to deserve the most support.",
    ],
    related: ["financial-forecast-vs-projection", "regression-analysis", "break-even-point"],
    match: ["sensitivity", "what-if", "scenario"],
  },
  {
    slug: "types-of-data-analytics",
    term: "Types of data analytics",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Data analytics is commonly grouped into four types: descriptive (what happened), diagnostic (why it happened), predictive (what is likely to happen) and prescriptive (what should be done).",
    takeaways: [
      "Descriptive analytics include summaries and dashboards, such as sales by region.",
      "Predictive analytics use techniques such as regression to forecast.",
      "Prescriptive analytics recommend actions, often using optimization.",
    ],
    related: ["regression-analysis", "extract-transform-load", "benfords-law"],
    match: ["descriptive", "diagnostic", "predictive", "prescriptive"],
  },
  {
    slug: "interfund-transfers",
    term: "Interfund transfers",
    section: "bar",
    topic: "governmental-fund-accounting",
    definition:
      "Interfund transfers are flows of assets between a government's funds without equivalent value in return and without a requirement to repay, such as the general fund sending money to a debt service fund.",
    takeaways: [
      "In governmental funds, they are reported as other financing sources and uses, not revenues or expenditures.",
      "Interfund loans create receivables and payables; interfund services are revenue to one fund and an expenditure or expense to the other.",
      "Transfers within governmental activities are eliminated in the government-wide statements.",
    ],
    related: ["fund-balance", "encumbrance", "government-wide-statement-of-activities"],
    match: ["interfund", "transfer", "other financing"],
  },
  // ISC
  {
    slug: "user-access-review",
    term: "User access review",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "A user access review is a periodic check, usually by the business owners of a system, that every user's access is still needed and appropriate for their role.",
    takeaways: [
      "It finds accounts of people who have left and rights that have built up over time.",
      "The user list reviewed must be complete and accurate, and the review and any removals documented.",
      "Privileged accounts, such as administrators, are reviewed more often.",
    ],
    related: ["least-privilege", "segregation-of-duties", "it-general-controls"],
    match: ["access review", "user access", "recertification"],
  },
  {
    slug: "relational-database",
    term: "Relational database",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "A relational database stores data in tables of rows (records) and columns (fields). Tables are linked by keys: a primary key identifies each row, and a foreign key refers to the primary key of another table.",
    takeaways: [
      "Data is queried with Structured Query Language (SQL).",
      "Normalization organizes tables to reduce duplicate data and update errors.",
      "Referential integrity prevents records that point to rows that don't exist, such as an invoice for a missing customer.",
    ],
    related: ["data-warehouse", "enterprise-resource-planning"],
    match: ["relational", "primary key", "foreign key", "SQL"],
  },
  {
    slug: "data-classification",
    term: "Data classification",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Data classification sorts data into categories by sensitivity and importance, such as public, internal, confidential and restricted, so the right protections can be applied to each.",
    takeaways: [
      "Data owners decide the classification; custodians, often technology staff, apply the controls.",
      "Classification drives encryption, access rights, retention and disposal.",
      "Labels should follow the data when it is copied or shared.",
    ],
    related: ["data-governance", "personally-identifiable-information", "data-minimization"],
    match: ["classification", "confidential", "sensitivity"],
  },
  {
    slug: "security-information-and-event-management",
    term: "Security information and event management",
    section: "isc",
    topic: "incident-response",
    definition:
      "A security information and event management (SIEM) system collects and correlates logs from servers, network devices and applications across an organization to detect suspicious activity and alert security staff.",
    takeaways: [
      "It supports investigations and compliance reporting by keeping logs in one place.",
      "Rules need tuning to reduce false positives so real alerts aren't missed.",
      "It is often monitored by a security operations center.",
    ],
    related: ["intrusion-detection-system", "chain-of-custody"],
    match: ["SIEM", "log", "event management"],
  },
  {
    slug: "tokenization",
    term: "Tokenization",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Tokenization replaces sensitive data, such as a card number, with a random token that has no value if stolen. The link between token and original value is kept in a secure token vault.",
    takeaways: [
      "Unlike encryption, a token can't be reversed mathematically, only looked up in the vault.",
      "It shrinks the number of systems that hold sensitive data, reducing compliance scope for card data.",
      "Masking, by contrast, hides part of the data on display, such as all but the last four digits.",
    ],
    related: ["symmetric-encryption", "data-minimization", "personally-identifiable-information"],
    match: ["token", "masking"],
  },
  {
    slug: "service-level-agreement",
    term: "Service level agreement",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "A service level agreement sets measurable service standards a provider commits to, such as availability, response and resolution times, along with how performance is measured and reported and the remedies if standards are missed.",
    takeaways: [
      "Remedies are often service credits, which may be small compared with the customer's losses.",
      "The customer should monitor actual performance against the agreement.",
      "An agreement doesn't move responsibility for the customer's own controls to the provider.",
    ],
    related: ["shared-responsibility-model", "cloud-service-models", "soc-2-report"],
    match: ["service level", "uptime", "availability"],
  },
  {
    slug: "agile-development",
    term: "Agile development",
    section: "isc",
    topic: "systems-development-life-cycle",
    definition:
      "Agile development builds software in short cycles (sprints) that each deliver working features, with continuous feedback from users. The traditional waterfall approach completes each phase in sequence before starting the next.",
    takeaways: [
      "Agile adapts more easily to changing requirements; waterfall suits stable, well-defined requirements.",
      "Change management, testing and segregation of duties still apply, often as automated controls in the deployment pipeline.",
      "Documentation tends to be lighter, which auditors need to plan for.",
    ],
    related: ["systems-development-life-cycle", "change-management"],
    match: ["agile", "sprint", "waterfall", "DevOps"],
  },
  {
    slug: "type-1-and-type-2-reports",
    term: "Type 1 and Type 2 reports",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "A Type 1 System and Organization Controls (SOC) report covers the description of a service organization's system and the suitability of its control design at a point in time. A Type 2 report adds the operating effectiveness of the controls over a period.",
    takeaways: [
      "A Type 2 report describes the tests performed and their results.",
      "A user auditor who plans to rely on the service organization's controls needs a Type 2 report.",
      "Both types exist for SOC 1 and SOC 2 reports.",
    ],
    related: ["soc-2-report", "bridge-letter", "carve-out-method"],
    match: ["Type 1", "Type 2", "type I", "type II"],
  },
  {
    slug: "generative-artificial-intelligence",
    term: "Generative artificial intelligence",
    section: "isc",
    topic: "emerging-technology-considerations",
    definition:
      "Generative artificial intelligence is technology that creates new content, such as text, images or code, from prompts. Large language models are a common example.",
    takeaways: [
      "Its output can be confidently wrong, so important results need human review.",
      "Confidential data entered in prompts may leave the organization's control.",
      "Organizations need policies on approved tools, data use and accountability for output.",
    ],
    related: ["robotic-process-automation", "data-governance"],
    match: ["generative", "artificial intelligence", "language model"],
  },
  {
    slug: "backup-methods",
    term: "Full, incremental and differential backups",
    section: "isc",
    topic: "incident-response",
    definition:
      "A full backup copies all data. An incremental backup copies changes since the last backup of any kind, and a differential backup copies changes since the last full backup.",
    takeaways: [
      "Restoring from incrementals needs the full backup plus every incremental since; a differential needs only the full plus the latest differential.",
      "Offline or immutable copies protect backups from ransomware.",
      "Restores should be tested, and backup frequency set by the recovery point objective.",
    ],
    related: ["recovery-point-objective", "ransomware", "business-continuity-plan"],
    match: ["backup", "incremental", "differential"],
  },
  // TCP
  {
    slug: "qualified-personal-residence-trust",
    term: "Qualified personal residence trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "With a qualified personal residence trust, the owner transfers a home to a trust but keeps the right to live in it for a set term. The taxable gift is only the value of the remainder, reduced by the retained interest.",
    takeaways: [
      "If the owner survives the term, the home and its later growth are out of the estate.",
      "If the owner dies during the term, the home is included in the estate.",
      "The beneficiaries take a carryover basis, with no step-up at death.",
    ],
    related: ["grantor-retained-annuity-trust", "step-up-in-basis", "irrevocable-life-insurance-trust"],
    match: ["residence trust", "QPRT"],
  },
  {
    slug: "charitable-lead-trust",
    term: "Charitable lead trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A charitable lead trust pays an annuity or a fixed percentage to a charity for a term, after which the remaining assets pass to noncharitable beneficiaries, usually family members.",
    takeaways: [
      "The taxable gift is reduced by the present value of the charity's interest.",
      "It works best when the assets grow faster than the interest rate the Internal Revenue Service uses to value the interests.",
      "In a grantor lead trust, the grantor gets an upfront income tax deduction but is taxed on the trust's income.",
    ],
    related: ["charitable-remainder-trust", "grantor-retained-annuity-trust", "grantor-trust"],
    match: ["lead trust"],
  },
  {
    slug: "solo-401k",
    term: "Solo 401(k)",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A solo 401(k) is a 401(k) plan for a self-employed person with no employees other than a spouse. The owner contributes as an employee (elective deferrals) and as the employer (a profit-sharing contribution), up to a combined annual limit.",
    takeaways: [
      "Employer contributions for a sole proprietor are limited to 20% of net self-employment earnings (25% of wages for an incorporated owner).",
      "Elective deferrals can be made as Roth contributions.",
      "Once plan assets exceed $250,000, an annual return (Form 5500-EZ) is required.",
    ],
    related: ["traditional-ira", "roth-ira", "self-employment-tax"],
    match: ["401(k)", "solo", "self-employed"],
  },
  {
    slug: "two-percent-shareholder-fringe-benefits",
    term: "2% shareholder fringe benefits",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "S corporation shareholders who own more than 2% of the stock are treated like partners for fringe benefits, so many benefits that are tax-free to employees are taxable to them.",
    takeaways: [
      "Health insurance premiums the corporation pays for them are included in their wages, then usually deducted as self-employed health insurance.",
      "Those premiums aren't subject to Social Security and Medicare taxes if paid under a plan for employees.",
      "Family attribution rules apply, so a 2% shareholder's spouse or child working in the business is also affected.",
    ],
    related: ["reasonable-compensation", "s-corporation-election", "health-savings-account"],
    match: ["2% shareholder", "fringe benefit", "health insurance"],
  },
  {
    slug: "carried-interest",
    term: "Carried interest",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "Carried interest is a share of a fund's profits that a manager, such as a private equity general partner, receives for services. Gains on it are long-term only if the assets were held for more than 3 years, rather than the usual 1 year.",
    takeaways: [
      "Gains on assets held 3 years or less are recharacterized as short-term capital gain.",
      "Receiving a profits interest for services is generally not taxable when it is granted.",
      "The 3-year rule doesn't apply to capital the manager invested.",
    ],
    related: ["guaranteed-payment", "holding-period", "outside-basis"],
    match: ["carried interest", "profits interest", "3 years"],
  },
  {
    slug: "check-the-box-regulations",
    term: "Check-the-box regulations",
    section: "tcp",
    topic: "entity-choice-and-structuring",
    definition:
      "The check-the-box regulations let an eligible business entity that isn't a corporation under state law, such as a limited liability company, choose how it is taxed by filing Form 8832.",
    takeaways: [
      "By default, a domestic entity with several owners is a partnership, and one with a single owner is disregarded.",
      "An entity electing corporate status can then make an S corporation election.",
      "After changing its classification, an entity generally can't change again for 60 months.",
    ],
    related: ["limited-liability-company", "s-corporation-election", "general-partnership"],
    match: ["check-the-box", "8832", "disregarded entity", "classification"],
  },
  {
    slug: "section-332-liquidation",
    term: "Section 332 liquidation",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "When a parent corporation owning at least 80% of a subsidiary's voting power and value liquidates the subsidiary, neither the parent nor the subsidiary recognizes gain or loss on the distributions to the parent.",
    takeaways: [
      "The parent takes over the subsidiary's basis in its assets and its tax attributes, such as net operating losses and earnings and profits.",
      "Minority shareholders are taxed under the normal complete liquidation rules.",
      "The subsidiary recognizes gain, but not loss, on distributions to minority shareholders.",
    ],
    related: ["complete-liquidation", "section-351", "earnings-and-profits"],
    match: ["332", "subsidiary liquidation", "80%"],
  },
  {
    slug: "deferred-like-kind-exchange",
    term: "Deferred like-kind exchange",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "In a deferred like-kind exchange, a taxpayer sells real property and buys replacement property later, through a qualified intermediary who holds the sale proceeds so the taxpayer never has access to them.",
    takeaways: [
      "Replacement property must be identified within 45 days and received within 180 days (or by the return due date with extensions, if earlier).",
      "Identification usually uses the three-property rule or the 200% rule.",
      "If the taxpayer can get at the proceeds, the exchange fails and the gain is taxed.",
    ],
    related: ["like-kind-exchange", "boot", "cost-segregation"],
    match: ["deferred exchange", "qualified intermediary", "45 days", "180 days"],
  },
  {
    slug: "incentive-stock-options",
    term: "Incentive stock options",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Incentive stock options create no regular tax when granted or exercised. If the shares are held more than 2 years from grant and 1 year from exercise, the whole gain on sale is long-term capital gain.",
    takeaways: [
      "The spread at exercise is an adjustment for the alternative minimum tax.",
      "Selling earlier is a disqualifying disposition: the spread at exercise becomes ordinary compensation income.",
      "The employer gets a deduction only on a disqualifying disposition.",
    ],
    related: ["alternative-minimum-tax", "restricted-stock-unit", "qualified-small-business-stock"],
    match: ["incentive stock option", "disqualifying disposition", "exercise"],
  },
  {
    slug: "revenue-ruling",
    term: "Revenue ruling",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "A revenue ruling is the Internal Revenue Service's official interpretation of how the tax law applies to a specific set of facts. It is published in the Internal Revenue Bulletin and can be relied on by any taxpayer with substantially the same facts.",
    takeaways: [
      "It carries less authority than regulations, and courts aren't bound by it.",
      "Revenue procedures cover procedural matters, such as how to make an election.",
      "A private letter ruling, by contrast, applies only to the taxpayer who asked for it.",
    ],
    related: ["private-letter-ruling", "substantial-authority"],
    match: ["revenue ruling", "revenue procedure", "Internal Revenue Bulletin"],
  },
];
