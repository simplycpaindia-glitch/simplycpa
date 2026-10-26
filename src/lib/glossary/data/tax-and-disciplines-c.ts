import type { GlossaryTerm } from "../types";

/** REG and discipline-section terms, third batch. */
export const regTermsC: GlossaryTerm[] = [
  {
    slug: "capital-asset",
    term: "Capital asset",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "A capital asset is most property a taxpayer holds, such as stocks, bonds and personal-use assets, except items the Internal Revenue Code excludes, such as inventory, business receivables and depreciable property or real estate used in a business.",
    takeaways: [
      "Gains on capital assets held more than one year are long-term and taxed at lower rates.",
      "Individuals can deduct up to $3,000 a year of net capital loss against ordinary income and carry the rest forward indefinitely.",
      "Losses on personal-use capital assets, such as a family car, aren't deductible.",
    ],
    related: ["holding-period", "section-1231-property"],
    match: ["capital asset", "capital gain", "capital loss"],
  },
  {
    slug: "holding-period",
    term: "Holding period",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "The holding period is how long a taxpayer has owned property. Capital assets held for more than one year produce long-term gains and losses; those held for one year or less produce short-term ones.",
    takeaways: [
      "The holding period carries over (tacks) for gifts with a carryover basis and for property received in a like-kind exchange.",
      "Inherited property is always treated as held for more than one year.",
      "Shares bought in a wash sale take over the holding period of the shares sold.",
    ],
    related: ["capital-asset", "wash-sale"],
    match: ["holding period", "long-term", "short-term"],
  },
  {
    slug: "installment-sale",
    term: "Installment sale",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "An installment sale is a sale of property in which at least one payment is received after the year of sale. The installment method spreads the gain over the years payments are received, using the gross profit percentage.",
    takeaways: [
      "Gain recognized each year = payments received × (gross profit ÷ contract price).",
      "Depreciation recapture is recognized in full in the year of sale.",
      "The method isn't available for sales of inventory or publicly traded securities.",
    ],
    example: "Land with a $120,000 basis sold for $200,000 (gross profit 40%); $50,000 is received in year 1, so $20,000 of gain is recognized.",
    related: ["depreciation-recapture"],
    match: ["installment"],
  },
  {
    slug: "involuntary-conversion",
    term: "Involuntary conversion",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "An involuntary conversion occurs when property is destroyed, stolen or condemned and the owner receives insurance or other compensation. Gain can be deferred under Section 1033 by reinvesting in similar property within the replacement period.",
    takeaways: [
      "Gain is recognized only to the extent the proceeds aren't reinvested.",
      "The replacement period is generally two years after the year the gain is realized (three years for condemned business or investment real property).",
      "The new property's basis is reduced by the deferred gain.",
    ],
    match: ["involuntary conversion", "condemn", "casualty"],
  },
  {
    slug: "dependent",
    term: "Dependent (qualifying child or relative)",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "A dependent is a qualifying child or qualifying relative whom a taxpayer can claim on a tax return. Dependents affect filing status and eligibility for credits such as the child tax credit.",
    takeaways: [
      "A qualifying child must meet relationship, age (under 19, or under 24 if a full-time student, or any age if disabled), residency and support tests.",
      "A qualifying relative must have gross income below an indexed limit and receive more than half of their support from the taxpayer.",
      "Personal exemptions for dependents are permanently zero, but dependency still matters for credits and filing status.",
    ],
    related: ["child-tax-credit", "head-of-household"],
    match: ["dependent", "qualifying child", "qualifying relative"],
  },
  {
    slug: "earned-income-credit",
    term: "Earned income credit (EIC)",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The earned income credit (EIC) is a refundable credit for low- and moderate-income workers, based on earned income, filing status and the number of qualifying children.",
    takeaways: [
      "It is refundable, so it can produce a refund even when no tax is owed.",
      "Investment income above an indexed limit disqualifies the taxpayer.",
      "Married taxpayers filing separately generally can't claim it.",
    ],
    related: ["refundable-credit"],
    match: ["earned income"],
  },
  {
    slug: "child-tax-credit",
    term: "Child tax credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The child tax credit is $2,200 per qualifying child under 17, as set permanently by the One Big Beautiful Bill Act and indexed for inflation after 2025. Part of it is refundable as the additional child tax credit.",
    takeaways: [
      "It phases out above $200,000 of modified adjusted gross income ($400,000 joint).",
      "The child must have a Social Security number, and so must the taxpayer (at least one spouse on a joint return).",
      "Dependents who don't qualify may be eligible for the $500 credit for other dependents.",
    ],
    related: ["dependent", "refundable-credit"],
    match: ["child tax credit"],
  },
  {
    slug: "self-employment-tax",
    term: "Self-employment tax",
    section: "reg",
    topic: "employee-benefits-and-payroll-tax",
    definition:
      "Self-employment tax is the Social Security and Medicare tax paid by self-employed people on their net earnings, equivalent to both the employer's and employee's share of payroll taxes: 15.3% on 92.35% of net earnings, with the Social Security part capped at the annual wage base.",
    takeaways: [
      "Half of it is deductible in computing adjusted gross income.",
      "An additional 0.9% Medicare tax applies to earnings above a threshold.",
      "General partners pay it on their distributive share of business income; S corporation shareholders don't pay it on distributions.",
    ],
    related: ["guaranteed-payment", "reasonable-compensation"],
    match: ["self-employment"],
  },
  {
    slug: "traditional-ira",
    term: "Traditional individual retirement account (IRA)",
    section: "reg",
    topic: "retirement-plans-and-tax-planning-basics",
    definition:
      "A traditional individual retirement account (IRA) is a tax-deferred retirement account. Contributions may be deductible, earnings grow tax-deferred and withdrawals are taxed as ordinary income.",
    takeaways: [
      "The deduction phases out at higher incomes if the taxpayer or spouse is covered by a workplace plan.",
      "Withdrawals before age 59½ are generally subject to a 10% additional tax, with exceptions such as up to $10,000 for a first home.",
      "Required minimum distributions begin at 73 (or 75 for those born in 1960 or later).",
    ],
    related: ["roth-ira", "required-minimum-distribution"],
    match: ["traditional IRA", "individual retirement account"],
  },
  {
    slug: "roth-ira",
    term: "Roth IRA",
    section: "reg",
    topic: "retirement-plans-and-tax-planning-basics",
    definition:
      "A Roth individual retirement account (IRA) takes after-tax contributions; qualified distributions, including earnings, are tax-free.",
    takeaways: [
      "A distribution is qualified if the account is at least five years old and the owner is 59½, disabled, deceased or using up to $10,000 for a first home.",
      "Regular contributions can be withdrawn at any time, tax- and penalty-free.",
      "There are no required minimum distributions during the owner's life, but contributions are limited at higher incomes.",
    ],
    related: ["traditional-ira", "roth-conversion"],
    match: ["Roth"],
  },
  {
    slug: "s-corporation-election",
    term: "S corporation election",
    section: "reg",
    topic: "s-corporation-taxation",
    definition:
      "An S corporation election, made on Form 2553 with all shareholders' consent, lets an eligible domestic corporation pass its income, losses, deductions and credits through to its shareholders instead of paying corporate tax.",
    takeaways: [
      "Eligibility: no more than 100 shareholders, only eligible shareholders (individuals, estates and certain trusts) and one class of stock.",
      "For it to apply to the current year, it generally must be filed by the 15th day of the third month of the year.",
      "Items are allocated pro rata by shares owned per day.",
    ],
    related: ["built-in-gains-tax", "reasonable-compensation"],
    match: ["S corporation", "S election", "2553"],
  },
  {
    slug: "constructive-dividend",
    term: "Constructive dividend",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "A constructive dividend is a benefit a corporation gives a shareholder that is treated as a dividend even though it wasn't formally declared, such as unreasonable compensation, personal use of corporate property or a bargain sale.",
    takeaways: [
      "The corporation loses any deduction it claimed, such as for excessive salary.",
      "It is taxable to the shareholder as a dividend to the extent of earnings and profits.",
      "It mainly arises in closely held corporations.",
    ],
    related: ["earnings-and-profits"],
    match: ["constructive dividend", "unreasonable compensation"],
  },
  {
    slug: "distributable-net-income",
    term: "Distributable net income (DNI)",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "Distributable net income (DNI) is a measure of a trust's or estate's income for the year that caps both the distribution deduction the trust or estate can take and the amount beneficiaries must include in their income.",
    takeaways: [
      "It keeps income from being taxed twice: once to the trust and again to the beneficiaries.",
      "Distributions carry out income with the same character, such as tax-exempt interest, to beneficiaries.",
      "Capital gains are usually excluded from it and taxed to the trust.",
    ],
    match: ["distributable net income", "DNI"],
  },
  {
    slug: "gift-tax-annual-exclusion",
    term: "Gift tax annual exclusion",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "The gift tax annual exclusion lets a donor give up to a set amount per recipient each year without using any lifetime exemption or filing a gift tax return: $19,000 per donee for 2026.",
    takeaways: [
      "It applies only to gifts of a present interest.",
      "Married couples can elect gift splitting to double it per recipient.",
      "Tuition and medical expenses paid directly to the provider are excluded without limit.",
    ],
    related: ["portability", "step-up-in-basis"],
    match: ["annual exclusion", "gift"],
  },
  {
    slug: "consideration",
    term: "Consideration (contract law)",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "Consideration is something of legal value that each party gives in exchange for the other's promise, such as money, goods, services or a promise to do or not do something. It is required for a contract to be enforceable.",
    takeaways: [
      "Past consideration and promises to do what one is already legally obliged to do are not valid consideration.",
      "Courts generally don't examine whether the consideration is adequate.",
      "Under the Uniform Commercial Code, a modification of a sale-of-goods contract needs no new consideration.",
    ],
    related: ["statute-of-frauds"],
    match: ["consideration"],
  },
  {
    slug: "chapter-7-bankruptcy",
    term: "Chapter 7 bankruptcy",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Chapter 7 bankruptcy is a liquidation: a trustee collects and sells the debtor's nonexempt assets, distributes the proceeds to creditors by priority, and most remaining debts of an individual debtor are discharged.",
    takeaways: [
      "Filing creates an automatic stay that stops most collection actions.",
      "Secured creditors are paid from their collateral; priority claims, such as certain taxes and wages, are paid before general unsecured claims.",
      "Some debts, such as most student loans, child support and certain taxes, are not discharged.",
    ],
    match: ["bankruptcy", "Chapter 7", "automatic stay"],
  },
];

export const disciplineTermsC: GlossaryTerm[] = [
  {
    slug: "free-cash-flow",
    term: "Free cash flow",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Free cash flow is commonly defined as cash flow from operations minus capital expenditures: the cash a business generates that is available to repay debt, pay dividends or buy back shares.",
    takeaways: [
      "Some analysts also subtract dividends, so check which definition a question uses.",
      "Persistent negative free cash flow can signal reliance on outside financing.",
      "It is a common input to discounted cash flow valuation.",
    ],
    related: ["dupont-analysis"],
    match: ["free cash flow"],
  },
  {
    slug: "current-ratio",
    term: "Current ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The current ratio is current assets divided by current liabilities. It measures a company's ability to pay its short-term obligations.",
    takeaways: [
      "The quick (acid-test) ratio excludes inventory and prepaid expenses.",
      "Paying a current liability with cash raises a ratio above 1 and lowers a ratio below 1.",
      "Loan covenants often require a minimum current ratio.",
    ],
    related: ["free-cash-flow"],
    match: ["current ratio", "quick ratio", "liquidity"],
  },
  {
    slug: "push-down-accounting",
    term: "Push-down accounting",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "Push-down accounting means an acquired company uses the acquirer's new basis (fair values at acquisition, including goodwill) in its own separate financial statements.",
    takeaways: [
      "An acquiree may elect it whenever an acquirer obtains control of it.",
      "Any bargain purchase gain is recognized in additional paid-in capital, not income, in the acquiree's statements.",
      "It makes the subsidiary's statements consistent with the amounts in the parent's consolidated statements.",
    ],
    related: ["goodwill", "variable-interest-entity"],
    match: ["push-down"],
  },
  {
    slug: "highly-inflationary-economy",
    term: "Highly inflationary economy",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "A highly inflationary economy is one with cumulative inflation of about 100% or more over three years. A foreign subsidiary there is accounted for as if its functional currency were the parent's reporting currency.",
    takeaways: [
      "Its statements are remeasured, not translated, so gains and losses go to net income.",
      "This avoids distorted balances from translating at rapidly falling exchange rates.",
      "The assessment is reviewed each reporting period.",
    ],
    related: ["functional-currency", "cumulative-translation-adjustment"],
    match: ["highly inflationary"],
  },
  {
    slug: "fund-balance",
    term: "Fund balance classifications",
    section: "bar",
    topic: "governmental-fund-accounting",
    definition:
      "Governmental funds classify fund balance as nonspendable, restricted, committed, assigned or unassigned, based on how strictly its use is constrained.",
    takeaways: [
      "Nonspendable: not in spendable form, such as inventory or prepaid items.",
      "Restricted: external constraints (creditors, grantors, laws); committed: formal action by the highest decision-making authority.",
      "Only the general fund normally reports a positive unassigned balance.",
    ],
    related: ["encumbrance", "general-fund"],
    match: ["fund balance", "nonspendable", "committed"],
  },
  {
    slug: "government-wide-statement-of-activities",
    term: "Statement of activities (government-wide)",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "The government-wide statement of activities shows each function's expenses, less the program revenues it generates, to give its net expense, and then shows the general revenues, such as taxes, that finance it.",
    takeaways: [
      "Program revenues: charges for services and operating and capital grants.",
      "All taxes are general revenues, even if levied for a specific purpose.",
      "It uses the economic resources focus and full accrual basis.",
    ],
    related: ["net-position"],
    match: ["statement of activities", "program revenue", "general revenue"],
  },
  {
    slug: "benfords-law",
    term: "Benford's law",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Benford's law describes the expected frequency of leading digits in many naturally occurring data sets: 1 appears first about 30% of the time, and 9 less than 5% of the time.",
    takeaways: [
      "Auditors and analysts compare actual digit frequencies with the expected pattern to spot fabricated numbers.",
      "It doesn't apply to assigned numbers (such as invoice numbers) or data with set limits.",
      "A deviation points to where to look; it isn't proof of fraud.",
    ],
    match: ["Benford"],
  },
  {
    slug: "non-gaap-financial-measure",
    term: "Non-GAAP financial measure",
    section: "bar",
    topic: "public-company-reporting-topics",
    definition:
      "A measure of performance or financial position that excludes or includes amounts in a way that differs from the most directly comparable measure under US Generally Accepted Accounting Principles (GAAP) is a non-GAAP financial measure. Adjusted earnings is a common example.",
    takeaways: [
      "Public companies must present the most directly comparable GAAP measure with equal or greater prominence.",
      "A quantitative reconciliation to that GAAP measure is required.",
      "Misleading adjustments, such as excluding normal recurring cash operating expenses, are prohibited.",
    ],
    match: ["non-GAAP"],
  },
  {
    slug: "enterprise-resource-planning",
    term: "Enterprise resource planning (ERP) system",
    section: "isc",
    topic: "information-systems-fundamentals",
    definition:
      "An enterprise resource planning (ERP) system integrates an organization's core processes, such as finance, purchasing, sales, inventory and payroll, in one system with a shared database.",
    takeaways: [
      "Data entered once flows to every module, reducing reconciliation and duplicate entry.",
      "Access rights within it enforce segregation of duties.",
      "Implementations are high-risk projects that need strong data conversion and change controls.",
    ],
    related: ["segregation-of-duties"],
    match: ["ERP", "enterprise resource"],
  },
  {
    slug: "data-warehouse",
    term: "Data warehouse",
    section: "isc",
    topic: "information-systems-fundamentals",
    definition:
      "A data warehouse is a central repository of cleaned, integrated historical data copied from operational systems and organized for reporting and analysis.",
    takeaways: [
      "It keeps analysis separate from day-to-day transaction processing.",
      "Data is structured before it is loaded; a data lake stores raw data in its native format.",
      "Extract, transform and load processes feed it, and need controls over completeness and accuracy.",
    ],
    related: ["data-governance"],
    match: ["data warehouse", "data lake"],
  },
  {
    slug: "zero-trust",
    term: "Zero trust",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Zero trust is a security model that grants no automatic trust based on network location. Every access request is authenticated, authorized and limited to the minimum needed.",
    takeaways: [
      "It replaces the traditional 'trusted internal network' perimeter model.",
      "It relies on strong identity verification, device checks and least privilege.",
      "It suits cloud services and remote work.",
    ],
    related: ["least-privilege", "multi-factor-authentication"],
    match: ["zero trust"],
  },
  {
    slug: "phishing",
    term: "Phishing",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Phishing is a social engineering attack that uses fraudulent messages, often emails, to trick people into revealing credentials, opening malware or making payments.",
    takeaways: [
      "It exploits human behavior rather than technical weaknesses.",
      "Defenses include awareness training, email filtering and multi-factor authentication.",
      "Spear phishing targets specific people; business email compromise often impersonates executives or suppliers.",
    ],
    related: ["multi-factor-authentication"],
    match: ["phishing", "social engineering"],
  },
  {
    slug: "systems-development-life-cycle",
    term: "Systems development life cycle (SDLC)",
    section: "isc",
    topic: "systems-development-life-cycle",
    definition:
      "The systems development life cycle (SDLC) is the structured process for building or acquiring systems: planning, analysis, design, development, testing, implementation and maintenance.",
    takeaways: [
      "Waterfall follows the phases in sequence; agile works in short iterations.",
      "User acceptance testing confirms the system meets business needs before go-live.",
      "Conversion approaches range from parallel (safest) to direct cutover (riskiest).",
    ],
    related: ["change-management"],
    match: ["development life cycle", "SDLC", "conversion"],
  },
  {
    slug: "data-minimization",
    term: "Data minimization",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Data minimization is the privacy principle that an organization should collect, use and keep only the personal data that is adequate, relevant and necessary for its stated purposes.",
    takeaways: [
      "It reduces the harm from any breach.",
      "It works alongside purpose limitation and storage limitation.",
      "It is required by privacy laws such as the European Union's General Data Protection Regulation.",
    ],
    related: ["personally-identifiable-information"],
    match: ["minimization", "privacy"],
  },
  {
    slug: "shared-responsibility-model",
    term: "Shared responsibility model (cloud)",
    section: "isc",
    topic: "information-systems-fundamentals",
    definition:
      "The shared responsibility model divides security duties between a cloud provider and its customer. The provider secures the underlying cloud; the customer secures what it puts in it.",
    takeaways: [
      "The customer's share is largest in infrastructure as a service and smallest in software as a service.",
      "Customers always remain responsible for their data and user access.",
      "Providers' assurance reports, such as System and Organization Controls (SOC) 2 reports, help customers rely on the provider's share.",
    ],
    related: ["soc-2-report"],
    match: ["shared responsibility", "cloud"],
  },
  {
    slug: "soc-2-report",
    term: "System and Organization Controls (SOC) 2 report",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "A System and Organization Controls (SOC) 2 report is a service auditor's report on a service organization's controls relevant to the trust services criteria: security, availability, processing integrity, confidentiality and privacy.",
    takeaways: [
      "Type 1 covers design at a point in time; Type 2 adds operating effectiveness over a period.",
      "Its use is restricted to parties with enough understanding, such as customers and regulators.",
      "A SOC 3 report is a general-use summary on the same criteria.",
    ],
    related: ["trust-services-criteria", "soc-1-report"],
    match: ["SOC 2"],
  },
  {
    slug: "health-savings-account",
    term: "Health savings account (HSA)",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "A health savings account (HSA) is a tax-advantaged account for people covered by a high-deductible health plan. Contributions are deductible (or excluded if made by an employer), growth is tax-free and withdrawals for qualified medical expenses are tax-free.",
    takeaways: [
      "Unused balances carry over and the account belongs to the individual.",
      "Withdrawals not used for medical expenses are taxable and, before 65, subject to a 20% additional tax.",
      "Contribution limits are set annually and indexed for inflation.",
    ],
    related: ["section-529-plan"],
    match: ["health savings", "HSA"],
  },
  {
    slug: "section-529-plan",
    term: "Section 529 plan",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "A Section 529 plan is a tax-advantaged education savings plan. Earnings grow tax-free, and withdrawals are tax-free when used for qualified education expenses.",
    takeaways: [
      "Withdrawals for kindergarten to 12th grade tuition are limited to $10,000 a year, rising to $20,000 from 2026.",
      "The earnings in nonqualified withdrawals are taxed and generally subject to a 10% additional tax.",
      "Contributions are gifts; a donor can elect to spread one contribution over five years of annual exclusions.",
    ],
    related: ["health-savings-account", "gift-tax-annual-exclusion"],
    match: ["529"],
  },
  {
    slug: "kiddie-tax",
    term: "Kiddie tax",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "The kiddie tax taxes a child's unearned income above a threshold at the parents' marginal rate, to stop families shifting investment income to children in lower brackets.",
    takeaways: [
      "It applies to children under 18, to 18-year-olds, and to full-time students aged 19 to 23, when their earned income doesn't exceed half their support.",
      "Earned income, such as wages, is taxed at the child's own rates.",
      "Parents can sometimes elect to report the child's income on their own return.",
    ],
    match: ["kiddie"],
  },
  {
    slug: "net-investment-income-tax",
    term: "Net investment income tax",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "The net investment income tax is a 3.8% tax on the lesser of an individual's net investment income or the amount by which modified adjusted gross income exceeds $200,000 ($250,000 for married couples filing jointly).",
    takeaways: [
      "Investment income includes interest, dividends, capital gains, rents and passive business income.",
      "The thresholds are not indexed for inflation.",
      "Distributions from qualified retirement plans and individual retirement accounts are not investment income for this tax.",
    ],
    match: ["net investment income"],
  },
  {
    slug: "roth-conversion",
    term: "Roth conversion",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A Roth conversion moves money from a traditional individual retirement account (or eligible plan) into a Roth account. The pretax amount converted is taxable now, in exchange for tax-free qualified withdrawals later.",
    takeaways: [
      "It is most attractive when the taxpayer expects higher tax rates later.",
      "If the account holds after-tax contributions, the pro rata rule decides how much of the conversion is taxable, looking at all traditional accounts together.",
      "There is no income limit on converting.",
    ],
    related: ["roth-ira", "traditional-ira"],
    match: ["conversion", "Roth"],
  },
  {
    slug: "stock-redemption",
    term: "Stock redemption",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "A stock redemption is a corporation buying back its own shares from a shareholder. It is treated as a sale (capital gain or loss) if it meets one of the tests in Section 302; otherwise it is a distribution, taxed as a dividend to the extent of earnings and profits.",
    takeaways: [
      "Sale treatment applies to redemptions that are substantially disproportionate, completely end the shareholder's interest or are not essentially equivalent to a dividend.",
      "Substantially disproportionate: after the redemption the shareholder owns less than 50% and less than 80% of their former percentage.",
      "Ownership by family members and related entities is attributed to the shareholder when applying the tests.",
    ],
    related: ["earnings-and-profits"],
    match: ["redemption", "302"],
  },
  {
    slug: "foreign-tax-credit",
    term: "Foreign tax credit",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "The foreign tax credit lets US taxpayers reduce their US income tax by foreign income taxes paid, so the same income isn't taxed twice.",
    takeaways: [
      "The credit is limited to the US tax on foreign-source income: US tax × foreign-source taxable income ÷ worldwide taxable income.",
      "Excess credits can generally be carried back one year and forward ten.",
      "Individuals can choose to deduct foreign taxes instead.",
    ],
    related: ["nexus"],
    match: ["foreign tax credit"],
  },
  {
    slug: "pass-through-entity-tax",
    term: "Pass-through entity tax (PTET)",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "A pass-through entity tax (PTET) is a state income tax that a partnership or S corporation elects to pay at the entity level. The entity deducts it federally, which works around the cap on individuals' state and local tax deductions.",
    takeaways: [
      "Owners generally receive a state credit or exclusion for the tax paid.",
      "The Internal Revenue Service confirmed in Notice 2020-75 that the payments are deductible by the entity.",
      "Each state sets its own election rules and deadlines.",
    ],
    related: ["reasonable-compensation"],
    match: ["pass-through entity", "PTET", "state and local tax"],
  },
];
