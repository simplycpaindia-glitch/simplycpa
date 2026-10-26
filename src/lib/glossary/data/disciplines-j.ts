import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, tenth batch. */
export const disciplineTermsJ: GlossaryTerm[] = [
  // BAR
  {
    slug: "return-on-investment",
    term: "Return on investment",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Return on investment for a division or investment center is operating income divided by average invested capital (operating assets). It equals profit margin multiplied by asset turnover.",
    takeaways: [
      "Managers judged on it may reject projects that earn more than the cost of capital but less than their current return.",
      "Residual income avoids that problem by measuring income above a required return.",
      "Using net book value of assets can make older divisions look better.",
    ],
    example: "Operating income of $150,000 on average invested capital of $1,000,000: return on investment is 15% (margin 10% × turnover 1.5 on $1,500,000 of sales).",
    related: ["residual-income", "dupont-analysis"],
    match: ["return on investment", "ROI", "invested capital"],
  },
  {
    slug: "accounts-payable-turnover",
    term: "Accounts payable turnover",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Accounts payable turnover is purchases (or cost of goods sold) divided by average accounts payable. Dividing 365 by it gives days payables outstanding, the average time taken to pay suppliers.",
    takeaways: [
      "Paying later conserves cash and shortens the cash conversion cycle.",
      "Stretching payables too far can damage supplier relationships and lose discounts.",
      "A sudden rise in days payables can signal cash strain.",
    ],
    related: ["cash-conversion-cycle", "days-sales-outstanding", "inventory-turnover"],
    match: ["payable turnover", "days payable"],
  },
  {
    slug: "combined-financial-statements",
    term: "Combined financial statements",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "Combined financial statements present the statements of entities under common control, such as companies owned by the same individual, together as if they were one entity, without one being the parent of the others.",
    takeaways: [
      "Intercompany transactions and balances are eliminated, as in consolidation.",
      "The equity of the entities is combined; there is no investment account to eliminate.",
      "They are useful when lenders or buyers deal with the group as a whole.",
    ],
    related: ["consolidation-eliminations", "variable-interest-entity"],
    match: ["combined financial statements", "common control"],
  },
  {
    slug: "hedge-of-a-firm-commitment",
    term: "Hedge of a firm commitment",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A firm commitment is a binding agreement with a fixed price, quantity and timing, such as an order to buy equipment for a set amount of euros. Its exposure to price or exchange rate changes can be hedged as a fair value hedge.",
    takeaways: [
      "Changes in the commitment's fair value are recognized as an asset or liability, offsetting the derivative.",
      "When the purchase occurs, that amount adjusts the carrying amount of the item acquired.",
      "Foreign currency risk on a firm commitment can be hedged as a cash flow hedge instead.",
    ],
    related: ["fair-value-hedge", "cash-flow-hedge", "forward-contract"],
    match: ["firm commitment"],
  },
  {
    slug: "spot-rate",
    term: "Spot, historical and average exchange rates",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "The spot rate is the exchange rate for immediate delivery of a currency. Foreign currency transactions are recorded at the spot rate on the transaction date; the current rate is the spot rate at the balance sheet date.",
    takeaways: [
      "Historical rates are the spot rates when particular transactions or balances arose.",
      "A weighted-average rate can be used for income items that occur evenly during the period.",
      "Forward rates are for delivery at a future date and are used in forward contracts.",
    ],
    related: ["current-rate-method", "temporal-method", "foreign-currency-transaction-gain-or-loss"],
    match: ["spot rate", "historical rate", "average rate", "exchange rate"],
  },
  {
    slug: "multiemployer-plan",
    term: "Multiemployer plan",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "A multiemployer plan is a pension or other benefit plan to which two or more unrelated employers contribute, usually under collective bargaining agreements. Each employer accounts for it like a defined contribution plan.",
    takeaways: [
      "Expense is the contribution required for the period.",
      "Employers disclose their significant plans, including their funded status and any withdrawal liability risk.",
      "Leaving an underfunded plan can trigger a withdrawal liability.",
    ],
    related: ["defined-contribution-plan", "projected-benefit-obligation"],
    match: ["multiemployer", "collective bargaining"],
  },
  {
    slug: "award-modification",
    term: "Modification of share-based awards",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "When a company changes the terms of a share-based award, such as repricing options, the incremental cost is the fair value of the modified award minus the fair value of the original award immediately before the change.",
    takeaways: [
      "Incremental cost for vested awards is recognized immediately; for unvested awards, over the remaining service period.",
      "The original grant-date cost is still recognized if the original award was expected to vest.",
      "Modifications that only change items such as tax withholding may need no accounting.",
    ],
    related: ["grant-date-fair-value", "graded-vesting"],
    match: ["modification", "reprice", "repricing"],
  },
  {
    slug: "output-method",
    term: "Output method",
    section: "bar",
    topic: "revenue-for-specific-industries",
    definition:
      "An output method measures progress on a performance obligation satisfied over time by the value to the customer of goods or services transferred to date, using measures such as units delivered, milestones reached or surveys of work performed.",
    takeaways: [
      "If the seller has a right to invoice an amount that directly matches the value transferred, it can recognize revenue in the amount invoiced.",
      "Units delivered can misstate progress when significant work in process exists.",
      "Input methods, such as costs incurred, are the alternative.",
    ],
    related: ["input-method", "performance-obligation", "loss-contracts"],
    match: ["output method", "units delivered", "milestone"],
  },
  {
    slug: "profitability-index",
    term: "Profitability index",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "The profitability index is the present value of a project's future cash flows divided by the initial investment. A value above 1 means the project has a positive net present value.",
    takeaways: [
      "It helps rank projects when capital is limited (capital rationing).",
      "It gives the same accept-or-reject decision as net present value for a single project.",
      "It can favor small projects with high ratios but little total value.",
    ],
    example: "Cash flows with a present value of $130,000 for an investment of $100,000: the index is 1.3.",
    related: ["net-present-value", "internal-rate-of-return"],
    match: ["profitability index", "capital rationing"],
  },
  {
    slug: "weighted-average-cost-of-capital",
    term: "Weighted-average cost of capital",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "The weighted-average cost of capital is the average return required by a company's lenders and shareholders: the after-tax cost of debt and the cost of equity, weighted by their proportions in the capital structure, usually at market values.",
    takeaways: [
      "The after-tax cost of debt is the interest rate × (1 − tax rate).",
      "It is the hurdle rate for projects of average risk.",
      "Equity costs more than debt because shareholders bear more risk.",
    ],
    example: "60% equity costing 12% and 40% debt at 8% with a 25% tax rate: 0.6 × 12% + 0.4 × 6% = 9.6%.",
    related: ["net-present-value", "residual-income", "debt-to-equity-ratio"],
    match: ["cost of capital", "WACC", "hurdle"],
  },
  {
    slug: "outlier-detection",
    term: "Outlier detection",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Outlier detection identifies observations far from the rest of the data, for example values more than 3 standard deviations from the mean, or more than 1.5 times the interquartile range beyond the quartiles.",
    takeaways: [
      "Outliers can be data errors, unusual but valid transactions or signs of fraud.",
      "They should be investigated before being excluded.",
      "Visualizations such as box plots and scatter plots make them easy to spot.",
    ],
    related: ["data-cleansing", "benfords-law", "data-visualization"],
    match: ["outlier", "standard deviation", "interquartile"],
  },
  {
    slug: "business-type-activities",
    term: "Business-type activities",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "In the government-wide statements, business-type activities, financed mainly by fees charged to users such as water utilities and airports, are reported separately from governmental activities, which are financed mainly by taxes.",
    takeaways: [
      "They usually come from enterprise funds.",
      "Internal service funds are usually reported with governmental activities.",
      "Both columns use the economic resources focus and full accrual basis.",
    ],
    related: ["proprietary-funds", "net-position", "government-wide-statement-of-activities"],
    match: ["business-type", "enterprise fund", "governmental activities"],
  },
  // ISC
  {
    slug: "salting",
    term: "Salting (password hashing)",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Salting adds a random value to each password before it is hashed and stored, so identical passwords produce different hashes and precomputed tables of hashes are useless to attackers.",
    takeaways: [
      "The salt is stored alongside the hash; it doesn't need to be secret.",
      "Password hashing should also use deliberately slow algorithms.",
      "Passwords should never be stored in plain text or with reversible encryption.",
    ],
    related: ["hashing", "brute-force-attack"],
    match: ["salt", "rainbow table"],
  },
  {
    slug: "brute-force-attack",
    term: "Brute-force and credential stuffing attacks",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A brute-force attack tries many possible passwords until one works. Credential stuffing tries username and password pairs stolen from other breaches, exploiting people who reuse passwords.",
    takeaways: [
      "Password spraying tries a few common passwords against many accounts to avoid lockouts.",
      "Defenses include multi-factor authentication, account lockout and rate limits, and unique passwords.",
      "Monitoring for many failed logins helps detect attacks.",
    ],
    related: ["multi-factor-authentication", "salting", "authentication-factors"],
    match: ["brute force", "brute-force", "credential stuffing", "password spraying"],
  },
  {
    slug: "man-in-the-middle-attack",
    term: "Man-in-the-middle attack",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "In a man-in-the-middle attack, an attacker secretly intercepts, and may alter, communications between two parties who believe they are talking directly to each other, for example on an unsecured public network.",
    takeaways: [
      "Encryption with properly verified certificates is the main defense.",
      "Virtual private networks protect traffic on untrusted networks.",
      "Multi-factor authentication limits the value of intercepted passwords.",
    ],
    related: ["public-key-infrastructure", "virtual-private-network", "encryption-in-transit-and-at-rest"],
    match: ["man-in-the-middle", "intercept"],
  },
  {
    slug: "sql-injection",
    term: "SQL injection",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A Structured Query Language (SQL) injection attack enters database commands into an input field, such as a login form, that an application passes to its database without proper checking, letting the attacker read, change or delete data.",
    takeaways: [
      "Parameterized queries, which keep data separate from commands, are the main defense.",
      "Input validation and least-privilege database accounts limit the damage.",
      "Web application firewalls can block common attack patterns.",
    ],
    related: ["input-validation-controls", "relational-database", "least-privilege"],
    match: ["SQL injection", "injection"],
  },
  {
    slug: "fault-tolerance",
    term: "Fault tolerance",
    section: "isc",
    topic: "incident-response",
    definition:
      "Fault tolerance is a system's ability to keep operating when a component fails, achieved through redundancy such as spare power supplies, mirrored disks, duplicate servers and alternative network paths.",
    takeaways: [
      "Removing single points of failure is the goal.",
      "Failover automatically switches to the backup component.",
      "It reduces downtime but doesn't replace backups, which protect against data loss and corruption.",
    ],
    related: ["backup-methods", "hot-site", "recovery-time-objective"],
    match: ["fault toleran", "redundan", "failover", "single point of failure"],
  },
  {
    slug: "virtualization",
    term: "Virtualization",
    section: "isc",
    topic: "information-systems-fundamentals",
    definition:
      "Virtualization uses software called a hypervisor to run several virtual machines, each with its own operating system, on one physical server. It is a foundation of cloud computing.",
    takeaways: [
      "It uses hardware more efficiently and makes systems quick to copy and restore.",
      "A compromised hypervisor can expose every virtual machine on it.",
      "Unmanaged growth in virtual machines (sprawl) creates unpatched, forgotten systems.",
    ],
    related: ["cloud-service-models", "fault-tolerance"],
    match: ["virtualization", "virtual machine", "hypervisor"],
  },
  {
    slug: "anonymization-and-pseudonymization",
    term: "Anonymization and pseudonymization",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Anonymization changes personal data so it can no longer be linked to an individual by any reasonable means. Pseudonymization replaces identifiers with codes, but the data can still be re-identified using separately held information.",
    takeaways: [
      "Under the European Union's data protection rules, anonymized data is outside their scope; pseudonymized data is still personal data.",
      "Combining datasets can re-identify supposedly anonymous data.",
      "Pseudonymization is still a useful safeguard that reduces risk.",
    ],
    related: ["tokenization", "data-minimization", "gdpr"],
    match: ["anonymi", "pseudonymi", "de-identif"],
  },
  {
    slug: "consent-management",
    term: "Consent management",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Consent management is obtaining, recording and honoring individuals' choices about how their personal data is used. Under European rules, consent must be freely given, specific, informed and unambiguous, and as easy to withdraw as to give.",
    takeaways: [
      "Opt-in requires a positive action before data is used; opt-out allows use until the person objects.",
      "Records of when and how consent was given are needed to prove it.",
      "Consent is only one legal basis for processing; others include contracts and legal obligations.",
    ],
    related: ["data-subject-rights", "privacy-by-design", "california-consumer-privacy-act"],
    match: ["consent", "opt-in", "opt in"],
  },
  {
    slug: "nist-cybersecurity-framework",
    term: "NIST Cybersecurity Framework",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "The National Institute of Standards and Technology (NIST) Cybersecurity Framework is a voluntary framework for managing cybersecurity risk. Version 2.0 organizes activities into six functions: Govern, Identify, Protect, Detect, Respond and Recover.",
    takeaways: [
      "Govern was added in version 2.0, released in 2024.",
      "Profiles describe an organization's current and target states.",
      "It is used by organizations of all sizes and sectors.",
    ],
    related: ["iso-27001", "cobit", "incident-response-plan"],
    match: ["NIST", "cybersecurity framework"],
  },
  {
    slug: "iso-27001",
    term: "ISO 27001",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "International Organization for Standardization (ISO) 27001 is the international standard for an information security management system: a risk-based set of policies, processes and controls to protect information.",
    takeaways: [
      "Organizations can be certified against it by accredited certification bodies.",
      "Its annex lists reference controls, with guidance in the companion standard 27002.",
      "Certification covers a defined scope, which users should check.",
    ],
    related: ["nist-cybersecurity-framework", "soc-2-report"],
    match: ["ISO 27001", "27001", "security management system"],
  },
  {
    slug: "vendor-due-diligence",
    term: "Vendor due diligence",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "Vendor due diligence assesses a potential vendor before signing, covering its financial strength, security and privacy controls, compliance, reputation and the data or systems it will access.",
    takeaways: [
      "Vendors are usually tiered by risk, with more scrutiny for critical ones.",
      "Evidence includes questionnaires, assurance reports and certifications.",
      "Due diligence continues as ongoing monitoring throughout the relationship.",
    ],
    related: ["fourth-party-risk", "right-to-audit-clause", "service-level-agreement"],
    match: ["due diligence", "vendor", "onboarding"],
  },
  {
    slug: "audit-trail",
    term: "Audit trail",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "An audit trail is a chronological record of system activity, showing who did what and when, that lets transactions be traced from their source to the financial reports and back.",
    takeaways: [
      "Logs should be protected from alteration and kept for a set period.",
      "Logs are only useful if someone reviews them or alerts are set up.",
      "Auditors use audit trails to test changes, access and transaction processing.",
    ],
    related: ["security-information-and-event-management", "vouching-and-tracing", "chain-of-custody"],
    match: ["audit trail", "log"],
  },
  {
    slug: "record-to-report",
    term: "Record-to-report process",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "The record-to-report process covers closing the books and producing financial statements: recording journal entries, reconciling accounts, consolidating entities and preparing reports.",
    takeaways: [
      "Key controls include a close checklist, review of manual journal entries and timely account reconciliations.",
      "Automation can match transactions and flag unreconciled items.",
      "Weak period-end controls are a common source of material weaknesses.",
    ],
    related: ["order-to-cash", "procure-to-pay", "journal-entry-testing"],
    match: ["record-to-report", "close process", "period-end close"],
  },
  {
    slug: "hire-to-retire",
    term: "Hire-to-retire (payroll) process",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "The hire-to-retire process covers hiring employees, setting their pay, recording time, processing payroll and handling terminations.",
    takeaways: [
      "Human resources and payroll processing should be separate functions.",
      "Pay rate changes need approval, and terminated employees must be removed promptly.",
      "Ghost employees, fictitious people on the payroll, are the classic fraud risk.",
    ],
    related: ["segregation-of-duties", "misappropriation-of-assets", "procure-to-pay"],
    match: ["payroll", "hire-to-retire", "ghost employee"],
  },
  // TCP
  {
    slug: "bargain-sale-to-charity",
    term: "Bargain sale to charity",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A bargain sale to charity is a sale of property to a charity for less than its fair market value. It is treated as partly a sale and partly a gift, with the property's basis split between them in proportion to the sale price over the fair market value.",
    takeaways: [
      "Gain is recognized on the sale part.",
      "The gift part is a charitable contribution.",
      "Selling at basis doesn't avoid gain, because only part of the basis goes to the sale.",
    ],
    example: "Stock worth $100,000 with a basis of $40,000 sold to a charity for $40,000: basis allocated to the sale is $16,000, so gain is $24,000 and the gift is $60,000.",
    related: ["charitable-contribution-limits", "donor-advised-fund"],
    match: ["bargain sale"],
  },
  {
    slug: "five-year-election-529",
    term: "Five-year election for 529 contributions",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "A donor can contribute up to five times the gift tax annual exclusion to a section 529 plan in one year and elect to treat it as made evenly over five years, so it is covered by the annual exclusion.",
    takeaways: [
      "That is $95,000 per beneficiary in 2025, or $190,000 for a married couple splitting gifts.",
      "The election is made on a gift tax return.",
      "If the donor dies within the five years, the part for the remaining years is in the estate.",
    ],
    related: ["section-529-plan", "gift-tax-annual-exclusion", "gift-splitting"],
    match: ["five-year", "superfund", "front-load"],
  },
  {
    slug: "dependent-care-assistance-program",
    term: "Dependent care assistance program",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "Employees can exclude from income up to $5,000 a year ($2,500 if married filing separately) of employer-provided dependent care assistance, often through a flexible spending account. The One Big Beautiful Bill Act raises the limit to $7,500 from 2026.",
    takeaways: [
      "Amounts excluded reduce the expenses that can be used for the child and dependent care credit.",
      "The same rules on qualifying persons and work-related care apply.",
      "Unused flexible spending account amounts may be forfeited at year-end.",
    ],
    related: ["dependent-care-credit", "excludable-fringe-benefits"],
    match: ["dependent care assistance", "flexible spending", "FSA"],
  },
  {
    slug: "trump-account",
    term: "Trump account",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "The One Big Beautiful Bill Act creates Trump accounts, savings accounts for children under 18 that work like individual retirement accounts. Contributions of up to $5,000 a year can be made starting July 4, 2026.",
    takeaways: [
      "The federal government deposits $1,000 for eligible United States citizen children born from 2025 through 2028.",
      "Employers can contribute up to $2,500 a year tax-free, counting toward the $5,000 limit.",
      "Withdrawals generally aren't allowed before the year the child turns 18.",
    ],
    related: ["section-529-plan", "traditional-ira", "kiddie-tax"],
    match: ["Trump account"],
  },
  {
    slug: "designated-roth-account",
    term: "Designated Roth account",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A designated Roth account lets employees make after-tax Roth contributions within a 401(k), 403(b) or governmental 457(b) plan. Qualified distributions, including earnings, are tax-free.",
    takeaways: [
      "Unlike Roth individual retirement accounts, there is no income limit on contributing.",
      "A qualified distribution needs 5 years in the account and age 59½, death or disability.",
      "Since 2024, these accounts need no required minimum distributions during the owner's life.",
    ],
    related: ["roth-ira", "catch-up-contributions", "roth-conversion"],
    match: ["designated Roth", "Roth 401(k)"],
  },
  {
    slug: "simple-ira",
    term: "SIMPLE plan",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A Savings Incentive Match Plan for Employees (SIMPLE) lets employers with 100 or fewer employees and no other plan offer employee salary deferrals, with an employer match of up to 3% of pay or a 2% contribution for all eligible employees.",
    takeaways: [
      "Deferral limits are lower than for 401(k) plans.",
      "Withdrawals in the first 2 years of participation before age 59½ face a 25% additional tax.",
      "It is cheap and simple to run, with no annual filing.",
    ],
    related: ["sep-ira", "solo-401k", "catch-up-contributions"],
    match: ["SIMPLE", "savings incentive"],
  },
  {
    slug: "tax-free-reorganization",
    term: "Tax-free reorganization",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "Corporate reorganizations that meet the tax code's definitions, such as statutory mergers (Type A), stock-for-stock acquisitions (Type B) and stock-for-assets acquisitions (Type C), let corporations and shareholders defer gain.",
    takeaways: [
      "They require continuity of shareholder interest, continuity of business enterprise and a business purpose.",
      "Boot received is taxable to the extent of the gain realized.",
      "A recapitalization (Type E) or a mere change in form or place of incorporation (Type F) can also qualify.",
    ],
    related: ["section-355-spin-off", "section-351", "boot"],
    match: ["reorganization", "Type A", "merger"],
  },
  {
    slug: "s-corporation-late-election-relief",
    term: "S corporation late election relief",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "An S election must generally be filed within 2 months and 15 days after the start of the tax year it is to take effect. Simplified relief allows a late election within 3 years and 75 days of the intended date if there was reasonable cause.",
    takeaways: [
      "All shareholders must have reported consistently with S corporation status.",
      "The late election is filed on Form 2553 with a statement of reasonable cause.",
      "Outside the simplified relief, a private letter ruling is needed.",
    ],
    related: ["s-corporation-election", "s-corporation-termination"],
    match: ["late election", "2553", "reasonable cause"],
  },
  {
    slug: "section-743b-adjustment",
    term: "Section 743(b) adjustment",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "When a partnership interest is sold or inherited and the partnership has a section 754 election in effect, the partnership adjusts the basis of its assets for the new partner only, by the difference between that partner's outside basis and their share of inside basis.",
    takeaways: [
      "The adjustment is mandatory if the partnership has a substantial built-in loss, even without an election.",
      "It lets the new partner benefit from the price paid, for example through extra depreciation.",
      "Other partners' shares of inside basis don't change.",
    ],
    related: ["section-754-election", "inside-basis", "outside-basis"],
    match: ["743", "basis adjustment"],
  },
  {
    slug: "section-338h10-election",
    term: "Section 338(h)(10) election",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "When a corporation buys at least 80% of a target's stock from a consolidated group or from S corporation shareholders, a joint section 338(h)(10) election treats the deal for tax as a sale of the target's assets followed by a liquidation.",
    takeaways: [
      "The buyer gets a stepped-up basis in the target's assets.",
      "The sellers bear tax as if the assets were sold, at a single level.",
      "A section 336(e) election gives a similar result in some deals that don't qualify.",
    ],
    related: ["asset-versus-stock-sale", "section-332-liquidation", "complete-liquidation"],
    match: ["338(h)(10)", "338", "deemed asset sale"],
  },
  {
    slug: "reverse-like-kind-exchange",
    term: "Reverse like-kind exchange",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "In a reverse like-kind exchange, the replacement property is acquired before the old property is sold. An exchange accommodation titleholder holds title to one of the properties until the exchange is completed.",
    takeaways: [
      "Under the safe harbor, the property to be given up must be identified within 45 days.",
      "The exchange must be completed within 180 days.",
      "The taxpayer can't hold both properties directly at the same time.",
    ],
    related: ["deferred-like-kind-exchange", "like-kind-exchange"],
    match: ["reverse exchange", "accommodation titleholder", "parking"],
  },
  {
    slug: "subpart-f-income",
    term: "Subpart F income",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Subpart F income is certain income of a controlled foreign corporation, mainly passive income such as dividends, interest, rents and royalties, plus some related-party sales and services income, that United States shareholders must include in income currently, even if it isn't distributed.",
    takeaways: [
      "It applies to United States shareholders owning at least 10% of the foreign corporation.",
      "Income taxed this way isn't taxed again when later distributed.",
      "High-taxed income can be excluded by election.",
    ],
    related: ["controlled-foreign-corporation", "foreign-tax-credit"],
    match: ["Subpart F", "passive income", "foreign base company"],
  },
  {
    slug: "transfer-pricing",
    term: "Transfer pricing",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Transfer pricing is the pricing of transactions between related entities, such as a parent and its foreign subsidiary. Tax law requires arm's-length prices, and the Internal Revenue Service can reallocate income when prices aren't.",
    takeaways: [
      "Methods include comparable uncontrolled price, resale price, cost plus, comparable profits and profit split.",
      "Contemporaneous documentation helps avoid penalties on adjustments.",
      "An advance pricing agreement can settle the method in advance.",
    ],
    related: ["controlled-foreign-corporation", "apportionment"],
    match: ["transfer pricing", "arm's-length", "arm's length", "482"],
  },
  {
    slug: "small-tax-case-procedure",
    term: "Small tax case procedure",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "Taxpayers can choose the Tax Court's small tax case procedure for disputes of $50,000 or less for each year. Hearings are informal, but decisions can't be appealed and aren't precedent for other cases.",
    takeaways: [
      "Taxpayers often represent themselves.",
      "Researchers shouldn't rely on small case decisions as authority.",
      "Regular Tax Court decisions can be appealed to the circuit courts.",
    ],
    related: ["tax-court", "golsen-rule"],
    match: ["small tax case", "S case", "$50,000"],
  },
];
