import type { GlossaryTerm } from "../types";

/** REG terms, sixth batch. */
export const regTermsF: GlossaryTerm[] = [
  {
    slug: "tax-benefit-rule",
    term: "Tax benefit rule",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Under the tax benefit rule, recovering an amount deducted in an earlier year, such as a state income tax refund, is income in the year recovered, but only to the extent the earlier deduction reduced tax.",
    takeaways: [
      "A refund is not income if the taxpayer took the standard deduction that year.",
      "If itemized deductions exceeded the standard deduction by less than the refund, only that excess is income.",
      "With the state and local tax cap, a refund is income only to the extent the capped deduction gave a benefit.",
    ],
    related: ["gross-income", "itemized-deductions", "salt-deduction-cap"],
    match: ["tax benefit rule", "refund", "recovery"],
  },
  {
    slug: "constructive-receipt",
    term: "Constructive receipt",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "A cash-basis taxpayer has income when an amount is credited to their account, set apart for them or otherwise made available without substantial restriction, even if they haven't actually taken it.",
    takeaways: [
      "A paycheck available on December 31 is income that year, even if the employee waits to cash it.",
      "Income isn't constructively received if access is substantially restricted.",
      "Accrual-basis taxpayers use the all-events test instead.",
    ],
    related: ["gross-income", "accrual-basis-accounting"],
    match: ["constructive receipt", "made available", "cash-basis", "cash basis"],
  },
  {
    slug: "cancellation-of-debt-income",
    term: "Cancellation of debt income",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "When a lender forgives or cancels a debt, the amount canceled is generally gross income to the borrower, unless an exclusion applies, such as bankruptcy or insolvency.",
    takeaways: [
      "The insolvency exclusion is limited to the amount by which liabilities exceed assets just before the cancellation.",
      "Excluded amounts reduce tax attributes, such as net operating losses and the basis of property.",
      "Debt forgiven as a gift, or a price reduction by the seller of property, isn't income.",
    ],
    related: ["gross-income", "chapter-7-bankruptcy", "net-operating-loss"],
    match: ["cancellation of debt", "forgive", "discharge of indebtedness", "insolven"],
  },
  {
    slug: "mortgage-interest-deduction",
    term: "Mortgage interest deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Individuals who itemize can deduct qualified residence interest on up to $750,000 ($375,000 if married filing separately) of acquisition debt on a main home and one second home, a limit the One Big Beautiful Bill Act made permanent.",
    takeaways: [
      "Acquisition debt is debt used to buy, build or substantially improve the home that secures it.",
      "Home equity interest is deductible only if the money was used to buy, build or substantially improve the home.",
      "Debt taken on before December 16, 2017 keeps the older $1,000,000 limit.",
    ],
    related: ["itemized-deductions", "standard-deduction"],
    match: ["mortgage interest", "qualified residence", "acquisition indebtedness", "home equity"],
  },
  {
    slug: "medical-expense-deduction",
    term: "Medical expense deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Individuals who itemize can deduct unreimbursed medical and dental expenses for themselves, their spouse and dependents to the extent the total exceeds 7.5% of adjusted gross income.",
    takeaways: [
      "Deductible items include health insurance premiums paid with after-tax money, prescription drugs and travel for medical care.",
      "Cosmetic surgery and nonprescription drugs (other than insulin) aren't deductible.",
      "A medically required home improvement is deductible only to the extent its cost exceeds the increase in the home's value.",
    ],
    example: "Adjusted gross income of $80,000 and $9,000 of unreimbursed medical costs: the deduction is $9,000 − $6,000 = $3,000.",
    related: ["itemized-deductions", "adjusted-gross-income", "health-savings-account"],
    match: ["medical expense", "7.5%"],
  },
  {
    slug: "charitable-contribution-limits",
    term: "Charitable contribution limits",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Individuals can deduct cash gifts to public charities up to 60% of adjusted gross income, and gifts of long-term capital gain property, usually at fair market value, up to 30%. Amounts over the limits carry forward for 5 years.",
    takeaways: [
      "Gifts to private nonoperating foundations have lower limits: 30% for cash and 20% for capital gain property.",
      "From 2026, itemizers deduct only gifts above 0.5% of adjusted gross income, and non-itemizers can deduct up to $1,000 ($2,000 joint) of cash gifts.",
      "Corporations are limited to 10% of taxable income, and from 2026 deduct only gifts above 1% of taxable income.",
    ],
    related: ["itemized-deductions", "donor-advised-fund", "qualified-charitable-distribution"],
    match: ["charitable", "contribution", "donation"],
  },
  {
    slug: "section-1244-stock",
    term: "Section 1244 stock",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "A loss on section 1244 stock, stock of a small business corporation issued to an individual, is an ordinary loss up to $50,000 a year ($100,000 on a joint return) rather than a capital loss.",
    takeaways: [
      "Only the original individual holder qualifies, not someone who bought the shares from them.",
      "The corporation's capital contributions can't have exceeded $1,000,000 when the stock was issued.",
      "Losses above the limit, and all gains, are capital.",
    ],
    related: ["capital-loss-limitation", "qualified-small-business-stock", "capital-asset"],
    match: ["1244", "small business stock", "ordinary loss"],
  },
  {
    slug: "organizational-and-start-up-costs",
    term: "Organizational and start-up costs",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "A new business can deduct up to $5,000 of organizational costs and $5,000 of start-up costs in its first year, each reduced dollar for dollar by the amount by which that type of cost exceeds $50,000. The rest is amortized over 180 months.",
    takeaways: [
      "Organizational costs include legal fees for drafting the charter and state incorporation fees, but not costs of issuing stock.",
      "Start-up costs are costs of investigating or creating a business before it begins operating.",
      "The same rules apply to partnerships.",
    ],
    example: "Start-up costs of $53,000: the first-year deduction is $5,000 − $3,000 = $2,000, and $51,000 is amortized over 180 months.",
    related: ["section-351", "earnings-and-profits"],
    match: ["organizational", "start-up", "startup", "180 months"],
  },
  {
    slug: "s-corporation-shareholder-basis",
    term: "S corporation shareholder basis",
    section: "reg",
    topic: "s-corporation-taxation",
    definition:
      "An S corporation shareholder's stock basis increases with contributions and their share of income, and decreases with distributions, nondeductible expenses and losses. Losses are deductible only up to stock basis plus debt basis.",
    takeaways: [
      "Basis is adjusted in this order: increases, then distributions, then nondeductible expenses, then losses.",
      "Debt basis comes only from loans the shareholder made directly to the corporation; guaranteeing a bank loan doesn't count.",
      "Losses that exceed basis are suspended and carried forward indefinitely.",
    ],
    related: ["s-corporation-election", "accumulated-adjustments-account", "at-risk-rules"],
    match: ["shareholder basis", "stock basis", "debt basis", "suspended"],
  },
  {
    slug: "nonliquidating-distribution",
    term: "Nonliquidating partnership distribution",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "In a nonliquidating (current) distribution, a partner generally recognizes no gain or loss. Gain arises only if money distributed, including a reduction in the partner's share of liabilities, exceeds the partner's outside basis.",
    takeaways: [
      "No loss is recognized on a current distribution.",
      "The partner's basis in distributed property equals the partnership's basis, limited to the partner's outside basis left after any money.",
      "Distributions that shift a partner's share of hot assets can trigger ordinary income.",
    ],
    example: "A partner with $10,000 outside basis receives $4,000 cash and land with a partnership basis of $9,000: no gain, and the land takes a $6,000 basis.",
    related: ["outside-basis", "hot-assets", "complete-liquidation"],
    match: ["distribution", "current distribution", "nonliquidating"],
  },
  {
    slug: "grantor-trust",
    term: "Grantor trust",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "A grantor trust is a trust whose income is taxed to the person who created it (the grantor) because the grantor keeps certain powers or interests, such as the power to revoke the trust.",
    takeaways: [
      "A revocable living trust is a grantor trust; its income is reported on the grantor's own return.",
      "An intentionally defective grantor trust keeps assets out of the estate while the grantor pays the income tax.",
      "Other trusts are taxed as simple or complex trusts.",
    ],
    related: ["simple-and-complex-trusts", "distributable-net-income", "grantor-retained-annuity-trust"],
    match: ["grantor trust", "revocable", "grantor"],
  },
  {
    slug: "private-foundation",
    term: "Private foundation",
    section: "reg",
    topic: "exempt-organizations-basics",
    definition:
      "A private foundation is a charitable organization that isn't a public charity, usually because its support comes from one family or company rather than the public. It pays an excise tax on net investment income and files Form 990-PF.",
    takeaways: [
      "It must distribute about 5% of its investment assets each year.",
      "Excise taxes apply to self-dealing, excess business holdings, jeopardizing investments and taxable expenditures.",
      "Donors to most private foundations face lower deduction limits than for public charities.",
    ],
    related: ["form-990", "unrelated-business-income", "charitable-contribution-limits"],
    match: ["private foundation", "990-PF", "self-dealing"],
  },
  {
    slug: "parol-evidence-rule",
    term: "Parol evidence rule",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Under the parol evidence rule, when parties intend a written contract to be their final and complete agreement, evidence of earlier or simultaneous oral agreements can't be used to change or contradict its terms.",
    takeaways: [
      "It doesn't bar evidence of fraud, duress or mistake, or evidence that clarifies an ambiguous term.",
      "It doesn't apply to changes the parties agree after the contract is signed.",
      "It is different from the statute of frauds, which decides which contracts must be in writing.",
    ],
    related: ["statute-of-frauds", "consideration"],
    match: ["parol evidence", "oral agreement"],
  },
  {
    slug: "offer-in-compromise",
    term: "Offer in compromise",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "An offer in compromise is an agreement with the Internal Revenue Service to settle a tax debt for less than the full amount, based on doubt as to collectibility, doubt as to liability or effective tax administration.",
    takeaways: [
      "It is submitted on Form 656 with an application fee and an initial payment, unless the taxpayer qualifies as low income.",
      "The taxpayer must have filed all required returns and be current on estimated payments.",
      "Once accepted, the taxpayer must stay compliant for 5 years or the agreement can be cancelled.",
    ],
    related: ["statute-of-limitations", "innocent-spouse-relief"],
    match: ["offer in compromise", "collectibility"],
  },
  {
    slug: "failure-to-file-penalty",
    term: "Failure-to-file and failure-to-pay penalties",
    section: "reg",
    topic: "federal-tax-procedures-and-penalties",
    definition:
      "The failure-to-file penalty is 5% of the unpaid tax for each month or part of a month a return is late, up to 25%. The failure-to-pay penalty is 0.5% a month, also up to 25%.",
    takeaways: [
      "When both apply in the same month, the failure-to-file penalty is reduced by the failure-to-pay penalty, so the total is 5%.",
      "An extension of time to file doesn't extend the time to pay.",
      "Reasonable cause or first-time abatement can remove the penalties.",
    ],
    example: "A return filed 2½ months late with $10,000 unpaid: 3 months × 4.5% = $1,350 failure to file plus 3 × 0.5% = $150 failure to pay.",
    related: ["accuracy-related-penalty", "estimated-tax-payments"],
    match: ["failure to file", "failure-to-file", "failure to pay", "late"],
  },
];
