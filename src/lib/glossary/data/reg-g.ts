import type { GlossaryTerm } from "../types";

/** REG terms, seventh batch. */
export const regTermsG: GlossaryTerm[] = [
  {
    slug: "qualified-tips-deduction",
    term: "Qualified tips deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "The One Big Beautiful Bill Act lets workers in occupations that customarily receive tips deduct up to $25,000 of qualified tips a year for 2025 through 2028, whether or not they itemize.",
    takeaways: [
      "The deduction is reduced by $100 for each $1,000 of modified adjusted gross income over $150,000 ($300,000 on a joint return).",
      "It doesn't reduce adjusted gross income, and tips remain subject to Social Security and Medicare taxes.",
      "Married taxpayers must file jointly, and a valid Social Security number is required.",
    ],
    related: ["qualified-overtime-deduction", "standard-deduction", "fica-taxes"],
    match: ["tips", "tip income"],
  },
  {
    slug: "qualified-overtime-deduction",
    term: "Qualified overtime deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "For 2025 through 2028, individuals can deduct up to $12,500 ($25,000 on a joint return) of qualified overtime compensation: the premium part of overtime pay required by federal labor law, such as the extra half in time-and-a-half.",
    takeaways: [
      "The deduction phases out above $150,000 of modified adjusted gross income ($300,000 joint).",
      "It is available whether or not the taxpayer itemizes, but doesn't reduce adjusted gross income.",
      "The regular rate of pay for overtime hours isn't part of the deduction.",
    ],
    related: ["qualified-tips-deduction", "standard-deduction"],
    match: ["overtime"],
  },
  {
    slug: "senior-deduction",
    term: "Senior deduction",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "For 2025 through 2028, each taxpayer aged 65 or older can take an extra $6,000 deduction ($12,000 for a married couple who both qualify), on top of the existing additional standard deduction for age.",
    takeaways: [
      "It is reduced by 6% of modified adjusted gross income over $75,000 ($150,000 joint).",
      "It is available to both itemizers and non-itemizers.",
      "Married taxpayers must file jointly to claim it.",
    ],
    related: ["standard-deduction", "itemized-deductions"],
    match: ["senior", "age 65", "65 or older"],
  },
  {
    slug: "car-loan-interest-deduction",
    term: "Car loan interest deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "For 2025 through 2028, individuals can deduct up to $10,000 a year of interest on a loan taken out after 2024 to buy a new vehicle for personal use whose final assembly took place in the United States.",
    takeaways: [
      "The limit is reduced by $200 for each $1,000 of modified adjusted gross income over $100,000 ($200,000 joint).",
      "It is available whether or not the taxpayer itemizes.",
      "Used vehicles and leases don't qualify, and the loan must be secured by the vehicle.",
    ],
    related: ["mortgage-interest-deduction", "standard-deduction"],
    match: ["car loan", "vehicle", "auto loan"],
  },
  {
    slug: "casualty-loss",
    term: "Personal casualty loss",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Individuals can deduct personal casualty and theft losses, such as damage from a storm, only if the loss comes from a federally declared disaster. Each loss is reduced by $100, and the total by 10% of adjusted gross income.",
    takeaways: [
      "The loss is the lesser of the decline in fair market value and the property's adjusted basis, minus insurance recovered.",
      "Disaster losses can be claimed on the prior year's return to get a refund sooner.",
      "Business casualty losses are fully deductible, without these limits.",
    ],
    example: "A $30,000 uninsured disaster loss with adjusted gross income of $100,000: $30,000 − $100 − $10,000 = $19,900.",
    related: ["itemized-deductions", "involuntary-conversion", "adjusted-basis"],
    match: ["casualty", "theft", "disaster"],
  },
  {
    slug: "student-loan-interest-deduction",
    term: "Student loan interest deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Individuals can deduct up to $2,500 a year of interest on qualified education loans as an adjustment in arriving at adjusted gross income, so it is available without itemizing.",
    takeaways: [
      "It phases out at higher levels of modified adjusted gross income.",
      "It isn't available to married people filing separately or to someone claimed as a dependent.",
      "The taxpayer must be legally obligated on the loan.",
    ],
    related: ["adjusted-gross-income", "american-opportunity-credit", "lifetime-learning-credit"],
    match: ["student loan", "education loan"],
  },
  {
    slug: "self-employed-health-insurance-deduction",
    term: "Self-employed health insurance deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Self-employed individuals, and S corporation shareholders who own more than 2%, can deduct 100% of health insurance premiums for themselves, their spouse and dependents in arriving at adjusted gross income.",
    takeaways: [
      "The deduction can't exceed the net earnings from the business.",
      "It isn't allowed for any month the person could join a subsidized employer plan, including a spouse's.",
      "It doesn't reduce self-employment tax.",
    ],
    related: ["self-employment-tax", "two-percent-shareholder-fringe-benefits", "adjusted-gross-income"],
    match: ["health insurance", "self-employed"],
  },
  {
    slug: "attribution-rules",
    term: "Stock attribution rules",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "Stock attribution rules treat a person as owning stock actually owned by certain family members, partnerships, estates, trusts and corporations, so ownership tests can't be avoided by spreading shares around.",
    takeaways: [
      "For stock redemptions, family attribution covers a spouse, children, grandchildren and parents, but not siblings.",
      "Family attribution can be waived in a complete redemption if the shareholder keeps no interest for 10 years.",
      "Related-party loss rules use a separate list of related parties.",
    ],
    related: ["stock-redemption", "related-party-losses", "constructive-dividend"],
    match: ["attribution", "constructive ownership"],
  },
  {
    slug: "property-distributions-by-corporations",
    term: "Property distributions by corporations",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "When a corporation distributes appreciated property to shareholders, it recognizes gain as if it had sold the property at fair market value. It recognizes no loss on property that has declined in value.",
    takeaways: [
      "The shareholder has a dividend equal to the property's fair market value, to the extent of earnings and profits.",
      "The shareholder's basis in the property is its fair market value.",
      "Liabilities the shareholder takes on reduce the amount distributed.",
    ],
    example: "Land with a basis of $40,000 and a value of $100,000 is distributed: the corporation recognizes a $60,000 gain and the shareholder has a $100,000 distribution.",
    related: ["earnings-and-profits", "constructive-dividend", "complete-liquidation"],
    match: ["property distribution", "distributes property", "appreciated property"],
  },
  {
    slug: "special-allocations",
    term: "Special allocations",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "A partnership agreement can allocate income, gain, loss or deductions among partners differently from their ownership shares. The allocation is respected only if it has substantial economic effect.",
    takeaways: [
      "Economic effect generally requires proper capital accounts, liquidating distributions based on them, and a deficit restoration obligation or qualified income offset.",
      "Allocations without substantial economic effect are reallocated based on the partners' interests in the partnership.",
      "Allocations of built-in gain on contributed property follow separate rules.",
    ],
    related: ["section-704c-allocation", "outside-basis", "guaranteed-payment"],
    match: ["special allocation", "substantial economic effect"],
  },
  {
    slug: "alternate-valuation-date",
    term: "Alternate valuation date",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "An executor can elect to value a decedent's gross estate as of 6 months after the date of death instead of the date of death, but only if the election reduces both the gross estate and the estate tax.",
    takeaways: [
      "Property sold or distributed within the 6 months is valued at the date of sale or distribution.",
      "Heirs take the alternate value as their basis.",
      "Changes in value due only to the passage of time, such as interest, are ignored.",
    ],
    related: ["step-up-in-basis", "portability"],
    match: ["alternate valuation", "6 months", "six months"],
  },
  {
    slug: "income-in-respect-of-a-decedent",
    term: "Income in respect of a decedent",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "Income in respect of a decedent is income the decedent earned or was entitled to but hadn't received before death, such as a final paycheck, retirement account balances or remaining installment sale payments.",
    takeaways: [
      "It is taxed to whoever receives it, with the same character it would have had for the decedent.",
      "It gets no step-up in basis.",
      "The recipient can deduct the estate tax attributable to it.",
    ],
    related: ["step-up-in-basis", "installment-sale", "required-minimum-distribution"],
    match: ["respect of a decedent", "decedent"],
  },
  {
    slug: "business-judgment-rule",
    term: "Business judgment rule",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "The business judgment rule protects corporate directors and officers from personal liability for decisions that turn out badly, as long as they acted in good faith, were reasonably informed and had no conflict of interest.",
    takeaways: [
      "It doesn't protect fraud, self-dealing or gross negligence.",
      "Directors may rely in good faith on reports from officers, accountants and other experts.",
      "Directors owe fiduciary duties of care and loyalty to the corporation.",
    ],
    related: ["piercing-the-corporate-veil", "limited-liability-company"],
    match: ["business judgment", "director", "duty of care"],
  },
  {
    slug: "undisclosed-principal",
    term: "Undisclosed principal",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "A principal is undisclosed when the third party doesn't know the agent is acting for anyone else. The agent is personally liable on the contract, and the principal is also liable once discovered.",
    takeaways: [
      "The third party can choose to hold either the agent or the principal liable, but not both.",
      "The principal can generally enforce the contract, unless personal performance by the agent was essential.",
      "An agent who pays can seek reimbursement from the principal.",
    ],
    related: ["apparent-authority", "general-partnership"],
    match: ["undisclosed principal", "partially disclosed"],
  },
  {
    slug: "anticipatory-repudiation",
    term: "Anticipatory repudiation",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Anticipatory repudiation occurs when one party clearly indicates, before performance is due, that it won't perform. The other party can treat it as a breach immediately and sue, or wait for performance.",
    takeaways: [
      "The repudiating party can retract before the other party has relied on the repudiation or said it is final.",
      "Under the rules for sales of goods, a party with reasonable grounds for insecurity can demand adequate assurance of performance.",
      "The non-breaching party must still take reasonable steps to limit its losses.",
    ],
    related: ["consideration", "statute-of-frauds"],
    match: ["repudiat", "adequate assurance"],
  },
  {
    slug: "preferential-transfer",
    term: "Preferential transfer",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "A bankruptcy trustee can recover a preferential transfer: a payment to a creditor for an existing debt, made while the debtor was insolvent and within 90 days before the petition (1 year for insiders), that gives the creditor more than it would get in a liquidation.",
    takeaways: [
      "The debtor is presumed insolvent during the 90 days before filing.",
      "Payments in the ordinary course of business and exchanges for new value at the same time aren't recoverable.",
      "Insiders include relatives, officers, directors and partners of the debtor.",
    ],
    related: ["chapter-7-bankruptcy", "automatic-stay", "perfection-of-security-interest"],
    match: ["preferential", "preference", "90 days", "insider"],
  },
  {
    slug: "federal-unemployment-tax",
    term: "Federal unemployment tax",
    section: "reg",
    topic: "employee-benefits-and-payroll-tax",
    definition:
      "Federal unemployment tax is paid only by employers, at 6.0% on the first $7,000 of each employee's wages a year, reported on Form 940. A credit of up to 5.4% for state unemployment taxes paid on time usually brings the net rate to 0.6%.",
    takeaways: [
      "At the 0.6% net rate the tax is $42 per employee per year.",
      "Employers in states that haven't repaid federal loans get a reduced credit.",
      "Nothing is withheld from the employee's pay.",
    ],
    related: ["fica-taxes", "worker-classification"],
    match: ["unemployment", "FUTA", "Form 940"],
  },
  {
    slug: "statutory-notice-of-deficiency",
    term: "Statutory notice of deficiency",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "A statutory notice of deficiency (the 90-day letter) is the Internal Revenue Service's formal notice that it intends to assess additional tax. The taxpayer has 90 days (150 if the notice is addressed outside the United States) to petition the Tax Court.",
    takeaways: [
      "Petitioning the Tax Court doesn't require paying the tax first.",
      "If no petition is filed in time, the tax is assessed and collection can begin.",
      "It usually follows a 30-day letter that offers an appeal within the Internal Revenue Service.",
    ],
    related: ["tax-court", "statute-of-limitations", "offer-in-compromise"],
    match: ["90-day letter", "notice of deficiency", "30-day letter"],
  },
];
