import type { GlossaryTerm } from "../types";

/** REG terms, ninth batch. */
export const regTermsI: GlossaryTerm[] = [
  {
    slug: "qualifying-surviving-spouse",
    term: "Qualifying surviving spouse",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "A qualifying surviving spouse can use the joint return tax rates and standard deduction for the two years after the year their spouse died, if they don't remarry and maintain a home for a dependent child.",
    takeaways: [
      "In the year of death, the surviving spouse can file a joint return.",
      "The taxpayer doesn't claim an exemption or credit for the deceased spouse in the later years.",
      "After the two years, head of household status may apply.",
    ],
    related: ["head-of-household", "standard-deduction", "dependent"],
    match: ["surviving spouse", "widow"],
  },
  {
    slug: "married-filing-separately",
    term: "Married filing separately",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "Married taxpayers who file separate returns each report their own income and deductions. This usually costs more tax than filing jointly, but may limit one spouse's exposure to the other's tax liability.",
    takeaways: [
      "If one spouse itemizes, the other must too.",
      "Many benefits are lost or halved, such as education credits and the student loan interest deduction.",
      "The state and local tax cap is halved.",
    ],
    related: ["head-of-household", "innocent-spouse-relief", "salt-deduction-cap"],
    match: ["filing separately", "separate return"],
  },
  {
    slug: "credit-for-other-dependents",
    term: "Credit for other dependents",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The credit for other dependents is a $500 nonrefundable credit for each dependent who doesn't qualify for the child tax credit, such as a child aged 17 or older or an elderly parent.",
    takeaways: [
      "It phases out at the same income levels as the child tax credit.",
      "The One Big Beautiful Bill Act made it permanent.",
      "The dependent must be a United States citizen, national or resident.",
    ],
    related: ["child-tax-credit", "dependent"],
    match: ["other dependents", "$500"],
  },
  {
    slug: "excess-business-loss",
    term: "Excess business loss limitation",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Individuals and other noncorporate taxpayers can't deduct net business losses above an annual threshold ($313,000, or $626,000 on a joint return, for 2025). The disallowed excess becomes a net operating loss carryforward.",
    takeaways: [
      "It applies after the basis, at-risk and passive activity loss limits.",
      "The One Big Beautiful Bill Act made the limitation permanent.",
      "Losses from all of the taxpayer's businesses are combined.",
    ],
    related: ["net-operating-loss", "passive-activity-loss", "at-risk-rules"],
    match: ["excess business loss"],
  },
  {
    slug: "business-interest-limitation",
    term: "Business interest limitation",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "A business's deduction for net business interest expense is limited to business interest income plus 30% of adjusted taxable income (plus floor plan financing interest). Disallowed interest carries forward indefinitely.",
    takeaways: [
      "Businesses with average annual gross receipts of $31,000,000 or less (2025) are exempt.",
      "From 2025, adjusted taxable income is again computed before depreciation and amortization, allowing a larger deduction.",
      "Real property businesses can elect out in exchange for slower depreciation.",
    ],
    related: ["small-business-gross-receipts-test", "net-operating-loss"],
    match: ["business interest", "adjusted taxable income", "163(j)"],
  },
  {
    slug: "meals-and-entertainment",
    term: "Meals and entertainment",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Business meals are 50% deductible if they aren't lavish and the taxpayer or an employee is present. Entertainment, such as sports tickets or golf, isn't deductible at all.",
    takeaways: [
      "Meals at a company party for all employees are fully deductible.",
      "Meals provided to employees as taxable compensation, or sold to customers, are fully deductible.",
      "Food bought at an entertainment event is deductible only if stated separately.",
    ],
    related: ["permanent-difference", "schedule-m-1"],
    match: ["meals", "entertainment", "50%"],
  },
  {
    slug: "all-events-test",
    term: "All-events test",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "An accrual-method taxpayer deducts an expense when all events have occurred that fix the liability, the amount can be determined with reasonable accuracy, and economic performance has occurred.",
    takeaways: [
      "Under the recurring item exception, some expenses can be deducted in the year incurred if paid within 8½ months after year-end.",
      "Income is generally reported when the right to it is fixed and the amount determinable, or earlier if received.",
      "Estimated reserves, such as for bad debts or warranties, aren't deductible until paid or written off.",
    ],
    related: ["accrual-basis-accounting", "constructive-receipt"],
    match: ["all-events", "all events", "economic performance"],
  },
  {
    slug: "small-business-gross-receipts-test",
    term: "Small business gross receipts test",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "Businesses with average annual gross receipts of $31,000,000 or less over the prior three years (for 2025) can use the cash method, even as C corporations, and are exempt from several complex rules.",
    takeaways: [
      "They are exempt from the uniform capitalization rules and the business interest limitation.",
      "They can account for inventory more simply and use the completed contract method for small construction contracts.",
      "Related businesses are combined for the test.",
    ],
    related: ["uniform-capitalization-rules", "business-interest-limitation", "controlled-group"],
    match: ["gross receipts", "cash method", "small business"],
  },
  {
    slug: "uniform-capitalization-rules",
    term: "Uniform capitalization rules",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "The uniform capitalization rules require producers and many resellers to include in inventory or other property not only direct costs but also an allocable share of indirect costs, including some administrative costs.",
    takeaways: [
      "The capitalized costs are recovered through cost of goods sold or depreciation.",
      "Businesses that meet the small business gross receipts test are exempt.",
      "Tax inventory can therefore differ from book inventory.",
    ],
    related: ["small-business-gross-receipts-test", "temporary-difference"],
    match: ["uniform capitalization", "263A", "UNICAP"],
  },
  {
    slug: "research-and-experimental-expenditures",
    term: "Research and experimental expenditures",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "Under the One Big Beautiful Bill Act, domestic research and experimental expenditures paid in tax years beginning after 2024 can be deducted immediately again. Foreign research costs must still be amortized over 15 years.",
    takeaways: [
      "From 2022 to 2024, domestic research costs had to be amortized over 5 years.",
      "Small businesses can elect to apply immediate deduction retroactively to those years.",
      "Software development costs are treated as research expenditures.",
    ],
    related: ["research-and-development-costs", "software-development-costs"],
    match: ["research and experimental", "174", "research expenditure"],
  },
  {
    slug: "worthless-securities",
    term: "Worthless securities",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "A security that becomes completely worthless is treated as sold on the last day of the tax year in which it became worthless, usually producing a capital loss.",
    takeaways: [
      "Using the last day of the year can turn a short-term holding into a long-term one.",
      "Qualifying small business stock can give an ordinary loss instead.",
      "Refund claims for worthless securities can be filed up to 7 years later.",
    ],
    related: ["capital-loss-limitation", "section-1244-stock", "claim-for-refund"],
    match: ["worthless"],
  },
  {
    slug: "controlled-group",
    term: "Controlled group",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "A controlled group is a group of corporations under common control, either a parent and subsidiaries linked by at least 80% ownership, or brother-sister corporations owned more than 50% by the same five or fewer people.",
    takeaways: [
      "Members share certain tax benefits, such as the accumulated earnings credit.",
      "Members are combined for tests such as the small business gross receipts test.",
      "Similar rules apply when testing retirement plans for discrimination.",
    ],
    related: ["consolidated-tax-return", "attribution-rules", "accumulated-earnings-tax"],
    match: ["controlled group", "brother-sister", "parent-subsidiary"],
  },
  {
    slug: "schedule-k-1",
    term: "Schedule K-1",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "Schedule K-1 reports each owner's share of a pass-through entity's income, deductions and credits: from a partnership's Form 1065, an S corporation's Form 1120-S, or a trust's or estate's Form 1041.",
    takeaways: [
      "Owners report their share on their own returns whether or not they received any cash.",
      "Separately stated items, such as capital gains and charitable contributions, keep their character.",
      "Partnership and S corporation returns for calendar-year entities are due March 15.",
    ],
    related: ["guaranteed-payment", "s-corporation-shareholder-basis", "distributable-net-income"],
    match: ["K-1", "separately stated", "1065", "1120-S"],
  },
  {
    slug: "one-class-of-stock",
    term: "One class of stock",
    section: "reg",
    topic: "s-corporation-taxation",
    definition:
      "An S corporation may have only one class of stock, meaning all outstanding shares give identical rights to distributions and liquidation proceeds. Differences in voting rights are allowed.",
    takeaways: [
      "Distributions not made in proportion to ownership can risk creating a second class of stock.",
      "Straight debt meeting safe harbor terms isn't treated as a second class.",
      "A second class of stock terminates the S election.",
    ],
    related: ["s-corporation-election", "s-corporation-termination"],
    match: ["one class", "second class", "voting"],
  },
  {
    slug: "trust-tax-rates",
    term: "Trust and estate tax rates",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "Trusts and estates pay income tax on income they keep, using compressed rate brackets: they reach the top 37% rate at just $15,650 of taxable income for 2025, far sooner than individuals.",
    takeaways: [
      "Distributing income shifts the tax to beneficiaries, who are often in lower brackets.",
      "The distribution deduction is limited by distributable net income.",
      "Trusts and estates file Form 1041.",
    ],
    related: ["distributable-net-income", "simple-and-complex-trusts", "grantor-trust"],
    match: ["compressed", "1041", "trust rate"],
  },
  {
    slug: "ratification",
    term: "Ratification",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "Ratification is a principal's later approval of an act an agent performed without authority. It binds the principal as if the act had been authorized from the start.",
    takeaways: [
      "The principal must know all the material facts and must ratify the whole transaction.",
      "It can be express, or implied by accepting the benefits.",
      "The principal must have had capacity both when the act was done and when ratifying.",
    ],
    related: ["apparent-authority", "undisclosed-principal"],
    match: ["ratif"],
  },
  {
    slug: "respondeat-superior",
    term: "Respondeat superior",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "Under respondeat superior, an employer is liable for torts its employees commit within the scope of their employment, even if the employer did nothing wrong.",
    takeaways: [
      "A small detour from assigned work is usually within scope; a major frolic for personal purposes isn't.",
      "Employers generally aren't liable for the torts of independent contractors.",
      "The employee remains personally liable too.",
    ],
    related: ["worker-classification", "apparent-authority"],
    match: ["respondeat", "scope of employment", "vicarious"],
  },
  {
    slug: "nondischargeable-debts",
    term: "Nondischargeable debts",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Some debts survive an individual's bankruptcy discharge, including recent taxes, child support and alimony, most student loans, and debts from fraud or willful and malicious injury.",
    takeaways: [
      "Student loans are discharged only on proof of undue hardship.",
      "Criminal fines and debts for injuries caused by driving while intoxicated aren't discharged.",
      "Debts the debtor failed to list may also survive.",
    ],
    related: ["chapter-7-bankruptcy", "chapter-11-reorganization"],
    match: ["nondischargeable", "discharge"],
  },
  {
    slug: "irs-examinations",
    term: "Types of tax examinations",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "The Internal Revenue Service examines returns by correspondence (by mail, usually on a few items), in an office audit at an agency office, or in a field audit at the taxpayer's business.",
    takeaways: [
      "An examination can end with no change, an agreed adjustment or an unagreed adjustment.",
      "An unagreed result usually brings a 30-day letter offering an administrative appeal.",
      "Taxpayers can be represented by attorneys, certified public accountants and enrolled agents.",
    ],
    related: ["statutory-notice-of-deficiency", "tax-court", "circular-230"],
    match: ["examination", "audit", "field audit", "correspondence"],
  },
];
