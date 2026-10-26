import type { GlossaryTerm } from "../types";

/** REG terms, fourth batch. */
export const regTermsD: GlossaryTerm[] = [
  {
    slug: "qualified-dividends",
    term: "Qualified dividends",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Qualified dividends are dividends from US corporations (and qualified foreign corporations) that are taxed at the lower long-term capital gain rates of 0%, 15% or 20%, rather than as ordinary income.",
    takeaways: [
      "The shareholder must hold common stock for more than 60 days in the 121-day period starting 60 days before the ex-dividend date.",
      "Dividends that don't qualify are taxed at ordinary rates.",
      "Higher-income taxpayers may also owe the 3.8% net investment income tax.",
    ],
    related: ["net-investment-income-tax", "capital-asset"],
    match: ["qualified dividend", "dividend"],
  },
  {
    slug: "at-risk-rules",
    term: "At-risk rules",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "The at-risk rules limit a taxpayer's deductible losses from an activity to the amount the taxpayer could actually lose: generally cash and property contributed plus debt for which the taxpayer is personally liable.",
    takeaways: [
      "They are applied after the basis limit and before the passive activity rules.",
      "Nonrecourse debt generally isn't at risk, except qualified nonrecourse financing for real estate.",
      "Losses disallowed by them carry forward until the taxpayer has more amount at risk.",
    ],
    related: ["passive-activity-loss", "outside-basis"],
    match: ["at-risk", "at risk"],
  },
  {
    slug: "home-sale-exclusion",
    term: "Home sale exclusion (Section 121)",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Section 121 lets taxpayers exclude up to $250,000 of gain ($500,000 for married couples filing jointly) on the sale of their principal residence if they owned and used it as their main home for at least two of the five years before the sale.",
    takeaways: [
      "The exclusion can generally be used only once every two years.",
      "A reduced exclusion may apply if the taxpayer moves early because of a job change, health or unforeseen circumstances.",
      "Losses on the sale of a personal residence are not deductible.",
    ],
    related: ["capital-asset"],
    match: ["principal residence", "121", "home"],
  },
  {
    slug: "american-opportunity-credit",
    term: "American Opportunity Tax Credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The American Opportunity Tax Credit is a credit of up to $2,500 per eligible student for qualified expenses in the first four years of postsecondary education: 100% of the first $2,000 and 25% of the next $2,000.",
    takeaways: [
      "Up to 40% of it (as much as $1,000) is refundable.",
      "The student must be enrolled at least half-time in a program leading to a degree or credential.",
      "The same expenses can't be used for both it and the Lifetime Learning credit or a tax-free 529 distribution.",
    ],
    related: ["refundable-credit", "section-529-plan"],
    match: ["American Opportunity", "education credit"],
  },
  {
    slug: "worker-classification",
    term: "Worker classification (employee or independent contractor)",
    section: "reg",
    topic: "employee-benefits-and-payroll-tax",
    definition:
      "Worker classification decides whether a worker is an employee, for whom the business withholds income tax and pays payroll taxes, or an independent contractor, who pays self-employment tax. The test is how much control the business has over the work.",
    takeaways: [
      "The Internal Revenue Service looks at behavioral control, financial control and the relationship of the parties.",
      "Employees receive Form W-2; independent contractors receive Form 1099-NEC.",
      "Misclassifying employees can lead to back payroll taxes, penalties and interest.",
    ],
    related: ["self-employment-tax"],
    match: ["independent contractor", "employee"],
  },
  {
    slug: "tax-court",
    term: "United States Tax Court",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "The United States Tax Court is a federal court where taxpayers can dispute a proposed deficiency without paying the tax first. It hears cases without a jury.",
    takeaways: [
      "The petition is generally due within 90 days of the statutory notice of deficiency.",
      "Under the small case procedure, for smaller disputes, decisions are quicker but can't be appealed and aren't precedent.",
      "Taxpayers who want a jury must pay the tax and sue for a refund in a district court.",
    ],
    related: ["statute-of-limitations", "private-letter-ruling"],
    match: ["Tax Court"],
  },
  {
    slug: "preparer-penalties",
    term: "Tax return preparer penalties",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "Tax return preparers can be penalized under Section 6694 for understatements on returns they prepare: for an unreasonable position, the greater of $1,000 or 50% of the fee; for willful or reckless conduct, the greater of $5,000 or 75% of the fee.",
    takeaways: [
      "A position is reasonable if there is substantial authority for it, or a reasonable basis and it is adequately disclosed.",
      "Other penalties cover failing to sign a return, give the taxpayer a copy or include an identification number.",
      "Circular 230 sanctions can apply in addition.",
    ],
    related: ["circular-230", "accuracy-related-penalty"],
    match: ["preparer", "6694"],
  },
  {
    slug: "private-letter-ruling",
    term: "Private letter ruling",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "A private letter ruling is a written statement from the Internal Revenue Service, issued at a taxpayer's request, applying the tax law to that taxpayer's specific facts.",
    takeaways: [
      "Only the taxpayer who requested it may rely on it.",
      "Other taxpayers can't cite it as precedent, though it shows the agency's thinking.",
      "Revenue rulings, by contrast, are published and may be relied on by any taxpayer in similar circumstances.",
    ],
    related: ["tax-court"],
    match: ["letter ruling", "revenue ruling"],
  },
  {
    slug: "simple-and-complex-trusts",
    term: "Simple and complex trusts",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "A simple trust must distribute all its income each year, makes no charitable contributions and distributes no principal. Any trust that doesn't meet those conditions in a year is a complex trust for that year.",
    takeaways: [
      "A simple trust gets a $300 exemption; a complex trust gets $100.",
      "Both deduct distributions to beneficiaries, limited by distributable net income.",
      "Trust tax brackets are compressed, so the top rate applies at low income.",
    ],
    related: ["distributable-net-income"],
    match: ["simple trust", "complex trust"],
  },
  {
    slug: "form-990",
    term: "Form 990",
    section: "reg",
    topic: "exempt-organizations-basics",
    definition:
      "Form 990 is the annual information return that most tax-exempt organizations file with the Internal Revenue Service, reporting their finances, governance, activities and compensation.",
    takeaways: [
      "Small organizations may file the shorter Form 990-EZ or the electronic 990-N postcard instead, depending on gross receipts and assets.",
      "Churches and certain church-related organizations don't have to file.",
      "Failing to file for three consecutive years automatically revokes exempt status.",
    ],
    related: ["unrelated-business-income"],
    match: ["990"],
  },
  {
    slug: "perfection-of-security-interest",
    term: "Perfection of a security interest",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Perfection is the step that makes a creditor's security interest in collateral effective against other creditors and a bankruptcy trustee. It is usually achieved by filing a financing statement, taking possession of the collateral, or control.",
    takeaways: [
      "A purchase-money security interest in consumer goods is perfected automatically when it attaches.",
      "Among perfected interests, the first to file or perfect generally has priority.",
      "Attachment (an agreement, value given and the debtor's rights in the collateral) must happen first.",
    ],
    related: ["chapter-7-bankruptcy"],
    match: ["perfect", "security interest", "financing statement"],
  },
  {
    slug: "limited-liability-company",
    term: "Limited liability company (LLC)",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "A limited liability company (LLC) is a business entity formed under state law whose owners (members) are generally not personally liable for its debts, and which can choose how it is taxed.",
    takeaways: [
      "By default, a single-member LLC is disregarded for tax and a multi-member LLC is taxed as a partnership.",
      "It can elect to be taxed as a corporation, and then as an S corporation.",
      "It can be managed by its members or by appointed managers.",
    ],
    related: ["general-partnership", "s-corporation-election"],
    match: ["limited liability company", "LLC"],
  },
  {
    slug: "general-partnership",
    term: "General partnership",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "A general partnership is an association of two or more people carrying on a business for profit as co-owners. It can be formed without any filing, and each partner has unlimited personal liability for its debts.",
    takeaways: [
      "Each partner is an agent of the partnership for carrying on its business.",
      "Partners are jointly and severally liable for the partnership's obligations.",
      "Limited partnerships and limited liability partnerships limit some partners' liability.",
    ],
    related: ["limited-liability-company", "apparent-authority"],
    match: ["general partnership", "partner"],
  },
  {
    slug: "alimony",
    term: "Alimony",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Alimony is a payment to a spouse or former spouse under a divorce or separation agreement. For agreements made after 2018, alimony is neither deductible by the payer nor taxable to the recipient.",
    takeaways: [
      "Agreements made before 2019 keep the old rule (deductible by the payer, income to the recipient) unless modified to adopt the new one.",
      "Child support is never deductible or taxable.",
      "Property transfers between spouses incident to divorce are generally tax-free.",
    ],
    match: ["alimony", "child support"],
  },
];
