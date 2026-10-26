import type { GlossaryTerm } from "../types";

/** REG terms, tenth batch. */
export const regTermsJ: GlossaryTerm[] = [
  {
    slug: "prizes-and-awards",
    term: "Prizes and awards",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Prizes and awards, such as contest winnings or a car won in a raffle, are included in gross income at their fair market value.",
    takeaways: [
      "Employee achievement awards of tangible property for length of service or safety are excluded within limits.",
      "Awards for religious, charitable or scientific achievement are excluded if the recipient didn't enter a contest and the award goes directly to charity.",
      "Scholarships follow their own rules.",
    ],
    related: ["gross-income", "qualified-scholarship"],
    match: ["prize", "award", "winnings"],
  },
  {
    slug: "gambling-income-and-losses",
    term: "Gambling income and losses",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Gambling winnings are fully included in gross income. Losses are deductible only as an itemized deduction and only up to the amount of winnings.",
    takeaways: [
      "From 2026, the One Big Beautiful Bill Act limits the deduction to 90% of losses, still capped at winnings.",
      "Winnings can't be netted against losses; both are reported.",
      "Records of wins and losses are needed to support the deduction.",
    ],
    example: "In 2026, winnings of $10,000 and losses of $10,000: the deduction is limited to $9,000, so $1,000 is taxable.",
    related: ["gross-income", "itemized-deductions"],
    match: ["gambling", "winnings", "90%"],
  },
  {
    slug: "moving-expenses",
    term: "Moving expenses",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "The One Big Beautiful Bill Act permanently eliminates the deduction for moving expenses and the exclusion for employer reimbursements of them, except for active-duty military members moving under orders.",
    takeaways: [
      "Employer-paid moving costs are therefore taxable wages for most employees.",
      "From 2026, certain members of the intelligence community also qualify.",
      "The deduction was first suspended for 2018 through 2025.",
    ],
    related: ["excludable-fringe-benefits", "adjusted-gross-income"],
    match: ["moving expense", "relocation"],
  },
  {
    slug: "adoption-credit",
    term: "Adoption credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The adoption credit covers qualified adoption expenses up to a per-child limit ($17,280 for 2025). Under the One Big Beautiful Bill Act, up to $5,000 of it is refundable starting in 2025.",
    takeaways: [
      "For a special-needs child, the full credit is allowed regardless of actual expenses.",
      "It phases out at higher levels of modified adjusted gross income.",
      "Employer adoption assistance can be excluded from income up to the same limit, but the same expenses can't be used twice.",
    ],
    related: ["refundable-credit", "child-tax-credit"],
    match: ["adoption"],
  },
  {
    slug: "stock-dividends-taxation",
    term: "Taxation of stock dividends",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "A pro rata stock dividend on common stock is generally not taxable. The shareholder spreads the basis of the original shares over the old and new shares, and the holding period of the new shares includes that of the old.",
    takeaways: [
      "It is taxable if any shareholder can choose cash or other property instead.",
      "It is also taxable if it changes shareholders' proportionate interests, for example cash to some and stock to others.",
      "Taxable stock dividends are measured at the fair market value of the shares received.",
    ],
    related: ["earnings-and-profits", "holding-period", "adjusted-basis"],
    match: ["stock dividend", "pro rata"],
  },
  {
    slug: "section-357-liabilities",
    term: "Liabilities in a section 351 transfer",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "When a corporation takes over a shareholder's liabilities in a tax-free section 351 transfer, the liabilities generally aren't treated as boot. Two exceptions can make the shareholder recognize gain.",
    takeaways: [
      "If the main purpose of the transfer is tax avoidance or isn't a business purpose, all the liabilities are treated as boot.",
      "If the liabilities assumed exceed the shareholder's total basis in the property transferred, the excess is gain.",
      "The liabilities reduce the shareholder's basis in the stock received.",
    ],
    example: "Property with a basis of $50,000 subject to a $70,000 mortgage: the shareholder recognizes $20,000 of gain and has a zero stock basis.",
    related: ["section-351", "boot", "adjusted-basis"],
    match: ["357", "liabilities assumed", "excess of liabilities"],
  },
  {
    slug: "sale-of-partnership-interest",
    term: "Sale of a partnership interest",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "Gain or loss on selling a partnership interest is generally capital, but the part attributable to the partnership's unrealized receivables and inventory (hot assets) is ordinary income.",
    takeaways: [
      "The amount realized includes the selling partner's share of partnership liabilities taken over by the buyer.",
      "The partner's share of income is figured up to the date of sale and increases outside basis first.",
      "A section 754 election lets the buyer adjust its share of inside basis.",
    ],
    related: ["hot-assets", "outside-basis", "section-754-election"],
    match: ["sale of a partnership interest", "sells", "selling partner"],
  },
  {
    slug: "post-termination-transition-period",
    term: "Post-termination transition period",
    section: "reg",
    topic: "s-corporation-taxation",
    definition:
      "After an S election ends, a post-termination transition period, generally one year, lets shareholders receive cash distributions tax-free out of the accumulated adjustments account and deduct suspended losses, both limited to their stock basis.",
    takeaways: [
      "The period generally ends on the later of one year after termination or the due date of the last S corporation return, including extensions.",
      "Only cash distributions qualify for the special treatment.",
      "After the period, distributions are dividends to the extent of earnings and profits.",
    ],
    related: ["s-corporation-termination", "accumulated-adjustments-account", "s-corporation-shareholder-basis"],
    match: ["post-termination", "transition period"],
  },
  {
    slug: "gross-estate",
    term: "Gross estate",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "The gross estate includes all property in which the decedent had an interest at death, at fair market value, plus items such as life insurance the decedent owned, half of property held jointly with a spouse, and property in a revocable trust.",
    takeaways: [
      "Life insurance policies transferred within 3 years of death are pulled back in.",
      "Deductions for debts, funeral and administration expenses, and marital and charitable gifts give the taxable estate.",
      "Assets in it generally get a basis equal to their estate tax value.",
    ],
    related: ["marital-deduction", "alternate-valuation-date", "unified-credit"],
    match: ["gross estate", "taxable estate"],
  },
  {
    slug: "marital-deduction",
    term: "Marital deduction",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "The marital deduction allows unlimited transfers, during life or at death, to a spouse who is a United States citizen, free of gift and estate tax. It defers the tax until the surviving spouse's death.",
    takeaways: [
      "Terminable interests, such as a life estate, generally don't qualify unless a qualified terminable interest property (QTIP) election is made.",
      "Transfers to a noncitizen spouse at death qualify only through a qualified domestic trust.",
      "Gifts to a noncitizen spouse have a separate, larger annual exclusion instead.",
    ],
    related: ["qtip-trust", "portability", "gross-estate"],
    match: ["marital deduction", "spouse"],
  },
  {
    slug: "excess-benefit-transaction",
    term: "Excess benefit transaction",
    section: "reg",
    topic: "exempt-organizations-basics",
    definition:
      "An excess benefit transaction occurs when a public charity or social welfare organization gives an insider (a disqualified person) an economic benefit worth more than what it receives, such as excessive pay. Penalty excise taxes, called intermediate sanctions, apply.",
    takeaways: [
      "The insider owes 25% of the excess benefit, rising to 200% if it isn't corrected.",
      "Managers who knowingly approve it owe 10%, up to $20,000 per transaction.",
      "Approval by an independent board using comparable data creates a presumption of reasonableness.",
    ],
    related: ["private-foundation", "form-990"],
    match: ["excess benefit", "intermediate sanctions", "disqualified person"],
  },
  {
    slug: "agent-duties",
    term: "Duties of an agent",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "An agent owes the principal fiduciary duties: loyalty (no conflicts, secret profits or competition), obedience to lawful instructions, reasonable care, accounting for money and property, and passing on relevant information.",
    takeaways: [
      "An agent who breaches these duties is liable to the principal for resulting losses.",
      "The principal owes the agent compensation, reimbursement of expenses and indemnification.",
      "The duty of loyalty continues for confidential information after the agency ends.",
    ],
    related: ["apparent-authority", "undisclosed-principal", "ratification"],
    match: ["duty of loyalty", "fiduciary", "agent"],
  },
  {
    slug: "shareholder-derivative-suit",
    term: "Shareholder derivative suit",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "A shareholder derivative suit is a lawsuit a shareholder brings on behalf of the corporation to enforce a right the corporation itself has failed to enforce, such as a claim against directors for breaching their duties.",
    takeaways: [
      "Any recovery goes to the corporation, not the shareholder.",
      "The shareholder usually must first demand that the board act, unless that would be futile.",
      "A direct suit, by contrast, enforces the shareholder's own rights, such as voting rights.",
    ],
    related: ["business-judgment-rule", "piercing-the-corporate-veil"],
    match: ["derivative suit", "derivative action"],
  },
  {
    slug: "void-and-voidable-contracts",
    term: "Void and voidable contracts",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "A void contract has no legal effect, such as one for an illegal purpose. A voidable contract is valid, but one party can choose to cancel it, for example because of being a minor, fraud, duress or undue influence.",
    takeaways: [
      "A minor can disaffirm a contract during minority and for a reasonable time after, but is liable for the reasonable value of necessaries.",
      "A voidable contract can be ratified, after which it can't be cancelled.",
      "An unenforceable contract, such as one that violates the statute of frauds, is valid but can't be enforced in court.",
    ],
    related: ["consideration", "statute-of-frauds", "ratification"],
    match: ["void", "voidable", "minor", "duress"],
  },
  {
    slug: "firm-offer",
    term: "Firm offer",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Under the rules for sales of goods, a merchant's signed written offer that says it will be held open can't be revoked, even without consideration, for the stated time, or a reasonable time if none is stated, but no longer than 3 months.",
    takeaways: [
      "Only merchants can make firm offers.",
      "Under common law, an offer can be revoked any time before acceptance unless consideration is paid for an option.",
      "An option paid for can last longer than 3 months.",
    ],
    related: ["consideration", "mailbox-rule"],
    match: ["firm offer", "merchant", "3 months"],
  },
  {
    slug: "purchase-money-security-interest",
    term: "Purchase-money security interest",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "A purchase-money security interest is taken by a seller, or a lender who finances the purchase, in the goods being bought. It gets special priority and, for consumer goods, is perfected automatically when it attaches.",
    takeaways: [
      "Automatic perfection doesn't apply to motor vehicles, which need a notation on the title.",
      "A purchase-money interest perfected on time can take priority over an earlier perfected interest in the same goods.",
      "For inventory, the purchase-money lender must also notify earlier secured parties.",
    ],
    related: ["attachment-of-security-interest", "perfection-of-security-interest"],
    match: ["purchase-money", "consumer goods"],
  },
  {
    slug: "enrolled-agent",
    term: "Enrolled agent",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "An enrolled agent is a tax practitioner licensed by the Internal Revenue Service, by passing an exam or through qualifying employment at the agency, with unlimited rights to represent taxpayers before the agency, as attorneys and certified public accountants have.",
    takeaways: [
      "Enrolled agents are subject to Circular 230.",
      "They must complete 72 hours of continuing education every 3 years.",
      "Unenrolled preparers have only limited representation rights.",
    ],
    related: ["circular-230", "preparer-penalties"],
    match: ["enrolled agent"],
  },
  {
    slug: "disclosure-of-taxpayer-information",
    term: "Disclosure of taxpayer information",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "Tax return preparers may not use or disclose information from a taxpayer's return for any other purpose without the taxpayer's written consent, apart from listed exceptions, such as quality or peer reviews and court orders.",
    takeaways: [
      "Knowing or reckless violations can be a criminal misdemeanor.",
      "A civil penalty applies to each improper disclosure or use.",
      "Consent must be specific and signed before the information is used or disclosed.",
    ],
    related: ["preparer-penalties", "confidential-client-information"],
    match: ["7216", "disclos", "consent"],
  },
  {
    slug: "installment-agreement",
    term: "Installment agreement",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "An installment agreement lets a taxpayer who can't pay in full pay a tax debt in monthly installments. Interest and the failure-to-pay penalty continue to build up until the balance is paid.",
    takeaways: [
      "The failure-to-pay penalty is reduced to 0.25% a month while an agreement is in effect, for timely filed returns.",
      "Individuals who owe $50,000 or less can usually get a streamlined agreement online.",
      "Missing payments or new liabilities can end the agreement.",
    ],
    related: ["offer-in-compromise", "failure-to-file-penalty"],
    match: ["installment agreement", "payment plan"],
  },
  {
    slug: "civil-fraud-penalty",
    term: "Civil fraud penalty",
    section: "reg",
    topic: "federal-tax-procedures-and-penalties",
    definition:
      "The civil fraud penalty is 75% of the part of an underpayment caused by fraud. The Internal Revenue Service must prove fraud by clear and convincing evidence.",
    takeaways: [
      "Once fraud is shown for part of an underpayment, the whole underpayment is treated as fraudulent unless the taxpayer proves otherwise.",
      "There is no statute of limitations on assessing tax for a fraudulent return.",
      "Criminal tax evasion is a separate felony with its own penalties.",
    ],
    related: ["accuracy-related-penalty", "statute-of-limitations"],
    match: ["fraud penalty", "75%", "civil fraud"],
  },
];
