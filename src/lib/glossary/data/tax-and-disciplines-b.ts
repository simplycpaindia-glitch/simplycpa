import type { GlossaryTerm } from "../types";

/** REG and discipline-section terms, second batch. */
export const regTermsB: GlossaryTerm[] = [
  {
    slug: "gross-income",
    term: "Gross income",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Gross income is all income from whatever source derived, unless a specific provision excludes it. It includes wages, business income, interest, dividends, rents, gains and gambling winnings.",
    takeaways: [
      "Exclusions include gifts and inheritances, life insurance death benefits and municipal bond interest.",
      "Income is taxable even if it isn't received in cash, for example bartered services.",
      "Adjustments then reduce gross income to adjusted gross income.",
    ],
    related: ["adjusted-gross-income"],
    match: ["gross income", "excluded", "includ"],
  },
  {
    slug: "standard-deduction",
    term: "Standard deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "The standard deduction is a fixed amount, based on filing status, that individuals can deduct instead of itemizing. For 2026 it is $16,100 for single filers, $32,200 for married couples filing jointly and $24,150 for heads of household.",
    takeaways: [
      "Additional amounts apply to taxpayers who are 65 or older or blind.",
      "If one spouse filing separately itemizes, the other must also itemize.",
      "The One Big Beautiful Bill Act made the higher standard deduction permanent and added a separate deduction for people aged 65 and over for 2025–2028.",
    ],
    related: ["itemized-deductions", "adjusted-gross-income"],
    match: ["standard deduction"],
  },
  {
    slug: "itemized-deductions",
    term: "Itemized deductions",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Itemized deductions are specific personal expenses that individuals can deduct instead of the standard deduction, such as medical expenses above a floor, state and local taxes up to a cap, home mortgage interest and charitable contributions.",
    takeaways: [
      "Medical expenses are deductible only above 7.5% of adjusted gross income.",
      "From 2026, charitable deductions for itemizers are reduced by a floor of 0.5% of the contribution base, and the benefit is limited for taxpayers in the 37% bracket.",
      "Miscellaneous itemized deductions subject to the old 2% floor are permanently eliminated.",
    ],
    related: ["standard-deduction"],
    match: ["itemized"],
  },
  {
    slug: "head-of-household",
    term: "Head of household",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "Head of household is a filing status for unmarried taxpayers who pay more than half the cost of keeping up a home that is the main home of a qualifying person for more than half the year.",
    takeaways: [
      "It gives a larger standard deduction and wider tax brackets than single status.",
      "A dependent parent qualifies the taxpayer even if the parent lives in a separate home that the taxpayer pays for.",
      "A married taxpayer living apart from a spouse for the last six months of the year may be 'considered unmarried' for this purpose.",
    ],
    match: ["head of household", "filing status"],
  },
  {
    slug: "refundable-credit",
    term: "Refundable tax credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "A refundable tax credit can reduce tax below zero, so any excess is paid to the taxpayer as a refund. A nonrefundable credit can only reduce tax to zero.",
    takeaways: [
      "Refundable examples: the earned income credit, the additional child tax credit and 40% of the American Opportunity credit.",
      "Nonrefundable examples: the Lifetime Learning credit and the child and dependent care credit.",
      "Credits reduce tax dollar for dollar, while deductions reduce taxable income.",
    ],
    match: ["refundable", "credit"],
  },
  {
    slug: "boot",
    term: "Boot",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Boot is cash or other property received in an otherwise tax-deferred exchange, such as a like-kind exchange or a transfer to a corporation, that doesn't qualify for deferral. Gain is recognized up to the boot received.",
    takeaways: [
      "Being relieved of a liability counts as receiving boot.",
      "Receiving boot never causes a loss to be recognized.",
      "The new property's basis is reduced by boot received and increased by gain recognized.",
    ],
    related: ["like-kind-exchange", "section-351"],
    match: ["boot"],
  },
  {
    slug: "section-179",
    term: "Section 179 expensing",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "Section 179 lets a business elect to deduct the cost of qualifying property, mainly tangible personal property, in the year it is placed in service instead of depreciating it. The One Big Beautiful Bill Act raised the limit to $2.5 million for 2025 ($2,560,000 for 2026).",
    takeaways: [
      "The limit is reduced dollar for dollar when qualifying purchases exceed an indexed threshold ($4 million for 2025).",
      "The deduction can't exceed taxable income from the business, so it can't create a loss; the excess carries forward.",
      "It is applied before bonus depreciation.",
    ],
    related: ["bonus-depreciation", "macrs"],
    match: ["179"],
  },
  {
    slug: "bonus-depreciation",
    term: "Bonus depreciation",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "Bonus depreciation is an additional first-year deduction for qualified property. The One Big Beautiful Bill Act permanently restored 100% bonus depreciation for property acquired after January 19, 2025.",
    takeaways: [
      "Unlike Section 179, it has no dollar limit and can create a net operating loss.",
      "It applies automatically unless the taxpayer elects out, by class of property.",
      "Order: Section 179 first, then bonus depreciation, then regular depreciation on any remaining basis.",
    ],
    related: ["section-179", "macrs"],
    match: ["bonus depreciation"],
  },
  {
    slug: "macrs",
    term: "Modified Accelerated Cost Recovery System (MACRS)",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "The Modified Accelerated Cost Recovery System (MACRS) is the federal tax depreciation system. It assigns property to recovery classes with set lives, methods and conventions, and ignores salvage value.",
    takeaways: [
      "Personal property uses the half-year convention, or mid-quarter if more than 40% is placed in service in the last quarter.",
      "Residential rental property is depreciated over 27.5 years and nonresidential real property over 39 years, straight-line, with the mid-month convention.",
      "Land is never depreciated.",
    ],
    related: ["section-179", "bonus-depreciation"],
    match: ["MACRS", "convention", "recovery period"],
  },
  {
    slug: "guaranteed-payment",
    term: "Guaranteed payment",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "A guaranteed payment is a payment by a partnership to a partner for services or the use of capital that is determined without regard to the partnership's income.",
    takeaways: [
      "The partnership deducts it if it is an ordinary business expense; the partner reports it as ordinary income.",
      "Payments for services are subject to self-employment tax.",
      "They are not qualified business income for the 20% deduction.",
    ],
    related: ["outside-basis"],
    match: ["guaranteed payment"],
  },
  {
    slug: "dividends-received-deduction",
    term: "Dividends received deduction (DRD)",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "The dividends received deduction (DRD) lets a C corporation deduct part or all of the dividends it receives from other US corporations, reducing multiple layers of corporate tax.",
    takeaways: [
      "50% if the recipient owns less than 20%, 65% if it owns 20% to under 80%, and 100% for members of an affiliated group.",
      "The 50% and 65% deductions can be limited by taxable income.",
      "Holding period rules apply, and individuals can't claim it.",
    ],
    related: ["earnings-and-profits"],
    match: ["dividends received", "DRD"],
  },
  {
    slug: "net-operating-loss",
    term: "Net operating loss (NOL)",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "A net operating loss (NOL) arises when allowable business deductions exceed income for the year. Losses from tax years after 2017 are generally carried forward indefinitely and can offset up to 80% of taxable income in a later year.",
    takeaways: [
      "There is generally no carryback, except for certain farming losses.",
      "An ownership change of more than 50 percentage points limits the use of a corporation's net operating losses each year.",
      "For individuals, mainly business losses (not personal deductions) create a net operating loss.",
    ],
    match: ["net operating loss", "NOL", "carryforward"],
  },
  {
    slug: "accuracy-related-penalty",
    term: "Accuracy-related penalty",
    section: "reg",
    topic: "federal-tax-procedures-and-penalties",
    definition:
      "The accuracy-related penalty is 20% of an underpayment of tax caused by negligence, a substantial understatement of income tax or a substantial valuation misstatement. It rises to 40% for gross valuation misstatements.",
    takeaways: [
      "For individuals, an understatement is substantial if it exceeds the greater of 10% of the correct tax or $5,000.",
      "It can be avoided for positions with substantial authority, or with a reasonable basis and adequate disclosure.",
      "Reasonable cause and good faith are also a defense.",
    ],
    related: ["statute-of-limitations"],
    match: ["accuracy-related", "penalt", "understatement"],
  },
  {
    slug: "statute-of-limitations",
    term: "Statute of limitations (tax assessment)",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "The statute of limitations limits how long the Internal Revenue Service has to assess additional tax: generally three years from the later of the return's due date or the date it was filed.",
    takeaways: [
      "It is six years if gross income is understated by more than 25%.",
      "There is no limit for a fraudulent return or when no return is filed.",
      "Refund claims generally must be filed within three years of filing or two years of paying the tax, whichever is later.",
    ],
    related: ["accuracy-related-penalty"],
    match: ["statute of limitations", "assess"],
  },
  {
    slug: "unrelated-business-income",
    term: "Unrelated business income",
    section: "reg",
    topic: "exempt-organizations-basics",
    definition:
      "Unrelated business income is income an exempt organization earns from a trade or business it regularly carries on that isn't substantially related to its exempt purpose. It is taxed even though the organization is otherwise exempt.",
    takeaways: [
      "Exceptions include businesses run mainly by volunteers, selling donated goods, and most passive income such as dividends, interest and royalties.",
      "There is a $1,000 specific deduction, and a return (Form 990-T) is required when gross unrelated business income is $1,000 or more.",
      "Debt-financed property can make otherwise passive income taxable.",
    ],
    match: ["unrelated business", "UBTI", "UBI"],
  },
  {
    slug: "apparent-authority",
    term: "Apparent authority",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "Apparent authority exists when a principal's words or conduct lead a third party to reasonably believe that an agent has authority to act, even though the agent has no actual authority.",
    takeaways: [
      "The principal is bound to the third party, but may have a claim against the agent.",
      "It arises from the principal's conduct, not from the agent's own statements.",
      "After the agency ends, third parties who dealt with the agent may need notice to end apparent authority.",
    ],
    match: ["apparent authority", "agent", "principal"],
  },
  {
    slug: "statute-of-frauds",
    term: "Statute of frauds",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "The statute of frauds requires certain contracts to be evidenced by a signed writing to be enforceable, including contracts for interests in land, contracts that can't be performed within one year, promises to pay another's debt, and sales of goods for $500 or more.",
    takeaways: [
      "The writing must be signed by the party against whom enforcement is sought.",
      "Exceptions include specially manufactured goods and goods that have been paid for or accepted.",
      "Between merchants, a written confirmation can satisfy it if the recipient doesn't object within 10 days.",
    ],
    match: ["statute of frauds", "writing"],
  },
];

export const disciplineTermsB: GlossaryTerm[] = [
  {
    slug: "dupont-analysis",
    term: "DuPont analysis",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "DuPont analysis breaks return on equity into net profit margin, asset turnover and the equity multiplier, showing whether a change in return comes from profitability, efficiency or leverage.",
    takeaways: [
      "Return on equity = (net income ÷ sales) × (sales ÷ total assets) × (total assets ÷ equity).",
      "A rise in return driven only by the equity multiplier means more leverage and more risk.",
      "Return on assets is the product of the first two components.",
    ],
    match: ["DuPont", "return on equity", "ROE"],
  },
  {
    slug: "fair-value-hedge",
    term: "Fair value hedge",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A fair value hedge protects against changes in the fair value of a recognized asset or liability, or a firm commitment, that are attributable to a particular risk.",
    takeaways: [
      "Gains and losses on both the hedging derivative and the hedged item (for the hedged risk) are recognized in earnings, so they largely offset.",
      "The hedged item's carrying amount is adjusted for changes in fair value from the hedged risk.",
      "Hedges of forecasted transactions are cash flow hedges, not fair value hedges.",
    ],
    related: ["cash-flow-hedge"],
    match: ["fair value hedge"],
  },
  {
    slug: "cumulative-translation-adjustment",
    term: "Cumulative translation adjustment",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "The cumulative translation adjustment is the accumulated amount, in other comprehensive income, that results from translating a foreign subsidiary's statements from its functional currency into the parent's reporting currency.",
    takeaways: [
      "It arises because assets and liabilities are translated at the current rate, income at average rates and equity at historical rates.",
      "It is reclassified into net income when the foreign operation is sold or substantially liquidated.",
      "Remeasurement gains and losses, by contrast, go straight to net income.",
    ],
    related: ["functional-currency", "other-comprehensive-income"],
    match: ["translation adjustment", "current rate"],
  },
  {
    slug: "prior-service-cost",
    term: "Prior service cost",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "Prior service cost is the increase in a pension obligation that results when a plan is amended to give employees credit for service already performed.",
    takeaways: [
      "It is recognized in other comprehensive income when the plan is amended.",
      "It is then amortized into pension cost over the remaining service period of the employees expected to benefit.",
      "A plan amendment that reduces benefits creates a prior service credit instead.",
    ],
    related: ["projected-benefit-obligation"],
    match: ["prior service"],
  },
  {
    slug: "sales-type-lease",
    term: "Sales-type lease",
    section: "bar",
    topic: "lease-accounting-lessor",
    definition:
      "A sales-type lease is a lessor's lease that meets any of the five lease classification criteria. The lessor derecognizes the underlying asset, recognizes a net investment in the lease and recognizes any selling profit or loss at commencement.",
    takeaways: [
      "The net investment is the lease receivable plus the present value of the unguaranteed residual asset.",
      "Interest income is then earned on the net investment over the lease term.",
      "If collection isn't probable, the asset isn't derecognized and payments received are a deposit liability.",
    ],
    related: ["finance-lease"],
    match: ["sales-type", "lessor", "net investment"],
  },
  {
    slug: "break-even-point",
    term: "Break-even point",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "The break-even point is the level of sales at which total revenue equals total costs, so operating income is zero. It equals fixed costs divided by the contribution margin per unit (in units) or by the contribution margin ratio (in dollars).",
    takeaways: [
      "Contribution margin = selling price − variable cost.",
      "The margin of safety is how far sales can fall before reaching break-even.",
      "To find the sales needed for a target profit, add the target to fixed costs.",
    ],
    example: "Price $50, variable cost $30 and fixed costs $200,000: break-even is 10,000 units, or $500,000 of sales.",
    match: ["break-even", "contribution margin"],
  },
  {
    slug: "restricted-stock-unit",
    term: "Restricted stock unit (RSU)",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "A restricted stock unit (RSU) is a promise to deliver company shares to an employee once vesting conditions, usually continued service, are met. For equity-classified units, compensation cost is the grant-date fair value of the shares, recognized over the service period.",
    takeaways: [
      "With cliff vesting after four years, a quarter of the total cost is recognized each year.",
      "Forfeitures are either estimated or recognized as they occur, by policy election.",
      "Units settled in cash are liabilities and are remeasured each reporting date.",
    ],
    match: ["restricted stock", "RSU", "grant-date"],
  },
  {
    slug: "encumbrance",
    term: "Encumbrance",
    section: "bar",
    topic: "governmental-fund-accounting",
    definition:
      "An encumbrance is a commitment, such as a purchase order or contract, that reserves part of a governmental fund's budgeted appropriation until the goods or services are received.",
    takeaways: [
      "When goods arrive, the encumbrance is reversed and an expenditure is recorded at the actual amount.",
      "Encumbrances outstanding at year-end are not expenditures or liabilities.",
      "They help prevent spending beyond appropriations.",
    ],
    related: ["modified-accrual-basis"],
    match: ["encumbrance", "budgetary"],
  },
  {
    slug: "least-privilege",
    term: "Principle of least privilege",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "The principle of least privilege means each user, system or process is given only the access it needs to perform its role, and no more.",
    takeaways: [
      "It limits the damage from mistakes, malware and compromised accounts.",
      "Access should be reviewed periodically and removed when roles change.",
      "Privileged accounts need the tightest restriction and monitoring.",
    ],
    related: ["segregation-of-duties", "multi-factor-authentication"],
    match: ["least privilege", "access"],
  },
  {
    slug: "asymmetric-encryption",
    term: "Asymmetric (public key) encryption",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Asymmetric encryption uses a pair of mathematically related keys: a public key that anyone can have and a private key that only its owner holds. Data encrypted with one key can only be decrypted with the other.",
    takeaways: [
      "For confidentiality, the sender encrypts with the recipient's public key.",
      "For a digital signature, the sender signs with their own private key, and anyone can verify it with the sender's public key.",
      "Symmetric encryption uses one shared key; it is faster but the key must be exchanged securely.",
    ],
    related: ["multi-factor-authentication"],
    match: ["encrypt", "public key", "private key"],
  },
  {
    slug: "business-continuity-plan",
    term: "Business continuity plan",
    section: "isc",
    topic: "incident-response",
    definition:
      "A business continuity plan sets out how an organization will keep its critical operations running during and after a disruption, covering people, facilities, suppliers, communications and technology.",
    takeaways: [
      "The disaster recovery plan is the information technology part of it.",
      "Priorities and recovery objectives come from a business impact analysis.",
      "Plans must be tested, for example with tabletop exercises, and kept up to date.",
    ],
    related: ["recovery-time-objective"],
    match: ["continuity", "disaster recovery"],
  },
  {
    slug: "data-governance",
    term: "Data governance",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Data governance is the framework of policies, roles, standards and processes for managing an organization's data, so it is accurate, secure, consistent and used appropriately.",
    takeaways: [
      "Data owners decide who may use data and how; data custodians apply the technical controls.",
      "It covers data quality, classification, retention, privacy and lineage.",
      "Without it, data lakes and analytics become unreliable.",
    ],
    match: ["data governance", "data owner", "data quality"],
  },
  {
    slug: "personally-identifiable-information",
    term: "Personally identifiable information (PII)",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Personally identifiable information (PII) is any information that can identify a specific individual, alone or combined with other data, such as a name, government identification number, email address or biometric record.",
    takeaways: [
      "Privacy principles such as data minimization and purpose limitation govern how it is collected and used.",
      "Data that has been pseudonymized but can be re-identified is still personal data.",
      "Breaches involving it often trigger legal notification duties.",
    ],
    match: ["personally identifiable", "PII", "personal data", "privacy"],
  },
  {
    slug: "change-management",
    term: "Change management (information technology)",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Change management is the general control process that ensures changes to programs, systems and configurations are requested, approved, tested and documented before they reach production.",
    takeaways: [
      "Developers should not be able to move their own changes into production.",
      "Emergency changes are logged and approved after the fact.",
      "Effective change management lets auditors rely on automated controls across periods.",
    ],
    related: ["it-general-controls"],
    match: ["change management", "program change"],
  },
  {
    slug: "robotic-process-automation",
    term: "Robotic process automation (RPA)",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "Robotic process automation (RPA) uses software 'bots' to perform repetitive, rule-based tasks that people would otherwise do through the same screens, such as entering invoices or reconciling accounts.",
    takeaways: [
      "It suits high-volume, stable, structured processes.",
      "Bots should have their own credentials with least-privilege access and logged activity.",
      "Changes to bot scripts need change management, because a faulty bot repeats the same error at scale.",
    ],
    match: ["robotic", "RPA", "bot"],
  },
  {
    slug: "carve-out-method",
    term: "Carve-out method",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "Under the carve-out method, a service organization's controls report excludes the controls of a subservice organization it uses, and instead describes the controls the subservice organization is expected to have.",
    takeaways: [
      "User entities must find other evidence about the carved-out controls, such as the subservice organization's own report.",
      "Under the inclusive method, the subservice organization's controls are included and tested instead.",
      "The expected controls are called complementary subservice organization controls.",
    ],
    related: ["soc-1-report", "trust-services-criteria"],
    match: ["carve-out", "subservice"],
  },
  {
    slug: "qualified-charitable-distribution",
    term: "Qualified charitable distribution",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A qualified charitable distribution is a transfer made directly from an individual retirement account to a qualifying charity by an owner aged 70½ or older, up to an annual inflation-indexed limit. It is excluded from the owner's income.",
    takeaways: [
      "It counts toward the owner's required minimum distribution.",
      "It isn't also deductible, but it helps taxpayers who take the standard deduction.",
      "Gifts to donor-advised funds don't qualify.",
    ],
    related: ["required-minimum-distribution"],
    match: ["qualified charitable distribution", "QCD"],
  },
  {
    slug: "portability",
    term: "Portability (deceased spousal unused exclusion)",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "Portability lets a surviving spouse use the unused part of a deceased spouse's estate and gift tax exclusion (the deceased spousal unused exclusion amount), in addition to their own.",
    takeaways: [
      "It must be elected on the deceased spouse's estate tax return, even if no tax is owed; simplified late elections are available in some cases.",
      "The generation-skipping transfer tax exemption is not portable.",
      "Unlike a credit shelter trust, it doesn't shelter later appreciation in the surviving spouse's estate.",
    ],
    related: ["step-up-in-basis"],
    match: ["portability", "DSUE", "unused exclusion"],
  },
  {
    slug: "grantor-retained-annuity-trust",
    term: "Grantor retained annuity trust (GRAT)",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A grantor retained annuity trust (GRAT) is an irrevocable trust that pays the grantor a fixed annuity for a set term, after which the remaining assets pass to beneficiaries. The taxable gift is only the present value of the remainder.",
    takeaways: [
      "It transfers wealth tax-efficiently when the assets grow faster than the federal interest rate used to value the gift.",
      "A 'zeroed-out' GRAT sets the annuity so the taxable gift is close to zero.",
      "If the grantor dies during the term, the assets are generally included in the grantor's estate.",
    ],
    related: ["portability"],
    match: ["GRAT", "annuity trust"],
  },
  {
    slug: "section-754-election",
    term: "Section 754 election",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "A Section 754 election lets a partnership adjust the basis of its assets when a partnership interest is sold or inherited, or when certain distributions are made, so inside basis better reflects what was paid.",
    takeaways: [
      "On a transfer, the adjustment applies only to the incoming partner.",
      "Once made, the election applies to all later years unless revoked with the Internal Revenue Service's consent.",
      "Some adjustments are mandatory even without the election, such as when there is a substantial built-in loss.",
    ],
    related: ["outside-basis"],
    match: ["754", "inside basis"],
  },
  {
    slug: "reasonable-compensation",
    term: "Reasonable compensation (S corporations)",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "S corporation shareholder-employees must be paid reasonable compensation for their services before taking distributions. Wages are subject to payroll taxes, while distributions are not.",
    takeaways: [
      "The Internal Revenue Service can recharacterize distributions as wages if pay is unreasonably low.",
      "Reasonableness is judged against what similar businesses pay for similar services.",
      "Higher wages reduce qualified business income but can raise the wage limit on the 20% deduction.",
    ],
    related: ["qualified-business-income-deduction"],
    match: ["reasonable compensation", "salary", "wages"],
  },
  {
    slug: "accumulated-earnings-tax",
    term: "Accumulated earnings tax",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "The accumulated earnings tax is a 20% penalty tax on a C corporation's earnings retained beyond the reasonable needs of the business, to avoid shareholder-level tax on dividends.",
    takeaways: [
      "A minimum accumulated earnings credit of $250,000 ($150,000 for certain personal service corporations) is allowed.",
      "Documented plans for expansion, debt repayment or working capital support reasonable needs.",
      "It is assessed by the Internal Revenue Service, not reported on the regular return.",
    ],
    match: ["accumulated earnings"],
  },
  {
    slug: "nexus",
    term: "Nexus",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Nexus is the connection between a business and a state that is enough for the state to impose a tax on it, or to require it to collect sales tax.",
    takeaways: [
      "Since the Supreme Court's 2018 decision in South Dakota v. Wayfair, economic presence (such as sales into the state above a threshold) can create sales tax nexus.",
      "Public Law 86-272 protects sellers of tangible goods whose only in-state activity is soliciting orders from state net income tax.",
      "Once nexus exists, income is divided among states by apportionment.",
    ],
    match: ["nexus", "Wayfair", "86-272"],
  },
  {
    slug: "section-351",
    term: "Section 351 transfer",
    section: "tcp",
    topic: "entity-choice-and-structuring",
    definition:
      "Section 351 allows property to be transferred to a corporation in exchange for its stock without recognizing gain or loss, if the transferors control at least 80% of the corporation immediately after the exchange.",
    takeaways: [
      "Gain is recognized to the extent of boot received, or if liabilities assumed exceed the basis of the property transferred.",
      "Services are not property, so stock received for services is taxable.",
      "The shareholder's stock basis is the basis of the property transferred, adjusted for boot and gain.",
    ],
    related: ["boot"],
    match: ["351", "80% control"],
  },
];
