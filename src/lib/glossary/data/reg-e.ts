import type { GlossaryTerm } from "../types";

/** REG terms, fifth batch. */
export const regTermsE: GlossaryTerm[] = [
  {
    slug: "salt-deduction-cap",
    term: "State and local tax deduction cap",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "The state and local tax (SALT) deduction cap limits an individual's itemized deduction for state and local income (or sales) taxes and property taxes. The One Big Beautiful Bill Act raised it from $10,000 to $40,000 for 2025 ($20,000 for married filing separately).",
    takeaways: [
      "The cap rises by 1% a year through 2029, then returns to $10,000 in 2030.",
      "It is reduced by 30% of modified adjusted gross income over $500,000 for 2025, but never below $10,000.",
      "Taxes paid in a trade or business or on rental property are deducted for adjusted gross income and aren't capped.",
    ],
    example: "A single filer with $600,000 of modified adjusted gross income loses 30% × $100,000 = $30,000, so the cap is $10,000 for 2025.",
    related: ["itemized-deductions", "standard-deduction", "pass-through-entity-tax"],
    match: ["state and local", "SALT", "property tax"],
  },
  {
    slug: "gifted-property-basis",
    term: "Basis of gifted property",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "A person who receives property as a gift generally takes the donor's adjusted basis (a carryover basis). If the property's fair market value at the date of the gift is below the donor's basis, a dual basis rule applies.",
    takeaways: [
      "Under the dual basis rule, use the donor's basis to measure gain and the lower fair market value to measure loss.",
      "If the sale price falls between the two, no gain or loss is recognized.",
      "When the donor's basis is used, the donor's holding period carries over to the recipient.",
    ],
    example: "Stock with a donor basis of $10,000 and a value of $7,000 at the gift: sold for $6,000 there is a $1,000 loss; for $8,000, no gain or loss.",
    related: ["adjusted-basis", "holding-period", "step-up-in-basis"],
    match: ["gift", "donor", "carryover basis"],
  },
  {
    slug: "related-party-losses",
    term: "Related-party losses",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "A loss on a sale or exchange of property between related parties is disallowed. Related parties include family members (spouse, siblings, ancestors and lineal descendants) and a corporation more than 50% owned, directly or indirectly, by the seller.",
    takeaways: [
      "In-laws, aunts, uncles, nieces and nephews aren't related parties for this rule.",
      "If the buyer later sells at a gain, the disallowed loss can reduce that gain, but not create a loss.",
      "Gains on related-party sales are still recognized.",
    ],
    example: "A parent sells stock with a $5,000 basis to a child for $3,000: the $2,000 loss is disallowed. If the child later sells for $4,500, the $1,500 gain is offset and nothing is taxed.",
    related: ["adjusted-basis", "wash-sale"],
    match: ["related part", "related-party"],
  },
  {
    slug: "capital-loss-limitation",
    term: "Capital loss limitation",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Individuals can deduct a net capital loss against ordinary income only up to $3,000 a year ($1,500 if married filing separately). Corporations can deduct capital losses only against capital gains.",
    takeaways: [
      "Individuals carry an unused net capital loss forward indefinitely, keeping its short-term or long-term character.",
      "Corporations carry net capital losses back 3 years and forward 5, treated as short-term.",
      "Losses on personal-use property, such as a personal car, aren't deductible at all.",
    ],
    related: ["capital-asset", "holding-period"],
    match: ["capital loss", "$3,000"],
  },
  {
    slug: "inside-basis",
    term: "Inside basis",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "Inside basis is a partnership's tax basis in its own assets. Property a partner contributes keeps the partner's adjusted basis, so the partnership's inside basis starts out equal to the partners' total outside basis, ignoring liabilities.",
    takeaways: [
      "The two can drift apart, for example when a partnership interest is bought or inherited.",
      "A section 754 election adjusts inside basis to reflect the new partner's outside basis.",
      "The partnership's holding period for contributed capital assets and section 1231 property includes the partner's.",
    ],
    related: ["outside-basis", "section-754-election"],
    match: ["inside basis"],
  },
  {
    slug: "hobby-loss-rules",
    term: "Hobby loss rules",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "Under the hobby loss rules, income from an activity not engaged in for profit is included in gross income, but the related expenses are not deductible, because miscellaneous itemized deductions are permanently eliminated.",
    takeaways: [
      "An activity is presumed to be for profit if it shows a profit in 3 of 5 consecutive years (2 of 7 for horse breeding and racing).",
      "Factors include how the activity is run, the taxpayer's expertise and time spent, and the history of income or losses.",
      "A business activity, by contrast, can deduct its expenses and may produce a loss.",
    ],
    related: ["gross-income", "itemized-deductions"],
    match: ["hobby", "not engaged in for profit"],
  },
  {
    slug: "accumulated-adjustments-account",
    term: "Accumulated adjustments account",
    section: "reg",
    topic: "s-corporation-taxation",
    definition:
      "The accumulated adjustments account (AAA) tracks an S corporation's income that has been taxed to shareholders but not yet distributed. It decides how distributions are taxed when the corporation still has earnings and profits from its C corporation years.",
    takeaways: [
      "Distributions come first from the account (tax-free up to stock basis), then from accumulated earnings and profits (taxable dividends), then from remaining basis.",
      "Losses can make the account negative, but distributions can't.",
      "An S corporation with no earnings and profits from C corporation years treats distributions as a return of basis.",
    ],
    related: ["s-corporation-election", "earnings-and-profits"],
    match: ["accumulated adjustments", "AAA"],
  },
  {
    slug: "estimated-tax-payments",
    term: "Estimated tax payments",
    section: "reg",
    topic: "federal-tax-procedures-and-penalties",
    definition:
      "Individuals whose tax isn't covered by withholding pay estimated tax in four installments, due April 15, June 15, September 15 and January 15. An underpayment penalty applies if too little is paid on time.",
    takeaways: [
      "No penalty applies if the tax owed after withholding is under $1,000.",
      "Safe harbors: pay at least 90% of this year's tax or 100% of last year's (110% if last year's adjusted gross income exceeded $150,000).",
      "Withholding is treated as paid evenly through the year, whenever it actually occurred.",
    ],
    related: ["self-employment-tax", "accuracy-related-penalty"],
    match: ["estimated tax", "underpayment", "safe harbor"],
  },
  {
    slug: "innocent-spouse-relief",
    term: "Innocent spouse relief",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "Spouses who file a joint return are each liable for the full tax. Innocent spouse relief lets one spouse escape tax on an understatement caused by the other spouse's erroneous items that the requesting spouse didn't know, and had no reason to know, about.",
    takeaways: [
      "The three forms are innocent spouse relief, separation of liability and equitable relief.",
      "It is generally requested on Form 8857 within 2 years after the Internal Revenue Service begins collection.",
      "It must be inequitable to hold the requesting spouse liable.",
    ],
    related: ["head-of-household", "statute-of-limitations"],
    match: ["innocent spouse", "joint and several", "joint return"],
  },
  {
    slug: "fica-taxes",
    term: "FICA taxes",
    section: "reg",
    topic: "employee-benefits-and-payroll-tax",
    definition:
      "Federal Insurance Contributions Act (FICA) taxes fund Social Security and Medicare. Employers and employees each pay 6.2% Social Security tax on wages up to an annual wage base and 1.45% Medicare tax on all wages.",
    takeaways: [
      "Employees pay an additional 0.9% Medicare tax on wages over $200,000; employers withhold it but don't match it.",
      "The employer's share is deductible; the employee's share is not.",
      "Self-employed people pay both halves through self-employment tax.",
    ],
    related: ["self-employment-tax", "worker-classification"],
    match: ["FICA", "Social Security", "Medicare", "payroll tax"],
  },
  {
    slug: "suretyship",
    term: "Suretyship",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "In a suretyship, a surety promises a creditor to pay a debtor's obligation. A surety is primarily liable, so the creditor can demand payment from the surety without first pursuing the debtor.",
    takeaways: [
      "A surety who pays has rights of reimbursement from the debtor, subrogation to the creditor's rights, and contribution from co-sureties.",
      "A surety can use most of the debtor's defenses, but not the debtor's incapacity or bankruptcy.",
      "A promise to answer for another's debt must generally be in writing.",
    ],
    related: ["statute-of-frauds", "perfection-of-security-interest"],
    match: ["surety", "guarantor", "subrogation"],
  },
  {
    slug: "automatic-stay",
    term: "Automatic stay",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Filing a bankruptcy petition automatically stops most collection actions against the debtor and the debtor's property, including lawsuits, foreclosures, repossessions and collection calls.",
    takeaways: [
      "It doesn't stop criminal proceedings or the collection of child support and alimony from property outside the bankruptcy estate.",
      "A creditor can ask the court for relief from the stay, for example when its collateral isn't adequately protected.",
      "Actions taken in violation of the stay are generally void.",
    ],
    related: ["chapter-7-bankruptcy"],
    match: ["automatic stay", "petition"],
  },
  {
    slug: "promissory-estoppel",
    term: "Promissory estoppel",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Promissory estoppel makes a promise enforceable without consideration when the promisor should reasonably expect the promisee to rely on it, the promisee does rely on it to their detriment, and injustice can be avoided only by enforcing it.",
    takeaways: [
      "It substitutes for consideration; it doesn't create a contract where the other elements are missing.",
      "Courts may limit recovery to the losses caused by the reliance.",
      "Common examples are charitable pledges and promises of gifts relied on by the recipient.",
    ],
    related: ["consideration"],
    match: ["promissory estoppel", "detrimental reliance"],
  },
  {
    slug: "piercing-the-corporate-veil",
    term: "Piercing the corporate veil",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "Piercing the corporate veil is when a court disregards a corporation's separate existence and holds its owners personally liable for its debts, usually because the corporation was used to commit fraud or was operated as the owners' alter ego.",
    takeaways: [
      "Warning signs include commingling personal and corporate funds, ignoring corporate formalities and inadequate capitalization.",
      "Courts apply it rarely, mostly to closely held businesses.",
      "The same doctrine can apply to limited liability companies.",
    ],
    related: ["limited-liability-company", "general-partnership"],
    match: ["veil", "alter ego", "limited liability"],
  },
  {
    slug: "lifetime-learning-credit",
    term: "Lifetime learning credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The lifetime learning credit is a nonrefundable education credit equal to 20% of up to $10,000 of qualified tuition and related expenses, a maximum of $2,000 per return, for any year of postsecondary education.",
    takeaways: [
      "Unlike the American opportunity credit, it has no limit on the number of years and no half-time enrollment requirement.",
      "Both credits can't be claimed for the same student in the same year.",
      "It phases out at higher levels of modified adjusted gross income.",
    ],
    related: ["american-opportunity-credit", "refundable-credit"],
    match: ["lifetime learning", "education credit"],
  },
];
