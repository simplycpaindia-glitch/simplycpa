import type { Simulation } from "../types";
import { JE_COLUMNS, line, num, pick, row } from "../build";

// FAR Area II: Select Balance Sheet Accounts.

const RECON_SIDE = ["Adjust the books (journal entry needed)", "Adjust the bank balance (no journal entry)"] as const;
const YES_NO = ["Yes", "No"] as const;
const LEASE_CLASS = ["Finance lease", "Operating lease", "Short-term lease: no right-of-use asset recognized"] as const;
const INTANGIBLE = ["Capitalize and amortize", "Capitalize, do not amortize (test for impairment)", "Expense as incurred"] as const;
const CONTINGENCY = ["Accrue and disclose", "Disclose only", "Neither accrue nor disclose"] as const;

export const farArea2: Simulation[] = [
  // ── Cash and receivables ──
  {
    slug: "bank-reconciliation",
    subject: "far",
    topic: "cash-receivables-and-bad-debts",
    title: "Preparing a bank reconciliation",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Tarrant Supply's October bank statement shows a balance of $48,200 at October 31. Its general ledger cash balance on the same date is $45,900. The bookkeeper has found the reconciling items below.",
    ],
    exhibits: [
      {
        title: "Reconciling items",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Deposit made October 31, not yet on the bank statement", "6,300"],
            ["Checks written but not yet cleared by the bank", "9,100"],
            ["Bank service charge for October", "30"],
            ["Customer's check returned by the bank for insufficient funds", "1,200"],
            ["Note receivable collected by the bank for Tarrant", "1,000"],
            ["Check written for $520 to a supplier, recorded in the books as $250", "270"],
          ],
        },
      },
    ],
    instructions: "Enter the amounts and choose where each item belongs. Enter a decrease as a negative number.",
    columns: ["Item", "Answer"],
    rows: [
      row("Adjusted (true) cash balance per bank", num(45400), "48,200 + deposit in transit 6,300 − outstanding checks 9,100 = 45,400."),
      row("Adjustment to the books for the recording error", num(-270), "The books recorded 250 instead of 520, so cash is overstated by 270: reduce it."),
      row("Adjusted (true) cash balance per books", num(45400), "45,900 − 30 − 1,200 + 1,000 − 270 = 45,400, which agrees with the bank side."),
      row("Deposit in transit", pick(RECON_SIDE, "Adjust the bank balance (no journal entry)"), "The bank simply hasn't recorded it yet. The books are already right."),
      row("Outstanding checks", pick(RECON_SIDE, "Adjust the bank balance (no journal entry)"), "Already recorded in the books; the bank will catch up when they clear."),
      row("Insufficient-funds check", pick(RECON_SIDE, "Adjust the books (journal entry needed)"), "Tarrant learned of it from the bank, so it must reduce cash and reinstate the receivable."),
      row("Note collected by the bank", pick(RECON_SIDE, "Adjust the books (journal entry needed)"), "The bank has the cash; the books must record the collection."),
    ],
    takeaway: "Only items the company didn't know about (bank charges, insufficient-funds checks, bank collections, its own errors) need journal entries. Deposits in transit and outstanding checks fix the bank side only.",
  },
  {
    slug: "allowance-for-doubtful-accounts",
    subject: "far",
    topic: "cash-receivables-and-bad-debts",
    title: "Allowance method: write-offs, recoveries and year-end",
    format: "journal-entry",
    minutes: 15,
    scenario: [
      "Bellamy Co. uses the allowance method. On January 1, the allowance for doubtful accounts had a credit balance of $12,000. During the year Bellamy wrote off $9,000 of accounts and recovered $1,000 of accounts written off in earlier years. At year-end, an aging of accounts receivable shows that the allowance should be $18,000.",
      "Record: (1) the write-off of Brown Co.'s $3,000 account, one of the year's write-offs; (2) the recovery of $1,000, reinstating the account and then collecting it; (3) the year-end adjustment.",
    ],
    instructions: "Enter the debit or credit amount for each account. Leave the unused side blank.",
    columns: JE_COLUMNS,
    rows: [
      line("1. Allowance for doubtful accounts", 3000, 0, "A write-off uses up the allowance. It has no effect on expense or on net receivables."),
      line("1. Accounts receivable: Brown Co.", 0, 3000, "The receivable is removed."),
      line("2. Accounts receivable", 1000, 0, "First reinstate the account, reversing the write-off."),
      line("2. Allowance for doubtful accounts", 0, 1000, "The reinstatement restores the allowance."),
      line("2. Cash", 1000, 0, "Then record the collection."),
      line("2. Accounts receivable", 0, 1000, "The collection clears the reinstated receivable."),
      line("3. Bad debt expense", 14000, 0, "Unadjusted allowance: 12,000 − 9,000 write-offs + 1,000 recovery = 4,000 credit. Required 18,000, so expense = 14,000."),
      line("3. Allowance for doubtful accounts", 0, 14000, "Brings the allowance to the 18,000 the aging requires."),
    ],
    takeaway: "With an aging (balance sheet) approach, expense is the plug that takes the unadjusted allowance to the required ending balance. Write-offs and recoveries change the allowance, not expense.",
  },

  // ── Inventory ──
  {
    slug: "inventory-cost-flow-methods",
    subject: "far",
    topic: "inventory",
    title: "Ending inventory and cost of goods sold under three cost-flow methods",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Lindell Hardware uses a periodic inventory system. It sold 450 units this year. Compare ending inventory and cost of goods sold under first-in, first-out (FIFO), last-in, first-out (LIFO) and weighted average.",
    ],
    exhibits: [
      {
        title: "Inventory records",
        table: {
          head: ["Date", "Units", "Unit cost ($)", "Total ($)"],
          rows: [
            ["Beginning inventory", "100", "10", "1,000"],
            ["March purchase", "200", "12", "2,400"],
            ["August purchase", "300", "13", "3,900"],
            ["November purchase", "100", "15", "1,500"],
            ["Goods available for sale", "700", "", "8,800"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in whole dollars (round the weighted average to the nearest dollar).",
    columns: ["Amount", "Dollars ($)"],
    rows: [
      row("FIFO ending inventory", num(3450), "The 250 units left are the latest costs: 100 × 15 + 150 × 13 = 3,450."),
      row("FIFO cost of goods sold", num(5350), "8,800 − 3,450 = 5,350."),
      row("LIFO ending inventory", num(2800), "Under periodic LIFO the 250 units left are the earliest costs: 100 × 10 + 150 × 12 = 2,800."),
      row("LIFO cost of goods sold", num(6000), "8,800 − 2,800 = 6,000."),
      row("Weighted average ending inventory", num(3143, 1), "Average cost 8,800 ÷ 700 = 12.571 per unit × 250 = 3,143."),
      row("Weighted average cost of goods sold", num(5657, 1), "8,800 − 3,143 = 5,657."),
    ],
    takeaway: "When prices rise, FIFO gives the highest ending inventory and the lowest cost of goods sold; LIFO the reverse. Weighted average falls in between.",
  },
  {
    slug: "lower-of-cost-and-nrv",
    subject: "far",
    topic: "inventory",
    title: "Lower of cost and net realizable value",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Ostrander Furniture uses first-in, first-out (FIFO) and applies the lower of cost and net realizable value (NRV) item by item. Year-end data for its four product lines are below.",
    ],
    exhibits: [
      {
        title: "Year-end inventory data",
        table: {
          head: ["Product line", "Cost ($)", "Selling price ($)", "Costs to complete and sell ($)"],
          rows: [
            ["Chairs", "50,000", "60,000", "6,000"],
            ["Tables", "30,000", "32,000", "5,000"],
            ["Desks", "20,000", "18,000", "1,000"],
            ["Shelving", "40,000", "48,000", "3,000"],
          ],
        },
      },
    ],
    instructions: "Enter the carrying amount for each line, then the total write-down. Answer the last question about other inventory methods.",
    columns: ["Item", "Answer"],
    rows: [
      row("Chairs: carrying amount ($)", num(50000), "NRV = 60,000 − 6,000 = 54,000. Cost 50,000 is lower."),
      row("Tables: carrying amount ($)", num(27000), "NRV = 32,000 − 5,000 = 27,000, below cost of 30,000."),
      row("Desks: carrying amount ($)", num(17000), "NRV = 18,000 − 1,000 = 17,000, below cost of 20,000."),
      row("Shelving: carrying amount ($)", num(40000), "NRV = 48,000 − 3,000 = 45,000. Cost 40,000 is lower."),
      row("Total write-down recognized ($)", num(6000), "Cost 140,000 − carrying amount 134,000 = 6,000."),
      row(
        "Which rule would apply if Ostrander used last-in, first-out (LIFO) or the retail inventory method?",
        pick(
          ["Lower of cost and NRV", "Lower of cost or market (market = replacement cost, between a ceiling and a floor)", "Fair value through net income"],
          "Lower of cost or market (market = replacement cost, between a ceiling and a floor)",
        ),
        "The lower of cost and NRV test applies to all methods except LIFO and the retail inventory method, which keep lower of cost or market.",
      ),
    ],
    takeaway: "Net realizable value = selling price − costs to complete and sell. Once written down, inventory is not written back up if prices recover.",
  },

  // ── Property, plant and equipment ──
  {
    slug: "capitalizing-and-depreciating-equipment",
    subject: "far",
    topic: "property-plant-and-equipment",
    title: "Capitalizing and depreciating equipment",
    format: "calculation",
    minutes: 15,
    scenario: [
      "On January 1, Year 1, Halvorsen Packaging bought a machine. It paid an invoice price of $110,000, freight of $3,000, installation of $5,000 and testing before use of $2,000. Workers damaged the machine during installation, and the repair cost $1,500.",
      "The machine has an estimated salvage value of $12,000 and a useful life of five years, or 30,000 units of output. It produced 7,000 units in Year 1.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: ["Amount", "Dollars ($)"],
    rows: [
      row("Capitalized cost of the machine", num(120000), "110,000 + 3,000 + 5,000 + 2,000 = 120,000. The repair of the damage is not needed to get the asset ready, so it is expensed."),
      row("Straight-line depreciation, Year 1", num(21600), "(120,000 − 12,000) ÷ 5 = 21,600."),
      row("Double-declining-balance depreciation, Year 1", num(48000), "Rate 2 ÷ 5 = 40%, applied to cost (salvage is ignored): 120,000 × 40% = 48,000."),
      row("Double-declining-balance depreciation, Year 2", num(28800), "(120,000 − 48,000) × 40% = 28,800."),
      row("Sum-of-the-years'-digits depreciation, Year 1", num(36000), "Digits 1+2+3+4+5 = 15. (120,000 − 12,000) × 5/15 = 36,000."),
      row("Sum-of-the-years'-digits depreciation, Year 2", num(28800), "108,000 × 4/15 = 28,800."),
      row("Units-of-production depreciation, Year 1", num(25200), "108,000 ÷ 30,000 = 3.60 per unit × 7,000 = 25,200."),
    ],
    takeaway: "Capitalize every cost needed to get the asset ready for use, but not repairs of avoidable damage. Declining-balance methods ignore salvage in the rate but never depreciate below it.",
  },
  {
    slug: "asset-impairment",
    subject: "far",
    topic: "property-plant-and-equipment",
    title: "Impairment of long-lived assets",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Stroud Mining tests a group of extraction equipment for impairment because commodity prices fell sharply. The group's carrying amount is $900,000, its undiscounted future cash flows are $850,000 and its fair value is $700,000. The equipment will continue to be used.",
      "Separately, Stroud has committed to a plan to sell a warehouse that meets all the held-for-sale criteria. It has a carrying amount of $300,000, a fair value of $280,000 and selling costs of $15,000.",
    ],
    instructions: "Answer each question.",
    columns: ["Question", "Answer"],
    rows: [
      row("Is the equipment group's carrying amount recoverable?", pick(YES_NO, "No"), "Undiscounted cash flows of 850,000 are less than the 900,000 carrying amount, so the recoverability test fails."),
      row("Impairment loss on the equipment ($)", num(200000), "Loss = carrying amount 900,000 − fair value 700,000 = 200,000."),
      row("Impairment loss if the undiscounted cash flows had been $950,000 ($)", num(0), "The asset would be recoverable (950,000 > 900,000), so no loss is recognized even though fair value is lower."),
      row("If the equipment's fair value recovers next year, can Stroud reverse the loss?", pick(YES_NO, "No"), "Impairment losses on assets held and used are never reversed under US rules."),
      row("Loss recognized on the warehouse held for sale ($)", num(35000), "Held-for-sale assets are measured at the lower of carrying amount and fair value less costs to sell: 300,000 − (280,000 − 15,000) = 35,000."),
      row("Is the warehouse depreciated while it is held for sale?", pick(YES_NO, "No"), "Depreciation stops once an asset is classified as held for sale."),
    ],
    takeaway: "Held-and-used assets: test with undiscounted cash flows, measure the loss with fair value, and never reverse. Held for sale: lower of carrying amount and fair value less costs to sell, with no depreciation.",
  },

  // ── Intangibles and goodwill ──
  {
    slug: "capitalize-or-expense-intangibles",
    subject: "far",
    topic: "intangible-assets-and-goodwill",
    title: "Capitalize or expense? Intangible assets",
    format: "classification",
    minutes: 10,
    scenario: [
      "Quenby Pharma is a public company. Its controller is reviewing this year's spending on intangible items and asks how each should be accounted for.",
    ],
    instructions: "Select the accounting treatment for each item.",
    columns: ["Item", "Treatment"],
    rows: [
      row("A patent bought from an inventor, with 10 years of legal life remaining", pick(INTANGIBLE, "Capitalize and amortize"), "A purchased intangible with a finite life is capitalized and amortized over the shorter of its legal and useful life."),
      row("Quenby's own research and development costs for a new drug", pick(INTANGIBLE, "Expense as incurred"), "Internal research and development costs are expensed as incurred."),
      row("Legal fees to successfully defend a patent Quenby owns", pick(INTANGIBLE, "Capitalize and amortize"), "Costs of a successful defense are added to the patent and amortized over its remaining life."),
      row("Goodwill from acquiring a competitor", pick(INTANGIBLE, "Capitalize, do not amortize (test for impairment)"), "Public companies do not amortize goodwill; they test it for impairment. (Private companies may elect to amortize it.)"),
      row("A purchased trademark that can be renewed indefinitely at little cost and that Quenby intends to renew", pick(INTANGIBLE, "Capitalize, do not amortize (test for impairment)"), "An indefinite-lived intangible is not amortized but is tested for impairment."),
      row("Costs of training staff and building a good reputation", pick(INTANGIBLE, "Expense as incurred"), "Internally generated goodwill is never recognized as an asset."),
      row("Start-up costs of opening a new research facility", pick(INTANGIBLE, "Expense as incurred"), "Start-up and organization costs are expensed as incurred."),
      row("In-process research and development acquired in a business combination", pick(INTANGIBLE, "Capitalize, do not amortize (test for impairment)"), "Acquired in-process research and development is recognized at fair value as an indefinite-lived asset until the project is completed or abandoned."),
    ],
    takeaway: "Buying an intangible (alone or in a business combination) leads to capitalization; creating it internally usually leads to expense. Finite lives are amortized; indefinite lives and goodwill are tested for impairment instead.",
  },
  {
    slug: "goodwill-and-impairment",
    subject: "far",
    topic: "intangible-assets-and-goodwill",
    title: "Measuring goodwill and its impairment",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Pellston Corp. (a public company) bought 100% of Varga Ltd. for $2,000,000 in cash. The fair value of Varga's identifiable net assets was $1,600,000. Varga is a separate reporting unit.",
      "Two years later, Pellston tests goodwill for impairment. The reporting unit's carrying amount, including goodwill, is $2,250,000.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: ["Amount", "Dollars ($)"],
    rows: [
      row("Goodwill recognized at acquisition", num(400000), "2,000,000 − 1,600,000 = 400,000."),
      row("Impairment loss if the reporting unit's fair value is $2,100,000", num(150000), "Carrying amount 2,250,000 − fair value 2,100,000 = 150,000, which is less than total goodwill."),
      row("Goodwill after that impairment", num(250000), "400,000 − 150,000 = 250,000."),
      row("Impairment loss if fair value were $2,300,000", num(0), "Fair value exceeds the carrying amount, so there is no impairment."),
      row("Impairment loss if fair value were $1,700,000", num(400000), "The excess is 550,000, but the loss is limited to the 400,000 of goodwill."),
      row("Gain recognized if Pellston had paid only $1,500,000", num(100000), "Paying less than the fair value of net assets is a bargain purchase: 1,600,000 − 1,500,000 = 100,000 gain in earnings (after reassessing the values)."),
    ],
    takeaway: "Goodwill impairment is one step: carrying amount minus fair value of the reporting unit, capped at the goodwill balance.",
  },

  // ── Investments ──
  {
    slug: "debt-and-equity-securities",
    subject: "far",
    topic: "investments-debt-and-equity-securities",
    title: "Measuring debt and equity investments",
    format: "calculation",
    minutes: 12,
    scenario: [
      "During Year 1, Whitlock Insurance bought three bonds at par for $100,000 each. It classified one as trading, one as available-for-sale and one as held-to-maturity. There are no credit losses. It also bought shares of another company for $50,000, which gave it no significant influence.",
      "At December 31, Year 1, fair values were: trading bond $104,000; available-for-sale bond $97,000; held-to-maturity bond $95,000; shares $56,000.",
    ],
    instructions: "Enter each amount in dollars. Enter losses as positive amounts.",
    columns: ["Amount", "Dollars ($)"],
    rows: [
      row("Trading bond: carrying amount", num(104000), "Trading securities are carried at fair value."),
      row("Trading bond: unrealized gain in net income", num(4000), "Changes in fair value of trading securities go to net income: 104,000 − 100,000."),
      row("Available-for-sale bond: carrying amount", num(97000), "Available-for-sale securities are carried at fair value."),
      row("Available-for-sale bond: unrealized loss in other comprehensive income", num(3000), "With no credit loss, the 3,000 decline goes to other comprehensive income, not net income."),
      row("Held-to-maturity bond: carrying amount", num(100000), "Held-to-maturity securities are carried at amortized cost (here, par)."),
      row("Shares: gain in net income", num(6000), "Equity securities with readily determinable fair values are measured at fair value through net income: 56,000 − 50,000."),
    ],
    takeaway: "Debt: trading at fair value through net income; available-for-sale at fair value through other comprehensive income; held-to-maturity at amortized cost. Equity securities without significant influence go through net income.",
  },
  {
    slug: "equity-method-investment",
    subject: "far",
    topic: "investments-debt-and-equity-securities",
    title: "Equity method investment",
    format: "calculation",
    minutes: 15,
    scenario: [
      "On January 1, Corbin Inc. paid $600,000 for 30% of Delft Co.'s common stock, which gives it significant influence. Delft's net assets had a book value of $1,800,000. Delft's equipment was undervalued by $100,000 and has a 10-year remaining life; any other excess is goodwill.",
      "For the year, Delft reported net income of $200,000 and paid dividends of $50,000.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: ["Amount", "Dollars ($)"],
    rows: [
      row("Corbin's share of Delft's reported net income", num(60000), "30% × 200,000 = 60,000."),
      row("Extra depreciation on the equipment fair value excess", num(3000), "30% × 100,000 = 30,000 excess on equipment ÷ 10 years = 3,000 a year."),
      row("Equity method investment income", num(57000), "60,000 − 3,000 = 57,000."),
      row("Reduction in the investment for dividends", num(15000), "30% × 50,000 = 15,000. Dividends reduce the investment; they are not income."),
      row("Investment balance at December 31", num(642000), "600,000 + 57,000 − 15,000 = 642,000."),
      row("Implied goodwill in the purchase price", num(30000), "600,000 − (30% × 1,800,000 = 540,000) = 60,000 excess; 30,000 is equipment, leaving 30,000 goodwill, which is not amortized."),
    ],
    takeaway: "Under the equity method, income increases the investment, dividends reduce it, and any excess paid for depreciable assets is depreciated through investment income.",
  },

  // ── Leases ──
  {
    slug: "lease-classification",
    subject: "far",
    topic: "leases",
    title: "Classifying leases as a lessee",
    format: "classification",
    minutes: 10,
    scenario: [
      "Ravensworth Logistics has signed several new leases this year as a lessee. It has elected the short-term lease exemption. None of the leases meet more than one criterion unless stated.",
    ],
    instructions: "Select how Ravensworth should classify each lease.",
    columns: ["Lease", "Classification"],
    rows: [
      row("Truck lease that transfers ownership of the truck to Ravensworth at the end of the term", pick(LEASE_CLASS, "Finance lease"), "Transfer of ownership is one of the five finance lease criteria."),
      row("Forklift lease for 6 years of the forklift's 8-year economic life", pick(LEASE_CLASS, "Finance lease"), "75% of the economic life is a major part of it, a common bright line for the lease term criterion."),
      row("Office lease where the present value of payments is 80% of the building's fair value", pick(LEASE_CLASS, "Operating lease"), "80% is not substantially all of the fair value (90% is the common bright line), and no other criterion is met."),
      row("Equipment lease with a purchase option Ravensworth is reasonably certain to exercise", pick(LEASE_CLASS, "Finance lease"), "A purchase option the lessee is reasonably certain to exercise is a finance lease criterion."),
      row("Lease of a conveyor system built to Ravensworth's specifications with no other use to the lessor", pick(LEASE_CLASS, "Finance lease"), "A specialized asset with no alternative use to the lessor meets the fifth criterion."),
      row("Three-year copier lease of a 10-year asset; payments are 40% of its fair value", pick(LEASE_CLASS, "Operating lease"), "No criterion is met."),
      row("Ten-month lease of a storage unit, with no purchase option", pick(LEASE_CLASS, "Short-term lease: no right-of-use asset recognized"), "A lease of 12 months or less with no purchase option the lessee is reasonably certain to exercise can be expensed straight-line, off the balance sheet."),
    ],
    takeaway: "Five finance lease criteria: ownership transfer, purchase option reasonably certain, major part of economic life, substantially all of fair value, specialized asset. Meet any one and it is a finance lease for the lessee.",
  },
  {
    slug: "finance-vs-operating-lease",
    subject: "far",
    topic: "leases",
    title: "Lessee accounting: finance versus operating lease",
    format: "calculation",
    minutes: 15,
    scenario: [
      "On January 1, Year 1, Penhallow Co. leased equipment for five years. Payments are $50,000 a year, due at the start of each year, beginning January 1, Year 1. Penhallow's incremental borrowing rate is 6%, and the rate in the lease is not known.",
    ],
    exhibits: [
      {
        title: "Present value factor",
        table: {
          head: ["Factor", "Value"],
          rows: [["Present value of an annuity due of 1, 5 periods, 6%", "4.4651"]],
        },
      },
    ],
    instructions: "Round to the nearest dollar. First answer as if the lease is a finance lease, then as if it is an operating lease.",
    columns: ["Amount", "Dollars ($)"],
    rows: [
      row("Initial lease liability (and right-of-use asset)", num(223255, 2), "50,000 × 4.4651 = 223,255."),
      row("Finance lease: interest expense for Year 1", num(10395, 2), "The first payment is made on day one, so interest runs on 223,255 − 50,000 = 173,255 × 6% = 10,395."),
      row("Finance lease: amortization of the right-of-use asset for Year 1", num(44651, 2), "223,255 ÷ 5 = 44,651, straight-line."),
      row("Finance lease: total expense for Year 1", num(55046, 3), "10,395 + 44,651 = 55,046. Finance leases front-load expense."),
      row("Finance lease: lease liability at December 31, Year 1", num(183650, 3), "173,255 + accrued interest 10,395 = 183,650, just before the second payment."),
      row("Operating lease: lease cost for Year 1", num(50000), "An operating lease shows a single straight-line lease cost: total payments 250,000 ÷ 5 = 50,000."),
    ],
    takeaway: "Both lease types put a right-of-use asset and a liability on the balance sheet. The difference is in the income statement: interest plus amortization (front-loaded) for a finance lease, one straight-line cost for an operating lease.",
  },

  // ── Current liabilities and contingencies ──
  {
    slug: "loss-contingencies",
    subject: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    title: "Accruing and disclosing contingencies",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Ellison Manufacturing's legal counsel and controller have assessed the matters below at year-end. Ellison's sales for the year were $5,000,000, and it gives an assurance-type warranty on everything it sells.",
    ],
    instructions: "For each matter, select the treatment and enter the amount accrued (enter 0 or leave blank if nothing is accrued).",
    columns: ["Matter", "Treatment", "Amount accrued ($)"],
    rows: [
      row("A lawsuit Ellison will probably lose; the loss is estimated at $500,000", [pick(CONTINGENCY, "Accrue and disclose"), num(500000)], "Probable and reasonably estimable: accrue."),
      row("A probable loss estimated between $200,000 and $600,000, with no amount in the range more likely than another", [pick(CONTINGENCY, "Accrue and disclose"), num(200000)], "When no amount in the range is a better estimate, accrue the minimum and disclose the possible additional loss."),
      row("A probable loss estimated between $100,000 and $300,000, with $180,000 the most likely amount", [pick(CONTINGENCY, "Accrue and disclose"), num(180000)], "Accrue the best estimate within the range."),
      row("A reasonably possible loss of about $300,000", [pick(CONTINGENCY, "Disclose only"), num(0)], "Reasonably possible losses are disclosed but not accrued."),
      row("A remote chance of losing a nuisance lawsuit", [pick(CONTINGENCY, "Neither accrue nor disclose"), num(0)], "Remote losses usually need neither accrual nor disclosure (guarantees are an exception)."),
      row("A probable gain of $400,000 from a lawsuit Ellison filed", [pick(CONTINGENCY, "Disclose only"), num(0)], "Gain contingencies are not recognized until realized. They may be disclosed, taking care not to mislead."),
      row("Warranty costs, expected to be 2% of this year's sales", [pick(CONTINGENCY, "Accrue and disclose"), num(100000)], "Warranty costs are probable and estimable, so they are accrued in the year of sale: 2% × 5,000,000."),
    ],
    takeaway: "Accrue a loss only when it is probable and reasonably estimable: the best estimate, or the minimum of a range. Never accrue a gain contingency.",
  },
  {
    slug: "payroll-sales-tax-and-accrued-interest",
    subject: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    title: "Payroll, sales tax and accrued interest",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Fairbanks Outdoor Co. collected $530,000 from customers in December, including 6% sales tax. December gross wages were $100,000. Employee Social Security and Medicare (FICA) taxes withheld were 7.65%, and federal income tax withheld was $15,000. The employer pays matching FICA taxes and $2,000 of unemployment taxes.",
      "On December 1, Fairbanks also signed a 90-day, 8% note payable for $60,000. Use a 360-day year.",
    ],
    instructions: "Enter each amount in dollars, and choose the note's classification.",
    columns: ["Item", "Answer"],
    rows: [
      row("December sales revenue ($)", num(500000), "530,000 ÷ 1.06 = 500,000. Sales tax collected is not revenue."),
      row("Sales tax payable ($)", num(30000), "530,000 − 500,000 = 30,000, owed to the state."),
      row("Net pay to employees ($)", num(77350), "100,000 − FICA 7,650 − income tax withheld 15,000 = 77,350."),
      row("Employer payroll tax expense ($)", num(9650), "Matching FICA 7,650 + unemployment taxes 2,000 = 9,650. Amounts withheld from employees are not the employer's expense."),
      row("Accrued interest on the note at December 31 ($)", num(400), "60,000 × 8% × 30/360 = 400."),
      row("Balance sheet classification of the note", pick(["Current liability", "Noncurrent liability"], "Current liability"), "It is due within 90 days, so it is current."),
    ],
    takeaway: "Withholdings and sales tax are liabilities the company holds for others, not its own expenses or revenue. Only the employer's share of payroll taxes is expense.",
  },

  // ── Long-term debt ──
  {
    slug: "bonds-effective-interest",
    subject: "far",
    topic: "long-term-debt",
    title: "Bonds issued at a discount: effective interest method",
    format: "calculation",
    minutes: 15,
    scenario: [
      "On January 1, Year 1, Wexford Energy issued $1,000,000 of five-year bonds with a 6% stated rate, paying interest every December 31. The market rate for similar bonds was 8%. Wexford also paid $20,000 of debt issuance costs.",
    ],
    exhibits: [
      {
        title: "Present value factors at 8%, 5 periods",
        table: {
          head: ["Factor", "Value"],
          rows: [
            ["Present value of 1", "0.6806"],
            ["Present value of an ordinary annuity of 1", "3.9927"],
          ],
        },
      },
    ],
    instructions: "Ignore the issuance costs in the amounts. Round to the nearest dollar.",
    columns: ["Item", "Answer"],
    rows: [
      row("Issue price of the bonds ($)", num(920162, 2), "Principal 1,000,000 × 0.6806 = 680,600 + interest 60,000 × 3.9927 = 239,562 → 920,162."),
      row("Discount at issuance ($)", num(79838, 2), "1,000,000 − 920,162 = 79,838."),
      row("Interest expense for Year 1 ($)", num(73613, 2), "Carrying amount 920,162 × market rate 8% = 73,613."),
      row("Discount amortized in Year 1 ($)", num(13613, 2), "Interest expense 73,613 − cash paid 60,000 = 13,613."),
      row("Carrying amount at December 31, Year 1 ($)", num(933775, 3), "920,162 + 13,613 = 933,775."),
      row("Interest expense for Year 2 ($)", num(74702, 3), "933,775 × 8% = 74,702. Expense rises each year as the discount is amortized."),
      row(
        "How are the $20,000 of issuance costs presented?",
        pick(["As a deferred charge (asset)", "As a direct deduction from the bonds' carrying amount", "As an expense when the bonds are issued"], "As a direct deduction from the bonds' carrying amount"),
        "Debt issuance costs reduce the carrying amount of the debt, like a discount, and are amortized as interest.",
      ),
    ],
    takeaway: "Effective interest: expense = carrying amount × market rate; cash = face × stated rate; the difference amortizes the discount or premium.",
  },
  {
    slug: "bond-issue-and-retirement-entries",
    subject: "far",
    topic: "long-term-debt",
    title: "Journal entries: issuing and retiring bonds",
    format: "journal-entry",
    minutes: 12,
    scenario: [
      "1. Ingram Corp. issues $200,000 face value of bonds at 103.",
      "2. Ingram retires different bonds early: they have a face value of $500,000 and an unamortized discount of $15,000, and it buys them back at 102. Interest is fully paid up to the retirement date.",
    ],
    instructions: "Enter the debit or credit amount for each account. Leave the unused side blank.",
    columns: JE_COLUMNS,
    rows: [
      line("1. Cash", 206000, 0, "200,000 × 1.03 = 206,000 received."),
      line("1. Bonds payable", 0, 200000, "Bonds are recorded at face value."),
      line("1. Premium on bonds payable", 0, 6000, "The 6,000 above face is a premium, amortized as a reduction of interest expense."),
      line("2. Bonds payable", 500000, 0, "Remove the face value of the retired bonds."),
      line("2. Loss on extinguishment of debt", 25000, 0, "Carrying amount 485,000 (500,000 − 15,000) vs. 510,000 paid: a loss of 25,000."),
      line("2. Discount on bonds payable", 0, 15000, "Remove the unamortized discount."),
      line("2. Cash", 0, 510000, "500,000 × 1.02 = 510,000 paid."),
    ],
    takeaway: "On early retirement, compare the cash paid with the carrying amount (face ± unamortized premium or discount). The difference is a gain or loss in income.",
  },

  // ── Equity and earnings per share ──
  {
    slug: "basic-and-diluted-eps",
    subject: "far",
    topic: "equity-and-earnings-per-share",
    title: "Basic and diluted earnings per share",
    format: "calculation",
    minutes: 18,
    scenario: [
      "Thornbury Inc. reported net income of $900,000 for the year. It has $1,000,000 of 6% cumulative preferred stock, not convertible. No preferred dividends were declared this year.",
      "Common shares: 200,000 outstanding on January 1; 40,000 issued on April 1; 20,000 bought back as treasury stock on October 1.",
      "All year, Thornbury had 10,000 stock options outstanding with an exercise price of $20 (average market price $25), and $500,000 of 5% convertible bonds, convertible into 25,000 shares. The tax rate is 25%.",
    ],
    instructions: "Enter each amount. Round earnings per share (EPS) to two decimals.",
    columns: ["Item", "Answer"],
    rows: [
      row("Preferred dividends deducted for basic EPS ($)", num(60000), "Cumulative preferred dividends are deducted whether or not declared: 6% × 1,000,000."),
      row("Weighted average common shares outstanding", num(225000), "200,000 + 40,000 × 9/12 − 20,000 × 3/12 = 200,000 + 30,000 − 5,000 = 225,000."),
      row("Basic EPS ($)", num(3.73, 0.01), "(900,000 − 60,000) ÷ 225,000 = 3.73."),
      row("Incremental shares from the options (treasury stock method)", num(2000), "Proceeds 10,000 × 20 = 200,000 buy back 200,000 ÷ 25 = 8,000 shares, so 2,000 new shares are added."),
      row("After-tax interest added back for the convertible bonds ($)", num(18750), "500,000 × 5% × (1 − 25%) = 18,750."),
      row("Diluted EPS ($)", num(3.41, 0.01), "(840,000 + 18,750) ÷ (225,000 + 2,000 + 25,000) = 858,750 ÷ 252,000 = 3.41. The bonds add 0.75 per share, less than EPS, so they are dilutive."),
    ],
    takeaway: "Cumulative preferred dividends reduce basic EPS even if undeclared. For diluted EPS, add options by the treasury stock method and convertibles by the if-converted method, including only those that lower EPS.",
  },
  {
    slug: "stock-issuance-dividends-and-treasury-stock",
    subject: "far",
    topic: "equity-and-earnings-per-share",
    title: "Journal entries: stock issues, stock dividends and treasury stock",
    format: "journal-entry",
    minutes: 15,
    scenario: [
      "Ashcombe Corp.'s common stock has a $1 par value. It records treasury stock at cost.",
      "1. Issues 10,000 shares for $25 cash each.",
      "2. Later, with 100,000 shares outstanding and a market price of $30, declares a 10% stock dividend.",
      "3. Buys back 2,000 shares at $28 each.",
      "4. Reissues 1,000 of those treasury shares at $32 each.",
    ],
    instructions: "Enter the debit or credit amount for each account. Leave the unused side blank.",
    columns: JE_COLUMNS,
    rows: [
      line("1. Cash", 250000, 0, "10,000 × 25 = 250,000."),
      line("1. Common stock", 0, 10000, "Par value: 10,000 × 1."),
      line("1. Additional paid-in capital", 0, 240000, "The excess over par."),
      line("2. Retained earnings", 300000, 0, "A small stock dividend (under 20–25%) is recorded at market value: 10,000 shares × 30."),
      line("2. Common stock dividend distributable", 0, 10000, "Par value of the 10,000 shares to be issued. It is an equity account, not a liability."),
      line("2. Additional paid-in capital", 0, 290000, "Market value above par: 300,000 − 10,000."),
      line("3. Treasury stock", 56000, 0, "Cost method: 2,000 × 28."),
      line("3. Cash", 0, 56000, "Cash paid."),
      line("4. Cash", 32000, 0, "1,000 × 32."),
      line("4. Treasury stock", 0, 28000, "Removed at cost: 1,000 × 28."),
      line("4. Additional paid-in capital: treasury stock", 0, 4000, "The excess over cost goes to paid-in capital, never to a gain."),
    ],
    takeaway: "Companies never record gains or losses on their own stock. Small stock dividends move market value from retained earnings; large ones move only par value.",
  },
];
