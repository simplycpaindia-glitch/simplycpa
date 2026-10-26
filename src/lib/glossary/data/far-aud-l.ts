import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, twelfth batch. */
export const farTermsL: GlossaryTerm[] = [
  {
    slug: "lump-sum-purchase",
    term: "Lump-sum purchase",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "When several assets are bought together for one price, such as land and a building, the total cost is allocated to each asset in proportion to its relative fair value.",
    takeaways: [
      "The allocation matters because land isn't depreciated while buildings are.",
      "Appraisals or tax assessments are common evidence of relative values.",
      "If only one asset's fair value is known, the rest of the price may go to the other asset.",
    ],
    example: "$900,000 paid for land worth $300,000 and a building worth $700,000: land gets 30% ($270,000) and the building 70% ($630,000).",
    related: ["asset-acquisition", "subsequent-expenditures"],
    match: ["lump-sum", "basket purchase", "relative fair value"],
  },
  {
    slug: "insurance-recoveries",
    term: "Involuntary conversions and insurance recoveries",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "When an asset is destroyed or taken, for example by fire or condemnation, and the company receives money, a gain or loss is recognized in the financial statements even if the proceeds are reinvested in a replacement.",
    takeaways: [
      "An insurance recovery is recognized when probable, up to the amount of the loss already recognized.",
      "Recoveries above the loss are gain contingencies, recognized when realized.",
      "For tax purposes, the gain can often be deferred, creating a temporary difference.",
    ],
    related: ["involuntary-conversion", "gain-contingency", "impairment"],
    match: ["involuntary conversion", "insurance", "condemnation"],
  },
  {
    slug: "start-up-costs-accounting",
    term: "Start-up costs (financial reporting)",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Costs of start-up activities, such as opening a new facility, entering a new market or organizing a new entity, are expensed as incurred under generally accepted accounting principles.",
    takeaways: [
      "Costs of acquiring property and equipment are still capitalized under their own rules.",
      "For tax, start-up and organizational costs can be partly deducted and the rest amortized over 180 months, creating a temporary difference.",
      "Pre-opening advertising is also expensed.",
    ],
    related: ["organizational-and-start-up-costs", "research-and-development-costs", "temporary-difference"],
    match: ["start-up", "pre-opening", "organization cost"],
  },
  {
    slug: "lease-modification",
    term: "Lease modification",
    section: "far",
    topic: "leases",
    definition:
      "A lease modification is a change to a lease's terms that wasn't part of the original contract. It is a separate contract if it adds the right to use another asset at a price matching its standalone price; otherwise the lessee remeasures the lease liability.",
    takeaways: [
      "The liability is remeasured using a discount rate updated at the modification date, with the same adjustment to the right-of-use asset.",
      "A partial termination reduces the asset proportionately, with any difference recognized as a gain or loss.",
      "Exercising an existing option isn't a modification but a reassessment.",
    ],
    related: ["right-of-use-asset", "lease-term", "incremental-borrowing-rate"],
    match: ["modification", "remeasure"],
  },
  {
    slug: "identifying-a-lease",
    term: "Identifying a lease",
    section: "far",
    topic: "leases",
    definition:
      "A contract contains a lease if it conveys the right to control the use of an identified asset for a period in exchange for consideration. Control means the right to get substantially all the asset's economic benefits and to direct its use.",
    takeaways: [
      "If the supplier has a substantive right to substitute the asset, there is no identified asset.",
      "A capacity portion of an asset, such as part of a pipeline, is generally not an identified asset unless it is substantially all of it.",
      "Service contracts, such as many cloud arrangements, often contain no lease.",
    ],
    related: ["right-of-use-asset", "cloud-computing-implementation-costs"],
    match: ["identified asset", "right to control", "substitution"],
  },
  {
    slug: "induced-conversion",
    term: "Induced conversion",
    section: "far",
    topic: "long-term-debt",
    definition:
      "In an induced conversion, an issuer offers convertible debt holders extra consideration, a sweetener, to convert early. The issuer recognizes an expense equal to the fair value of the consideration beyond what the original terms required.",
    takeaways: [
      "It isn't treated as an extinguishment gain or loss.",
      "The rest of the conversion is recorded at the debt's carrying amount, with no gain or loss.",
      "The offer must be for a limited period to be an induced conversion.",
    ],
    related: ["convertible-bonds", "extinguishment-of-debt"],
    match: ["induced conversion", "sweetener"],
  },
  {
    slug: "stock-subscriptions",
    term: "Stock subscriptions",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "A stock subscription is an investor's contract to buy shares and pay later. The issuer records a subscription receivable and common stock subscribed, and issues the shares when they are fully paid.",
    takeaways: [
      "Subscriptions receivable are generally shown as a deduction from equity, not as an asset.",
      "Additional paid-in capital is recorded at the time of subscription.",
      "On a default, the treatment of amounts already paid depends on state law and the agreement.",
    ],
    related: ["treasury-stock", "basic-eps"],
    match: ["subscription", "subscribed"],
  },
  {
    slug: "two-class-method",
    term: "Two-class method",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "The two-class method computes earnings per share when a company has participating securities, such as participating preferred stock. Undistributed earnings are allocated to each class as if all earnings had been distributed.",
    takeaways: [
      "Earnings per share is then calculated separately for each class.",
      "Unvested share awards with nonforfeitable dividend rights are participating securities.",
      "Losses are allocated to participating securities only if they must share in losses.",
    ],
    related: ["participating-preferred-stock", "basic-eps", "diluted-eps"],
    match: ["two-class", "participating securit"],
  },
  {
    slug: "impracticability",
    term: "Impracticability",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "Retrospective application of a change in accounting principle isn't required for periods where it is impracticable: the effects can't be determined after reasonable effort, would require assumptions about management's intent then, or need estimates that can't be objectively made.",
    takeaways: [
      "The change is applied from the earliest period for which it is practicable.",
      "The reason retrospective application is impracticable is disclosed.",
      "Hindsight can't be used to make earlier estimates.",
    ],
    related: ["change-in-accounting-principle", "retrospective-application"],
    match: ["impracticab"],
  },
  {
    slug: "supplemental-cash-flow-disclosures",
    term: "Supplemental cash flow disclosures",
    section: "far",
    topic: "statement-of-cash-flows",
    definition:
      "Companies disclose interest paid (net of amounts capitalized) and income taxes paid, as well as significant noncash investing and financing activities, alongside the statement of cash flows.",
    takeaways: [
      "Under the direct method, a reconciliation of net income to operating cash flow is also required.",
      "Noncash activities include buying assets by issuing debt or converting debt to equity.",
      "They can be presented at the bottom of the statement or in the notes.",
    ],
    related: ["noncash-investing-and-financing-activities", "direct-method", "indirect-method"],
    match: ["interest paid", "income taxes paid", "supplemental"],
  },
  {
    slug: "not-for-profit-statement-of-activities",
    term: "Statement of activities (not-for-profits)",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "A not-for-profit's statement of activities reports revenues, expenses, gains and losses and the resulting changes in net assets with and without donor restrictions, and in total net assets.",
    takeaways: [
      "All expenses are reported as decreases in net assets without donor restrictions.",
      "When a restriction is met, net assets are reclassified ('released') from with to without donor restrictions.",
      "An intermediate measure of operations is optional but must be described if used.",
    ],
    related: ["net-assets-with-donor-restrictions", "statement-of-functional-expenses"],
    match: ["statement of activities", "released from restriction"],
  },
  {
    slug: "unconditional-promise-to-give",
    term: "Unconditional promise to give",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "An unconditional promise to give is a pledge with no barrier the not-for-profit must overcome. The recipient recognizes a receivable and contribution revenue when the promise is made, measured at fair value.",
    takeaways: [
      "Amounts due in future years are discounted to present value and have an implied time restriction.",
      "An allowance is recorded for pledges expected to be uncollectible.",
      "Promises with conditions aren't recognized until the conditions are met.",
    ],
    related: ["conditional-promise-to-give", "net-assets-with-donor-restrictions"],
    match: ["unconditional promise", "pledge"],
  },
  {
    slug: "landfill-closure-costs",
    term: "Landfill closure and postclosure costs",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "A government that operates a landfill recognizes the estimated costs of closing it and caring for it afterward over its active life, in proportion to the capacity used each year.",
    takeaways: [
      "In proprietary funds and the government-wide statements, an expense and liability are recognized each year.",
      "In governmental funds, expenditures are recognized only when the amounts are due.",
      "The estimate is updated each year, with changes recognized going forward.",
    ],
    related: ["asset-retirement-obligation", "proprietary-funds", "modified-accrual-basis"],
    match: ["landfill", "closure", "postclosure"],
  },
  {
    slug: "nonexchange-transactions",
    term: "Nonexchange transactions (governments)",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "In nonexchange transactions, a government gives or receives value without directly giving or receiving equal value. Types include derived tax revenues, imposed revenues, government-mandated and voluntary nonexchange transactions.",
    takeaways: [
      "Derived tax revenues, such as sales and income taxes, are recognized when the underlying transaction occurs.",
      "Imposed revenues, such as property taxes, are recognized in the period they are levied for.",
      "Grants are recognized when all eligibility requirements, including any time requirement, are met.",
    ],
    related: ["measurable-and-available", "deferred-inflows-of-resources"],
    match: ["nonexchange", "derived tax", "imposed"],
  },
  {
    slug: "related-party-disclosures",
    term: "Related party disclosures",
    section: "far",
    topic: "notes-subsequent-events-and-going-concern",
    definition:
      "Companies disclose material related party transactions: the nature of the relationship, a description of the transactions, the amounts involved and any balances due.",
    takeaways: [
      "Transactions can't be described as arm's length unless that can be substantiated.",
      "Ordinary compensation arrangements and transactions eliminated in consolidation needn't be disclosed.",
      "Control relationships are disclosed even without transactions, if they could significantly affect the entity.",
    ],
    related: ["related-party", "principal-versus-agent"],
    match: ["related part"],
  },
];

export const audTermsL: GlossaryTerm[] = [
  {
    slug: "spectrum-of-inherent-risk",
    term: "Spectrum of inherent risk",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Auditors assess inherent risk along a spectrum from lower to higher, based on the likelihood and size of possible misstatement. Risks at the upper end of the spectrum are significant risks.",
    takeaways: [
      "The assessment drives how persuasive the audit evidence needs to be.",
      "It is assessed separately from control risk under American Institute of Certified Public Accountants standards.",
      "Inherent risk factors help place a risk on the spectrum.",
    ],
    related: ["inherent-risk", "significant-risk", "inherent-risk-factors"],
    match: ["spectrum"],
  },
  {
    slug: "inherent-risk-factors",
    term: "Inherent risk factors",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Inherent risk factors are characteristics that make an assertion more likely to be misstated before considering controls: complexity, subjectivity, change, uncertainty, and susceptibility to misstatement from management bias or fraud.",
    takeaways: [
      "Accounting estimates often score high on subjectivity and uncertainty.",
      "New standards, systems or business lines bring change risk.",
      "The factors are considered together when assessing inherent risk.",
    ],
    related: ["inherent-risk", "spectrum-of-inherent-risk", "auditing-accounting-estimates"],
    match: ["complexity", "subjectivity", "uncertainty"],
  },
  {
    slug: "significant-classes-of-transactions",
    term: "Significant classes of transactions, balances and disclosures",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "A class of transactions, account balance or disclosure is significant if it has one or more relevant assertions, meaning there is a reasonable possibility of a material misstatement in it.",
    takeaways: [
      "Identifying them focuses the risk assessment and audit response.",
      "Substantive procedures are still required for every material class, balance and disclosure, whatever the assessed risk.",
      "The auditor reconsiders the identification as the audit progresses.",
    ],
    related: ["assertions", "risk-of-material-misstatement", "substantive-procedures"],
    match: ["significant class", "relevant assertion", "significant account"],
  },
  {
    slug: "accounts-receivable-confirmation",
    term: "Confirmation of accounts receivable",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Auditors are presumed to confirm accounts receivable unless they are immaterial, confirmation would be ineffective, or the assessed risk is low and other substantive procedures address it.",
    takeaways: [
      "An auditor who doesn't confirm documents why.",
      "Confirmations mainly support existence, not valuation or completeness.",
      "The auditor controls sending and receiving the requests.",
    ],
    related: ["external-confirmation", "positive-and-negative-confirmations", "confirmation-nonresponses"],
    match: ["confirm", "receivable"],
  },
  {
    slug: "inventory-held-by-third-parties",
    term: "Inventory held by third parties",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "When an entity's inventory is held by others, such as in a public warehouse or with consignees, the auditor confirms the quantities and condition directly with the custodian.",
    takeaways: [
      "If the inventory is material, the auditor may also observe counts or inspect the custodian's reports on its controls.",
      "The auditor considers the custodian's integrity and independence.",
      "Goods held for others at the client's premises must be excluded from its inventory.",
    ],
    related: ["inventory-observation", "consignment", "external-confirmation"],
    match: ["warehouse", "held by others", "consignee"],
  },
  {
    slug: "departure-from-the-framework",
    term: "Departure from the reporting framework",
    section: "aud",
    topic: "audit-reports",
    definition:
      "When financial statements depart from the applicable financial reporting framework, for example by not following generally accepted accounting principles, and the effect is material, the auditor gives a qualified ('except for') or adverse opinion.",
    takeaways: [
      "The opinion is qualified if the effect is material but not pervasive, and adverse if pervasive.",
      "The basis for opinion section describes and, if practicable, quantifies the effects.",
      "Omitted required disclosures are also departures.",
    ],
    related: ["qualified-opinion", "adverse-opinion", "pervasiveness"],
    match: ["departure", "except for", "misstatement"],
  },
  {
    slug: "compliance-attestation",
    term: "Compliance attestation",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "In a compliance attestation, a practitioner examines or reviews an entity's compliance with specified requirements, such as laws, regulations, contracts or grants, or its controls over that compliance.",
    takeaways: [
      "An examination gives an opinion; a review gives limited assurance.",
      "Agreed-upon procedures on compliance are also possible.",
      "Compliance audits of government programs follow separate auditing standards.",
    ],
    related: ["compliance-audit", "examination-engagement", "agreed-upon-procedures"],
    match: ["compliance attestation", "specified requirements"],
  },
  {
    slug: "sustainability-assurance",
    term: "Sustainability assurance",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "Practitioners can examine or review sustainability information, such as greenhouse gas emissions, under attestation standards, giving reasonable or limited assurance against suitable criteria such as the Greenhouse Gas Protocol.",
    takeaways: [
      "Limited assurance is more common for early sustainability reporting.",
      "Data often comes from systems outside financial reporting, with weaker controls.",
      "Practitioners may need specialists, such as environmental engineers.",
    ],
    related: ["examination-engagement", "limited-assurance", "suitable-criteria"],
    match: ["sustainability", "greenhouse gas", "emissions"],
  },
  {
    slug: "integrity-and-objectivity",
    term: "Integrity and objectivity",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "The American Institute of Certified Public Accountants' Code requires members to maintain integrity and objectivity, be free of conflicts of interest, not knowingly misrepresent facts and not subordinate their judgment to others.",
    takeaways: [
      "The rule applies to all members, in public practice and in business.",
      "Conflicts of interest may be acceptable with disclosure and consent, if safeguards reduce threats to an acceptable level.",
      "Pressure from a supervisor to misstate records must be resisted and escalated.",
    ],
    related: ["threats-and-safeguards", "independence", "acts-discreditable"],
    match: ["integrity", "objectivity", "conflict"],
  },
  {
    slug: "commissions-and-referral-fees",
    term: "Commissions and referral fees",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "A member in public practice may not accept a commission for recommending a product or service to a client while performing attest services for that client. For other clients, commissions are allowed if disclosed.",
    takeaways: [
      "The restriction covers the period of the attest engagement and the historical statements it covers.",
      "Referral fees for recommending or referring a service of another accountant must be disclosed to the client.",
      "Contingent fees follow a separate rule.",
    ],
    related: ["contingent-fees", "independence"],
    match: ["commission", "referral fee"],
  },
  {
    slug: "peer-review",
    term: "Peer review",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "Firms that perform audits, reviews, compilations or other attest work under American Institute of Certified Public Accountants standards must undergo a peer review of their quality management every 3 years.",
    takeaways: [
      "Firms that perform audits get a system review; those doing only reviews or compilations get an engagement review.",
      "Reports are rated pass, pass with deficiencies or fail.",
      "Public company audit work is inspected by the Public Company Accounting Oversight Board instead.",
    ],
    related: ["system-of-quality-management", "pcaob-inspections"],
    match: ["peer review", "system review", "engagement review"],
  },
  {
    slug: "pcaob-inspections",
    term: "PCAOB inspections",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "The Public Company Accounting Oversight Board (PCAOB) inspects registered firms each year if they audit more than 100 public companies, and at least every 3 years otherwise.",
    takeaways: [
      "Inspections review selected audits and the firm's quality control.",
      "Inspection reports are public, but criticisms of quality control stay private if remediated within 12 months.",
      "Deficiencies can lead to enforcement actions.",
    ],
    related: ["pcaob", "qc-1000", "peer-review"],
    match: ["inspection"],
  },
  {
    slug: "retrospective-review-of-estimates",
    term: "Retrospective review of accounting estimates",
    section: "aud",
    topic: "auditing-accounting-estimates",
    definition:
      "The auditor reviews how prior-period accounting estimates turned out, or were later re-estimated, to understand management's estimation process and look for possible bias.",
    takeaways: [
      "It is part of risk assessment and of the response to the risk of management override.",
      "Differences aren't necessarily errors; they may reflect new information.",
      "A pattern of estimates consistently favoring one direction suggests bias.",
    ],
    related: ["auditing-accounting-estimates", "auditors-range", "management-override-of-controls"],
    match: ["retrospective review", "prior-period estimate", "hindsight"],
  },
  {
    slug: "risk-of-overreliance",
    term: "Risk of overreliance and of incorrect acceptance",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "In tests of controls, the risk of overreliance is that a sample supports more reliance on a control than its true operating effectiveness justifies. In substantive tests, the risk of incorrect acceptance is that a sample supports a balance that is materially misstated.",
    takeaways: [
      "Both relate to audit effectiveness, the more serious concern.",
      "The opposite risks, underreliance and incorrect rejection, relate to efficiency and lead to extra work.",
      "Lowering the acceptable risk increases sample size.",
    ],
    related: ["sampling-risk", "attribute-sampling", "tolerable-misstatement"],
    match: ["overreliance", "incorrect acceptance", "incorrect rejection", "underreliance"],
  },
];
