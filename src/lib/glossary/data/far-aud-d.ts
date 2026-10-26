import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, fourth batch. */
export const farTermsD: GlossaryTerm[] = [
  {
    slug: "contract-asset",
    term: "Contract asset",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A contract asset is a company's right to consideration for goods or services it has already transferred, when that right is still conditional on something other than the passage of time, such as completing another part of the contract.",
    takeaways: [
      "Once the right to payment becomes unconditional, it is reclassified as a receivable.",
      "It is the mirror image of a contract liability, where payment comes before performance.",
      "Contract assets and liabilities in the same contract are presented net.",
    ],
    related: ["contract-liability", "performance-obligation"],
    match: ["contract asset"],
  },
  {
    slug: "warranty-liability",
    term: "Warranty liability",
    section: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    definition:
      "A warranty liability is the estimated cost of honoring warranties on products already sold. For an assurance-type warranty, which promises the product works as specified, the cost is accrued as an expense in the year of sale.",
    takeaways: [
      "A service-type warranty, sold separately or giving extra service, is a separate performance obligation: revenue is deferred, not a cost accrued.",
      "Paying claims reduces the liability, not expense.",
      "Estimates are based on claims history and revised as experience changes.",
    ],
    related: ["loss-contingency", "contract-liability"],
    match: ["warrant"],
  },
  {
    slug: "compensated-absences",
    term: "Compensated absences",
    section: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    definition:
      "Compensated absences are paid time off, such as vacation, that employees earn now and take later. A liability is accrued when the rights relate to services already rendered, vest or accumulate, payment is probable and the amount can be estimated.",
    takeaways: [
      "Vacation that carries forward usually meets the criteria and is accrued.",
      "Sick pay that accumulates but doesn't vest may be accrued, but doesn't have to be.",
      "The expense is recognized as employees earn the time off, not when they take it.",
    ],
    match: ["compensated absence", "vacation"],
  },
  {
    slug: "short-term-obligations-expected-to-be-refinanced",
    term: "Short-term obligations expected to be refinanced",
    section: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    definition:
      "A short-term obligation can be classified as noncurrent if the company intends to refinance it on a long-term basis and demonstrates that it can, for example by refinancing it after the balance sheet date but before the statements are issued.",
    takeaways: [
      "Intention alone is not enough; the ability must be demonstrated.",
      "A firm financing agreement entered into before the statements are issued also demonstrates ability.",
      "Only the amount actually refinanced, or available under the agreement, is reclassified.",
    ],
    related: ["classified-balance-sheet"],
    match: ["refinanc"],
  },
  {
    slug: "weighted-average-cost",
    term: "Weighted average cost method",
    section: "far",
    topic: "inventory",
    definition:
      "The weighted average cost method values inventory and cost of goods sold at the average cost of all units available for sale. A periodic system uses one average for the period; a perpetual system recalculates a moving average after each purchase.",
    takeaways: [
      "When prices are rising, its results fall between first-in, first-out (FIFO) and last-in, first-out (LIFO).",
      "Periodic average cost = cost of goods available for sale ÷ units available.",
      "It is measured at the lower of cost and net realizable value.",
    ],
    example: "700 units available at a total cost of $8,800 gives an average of about $12.57; 250 units left in inventory are valued at $3,143.",
    related: ["lifo", "lower-of-cost-and-net-realizable-value"],
    match: ["weighted average", "moving average"],
  },
  {
    slug: "consignment",
    term: "Consignment",
    section: "far",
    topic: "inventory",
    definition:
      "In a consignment, the owner of goods (the consignor) ships them to another party (the consignee) to sell on its behalf. The goods stay in the consignor's inventory until they are sold to an end customer.",
    takeaways: [
      "The consignor recognizes revenue when the consignee sells the goods.",
      "The consignee records only its commission, not the goods or the full sale.",
      "Physical counts must exclude goods held on consignment for others.",
    ],
    related: ["fob-shipping-terms", "principal-versus-agent"],
    match: ["consign"],
  },
  {
    slug: "restatement",
    term: "Restatement (error correction)",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "A restatement corrects a material error in previously issued financial statements by revising them, with the cumulative effect on earlier periods adjusted in opening retained earnings (a prior period adjustment).",
    takeaways: [
      "Errors include mathematical mistakes, misapplying accounting principles and oversights, as well as moving from a non-accepted method to an accepted one.",
      "The correction is shown net of tax, and the nature of the error is disclosed.",
      "Inventory errors counterbalance after two years, but the statements in between are still wrong.",
    ],
    related: ["retrospective-application", "change-in-accounting-estimate"],
    match: ["error", "restat", "prior period"],
  },
  {
    slug: "finite-lived-intangible",
    term: "Finite-lived intangible asset",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "A finite-lived intangible asset, such as a patent or customer list, is amortized over its useful life, usually straight-line unless another pattern better reflects how its benefits are used up.",
    takeaways: [
      "The useful life is the shorter of its legal life and its expected economic life.",
      "Legal fees to successfully defend a patent are capitalized and amortized over its remaining life.",
      "It is tested for impairment like other long-lived assets held and used.",
    ],
    related: ["indefinite-lived-intangible", "impairment"],
    match: ["patent", "amortiz"],
  },
  {
    slug: "gross-profit-method",
    term: "Gross profit method",
    section: "far",
    topic: "inventory",
    definition:
      "The gross profit method estimates ending inventory by subtracting estimated cost of goods sold (sales × (1 − gross profit percentage)) from the cost of goods available for sale.",
    takeaways: [
      "It is used for interim estimates and to estimate inventory lost in a fire or theft.",
      "It isn't acceptable for annual financial statements.",
      "Its accuracy depends on the gross profit percentage being stable.",
    ],
    example: "Goods available $500,000, sales $600,000, gross profit 30%: estimated cost of goods sold is $420,000, so ending inventory is about $80,000.",
    related: ["weighted-average-cost"],
    match: ["gross profit"],
  },
  {
    slug: "direct-method",
    term: "Direct method (statement of cash flows)",
    section: "far",
    topic: "statement-of-cash-flows",
    definition:
      "The direct method presents operating cash flow as the major classes of gross cash receipts and payments, such as cash collected from customers, cash paid to suppliers and employees, and interest and taxes paid.",
    takeaways: [
      "It gives the same total operating cash flow as the indirect method.",
      "Companies that use it must also present a reconciliation of net income to operating cash flow.",
      "Cash collected from customers = sales − increase in receivables (or + decrease).",
    ],
    related: ["indirect-method"],
    match: ["direct method", "cash collected"],
  },
  {
    slug: "proprietary-funds",
    term: "Proprietary funds",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "Proprietary funds account for a government's business-type activities that charge fees for goods or services. There are two kinds: enterprise funds (serving the public) and internal service funds (serving other departments).",
    takeaways: [
      "They use the economic resources focus and full accrual basis, like a business.",
      "They report capital assets, depreciation and long-term debt.",
      "Their statements include a statement of cash flows.",
    ],
    related: ["general-fund", "modified-accrual-basis"],
    match: ["enterprise fund", "internal service", "proprietary"],
  },
  {
    slug: "contributed-services",
    term: "Contributed services (not-for-profits)",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "A not-for-profit recognizes contributed (volunteer) services as revenue and expense only if they create or enhance a nonfinancial asset, or require specialized skills, are provided by people with those skills and would otherwise have to be purchased.",
    takeaways: [
      "Examples that qualify: a volunteer accountant, doctor or electrician providing professional services.",
      "General volunteer help, such as staffing a fundraising event, isn't recognized.",
      "Services that qualify are measured at fair value.",
    ],
    related: ["conditional-promise-to-give", "net-assets-with-donor-restrictions"],
    match: ["contributed service", "volunteer"],
  },
];

export const audTermsD: GlossaryTerm[] = [
  {
    slug: "audit-documentation",
    term: "Audit documentation",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Audit documentation is the record of the procedures performed, the evidence obtained and the conclusions reached, detailed enough for an experienced auditor with no connection to the audit to understand it.",
    takeaways: [
      "For audits of private companies, the final file is assembled within 60 days after the report release date and kept for at least five years.",
      "For public company audits under Public Company Accounting Oversight Board (PCAOB) standards, the periods are 45 days and seven years.",
      "Changes after assembly must be documented with who made them, when and why.",
    ],
    related: ["management-representation-letter"],
    match: ["documentation", "working paper"],
  },
  {
    slug: "overall-audit-strategy",
    term: "Overall audit strategy",
    section: "aud",
    topic: "audit-planning-and-materiality",
    definition:
      "The overall audit strategy sets the scope, timing and direction of the audit and guides the development of the more detailed audit plan.",
    takeaways: [
      "It covers the engagement's characteristics, reporting deadlines, significant factors and the resources needed.",
      "The audit plan then sets out the nature, timing and extent of specific procedures.",
      "Both are updated as the audit progresses.",
    ],
    related: ["materiality", "performance-materiality"],
    match: ["audit strategy", "audit plan"],
  },
  {
    slug: "group-audit",
    term: "Group audit",
    section: "aud",
    topic: "group-audits-and-using-others-work",
    definition:
      "A group audit is an audit of financial statements that combine the financial information of more than one entity or business unit (components), such as consolidated statements.",
    takeaways: [
      "The group engagement partner is responsible for the group audit opinion.",
      "Work on components may be done by the group team or by component auditors.",
      "The group auditor must be involved enough in component auditors' work to decide whether it is adequate.",
    ],
    related: ["auditors-specialist", "internal-audit-function"],
    match: ["group audit", "component auditor", "component"],
  },
  {
    slug: "dual-dating",
    term: "Dual dating",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Dual dating means dating the auditor's report with its original date for most of the statements and a later date for a specific subsequent event that was disclosed or adjusted after the original report date.",
    takeaways: [
      "It limits the auditor's responsibility for later events to that one matter.",
      "The alternative is to date the whole report as of the later date, which extends the subsequent events procedures to that date.",
      "It applies to events that come to light before the report is released.",
    ],
    related: ["subsequent-events", "subsequently-discovered-facts"],
    match: ["dual dat", "report date"],
  },
  {
    slug: "other-matter-paragraph",
    term: "Other-matter paragraph",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An other-matter paragraph in the auditor's report refers to a matter that is not presented or disclosed in the financial statements but is relevant to users' understanding of the audit, the auditor's responsibilities or the report.",
    takeaways: [
      "Examples: the prior year was audited by another auditor, or the report's use is restricted.",
      "It doesn't change the opinion.",
      "An emphasis-of-matter paragraph, by contrast, refers to a matter that is presented or disclosed in the statements.",
    ],
    related: ["emphasis-of-matter-paragraph", "unmodified-opinion"],
    match: ["other-matter"],
  },
  {
    slug: "critical-audit-matters",
    term: "Critical audit matters (CAMs)",
    section: "aud",
    topic: "audit-reports",
    definition:
      "Critical audit matters (CAMs) are matters in a public company audit that were communicated, or required to be communicated, to the audit committee, relate to material accounts or disclosures, and involved especially challenging, subjective or complex auditor judgment.",
    takeaways: [
      "They are required in reports under Public Company Accounting Oversight Board (PCAOB) standards, with some exceptions, such as emerging growth companies.",
      "For each, the report describes why it was critical and how the audit addressed it.",
      "In private-company audits, the similar concept is key audit matters, reported only when the auditor is engaged to do so.",
    ],
    related: ["key-audit-matters"],
    match: ["critical audit matter", "CAM"],
  },
  {
    slug: "examination-engagement",
    term: "Examination engagement",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "An examination is an attestation engagement in which the practitioner obtains reasonable assurance and expresses an opinion on whether a subject matter, or an assertion about it, is in accordance with suitable criteria.",
    takeaways: [
      "It gives the same level of assurance as an audit, for subject matter other than historical financial statements.",
      "Examples include System and Organization Controls (SOC) reports and examinations of prospective financial statements.",
      "A review engagement under the attestation standards provides limited assurance instead.",
    ],
    related: ["agreed-upon-procedures", "soc-1-report"],
    match: ["examination", "attestation"],
  },
  {
    slug: "integrated-audit",
    term: "Integrated audit",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "An integrated audit combines an audit of a public company's financial statements with an audit of its internal control over financial reporting, under Public Company Accounting Oversight Board (PCAOB) standards.",
    takeaways: [
      "It is required for accelerated and large accelerated filers under Section 404(b) of the Sarbanes-Oxley Act.",
      "The auditor uses a top-down approach, starting with entity-level controls.",
      "Any material weakness leads to an adverse opinion on internal control.",
    ],
    related: ["material-weakness", "coso-internal-control"],
    match: ["integrated audit", "internal control over financial reporting"],
  },
  {
    slug: "pcaob",
    term: "Public Company Accounting Oversight Board (PCAOB)",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "The Public Company Accounting Oversight Board (PCAOB), created by the Sarbanes-Oxley Act and overseen by the Securities and Exchange Commission, sets auditing, quality control, ethics and independence standards for audits of public companies and broker-dealers.",
    takeaways: [
      "Audit firms must register with it to audit public companies.",
      "It inspects registered firms and can impose sanctions.",
      "Audits of private companies follow the American Institute of Certified Public Accountants' standards instead.",
    ],
    related: ["integrated-audit", "critical-audit-matters"],
    match: ["PCAOB"],
  },
  {
    slug: "single-audit",
    term: "Single audit",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A single audit is an audit of a nonfederal entity, such as a state or local government or a not-for-profit, that spends $1,000,000 or more of federal awards in a year (for fiscal years beginning on or after October 1, 2024). It covers the financial statements and compliance with the requirements of major federal programs.",
    takeaways: [
      "It is required by the Single Audit Act and the federal Uniform Guidance.",
      "It is performed under Government Auditing Standards as well as generally accepted auditing standards.",
      "The auditor reports on internal control over compliance and on compliance for each major program.",
    ],
    related: ["government-auditing-standards"],
    match: ["single audit", "federal award"],
  },
  {
    slug: "government-auditing-standards",
    term: "Government Auditing Standards (Yellow Book)",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Government Auditing Standards, known as the Yellow Book, are issued by the US Government Accountability Office and apply to audits of government entities and of organizations that receive government funding when required by law, regulation or agreement.",
    takeaways: [
      "They add requirements to generally accepted auditing standards, such as reporting on internal control and compliance.",
      "They have their own independence rules and continuing professional education requirements.",
      "Single audits are performed under them.",
    ],
    related: ["single-audit"],
    match: ["Government Auditing Standards", "Yellow Book", "GAGAS"],
  },
  {
    slug: "nonattest-services",
    term: "Nonattest services",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Nonattest services are services other than attest engagements, such as tax preparation, bookkeeping or consulting, that a firm provides to an attest client. They are allowed only if the firm doesn't take on management responsibilities.",
    takeaways: [
      "Management must accept responsibility for the results and designate someone with suitable skill, knowledge or experience to oversee the services.",
      "Performing management responsibilities, such as authorizing transactions or having custody of client assets, impairs independence.",
      "The firm documents its understanding with the client.",
    ],
    related: ["independence"],
    match: ["nonattest", "management responsibilit"],
  },
];
