import type { GlossaryTerm } from "../types";

/** REG terms, eighth batch. */
export const regTermsH: GlossaryTerm[] = [
  {
    slug: "dependent-care-credit",
    term: "Child and dependent care credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The child and dependent care credit is a nonrefundable credit for care costs that let the taxpayer (and spouse) work or look for work. For 2025 it is 20% to 35% of up to $3,000 of expenses for one qualifying person or $6,000 for two or more.",
    takeaways: [
      "Qualifying persons are children under 13 and a dependent or spouse unable to care for themselves.",
      "Expenses can't exceed the lower earned income of the two spouses.",
      "From 2026 the One Big Beautiful Bill Act raises the top credit rate to 50%, phasing down as income rises.",
    ],
    related: ["child-tax-credit", "dependent", "refundable-credit"],
    match: ["dependent care", "child care"],
  },
  {
    slug: "residential-clean-energy-credit",
    term: "Residential clean energy credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The residential clean energy credit gave homeowners a 30% credit for installing solar panels, solar water heaters, small wind turbines, geothermal heat pumps and battery storage. The One Big Beautiful Bill Act ends it for expenditures made after December 31, 2025.",
    takeaways: [
      "The energy efficient home improvement credit, for items such as insulation and heat pumps, ends on the same date.",
      "Unused residential clean energy credit could be carried forward.",
      "Expenditures are generally treated as made when installation is completed.",
    ],
    related: ["clean-vehicle-credit", "refundable-credit"],
    match: ["clean energy", "solar", "energy efficient"],
  },
  {
    slug: "clean-vehicle-credit",
    term: "Clean vehicle credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The clean vehicle credit gave up to $7,500 for buying a new qualifying electric vehicle and up to $4,000 for a used one. The One Big Beautiful Bill Act ends it for vehicles acquired after September 30, 2025.",
    takeaways: [
      "The credit for commercial clean vehicles ends on the same date.",
      "Income limits and vehicle price caps applied while it was available.",
      "Buyers could transfer the credit to the dealer to reduce the purchase price.",
    ],
    related: ["residential-clean-energy-credit", "car-loan-interest-deduction"],
    match: ["clean vehicle", "electric vehicle"],
  },
  {
    slug: "excludable-fringe-benefits",
    term: "Excludable fringe benefits",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Certain fringe benefits employers provide are excluded from employees' gross income, including no-additional-cost services, qualified employee discounts, working condition fringes, de minimis fringes, qualified transportation fringes and on-site athletic facilities.",
    takeaways: [
      "No-additional-cost services and employee discounts must be offered without favoring highly compensated employees.",
      "A working condition fringe is one the employee could have deducted as a business expense, such as a company car for business use.",
      "Benefits that don't qualify are included in wages at fair market value.",
    ],
    related: ["gross-income", "group-term-life-insurance", "two-percent-shareholder-fringe-benefits"],
    match: ["fringe", "de minimis", "working condition", "employee discount"],
  },
  {
    slug: "qualified-scholarship",
    term: "Qualified scholarship",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "A scholarship received by a degree candidate is excluded from gross income to the extent it is used for tuition, fees, and books, supplies and equipment required for courses.",
    takeaways: [
      "Amounts used for room, board and travel are taxable.",
      "Payments for teaching, research or other services required as a condition of the award are taxable as wages.",
      "Expenses paid with tax-free scholarships can't also be used for education credits.",
    ],
    related: ["gross-income", "american-opportunity-credit"],
    match: ["scholarship", "fellowship"],
  },
  {
    slug: "group-term-life-insurance",
    term: "Group-term life insurance",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Employees can exclude the cost of employer-provided group-term life insurance coverage up to $50,000. The cost of coverage above $50,000, based on an Internal Revenue Service table, is included in wages.",
    takeaways: [
      "Any amount the employee pays toward the coverage reduces the taxable amount.",
      "If the plan favors key employees, they lose the exclusion.",
      "Death benefits paid to beneficiaries are generally excluded from income.",
    ],
    related: ["excludable-fringe-benefits", "life-insurance-taxation"],
    match: ["group-term", "$50,000", "life insurance"],
  },
  {
    slug: "social-security-benefits-taxation",
    term: "Taxation of Social Security benefits",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Up to 85% of Social Security benefits are included in gross income, depending on provisional income: modified adjusted gross income plus tax-exempt interest plus half of the benefits.",
    takeaways: [
      "Nothing is taxable if provisional income is $25,000 or less ($32,000 joint).",
      "Up to 50% is taxable between those amounts and $34,000 ($44,000 joint), and up to 85% above them.",
      "These thresholds aren't adjusted for inflation.",
    ],
    related: ["gross-income", "senior-deduction"],
    match: ["Social Security benefit", "provisional income", "85%"],
  },
  {
    slug: "corporate-alternative-minimum-tax",
    term: "Corporate alternative minimum tax",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "The corporate alternative minimum tax is a 15% minimum tax on adjusted financial statement income (book income with certain adjustments), applying to corporations whose average annual adjusted financial statement income over three years exceeds $1 billion.",
    takeaways: [
      "The corporation pays the greater of its regular tax and the minimum tax.",
      "Minimum tax paid creates a credit that can reduce regular tax in later years.",
      "It has applied to tax years beginning after 2022.",
    ],
    related: ["alternative-minimum-tax", "schedule-m-1"],
    match: ["corporate alternative minimum", "financial statement income", "book income"],
  },
  {
    slug: "partnership-tax-year",
    term: "Partnership tax year",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "A partnership must generally use the tax year of its partners who together own more than 50% of its profits and capital. If there is no such majority, it uses the tax year of all its principal partners (5% or more), and otherwise the year that gives the least aggregate deferral.",
    takeaways: [
      "A different year is allowed with a business purpose, such as a natural business year.",
      "A section 444 election allows a different year with limited deferral and required payments.",
      "The rules stop partners from deferring income by choosing a year ending soon after theirs.",
    ],
    related: ["general-partnership", "guaranteed-payment"],
    match: ["tax year", "least aggregate deferral", "majority interest"],
  },
  {
    slug: "unified-credit",
    term: "Unified credit (basic exclusion amount)",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "Gift and estate taxes share a single lifetime exemption, the basic exclusion amount, sheltered by the unified credit. It is $13,990,000 for 2025, and the One Big Beautiful Bill Act raises it to $15,000,000 for 2026, indexed for inflation after that.",
    takeaways: [
      "Taxable lifetime gifts use up the exemption that would otherwise apply at death.",
      "A surviving spouse can use a deceased spouse's unused exemption through portability.",
      "The top estate and gift tax rate is 40%.",
    ],
    related: ["portability", "gift-tax-annual-exclusion", "generation-skipping-transfer-tax"],
    match: ["unified credit", "exclusion amount", "exemption"],
  },
  {
    slug: "limited-partnership",
    term: "Limited partnership",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "A limited partnership has at least one general partner, who manages the business and has unlimited personal liability, and at least one limited partner, whose liability is limited to their investment. It is formed by filing a certificate with the state.",
    takeaways: [
      "Limited partners generally don't manage the business.",
      "Under older law, a limited partner who takes part in control can lose limited liability.",
      "A general partner can be a corporation or limited liability company to limit liability.",
    ],
    related: ["general-partnership", "limited-liability-company", "family-limited-partnership"],
    match: ["limited partner", "general partner"],
  },
  {
    slug: "mailbox-rule",
    term: "Mailbox rule",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Under the mailbox rule, an acceptance sent by an authorized means is effective when it is sent, even if it is delayed or lost. Revocations of offers and rejections take effect only when received.",
    takeaways: [
      "The offer can override the rule by requiring that acceptance be received.",
      "If the offeree sends a rejection and then an acceptance, whichever arrives first wins.",
      "An option contract's acceptance is effective only when received.",
    ],
    related: ["consideration", "promissory-estoppel"],
    match: ["mailbox", "acceptance", "revocation"],
  },
  {
    slug: "liquidated-damages",
    term: "Liquidated damages",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "A liquidated damages clause sets in advance the damages payable for a breach. It is enforceable if actual damages were hard to estimate when the contract was made and the amount is reasonable.",
    takeaways: [
      "An amount that is a penalty rather than a reasonable estimate isn't enforceable.",
      "When the clause is enforceable, it replaces actual damages.",
      "Construction contracts often use a daily amount for late completion.",
    ],
    related: ["anticipatory-repudiation", "consideration"],
    match: ["liquidated damages", "penalty"],
  },
  {
    slug: "chapter-11-reorganization",
    term: "Chapter 11 reorganization",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Chapter 11 bankruptcy lets a business, or an individual, keep operating while it restructures its debts under a plan of reorganization approved by creditors and confirmed by the court.",
    takeaways: [
      "The debtor usually stays in control of its business as debtor in possession.",
      "Creditors vote on the plan by class; the court can confirm it over some objections.",
      "Confirmation generally discharges debts except as the plan provides.",
    ],
    related: ["chapter-7-bankruptcy", "automatic-stay"],
    match: ["Chapter 11", "reorganization", "debtor in possession"],
  },
  {
    slug: "attachment-of-security-interest",
    term: "Attachment of a security interest",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "A security interest attaches, becoming enforceable against the debtor, when the creditor gives value, the debtor has rights in the collateral, and there is a security agreement signed or authenticated by the debtor describing the collateral (or the creditor takes possession).",
    takeaways: [
      "Attachment makes the interest enforceable against the debtor; perfection makes it effective against other creditors.",
      "A purchase-money security interest in consumer goods is perfected automatically on attachment.",
      "The agreement can cover after-acquired property.",
    ],
    related: ["perfection-of-security-interest", "suretyship"],
    match: ["attach", "security agreement", "collateral"],
  },
  {
    slug: "claim-for-refund",
    term: "Claim for refund",
    section: "reg",
    topic: "federal-tax-procedures-and-penalties",
    definition:
      "A claim for refund of overpaid tax, such as an amended individual return on Form 1040-X, must be filed within 3 years after the return was filed or 2 years after the tax was paid, whichever is later.",
    takeaways: [
      "Under the 3-year rule, the refund is limited to tax paid in the 3 years before the claim plus any filing extension.",
      "Claims for bad debts and worthless securities have 7 years.",
      "A return filed early is treated as filed on its due date.",
    ],
    related: ["statute-of-limitations", "tax-court"],
    match: ["refund", "amended return", "1040-X"],
  },
];
