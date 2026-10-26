import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, fourth batch. */
export const disciplineTermsD: GlossaryTerm[] = [
  // ── BAR ──
  {
    slug: "inventory-turnover",
    term: "Inventory turnover",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Inventory turnover is cost of goods sold divided by average inventory. It measures how many times a company sells and replaces its inventory in a period.",
    takeaways: [
      "Days in inventory = 365 ÷ inventory turnover.",
      "A falling turnover can signal slow-moving or obsolete stock.",
      "It is one part of the cash conversion cycle.",
    ],
    example: "Cost of goods sold $1,200,000 and average inventory $200,000 give a turnover of 6, about 61 days of inventory.",
    related: ["cash-conversion-cycle", "current-ratio"],
    match: ["inventory turnover", "days in inventory"],
  },
  {
    slug: "debt-to-equity-ratio",
    term: "Debt-to-equity ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The debt-to-equity ratio is total liabilities divided by total stockholders' equity. It measures how much a company relies on creditors' money compared with owners' money.",
    takeaways: [
      "A higher ratio means more financial leverage and risk.",
      "The debt ratio (liabilities ÷ total assets) is a related measure.",
      "Lenders often set a maximum ratio as a loan covenant.",
    ],
    related: ["times-interest-earned", "dupont-analysis"],
    match: ["debt-to-equity", "debt ratio", "leverage"],
  },
  {
    slug: "times-interest-earned",
    term: "Times interest earned ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The times interest earned ratio is earnings before interest and taxes divided by interest expense. It shows how comfortably operating earnings cover interest costs.",
    takeaways: [
      "Add interest and income tax expense back to net income to get the numerator.",
      "A falling ratio, especially with rising debt, signals growing solvency risk.",
      "Lenders often use it as a covenant.",
    ],
    example: "Net income $300,000, tax $100,000 and interest $50,000 give earnings before interest and taxes of $450,000 and a ratio of 9.",
    related: ["debt-to-equity-ratio"],
    match: ["times interest earned", "interest coverage"],
  },
  {
    slug: "cash-conversion-cycle",
    term: "Cash conversion cycle",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The cash conversion cycle measures how long cash is tied up in operations: days of inventory outstanding plus days of sales outstanding minus days of payables outstanding.",
    takeaways: [
      "Collecting from customers faster or paying suppliers later shortens it.",
      "The operating cycle is inventory days plus receivable days, before subtracting payables.",
      "A shorter cycle generally means less need for working capital financing.",
    ],
    example: "Inventory 60 days + receivables 45 days − payables 30 days = 75 days.",
    related: ["inventory-turnover"],
    match: ["cash conversion", "days sales outstanding", "operating cycle"],
  },
  {
    slug: "step-acquisition",
    term: "Step acquisition",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "A step acquisition is a business combination achieved in stages, where the acquirer already held an equity interest in the acquiree before obtaining control.",
    takeaways: [
      "On obtaining control, the previously held interest is remeasured to fair value, with any gain or loss in earnings.",
      "That fair value is included in the goodwill calculation.",
      "Buying more shares after control is obtained is an equity transaction with no gain or loss.",
    ],
    related: ["goodwill", "noncontrolling-interest"],
    match: ["step acquisition", "previously held"],
  },
  {
    slug: "embedded-derivative",
    term: "Embedded derivative",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "An embedded derivative is a feature within a contract (the host) that changes some of the contract's cash flows like a derivative would, such as an equity-indexed return in a debt instrument.",
    takeaways: [
      "It is separated and accounted for as a derivative if it isn't clearly and closely related to the host, the whole contract isn't measured at fair value through net income, and it would be a derivative on its own.",
      "Separated derivatives are measured at fair value, with changes in earnings.",
      "Companies may instead elect fair value for the whole hybrid contract.",
    ],
    related: ["cash-flow-hedge", "fair-value-hedge"],
    match: ["embedded", "bifurcat"],
  },
  {
    slug: "temporal-method",
    term: "Temporal method (remeasurement)",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "The temporal method remeasures a foreign entity's records into its functional currency: monetary items at current exchange rates, and nonmonetary items such as inventory and equipment at historical rates.",
    takeaways: [
      "Remeasurement gains and losses go to net income.",
      "It applies when the books are kept in a currency other than the functional currency, and in highly inflationary economies.",
      "Translation from functional to reporting currency uses the current rate method instead.",
    ],
    related: ["functional-currency", "highly-inflationary-economy", "cumulative-translation-adjustment"],
    match: ["temporal", "remeasure"],
  },
  {
    slug: "corridor-approach",
    term: "Corridor approach (pensions)",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "Under the corridor approach, a pension plan's net actuarial gain or loss in accumulated other comprehensive income is amortized into pension cost only to the extent it exceeds 10% of the greater of the projected benefit obligation or the market-related value of plan assets.",
    takeaways: [
      "The excess is amortized over the average remaining service period of active employees.",
      "Balances are measured at the beginning of the year.",
      "Faster recognition methods are allowed if applied consistently.",
    ],
    example: "A $150,000 net loss with a $1,200,000 obligation: corridor $120,000; $30,000 excess ÷ 10 years = $3,000 a year.",
    related: ["projected-benefit-obligation", "prior-service-cost"],
    match: ["corridor"],
  },
  {
    slug: "market-condition",
    term: "Market condition (share-based payment)",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "A market condition makes a share-based award depend on the company's share price, such as vesting only if the stock reaches $50. It is reflected in the award's grant-date fair value.",
    takeaways: [
      "Compensation cost is recognized if employees provide the required service, even if the market condition is never met.",
      "A performance condition (based on operations, such as an earnings target) works differently: cost is recognized only if achievement is probable.",
      "Valuation models such as Monte Carlo simulations capture market conditions.",
    ],
    related: ["restricted-stock-unit"],
    match: ["market condition", "performance condition"],
  },
  {
    slug: "input-method",
    term: "Input method (cost-to-cost)",
    section: "bar",
    topic: "revenue-for-specific-industries",
    definition:
      "The input method measures progress on a performance obligation satisfied over time by the inputs used, most often costs incurred to date as a share of total expected costs (cost-to-cost).",
    takeaways: [
      "Revenue to date = transaction price × (costs incurred ÷ total estimated costs).",
      "Changes in estimated costs are handled with a cumulative catch-up adjustment.",
      "If the whole contract is expected to make a loss, the full loss is recognized immediately.",
    ],
    example: "A $10,000,000 contract with $3,000,000 of $8,000,000 expected costs incurred is 37.5% complete: revenue of $3,750,000.",
    related: ["performance-obligation", "transaction-price"],
    match: ["cost-to-cost", "input method", "construction"],
  },
  {
    slug: "direct-financing-lease",
    term: "Direct financing lease",
    section: "bar",
    topic: "lease-accounting-lessor",
    definition:
      "A direct financing lease is a lessor's lease that meets none of the sales-type criteria, but where the present value of the lease payments plus any residual value guaranteed by third parties equals substantially all of the asset's fair value and collection is probable.",
    takeaways: [
      "The lessor derecognizes the asset and records a net investment in the lease.",
      "Any selling profit is deferred and recognized over the lease term, not at commencement.",
      "Leases that are neither sales-type nor direct financing are operating leases.",
    ],
    related: ["sales-type-lease"],
    match: ["direct financing"],
  },
  {
    slug: "financial-forecast-vs-projection",
    term: "Financial forecast vs financial projection",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "A financial forecast presents an entity's expected financial results based on the conditions it expects to exist. A financial projection presents results under one or more hypothetical assumptions, such as building a new plant.",
    takeaways: [
      "Forecasts may be for general use; projections are for limited use by parties negotiating directly with the entity.",
      "Both are prospective financial statements that practitioners can examine, compile or apply agreed-upon procedures to.",
      "Neither can be reviewed under the attestation standards.",
    ],
    related: ["break-even-point"],
    match: ["forecast", "projection"],
  },
  {
    slug: "extract-transform-load",
    term: "Extract, transform, load (ETL)",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Extract, transform, load (ETL) is the process of pulling data from source systems, cleaning and restructuring it, and loading it into a destination such as a data warehouse for analysis.",
    takeaways: [
      "Transformation includes fixing formats, removing duplicates and joining tables.",
      "Controls should check that data is complete and accurate after each step, for example by reconciling record counts and totals.",
      "Poor ETL leads to unreliable analytics, however good the analysis.",
    ],
    related: ["benfords-law", "data-warehouse"],
    match: ["ETL", "extract", "transform"],
  },
  {
    slug: "modified-approach",
    term: "Modified approach (infrastructure)",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "The modified approach lets a government skip depreciating eligible infrastructure assets, such as roads and bridges, if it manages them with an asset management system and documents that they are preserved at or above a condition level it has set.",
    takeaways: [
      "Spending to preserve the assets is expensed; additions and improvements are capitalized.",
      "Condition assessments are reported as required supplementary information.",
      "If the condition falls below the set level, the government must go back to depreciation.",
    ],
    related: ["net-position", "government-wide-statement-of-activities"],
    match: ["modified approach", "infrastructure"],
  },

  // ── ISC ──
  {
    slug: "hashing",
    term: "Hashing",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Hashing turns data of any size into a fixed-length value (a hash) using a one-way function. Any change to the data produces a different hash, so hashes are used to check integrity.",
    takeaways: [
      "A hash can't be reversed to recover the original data.",
      "Systems store hashes of passwords rather than the passwords themselves.",
      "Digital signatures sign a hash of the document.",
    ],
    related: ["digital-signature", "asymmetric-encryption"],
    match: ["hash"],
  },
  {
    slug: "digital-signature",
    term: "Digital signature",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A digital signature is created with the signer's private key and verified with the signer's public key. It proves who signed a document (authentication and non-repudiation) and that it hasn't changed (integrity).",
    takeaways: [
      "It doesn't by itself keep the document confidential.",
      "Digital certificates from a certificate authority link a public key to its owner.",
      "It is different from an electronic image of a handwritten signature.",
    ],
    related: ["asymmetric-encryption", "hashing"],
    match: ["digital signature", "non-repudiation"],
  },
  {
    slug: "firewall",
    term: "Firewall",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A firewall is a network security device or program that filters incoming and outgoing traffic according to rules, allowing approved traffic and blocking the rest.",
    takeaways: [
      "It is a preventive control at network boundaries and between internal network segments.",
      "Rules should deny by default and be reviewed regularly.",
      "It doesn't stop attacks carried in allowed traffic, such as phishing emails.",
    ],
    related: ["intrusion-detection-system", "zero-trust"],
    match: ["firewall"],
  },
  {
    slug: "intrusion-detection-system",
    term: "Intrusion detection system (IDS)",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "An intrusion detection system (IDS) monitors network traffic or computer activity for signs of attacks or policy violations and alerts security staff.",
    takeaways: [
      "It is detective: it alerts but doesn't block.",
      "An intrusion prevention system sits in the traffic path and can block threats automatically.",
      "Alerts need prompt review to be useful.",
    ],
    related: ["firewall"],
    match: ["intrusion"],
  },
  {
    slug: "penetration-testing",
    term: "Penetration testing",
    section: "isc",
    topic: "it-audit-and-advisory",
    definition:
      "Penetration testing is an authorized simulated attack in which testers try to exploit weaknesses in systems, networks or people to show what a real attacker could achieve.",
    takeaways: [
      "It goes further than a vulnerability scan, which only identifies known weaknesses.",
      "It needs written authorization and an agreed scope.",
      "Findings should be prioritized and remediation retested.",
    ],
    related: ["firewall"],
    match: ["penetration", "vulnerability"],
  },
  {
    slug: "ransomware",
    term: "Ransomware",
    section: "isc",
    topic: "incident-response",
    definition:
      "Ransomware is malicious software that encrypts an organization's data or systems and demands payment for the key, often also threatening to publish stolen data.",
    takeaways: [
      "The best recovery control is backups kept offline or immutable, with tested restores.",
      "The first response to an outbreak is containment: isolating affected systems.",
      "Prevention includes patching, email filtering, least privilege and multi-factor authentication.",
    ],
    related: ["business-continuity-plan", "recovery-time-objective"],
    match: ["ransomware", "malware"],
  },
  {
    slug: "recovery-point-objective",
    term: "Recovery point objective (RPO)",
    section: "isc",
    topic: "incident-response",
    definition:
      "The recovery point objective (RPO) is the maximum amount of data loss an organization can accept, measured as a period of time before a disruption.",
    takeaways: [
      "It determines how often data must be backed up or replicated.",
      "An objective of 15 minutes means data must be copied at least every 15 minutes.",
      "The recovery time objective, by contrast, is how quickly systems must be restored.",
    ],
    related: ["recovery-time-objective", "hot-site"],
    match: ["recovery point", "RPO"],
  },
  {
    slug: "hot-site",
    term: "Hot site",
    section: "isc",
    topic: "incident-response",
    definition:
      "A hot site is a fully equipped backup facility with current data that can take over operations within hours or less after a disaster.",
    takeaways: [
      "A warm site has equipment but needs data restored and set up, taking days.",
      "A cold site has space and power but little or no equipment, and takes longest.",
      "The choice depends on the recovery time objective and cost.",
    ],
    related: ["recovery-point-objective", "business-continuity-plan"],
    match: ["hot site", "warm site", "cold site"],
  },
  {
    slug: "gdpr",
    term: "General Data Protection Regulation (GDPR)",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "The General Data Protection Regulation (GDPR) is the European Union law governing personal data. It applies to organizations in the European Union and to those elsewhere that offer goods or services to, or monitor, people in the European Union.",
    takeaways: [
      "Breaches that pose a risk to individuals must generally be reported to the supervisory authority within 72 hours.",
      "Individuals have rights such as access, rectification, erasure and data portability.",
      "Fines can reach 4% of worldwide annual turnover or €20 million, whichever is higher.",
    ],
    related: ["data-minimization", "personally-identifiable-information"],
    match: ["GDPR", "General Data Protection"],
  },
  {
    slug: "hipaa",
    term: "Health Insurance Portability and Accountability Act (HIPAA)",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "The Health Insurance Portability and Accountability Act (HIPAA) privacy and security rules protect individuals' health information held by covered entities (health plans, health care clearinghouses and certain health care providers) and their business associates.",
    takeaways: [
      "Business associates, such as billing or information technology service firms, must sign agreements to protect the information.",
      "The security rule requires administrative, physical and technical safeguards.",
      "Breaches of unsecured health information must be notified.",
    ],
    related: ["personally-identifiable-information", "gdpr"],
    match: ["HIPAA", "health information"],
  },
  {
    slug: "three-way-match",
    term: "Three-way match",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "A three-way match compares the purchase order, the receiving report and the vendor's invoice before an invoice is approved for payment.",
    takeaways: [
      "It prevents paying for goods that weren't ordered or received, or at the wrong price.",
      "Differences above a set tolerance are held for review.",
      "Many systems perform it automatically as an application control.",
    ],
    related: ["segregation-of-duties", "input-validation-controls"],
    match: ["three-way match", "purchase order", "receiving report"],
  },
  {
    slug: "input-validation-controls",
    term: "Input validation controls",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "Input validation controls are automated checks that test data as it is entered, rejecting or flagging entries that are incomplete, invalid or unreasonable.",
    takeaways: [
      "Examples: limit (reasonableness) checks, validity checks, field format checks, completeness checks and check digits.",
      "Batch controls such as record counts and hash totals check groups of transactions.",
      "They are application controls that depend on effective general controls.",
    ],
    related: ["three-way-match", "it-general-controls"],
    match: ["limit check", "validity check", "check digit", "hash total", "edit check"],
  },
  {
    slug: "computer-assisted-audit-techniques",
    term: "Computer-assisted audit techniques (CAATs)",
    section: "isc",
    topic: "it-audit-and-advisory",
    definition:
      "Computer-assisted audit techniques (CAATs) are tools and methods auditors use to test data and systems with technology, such as generalized audit software, test data, parallel simulation and embedded audit modules.",
    takeaways: [
      "Test data runs auditor-created transactions through the client's programs.",
      "Parallel simulation reprocesses real client data with the auditor's own program and compares the results.",
      "They make testing entire populations practical.",
    ],
    related: ["penetration-testing"],
    match: ["test data", "parallel simulation", "audit software", "embedded audit"],
  },
  {
    slug: "bridge-letter",
    term: "Bridge letter",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "A bridge (gap) letter is a statement from a service organization's management covering the period between the end of its latest controls report and a customer's year-end, saying whether controls have changed.",
    takeaways: [
      "It comes from management, not the service auditor, so it gives less assurance than the report.",
      "Customers weigh it with the length of the gap and their own monitoring controls.",
      "A long gap may need other procedures.",
    ],
    related: ["soc-1-report", "carve-out-method"],
    match: ["bridge letter", "gap letter"],
  },

  // ── TCP ──
  {
    slug: "tax-loss-harvesting",
    term: "Tax-loss harvesting",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Tax-loss harvesting means selling investments at a loss to offset capital gains, and up to $3,000 a year of ordinary income, while staying invested in similar assets.",
    takeaways: [
      "The wash sale rule disallows the loss if substantially identical securities are bought within 30 days before or after the sale.",
      "Unused net capital losses carry forward indefinitely for individuals.",
      "It is most valuable against short-term gains, which are taxed at ordinary rates.",
    ],
    related: ["wash-sale", "capital-asset"],
    match: ["harvest", "capital loss"],
  },
  {
    slug: "bunching-deductions",
    term: "Bunching deductions",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Bunching is concentrating deductible payments, such as charitable gifts or elective medical costs, into alternate years so itemized deductions exceed the standard deduction in those years, with the standard deduction taken in the others.",
    takeaways: [
      "It suits taxpayers whose itemized deductions are close to the standard deduction each year.",
      "A donor-advised fund lets a taxpayer bunch several years of gifts into one year while granting to charities over time.",
      "From 2026 the 0.5% floor on itemizers' charitable deductions slightly favors bunching.",
    ],
    related: ["donor-advised-fund", "standard-deduction", "itemized-deductions"],
    match: ["bunching"],
  },
  {
    slug: "donor-advised-fund",
    term: "Donor-advised fund",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A donor-advised fund is an account held by a sponsoring public charity. The donor gets an immediate charitable deduction when contributing and can recommend grants to charities later.",
    takeaways: [
      "Contributions are irrevocable, and the sponsoring charity has legal control.",
      "Donating appreciated stock to one avoids capital gains tax and is deductible at fair value.",
      "Qualified charitable distributions from individual retirement accounts can't go to one.",
    ],
    related: ["bunching-deductions", "qualified-charitable-distribution"],
    match: ["donor-advised"],
  },
  {
    slug: "qualified-opportunity-zone",
    term: "Qualified opportunity zone",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "A qualified opportunity zone is a designated low-income area. Investors who reinvest capital gains in a qualified opportunity fund within 180 days can defer the gain, and appreciation on investments held at least 10 years can be excluded.",
    takeaways: [
      "The One Big Beautiful Bill Act made the program permanent, with rolling zone designations.",
      "New deferral and basis rules apply to investments made after 2026.",
      "The fund must invest mainly in qualifying zone property or businesses.",
    ],
    related: ["cost-segregation"],
    match: ["opportunity zone"],
  },
  {
    slug: "cost-segregation",
    term: "Cost segregation",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "A cost segregation study reclassifies parts of a building, such as electrical systems for equipment, fixtures and land improvements, from long-lived real property into shorter-lived personal property and land improvements.",
    takeaways: [
      "The reclassified assets are depreciated over 5, 7 or 15 years and can qualify for bonus depreciation.",
      "It accelerates deductions but increases depreciation recapture as ordinary income on sale.",
      "It is typically done by engineers or specialists.",
    ],
    related: ["bonus-depreciation", "macrs", "depreciation-recapture"],
    match: ["cost segregation"],
  },
  {
    slug: "charitable-remainder-trust",
    term: "Charitable remainder trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A charitable remainder trust pays an annuity or a fixed percentage of its value to noncharitable beneficiaries, often the donor, for life or a term of years, and then the remainder goes to charity.",
    takeaways: [
      "The donor gets a charitable deduction for the present value of the remainder interest.",
      "The trust can sell appreciated assets without immediate tax, spreading the gain over the payments.",
      "The remainder must be worth at least 10% of the initial value, and the payout must be 5% to 50% a year.",
    ],
    related: ["donor-advised-fund", "grantor-retained-annuity-trust"],
    match: ["charitable remainder"],
  },
  {
    slug: "irrevocable-life-insurance-trust",
    term: "Irrevocable life insurance trust (ILIT)",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "An irrevocable life insurance trust (ILIT) owns a life insurance policy on the grantor's life so the death benefit is kept out of the grantor's taxable estate.",
    takeaways: [
      "The grantor must keep no incidents of ownership, such as the right to change beneficiaries.",
      "An existing policy transferred to the trust within three years of death is pulled back into the estate.",
      "Premium gifts usually qualify for the annual exclusion through Crummey withdrawal powers.",
    ],
    related: ["crummey-power", "portability"],
    match: ["life insurance trust", "ILIT", "incidents of ownership"],
  },
  {
    slug: "crummey-power",
    term: "Crummey power",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A Crummey power gives a trust beneficiary a temporary right to withdraw a contribution to the trust. It turns a gift of a future interest into a present interest, so it qualifies for the gift tax annual exclusion.",
    takeaways: [
      "Beneficiaries must be notified and given a reasonable time to withdraw, often 30 days.",
      "It is commonly used with irrevocable life insurance trusts.",
      "Gifts to a trust without such rights generally don't qualify for the annual exclusion.",
    ],
    related: ["irrevocable-life-insurance-trust", "gift-tax-annual-exclusion"],
    match: ["Crummey", "present interest"],
  },
  {
    slug: "generation-skipping-transfer-tax",
    term: "Generation-skipping transfer tax",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "The generation-skipping transfer tax is a separate flat tax, at the top estate tax rate, on transfers to people two or more generations below the transferor (skip persons), such as grandchildren, beyond an exemption equal to the basic exclusion amount.",
    takeaways: [
      "It applies in addition to any gift or estate tax.",
      "If a grandchild's parent has died, the grandchild generally isn't treated as a skip person.",
      "Its exemption is not portable between spouses.",
    ],
    related: ["portability", "gift-tax-annual-exclusion"],
    match: ["generation-skipping", "skip person"],
  },
  {
    slug: "section-704c-allocation",
    term: "Section 704(c) allocation",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "Section 704(c) requires that built-in gain or loss on property a partner contributes to a partnership be allocated to that partner when the property is sold or depreciated, so the gain or loss isn't shifted to other partners.",
    takeaways: [
      "Only appreciation after the contribution is shared under the partnership agreement.",
      "It also affects how depreciation on contributed property is allocated.",
      "Distributing contributed property to another partner within seven years can trigger the gain.",
    ],
    related: ["section-754-election", "outside-basis"],
    match: ["704(c)", "built-in gain", "contributed property"],
  },
  {
    slug: "hot-assets",
    term: "Hot assets (Section 751)",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "Hot assets are a partnership's unrealized receivables and inventory items. When a partner sells a partnership interest, the part of the gain attributable to them is ordinary income rather than capital gain.",
    takeaways: [
      "Unrealized receivables include depreciation recapture that would arise if the assets were sold.",
      "This stops partners turning ordinary income into capital gain by selling their interests.",
      "Distributions that change partners' shares of hot assets can also trigger ordinary income.",
    ],
    related: ["outside-basis", "depreciation-recapture"],
    match: ["hot asset", "751", "unrealized receivable"],
  },
  {
    slug: "complete-liquidation",
    term: "Complete liquidation (corporation)",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "In a complete liquidation, a corporation distributes all its assets to its shareholders and goes out of existence. The corporation recognizes gain or loss as if it had sold its assets, and shareholders recognize gain or loss on their stock.",
    takeaways: [
      "Shareholders treat what they receive as payment for their stock (capital gain or loss) and take a fair market value basis in property received.",
      "A parent owning at least 80% of a subsidiary can liquidate it tax-free under Section 332, taking over the subsidiary's basis and tax attributes.",
      "Some losses on distributions to related parties are disallowed.",
    ],
    related: ["stock-redemption", "earnings-and-profits"],
    match: ["liquidat"],
  },
  {
    slug: "apportionment",
    term: "Apportionment (state income tax)",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Apportionment divides a multistate business's income among the states where it has nexus, using a formula based on factors such as property, payroll and sales in each state.",
    takeaways: [
      "Many states now use a single sales factor, which shifts tax toward the states where customers are.",
      "Throwback rules assign sales to states where the seller isn't taxable back to the state they were shipped from.",
      "Nonbusiness income, such as some investment income, may be allocated to one state instead.",
    ],
    related: ["nexus", "pass-through-entity-tax"],
    match: ["apportion", "sales factor", "throwback"],
  },
  {
    slug: "controlled-foreign-corporation",
    term: "Controlled foreign corporation (CFC)",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "A controlled foreign corporation (CFC) is a foreign corporation more than 50% owned, by vote or value, by US shareholders, each of whom owns at least 10%.",
    takeaways: [
      "US shareholders may have to include certain income of a CFC currently, before it is distributed, under the anti-deferral rules.",
      "The former global intangible low-taxed income regime was renamed net CFC tested income from 2026.",
      "Ownership through family members and related entities counts toward the tests.",
    ],
    related: ["foreign-tax-credit"],
    match: ["controlled foreign", "CFC"],
  },
];
