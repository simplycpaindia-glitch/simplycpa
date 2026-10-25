import type { Simulation } from "../types";
import { DETECT_COLUMNS, DETECT_INSTRUCTIONS, NO_ENTRY, fix } from "../build";

// More FAR detect-and-correct simulations: leases, income taxes and bonds.

const LEASES = [
  "Right-of-use asset",
  "Lease liability",
  "Interest expense",
  "Amortization expense",
  "Lease expense",
  "Cash",
  NO_ENTRY,
] as const;

const TAXES = [
  "Current income tax expense",
  "Deferred income tax expense (benefit)",
  "Income taxes payable",
  "Deferred tax asset",
  "Deferred tax liability",
  NO_ENTRY,
] as const;

const BONDS = [
  "Cash",
  "Bonds payable",
  "Current portion of long-term debt",
  "Discount on bonds payable",
  "Unamortized debt issuance costs",
  "Interest expense",
  "Professional fees expense",
  "Gain on extinguishment of debt",
  NO_ENTRY,
] as const;

export const farDetectAndCorrect2: Simulation[] = [
  {
    slug: "detect-correct-leases",
    subject: "far",
    topic: "leases",
    title: "Detect and correct: lessee lease accounting",
    format: "detect-and-correct",
    minutes: 18,
    scenario: [
      "Whitmore Labs is a lessee with a December 31 year-end. It has elected the short-term lease exemption. You are reviewing its lease accounting for Year 1 against the lease files below.",
    ],
    exhibits: [
      {
        title: "Exhibit 1: Office lease",
        text: [
          "A 5-year office lease, classified as an operating lease, commenced on December 31, Year 1. The first payment is due December 31, Year 2. The present value of the lease payments is $250,000. Whitmore has recorded nothing for this lease.",
        ],
      },
      {
        title: "Exhibit 2: Equipment rental",
        text: [
          "A 9-month equipment rental with no purchase option commenced on December 31, Year 1. Whitmore recorded a right-of-use asset and a lease liability of $18,000 for it.",
        ],
      },
      {
        title: "Exhibit 3: Truck lease (finance lease)",
        text: [
          "A finance lease for a truck commenced January 1, Year 1, with a lease liability and right-of-use asset of $40,000. The rate in the lease is 8%, the lease term is 5 years, and payments of $10,000 are made each December 31.",
          "Whitmore recorded the December 31, Year 1 payment as: debit Lease liability $10,000, credit Cash $10,000. It recorded no amortization of the right-of-use asset.",
        ],
      },
      {
        title: "Exhibit 4: Copier agreement",
        text: [
          "Whitmore pays a per-page charge for its leased copiers, which totaled $1,500 in Year 1. These variable payments were expensed as incurred.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Exhibit 1: office lease at commencement", LEASES, "Right-of-use asset", "Lease liability", 250000, "Operating leases also go on the balance sheet: at commencement the lessee records a right-of-use asset and a lease liability at the present value of the payments."),
      fix("Exhibit 2: 9-month equipment rental", LEASES, "Lease liability", "Right-of-use asset", 18000, "With the short-term exemption elected, a lease of 12 months or less with no purchase option stays off the balance sheet; the payments are expensed straight-line. Reverse the entries."),
      fix("Exhibit 3: interest on the truck lease", LEASES, "Interest expense", "Lease liability", 3200, "Interest is $40,000 × 8% = $3,200. Only $6,800 of the payment reduces the liability, but the client reduced it by the full $10,000."),
      fix("Exhibit 3: amortization of the truck right-of-use asset", LEASES, "Amortization expense", "Right-of-use asset", 8000, "A finance lease's right-of-use asset is amortized separately, usually straight-line: $40,000 ÷ 5 = $8,000."),
      fix("Exhibit 4: per-page copier charges", LEASES, NO_ENTRY, NO_ENTRY, 0, "Variable payments based on usage aren't part of the lease liability; they are expensed as incurred, which is what Whitmore did."),
    ],
    takeaway: "Finance leases split the payment into interest and principal and amortize the asset separately. Operating leases still go on the balance sheet. Short-term leases (with the election) and usage-based variable payments stay off it.",
  },
  {
    slug: "detect-correct-income-taxes",
    subject: "far",
    topic: "income-taxes",
    title: "Detect and correct: the income tax provision",
    format: "detect-and-correct",
    minutes: 20,
    scenario: [
      "Osgood Fabrication is in its first year of operations. The tax rate is 21% for all years. The bookkeeper computed income tax expense as 21% of pretax book income of $500,000 and recorded no deferred taxes. Estimated tax payments of $75,000 were made during the year.",
    ],
    exhibits: [
      {
        title: "Draft balances (extract), December 31, Year 1",
        table: {
          head: ["Account", "Amount ($)"],
          rows: [
            ["Current income tax expense", "105,000"],
            ["Income taxes payable", "30,000"],
            ["Deferred tax asset", "0"],
            ["Deferred tax liability", "0"],
          ],
        },
      },
      {
        title: "Exhibit 1: Book-tax differences for Year 1",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Tax depreciation in excess of book depreciation (reverses in later years)", "80,000"],
            ["Warranty expense accrued for books, deductible for tax when paid next year", "30,000"],
            ["Interest on municipal bonds included in book income (never taxable)", "20,000"],
          ],
        },
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Current tax: correct the amount payable for Year 1", TAXES, "Income taxes payable", "Current income tax expense", 14700, "Taxable income = $500,000 − $80,000 + $30,000 − $20,000 = $430,000, so current tax is $90,300, not $105,000. The $14,700 overstatement is removed from expense and payable."),
      fix("Depreciation difference", TAXES, "Deferred income tax expense (benefit)", "Deferred tax liability", 16800, "Faster tax depreciation means more taxable income later: $80,000 × 21% = $16,800 deferred tax liability."),
      fix("Warranty accrual", TAXES, "Deferred tax asset", "Deferred income tax expense (benefit)", 6300, "The warranty deduction comes later: $30,000 × 21% = $6,300 deferred tax asset, a deferred tax benefit."),
      fix("Municipal bond interest", TAXES, NO_ENTRY, NO_ENTRY, 0, "Tax-exempt interest is a permanent difference. It is already excluded from taxable income above and never creates deferred taxes."),
    ],
    takeaway: "Build the provision in two parts: current tax from taxable income (adjusting for every difference), and deferred tax from temporary differences only. Check: total expense $100,800 = 21% × (book income $500,000 − permanent difference $20,000).",
  },
  {
    slug: "detect-correct-bonds",
    subject: "far",
    topic: "long-term-debt",
    title: "Detect and correct: bonds payable",
    format: "detect-and-correct",
    minutes: 18,
    scenario: [
      "Penrose Utilities has several bond issues outstanding. You are reviewing its Year 1 bond accounting, for the year ended December 31, against the documents below. Penrose uses the effective interest method.",
    ],
    exhibits: [
      {
        title: "Exhibit 1: Series C bonds",
        text: [
          "Issued January 1, Year 1: $500,000 face, 5% stated rate paid each December 31, issued for $480,000 to yield 6%. The issue was recorded correctly.",
          "December 31, Year 1: Penrose paid the $25,000 coupon and recorded debit Interest expense $25,000, credit Cash $25,000.",
        ],
      },
      {
        title: "Exhibit 2: Series D bonds",
        text: [
          "Issued at par on December 31, Year 1 for $300,000. Penrose paid $4,000 of underwriting and legal costs that day and charged them to professional fees expense.",
        ],
      },
      {
        title: "Exhibit 3: Series A and Series B bonds",
        text: [
          "Series A: $200,000 issued at par, maturing June 30, Year 2. They are reported in the long-term bonds payable balance at December 31, Year 1, and won't be refinanced.",
          "Series B: on December 31, Year 1, Penrose bought back $100,000 face value of these bonds, which had no unamortized premium or discount, for $98,000. It recorded debit Bonds payable $98,000, credit Cash $98,000.",
        ],
      },
      {
        title: "Exhibit 4: Loan covenant",
        text: [
          "The Series C indenture requires a current ratio of at least 1.5. Penrose's current ratio at December 31, Year 1, after all corrections, is 1.8.",
        ],
      },
    ],
    instructions: DETECT_INSTRUCTIONS,
    columns: DETECT_COLUMNS,
    rows: [
      fix("Series C: interest for Year 1", BONDS, "Interest expense", "Discount on bonds payable", 3800, "Effective interest is $480,000 × 6% = $28,800. Cash paid was $25,000, so $3,800 of the discount must be amortized into interest expense."),
      fix("Series D: issuance costs", BONDS, "Unamortized debt issuance costs", "Professional fees expense", 4000, "Debt issuance costs are deducted from the carrying amount of the debt and amortized into interest expense over the bonds' term."),
      fix("Series A: bonds maturing June 30, Year 2", BONDS, "Bonds payable", "Current portion of long-term debt", 200000, "Debt due within 12 months that won't be refinanced is a current liability."),
      fix("Series B: early retirement", BONDS, "Bonds payable", "Gain on extinguishment of debt", 2000, "The full $100,000 carrying amount must be removed. Paying $98,000 for it produces a $2,000 gain; the client removed only $98,000."),
      fix("Covenant compliance", BONDS, NO_ENTRY, NO_ENTRY, 0, "The covenant is met, so there is no default and no need to reclassify the Series C bonds as current."),
    ],
    takeaway: "Interest expense uses the effective rate on the carrying amount, issuance costs reduce the debt, and an early retirement removes the full carrying amount with any difference going to a gain or loss.",
  },
];
