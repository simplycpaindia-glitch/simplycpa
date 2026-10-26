import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, twelfth batch. */
export const disciplineTermsL: GlossaryTerm[] = [
  // BAR
  {
    slug: "return-on-equity",
    term: "Return on equity",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Return on equity is net income divided by average shareholders' equity. It measures the return a company earns on the capital its owners have invested.",
    takeaways: [
      "The DuPont model breaks it into profit margin × asset turnover × financial leverage (equity multiplier).",
      "More debt raises return on equity when returns exceed borrowing costs, but adds risk.",
      "Share buybacks reduce equity and can raise it without better operations.",
    ],
    example: "Net income of $120,000 and average equity of $800,000: return on equity is 15%.",
    related: ["dupont-analysis", "return-on-investment", "debt-to-equity-ratio"],
    match: ["return on equity", "equity multiplier"],
  },
  {
    slug: "ebitda",
    term: "EBITDA",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Earnings before interest, taxes, depreciation and amortization (EBITDA) is a widely used measure of operating performance that leaves out financing, tax and noncash asset charges.",
    takeaways: [
      "It isn't defined by generally accepted accounting principles, so public companies presenting it must follow the rules for non-standard performance measures.",
      "It ignores capital spending and working capital needs, so it overstates cash generation.",
      "Lenders often use it in covenants, such as maximum debt to EBITDA.",
    ],
    related: ["non-gaap-financial-measure", "free-cash-flow", "times-interest-earned"],
    match: ["EBITDA", "earnings before interest"],
  },
  {
    slug: "hedge-documentation",
    term: "Hedge documentation",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "Hedge accounting requires formal documentation at the inception of the hedge: the risk management objective and strategy, the hedging instrument, the hedged item, the risk being hedged and how effectiveness will be assessed.",
    takeaways: [
      "Without documentation at inception, hedge accounting can't be applied retroactively.",
      "Private companies have extra time to complete some of the documentation.",
      "Changes in the hedging strategy require new documentation.",
    ],
    related: ["hedge-effectiveness", "fair-value-hedge", "cash-flow-hedge"],
    match: ["documentation", "inception", "hedging relationship"],
  },
  {
    slug: "employee-benefit-plan-financial-statements",
    term: "Employee benefit plan financial statements",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "Employee benefit plans issue their own financial statements, separate from the sponsoring employer's, including a statement of net assets available for benefits and a statement of changes in those net assets.",
    takeaways: [
      "Plan investments are generally reported at fair value.",
      "Defined benefit plans also report the actuarial present value of accumulated plan benefits.",
      "Many plans must be audited and file annual reports with the Department of Labor.",
    ],
    related: ["defined-contribution-plan", "accumulated-benefit-obligation"],
    match: ["net assets available for benefits", "plan financial statements"],
  },
  {
    slug: "option-pricing-models",
    term: "Option-pricing models",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "Option-pricing models estimate the fair value of stock options. The Black-Scholes-Merton model is a closed-form formula; lattice (binomial) models are more flexible, handling early exercise and changing assumptions.",
    takeaways: [
      "Inputs include the share price, exercise price, expected term, expected volatility, expected dividends and the risk-free interest rate.",
      "Higher volatility and a longer term increase an option's value; higher expected dividends decrease it.",
      "Private companies may use an industry index's volatility if their own can't be estimated.",
    ],
    related: ["grant-date-fair-value", "option-contract"],
    match: ["Black-Scholes", "lattice", "binomial", "volatility"],
  },
  {
    slug: "flexible-budget",
    term: "Flexible budget",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "A flexible budget adjusts budgeted costs and revenues to the actual level of activity, using known cost behavior. Comparing actual results with it separates efficiency and price effects from the effect of volume.",
    takeaways: [
      "The static budget variance equals the flexible budget variance plus the sales volume variance.",
      "Fixed costs are the same in the flexible and static budgets within the relevant range.",
      "It gives a fairer basis for evaluating managers who don't control volume.",
    ],
    related: ["budget-variance-analysis", "contribution-margin"],
    match: ["flexible budget", "static budget", "volume variance"],
  },
  {
    slug: "budget-variance-analysis",
    term: "Price and quantity variances",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "Variance analysis splits the difference between actual and standard costs into a price (rate) variance, (actual price − standard price) × actual quantity, and a quantity (efficiency) variance, (actual quantity − standard quantity allowed) × standard price.",
    takeaways: [
      "A variance is favorable when actual cost is below standard.",
      "Purchasing usually answers for price variances and production for quantity variances.",
      "Significant variances are investigated, not just reported.",
    ],
    example: "10,000 pounds bought at $2.10 against a $2.00 standard, with 9,500 pounds allowed: price variance $1,000 unfavorable; quantity variance $1,000 unfavorable.",
    related: ["flexible-budget", "contribution-margin"],
    match: ["variance", "price variance", "efficiency variance"],
  },
  {
    slug: "data-mining",
    term: "Data mining",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Data mining discovers patterns, relationships and anomalies in large datasets using statistical and machine learning techniques, such as classification, clustering and association rules.",
    takeaways: [
      "Clustering groups similar items, for example customers with similar buying habits.",
      "Searching many variables can find chance patterns that don't hold up.",
      "Results should be validated on data not used to find them.",
    ],
    related: ["machine-learning", "outlier-detection", "types-of-data-analytics"],
    match: ["data mining", "clustering", "classification"],
  },
  {
    slug: "capital-asset-reporting-governments",
    term: "Capital assets in government financial statements",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "Governments report capital assets, including infrastructure such as roads and bridges, in the government-wide statements at historical cost (or acquisition value if donated), less depreciation. Governmental funds report them only as expenditures.",
    takeaways: [
      "Infrastructure can use the modified approach instead of depreciation if condition is maintained at a set level.",
      "Land and construction in progress aren't depreciated.",
      "Capital assets are disclosed by major class with beginning and ending balances.",
    ],
    related: ["modified-approach", "governmental-funds-reconciliation", "net-position"],
    match: ["capital asset", "infrastructure"],
  },
  {
    slug: "net-pension-liability",
    term: "Net pension liability (governments)",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "A government that provides defined benefit pensions reports a net pension liability equal to the total pension liability minus the pension plan's fiduciary net position, in the government-wide and proprietary fund statements.",
    takeaways: [
      "Some changes in the liability are deferred as deferred outflows or inflows of resources.",
      "Governmental funds report only amounts currently due.",
      "Governments in cost-sharing plans report their proportionate share.",
    ],
    related: ["deferred-inflows-of-resources", "projected-benefit-obligation", "fiduciary-funds"],
    match: ["net pension liability", "total pension liability"],
  },
  {
    slug: "capital-asset-pricing-model",
    term: "Capital asset pricing model",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "The capital asset pricing model estimates the cost of equity as the risk-free rate plus beta multiplied by the market risk premium (expected market return minus the risk-free rate).",
    takeaways: [
      "Beta measures a stock's sensitivity to market movements, its systematic risk.",
      "The result feeds into the weighted-average cost of capital.",
      "Diversifiable risk isn't rewarded in the model.",
    ],
    example: "A risk-free rate of 4%, beta of 1.2 and market risk premium of 6%: cost of equity is 4% + 1.2 × 6% = 11.2%.",
    related: ["weighted-average-cost-of-capital", "net-present-value"],
    match: ["beta", "risk-free", "market risk premium", "CAPM"],
  },
  // ISC
  {
    slug: "honeypot",
    term: "Honeypot",
    section: "isc",
    topic: "incident-response",
    definition:
      "A honeypot is a decoy system set up to attract attackers, so security staff can detect intrusions, study attack methods and divert attackers from real systems.",
    takeaways: [
      "Any activity on a honeypot is suspicious, because legitimate users have no reason to use it.",
      "It must be isolated so attackers can't use it to reach real systems.",
      "Honey tokens, such as fake credentials, work on the same principle.",
    ],
    related: ["intrusion-detection-system", "security-information-and-event-management"],
    match: ["honeypot", "decoy"],
  },
  {
    slug: "web-application-firewall",
    term: "Web application firewall",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A web application firewall filters traffic to and from a web application, blocking attacks such as injection and cross-site scripting that a network firewall wouldn't recognize.",
    takeaways: [
      "It protects the application layer, while network firewalls control traffic by address and port.",
      "Its rules must be tuned to avoid blocking legitimate users.",
      "It complements, but doesn't replace, secure coding.",
    ],
    related: ["firewall", "sql-injection"],
    match: ["web application firewall", "application layer"],
  },
  {
    slug: "oltp-and-olap",
    term: "Transaction processing and analytical processing",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Online transaction processing (OLTP) systems handle large numbers of short transactions in real time, such as order entry. Online analytical processing (OLAP) supports complex analysis of historical data, usually from a data warehouse.",
    takeaways: [
      "Transaction systems use normalized databases optimized for fast updates.",
      "Analytical systems let users drill down and slice data across dimensions such as time, product and region.",
      "Running heavy analysis on transaction systems can slow operations.",
    ],
    related: ["data-warehouse", "relational-database", "enterprise-resource-planning"],
    match: ["OLTP", "OLAP", "transaction processing", "analytical processing"],
  },
  {
    slug: "big-data",
    term: "Big data",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Big data refers to datasets too large or complex for traditional tools, usually described by volume (size), velocity (speed of arrival), variety (types of data) and veracity (reliability).",
    takeaways: [
      "It often needs distributed storage and processing.",
      "Much of it is unstructured, such as text, images and sensor readings.",
      "Data quality and privacy controls are harder at this scale.",
    ],
    related: ["data-lake", "structured-and-unstructured-data", "data-quality-dimensions"],
    match: ["big data", "volume", "velocity", "variety"],
  },
  {
    slug: "privacy-notice",
    term: "Privacy notice",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "A privacy notice tells individuals what personal data an organization collects, why, who it is shared with, how long it is kept, what rights they have and whom to contact.",
    takeaways: [
      "It should be clear and available when data is collected.",
      "Under purpose limitation, data shouldn't be used for purposes beyond those stated without a new legal basis.",
      "Notices must be updated when practices change.",
    ],
    related: ["consent-management", "data-subject-rights", "privacy-by-design"],
    match: ["privacy notice", "privacy policy", "purpose limitation"],
  },
  {
    slug: "digital-forensics",
    term: "Digital forensics",
    section: "isc",
    topic: "incident-response",
    definition:
      "Digital forensics is collecting, preserving and analyzing digital evidence, such as disk images, memory and logs, in a way that will stand up in legal proceedings.",
    takeaways: [
      "Analysis is done on verified copies, using hash values, not on the originals.",
      "A documented chain of custody must be kept.",
      "Volatile evidence, such as memory, should be captured before systems are shut down.",
    ],
    related: ["chain-of-custody", "hashing", "incident-response-plan"],
    match: ["forensic", "evidence", "disk image"],
  },
  {
    slug: "business-impact-analysis",
    term: "Business impact analysis",
    section: "isc",
    topic: "incident-response",
    definition:
      "A business impact analysis identifies an organization's critical processes and how the impact of a disruption to each grows over time, in order to set recovery priorities.",
    takeaways: [
      "It sets the recovery time and recovery point objectives for each process and system.",
      "It is the foundation of the business continuity plan.",
      "It identifies dependencies, such as key suppliers and systems.",
    ],
    related: ["business-continuity-plan", "recovery-time-objective", "recovery-point-objective"],
    match: ["business impact analysis", "critical process"],
  },
  {
    slug: "feasibility-study",
    term: "Feasibility study",
    section: "isc",
    topic: "systems-development-life-cycle",
    definition:
      "A feasibility study, done early in the systems development life cycle, assesses whether a proposed system is technically, economically, operationally and schedule feasible before committing to build or buy it.",
    takeaways: [
      "Economic feasibility compares expected costs and benefits.",
      "It ends with a decision to proceed, change course or stop.",
      "Users and management should be involved, not just technology staff.",
    ],
    related: ["systems-development-life-cycle", "user-acceptance-testing"],
    match: ["feasibility"],
  },
  {
    slug: "emergency-changes",
    term: "Emergency changes",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Emergency changes are urgent fixes to production systems, such as during an outage, made outside the normal change management process.",
    takeaways: [
      "They should use limited, logged emergency access.",
      "Each one should be documented, reviewed and approved promptly afterward.",
      "Frequent emergency changes suggest weaknesses in the normal process.",
    ],
    related: ["change-management", "separation-of-environments", "audit-trail"],
    match: ["emergency change", "firefighter"],
  },
  {
    slug: "complementary-subservice-organization-controls",
    term: "Complementary subservice organization controls",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "When a service organization's report uses the carve-out method, complementary subservice organization controls are the controls it assumes its subservice organizations have in place for its own controls to achieve their objectives.",
    takeaways: [
      "They are listed in the service organization's report.",
      "User entities may need the subservice organization's own report to know whether those controls work.",
      "They are the subservice equivalent of complementary user entity controls.",
    ],
    related: ["carve-out-method", "complementary-user-entity-controls", "fourth-party-risk"],
    match: ["subservice", "complementary"],
  },
  {
    slug: "access-provisioning-and-deprovisioning",
    term: "Access provisioning and deprovisioning",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Access provisioning grants system access based on an approved request that matches the person's job. Deprovisioning removes access promptly when someone leaves or changes roles.",
    takeaways: [
      "Auditors test samples of new users for approvals and of leavers for timely removal.",
      "Linking access to the human resources system helps automate removal.",
      "Accounts left active after someone leaves are a common finding.",
    ],
    related: ["user-access-review", "role-based-access-control", "least-privilege"],
    match: ["provisioning", "deprovisioning", "terminated"],
  },
  {
    slug: "configurable-controls",
    term: "Configurable controls",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Configurable controls are settings in an enterprise resource planning or other system that enforce rules automatically, such as three-way match tolerances, approval workflows and duplicate invoice checks.",
    takeaways: [
      "Auditors test them by inspecting the settings and confirming they work as set.",
      "Their reliability depends on controls over who can change the settings.",
      "Default settings may not match the organization's policies.",
    ],
    related: ["application-controls", "enterprise-resource-planning", "benchmarking-automated-controls"],
    match: ["configuration", "configurable", "system setting"],
  },
  // TCP
  {
    slug: "reduced-home-sale-exclusion",
    term: "Reduced home sale exclusion",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A homeowner who doesn't meet the 2-out-of-5-year tests because of a change in place of employment, health or other unforeseen circumstances can claim a prorated part of the home sale exclusion.",
    takeaways: [
      "The exclusion is prorated by the months the tests were met out of 24.",
      "Gain from periods of nonqualified use, such as earlier rental use, may not qualify.",
      "Depreciation taken after May 6, 1997 is taxable regardless.",
    ],
    example: "A single taxpayer who must move for a new job after 12 months qualifies for $250,000 × 12/24 = $125,000.",
    related: ["home-sale-exclusion", "home-office-deduction"],
    match: ["reduced exclusion", "unforeseen", "prorated"],
  },
  {
    slug: "vacation-home-rules",
    term: "Vacation home rules",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "If a home is rented for fewer than 15 days a year, the rent is tax-free and no rental expenses are deductible. If it is rented longer and personally used more than the greater of 14 days or 10% of rental days, rental deductions are limited to rental income.",
    takeaways: [
      "Expenses are allocated between rental and personal use by days.",
      "With less personal use, the home is treated as rental property under the passive loss rules.",
      "Mortgage interest and taxes on personal days may still be itemized.",
    ],
    related: ["passive-activity-loss", "real-estate-professional"],
    match: ["vacation home", "14 days", "15 days"],
  },
  {
    slug: "real-estate-professional",
    term: "Real estate professional",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A taxpayer who spends more than 750 hours a year, and more than half of their working time, in real property businesses in which they materially participate is a real estate professional, so their rentals aren't automatically passive.",
    takeaways: [
      "Rental losses can offset other income if the taxpayer also materially participates in the rentals.",
      "On a joint return, one spouse must meet the tests alone.",
      "Detailed time records are needed to support the status.",
    ],
    related: ["passive-activity-loss", "net-investment-income-tax", "vacation-home-rules"],
    match: ["real estate professional", "750 hours"],
  },
  {
    slug: "custodial-accounts",
    term: "Custodial accounts for minors",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "Accounts under the Uniform Transfers to Minors Act (UTMA) or the older gifts to minors act hold assets for a child under an adult custodian. The gift is complete, and the child gets control at an age set by state law, usually 18 to 21.",
    takeaways: [
      "Income is taxed to the child, subject to the kiddie tax.",
      "Gifts qualify for the gift tax annual exclusion.",
      "They count as the student's assets for financial aid, reducing aid more than parental assets.",
    ],
    related: ["kiddie-tax", "section-529-plan", "gift-tax-annual-exclusion"],
    match: ["custodial", "UTMA", "minor"],
  },
  {
    slug: "roth-ira-ordering-rules",
    term: "Roth IRA ordering rules",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "Distributions from a Roth individual retirement account (IRA) are treated as coming first from regular contributions, then from conversions in the order made, and finally from earnings.",
    takeaways: [
      "Regular contributions can be withdrawn at any time free of tax and penalty.",
      "Converted amounts withdrawn within 5 years of the conversion, before age 59½, face the 10% additional tax.",
      "Earnings are tax-free only in a qualified distribution.",
    ],
    related: ["roth-ira", "roth-conversion", "early-withdrawal-penalty-exceptions"],
    match: ["ordering", "Roth", "5-year"],
  },
  {
    slug: "spousal-ira",
    term: "Spousal IRA",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A spouse with little or no earned income can contribute to their own individual retirement account (IRA) based on the working spouse's earnings, if the couple files a joint return.",
    takeaways: [
      "Each spouse can contribute up to the annual limit.",
      "Combined contributions can't exceed the couple's taxable compensation.",
      "Deductibility of traditional contributions depends on income and workplace plan coverage.",
    ],
    related: ["traditional-ira", "roth-ira"],
    match: ["spousal", "nonworking spouse"],
  },
  {
    slug: "community-property-basis",
    term: "Community property basis step-up",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "In community property states, when one spouse dies, both halves of community property, not just the decedent's half, get a new basis equal to fair market value, if at least half is included in the decedent's estate.",
    takeaways: [
      "In other states, only the decedent's half of jointly held property gets the step-up.",
      "Nine states are community property states, and a few more allow couples to opt in.",
      "It can eliminate built-in gain on appreciated assets for the surviving spouse.",
    ],
    related: ["step-up-in-basis", "gross-estate", "portability"],
    match: ["community property", "both halves"],
  },
  {
    slug: "shareholder-loans",
    term: "Shareholder loans",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "Loans between a closely held corporation and its shareholders must look like real debt, with a written note, interest, a repayment schedule and actual repayment. Otherwise the tax law may recharacterize them.",
    takeaways: [
      "A sham loan to a shareholder can be treated as a constructive dividend.",
      "A loan from a shareholder to a thinly capitalized corporation can be treated as equity, making interest nondeductible and repayments dividends.",
      "Interest below the applicable federal rate is imputed.",
    ],
    related: ["constructive-dividend", "below-market-loans", "s-corporation-shareholder-basis"],
    match: ["shareholder loan", "thin capitalization", "debt versus equity"],
  },
  {
    slug: "mixing-bowl-rules",
    term: "Mixing bowl rules",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "If property a partner contributed with a built-in gain is distributed to another partner within 7 years, the contributing partner recognizes the precontribution gain. If the contributing partner receives other property within 7 years, they may also recognize gain.",
    takeaways: [
      "The rules stop partnerships being used to swap appreciated property tax-free.",
      "They work with the rules for allocating built-in gain on contributed property.",
      "Distributing the contributed property back to its contributor doesn't trigger them.",
    ],
    related: ["section-704c-allocation", "disguised-sale", "nonliquidating-distribution"],
    match: ["mixing bowl", "7 years", "precontribution gain"],
  },
  {
    slug: "qbi-wage-and-property-limits",
    term: "Qualified business income wage and property limits",
    section: "tcp",
    topic: "entity-choice-and-structuring",
    definition:
      "Above an income threshold, the qualified business income deduction for each business is limited to the greater of 50% of its W-2 wages or 25% of W-2 wages plus 2.5% of the unadjusted basis of its qualified property.",
    takeaways: [
      "The limit is phased in over an income range above the threshold, widened from 2026 by the One Big Beautiful Bill Act.",
      "Paying reasonable S corporation salaries increases W-2 wages, but also reduces business income.",
      "Businesses with large depreciable property can rely on the property part of the limit.",
    ],
    related: ["qualified-business-income-deduction", "specified-service-trade-or-business", "reasonable-compensation"],
    match: ["W-2 wages", "unadjusted basis", "wage limit"],
  },
  {
    slug: "section-303-redemption",
    term: "Section 303 redemption",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "A redemption of stock included in a decedent's estate is treated as a sale, not a dividend, up to the amount of estate taxes and funeral and administration expenses, if the stock is more than 35% of the adjusted gross estate.",
    takeaways: [
      "Because inherited stock gets a stepped-up basis, little or no gain usually results.",
      "It gives the estate cash from the business to pay taxes without dividend treatment.",
      "Redemptions must generally occur within a set period after death.",
    ],
    related: ["stock-redemption", "estate-tax-installment-payments", "step-up-in-basis"],
    match: ["303", "death taxes", "redemption"],
  },
  {
    slug: "related-party-installment-sales",
    term: "Related-party installment sales",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "If a related buyer in an installment sale resells the property within 2 years, the original seller must recognize the remaining deferred gain, to the extent of the resale proceeds.",
    takeaways: [
      "The 2-year limit doesn't apply to marketable securities, which have no time limit.",
      "Sales of depreciable property to a controlled entity can't use the installment method.",
      "Resales caused by death or involuntary conversion are excepted.",
    ],
    related: ["installment-sale", "related-party-losses", "section-1239-ordinary-income"],
    match: ["installment", "related party", "resale"],
  },
  {
    slug: "tax-treaties",
    term: "Tax treaties",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Tax treaties are agreements between countries to prevent double taxation and tax evasion, for example by reducing withholding tax rates on dividends, interest and royalties and setting tie-breaker rules for residency.",
    takeaways: [
      "Business profits are generally taxed by a country only if the business has a permanent establishment there.",
      "The saving clause preserves the United States' right to tax its own citizens and residents.",
      "Taxpayers claiming certain treaty benefits disclose them on Form 8833.",
    ],
    related: ["foreign-tax-credit", "transfer-pricing", "foreign-earned-income-exclusion"],
    match: ["treaty", "permanent establishment", "withholding rate"],
  },
  {
    slug: "acquiescence",
    term: "Acquiescence",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "When the Internal Revenue Service loses a case, it may announce acquiescence, meaning it accepts the decision and will follow it, or nonacquiescence, meaning it disagrees and may continue to litigate the issue in other cases.",
    takeaways: [
      "Announcements are published in the Internal Revenue Bulletin.",
      "A nonacquiescence warns that relying on the decision may lead to a dispute.",
      "Researchers check acquiescence status when weighing a case's authority.",
    ],
    related: ["revenue-ruling", "tax-court", "golsen-rule"],
    match: ["acquiescence", "nonacquiescence"],
  },
];
