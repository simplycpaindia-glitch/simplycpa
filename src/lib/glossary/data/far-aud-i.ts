import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, ninth batch. */
export const farTermsI: GlossaryTerm[] = [
  {
    slug: "specific-identification",
    term: "Specific identification",
    section: "far",
    topic: "inventory",
    definition:
      "Specific identification tracks the actual cost of each inventory item, so cost of goods sold is the cost of the exact items sold. It is used for unique, high-value items such as cars, jewelry and real estate.",
    takeaways: [
      "It matches costs and revenues exactly.",
      "For interchangeable items, it lets management manipulate income by choosing which units to treat as sold.",
      "It is impractical for large volumes of similar items.",
    ],
    related: ["fifo", "weighted-average-cost", "lifo"],
    match: ["specific identification"],
  },
  {
    slug: "cloud-computing-implementation-costs",
    term: "Cloud computing implementation costs",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "A customer in a cloud computing (hosting) arrangement that is a service contract capitalizes the implementation costs that would be capitalized for internal-use software, and expenses them over the term of the hosting arrangement.",
    takeaways: [
      "The term includes renewal periods the customer is reasonably certain to use.",
      "The capitalized costs are presented with prepaid hosting fees, and the expense in the same line as the hosting fees.",
      "Training and data conversion costs are generally expensed.",
    ],
    related: ["software-development-costs", "research-and-development-costs"],
    match: ["cloud computing", "hosting arrangement", "implementation cost"],
  },
  {
    slug: "lease-term",
    term: "Lease term",
    section: "far",
    topic: "leases",
    definition:
      "The lease term is the noncancelable period of a lease plus periods covered by an option to extend that the lessee is reasonably certain to exercise, an option to terminate it is reasonably certain not to exercise, and any option controlled by the lessor.",
    takeaways: [
      "It drives lease classification and the measurement of the lease liability.",
      "The lessee reassesses it after a significant event within its control, such as building major improvements.",
      "Economic incentives, such as below-market renewal rates, point toward reasonable certainty.",
    ],
    related: ["right-of-use-asset", "lease-classification-criteria", "short-term-lease-exemption"],
    match: ["lease term", "renewal option", "reasonably certain"],
  },
  {
    slug: "incremental-borrowing-rate",
    term: "Incremental borrowing rate",
    section: "far",
    topic: "leases",
    definition:
      "A lessee discounts lease payments using the rate implicit in the lease if it is readily determinable. If not, it uses its incremental borrowing rate: the rate it would pay to borrow, on a collateralized basis over a similar term, an amount equal to the lease payments.",
    takeaways: [
      "Lessees usually can't determine the implicit rate, so they use this one.",
      "Private companies can elect a risk-free rate by class of asset instead.",
      "A lower discount rate gives a larger lease liability.",
    ],
    related: ["right-of-use-asset", "finance-lease", "operating-lease"],
    match: ["incremental borrowing", "discount rate", "rate implicit"],
  },
  {
    slug: "bonds-issued-between-interest-dates",
    term: "Bonds issued between interest dates",
    section: "far",
    topic: "long-term-debt",
    definition:
      "When bonds are sold between interest payment dates, the buyer pays the price of the bonds plus the interest accrued since the last interest date. The issuer then pays a full period's interest on the next payment date.",
    takeaways: [
      "The issuer records the accrued interest received as interest payable or as a reduction of interest expense.",
      "Interest expense for the first period covers only the time the bonds were outstanding.",
      "Cash received equals price plus accrued interest.",
    ],
    example: "$1,000,000 of 6% bonds paying interest every January 1 and July 1, issued at par on March 1: the buyer pays $1,000,000 + $10,000 of accrued interest.",
    related: ["bond-discount-and-premium", "effective-interest-method"],
    match: ["between interest dates", "accrued interest"],
  },
  {
    slug: "appropriated-retained-earnings",
    term: "Appropriated retained earnings",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "An appropriation of retained earnings is a board action that sets aside part of retained earnings for a specific purpose, such as a plant expansion, to show that it isn't available for dividends.",
    takeaways: [
      "No cash or other asset is set aside; it only reclassifies retained earnings.",
      "It is reversed when no longer needed, never charged with costs or losses.",
      "Disclosing the restriction in the notes is the usual alternative.",
    ],
    related: ["stock-dividend", "treasury-stock"],
    match: ["appropriat", "restriction"],
  },
  {
    slug: "change-in-accounting-principle",
    term: "Change in accounting principle",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "A change in accounting principle is a change from one generally accepted principle to another, such as from first-in, first-out (FIFO) to weighted-average inventory. It is allowed only if required by a new standard or justified as preferable.",
    takeaways: [
      "It is applied retrospectively unless that is impracticable.",
      "A change to last-in, first-out (LIFO) is usually applied prospectively, because the earlier layers can't be determined.",
      "A change in depreciation method is a change in estimate effected by a change in principle, applied prospectively.",
    ],
    related: ["retrospective-application", "change-in-accounting-estimate", "lack-of-consistency"],
    match: ["change in accounting principle", "preferable"],
  },
  {
    slug: "prior-period-adjustment",
    term: "Prior period adjustment",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "A prior period adjustment corrects an error in previously issued financial statements by adjusting the beginning balance of retained earnings, net of tax, for the earliest period presented, and restating the prior periods shown.",
    takeaways: [
      "Errors include math mistakes, misapplying principles and misusing facts that existed at the time.",
      "The correction doesn't pass through current-period income.",
      "The nature of the error and its effect are disclosed.",
    ],
    related: ["restatement", "counterbalancing-errors"],
    match: ["prior period adjustment", "correction of an error", "error correction"],
  },
  {
    slug: "contract-with-a-customer",
    term: "Contract with a customer",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A contract exists for revenue purposes when the parties have approved it and are committed, each party's rights and the payment terms can be identified, it has commercial substance, and collection of substantially all of the consideration is probable.",
    takeaways: [
      "If the criteria aren't met, cash received is recognized as revenue only when it is nonrefundable and the seller has finished performing or the contract has ended.",
      "Contracts can be written, oral or implied by customary business practice.",
      "Contracts with the same customer at about the same time may need to be combined.",
    ],
    related: ["performance-obligation", "transaction-price", "contract-modification"],
    match: ["contract with a customer", "collectib", "commercial substance"],
  },
  {
    slug: "significant-financing-component",
    term: "Significant financing component",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "When the timing of payment gives the customer or the seller a significant benefit of financing, for example payment two years after delivery, the transaction price is adjusted for the time value of money.",
    takeaways: [
      "A practical expedient lets sellers ignore financing when the gap between payment and transfer is one year or less.",
      "Interest is presented separately from revenue from contracts with customers.",
      "Advance payments made for reasons other than financing, such as securing supply, don't count.",
    ],
    related: ["transaction-price", "imputed-interest"],
    match: ["financing component", "time value"],
  },
  {
    slug: "restricted-cash",
    term: "Restricted cash",
    section: "far",
    topic: "statement-of-cash-flows",
    definition:
      "Restricted cash is cash whose withdrawal or use is legally or contractually limited, such as cash held in escrow or a bond sinking fund. It is reported separately from cash available for operations.",
    takeaways: [
      "The statement of cash flows includes restricted cash with cash and cash equivalents in its beginning and ending totals.",
      "Transfers between restricted and unrestricted cash aren't cash flows.",
      "It is current or noncurrent depending on when it will be used.",
    ],
    related: ["cash-equivalents", "classification-of-cash-flows"],
    match: ["restricted cash", "escrow", "sinking fund", "compensating balance"],
  },
  {
    slug: "operating-cycle",
    term: "Operating cycle",
    section: "far",
    topic: "balance-sheet-and-income-statement-preparation",
    definition:
      "The operating cycle is the average time from paying cash for inventory or services to collecting cash from customers. Current assets are those expected to be realized within one year or the operating cycle, whichever is longer.",
    takeaways: [
      "Businesses such as distilleries or tobacco growers can have cycles longer than a year.",
      "Current liabilities are those expected to be paid using current assets.",
      "Shorter cycles mean less cash tied up in working capital.",
    ],
    related: ["classified-balance-sheet", "cash-conversion-cycle"],
    match: ["operating cycle", "current asset"],
  },
  {
    slug: "collection-items",
    term: "Collection items",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "Works of art, historical treasures and similar items held for public exhibition, education or research, protected and preserved, need not be capitalized, provided proceeds from selling collection items are used to acquire new ones or for their direct care.",
    takeaways: [
      "If not capitalized, purchases reduce net assets and donated items aren't recognized as contributions.",
      "Organizations that don't capitalize still disclose their collection policies.",
      "Governments follow similar rules for collections.",
    ],
    related: ["contributed-nonfinancial-assets", "net-assets-with-donor-restrictions"],
    match: ["collection", "works of art", "historical treasure"],
  },
  {
    slug: "internal-service-fund",
    term: "Internal service fund",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "An internal service fund is a proprietary fund that provides goods or services, such as a motor pool or computer support, to other departments of the government on a cost-reimbursement basis.",
    takeaways: [
      "It uses the full accrual basis and the economic resources focus.",
      "In the government-wide statements, it is usually included in governmental activities.",
      "Charges to other funds are revenue to the internal service fund and expenditures or expenses to the user funds.",
    ],
    related: ["proprietary-funds", "interfund-transfers"],
    match: ["internal service", "cost-reimbursement"],
  },
  {
    slug: "permanent-fund",
    term: "Permanent fund",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "A permanent fund is a governmental fund for resources legally restricted so that only the earnings, not the principal, may be used to support the government's own programs, such as a gift whose income maintains a public cemetery.",
    takeaways: [
      "If the earnings benefit individuals or private organizations, a private-purpose trust fund is used instead.",
      "It uses the modified accrual basis.",
      "The principal is reported as nonspendable fund balance.",
    ],
    related: ["fiduciary-funds", "fund-balance", "endowment"],
    match: ["permanent fund", "nonspendable"],
  },
  {
    slug: "chief-operating-decision-maker",
    term: "Chief operating decision maker",
    section: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    definition:
      "The chief operating decision maker is the function, a person or a group, that allocates resources to and assesses the performance of a public company's segments. Operating segments are identified from the information this function regularly reviews.",
    takeaways: [
      "This is called the management approach to segment reporting.",
      "Companies disclose the title of the chief operating decision maker and significant segment expenses regularly provided to them.",
      "It is often the chief executive officer or an executive committee.",
    ],
    related: ["reportable-segment", "interim-reporting"],
    match: ["chief operating decision maker", "operating segment"],
  },
  {
    slug: "unrealized-intercompany-profit",
    term: "Unrealized intercompany profit",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "Profit on sales between members of a consolidated group is unrealized while the goods are still held within the group. It is eliminated from consolidated inventory and income until the goods are sold to outsiders.",
    takeaways: [
      "On downstream sales (parent to subsidiary), the whole elimination is charged to the parent.",
      "On upstream sales (subsidiary to parent), the elimination is shared with the noncontrolling interest.",
      "The same applies to profit on intercompany sales of equipment, recognized as the asset is depreciated.",
    ],
    example: "A parent sells goods costing $60,000 to its subsidiary for $80,000, and a quarter is unsold at year-end: $5,000 of profit is eliminated.",
    related: ["consolidation-eliminations", "noncontrolling-interest"],
    match: ["intercompany profit", "intra-entity", "upstream", "downstream"],
  },
];

export const audTermsI: GlossaryTerm[] = [
  {
    slug: "auditor-tenure",
    term: "Auditor tenure statement",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An auditor's report on a public company under Public Company Accounting Oversight Board (PCAOB) standards states the year the firm began serving consecutively as the company's auditor.",
    takeaways: [
      "It helps investors judge the length of the relationship.",
      "Reports under American Institute of Certified Public Accountants standards don't require it.",
      "The name of the engagement partner is disclosed separately, in a filing with the board.",
    ],
    related: ["pcaob", "form-ap", "critical-audit-matters"],
    match: ["tenure", "since"],
  },
  {
    slug: "form-ap",
    term: "Form AP",
    section: "aud",
    topic: "audit-reports",
    definition:
      "For each public company audit report, the audit firm files Auditor Reporting of Certain Audit Participants (Form AP) with the Public Company Accounting Oversight Board. It discloses the engagement partner's name and other accounting firms that took part in the audit.",
    takeaways: [
      "Other firms are named if they performed 5% or more of the total audit hours.",
      "It is generally due 35 days after the audit report is filed (10 days for an initial public offering).",
      "The information is searchable by the public.",
    ],
    related: ["pcaob", "auditor-tenure", "component-auditor"],
    match: ["Form AP", "engagement partner"],
  },
  {
    slug: "proof-of-cash",
    term: "Proof of cash",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "A proof of cash is a four-column reconciliation of a bank account that reconciles the beginning balance, receipts, disbursements and ending balance per the bank with those per the books.",
    takeaways: [
      "It can reveal receipts or disbursements recorded in the books but not the bank, or the reverse.",
      "It helps detect concealed theft and unrecorded transactions.",
      "A regular bank reconciliation compares only the ending balances.",
    ],
    related: ["bank-reconciliation", "interbank-transfer-schedule"],
    match: ["proof of cash"],
  },
  {
    slug: "bank-cutoff-statement",
    term: "Bank cutoff statement",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "A bank cutoff statement covers a short period after year-end, often 10 to 20 days, and is sent by the bank directly to the auditor. It lets the auditor check the items on the client's year-end bank reconciliation.",
    takeaways: [
      "Outstanding checks should clear, and deposits in transit should appear, within the period.",
      "Checks clearing that weren't listed as outstanding may indicate kiting or unrecorded disbursements.",
      "Receiving it directly from the bank makes it more reliable than the client's copy.",
    ],
    related: ["bank-reconciliation", "external-confirmation", "cutoff"],
    match: ["cutoff statement", "outstanding check", "deposit in transit"],
  },
  {
    slug: "top-down-approach",
    term: "Top-down approach",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "In an integrated audit of a public company, the auditor uses a top-down approach to select controls to test: start at the financial statement level, consider entity-level controls, then focus on significant accounts, disclosures and their relevant assertions.",
    takeaways: [
      "It focuses testing on the controls that address the risk of material misstatement.",
      "Some entity-level controls are precise enough to reduce the testing of other controls.",
      "Walkthroughs help confirm the understanding of how transactions flow.",
    ],
    related: ["integrated-audit", "entity-level-controls", "walkthrough"],
    match: ["top-down"],
  },
  {
    slug: "entity-level-controls",
    term: "Entity-level controls",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "Entity-level controls affect the organization as a whole: the control environment, risk assessment, controls over management override, the period-end financial reporting process and monitoring.",
    takeaways: [
      "Weak entity-level controls can undermine many process-level controls.",
      "Their precision varies; some only indirectly affect the likelihood of misstatement.",
      "The period-end financial reporting process is always evaluated in an integrated audit.",
    ],
    related: ["control-environment", "top-down-approach", "coso-internal-control"],
    match: ["entity-level", "period-end financial reporting"],
  },
  {
    slug: "expected-deviation-rate",
    term: "Expected population deviation rate",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "In attribute sampling for tests of controls, the expected population deviation rate is the auditor's estimate of how often the control fails, based on prior years or a small preliminary sample.",
    takeaways: [
      "A higher expected rate requires a larger sample.",
      "If it is close to the tolerable rate, testing the control may not be worthwhile.",
      "Sample size also rises with a lower tolerable rate or a lower acceptable risk of overreliance.",
    ],
    related: ["attribute-sampling", "upper-deviation-limit", "tests-of-controls"],
    match: ["expected deviation", "expected rate", "tolerable rate"],
  },
  {
    slug: "allowance-for-sampling-risk",
    term: "Allowance for sampling risk",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "The allowance for sampling risk is the margin added to a sample result to reflect the chance that the sample isn't representative of the population, such as the gap between the sample deviation rate and the upper deviation limit.",
    takeaways: [
      "The control is supported if the sample rate plus the allowance doesn't exceed the tolerable rate.",
      "For substantive tests, projected misstatement plus the allowance is compared with tolerable misstatement.",
      "Larger samples reduce the allowance.",
    ],
    related: ["sampling-risk", "upper-deviation-limit", "tolerable-misstatement"],
    match: ["allowance for sampling risk"],
  },
  {
    slug: "final-analytical-procedures",
    term: "Final analytical procedures",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Near the end of the audit, the auditor must perform analytical procedures to help form an overall conclusion on whether the financial statements are consistent with the auditor's understanding of the entity.",
    takeaways: [
      "They may reveal a previously unrecognized risk of material misstatement, requiring more work.",
      "Typical work includes reading the statements and comparing ratios and trends with expectations.",
      "Analytical procedures are also required in planning, but are optional as substantive tests.",
    ],
    related: ["analytical-procedures", "substantive-analytical-procedures"],
    match: ["final analytical", "overall review", "overall conclusion"],
  },
  {
    slug: "supplementary-information-in-relation-to",
    term: "Supplementary information (in relation to)",
    section: "aud",
    topic: "audit-reports",
    definition:
      "When supplementary information, such as consolidating schedules or a schedule of expenditures of federal awards, accompanies audited statements, the auditor can report on whether it is fairly stated in all material respects in relation to the financial statements as a whole.",
    takeaways: [
      "It uses the same materiality as the audit of the financial statements.",
      "The report is an other-matter paragraph or a separate report.",
      "Required supplementary information follows different, more limited procedures.",
    ],
    related: ["required-supplementary-information", "other-matter-paragraph", "single-audit"],
    match: ["in relation to", "supplementary", "consolidating schedule"],
  },
  {
    slug: "compilation-without-independence",
    term: "Compilation without independence",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "An accountant who isn't independent of the client can still perform a compilation, but must disclose the lack of independence in the last paragraph of the compilation report.",
    takeaways: [
      "The accountant may describe the reasons, but if so must describe all of them.",
      "Reviews and audits require independence.",
      "A preparation engagement doesn't require the accountant to determine independence at all.",
    ],
    related: ["compilation-engagement", "preparation-engagement", "independence"],
    match: ["not independent", "lack of independence", "compilation"],
  },
  {
    slug: "pro-forma-financial-information",
    term: "Pro forma financial information",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "Pro forma financial information shows how historical financial statements might have looked if a significant transaction, such as an acquisition, had occurred earlier. A practitioner can examine or review it under the attestation standards.",
    takeaways: [
      "The historical statements it is based on must have been audited or reviewed.",
      "The practitioner evaluates whether the assumptions and adjustments are appropriate and correctly applied.",
      "It doesn't predict actual future results.",
    ],
    related: ["prospective-financial-information", "examination-engagement", "comfort-letter"],
    match: ["pro forma"],
  },
  {
    slug: "acts-discreditable",
    term: "Acts discreditable",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "The American Institute of Certified Public Accountants' Code of Professional Conduct forbids members from committing acts discreditable to the profession, such as keeping client records after the client asks for them.",
    takeaways: [
      "Other examples include discrimination or harassment and failing to file one's own tax returns or remit payroll taxes.",
      "Negligently preparing financial statements and failing to follow government audit requirements are also covered.",
      "So is soliciting or disclosing exam questions.",
    ],
    related: ["confidential-client-information", "independence"],
    match: ["discreditable", "client records"],
  },
  {
    slug: "confidential-client-information",
    term: "Confidential client information",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Members in public practice must not disclose confidential client information without the client's specific consent, apart from listed exceptions.",
    takeaways: [
      "Exceptions include complying with a subpoena or summons, peer review, professional ethics investigations and applicable laws.",
      "Members also may not use client information to their own advantage.",
      "Information shared with a third-party service provider needs safeguards, and sometimes client consent.",
    ],
    related: ["acts-discreditable", "threats-and-safeguards"],
    match: ["confidential", "consent", "subpoena"],
  },
];
