import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, eleventh batch. */
export const disciplineTermsK: GlossaryTerm[] = [
  // BAR
  {
    slug: "fixed-charge-coverage",
    term: "Fixed-charge coverage ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The fixed-charge coverage ratio measures a company's ability to cover fixed financing obligations: earnings before interest and taxes plus fixed charges (such as lease payments), divided by fixed charges plus interest.",
    takeaways: [
      "It is broader than times interest earned because it includes lease and similar payments.",
      "Lenders often set a minimum level in loan covenants.",
      "A ratio below 1 means earnings don't cover fixed obligations.",
    ],
    related: ["times-interest-earned", "debt-to-equity-ratio"],
    match: ["fixed-charge", "fixed charge"],
  },
  {
    slug: "operating-cash-flow-ratio",
    term: "Operating cash flow ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The operating cash flow ratio is cash flow from operations divided by current liabilities. It shows whether a company generates enough cash from its business to pay its short-term obligations.",
    takeaways: [
      "It is less affected by accrual estimates than ratios based on balance sheet assets.",
      "A ratio below 1 suggests the company may need financing to meet current obligations.",
      "Comparing operating cash flow with net income helps judge earnings quality.",
    ],
    related: ["current-ratio", "free-cash-flow", "quick-ratio"],
    match: ["operating cash flow", "cash flow from operations"],
  },
  {
    slug: "intercompany-fixed-asset-transfers",
    term: "Intercompany fixed asset transfers",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "When one member of a consolidated group sells equipment to another at a gain, the gain is eliminated in consolidation and the asset restored to its original cost and accumulated depreciation.",
    takeaways: [
      "Each year, the extra depreciation on the stepped-up amount is eliminated, recognizing the gain gradually over the remaining life.",
      "If the asset is later sold to an outsider, the remaining deferred gain is recognized then.",
      "Upstream sales share the effect with the noncontrolling interest.",
    ],
    related: ["unrealized-intercompany-profit", "consolidation-eliminations", "intercompany-bond-transactions"],
    match: ["intercompany", "equipment", "fixed asset"],
  },
  {
    slug: "forecasted-transaction",
    term: "Forecasted transaction",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A forecasted transaction is an expected future transaction that isn't yet a firm commitment, such as planned purchases of raw materials next quarter. If it is probable, its cash flow risk can be hedged as a cash flow hedge.",
    takeaways: [
      "Gains and losses on the hedging instrument go to other comprehensive income until the transaction affects earnings.",
      "If the transaction becomes probable not to occur, the amounts are reclassified to earnings immediately.",
      "Foreign currency risk on forecasted sales or purchases is commonly hedged this way.",
    ],
    related: ["cash-flow-hedge", "hedge-of-a-firm-commitment", "forward-contract"],
    match: ["forecasted transaction", "forecast"],
  },
  {
    slug: "funded-status",
    term: "Funded status",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "A defined benefit plan's funded status is the fair value of plan assets minus the projected benefit obligation. An overfunded plan is reported as an asset and an underfunded plan as a liability.",
    takeaways: [
      "It is measured as of the fiscal year-end.",
      "Changes not included in net periodic pension cost go to other comprehensive income.",
      "For other postretirement benefits, the accumulated postretirement benefit obligation is used.",
    ],
    related: ["projected-benefit-obligation", "net-periodic-pension-cost", "other-postretirement-benefits"],
    match: ["funded status", "overfunded", "underfunded"],
  },
  {
    slug: "excess-tax-benefits",
    term: "Excess tax benefits (share-based payments)",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "When the tax deduction for a share-based award, based on its value at exercise or vesting, exceeds the compensation cost recognized, the excess tax benefit is recognized in income tax expense. Shortfalls also go to tax expense.",
    takeaways: [
      "This makes the effective tax rate more volatile, especially when share prices move.",
      "Excess tax benefits are operating cash flows.",
      "The deferred tax asset is built up as compensation cost is recognized.",
    ],
    related: ["grant-date-fair-value", "deferred-tax-asset", "incentive-stock-options"],
    match: ["excess tax benefit", "shortfall", "windfall"],
  },
  {
    slug: "assurance-and-service-type-warranties",
    term: "Assurance-type and service-type warranties",
    section: "bar",
    topic: "revenue-for-specific-industries",
    definition:
      "An assurance-type warranty only promises that a product works as agreed, and its expected cost is accrued as a liability. A service-type warranty gives an extra service, such as an extended warranty, and is a separate performance obligation.",
    takeaways: [
      "Revenue allocated to a service-type warranty is deferred and recognized over the coverage period.",
      "A warranty sold separately is always service-type.",
      "Longer coverage than required by law points to a service component.",
    ],
    related: ["warranty-liability", "performance-obligation", "contract-liability"],
    match: ["warranty", "extended warranty", "assurance-type"],
  },
  {
    slug: "lessor-initial-direct-costs",
    term: "Lessor initial direct costs",
    section: "bar",
    topic: "lease-accounting-lessor",
    definition:
      "Initial direct costs are incremental costs of getting a lease that wouldn't have been incurred if it hadn't been signed, such as commissions. Their treatment by a lessor depends on the type of lease.",
    takeaways: [
      "In a sales-type lease with selling profit or loss, they are expensed at commencement; otherwise they are deferred in the net investment.",
      "In a direct financing lease, they are included in the net investment.",
      "In an operating lease, they are deferred and expensed over the lease term.",
    ],
    related: ["sales-type-lease", "direct-financing-lease", "lessor-operating-lease"],
    match: ["initial direct cost", "commission"],
  },
  {
    slug: "time-series-forecasting",
    term: "Time series forecasting",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "Time series forecasting predicts future values from a variable's own past values, separating trend, seasonal, cyclical and irregular components.",
    takeaways: [
      "Methods include moving averages and exponential smoothing, which weights recent data more heavily.",
      "It assumes past patterns will continue, so it handles sudden changes poorly.",
      "Regression instead uses other variables to explain the one being forecast.",
    ],
    related: ["regression-analysis", "sensitivity-analysis"],
    match: ["time series", "moving average", "exponential smoothing", "seasonal"],
  },
  {
    slug: "contribution-margin",
    term: "Contribution margin",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "Contribution margin is sales minus variable costs: the amount available to cover fixed costs and then provide profit. The contribution margin ratio is contribution margin divided by sales.",
    takeaways: [
      "Break-even units equal fixed costs ÷ contribution margin per unit.",
      "Units needed for a target profit equal (fixed costs + target profit) ÷ contribution margin per unit.",
      "With limited capacity, products are ranked by contribution margin per unit of the scarce resource.",
    ],
    example: "Price $50, variable cost $30 and fixed costs of $200,000: contribution margin is $20 a unit, so break-even is 10,000 units.",
    related: ["break-even-point", "degree-of-operating-leverage"],
    match: ["contribution margin", "variable cost"],
  },
  {
    slug: "correlation",
    term: "Correlation",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "The correlation coefficient (r) measures the strength and direction of a linear relationship between two variables, from −1 (perfectly negative) through 0 (none) to +1 (perfectly positive).",
    takeaways: [
      "Squaring it gives the coefficient of determination used in regression.",
      "Correlation doesn't prove that one variable causes the other.",
      "It can miss strong relationships that aren't linear.",
    ],
    related: ["regression-analysis", "data-visualization"],
    match: ["correlation", "coefficient"],
  },
  {
    slug: "structured-and-unstructured-data",
    term: "Structured and unstructured data",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Structured data fits a fixed format of rows and columns, such as general ledger tables. Unstructured data has no predefined format, such as emails, contracts, images and audio; semi-structured data, such as tagged files, falls in between.",
    takeaways: [
      "Most new data is unstructured.",
      "Analyzing unstructured data needs tools such as text analytics.",
      "Structured data is easier to query, validate and reconcile.",
    ],
    related: ["types-of-data-analytics", "data-lake", "extract-transform-load"],
    match: ["structured", "unstructured", "semi-structured"],
  },
  {
    slug: "statement-of-revenues-expenditures-and-changes-in-fund-balances",
    term: "Statement of revenues, expenditures and changes in fund balances",
    section: "bar",
    topic: "governmental-fund-accounting",
    definition:
      "This is the operating statement for governmental funds. It reports revenues, expenditures, other financing sources and uses, and special items, giving the net change in fund balance for the period.",
    takeaways: [
      "Expenditures are classified by function and by character, such as current, debt service and capital outlay.",
      "It uses the modified accrual basis and the current financial resources focus.",
      "It is reconciled to the government-wide statement of activities.",
    ],
    related: ["fund-balance", "measurable-and-available", "governmental-funds-reconciliation"],
    match: ["revenues, expenditures", "changes in fund balance", "other financing"],
  },
  // ISC
  {
    slug: "key-management",
    term: "Cryptographic key management",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Key management covers generating, distributing, storing, rotating, revoking and destroying the keys used for encryption. Whoever holds a key can read the data it protects.",
    takeaways: [
      "Keys should be stored separately from the data they protect, often in dedicated hardware security modules.",
      "Keys should be rotated periodically and revoked if compromised.",
      "Backing up keys prevents data loss if they are lost.",
    ],
    related: ["symmetric-encryption", "public-key-infrastructure", "encryption-in-transit-and-at-rest"],
    match: ["key management", "rotation", "hardware security module"],
  },
  {
    slug: "wireless-security",
    term: "Wireless network security",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Wireless network security protects Wi-Fi networks with strong encryption, strong passphrases, separate guest networks and monitoring for unauthorized access points.",
    takeaways: [
      "Rogue access points and fake hotspots imitating trusted networks can intercept traffic.",
      "Default router passwords and settings should always be changed.",
      "Corporate networks often require individual user authentication rather than one shared password.",
    ],
    related: ["network-segmentation", "man-in-the-middle-attack", "virtual-private-network"],
    match: ["wireless", "Wi-Fi", "access point"],
  },
  {
    slug: "mobile-device-management",
    term: "Mobile device management",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Mobile device management software lets an organization enforce security policies on phones, tablets and laptops, such as requiring passcodes and encryption, controlling apps, and remotely wiping lost devices.",
    takeaways: [
      "Bring-your-own-device policies let employees use personal devices under agreed controls.",
      "Separating work data in a protected container limits privacy concerns on personal devices.",
      "Lost or stolen devices are a common source of data breaches.",
    ],
    related: ["encryption-in-transit-and-at-rest", "data-loss-prevention"],
    match: ["mobile device", "remote wipe", "bring your own"],
  },
  {
    slug: "physical-access-controls",
    term: "Physical access controls",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Physical access controls restrict entry to facilities and sensitive areas, such as data centers, using locks, badges, guards, cameras, visitor logs and secure entry vestibules.",
    takeaways: [
      "Access should follow least privilege and be removed promptly when people leave.",
      "Tailgating through secured doors is a common weakness.",
      "Access logs should be reviewed periodically.",
    ],
    related: ["least-privilege", "environmental-controls", "social-engineering"],
    match: ["physical access", "badge", "data center"],
  },
  {
    slug: "environmental-controls",
    term: "Environmental controls",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Environmental controls protect computer equipment from fire, water, heat, humidity and power problems, using fire suppression, climate control, water detection, uninterruptible power supplies and backup generators.",
    takeaways: [
      "Clean-agent fire suppression avoids water damage to equipment.",
      "Uninterruptible power supplies bridge the gap until generators start.",
      "Equipment should be tested and monitored regularly.",
    ],
    related: ["physical-access-controls", "fault-tolerance", "business-continuity-plan"],
    match: ["environmental", "fire suppression", "uninterruptible power"],
  },
  {
    slug: "zero-day-vulnerability",
    term: "Zero-day vulnerability",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A zero-day vulnerability is a software flaw unknown to the vendor or without an available fix, so attackers can exploit it before a patch exists.",
    takeaways: [
      "Signature-based defenses can't detect exploits that haven't been seen before.",
      "Layered defenses, behavior-based detection and segmentation limit the damage.",
      "Once a patch is released, applying it quickly is critical.",
    ],
    related: ["patch-management", "endpoint-detection-and-response", "vulnerability-scanning"],
    match: ["zero-day", "zero day"],
  },
  {
    slug: "supply-chain-attack",
    term: "Supply chain attack",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "A supply chain attack compromises a trusted supplier's software, hardware or services, for example by inserting malicious code into a software update, to reach the supplier's customers.",
    takeaways: [
      "Customers install the malicious code themselves because they trust the source.",
      "Defenses include vendor risk management, verifying software signatures and limiting vendor tools' privileges.",
      "A list of the components in each software product helps find exposure quickly.",
    ],
    related: ["fourth-party-risk", "vendor-due-diligence", "malware"],
    match: ["supply chain", "software update"],
  },
  {
    slug: "security-awareness-training",
    term: "Security awareness training",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Security awareness training teaches employees to recognize and respond to threats such as phishing and social engineering, handle data safely and report incidents promptly.",
    takeaways: [
      "Simulated phishing tests measure how well training works.",
      "Training should be regular, not just at hiring.",
      "Many regulations and frameworks require it.",
    ],
    related: ["phishing", "social-engineering", "business-email-compromise"],
    match: ["awareness", "training"],
  },
  {
    slug: "data-lineage",
    term: "Data lineage",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Data lineage records where data comes from and every transformation it goes through on the way to a report or analysis.",
    takeaways: [
      "It helps users and auditors trust and trace reported figures back to their source.",
      "It shows which reports are affected when a source system changes.",
      "It supports investigation of data quality problems.",
    ],
    related: ["data-governance", "extract-transform-load", "audit-trail"],
    match: ["lineage", "provenance"],
  },
  {
    slug: "data-stewardship",
    term: "Data owners, stewards and custodians",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Data owners are business leaders accountable for a set of data and decisions about its use. Data stewards manage its quality and definitions day to day, and data custodians, usually technology staff, store and protect it.",
    takeaways: [
      "Owners decide classification and who may have access.",
      "Clear roles prevent data problems from falling between departments.",
      "Custodians apply the controls the owners require.",
    ],
    related: ["data-governance", "data-classification", "master-data-management"],
    match: ["steward", "data owner", "custodian"],
  },
  {
    slug: "cross-border-data-transfers",
    term: "Cross-border data transfers",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Privacy laws restrict sending personal data to other countries. Under European Union rules, transfers need an adequacy decision for the destination, standard contractual clauses, binding corporate rules or another approved mechanism.",
    takeaways: [
      "The European Union and United States Data Privacy Framework, adopted in 2023, covers transfers to participating United States companies.",
      "Some countries require certain data to be stored locally.",
      "Cloud services may store data in several countries, which must be considered.",
    ],
    related: ["gdpr", "cloud-service-models", "data-subject-rights"],
    match: ["cross-border", "transfer", "adequacy", "contractual clauses"],
  },
  {
    slug: "devops",
    term: "DevOps",
    section: "isc",
    topic: "systems-development-life-cycle",
    definition:
      "DevOps combines software development and operations to release changes frequently and reliably, using automated pipelines that build, test and deploy code, often called continuous integration and continuous delivery.",
    takeaways: [
      "Controls are built into the pipeline, such as required automated tests, peer approvals and restricted deployment permissions.",
      "Pipeline logs provide evidence of change management.",
      "Developers' ability to deploy directly must still be controlled.",
    ],
    related: ["agile-development", "change-management", "separation-of-environments"],
    match: ["DevOps", "continuous integration", "continuous delivery", "pipeline"],
  },
  {
    slug: "it-steering-committee",
    term: "IT steering committee",
    section: "isc",
    topic: "it-audit-and-advisory",
    definition:
      "An information technology (IT) steering committee is a group of senior business and technology leaders that sets technology priorities, approves major projects and budgets, and oversees technology risk.",
    takeaways: [
      "It aligns technology investments with business strategy.",
      "It monitors major projects against plan.",
      "Its existence is evidence of technology governance.",
    ],
    related: ["cobit", "data-governance", "systems-development-life-cycle"],
    match: ["steering committee", "governance"],
  },
  {
    slug: "management-assertion-soc",
    term: "Management's assertion (SOC reports)",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "In a System and Organization Controls (SOC) engagement, service organization management gives a written assertion that its system description is fairly presented and its controls were suitably designed, and for a Type 2 report, operated effectively.",
    takeaways: [
      "The service auditor's opinion covers the matters in the assertion.",
      "Without management's assertion, the engagement can't be performed.",
      "The assertion is included in the SOC report.",
    ],
    related: ["service-auditor", "type-1-and-type-2-reports", "soc-2-report"],
    match: ["assertion", "management's assertion"],
  },
  {
    slug: "machine-learning",
    term: "Machine learning",
    section: "isc",
    topic: "emerging-technology-considerations",
    definition:
      "Machine learning is a branch of artificial intelligence in which models learn patterns from data to make predictions or decisions, without being explicitly programmed with rules.",
    takeaways: [
      "Supervised learning trains on labeled examples; unsupervised learning finds patterns, such as clusters, in unlabeled data.",
      "Biased or poor training data produces biased or poor results.",
      "Models need monitoring because their accuracy can drift as conditions change.",
    ],
    related: ["generative-artificial-intelligence", "audit-data-analytics"],
    match: ["machine learning", "training data", "model"],
  },
  // TCP
  {
    slug: "donating-appreciated-property",
    term: "Donating appreciated property",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Giving long-term appreciated property, such as stock held over a year, directly to a public charity lets the donor deduct its full fair market value and avoid tax on the appreciation.",
    takeaways: [
      "The deduction is generally limited to 30% of adjusted gross income, with a 5-year carryforward.",
      "For short-term property, the deduction is limited to basis.",
      "Property that has fallen in value should be sold first, so the loss can be deducted, and the cash donated.",
    ],
    related: ["charitable-contribution-limits", "donor-advised-fund", "bargain-sale-to-charity"],
    match: ["appreciated", "donat", "stock gift"],
  },
  {
    slug: "income-shifting",
    term: "Income shifting",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Income shifting moves income to family members in lower tax brackets, for example by giving them income-producing property or paying children reasonable wages in a family business.",
    takeaways: [
      "The kiddie tax limits shifting unearned income to children.",
      "Under the assignment of income doctrine, income from services is taxed to the person who earns it.",
      "A sole proprietor's child under 18 working in the business is exempt from Social Security and Medicare taxes.",
    ],
    related: ["kiddie-tax", "family-limited-partnership", "zero-percent-capital-gains-bracket"],
    match: ["income shifting", "assignment of income", "family member"],
  },
  {
    slug: "health-flexible-spending-account",
    term: "Health flexible spending account",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "A health flexible spending account lets employees set aside part of their salary before tax to pay medical expenses. The 2025 limit is $3,300.",
    takeaways: [
      "Unused amounts are forfeited unless the plan allows a limited carryover ($660 for 2025) or a grace period of up to 2½ months.",
      "The full annual amount is available from the start of the year.",
      "Unlike a health savings account, it doesn't require a high-deductible health plan and generally isn't portable.",
    ],
    related: ["health-savings-account", "excludable-fringe-benefits", "dependent-care-assistance-program"],
    match: ["flexible spending", "use-it-or-lose-it", "carryover"],
  },
  {
    slug: "early-withdrawal-penalty-exceptions",
    term: "Early withdrawal penalty exceptions",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "Retirement plan and individual retirement account distributions before age 59½ generally carry a 10% additional tax, but exceptions apply, such as death, disability and substantially equal periodic payments.",
    takeaways: [
      "Leaving an employer in or after the year of turning 55 exempts distributions from that employer's plan, but not from an individual retirement account.",
      "Individual retirement account-only exceptions include first-time home purchases (up to $10,000) and higher education costs.",
      "Others include medical expenses above 7.5% of adjusted gross income, birth or adoption ($5,000) and certain emergency withdrawals ($1,000).",
    ],
    related: ["traditional-ira", "roth-ira", "required-minimum-distribution"],
    match: ["59½", "early withdrawal", "10% additional tax", "periodic payments"],
  },
  {
    slug: "retirement-plan-rollover",
    term: "Retirement plan rollover",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A rollover moves retirement savings from one plan or account to another without tax. A direct (trustee-to-trustee) rollover avoids withholding; an indirect rollover must be completed within 60 days.",
    takeaways: [
      "Distributions from employer plans paid to the employee have 20% withheld, which must be made up to roll over the full amount.",
      "Only one indirect rollover between individual retirement accounts is allowed in any 12-month period.",
      "Required minimum distributions can't be rolled over.",
    ],
    related: ["traditional-ira", "required-minimum-distribution", "net-unrealized-appreciation"],
    match: ["rollover", "60 days", "trustee-to-trustee"],
  },
  {
    slug: "charitable-gift-annuity",
    term: "Charitable gift annuity",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "In a charitable gift annuity, a donor transfers assets to a charity in exchange for fixed payments for life. The donor deducts the excess of the assets' value over the present value of the annuity.",
    takeaways: [
      "Part of each payment is a tax-free return of investment, part ordinary income and, for appreciated property, part capital gain.",
      "Payments are backed by the charity's general assets, not a separate trust.",
      "It is simpler to set up than a charitable remainder trust.",
    ],
    related: ["charitable-remainder-trust", "split-interest-agreements", "bargain-sale-to-charity"],
    match: ["gift annuity"],
  },
  {
    slug: "special-use-valuation",
    term: "Special use valuation",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "Special use valuation lets an estate value farm or closely held business real estate at its value in its current use rather than its highest and best use, reducing the estate's value up to an inflation-adjusted limit.",
    takeaways: [
      "The business property must make up at least 50% of the adjusted gross estate, and the real estate at least 25%.",
      "The decedent or a family member must have materially participated, and the property must pass to qualified heirs.",
      "The tax saved is recaptured if heirs sell the property or stop using it that way within 10 years.",
    ],
    related: ["estate-tax-installment-payments", "unified-credit", "family-limited-partnership"],
    match: ["special use", "2032A", "farm"],
  },
  {
    slug: "estate-tax-installment-payments",
    term: "Estate tax installment payments",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "If a closely held business interest makes up more than 35% of the adjusted gross estate, the estate tax on that interest can be paid in installments: interest only for up to 4 years, then up to 10 annual payments.",
    takeaways: [
      "A reduced 2% interest rate applies to part of the deferred tax.",
      "Selling or withdrawing a large part of the business can speed up the payments.",
      "It helps avoid forced sales of the business to pay estate tax.",
    ],
    related: ["special-use-valuation", "unified-credit"],
    match: ["6166", "installment", "closely held"],
  },
  {
    slug: "corporate-return-due-dates",
    term: "Business return due dates",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "A calendar-year C corporation's return (Form 1120) is due April 15, the 15th day of the 4th month after year-end. Partnership (Form 1065) and S corporation (Form 1120-S) returns are due March 15, the 15th day of the 3rd month.",
    takeaways: [
      "A 6-month extension is available on Form 7004.",
      "An extension of time to file isn't an extension of time to pay.",
      "Late partnership and S corporation returns carry a penalty per owner for each month late.",
    ],
    related: ["corporate-estimated-tax", "schedule-k-1", "failure-to-file-penalty"],
    match: ["due date", "Form 1120", "7004", "extension"],
  },
  {
    slug: "qsst-and-esbt",
    term: "QSST and ESBT",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "Besides grantor trusts, two kinds of trusts can hold S corporation stock: a qualified subchapter S trust (QSST) and an electing small business trust (ESBT).",
    takeaways: [
      "A QSST has one income beneficiary, must distribute all its income, and the beneficiary is taxed on the S corporation income.",
      "An ESBT can have several beneficiaries and accumulate income, but pays tax on the S corporation income at the highest individual rate.",
      "Each requires an election, and missing it can end the S election.",
    ],
    related: ["s-corporation-election", "one-class-of-stock", "grantor-trust"],
    match: ["QSST", "ESBT", "trust"],
  },
  {
    slug: "tax-basis-capital-accounts",
    term: "Tax basis capital accounts",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "Partnerships must report each partner's capital account on Schedule K-1 using the tax basis method, which tracks contributions, allocated taxable income and losses, and distributions at tax basis.",
    takeaways: [
      "Tax basis capital differs from book capital accounts kept for allocations, and from outside basis, which also includes liabilities.",
      "A negative tax capital account can signal gain when the partner exits.",
      "Errors in capital account reporting can lead to penalties.",
    ],
    related: ["outside-basis", "schedule-k-1", "special-allocations"],
    match: ["capital account", "tax basis"],
  },
  {
    slug: "partial-liquidation",
    term: "Partial liquidation",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "A distribution in partial liquidation, judged by whether the corporation is genuinely contracting, such as ending a business it has actively run for 5 years, is treated as a sale of stock by noncorporate shareholders, giving capital gain rather than a dividend.",
    takeaways: [
      "The test looks at the corporation, not at changes in each shareholder's ownership.",
      "Corporate shareholders get dividend treatment instead.",
      "The distribution must be made under a plan within a set time.",
    ],
    related: ["stock-redemption", "complete-liquidation"],
    match: ["partial liquidation", "contraction"],
  },
  {
    slug: "section-1045-rollover",
    term: "Section 1045 rollover",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "Gain on qualified small business stock held more than 6 months can be deferred if the proceeds are reinvested in other qualified small business stock within 60 days.",
    takeaways: [
      "The deferred gain reduces the basis of the new stock.",
      "The holding period of the old stock carries over to the new stock.",
      "It helps holders who sell before qualifying for the gain exclusion.",
    ],
    related: ["qualified-small-business-stock", "like-kind-exchange"],
    match: ["1045", "rollover", "60 days"],
  },
  {
    slug: "state-conformity",
    term: "State conformity",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Most states start their income tax calculation from federal taxable income, but they differ in how they follow the federal code: rolling conformity follows it as amended, while static conformity follows it as of a fixed date.",
    takeaways: [
      "Many states decouple from specific provisions, such as bonus depreciation.",
      "New federal law, such as the One Big Beautiful Bill Act, may not apply for state purposes until the state acts.",
      "Differences create state adjustments that must be tracked.",
    ],
    related: ["apportionment", "nexus", "bonus-depreciation"],
    match: ["conformity", "decouple", "rolling"],
  },
  {
    slug: "use-tax",
    term: "Use tax",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Use tax is owed by a buyer on taxable purchases on which the seller didn't collect sales tax, usually purchases from out-of-state sellers. The rate generally equals the sales tax rate.",
    takeaways: [
      "Businesses self-assess and pay use tax on such purchases.",
      "Since the Wayfair decision in 2018, remote sellers with enough sales into a state must collect sales tax, reducing use tax exposure.",
      "Credit is usually given for sales tax paid to another state.",
    ],
    related: ["nexus", "domicile"],
    match: ["use tax", "sales tax", "Wayfair"],
  },
  {
    slug: "treasury-regulations",
    term: "Treasury regulations",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "Treasury regulations are the Treasury Department's official interpretations of the Internal Revenue Code. Final and temporary regulations are binding on taxpayers; proposed regulations aren't.",
    takeaways: [
      "Temporary regulations expire after 3 years.",
      "Legislative regulations are issued under a specific grant of authority from Congress; interpretive regulations explain the Code generally.",
      "Since 2024, courts no longer defer to an agency's interpretation of an ambiguous statute just because it is reasonable.",
    ],
    related: ["revenue-ruling", "substantial-authority", "tax-research-process"],
    match: ["regulation", "proposed", "temporary"],
  },
];
