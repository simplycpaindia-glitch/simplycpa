import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, fifth batch. */
export const disciplineTermsE: GlossaryTerm[] = [
  // BAR
  {
    slug: "quick-ratio",
    term: "Quick ratio (acid-test ratio)",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The quick ratio measures a company's ability to pay current liabilities with its most liquid assets: cash, marketable securities and net receivables, divided by current liabilities.",
    takeaways: [
      "It leaves out inventory and prepaid expenses, which take longer to turn into cash.",
      "It is always lower than or equal to the current ratio.",
      "Paying off a current liability with cash raises the ratio when it is above 1 and lowers it when it is below 1.",
    ],
    example: "Cash $20,000, receivables $40,000, inventory $50,000 and current liabilities $50,000: the quick ratio is 1.2 and the current ratio 2.2.",
    related: ["current-ratio", "cash-conversion-cycle"],
    match: ["quick ratio", "acid-test", "acid test"],
  },
  {
    slug: "days-sales-outstanding",
    term: "Days sales outstanding",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Days sales outstanding is the average number of days it takes to collect receivables: 365 divided by the receivables turnover (net credit sales ÷ average accounts receivable).",
    takeaways: [
      "A rising figure can signal looser credit terms, weaker collections or aggressive revenue recognition.",
      "It is one part of the cash conversion cycle, with days in inventory and days payables outstanding.",
      "Compare it with the company's credit terms and with peers.",
    ],
    example: "Net credit sales of $730,000 and average receivables of $60,000: turnover is about 12.2, so about 30 days.",
    related: ["cash-conversion-cycle", "inventory-turnover"],
    match: ["days sales", "receivables turnover", "collection period"],
  },
  {
    slug: "interest-rate-swap",
    term: "Interest rate swap",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "An interest rate swap is a derivative in which two parties exchange interest payments, typically fixed for variable, on a notional amount. The principal itself isn't exchanged.",
    takeaways: [
      "Swapping fixed-rate debt to variable is usually a fair value hedge; swapping variable-rate debt to fixed is a cash flow hedge.",
      "The swap is recognized at fair value on the balance sheet.",
      "Private companies can use a simplified hedge accounting approach for certain receive-variable, pay-fixed swaps.",
    ],
    related: ["fair-value-hedge", "cash-flow-hedge", "embedded-derivative"],
    match: ["swap", "notional"],
  },
  {
    slug: "foreign-currency-transaction-gain-or-loss",
    term: "Foreign currency transaction gain or loss",
    section: "bar",
    topic: "foreign-currency-translation",
    definition:
      "A foreign currency transaction gain or loss arises when exchange rates change between the date of a transaction denominated in a foreign currency, such as a purchase on credit, and its settlement or the balance sheet date.",
    takeaways: [
      "Receivables and payables in a foreign currency are remeasured at the current rate at each balance sheet date.",
      "The gains and losses go to net income, unlike translation adjustments, which go to other comprehensive income.",
      "Gains and losses on items designated as hedges of a net investment in a foreign operation are an exception.",
    ],
    example: "A payable of 100,000 euros recorded at $1.10 and paid at $1.14 produces a $4,000 transaction loss.",
    related: ["functional-currency", "cumulative-translation-adjustment"],
    match: ["transaction gain", "transaction loss", "denominated"],
  },
  {
    slug: "accumulated-benefit-obligation",
    term: "Accumulated benefit obligation",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "The accumulated benefit obligation is the actuarial present value of pension benefits earned to date, based on employees' current salary levels.",
    takeaways: [
      "The projected benefit obligation uses expected future salaries, so it is equal to or larger than the accumulated benefit obligation.",
      "Funded status on the balance sheet is based on the projected benefit obligation, not the accumulated one.",
      "The accumulated benefit obligation is disclosed in the notes.",
    ],
    related: ["projected-benefit-obligation", "prior-service-cost"],
    match: ["accumulated benefit"],
  },
  {
    slug: "regression-analysis",
    term: "Regression analysis",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "Regression analysis estimates how a dependent variable, such as total cost, changes with one or more independent variables, such as machine hours, by fitting an equation like y = a + bx to past data.",
    takeaways: [
      "The coefficient of determination (R²) shows the share of the variation in the dependent variable explained by the model.",
      "It is used for cost estimation, forecasting and analytical procedures.",
      "A strong relationship doesn't prove cause and effect, and predictions outside the range of the data are unreliable.",
    ],
    example: "Cost = $12,000 + $4 × machine hours predicts $32,000 of cost at 5,000 hours.",
    related: ["financial-forecast-vs-projection", "benfords-law"],
    match: ["regression", "R²", "coefficient of determination"],
  },
  {
    slug: "grant-date-fair-value",
    term: "Grant-date fair value",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "Equity-classified share-based awards, such as stock options, are measured at their fair value on the grant date, estimated with an option-pricing model, and that cost is recognized over the employee's requisite service period.",
    takeaways: [
      "Equity awards aren't remeasured after the grant date; liability-classified awards are remeasured each period.",
      "Companies elect either to estimate forfeitures or to account for them as they occur.",
      "Option-pricing models include Black-Scholes-Merton and lattice models.",
    ],
    related: ["restricted-stock-unit", "market-condition"],
    match: ["grant date", "grant-date", "option-pricing"],
  },
  {
    slug: "unguaranteed-residual-value",
    term: "Unguaranteed residual value",
    section: "bar",
    topic: "lease-accounting-lessor",
    definition:
      "Unguaranteed residual value is the part of a leased asset's expected value at the end of the lease that the lessor expects to recover but that isn't guaranteed by the lessee or a third party.",
    takeaways: [
      "In a sales-type lease, the lessor's net investment is the lease receivable plus the present value of the unguaranteed residual.",
      "Revenue and cost of goods sold both exclude the present value of the unguaranteed residual, so profit is unaffected.",
      "A guaranteed residual is included in the lease receivable instead.",
    ],
    related: ["sales-type-lease", "direct-financing-lease"],
    match: ["residual"],
  },
  {
    slug: "bill-and-hold-arrangement",
    term: "Bill-and-hold arrangement",
    section: "bar",
    topic: "revenue-for-specific-industries",
    definition:
      "In a bill-and-hold arrangement, a seller bills a customer for a product but keeps physical possession of it until a later date. Revenue is recognized only when control has passed to the customer.",
    takeaways: [
      "Control passes only if there is a substantive reason for the arrangement, the product is separately identified as the customer's, it is ready for transfer, and the seller can't use it or send it to another customer.",
      "The seller may have a separate performance obligation for custodial services.",
      "Auditors treat these arrangements as a fraud risk for early revenue recognition.",
    ],
    related: ["input-method"],
    match: ["bill-and-hold", "bill and hold"],
  },
  // ISC
  {
    slug: "symmetric-encryption",
    term: "Symmetric encryption",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Symmetric encryption uses the same secret key to encrypt and decrypt data. It is fast, so it is used to protect large volumes of data, but the key must be shared securely between the parties.",
    takeaways: [
      "The Advanced Encryption Standard (AES) is the most widely used symmetric algorithm.",
      "Secure web connections use asymmetric encryption to exchange a symmetric session key, then symmetric encryption for the data.",
      "Anyone who obtains the key can read the data, so key management is critical.",
    ],
    related: ["asymmetric-encryption", "hashing"],
    match: ["symmetric", "secret key", "AES"],
  },
  {
    slug: "virtual-private-network",
    term: "Virtual private network",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A virtual private network (VPN) creates an encrypted tunnel over a public network, such as the internet, so remote users can connect securely to an organization's internal network.",
    takeaways: [
      "It protects data in transit from interception but doesn't protect a compromised device at either end.",
      "Access should still require strong authentication, such as multi-factor authentication.",
      "Zero trust approaches avoid granting broad network access just because a user is connected.",
    ],
    related: ["zero-trust", "multi-factor-authentication", "firewall"],
    match: ["VPN", "virtual private", "remote access"],
  },
  {
    slug: "denial-of-service-attack",
    term: "Denial-of-service attack",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A denial-of-service attack floods a system or network with traffic or requests so legitimate users can't reach it. A distributed denial-of-service (DDoS) attack uses many compromised devices at once.",
    takeaways: [
      "It targets availability, one of the three security objectives alongside confidentiality and integrity.",
      "Defenses include traffic filtering, rate limiting, scrubbing services and spare capacity.",
      "The devices used are often part of a botnet controlled by the attacker.",
    ],
    related: ["firewall", "business-continuity-plan"],
    match: ["denial-of-service", "denial of service", "DDoS", "botnet"],
  },
  {
    slug: "patch-management",
    term: "Patch management",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Patch management is the process of identifying, testing, approving and installing software updates that fix security vulnerabilities and defects, across all of an organization's systems.",
    takeaways: [
      "Patches are prioritized by the severity of the vulnerability and the importance of the system.",
      "They follow change management: tested before production, with an emergency procedure for critical fixes.",
      "An accurate inventory of hardware and software is needed to know what to patch.",
    ],
    related: ["change-management", "it-general-controls"],
    match: ["patch", "vulnerabilit"],
  },
  {
    slug: "data-lake",
    term: "Data lake",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "A data lake is a central repository that stores large volumes of raw data in its original format, whether structured, semi-structured or unstructured, until it is needed for analysis.",
    takeaways: [
      "A data warehouse structures data before storing it; a data lake applies structure when the data is read.",
      "Without metadata and governance, a data lake becomes hard to search and trust.",
      "Access controls matter because raw data may include sensitive information.",
    ],
    related: ["data-warehouse", "data-governance"],
    match: ["data lake", "unstructured"],
  },
  {
    slug: "chain-of-custody",
    term: "Chain of custody",
    section: "isc",
    topic: "incident-response",
    definition:
      "Chain of custody is the documented record of who collected, handled, transferred and stored evidence, such as a disk image or log files, from the moment it is gathered, so it can be shown not to have been altered.",
    takeaways: [
      "Each transfer records the date, time, people involved and purpose.",
      "Forensic copies are verified with hash values and analysis is done on the copy, not the original.",
      "A broken chain can make evidence unusable in legal proceedings or insurance claims.",
    ],
    related: ["hashing", "intrusion-detection-system"],
    match: ["chain of custody", "evidence", "forensic"],
  },
  {
    slug: "inclusive-method",
    term: "Inclusive method",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "Under the inclusive method, a service organization's description of its system includes the relevant controls of a subservice organization it uses, and the service auditor's report covers them.",
    takeaways: [
      "It needs the subservice organization's cooperation and a written assertion from its management.",
      "Under the carve-out method, the subservice organization's controls are excluded and only monitored.",
      "Users of a carve-out report may need the subservice organization's own report.",
    ],
    related: ["carve-out-method", "soc-2-report"],
    match: ["inclusive method", "subservice"],
  },
  {
    slug: "data-subject-rights",
    term: "Data subject rights",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Data subject rights are individuals' rights over their personal data under privacy laws. Under the General Data Protection Regulation (GDPR) they include access, correction, erasure, restriction, portability and objection.",
    takeaways: [
      "Requests under that regulation must generally be answered within one month, extendable by two months for complex cases.",
      "California law gives consumers similar rights to know, delete, correct and opt out of the sale or sharing of their data.",
      "Organizations need to verify the requester's identity and know where the data is stored.",
    ],
    related: ["gdpr", "personally-identifiable-information", "data-minimization"],
    match: ["data subject", "right to be forgotten", "erasure"],
  },
  {
    slug: "cloud-service-models",
    term: "Cloud service models",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "The three main cloud service models are infrastructure as a service (IaaS), platform as a service (PaaS) and software as a service (SaaS). Each shifts more of the technology stack from the customer to the provider.",
    takeaways: [
      "With infrastructure as a service, the customer manages operating systems, applications and data; the provider runs the hardware and network.",
      "With software as a service, the provider runs nearly everything, but the customer still manages its users, data and access settings.",
      "The customer always remains responsible for its own data and for monitoring the provider.",
    ],
    related: ["shared-responsibility-model", "soc-2-report"],
    match: ["cloud", "SaaS", "IaaS", "PaaS"],
  },
  // TCP
  {
    slug: "backdoor-roth-ira",
    term: "Backdoor Roth IRA",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A backdoor Roth individual retirement account (IRA) contribution is a nondeductible contribution to a traditional account that is then converted to a Roth account, a way around the income limit on direct Roth contributions.",
    takeaways: [
      "Under the pro rata rule, the taxable part of the conversion depends on all of the person's pre-tax individual retirement account balances at year-end, including employer-sponsored ones.",
      "The nondeductible basis is tracked on Form 8606.",
      "Conversions can't be undone (recharacterized).",
    ],
    related: ["roth-conversion", "roth-ira", "traditional-ira"],
    match: ["backdoor", "nondeductible contribution", "pro rata"],
  },
  {
    slug: "net-unrealized-appreciation",
    term: "Net unrealized appreciation",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "When employer stock is taken out of a qualified retirement plan in a lump-sum distribution, only the plan's cost basis in the shares is taxed as ordinary income. The net unrealized appreciation is taxed as long-term capital gain when the shares are sold.",
    takeaways: [
      "The lump-sum distribution must follow separation from service, reaching age 59½, disability or death.",
      "Growth after the distribution is short- or long-term depending on how long the shares are then held.",
      "Net unrealized appreciation gets no step-up in basis at death.",
    ],
    example: "Shares with a plan basis of $50,000 and a value of $300,000: $50,000 is ordinary income now; the $250,000 is long-term gain on sale.",
    related: ["required-minimum-distribution", "step-up-in-basis"],
    match: ["unrealized appreciation", "employer stock", "lump-sum"],
  },
  {
    slug: "gift-splitting",
    term: "Gift splitting",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "Gift splitting lets a married couple treat a gift made by one spouse to a third party as made half by each spouse, so they can use both annual exclusions and both lifetime exemptions.",
    takeaways: [
      "Both spouses must consent, and the election applies to all gifts either spouse makes during the year.",
      "A gift tax return (Form 709) is required even if no tax is due.",
      "Gifts between spouses use the unlimited marital deduction instead.",
    ],
    related: ["gift-tax-annual-exclusion", "portability", "crummey-power"],
    match: ["gift splitting", "gift-splitting", "split"],
  },
  {
    slug: "family-limited-partnership",
    term: "Family limited partnership",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "In a family limited partnership, parents contribute assets to a partnership, keep the general partner interest and give limited partner interests to their children, often at a discount to the underlying asset value.",
    takeaways: [
      "Discounts for lack of control and lack of marketability reduce the gift and estate tax value of the interests.",
      "The Internal Revenue Service can pull the assets back into the estate if the parents keep control or the benefit of the assets, or the partnership lacks a non-tax purpose.",
      "Formalities such as separate accounts and pro rata distributions matter.",
    ],
    related: ["gift-tax-annual-exclusion", "grantor-retained-annuity-trust"],
    match: ["family limited partnership", "valuation discount", "lack of marketability"],
  },
  {
    slug: "personal-holding-company-tax",
    term: "Personal holding company tax",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "The personal holding company tax is a 20% penalty tax on the undistributed income of a closely held corporation that earns mainly passive income, discouraging owners from sheltering investment income in a corporation.",
    takeaways: [
      "A corporation is closely held if 5 or fewer individuals own more than 50% of its stock during the last half of the year.",
      "The income test is met when at least 60% of adjusted ordinary gross income is passive, such as dividends, interest, rents and royalties.",
      "Paying dividends, including deficiency dividends, avoids the tax.",
    ],
    related: ["accumulated-earnings-tax", "reasonable-compensation"],
    match: ["personal holding company", "passive income"],
  },
  {
    slug: "schedule-m-1",
    term: "Schedule M-1 and M-3",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "Schedule M-1 of a corporate tax return (Form 1120) reconciles net income per books to taxable income. Corporations with total assets of $10 million or more file the more detailed Schedule M-3 instead.",
    takeaways: [
      "Common reconciling items include federal income tax expense, tax-exempt interest, nondeductible meals and fines, and depreciation differences.",
      "Schedule M-3 separates temporary differences from permanent ones.",
      "Schedule M-2 reconciles unappropriated retained earnings.",
    ],
    related: ["dividends-received-deduction", "accumulated-earnings-tax"],
    match: ["M-1", "M-3", "book income", "book-tax"],
  },
  {
    slug: "disguised-sale",
    term: "Disguised sale",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "A contribution of property to a partnership followed by a distribution of money or other property to the contributing partner can be treated as a disguised sale, making the partner recognize gain as if part of the property were sold.",
    takeaways: [
      "A contribution and distribution within two years are presumed to be a sale unless the facts clearly show otherwise.",
      "The partnership taking on some of the partner's liabilities can also trigger a disguised sale.",
      "Guaranteed payments and normal operating distributions are generally not treated as part of a sale.",
    ],
    related: ["section-704c-allocation", "outside-basis", "guaranteed-payment"],
    match: ["disguised sale", "contribution", "distribution"],
  },
  {
    slug: "public-law-86-272",
    term: "Public Law 86-272",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "Public Law 86-272 bars a state from imposing a net income tax on an out-of-state business whose only activity in the state is soliciting orders for tangible personal property that are approved and shipped from outside the state.",
    takeaways: [
      "It doesn't protect sales of services or intangibles, or activities beyond solicitation, such as installation or repairs.",
      "It doesn't apply to sales taxes or gross receipts taxes.",
      "Multistate Tax Commission guidance treats some online activities, such as post-sale chat support, as going beyond solicitation.",
    ],
    related: ["nexus", "apportionment"],
    match: ["86-272", "solicitation"],
  },
  {
    slug: "substantial-authority",
    term: "Substantial authority",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "A tax position has substantial authority when the weight of authorities supporting it is substantial compared with those against it, often described as roughly a 40% chance of being upheld. It avoids the substantial understatement penalty without disclosure.",
    takeaways: [
      "A weaker position with a reasonable basis (about 20%) avoids the penalty only if disclosed; tax shelters need more likely than not.",
      "Authorities include the Code, regulations, court cases, revenue rulings and private letter rulings, but not treatises or articles.",
      "Preparers use the same standards to avoid preparer penalties.",
    ],
    related: ["accuracy-related-penalty", "preparer-penalties", "private-letter-ruling"],
    match: ["substantial authority", "reasonable basis", "more likely than not"],
  },
  {
    slug: "unrecaptured-section-1250-gain",
    term: "Unrecaptured section 1250 gain",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "Unrecaptured section 1250 gain is the part of an individual's gain on selling depreciable real property that comes from straight-line depreciation already taken. It is taxed at a maximum rate of 25%.",
    takeaways: [
      "Gain above the depreciation taken is taxed at the usual long-term capital gain rates.",
      "Real property placed in service after 1986 uses straight-line depreciation, so there is generally no ordinary-income recapture.",
      "Corporations face a different rule that treats 20% of the depreciation as ordinary income.",
    ],
    example: "A building bought for $500,000, depreciated by $120,000 and sold for $600,000: $120,000 is taxed at up to 25% and $100,000 at capital gain rates.",
    related: ["depreciation-recapture", "section-1231-property", "cost-segregation"],
    match: ["1250", "unrecaptured", "real property"],
  },
];
