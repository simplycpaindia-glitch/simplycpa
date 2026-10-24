import type { Simulation } from "../types";
import { FAR_RESEARCH_INSTRUCTIONS, num, pick, ref, row } from "../build";

// FAR Area III: Select Transactions.

const TIMING = ["At a point in time", "Over time"] as const;
const TAX_DIFF = ["Temporary: creates a deferred tax asset", "Temporary: creates a deferred tax liability", "Permanent: no deferred tax"] as const;
const CHANGE_TYPE = [
  "Change in accounting principle",
  "Change in accounting estimate",
  "Change in estimate effected by a change in principle",
  "Change in reporting entity",
  "Error correction",
  "Not an accounting change",
] as const;
const CHANGE_TREATMENT = ["Retrospective application", "Prospective", "Restate prior periods (prior period adjustment)", "No special treatment"] as const;
const ACQ_COST = [
  "Include in consideration transferred",
  "Expense as incurred",
  "Reduce additional paid-in capital",
  "Reduce the carrying amount of the debt",
] as const;

export const farArea3: Simulation[] = [
  // ── Revenue recognition ──
  {
    slug: "allocating-the-transaction-price",
    subject: "far",
    topic: "revenue-recognition",
    title: "Allocating the transaction price to performance obligations",
    format: "calculation",
    minutes: 15,
    scenario: [
      "On July 1, Year 1, Brantley Software signed a contract with a customer for $120,000, paid in full that day. The contract includes a software license, installation and two years of technical support starting July 1, Year 1. Each is a distinct performance obligation.",
      "The license is transferred on July 1 and the customer can use the software as it exists then. Installation is completed in Year 1. Brantley's year-end is December 31.",
    ],
    exhibits: [
      {
        title: "Standalone selling prices",
        table: {
          head: ["Performance obligation", "Standalone selling price ($)"],
          rows: [
            ["Software license", "80,000"],
            ["Installation", "20,000"],
            ["Two years of support", "50,000"],
            ["Total", "150,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars and answer the timing question.",
    columns: ["Item", "Answer"],
    rows: [
      row("Transaction price allocated to the license ($)", num(64000), "Relative standalone selling price: 120,000 × 80/150 = 64,000."),
      row("Transaction price allocated to installation ($)", num(16000), "120,000 × 20/150 = 16,000."),
      row("Transaction price allocated to support ($)", num(40000), "120,000 × 50/150 = 40,000."),
      row("When is the support obligation satisfied?", pick(TIMING, "Over time"), "The customer receives and uses the support as Brantley provides it, so it is satisfied over time."),
      row("Revenue recognized in Year 1 ($)", num(90000), "License 64,000 (point in time) + installation 16,000 + support 40,000 × 6/24 = 10,000 → 90,000."),
      row("Contract liability at December 31, Year 1 ($)", num(30000), "Cash received 120,000 − revenue recognized 90,000 = 30,000 for support still to be provided."),
    ],
    takeaway: "Allocate the transaction price by relative standalone selling price, then recognize each part when (or as) its performance obligation is satisfied. Cash received ahead of performance is a contract liability.",
  },
  {
    slug: "research-revenue-recognition",
    subject: "far",
    topic: "revenue-recognition",
    title: "Research: the five-step revenue model",
    format: "research",
    minutes: 15,
    scenario: [
      "Larkspur Devices is drafting its revenue recognition policy. The chief financial officer wants each step of the policy tied to the exact paragraph in the revenue standard (Topic 606).",
    ],
    instructions: FAR_RESEARCH_INSTRUCTIONS,
    columns: ["Question", "Codification reference"],
    rows: [
      row("Which paragraph lists the criteria that must all be met before an entity accounts for a contract with a customer?", ref("606-10-25-1"), "ASC 606-10-25-1 sets out the five contract criteria, including approval, identifiable rights, payment terms, commercial substance and probable collection."),
      row("Which paragraph sets out when a promised good or service is distinct?", ref("606-10-25-19"), "ASC 606-10-25-19: capable of being distinct and distinct within the context of the contract."),
      row("Which paragraph lists the criteria for satisfying a performance obligation over time?", ref("606-10-25-27"), "ASC 606-10-25-27 gives the three over-time criteria."),
      row("Which paragraph lists indicators that control has transferred at a point in time?", ref("606-10-25-30"), "ASC 606-10-25-30 lists indicators such as a present right to payment, legal title and physical possession."),
      row("Which paragraph limits variable consideration to the amount for which a significant revenue reversal is not probable?", ref("606-10-32-11"), "ASC 606-10-32-11 is the constraint on variable consideration."),
    ],
    takeaway: "In Topic 606, Section 25 is recognition (contract, obligations, timing) and Section 32 is measurement (transaction price, variable consideration, allocation).",
  },

  // ── Income taxes ──
  {
    slug: "current-and-deferred-tax",
    subject: "far",
    topic: "income-taxes",
    title: "Current and deferred income tax expense",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Garrick Corp. had pretax financial (book) income of $500,000 in its first year. The tax rate is 21% now and for all future years. There were no deferred taxes at the start of the year.",
    ],
    exhibits: [
      {
        title: "Differences between book and taxable income",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Tax depreciation in excess of book depreciation", "60,000"],
            ["Warranty expense accrued for books, deductible when paid next year", "20,000"],
            ["Interest earned on municipal bonds (tax-exempt)", "10,000"],
            ["Fines paid (not deductible for tax)", "5,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars and choose the balance sheet classification.",
    columns: ["Item", "Answer"],
    rows: [
      row("Taxable income ($)", num(455000), "500,000 − 60,000 + 20,000 − 10,000 + 5,000 = 455,000."),
      row("Current income tax expense ($)", num(95550), "455,000 × 21% = 95,550, the amount payable."),
      row("Deferred tax liability at year-end ($)", num(12600), "The 60,000 depreciation difference will reverse as taxable amounts: 60,000 × 21%."),
      row("Deferred tax asset at year-end ($)", num(4200), "The 20,000 warranty accrual will be deductible later: 20,000 × 21%."),
      row("Total income tax expense ($)", num(103950), "Current 95,550 + deferred (12,600 − 4,200) 8,400 = 103,950. Check: (500,000 − 10,000 + 5,000) × 21%."),
      row("How are the deferred tax balances classified on the balance sheet?", pick(["Current", "Noncurrent", "Split by when each difference reverses"], "Noncurrent"), "All deferred tax assets and liabilities are classified as noncurrent."),
    ],
    takeaway: "Temporary differences create deferred taxes; permanent differences (tax-exempt interest, fines) change only the effective rate. Total tax expense = current + change in deferred taxes.",
  },
  {
    slug: "temporary-vs-permanent-differences",
    subject: "far",
    topic: "income-taxes",
    title: "Temporary or permanent differences?",
    format: "classification",
    minutes: 10,
    scenario: [
      "Hartwell Co.'s tax manager is listing the differences between book income and taxable income to set up deferred taxes for the year.",
    ],
    instructions: "Select the type of each difference and, for temporary differences, the deferred tax it creates.",
    columns: ["Difference", "Type"],
    rows: [
      row("Tax depreciation is faster than book depreciation", pick(TAX_DIFF, "Temporary: creates a deferred tax liability"), "Less tax now, more later: a future taxable amount."),
      row("Warranty costs are accrued for books but deducted for tax when paid", pick(TAX_DIFF, "Temporary: creates a deferred tax asset"), "The deduction comes later, a future deductible amount."),
      row("Interest on municipal bonds is never taxed", pick(TAX_DIFF, "Permanent: no deferred tax"), "It never reverses, so no deferred tax."),
      row("Rent received in advance is taxed when received but recognized for books when earned", pick(TAX_DIFF, "Temporary: creates a deferred tax asset"), "Tax is paid before the book income is recognized, a future deductible amount."),
      row("An installment sale is recognized for books at the sale date but taxed as cash is collected", pick(TAX_DIFF, "Temporary: creates a deferred tax liability"), "Book income now, taxable income later."),
      row("Premiums on life insurance for key officers, with the company as beneficiary", pick(TAX_DIFF, "Permanent: no deferred tax"), "The premiums are never deductible."),
      row("Bad debts use the allowance method for books and the direct write-off method for tax", pick(TAX_DIFF, "Temporary: creates a deferred tax asset"), "Book expense comes first; the tax deduction follows when accounts are written off."),
      row("Fines and penalties paid to a government", pick(TAX_DIFF, "Permanent: no deferred tax"), "Never deductible."),
    ],
    takeaway: "Ask which comes first. Taxable income later than book income → deferred tax liability. Deductions later than book expense, or income taxed before it is earned → deferred tax asset. Never reverses → permanent.",
  },

  // ── Accounting changes and errors ──
  {
    slug: "classifying-accounting-changes",
    subject: "far",
    topic: "accounting-changes-and-error-corrections",
    title: "Classifying accounting changes",
    format: "classification",
    minutes: 12,
    scenario: [
      "Nettleton Group is preparing its Year 3 financial statements. The controller has listed the changes made this year.",
    ],
    instructions: "Select the type of each change and how it is reported.",
    columns: ["Change", "Type", "Reporting"],
    rows: [
      row("Changed the inventory method from first-in, first-out to weighted average", [pick(CHANGE_TYPE, "Change in accounting principle"), pick(CHANGE_TREATMENT, "Retrospective application")], "Switching between acceptable inventory methods is a change in principle, applied retrospectively unless impracticable."),
      row("Shortened the estimated useful life of delivery trucks from 8 to 6 years", [pick(CHANGE_TYPE, "Change in accounting estimate"), pick(CHANGE_TREATMENT, "Prospective")], "New information changes an estimate, so it affects only the current and future periods."),
      row("Changed depreciation from straight-line to double-declining balance", [pick(CHANGE_TYPE, "Change in estimate effected by a change in principle"), pick(CHANGE_TREATMENT, "Prospective")], "A change in depreciation method is treated as a change in estimate and applied prospectively."),
      row("Discovered that Year 2 depreciation was never recorded", [pick(CHANGE_TYPE, "Error correction"), pick(CHANGE_TREATMENT, "Restate prior periods (prior period adjustment)")], "Correcting an error in prior statements is a restatement, with a prior period adjustment to opening retained earnings."),
      row("Changed from the cash basis to the accrual basis of accounting", [pick(CHANGE_TYPE, "Error correction"), pick(CHANGE_TREATMENT, "Restate prior periods (prior period adjustment)")], "Moving from a method that is not generally accepted to one that is counts as correcting an error."),
      row("Began presenting consolidated statements instead of the parent's individual statements", [pick(CHANGE_TYPE, "Change in reporting entity"), pick(CHANGE_TREATMENT, "Retrospective application")], "A change in reporting entity is applied retrospectively so all periods show the same entity."),
      row("Adopted a revenue policy for a new type of contract that Nettleton had never entered into before", [pick(CHANGE_TYPE, "Not an accounting change"), pick(CHANGE_TREATMENT, "No special treatment")], "Adopting a principle for transactions that are new or clearly different in substance is not an accounting change."),
    ],
    takeaway: "Principle changes and entity changes: retrospective. Estimates (including depreciation method changes): prospective. Errors (including moving to an accepted basis from one that is not): restate.",
  },
  {
    slug: "correcting-prior-period-errors",
    subject: "far",
    topic: "accounting-changes-and-error-corrections",
    title: "Correcting prior-period errors",
    format: "calculation",
    minutes: 12,
    scenario: [
      "During Year 2, before closing the books, Prescott Ltd. found two errors in its Year 1 financial statements: Year 1 depreciation was understated by $40,000, and ending inventory at December 31, Year 1 was overstated by $15,000. The tax rate is 25%. Prescott presents single-year statements.",
    ],
    instructions: "Enter amounts in dollars (enter a decrease as a negative number) and answer the questions.",
    columns: ["Item", "Answer"],
    rows: [
      row("Amount by which Year 1 net income was overstated ($)", num(41250), "Pretax overstatement 40,000 + 15,000 = 55,000 (understated depreciation and understated cost of goods sold) × (1 − 25%) = 41,250."),
      row("Prior period adjustment to January 1, Year 2 retained earnings ($)", num(-41250), "Errors in prior periods are corrected through opening retained earnings, net of tax."),
      row(
        "Where is the correction reported?",
        pick(["In Year 2 net income", "As an adjustment to opening retained earnings", "In other comprehensive income"], "As an adjustment to opening retained earnings"),
        "Prior period adjustments bypass the current income statement.",
      ),
      row(
        "If the inventory error were never found, Year 2 pretax income would be:",
        pick(["Overstated by $15,000", "Understated by $15,000", "Not affected"], "Understated by $15,000"),
        "Overstated beginning inventory overstates Year 2 cost of goods sold, understating Year 2 income.",
      ),
      row(
        "If never found, the inventory error's effect on retained earnings at December 31, Year 2 would be:",
        pick(["Overstated by $15,000", "Understated by $15,000", "No effect"], "No effect"),
        "Inventory errors counterbalance over two years: Year 1 overstated, Year 2 understated, so retained earnings are right by the end of Year 2.",
      ),
    ],
    takeaway: "Correct prior-period errors through opening retained earnings, net of tax. Inventory errors self-correct after two periods, but the statements in between are still wrong.",
  },

  // ── Business combinations and consolidations ──
  {
    slug: "consolidation-with-noncontrolling-interest",
    subject: "far",
    topic: "business-combinations-and-consolidations",
    title: "Consolidation with a noncontrolling interest",
    format: "calculation",
    minutes: 18,
    scenario: [
      "On January 1, Year 1, Portland Corp. paid $800,000 for 80% of Sutton Inc. The fair value of the noncontrolling interest (NCI) was $200,000. Sutton's identifiable net assets had a book value of $850,000 and a fair value of $900,000; the whole difference relates to land.",
      "In Year 1, Sutton reported net income of $120,000 and paid dividends of $30,000. Sutton also sold inventory to Portland for $50,000 that had cost Sutton $40,000; a quarter of it was still in Portland's inventory at year-end.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: ["Item", "Dollars ($)"],
    rows: [
      row("Goodwill recognized in consolidation", num(100000), "Consideration 800,000 + NCI fair value 200,000 − identifiable net assets 900,000 = 100,000."),
      row("Fair value adjustment allocated to land", num(50000), "900,000 − 850,000 = 50,000. Land is not depreciated, so there is no extra expense."),
      row("Intercompany sales eliminated", num(50000), "All 50,000 of intercompany sales are eliminated, whether or not the goods were resold."),
      row("Unrealized profit in Portland's ending inventory", num(2500), "Profit 50,000 − 40,000 = 10,000 × 25% still held = 2,500."),
      row("Net income attributable to the NCI", num(23500), "The sale was upstream (Sutton to Portland), so the NCI shares the elimination: 20% × (120,000 − 2,500) = 23,500."),
      row("NCI at December 31, Year 1", num(217500), "200,000 + 23,500 − 20% of dividends 6,000 = 217,500."),
    ],
    takeaway: "The acquisition method measures the NCI at fair value, so goodwill covers 100% of the subsidiary. Upstream unrealized profits reduce the NCI's share of income; downstream ones do not.",
  },
  {
    slug: "acquisition-method-costs",
    subject: "far",
    topic: "business-combinations-and-consolidations",
    title: "Acquisition method: consideration and transaction costs",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Danforth Group acquired 100% of Elmhurst Co. It paid $500,000 cash and issued common shares with a fair value of $300,000. It also agreed to pay the former owners more if Elmhurst hits sales targets; the fair value of this contingent payment at the acquisition date is $80,000.",
      "Danforth also paid $50,000 of legal and due diligence fees, $12,000 to register and issue the shares, and $9,000 of costs to issue debt used to fund the cash payment. The fair value of Elmhurst's identifiable net assets is $760,000.",
    ],
    instructions: "Select the treatment of each item, then enter the amounts.",
    columns: ["Item", "Answer"],
    rows: [
      row("Contingent payment to the former owners", pick(ACQ_COST, "Include in consideration transferred"), "Contingent consideration is measured at fair value at the acquisition date and included in consideration."),
      row("Legal and due diligence fees", pick(ACQ_COST, "Expense as incurred"), "Acquisition-related costs are expensed, not added to goodwill."),
      row("Costs to register and issue the shares", pick(ACQ_COST, "Reduce additional paid-in capital"), "Equity issuance costs reduce the proceeds of the shares."),
      row("Costs to issue the debt", pick(ACQ_COST, "Reduce the carrying amount of the debt"), "Debt issuance costs reduce the debt's carrying amount."),
      row("Total consideration transferred ($)", num(880000), "500,000 + 300,000 + 80,000 = 880,000."),
      row("Goodwill ($)", num(120000), "880,000 − 760,000 = 120,000."),
    ],
    takeaway: "Consideration transferred is all fair value given to the sellers, including contingent payments. Deal costs are expensed, and issuance costs follow the security issued.",
  },
];
