import type { GlossaryTerm } from "../types";

/** AUD terms, third batch. */
export const audTermsC: GlossaryTerm[] = [
  {
    slug: "reasonable-assurance",
    term: "Reasonable assurance",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "Reasonable assurance is a high, but not absolute, level of assurance that the financial statements as a whole are free from material misstatement. It is the level an audit provides.",
    takeaways: [
      "It isn't absolute because of inherent limitations, such as the use of judgment, testing samples rather than everything and the possibility of collusion.",
      "A review provides limited assurance; a compilation provides none.",
      "The auditor's report explains that reasonable assurance is not a guarantee.",
    ],
    related: ["review-engagement", "compilation-engagement"],
    match: ["reasonable assurance"],
  },
  {
    slug: "predecessor-auditor",
    term: "Predecessor auditor",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "The predecessor auditor is the auditor who audited the most recent financial statements, or was engaged to, and has resigned, declined to stand for reappointment or been notified that its services are ended.",
    takeaways: [
      "Before accepting, the successor must ask the predecessor about matters such as management's integrity, disagreements and the reasons for the change, after the client permits it.",
      "Reviewing the predecessor's working papers is optional and happens after acceptance.",
      "If the client won't permit the predecessor to respond, the successor considers declining the engagement.",
    ],
    related: ["engagement-letter"],
    match: ["predecessor", "successor"],
  },
  {
    slug: "those-charged-with-governance",
    term: "Those charged with governance",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Those charged with governance are the people responsible for overseeing the entity's strategic direction and accountability, including its financial reporting, such as the board of directors or the audit committee.",
    takeaways: [
      "The auditor communicates the planned scope and timing, significant findings, uncorrected misstatements and independence matters to them.",
      "Significant deficiencies and material weaknesses in internal control must be communicated to them in writing.",
      "In a small entity they may be the same people as management.",
    ],
    related: ["material-weakness", "management-representation-letter"],
    match: ["charged with governance", "audit committee"],
  },
  {
    slug: "inherent-risk",
    term: "Inherent risk",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Inherent risk is the susceptibility of an assertion to a material misstatement before considering any related controls.",
    takeaways: [
      "It is higher for complex, subjective or judgment-heavy items, such as estimates, and for assets easily stolen.",
      "Together with control risk, it makes up the risk of material misstatement.",
      "The auditor assesses it but can't change it.",
    ],
    related: ["audit-risk", "detection-risk"],
    match: ["inherent risk"],
  },
  {
    slug: "detection-risk",
    term: "Detection risk",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Detection risk is the risk that the auditor's procedures will fail to detect a material misstatement that exists.",
    takeaways: [
      "It is the only component of audit risk the auditor controls, through the nature, timing and extent of procedures.",
      "The higher the risk of material misstatement, the lower the detection risk the auditor can accept.",
      "It can never be reduced to zero.",
    ],
    related: ["audit-risk", "inherent-risk"],
    match: ["detection risk"],
  },
  {
    slug: "revenue-recognition-fraud-presumption",
    term: "Presumed fraud risk in revenue recognition",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Auditing standards require the auditor to presume that there is a risk of material misstatement due to fraud in revenue recognition, and to treat it as a significant risk, unless the presumption is rebutted.",
    takeaways: [
      "If the auditor concludes the presumption doesn't apply, the reasons must be documented.",
      "Typical schemes include fictitious sales, side agreements and improper cutoff.",
      "Responses can include confirming contract terms with customers and testing cutoff.",
    ],
    related: ["fraud-triangle", "significant-risk", "management-override-of-controls"],
    match: ["revenue", "presum"],
  },
  {
    slug: "tests-of-details",
    term: "Tests of details",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "Tests of details are substantive procedures that examine individual transactions, balances or disclosures, such as vouching, confirming, recalculating and inspecting documents.",
    takeaways: [
      "They are generally more persuasive than substantive analytical procedures for high-risk assertions.",
      "For a significant risk, substantive procedures must include tests of details unless controls are also tested.",
      "Samples can be selected statistically or not.",
    ],
    related: ["substantive-procedures", "vouching-and-tracing"],
    match: ["test of details", "tests of details"],
  },
  {
    slug: "vouching-and-tracing",
    term: "Vouching and tracing",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Vouching selects items from the accounting records and examines the supporting documents; tracing selects source documents and follows them into the records. The direction decides which assertion is tested.",
    takeaways: [
      "Vouching (records to documents) tests existence or occurrence: the risk of overstatement.",
      "Tracing (documents to records) tests completeness: the risk of understatement.",
      "The search for unrecorded liabilities is a form of tracing.",
    ],
    related: ["assertions", "tests-of-details"],
    match: ["vouch", "trac"],
  },
  {
    slug: "cutoff",
    term: "Cutoff",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Cutoff is the assertion that transactions and events have been recorded in the correct accounting period.",
    takeaways: [
      "Auditors test it by examining transactions just before and after year-end, such as shipping documents and receiving reports.",
      "Shipping terms decide when a sale or purchase belongs in the period.",
      "Cutoff errors in inventory affect cost of goods sold in two periods.",
    ],
    related: ["assertions", "fob-shipping-terms"],
    match: ["cutoff", "cut-off"],
  },
  {
    slug: "sampling-risk",
    term: "Sampling risk",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Sampling risk is the risk that the auditor's conclusion based on a sample differs from the conclusion it would reach if it tested the whole population.",
    takeaways: [
      "For tests of controls it means wrongly concluding control risk is lower (risk of overreliance) or higher than it is.",
      "For substantive tests it means wrongly accepting or wrongly rejecting a balance.",
      "Larger samples reduce it; nonsampling risk, such as misreading evidence, is not affected by sample size.",
    ],
    related: ["upper-deviation-limit", "attribute-sampling"],
    match: ["sampling risk", "overreliance"],
  },
  {
    slug: "attribute-sampling",
    term: "Attribute sampling",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Attribute sampling is a statistical method that estimates the rate of occurrence of a characteristic in a population, used mainly in tests of controls to estimate the rate of deviation from a control.",
    takeaways: [
      "Sample size depends on the tolerable deviation rate, the expected deviation rate and the desired confidence level.",
      "The result is compared using the upper deviation limit, not the sample rate.",
      "The nature of each deviation is also considered, for example whether it suggests fraud.",
    ],
    related: ["upper-deviation-limit", "sampling-risk"],
    match: ["attribute", "deviation rate"],
  },
  {
    slug: "subsequently-discovered-facts",
    term: "Subsequently discovered facts",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Subsequently discovered facts are facts that become known to the auditor after the report date that, had they been known then, might have caused the auditor to revise the report.",
    takeaways: [
      "The auditor discusses them with management and decides whether the financial statements need revising.",
      "If the statements are revised, the auditor issues a new or updated report.",
      "If management won't act and users may be relying on the statements, the auditor takes steps to prevent that reliance.",
    ],
    related: ["subsequent-events"],
    match: ["subsequently discovered"],
  },
  {
    slug: "other-information",
    term: "Other information (annual report)",
    section: "aud",
    topic: "audit-reports",
    definition:
      "Other information is financial and nonfinancial information, other than the financial statements and the auditor's report, included in the entity's annual report, such as a letter to shareholders.",
    takeaways: [
      "The auditor reads it and considers whether it is materially inconsistent with the financial statements or the auditor's knowledge.",
      "The auditor doesn't express an opinion on it.",
      "If a material misstatement in it isn't corrected, the auditor describes it in the report or considers withdrawing.",
    ],
    related: ["unmodified-opinion"],
    match: ["other information"],
  },
  {
    slug: "unmodified-opinion",
    term: "Unmodified opinion",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An unmodified (clean) opinion states that the financial statements are presented fairly, in all material respects, in accordance with the applicable financial reporting framework.",
    takeaways: [
      "In private-company reports, the Opinion section comes first, followed by the Basis for Opinion.",
      "Emphasis-of-matter and other-matter paragraphs can be added without changing the opinion.",
      "The report is dated no earlier than the date sufficient appropriate evidence was obtained.",
    ],
    related: ["qualified-opinion", "adverse-opinion", "emphasis-of-matter-paragraph"],
    match: ["unmodified"],
  },
  {
    slug: "complementary-user-entity-controls",
    term: "Complementary user entity controls",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "Complementary user entity controls are controls that a service organization assumes its customers have in place, and that are needed, together with the service organization's own controls, to achieve the control objectives in its report.",
    takeaways: [
      "They are listed in the service organization's system description.",
      "Auditors of the customers test whether they operate at their client.",
      "An example is a customer reviewing the payroll reports a payroll processor sends back.",
    ],
    related: ["soc-1-report"],
    match: ["complementary user entity", "user entity"],
  },
  {
    slug: "internal-audit-function",
    term: "Internal audit function",
    section: "aud",
    topic: "group-audits-and-using-others-work",
    definition:
      "The internal audit function is the part of an entity that performs assurance and consulting activities to evaluate and improve its governance, risk management and internal control.",
    takeaways: [
      "The external auditor may use its work, or get direct assistance from internal auditors, after evaluating its objectivity, competence and systematic approach.",
      "Significant judgments stay with the external auditor.",
      "The external auditor remains solely responsible for the opinion.",
    ],
    related: ["auditors-specialist"],
    match: ["internal audit"],
  },
];
