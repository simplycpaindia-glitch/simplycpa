import type { Simulation } from "../types";
import { num, pick, row } from "../build";

// BAR simulations: one per topic.

const AMOUNT = ["Item", "Amount"];
const HEDGE = ["Fair value hedge", "Cash flow hedge", "Net investment hedge", "Not a hedge"] as const;
const HEDGE_GAIN = [
  "Earnings immediately",
  "Other comprehensive income, then earnings when the hedged item affects earnings",
  "Cumulative translation adjustment",
] as const;
const RATE = ["Current (year-end) rate", "Historical rate", "Weighted-average rate for the year"] as const;
const TIMING = ["Over time", "At a point in time", "Not yet: control has not transferred"] as const;
const DIRECTION = ["Favorable", "Unfavorable", "No variance"] as const;
const ANALYTICS = ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"] as const;
const GOV = [
  "Revenue this year",
  "Deferred inflow of resources",
  "Liability (unearned revenue)",
  "Expenditure this year",
  "Not in the governmental funds: government-wide statements only",
] as const;

import { barSimulations2 } from "./bar-2";

const barSimulations1: Simulation[] = [
  // ── Area I: Business analysis ──
  {
    slug: "liquidity-and-activity-ratios",
    subject: "bar",
    topic: "financial-statement-analysis",
    title: "Liquidity, activity and return ratios",
    format: "calculation",
    minutes: 12,
    scenario: ["A lender is reviewing Coastal Supply Co. before renewing its credit line. Balances below are averages for the year unless stated."],
    exhibits: [
      {
        title: "Coastal Supply Co.",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Cash (year-end)", "50,000"],
            ["Accounts receivable (year-end and average)", "150,000"],
            ["Inventory (year-end and average)", "180,000"],
            ["Prepaid expenses (year-end)", "20,000"],
            ["Current liabilities (year-end)", "200,000"],
            ["Net credit sales", "1,200,000"],
            ["Cost of goods sold", "720,000"],
            ["Net income", "90,000"],
            ["Average shareholders' equity", "600,000"],
          ],
        },
      },
    ],
    instructions: "Enter ratios to two decimal places, days to one decimal place and percentages as whole numbers. Use a 365-day year.",
    columns: AMOUNT,
    rows: [
      row("Current ratio", num(2, 0.01), "Current assets ($50,000 + $150,000 + $180,000 + $20,000 = $400,000) ÷ $200,000."),
      row("Quick (acid-test) ratio", num(1, 0.01), "(Cash + receivables) ÷ current liabilities = $200,000 ÷ $200,000. Inventory and prepaids are excluded."),
      row("Accounts receivable turnover", num(8, 0.01), "$1,200,000 ÷ $150,000."),
      row("Days sales outstanding", num(45.6, 0.1), "365 ÷ 8 = 45.6 days."),
      row("Inventory turnover", num(4, 0.01), "Cost of goods sold ÷ average inventory = $720,000 ÷ $180,000."),
      row("Return on equity (%)", num(15, 0.1), "$90,000 ÷ $600,000."),
    ],
    takeaway: "The quick ratio drops inventory and prepaids from the current ratio. Receivable turnover uses sales; inventory turnover uses cost of goods sold.",
  },
  {
    slug: "flexible-budget-variances",
    subject: "bar",
    topic: "financial-forecasting-and-projections",
    title: "Materials, labor and fixed overhead variances",
    format: "calculation",
    minutes: 15,
    scenario: ["Rivet Manufacturing produced 12,000 units this month. Its standards and actual results are below. All materials purchased were used."],
    exhibits: [
      {
        title: "Standards and actual results",
        table: {
          head: ["Item", "Standard", "Actual"],
          rows: [
            ["Direct materials", "2.4 lb per unit at $4.00 per lb", "30,000 lb at $4.10 per lb"],
            ["Direct labor", "1.5 hours per unit at $20 per hour", "17,000 hours at $21 per hour"],
            ["Fixed overhead", "Budget of $50,000", "$52,000"],
          ],
        },
      },
    ],
    instructions: "Enter each variance in dollars as a positive number and select whether it is favorable or unfavorable.",
    columns: ["Variance", "Amount ($)", "Direction"],
    rows: [
      row("Direct materials price variance", [num(3000), pick(DIRECTION, "Unfavorable")], "(Actual price − standard price) × actual quantity = $0.10 × 30,000. Paying more than standard is unfavorable."),
      row("Direct materials quantity variance", [num(4800), pick(DIRECTION, "Unfavorable")], "Standard quantity for actual output is 12,000 × 2.4 = 28,800 lb. (30,000 − 28,800) × $4.00."),
      row("Direct labor rate variance", [num(17000), pick(DIRECTION, "Unfavorable")], "($21 − $20) × 17,000 actual hours."),
      row("Direct labor efficiency variance", [num(20000), pick(DIRECTION, "Favorable")], "Standard hours allowed are 12,000 × 1.5 = 18,000. (18,000 − 17,000) × $20. Using fewer hours than standard is favorable."),
      row("Fixed overhead spending variance", [num(2000), pick(DIRECTION, "Unfavorable")], "$52,000 actual − $50,000 budget."),
    ],
    takeaway: "Price and rate variances use actual quantities; quantity and efficiency variances use standard prices and the standard quantity allowed for actual output.",
  },
  {
    slug: "types-of-data-analytics",
    subject: "bar",
    topic: "data-analytics-for-accounting",
    title: "Descriptive, diagnostic, predictive or prescriptive?",
    format: "classification",
    minutes: 6,
    scenario: ["The finance team at a retailer has built several analyses this year. The CFO wants to know which kind of analytics each one is."],
    instructions: "Select the type of analytics each analysis represents.",
    columns: ["Analysis", "Type"],
    rows: [
      row("A dashboard showing last quarter's sales by region", pick(ANALYTICS, "Descriptive"), "It reports what happened."),
      row("A drill-down showing that returns spiked in March because one warehouse shipped the wrong model", pick(ANALYTICS, "Diagnostic"), "It explains why something happened."),
      row("A regression model estimating next year's bad debts from economic indicators", pick(ANALYTICS, "Predictive"), "It estimates what is likely to happen."),
      row("An optimisation model that recommends how much of each product to reorder", pick(ANALYTICS, "Prescriptive"), "It recommends what to do."),
      row("The average number of days taken to pay each supplier last year", pick(ANALYTICS, "Descriptive"), "A summary of past results."),
      row("A model scoring each customer's likelihood of leaving next quarter", pick(ANALYTICS, "Predictive"), "It forecasts a future outcome."),
    ],
    takeaway: "Descriptive says what happened, diagnostic why, predictive what will happen, and prescriptive what to do about it.",
  },

  // ── Area II: Technical accounting and reporting ──
  {
    slug: "goodwill-noncontrolling-interest-and-bargain-purchase",
    subject: "bar",
    topic: "business-combinations-advanced",
    title: "Goodwill, noncontrolling interest and a bargain purchase",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Parent Co. acquired 80% of Sub Inc. for $800,000 cash. On that date the fair value of the 20% noncontrolling interest was $190,000. Sub's identifiable net assets had a book value of $700,000 and a fair value of $900,000; the difference relates to a building.",
      "In a separate deal, Parent acquired 80% of another company for $600,000 when the noncontrolling interest's fair value was $140,000 and identifiable net assets were worth $900,000. Parent reassessed the values and confirmed them.",
    ],
    instructions: "Enter each amount in dollars. Enter 0 where an amount does not arise.",
    columns: AMOUNT,
    rows: [
      row("Sub Inc.: goodwill recognized", num(90000), "Consideration + fair value of noncontrolling interest − fair value of identifiable net assets: $800,000 + $190,000 − $900,000."),
      row("Sub Inc.: noncontrolling interest in the consolidated balance sheet at acquisition", num(190000), "Noncontrolling interest is measured at fair value at the acquisition date."),
      row("Sub Inc.: increase in the building's carrying amount on consolidation", num(200000), "Identifiable assets are consolidated at fair value: $900,000 − $700,000."),
      row("Second acquisition: goodwill recognized", num(0), "Consideration plus noncontrolling interest ($740,000) is less than the net assets acquired, so there is no goodwill."),
      row("Second acquisition: bargain purchase gain recognized in earnings", num(160000), "$900,000 − ($600,000 + $140,000). After reassessing, the acquirer recognizes the gain in earnings on the acquisition date."),
    ],
    takeaway: "Goodwill is consideration plus noncontrolling interest at fair value, less identifiable net assets at fair value. A negative result, after reassessment, is a bargain purchase gain in earnings.",
  },
  {
    slug: "hedge-classification-and-accounting",
    subject: "bar",
    topic: "derivatives-and-hedge-accounting",
    title: "Classifying hedges and where the derivative's gain goes",
    format: "classification",
    minutes: 10,
    scenario: ["Ironbridge Corp. holds the derivatives below. Each qualifying hedge has been documented and is highly effective."],
    instructions: "For each derivative, select the type of hedge and where changes in its fair value are reported.",
    columns: ["Derivative", "Type of hedge", "Change in fair value reported in"],
    rows: [
      row("An interest rate swap that converts fixed-rate debt to a variable rate", [pick(HEDGE, "Fair value hedge"), pick(HEDGE_GAIN, "Earnings immediately")], "It hedges changes in the fair value of the fixed-rate debt. Gains and losses on the swap and on the hedged debt both go to earnings, largely offsetting."),
      row("An interest rate swap that converts variable-rate debt to a fixed rate", [pick(HEDGE, "Cash flow hedge"), pick(HEDGE_GAIN, "Other comprehensive income, then earnings when the hedged item affects earnings")], "It hedges variability in future interest payments, a cash flow exposure."),
      row("A forward contract to buy euros for an inventory purchase expected next quarter", [pick(HEDGE, "Cash flow hedge"), pick(HEDGE_GAIN, "Other comprehensive income, then earnings when the hedged item affects earnings")], "A forecasted transaction can only be the subject of a cash flow hedge. The amount in other comprehensive income is reclassified when the inventory is sold."),
      row("A loan in pounds sterling designated as a hedge of its investment in a UK subsidiary", [pick(HEDGE, "Net investment hedge"), pick(HEDGE_GAIN, "Cumulative translation adjustment")], "Gains and losses offset the translation adjustment on the net investment."),
      row("Commodity futures bought to profit from an expected price rise", [pick(HEDGE, "Not a hedge"), pick(HEDGE_GAIN, "Earnings immediately")], "Derivatives not designated as hedges are measured at fair value through earnings."),
      row("A put option protecting the value of inventory already on hand", [pick(HEDGE, "Fair value hedge"), pick(HEDGE_GAIN, "Earnings immediately")], "It hedges the fair value of a recognised asset."),
    ],
    takeaway: "A fair value hedge protects an existing asset, liability or firm commitment and goes through earnings. A cash flow hedge protects future cash flows and parks gains in other comprehensive income until the hedged item hits earnings.",
  },
  {
    slug: "translation-and-remeasurement-rates",
    subject: "bar",
    topic: "foreign-currency-translation",
    title: "Which exchange rate? Translation versus remeasurement",
    format: "classification",
    minutes: 10,
    scenario: [
      "Ironbridge has two foreign subsidiaries. Sub T's functional currency is its local currency, so its statements are translated. Sub R keeps its books in local currency but its functional currency is the US dollar, so its statements are remeasured.",
    ],
    instructions: "Select the exchange rate used for each item.",
    columns: ["Item", "Exchange rate"],
    rows: [
      row("Sub T (translation): property, plant and equipment", pick(RATE, "Current (year-end) rate"), "Under the current rate method all assets and liabilities use the year-end rate."),
      row("Sub T (translation): depreciation expense", pick(RATE, "Weighted-average rate for the year"), "Revenues and expenses are translated at the rates when they occurred; an average rate is a practical approximation."),
      row("Sub T (translation): common stock", pick(RATE, "Historical rate"), "Equity accounts other than retained earnings use historical rates."),
      row("Sub R (remeasurement): cash and accounts payable", pick(RATE, "Current (year-end) rate"), "Monetary items are remeasured at the current rate."),
      row("Sub R (remeasurement): inventory carried at cost", pick(RATE, "Historical rate"), "Nonmonetary items are remeasured at historical rates."),
      row("Sub R (remeasurement): depreciation expense", pick(RATE, "Historical rate"), "Expenses related to nonmonetary assets follow the historical rate of those assets."),
      row("Sub R (remeasurement): sales revenue", pick(RATE, "Weighted-average rate for the year"), "Revenues and expenses not tied to nonmonetary items use the average rate."),
    ],
    takeaway: "Translation uses the current rate for all balance sheet items and puts the difference in other comprehensive income. Remeasurement uses historical rates for nonmonetary items and puts the difference in earnings.",
  },
  {
    slug: "net-periodic-pension-cost",
    subject: "bar",
    topic: "employee-benefit-plan-accounting",
    title: "Net periodic pension cost and funded status",
    format: "calculation",
    minutes: 12,
    scenario: ["Granite Corp. sponsors a defined benefit pension plan. Data for the year are below."],
    exhibits: [
      {
        title: "Pension plan data",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Projected benefit obligation, beginning of year", "1,000,000"],
            ["Plan assets at fair value, beginning of year", "800,000"],
            ["Service cost", "60,000"],
            ["Discount (settlement) rate", "5%"],
            ["Expected long-term rate of return on plan assets", "7%"],
            ["Amortization of prior service cost", "10,000"],
            ["Projected benefit obligation, end of year", "1,080,000"],
            ["Plan assets at fair value, end of year", "870,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Interest cost", num(50000), "5% × the beginning projected benefit obligation of $1,000,000."),
      row("Expected return on plan assets", num(56000), "7% × beginning plan assets of $800,000. It reduces pension cost."),
      row("Net periodic pension cost", num(64000), "$60,000 + $50,000 − $56,000 + $10,000."),
      row("Amount presented in operating income", num(60000), "Only service cost is presented with other compensation costs; the other components are presented outside operating income."),
      row("Net pension liability on the year-end balance sheet", num(210000), "The plan is underfunded: $1,080,000 − $870,000."),
    ],
    takeaway: "Pension cost is service cost plus interest cost, less expected return, plus amortizations. Only service cost belongs in operating income, and the balance sheet shows the funded status.",
  },
  {
    slug: "stock-options-expense-with-forfeitures",
    subject: "bar",
    topic: "stock-compensation",
    title: "Recognizing stock option expense when options are forfeited",
    format: "calculation",
    minutes: 12,
    scenario: [
      "On January 1 of Year 1, Maple Inc. granted 10,000 stock options to its managers. The options vest at the end of Year 3 if the managers are still employed (cliff vesting). The grant-date fair value is $12 per option. Maple accounts for forfeitures when they occur.",
      "In Year 2, managers holding 1,000 unvested options left the company.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Total compensation cost measured at the grant date", num(120000), "10,000 × $12."),
      row("Compensation expense for Year 1", num(40000), "$120,000 × 1/3."),
      row("Compensation expense for Year 2", num(32000), "Cumulative cost for the 9,000 options still outstanding is 9,000 × $12 × 2/3 = $72,000, less the $40,000 already recognized."),
      row("Compensation expense for Year 3", num(36000), "9,000 × $12 = $108,000 total, less the $72,000 recognized through Year 2."),
      row("Total compensation cost recognized over the three years", num(108000), "Expense is recognized only for options that vest."),
    ],
    takeaway: "Measure options at grant-date fair value and spread the cost over the service period. When an option is forfeited before vesting, reverse the cost recognized for it in the period of forfeiture.",
  },
  {
    slug: "revenue-timing-special-arrangements",
    subject: "bar",
    topic: "revenue-for-specific-industries",
    title: "Timing of revenue in licensing, construction and consignment",
    format: "classification",
    minutes: 8,
    scenario: ["Several companies want to know when to recognize revenue on particular contracts. Assume each contract meets the criteria to be accounted for under Topic 606."],
    instructions: "Select when revenue is recognized for each performance obligation.",
    columns: ["Arrangement", "Revenue recognized"],
    rows: [
      row("A licence to use finished accounting software as it exists when transferred", pick(TIMING, "At a point in time"), "Functional intellectual property gives a right to use, recognized when the customer can use and benefit from it."),
      row("A franchise licence to use a restaurant brand, which the franchisor keeps supporting", pick(TIMING, "Over time"), "Symbolic intellectual property gives a right to access, recognized over the licence period."),
      row("Building an office on land the customer owns, which the customer controls as it is built", pick(TIMING, "Over time"), "The customer controls the asset as it is created."),
      row("Manufacturing a specialised machine with no alternative use, with a right to payment for work done to date", pick(TIMING, "Over time"), "No alternative use plus an enforceable right to payment for performance to date meets the over-time criteria."),
      row("Goods shipped to a retailer on consignment and not yet sold to end customers", pick(TIMING, "Not yet: control has not transferred"), "The consignor keeps control until the consignee sells the goods."),
      row("A bill-and-hold sale where the customer requested the arrangement, the goods are identified and ready, and cannot be redirected", pick(TIMING, "At a point in time"), "When the bill-and-hold criteria are met, control has passed to the customer."),
    ],
    takeaway: "Over time requires the customer to receive the benefit as you perform, control the asset as it is built, or an asset with no alternative use plus a right to payment. Otherwise revenue is recognized when control passes.",
  },
  {
    slug: "sales-type-lease-lessor",
    subject: "bar",
    topic: "lease-accounting-lessor",
    title: "A sales-type lease from the lessor's side",
    format: "calculation",
    minutes: 12,
    scenario: [
      "On January 1, Forge Equipment Co. leased a machine to a customer for five years, the machine's entire economic life, so the lease is a sales-type lease. The machine cost Forge $70,000 and its fair value is $100,000.",
      "The customer pays $25,046 at the end of each year. The rate implicit in the lease is 8%, and the present value of the lease payments is $100,000. There is no residual value.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Sales revenue at commencement", num(100000), "The lower of the fair value and the present value of the lease payments."),
      row("Cost of goods sold at commencement", num(70000), "The machine's carrying amount (there is no unguaranteed residual to deduct)."),
      row("Selling profit at commencement", num(30000), "$100,000 − $70,000."),
      row("Interest income for Year 1", num(8000), "8% × the $100,000 net investment."),
      row("Net investment in the lease at the end of Year 1", num(82954), "$100,000 + $8,000 interest − $25,046 payment."),
    ],
    takeaway: "In a sales-type lease the lessor derecognizes the asset, recognizes selling profit at commencement and then earns interest on its net investment.",
  },
  {
    slug: "diluted-earnings-per-share",
    subject: "bar",
    topic: "public-company-reporting-topics",
    title: "Basic and diluted earnings per share",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Summit Corp. had net income of $1,000,000 and 400,000 weighted-average common shares outstanding. It declared $100,000 of dividends on cumulative nonconvertible preferred stock.",
      "Summit also had 20,000 stock options outstanding all year, exercisable at $40, when the average market price was $50; and convertible bonds outstanding all year, convertible into 50,000 common shares, with after-tax interest of $40,000.",
    ],
    instructions: "Enter earnings per share to two decimal places and shares as whole numbers.",
    columns: AMOUNT,
    rows: [
      row("Basic earnings per share", num(2.25, 0.01), "($1,000,000 − $100,000 preferred dividends) ÷ 400,000."),
      row("Incremental shares from the options (treasury stock method)", num(4000), "Proceeds of 20,000 × $40 = $800,000 buy back $800,000 ÷ $50 = 16,000 shares. 20,000 − 16,000 = 4,000."),
      row("Diluted earnings per share", num(2.07, 0.01), "($900,000 + $40,000) ÷ (400,000 + 4,000 + 50,000) = $2.07. The bonds' incremental effect, $0.80 a share, is below EPS, so they are dilutive."),
    ],
    takeaway: "Subtract preferred dividends for basic EPS. For diluted EPS, add options by the treasury stock method and convertibles by the if-converted method, including only securities that reduce EPS.",
  },

  // ── Area III: State and local governments ──
  {
    slug: "modified-accrual-recognition",
    subject: "bar",
    topic: "governmental-fund-accounting",
    title: "Modified accrual: revenue, deferred inflow or expenditure?",
    format: "classification",
    minutes: 10,
    scenario: ["The City of Elmwood considers revenue available if collected within 60 days after year-end. These items relate to its general fund for the year just ended."],
    instructions: "Select how each item is reported in the governmental fund statements this year.",
    columns: ["Item", "Treatment in the governmental funds"],
    rows: [
      row("Property taxes levied for this year, collected within 60 days after year-end", pick(GOV, "Revenue this year"), "Measurable and available, so recognized as revenue."),
      row("Property taxes levied for this year, collected 90 days after year-end", pick(GOV, "Deferred inflow of resources"), "Not available within the period, so a deferred inflow in the fund statements."),
      row("A grant received before the city met the eligibility requirements", pick(GOV, "Liability (unearned revenue)"), "Cash received before eligibility requirements other than timing are met is a liability."),
      row("Purchase of a fire truck with general fund resources", pick(GOV, "Expenditure this year"), "Capital outlay is an expenditure in governmental funds; the truck appears only in the government-wide statements."),
      row("Compensated absences earned this year but not due for payment until future years", pick(GOV, "Not in the governmental funds: government-wide statements only"), "Only the amount due and payable from current financial resources is an expenditure."),
      row("Principal on long-term bonds that came due and was paid this year", pick(GOV, "Expenditure this year"), "Debt service on general long-term debt is an expenditure when due."),
    ],
    takeaway: "Governmental funds track current financial resources: revenue when measurable and available, expenditures when due. Long-term assets and liabilities live only in the government-wide statements.",
  },
  {
    slug: "funds-to-government-wide-reconciliation",
    subject: "bar",
    topic: "government-wide-financial-statements",
    title: "Reconciling fund balance to net position",
    format: "calculation",
    minutes: 12,
    scenario: ["Total fund balance of the City of Elmwood's governmental funds is $5,000,000. Use the information below to reconcile it to the net position of governmental activities."],
    exhibits: [
      {
        title: "Reconciling information",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Capital assets used in governmental activities, net of depreciation", "20,000,000"],
            ["General obligation bonds payable", "8,000,000"],
            ["Property taxes reported as deferred inflows because they were not available", "300,000"],
            ["Net position of the internal service fund, which serves governmental activities", "400,000"],
            ["Compensated absences not due and payable this year", "200,000"],
          ],
        },
      },
    ],
    instructions: "Enter each reconciling item as a positive number if it increases net position and a negative number if it decreases it, then the total.",
    columns: AMOUNT,
    rows: [
      row("Capital assets", num(20000000), "Capital assets are not current financial resources, so they are added."),
      row("Bonds payable", num(-8000000), "Long-term liabilities not due this year are deducted."),
      row("Unavailable property tax revenue", num(300000), "Under full accrual these taxes are revenue, so the deferred inflow is removed."),
      row("Internal service fund", num(400000), "Internal service funds serving governmental activities are included in governmental activities."),
      row("Compensated absences", num(-200000), "A long-term liability under full accrual."),
      row("Net position of governmental activities", num(17500000), "$5,000,000 + $20,000,000 − $8,000,000 + $300,000 + $400,000 − $200,000."),
    ],
    takeaway: "To get from fund balance to net position, add capital assets, deduct long-term liabilities, reverse deferrals that exist only because of availability, and add internal service funds that serve governmental activities.",
  },
];

export const barSimulations: Simulation[] = [...barSimulations1, ...barSimulations2];
