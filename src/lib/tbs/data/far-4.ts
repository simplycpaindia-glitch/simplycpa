import type { Simulation } from "../types";
import { DETECT_COLUMNS, DETECT_INSTRUCTIONS, NO_ENTRY, fix } from "../build";

// FAR detect-and-correct simulations: review evidence against draft balances and post
// the correcting entries, in the style of the AICPA's retired FAR simulation.

const RECEIVABLES = [
  "Cash",
  "Accounts receivable",
  "Allowance for doubtful accounts",
  "Sales revenue",
  "Bad debt expense",
  "Loss on sale of receivables",
  NO_ENTRY,
] as const;

const INVENTORY = ["Accounts receivable", "Inventory", "Sales revenue", "Cost of goods sold", "Accounts payable", NO_ENTRY] as const;

const FIXED_ASSETS = [
  "Equipment",
  "Land",
  "Accumulated depreciation",
  "Depreciation expense",
  "Repairs and maintenance expense",
  NO_ENTRY,
] as const;

const REVENUE = ["Cash", "Accounts receivable", "Contract liability", "Revenue", NO_ENTRY] as const;

const LIABILITIES = [
  "Accounts payable",
  "Accrued liabilities",
  "Interest payable",
  "Warranty liability",
  "Utilities expense",
  "Interest expense",
  "Loss on litigation",
  "Warranty expense",
  NO_ENTRY,
] as const;

const INVESTMENTS = [
  "Investment in equity securities",
  "Investment in debt securities",
  "Dividends receivable",
  "Dividend income",
  "Unrealized gain on equity securities (net income)",
  "Unrealized loss on debt securities (other comprehensive income)",
  NO_ENTRY,
] as const;

export const farDetectAndCorrect: Simulation[] = [
  {
    slug: "detect-correct-receivables",
    subject: "far",
    topic: "cash-receivables-and-bad-debts",
    title: "Detect and correct: year-end receivables",
    format: "detect-and-correct",
    minutes: 18,
    scenario: [
      "You are reviewing Norcross Supply's draft balances at December 31, Year 1, before the financial statements are finalized. Compare the draft figures with the evidence in the exhibits and correct any misstatements.",
    ],
    exhibits: [
      {
        title: "Draft trial balance (extract), December 31, Year 1",
        table: {
          head: ["Account", "Debit ($)", "Credit ($)"],
          rows: [
            ["Cash", "152,000", ""],
            ["Accounts receivable", "480,000", ""],
            ["Allowance for doubtful accounts", "", "12,000"],
            ["Sales revenue", "", "2,400,000"],
            ["Bad debt expense", "9,000", ""],
          ],
        },
      },
      {
        title: "Exhibit 1: Email from the receivables manager",
        text: [
          "\"On December 15 we sold $60,000 of customer accounts to Capital Factors, without recourse. They paid us $57,000 and kept a 5% fee. I booked it as: debit Cash $57,000, credit Accounts receivable $57,000.\"",
        ],
      },
      {
        title: "Exhibit 2: December bank statement (extract)",
        text: [
          "December 30: customer check of $8,000 returned unpaid — insufficient funds. (Norcross has not recorded this.)",
          "December 31: deposit of $15,000 made late in the day; it appears on the January statement. (Norcross recorded it on December 31.)",
        ],
      },
      {
        title: "Exhibit 3: Aging schedule summary",
        text: [
          "After reflecting all of the items above, the aging of accounts receivable supports a required allowance for doubtful accounts of $22,000 at December 31, Year 1.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Exhibit 1: sale of receivables to Capital Factors", RECEIVABLES, "Loss on sale of receivables", "Accounts receivable", 3000, "A sale without recourse removes the full $60,000 of receivables; the $3,000 fee is a loss. The client removed only $57,000, so receivables are overstated by $3,000."),
      fix("Exhibit 2: check returned for insufficient funds", RECEIVABLES, "Accounts receivable", "Cash", 8000, "The customer still owes the money, so the receivable is reinstated and cash reduced."),
      fix("Exhibit 2: late deposit on December 31", RECEIVABLES, NO_ENTRY, NO_ENTRY, 0, "A deposit in transit is a timing difference on the bank side. The books are already right."),
      fix("Exhibit 3: allowance for doubtful accounts", RECEIVABLES, "Bad debt expense", "Allowance for doubtful accounts", 10000, "The allowance must be $22,000; it is $12,000, so $10,000 more expense is needed."),
    ],
    takeaway: "Detect-and-correct tasks reward discipline: compare each piece of evidence with what was recorded, fix only the difference, and recognize items (such as deposits in transit) that need no entry.",
  },
  {
    slug: "detect-correct-inventory",
    subject: "far",
    topic: "inventory",
    title: "Detect and correct: inventory cut-off and valuation",
    format: "detect-and-correct",
    minutes: 18,
    scenario: [
      "Halden Outfitters uses a perpetual first-in, first-out (FIFO) inventory system. You are reviewing its draft December 31, Year 1 balances against the year-end evidence below.",
    ],
    exhibits: [
      {
        title: "Draft balances (extract), December 31, Year 1",
        table: {
          head: ["Account", "Amount ($)"],
          rows: [
            ["Inventory", "640,000"],
            ["Sales revenue", "4,800,000"],
            ["Cost of goods sold", "3,100,000"],
          ],
        },
      },
      {
        title: "Exhibit 1: Shipping log",
        text: [
          "December 30: goods sold to Ridgeway Stores for $30,000 (cost $20,000), shipped free on board (FOB) destination. Ridgeway received them on January 4, Year 2. Halden recorded the sale and the cost of goods sold on December 30.",
        ],
      },
      {
        title: "Exhibit 2: Net realizable value review",
        text: [
          "Product line Z (cost $50,000) can now be sold for $47,000, with $5,000 of selling costs. All other lines have a net realizable value above cost.",
        ],
      },
      {
        title: "Exhibit 3: Physical count reconciliation",
        text: [
          "After the Ridgeway goods are added back to the records, the physical count at cost is $6,000 below the perpetual records. The difference is unexplained shrinkage.",
          "The count correctly excluded $12,000 of goods that Halden holds on consignment for a supplier; they are not in the perpetual records either.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Exhibit 1: reverse the Ridgeway sale", INVENTORY, "Sales revenue", "Accounts receivable", 30000, "Under FOB destination, control passes when Ridgeway receives the goods in January, so the December sale is reversed."),
      fix("Exhibit 1: put the Ridgeway goods back into inventory", INVENTORY, "Inventory", "Cost of goods sold", 20000, "The goods were still Halden's at year-end, so their cost goes back into inventory."),
      fix("Exhibit 2: line Z write-down", INVENTORY, "Cost of goods sold", "Inventory", 8000, "Net realizable value is $47,000 − $5,000 = $42,000, below cost of $50,000, so inventory is written down by $8,000."),
      fix("Exhibit 3: shrinkage", INVENTORY, "Cost of goods sold", "Inventory", 6000, "The perpetual records are reduced to the physical count."),
      fix("Exhibit 3: consigned goods held for the supplier", INVENTORY, NO_ENTRY, NO_ENTRY, 0, "Goods held on consignment belong to the consignor. They were correctly left out of both the count and the records."),
    ],
    takeaway: "Ownership follows the shipping terms (FOB destination: the seller owns goods in transit), consigned goods belong to the consignor, and the lower of cost and net realizable value uses selling price less costs to sell.",
  },
  {
    slug: "detect-correct-fixed-assets",
    subject: "far",
    topic: "property-plant-and-equipment",
    title: "Detect and correct: fixed asset additions",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "Caldwell Printing depreciates equipment straight-line over 10 years with no salvage value, taking a full year in the year of purchase. You are reviewing the Year 1 fixed asset additions and disposals.",
    ],
    exhibits: [
      {
        title: "Exhibit 1: Invoice file",
        text: [
          "January 2, Year 1: new press, $60,000, plus $5,000 installation. The press was capitalized at $60,000 and depreciated ($6,000). The installation was charged to repairs and maintenance expense.",
          "July 1, Year 1: $12,000 for routine annual servicing of all presses, recorded as an addition to equipment. No depreciation was taken on it.",
          "December 31, Year 1: $100,000 paid for a plot of land next to the plant, recorded in the equipment account. No depreciation was taken on it.",
        ],
      },
      {
        title: "Exhibit 2: Disposal log",
        text: [
          "A delivery truck that cost $40,000 and was fully depreciated was scrapped in Year 1 for no proceeds. It is still in the equipment and accumulated depreciation accounts.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Installation of the new press", FIXED_ASSETS, "Equipment", "Repairs and maintenance expense", 5000, "Installation is needed to get the press ready for use, so it is capitalized."),
      fix("Depreciation on the installation cost", FIXED_ASSETS, "Depreciation expense", "Accumulated depreciation", 500, "The extra $5,000 is depreciated over 10 years: $500 for Year 1."),
      fix("Routine servicing recorded as equipment", FIXED_ASSETS, "Repairs and maintenance expense", "Equipment", 12000, "Routine maintenance keeps assets working; it doesn't extend their life or capacity, so it is expensed."),
      fix("Land recorded as equipment", FIXED_ASSETS, "Land", "Equipment", 100000, "Land is a separate, nondepreciable asset. No depreciation needs reversing because none was taken."),
      fix("Scrapped truck", FIXED_ASSETS, "Accumulated depreciation", "Equipment", 40000, "Remove the cost and the accumulated depreciation. The truck was fully depreciated with no proceeds, so there is no gain or loss."),
    ],
    takeaway: "Capitalize costs that get an asset ready for use, expense routine maintenance, keep land separate (it isn't depreciated), and remove disposed assets together with their accumulated depreciation.",
  },
  {
    slug: "detect-correct-revenue",
    subject: "far",
    topic: "revenue-recognition",
    title: "Detect and correct: revenue cut-off and contract liabilities",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "Brightline Systems sells equipment and services. You are reviewing revenue recorded around its December 31, Year 1 year-end against the contracts and billing records below.",
    ],
    exhibits: [
      {
        title: "Exhibit 1: Contract and billing review",
        text: [
          "October 1, Year 1: a customer paid $24,000 for 12 months of maintenance starting that day. Brightline recorded all $24,000 as revenue.",
          "December 28, Year 1: consulting work for $15,000 was completed and accepted by the customer, but not invoiced until January 5, Year 2. Nothing was recorded in Year 1.",
          "December 20, Year 1: a customer paid a $10,000 deposit for installation work that starts in February, Year 2. Brightline recorded it as revenue.",
          "December 31, Year 1: equipment sold for $40,000 was shipped free on board (FOB) shipping point and recorded as revenue that day.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Maintenance contract paid October 1", REVENUE, "Revenue", "Contract liability", 18000, "Only 3 of the 12 months have been provided: $24,000 × 3/12 = $6,000 earned. The other $18,000 is a contract liability."),
      fix("Consulting work completed December 28", REVENUE, "Accounts receivable", "Revenue", 15000, "The work is done and accepted, so revenue is earned in Year 1, and the right to payment is unconditional (a receivable), even though the invoice goes out in January."),
      fix("Deposit for February installation", REVENUE, "Revenue", "Contract liability", 10000, "No performance has occurred, so the deposit is a contract liability."),
      fix("Equipment shipped FOB shipping point on December 31", REVENUE, NO_ENTRY, NO_ENTRY, 0, "Under FOB shipping point, control passes on shipment, so recording the sale on December 31 is correct."),
    ],
    takeaway: "Revenue follows performance, not cash or invoices: cash received before performance is a contract liability, and completed work is revenue even if billed later.",
  },
  {
    slug: "detect-correct-liabilities",
    subject: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    title: "Detect and correct: unrecorded liabilities",
    format: "detect-and-correct",
    minutes: 18,
    scenario: [
      "As part of closing the books of Merrow Manufacturing for the year ended December 31, Year 1, you search for unrecorded liabilities using January payments, legal correspondence and loan documents.",
    ],
    exhibits: [
      {
        title: "Exhibit 1: January, Year 2 payments (extract)",
        text: [
          "January 8: $14,000 to the electricity company for power used in December, Year 1. No accrual was recorded at year-end.",
          "January 10: $9,000 to a supplier for materials received on January 6, Year 2.",
        ],
      },
      {
        title: "Exhibit 2: Letter from legal counsel",
        text: [
          "\"In our opinion, it is probable that the company will lose the Fairview lawsuit. We estimate the loss at between $50,000 and $80,000; no amount within that range is more likely than any other.\" Nothing has been recorded.",
        ],
      },
      {
        title: "Exhibit 3: Note payable",
        text: [
          "A $200,000 note payable carries 6% interest, paid annually each September 30. Interest was paid on September 30, Year 1; nothing has been accrued since.",
        ],
      },
      {
        title: "Exhibit 4: Warranty analysis",
        text: [
          "Merrow has expensed warranty claims only as paid. Based on its claims history, the expected cost of future claims on Year 1 sales is $20,000. No warranty liability is recorded.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Exhibit 1: December electricity", LIABILITIES, "Utilities expense", "Accrued liabilities", 14000, "The power was used in December, so the expense and liability belong in Year 1."),
      fix("Exhibit 1: materials received January 6", LIABILITIES, NO_ENTRY, NO_ENTRY, 0, "The materials arrived in Year 2, so there was no liability at December 31, Year 1."),
      fix("Exhibit 2: Fairview lawsuit", LIABILITIES, "Loss on litigation", "Accrued liabilities", 50000, "A probable, reasonably estimable loss is accrued. With no best estimate in the range, accrue the minimum ($50,000) and disclose the possible additional $30,000."),
      fix("Exhibit 3: interest on the note", LIABILITIES, "Interest expense", "Interest payable", 3000, "Interest for October to December: $200,000 × 6% × 3/12 = $3,000."),
      fix("Exhibit 4: warranties", LIABILITIES, "Warranty expense", "Warranty liability", 20000, "Assurance-type warranty costs are accrued in the year of sale, not expensed when claims are paid."),
    ],
    takeaway: "The search for unrecorded liabilities asks one question of every later payment and letter: did the obligation exist at the balance sheet date?",
  },
  {
    slug: "detect-correct-investments",
    subject: "far",
    topic: "investments-debt-and-equity-securities",
    title: "Detect and correct: investment portfolio at year-end",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "Larkfield Corp. holds two investments, both still carried at their Year 1 purchase cost. You are reviewing the year-end broker statement and other records to bring them to the correct amounts at December 31, Year 1.",
    ],
    exhibits: [
      {
        title: "Draft balances (extract), December 31, Year 1",
        table: {
          head: ["Investment", "Carrying amount ($)"],
          rows: [
            ["Alpha Inc. shares (2% of Alpha; no significant influence)", "80,000"],
            ["Beta Corp. bonds (classified as available-for-sale)", "200,000"],
          ],
        },
      },
      {
        title: "Exhibit 1: Broker statement, December 31, Year 1",
        text: [
          "Alpha Inc. shares: fair value $92,000.",
          "Beta Corp. bonds: fair value $194,000. The decline reflects higher market interest rates; there is no credit loss.",
          "Beta Corp. paid its $5,000 semiannual coupon on December 31, Year 1; Larkfield recorded the cash and interest income.",
        ],
      },
      {
        title: "Exhibit 2: Board minutes of Alpha Inc.",
        text: [
          "On December 20, Year 1, Alpha declared a dividend payable January 15, Year 2. Larkfield's share is $2,000. Larkfield has not recorded it.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Alpha shares: year-end fair value", INVESTMENTS, "Investment in equity securities", "Unrealized gain on equity securities (net income)", 12000, "Equity securities without significant influence are measured at fair value through net income: $92,000 − $80,000."),
      fix("Beta bonds: year-end fair value", INVESTMENTS, "Unrealized loss on debt securities (other comprehensive income)", "Investment in debt securities", 6000, "Available-for-sale debt securities are carried at fair value; with no credit loss, the $6,000 decline goes to other comprehensive income."),
      fix("Alpha dividend declared December 20", INVESTMENTS, "Dividends receivable", "Dividend income", 2000, "The dividend is income when declared, so a receivable is recorded at year-end."),
      fix("Beta coupon paid December 31", INVESTMENTS, NO_ENTRY, NO_ENTRY, 0, "The coupon was received and recorded on the payment date, so nothing is accrued."),
    ],
    takeaway: "Know where each change in value goes: equity securities through net income, available-for-sale debt through other comprehensive income (unless it is a credit loss), and dividends when declared.",
  },
];
