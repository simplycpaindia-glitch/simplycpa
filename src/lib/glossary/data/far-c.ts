import type { GlossaryTerm } from "../types";

/** FAR terms, third batch. */
export const farTermsC: GlossaryTerm[] = [
  {
    slug: "accrual-basis-accounting",
    term: "Accrual basis accounting",
    section: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    definition:
      "Accrual basis accounting records revenues when they are earned and expenses when they are incurred, regardless of when cash is received or paid. US Generally Accepted Accounting Principles (GAAP) require it.",
    takeaways: [
      "It produces receivables, payables, prepaid expenses and unearned revenue.",
      "The cash basis records transactions only when cash changes hands, and is not GAAP.",
      "Converting from the cash basis to the accrual basis is treated as an error correction.",
    ],
    example: "Cash collected from customers $50,000; receivables rose from $8,000 to $12,000. Accrual revenue = $54,000.",
    related: ["qualitative-characteristics"],
    match: ["accrual", "cash basis"],
  },
  {
    slug: "qualitative-characteristics",
    term: "Qualitative characteristics of useful information",
    section: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    definition:
      "The qualitative characteristics are the attributes that make financial information useful. The two fundamental ones are relevance and faithful representation; comparability, verifiability, timeliness and understandability enhance them.",
    takeaways: [
      "Relevance comprises predictive value, confirmatory value and materiality.",
      "Faithful representation means the information is complete, neutral and free from error.",
      "Enhancing characteristics can't make information useful if it is irrelevant or not faithfully represented.",
    ],
    related: ["accrual-basis-accounting"],
    match: ["qualitative characteristic", "relevance", "faithful representation"],
  },
  {
    slug: "classified-balance-sheet",
    term: "Classified balance sheet",
    section: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    definition:
      "A classified balance sheet groups assets and liabilities into current and noncurrent categories, usually based on whether they will be realized or settled within one year or the operating cycle, if longer.",
    takeaways: [
      "Current assets include cash, receivables, inventory and prepaid expenses; current liabilities include payables, accrued liabilities and the current portion of long-term debt.",
      "Cash restricted for a noncurrent purpose is noncurrent.",
      "All deferred tax assets and liabilities are noncurrent.",
    ],
    related: ["cash-equivalents", "deferred-tax-liability"],
    match: ["classified", "current asset", "current liabilit"],
  },
  {
    slug: "cash-equivalents",
    term: "Cash equivalents",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and so near maturity that interest rate changes pose little risk: generally those with an original maturity to the holder of three months or less.",
    takeaways: [
      "Examples: Treasury bills, commercial paper and money market funds bought within three months of maturity.",
      "Equity securities are not cash equivalents.",
      "The statement of cash flows explains the change in cash and cash equivalents (including restricted cash).",
    ],
    related: ["bank-reconciliation"],
    match: ["cash equivalent"],
  },
  {
    slug: "bank-reconciliation",
    term: "Bank reconciliation",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "A bank reconciliation explains the difference between the cash balance on the bank statement and the balance in the company's records, so both can be adjusted to the true cash balance.",
    takeaways: [
      "Deposits in transit and outstanding checks adjust the bank side and need no journal entry.",
      "Bank charges, returned checks, collections by the bank and the company's own errors adjust the book side and need journal entries.",
      "Preparing it should be separated from handling cash.",
    ],
    related: ["cash-equivalents"],
    match: ["bank reconciliation", "deposit in transit", "outstanding check"],
  },
  {
    slug: "fob-shipping-terms",
    term: "Free on board (FOB) shipping terms",
    section: "far",
    topic: "inventory",
    definition:
      "Free on board (FOB) shipping terms decide when ownership of goods in transit passes from seller to buyer. Under FOB shipping point it passes when the goods are shipped; under FOB destination, when they arrive.",
    takeaways: [
      "Goods in transit at year-end under FOB shipping point belong in the buyer's inventory.",
      "Under FOB destination they remain the seller's inventory, and the sale isn't recorded until delivery.",
      "Consigned goods belong to the consignor regardless of where they are held.",
    ],
    related: ["lifo", "lower-of-cost-and-net-realizable-value"],
    match: ["FOB", "in transit", "shipping point", "destination"],
  },
  {
    slug: "double-declining-balance",
    term: "Double-declining-balance depreciation",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "Double-declining-balance is an accelerated depreciation method that applies twice the straight-line rate to the asset's carrying amount at the start of each year.",
    takeaways: [
      "Salvage value is ignored in the rate, but the asset is not depreciated below salvage value.",
      "Depreciation is highest in the first year and declines each year.",
      "A change to or from it is treated as a change in estimate, applied prospectively.",
    ],
    example: "Cost $120,000, 5-year life: rate 40%; year 1 depreciation $48,000; year 2 $28,800.",
    related: ["impairment"],
    match: ["declining", "accelerated"],
  },
  {
    slug: "research-and-development-costs",
    term: "Research and development costs",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Research and development costs, such as salaries, materials and overhead for discovering new knowledge or turning it into products, are expensed as incurred under US Generally Accepted Accounting Principles (GAAP).",
    takeaways: [
      "Equipment and materials with alternative future uses are capitalized and depreciated, with the depreciation charged to research and development.",
      "Costs of developing software for sale are capitalized after technological feasibility is established.",
      "In-process research and development acquired in a business combination is capitalized as an indefinite-lived asset.",
    ],
    related: ["indefinite-lived-intangible"],
    match: ["research and development", "R&D"],
  },
  {
    slug: "indefinite-lived-intangible",
    term: "Indefinite-lived intangible asset",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "An indefinite-lived intangible asset is one with no foreseeable limit on the period it will generate cash flows, such as a trademark that can be renewed indefinitely at little cost. It is not amortized but is tested for impairment at least annually.",
    takeaways: [
      "The impairment loss is the carrying amount above fair value.",
      "If its life later becomes finite, it is amortized from then on.",
      "Goodwill is also not amortized by public companies, but it is tested at the reporting unit level.",
    ],
    related: ["goodwill", "research-and-development-costs"],
    match: ["indefinite", "trademark"],
  },
  {
    slug: "trading-securities",
    term: "Trading securities",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "Trading securities are debt securities bought and held mainly to sell in the near term. They are carried at fair value, with unrealized gains and losses in net income.",
    takeaways: [
      "They are usually current assets.",
      "Cash flows from buying and selling them are classified by their nature, typically operating.",
      "Equity securities without significant influence are also measured at fair value through net income, without a trading label.",
    ],
    related: ["available-for-sale-debt-securities", "held-to-maturity-securities"],
    match: ["trading"],
  },
  {
    slug: "operating-lease",
    term: "Operating lease (lessee)",
    section: "far",
    topic: "leases",
    definition:
      "For a lessee, an operating lease is any lease that doesn't meet a finance lease criterion. The lessee still recognizes a right-of-use asset and a lease liability, but reports a single straight-line lease cost in the income statement.",
    takeaways: [
      "The liability is the present value of the lease payments, as for a finance lease.",
      "The right-of-use asset is reduced by a plug figure so total expense is level each year.",
      "Cash payments are operating cash outflows.",
    ],
    related: ["finance-lease", "right-of-use-asset"],
    match: ["operating lease"],
  },
  {
    slug: "convertible-bonds",
    term: "Convertible bonds",
    section: "far",
    topic: "long-term-debt",
    definition:
      "Convertible bonds are debt that the holder can exchange for a set number of the issuer's common shares. Under current US Generally Accepted Accounting Principles (GAAP), most are recorded entirely as a liability, with no separate equity component.",
    takeaways: [
      "On conversion under the book value method, the bonds' carrying amount becomes equity with no gain or loss.",
      "Diluted earnings per share uses the if-converted method: add back after-tax interest and add the shares.",
      "A conversion feature is separated only in specific cases, such as when it must be bifurcated as a derivative.",
    ],
    related: ["diluted-eps", "effective-interest-method"],
    match: ["convertible"],
  },
  {
    slug: "cumulative-preferred-stock",
    term: "Cumulative preferred stock",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Cumulative preferred stock entitles its holders to receive any missed (in arrears) preferred dividends before common shareholders receive any dividends.",
    takeaways: [
      "Dividends in arrears are not a liability until declared, but they are disclosed.",
      "For basic earnings per share, the current year's cumulative dividend is deducted whether or not declared.",
      "Noncumulative preferred dividends are deducted only if declared.",
    ],
    related: ["basic-eps"],
    match: ["cumulative", "preferred", "arrears"],
  },
  {
    slug: "basic-eps",
    term: "Basic earnings per share (EPS)",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Basic earnings per share (EPS) is income available to common shareholders (net income less preferred dividends) divided by the weighted average number of common shares outstanding during the period.",
    takeaways: [
      "Shares issued or repurchased during the year are weighted by the time they were outstanding.",
      "Stock dividends and splits are treated as if they happened at the start of the earliest period presented.",
      "Public companies present it together with diluted earnings per share.",
    ],
    related: ["diluted-eps", "cumulative-preferred-stock"],
    match: ["basic", "weighted average", "earnings per share"],
  },
  {
    slug: "transaction-price",
    term: "Transaction price",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "The transaction price is the amount of consideration a company expects to be entitled to in exchange for transferring promised goods or services to a customer, excluding amounts collected for third parties such as sales tax.",
    takeaways: [
      "Determining it is step 3 of the five-step revenue model.",
      "It includes estimated variable consideration (subject to the constraint) and adjusts for significant financing components and noncash consideration.",
      "It is then allocated to performance obligations by relative standalone selling price.",
    ],
    related: ["variable-consideration", "standalone-selling-price"],
    match: ["transaction price"],
  },
  {
    slug: "principal-versus-agent",
    term: "Principal versus agent",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "When another party is involved in providing goods or services to a customer, a company is a principal (reporting revenue gross) if it controls them before transfer, and an agent (reporting only its fee or commission, net) if it doesn't.",
    takeaways: [
      "Indicators of control include primary responsibility for fulfilment, inventory risk and discretion over price.",
      "Online marketplaces selling others' goods are often agents.",
      "The choice changes reported revenue but not gross profit.",
    ],
    related: ["performance-obligation"],
    match: ["principal", "agent", "gross", "net"],
  },
  {
    slug: "temporary-difference",
    term: "Temporary difference",
    section: "far",
    topic: "income-taxes",
    definition:
      "A temporary difference is a difference between an asset's or liability's tax basis and its carrying amount in the financial statements that will reverse in future years, creating taxable or deductible amounts then.",
    takeaways: [
      "Taxable temporary differences create deferred tax liabilities; deductible ones create deferred tax assets.",
      "Examples: depreciation timing, warranty accruals and rent received in advance.",
      "Permanent differences, such as tax-exempt interest and fines, never reverse and create no deferred taxes.",
    ],
    related: ["deferred-tax-asset", "deferred-tax-liability", "valuation-allowance"],
    match: ["temporary difference", "permanent difference"],
  },
  {
    slug: "consolidation-eliminations",
    term: "Consolidation eliminations",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "Consolidation eliminations remove the effects of transactions and balances between a parent and its subsidiaries, so the consolidated statements show the group as if it were one entity.",
    takeaways: [
      "Intercompany sales, receivables and payables are eliminated in full.",
      "Unrealized profit on intercompany inventory or asset sales still held in the group is eliminated.",
      "The parent's investment account is eliminated against the subsidiary's equity, with any excess allocated to fair value adjustments and goodwill.",
    ],
    related: ["noncontrolling-interest", "goodwill"],
    match: ["intercompany", "eliminat", "consolidat"],
  },
  {
    slug: "general-fund",
    term: "General fund",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "The general fund is a government's main operating fund. It accounts for all financial resources not required to be accounted for in another fund, such as police, fire and administration.",
    takeaways: [
      "It is a governmental fund, so it uses the modified accrual basis and current financial resources focus.",
      "Every general-purpose government has exactly one general fund.",
      "Transfers to other funds are other financing uses, not expenditures.",
    ],
    related: ["modified-accrual-basis"],
    match: ["general fund"],
  },
  {
    slug: "conditional-promise-to-give",
    term: "Conditional promise to give",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "A conditional promise to give is a donor's promise that depends on a barrier the not-for-profit must overcome, together with a right of return or release if it isn't met. It isn't recognized as revenue until the condition is met.",
    takeaways: [
      "Cash received before the condition is met is a refundable advance (a liability).",
      "A donor restriction on how a gift is used is different from a condition: restricted gifts are recognized when received or promised.",
      "Unconditional promises are recognized when made, at present value if collected over time.",
    ],
    related: ["net-assets-with-donor-restrictions"],
    match: ["conditional", "promise to give", "barrier"],
  },
];
