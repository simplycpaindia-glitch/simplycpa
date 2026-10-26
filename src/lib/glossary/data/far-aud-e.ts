import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, fifth batch. */
export const farTermsE: GlossaryTerm[] = [
  {
    slug: "fair-value-option",
    term: "Fair value option",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "The fair value option lets a company elect to measure eligible financial assets and liabilities at fair value, with changes in fair value reported in earnings, instead of using the measurement the guidance would otherwise require.",
    takeaways: [
      "The election is made instrument by instrument, usually when the item is first recognized, and is irrevocable.",
      "For liabilities, the part of a fair value change caused by the company's own credit risk goes to other comprehensive income.",
      "It can reduce volatility when related assets and liabilities would otherwise be measured differently.",
    ],
    related: ["fair-value-hierarchy", "available-for-sale-debt-securities"],
    match: ["fair value option"],
  },
  {
    slug: "nonmonetary-exchange",
    term: "Nonmonetary exchange",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "A nonmonetary exchange is an exchange of assets, such as equipment for equipment, with little or no cash. It is generally measured at fair value, with a gain or loss recognized, unless the exchange lacks commercial substance.",
    takeaways: [
      "An exchange has commercial substance if the company's future cash flows are expected to change significantly as a result.",
      "Without commercial substance, the new asset generally takes the old asset's carrying amount, though a gain is recognized in proportion to any cash (boot) received.",
      "Losses are recognized in full either way.",
    ],
    related: ["impairment"],
    match: ["nonmonetary", "commercial substance", "exchange"],
  },
  {
    slug: "depletion",
    term: "Depletion",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "Depletion allocates the cost of natural resources, such as oil, gas, minerals or timber, to the units extracted, usually by the units-of-production method.",
    takeaways: [
      "Depletion rate = (cost − residual value, plus any restoration costs) ÷ estimated recoverable units.",
      "Depletion on resources extracted but not yet sold sits in inventory, not expense.",
      "Changes in estimated reserves are changes in estimate, applied prospectively.",
    ],
    example: "A mine costing $5,000,000 with no residual value and 1,000,000 estimated tons: depletion is $5 a ton; extracting 120,000 tons adds $600,000 to inventory.",
    related: ["asset-retirement-obligation", "change-in-accounting-estimate"],
    match: ["depletion", "natural resource"],
  },
  {
    slug: "sale-leaseback",
    term: "Sale-leaseback",
    section: "far",
    topic: "leases",
    definition:
      "In a sale-leaseback, an owner sells an asset and leases it back from the buyer. If the transfer qualifies as a sale under the revenue guidance, the seller-lessee derecognizes the asset, recognizes any gain or loss and accounts for the leaseback as a lease.",
    takeaways: [
      "If the leaseback is a finance lease, or the seller has a repurchase option that doesn't qualify, there is no sale: the seller keeps the asset and records a financial liability.",
      "In a failed sale, the buyer-lessor records a receivable rather than the asset.",
      "Gains are adjusted if the sale price isn't at fair value.",
    ],
    related: ["right-of-use-asset", "finance-lease"],
    match: ["sale-leaseback", "leaseback"],
  },
  {
    slug: "variable-lease-payments",
    term: "Variable lease payments",
    section: "far",
    topic: "leases",
    definition:
      "Variable lease payments are lease payments that change because of facts or circumstances after commencement. Those that depend on an index or rate are included in the lease liability; those based on performance or usage are expensed as incurred.",
    takeaways: [
      "Index- or rate-based payments are measured using the index or rate at commencement; later changes are recognized as they occur.",
      "Payments based on sales or usage, such as a percentage of a store's revenue, are left out of the liability.",
      "Fixed payments in substance are treated as fixed, even if labeled variable.",
    ],
    related: ["right-of-use-asset", "operating-lease"],
    match: ["variable lease", "variable payment", "index"],
  },
  {
    slug: "bond-discount-and-premium",
    term: "Bond discount and premium",
    section: "far",
    topic: "long-term-debt",
    definition:
      "A bond is issued at a discount when its stated rate is below the market rate, and at a premium when its stated rate is above it. The discount or premium is amortized over the bond's life so its carrying amount reaches face value at maturity.",
    takeaways: [
      "A discount increases interest expense above the cash paid; a premium reduces it.",
      "The issue price is the present value of the principal and interest at the market rate.",
      "Under the effective interest method, interest expense = carrying amount × market rate.",
    ],
    related: ["effective-interest-method", "debt-issuance-costs"],
    match: ["discount", "premium", "issue price"],
  },
  {
    slug: "bonds-with-detachable-warrants",
    term: "Bonds with detachable warrants",
    section: "far",
    topic: "long-term-debt",
    definition:
      "When bonds are issued with detachable stock warrants that can be traded separately, the proceeds are allocated between the bonds and the warrants, usually by their relative fair values. The warrants' share goes to equity (additional paid-in capital).",
    takeaways: [
      "The amount allocated to the warrants usually creates a discount on the bonds, amortized into interest expense.",
      "If only one fair value is known, that item gets its fair value and the other gets the rest.",
      "Nondetachable warrants are not accounted for separately.",
    ],
    related: ["bond-discount-and-premium", "convertible-bonds"],
    match: ["warrant"],
  },
  {
    slug: "stock-split",
    term: "Stock split",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "A stock split increases the number of shares outstanding and reduces the par value per share proportionately, without changing total equity or any equity account balance.",
    takeaways: [
      "No journal entry is needed, other than a memorandum note of the new share count and par value.",
      "Large stock dividends, by contrast, move par value from retained earnings to common stock.",
      "Earnings per share for all periods presented are restated for the split.",
    ],
    related: ["stock-dividend", "basic-eps"],
    match: ["stock split"],
  },
  {
    slug: "treasury-stock-method",
    term: "Treasury stock method",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "The treasury stock method measures the dilution from options and warrants for diluted earnings per share: it assumes they are exercised and the proceeds are used to buy back shares at the average market price for the period.",
    takeaways: [
      "Incremental shares = shares issued on exercise − shares bought back with the proceeds.",
      "Options whose exercise price exceeds the average market price are antidilutive and left out.",
      "Convertible securities use the if-converted method instead.",
    ],
    example: "10,000 options at $20 with an average price of $25: proceeds of $200,000 buy back 8,000 shares, so 2,000 incremental shares.",
    related: ["diluted-eps", "if-converted-method"],
    match: ["treasury stock method", "options", "warrants"],
  },
  {
    slug: "if-converted-method",
    term: "If-converted method",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "The if-converted method measures the dilution from convertible securities for diluted earnings per share by assuming conversion at the start of the period (or at issuance, if later).",
    takeaways: [
      "For convertible bonds, add back the after-tax interest to the numerator and add the conversion shares to the denominator.",
      "For convertible preferred stock, add back the preferred dividends deducted for basic earnings per share.",
      "Include the security only if it reduces earnings per share.",
    ],
    related: ["diluted-eps", "treasury-stock-method", "convertible-bonds"],
    match: ["if-converted", "convertible"],
  },
  {
    slug: "uncertain-tax-positions",
    term: "Uncertain tax positions",
    section: "far",
    topic: "income-taxes",
    definition:
      "For an uncertain tax position, a company recognizes the tax benefit only if it is more likely than not (over 50%) to be sustained on examination on its technical merits, and measures it at the largest amount that is more than 50% likely to be realized on settlement.",
    takeaways: [
      "The difference between the benefit claimed on the return and the benefit recognized is a liability for unrecognized tax benefits.",
      "It assumes the tax authority will examine the position with full knowledge of the facts.",
      "Companies choose an accounting policy for classifying related interest and penalties.",
    ],
    related: ["deferred-tax-asset", "valuation-allowance"],
    match: ["uncertain tax", "more likely than not", "unrecognized tax benefit"],
  },
  {
    slug: "intraperiod-tax-allocation",
    term: "Intraperiod tax allocation",
    section: "far",
    topic: "income-taxes",
    definition:
      "Intraperiod tax allocation divides a period's total income tax expense among continuing operations, discontinued operations, other comprehensive income and items charged directly to equity, so each is shown net of its own tax effect.",
    takeaways: [
      "Continuing operations get the tax on their own pretax income; the rest is allocated to the other items.",
      "Discontinued operations are reported net of tax below income from continuing operations.",
      "Interperiod allocation (deferred taxes) is a different concept, spreading tax across periods.",
    ],
    related: ["discontinued-operation", "other-comprehensive-income"],
    match: ["intraperiod", "net of tax"],
  },
  {
    slug: "fiduciary-funds",
    term: "Fiduciary funds",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "Fiduciary funds account for resources a government holds for others, such as employee pension plans or taxes collected for another government. They include pension (and other employee benefit) trust funds, investment trust funds, private-purpose trust funds and custodial funds.",
    takeaways: [
      "They use the economic resources focus and full accrual basis.",
      "They are excluded from the government-wide financial statements because the resources can't be used for the government's own programs.",
      "They present a statement of fiduciary net position and a statement of changes in fiduciary net position.",
    ],
    related: ["general-fund", "proprietary-funds"],
    match: ["fiduciary", "custodial", "trust fund"],
  },
  {
    slug: "statement-of-functional-expenses",
    term: "Analysis of expenses by function and nature",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "Not-for-profits must present an analysis of expenses showing both their function (program services, management and general, fundraising) and their nature (such as salaries, rent and depreciation), in one place.",
    takeaways: [
      "It can be presented on the face of the statement of activities, as a separate statement, or in the notes.",
      "Program services are reported separately from supporting services.",
      "Investment expenses are netted against investment return instead.",
    ],
    related: ["net-assets-with-donor-restrictions", "contributed-services"],
    match: ["functional expense", "program services", "management and general", "fundraising"],
  },
  {
    slug: "form-10-k",
    term: "Form 10-K",
    section: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    definition:
      "Form 10-K is the annual report a public company files with the Securities and Exchange Commission. It includes audited financial statements, management's discussion and analysis, risk factors and other required disclosures.",
    takeaways: [
      "It is due 60 days after year-end for large accelerated filers, 75 days for accelerated filers and 90 days for all others.",
      "Quarterly reports are filed on Form 10-Q, and significant events on Form 8-K.",
      "Accelerated and large accelerated filers include the auditor's report on internal control over financial reporting.",
    ],
    related: ["reportable-segment", "interim-reporting"],
    match: ["10-K", "10-Q", "8-K", "filer"],
  },
];

export const audTermsE: GlossaryTerm[] = [
  {
    slug: "engagement-team-discussion",
    term: "Engagement team discussion",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "The engagement team discussion is a required meeting of key audit team members during planning to discuss how and where the entity's financial statements might be susceptible to material misstatement, including from fraud.",
    takeaways: [
      "It includes how management could commit and conceal fraudulent financial reporting and how assets could be misappropriated.",
      "Team members set aside any belief that management is honest.",
      "The engagement partner decides which matters are communicated to team members not present.",
    ],
    related: ["fraud-triangle", "professional-skepticism"],
    match: ["brainstorm", "team discussion"],
  },
  {
    slug: "tolerable-misstatement",
    term: "Tolerable misstatement",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Tolerable misstatement is the amount of misstatement in a population that the auditor will accept while still concluding the population is fairly stated. It is set at or below performance materiality.",
    takeaways: [
      "The lower the tolerable misstatement, the larger the sample needed.",
      "Projected misstatement plus an allowance for sampling risk is compared with it.",
      "In tests of controls, the equivalent idea is the tolerable rate of deviation.",
    ],
    related: ["performance-materiality", "monetary-unit-sampling"],
    match: ["tolerable misstatement"],
  },
  {
    slug: "nonsampling-risk",
    term: "Nonsampling risk",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Nonsampling risk is the risk that the auditor reaches a wrong conclusion for reasons unrelated to sampling, such as using an inappropriate procedure or misinterpreting evidence.",
    takeaways: [
      "It exists even when the whole population is tested.",
      "Planning, supervision, review and quality management reduce it.",
      "Increasing the sample size doesn't reduce it.",
    ],
    related: ["sampling-risk"],
    match: ["nonsampling"],
  },
  {
    slug: "inventory-observation",
    term: "Inventory observation",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "When inventory is material, the auditor attends the physical inventory count, unless that is impracticable, to evaluate management's counting instructions and procedures, observe the count and make test counts.",
    takeaways: [
      "Test counts go both ways: from the count records to the floor (existence) and from the floor to the records (completeness).",
      "The auditor records cutoff information and notes obsolete or damaged goods.",
      "If attending is impracticable, the auditor must perform alternative procedures or modify the opinion.",
    ],
    related: ["cutoff", "vouching-and-tracing"],
    match: ["inventory count", "observ", "test count"],
  },
  {
    slug: "lawyers-letter",
    term: "Letter of inquiry to legal counsel",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "A letter of inquiry to legal counsel (a 'lawyer's letter') is sent by management, at the auditor's request, asking the entity's lawyers to confirm information about litigation, claims and assessments directly to the auditor.",
    takeaways: [
      "It is the auditor's main corroborating evidence for management's assessment of legal contingencies.",
      "A lawyer's refusal to respond is a scope limitation that may lead to a qualified opinion or a disclaimer.",
      "It isn't required in a review engagement.",
    ],
    related: ["loss-contingency", "external-confirmation"],
    match: ["legal counsel", "lawyer", "litigation"],
  },
  {
    slug: "search-for-unrecorded-liabilities",
    term: "Search for unrecorded liabilities",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "The search for unrecorded liabilities is a set of procedures that test the completeness of liabilities, chiefly by examining cash payments and unpaid invoices after year-end to find obligations that existed at the balance sheet date.",
    takeaways: [
      "It traces from source documents to the records, so it tests completeness, the main risk for liabilities.",
      "Receiving reports dated before year-end are matched to recorded payables.",
      "Confirmations with suppliers who show a zero balance can also find unrecorded amounts.",
    ],
    related: ["vouching-and-tracing", "assertions"],
    match: ["unrecorded liabilit"],
  },
  {
    slug: "significant-deficiency",
    term: "Significant deficiency",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "A significant deficiency is a deficiency, or combination of deficiencies, in internal control that is less severe than a material weakness yet important enough to merit the attention of those charged with governance.",
    takeaways: [
      "Significant deficiencies and material weaknesses identified in an audit must be communicated in writing to management and those charged with governance.",
      "The written communication is usually made by the report release date and no later than 60 days after it.",
      "Severity depends on how likely and how large a misstatement could be, not on whether one occurred.",
    ],
    related: ["material-weakness", "those-charged-with-governance"],
    match: ["significant deficienc"],
  },
  {
    slug: "compliance-audit",
    term: "Compliance audit",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "A compliance audit is an engagement to report on an entity's compliance with the requirements of laws, regulations, grants or contracts, typically government programs, often performed together with a financial statement audit.",
    takeaways: [
      "The auditor expresses an opinion on compliance with the applicable requirements for each program tested.",
      "Single audits include compliance audits of major federal programs.",
      "Materiality is assessed for each program, not for the financial statements as a whole.",
    ],
    related: ["single-audit", "government-auditing-standards"],
    match: ["compliance audit", "compliance requirement"],
  },
  {
    slug: "special-purpose-framework",
    term: "Special purpose framework",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A special purpose framework is a basis of accounting other than generally accepted accounting principles, such as the cash basis, the tax basis, a regulatory basis or a contractual basis.",
    takeaways: [
      "The auditor's report includes an emphasis-of-matter paragraph alerting readers to the basis of accounting.",
      "Reports on regulatory or contractual bases may be restricted to specified users.",
      "The financial statements must adequately describe the framework and how it differs from generally accepted accounting principles.",
    ],
    related: ["emphasis-of-matter-paragraph"],
    match: ["special purpose", "tax basis", "cash basis"],
  },
  {
    slug: "required-supplementary-information",
    term: "Required supplementary information",
    section: "aud",
    topic: "audit-reports",
    definition:
      "Required supplementary information is information a standard-setter requires to accompany the basic financial statements, such as management's discussion and analysis for governments, but that isn't part of them.",
    takeaways: [
      "The auditor applies limited procedures, mainly inquiry and comparison with the financial statements, and expresses no opinion on it.",
      "The auditor's report includes an other-matter paragraph about it.",
      "If it is omitted or not presented as required, the report says so, but the opinion isn't modified.",
    ],
    related: ["other-matter-paragraph", "other-information"],
    match: ["supplementary information"],
  },
  {
    slug: "comfort-letter",
    term: "Comfort letter",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "A comfort letter is a letter from an entity's auditor to the underwriters of a securities offering, covering matters such as the auditor's independence and procedures performed on financial information in the registration statement.",
    takeaways: [
      "It can give negative assurance on unaudited interim financial information the auditor has reviewed.",
      "It helps underwriters show they performed a reasonable investigation.",
      "It is addressed to the underwriters and the entity, not to the public.",
    ],
    related: ["review-engagement"],
    match: ["comfort letter", "underwriter"],
  },
  {
    slug: "audit-committee",
    term: "Audit committee",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "The audit committee is a committee of the board of directors that oversees financial reporting, internal control and the external audit. In public companies it must consist of independent directors and is directly responsible for appointing and overseeing the auditor.",
    takeaways: [
      "It is often the body the auditor communicates with as 'those charged with governance'.",
      "Public companies must disclose whether at least one member is a financial expert.",
      "It pre-approves the services the auditor provides to a public company.",
    ],
    related: ["those-charged-with-governance", "pcaob"],
    match: ["audit committee"],
  },
  {
    slug: "qc-1000",
    term: "QC 1000 (quality control standard)",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "The Public Company Accounting Oversight Board (PCAOB) quality control (QC) standard QC 1000, A Firm's System of Quality Control, sets requirements for registered firms' quality control systems. It takes effect on December 15, 2026, and is testable on the exam from January 1, 2027.",
    takeaways: [
      "It uses the same eight components as the American Institute of Certified Public Accountants' Statement on Quality Management Standards (SQMS) No. 1.",
      "Firms evaluate their system as of September 30 each year and report on Form QC by November 30.",
      "Firms with more than 100 issuer audit clients need an external quality control function.",
    ],
    related: ["system-of-quality-management", "pcaob", "engagement-quality-review"],
    match: ["QC 1000", "quality control"],
  },
  {
    slug: "system-of-quality-management",
    term: "System of quality management (SQMS No. 1)",
    section: "aud",
    topic: "engagement-acceptance-and-quality-management",
    definition:
      "Under the American Institute of Certified Public Accountants' Statement on Quality Management Standards (SQMS) No. 1, a firm designs a risk-based system of quality management: it sets quality objectives, identifies and assesses quality risks, and designs responses to them.",
    takeaways: [
      "It has eight components, from the firm's risk assessment process and governance to monitoring and remediation.",
      "Firms had to have their systems designed and implemented by December 15, 2025.",
      "Leadership evaluates the system at least annually.",
    ],
    related: ["qc-1000", "engagement-quality-review"],
    match: ["SQMS", "quality management"],
  },
  {
    slug: "information-produced-by-the-entity",
    term: "Information produced by the entity",
    section: "aud",
    topic: "it-controls-in-audit",
    definition:
      "Information produced by the entity is data and reports the client generates, such as system reports or schedules, that the auditor uses as audit evidence. The auditor must evaluate whether it is reliable enough for the purpose.",
    takeaways: [
      "That means obtaining evidence about its accuracy and completeness, for example by testing the report's logic or the controls over it.",
      "Reports from systems with effective general controls are more reliable.",
      "It applies equally to analyses prepared with spreadsheets or other technology.",
    ],
    related: ["sufficient-appropriate-audit-evidence", "it-general-controls"],
    match: ["produced by the entity", "system report", "exception report"],
  },
];
