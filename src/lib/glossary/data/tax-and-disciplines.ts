import type { GlossaryTerm } from "../types";

// REG, plus the BAR, ISC and TCP discipline sections.

export const regTerms: GlossaryTerm[] = [
  {
    slug: "adjusted-gross-income",
    term: "Adjusted gross income (AGI)",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "Adjusted gross income (AGI) is an individual's gross income minus specific 'above-the-line' adjustments, such as deductible individual retirement account contributions, student loan interest and half of self-employment tax.",
    takeaways: [
      "Many limits and phase-outs are based on AGI or a modified version of it.",
      "The standard or itemized deductions, and the qualified business income deduction, come after AGI.",
      "Medical expenses are deductible only above 7.5% of AGI.",
    ],
    related: ["qualified-business-income-deduction"],
    match: ["adjusted gross income", "AGI"],
  },
  {
    slug: "qualified-business-income-deduction",
    term: "Qualified business income (QBI) deduction",
    section: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    definition:
      "The qualified business income (QBI) deduction under Section 199A lets eligible individuals deduct up to 20% of qualified business income from sole proprietorships, partnerships and S corporations. The One Big Beautiful Bill Act made it permanent.",
    takeaways: [
      "It is taken after adjusted gross income, and taxpayers who itemize and those who don't can both claim it.",
      "Above income thresholds, wage and property limits apply, and specified service businesses lose the deduction.",
      "Wages paid to an S corporation owner and guaranteed payments to partners aren't qualified business income.",
    ],
    related: ["adjusted-gross-income"],
    match: ["qualified business income", "QBI", "199A"],
  },
  {
    slug: "adjusted-basis",
    term: "Adjusted basis",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "Adjusted basis is a property's original basis (usually cost) increased by capital improvements and reduced by depreciation, casualty losses and other recoveries of capital. Gain or loss on sale is the amount realized minus adjusted basis.",
    takeaways: [
      "Gifted property generally keeps the donor's basis; if its value at the gift was lower, that value is used to measure a loss.",
      "Inherited property generally takes a basis equal to fair market value at the date of death.",
      "Basis in property received in a like-kind exchange reflects the deferred gain.",
    ],
    related: ["like-kind-exchange", "step-up-in-basis"],
    match: ["basis"],
  },
  {
    slug: "like-kind-exchange",
    term: "Like-kind exchange (Section 1031)",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "A like-kind exchange under Section 1031 defers gain or loss when real property held for business or investment is exchanged for other real property held for business or investment.",
    takeaways: [
      "Since 2018 only real property qualifies; personal property such as equipment doesn't.",
      "Gain is recognized to the extent of boot (cash or other property) received.",
      "The new property's basis is the old basis plus gain recognized minus boot received.",
    ],
    example: "A building with a $200,000 basis is exchanged for a building worth $300,000 plus $50,000 cash: gain of $50,000 is recognized and the new basis is $200,000.",
    related: ["adjusted-basis"],
    match: ["like-kind", "1031"],
  },
  {
    slug: "section-1231-property",
    term: "Section 1231 property",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Section 1231 property is depreciable property and real property used in a trade or business and held for more than one year. A net Section 1231 gain is treated as long-term capital gain; a net loss is ordinary.",
    takeaways: [
      "Depreciation recapture is applied first, before Section 1231 treatment.",
      "Net gain is recharacterized as ordinary to the extent of net Section 1231 losses in the prior five years.",
      "Inventory and property held mainly for sale to customers are excluded.",
    ],
    related: ["depreciation-recapture"],
    match: ["1231"],
  },
  {
    slug: "depreciation-recapture",
    term: "Depreciation recapture",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Depreciation recapture treats part of the gain on selling depreciated business property as ordinary income rather than capital gain, to reverse the benefit of earlier depreciation deductions.",
    takeaways: [
      "For Section 1245 property (equipment), gain is ordinary up to all depreciation taken.",
      "For individuals' real property, gain from straight-line depreciation is unrecaptured Section 1250 gain, taxed at up to 25%.",
      "Recapture is recognized in full in the year of sale, even in an installment sale.",
    ],
    example: "Equipment cost $80,000, depreciation $50,000, sold for $70,000: the $40,000 gain is all ordinary income.",
    related: ["section-1231-property"],
    match: ["recapture", "1245", "1250"],
  },
  {
    slug: "alternative-minimum-tax",
    term: "Alternative minimum tax (AMT)",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The alternative minimum tax (AMT) is a parallel tax system that recalculates income with fewer deductions and preferences. A taxpayer pays the AMT if the tentative minimum tax is higher than regular tax.",
    takeaways: [
      "Common adjustments include state and local taxes, the standard deduction, the incentive stock option bargain element and depreciation differences.",
      "An exemption amount reduces alternative minimum taxable income and phases out at higher incomes.",
      "AMT from timing items creates a minimum tax credit usable in later years.",
    ],
    match: ["alternative minimum", "AMT"],
  },
  {
    slug: "circular-230",
    term: "Circular 230",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "Circular 230 is the set of Treasury regulations governing practice before the Internal Revenue Service by attorneys, certified public accountants, enrolled agents and others.",
    takeaways: [
      "A practitioner who learns of a client's error or omission must tell the client promptly and explain the consequences.",
      "Contingent fees are generally prohibited, with limited exceptions.",
      "Sanctions include censure, suspension, disbarment and monetary penalties.",
    ],
    match: ["Circular 230"],
  },
  {
    slug: "passive-activity-loss",
    term: "Passive activity loss",
    section: "reg",
    topic: "individual-taxation-gross-income",
    definition:
      "A passive activity loss is a loss from a trade or business in which the taxpayer doesn't materially participate, or (generally) from rental activities. It can offset only passive income; the excess is suspended and carried forward.",
    takeaways: [
      "Suspended losses are released when the taxpayer disposes of the whole activity in a taxable transaction.",
      "Active participants in rental real estate may deduct up to $25,000 of rental losses, phased out between $100,000 and $150,000 of modified adjusted gross income.",
      "Losses must first pass the basis and at-risk limits.",
    ],
    match: ["passive"],
  },
  {
    slug: "outside-basis",
    term: "Outside basis",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "Outside basis is a partner's tax basis in a partnership interest. It starts with money and the adjusted basis of property contributed, rises with the partner's share of income and liabilities, and falls with distributions, losses and decreases in liabilities.",
    takeaways: [
      "Losses are deductible only up to outside basis.",
      "Cash distributions above outside basis trigger gain.",
      "Inside basis is the partnership's own basis in its assets.",
    ],
    match: ["outside basis", "partnership interest"],
  },
  {
    slug: "earnings-and-profits",
    term: "Earnings and profits (E&P)",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "Earnings and profits (E&P) measure a corporation's economic ability to pay dividends. Distributions are dividends to the extent of current and then accumulated earnings and profits.",
    takeaways: [
      "Distributions beyond earnings and profits are a tax-free return of stock basis, then capital gain.",
      "Current earnings and profits support dividends even when accumulated earnings and profits are negative.",
      "It differs from taxable income; for example, tax-exempt income increases it and federal income tax reduces it.",
    ],
    match: ["earnings and profits", "E&P"],
  },
];

export const disciplineTerms: GlossaryTerm[] = [
  {
    slug: "variable-interest-entity",
    term: "Variable interest entity (VIE)",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "A variable interest entity (VIE) is an entity whose equity investors lack enough equity at risk or the usual characteristics of a controlling financial interest. It is consolidated by its primary beneficiary rather than by voting control.",
    takeaways: [
      "The primary beneficiary has both the power to direct the activities that most affect the entity's performance and the obligation to absorb losses or right to receive benefits that could be significant.",
      "Variable interests include equity, loans, guarantees and certain contracts.",
      "The assessment is reconsidered when facts change.",
    ],
    match: ["variable interest", "VIE", "primary beneficiary"],
  },
  {
    slug: "cash-flow-hedge",
    term: "Cash flow hedge",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A cash flow hedge protects against variability in future cash flows of a recognized asset or liability or a forecasted transaction. Changes in the hedging instrument's fair value go to other comprehensive income until the hedged item affects earnings.",
    takeaways: [
      "Hedges of forecasted transactions can only be cash flow hedges.",
      "Amounts are reclassified into earnings in the same period, and income statement line, as the hedged item.",
      "Hedge accounting requires formal documentation at inception.",
    ],
    related: ["other-comprehensive-income"],
    match: ["cash flow hedge"],
  },
  {
    slug: "functional-currency",
    term: "Functional currency",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "A company's functional currency is the currency of the primary economic environment in which it operates, normally the one in which it generates and spends cash.",
    takeaways: [
      "Indicators include the currencies of cash flows, sales prices, expenses and financing.",
      "Records kept in another currency are remeasured into the functional currency, with gains and losses in net income.",
      "Statements in a functional currency other than the reporting currency are translated, with adjustments in other comprehensive income.",
    ],
    match: ["functional currency", "remeasure", "translat"],
  },
  {
    slug: "projected-benefit-obligation",
    term: "Projected benefit obligation (PBO)",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "The projected benefit obligation (PBO) is the actuarial present value of pension benefits earned by employees to date, measured using expected future salary levels.",
    takeaways: [
      "It increases with service cost, interest cost and actuarial losses, and decreases with benefits paid.",
      "The accumulated benefit obligation uses current salaries instead of future ones.",
      "The funded status, plan assets minus the obligation, is reported on the balance sheet.",
    ],
    match: ["projected benefit", "PBO", "pension"],
  },
  {
    slug: "net-position",
    term: "Net position",
    section: "bar",
    topic: "government-wide-financial-statements",
    definition:
      "Net position is the residual of a government's assets and deferred outflows less its liabilities and deferred inflows, reported in the government-wide statement of net position.",
    takeaways: [
      "It is split into net investment in capital assets, restricted and unrestricted.",
      "Net investment in capital assets equals capital assets net of depreciation, less related debt.",
      "Governmental funds report fund balance instead, using different classifications.",
    ],
    related: ["modified-accrual-basis"],
    match: ["net position"],
  },
  {
    slug: "it-general-controls",
    term: "Information technology general controls (ITGCs)",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Information technology general controls (ITGCs) are controls over the information technology (IT) environment that support the effective operation of application controls, covering access to programs and data, program changes, program development and computer operations.",
    takeaways: [
      "If they are ineffective, the auditor can't rely on automated application controls without more testing.",
      "Examples include user access reviews, change approval and backups.",
      "Effective change management supports testing an automated control once.",
    ],
    match: ["general control", "ITGC"],
  },
  {
    slug: "multi-factor-authentication",
    term: "Multi-factor authentication (MFA)",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Multi-factor authentication (MFA) requires a user to present factors from at least two different categories: something they know, something they have and something they are.",
    takeaways: [
      "A password plus a security question is two knowledge factors, so it isn't multi-factor.",
      "A password plus a code from a phone app is multi-factor.",
      "It greatly reduces the risk from stolen passwords.",
    ],
    match: ["multi-factor", "authentication"],
  },
  {
    slug: "recovery-time-objective",
    term: "Recovery time objective (RTO)",
    section: "isc",
    topic: "incident-response",
    definition:
      "The recovery time objective (RTO) is the maximum acceptable time to restore a system or process after a disruption.",
    takeaways: [
      "The recovery point objective is the maximum acceptable data loss, measured back in time.",
      "Both are set from a business impact analysis.",
      "Shorter objectives need costlier solutions, such as hot sites or real-time replication.",
    ],
    match: ["recovery time", "RTO", "recovery point"],
  },
  {
    slug: "trust-services-criteria",
    term: "Trust services criteria",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "The trust services criteria are the criteria used in System and Organization Controls (SOC) 2 and SOC 3 engagements, organized into five categories: security, availability, processing integrity, confidentiality and privacy.",
    takeaways: [
      "Security, the common criteria, is included in every SOC 2 engagement.",
      "The other categories are added depending on the services and users' needs.",
      "SOC 2 reports are restricted use; SOC 3 reports are general use.",
    ],
    related: ["soc-1-report"],
    match: ["trust services", "SOC 2"],
  },
  {
    slug: "segregation-of-duties",
    term: "Segregation of duties",
    section: "isc",
    topic: "business-process-automation",
    definition:
      "Segregation of duties means dividing authorization, custody of assets and recording of transactions among different people, so that no one person can both commit and conceal an error or fraud.",
    takeaways: [
      "Combining custody and recording allows theft to be hidden in the records.",
      "In systems, it is enforced through user roles and access rights.",
      "When it isn't practical, compensating controls such as independent review are needed.",
    ],
    match: ["segregation"],
  },
  {
    slug: "wash-sale",
    term: "Wash sale",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A wash sale occurs when a taxpayer sells securities at a loss and buys substantially identical securities within 30 days before or after the sale. The loss is disallowed and added to the basis of the new shares.",
    takeaways: [
      "The loss is deferred, not lost.",
      "The holding period of the old shares carries over to the replacement shares.",
      "Gains are not affected by the rule.",
    ],
    example: "Shares sold at a $4,000 loss are bought back 10 days later for $12,000; the new basis is $16,000.",
    match: ["wash sale"],
  },
  {
    slug: "required-minimum-distribution",
    term: "Required minimum distribution (RMD)",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A required minimum distribution (RMD) is the minimum amount that must be withdrawn each year from a traditional individual retirement account or employer plan once the owner reaches the required beginning age.",
    takeaways: [
      "The age is 73 for people born 1951–1959 and 75 for those born in 1960 or later.",
      "Roth individual retirement accounts have no required distributions during the owner's life.",
      "Qualified charitable distributions count toward the requirement.",
    ],
    match: ["required minimum", "RMD"],
  },
  {
    slug: "step-up-in-basis",
    term: "Step-up in basis",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A step-up in basis gives property inherited from a decedent a tax basis equal to its fair market value at the date of death (or the alternate valuation date), so appreciation during the decedent's life is never taxed as income.",
    takeaways: [
      "Inherited property is treated as held for more than one year.",
      "Gifted property gets a carryover basis instead, so lifetime gifts of appreciated assets pass the built-in gain to the recipient.",
      "With a high estate tax exemption, holding appreciated assets until death is often better than gifting them.",
    ],
    related: ["adjusted-basis"],
    match: ["step-up", "inherited", "basis"],
  },
  {
    slug: "qualified-small-business-stock",
    term: "Qualified small business stock (Section 1202)",
    section: "tcp",
    topic: "entity-choice-and-structuring",
    definition:
      "Qualified small business stock under Section 1202 is stock in a domestic C corporation, acquired at original issue, that lets non-corporate shareholders exclude some or all of the gain on sale if holding period and other requirements are met.",
    takeaways: [
      "For stock issued after July 4, 2025: 50% exclusion after 3 years, 75% after 4 and 100% after 5.",
      "The gain eligible for exclusion is capped per issuer, and the corporation's gross assets must be under a limit when the stock is issued.",
      "S corporation stock doesn't qualify.",
    ],
    match: ["1202", "qualified small business"],
  },
  {
    slug: "built-in-gains-tax",
    term: "Built-in gains tax",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "The built-in gains tax is a corporate-level tax on an S corporation that was formerly a C corporation, imposed when it sells assets that had unrealized gains at the date it converted, within the recognition period.",
    takeaways: [
      "The recognition period is five years after the S election takes effect.",
      "It prevents C corporations from avoiding corporate tax by electing S status just before a sale.",
      "It is taxed at the highest corporate rate.",
    ],
    match: ["built-in gain"],
  },
];
