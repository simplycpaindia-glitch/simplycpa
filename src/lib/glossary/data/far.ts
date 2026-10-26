import type { GlossaryTerm } from "../types";

export const farTerms: GlossaryTerm[] = [
  {
    slug: "cecl",
    term: "Current expected credit loss (CECL)",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "The current expected credit loss (CECL) model requires companies to recognize an allowance for all credit losses they expect over the life of financial assets measured at amortized cost, such as trade receivables, loans and held-to-maturity debt securities.",
    takeaways: [
      "Losses are estimated from the day the asset is recognized, using past events, current conditions and reasonable and supportable forecasts.",
      "It replaced the older 'incurred loss' model, which waited until a loss was probable.",
      "An aging schedule or loss-rate method can still be used to estimate the allowance under CECL.",
    ],
    example:
      "A company with $500,000 of receivables expects, based on history adjusted for a weakening economy, to collect all but 3%. It records an allowance of $15,000 even though no customer has yet defaulted.",
    related: ["allowance-method", "available-for-sale-debt-securities"],
    match: ["credit loss", "CECL", "allowance"],
  },
  {
    slug: "allowance-method",
    term: "Allowance method",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "The allowance method estimates uncollectible receivables at each reporting date and records them in a contra-asset account (the allowance for doubtful accounts), so receivables are shown at the amount expected to be collected.",
    takeaways: [
      "Bad debt expense is the amount needed to bring the allowance to its required balance.",
      "Writing off a specific account reduces the allowance and receivables equally; it doesn't change expense or net receivables.",
      "The direct write-off method, which expenses accounts only when written off, isn't allowed under US Generally Accepted Accounting Principles (GAAP) when bad debts are material.",
    ],
    example:
      "The allowance has a $4,000 credit balance before adjustment and the aging requires $18,000, so bad debt expense is $14,000.",
    related: ["cecl"],
    match: ["allowance", "bad debt", "doubtful"],
  },
  {
    slug: "lower-of-cost-and-net-realizable-value",
    term: "Lower of cost and net realizable value",
    section: "far",
    topic: "inventory",
    definition:
      "Inventory measured using first-in, first-out (FIFO) or average cost is carried at the lower of its cost and its net realizable value: the estimated selling price less the costs to complete and sell it.",
    takeaways: [
      "Last-in, first-out (LIFO) and the retail inventory method still use the older lower of cost or market test.",
      "A write-down is recognized in the period the value falls, usually in cost of goods sold.",
      "Under US Generally Accepted Accounting Principles (GAAP), written-down inventory is not written back up if prices recover.",
    ],
    example: "Goods cost $50,000; they can be sold for $47,000 with $5,000 of selling costs. Net realizable value is $42,000, so inventory is written down by $8,000.",
    related: ["lifo"],
    match: ["net realizable value", "NRV", "lower of cost"],
  },
  {
    slug: "lifo",
    term: "Last-in, first-out (LIFO)",
    section: "far",
    topic: "inventory",
    definition:
      "Last-in, first-out (LIFO) is an inventory cost-flow assumption under which the most recently purchased goods are treated as sold first, so ending inventory consists of the oldest costs.",
    takeaways: [
      "When prices rise, LIFO gives the highest cost of goods sold, the lowest taxable income and the lowest ending inventory.",
      "The LIFO conformity rule: a company that uses LIFO for US tax must also use it for its financial statements.",
      "LIFO is not permitted under International Financial Reporting Standards (IFRS).",
    ],
    example:
      "Beginning inventory of 100 units at $10 and purchases of 200 at $12; 150 units are sold. Periodic LIFO cost of goods sold = 150 × $12 = $1,800.",
    related: ["lower-of-cost-and-net-realizable-value"],
    match: ["LIFO", "last-in"],
  },
  {
    slug: "right-of-use-asset",
    term: "Right-of-use asset",
    section: "far",
    topic: "leases",
    definition:
      "A right-of-use asset is a lessee's right to use a leased asset for the lease term. It is recognized at lease commencement together with a lease liability, for both finance and operating leases.",
    takeaways: [
      "It is initially measured at the lease liability plus prepaid lease payments and initial direct costs, less lease incentives received.",
      "For a finance lease it is amortized separately from interest on the liability; for an operating lease the two combine into one straight-line lease cost.",
      "Short-term leases (12 months or less, with no purchase option the lessee is reasonably certain to exercise) can be kept off the balance sheet by election.",
    ],
    related: ["finance-lease"],
    match: ["right-of-use", "lessee"],
  },
  {
    slug: "finance-lease",
    term: "Finance lease",
    section: "far",
    topic: "leases",
    definition:
      "A finance lease is a lease that transfers control of the underlying asset to the lessee in substance. For lessees, a lease is a finance lease if it meets any one of five criteria; otherwise it is an operating lease.",
    takeaways: [
      "The five criteria: ownership transfers, a purchase option the lessee is reasonably certain to exercise, a term for the major part of the asset's economic life, payments equal to substantially all of its fair value, or a specialized asset with no alternative use to the lessor.",
      "The lessee reports interest expense and amortization separately, so expense is higher in the early years.",
      "The equivalent classification for a lessor is a sales-type lease.",
    ],
    related: ["right-of-use-asset"],
    match: ["finance lease", "lease classification"],
  },
  {
    slug: "performance-obligation",
    term: "Performance obligation",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A performance obligation is a promise in a contract with a customer to transfer a distinct good or service (or a series of substantially the same distinct goods or services). Revenue is recognized when, or as, each one is satisfied.",
    takeaways: [
      "A good or service is distinct if the customer can benefit from it on its own or with readily available resources, and it is separately identifiable in the contract.",
      "Identifying performance obligations is step 2 of the five-step revenue model.",
      "The transaction price is allocated to performance obligations by relative standalone selling price.",
    ],
    example: "A software license, installation and two years of support sold together may be three performance obligations, each recognized when its own control transfers.",
    related: ["standalone-selling-price", "contract-liability"],
    match: ["performance obligation", "distinct"],
  },
  {
    slug: "standalone-selling-price",
    term: "Standalone selling price",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "The standalone selling price is the price at which a company would sell a promised good or service separately to a customer. It is the basis for allocating a contract's transaction price among its performance obligations.",
    takeaways: [
      "The best evidence is an observable price when the item is sold on its own in similar circumstances.",
      "If it isn't observable, it is estimated, for example by adjusted market assessment, expected cost plus a margin, or (in limited cases) the residual approach.",
      "Discounts are generally allocated proportionately across all performance obligations.",
    ],
    example:
      "A $120,000 bundle has standalone prices of $80,000, $20,000 and $50,000 (total $150,000). The first item is allocated $120,000 × 80/150 = $64,000.",
    related: ["performance-obligation"],
    match: ["standalone selling price", "allocate"],
  },
  {
    slug: "contract-liability",
    term: "Contract liability",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A contract liability is a company's obligation to transfer goods or services to a customer for which it has already received payment (or the payment is due). It is often called deferred or unearned revenue.",
    takeaways: [
      "It becomes revenue as the related performance obligation is satisfied.",
      "The opposite position, where the company has performed but its right to payment is still conditional, is a contract asset.",
      "An unconditional right to payment is a receivable, not a contract asset.",
    ],
    example: "A customer prepays $24,000 on October 1 for a year of service. At December 31, $6,000 is revenue and $18,000 is a contract liability.",
    related: ["performance-obligation"],
    match: ["contract liability", "unearned", "deferred revenue"],
  },
  {
    slug: "deferred-tax-asset",
    term: "Deferred tax asset",
    section: "far",
    topic: "income-taxes",
    definition:
      "A deferred tax asset is the future tax benefit from deductible temporary differences and carryforwards: items that will reduce taxable income in later years.",
    takeaways: [
      "Measured using the enacted tax rate expected to apply when the difference reverses.",
      "A valuation allowance reduces it if it is more likely than not (over 50%) that some or all of it won't be realized.",
      "All deferred tax assets and liabilities are classified as noncurrent on the balance sheet.",
    ],
    example: "A $30,000 warranty accrual deductible for tax next year creates a deferred tax asset of $30,000 × 21% = $6,300.",
    related: ["deferred-tax-liability"],
    match: ["deferred tax asset", "valuation allowance"],
  },
  {
    slug: "deferred-tax-liability",
    term: "Deferred tax liability",
    section: "far",
    topic: "income-taxes",
    definition:
      "A deferred tax liability is the future tax payable on taxable temporary differences: items that make taxable income lower now and higher later than book income.",
    takeaways: [
      "The classic cause is tax depreciation that is faster than book depreciation.",
      "Permanent differences, such as tax-exempt municipal bond interest, never create deferred taxes.",
      "Total income tax expense equals current tax plus the change in deferred tax balances.",
    ],
    example: "Tax depreciation exceeds book depreciation by $80,000; at a 21% rate the deferred tax liability is $16,800.",
    related: ["deferred-tax-asset"],
    match: ["deferred tax liability", "temporary difference"],
  },
  {
    slug: "goodwill",
    term: "Goodwill",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Goodwill is the excess of the consideration paid in a business combination (plus the fair value of any noncontrolling interest and previously held interest) over the fair value of the identifiable net assets acquired.",
    takeaways: [
      "Public companies don't amortize goodwill; they test it for impairment at least annually at the reporting unit level.",
      "The impairment loss is the reporting unit's carrying amount less its fair value, limited to the goodwill balance.",
      "Internally generated goodwill is never recognized; private companies may elect to amortize goodwill.",
    ],
    example: "Paying $2,000,000 for a company whose identifiable net assets are worth $1,600,000 creates $400,000 of goodwill.",
    related: ["noncontrolling-interest", "impairment"],
    match: ["goodwill"],
  },
  {
    slug: "impairment",
    term: "Impairment of long-lived assets",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "A long-lived asset held and used is impaired when its carrying amount is not recoverable from its undiscounted future cash flows. The loss is then measured as the carrying amount less fair value.",
    takeaways: [
      "Two steps: a recoverability test with undiscounted cash flows, then measurement against fair value.",
      "Impairment losses on assets held and used are never reversed under US Generally Accepted Accounting Principles (GAAP).",
      "Assets held for sale are measured at the lower of carrying amount and fair value less costs to sell, and aren't depreciated.",
    ],
    example: "Carrying amount $900,000, undiscounted cash flows $850,000, fair value $700,000: the asset fails recoverability and the loss is $200,000.",
    related: ["goodwill"],
    match: ["impairment", "recoverab"],
  },
  {
    slug: "available-for-sale-debt-securities",
    term: "Available-for-sale debt securities",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "Available-for-sale debt securities are debt investments not classified as trading or held-to-maturity. They are carried at fair value, with unrealized gains and losses reported in other comprehensive income.",
    takeaways: [
      "Credit losses on them go to net income through an allowance; other declines go to other comprehensive income.",
      "When sold, the accumulated gain or loss is reclassified from other comprehensive income into net income.",
      "Trading debt securities are at fair value through net income; held-to-maturity securities are at amortized cost.",
    ],
    related: ["equity-method", "other-comprehensive-income", "cecl"],
    match: ["available-for-sale", "AFS"],
  },
  {
    slug: "equity-method",
    term: "Equity method",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "The equity method is used for investments that give significant influence (usually 20% to 50% of voting stock). The investor records its share of the investee's income as income and increases the investment; dividends received reduce the investment.",
    takeaways: [
      "Any excess paid for depreciable assets above book value is depreciated through investment income.",
      "Dividends are not income under the equity method.",
      "Significant influence can exist below 20% (for example, board representation) or be absent above it.",
    ],
    example: "A 30% investor in a company earning $200,000 and paying $50,000 of dividends records $60,000 of income and a $15,000 reduction for dividends.",
    related: ["available-for-sale-debt-securities"],
    match: ["equity method", "significant influence"],
  },
  {
    slug: "effective-interest-method",
    term: "Effective interest method",
    section: "far",
    topic: "long-term-debt",
    definition:
      "The effective interest method amortizes a bond discount or premium so that interest expense each period equals the bond's carrying amount multiplied by the market rate at issuance.",
    takeaways: [
      "Cash interest is face value × stated rate; the difference from interest expense is the amortization.",
      "With a discount, interest expense rises each period as the carrying amount increases toward face value.",
      "Straight-line amortization is allowed only if the result isn't materially different.",
    ],
    example: "Bonds issued for $920,162 with a 6% coupon on $1,000,000 and an 8% market rate: year 1 interest expense is $73,613, cash is $60,000 and discount amortization is $13,613.",
    match: ["effective interest", "discount", "premium"],
  },
  {
    slug: "loss-contingency",
    term: "Loss contingency",
    section: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    definition:
      "A loss contingency is an existing condition, such as a lawsuit or a guarantee, whose outcome depends on a future event. It is accrued if a loss is probable and can be reasonably estimated, and disclosed if a loss is reasonably possible.",
    takeaways: [
      "If a range is estimated, accrue the best estimate in the range or, if none is better, the minimum.",
      "Remote losses usually need neither accrual nor disclosure (guarantees are an exception).",
      "Gain contingencies are never accrued.",
    ],
    example: "A probable lawsuit loss estimated at $50,000 to $80,000, with no best estimate, is accrued at $50,000 and the possible extra $30,000 is disclosed.",
    match: ["contingenc", "probable", "lawsuit"],
  },
  {
    slug: "subsequent-events",
    term: "Subsequent events",
    section: "far",
    topic: "notes-subsequent-events-and-going-concern",
    definition:
      "Subsequent events are events after the balance sheet date but before the financial statements are issued (or available to be issued). Recognized events adjust the statements; nonrecognized events may only need disclosure.",
    takeaways: [
      "Recognized: the event gives evidence about a condition that existed at the balance sheet date, such as a customer's bankruptcy from a long decline.",
      "Nonrecognized: the condition arose after the balance sheet date, such as a fire or a bond issue.",
      "Public companies evaluate through the date the statements are issued; others through the date they are available to be issued.",
    ],
    match: ["subsequent event"],
  },
  {
    slug: "discontinued-operation",
    term: "Discontinued operation",
    section: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    definition:
      "A discontinued operation is a component of an entity that has been disposed of, or is held for sale, and whose disposal is a strategic shift with a major effect on operations and financial results, such as a major line of business or geographic area.",
    takeaways: [
      "Its results are reported separately, net of tax, below income from continuing operations.",
      "Prior periods presented are recast to show the operation as discontinued.",
      "Selling a single asset or a minor product line is generally not a discontinued operation.",
    ],
    match: ["discontinued operation"],
  },
  {
    slug: "noncontrolling-interest",
    term: "Noncontrolling interest (NCI)",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "A noncontrolling interest (NCI) is the equity in a subsidiary that is not owned by the parent. It is reported in consolidated equity, separately from the parent's equity.",
    takeaways: [
      "Under the acquisition method it is initially measured at fair value, so goodwill reflects 100% of the subsidiary.",
      "Consolidated net income is split between the parent and the noncontrolling interest.",
      "Upstream intercompany profits reduce the noncontrolling interest's share of income; downstream ones don't.",
    ],
    related: ["goodwill"],
    match: ["noncontrolling", "NCI", "minority"],
  },
  {
    slug: "diluted-eps",
    term: "Diluted earnings per share (EPS)",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Diluted earnings per share (EPS) shows earnings per common share assuming all dilutive potential common shares, such as options, warrants and convertible securities, had been issued.",
    takeaways: [
      "Options and warrants are included using the treasury stock method; convertibles using the if-converted method.",
      "Only securities that reduce EPS (dilutive) are included; antidilutive ones are left out.",
      "Public companies present basic and diluted EPS on the face of the income statement.",
    ],
    example:
      "10,000 options at $20 with an average share price of $25: proceeds of $200,000 buy back 8,000 shares, so 2,000 incremental shares are added.",
    match: ["diluted", "EPS", "earnings per share"],
  },
  {
    slug: "retrospective-application",
    term: "Retrospective application",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "Retrospective application means applying a new accounting principle to all prior periods presented as if it had always been used, with the cumulative effect on earlier periods adjusted in the opening balance of retained earnings.",
    takeaways: [
      "It applies to changes in accounting principle and in the reporting entity, unless impracticable.",
      "Changes in estimate, including changes in depreciation method, are applied prospectively instead.",
      "Error corrections are made by restatement, a similar adjustment to prior periods.",
    ],
    match: ["retrospective", "change in accounting principle"],
  },
  {
    slug: "modified-accrual-basis",
    term: "Modified accrual basis",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "The modified accrual basis is used by governmental funds. Revenues are recognized when measurable and available to pay current-period liabilities; expenditures are generally recognized when the related liability is incurred.",
    takeaways: [
      "It focuses on current financial resources, so capital assets and long-term debt aren't reported in governmental funds.",
      "Buying a capital asset is an expenditure; debt proceeds are an other financing source.",
      "Government-wide statements use the full accrual basis instead.",
    ],
    match: ["modified accrual", "governmental fund"],
  },
  {
    slug: "net-assets-with-donor-restrictions",
    term: "Net assets with donor restrictions",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "Net assets with donor restrictions are the part of a not-for-profit organization's net assets subject to donor-imposed limits on when or how they may be used, including amounts to be held in perpetuity.",
    takeaways: [
      "When a restriction is met, the amount is reclassified to net assets without donor restrictions as a release.",
      "All expenses are reported in net assets without donor restrictions.",
      "Board designations are not donor restrictions.",
    ],
    match: ["donor restriction", "net assets"],
  },
  {
    slug: "other-comprehensive-income",
    term: "Other comprehensive income (OCI)",
    section: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    definition:
      "Other comprehensive income (OCI) is a category of gains and losses that are excluded from net income but included in comprehensive income, and accumulated in a separate component of equity.",
    takeaways: [
      "Common items: unrealized gains and losses on available-for-sale debt securities, foreign currency translation adjustments, certain pension items and effective cash flow hedges.",
      "Items are reclassified into net income when realized, for example when the securities are sold.",
      "Comprehensive income may be shown in one continuous statement or two consecutive statements.",
    ],
    related: ["available-for-sale-debt-securities"],
    match: ["other comprehensive income", "OCI"],
  },
];
