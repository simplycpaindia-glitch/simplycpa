import type { Simulation } from "../types";
import { pick, row } from "../build";

// AUD detect-and-correct simulations: review a staff auditor's working paper, identify
// what is wrong with each item (if anything) and choose the correction.

const COLUMNS = ["Working paper item", "Problem", "Correction"];
const INSTRUCTIONS =
  'You are the senior reviewing this working paper. For each item, select the problem (or "No problem") and the correction needed (or "No change needed").';

const review = (label: string, problems: readonly string[], corrections: readonly string[], problem: string, correction: string, explanation: string) =>
  row(label, [pick(problems, problem), pick(corrections, correction)], explanation);

const CONFIRM_PROBLEMS = [
  "No problem",
  "Auditor lost control of the confirmation process",
  "Exception not evaluated as a possible misstatement",
  "Nonresponse treated as a confirmation",
  "Wrong type of confirmation for the assessed risk",
] as const;
const CONFIRM_FIXES = [
  "No change needed",
  "Send and receive the confirmations directly, without client handling",
  "Investigate the exception and accumulate any misstatement",
  "Perform alternative procedures, such as examining cash received after year-end",
  "Use positive confirmations for these balances",
] as const;

const COUNT_PROBLEMS = [
  "No problem",
  "Test counts don't address completeness",
  "Count tags not controlled",
  "Possible obsolete inventory not followed up",
  "Cutoff information not recorded",
] as const;
const COUNT_FIXES = [
  "No change needed",
  "Also trace items from the warehouse floor to the count records",
  "Record the tag numbers used and voided and check every tag is accounted for",
  "Obtain evidence of net realizable value for the damaged goods",
  "Record the last shipping and receiving document numbers to test cutoff",
] as const;

const SAMPLE_PROBLEMS = [
  "No problem",
  "Sampling risk ignored in the conclusion",
  "Sample not selected so every item had a chance of selection",
  "Qualitative nature of a deviation not considered",
  "Misstatement not projected to the population",
] as const;
const SAMPLE_FIXES = [
  "No change needed",
  "Compare the upper deviation limit, not the sample rate, with the tolerable rate",
  "Reselect the sample randomly or systematically from the whole population",
  "Consider whether the deviation indicates fraud and reassess the risks",
  "Project the misstatement and compare it with tolerable misstatement",
] as const;

const COMPLETION_PROBLEMS = [
  "No problem",
  "Misstatements not evaluated in aggregate",
  "Representation letter dated incorrectly",
  "Subsequent events period not fully covered",
  "Required communication not made",
] as const;
const COMPLETION_FIXES = [
  "No change needed",
  "Evaluate uncorrected misstatements individually and together, including the effect of prior-year ones",
  "Date the letter as of the auditor's report date",
  "Extend the subsequent events procedures to the report date",
  "Communicate the uncorrected misstatements to those charged with governance",
] as const;

export const audDetectAndCorrect: Simulation[] = [
  {
    slug: "detect-correct-confirmations",
    subject: "aud",
    topic: "evidence-types-and-procedures",
    title: "Detect and correct: the receivables confirmation working paper",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "A staff auditor prepared the accounts receivable confirmation working paper for the audit of Hartley Distributors, a private company. The risk of material misstatement for the existence of receivables is assessed as high. Review the working paper notes in the exhibit.",
    ],
    exhibits: [
      {
        title: "Working paper notes: accounts receivable confirmations",
        text: [
          "[1] Confirmation requests for 40 customers were given to Hartley's accounts receivable clerk, who mailed them.",
          "[2] Customer Dorsey replied that it owes $1,200 less than recorded because of goods it returned on December 30, which Hartley credited in January. Staff note: \"Timing difference — no further work.\"",
          "[3] Customer Ellis didn't reply to the first or the second request. Staff note: \"Confirmed.\"",
          "[4] Customer Fenwick replied by email. The staff auditor checked the sender's address and phoned Fenwick's finance contact, who confirmed sending the reply.",
          "[5] Negative confirmations were sent for the 10 largest balances.",
        ],
      },
    ],
    instructions: INSTRUCTIONS,
    columns: COLUMNS,
    rows: [
      review("[1] Mailing the requests", CONFIRM_PROBLEMS, CONFIRM_FIXES, "Auditor lost control of the confirmation process", "Send and receive the confirmations directly, without client handling", "The auditor must control the requests and replies; client staff handling them could intercept or alter them."),
      review("[2] Dorsey's reply", CONFIRM_PROBLEMS, CONFIRM_FIXES, "Exception not evaluated as a possible misstatement", "Investigate the exception and accumulate any misstatement", "Goods returned on December 30 but credited in January mean receivables were overstated at year-end, which is a cutoff misstatement, not a harmless timing difference."),
      review("[3] Ellis's nonresponse", CONFIRM_PROBLEMS, CONFIRM_FIXES, "Nonresponse treated as a confirmation", "Perform alternative procedures, such as examining cash received after year-end", "A positive confirmation with no reply gives no evidence. Alternative procedures, such as subsequent receipts, shipping documents or invoices, are required."),
      review("[4] Fenwick's emailed reply", CONFIRM_PROBLEMS, CONFIRM_FIXES, "No problem", "No change needed", "Electronic replies are acceptable when the auditor addresses the risk that they aren't genuine; verifying the sender directly does that."),
      review("[5] Negative confirmations", CONFIRM_PROBLEMS, CONFIRM_FIXES, "Wrong type of confirmation for the assessed risk", "Use positive confirmations for these balances", "Negative confirmations alone are appropriate only when the risk is low, balances are small and homogeneous, few exceptions are expected and recipients are likely to read them. None of that applies to the largest balances at high risk."),
    ],
    takeaway: "Control the process, investigate every exception, follow up every nonresponse with alternative procedures, and use negative confirmations only in low-risk, low-value populations.",
  },
  {
    slug: "detect-correct-inventory-observation",
    subject: "aud",
    topic: "responding-to-assessed-risks",
    title: "Detect and correct: the inventory observation working paper",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "A staff auditor attended the December 31 physical inventory count at Pellham Hardware's warehouse and prepared the working paper summarized below. Review it before the count results are used to test the inventory balance.",
    ],
    exhibits: [
      {
        title: "Working paper notes: inventory observation",
        text: [
          "[1] Test counts: 25 items selected from the client's count sheets and found in the warehouse; all quantities agreed.",
          "[2] Pellham used prenumbered count tags. The working paper doesn't list which tag numbers were used or voided.",
          "[3] Aisle 7: water-damaged cartons noted, \"about $40,000 at cost.\" No further work.",
          "[4] Last receiving report before the count: no. 4471. Last shipping document: no. 9120.",
          "[5] The client's count teams counted under its warehouse manager's supervision; the staff auditor observed their procedures throughout and made test counts.",
        ],
      },
    ],
    instructions: INSTRUCTIONS,
    columns: COLUMNS,
    rows: [
      review("[1] Direction of the test counts", COUNT_PROBLEMS, COUNT_FIXES, "Test counts don't address completeness", "Also trace items from the warehouse floor to the count records", "Going from the records to the floor tests existence only. Going from the floor to the records tests completeness; a good observation does both."),
      review("[2] Count tags", COUNT_PROBLEMS, COUNT_FIXES, "Count tags not controlled", "Record the tag numbers used and voided and check every tag is accounted for", "Tag control is how the auditor knows no tags were added or lost after the count."),
      review("[3] Damaged cartons", COUNT_PROBLEMS, COUNT_FIXES, "Possible obsolete inventory not followed up", "Obtain evidence of net realizable value for the damaged goods", "Damaged goods may need writing down to net realizable value, which is a valuation issue the observation should flag for follow-up."),
      review("[4] Cutoff documents", COUNT_PROBLEMS, COUNT_FIXES, "No problem", "No change needed", "Recording the last receiving and shipping document numbers is exactly the information needed to test cutoff later."),
      review("[5] Who did the counting", COUNT_PROBLEMS, COUNT_FIXES, "No problem", "No change needed", "Management is responsible for the count; the auditor observes it and makes test counts. The auditor doesn't have to do the counting."),
    ],
    takeaway: "Observation tests both directions (records to floor for existence, floor to records for completeness), controls the tags, captures cutoff information and flags damaged or obsolete goods.",
  },
  {
    slug: "detect-correct-sampling",
    subject: "aud",
    topic: "audit-sampling",
    title: "Detect and correct: the sampling working papers",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "A staff auditor performed a test of controls over purchase approvals and a substantive test of receivables for Corbin Medical. Review the conclusions recorded in the working papers.",
    ],
    exhibits: [
      {
        title: "Working paper notes: sampling",
        text: [
          "[1] Test of approval control: 3 deviations in a sample of 100 (3%). Tolerable rate 6%. Upper deviation limit from the table: 7.6%. Conclusion: \"Control effective, 3% is below 6%.\"",
          "[2] The 100 purchase vouchers were taken from the tops of the two filing boxes nearest the door.",
          "[3] One selected invoice had been properly voided. The staff auditor checked the void and replaced it with another invoice.",
          "[4] One of the 3 deviations is an approval signature that appears to have been forged. It is treated like the other deviations.",
          "[5] Substantive test of receivables using monetary unit sampling: misstatements in the sample total $1,000. Conclusion: \"Misstatement $1,000, immaterial.\"",
        ],
      },
    ],
    instructions: INSTRUCTIONS,
    columns: COLUMNS,
    rows: [
      review("[1] Conclusion on the control test", SAMPLE_PROBLEMS, SAMPLE_FIXES, "Sampling risk ignored in the conclusion", "Compare the upper deviation limit, not the sample rate, with the tolerable rate", "The upper deviation limit (7.6%) exceeds the tolerable rate (6%), so the sample doesn't support reliance on the control."),
      review("[2] How the vouchers were chosen", SAMPLE_PROBLEMS, SAMPLE_FIXES, "Sample not selected so every item had a chance of selection", "Reselect the sample randomly or systematically from the whole population", "Items from two boxes near the door may not represent the whole year, so results can't be projected."),
      review("[3] Replacing the voided invoice", SAMPLE_PROBLEMS, SAMPLE_FIXES, "No problem", "No change needed", "A properly voided item isn't a deviation; once the void is verified, replacing it is appropriate."),
      review("[4] The forged signature", SAMPLE_PROBLEMS, SAMPLE_FIXES, "Qualitative nature of a deviation not considered", "Consider whether the deviation indicates fraud and reassess the risks", "Deviations are evaluated for their nature as well as their rate; a possible forgery suggests fraud and affects the risk assessment."),
      review("[5] Conclusion on the receivables test", SAMPLE_PROBLEMS, SAMPLE_FIXES, "Misstatement not projected to the population", "Project the misstatement and compare it with tolerable misstatement", "Misstatements found in a sample must be projected to the population (and an allowance for sampling risk considered) before concluding."),
    ],
    takeaway: "Sampling conclusions must allow for sampling risk, rest on a representative sample, look at the nature of each deviation and project misstatements to the whole population.",
  },
  {
    slug: "detect-correct-completion",
    subject: "aud",
    topic: "written-representations-and-completing-the-audit",
    title: "Detect and correct: the audit completion working paper",
    format: "detect-and-correct",
    minutes: 15,
    scenario: [
      "The audit of Alder Instruments is nearly finished. The auditor's report will be dated March 6. Review the completion checklist notes prepared by the senior on the engagement.",
    ],
    exhibits: [
      {
        title: "Completion checklist notes",
        text: [
          "[1] Summary of uncorrected misstatements: each item is below materiality, so the note concludes \"no effect on the opinion\" without adding them up.",
          "[2] The management representation letter is dated February 20.",
          "[3] Subsequent events procedures (reading minutes, inquiries of management) were performed through February 20.",
          "[4] Uncorrected misstatements were discussed with the controller only.",
          "[5] Misstatements below the clearly trivial threshold of $5,000 were not accumulated.",
        ],
      },
    ],
    instructions: INSTRUCTIONS,
    columns: COLUMNS,
    rows: [
      review("[1] Evaluating uncorrected misstatements", COMPLETION_PROBLEMS, COMPLETION_FIXES, "Misstatements not evaluated in aggregate", "Evaluate uncorrected misstatements individually and together, including the effect of prior-year ones", "Misstatements that are each immaterial can be material together, so the auditor evaluates them in aggregate as well as individually."),
      review("[2] Date of the representation letter", COMPLETION_PROBLEMS, COMPLETION_FIXES, "Representation letter dated incorrectly", "Date the letter as of the auditor's report date", "Written representations must cover the period up to the report date, so the letter is dated as of the report date (March 6)."),
      review("[3] Subsequent events procedures", COMPLETION_PROBLEMS, COMPLETION_FIXES, "Subsequent events period not fully covered", "Extend the subsequent events procedures to the report date", "The auditor must perform procedures covering the period up to the report date, so the two weeks to March 6 are not covered."),
      review("[4] Who heard about the misstatements", COMPLETION_PROBLEMS, COMPLETION_FIXES, "Required communication not made", "Communicate the uncorrected misstatements to those charged with governance", "Uncorrected misstatements, and their effect on the opinion, must be communicated to those charged with governance, with a request that they be corrected."),
      review("[5] Clearly trivial items", COMPLETION_PROBLEMS, COMPLETION_FIXES, "No problem", "No change needed", "Misstatements below the clearly trivial threshold don't need to be accumulated."),
    ],
    takeaway: "At completion, evaluate misstatements together, cover the period right up to the report date (representations and subsequent events) and tell those charged with governance about uncorrected misstatements.",
  },
];
