import type { Simulation } from "../types";
import { num, pick, row } from "../build";

// REG simulations, second set: a different angle on each topic. Where a figure
// changes by year, the scenario gives the figure to use.

const AMOUNT = ["Item", "Amount ($)"];

const FORUM = [
  "US Tax Court",
  "US District Court",
  "US Court of Federal Claims",
  "IRS Independent Office of Appeals",
  "US Court of Appeals for the taxpayer's circuit",
] as const;
const OFFER = [
  "Valid offer",
  "Not an offer (invitation to negotiate)",
  "Counteroffer: no contract yet",
  "Offer terminated before acceptance",
  "Contract formed",
] as const;
const AUTHORITY = [
  "Principal bound: actual authority",
  "Principal bound: apparent authority",
  "Principal bound: ratification",
  "Principal not bound",
] as const;
const DIFFERENCE = ["Permanent difference", "Temporary difference"] as const;
const CREDIT = ["Refundable", "Partly refundable", "Nonrefundable"] as const;
const RETURN = [
  "Form 990",
  "Form 990-EZ",
  "Form 990-N (e-Postcard)",
  "Form 990-PF",
  "Form 990-T",
  "No annual information return required",
] as const;

export const regSimulations2: Simulation[] = [
  // ── Area I ──
  {
    slug: "return-preparer-penalties",
    subject: "reg",
    topic: "circular-230-and-practitioner-ethics",
    title: "Penalties on tax return preparers",
    format: "calculation",
    minutes: 10,
    scenario: [
      "The IRS has assessed preparer penalties against three preparers at a firm for understatements on clients' returns. Each preparer's fee for the return in question is shown below.",
    ],
    exhibits: [
      {
        title: "Preparer penalty rules to use",
        table: {
          head: ["Conduct", "Penalty per return"],
          rows: [
            ["Understatement due to an unreasonable position", "The greater of $1,000 or 50% of the income derived from the return"],
            ["Understatement due to willful or reckless conduct", "The greater of $5,000 or 75% of the income derived from the return"],
          ],
        },
      },
    ],
    instructions: "Enter each penalty in dollars.",
    columns: AMOUNT,
    rows: [
      row("Preparer A: unreasonable position, fee of $1,500", num(1000), "50% of $1,500 is $750, so the $1,000 minimum applies."),
      row("Preparer B: unreasonable position, fee of $4,000", num(2000), "50% of $4,000 = $2,000, which exceeds $1,000."),
      row("Preparer C: willful conduct, fee of $4,000", num(5000), "75% of $4,000 is $3,000, so the $5,000 minimum applies."),
      row("Preparer C, if the fee had been $10,000", num(7500), "75% of $10,000 = $7,500, which exceeds $5,000."),
    ],
    takeaway: "Preparer penalties are the greater of a fixed amount or a percentage of the fee: $1,000 or 50% for an unreasonable position, $5,000 or 75% for willful or reckless conduct.",
  },
  {
    slug: "choosing-a-forum-for-a-tax-dispute",
    subject: "reg",
    topic: "irs-procedures-and-appeals",
    title: "Where should the taxpayer take the dispute?",
    format: "classification",
    minutes: 8,
    scenario: ["Several clients disagree with IRS adjustments. Each has a different priority for how the dispute is resolved."],
    instructions: "Select the forum that matches each client's situation.",
    columns: ["Client's situation", "Forum"],
    rows: [
      row("Has received a 30-day letter and wants to settle without going to court", pick(FORUM, "IRS Independent Office of Appeals"), "The 30-day letter offers the chance to request an Appeals conference."),
      row("Wants to litigate without paying the disputed tax first", pick(FORUM, "US Tax Court"), "The Tax Court is the only court where the taxpayer can litigate before paying."),
      row("Wants a jury trial", pick(FORUM, "US District Court"), "Only a District Court refund suit allows a jury. The tax must be paid first."),
      row("Has paid the tax and wants a refund suit in a court that hears only claims against the US government", pick(FORUM, "US Court of Federal Claims"), "The Court of Federal Claims hears refund suits, without a jury, after the tax is paid."),
      row("Disputes $30,000 and wants a simpler, informal procedure", pick(FORUM, "US Tax Court"), "The Tax Court's small tax case procedure is available for deficiencies up to $50,000 a year; its decisions cannot be appealed."),
      row("Lost in the Tax Court in a regular case and wants to appeal", pick(FORUM, "US Court of Appeals for the taxpayer's circuit"), "Regular Tax Court decisions are appealed to the Court of Appeals for the circuit where the taxpayer lives."),
    ],
    takeaway: "Tax Court if you want to litigate without paying; District Court if you want a jury; Court of Federal Claims for a refund suit without a jury. Appeals is the administrative route before any court.",
  },
  {
    slug: "estimated-tax-safe-harbors",
    subject: "reg",
    topic: "federal-tax-procedures-and-penalties",
    title: "Estimated tax payments that avoid the underpayment penalty",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Two individual clients have no withholding and want to pay the least estimated tax that still avoids the underpayment penalty. Each pays four equal installments.",
      "Ravi: tax for this year will be $40,000; last year's tax was $30,000 on adjusted gross income of $120,000.",
      "Sara: tax for this year will be $40,000; last year's tax was $30,000 on adjusted gross income of $200,000.",
    ],
    exhibits: [
      {
        title: "Safe harbors to use",
        text: [
          "The required annual payment is the lesser of 90% of this year's tax or 100% of last year's tax.",
          "If last year's adjusted gross income exceeded $150,000, use 110% of last year's tax instead of 100%.",
        ],
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Ravi: required annual payment", num(30000), "The lesser of 90% × $40,000 = $36,000 and 100% × $30,000 = $30,000."),
      row("Ravi: each quarterly installment", num(7500), "$30,000 ÷ 4."),
      row("Sara: required annual payment", num(33000), "Her adjusted gross income exceeded $150,000, so the prior-year test is 110% × $30,000 = $33,000, which is less than $36,000."),
      row("Sara: each quarterly installment", num(8250), "$33,000 ÷ 4."),
    ],
    takeaway: "Pay the lesser of 90% of this year's tax or 100% of last year's (110% for higher-income taxpayers), spread evenly across the four installments.",
  },

  // ── Area II ──
  {
    slug: "offer-and-acceptance",
    subject: "reg",
    topic: "business-law-contracts",
    title: "Offer, acceptance and when a contract is formed",
    format: "classification",
    minutes: 10,
    scenario: [
      "Tara's Textiles and a buyer exchanged communications about 100 bolts of cloth. Both are merchants. Unless stated, each communication is by mail.",
    ],
    instructions: "Select the legal effect of each communication or event.",
    columns: ["Communication or event", "Effect"],
    rows: [
      row("A newspaper advertisement listing cloth at $40 a bolt", pick(OFFER, "Not an offer (invitation to negotiate)"), "Advertisements are generally invitations to make offers, because they lack definite quantity and an intent to be bound."),
      row("Tara's signed letter: 'We offer 100 bolts at $40 each, delivery June 1'", pick(OFFER, "Valid offer"), "Definite terms communicated with an intent to be bound."),
      row("The buyer replies: 'We accept if you deliver by May 15'", pick(OFFER, "Counteroffer: no contract yet"), "An acceptance conditioned on new terms is a counteroffer, even between merchants."),
      row("Tara mailed a revocation on day 2; the buyer mailed an acceptance on day 3 and received the revocation on day 4", pick(OFFER, "Contract formed"), "An acceptance is effective when sent; a revocation only when received. The acceptance came first."),
      row("Tara phoned the buyer to revoke the offer before the buyer had sent any reply", pick(OFFER, "Offer terminated before acceptance"), "An offer can be revoked any time before acceptance unless it is irrevocable."),
      row("Tara's signed written offer said it would stay open 30 days; she tried to revoke on day 10 and the buyer accepted on day 20", pick(OFFER, "Contract formed"), "A merchant's signed firm offer is irrevocable for the stated period, up to three months."),
    ],
    takeaway: "Acceptance is effective on dispatch, revocation on receipt. A conditional acceptance is a counteroffer. A merchant's signed firm offer cannot be revoked during its stated period.",
  },
  {
    slug: "agent-authority-and-principal-liability",
    subject: "reg",
    topic: "business-law-agency-and-business-structures",
    title: "When is the principal bound by the agent's contract?",
    format: "classification",
    minutes: 8,
    scenario: ["Juniper Stores uses several agents to buy supplies. Each situation involves a contract with a third party."],
    instructions: "Select whether Juniper is bound, and on what basis.",
    columns: ["Situation", "Result"],
    rows: [
      row("A buyer authorised to spend up to $5,000 orders $4,000 of shelving", pick(AUTHORITY, "Principal bound: actual authority"), "The agent acted within express authority."),
      row("A store manager hires a cashier, which is necessary to run the store though not expressly authorised", pick(AUTHORITY, "Principal bound: actual authority"), "Implied authority to do what is reasonably necessary is a form of actual authority."),
      row("A dismissed purchasing manager orders from a regular supplier who was never told of the dismissal", pick(AUTHORITY, "Principal bound: apparent authority"), "The principal created the appearance of authority and did not notify a third party who had dealt with the agent."),
      row("An agent exceeded his limit, but Juniper later accepted the goods knowing all the facts", pick(AUTHORITY, "Principal bound: ratification"), "Accepting the benefits with knowledge of the facts ratifies the contract."),
      row("A stranger falsely claims to act for Juniper; Juniper did nothing to suggest he was its agent", pick(AUTHORITY, "Principal not bound"), "Apparent authority must come from the principal's conduct, not the agent's claims."),
    ],
    takeaway: "Actual authority can be express or implied. Apparent authority comes from what the principal did or failed to do. Ratification needs full knowledge of the facts.",
  },
  {
    slug: "chapter-7-distribution-priority",
    subject: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    title: "Distributing a Chapter 7 estate by priority",
    format: "calculation",
    minutes: 10,
    scenario: [
      "After secured creditors were paid from their collateral, the trustee of a Chapter 7 estate has $100,000 left to distribute. There are no domestic support obligations. The wage and tax claims are all within the statutory limits for priority.",
    ],
    exhibits: [
      {
        title: "Unsecured claims",
        table: {
          head: ["Claim", "Amount ($)"],
          rows: [
            ["Trustee's fees and other administrative expenses", "10,000"],
            ["Employees' wages earned in the 180 days before filing", "15,000"],
            ["Federal income taxes entitled to priority", "20,000"],
            ["General unsecured creditors (suppliers, credit cards)", "110,000"],
          ],
        },
      },
    ],
    instructions: "Enter the amount paid on each class of claim in dollars, and the recovery percentage as a whole number.",
    columns: AMOUNT,
    rows: [
      row("Administrative expenses", num(10000), "Paid in full: they rank ahead of wages and taxes."),
      row("Employees' wages", num(15000), "Paid in full: wage claims rank ahead of tax claims."),
      row("Priority taxes", num(20000), "Paid in full from the $75,000 still available."),
      row("Total paid to general unsecured creditors", num(55000), "$100,000 − $45,000 paid on priority claims."),
      row("Recovery for general unsecured creditors (%)", num(50), "$55,000 ÷ $110,000. Each general creditor receives the same percentage."),
    ],
    takeaway: "Priority claims are paid in order and in full before the next class gets anything; general unsecured creditors share what is left pro rata.",
  },

  // ── Area III ──
  {
    slug: "depreciation-macrs-and-real-property",
    subject: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    title: "First-year depreciation for equipment and a building",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Delta LLC placed two assets in service this year and did not elect expensing or bonus depreciation. The half-year convention applies to the equipment.",
      "Equipment: 7-year property costing $100,000.",
      "Office building: bought in January for $500,000, of which $110,000 was for the land. It is nonresidential real property.",
    ],
    exhibits: [
      {
        title: "Rates and conventions to use",
        text: [
          "7-year property, half-year convention, first-year rate: 14.29%.",
          "Nonresidential real property: 39-year straight-line, mid-month convention.",
        ],
      },
    ],
    instructions: "Enter each amount in dollars, rounded to the nearest dollar.",
    columns: AMOUNT,
    rows: [
      row("Equipment: first-year depreciation", num(14290), "$100,000 × 14.29%."),
      row("Building: depreciable basis", num(390000), "Land is not depreciable: $500,000 − $110,000."),
      row("Building: annual depreciation for a full year", num(10000), "$390,000 ÷ 39."),
      row("Building: depreciation for the first year", num(9583, 1), "Placed in service in January, mid-month: 11.5 months. $10,000 × 11.5 ÷ 12 = $9,583."),
    ],
    takeaway: "Take land out of the basis. Equipment uses table rates; buildings use straight-line over 39 years (27.5 for residential rental) with the mid-month convention.",
  },
  {
    slug: "wash-sales-and-related-party-losses",
    subject: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    title: "Disallowed losses: wash sales and related parties",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Isha sold 100 shares of Acme stock that cost $10,000 for $7,000 on December 10. On December 28 she bought 100 Acme shares for $7,500.",
      "Isha also sold land with a basis of $50,000 to her brother for its fair market value of $40,000. Two years later her brother sold the land to an unrelated buyer.",
    ],
    instructions: "Enter each amount in dollars. Enter 0 where nothing is recognized.",
    columns: AMOUNT,
    rows: [
      row("Loss Isha recognizes on the Acme shares", num(0), "She bought substantially identical shares within 30 days, so the $3,000 loss is a disallowed wash sale loss."),
      row("Isha's basis in the new Acme shares", num(10500), "$7,500 cost + $3,000 disallowed loss. Her holding period also carries over."),
      row("Loss Isha recognizes on selling the land to her brother", num(0), "Losses on sales between related parties, including siblings, are disallowed."),
      row("Brother's recognized gain if he sells the land for $60,000", num(10000), "His gain is $60,000 − $40,000 = $20,000, reduced by Isha's $10,000 disallowed loss."),
      row("Brother's recognized gain if he sells the land for $45,000", num(0), "His $5,000 gain is fully offset by the disallowed loss. The unused part of the loss is lost."),
    ],
    takeaway: "A wash sale loss is added to the basis of the replacement shares. A related-party loss can only reduce the buyer's later gain; it never creates a loss for the buyer.",
  },

  // ── Area IV ──
  {
    slug: "gross-income-calculation",
    subject: "reg",
    topic: "individual-taxation-gross-income",
    title: "Calculating gross income from mixed receipts",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Tom received the items below this year.",
      "Last year Tom itemized deductions of $16,500, including state income tax; his standard deduction would have been $15,000.",
      "A lender cancelled $20,000 of his credit card debt. Immediately before the cancellation his liabilities exceeded the fair market value of his assets by $8,000. He is not in bankruptcy.",
    ],
    exhibits: [
      {
        title: "Items received",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Alimony under a divorce agreement signed in 2016", "12,000"],
            ["State income tax refund for last year", "2,000"],
            ["Credit card debt cancelled", "20,000"],
            ["Prize from a radio contest", "5,000"],
            ["Interest on state government bonds", "3,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Taxable part of the state tax refund", num(1500), "Under the tax benefit rule the refund is taxable only to the extent the deduction reduced his tax: itemized deductions exceeded the standard deduction by $1,500."),
      row("Taxable cancellation of debt income", num(12000), "Cancelled debt is excluded only to the extent of insolvency: $20,000 − $8,000."),
      row("Total of these items included in gross income", num(30500), "$12,000 alimony (pre-2019 agreement) + $1,500 + $12,000 + $5,000. State bond interest is excluded."),
    ],
    takeaway: "Pre-2019 alimony is still income to the recipient. A state refund is taxable only to the extent the deduction helped, and cancelled debt only beyond insolvency.",
  },
  {
    slug: "medical-and-investment-interest-deductions",
    subject: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    title: "Itemized deductions with limits: medical and investment interest",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Lina, who itemizes, has adjusted gross income of $80,000. She paid $10,000 of unreimbursed medical expenses. She also paid $6,000 of interest on money borrowed to buy shares, and her net investment income is $4,000.",
    ],
    exhibits: [{ title: "Limit to use", text: ["Medical expenses are deductible to the extent they exceed 7.5% of adjusted gross income."] }],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Medical expense floor", num(6000), "7.5% × $80,000."),
      row("Medical expense deduction", num(4000), "$10,000 − $6,000."),
      row("Investment interest deduction", num(4000), "Investment interest is deductible only up to net investment income."),
      row("Investment interest carried forward", num(2000), "$6,000 − $4,000. It carries forward indefinitely."),
    ],
    takeaway: "Medical expenses count only above the adjusted gross income floor. Investment interest is capped at net investment income, with the excess carried forward.",
  },
  {
    slug: "refundable-and-nonrefundable-credits",
    subject: "reg",
    topic: "filing-status-credits-and-amt",
    title: "Which tax credits are refundable?",
    format: "classification",
    minutes: 8,
    scenario: ["Several clients qualify for tax credits that exceed their tax liability. They want to know whether the excess will be paid to them."],
    instructions: "Select whether each credit is refundable, partly refundable or nonrefundable.",
    columns: ["Credit", "Refundability"],
    rows: [
      row("Earned income tax credit", pick(CREDIT, "Refundable"), "Any excess over tax is paid to the taxpayer."),
      row("Premium tax credit for health coverage bought through a Marketplace", pick(CREDIT, "Refundable"), "It is refundable and can be paid in advance to the insurer."),
      row("Child tax credit", pick(CREDIT, "Partly refundable"), "Part of it can be refunded as the additional child tax credit."),
      row("American opportunity tax credit", pick(CREDIT, "Partly refundable"), "40% of the credit is refundable."),
      row("Lifetime learning credit", pick(CREDIT, "Nonrefundable"), "It can only reduce tax to zero."),
      row("Child and dependent care credit", pick(CREDIT, "Nonrefundable"), "It reduces tax but is not refunded."),
      row("Foreign tax credit", pick(CREDIT, "Nonrefundable"), "It offsets US tax on foreign income; any excess is carried back or forward, not refunded."),
    ],
    takeaway: "The earned income and premium tax credits are refundable; the child tax credit and the American opportunity credit are partly refundable; most others only reduce tax to zero.",
  },
  {
    slug: "early-distributions-and-ira-basis",
    subject: "reg",
    topic: "retirement-plans-and-tax-planning-basics",
    title: "Early distributions and nondeductible IRA contributions",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Arun, age 40, withdrew $20,000 from his 401(k) while still employed. No exception to the additional tax applies.",
      "Meena, age 50, withdrew $20,000 from her traditional IRA. Her only IRA had a year-end value of $80,000 after the withdrawal, and it holds $25,000 of nondeductible contributions. No exception to the additional tax applies.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Arun: 10% additional tax", num(2000), "The full $20,000 is taxable, and 10% × $20,000 = $2,000 is added."),
      row("Meena: nontaxable part of the withdrawal", num(5000), "Basis is recovered pro rata: $25,000 ÷ ($80,000 + $20,000) × $20,000 = $5,000."),
      row("Meena: taxable part of the withdrawal", num(15000), "$20,000 − $5,000."),
      row("Meena: 10% additional tax", num(1500), "The additional tax applies only to the taxable part: 10% × $15,000."),
    ],
    takeaway: "Nondeductible IRA contributions come out pro rata, not first. The 10% additional tax applies only to the taxable part of an early distribution.",
  },

  // ── Area V ──
  {
    slug: "book-tax-differences",
    subject: "reg",
    topic: "c-corporation-taxation",
    title: "Permanent or temporary book-tax differences",
    format: "classification",
    minutes: 8,
    scenario: ["The tax manager at Westbrook Corp. is reconciling book income to taxable income and needs to know which differences will reverse."],
    instructions: "Select whether each item is a permanent or a temporary difference.",
    columns: ["Item", "Type of difference"],
    rows: [
      row("Interest earned on municipal bonds", pick(DIFFERENCE, "Permanent difference"), "It is never taxable, so it never reverses."),
      row("Fines paid to a government agency", pick(DIFFERENCE, "Permanent difference"), "Never deductible."),
      row("The nondeductible half of business meals", pick(DIFFERENCE, "Permanent difference"), "That half is never deductible."),
      row("Accelerated depreciation for tax, straight-line for books", pick(DIFFERENCE, "Temporary difference"), "Total depreciation is the same over the asset's life; only the timing differs."),
      row("Warranty expense accrued for books but deducted for tax when paid", pick(DIFFERENCE, "Temporary difference"), "The deduction comes later, when the claims are paid."),
      row("Bad debts: allowance method for books, direct write-off for tax", pick(DIFFERENCE, "Temporary difference"), "The tax deduction comes when specific debts are written off."),
      row("Rent received in advance: taxable when received, earned later for books", pick(DIFFERENCE, "Temporary difference"), "The income is recognized in both, in different periods."),
    ],
    takeaway: "A temporary difference reverses because only the timing differs, and it creates a deferred tax asset or liability. A permanent difference never reverses and creates no deferred tax.",
  },
  {
    slug: "s-corporation-loss-limits-debt-basis",
    subject: "reg",
    topic: "s-corporation-taxation",
    title: "S corporation losses: stock basis, debt basis and suspended losses",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Dev owns all the stock of Cedar Inc., an S corporation. At the start of the year his stock basis was $10,000, and he had lent Cedar $15,000 directly. His share of Cedar's ordinary loss for the year is $30,000. There were no other items and no distributions.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Loss Dev can deduct this year", num(25000), "Losses are limited to stock basis plus debt basis: $10,000 + $15,000."),
      row("Loss suspended and carried forward", num(5000), "$30,000 − $25,000. It is carried forward until he has basis again."),
      row("Stock basis at year-end", num(0), "Losses reduce stock basis first, to zero."),
      row("Debt basis at year-end", num(0), "The remaining $15,000 of losses reduces debt basis to zero."),
    ],
    takeaway: "An S shareholder can deduct losses up to stock basis plus loans made directly to the corporation. Excess losses are suspended, not lost.",
  },
  {
    slug: "partnership-property-distribution",
    subject: "reg",
    topic: "partnership-taxation",
    title: "Nonliquidating distribution of cash and property",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Priya's basis in her partnership interest is $30,000. In a nonliquidating distribution she receives $10,000 cash and land with a partnership basis of $25,000 and a fair market value of $40,000. The partnership has no liabilities and no hot assets.",
    ],
    instructions: "Enter each amount in dollars. Enter 0 where nothing applies.",
    columns: AMOUNT,
    rows: [
      row("Gain Priya recognizes", num(0), "Gain arises only if cash exceeds outside basis. $10,000 is less than $30,000."),
      row("Priya's basis in the land", num(20000), "Cash reduces her basis to $20,000. Property takes the partnership's basis, limited to her remaining outside basis."),
      row("Priya's basis in her partnership interest after the distribution", num(0), "$30,000 − $10,000 − $20,000."),
      row("Gain recognized if the cash distribution had been $35,000", num(5000), "Cash above outside basis is gain: $35,000 − $30,000. The land would then take a zero basis."),
    ],
    takeaway: "In a nonliquidating distribution, cash reduces basis first and any excess is gain; property takes the partnership's basis but never more than the partner's remaining basis.",
  },
  {
    slug: "estate-tax-base",
    subject: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    title: "From gross estate to estate tax base",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Ramesh, a US citizen, died this year leaving a gross estate of $20,000,000. Debts, funeral and administration expenses totalled $500,000. He left $6,000,000 to his wife, a US citizen, and $1,000,000 to a public charity. He made $500,000 of taxable gifts during his life. For this simulation, use a basic exclusion amount of $15,000,000.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Taxable estate", num(12500000), "$20,000,000 − $500,000 − $6,000,000 marital deduction − $1,000,000 charitable deduction."),
      row("Estate tax base", num(13000000), "Lifetime taxable gifts are added back: $12,500,000 + $500,000."),
      row("Estate tax due", num(0), "The tax base is below the $15,000,000 basic exclusion amount, so the unified credit eliminates the tax."),
    ],
    takeaway: "Subtract expenses and the marital and charitable deductions to reach the taxable estate, then add back lifetime taxable gifts before applying the unified credit.",
  },
  {
    slug: "payroll-and-self-employment-taxes",
    subject: "reg",
    topic: "employee-benefits-and-payroll-tax",
    title: "FICA, additional Medicare tax and self-employment tax",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Nikhil is single and earned wages of $250,000 from one employer this year. His sister Asha is self-employed with net earnings from her business of $100,000 and no wages.",
    ],
    exhibits: [
      {
        title: "Rates to use",
        table: {
          head: ["Tax", "Rate"],
          rows: [
            ["Social Security (each of employee and employer)", "6.2% of wages up to $184,500"],
            ["Medicare (each of employee and employer)", "1.45% of all wages"],
            ["Additional Medicare tax (employee only)", "0.9% of wages above $200,000"],
            ["Self-employment tax", "15.3% of 92.35% of net earnings (below the wage base)"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars, rounded to the nearest dollar.",
    columns: AMOUNT,
    rows: [
      row("Nikhil: employee Social Security tax", num(11439), "6.2% × the $184,500 wage base."),
      row("Nikhil: employee Medicare tax, before the additional tax", num(3625), "1.45% × $250,000."),
      row("Nikhil: additional Medicare tax withheld", num(450), "0.9% × ($250,000 − $200,000). The employer does not match it."),
      row("Employer's share of FICA on Nikhil's wages", num(15064), "$11,439 + $3,625."),
      row("Asha: self-employment tax", num(14130, 1), "$100,000 × 92.35% = $92,350; × 15.3% = $14,130."),
      row("Asha: deduction for half of self-employment tax", num(7065, 1), "Half of $14,130 is an adjustment for adjusted gross income."),
    ],
    takeaway: "Social Security stops at the wage base; Medicare does not, and the 0.9% additional tax falls on the employee alone. Self-employment tax applies 15.3% to 92.35% of net earnings, and half is deductible.",
  },
  {
    slug: "exempt-organization-annual-returns",
    subject: "reg",
    topic: "exempt-organizations-basics",
    title: "Which annual return does the exempt organization file?",
    format: "classification",
    minutes: 8,
    scenario: ["Several tax-exempt organizations ask which annual information return, if any, they must file."],
    instructions: "Select the return each organization files.",
    columns: ["Organization", "Return"],
    rows: [
      row("A private foundation of any size", pick(RETURN, "Form 990-PF"), "Private foundations file Form 990-PF regardless of size."),
      row("A public charity whose gross receipts are normally $50,000 or less", pick(RETURN, "Form 990-N (e-Postcard)"), "Small organizations may file the electronic notice."),
      row("A public charity with gross receipts under $200,000 and total assets under $500,000", pick(RETURN, "Form 990-EZ"), "Below both thresholds, the short form may be used."),
      row("A public charity with gross receipts of $3 million", pick(RETURN, "Form 990"), "Larger organizations file the full Form 990."),
      row("An exempt organization with $1,000 or more of gross unrelated business income", pick(RETURN, "Form 990-T"), "Form 990-T reports unrelated business income and the tax on it, in addition to the information return."),
      row("A church", pick(RETURN, "No annual information return required"), "Churches are exempt from filing the Form 990 series (though a church with unrelated business income still files Form 990-T)."),
    ],
    takeaway: "Private foundations always file Form 990-PF. Public charities file Form 990-N, 990-EZ or 990 depending on size, and Form 990-T reports unrelated business income.",
  },
];
