import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, seventh batch. */
export const farTermsG: GlossaryTerm[] = [
  {
    slug: "purchase-commitment-loss",
    term: "Loss on purchase commitment",
    section: "far",
    topic: "inventory",
    definition:
      "When a company has a firm, noncancelable commitment to buy goods at a fixed price and the market price falls below that price, it recognizes the loss and a liability at the balance sheet date, before the goods are received.",
    takeaways: [
      "If the market price later recovers, a gain is recognized up to the amount of the loss previously recorded.",
      "Commitments that can be cancelled without penalty don't give rise to a loss.",
      "Material commitments are disclosed even when no loss is recognized.",
    ],
    example: "A commitment to buy goods for $500,000 when their market price at year-end is $440,000: recognize a $60,000 loss and liability.",
    related: ["lower-of-cost-and-net-realizable-value", "loss-contingency"],
    match: ["purchase commitment", "noncancelable"],
  },
  {
    slug: "held-for-sale",
    term: "Long-lived assets held for sale",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "A long-lived asset is classified as held for sale when management commits to a plan to sell it, it is available for immediate sale, an active search for a buyer has begun and the sale is probable within one year, among other criteria.",
    takeaways: [
      "It is measured at the lower of its carrying amount and fair value less cost to sell.",
      "It is no longer depreciated, and it is presented separately on the balance sheet.",
      "If it is a component whose disposal is a strategic shift, it is also reported as a discontinued operation.",
    ],
    related: ["discontinued-operation", "impairment"],
    match: ["held for sale", "cost to sell"],
  },
  {
    slug: "private-company-goodwill-alternative",
    term: "Private company goodwill alternative",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Private companies and not-for-profits can elect to amortize goodwill on a straight-line basis over 10 years, or less if a shorter life is more appropriate, instead of only testing it for impairment.",
    takeaways: [
      "Goodwill is then tested for impairment only when a triggering event occurs, not every year.",
      "The test can be performed at the entity level instead of the reporting unit level.",
      "Public business entities can't use the alternative.",
    ],
    related: ["goodwill", "impairment"],
    match: ["private company", "amortize goodwill", "10 years"],
  },
  {
    slug: "equity-securities-measurement-alternative",
    term: "Equity securities measurement alternative",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "Equity securities are generally measured at fair value with changes in net income. For those without a readily determinable fair value, a company may instead use cost, less impairment, adjusted for observable price changes in orderly transactions for identical or similar investments.",
    takeaways: [
      "There is no available-for-sale category for equity securities.",
      "Impairment under the alternative is assessed qualitatively each reporting period.",
      "Investments accounted for by the equity method or consolidated are outside these rules.",
    ],
    related: ["trading-securities", "equity-method", "fair-value-hierarchy"],
    match: ["equity securit", "readily determinable", "measurement alternative"],
  },
  {
    slug: "short-term-lease-exemption",
    term: "Short-term lease exemption",
    section: "far",
    topic: "leases",
    definition:
      "A lessee can elect, by class of asset, not to recognize a right-of-use asset and lease liability for short-term leases: those with a term of 12 months or less and no purchase option the lessee is reasonably certain to exercise.",
    takeaways: [
      "Lease payments are expensed on a straight-line basis over the term.",
      "Renewal options the lessee is reasonably certain to exercise count toward the term.",
      "If the term later extends beyond 12 months, the lease is no longer short-term.",
    ],
    related: ["right-of-use-asset", "operating-lease"],
    match: ["short-term lease", "12 months"],
  },
  {
    slug: "lease-classification-criteria",
    term: "Lease classification criteria",
    section: "far",
    topic: "leases",
    definition:
      "A lessee classifies a lease as a finance lease if any one of five criteria is met: ownership transfers, a purchase option is reasonably certain to be exercised, the term is a major part of the asset's remaining life, payments are substantially all of its fair value, or the asset is so specialized it has no other use.",
    takeaways: [
      "Common thresholds are 75% or more of economic life and 90% or more of fair value.",
      "Payments include any residual value guaranteed by the lessee.",
      "A lessor uses the same criteria to identify a sales-type lease.",
    ],
    related: ["finance-lease", "operating-lease", "sales-type-lease"],
    match: ["classification", "major part", "substantially all"],
  },
  {
    slug: "reclassification-adjustment",
    term: "Reclassification adjustment",
    section: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    definition:
      "A reclassification adjustment moves an amount out of accumulated other comprehensive income into net income when it is realized, such as on the sale of an available-for-sale debt security, so it isn't counted twice in comprehensive income.",
    takeaways: [
      "Other examples are settled cash flow hedges and the amortization of pension amounts.",
      "Equity securities have none, because their fair value changes already go to net income.",
      "Reclassifications are shown on the face of the statements or in the notes.",
    ],
    related: ["other-comprehensive-income", "available-for-sale-debt-securities"],
    match: ["reclassification", "recycl"],
  },
  {
    slug: "unusual-or-infrequent-items",
    term: "Unusual or infrequent items",
    section: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    definition:
      "Items that are unusual in nature or infrequent in occurrence are reported as a separate line within income from continuing operations, or disclosed in the notes. Extraordinary items no longer exist.",
    takeaways: [
      "They are reported before tax, not net of tax.",
      "No earnings per share figure is shown for them.",
      "Discontinued operations, by contrast, are shown net of tax below continuing operations.",
    ],
    related: ["discontinued-operation", "intraperiod-tax-allocation"],
    match: ["unusual", "infrequent", "extraordinary"],
  },
  {
    slug: "classification-of-cash-flows",
    term: "Classification of cash flows",
    section: "far",
    topic: "statement-of-cash-flows",
    definition:
      "Under US accounting standards, interest paid, interest received, dividends received and income taxes paid are operating cash flows, while dividends paid are financing cash flows.",
    takeaways: [
      "Cash flows from trading securities are classified by the purpose for which they were bought.",
      "Repaying the principal of debt is financing; the interest is operating.",
      "International standards allow more choice for interest and dividends.",
    ],
    related: ["direct-method", "indirect-method", "noncash-investing-and-financing-activities"],
    match: ["operating activit", "investing activit", "financing activit"],
  },
  {
    slug: "counterbalancing-errors",
    term: "Counterbalancing errors",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "Counterbalancing errors are errors that reverse themselves over two periods, such as an overstatement of ending inventory, which overstates this year's income and understates next year's by the same amount.",
    takeaways: [
      "After the second year's books are closed, retained earnings is correct.",
      "If found during the second year, retained earnings is corrected through a prior period adjustment.",
      "Comparative statements are still restated if the earlier year is presented.",
    ],
    example: "Ending 2025 inventory overstated by $10,000: 2025 income is $10,000 too high, 2026 income $10,000 too low, and retained earnings is right at the end of 2026.",
    related: ["restatement", "retrospective-application"],
    match: ["counterbalancing", "self-correct", "overstat"],
  },
  {
    slug: "callable-debt",
    term: "Callable debt (covenant violation)",
    section: "far",
    topic: "long-term-debt",
    definition:
      "Long-term debt that the creditor can demand repayment of at the balance sheet date, for example because a covenant was violated, is classified as current.",
    takeaways: [
      "It stays noncurrent if the creditor waives or loses the right to demand repayment for more than one year from the balance sheet date.",
      "It also stays noncurrent if a grace period exists and it is probable the violation will be cured within it.",
      "A waiver obtained after the balance sheet date but before issuance can be considered.",
    ],
    related: ["short-term-obligations-expected-to-be-refinanced", "classified-balance-sheet"],
    match: ["covenant", "callable", "waiver"],
  },
  {
    slug: "property-dividend",
    term: "Property dividend",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "A property dividend distributes noncash assets, such as investments in another company, to shareholders. The asset is first remeasured to fair value at the declaration date, with a gain or loss recognized, and the dividend is recorded at that fair value.",
    takeaways: [
      "Retained earnings is reduced by the asset's fair value, not its carrying amount.",
      "Between declaration and distribution, a dividend payable is reported.",
      "A scrip dividend, by contrast, is a promise to pay later in cash.",
    ],
    example: "Shares carried at $70,000 with a fair value of $100,000: recognize a $30,000 gain and a $100,000 dividend.",
    related: ["stock-dividend", "treasury-stock"],
    match: ["property dividend", "noncash dividend", "in-kind"],
  },
  {
    slug: "debt-service-fund",
    term: "Debt service fund",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "A debt service fund is a governmental fund for resources restricted, committed or assigned to paying the principal and interest on general long-term debt.",
    takeaways: [
      "Under the modified accrual basis, principal and interest are generally recognized as expenditures when due, not accrued.",
      "Money is often moved in from the general fund as a transfer.",
      "The debt itself is reported only in the government-wide statements.",
    ],
    related: ["general-fund", "capital-projects-fund", "modified-accrual-basis"],
    match: ["debt service", "principal and interest", "general obligation"],
  },
  {
    slug: "contributed-nonfinancial-assets",
    term: "Contributed nonfinancial assets (gifts in kind)",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "Not-for-profits present contributions of nonfinancial assets, such as donated food, equipment or use of facilities, as a separate line in the statement of activities, apart from contributions of cash and other financial assets.",
    takeaways: [
      "They disclose the gifts by category, whether each was used or sold, any donor restrictions and how fair value was measured.",
      "Contributed services are recognized only if they create or enhance nonfinancial assets or require specialized skills.",
      "Gifts are generally measured at fair value when received.",
    ],
    related: ["contributed-services", "net-assets-with-donor-restrictions"],
    match: ["in kind", "in-kind", "nonfinancial"],
  },
  {
    slug: "principal-market",
    term: "Principal market",
    section: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    definition:
      "Fair value is measured using prices in the principal market for the asset or liability, the market with the greatest volume and level of activity. If there is no principal market, the most advantageous market is used.",
    takeaways: [
      "The most advantageous market is the one that maximizes the amount received for an asset after transaction and transport costs.",
      "The fair value itself isn't reduced by transaction costs, but it is adjusted for transport costs.",
      "Fair value is an exit price from the view of market participants.",
    ],
    related: ["fair-value-hierarchy", "fair-value-option"],
    match: ["principal market", "most advantageous", "exit price"],
  },
];

export const audTermsG: GlossaryTerm[] = [
  {
    slug: "audit-plan",
    term: "Audit plan",
    section: "aud",
    topic: "audit-planning-and-materiality",
    definition:
      "The audit plan is more detailed than the overall audit strategy. It sets out the nature, timing and extent of the risk assessment procedures, the further audit procedures at the assertion level, and other planned procedures.",
    takeaways: [
      "It is updated throughout the audit as risks are reassessed.",
      "Significant changes to the plan, and the reasons for them, are documented.",
      "The strategy sets scope, timing and direction; the plan sets the detailed procedures.",
    ],
    related: ["overall-audit-strategy", "risk-assessment-procedures"],
    match: ["audit plan", "nature, timing and extent", "nature, timing, and extent"],
  },
  {
    slug: "control-environment",
    term: "Control environment",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "The control environment is the set of standards, processes and structures that is the foundation of internal control, including management's integrity and ethical values, board oversight, organizational structure, competence and accountability.",
    takeaways: [
      "It is one of the five components of internal control in the Committee of Sponsoring Organizations of the Treadway Commission framework, often called the tone at the top.",
      "Weaknesses in it have a pervasive effect and can undermine other controls.",
      "The auditor must understand it in every audit.",
    ],
    related: ["coso-internal-control", "management-override-of-controls"],
    match: ["control environment", "tone at the top"],
  },
  {
    slug: "compensating-control",
    term: "Compensating control",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "A compensating control reduces the risk left by a deficiency in another control, such as an owner reviewing all bank statements and cancelled checks in a small business that can't fully segregate duties.",
    takeaways: [
      "The auditor must test it before relying on it.",
      "It can reduce the severity of a deficiency, but doesn't remove the deficiency itself.",
      "It must operate at a level of precision that would catch a material misstatement.",
    ],
    related: ["segregation-of-duties", "significant-deficiency", "material-weakness"],
    match: ["compensating control"],
  },
  {
    slug: "auditors-range",
    term: "Auditor's point estimate or range",
    section: "aud",
    topic: "auditing-accounting-estimates",
    definition:
      "To evaluate management's accounting estimate, the auditor can develop an independent point estimate or a range of reasonable amounts, narrowing the range to amounts supported by the audit evidence.",
    takeaways: [
      "If management's estimate falls outside the auditor's range, the misstatement is at least the difference to the nearest end of the range.",
      "Estimates that are each reasonable but consistently at one end of the range may show management bias.",
      "Other approaches are testing management's process or using events up to the report date.",
    ],
    related: ["auditing-accounting-estimates", "managements-specialist"],
    match: ["range", "point estimate", "bias"],
  },
  {
    slug: "substantial-doubt-about-going-concern",
    term: "Substantial doubt about going concern",
    section: "aud",
    topic: "related-parties-and-going-concern",
    definition:
      "The auditor evaluates whether there is substantial doubt about the entity's ability to continue as a going concern for a reasonable period, which under American Institute of Certified Public Accountants standards matches the accounting framework, usually one year after the statements are issued.",
    takeaways: [
      "The auditor considers management's plans and whether they are likely to be carried out and to reduce the doubt.",
      "If doubt remains and is properly disclosed, the opinion is unmodified with a separate going concern section.",
      "Inadequate disclosure leads to a qualified or adverse opinion; a disclaimer is allowed in rare cases.",
    ],
    related: ["going-concern", "emphasis-of-matter-paragraph"],
    match: ["going concern", "substantial doubt"],
  },
  {
    slug: "review-of-interim-financial-information",
    term: "Review of interim financial information",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "An auditor who audits an entity's annual financial statements can review its interim (for example, quarterly) financial information, mainly through inquiry and analytical procedures, to give limited assurance.",
    takeaways: [
      "The auditor must have a sufficient understanding of the entity and its internal control.",
      "Public companies must have their quarterly statements reviewed before filing.",
      "A review under the accounting and review standards applies when the accountant doesn't audit the annual statements.",
    ],
    related: ["limited-assurance", "review-engagement", "interim-reporting"],
    match: ["interim", "quarterly"],
  },
  {
    slug: "preparation-engagement",
    term: "Preparation engagement",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "In a preparation engagement, an accountant prepares financial statements for a client but provides no assurance and issues no report. It is a nonattest service.",
    takeaways: [
      "Each page of the statements must state that no assurance is provided, or a disclaimer must be issued.",
      "The accountant doesn't have to determine whether they are independent.",
      "A compilation, by contrast, includes a compilation report.",
    ],
    related: ["compilation-engagement", "nonattest-services"],
    match: ["preparation engagement", "prepare", "no assurance"],
  },
  {
    slug: "direct-engagement",
    term: "Direct examination engagement",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "In a direct examination engagement, the practitioner measures or evaluates the subject matter against the criteria and reports on it, instead of reporting on an assertion made by the responsible party.",
    takeaways: [
      "In an assertion-based engagement, the responsible party measures the subject matter and the practitioner reports on that assertion.",
      "The practitioner's own measurement is part of the engagement, so independence is especially important.",
      "Direct engagements are available only for examinations.",
    ],
    related: ["examination-engagement", "agreed-upon-procedures"],
    match: ["direct engagement", "direct examination", "assertion-based"],
  },
  {
    slug: "basis-for-opinion-section",
    term: "Basis for opinion section",
    section: "aud",
    topic: "audit-reports",
    definition:
      "The basis for opinion section comes right after the opinion in the auditor's report. It states that the audit was performed under generally accepted auditing standards, that the auditor is independent and met ethical requirements, and that the evidence is sufficient and appropriate.",
    takeaways: [
      "When the opinion is modified, the heading changes, for example to Basis for Qualified Opinion, and the matter is described.",
      "Public company audit reports also have a basis for opinion section.",
      "It refers to the auditor's responsibilities section for more detail.",
    ],
    related: ["unmodified-opinion", "qualified-opinion", "adverse-opinion"],
    match: ["basis for opinion", "basis for qualified"],
  },
  {
    slug: "lack-of-consistency",
    term: "Lack of consistency",
    section: "aud",
    topic: "audit-reports",
    definition:
      "When a change in accounting principle, or the correction of a material misstatement, has a material effect on the financial statements, the auditor adds a paragraph to the report drawing attention to it.",
    takeaways: [
      "If the change is properly accounted for and disclosed, the opinion isn't modified.",
      "If the new principle isn't generally accepted or the change isn't justified, the opinion is qualified or adverse.",
      "A change in accounting estimate doesn't require the paragraph.",
    ],
    related: ["emphasis-of-matter-paragraph", "retrospective-application", "restatement"],
    match: ["consistency", "change in accounting principle"],
  },
  {
    slug: "reliability-of-audit-evidence",
    term: "Reliability of audit evidence",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Audit evidence is generally more reliable when it comes from independent sources outside the entity, is produced under effective controls, is obtained directly by the auditor, is documentary and is an original rather than a copy.",
    takeaways: [
      "Observation and recalculation by the auditor beat evidence obtained by inference.",
      "A written confirmation from a third party beats an oral response from management.",
      "These are generalizations, and exceptions exist, for example when an outside source isn't knowledgeable.",
    ],
    related: ["sufficient-appropriate-audit-evidence", "external-confirmation"],
    match: ["reliab", "persuasive"],
  },
  {
    slug: "covered-member",
    term: "Covered member",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Under the American Institute of Certified Public Accountants' independence rules, a covered member is someone whose interests can impair independence, such as an attest engagement team member or a person able to influence the engagement.",
    takeaways: [
      "It also includes partners and managers who provide 10 or more hours of nonattest services to the client, and partners in the lead partner's office.",
      "The firm itself and its benefit plans are covered members.",
      "Restrictions on financial interests extend to a covered member's immediate family.",
    ],
    related: ["independence", "threats-and-safeguards"],
    match: ["covered member", "immediate family"],
  },
  {
    slug: "audit-partner-rotation",
    term: "Audit partner rotation",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Securities and Exchange Commission rules require the lead and concurring partners on a public company audit to rotate off after 5 years and stay off for 5 years.",
    takeaways: [
      "Other audit partners rotate after 7 years with a 2-year time-out.",
      "It reduces the familiarity threat from long relationships.",
      "Mandatory audit firm rotation isn't required in the United States.",
    ],
    related: ["independence", "pcaob", "engagement-quality-review"],
    match: ["rotation", "rotate"],
  },
  {
    slug: "subsequent-events-review",
    term: "Subsequent events procedures",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "The auditor performs procedures covering the period from the financial statement date to the audit report date to identify events that require adjustment of, or disclosure in, the financial statements.",
    takeaways: [
      "Procedures include reading minutes and the latest interim statements, inquiring of management and obtaining the lawyer's letter and written representations.",
      "Events giving more evidence about conditions at the balance sheet date require adjustment; new conditions require disclosure.",
      "Facts found after the report date may lead to dual dating.",
    ],
    related: ["subsequent-events", "dual-dating", "subsequently-discovered-facts"],
    match: ["subsequent event", "after the balance sheet"],
  },
  {
    slug: "classical-variables-sampling",
    term: "Classical variables sampling",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Classical variables sampling uses the normal distribution to estimate the dollar amount of an account or of misstatement in it. Methods include mean-per-unit, difference and ratio estimation.",
    takeaways: [
      "It suits populations with many expected misstatements and with zero or negative balances.",
      "Sample size depends on the population's estimated standard deviation.",
      "Monetary unit sampling, by contrast, favors large items and works best when few misstatements are expected.",
    ],
    related: ["monetary-unit-sampling", "sampling-risk", "tolerable-misstatement"],
    match: ["variables sampling", "mean-per-unit", "ratio estimation", "difference estimation"],
  },
];
