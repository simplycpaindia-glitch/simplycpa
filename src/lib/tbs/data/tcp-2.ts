import type { Simulation } from "../types";
import { num, pick, row } from "../build";

// TCP simulations, second set: a different angle on each topic.

const AMOUNT = ["Item", "Amount ($)"];
const NEXUS = ["Protected: no income tax nexus", "Not protected: nexus exists"] as const;
const AUTHORITY = ["Primary authority: statutory", "Primary authority: administrative", "Primary authority: judicial", "Secondary authority"] as const;

export const tcpSimulations2: Simulation[] = [
  // ── Area I ──
  {
    slug: "net-investment-income-tax",
    subject: "tcp",
    topic: "individual-tax-planning-strategies",
    title: "Net investment income tax",
    format: "calculation",
    minutes: 10,
    scenario: ["Three clients have investment income and want to know whether the 3.8% net investment income tax applies."],
    exhibits: [
      {
        title: "Rule to use",
        text: [
          "The tax is 3.8% of the lesser of net investment income or the amount by which modified adjusted gross income exceeds the threshold.",
          "Thresholds: $200,000 for single filers; $250,000 for married couples filing jointly.",
        ],
      },
    ],
    instructions: "Enter each tax in dollars. Enter 0 where no tax applies.",
    columns: AMOUNT,
    rows: [
      row("Single: modified adjusted gross income $260,000, net investment income $40,000", num(1520), "The excess over the threshold is $60,000; the lesser amount is $40,000. 3.8% × $40,000."),
      row("Married filing jointly: modified adjusted gross income $280,000, net investment income $50,000", num(1140), "The excess is $30,000, which is less than $50,000. 3.8% × $30,000."),
      row("Single: modified adjusted gross income $190,000, net investment income $25,000", num(0), "Income is below the $200,000 threshold."),
    ],
    takeaway: "The net investment income tax applies 3.8% to whichever is smaller: investment income, or income above the threshold. The thresholds are not indexed for inflation.",
  },
  {
    slug: "education-credits-calculation",
    subject: "tcp",
    topic: "personal-financial-planning",
    title: "American opportunity and lifetime learning credits",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Two families paid qualified education expenses this year. Both have incomes below the phase-out range and have enough tax to use any nonrefundable credit.",
      "The Iyers paid $3,000 of tuition for their son's first year of college. The Kapoors paid $7,000 of tuition for a graduate course taken by Mrs Kapoor.",
    ],
    exhibits: [
      {
        title: "Credit rules to use",
        text: [
          "American opportunity credit: 100% of the first $2,000 of expenses plus 25% of the next $2,000, per eligible student; 40% of the credit is refundable.",
          "Lifetime learning credit: 20% of up to $10,000 of expenses per return; nonrefundable.",
        ],
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Iyers: American opportunity credit", num(2250), "$2,000 + 25% × $1,000."),
      row("Iyers: refundable part of the credit", num(900), "40% × $2,250."),
      row("Kapoors: lifetime learning credit", num(1400), "20% × $7,000. Graduate study qualifies for the lifetime learning credit but not the American opportunity credit."),
    ],
    takeaway: "The American opportunity credit is worth up to $2,500 per student for the first four years of college and is 40% refundable. The lifetime learning credit covers any level of study but is smaller and nonrefundable.",
  },
  {
    slug: "qcd-and-indirect-rollover",
    subject: "tcp",
    topic: "retirement-planning-strategies",
    title: "Qualified charitable distributions and indirect rollovers",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Gopal, age 75, must take a $20,000 required minimum distribution from his traditional IRA. He has $8,000 paid directly from the IRA to a public charity as a qualified charitable distribution and takes the remaining $12,000 himself.",
      "Anita, age 45, received a $50,000 distribution from her former employer's 401(k). The plan withheld 20%, so she received $40,000. Within 60 days she deposited only that $40,000 into an IRA.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Gopal: taxable IRA distribution this year", num(12000), "The $8,000 qualified charitable distribution counts toward his required distribution but is excluded from income."),
      row("Anita: taxable amount", num(10000), "Only $40,000 of the $50,000 was rolled over. The $10,000 withheld and not replaced is a taxable distribution."),
      row("Anita: 10% additional tax", num(1000), "She is under 59½ and no exception applies: 10% × $10,000."),
      row("Anita: federal tax withheld that she claims as a payment on her return", num(10000), "The 20% withholding is credited against her tax for the year."),
    ],
    takeaway: "A qualified charitable distribution satisfies the required distribution without adding to income. In an indirect rollover, replace the 20% withheld from other funds or it becomes taxable.",
  },
  {
    slug: "gift-splitting-and-529-election",
    subject: "tcp",
    topic: "estate-and-gift-tax-planning",
    title: "Gift splitting and the five-year election for 529 plans",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Vijay and his wife, both US citizens, are planning gifts. For this simulation, use an annual exclusion of $19,000 per donee.",
      "Vijay gives their son $60,000 in cash. Separately, Vijay contributes $95,000 to a 529 plan for his granddaughter and elects to treat it as made evenly over five years. He makes no other gifts to either donee.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Gift to the son: Vijay's taxable gift if they elect gift splitting", num(11000), "Each spouse is treated as giving $30,000: $30,000 − $19,000."),
      row("Gift to the son: total taxable gifts for the couple with gift splitting", num(22000), "$11,000 for each spouse."),
      row("Gift to the son: Vijay's taxable gift without gift splitting", num(41000), "$60,000 − $19,000."),
      row("529 contribution: Vijay's taxable gift this year with the five-year election", num(0), "$95,000 is treated as $19,000 a year for five years, each year covered by the annual exclusion."),
    ],
    takeaway: "Gift splitting doubles the annual exclusion for a married couple. A 529 contribution can use five years of annual exclusions at once.",
  },

  // ── Area II ──
  {
    slug: "corporate-estimated-tax",
    subject: "tcp",
    topic: "c-corporation-tax-compliance",
    title: "Corporate estimated tax installments",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Two calendar-year C corporations each expect tax of $400,000 this year and paid tax of $300,000 last year (a full 12-month year).",
      "Alder Corp. is not a large corporation. Birch Corp. is a large corporation: its taxable income was $1 million or more in at least one of the last three years.",
    ],
    exhibits: [
      {
        title: "Rules to use",
        text: [
          "Each of the four installments is 25% of the required annual payment: the lesser of 100% of this year's tax or 100% of last year's tax.",
          "A large corporation may use last year's tax only for its first installment, and must make up any shortfall in the second.",
        ],
      },
    ],
    instructions: "Enter each installment in dollars.",
    columns: AMOUNT,
    rows: [
      row("Alder: each quarterly installment", num(75000), "25% × the lesser of $400,000 and $300,000."),
      row("Birch: first installment", num(75000), "25% × last year's $300,000 is allowed for the first installment."),
      row("Birch: second installment", num(125000), "The required amount is 25% × $400,000 = $100,000, plus the $25,000 shortfall from the first installment."),
      row("Birch: third installment", num(100000), "25% × $400,000."),
    ],
    takeaway: "Corporations can base installments on last year's tax, but a large corporation can do so only for the first installment and must catch up in the second.",
  },
  {
    slug: "built-in-gains-tax",
    subject: "tcp",
    topic: "s-corporation-planning",
    title: "Built-in gains tax after converting from a C corporation",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Fern Inc. was a C corporation until it elected S status at the start of Year 1. On that date it owned land with a fair market value of $200,000 and an adjusted basis of $120,000. It had no other built-in gains or losses.",
      "In Year 3 Fern sold the land for $230,000. Its taxable income for that year, computed as if it were a C corporation, is well above the gain.",
    ],
    exhibits: [{ title: "Rules to use", text: ["The built-in gains tax is 21% of the net recognized built-in gain during the five-year recognition period."] }],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Built-in gain at the date of conversion", num(80000), "$200,000 − $120,000."),
      row("Gain recognized on the sale", num(110000), "$230,000 − $120,000."),
      row("Built-in gains tax payable by Fern", num(16800), "Only the $80,000 built in at conversion is taxed at the corporate level: 21% × $80,000."),
      row("Gain passed through to shareholders, net of the built-in gains tax", num(93200), "$110,000 − $16,800. The tax paid reduces the gain that passes through."),
      row("Built-in gains tax if the land had been sold in Year 6", num(0), "The recognition period is five years, so a sale after it ends is not subject to the tax."),
    ],
    takeaway: "Converting to S status does not escape tax on appreciation that built up while the company was a C corporation, if the assets are sold within five years.",
  },
  {
    slug: "sale-of-partnership-interest",
    subject: "tcp",
    topic: "partnership-planning",
    title: "Selling a partnership interest with liabilities and hot assets",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Raj sold his partnership interest for $70,000 cash. The buyer also took over Raj's $20,000 share of partnership liabilities. Raj's basis in the interest, including that $20,000, was $50,000.",
      "Raj's share of the partnership's unrealized receivables (hot assets) has a basis of zero and a value of $15,000.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Amount realized", num(90000), "Cash plus relief from his share of liabilities: $70,000 + $20,000."),
      row("Total gain", num(40000), "$90,000 − $50,000."),
      row("Ordinary income from hot assets", num(15000), "Gain attributable to unrealized receivables is ordinary income."),
      row("Capital gain", num(25000), "$40,000 − $15,000."),
    ],
    takeaway: "The amount realized on selling a partnership interest includes the liabilities the buyer takes over, and gain from hot assets is ordinary income.",
  },

  // ── Area III ──
  {
    slug: "c-corporation-vs-pass-through-tax-cost",
    subject: "tcp",
    topic: "entity-choice-and-structuring",
    title: "Comparing the tax cost of a C corporation and a pass-through",
    format: "calculation",
    minutes: 10,
    scenario: [
      "A business expects $100,000 of profit, all of which the owner will take out each year. Compare running it as a C corporation with running it as an entity taxed as a partnership.",
    ],
    exhibits: [
      {
        title: "Rates to use",
        text: [
          "C corporation tax rate: 21%. Qualified dividends to the owner: 15%.",
          "Owner's marginal rate on pass-through income: 32%. Ignore self-employment tax and the qualified business income deduction.",
        ],
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("C corporation: corporate income tax", num(21000), "21% × $100,000."),
      row("C corporation: owner's tax on the dividend", num(11850), "The after-tax $79,000 is distributed: 15% × $79,000."),
      row("C corporation: combined tax", num(32850), "$21,000 + $11,850."),
      row("Pass-through: owner's tax", num(32000), "32% × $100,000, taxed once."),
    ],
    takeaway: "When profits are paid out, double taxation usually makes a C corporation more expensive. The comparison changes if profits are retained or the owner's rate is higher.",
  },
  {
    slug: "corporate-liquidations",
    subject: "tcp",
    topic: "entity-distributions-and-liquidations",
    title: "Complete liquidation of a corporation",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Oak Corp. liquidated completely, distributing to its sole individual shareholder, Leela, land worth $300,000 (basis $100,000) and $50,000 cash. Leela's stock basis was $80,000. Ignore Oak's tax on the liquidation.",
      "Separately, Pine Corp., which owns 85% of Spruce Corp., liquidated Spruce completely.",
    ],
    instructions: "Enter each amount in dollars. Enter 0 where nothing is recognized.",
    columns: AMOUNT,
    rows: [
      row("Oak: gain recognized on distributing the land", num(200000), "A liquidating corporation recognizes gain as if it had sold the property: $300,000 − $100,000."),
      row("Leela: gain recognized", num(270000), "Amount received $350,000 − stock basis $80,000. It is capital gain."),
      row("Leela: basis in the land", num(300000), "Property received in a liquidation takes its fair market value as basis."),
      row("Pine: gain recognized on liquidating Spruce", num(0), "A parent owning at least 80% recognizes no gain or loss on liquidating a subsidiary, and takes over its assets at their carryover basis."),
    ],
    takeaway: "An ordinary liquidation is taxed twice: the corporation on its appreciated assets and the shareholder on the excess over stock basis. Liquidating an 80%-owned subsidiary is tax-free.",
  },

  // ── Area IV ──
  {
    slug: "installment-sale-and-involuntary-conversion",
    subject: "tcp",
    topic: "property-transactions-advanced-planning",
    title: "Deferring gain: installment sales and involuntary conversions",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Nisha sold investment land with a basis of $60,000 for $100,000: $20,000 down and four annual payments of $20,000 plus interest. She does not elect out of the installment method.",
      "Separately, her rental building (basis $300,000) was destroyed by fire. She received $500,000 of insurance and within the replacement period bought a similar building for $450,000.",
    ],
    instructions: "Enter each amount in dollars, and the percentage as a whole number.",
    columns: AMOUNT,
    rows: [
      row("Land: gross profit percentage", num(40), "Gross profit $40,000 ÷ contract price $100,000."),
      row("Land: gain recognized in the year of sale", num(8000), "40% × the $20,000 received."),
      row("Land: gain recognized in each later year", num(8000), "40% × each $20,000 principal payment. Interest is taxed separately."),
      row("Building: gain recognized", num(50000), "Realized gain is $200,000. Gain is recognized only to the extent the proceeds were not reinvested: $500,000 − $450,000."),
      row("Building: basis of the replacement building", num(300000), "Cost $450,000 − deferred gain $150,000."),
    ],
    takeaway: "Installment reporting spreads gain over payments in proportion to gross profit. An involuntary conversion defers gain to the extent the proceeds are reinvested in similar property.",
  },
  {
    slug: "public-law-86-272-nexus",
    subject: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    title: "State income tax nexus and Public Law 86-272",
    format: "classification",
    minutes: 8,
    scenario: [
      "Hillcrest Products sells goods from its headquarters in another state. It wants to know whether each activity in State X gives State X the right to impose its income tax. Assume each activity is its only presence in State X.",
    ],
    instructions: "Select whether Public Law 86-272 protects Hillcrest from State X's income tax.",
    columns: ["Activity in State X", "Result"],
    rows: [
      row("Salespeople visit customers to solicit orders, which are approved and shipped from outside State X", pick(NEXUS, "Protected: no income tax nexus"), "Solicitation of orders for tangible goods, approved and filled from outside the state, is protected."),
      row("Hillcrest advertises in State X and ships goods there from outside", pick(NEXUS, "Protected: no income tax nexus"), "Advertising and shipping from outside the state are within the protection."),
      row("Hillcrest owns a warehouse in State X that holds inventory", pick(NEXUS, "Not protected: nexus exists"), "Owning property in the state goes beyond solicitation."),
      row("Its salespeople also install and repair products for customers in State X", pick(NEXUS, "Not protected: nexus exists"), "Installation and repair are not ancillary to solicitation."),
      row("Hillcrest sends consultants to State X to provide paid services", pick(NEXUS, "Not protected: nexus exists"), "The protection covers sales of tangible personal property only, not services."),
    ],
    takeaway: "Public Law 86-272 protects only the solicitation of orders for tangible goods that are approved and shipped from outside the state. Property, services or activities beyond solicitation create nexus.",
  },
  {
    slug: "hierarchy-of-tax-authority",
    subject: "tcp",
    topic: "tax-research-and-documentation",
    title: "Classifying sources of tax authority",
    format: "classification",
    minutes: 8,
    scenario: ["A tax researcher is listing the sources she found for a client memo and needs to label each one by type of authority."],
    instructions: "Select the type of authority each source is.",
    columns: ["Source", "Type of authority"],
    rows: [
      row("The Internal Revenue Code", pick(AUTHORITY, "Primary authority: statutory"), "Enacted by Congress."),
      row("Treasury regulations interpreting a Code section", pick(AUTHORITY, "Primary authority: administrative"), "Issued by the Treasury Department."),
      row("A revenue ruling", pick(AUTHORITY, "Primary authority: administrative"), "The IRS's published position on how the law applies to specific facts."),
      row("A decision of the US Tax Court", pick(AUTHORITY, "Primary authority: judicial"), "Court decisions interpret the law."),
      row("A tax treatise or an article in a professional journal", pick(AUTHORITY, "Secondary authority"), "Commentary helps locate and explain the law but is not itself law."),
      row("A tax treaty between the US and India", pick(AUTHORITY, "Primary authority: statutory"), "Treaties are part of the supreme law, on the same footing as statutes."),
    ],
    takeaway: "Primary authority is the law and official interpretations of it: the Code and treaties, regulations and rulings, and court decisions. Everything else is secondary.",
  },
];
