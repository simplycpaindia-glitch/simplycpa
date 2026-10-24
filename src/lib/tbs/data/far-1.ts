import type { Simulation } from "../types";
import { FAR_RESEARCH_INSTRUCTIONS, JE_COLUMNS, line, num, pick, ref, row } from "../build";

// FAR Area I: Financial Reporting.

const CHARACTERISTICS = [
  "Predictive value",
  "Confirmatory value",
  "Materiality",
  "Completeness",
  "Neutrality",
  "Free from error",
  "Comparability",
  "Verifiability",
  "Timeliness",
  "Understandability",
] as const;
const CHAR_GROUP = ["Fundamental: relevance", "Fundamental: faithful representation", "Enhancing"] as const;

const ELEMENTS = [
  "Asset",
  "Liability",
  "Revenue",
  "Expense",
  "Gain",
  "Loss",
  "Investment by owners",
  "Distribution to owners",
] as const;

const BS_CLASS = ["Current asset", "Noncurrent asset", "Current liability", "Noncurrent liability", "Equity"] as const;

const CF_CLASS = ["Operating", "Investing", "Financing", "Noncash: disclosed separately"] as const;

const SUBSEQUENT = ["Recognize (adjust the statements)", "Disclose only", "Neither adjust nor disclose"] as const;

const NFP_TREATMENT = [
  "Revenue: without donor restrictions",
  "Revenue: with donor restrictions",
  "Liability: refundable advance",
  "Liability: held for a specified beneficiary",
  "Not recognized",
] as const;

const FUNDS = [
  "General fund",
  "Special revenue fund",
  "Capital projects fund",
  "Debt service fund",
  "Permanent fund",
  "Enterprise fund",
  "Internal service fund",
  "Custodial fund",
  "Pension trust fund",
  "Private-purpose trust fund",
] as const;

const YES_NO = ["Yes", "No"] as const;
const SEGMENT_TEST = ["Revenue test", "Profit or loss test", "Assets test", "None"] as const;
const INTERIM = [
  "Recognize in full in the quarter it occurs",
  "Allocate across the quarters that benefit",
  "Apply the estimated annual effective tax rate",
  "Do not recognize at interim (expected to recover within the year)",
] as const;

export const farArea1: Simulation[] = [
  // ── Conceptual framework ──
  {
    slug: "qualitative-characteristics",
    subject: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    title: "Qualitative characteristics of useful information",
    format: "classification",
    minutes: 10,
    scenario: [
      "The audit committee of Harlow Corp. is reviewing a draft of the annual report. Its members wrote down what they liked about the information, and the controller has asked you to match each comment to the qualitative characteristic in the Financial Accounting Standards Board (FASB) conceptual framework that it describes.",
    ],
    instructions: "For each comment, select the qualitative characteristic it describes and whether that characteristic is fundamental or enhancing.",
    columns: ["Comment", "Characteristic", "Group"],
    rows: [
      row("Comparing last year's sales forecast with actual results lets readers confirm or correct their earlier expectations.", [pick(CHARACTERISTICS, "Confirmatory value"), pick(CHAR_GROUP, "Fundamental: relevance")], "Information that confirms or changes past evaluations has confirmatory value, one of the components of relevance."),
      row("Two independent analysts using the same method would reach close to the same inventory amount.", [pick(CHARACTERISTICS, "Verifiability"), pick(CHAR_GROUP, "Enhancing")], "Verifiability means knowledgeable, independent observers could reach consensus. It is an enhancing characteristic."),
      row("Harlow uses the same depreciation method as its competitors and has applied it consistently for years.", [pick(CHARACTERISTICS, "Comparability"), pick(CHAR_GROUP, "Enhancing")], "Comparability lets users identify similarities and differences between entities and periods. Consistency helps achieve it."),
      row("The report includes every description and explanation a reader needs to understand the lease obligations.", [pick(CHARACTERISTICS, "Completeness"), pick(CHAR_GROUP, "Fundamental: faithful representation")], "Completeness is one of the three components of faithful representation, with neutrality and freedom from error."),
      row("Nothing in the segment discussion is slanted or emphasized to make results look better.", [pick(CHARACTERISTICS, "Neutrality"), pick(CHAR_GROUP, "Fundamental: faithful representation")], "Neutral information is without bias in selection or presentation."),
      row("The report is released three weeks after year-end, in time to influence lenders' decisions.", [pick(CHARACTERISTICS, "Timeliness"), pick(CHAR_GROUP, "Enhancing")], "Timeliness means having information available to decision-makers in time to influence their decisions."),
      row("A $900 misposting was left uncorrected because it could not change any reader's decision for a company of Harlow's size.", [pick(CHARACTERISTICS, "Materiality"), pick(CHAR_GROUP, "Fundamental: relevance")], "Materiality is an entity-specific aspect of relevance: an item is material if omitting or misstating it could influence users' decisions."),
    ],
    takeaway: "Relevance (predictive value, confirmatory value, materiality) and faithful representation (complete, neutral, free from error) are fundamental. Comparability, verifiability, timeliness and understandability only enhance information that is already relevant and faithfully represented.",
  },
  {
    slug: "elements-of-financial-statements",
    subject: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    title: "Elements of financial statements",
    format: "classification",
    minutes: 8,
    scenario: [
      "Pinecrest Consulting Inc. earns its revenue from advisory engagements. A new bookkeeper has listed several of the year's items and is unsure which element of the financial statements each one represents.",
    ],
    instructions: "Select the element of financial statements that best describes each item.",
    columns: ["Item", "Element"],
    rows: [
      row("Consulting fees earned from clients during the year", pick(ELEMENTS, "Revenue"), "Fees from the entity's ongoing major or central operations are revenues."),
      row("Gain from selling an old delivery van for more than its carrying amount", pick(ELEMENTS, "Gain"), "Gains come from peripheral or incidental transactions. Selling a van is not Pinecrest's central operation."),
      row("Loss of office equipment in an uninsured flood", pick(ELEMENTS, "Loss"), "Losses are decreases in equity from peripheral or incidental transactions and other events, not from expenses or distributions to owners."),
      row("Salaries earned by staff consultants", pick(ELEMENTS, "Expense"), "Costs of carrying out the central operations are expenses."),
      row("Cash received from issuing new common shares", pick(ELEMENTS, "Investment by owners"), "Owners transferring resources to obtain an ownership interest is an investment by owners, not revenue."),
      row("Cash dividends declared to shareholders", pick(ELEMENTS, "Distribution to owners"), "Dividends decrease equity by transferring resources to owners. They are not an expense."),
      row("Fees collected in advance for an engagement that starts next year", pick(ELEMENTS, "Liability"), "Pinecrest has a present obligation to perform the work (or refund), so the advance is a liability until earned."),
      row("Insurance premium paid now for the next 12 months", pick(ELEMENTS, "Asset"), "Prepaid insurance is a present right to future coverage, so it is an asset until the coverage is used."),
    ],
    takeaway: "Revenues and expenses come from central operations; gains and losses from peripheral ones. Transactions with owners (investments and distributions) never pass through income.",
  },

  // ── Balance sheet and income statement ──
  {
    slug: "multi-step-income-statement",
    subject: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    title: "Building a multi-step income statement",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Marlow Industries is preparing its income statement for the year ended December 31. During the year it sold a product line that qualifies as a discontinued operation. Its income tax rate on all items is 25%.",
    ],
    exhibits: [
      {
        title: "Selected account balances",
        table: {
          head: ["Account", "Amount ($)"],
          rows: [
            ["Net sales", "1,200,000"],
            ["Cost of goods sold", "720,000"],
            ["Selling expenses", "110,000"],
            ["General and administrative expenses", "90,000"],
            ["Interest expense", "25,000"],
            ["Gain on sale of equipment", "15,000"],
            ["Loss from the discontinued product line, before tax", "40,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars. Treat the gain on sale of equipment and the interest expense as other income and expense, below operating income.",
    columns: ["Line item", "Amount ($)"],
    rows: [
      row("Gross profit", num(480000), "Net sales 1,200,000 − cost of goods sold 720,000 = 480,000."),
      row("Operating income", num(280000), "Gross profit 480,000 − selling 110,000 − general and administrative 90,000 = 280,000. The gain and interest come after operating income."),
      row("Income from continuing operations before income taxes", num(270000), "280,000 + gain 15,000 − interest 25,000 = 270,000."),
      row("Income tax expense on continuing operations", num(67500), "270,000 × 25% = 67,500."),
      row("Income from continuing operations", num(202500), "270,000 − 67,500 = 202,500."),
      row("Loss from discontinued operations, net of tax (enter as a positive amount)", num(30000), "40,000 × (1 − 25%) = 30,000. Discontinued operations are shown net of their own tax effect."),
      row("Net income", num(172500), "202,500 − 30,000 = 172,500."),
    ],
    takeaway: "Discontinued operations sit below income from continuing operations, net of their own tax (intraperiod tax allocation), so continuing operations are taxed on their own pretax income.",
  },
  {
    slug: "classified-balance-sheet",
    subject: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    title: "Classifying items on the balance sheet",
    format: "classification",
    minutes: 10,
    scenario: [
      "Dunmore Co. prepares a classified balance sheet at December 31, Year 1. Its operating cycle is shorter than one year. The financial statements will be issued on March 1, Year 2.",
    ],
    instructions: "Select where each item belongs on Dunmore's December 31, Year 1 balance sheet.",
    columns: ["Item", "Classification"],
    rows: [
      row("Debt securities held for trading", pick(BS_CLASS, "Current asset"), "Trading securities are held for sale in the near term, so they are current."),
      row("Cash set aside in a sinking fund to repay bonds that mature in Year 6", pick(BS_CLASS, "Noncurrent asset"), "Cash restricted for a noncurrent purpose is not available for current operations, so it is noncurrent."),
      row("A note payable due June 30, Year 2, refinanced with a five-year bank loan on February 10, Year 2", pick(BS_CLASS, "Noncurrent liability"), "A short-term obligation can be excluded from current liabilities if the company intends to refinance it long-term and shows the ability to do so, for example by actually refinancing it after year-end but before the statements are issued."),
      row("The portion of a long-term loan payable within the next 12 months", pick(BS_CLASS, "Current liability"), "The current portion of long-term debt will use current assets, so it is current."),
      row("Treasury stock", pick(BS_CLASS, "Equity"), "Treasury stock is a reduction of equity (a contra-equity account), never an asset."),
      row("Accumulated other comprehensive income", pick(BS_CLASS, "Equity"), "Accumulated other comprehensive income is a separate component of equity."),
      row("Fees received in advance for a six-month service contract", pick(BS_CLASS, "Current liability"), "Unearned revenue settled by performing within a year is a current liability."),
      row("Land held as the site for a future factory", pick(BS_CLASS, "Noncurrent asset"), "Land held for future use is a long-term investment, not property in current use and not current."),
    ],
    takeaway: "Classify by when an item will be settled or used. Short-term debt is noncurrent only if long-term refinancing is both intended and demonstrated before the statements are issued.",
  },

  // ── Statement of cash flows ──
  {
    slug: "indirect-method-operating-cash-flow",
    subject: "far",
    topic: "statement-of-cash-flows",
    title: "Operating cash flow under the indirect method",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Kestrel Corp. reported net income of $150,000 for the year. The controller has gathered the information below to prepare the operating section of the statement of cash flows using the indirect method.",
    ],
    exhibits: [
      {
        title: "Information for the year",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Depreciation expense", "40,000"],
            ["Amortization of a patent", "6,000"],
            ["Gain on sale of equipment", "10,000"],
            ["Increase in accounts receivable", "25,000"],
            ["Decrease in inventory", "15,000"],
            ["Increase in prepaid expenses", "5,000"],
            ["Increase in accounts payable", "12,000"],
            ["Decrease in income taxes payable", "4,000"],
          ],
        },
      },
    ],
    instructions: "Enter each adjustment to net income. Enter adjustments that increase cash as positive numbers and those that decrease cash as negative numbers.",
    columns: ["Adjustment", "Amount ($)"],
    rows: [
      row("Depreciation expense", num(40000), "Depreciation reduced net income but used no cash, so add it back."),
      row("Patent amortization", num(6000), "Amortization is also a noncash expense: add it back."),
      row("Gain on sale of equipment", num(-10000), "The gain is in net income, but the full sale proceeds are an investing inflow. Subtract the gain to avoid counting it twice."),
      row("Change in accounts receivable", num(-25000), "Receivables rose, so cash collected was less than revenue: subtract the increase."),
      row("Change in inventory", num(15000), "Inventory fell, so some cost of goods sold came from existing stock rather than new purchases: add the decrease."),
      row("Change in prepaid expenses", num(-5000), "Prepaids rose, so more cash was paid than expensed: subtract."),
      row("Change in accounts payable", num(12000), "Payables rose, so less cash was paid to suppliers than was expensed: add."),
      row("Change in income taxes payable", num(-4000), "Taxes payable fell, so more cash was paid than expensed: subtract."),
      row("Net cash provided by operating activities", num(179000), "150,000 + 40,000 + 6,000 − 10,000 − 25,000 + 15,000 − 5,000 + 12,000 − 4,000 = 179,000."),
    ],
    takeaway: "Current asset increases reduce operating cash; current liability increases add to it. Noncash expenses are added back and gains on investing activities are subtracted.",
  },
  {
    slug: "classifying-cash-flows",
    subject: "far",
    topic: "statement-of-cash-flows",
    title: "Classifying cash flows",
    format: "classification",
    minutes: 10,
    scenario: [
      "Alder Manufacturing prepares its statement of cash flows under US Generally Accepted Accounting Principles (GAAP). The assistant controller has listed the year's transactions below.",
    ],
    instructions: "Select how each transaction is reported in Alder's statement of cash flows.",
    columns: ["Transaction", "Classification"],
    rows: [
      row("Interest paid on bonds payable", pick(CF_CLASS, "Operating"), "Under US GAAP, interest paid is an operating cash flow, even though the bonds themselves are financing."),
      row("Dividends paid to Alder's shareholders", pick(CF_CLASS, "Financing"), "Dividends paid are distributions to owners: financing."),
      row("Dividends received on an equity investment", pick(CF_CLASS, "Operating"), "Under US GAAP, dividends and interest received are operating inflows."),
      row("Cash purchase of production equipment", pick(CF_CLASS, "Investing"), "Buying long-lived assets is investing."),
      row("Common stock issued in exchange for land", pick(CF_CLASS, "Noncash: disclosed separately"), "No cash changed hands. Significant noncash investing and financing activities are disclosed, not shown in the statement's sections."),
      row("Repayment of the principal on a bank loan", pick(CF_CLASS, "Financing"), "Borrowing and repaying principal are financing."),
      row("Purchase of securities acquired specifically for trading", pick(CF_CLASS, "Operating"), "Cash flows for securities bought and held for trading purposes are classified by their nature, which is operating."),
      row("Proceeds from selling a warehouse", pick(CF_CLASS, "Investing"), "Selling long-lived assets is investing. The full proceeds go here, not just the gain."),
      row("Conversion of bonds payable into common stock", pick(CF_CLASS, "Noncash: disclosed separately"), "A conversion exchanges debt for equity with no cash, so it is a noncash financing activity."),
    ],
    takeaway: "Under US GAAP, interest paid, interest received and dividends received are operating cash flows. Only dividends paid are financing.",
  },

  // ── Notes, subsequent events and going concern ──
  {
    slug: "subsequent-events",
    subject: "far",
    topic: "notes-subsequent-events-and-going-concern",
    title: "Recognized or nonrecognized subsequent events",
    format: "classification",
    minutes: 10,
    scenario: [
      "Brightwater Inc. (not a public company filing with the Securities and Exchange Commission) has a December 31, Year 1 year-end. Its financial statements were available to be issued on March 10, Year 2. The events below happened after year-end.",
    ],
    instructions: "Select how each event affects the Year 1 financial statements.",
    columns: ["Event", "Treatment"],
    rows: [
      row("January 20: a customer that owed Brightwater $80,000 at year-end filed for bankruptcy because of financial problems that had built up over Year 1.", pick(SUBSEQUENT, "Recognize (adjust the statements)"), "The condition (the customer's weak finances) existed at the balance sheet date, so the allowance is adjusted."),
      row("February 5: a lawsuit filed in Year 1 was settled for $50,000 more than the amount accrued.", pick(SUBSEQUENT, "Recognize (adjust the statements)"), "The settlement gives evidence about a condition that existed at year-end, so the accrual is adjusted."),
      row("February 12: a fire destroyed one of Brightwater's warehouses.", pick(SUBSEQUENT, "Disclose only"), "The fire is a new condition arising after year-end. If significant, it is disclosed but does not change Year 1 amounts."),
      row("February 20: Brightwater issued $5 million of bonds.", pick(SUBSEQUENT, "Disclose only"), "Issuing debt after year-end is a nonrecognized event that may need disclosure."),
      row("February 25: inventory held at year-end was sold well below cost, confirming its value had already fallen by December 31.", pick(SUBSEQUENT, "Recognize (adjust the statements)"), "The sale is evidence of a decline in net realizable value that existed at year-end, so inventory is written down."),
      row("February 28: the market value of Brightwater's investments fell because of a market downturn in February.", pick(SUBSEQUENT, "Disclose only"), "A market decline after year-end reflects new conditions, so it is not recognized."),
      row("March 25: a major customer went bankrupt.", pick(SUBSEQUENT, "Neither adjust nor disclose"), "The event occurred after the statements were available to be issued, which ends the subsequent events period."),
    ],
    takeaway: "Ask whether the condition existed at the balance sheet date. If yes, adjust; if it arose afterwards, disclose when significant. Events after the statements are issued (or available to be issued) are outside the period.",
  },
  {
    slug: "research-notes-and-subsequent-events",
    subject: "far",
    topic: "notes-subsequent-events-and-going-concern",
    title: "Research: disclosures, subsequent events and going concern",
    format: "research",
    minutes: 15,
    scenario: [
      "You are reviewing the draft notes to the financial statements of Holloway Retail. The partner has asked you to find the guidance behind four points so the file shows where each requirement comes from.",
    ],
    instructions: FAR_RESEARCH_INSTRUCTIONS,
    columns: ["Question", "Codification reference"],
    rows: [
      row("Which paragraph requires an entity to recognize in its financial statements the effects of subsequent events that provide additional evidence about conditions that existed at the balance sheet date?", ref("855-10-25-1"), "ASC 855-10-25-1 covers recognized subsequent events."),
      row("Which paragraph says an entity shall not recognize subsequent events that provide evidence about conditions that did not exist at the balance sheet date?", ref("855-10-25-3"), "ASC 855-10-25-3 covers nonrecognized subsequent events."),
      row("Which paragraph requires management to evaluate whether there is substantial doubt about the entity's ability to continue as a going concern within one year after the statements are issued (or available to be issued)?", ref("205-40-50-1"), "ASC 205-40-50-1 sets out management's going concern evaluation."),
      row("Which paragraph requires a description of all significant accounting policies to be disclosed as part of the financial statements?", ref("235-10-50-1"), "ASC 235-10-50-1 requires disclosure of significant accounting policies."),
    ],
    takeaway: "Learn the Topic numbers by heart: 855 subsequent events, 205-40 going concern, 235 notes to financial statements, 450 contingencies. Finding the Topic quickly is half of any research task.",
  },

  // ── Not-for-profit ──
  {
    slug: "nfp-contributions",
    subject: "far",
    topic: "not-for-profit-accounting",
    title: "Recognizing contributions at a not-for-profit",
    format: "classification",
    minutes: 10,
    scenario: [
      "Riverside Arts Museum is a private not-for-profit (NFP) organization. Its development office has recorded the gifts and promises below during the year and wants to know how each should be reported.",
    ],
    instructions: "Select how Riverside should report each item in the current year.",
    columns: ["Item", "Treatment"],
    rows: [
      row("A $25,000 cash gift with no donor stipulations", pick(NFP_TREATMENT, "Revenue: without donor restrictions"), "An unconditional gift with no restrictions is contribution revenue without donor restrictions when received."),
      row("An unconditional pledge of $40,000, payable next year, to fund an education program", pick(NFP_TREATMENT, "Revenue: with donor restrictions"), "Unconditional promises are recognized when made. The purpose (and the timing) make it revenue with donor restrictions."),
      row("A promise of $50,000 if the museum raises $50,000 in matching gifts by year-end; no matching gifts raised yet, no cash received", pick(NFP_TREATMENT, "Not recognized"), "A conditional promise (a barrier plus a right of release) is not recognized until the condition is met."),
      row("The same matching-gift promise, but the donor paid the $50,000 in advance", pick(NFP_TREATMENT, "Liability: refundable advance"), "Cash received under an unmet condition is a refundable advance (liability) until the condition is met."),
      row("A volunteer accountant prepares the year's accounting records free of charge, a service the museum would otherwise pay for", pick(NFP_TREATMENT, "Revenue: without donor restrictions"), "Contributed services that need specialized skills, are provided by people with those skills and would otherwise be purchased are recognized."),
      row("Volunteers staff the annual fundraising phone drive", pick(NFP_TREATMENT, "Not recognized"), "These services need no specialized skills and do not create or enhance a nonfinancial asset, so they are not recognized."),
      row("A $100,000 gift that the donor requires to be held in perpetuity, with the income usable for any purpose", pick(NFP_TREATMENT, "Revenue: with donor restrictions"), "Endowment gifts to be held in perpetuity are net assets with donor restrictions."),
      row("$10,000 received that must be passed to a named food bank, with no power for Riverside to redirect it", pick(NFP_TREATMENT, "Liability: held for a specified beneficiary"), "Without variance power, Riverside is only an agent or intermediary, so it records a liability, not revenue."),
    ],
    takeaway: "Unconditional promises are recognized when made; conditional ones wait until the barrier is overcome. Restrictions decide the net asset class, not whether revenue is recognized.",
  },
  {
    slug: "nfp-statement-of-activities",
    subject: "far",
    topic: "not-for-profit-accounting",
    title: "Net assets in the statement of activities",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Greenfield Community Services is a private not-for-profit organization. At the start of the year it had net assets without donor restrictions of $400,000 and net assets with donor restrictions of $250,000.",
    ],
    exhibits: [
      {
        title: "Activity for the year",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Contributions with no donor restrictions", "300,000"],
            ["Contributions restricted by donors to the youth program", "120,000"],
            ["Amounts spent on the youth program from restricted contributions", "90,000"],
            ["Program service expenses (including the youth program spending above)", "330,000"],
            ["Management and general, and fundraising expenses", "80,000"],
            ["Investment income, no donor restrictions", "35,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars. Enter a decrease as a negative number.",
    columns: ["Item", "Amount ($)"],
    rows: [
      row("Net assets released from restrictions", num(90000), "Spending restricted gifts for their purpose releases them: 90,000 moves from with to without donor restrictions."),
      row("Total expenses reported", num(410000), "Program 330,000 + support 80,000 = 410,000. All expenses are reported in net assets without donor restrictions."),
      row("Change in net assets without donor restrictions", num(15000), "300,000 + 35,000 + 90,000 released − 410,000 = 15,000."),
      row("Ending net assets without donor restrictions", num(415000), "400,000 + 15,000 = 415,000."),
      row("Change in net assets with donor restrictions", num(30000), "120,000 − 90,000 released = 30,000."),
      row("Ending total net assets", num(695000), "415,000 + (250,000 + 30,000) = 695,000."),
    ],
    takeaway: "Expenses always reduce net assets without donor restrictions. Restricted money reaches that class through a release when the restriction is met.",
  },

  // ── Governmental ──
  {
    slug: "general-fund-journal-entries",
    subject: "far",
    topic: "governmental-accounting",
    title: "General fund journal entries",
    format: "journal-entry",
    minutes: 15,
    scenario: [
      "The City of Ashby records the following transactions in its general fund, which uses the modified accrual basis of accounting.",
      "1. The city levies property taxes of $1,000,000 for the current year. It expects 2% to be uncollectible, and the rest to be collected during the year or soon enough after it to pay current-year bills.",
      "2. The city collects $700,000 of the property taxes.",
      "3. The general fund transfers $150,000 to the debt service fund for the year's bond payments.",
      "4. The police department buys a patrol car for $40,000 cash.",
    ],
    instructions: "Enter the debit or credit amount for each account in the general fund. Leave the unused side blank.",
    columns: JE_COLUMNS,
    rows: [
      line("1. Property taxes receivable", 1000000, 0, "The full levy is recorded as a receivable."),
      line("1. Allowance for uncollectible property taxes", 0, 20000, "2% × 1,000,000 = 20,000 is not expected to be collected."),
      line("1. Property tax revenues", 0, 980000, "Revenue is the amount expected to be collected and available: 1,000,000 − 20,000."),
      line("2. Cash", 700000, 0, "Collections increase cash."),
      line("2. Property taxes receivable", 0, 700000, "Collections reduce the receivable."),
      line("3. Transfers out (other financing uses)", 150000, 0, "Transfers between funds are other financing uses, not expenditures."),
      line("3. Cash", 0, 150000, "Cash leaves the general fund."),
      line("4. Expenditures", 40000, 0, "Governmental funds record capital purchases as expenditures. The car appears as a capital asset only in the government-wide statements."),
      line("4. Cash", 0, 40000, "Cash paid for the car."),
    ],
    takeaway: "Governmental funds focus on current financial resources: buying a capital asset is an expenditure, and transfers are other financing sources or uses, not revenues or expenditures.",
  },
  {
    slug: "choosing-the-fund",
    subject: "far",
    topic: "governmental-accounting",
    title: "Choosing the right fund",
    format: "classification",
    minutes: 10,
    scenario: [
      "The County of Merritt is reorganizing its accounting records. The finance director has listed activities and asked which fund should account for each.",
    ],
    instructions: "Select the fund that should account for each activity.",
    columns: ["Activity", "Fund"],
    rows: [
      row("Police and fire department salaries", pick(FUNDS, "General fund"), "Ordinary government operations not required to be accounted for elsewhere go in the general fund."),
      row("Gasoline tax revenues legally restricted to road maintenance", pick(FUNDS, "Special revenue fund"), "Specific revenue sources restricted or committed to a purpose other than debt service or capital projects go in a special revenue fund."),
      row("Construction of a new county courthouse financed by bond proceeds", pick(FUNDS, "Capital projects fund"), "Resources used to acquire or build major capital facilities go in a capital projects fund."),
      row("Resources accumulated to pay principal and interest on general obligation bonds", pick(FUNDS, "Debt service fund"), "Debt service funds account for resources for general long-term debt principal and interest."),
      row("An endowment whose earnings, but not principal, may be used to maintain the public cemetery", pick(FUNDS, "Permanent fund"), "Permanent funds hold resources where only earnings can be spent, for the government's own programs."),
      row("The county water utility, which charges residents for water", pick(FUNDS, "Enterprise fund"), "Activities that charge fees to external users for goods or services are enterprise funds."),
      row("A central vehicle pool that charges other county departments for vehicle use", pick(FUNDS, "Internal service fund"), "Activities that provide goods or services mainly to other departments on a cost-reimbursement basis are internal service funds."),
      row("Property taxes collected on behalf of the independent school district", pick(FUNDS, "Custodial fund"), "Resources held for another government, not in a trust, go in a custodial fund."),
      row("The retirement plan for county employees", pick(FUNDS, "Pension trust fund"), "Pension plan assets held in trust go in a pension (and other employee benefit) trust fund."),
      row("A trust whose earnings pay scholarships to children of specific individuals", pick(FUNDS, "Private-purpose trust fund"), "Trusts that benefit individuals, private organizations or other governments go in a private-purpose trust fund."),
    ],
    takeaway: "Ask who benefits. The government's own programs: governmental funds (and permanent funds for endowments). Fee-based services: proprietary funds. Others' resources: fiduciary funds.",
  },

  // ── SEC reporting, segments and interim ──
  {
    slug: "reportable-segments",
    subject: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    title: "Identifying reportable segments",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Corvan Holdings, a public company, has five operating segments. The chief operating decision maker reviews each one separately. Amounts are in thousands of dollars, and revenue includes sales to other segments.",
    ],
    exhibits: [
      {
        title: "Segment information ($ thousands)",
        table: {
          head: ["Segment", "Revenue", "Profit (loss)", "Assets"],
          rows: [
            ["A", "5,000", "900", "6,000"],
            ["B", "1,800", "(300)", "1,500"],
            ["C", "600", "160", "800"],
            ["D", "400", "(40)", "2,100"],
            ["E", "700", "40", "600"],
            ["Total", "8,500", "", "11,000"],
          ],
        },
      },
    ],
    instructions: "For each segment, select whether it is reportable and the first 10% test it meets. Check the revenue test first, then profit or loss, then assets.",
    columns: ["Segment", "Reportable?", "First test met"],
    rows: [
      row("Segment A", [pick(YES_NO, "Yes"), pick(SEGMENT_TEST, "Revenue test")], "10% of combined revenue is 850. A's 5,000 passes."),
      row("Segment B", [pick(YES_NO, "Yes"), pick(SEGMENT_TEST, "Revenue test")], "B's revenue of 1,800 is over 850, so it passes the first test."),
      row("Segment C", [pick(YES_NO, "Yes"), pick(SEGMENT_TEST, "Profit or loss test")], "Revenue 600 fails. Profits of profitable segments total 1,100 and losses total 340, so the threshold is 10% of the larger, 110. C's profit of 160 passes."),
      row("Segment D", [pick(YES_NO, "Yes"), pick(SEGMENT_TEST, "Assets test")], "Revenue 400 and loss 40 fail, but assets of 2,100 are over 10% of 11,000 (1,100)."),
      row("Segment E", [pick(YES_NO, "No"), pick(SEGMENT_TEST, "None")], "Revenue 700 < 850, profit 40 < 110, assets 600 < 1,100: E fails all three tests."),
    ],
    takeaway: "A segment is reportable if it meets any one 10% test. For profit or loss, compare its absolute amount with 10% of the greater of total profits or total losses. Then check that reportable segments cover at least 75% of external revenue.",
  },
  {
    slug: "interim-reporting",
    subject: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    title: "Costs and taxes in interim reports",
    format: "classification",
    minutes: 10,
    scenario: [
      "Fenwick Corp. publishes quarterly financial statements. Under US Generally Accepted Accounting Principles (GAAP), each quarter is treated as an integral part of the year. The controller has listed items from the first half of the year.",
    ],
    instructions: "Select how each item is reported in Fenwick's quarterly statements.",
    columns: ["Item", "Treatment"],
    rows: [
      row("The full year's property tax, paid in the first quarter", pick(INTERIM, "Allocate across the quarters that benefit"), "Costs that clearly benefit the whole year are allocated across the interim periods."),
      row("Annual major repairs to the plant, done in the first quarter", pick(INTERIM, "Allocate across the quarters that benefit"), "Annual major repairs are the classic example of a cost allocated across the quarters that benefit."),
      row("A loss on settling a lawsuit in the second quarter", pick(INTERIM, "Recognize in full in the quarter it occurs"), "A loss that does not relate to other quarters is recognized in full when it occurs."),
      row("Income tax expense for the second quarter", pick(INTERIM, "Apply the estimated annual effective tax rate"), "Interim tax expense uses the best estimate of the annual effective rate applied to year-to-date income."),
      row("A first-quarter drop in inventory market prices that is expected to recover before year-end", pick(INTERIM, "Do not recognize at interim (expected to recover within the year)"), "A temporary decline expected to be restored within the year need not be recognized at interim."),
      row("A gain on selling a division in the second quarter", pick(INTERIM, "Recognize in full in the quarter it occurs"), "Gains and losses of this kind are not spread over the year."),
    ],
    takeaway: "Interim periods are part of the year: spread costs that benefit several quarters, use the annual effective tax rate, and recognize one-off gains and losses in full when they happen.",
  },
];
