import type { GlossaryTerm } from "../types";

/** AUD terms, second batch. */
export const audTermsB: GlossaryTerm[] = [
  {
    slug: "engagement-letter",
    term: "Engagement letter",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "An engagement letter documents the agreed terms of an audit, including its objective and scope, the responsibilities of the auditor and management, the financial reporting framework and the expected form of the report.",
    takeaways: [
      "The terms must be agreed in writing before the audit begins.",
      "It states that an audit has inherent limitations, so some material misstatements may not be detected.",
      "Recurring audits may not need a new letter each year, but the auditor considers whether the terms need revising.",
    ],
    related: ["engagement-quality-review"],
    match: ["engagement letter", "terms of the engagement"],
  },
  {
    slug: "engagement-quality-review",
    term: "Engagement quality review",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "An engagement quality review is an objective evaluation of the significant judgments made by an engagement team, performed by a qualified reviewer who is not part of the team, before the report is released.",
    takeaways: [
      "It is required when law or regulation requires it, or when the firm decides it is needed to respond to quality risks.",
      "A former engagement partner must wait two years (a cooling-off period) before acting as reviewer on that engagement.",
      "The report can't be released until the reviewer has completed the review.",
    ],
    related: ["engagement-letter"],
    match: ["quality review", "SQMS"],
  },
  {
    slug: "performance-materiality",
    term: "Performance materiality",
    section: "aud",
    topic: "audit-planning-and-materiality",
    definition:
      "Performance materiality is an amount set below overall materiality to reduce, to an appropriately low level, the risk that uncorrected and undetected misstatements together exceed materiality for the financial statements as a whole.",
    takeaways: [
      "It is used to plan the nature, timing and extent of audit procedures.",
      "It is often set at a percentage of overall materiality, depending on risk and expected misstatements.",
      "It can be set at different levels for particular accounts or disclosures.",
    ],
    related: ["materiality"],
    match: ["performance materiality", "tolerable misstatement"],
  },
  {
    slug: "coso-internal-control",
    term: "Internal control framework (COSO)",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "Internal control is a process designed to provide reasonable assurance about achieving objectives in operations, reporting and compliance. The Committee of Sponsoring Organizations (COSO) framework divides it into five components.",
    takeaways: [
      "The five components: control environment, risk assessment, control activities, information and communication, and monitoring activities.",
      "The control environment, or 'tone at the top', is the foundation for the others.",
      "Internal control gives reasonable, not absolute, assurance because of limits such as human error and management override.",
    ],
    related: ["material-weakness", "walkthrough"],
    match: ["COSO", "internal control", "control environment"],
  },
  {
    slug: "walkthrough",
    term: "Walkthrough",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "A walkthrough follows a transaction from origination through the entity's processes and systems until it is reflected in the financial records, using the same documents and technology the entity uses.",
    takeaways: [
      "It helps the auditor understand the process and confirm that controls are designed and implemented.",
      "It combines inquiry, observation, inspection and sometimes reperformance.",
      "On its own it is usually not enough to test whether controls operated effectively over the period.",
    ],
    related: ["coso-internal-control", "tests-of-controls"],
    match: ["walkthrough", "design and implementation"],
  },
  {
    slug: "risk-assessment-procedures",
    term: "Risk assessment procedures",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Risk assessment procedures are the procedures the auditor performs to understand the entity, its environment, its financial reporting framework and its system of internal control, in order to identify and assess the risks of material misstatement.",
    takeaways: [
      "They include inquiries of management and others, analytical procedures, and observation and inspection.",
      "On their own they don't provide sufficient appropriate evidence for the opinion.",
      "The engagement team discussion about where the statements could be misstated is part of risk assessment.",
    ],
    related: ["audit-risk", "significant-risk"],
    match: ["risk assessment"],
  },
  {
    slug: "management-override-of-controls",
    term: "Management override of controls",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Management override of controls is management's ability to manipulate records and produce fraudulent financial statements by bypassing controls that otherwise seem to work. Auditors treat it as a fraud risk in every audit.",
    takeaways: [
      "Three procedures are always required: test journal entries and other adjustments, review accounting estimates for bias, and evaluate the business rationale for significant unusual transactions.",
      "The risk exists even when controls are well designed.",
      "It is treated as a significant risk.",
    ],
    related: ["fraud-triangle", "significant-risk"],
    match: ["override", "journal entries"],
  },
  {
    slug: "sufficient-appropriate-audit-evidence",
    term: "Sufficient appropriate audit evidence",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Sufficient appropriate audit evidence is evidence that is enough in quantity (sufficiency) and good enough in quality, meaning relevant and reliable (appropriateness), to support the auditor's opinion.",
    takeaways: [
      "More evidence is needed where risk is higher, and less where the evidence is of higher quality.",
      "Evidence from independent outside sources, obtained directly by the auditor, documentary and original is generally more reliable.",
      "Getting more evidence doesn't make up for poor-quality evidence.",
    ],
    related: ["assertions", "external-confirmation"],
    match: ["sufficient appropriate", "reliab"],
  },
  {
    slug: "auditing-accounting-estimates",
    term: "Auditing accounting estimates",
    section: "aud",
    topic: "auditing-accounting-estimates",
    definition:
      "When auditing an accounting estimate, the auditor evaluates whether management's estimate and related disclosures are reasonable, considering estimation uncertainty, complexity, subjectivity and the risk of management bias.",
    takeaways: [
      "There are three approaches: use events up to the report date, test how management made the estimate, or develop the auditor's own point estimate or range.",
      "If management's amount falls outside the auditor's reasonable range, the misstatement is at least the difference to the nearest end of the range.",
      "A retrospective review of last year's estimates helps detect management bias.",
    ],
    related: ["management-override-of-controls"],
    match: ["estimate"],
  },
  {
    slug: "related-party",
    term: "Related party",
    section: "aud",
    topic: "related-parties-and-going-concern",
    definition:
      "A related party is a person or entity that can control or significantly influence another, or is under common control with it, such as affiliates, principal owners (over 10%), management and their immediate families, and equity-method investees.",
    takeaways: [
      "Related-party transactions may not be at arm's length and must be disclosed.",
      "The auditor stays alert for unidentified related parties throughout the audit.",
      "Being economically dependent on a major customer or supplier doesn't by itself make it a related party.",
    ],
    match: ["related part"],
  },
  {
    slug: "auditors-specialist",
    term: "Auditor's specialist",
    section: "aud",
    topic: "group-audits-and-using-others-work",
    definition:
      "An auditor's specialist is a person or firm with expertise in a field other than accounting or auditing, such as an actuary or a valuation expert, whose work the auditor uses to obtain audit evidence. The specialist may be inside or outside the audit firm.",
    takeaways: [
      "The auditor evaluates the specialist's competence, capabilities and objectivity, and the adequacy of their work.",
      "The auditor remains solely responsible for the opinion and doesn't refer to the specialist in an unmodified report.",
      "A management's specialist, by contrast, is engaged by the client to help prepare the financial statements.",
    ],
    match: ["specialist"],
  },
  {
    slug: "application-controls",
    term: "Application controls",
    section: "aud",
    topic: "it-controls-in-audit",
    definition:
      "Application controls are controls within a particular application that relate to how individual transactions are processed, such as input edit checks, matching and batch totals, and that help ensure transactions are complete, accurate and valid.",
    takeaways: [
      "They can be automated (performed by the system) or manual.",
      "Their reliability depends on effective general information technology controls.",
      "Examples: limit checks, validity checks, three-way matches and record counts.",
    ],
    related: ["it-general-controls"],
    match: ["application control", "edit check"],
  },
  {
    slug: "adverse-opinion",
    term: "Adverse opinion",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An adverse opinion states that the financial statements are not presented fairly. It is expressed when misstatements are both material and pervasive.",
    takeaways: [
      "The report includes a basis for adverse opinion describing the misstatements and, if practicable, their effects.",
      "If misstatements are material but not pervasive, the opinion is qualified instead.",
      "An adverse opinion relates to misstatements; a lack of evidence leads to a disclaimer instead.",
    ],
    related: ["qualified-opinion", "disclaimer-of-opinion"],
    match: ["adverse"],
  },
  {
    slug: "disclaimer-of-opinion",
    term: "Disclaimer of opinion",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A disclaimer of opinion means the auditor does not express an opinion, because it could not obtain sufficient appropriate evidence and the possible effects of undetected misstatements could be both material and pervasive.",
    takeaways: [
      "Typical causes are severe scope limitations, such as management refusing to provide written representations.",
      "If the limitation's effects are material but not pervasive, the opinion is qualified instead.",
      "The auditor may also withdraw from the engagement where possible.",
    ],
    related: ["adverse-opinion", "qualified-opinion", "management-representation-letter"],
    match: ["disclaim", "scope limitation"],
  },
  {
    slug: "review-engagement",
    term: "Review engagement",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "In a review of financial statements, the accountant obtains limited assurance, mainly through inquiry and analytical procedures, that no material modifications are needed for the statements to conform with the applicable framework.",
    takeaways: [
      "Independence is required.",
      "It doesn't involve understanding or testing internal control, confirmations, inventory observation or lawyers' letters.",
      "The accountant obtains a management representation letter.",
    ],
    related: ["compilation-engagement", "agreed-upon-procedures"],
    match: ["review"],
  },
  {
    slug: "compilation-engagement",
    term: "Compilation engagement",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "In a compilation, the accountant helps management present financial information as financial statements without obtaining or providing any assurance on them.",
    takeaways: [
      "A compilation report is always issued.",
      "The accountant may compile statements without being independent, but must disclose the lack of independence in the report.",
      "A preparation engagement, by contrast, has no report, and each page must state that no assurance is provided.",
    ],
    related: ["review-engagement"],
    match: ["compilation", "compile"],
  },
];
