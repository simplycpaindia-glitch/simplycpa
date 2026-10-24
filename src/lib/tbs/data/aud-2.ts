import type { Simulation } from "../types";
import { num, pick, ref, row } from "../build";

// AUD Area III (further procedures and evidence) and Area IV (conclusions and reporting).

const YES_NO = ["Yes", "No"] as const;
const PROCEDURE = ["Test of controls", "Substantive test of details", "Substantive analytical procedure"] as const;
const DIRECTION = ["Vouching (from the records to the documents)", "Tracing (from the documents to the records)"] as const;
const DIR_ASSERTION = ["Existence or occurrence", "Completeness"] as const;
const ASSERTIONS = [
  "Existence",
  "Completeness",
  "Rights and obligations",
  "Valuation and allocation",
  "Cutoff",
  "Classification",
  "Presentation",
] as const;
const ESTIMATE_APPROACH = [
  "Use events occurring up to the auditor's report date",
  "Test how management made the estimate",
  "Develop an auditor's point estimate or range",
] as const;
const GC = ["Adverse condition or event", "Management plan that may mitigate", "Neither"] as const;
const IT_LEVEL = ["General information technology control", "Application control"] as const;
const APP_CONTROL = [
  "Limit (reasonableness) check",
  "Validity check",
  "Completeness check",
  "Check digit",
  "Hash total",
  "Field (format) check",
  "Record count",
  "Sequence check",
] as const;
const OTHERS = ["Component auditor", "Internal audit function", "Auditor's specialist", "Management's specialist"] as const;
const COMMUNICATE = [
  "To those charged with governance",
  "In writing to management and those charged with governance",
  "To management (orally or in writing)",
  "Not required",
] as const;
const OPINION = ["Unmodified", "Unmodified, with an emphasis-of-matter paragraph", "Qualified", "Adverse", "Disclaimer of opinion"] as const;
const ENGAGEMENT = ["Audit", "Review", "Compilation", "Preparation of financial statements", "Agreed-upon procedures"] as const;
const REVIEW_PROC = ["Typically performed in a review", "Not required in a review"] as const;

export const audArea34: Simulation[] = [
  // ── Responding to assessed risks ──
  {
    slug: "tests-of-controls-or-substantive",
    subject: "aud",
    topic: "responding-to-assessed-risks",
    title: "Tests of controls or substantive procedures?",
    format: "classification",
    minutes: 10,
    scenario: [
      "The audit plan for Ridley Components lists the further audit procedures below. The manager wants each one labeled correctly so the team knows what evidence it gives.",
    ],
    instructions: "Select the type of procedure.",
    columns: ["Procedure", "Type"],
    rows: [
      row("Inspect a sample of purchase orders for a manager's approval", pick(PROCEDURE, "Test of controls"), "It tests whether the approval control operated."),
      row("Reperform the client's monthly bank reconciliation control for selected months", pick(PROCEDURE, "Test of controls"), "Reperformance of a control gives evidence that the control operates effectively."),
      row("Ask staff how cash receipts are handled and observe the process being performed", pick(PROCEDURE, "Test of controls"), "Inquiry combined with observation tests the control (inquiry alone is not enough)."),
      row("Send confirmation requests to customers for their year-end balances", pick(PROCEDURE, "Substantive test of details"), "It gives direct evidence about the balance (existence)."),
      row("Vouch a sample of recorded sales to shipping documents", pick(PROCEDURE, "Substantive test of details"), "It tests the occurrence of recorded sales."),
      row("Recalculate depreciation expense for the year", pick(PROCEDURE, "Substantive test of details"), "Recalculation tests the accuracy of the amount."),
      row("Compare payroll expense with headcount multiplied by average pay, and investigate differences", pick(PROCEDURE, "Substantive analytical procedure"), "Developing an expectation from relationships in the data is a substantive analytical procedure."),
    ],
    takeaway: "Tests of controls ask whether a control worked; substantive procedures ask whether the amount is right. Inquiry alone is never enough evidence that a control operates.",
  },
  {
    slug: "vouching-and-tracing",
    subject: "aud",
    topic: "responding-to-assessed-risks",
    title: "Vouching and tracing: direction of testing",
    format: "classification",
    minutes: 10,
    scenario: [
      "On the audit of Stanmore Foods, the staff auditor has listed procedures but not the assertion each one tests. The direction of the test tells you which assertion it addresses.",
    ],
    instructions: "For each procedure, select the direction of testing and the assertion it mainly tests.",
    columns: ["Procedure", "Direction", "Assertion"],
    rows: [
      row("Select recorded sales invoices and examine the related shipping documents", [pick(DIRECTION, "Vouching (from the records to the documents)"), pick(DIR_ASSERTION, "Existence or occurrence")], "Starting from the records checks that recorded sales really happened."),
      row("Select shipping documents and find the related invoices in the sales journal", [pick(DIRECTION, "Tracing (from the documents to the records)"), pick(DIR_ASSERTION, "Completeness")], "Starting from the source documents checks that every shipment was recorded."),
      row("Select receiving reports from late December and find the related recorded payables", [pick(DIRECTION, "Tracing (from the documents to the records)"), pick(DIR_ASSERTION, "Completeness")], "This looks for goods received but not recorded as liabilities."),
      row("Select recorded payables and examine supplier invoices and receiving reports", [pick(DIRECTION, "Vouching (from the records to the documents)"), pick(DIR_ASSERTION, "Existence or occurrence")], "This checks that recorded liabilities are real. (For payables, completeness is usually the bigger risk.)"),
      row("Select recorded additions to equipment and inspect the purchase invoices", [pick(DIRECTION, "Vouching (from the records to the documents)"), pick(DIR_ASSERTION, "Existence or occurrence")], "This checks that recorded additions exist."),
      row("Select employee time cards and find them in the payroll register", [pick(DIRECTION, "Tracing (from the documents to the records)"), pick(DIR_ASSERTION, "Completeness")], "This checks that all hours worked were recorded."),
    ],
    takeaway: "Vouching (records → documents) tests existence or occurrence, the risk of overstatement. Tracing (documents → records) tests completeness, the risk of understatement.",
  },

  // ── Audit sampling ──
  {
    slug: "attribute-sampling-evaluation",
    subject: "aud",
    topic: "audit-sampling",
    title: "Evaluating an attribute sample",
    format: "calculation",
    minutes: 12,
    scenario: [
      "To test whether sales invoices are approved before goods ship at Whitcombe Tools, the auditor selected 100 invoices. The tolerable deviation rate is 6% and the planned confidence level is 95%. The auditor found 3 invoices without approval.",
    ],
    exhibits: [
      {
        title: "Upper deviation limit, 95% confidence, sample of 100",
        table: {
          head: ["Deviations found", "Upper deviation limit"],
          rows: [
            ["0", "3.0%"],
            ["1", "4.7%"],
            ["2", "6.2%"],
            ["3", "7.6%"],
            ["4", "9.0%"],
          ],
        },
      },
    ],
    instructions: "Enter percentages as numbers (for example, enter 3 for 3%), and answer the questions.",
    columns: ["Item", "Answer"],
    rows: [
      row("Sample deviation rate (%)", num(3, 0.05), "3 deviations ÷ 100 items = 3%."),
      row("Upper deviation limit (%)", num(7.6, 0.05), "From the table, 3 deviations in a sample of 100 gives 7.6%."),
      row("Allowance for sampling risk (%)", num(4.6, 0.05), "Upper deviation limit 7.6% − sample rate 3% = 4.6%."),
      row("Does the sample support the planned reliance on the control?", pick(YES_NO, "No"), "The upper deviation limit (7.6%) exceeds the tolerable rate (6%)."),
      row(
        "What should the auditor do next?",
        pick(["Assess control risk higher and increase substantive procedures", "Reduce substantive procedures", "Ignore the deviations because the sample rate is below 6%"], "Assess control risk higher and increase substantive procedures"),
        "With less reliance on the control, more substantive evidence is needed. Comparing the sample rate alone with the tolerable rate ignores sampling risk.",
      ),
      row("Would the sample support reliance if only 1 deviation had been found?", pick(YES_NO, "Yes"), "The upper deviation limit would be 4.7%, below the 6% tolerable rate."),
    ],
    takeaway: "Compare the upper deviation limit, not the sample rate, with the tolerable rate. The gap between them is the allowance for sampling risk.",
  },
  {
    slug: "monetary-unit-sampling",
    subject: "aud",
    topic: "audit-sampling",
    title: "Monetary unit sampling: interval and projected misstatement",
    format: "calculation",
    minutes: 15,
    scenario: [
      "The auditor of Galloway Medical is testing accounts receivable for overstatement with monetary unit sampling (MUS). The recorded balance is $1,000,000, tolerable misstatement is $50,000, and no misstatement is expected. The reliability factor for zero misstatements at the chosen confidence level is 3.0.",
      "The sample found two misstatements: an account recorded at $5,000 that should be $4,000, and an account recorded at $25,000 that should be $24,000.",
    ],
    instructions: "Round dollar amounts to the nearest dollar. Enter the tainting percentage as a number (for example, 20 for 20%).",
    columns: ["Item", "Answer"],
    rows: [
      row("Sampling interval ($)", num(16667, 1), "Tolerable misstatement ÷ reliability factor = 50,000 ÷ 3.0 = 16,667."),
      row("Sample size", num(60), "Recorded amount ÷ sampling interval = 1,000,000 ÷ 16,667 = 60."),
      row("Tainting percentage for the $5,000 account (%)", num(20, 0.05), "Misstatement 1,000 ÷ recorded amount 5,000 = 20%."),
      row("Projected misstatement for the $5,000 account ($)", num(3333, 1), "Its recorded amount is below the interval, so project it: 20% × 16,667 = 3,333."),
      row("Projected misstatement for the $25,000 account ($)", num(1000), "Its recorded amount is above the interval, so it was certain to be selected: the actual misstatement, 1,000, is used with no projection."),
      row("Total projected misstatement ($)", num(4333, 2), "3,333 + 1,000 = 4,333. The auditor then adds an allowance for sampling risk to reach the upper misstatement limit."),
    ],
    takeaway: "Monetary unit sampling favors large items. Items smaller than the interval are projected by their tainting percentage × the interval; items at or above it count at their actual misstatement.",
  },

  // ── Evidence ──
  {
    slug: "matching-procedures-to-assertions",
    subject: "aud",
    topic: "evidence-types-and-procedures",
    title: "Matching procedures to assertions",
    format: "classification",
    minutes: 10,
    scenario: [
      "The audit program for Pembury Building Supplies lists the substantive procedures below. Identify the main assertion each one tests.",
    ],
    instructions: "Select the assertion each procedure mainly tests.",
    columns: ["Procedure", "Assertion"],
    rows: [
      row("Confirm customer balances directly with customers", pick(ASSERTIONS, "Existence"), "A confirmation shows the receivable exists. It is weaker evidence for valuation, because customers may confirm debts they won't pay."),
      row("Examine cash payments made in the weeks after year-end for liabilities that should have been recorded", pick(ASSERTIONS, "Completeness"), "This is the search for unrecorded liabilities."),
      row("Review the aging and collections after year-end to evaluate the allowance for doubtful accounts", pick(ASSERTIONS, "Valuation and allocation"), "This tests whether receivables are stated at the amount expected to be collected."),
      row("Examine shipping documents for the last few days of the year and the first few of the next", pick(ASSERTIONS, "Cutoff"), "This tests that sales were recorded in the right period."),
      row("Inspect title documents for the company's delivery trucks", pick(ASSERTIONS, "Rights and obligations"), "Title shows the company owns the assets."),
      row("Select items on the inventory listing and find them in the warehouse", pick(ASSERTIONS, "Existence"), "Going from the records to the physical items tests existence."),
      row("Review repairs expense for items that should have been capitalized", pick(ASSERTIONS, "Classification"), "This tests that transactions are recorded in the proper accounts."),
      row("Read the debt agreements and check that the notes describe the terms and covenants", pick(ASSERTIONS, "Presentation"), "This tests that disclosures are appropriate and understandable."),
    ],
    takeaway: "Know the direction: records → evidence tests existence; evidence → records tests completeness. Valuation needs evidence about amounts, not just existence.",
  },
  {
    slug: "reliability-of-evidence",
    subject: "aud",
    topic: "evidence-types-and-procedures",
    title: "Which evidence is more reliable?",
    format: "classification",
    minutes: 8,
    scenario: [
      "A first-year staff auditor on the audit of Corwin Hotels asks which source of evidence to rely on in several situations.",
    ],
    instructions: "For each pair, select the more reliable evidence.",
    columns: ["Pair", "More reliable"],
    rows: [
      row("Cash balance", pick(["A bank confirmation sent directly to the auditor", "A bank statement provided by the client"], "A bank confirmation sent directly to the auditor"), "Evidence the auditor obtains directly from an independent source is more reliable."),
      row("Depreciation expense", pick(["The client's depreciation schedule", "The auditor's own recalculation"], "The auditor's own recalculation"), "Evidence the auditor obtains directly is more reliable than evidence produced by the client."),
      row("Obsolete inventory", pick(["Inquiry of the warehouse manager", "The auditor's observation of damaged goods during the count"], "The auditor's observation of damaged goods during the count"), "Direct observation is more reliable than inquiry, which on its own is weak."),
      row("Supplies purchases", pick(["A supplier's invoice in the client's files", "A purchase requisition prepared by the client"], "A supplier's invoice in the client's files"), "Documents from outside the entity are more reliable than those created inside it."),
      row("Contract terms", pick(["The original signed contract", "A scanned copy emailed by the client"], "The original signed contract"), "Original documents are more reliable than copies."),
      row("A customer's balance", pick(["A written representation from management", "A confirmation from the customer"], "A confirmation from the customer"), "Management representations complement other evidence but are not a substitute for it."),
      row(
        "The same sales documents, from two clients",
        pick(["The client whose internal controls are effective", "The client whose internal controls are ineffective"], "The client whose internal controls are effective"),
        "Evidence produced internally is more reliable when the related controls are effective.",
      ),
    ],
    takeaway: "More reliable: from independent outside sources, obtained directly by the auditor, documentary, original, and produced under effective controls.",
  },

  // ── Analytical procedures ──
  {
    slug: "analytical-ratios",
    subject: "aud",
    topic: "analytical-procedures",
    title: "Planning analytics: gross margin and days' sales in receivables",
    format: "calculation",
    minutes: 12,
    scenario: [
      "As part of risk assessment for Ingleby Housewares, you compare this year's unaudited figures with last year's audited figures.",
    ],
    exhibits: [
      {
        title: "Selected figures ($)",
        table: {
          head: ["Item", "This year (unaudited)", "Last year (audited)"],
          rows: [
            ["Net sales", "5,000,000", "4,500,000"],
            ["Cost of goods sold", "3,500,000", "2,925,000"],
            ["Accounts receivable, year-end", "900,000", "600,000"],
          ],
        },
      },
    ],
    instructions: "Enter gross margin as a whole-number percentage and days' sales in receivables to one decimal place (use year-end receivables and 365 days). Then answer the questions.",
    columns: ["Item", "Answer"],
    rows: [
      row("Gross margin this year (%)", num(30, 0.05), "(5,000,000 − 3,500,000) ÷ 5,000,000 = 30%."),
      row("Gross margin last year (%)", num(35, 0.05), "(4,500,000 − 2,925,000) ÷ 4,500,000 = 35%."),
      row("Days' sales in receivables this year", num(65.7, 0.15), "900,000 ÷ 5,000,000 × 365 = 65.7 days."),
      row("Days' sales in receivables last year", num(48.7, 0.15), "600,000 ÷ 4,500,000 × 365 = 48.7 days."),
      row(
        "Which misstatement would be consistent with the fall in gross margin?",
        pick(["Ending inventory overstated", "Ending inventory understated", "Purchases recorded too low"], "Ending inventory understated"),
        "Understated ending inventory overstates cost of goods sold, lowering gross margin. The other two would raise it.",
      ),
      row(
        "Which area most needs extra attention given the trend in receivables?",
        pick(["Collectibility (the allowance for doubtful accounts)", "Cash cutoff", "Classification of long-term debt"], "Collectibility (the allowance for doubtful accounts)"),
        "Customers are taking 17 days longer to pay, which raises the risk that receivables are overstated or uncollectible.",
      ),
    ],
    takeaway: "Planning analytics flag where to look. Unexpected changes are risks to investigate, not answers, until corroborated by evidence.",
  },
  {
    slug: "analytical-procedures-in-the-audit",
    subject: "aud",
    topic: "analytical-procedures",
    title: "Analytical procedures through the audit",
    format: "classification",
    minutes: 8,
    scenario: [
      "A staff auditor at Mendel & Rowe asks when analytical procedures are required and what makes them effective. Answer each question for the audit of a private company.",
    ],
    instructions: "Select the best answer to each question.",
    columns: ["Question", "Answer"],
    rows: [
      row("Analytical procedures during risk assessment (planning) are:", pick(["Required", "Optional"], "Required"), "Analytical procedures are required as risk assessment procedures."),
      row("Analytical procedures used as substantive procedures are:", pick(["Required", "Optional"], "Optional"), "Substantive analytical procedures are a choice the auditor may make in response to assessed risks."),
      row("Analytical procedures near the end of the audit, to form an overall conclusion, are:", pick(["Required", "Optional"], "Required"), "An overall review is required near the end of the audit."),
      row(
        "What most improves the precision of an expectation?",
        pick(["Using disaggregated data, such as monthly figures by location", "Using annual totals", "Using management's untested budget"], "Using disaggregated data, such as monthly figures by location"),
        "More detailed, reliable data gives a more precise expectation.",
      ),
      row(
        "Substantive analytical procedures are generally most effective for:",
        pick(["Large volumes of transactions that are predictable over time", "Unusual one-off transactions"], "Large volumes of transactions that are predictable over time"),
        "Analytics depend on stable, predictable relationships.",
      ),
      row(
        "When a difference exceeds the auditor's threshold, the auditor should:",
        pick(["Inquire of management and corroborate the explanation with evidence", "Accept management's explanation", "Record the difference as a misstatement automatically"], "Inquire of management and corroborate the explanation with evidence"),
        "Management's explanation must be corroborated; an unexplained difference may be a misstatement.",
      ),
    ],
    takeaway: "Analytics are required at planning and at the final review, and optional as substantive tests. Precision comes from disaggregated, reliable data and a well-built expectation.",
  },

  // ── Accounting estimates ──
  {
    slug: "evaluating-an-estimate",
    subject: "aud",
    topic: "auditing-accounting-estimates",
    title: "Evaluating management's estimate",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Management of Brierley Appliances recorded a warranty liability of $400,000. The auditor developed an independent range for the liability.",
    ],
    instructions: "Enter each amount in dollars, and answer the questions.",
    columns: ["Item", "Answer"],
    rows: [
      row("Misstatement if the auditor's range is $430,000 to $480,000 ($)", num(30000), "When management's estimate is outside a reasonable range, the misstatement is at least the difference to the nearest end of the range: 430,000 − 400,000."),
      row("Misstatement if instead the auditor develops a point estimate of $450,000 ($)", num(50000), "With a point estimate, the misstatement is the difference from management's figure: 450,000 − 400,000."),
      row("Misstatement if management had recorded $455,000 and the range is $430,000 to $480,000 ($)", num(0), "An estimate inside the auditor's reasonable range is not a misstatement."),
      row(
        "What type of misstatement is a difference in an estimate like this?",
        pick(["Factual misstatement", "Judgmental misstatement", "Projected misstatement"], "Judgmental misstatement"),
        "Differences from judgments about estimates are judgmental misstatements.",
      ),
      row(
        "Last year's estimate was $300,000; actual claims turned out to be $360,000. This shows:",
        pick(["Last year's statements were misstated", "Not necessarily a misstatement: it may reflect information not available then, but could indicate bias", "Nothing useful to the auditor"], "Not necessarily a misstatement: it may reflect information not available then, but could indicate bias"),
        "A retrospective review is not meant to second-guess earlier judgments, but it can reveal possible management bias.",
      ),
    ],
    takeaway: "If management's estimate is outside the auditor's range, the misstatement is at least the distance to the nearest end of the range. Look for consistent bias across estimates.",
  },
  {
    slug: "approaches-to-auditing-estimates",
    subject: "aud",
    topic: "auditing-accounting-estimates",
    title: "Three ways to audit an estimate",
    format: "classification",
    minutes: 8,
    scenario: [
      "The audit team on Thackeray Industries is planning procedures for several accounting estimates. The auditing standards describe three approaches.",
    ],
    instructions: "Select the approach each procedure uses.",
    columns: ["Procedure", "Approach"],
    rows: [
      row("Review sales of slow-moving inventory after year-end to evaluate the write-down to net realizable value", pick(ESTIMATE_APPROACH, "Use events occurring up to the auditor's report date"), "Later sales prices give direct evidence about the year-end estimate."),
      row("Compare warranty claims paid in the two months after year-end with the accrual", pick(ESTIMATE_APPROACH, "Use events occurring up to the auditor's report date"), "Subsequent events give evidence about the estimate."),
      row("Test the data and assumptions in management's model for the allowance for credit losses", pick(ESTIMATE_APPROACH, "Test how management made the estimate"), "Testing the method, data and assumptions is the second approach."),
      row("Evaluate whether management's discount rate is consistent with market rates", pick(ESTIMATE_APPROACH, "Test how management made the estimate"), "Evaluating a key assumption tests how management made the estimate."),
      row("Use the auditor's specialist and their own model to value a derivative", pick(ESTIMATE_APPROACH, "Develop an auditor's point estimate or range"), "The auditor develops an independent value to compare with management's."),
      row("Recalculate the pension obligation using the auditor's own assumptions", pick(ESTIMATE_APPROACH, "Develop an auditor's point estimate or range"), "An independent recalculation with the auditor's assumptions develops the auditor's own estimate."),
    ],
    takeaway: "Three approaches: evidence from events up to the report date, testing management's process (method, data, assumptions), or developing an independent point estimate or range.",
  },

  // ── Related parties and going concern ──
  {
    slug: "going-concern-conditions-and-reporting",
    subject: "aud",
    topic: "related-parties-and-going-concern",
    title: "Going concern: conditions, plans and the report",
    format: "classification",
    minutes: 12,
    scenario: [
      "The auditor of Ashworth Printing, a private company, is evaluating whether there is substantial doubt about its ability to continue as a going concern for a reasonable period (one year after the statements are available to be issued).",
    ],
    instructions: "Classify each item, then select the reporting outcome for each case.",
    columns: ["Item", "Answer"],
    rows: [
      row("Recurring operating losses and negative cash flows from operations", pick(GC, "Adverse condition or event"), "A classic indicator of possible substantial doubt."),
      row("Default on a loan agreement", pick(GC, "Adverse condition or event"), "Defaults can make debt immediately payable."),
      row("Loss of a customer that provided 40% of revenue", pick(GC, "Adverse condition or event"), "Losing a key customer threatens operations."),
      row("A signed agreement to sell a non-core division for cash", pick(GC, "Management plan that may mitigate"), "Plans to dispose of assets can alleviate doubt if they are likely to happen and to work."),
      row("A bank's commitment letter to extend the credit line", pick(GC, "Management plan that may mitigate"), "Committed financing is a plan that may mitigate the conditions."),
      row("A new accounting standard that takes effect next year", pick(GC, "Neither"), "This does not affect the entity's ability to meet its obligations."),
      row(
        "Report if substantial doubt exists and is adequately disclosed",
        pick(OPINION, "Unmodified, with an emphasis-of-matter paragraph"),
        "The opinion is unmodified, with a separate section headed 'Substantial Doubt About the Entity's Ability to Continue as a Going Concern'. That section works like an emphasis-of-matter paragraph.",
      ),
      row(
        "Report if management's plans alleviate the substantial doubt and the plans are disclosed",
        pick(OPINION, "Unmodified"),
        "When doubt is alleviated, no going concern paragraph is required, though the auditor may emphasize the matter.",
      ),
      row(
        "Report if substantial doubt exists but the disclosure is materially inadequate",
        pick(OPINION, "Qualified"),
        "Inadequate disclosure is a departure from the framework: qualified, or adverse if pervasive.",
      ),
    ],
    takeaway: "Substantial doubt with adequate disclosure leads to an unmodified opinion with a going concern section. Inadequate disclosure is a misstatement, which modifies the opinion.",
  },
  {
    slug: "identifying-related-parties",
    subject: "aud",
    topic: "related-parties-and-going-concern",
    title: "Identifying related parties",
    format: "classification",
    minutes: 8,
    scenario: [
      "During the audit of Fenmore Brewing, the team is building the list of related parties so it can look for related-party transactions.",
    ],
    instructions: "Select whether each party is a related party of Fenmore Brewing.",
    columns: ["Party", "Related party?"],
    rows: [
      row("An individual who owns 25% of Fenmore's voting shares", pick(YES_NO, "Yes"), "Principal owners (more than 10% of voting interests) are related parties."),
      row("A company controlled by the spouse of Fenmore's chief executive", pick(YES_NO, "Yes"), "Entities controlled by immediate family of management are related parties."),
      row("The trust for Fenmore's employee pension plan, managed by Fenmore's management", pick(YES_NO, "Yes"), "Trusts for the benefit of employees, such as pension plans managed by management, are related parties."),
      row("A company in which Fenmore holds a 30% equity-method investment", pick(YES_NO, "Yes"), "Equity-method investees are related parties."),
      row("Fenmore's main bank, which lends to it on ordinary commercial terms", pick(YES_NO, "No"), "A normal lending relationship does not make a bank a related party."),
      row("A supplier that provides 30% of Fenmore's malt, with no ownership or control links", pick(YES_NO, "No"), "Economic dependence alone does not create a related-party relationship."),
    ],
    takeaway: "Related parties are defined by control and significant influence (owners over 10%, management and their families, affiliates, investees and employee trusts), not by how much business is done.",
  },

  // ── Information technology controls ──
  {
    slug: "general-or-application-controls",
    subject: "aud",
    topic: "it-controls-in-audit",
    title: "General information technology controls or application controls?",
    format: "classification",
    minutes: 8,
    scenario: [
      "While understanding the information technology (IT) environment at Halberd Freight, you documented the controls below.",
    ],
    instructions: "Select whether each is a general IT control or an application control.",
    columns: ["Control", "Type"],
    rows: [
      row("Passwords and user roles restrict who can access programs and data", pick(IT_LEVEL, "General information technology control"), "Access security covers all applications, so it is a general control."),
      row("Program changes must be tested and approved before going live", pick(IT_LEVEL, "General information technology control"), "Change management is a general control."),
      row("Data is backed up daily and stored off-site", pick(IT_LEVEL, "General information technology control"), "IT operations controls are general controls."),
      row("Programmers cannot operate the production system", pick(IT_LEVEL, "General information technology control"), "Segregation within IT is a general control."),
      row("The payroll system rejects more than 60 hours a week for any employee", pick(IT_LEVEL, "Application control"), "A limit check within one application."),
      row("The system matches purchase order, receiving report and invoice before approving payment", pick(IT_LEVEL, "Application control"), "An automated three-way match in the purchasing application."),
      row("Batch totals are compared before and after processing", pick(IT_LEVEL, "Application control"), "Batch controls apply to transactions in a particular application."),
    ],
    takeaway: "General IT controls (access, change management, operations) support every application. If they fail, the auditor cannot rely on automated application controls.",
  },
  {
    slug: "application-control-types",
    subject: "aud",
    topic: "it-controls-in-audit",
    title: "Naming the input control",
    format: "classification",
    minutes: 8,
    scenario: [
      "The payroll and sales systems at Ormond Textiles include the edit checks below. Name each one.",
    ],
    instructions: "Select the type of control described.",
    columns: ["Control", "Type"],
    rows: [
      row("Rejects any pay rate above $150 an hour", pick(APP_CONTROL, "Limit (reasonableness) check"), "Compares a value with a set limit."),
      row("Rejects an employee number that isn't in the employee master file", pick(APP_CONTROL, "Validity check"), "Compares input with a list of valid values."),
      row("Won't save a record until every required field is filled in", pick(APP_CONTROL, "Completeness check"), "Checks that all required data is entered."),
      row("Uses an extra digit calculated from the account number to catch transposed digits", pick(APP_CONTROL, "Check digit"), "A check digit detects keying errors such as transpositions."),
      row("Adds up the employee numbers in a batch and compares the total before and after processing", pick(APP_CONTROL, "Hash total"), "A total with no meaning in itself, used only to check the batch."),
      row("Rejects letters typed into the hours-worked field", pick(APP_CONTROL, "Field (format) check"), "Checks that the data is the right type or format."),
      row("Compares the number of time cards in the batch with the number processed", pick(APP_CONTROL, "Record count"), "Counts the documents or records."),
      row("Reports gaps in the numbering of prenumbered sales invoices", pick(APP_CONTROL, "Sequence check"), "Checks for missing or duplicate numbers."),
    ],
    takeaway: "Limit, validity, completeness, field and check-digit checks test individual entries; hash totals, record counts and sequence checks test whole batches.",
  },

  // ── Using the work of others ──
  {
    slug: "whose-work-is-it",
    subject: "aud",
    topic: "group-audits-and-using-others-work",
    title: "Specialists, internal auditors and component auditors",
    format: "classification",
    minutes: 8,
    scenario: [
      "On the audit of Kenwright Holdings, several people other than the engagement team are involved. The standards treat each differently, so first identify who each one is.",
    ],
    instructions: "Select the category each person or firm falls into.",
    columns: ["Who", "Category"],
    rows: [
      row("An actuary the audit firm engages to evaluate the client's pension assumptions", pick(OTHERS, "Auditor's specialist"), "Engaged by the auditor, with expertise outside accounting and auditing."),
      row("An information technology security expert employed by the audit firm, helping test system controls", pick(OTHERS, "Auditor's specialist"), "An auditor's specialist can be internal to the firm."),
      row("An appraiser hired by the client to value real estate reported in the statements", pick(OTHERS, "Management's specialist"), "Engaged by management to help prepare the statements."),
      row("A valuation firm engaged by management to value intangibles acquired in a business combination", pick(OTHERS, "Management's specialist"), "Management engaged it, so the auditor evaluates its competence, capabilities and objectivity as audit evidence."),
      row("Another audit firm that audits a foreign subsidiary's financial information for the group audit", pick(OTHERS, "Component auditor"), "It performs work on a component's financial information for the group audit."),
      row("The client's internal audit staff, whose testing of cash disbursement controls the auditor considers using", pick(OTHERS, "Internal audit function"), "The external auditor evaluates the function's objectivity, competence and systematic approach before using its work."),
    ],
    takeaway: "The auditor's specialist works for the auditor; management's specialist produces evidence the auditor must evaluate. Either way, the auditor alone is responsible for the opinion.",
  },
  {
    slug: "using-internal-auditors",
    subject: "aud",
    topic: "group-audits-and-using-others-work",
    title: "Using the work of internal auditors",
    format: "classification",
    minutes: 8,
    scenario: [
      "Prentice Group has a large internal audit department. Its external auditor wants to use internal audit's work where the standards allow it, to make the audit more efficient.",
    ],
    instructions: "Select whether the external auditor may use internal audit in each way.",
    columns: ["Proposed use", "Allowed?"],
    rows: [
      row("Internal auditors give direct assistance by performing tests of controls, directed and supervised by the external auditor", pick(YES_NO, "Yes"), "Direct assistance is allowed for suitable procedures, with appropriate direction, supervision and review."),
      row("Use internal audit's inventory test counts after reperforming some of them", pick(YES_NO, "Yes"), "The external auditor may use the function's work after evaluating and reperforming some of it."),
      row("Rely on internal audit's work to reduce, but not eliminate, the external auditor's own procedures in that area", pick(YES_NO, "Yes"), "Internal audit's work can change the nature, timing or extent of the external auditor's procedures."),
      row("Have internal auditors make the significant judgments about the assessed risks of material misstatement", pick(YES_NO, "No"), "Significant judgments must stay with the external auditor."),
      row("Use direct assistance on testing records that the same internal auditors helped prepare", pick(YES_NO, "No"), "Internal auditors should not test work they were involved in."),
      row("Use the function's work when it reports to the chief financial officer, who sets its pay, with no oversight by those charged with governance", pick(YES_NO, "No"), "If the function's status and policies don't support its objectivity, its work should not be used."),
      row("Share responsibility for the audit opinion with the internal audit function", pick(YES_NO, "No"), "The external auditor has sole responsibility for the opinion."),
    ],
    takeaway: "Internal audit's work can reduce the external auditor's procedures, but never their responsibility. Judgment-heavy areas and work internal auditors were involved in stay with the external auditor.",
  },

  // ── Completing the audit ──
  {
    slug: "representation-letter-review",
    subject: "aud",
    topic: "written-representations-and-completing-the-audit",
    title: "Reviewing a draft management representation letter",
    format: "document-review",
    minutes: 12,
    scenario: [
      "The audit of Dunstan Hardware's comparative financial statements for Year 2 and Year 1 is almost finished. The auditor's report will be dated March 14, Year 3. The client's assistant controller drafted the representation letter below.",
    ],
    exhibits: [
      {
        title: "Draft representation letter (extract)",
        text: [
          "[1] Date: December 31, Year 2.",
          "[2] We confirm that we have fulfilled our responsibilities, as set out in the terms of the audit engagement, for the preparation and fair presentation of the financial statements.",
          "[3] We have provided you with all relevant information and access as agreed in the terms of the audit engagement.",
          "[4] Management takes no position on the uncorrected misstatements, which are a matter for the auditor.",
          "[5] We have disclosed to you all known instances of fraud or suspected fraud affecting the entity involving management, employees with significant roles in internal control, or others where the fraud could have a material effect on the financial statements.",
          "[6] These representations cover the year ended December 31, Year 2.",
          "[7] Signed: Sales Manager.",
        ],
      },
    ],
    instructions: "For each item, select the best revision, or keep it if it is already appropriate.",
    columns: ["Item", "Revision"],
    rows: [
      row("[1] Date", pick(["Keep as written", "Date it as of the auditor's report date, March 14, Year 3", "Date it as of the day fieldwork started"], "Date it as of the auditor's report date, March 14, Year 3"), "The representation letter is dated as of the date of the auditor's report."),
      row("[2] Responsibility for the statements", pick(["Keep as written", "Delete it", "Replace with a statement that the auditor prepared the statements"], "Keep as written"), "This is a required representation."),
      row("[3] Information and access", pick(["Keep as written", "Delete it", "Limit it to information management considered relevant"], "Keep as written"), "Also a required representation."),
      row("[4] Uncorrected misstatements", pick(["Keep as written", "Replace with a statement that management believes the uncorrected misstatements are immaterial, individually and in total, with a summary attached", "Delete it"], "Replace with a statement that management believes the uncorrected misstatements are immaterial, individually and in total, with a summary attached"), "Management must state that it believes the effects of uncorrected misstatements are immaterial, with a summary included or attached."),
      row("[5] Fraud", pick(["Keep as written", "Limit it to fraud involving management", "Delete it"], "Keep as written"), "Disclosure of known or suspected fraud is a required representation."),
      row("[6] Periods covered", pick(["Keep as written", "Cover all periods presented in the auditor's report, Year 2 and Year 1", "Cover only the fourth quarter of Year 2"], "Cover all periods presented in the auditor's report, Year 2 and Year 1"), "Representations cover all periods referred to in the auditor's report."),
      row("[7] Signature", pick(["Keep as written", "Signed by the chief executive and chief financial officer (or their equivalents)", "Signed by the audit engagement partner"], "Signed by the chief executive and chief financial officer (or their equivalents)"), "Representations come from management with overall responsibility for financial and operating matters."),
    ],
    takeaway: "The representation letter is dated the report date, covers every period in the report, is signed by the chief executive and chief financial officer, and supports but never replaces other evidence.",
  },
  {
    slug: "communicating-at-completion",
    subject: "aud",
    topic: "written-representations-and-completing-the-audit",
    title: "Who must hear about it? Communications at completion",
    format: "classification",
    minutes: 8,
    scenario: [
      "At the end of the audit of Ellery Packaging, the senior has a list of matters to communicate. The auditing standards set out who must receive each and how.",
    ],
    instructions: "Select the required communication for each matter.",
    columns: ["Matter", "Communication"],
    rows: [
      row("Significant difficulties encountered during the audit", pick(COMMUNICATE, "To those charged with governance"), "Significant findings from the audit go to those charged with governance."),
      row("Disagreements with management, whether or not resolved", pick(COMMUNICATE, "To those charged with governance"), "Disagreements are a significant finding to communicate."),
      row("Uncorrected misstatements and their effect on the opinion", pick(COMMUNICATE, "To those charged with governance"), "Uncorrected misstatements go to those charged with governance, with a request that they be corrected."),
      row("An overview of the planned scope and timing of the audit", pick(COMMUNICATE, "To those charged with governance"), "The planned scope and timing are communicated."),
      row("A material weakness in internal control", pick(COMMUNICATE, "In writing to management and those charged with governance"), "Significant deficiencies and material weaknesses must be communicated in writing."),
      row("A significant deficiency in internal control", pick(COMMUNICATE, "In writing to management and those charged with governance"), "Same as a material weakness: in writing to both."),
      row("A minor control deficiency that is neither a significant deficiency nor a material weakness, but merits management's attention", pick(COMMUNICATE, "To management (orally or in writing)"), "Other deficiencies worth attention go to management, and need not be in writing."),
      row("Which customers will be selected for confirmation", pick(COMMUNICATE, "Not required"), "Detailed procedures are not shared; telling the client could make them predictable and less effective."),
    ],
    takeaway: "Significant deficiencies and material weaknesses: in writing, to management and governance. Significant audit findings go to governance. Never reveal the detail of planned procedures.",
  },

  // ── Audit reports ──
  {
    slug: "choosing-the-opinion",
    subject: "aud",
    topic: "audit-reports",
    title: "Choosing the audit opinion",
    format: "classification",
    minutes: 10,
    scenario: [
      "The audit partner at Quill & Fenn is reviewing the conclusions on several private-company audits. Each situation is independent; consider only the matter described.",
    ],
    instructions: "Select the report each situation leads to.",
    columns: ["Situation", "Report"],
    rows: [
      row("Inventory is overstated by a material, but not pervasive, amount, and the client refuses to adjust", pick(OPINION, "Qualified"), "A material, not pervasive, misstatement leads to a qualified ('except for') opinion."),
      row("The client did not consolidate a subsidiary that makes up most of the group's assets and revenue", pick(OPINION, "Adverse"), "A material and pervasive misstatement leads to an adverse opinion."),
      row("The auditor could not observe inventory at one of six locations and no alternative procedures worked; the effect is material but not pervasive", pick(OPINION, "Qualified"), "A material, not pervasive, scope limitation leads to a qualified opinion."),
      row("Management refuses to sign the representation letter", pick(OPINION, "Disclaimer of opinion"), "Without required written representations, the auditor disclaims an opinion (or withdraws)."),
      row("The client changed its inventory method, properly accounted for and disclosed", pick(OPINION, "Unmodified, with an emphasis-of-matter paragraph"), "A justified change in principle is highlighted for consistency with an emphasis-of-matter paragraph."),
      row("A fire after year-end destroyed a major plant; it is properly disclosed and the auditor wants to highlight it", pick(OPINION, "Unmodified, with an emphasis-of-matter paragraph"), "Emphasis-of-matter paragraphs draw attention to disclosed matters fundamental to users' understanding."),
      row("An immaterial departure from the reporting framework that the client chose not to correct", pick(OPINION, "Unmodified"), "Immaterial misstatements do not affect the opinion."),
    ],
    takeaway: "Two questions decide a modified opinion: misstatement or scope limitation? Material, or material and pervasive? Misstatement: qualified or adverse. Scope: qualified or disclaimer.",
  },
  {
    slug: "audit-report-review",
    subject: "aud",
    topic: "audit-reports",
    title: "Reviewing a draft auditor's report",
    format: "document-review",
    minutes: 15,
    scenario: [
      "A staff auditor drafted the report on the audit of Belgrave Trading, a private US company whose statements follow US accounting principles. The partner has asked you to review the numbered points.",
    ],
    exhibits: [
      {
        title: "Draft report (summary of the numbered points)",
        text: [
          "[1] Title: 'Report of Accountant'.",
          "[2] The Opinion section appears at the end of the report, after the auditor's responsibilities.",
          "[3] 'We conducted our audit in accordance with International Standards on Auditing.'",
          "[4] 'We are required to be independent of Belgrave Trading and to meet our other ethical responsibilities, in accordance with the relevant ethical requirements relating to our audit.'",
          "[5] 'In our opinion, the financial statements present fairly, in all material respects, the financial position of Belgrave Trading as of December 31, Year 1 …'",
          "[6] 'Reasonable assurance means that an audit will always detect a material misstatement when it exists.'",
          "[7] The report is dated December 31, Year 1, the balance sheet date.",
          "[8] Signed personally by the audit senior, with no firm name.",
        ],
      },
    ],
    instructions: "For each point, select the best revision, or keep it if it is already appropriate.",
    columns: ["Point", "Revision"],
    rows: [
      row("[1] Title", pick(["Keep as written", "Change to 'Independent Auditor's Report'", "Change to 'Management's Report'"], "Change to 'Independent Auditor's Report'"), "The title must show the auditor is independent."),
      row("[2] Position of the opinion", pick(["Keep at the end", "Move the Opinion section to the start, followed by the Basis for Opinion"], "Move the Opinion section to the start, followed by the Basis for Opinion"), "The current format puts the Opinion first, then the Basis for Opinion."),
      row("[3] Auditing standards", pick(["Keep as written", "Change to 'auditing standards generally accepted in the United States of America'", "Change to 'the standards of the Securities and Exchange Commission'"], "Change to 'auditing standards generally accepted in the United States of America'"), "A US private-company audit is performed under US generally accepted auditing standards."),
      row("[4] Independence and ethics", pick(["Keep as written", "Delete it", "Replace 'independent' with 'objective'"], "Keep as written"), "The Basis for Opinion section includes this statement."),
      row("[5] Opinion paragraph", pick(["Keep as written", "Replace 'present fairly' with 'are correct'", "Delete 'in all material respects'"], "Keep as written"), "This is the standard wording of an unmodified opinion."),
      row("[6] Reasonable assurance", pick(["Keep as written", "Replace with 'Reasonable assurance is a high level of assurance but is not absolute assurance and therefore is not a guarantee that an audit will always detect a material misstatement when it exists.'"], "Replace with 'Reasonable assurance is a high level of assurance but is not absolute assurance and therefore is not a guarantee that an audit will always detect a material misstatement when it exists.'"), "The report explains that reasonable assurance is not a guarantee."),
      row("[7] Report date", pick(["Keep as written", "Date it no earlier than the date the auditor obtained sufficient appropriate evidence for the opinion", "Date it the day the report is delivered to the client"], "Date it no earlier than the date the auditor obtained sufficient appropriate evidence for the opinion"), "That includes evidence that the statements were prepared and management has taken responsibility for them."),
      row("[8] Signature", pick(["Keep as written", "Use the firm's signature (manual or printed)", "Have the client sign it"], "Use the firm's signature (manual or printed)"), "The report carries the signature of the auditor's firm."),
    ],
    takeaway: "Private-company reports put the Opinion first, then the Basis for Opinion, then management's and the auditor's responsibilities. They are dated when sufficient evidence has been obtained and signed in the firm's name.",
  },

  // ── Reviews, compilations and agreed-upon procedures ──
  {
    slug: "which-engagement",
    subject: "aud",
    topic: "reviews-compilations-and-aup",
    title: "Audit, review, compilation or preparation?",
    format: "classification",
    minutes: 8,
    scenario: [
      "Several private-company clients of Hollis & Ward want different services. Match each description to the engagement it describes.",
    ],
    instructions: "Select the engagement described.",
    columns: ["Description", "Engagement"],
    rows: [
      row("Reasonable assurance, based on evidence that includes testing details and possibly controls", pick(ENGAGEMENT, "Audit"), "Only an audit gives reasonable assurance."),
      row("Limited assurance, based mainly on inquiry and analytical procedures", pick(ENGAGEMENT, "Review"), "A review gives limited assurance."),
      row("No assurance, but the accountant always issues a report", pick(ENGAGEMENT, "Compilation"), "A compilation gives no assurance and always has a report."),
      row("The accountant may lack independence, but must say so in the report", pick(ENGAGEMENT, "Compilation"), "In a compilation, a lack of independence is disclosed in the report. A review requires independence."),
      row("No report is required, but each page of the statements must say that no assurance is provided", pick(ENGAGEMENT, "Preparation of financial statements"), "A preparation engagement has no report; each page carries a 'no assurance' legend."),
      row("The practitioner performs specific procedures and reports the findings, without an opinion or conclusion", pick(ENGAGEMENT, "Agreed-upon procedures"), "Agreed-upon procedures report findings only; the user draws the conclusions."),
    ],
    takeaway: "Audit: reasonable assurance. Review: limited assurance, independence required. Compilation: no assurance, report always issued. Preparation: no assurance, no report. Agreed-upon procedures: findings only.",
  },
  {
    slug: "review-procedures",
    subject: "aud",
    topic: "reviews-compilations-and-aup",
    title: "What does a review involve?",
    format: "classification",
    minutes: 8,
    scenario: [
      "Vance Interiors has asked its accountant for a review of its annual financial statements to give its bank limited assurance. The new staff accountant has listed possible procedures.",
    ],
    instructions: "Select whether each procedure is typically part of a review.",
    columns: ["Procedure", "In a review?"],
    rows: [
      row("Inquire of management about its accounting principles and practices", pick(REVIEW_PROC, "Typically performed in a review"), "Inquiry is one of the two main review procedures."),
      row("Compare the current year with the prior year and with expectations, and investigate unusual changes", pick(REVIEW_PROC, "Typically performed in a review"), "Analytical procedures are the other main review procedure."),
      row("Obtain a representation letter from management", pick(REVIEW_PROC, "Typically performed in a review"), "Written representations are required in a review."),
      row("Read the statements for obvious material departures from the framework", pick(REVIEW_PROC, "Typically performed in a review"), "The accountant considers whether the statements appear appropriately presented."),
      row("Confirm receivables with customers", pick(REVIEW_PROC, "Not required in a review"), "Confirmations are audit procedures."),
      row("Observe the year-end inventory count", pick(REVIEW_PROC, "Not required in a review"), "Observation of inventory is an audit procedure."),
      row("Obtain an understanding of internal control and test its effectiveness", pick(REVIEW_PROC, "Not required in a review"), "A review does not involve testing controls."),
      row("Send a letter of inquiry to the client's lawyers", pick(REVIEW_PROC, "Not required in a review"), "Lawyers' letters are audit procedures, not required in a review."),
    ],
    takeaway: "A review rests on inquiry and analytical procedures, backed by a representation letter. No confirmations, observations, controls testing or lawyers' letters unless something seems wrong.",
  },

  // ── Attestation and System and Organization Controls ──
  {
    slug: "choosing-the-soc-report",
    subject: "aud",
    topic: "attestation-and-soc-engagements",
    title: "Choosing the right service organization report",
    format: "classification",
    minutes: 10,
    scenario: [
      "PayLink processes payroll and hosts data for hundreds of businesses. Different users want different System and Organization Controls (SOC) reports about PayLink's controls.",
    ],
    instructions: "Select the report that best meets each need.",
    columns: ["Need", "Report"],
    rows: [
      row(
        "A customer's external auditor wants evidence that PayLink's payroll controls relevant to financial reporting operated effectively over the past year",
        pick(["SOC 1 Type 1", "SOC 1 Type 2", "SOC 2 Type 2", "SOC 3"], "SOC 1 Type 2"),
        "SOC 1 covers controls relevant to user entities' financial reporting; Type 2 includes operating effectiveness over a period.",
      ),
      row(
        "A customer's auditor wants an opinion on the description and design of those controls at a single date",
        pick(["SOC 1 Type 1", "SOC 1 Type 2", "SOC 2 Type 1", "SOC 3"], "SOC 1 Type 1"),
        "Type 1 covers the description and suitability of design at a point in time, not operating effectiveness.",
      ),
      row(
        "A customer's management and regulators want a detailed report on controls over security and availability, tested over a period",
        pick(["SOC 1 Type 2", "SOC 2 Type 1", "SOC 2 Type 2", "SOC 3"], "SOC 2 Type 2"),
        "SOC 2 covers the trust services criteria (security, availability, processing integrity, confidentiality, privacy). Type 2 tests operating effectiveness.",
      ),
      row(
        "PayLink wants a general-use report on its security controls to post on its website",
        pick(["SOC 1 Type 2", "SOC 2 Type 2", "SOC 3"], "SOC 3"),
        "SOC 3 is a general-use summary report on the trust services criteria.",
      ),
      row(
        "Which report can a user auditor use to support assessing control risk below the maximum for the user's payroll?",
        pick(["SOC 1 Type 1", "SOC 1 Type 2", "SOC 3"], "SOC 1 Type 2"),
        "Only tests of operating effectiveness support reduced control risk.",
      ),
      row(
        "Controls that each customer must have in place for PayLink's controls to work (for example, reviewing payroll reports) are called:",
        pick(["Complementary user entity controls", "Compensating controls", "General controls"], "Complementary user entity controls"),
        "The service organization's description lists the complementary user entity controls it assumes its customers have.",
      ),
    ],
    takeaway: "SOC 1 is about financial reporting, for user auditors; SOC 2 is about the trust services criteria, for restricted users; SOC 3 is the public version of SOC 2. Type 1 is design at a point in time; Type 2 adds operating effectiveness over a period.",
  },
  {
    slug: "research-auditing-standards",
    subject: "aud",
    topic: "attestation-and-soc-engagements",
    title: "Research: finding the right professional standard",
    format: "research",
    minutes: 15,
    scenario: [
      "A partner at Larkin & Shore asks you to note, for the engagement files, which section of the professional standards covers each topic below. The firm works only with private companies.",
    ],
    instructions:
      "For each item, enter the section of the American Institute of Certified Public Accountants (AICPA) professional standards that covers it. Use the clarified auditing standards (AU-C) for audits, the review and compilation standards (AR-C) for those services, and the attestation standards (AT-C) for attestation engagements. Enter just the section, for example AU-C 500.",
    columns: ["Topic", "Section"],
    rows: [
      row("Requesting and evaluating external confirmations", ref("AU-C 505"), "AU-C 505, External Confirmations."),
      row("The auditor's evaluation of the entity's ability to continue as a going concern", ref("AU-C 570"), "AU-C 570, The Auditor's Consideration of an Entity's Ability to Continue as a Going Concern."),
      row("Written representations from management", ref("AU-C 580"), "AU-C 580, Written Representations."),
      row("Using the work of an auditor's specialist", ref("AU-C 620"), "AU-C 620, Using the Work of an Auditor's Specialist."),
      row("A review of a private company's financial statements", ref("AR-C 90"), "AR-C 90, Review of Financial Statements."),
      row("An agreed-upon procedures engagement", ref("AT-C 215"), "AT-C 215, Agreed-Upon Procedures Engagements."),
      row("An examination of controls at a service organization relevant to user entities' internal control over financial reporting", ref("AT-C 320"), "AT-C 320 covers these service organization control examinations."),
    ],
    takeaway: "Learn the section map: AU-C 200s general principles, 300s risk assessment and response, 500s evidence, 700s reporting; AR-C 70/80/90 for preparation, compilation and review; AT-C 205/210/215 for examination, review and agreed-upon procedures.",
  },
];
