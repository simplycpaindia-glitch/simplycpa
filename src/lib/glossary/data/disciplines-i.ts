import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, ninth batch. */
export const disciplineTermsI: GlossaryTerm[] = [
  // BAR
  {
    slug: "working-capital",
    term: "Working capital",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Working capital is current assets minus current liabilities. It measures the resources available to fund day-to-day operations and meet short-term obligations.",
    takeaways: [
      "Increases in receivables and inventory use cash, reducing operating cash flow under the indirect method.",
      "Too much working capital can mean idle resources; too little can mean liquidity strain.",
      "Paying a current liability with cash doesn't change working capital.",
    ],
    example: "Current assets of $500,000 and current liabilities of $300,000: working capital is $200,000 and the current ratio about 1.7.",
    related: ["current-ratio", "quick-ratio", "cash-conversion-cycle"],
    match: ["working capital"],
  },
  {
    slug: "gross-margin-ratio",
    term: "Gross margin ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The gross margin ratio is gross profit (net sales minus cost of goods sold) divided by net sales. It shows how much of each sales dollar is left to cover operating expenses and profit.",
    takeaways: [
      "Changes reflect pricing, product mix and production or purchase costs.",
      "Inventory method choices, such as last-in, first-out versus first-in, first-out, affect it.",
      "It is most useful compared with prior periods and competitors.",
    ],
    related: ["common-size-financial-statements", "inventory-turnover"],
    match: ["gross margin", "gross profit"],
  },
  {
    slug: "joint-venture",
    term: "Joint venture",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "A joint venture is an entity jointly controlled by two or more venturers, none of whom controls it alone. The venturers usually account for their investments using the equity method.",
    takeaways: [
      "Joint ventures formed on or after January 1, 2025 measure the assets and liabilities contributed at formation at fair value in their own statements.",
      "Joint control means major decisions need the consent of the venturers.",
      "A venturer with control consolidates instead.",
    ],
    related: ["equity-method", "variable-interest-entity"],
    match: ["joint venture", "joint control"],
  },
  {
    slug: "derivative-characteristics",
    term: "Characteristics of a derivative",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A financial instrument is a derivative if it has one or more underlyings and notional amounts (or payment provisions), requires little or no initial net investment, and can be settled net.",
    takeaways: [
      "An underlying is a variable such as an interest rate, a price or an exchange rate.",
      "Derivatives are measured at fair value on the balance sheet.",
      "Contracts for normal purchases and sales of goods the entity uses can be excluded.",
    ],
    related: ["interest-rate-swap", "forward-contract", "option-contract", "embedded-derivative"],
    match: ["derivative", "underlying", "net settlement"],
  },
  {
    slug: "expected-return-on-plan-assets",
    term: "Expected return on plan assets",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "The expected return on plan assets reduces net periodic pension cost. It is the expected long-term rate of return multiplied by the market-related value of plan assets.",
    takeaways: [
      "The difference between the actual and expected return is an asset gain or loss.",
      "That gain or loss goes to other comprehensive income and is amortized only if it exceeds the corridor.",
      "This smooths the effect of market swings on pension cost.",
    ],
    related: ["net-periodic-pension-cost", "corridor-approach"],
    match: ["expected return", "plan assets"],
  },
  {
    slug: "settlement-and-curtailment",
    term: "Pension settlement and curtailment",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "A settlement irrevocably relieves an employer of a pension obligation, for example by lump-sum payments or buying annuities. A curtailment significantly reduces employees' expected years of future service or eliminates benefits for future service.",
    takeaways: [
      "A settlement triggers recognition of part of the unrecognized gains or losses in accumulated other comprehensive income.",
      "A curtailment, such as closing a plant, triggers recognition of related prior service cost and may cause a gain or loss.",
      "Small settlements below the year's service and interest cost may be ignored by policy.",
    ],
    related: ["projected-benefit-obligation", "prior-service-cost"],
    match: ["settlement", "curtailment", "annuit"],
  },
  {
    slug: "performance-condition",
    term: "Performance condition",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "A performance condition makes vesting of a share-based award depend on the company's own operations, such as reaching an earnings per share or revenue target, as well as on the employee's service.",
    takeaways: [
      "Compensation cost is recognized only if achieving the condition is probable.",
      "It isn't reflected in the grant-date fair value, unlike a market condition.",
      "If the condition isn't met, previously recognized cost is reversed.",
    ],
    related: ["market-condition", "grant-date-fair-value", "restricted-stock-unit"],
    match: ["performance condition", "performance target"],
  },
  {
    slug: "guaranteed-residual-value",
    term: "Guaranteed residual value",
    section: "bar",
    topic: "lease-accounting-lessor",
    definition:
      "A guaranteed residual value is an amount the lessee or a third party promises the leased asset will be worth at the end of the lease, making up any shortfall.",
    takeaways: [
      "A lessee includes in lease payments only the amount it is probable of owing under the guarantee.",
      "A lessor includes the full guarantee, from the lessee or a third party, in its lease receivable.",
      "Guarantees affect lease classification through the present value test.",
    ],
    related: ["unguaranteed-residual-value", "sales-type-lease", "lease-classification-criteria"],
    match: ["guaranteed residual", "residual value guarantee"],
  },
  {
    slug: "internal-rate-of-return",
    term: "Internal rate of return",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "The internal rate of return is the discount rate at which a project's net present value equals zero. A project is acceptable if its internal rate of return exceeds the required rate of return.",
    takeaways: [
      "It assumes cash flows are reinvested at the internal rate of return itself.",
      "Projects with cash flows that change sign more than once can have several rates.",
      "For mutually exclusive projects, net present value is the better guide.",
    ],
    related: ["net-present-value", "payback-period"],
    match: ["internal rate of return", "hurdle rate"],
  },
  {
    slug: "data-cleansing",
    term: "Data cleansing",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Data cleansing is finding and fixing problems in data before analysis, such as duplicates, missing values, inconsistent formats, invalid entries and outliers.",
    takeaways: [
      "It is part of the transform step in extracting, transforming and loading data.",
      "Changes should be documented so the analysis can be reproduced.",
      "Outliers should be investigated, not just deleted, because they may be the most important items.",
    ],
    related: ["extract-transform-load", "types-of-data-analytics"],
    match: ["cleansing", "cleaning", "duplicate", "missing value"],
  },
  {
    slug: "annual-comprehensive-financial-report",
    term: "Annual comprehensive financial report",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "The annual comprehensive financial report is a government's full annual report, with an introductory section, a financial section containing the auditor's report, management's discussion and analysis and the basic financial statements, and a statistical section.",
    takeaways: [
      "The financial section also includes required supplementary information and combining statements.",
      "It goes beyond the minimum required by generally accepted accounting principles.",
      "Many governments prepare it to earn a certificate for excellence in financial reporting.",
    ],
    related: ["government-wide-statement-of-activities", "required-supplementary-information", "net-position"],
    match: ["comprehensive financial report", "statistical section", "introductory section"],
  },
  // ISC
  {
    slug: "authentication-factors",
    term: "Authentication factors",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Authentication factors are categories of proof of identity: something you know (a password), something you have (a phone or token) and something you are (a fingerprint or face).",
    takeaways: [
      "Multi-factor authentication requires factors from two or more different categories.",
      "A password plus a security question is still a single factor.",
      "Biometrics can't be changed if compromised, so they are usually combined with other factors.",
    ],
    related: ["multi-factor-authentication", "single-sign-on"],
    match: ["authentication factor", "something you know", "biometric"],
  },
  {
    slug: "demilitarized-zone",
    term: "Demilitarized zone (network)",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A demilitarized zone is a network segment between the internet and the internal network, separated by firewalls, that hosts public-facing servers such as web and email servers.",
    takeaways: [
      "If a public server is compromised, the attacker still doesn't have direct access to the internal network.",
      "Traffic from it to the internal network is tightly restricted.",
      "It is a form of network segmentation.",
    ],
    related: ["firewall", "network-segmentation"],
    match: ["demilitarized", "DMZ"],
  },
  {
    slug: "endpoint-detection-and-response",
    term: "Endpoint detection and response",
    section: "isc",
    topic: "incident-response",
    definition:
      "Endpoint detection and response (EDR) software runs on laptops, servers and other devices, monitoring their behavior to detect threats that traditional antivirus misses and helping staff investigate and contain them.",
    takeaways: [
      "It can isolate an infected device from the network.",
      "It records activity that helps reconstruct how an attack happened.",
      "Alerts still need people or a managed service to review them.",
    ],
    related: ["malware", "security-information-and-event-management", "incident-response-plan"],
    match: ["endpoint", "EDR", "antivirus"],
  },
  {
    slug: "vulnerability-scanning",
    term: "Vulnerability scanning",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Vulnerability scanning uses automated tools to check systems for known weaknesses, such as missing patches, outdated software and insecure settings.",
    takeaways: [
      "Scans should run regularly and after significant changes.",
      "Results are prioritized by severity and fixed through patch and configuration management.",
      "Penetration testing goes further by trying to exploit the weaknesses.",
    ],
    related: ["penetration-testing", "patch-management"],
    match: ["vulnerability scan", "scanner", "misconfiguration"],
  },
  {
    slug: "data-dictionary",
    term: "Data dictionary",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "A data dictionary describes each data element in a system or database: its name, definition, data type, format, allowed values, source and owner.",
    takeaways: [
      "It helps people use data consistently and interpret reports correctly.",
      "It supports data quality and governance.",
      "Auditors use it to understand fields before analyzing data.",
    ],
    related: ["relational-database", "data-governance", "master-data-management"],
    match: ["data dictionary", "metadata"],
  },
  {
    slug: "data-quality-dimensions",
    term: "Data quality dimensions",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Data quality is commonly measured on dimensions such as accuracy, completeness, consistency, timeliness, validity and uniqueness.",
    takeaways: [
      "Validity means values follow the defined rules, such as a date in the right format.",
      "Uniqueness means no duplicate records.",
      "Poor data quality undermines both reporting and analytics.",
    ],
    related: ["data-governance", "data-cleansing", "input-validation-controls"],
    match: ["data quality", "accuracy", "completeness", "timeliness"],
  },
  {
    slug: "california-consumer-privacy-act",
    term: "California Consumer Privacy Act",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "The California Consumer Privacy Act, as amended by the California Privacy Rights Act, gives California residents rights over personal information that businesses meeting certain size or data thresholds collect about them.",
    takeaways: [
      "Rights include knowing what is collected, deleting and correcting it, and opting out of its sale or sharing.",
      "Consumers can limit the use of sensitive personal information.",
      "It is enforced by a state privacy agency and the attorney general.",
    ],
    related: ["data-subject-rights", "gdpr", "personally-identifiable-information"],
    match: ["California", "CCPA", "opt out"],
  },
  {
    slug: "breach-notification",
    term: "Breach notification",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Breach notification laws require organizations to notify affected individuals, and often regulators, when personal data has been accessed or disclosed without authorization.",
    takeaways: [
      "Under the European Union's data protection rules, the regulator must generally be told within 72 hours.",
      "Health data breaches in the United States must be reported to individuals within 60 days.",
      "Each US state has its own law, with different triggers and deadlines.",
    ],
    related: ["incident-response-plan", "gdpr", "hipaa"],
    match: ["notification", "breach", "72 hours"],
  },
  {
    slug: "user-acceptance-testing",
    term: "User acceptance testing",
    section: "isc",
    topic: "systems-development-life-cycle",
    definition:
      "User acceptance testing is the final testing stage before a system goes live, in which the business users test it against their requirements and formally sign off.",
    takeaways: [
      "It follows unit, integration and system testing done by developers.",
      "It should use realistic data and scenarios, including error cases.",
      "Sign-off is evidence for change management controls.",
    ],
    related: ["systems-development-life-cycle", "change-management", "separation-of-environments"],
    match: ["acceptance test", "sign-off"],
  },
  {
    slug: "separation-of-environments",
    term: "Separation of development, test and production",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Organizations keep separate environments for developing, testing and running (production) systems, so changes are tested before they affect live data and developers can't change production directly.",
    takeaways: [
      "Moving changes into production should be done by someone other than the developer, after approval.",
      "Test data should not include unmasked sensitive production data.",
      "Emergency changes still need to be reviewed after the fact.",
    ],
    related: ["change-management", "segregation-of-duties", "user-acceptance-testing"],
    match: ["production", "development environment", "test environment"],
  },
  {
    slug: "right-to-audit-clause",
    term: "Right-to-audit clause",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "A right-to-audit clause in a vendor contract gives the customer, and often its auditors and regulators, the right to inspect the vendor's records, controls and facilities.",
    takeaways: [
      "It supplements, or substitutes for, assurance reports such as System and Organization Controls (SOC) reports.",
      "Large providers often limit it and offer their SOC reports instead.",
      "It is especially important for critical or regulated outsourcing.",
    ],
    related: ["soc-2-report", "service-level-agreement", "fourth-party-risk"],
    match: ["right to audit", "right-to-audit"],
  },
  {
    slug: "soc-for-cybersecurity",
    term: "SOC for Cybersecurity",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "A System and Organization Controls (SOC) for Cybersecurity examination reports on the description of an organization's cybersecurity risk management program and whether its controls were effective in meeting its cybersecurity objectives.",
    takeaways: [
      "Any organization can have one, not just service organizations.",
      "The report is general use, suited to boards, investors and business partners.",
      "It complements SOC 2 reports, which focus on services provided to customers.",
    ],
    related: ["soc-2-report", "soc-3-report", "trust-services-criteria"],
    match: ["cybersecurity", "risk management program"],
  },
  {
    slug: "cobit",
    term: "COBIT",
    section: "isc",
    topic: "it-audit-and-advisory",
    definition:
      "Control Objectives for Information and Related Technologies (COBIT) is a framework for the governance and management of enterprise information technology, aligning technology with business goals.",
    takeaways: [
      "Governance objectives cover evaluating, directing and monitoring; management objectives cover planning, building, running and monitoring.",
      "It is often used alongside the internal control framework of the Committee of Sponsoring Organizations of the Treadway Commission.",
      "Organizations tailor it to their size and needs.",
    ],
    related: ["it-general-controls", "coso-internal-control", "data-governance"],
    match: ["COBIT", "governance"],
  },
  {
    slug: "order-to-cash",
    term: "Order-to-cash process",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "The order-to-cash process runs from receiving a customer order through credit approval, shipping, billing, recording the receivable and collecting payment.",
    takeaways: [
      "Key controls include credit limits, matching shipping documents to invoices and prenumbered documents.",
      "Separating credit approval, shipping, billing and cash receipts reduces fraud risk.",
      "Revenue cutoff and existence of receivables are the main audit concerns.",
    ],
    related: ["procure-to-pay", "segregation-of-duties", "cutoff"],
    match: ["order-to-cash", "order to cash", "billing"],
  },
  {
    slug: "procure-to-pay",
    term: "Procure-to-pay process",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "The procure-to-pay process runs from a purchase requisition through the purchase order, receiving goods, recording the vendor invoice and paying it.",
    takeaways: [
      "The three-way match compares the purchase order, receiving report and invoice before payment.",
      "Only approved vendors in the vendor master file should be paid.",
      "Purchasing, receiving, recording and paying should be done by different people.",
    ],
    related: ["three-way-match", "order-to-cash", "master-data-management"],
    match: ["procure-to-pay", "purchase order", "requisition"],
  },
  // TCP
  {
    slug: "zero-percent-capital-gains-bracket",
    term: "0% capital gains bracket",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Long-term capital gains and qualified dividends are taxed at 0% to the extent they fall within the lowest bracket, taxable income up to $48,350 for single filers and $96,700 for joint filers in 2025.",
    takeaways: [
      "Taxpayers with low income in a year can sell appreciated assets and reset basis at no tax (gain harvesting).",
      "Gifting appreciated assets to family members in low brackets can use their 0% bracket, subject to the kiddie tax.",
      "Gains above the threshold are taxed at 15% or 20%.",
    ],
    related: ["qualified-dividends", "tax-loss-harvesting", "kiddie-tax"],
    match: ["0%", "zero percent", "gain harvesting"],
  },
  {
    slug: "itemized-deduction-limit-top-bracket",
    term: "Itemized deduction limit for the 37% bracket",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "From 2026, the One Big Beautiful Bill Act reduces itemized deductions for taxpayers in the 37% bracket by 2/37 of the smaller of their itemized deductions and their income above the start of that bracket, capping each deduction's value at about 35 cents per dollar.",
    takeaways: [
      "It replaces the older overall limitation on itemized deductions, which is permanently repealed.",
      "It can favor accelerating large deductions, such as charitable gifts, into 2025.",
      "Taxpayers below the 37% bracket aren't affected.",
    ],
    related: ["itemized-deductions", "bunching-deductions", "charitable-contribution-limits"],
    match: ["2/37", "37%", "itemized deduction limit"],
  },
  {
    slug: "specified-service-trade-or-business",
    term: "Specified service trade or business",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A specified service trade or business is one in fields such as health, law, accounting, actuarial science, consulting, athletics, financial services and brokerage, or one whose main asset is the skill or reputation of its owners or employees.",
    takeaways: [
      "Owners above an income threshold lose the qualified business income deduction for these businesses, after a phase-in range.",
      "Below the threshold, they qualify like any other business.",
      "Engineering and architecture are specifically excluded from the list.",
    ],
    related: ["qualified-business-income-deduction", "reasonable-compensation"],
    match: ["specified service", "SSTB"],
  },
  {
    slug: "section-529-to-roth-rollover",
    term: "529 plan to Roth IRA rollover",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "Since 2024, the beneficiary of a section 529 plan open for at least 15 years can roll up to $35,000 over their lifetime into their own Roth individual retirement account (IRA), tax- and penalty-free.",
    takeaways: [
      "Each year's rollover counts against the annual Roth contribution limit, and the beneficiary needs earned income.",
      "Contributions made in the last 5 years, and their earnings, can't be rolled over.",
      "The Roth income limits don't apply to these rollovers.",
    ],
    related: ["section-529-plan", "roth-ira"],
    match: ["529", "rollover", "$35,000"],
  },
  {
    slug: "catch-up-contributions",
    term: "Catch-up contributions",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "People aged 50 or older can make extra catch-up contributions to 401(k) and similar plans and to individual retirement accounts, above the normal annual limits.",
    takeaways: [
      "From 2025, people aged 60 to 63 can make a larger catch-up to workplace plans.",
      "From 2026, employees whose prior-year wages exceeded a threshold must make workplace catch-ups as Roth contributions.",
      "Catch-up amounts are indexed for inflation.",
    ],
    related: ["traditional-ira", "roth-ira", "solo-401k"],
    match: ["catch-up", "age 50"],
  },
  {
    slug: "qualified-disclaimer",
    term: "Qualified disclaimer",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A qualified disclaimer is a beneficiary's refusal of an inheritance or gift. The property passes as if the person who disclaimed had died first, and the refusal isn't treated as a gift by them.",
    takeaways: [
      "It must be in writing and made within 9 months of the transfer (or of turning 21, if later).",
      "The person can't have accepted any benefit from the property.",
      "The property must pass without the disclaimant directing who gets it.",
    ],
    related: ["portability", "qtip-trust", "unified-credit"],
    match: ["disclaim", "9 months"],
  },
  {
    slug: "corporate-estimated-tax",
    term: "Corporate estimated tax",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "A C corporation expecting to owe $500 or more of tax pays estimated tax in four installments, due on the 15th day of the 4th, 6th, 9th and 12th months of its tax year.",
    takeaways: [
      "Penalties are avoided by paying 100% of the current year's tax or 100% of last year's.",
      "Large corporations, with $1 million or more of taxable income in any of the prior 3 years, can use last year's tax only for the first installment.",
      "The annualized income method can help when income is uneven.",
    ],
    related: ["estimated-tax-payments", "corporate-alternative-minimum-tax"],
    match: ["estimated tax", "installment"],
  },
  {
    slug: "qualified-subchapter-s-subsidiary",
    term: "Qualified subchapter S subsidiary",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "An S corporation that owns 100% of another corporation can elect to treat it as a qualified subchapter S subsidiary. The subsidiary is then disregarded, and its assets, income and deductions are treated as the parent's.",
    takeaways: [
      "The election is made on Form 8869.",
      "It lets a group use separate legal entities while filing one S corporation return.",
      "If the election ends, the subsidiary is treated as a new corporation acquiring the assets.",
    ],
    related: ["s-corporation-election", "check-the-box-regulations"],
    match: ["QSub", "subchapter S subsidiary", "8869"],
  },
  {
    slug: "partnership-audit-regime",
    term: "Centralized partnership audit regime",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "Under the centralized partnership audit regime, the Internal Revenue Service audits partnerships at the partnership level and generally assesses and collects any imputed underpayment from the partnership itself in the year the audit ends.",
    takeaways: [
      "A partnership representative has sole authority to act for the partnership.",
      "The partnership can instead push the adjustments out to the partners from the year under audit.",
      "Partnerships with 100 or fewer eligible partners can elect out each year.",
    ],
    related: ["schedule-k-1", "irs-examinations"],
    match: ["partnership representative", "imputed underpayment", "push-out", "centralized"],
  },
  {
    slug: "section-355-spin-off",
    term: "Section 355 spin-off",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "A corporation can distribute the stock of a subsidiary it controls (at least 80%) to its shareholders tax-free if both companies carry on an active business, the distribution has a business purpose and isn't a device to distribute earnings.",
    takeaways: [
      "Each business must have been actively conducted for at least 5 years.",
      "Divisions take the form of a spin-off, split-off or split-up.",
      "Historic shareholders must keep continuity of interest in both companies.",
    ],
    related: ["section-351", "complete-liquidation", "stock-redemption"],
    match: ["355", "spin-off", "split-off", "split-up"],
  },
  {
    slug: "related-party-like-kind-exchange",
    term: "Related-party like-kind exchange",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "When a like-kind exchange is made with a related party, the deferred gain becomes taxable if either party disposes of the property it received within 2 years after the exchange.",
    takeaways: [
      "Dispositions due to death or involuntary conversion are excepted.",
      "Dispositions shown not to have tax avoidance as a main purpose are also excepted.",
      "The gain is recognized in the year of the later disposition.",
    ],
    related: ["like-kind-exchange", "deferred-like-kind-exchange", "related-party-losses"],
    match: ["related party", "2 years", "two years"],
  },
  {
    slug: "fbar",
    term: "FBAR (foreign account reporting)",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "A Report of Foreign Bank and Financial Accounts (FBAR) must be filed by United States persons with a financial interest in, or signature authority over, foreign financial accounts whose combined value exceeds $10,000 at any time during the year.",
    takeaways: [
      "It is filed electronically with the Treasury's financial crimes network by April 15, with an automatic extension to October 15.",
      "Penalties for failing to file can be severe, especially if willful.",
      "It is separate from Form 8938, which some taxpayers file with their income tax return.",
    ],
    related: ["foreign-earned-income-exclusion", "foreign-tax-credit"],
    match: ["FBAR", "foreign bank", "foreign account", "8938"],
  },
  {
    slug: "throwback-rule",
    term: "Throwback rule",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Under a throwback rule, some states add to their own sales factor the sales of goods shipped to a state where the seller isn't taxable, so the income doesn't escape state tax altogether.",
    takeaways: [
      "Sales can be untaxed in the destination state because of no nexus or Public Law 86-272 protection.",
      "A throwout rule instead removes such sales from the denominator of the sales factor.",
      "Not every state has either rule.",
    ],
    related: ["apportionment", "nexus", "public-law-86-272"],
    match: ["throwback", "throwout", "sales factor"],
  },
  {
    slug: "market-based-sourcing",
    term: "Market-based sourcing",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Under market-based sourcing, a state assigns receipts from services and intangibles to the state where the customer receives the benefit, rather than where the seller performs the work.",
    takeaways: [
      "The older approach, cost of performance, assigns receipts to where most of the costs are incurred.",
      "Most states now use market-based sourcing for services.",
      "It tends to increase tax in states with many customers but little physical presence.",
    ],
    related: ["apportionment", "nexus"],
    match: ["market-based", "cost of performance", "sourcing"],
  },
  {
    slug: "golsen-rule",
    term: "Golsen rule",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "Under the Golsen rule, the Tax Court follows the decisions of the federal circuit court of appeals to which a case would be appealed, usually the taxpayer's home circuit, even if the Tax Court disagrees.",
    takeaways: [
      "As a result, the same issue can be decided differently for taxpayers in different circuits.",
      "Without a ruling from the relevant circuit, the Tax Court applies its own view.",
      "Research should note the taxpayer's circuit when weighing case law.",
    ],
    related: ["tax-court", "tax-research-process", "substantial-authority"],
    match: ["Golsen", "circuit"],
  },
];
