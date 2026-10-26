import type { GlossaryTerm } from "../types";

/** REG terms, twelfth batch. */
export const regTermsL: GlossaryTerm[] = [
  {
    slug: "filing-requirements",
    term: "Filing requirements",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "An individual generally must file a federal income tax return if gross income is at least the standard deduction for their filing status, including any extra amount for age or blindness.",
    takeaways: [
      "Anyone with net self-employment earnings of $400 or more must file.",
      "Dependents have separate thresholds based on earned and unearned income.",
      "People below the threshold may still file to claim a refund of withholding or a refundable credit.",
    ],
    related: ["standard-deduction", "dependent", "self-employment-tax"],
    match: ["filing requirement", "must file", "$400"],
  },
  {
    slug: "excess-social-security-withholding",
    term: "Excess Social Security withholding",
    section: "reg",
    topic: "employee-benefits-and-payroll-tax",
    definition:
      "An employee who works for more than one employer may have Social Security tax withheld on combined wages above the annual wage base. The excess is claimed as a refundable credit on the employee's return.",
    takeaways: [
      "If a single employer over-withholds, the employee gets the refund from that employer, not on the return.",
      "There is no wage base for Medicare tax, so it is never over-withheld this way.",
      "Each employer still pays its own matching share without a refund.",
    ],
    related: ["fica-taxes", "refundable-credit"],
    match: ["excess Social Security", "wage base", "two employers"],
  },
  {
    slug: "gifts-and-inheritances-exclusion",
    term: "Gifts and inheritances",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Property received as a gift or inheritance is excluded from the recipient's gross income. Income the property earns afterward, such as dividends or rent, is taxable to the recipient.",
    takeaways: [
      "Gifts generally take the donor's basis; inherited property generally takes fair market value at death.",
      "Payments from an employer called gifts are usually taxable compensation.",
      "Any gift tax is the donor's responsibility.",
    ],
    related: ["gifted-property-basis", "step-up-in-basis", "gross-income"],
    match: ["gift", "inheritance", "bequest"],
  },
  {
    slug: "tax-exempt-interest",
    term: "Tax-exempt interest",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Interest on bonds issued by state and local governments is generally excluded from federal gross income.",
    takeaways: [
      "Interest on certain private activity bonds is a preference item for the alternative minimum tax.",
      "Tax-exempt interest counts toward provisional income when taxing Social Security benefits.",
      "Interest on money borrowed to buy tax-exempt bonds isn't deductible.",
    ],
    related: ["gross-income", "social-security-benefits-taxation", "alternative-minimum-tax"],
    match: ["tax-exempt interest", "municipal", "state and local bond"],
  },
  {
    slug: "below-market-loans",
    term: "Below-market loans",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "When a loan between related parties, such as family members, an employer and employee, or a corporation and shareholder, charges little or no interest, interest is imputed at the applicable federal rate.",
    takeaways: [
      "The lender reports the imputed interest as income; the forgone interest is also treated as a gift, compensation or dividend.",
      "Loans of $10,000 or less are generally exempt.",
      "For gift loans of $100,000 or less, imputed interest is limited to the borrower's net investment income, and is zero if that is $1,000 or less.",
    ],
    related: ["imputed-interest", "constructive-dividend", "shareholder-loans"],
    match: ["below-market", "interest-free", "applicable federal rate"],
  },
  {
    slug: "investment-interest-expense",
    term: "Investment interest expense",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Interest on money borrowed to buy investment property is deductible as an itemized deduction, but only up to net investment income. The excess carries forward indefinitely.",
    takeaways: [
      "Qualified dividends and long-term capital gains count as investment income only if the taxpayer elects to have them taxed at ordinary rates.",
      "Interest used to buy tax-exempt bonds isn't deductible at all.",
      "Interest relating to passive activities follows the passive loss rules instead.",
    ],
    related: ["itemized-deductions", "qualified-dividends", "passive-activity-loss"],
    match: ["investment interest", "net investment income"],
  },
  {
    slug: "business-and-nonbusiness-bad-debts",
    term: "Business and nonbusiness bad debts",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "A business bad debt is an ordinary deduction when it becomes wholly or partly worthless. A nonbusiness bad debt, such as a personal loan to a friend, is a short-term capital loss and only when wholly worthless.",
    takeaways: [
      "The taxpayer must have basis in the debt; a cash-basis taxpayer can't deduct unpaid fees or wages never reported as income.",
      "For tax, the specific charge-off method is used, not an allowance.",
      "A loan to family must be a real debt, not a disguised gift.",
    ],
    related: ["capital-loss-limitation", "direct-write-off-method"],
    match: ["bad debt", "worthless", "nonbusiness"],
  },
  {
    slug: "listed-property",
    term: "Listed property",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "Listed property, such as passenger automobiles, is property that lends itself to personal use. If business use is 50% or less, it must be depreciated using the straight-line alternative system, with no bonus depreciation or section 179 expensing.",
    takeaways: [
      "If business use later falls to 50% or less, excess depreciation previously taken is recaptured as income.",
      "Depreciation on passenger autos is also capped at annual dollar limits.",
      "Business use must be supported by records such as mileage logs.",
    ],
    related: ["macrs", "section-179", "bonus-depreciation"],
    match: ["listed property", "automobile", "business use"],
  },
  {
    slug: "section-197-intangibles",
    term: "Section 197 intangibles",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "Purchased intangibles such as goodwill, going concern value, customer lists, covenants not to compete, franchises, trademarks and licenses are amortized for tax on a straight-line basis over 15 years, starting in the month acquired.",
    takeaways: [
      "Most self-created intangibles aren't covered.",
      "The 15-year period applies regardless of the asset's actual useful life.",
      "Goodwill amortized for tax but not for books creates a temporary difference.",
    ],
    related: ["goodwill", "temporary-difference", "asset-versus-stock-sale"],
    match: ["197", "15 years", "covenant not to compete"],
  },
  {
    slug: "transfers-between-spouses",
    term: "Transfers between spouses",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "No gain or loss is recognized on transfers of property between spouses, or between former spouses when incident to a divorce. The recipient takes the transferor's basis.",
    takeaways: [
      "A transfer is incident to divorce if it occurs within 1 year after the marriage ends, or is related to its ending.",
      "The carryover basis applies even if the property's value is below basis.",
      "The rule doesn't apply if the recipient spouse is a nonresident alien.",
    ],
    related: ["alimony", "adjusted-basis", "gifted-property-basis"],
    match: ["spouse", "divorce", "1041"],
  },
  {
    slug: "fiduciary-accounting-income",
    term: "Fiduciary accounting income",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "Fiduciary accounting income is a trust's income as defined by the trust document and state law, as opposed to taxable income. It determines what a trust must pay to income beneficiaries.",
    takeaways: [
      "Capital gains are usually allocated to principal, not income.",
      "A simple trust must distribute all its fiduciary accounting income each year.",
      "It is one of three measures, with taxable income and distributable net income.",
    ],
    related: ["simple-and-complex-trusts", "distributable-net-income", "trust-tax-rates"],
    match: ["accounting income", "principal and income"],
  },
  {
    slug: "estate-tax-return",
    term: "Estate tax return",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "The estate tax return, Form 706, is due 9 months after death, with a 6-month extension available. It must be filed if the gross estate plus adjusted taxable gifts exceeds the basic exclusion amount.",
    takeaways: [
      "It must also be filed to elect portability of the unused exemption to a surviving spouse.",
      "A simplified late portability election is available for up to 5 years after death.",
      "An extension of time to file doesn't extend the time to pay.",
    ],
    related: ["unified-credit", "portability", "gross-estate"],
    match: ["706", "estate tax return", "9 months"],
  },
  {
    slug: "public-support-test",
    term: "Public support test",
    section: "reg",
    topic: "exempt-organizations-basics",
    definition:
      "A charitable organization avoids private foundation status if it is publicly supported, generally by receiving at least one-third of its support from the general public, government and other public charities, measured over 5 years.",
    takeaways: [
      "An organization with at least 10% public support can qualify under a facts-and-circumstances test.",
      "Churches, schools and hospitals are public charities by the nature of their activities.",
      "Large gifts from one donor count as public support only up to 2% of total support.",
    ],
    related: ["private-foundation", "form-990", "exemption-application"],
    match: ["public support", "one-third", "public charity"],
  },
  {
    slug: "member-managed-and-manager-managed-llc",
    term: "Member-managed and manager-managed LLCs",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "In a member-managed limited liability company (LLC), all members manage the business and act as its agents. In a manager-managed LLC, designated managers run it, and members aren't agents just because they are members.",
    takeaways: [
      "The operating agreement sets out management, voting and profit sharing.",
      "Those who manage owe fiduciary duties of loyalty and care.",
      "Members' liability is limited in both forms.",
    ],
    related: ["limited-liability-company", "general-partnership", "piercing-the-corporate-veil"],
    match: ["member-managed", "manager-managed", "operating agreement"],
  },
  {
    slug: "promoter-liability",
    term: "Promoter liability",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "Promoters arrange the formation of a corporation. They are personally liable on contracts made before incorporation unless the other party releases them, for example through a novation with the corporation.",
    takeaways: [
      "The corporation becomes liable only if it adopts the contract after formation.",
      "Adoption alone doesn't release the promoter.",
      "Promoters owe fiduciary duties to the corporation and its future shareholders.",
    ],
    related: ["piercing-the-corporate-veil", "business-judgment-rule"],
    match: ["promoter", "preincorporation", "novation"],
  },
  {
    slug: "risk-of-loss",
    term: "Risk of loss (sales of goods)",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Under the rules for sales of goods, risk of loss passes as the parties agree. Otherwise, in a shipment contract it passes when the seller delivers the goods to the carrier; in a destination contract, when the goods are tendered at the destination.",
    takeaways: [
      "Without a carrier, a merchant seller keeps the risk until the buyer receives the goods; a non-merchant seller passes it on tender.",
      "If the seller ships nonconforming goods, risk stays with the seller until cured or accepted.",
      "Free on board (FOB) shipping point is a shipment contract; FOB destination is a destination contract.",
    ],
    related: ["fob-shipping-terms", "perfect-tender-rule"],
    match: ["risk of loss", "shipment contract", "destination contract"],
  },
  {
    slug: "perfect-tender-rule",
    term: "Perfect tender rule",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Under the perfect tender rule, a buyer may reject goods that fail in any respect to conform to the contract. The seller may have a right to cure the defect if time for performance remains.",
    takeaways: [
      "A buyer may reject all the goods, accept all, or accept some commercial units and reject the rest.",
      "In installment contracts, a delivery can be rejected only if the defect substantially impairs its value.",
      "Rejection must be made within a reasonable time and the seller notified.",
    ],
    related: ["risk-of-loss", "implied-warranties"],
    match: ["perfect tender", "nonconforming", "cure"],
  },
  {
    slug: "implied-warranties",
    term: "Implied warranties",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "The warranty of merchantability, implied when the seller is a merchant, promises goods fit for their ordinary purpose. The warranty of fitness for a particular purpose arises when the seller knows the buyer's purpose and the buyer relies on the seller's skill.",
    takeaways: [
      "A disclaimer of merchantability must mention the word 'merchantability' and, if written, be conspicuous.",
      "Phrases such as 'as is' disclaim both implied warranties.",
      "Express warranties are created by the seller's statements of fact, descriptions or samples.",
    ],
    related: ["perfect-tender-rule", "risk-of-loss"],
    match: ["merchantability", "fitness for a particular purpose", "warranty"],
  },
  {
    slug: "bankruptcy-estate",
    term: "Bankruptcy estate",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Filing for bankruptcy creates an estate made up of all the debtor's legal and equitable interests in property at the filing date, plus certain property, such as inheritances, received within 180 days after filing.",
    takeaways: [
      "Individual debtors can exempt certain property, such as some home equity and personal items.",
      "Property the trustee recovers, such as preferential transfers, is added to it.",
      "Most wages earned after filing in Chapter 7 aren't part of it.",
    ],
    related: ["chapter-7-bankruptcy", "preferential-transfer", "priority-claims"],
    match: ["bankruptcy estate", "exempt property", "180 days"],
  },
  {
    slug: "priority-claims",
    term: "Priority claims in bankruptcy",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "In bankruptcy, secured creditors are paid from their collateral first. Unsecured claims are then paid in a set order of priority, starting with domestic support obligations and administrative expenses, before general unsecured creditors share what is left pro rata.",
    takeaways: [
      "Priority claims include certain employee wages and benefit contributions earned shortly before filing, up to a cap.",
      "Certain recent taxes also have priority.",
      "Secured creditors whose collateral falls short have an unsecured claim for the rest.",
    ],
    related: ["bankruptcy-estate", "chapter-7-bankruptcy", "perfection-of-security-interest"],
    match: ["priority", "unsecured", "administrative expense"],
  },
  {
    slug: "circular-230-sanctions",
    term: "Circular 230 sanctions",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "Practitioners who are incompetent, act disreputably or willfully violate Circular 230 can be censured, suspended or disbarred from practice before the Internal Revenue Service, or face monetary penalties.",
    takeaways: [
      "Censure is a public reprimand; suspension lasts for a set period; disbarment is indefinite.",
      "Practitioners get notice and the right to a hearing before an administrative law judge.",
      "Disreputable conduct includes giving false information and failing to file one's own returns.",
    ],
    related: ["circular-230", "conflicts-of-interest-circular-230", "preparer-penalties"],
    match: ["censure", "suspen", "disbar", "sanction"],
  },
];
