import type { GlossaryTerm } from "../types";

/** FAR terms, second batch. */
export const farTermsB: GlossaryTerm[] = [
  {
    slug: "indirect-method",
    term: "Indirect method (statement of cash flows)",
    section: "far",
    topic: "statement-of-cash-flows",
    definition:
      "The indirect method presents operating cash flow by starting with net income and adjusting it for noncash items, gains and losses on investing and financing activities, and changes in operating working capital.",
    takeaways: [
      "Depreciation and amortization are added back; gains on sales of assets are subtracted.",
      "An increase in a current operating asset (such as receivables) reduces operating cash; an increase in a current operating liability adds to it.",
      "The direct method shows major classes of receipts and payments instead, and companies using it must also provide the indirect reconciliation.",
    ],
    example: "Net income $150,000, depreciation $40,000, a $10,000 gain on sale and a $25,000 rise in receivables give $155,000 before other working capital changes.",
    related: ["noncash-investing-and-financing-activities"],
    match: ["indirect method", "operating activities", "cash flow"],
  },
  {
    slug: "noncash-investing-and-financing-activities",
    term: "Noncash investing and financing activities",
    section: "far",
    topic: "statement-of-cash-flows",
    definition:
      "Noncash investing and financing activities are significant transactions that affect assets, liabilities or equity but involve no cash, such as acquiring land by issuing stock. They are disclosed separately rather than shown in the statement's sections.",
    takeaways: [
      "Examples: converting bonds into stock, acquiring assets with debt or a finance lease, and exchanging one noncash asset for another.",
      "Any cash part of a transaction is reported in the statement; only the noncash part is disclosed.",
      "They can appear in a schedule or in narrative form.",
    ],
    related: ["indirect-method"],
    match: ["noncash"],
  },
  {
    slug: "reportable-segment",
    term: "Reportable segment",
    section: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    definition:
      "A reportable segment is an operating segment that a public company must report separately because it meets one of the 10% quantitative thresholds for revenue, profit or loss, or assets.",
    takeaways: [
      "Revenue test: 10% of combined revenue, including sales to other segments.",
      "Profit or loss test: 10% of the greater of combined profits of profitable segments or combined losses of loss-making segments.",
      "Reportable segments must together account for at least 75% of external revenue; if not, more segments are added.",
    ],
    match: ["segment"],
  },
  {
    slug: "interim-reporting",
    term: "Interim reporting",
    section: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    definition:
      "Interim reporting is financial reporting for periods shorter than a year, usually quarters. Under US Generally Accepted Accounting Principles (GAAP), each interim period is treated as an integral part of the annual period.",
    takeaways: [
      "Costs that clearly benefit several quarters, such as annual property tax, are allocated across them.",
      "Income tax expense uses the estimated annual effective tax rate.",
      "Temporary inventory declines expected to recover within the year need not be recognized at interim.",
    ],
    match: ["interim"],
  },
  {
    slug: "going-concern",
    term: "Going concern (substantial doubt)",
    section: "far",
    topic: "notes-subsequent-events-and-going-concern",
    definition:
      "Management must evaluate whether conditions and events raise substantial doubt about the entity's ability to continue as a going concern: that is, whether it is probable the entity will be unable to meet its obligations as they become due within one year after the financial statements are issued (or available to be issued).",
    takeaways: [
      "Management's plans are considered only if they are probable of being implemented and of mitigating the conditions.",
      "Disclosures are required whether or not the doubt is alleviated by management's plans.",
      "The auditor separately evaluates going concern and reports on it in the auditor's report.",
    ],
    related: ["subsequent-events"],
    match: ["going concern", "substantial doubt"],
  },
  {
    slug: "held-to-maturity-securities",
    term: "Held-to-maturity securities",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "Held-to-maturity securities are debt securities the investor has the positive intent and ability to hold until maturity. They are carried at amortized cost, net of an allowance for expected credit losses.",
    takeaways: [
      "Changes in fair value are not recognized, only disclosed.",
      "Selling or transferring them before maturity, except in narrow circumstances, can call into question the classification of the remaining portfolio.",
      "Equity securities can't be held-to-maturity, because they have no maturity.",
    ],
    related: ["available-for-sale-debt-securities", "cecl"],
    match: ["held-to-maturity", "HTM", "amortized cost"],
  },
  {
    slug: "fair-value-hierarchy",
    term: "Fair value hierarchy",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "The fair value hierarchy ranks the inputs used to measure fair value in three levels, from quoted prices in active markets (Level 1) to unobservable inputs based on the entity's own assumptions (Level 3).",
    takeaways: [
      "Level 1: quoted prices for identical assets or liabilities in active markets.",
      "Level 2: other observable inputs, such as quoted prices for similar items or observable interest rates.",
      "Level 3: unobservable inputs; these measurements need the most disclosure.",
    ],
    match: ["fair value", "Level 1", "Level 3"],
  },
  {
    slug: "debt-issuance-costs",
    term: "Debt issuance costs",
    section: "far",
    topic: "long-term-debt",
    definition:
      "Debt issuance costs, such as underwriting, legal and registration fees for issuing bonds, are presented as a direct deduction from the carrying amount of the debt, like a discount, and amortized into interest expense over the term.",
    takeaways: [
      "They are not recorded as an asset or expensed immediately.",
      "Amortizing them raises the effective interest rate on the debt.",
      "Costs of issuing equity reduce the proceeds recorded in additional paid-in capital instead.",
    ],
    related: ["effective-interest-method", "extinguishment-of-debt"],
    match: ["issuance cost"],
  },
  {
    slug: "extinguishment-of-debt",
    term: "Extinguishment of debt",
    section: "far",
    topic: "long-term-debt",
    definition:
      "Debt is extinguished when it is repaid or the debtor is legally released from it. On early extinguishment, the difference between the amount paid and the debt's net carrying amount is recognized as a gain or loss in income.",
    takeaways: [
      "Net carrying amount is face value plus unamortized premium, or minus unamortized discount and issuance costs.",
      "Buying back bonds for less than their carrying amount produces a gain.",
      "Buying an affiliate's bonds from outsiders is treated as a constructive retirement in consolidation.",
    ],
    example: "Bonds with a face value of $500,000 and a $15,000 unamortized discount are retired for $510,000: a $25,000 loss.",
    related: ["debt-issuance-costs", "effective-interest-method"],
    match: ["extinguishment", "retire", "early retirement"],
  },
  {
    slug: "treasury-stock",
    term: "Treasury stock",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Treasury stock is a company's own shares that it has issued and later bought back but not retired. It is shown as a reduction of stockholders' equity, not as an asset.",
    takeaways: [
      "Under the cost method, it is recorded at the price paid.",
      "Reissuing it above cost credits additional paid-in capital; companies never record gains or losses on their own stock.",
      "Treasury shares are not outstanding, so they are excluded from earnings per share and receive no dividends.",
    ],
    match: ["treasury stock"],
  },
  {
    slug: "stock-dividend",
    term: "Stock dividend",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "A stock dividend is a pro rata distribution of a company's own shares to its shareholders. It moves an amount from retained earnings to paid-in capital without changing total equity.",
    takeaways: [
      "A small stock dividend (generally under 20–25% of shares outstanding) is recorded at the shares' fair value.",
      "A large stock dividend is recorded at par value.",
      "Stock dividends and splits are applied retroactively in computing earnings per share.",
    ],
    match: ["stock dividend", "stock split"],
  },
  {
    slug: "asset-retirement-obligation",
    term: "Asset retirement obligation (ARO)",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "An asset retirement obligation (ARO) is a legal obligation to retire a long-lived asset, such as dismantling an oil platform or restoring a mine site. It is recognized at fair value when incurred and added to the asset's carrying amount.",
    takeaways: [
      "The capitalized cost is depreciated over the asset's life.",
      "The liability grows each period through accretion expense.",
      "It is usually measured at the present value of the expected cash flows, using a credit-adjusted risk-free rate.",
    ],
    match: ["retirement obligation", "ARO", "accretion"],
  },
  {
    slug: "capitalized-interest",
    term: "Capitalized interest",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "Capitalized interest is interest cost incurred while a qualifying asset, such as a building constructed for the company's own use, is being prepared for use. It is added to the asset's cost instead of being expensed.",
    takeaways: [
      "The amount is the interest that could have been avoided, based on weighted-average accumulated expenditures.",
      "It can't exceed the actual interest incurred in the period.",
      "Assets already in use, or routinely produced inventory, don't qualify.",
    ],
    match: ["capitalized interest", "avoidable interest"],
  },
  {
    slug: "bargain-purchase",
    term: "Bargain purchase",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "A bargain purchase is a business combination in which the fair value of the identifiable net assets acquired exceeds the consideration transferred (plus any noncontrolling interest and previously held interest).",
    takeaways: [
      "The acquirer first reassesses whether it has identified and measured everything correctly.",
      "Any remaining excess is recognized as a gain in earnings on the acquisition date.",
      "It is rare, often arising from a forced sale.",
    ],
    related: ["goodwill"],
    match: ["bargain purchase"],
  },
  {
    slug: "change-in-accounting-estimate",
    term: "Change in accounting estimate",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "A change in accounting estimate is a revision of an amount, such as an asset's useful life or a warranty accrual, because of new information. It is applied prospectively, in the current and future periods only.",
    takeaways: [
      "Prior periods are not restated.",
      "A change in depreciation method is treated as a change in estimate effected by a change in principle, also prospectively.",
      "Correcting a mistake in an earlier estimate's arithmetic is an error correction, not a change in estimate.",
    ],
    related: ["retrospective-application"],
    match: ["change in estimate", "change in accounting estimate"],
  },
  {
    slug: "variable-consideration",
    term: "Variable consideration",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "Variable consideration is any part of a contract's price that can change, such as discounts, rebates, refunds, performance bonuses and penalties. It is estimated and included in the transaction price, subject to a constraint.",
    takeaways: [
      "It is estimated using either the expected value or the most likely amount, whichever better predicts it.",
      "The constraint limits it to the amount for which a significant revenue reversal is not probable.",
      "Sales- or usage-based royalties on licenses of intellectual property follow a separate exception.",
    ],
    related: ["performance-obligation"],
    match: ["variable consideration", "rebate", "constraint"],
  },
  {
    slug: "valuation-allowance",
    term: "Valuation allowance (deferred tax assets)",
    section: "far",
    topic: "income-taxes",
    definition:
      "A valuation allowance reduces a deferred tax asset when it is more likely than not (a likelihood of more than 50%) that some or all of the asset won't be realized.",
    takeaways: [
      "Evidence includes future reversals of taxable temporary differences, tax-planning strategies and expected future taxable income.",
      "A history of recent losses is significant negative evidence.",
      "Changes in the allowance usually flow through income tax expense.",
    ],
    related: ["deferred-tax-asset"],
    match: ["valuation allowance", "more likely than not"],
  },
  {
    slug: "factoring",
    term: "Factoring of receivables",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "Factoring is the transfer of accounts receivable to a third party (a factor) for cash. It is accounted for as a sale if the transferor surrenders control of the receivables; otherwise it is a secured borrowing.",
    takeaways: [
      "In a sale, the receivables are removed and any fee or discount is recognized as a loss.",
      "With recourse, the seller records a recourse liability for expected bad debts.",
      "If control isn't surrendered, the receivables stay on the books and a liability is recorded.",
    ],
    related: ["allowance-method"],
    match: ["factor", "transfer of receivables"],
  },
];
