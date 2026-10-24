import type { Simulation } from "../types";
import { num, pick, row } from "../build";

// AUD Area I (ethics, acceptance) and Area II (risk assessment and planning).

const YES_NO = ["Yes", "No"] as const;
const THREATS = [
  "Adverse interest",
  "Advocacy",
  "Familiarity",
  "Management participation",
  "Self-interest",
  "Self-review",
  "Undue influence",
] as const;
const ACCEPTANCE = ["Required before accepting the engagement", "Optional, usually after acceptance", "Not part of acceptance"] as const;
const STRATEGY = ["Overall audit strategy", "Audit plan"] as const;
const COMPONENTS = ["Control environment", "Risk assessment", "Information and communication", "Control activities", "Monitoring activities"] as const;
const DUTIES = ["Authorization and custody", "Authorization and recording", "Custody and recording", "No conflict"] as const;
const RISK = ["Inherent risk", "Control risk", "Detection risk"] as const;
const TRIANGLE = ["Incentive or pressure", "Opportunity", "Attitude or rationalization"] as const;
const FRAUD_RESPONSE = ["Required in every audit", "Response to a specific assessed fraud risk", "Not required"] as const;

export const audArea12: Simulation[] = [
  // ── Ethics and independence ──
  {
    slug: "is-independence-impaired",
    subject: "aud",
    topic: "professional-ethics-and-independence",
    title: "Is independence impaired?",
    format: "classification",
    minutes: 10,
    scenario: [
      "Carver & Lee audits Westbrook Manufacturing, a private company. Under the American Institute of Certified Public Accountants (AICPA) Code of Professional Conduct, the firm's quality reviewer has flagged the situations below. Assume no safeguards reduce any threat to an acceptable level unless stated.",
    ],
    instructions: "Select whether each situation impairs the firm's independence.",
    columns: ["Situation", "Independence impaired?"],
    rows: [
      row("The engagement partner owns 10 shares of Westbrook, an immaterial amount", pick(YES_NO, "Yes"), "Any direct financial interest held by a covered member impairs independence, however small."),
      row("A staff member in another office who does no work for Westbrook holds an immaterial investment in a mutual fund that owns Westbrook shares", pick(YES_NO, "No"), "This person is not a covered member, and the interest is indirect and immaterial."),
      row("The firm prepares Westbrook's corporate tax return", pick(YES_NO, "No"), "Tax return preparation is a permitted nonattest service when management takes responsibility for the return."),
      row("A firm employee approves and signs Westbrook's payroll checks", pick(YES_NO, "Yes"), "Authorizing or executing transactions is a management responsibility, which impairs independence."),
      row("The engagement partner's father, who is not a dependent, owns an immaterial amount of Westbrook stock", pick(YES_NO, "No"), "A parent is a close relative, not immediate family. A close relative's financial interest impairs independence only if it is material to that relative and the covered member knows of it."),
      row("Westbrook has not paid the firm's fees for an audit performed more than a year before the current report date", pick(YES_NO, "Yes"), "Unpaid fees for services provided more than one year before the current report date impair independence (unless the client is in bankruptcy)."),
      row("The engagement partner's spouse is Westbrook's chief financial officer", pick(YES_NO, "Yes"), "An immediate family member of a covered member in a key position at the client impairs independence."),
      row("A partner's brother, who has no ownership interest, works as a sales clerk at Westbrook", pick(YES_NO, "No"), "A close relative impairs independence only in a key position or with a material financial interest. A sales clerk is not a key position."),
    ],
    takeaway: "Direct financial interests and management responsibilities impair independence at any size. Close relatives matter only in key positions or with material interests.",
  },
  {
    slug: "threats-to-independence",
    subject: "aud",
    topic: "professional-ethics-and-independence",
    title: "Naming the threat to independence",
    format: "classification",
    minutes: 10,
    scenario: [
      "Under the conceptual framework in the American Institute of Certified Public Accountants (AICPA) Code of Professional Conduct, auditors identify threats to independence, evaluate them and apply safeguards. Bowen Partners is reviewing situations across several audit clients.",
    ],
    instructions: "Select the threat to independence each situation creates.",
    columns: ["Situation", "Threat"],
    rows: [
      row("The firm holds a financial interest in an audit client", pick(THREATS, "Self-interest"), "The firm benefits financially from the client's results."),
      row("The firm promotes an audit client's shares to investors in a public offering", pick(THREATS, "Advocacy"), "Promoting the client's interests compromises objectivity."),
      row("The firm audits an accounting system it designed and implemented for the client", pick(THREATS, "Self-review"), "Auditors would be evaluating their own work."),
      row("The client threatens to replace the firm unless it accepts an aggressive revenue policy", pick(THREATS, "Undue influence"), "Pressure from the client to subordinate professional judgment."),
      row("The engagement partner has led the audit for 15 years and is a close friend of the chief executive", pick(THREATS, "Familiarity"), "A long or close relationship makes the auditor too sympathetic to the client."),
      row("The client has sued the firm over the prior year's audit", pick(THREATS, "Adverse interest"), "The firm and client are opponents, which threatens objectivity."),
      row("A firm employee serves as the client's acting controller for three months", pick(THREATS, "Management participation"), "Taking on a management role is management participation."),
      row("Fees from this client make up a large share of the firm's total revenue", pick(THREATS, "Self-interest"), "Fee dependence gives the firm a financial stake in keeping the client."),
    ],
    takeaway: "Seven threats: adverse interest, advocacy, familiarity, management participation, self-interest, self-review and undue influence. Identify the threat first, then decide whether safeguards can reduce it to an acceptable level.",
  },

  // ── Engagement acceptance ──
  {
    slug: "engagement-letter-review",
    subject: "aud",
    topic: "engagement-acceptance-and-quality-management",
    title: "Reviewing a draft engagement letter",
    format: "document-review",
    minutes: 15,
    scenario: [
      "A new staff accountant at Pruitt & Dale drafted the audit engagement letter for Calloway Foods, a private company. The engagement partner has asked you to review each numbered sentence before it goes to management.",
    ],
    exhibits: [
      {
        title: "Draft engagement letter (extract)",
        text: [
          "[1] Our audit will be conducted with the objective of expressing an opinion on whether the financial statements are presented fairly, in all material respects, in accordance with accounting principles generally accepted in the United States of America.",
          "[2] An audit provides absolute assurance that the financial statements are free from material misstatement.",
          "[3] Our audit is designed to detect all fraud and errors at the Company.",
          "[4] Management is responsible for the design, implementation and maintenance of internal control relevant to the preparation and fair presentation of financial statements.",
          "[5] We will be responsible for selecting and applying the Company's accounting policies.",
          "[6] Management will provide us with access to all information relevant to the preparation of the financial statements, additional information we may request, and unrestricted access to persons within the entity.",
          "[7] We will issue an unmodified opinion at the end of the audit.",
        ],
      },
    ],
    instructions: "For each sentence, select the best revision, or keep it if it is already appropriate.",
    columns: ["Sentence", "Revision"],
    rows: [
      row("[1] Objective of the audit", pick(["Keep as written", "Replace 'presented fairly' with 'accurate'", "Remove the reference to the financial reporting framework"], "Keep as written"), "This correctly states the objective and the applicable financial reporting framework."),
      row("[2] Level of assurance", pick(["Keep as written", "Replace 'absolute assurance' with 'reasonable assurance, a high but not absolute level of assurance'", "Replace 'absolute assurance' with 'limited assurance'"], "Replace 'absolute assurance' with 'reasonable assurance, a high but not absolute level of assurance'"), "An audit gives reasonable, not absolute, assurance because of its inherent limitations. Limited assurance describes a review."),
      row("[3] Detection of fraud and error", pick(["Keep as written", "Replace with 'designed to obtain reasonable assurance about whether the financial statements as a whole are free from material misstatement, whether due to fraud or error'", "Delete it: fraud is outside the scope of an audit"], "Replace with 'designed to obtain reasonable assurance about whether the financial statements as a whole are free from material misstatement, whether due to fraud or error'"), "Auditors look for material misstatement from fraud or error, but cannot promise to find all of it."),
      row("[4] Internal control", pick(["Keep as written", "Change 'Management' to 'The auditor'", "Delete it"], "Keep as written"), "Acknowledging management's responsibility for internal control is a precondition for an audit."),
      row("[5] Accounting policies", pick(["Keep as written", "Change to 'Management is responsible for selecting and applying the Company's accounting policies'", "Change to 'The auditor and management share responsibility for accounting policies'"], "Change to 'Management is responsible for selecting and applying the Company's accounting policies'"), "Selecting accounting policies is management's responsibility. An auditor who took it on would impair independence."),
      row("[6] Access to information", pick(["Keep as written", "Limit access to information management considers relevant", "Delete it"], "Keep as written"), "This is one of the responsibilities management must acknowledge before the audit is accepted."),
      row("[7] Form of the opinion", pick(["Keep as written", "Replace with a statement that the form and content of the report may need to change depending on the audit findings", "Replace 'unmodified' with 'qualified'"], "Replace with a statement that the form and content of the report may need to change depending on the audit findings"), "The opinion depends on the evidence obtained, so the auditor cannot promise it in advance."),
    ],
    takeaway: "An engagement letter states the objective, the reasonable (not absolute) assurance, management's responsibilities and that the report's form may change. It never guarantees an opinion or shifts management's duties to the auditor.",
  },
  {
    slug: "accepting-a-new-client",
    subject: "aud",
    topic: "engagement-acceptance-and-quality-management",
    title: "Accepting a new audit client",
    format: "classification",
    minutes: 10,
    scenario: [
      "Hargrove Plastics, a private company, has asked Mercer & Pike to replace its previous auditor. The engagement partner is deciding what must happen before the firm accepts the engagement.",
    ],
    instructions: "Select when, if at all, each step is needed.",
    columns: ["Step", "When"],
    rows: [
      row("Ask Hargrove's management to authorize the predecessor auditor to respond fully to inquiries", pick(ACCEPTANCE, "Required before accepting the engagement"), "Communication with the predecessor is required before acceptance, and the client must permit it."),
      row("Ask the predecessor about disagreements with management over accounting principles", pick(ACCEPTANCE, "Required before accepting the engagement"), "Inquiries about management's integrity, disagreements, fraud and the reasons for the change are made before accepting."),
      row("Review the predecessor's audit documentation for opening balances", pick(ACCEPTANCE, "Optional, usually after acceptance"), "Reviewing the predecessor's working papers helps with opening balances but is not required before acceptance."),
      row("Determine whether the financial reporting framework is acceptable", pick(ACCEPTANCE, "Required before accepting the engagement"), "An acceptable framework is a precondition for an audit."),
      row("Obtain management's agreement that it acknowledges its responsibilities", pick(ACCEPTANCE, "Required before accepting the engagement"), "Management's acknowledgment is the other precondition for an audit."),
      row("Agree the terms of the engagement with management in an engagement letter", pick(ACCEPTANCE, "Required before accepting the engagement"), "Terms must be agreed and documented in writing before the audit starts."),
      row("Perform preliminary analytical procedures on interim results", pick(ACCEPTANCE, "Not part of acceptance"), "Preliminary analytical procedures are part of risk assessment during planning."),
      row("Test controls over cash disbursements", pick(ACCEPTANCE, "Not part of acceptance"), "Tests of controls are further audit procedures performed during the audit."),
    ],
    takeaway: "Before accepting: talk to the predecessor (with the client's permission), confirm the preconditions for an audit and agree the terms in writing. Reviewing the predecessor's files comes later and is optional.",
  },

  // ── Planning and materiality ──
  {
    slug: "setting-materiality",
    subject: "aud",
    topic: "audit-planning-and-materiality",
    title: "Setting materiality",
    format: "calculation",
    minutes: 12,
    scenario: [
      "You are planning the audit of Sorensen Logistics, a profitable private company. Its budgeted pretax income from continuing operations is $2,400,000. Your firm's policy sets the materiality levels below.",
    ],
    exhibits: [
      {
        title: "Firm materiality policy",
        table: {
          head: ["Level", "Policy"],
          rows: [
            ["Overall materiality", "5% of pretax income from continuing operations"],
            ["Performance materiality", "75% of overall materiality"],
            ["Clearly trivial threshold", "5% of overall materiality"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars, and answer the questions.",
    columns: ["Item", "Answer"],
    rows: [
      row("Overall materiality ($)", num(120000), "5% × 2,400,000 = 120,000."),
      row("Performance materiality ($)", num(90000), "75% × 120,000 = 90,000. A lower amount for testing reduces the risk that undetected misstatements add up to more than materiality."),
      row("Clearly trivial threshold ($)", num(6000), "5% × 120,000 = 6,000."),
      row("Does the auditor need to accumulate a $4,000 misstatement?", pick(YES_NO, "No"), "Misstatements below the clearly trivial threshold need not be accumulated."),
      row("Revised overall materiality if actual pretax income turns out to be $1,800,000 ($)", num(90000), "Materiality is revised when new information changes it: 5% × 1,800,000 = 90,000."),
      row(
        "Materiality for related party disclosures, which users watch closely, may be:",
        pick(["Lower than overall materiality", "Higher than overall materiality", "The same as overall materiality in every case"], "Lower than overall materiality"),
        "Lower materiality can be set for particular classes, balances or disclosures where smaller misstatements could influence users.",
      ),
    ],
    takeaway: "Overall materiality is a judgment on a benchmark; performance materiality is lower to leave room for undetected misstatements. Materiality is revised if actual results differ from the figures used in planning.",
  },
  {
    slug: "strategy-or-audit-plan",
    subject: "aud",
    topic: "audit-planning-and-materiality",
    title: "Overall audit strategy or audit plan?",
    format: "classification",
    minutes: 8,
    scenario: [
      "The senior on the audit of Dalloway Retail is drafting the planning documents. Some decisions belong in the overall audit strategy and some in the detailed audit plan.",
    ],
    instructions: "Select which planning document each item belongs in.",
    columns: ["Item", "Document"],
    rows: [
      row("Setting the scope, timing and direction of the audit", pick(STRATEGY, "Overall audit strategy"), "The strategy sets the scope, timing and direction, and guides the plan."),
      row("Identifying the reporting framework and industry reporting requirements", pick(STRATEGY, "Overall audit strategy"), "The characteristics of the engagement are part of the strategy."),
      row("Setting the reporting deadlines and key dates for communications", pick(STRATEGY, "Overall audit strategy"), "Reporting objectives and timing are strategy decisions."),
      row("Deciding to use team members with specialist information technology skills", pick(STRATEGY, "Overall audit strategy"), "The nature, timing and extent of resources are part of the strategy."),
      row("The nature, timing and extent of planned risk assessment procedures", pick(STRATEGY, "Audit plan"), "The audit plan sets out the specific procedures."),
      row("The specific substantive procedures planned for accounts receivable", pick(STRATEGY, "Audit plan"), "Further audit procedures at the assertion level belong in the plan."),
      row("Other procedures needed to comply with generally accepted auditing standards", pick(STRATEGY, "Audit plan"), "The plan also covers other planned procedures required by the standards."),
    ],
    takeaway: "Strategy is the big picture: scope, timing, direction and resources. The audit plan is the detail: the nature, timing and extent of each procedure.",
  },

  // ── Understanding the entity and internal control ──
  {
    slug: "coso-components",
    subject: "aud",
    topic: "understanding-the-entity-and-internal-control",
    title: "Matching controls to the internal control components",
    format: "classification",
    minutes: 10,
    scenario: [
      "As part of understanding Kittredge Medical Supply's system of internal control, you documented the items below. Classify each into the five components of the Committee of Sponsoring Organizations (COSO) internal control framework.",
    ],
    instructions: "Select the component each item belongs to.",
    columns: ["Item", "Component"],
    rows: [
      row("The board of directors oversees management and is independent of it", pick(COMPONENTS, "Control environment"), "Board independence and oversight are part of the control environment."),
      row("Kittredge has a code of conduct and hires staff with the competence their roles need", pick(COMPONENTS, "Control environment"), "Integrity, ethical values and commitment to competence are the control environment."),
      row("Management identifies risks from new medical device regulations and assesses their likely effect", pick(COMPONENTS, "Risk assessment"), "Identifying and analyzing risks to objectives is the risk assessment component."),
      row("A manager must approve each purchase order before it is sent to a supplier", pick(COMPONENTS, "Control activities"), "Approvals are control activities."),
      row("Bank reconciliations are prepared monthly by someone who does not handle cash", pick(COMPONENTS, "Control activities"), "Reconciliations and segregation of duties are control activities."),
      row("The accounting system records transactions, and the accounting policy manual is shared with all staff", pick(COMPONENTS, "Information and communication"), "Systems that capture information and the way responsibilities are communicated."),
      row("Internal audit periodically evaluates whether key controls are working", pick(COMPONENTS, "Monitoring activities"), "Ongoing and separate evaluations of controls are monitoring activities."),
      row("Management reviews customer complaints about billing to spot control failures", pick(COMPONENTS, "Monitoring activities"), "Using external information to detect control problems is monitoring."),
    ],
    takeaway: "Five components: control environment (tone at the top), risk assessment, control activities, information and communication, and monitoring activities. Control activities are only one of the five.",
  },
  {
    slug: "segregation-of-duties",
    subject: "aud",
    topic: "understanding-the-entity-and-internal-control",
    title: "Spotting incompatible duties",
    format: "classification",
    minutes: 8,
    scenario: [
      "While documenting internal control at Fairhaven Distributors, you noted how duties are split among staff. Good segregation keeps authorization of transactions, custody of assets and recording of transactions with different people.",
    ],
    instructions: "Select which incompatible duties, if any, each arrangement combines.",
    columns: ["Arrangement", "Duties combined"],
    rows: [
      row("The cashier who receives customer checks also posts payments to customer accounts", pick(DUTIES, "Custody and recording"), "The cashier could steal a payment and hide it in the records (lapping)."),
      row("The purchasing manager approves purchase orders and also records supplier invoices", pick(DUTIES, "Authorization and recording"), "The manager could approve fictitious purchases and record them."),
      row("The payroll supervisor approves new hires and hands out paychecks", pick(DUTIES, "Authorization and custody"), "The supervisor could add a fictitious employee and collect the paycheck."),
      row("The warehouse clerk who holds inventory also updates the perpetual inventory records", pick(DUTIES, "Custody and recording"), "The clerk could remove goods and adjust the records to hide it."),
      row("A receivables clerk who handles cash receipts can also write off customer balances without approval", pick(DUTIES, "Authorization and custody"), "The clerk could keep a payment and authorize a write-off to cover it."),
      row("The credit manager approves customer credit, and a separate billing clerk prepares invoices", pick(DUTIES, "No conflict"), "Authorization and recording are with different people."),
      row("The treasurer signs checks after reviewing supporting documents prepared by the payables department", pick(DUTIES, "No conflict"), "Payables prepares and records; the treasurer authorizes and has custody of the check-signing. That split is appropriate."),
    ],
    takeaway: "No one person should be able to both commit and conceal an error or fraud. Keep authorization, custody and recording separate.",
  },

  // ── Assessing the risk of material misstatement ──
  {
    slug: "audit-risk-model",
    subject: "aud",
    topic: "assessing-risk-of-material-misstatement",
    title: "Applying the audit risk model",
    format: "calculation",
    minutes: 10,
    scenario: [
      "For the inventory valuation assertion at Tamsin Electronics, the audit team has set acceptable audit risk at 5%. It assessed inherent risk at 50% and control risk at 40%. Audit risk = inherent risk × control risk × detection risk.",
    ],
    instructions: "Enter percentages as whole numbers (for example, enter 25 for 25%), and answer the questions.",
    columns: ["Item", "Answer"],
    rows: [
      row("Acceptable detection risk (%)", num(25, 0.1), "Detection risk = 5% ÷ (50% × 40%) = 5% ÷ 20% = 25%."),
      row("Acceptable detection risk if the team doesn't test controls and assesses control risk at 100% (%)", num(10, 0.1), "5% ÷ (50% × 100%) = 10%."),
      row(
        "When acceptable detection risk falls, substantive procedures should be:",
        pick(["More extensive, closer to year-end and more persuasive", "Less extensive and performed at an interim date", "Replaced by tests of controls"], "More extensive, closer to year-end and more persuasive"),
        "Lower detection risk needs more and better substantive evidence.",
      ),
      row(
        "Which component of audit risk can the auditor control directly?",
        pick(["Inherent risk", "Control risk", "Detection risk"], "Detection risk"),
        "Inherent and control risk exist independently of the audit; the auditor assesses them. Detection risk depends on the auditor's procedures.",
      ),
      row(
        "Can detection risk be reduced to zero by doing more work?",
        pick(YES_NO, "No"),
        "Some detection risk always remains, because of sampling and the judgment involved in any audit.",
      ),
    ],
    takeaway: "The risk of material misstatement (inherent × control) is assessed; detection risk is what is left to the auditor. The higher the assessed risk, the lower the acceptable detection risk and the more substantive work needed.",
  },
  {
    slug: "inherent-control-or-detection-risk",
    subject: "aud",
    topic: "assessing-risk-of-material-misstatement",
    title: "Inherent, control or detection risk?",
    format: "classification",
    minutes: 8,
    scenario: [
      "The audit manager at Larch & Co. is reviewing the risk assessment for a client that makes consumer electronics. Each note below affects one component of audit risk.",
    ],
    instructions: "Select the component of audit risk each note mainly affects.",
    columns: ["Note", "Risk component"],
    rows: [
      row("The client holds complex derivatives whose valuation needs significant judgment", pick(RISK, "Inherent risk"), "Complexity and judgment make the assertion more susceptible to misstatement before considering controls."),
      row("Products become obsolete quickly as technology changes", pick(RISK, "Inherent risk"), "Obsolescence raises the inherent risk of overstated inventory."),
      row("Small, valuable items in inventory are easy to steal", pick(RISK, "Inherent risk"), "Susceptibility to theft is an inherent characteristic of the asset."),
      row("High staff turnover means account reconciliations were skipped for three months", pick(RISK, "Control risk"), "A control that doesn't operate raises control risk."),
      row("Senior managers can post journal entries without anyone reviewing them", pick(RISK, "Control risk"), "Missing review controls (and the chance of override) raise control risk."),
      row("The audit team used a sample size too small for the risk", pick(RISK, "Detection risk"), "The auditor's own procedures may fail to detect misstatement."),
      row("A staff auditor misread the evidence from a confirmation", pick(RISK, "Detection risk"), "Misinterpreting evidence is a detection risk failure."),
    ],
    takeaway: "Inherent risk comes from the nature of the item, control risk from the client's controls, and detection risk from the auditor's own work.",
  },

  // ── Fraud ──
  {
    slug: "fraud-risk-factors",
    subject: "aud",
    topic: "fraud-risk",
    title: "Fraud risk factors and the fraud triangle",
    format: "classification",
    minutes: 8,
    scenario: [
      "During the engagement team discussion for the audit of Brayfield Homes, team members listed the fraud risk factors below. Classify each into the fraud triangle.",
    ],
    instructions: "Select the fraud triangle condition each risk factor represents.",
    columns: ["Risk factor", "Condition"],
    rows: [
      row("Executive bonuses depend on meeting quarterly earnings targets", pick(TRIANGLE, "Incentive or pressure"), "Pay tied to targets creates a motive to manipulate results."),
      row("Brayfield is close to breaching the covenants on its main loan", pick(TRIANGLE, "Incentive or pressure"), "Financial pressure to avoid default."),
      row("The audit committee meets rarely and does not challenge management", pick(TRIANGLE, "Opportunity"), "Weak oversight lets fraud go undetected."),
      row("Large related-party transactions are outside the normal course of business", pick(TRIANGLE, "Opportunity"), "Unusual related-party transactions make it easier to hide fraud."),
      row("Complex transactions near year-end raise difficult questions about their substance", pick(TRIANGLE, "Opportunity"), "Complexity gives room to misstate results."),
      row("Management has repeatedly ignored the auditor's recommendations to fix control deficiencies", pick(TRIANGLE, "Attitude or rationalization"), "Disregard for controls shows an attitude that allows fraud."),
      row("Employees say they are underpaid and the company 'owes them'", pick(TRIANGLE, "Attitude or rationalization"), "This is how people justify misappropriating assets."),
    ],
    takeaway: "Fraud needs incentive or pressure, an opportunity and an attitude or rationalization. Opportunity is the condition controls can most directly reduce.",
  },
  {
    slug: "responding-to-fraud-risk",
    subject: "aud",
    topic: "fraud-risk",
    title: "Required responses to the risk of fraud",
    format: "classification",
    minutes: 10,
    scenario: [
      "The engagement partner on the audit of Linwood Apparel wants to confirm which fraud procedures the auditing standards require in every audit and which respond only to specific risks the team identified.",
    ],
    instructions: "Select the category for each procedure.",
    columns: ["Procedure", "Category"],
    rows: [
      row("Presume there is a risk of fraud in revenue recognition (unless rebutted and documented)", pick(FRAUD_RESPONSE, "Required in every audit"), "Revenue recognition is presumed to be a fraud risk in every audit; the presumption can be rebutted only with documented reasons."),
      row("Test the appropriateness of journal entries and other adjustments", pick(FRAUD_RESPONSE, "Required in every audit"), "Management override is a risk in every audit, so journal entry testing is always required."),
      row("Review accounting estimates for bias, including a retrospective review of prior-year estimates", pick(FRAUD_RESPONSE, "Required in every audit"), "Also a required response to the risk of management override."),
      row("Evaluate the business rationale for significant unusual transactions", pick(FRAUD_RESPONSE, "Required in every audit"), "The third required response to management override."),
      row("Hold an engagement team discussion about how the statements could be misstated due to fraud", pick(FRAUD_RESPONSE, "Required in every audit"), "The team discussion (brainstorming) is required in every audit."),
      row("Make surprise inventory counts at several locations", pick(FRAUD_RESPONSE, "Response to a specific assessed fraud risk"), "Unpredictable procedures like this respond to an identified risk, for example of inventory theft."),
      row("Confirm the terms of sales contracts directly with customers, asking about side agreements", pick(FRAUD_RESPONSE, "Response to a specific assessed fraud risk"), "A targeted response to an identified risk of fraudulent revenue."),
      row("Engage a forensic accountant on every audit", pick(FRAUD_RESPONSE, "Not required"), "Forensic specialists may be used when risks warrant it, but they are not required."),
    ],
    takeaway: "In every audit: the team discussion, the presumed revenue fraud risk and the three responses to management override (journal entries, estimates, unusual transactions). Other procedures are tailored to the risks identified.",
  },
];
