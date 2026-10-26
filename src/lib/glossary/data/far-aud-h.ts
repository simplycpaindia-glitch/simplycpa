import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, eighth batch. */
export const farTermsH: GlossaryTerm[] = [
  {
    slug: "breakage",
    term: "Breakage",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "Breakage is the part of a customer's prepaid rights that is never used, such as the unspent balance on a gift card. A seller that expects breakage recognizes it as revenue in proportion to the rights the customer does use.",
    takeaways: [
      "If the seller can't estimate breakage, it recognizes it only when the chance of the customer using the rights becomes remote.",
      "Amounts that must be handed over to a government under unclaimed property laws are a liability, not revenue.",
      "Until used, prepaid amounts are a contract liability.",
    ],
    example: "Gift cards of $100,000 with expected breakage of 10%: when $45,000 is redeemed (half of the $90,000 expected), $5,000 of breakage is also recognized.",
    related: ["contract-liability", "variable-consideration"],
    match: ["breakage", "gift card", "unexercised"],
  },
  {
    slug: "right-of-return",
    term: "Sales with a right of return",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "When customers can return products, the seller recognizes revenue only for the products it expects to keep sold. It records a refund liability for expected returns and an asset for its right to recover the returned products.",
    takeaways: [
      "Expected returns are variable consideration, estimated using the expected value or most likely amount.",
      "The asset is the products' former carrying amount less expected recovery costs and any loss in value.",
      "Exchanges for the same type of product in the same condition aren't treated as returns.",
    ],
    related: ["variable-consideration", "transaction-price"],
    match: ["right of return", "refund liability", "returns"],
  },
  {
    slug: "consideration-payable-to-customer",
    term: "Consideration payable to a customer",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "Cash, credits, coupons or other amounts a seller pays or promises to its customer, such as slotting fees paid to a retailer, reduce the transaction price unless they pay for a distinct good or service from the customer at its fair value.",
    takeaways: [
      "The reduction in revenue is recognized at the later of when the related revenue is recognized and when the payment is paid or promised.",
      "Any payment above the fair value of a distinct good or service received reduces revenue.",
      "It applies to payments made to the customer's customers too, such as a manufacturer's coupons.",
    ],
    related: ["transaction-price", "variable-consideration"],
    match: ["payable to a customer", "slotting", "coupon", "rebate"],
  },
  {
    slug: "licenses-of-intellectual-property",
    term: "Licenses of intellectual property",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A license of functional intellectual property, such as software, a film or a drug formula, gives a right to use it and is recognized at a point in time. A license of symbolic intellectual property, such as a brand or logo, gives a right to access it and is recognized over time.",
    takeaways: [
      "Sales-based or usage-based royalties are recognized when the later sale or use occurs, not estimated upfront.",
      "Revenue from a right-to-use license can't be recognized before the license period begins.",
      "Franchise rights are usually symbolic intellectual property.",
    ],
    related: ["performance-obligation", "variable-consideration"],
    match: ["license", "intellectual property", "royalt"],
  },
  {
    slug: "fifo",
    term: "FIFO (first-in, first-out)",
    section: "far",
    topic: "inventory",
    definition:
      "First-in, first-out (FIFO) is an inventory cost flow assumption that the oldest goods are sold first, so ending inventory reflects the most recent purchase costs.",
    takeaways: [
      "When prices rise, it gives a lower cost of goods sold and higher income and inventory than last-in, first-out (LIFO).",
      "Periodic and perpetual systems give the same ending inventory under it.",
      "It is measured at the lower of cost and net realizable value.",
    ],
    example: "100 units bought at $10, then 100 at $12; 150 sold: cost of goods sold is $1,000 + $600 = $1,600 and ending inventory 50 × $12 = $600.",
    related: ["lifo", "weighted-average-cost", "lower-of-cost-and-net-realizable-value"],
    match: ["FIFO", "first-in", "first in"],
  },
  {
    slug: "sum-of-the-years-digits",
    term: "Sum-of-the-years'-digits depreciation",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "Sum-of-the-years'-digits is an accelerated depreciation method: each year's depreciation is the depreciable base (cost minus salvage value) multiplied by the remaining years of life divided by the sum of the years' digits.",
    takeaways: [
      "The sum of the digits for a life of n years is n(n + 1) ÷ 2.",
      "Unlike double-declining balance, it subtracts salvage value from the base from the start.",
      "Depreciation falls by the same amount each year.",
    ],
    example: "Cost $33,000, salvage $3,000, 5-year life: the sum is 15, so year 1 is $30,000 × 5/15 = $10,000 and year 2 is $8,000.",
    related: ["double-declining-balance", "macrs"],
    match: ["sum-of-the-years", "sum of the years"],
  },
  {
    slug: "secured-borrowing",
    term: "Secured borrowing (transfers of receivables)",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "A transfer of financial assets, such as receivables, is a sale only if the assets are isolated from the transferor, the transferee can pledge or exchange them, and the transferor doesn't keep effective control. Otherwise it is a secured borrowing.",
    takeaways: [
      "In a secured borrowing, the receivables stay on the balance sheet and the cash received is a liability.",
      "In a sale, the receivables are removed and a gain or loss is recognized.",
      "Assigning or pledging receivables as collateral is a secured borrowing.",
    ],
    related: ["factoring", "allowance-method"],
    match: ["secured borrowing", "pledg", "assignment", "transfer"],
  },
  {
    slug: "enacted-tax-rate",
    term: "Enacted tax rate",
    section: "far",
    topic: "income-taxes",
    definition:
      "Deferred tax assets and liabilities are measured using the tax rates enacted in law that are expected to apply when the temporary differences reverse. Expected future rate changes that aren't yet law are ignored.",
    takeaways: [
      "The effect of a change in tax law is recognized in income from continuing operations in the period the law is enacted (signed).",
      "If different rates apply in different years, the rate for each year of reversal is used.",
      "The adjustment is made even if the related item was originally recorded in other comprehensive income.",
    ],
    related: ["deferred-tax-asset", "deferred-tax-liability", "temporary-difference"],
    match: ["enacted", "tax rate", "change in tax law"],
  },
  {
    slug: "permanent-difference",
    term: "Permanent difference",
    section: "far",
    topic: "income-taxes",
    definition:
      "A permanent difference is an item included in book income but never in taxable income, or the reverse. Examples are tax-exempt municipal bond interest, fines and penalties, and the nondeductible half of business meals.",
    takeaways: [
      "No deferred tax is recognized for it, because it never reverses.",
      "Permanent differences make the effective tax rate differ from the statutory rate.",
      "Premiums on life insurance where the company is the beneficiary are another example.",
    ],
    related: ["temporary-difference", "deferred-tax-liability"],
    match: ["permanent difference", "tax-exempt", "municipal"],
  },
  {
    slug: "mandatorily-redeemable-shares",
    term: "Mandatorily redeemable shares",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Mandatorily redeemable shares are shares, usually preferred stock, that the issuer must redeem for cash on a fixed date or on an event certain to occur. They are classified as liabilities, not equity.",
    takeaways: [
      "Dividends on them are reported as interest expense.",
      "Shares redeemable only on an uncertain event, or at the holder's option, aren't automatically liabilities; public companies may present them between liabilities and equity.",
      "Obligations to issue a variable number of shares worth a fixed amount are also liabilities.",
    ],
    related: ["cumulative-preferred-stock", "convertible-bonds"],
    match: ["mandatorily redeemable", "redeemable preferred", "redeem"],
  },
  {
    slug: "goodwill-impairment-test",
    term: "Goodwill impairment test",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Goodwill is tested for impairment at least annually by comparing a reporting unit's fair value with its carrying amount, including goodwill. The impairment loss is the excess of carrying amount over fair value, limited to the goodwill allocated to the unit.",
    takeaways: [
      "An optional qualitative assessment can skip the test if impairment isn't more likely than not.",
      "The test is also performed when a triggering event occurs between annual tests.",
      "Goodwill impairment losses are never reversed.",
    ],
    example: "A reporting unit carried at $900,000, including $200,000 of goodwill, has a fair value of $750,000: the impairment is $150,000.",
    related: ["goodwill", "impairment", "private-company-goodwill-alternative"],
    match: ["goodwill impairment", "reporting unit"],
  },
  {
    slug: "voting-interest-model",
    term: "Voting interest model",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "Under the voting interest model, a company consolidates another entity when it has a controlling financial interest, usually by owning more than 50% of its voting shares.",
    takeaways: [
      "Entities are first checked against the variable interest entity model.",
      "A majority owner doesn't consolidate if it lacks control, for example when the subsidiary is in bankruptcy.",
      "Noncontrolling interest is reported within equity.",
    ],
    related: ["noncontrolling-interest", "consolidation-eliminations", "variable-interest-entity"],
    match: ["voting interest", "controlling financial interest", "more than 50%"],
  },
  {
    slug: "special-revenue-fund",
    term: "Special revenue fund",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "A special revenue fund is a governmental fund for the proceeds of specific revenue sources that are restricted or committed to a specified purpose other than debt service or capital projects, such as a fuel tax used for road maintenance.",
    takeaways: [
      "The restricted or committed revenue should be a substantial part of the fund's inflows.",
      "It uses the modified accrual basis and the current financial resources focus.",
      "Major special revenue funds with legally adopted budgets need a budgetary comparison.",
    ],
    related: ["general-fund", "capital-projects-fund", "debt-service-fund"],
    match: ["special revenue"],
  },
  {
    slug: "liquidity-and-availability-disclosure",
    term: "Liquidity and availability disclosure",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "Not-for-profits disclose qualitative information about how they manage liquid resources to meet cash needs for general expenditures within one year, and quantitative information about financial assets available for those needs.",
    takeaways: [
      "Assets limited by donor restrictions or board designations are shown as reducing what is available.",
      "It helps readers judge whether the organization can meet its near-term obligations.",
      "It is presented in the notes or on the face of the statement of financial position.",
    ],
    related: ["net-assets-with-donor-restrictions", "endowment"],
    match: ["liquidity", "availability"],
  },
  {
    slug: "weighted-average-shares-outstanding",
    term: "Weighted-average shares outstanding",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "The denominator of basic earnings per share is the weighted-average number of common shares outstanding, with each change weighted by the fraction of the period the shares were outstanding.",
    takeaways: [
      "Stock dividends and splits are treated as if they happened at the start of the earliest period presented.",
      "Treasury shares reduce the count from the date they are bought.",
      "Shares issued in a business combination count from the acquisition date.",
    ],
    example: "100,000 shares at January 1 and 12,000 issued on October 1: 100,000 + 12,000 × 3/12 = 103,000 weighted-average shares.",
    related: ["basic-eps", "stock-split", "stock-dividend"],
    match: ["weighted-average", "weighted average", "shares outstanding"],
  },
  {
    slug: "elements-of-financial-statements",
    term: "Elements of financial statements",
    section: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    definition:
      "The Financial Accounting Standards Board's conceptual framework defines the elements of financial statements: assets, liabilities, equity, revenues, expenses, gains, losses, investments by owners, distributions to owners and comprehensive income.",
    takeaways: [
      "An asset is a present right of an entity to an economic benefit.",
      "A liability is a present obligation of an entity to transfer or otherwise provide economic benefits to others.",
      "Gains and losses arise from peripheral or incidental activities; revenues and expenses from central operations.",
    ],
    related: ["qualitative-characteristics", "other-comprehensive-income"],
    match: ["elements", "present right", "present obligation"],
  },
];

export const audTermsH: GlossaryTerm[] = [
  {
    slug: "types-of-audit-procedures",
    term: "Types of audit procedures",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "Auditors gather evidence through inspection of records and assets, observation, inquiry, external confirmation, recalculation, reperformance and analytical procedures.",
    takeaways: [
      "Inquiry alone is never sufficient evidence, for tests of controls or for substantive tests.",
      "Reperformance, the auditor independently running a control, gives strong evidence about how it operates.",
      "Observation gives evidence only for the moment it happens.",
    ],
    related: ["reliability-of-audit-evidence", "external-confirmation", "analytical-procedures"],
    match: ["inspection", "observation", "inquiry", "recalculation", "reperformance"],
  },
  {
    slug: "interbank-transfer-schedule",
    term: "Interbank transfer schedule",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "An interbank transfer schedule lists cash transfers between the entity's bank accounts around year-end, comparing the dates each transfer was recorded in the books with the dates the banks recorded it.",
    takeaways: [
      "It detects kiting, where the same cash is counted in two accounts at once.",
      "It also finds cutoff errors in recording transfers.",
      "A transfer recorded as a deposit in one account but not yet as a withdrawal in the other overstates cash.",
    ],
    related: ["bank-reconciliation", "cutoff"],
    match: ["kiting", "interbank", "bank transfer"],
  },
  {
    slug: "lapping",
    term: "Lapping",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Lapping is a fraud in which an employee steals a customer's payment and hides the theft by applying a later customer's payment to the first customer's account, and so on.",
    takeaways: [
      "It needs one person to both handle cash receipts and post to customer accounts, a segregation of duties failure.",
      "Auditors detect it by confirming receivables and comparing deposit details with the postings to customer accounts.",
      "Mandatory vacations and job rotation can expose it.",
    ],
    related: ["misappropriation-of-assets", "segregation-of-duties", "external-confirmation"],
    match: ["lapping"],
  },
  {
    slug: "misappropriation-of-assets",
    term: "Misappropriation of assets",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Misappropriation of assets is theft of an entity's assets, such as skimming cash, stealing inventory, paying fictitious vendors or adding ghost employees to the payroll. It is one of the two types of fraud auditors consider, alongside fraudulent financial reporting.",
    takeaways: [
      "It is often committed by employees, in relatively small amounts.",
      "It is frequently concealed with false records or documents.",
      "Fraudulent financial reporting is more often committed by management, sometimes by overriding controls.",
    ],
    related: ["fraud-triangle", "lapping", "management-override-of-controls"],
    match: ["misappropriation", "theft", "ghost employee", "fictitious vendor"],
  },
  {
    slug: "noncompliance-with-laws-and-regulations",
    term: "Noncompliance with laws and regulations",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "An auditor's responsibility for an entity's compliance with laws depends on the law. For laws with a direct effect on financial statement amounts, such as tax laws, the auditor obtains evidence of compliance; for other laws, procedures are limited to inquiry and inspecting correspondence.",
    takeaways: [
      "Other laws include environmental, workplace safety and licensing rules that can affect the business.",
      "Identified or suspected noncompliance is evaluated for its effect on the statements and communicated to those charged with governance.",
      "Serious cases may lead the auditor to withdraw or to consider whether to report outside the entity.",
    ],
    related: ["those-charged-with-governance", "lawyers-letter", "compliance-audit"],
    match: ["noncompliance", "laws and regulations", "illegal act"],
  },
  {
    slug: "pervasiveness",
    term: "Pervasive",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A misstatement or possible misstatement is pervasive if its effects aren't confined to specific elements of the financial statements, are confined but are a substantial part of them, or relate to disclosures fundamental to users' understanding.",
    takeaways: [
      "A material but not pervasive misstatement leads to a qualified opinion; a pervasive one to an adverse opinion.",
      "A material but not pervasive scope limitation leads to a qualified opinion; a pervasive one to a disclaimer.",
      "Pervasiveness is a matter of the auditor's professional judgment.",
    ],
    related: ["qualified-opinion", "adverse-opinion", "disclaimer-of-opinion", "scope-limitation"],
    match: ["pervasive"],
  },
  {
    slug: "scope-limitation",
    term: "Scope limitation",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A scope limitation is the auditor's inability to obtain sufficient appropriate audit evidence, because of circumstances such as destroyed records or because management restricts the work.",
    takeaways: [
      "The opinion is qualified if the possible effects are material but not pervasive, and disclaimed if pervasive.",
      "If management imposes a limitation before the engagement is accepted that would lead to a disclaimer, the auditor generally declines the engagement.",
      "The auditor first tries alternative procedures.",
    ],
    related: ["pervasiveness", "disclaimer-of-opinion", "qualified-opinion"],
    match: ["scope limitation", "unable to obtain"],
  },
  {
    slug: "reports-on-comparative-statements",
    term: "Reports on comparative financial statements",
    section: "aud",
    topic: "audit-reports",
    definition:
      "When comparative financial statements are presented, the continuing auditor updates the opinion on the prior period. If the updated opinion differs from the one first issued, an other-matter paragraph explains why.",
    takeaways: [
      "If a predecessor audited the prior period, either the predecessor reissues its report or the current report describes it in an other-matter paragraph.",
      "Before reissuing, the predecessor reads the current statements and obtains representations from the current auditor and management.",
      "Restating the prior period affects both reports.",
    ],
    related: ["predecessor-auditor", "other-matter-paragraph"],
    match: ["comparative", "updated opinion", "reissue"],
  },
  {
    slug: "user-auditor",
    term: "User auditor",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "A user auditor audits the financial statements of a user entity that relies on a service organization, such as a payroll processor. The user auditor needs to understand the services and the related controls.",
    takeaways: [
      "A Type 1 report helps the user auditor understand controls; a Type 2 report is needed to rely on them.",
      "The user auditor considers complementary user entity controls and any gap between the report period and year-end.",
      "The user auditor's report doesn't refer to the service auditor's report.",
    ],
    related: ["soc-1-report", "type-1-and-type-2-reports", "complementary-user-entity-controls", "bridge-letter"],
    match: ["user auditor", "service organization"],
  },
  {
    slug: "major-program",
    term: "Major program",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "In a single audit, major programs are the federal programs the auditor selects for a compliance audit, using a risk-based approach that starts by grouping programs into larger (Type A) and smaller (Type B) programs by expenditures.",
    takeaways: [
      "Type A programs not judged low risk are audited as major programs.",
      "Major programs must cover at least 40% of total federal expenditures, or 20% for a low-risk auditee.",
      "The auditor gives an opinion on compliance for each major program.",
    ],
    related: ["single-audit", "compliance-audit", "government-auditing-standards"],
    match: ["major program", "Type A", "federal program"],
  },
  {
    slug: "benchmarking-automated-controls",
    term: "Benchmarking automated controls",
    section: "aud",
    topic: "it-controls-in-audit",
    definition:
      "An automated application control that hasn't changed can be tested once and then relied on in later years by confirming it hasn't changed (a benchmark), instead of retesting it each year.",
    takeaways: [
      "It depends on effective information technology (IT) general controls over program changes.",
      "The auditor periodically re-establishes the benchmark.",
      "Automated controls work consistently, so a smaller test is often enough.",
    ],
    related: ["application-controls", "it-general-controls", "change-management"],
    match: ["benchmark", "automated control"],
  },
  {
    slug: "sample-selection-methods",
    term: "Sample selection methods",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Common sample selection methods are random selection, where every item has an equal chance, systematic selection, every nth item after a random start, and haphazard selection, picking without conscious bias.",
    takeaways: [
      "Haphazard selection can't be used for statistical sampling.",
      "Block selection of a group of items in a row is rarely appropriate for audit sampling.",
      "Monetary unit sampling selects items in proportion to their dollar size.",
    ],
    related: ["attribute-sampling", "monetary-unit-sampling", "sampling-risk"],
    match: ["random", "systematic", "haphazard", "block selection"],
  },
  {
    slug: "preconditions-for-an-audit",
    term: "Preconditions for an audit",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "Before accepting an audit, the auditor determines that management uses an acceptable financial reporting framework and agrees it is responsible for the financial statements, for internal control and for giving the auditor access to information.",
    takeaways: [
      "If the preconditions aren't present, the auditor doesn't accept the engagement.",
      "Management's agreement is documented in the engagement letter.",
      "Management's responsibilities are confirmed again in the representation letter.",
    ],
    related: ["engagement-letter", "management-representation-letter"],
    match: ["preconditions", "acceptable financial reporting framework"],
  },
  {
    slug: "prohibited-nonaudit-services",
    term: "Prohibited nonaudit services",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Securities and Exchange Commission and Public Company Accounting Oversight Board rules bar a public company's auditor from providing certain services to the client, including bookkeeping, financial information systems design, valuations, actuarial services, internal audit outsourcing, management functions and legal services.",
    takeaways: [
      "Permitted services, including most tax services, must be pre-approved by the audit committee.",
      "Contingent-fee tax services and marketing aggressive tax shelters to audit clients are prohibited.",
      "The rules aim to keep the auditor from auditing its own work or acting as management.",
    ],
    related: ["independence", "audit-committee", "nonattest-services"],
    match: ["prohibited", "nonaudit", "non-audit"],
  },
  {
    slug: "experienced-auditor-standard",
    term: "Experienced auditor standard",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Audit documentation must be detailed enough for an experienced auditor with no previous connection to the audit to understand the procedures performed, the evidence obtained, the conclusions reached and the significant judgments made.",
    takeaways: [
      "It covers who performed and reviewed the work and when.",
      "Significant findings and how they were resolved must be documented.",
      "Oral explanations alone aren't sufficient support for the work.",
    ],
    related: ["audit-documentation", "engagement-quality-review"],
    match: ["experienced auditor", "documentation"],
  },
];
