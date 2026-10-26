import type { GlossaryTerm } from "../types";

export const audTerms: GlossaryTerm[] = [
  {
    slug: "materiality",
    term: "Materiality",
    section: "aud",
    topic: "audit-planning-and-materiality",
    definition:
      "Materiality is the size of a misstatement, alone or with others, that could reasonably be expected to influence the economic decisions of users of the financial statements. Auditors set it during planning as a matter of professional judgment.",
    takeaways: [
      "It is usually set using a benchmark, such as a percentage of pretax income, revenue or total assets.",
      "Performance materiality is set lower, to reduce the risk that undetected misstatements add up to more than materiality.",
      "It is revised during the audit if new information would have led to a different amount.",
    ],
    example: "With pretax income of $2,400,000 and a 5% benchmark, overall materiality is $120,000; at 75%, performance materiality is $90,000.",
    related: ["audit-risk"],
    match: ["materiality"],
  },
  {
    slug: "audit-risk",
    term: "Audit risk",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Audit risk is the risk that the auditor expresses an inappropriate opinion when the financial statements are materially misstated. It depends on the risk of material misstatement (inherent and control risk) and detection risk.",
    takeaways: [
      "Audit risk = inherent risk × control risk × detection risk.",
      "The auditor assesses inherent and control risk and controls detection risk through the nature, timing and extent of procedures.",
      "The higher the assessed risk of material misstatement, the lower the acceptable detection risk and the more persuasive the evidence needed.",
    ],
    example: "Acceptable audit risk 5%, inherent risk 50%, control risk 40%: acceptable detection risk is 5% ÷ 20% = 25%.",
    related: ["materiality", "significant-risk"],
    match: ["audit risk", "detection risk", "inherent risk", "control risk"],
  },
  {
    slug: "significant-risk",
    term: "Significant risk",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "A significant risk is an identified risk of material misstatement close to the upper end of the spectrum of inherent risk, or one the auditing standards require to be treated as significant, such as fraud risks.",
    takeaways: [
      "The auditor must obtain an understanding of controls that address it.",
      "Substantive procedures for a significant risk must include tests of details unless the auditor also tests controls; analytical procedures alone aren't enough.",
      "Fraud risks, including the presumed risk in revenue recognition, are always significant risks.",
    ],
    related: ["audit-risk", "fraud-triangle"],
    match: ["significant risk"],
  },
  {
    slug: "professional-skepticism",
    term: "Professional skepticism",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Professional skepticism is an attitude that includes a questioning mind, alertness to conditions that may indicate misstatement, and a critical assessment of audit evidence.",
    takeaways: [
      "It applies throughout the audit, regardless of the auditor's past experience of management's honesty.",
      "It means not accepting less persuasive evidence because of a belief that management is honest.",
      "It is especially important for accounting estimates, related parties and fraud risks.",
    ],
    related: ["fraud-triangle"],
    match: ["skepticism"],
  },
  {
    slug: "fraud-triangle",
    term: "Fraud triangle",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "The fraud triangle describes three conditions usually present when fraud occurs: an incentive or pressure, an opportunity, and an attitude or rationalization that allows someone to commit it.",
    takeaways: [
      "Auditors use it to identify fraud risk factors during risk assessment.",
      "Opportunity is the condition that internal controls most directly reduce.",
      "It applies to both fraudulent financial reporting and misappropriation of assets.",
    ],
    example: "Bonuses tied to earnings targets (pressure), a weak audit committee (opportunity) and a history of ignoring control recommendations (attitude).",
    related: ["professional-skepticism", "significant-risk"],
    match: ["fraud"],
  },
  {
    slug: "assertions",
    term: "Assertions",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Assertions are management's implicit or explicit representations about the recognition, measurement, presentation and disclosure of items in the financial statements. Auditors use them to consider the types of misstatement that could occur.",
    takeaways: [
      "For classes of transactions: occurrence, completeness, accuracy, cutoff and classification.",
      "For account balances: existence, rights and obligations, completeness, and accuracy, valuation and allocation.",
      "Direction of testing matters: records to evidence tests existence or occurrence; evidence to records tests completeness.",
    ],
    related: ["substantive-procedures", "external-confirmation"],
    match: ["assertion", "existence", "completeness"],
  },
  {
    slug: "substantive-procedures",
    term: "Substantive procedures",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "Substantive procedures are audit procedures designed to detect material misstatements at the assertion level. They are either tests of details or substantive analytical procedures.",
    takeaways: [
      "Some substantive procedures are required for every material class of transactions, account balance and disclosure, whatever the control risk.",
      "Higher assessed risk calls for more extensive procedures, performed closer to year-end, with more persuasive evidence.",
      "Examples include confirmations, vouching, recalculation and inventory observation.",
    ],
    related: ["tests-of-controls", "analytical-procedures"],
    match: ["substantive"],
  },
  {
    slug: "tests-of-controls",
    term: "Tests of controls",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "Tests of controls are audit procedures that evaluate whether controls operated effectively throughout the period. They are performed when the auditor plans to rely on controls or when substantive procedures alone can't give enough evidence.",
    takeaways: [
      "Methods include inquiry combined with observation, inspection of evidence and reperformance; inquiry alone is never enough.",
      "Evidence that controls operate effectively allows a lower assessment of control risk.",
      "Automated controls may need testing only once if general information technology controls are effective.",
    ],
    related: ["substantive-procedures", "upper-deviation-limit"],
    match: ["test of controls", "tests of controls"],
  },
  {
    slug: "external-confirmation",
    term: "External confirmation",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "An external confirmation is audit evidence obtained as a direct written response to the auditor from a third party, such as a customer, bank or lawyer, on paper or electronically.",
    takeaways: [
      "The auditor must control the requests and replies throughout.",
      "Positive confirmations ask for a reply in every case; negative ones ask for a reply only if the recipient disagrees.",
      "Nonresponses to positive requests require alternative procedures, and exceptions must be investigated.",
    ],
    related: ["assertions"],
    match: ["confirmation"],
  },
  {
    slug: "analytical-procedures",
    term: "Analytical procedures",
    section: "aud",
    topic: "analytical-procedures",
    definition:
      "Analytical procedures evaluate financial information by analyzing plausible relationships among financial and nonfinancial data, and investigate fluctuations that are inconsistent with other information or differ from expected values.",
    takeaways: [
      "They are required in risk assessment and near the end of the audit, and optional as substantive procedures.",
      "Precision depends on the expectation: disaggregated, reliable data gives a tighter expectation.",
      "Differences above the threshold must be investigated and management's explanations corroborated.",
    ],
    related: ["substantive-procedures"],
    match: ["analytical"],
  },
  {
    slug: "upper-deviation-limit",
    term: "Upper deviation limit",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "In attribute sampling for tests of controls, the upper deviation limit is the highest rate of deviation in the population that the sample results support at the chosen confidence level.",
    takeaways: [
      "It equals the sample deviation rate plus an allowance for sampling risk.",
      "The auditor compares it, not the sample rate, with the tolerable rate of deviation.",
      "If it exceeds the tolerable rate, the auditor can't rely on the control as planned.",
    ],
    example: "3 deviations in a sample of 100 (3%) with an upper deviation limit of 7.6% fails against a 6% tolerable rate.",
    related: ["tests-of-controls", "monetary-unit-sampling"],
    match: ["deviation", "tolerable rate"],
  },
  {
    slug: "monetary-unit-sampling",
    term: "Monetary unit sampling (MUS)",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Monetary unit sampling (MUS) is a statistical sampling method for substantive tests in which each dollar in the population has an equal chance of selection, so larger items are more likely to be chosen.",
    takeaways: [
      "It is efficient for testing overstatement and finding a few large misstatements.",
      "Items at or above the sampling interval are always selected, and their misstatements aren't projected.",
      "It is less suited to testing understatement and zero or negative balances.",
    ],
    example: "Recorded amount $1,000,000, tolerable misstatement $50,000, reliability factor 3.0: sampling interval $16,667 and a sample of 60.",
    related: ["upper-deviation-limit"],
    match: ["monetary unit", "MUS", "sampling interval"],
  },
  {
    slug: "key-audit-matters",
    term: "Key audit matters",
    section: "aud",
    topic: "audit-reports",
    definition:
      "Key audit matters are the matters that, in the auditor's professional judgment, were of most significance in the audit. In a private-company audit, the auditor communicates them in the report only when engaged to do so.",
    takeaways: [
      "They are selected from matters communicated to those charged with governance.",
      "They don't modify the opinion and aren't a substitute for a modified opinion.",
      "In public company audits, the related requirement is to report critical audit matters.",
    ],
    related: ["emphasis-of-matter-paragraph", "qualified-opinion"],
    match: ["key audit matter"],
  },
  {
    slug: "emphasis-of-matter-paragraph",
    term: "Emphasis-of-matter paragraph",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An emphasis-of-matter paragraph is added to the auditor's report to draw users' attention to a matter that is appropriately presented or disclosed in the financial statements and is fundamental to their understanding.",
    takeaways: [
      "It does not change the opinion.",
      "It is required in some cases, such as a justified change in accounting principle; in others it is the auditor's choice.",
      "An other-matter paragraph, by contrast, refers to matters not presented or disclosed in the statements.",
    ],
    related: ["key-audit-matters", "qualified-opinion"],
    match: ["emphasis-of-matter", "emphasis of matter"],
  },
  {
    slug: "qualified-opinion",
    term: "Qualified opinion",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A qualified ('except for') opinion is expressed when misstatements, or a lack of sufficient appropriate evidence, are material but not pervasive to the financial statements.",
    takeaways: [
      "Material and pervasive misstatement leads to an adverse opinion instead.",
      "A material and pervasive inability to obtain evidence leads to a disclaimer of opinion.",
      "The report includes a basis for the qualified opinion explaining the matter.",
    ],
    related: ["emphasis-of-matter-paragraph"],
    match: ["qualified", "adverse", "disclaimer"],
  },
  {
    slug: "management-representation-letter",
    term: "Management representation letter",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "A management representation letter contains written statements from management confirming matters such as its responsibilities for the financial statements and that it has given the auditor all relevant information.",
    takeaways: [
      "It is dated as of the auditor's report date and covers all periods in the report.",
      "It is signed by those with overall responsibility, usually the chief executive and chief financial officer.",
      "It supports but never replaces other audit evidence; if management refuses to provide it, the auditor disclaims or withdraws.",
    ],
    match: ["representation"],
  },
  {
    slug: "independence",
    term: "Independence",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Independence is freedom from relationships and influences that would compromise, or appear to compromise, an auditor's objectivity. It covers both independence of mind and independence in appearance.",
    takeaways: [
      "Any direct financial interest in an attest client held by a covered member impairs independence, however small.",
      "Performing management responsibilities for an attest client impairs independence.",
      "Under the conceptual framework, auditors identify threats, evaluate their significance and apply safeguards.",
    ],
    match: ["independence", "covered member"],
  },
  {
    slug: "soc-1-report",
    term: "System and Organization Controls (SOC) 1 report",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "A System and Organization Controls (SOC) 1 report is a service auditor's report on a service organization's controls that are relevant to its customers' internal control over financial reporting.",
    takeaways: [
      "Type 1 covers the description and design of controls at a point in time; Type 2 adds operating effectiveness over a period.",
      "Its use is restricted to the service organization, its customers and their auditors.",
      "Customers' auditors read it alongside the complementary user entity controls it describes.",
    ],
    related: ["trust-services-criteria"],
    match: ["SOC 1", "service organization"],
  },
  {
    slug: "agreed-upon-procedures",
    term: "Agreed-upon procedures engagement",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "In an agreed-upon procedures engagement, a practitioner performs specific procedures agreed with the engaging party and reports the findings, without expressing an opinion or conclusion.",
    takeaways: [
      "Users draw their own conclusions from the findings.",
      "The engaging party acknowledges that the procedures are appropriate for its purpose.",
      "It is performed under the attestation standards and requires independence.",
    ],
    match: ["agreed-upon"],
  },
  {
    slug: "material-weakness",
    term: "Material weakness",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "A material weakness is a deficiency, or combination of deficiencies, in internal control such that there is a reasonable possibility that a material misstatement won't be prevented, or detected and corrected, on a timely basis.",
    takeaways: [
      "A significant deficiency is less severe but still merits the attention of those charged with governance.",
      "Material weaknesses and significant deficiencies must be communicated in writing to management and those charged with governance.",
      "Severity depends on the possibility of misstatement, not on whether one actually occurred.",
    ],
    match: ["material weakness", "significant deficienc"],
  },
];
