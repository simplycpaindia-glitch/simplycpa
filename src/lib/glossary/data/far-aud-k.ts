import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, eleventh batch. */
export const farTermsK: GlossaryTerm[] = [
  {
    slug: "lower-of-cost-or-market",
    term: "Lower of cost or market",
    section: "far",
    topic: "inventory",
    definition:
      "Inventory measured using last-in, first-out (LIFO) or the retail inventory method is reported at the lower of cost or market. Market is replacement cost, but no higher than net realizable value (the ceiling) and no lower than net realizable value minus a normal profit margin (the floor).",
    takeaways: [
      "All other inventory methods use the simpler lower of cost and net realizable value.",
      "Market is the middle value of replacement cost, the ceiling and the floor.",
      "Write-downs aren't reversed if prices later recover within the year-end measurement.",
    ],
    example: "Cost $50, replacement cost $42, net realizable value $48, normal profit $8 (floor $40): market is $42, so inventory is written down to $42.",
    related: ["lower-of-cost-and-net-realizable-value", "lifo", "retail-inventory-method"],
    match: ["lower of cost or market", "replacement cost", "ceiling", "floor"],
  },
  {
    slug: "group-and-composite-depreciation",
    term: "Group and composite depreciation",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "Group depreciation depreciates a pool of similar assets, and composite depreciation a pool of dissimilar assets, as a single unit using one average rate instead of depreciating each asset separately.",
    takeaways: [
      "When an asset in the pool is retired, no gain or loss is recognized.",
      "Its cost is removed from the asset account, and the cost less any proceeds is charged to accumulated depreciation.",
      "The approach suits large numbers of low-cost assets.",
    ],
    related: ["double-declining-balance", "sum-of-the-years-digits"],
    match: ["group depreciation", "composite"],
  },
  {
    slug: "self-constructed-assets",
    term: "Self-constructed assets",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "An asset a company builds for its own use is recorded at the cost of materials, labor and overhead, plus interest capitalized during construction.",
    takeaways: [
      "Overhead may be only the incremental amount or a full share of fixed overhead, applied consistently.",
      "If total cost exceeds the asset's fair value, the excess is expensed.",
      "No profit is recognized for building it more cheaply than buying it.",
    ],
    related: ["capitalized-interest", "subsequent-expenditures"],
    match: ["self-constructed", "construct", "own use"],
  },
  {
    slug: "donated-assets",
    term: "Donated assets (business entities)",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "A business that receives an asset as a gift from a non-owner, such as land from a city to attract a plant, records the asset at fair value and recognizes a gain or revenue.",
    takeaways: [
      "Assets contributed by shareholders are credited to paid-in capital instead.",
      "Donated assets are depreciated over their useful lives like purchased assets.",
      "A business that gives an asset away recognizes an expense at fair value and a gain or loss on the asset.",
    ],
    related: ["nonmonetary-exchange", "contributed-nonfinancial-assets"],
    match: ["donated", "donation", "contributed"],
  },
  {
    slug: "in-process-research-and-development",
    term: "In-process research and development",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "In-process research and development acquired in a business combination is recognized at fair value as an indefinite-lived intangible asset until the project is completed, when amortization begins, or abandoned, when it is written off.",
    takeaways: [
      "In an asset acquisition, it is expensed unless it has an alternative future use.",
      "Research and development the company does itself after the acquisition is expensed.",
      "It is tested for impairment at least annually while indefinite-lived.",
    ],
    related: ["research-and-development-costs", "acquisition-method", "asset-acquisition"],
    match: ["in-process research", "IPR&D"],
  },
  {
    slug: "equity-method-basis-difference",
    term: "Equity method basis difference",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "When an investor pays more for an equity-method investment than its share of the investee's book value, the excess is allocated to undervalued identifiable assets, with the rest treated as goodwill.",
    takeaways: [
      "Excess allocated to depreciable assets is amortized, reducing the investor's share of investee income.",
      "Goodwill within the investment isn't amortized or separately tested for impairment.",
      "The whole investment is tested for other-than-temporary impairment.",
    ],
    example: "Paying $500,000 for 30% of net assets with a book value of $1,400,000 ($420,000 share), with equipment undervalued by $100,000: $30,000 goes to equipment and $50,000 to goodwill.",
    related: ["equity-method", "significant-influence", "goodwill"],
    match: ["basis difference", "excess of cost", "equity method"],
  },
  {
    slug: "troubled-debt-restructuring",
    term: "Troubled debt restructuring (debtor)",
    section: "far",
    topic: "long-term-debt",
    definition:
      "A troubled debt restructuring occurs when a creditor grants a concession to a debtor in financial difficulty. If the debt is settled with assets or equity, the debtor recognizes a gain equal to the debt's carrying amount minus the fair value given.",
    takeaways: [
      "If terms are modified and total future cash payments are less than the carrying amount, the debtor reduces the debt to that total and recognizes a gain; no interest expense is recognized afterward.",
      "If future payments exceed the carrying amount, no gain is recognized and a new, lower interest rate applies.",
      "Creditors no longer use special troubled debt accounting; they follow the expected credit loss model.",
    ],
    related: ["extinguishment-of-debt", "debt-modification", "cecl"],
    match: ["troubled debt", "concession", "restructur"],
  },
  {
    slug: "debt-modification",
    term: "Debt modification or extinguishment",
    section: "far",
    topic: "long-term-debt",
    definition:
      "When a borrower and the same lender modify or exchange debt, it is treated as an extinguishment if the present value of the new cash flows differs by at least 10% from that of the remaining old cash flows. Otherwise it is a modification.",
    takeaways: [
      "In an extinguishment, the old debt is derecognized and a gain or loss recognized; the new debt is recorded at fair value.",
      "In a modification, no gain or loss is recognized, and a new effective interest rate is applied going forward.",
      "Fees paid to the lender are part of the gain or loss in an extinguishment and amortized in a modification.",
    ],
    related: ["extinguishment-of-debt", "troubled-debt-restructuring", "effective-interest-method"],
    match: ["modification", "10%", "substantially different"],
  },
  {
    slug: "dividends-in-arrears",
    term: "Dividends in arrears",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Dividends in arrears are undeclared dividends on cumulative preferred stock from past periods. They aren't a liability until declared, but they are disclosed and must be paid before any common dividend.",
    takeaways: [
      "For basic earnings per share, the current year's cumulative preferred dividend is deducted whether or not declared.",
      "Arrears from earlier years aren't deducted again when later paid.",
      "Noncumulative preferred dividends that are skipped are lost.",
    ],
    related: ["cumulative-preferred-stock", "basic-eps"],
    match: ["in arrears", "arrearage"],
  },
  {
    slug: "contingently-issuable-shares",
    term: "Contingently issuable shares",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Contingently issuable shares are shares to be issued for little or no cash if conditions are met, such as reaching an earnings target. They are included in basic earnings per share only once the conditions are satisfied.",
    takeaways: [
      "For diluted earnings per share, they are included if the conditions would be met if the end of the period were the end of the contingency period.",
      "Shares issuable only after time passes are treated as outstanding.",
      "Earnouts in business combinations often create them.",
    ],
    related: ["diluted-eps", "basic-eps", "contingent-consideration"],
    match: ["contingently issuable", "contingent shares"],
  },
  {
    slug: "estimated-annual-effective-tax-rate",
    term: "Estimated annual effective tax rate",
    section: "far",
    topic: "income-taxes",
    definition:
      "Interim income tax expense is figured by applying the estimated annual effective tax rate to year-to-date ordinary pretax income, then subtracting the tax already recognized in earlier interim periods.",
    takeaways: [
      "The estimate is updated each quarter, with the effect of changes recognized in the current quarter.",
      "Unusual or infrequent items and discontinued operations are taxed separately in the period they occur.",
      "The effect of a new tax law is recognized in the interim period that includes the enactment date.",
    ],
    example: "Pretax income of $600,000 for the first six months at an estimated 24% rate, with $70,000 recognized in the first quarter: second-quarter tax expense is $144,000 − $70,000 = $74,000.",
    related: ["interim-reporting", "enacted-tax-rate"],
    match: ["effective tax rate", "interim", "year-to-date"],
  },
  {
    slug: "split-interest-agreements",
    term: "Split-interest agreements",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "In a split-interest agreement, a donor gives assets to a not-for-profit, or a trust, and the benefits are shared between the not-for-profit and other beneficiaries. Examples are charitable remainder trusts, charitable lead trusts and gift annuities.",
    takeaways: [
      "The not-for-profit recognizes contribution revenue for its interest: the fair value of the assets less the present value of the amounts owed to others.",
      "The revenue usually has donor restrictions, at least as to time.",
      "The liability to other beneficiaries is remeasured as estimates change.",
    ],
    related: ["charitable-remainder-trust", "charitable-lead-trust", "net-assets-with-donor-restrictions"],
    match: ["split-interest", "remainder trust", "gift annuit"],
  },
  {
    slug: "governmental-lease-accounting",
    term: "Lease accounting for governments",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "Governments use a single lease model: a lessee recognizes a lease liability and an intangible right-to-use asset, and a lessor recognizes a lease receivable and a deferred inflow of resources while keeping the asset.",
    takeaways: [
      "There is no separate operating lease category for governments.",
      "Leases with a maximum possible term of 12 months or less are exempt.",
      "In governmental funds, the lessee reports an expenditure and an other financing source when the lease begins.",
    ],
    related: ["deferred-inflows-of-resources", "right-of-use-asset", "modified-accrual-basis"],
    match: ["lease", "right-to-use"],
  },
  {
    slug: "management-discussion-and-analysis",
    term: "Management's discussion and analysis (governments)",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "Management's discussion and analysis is required supplementary information placed before a government's basic financial statements. It gives an objective, easy-to-read analysis of the government's financial activities and condition.",
    takeaways: [
      "It covers changes in financial position, budget variances, capital assets and long-term debt, and known facts expected to affect the future.",
      "It compares current-year results with the prior year.",
      "Auditors apply limited procedures to it and give no opinion.",
    ],
    related: ["required-supplementary-information", "annual-comprehensive-financial-report"],
    match: ["discussion and analysis", "MD&A"],
  },
  {
    slug: "filer-status",
    term: "SEC filer status",
    section: "far",
    topic: "sec-reporting-segments-and-interim-reporting",
    definition:
      "Securities and Exchange Commission (SEC) filers are classified by public float, the market value of shares held by non-affiliates: large accelerated filers ($700 million or more), accelerated filers ($75 million to $700 million) and non-accelerated filers.",
    takeaways: [
      "Annual reports are due 60, 75 or 90 days after year-end; quarterly reports 40 days for accelerated filers and 45 days for others.",
      "Accelerated and large accelerated filers need an auditor's report on internal control.",
      "Smaller reporting companies with annual revenue under $100 million aren't accelerated filers.",
    ],
    related: ["form-10-k", "interim-reporting"],
    match: ["accelerated filer", "public float", "smaller reporting"],
  },
];

export const audTermsK: GlossaryTerm[] = [
  {
    slug: "service-auditor",
    term: "Service auditor",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "A service auditor reports on the controls at a service organization, such as a payroll processor, for use by its customers' auditors. The report covers management's description of its system and its written assertion.",
    takeaways: [
      "A Type 1 report covers design at a point in time; a Type 2 report adds operating effectiveness over a period.",
      "User auditors decide how much they can rely on the report.",
      "The report is addressed to the service organization.",
    ],
    related: ["user-auditor", "soc-1-report", "management-assertion-soc"],
    match: ["service auditor", "service organization"],
  },
  {
    slug: "communicating-fraud",
    term: "Communicating fraud",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "When an auditor finds evidence that fraud may exist, it is brought to the attention of an appropriate level of management, at least one level above those involved. Fraud involving senior management, or causing a material misstatement, is reported to those charged with governance.",
    takeaways: [
      "Even inconsequential fraud should be brought to management's attention.",
      "Reporting outside the entity is generally barred by confidentiality, except to comply with law, respond to a successor auditor or a subpoena, or meet government audit requirements.",
      "The auditor considers whether to withdraw from the engagement.",
    ],
    related: ["those-charged-with-governance", "misappropriation-of-assets", "confidential-client-information"],
    match: ["communicat", "fraud"],
  },
  {
    slug: "making-reference",
    term: "Making reference to a component auditor",
    section: "aud",
    topic: "audit-reports",
    definition:
      "A group auditor may refer in its report to the audit of a component performed by another auditor, indicating a division of responsibility for the group's financial statements.",
    takeaways: [
      "The component auditor's report must not be restricted, and the component's statements must use the same framework or be adjusted.",
      "The component auditor isn't named without permission and publication of its report.",
      "Making reference isn't a modification of the opinion.",
    ],
    related: ["component-auditor", "group-audit"],
    match: ["reference", "division of responsibility", "other auditor"],
  },
  {
    slug: "audit-of-specific-element",
    term: "Audit of a single statement or specific element",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An auditor can be engaged to audit a single financial statement, such as a balance sheet, or a specific element, account or item, such as a schedule of royalties, and report on it.",
    takeaways: [
      "Materiality is set for the element itself, which usually means more detailed work.",
      "Interrelated accounts may need to be audited too.",
      "If an adverse opinion or disclaimer is given on the full statements, a report on an element of them is restricted.",
    ],
    related: ["special-purpose-framework", "materiality"],
    match: ["specific element", "single financial statement"],
  },
  {
    slug: "summary-financial-statements",
    term: "Summary financial statements",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An auditor engaged to audit an entity's full financial statements can also report on summary financial statements derived from them, giving an opinion on whether they are consistent in all material respects with the audited statements.",
    takeaways: [
      "The report is dated no earlier than the report on the full statements.",
      "It identifies the audited statements and states that the summary doesn't contain all required disclosures.",
      "A modified opinion on the full statements is described in the summary report.",
    ],
    related: ["audit-of-specific-element", "other-matter-paragraph"],
    match: ["summary financial", "summarized"],
  },
  {
    slug: "audit-report-date",
    term: "Audit report date",
    section: "aud",
    topic: "audit-reports",
    definition:
      "The auditor's report is dated no earlier than the date the auditor has obtained sufficient appropriate evidence, including evidence that the full statements and disclosures have been prepared and that management has taken responsibility for them.",
    takeaways: [
      "The management representation letter is dated as of the report date.",
      "The auditor's subsequent events procedures run up to the report date.",
      "Facts found later may lead to dual dating.",
    ],
    related: ["dual-dating", "management-representation-letter", "subsequent-events-review"],
    match: ["report date", "dated"],
  },
  {
    slug: "direct-and-indirect-financial-interests",
    term: "Direct and indirect financial interests",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Any direct financial interest in an attest client, such as owning its shares, held by a covered member impairs independence, however small. An indirect interest, such as through a mutual fund, impairs independence only if material.",
    takeaways: [
      "Interests held through an investment vehicle the member controls are treated as direct.",
      "Interests of a covered member's immediate family are treated as the member's own.",
      "Some close relatives' material interests can also impair independence.",
    ],
    related: ["covered-member", "independence"],
    match: ["financial interest", "direct", "indirect"],
  },
  {
    slug: "loans-with-attest-clients",
    term: "Loans with attest clients",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "A loan between a covered member and an attest client generally impairs independence, but certain loans from client financial institutions are allowed if made under normal lending terms.",
    takeaways: [
      "Allowed loans include car loans, loans fully secured by cash deposits, and credit cards and overdrafts with total balances of $10,000 or less.",
      "Some home mortgages obtained before the member became a covered member are grandfathered.",
      "Loans to or from the client's officers or major owners are also restricted.",
    ],
    related: ["covered-member", "independence", "direct-and-indirect-financial-interests"],
    match: ["loan"],
  },
  {
    slug: "it-dependent-manual-controls",
    term: "IT-dependent manual controls",
    section: "aud",
    topic: "it-controls-in-audit",
    definition:
      "An information technology (IT) dependent manual control is a control performed by a person that relies on system-generated information, such as a manager reviewing an exception report.",
    takeaways: [
      "The auditor tests both the manual review and the completeness and accuracy of the report used.",
      "The report's reliability depends on IT general controls and the report's logic.",
      "A review based on an incomplete report gives little assurance.",
    ],
    related: ["information-produced-by-the-entity", "it-general-controls", "application-controls"],
    match: ["dependent manual", "exception report", "system-generated"],
  },
  {
    slug: "projected-misstatement",
    term: "Projected misstatement",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "In substantive sampling, misstatements found in the sample are projected to the whole population. The projected misstatement, plus an allowance for sampling risk, is compared with tolerable misstatement.",
    takeaways: [
      "Projection methods include the ratio method and the difference method.",
      "In monetary unit sampling, each error's tainting percentage is applied to its sampling interval.",
      "If the result exceeds tolerable misstatement, the auditor extends testing or asks management to investigate and adjust.",
    ],
    related: ["tolerable-misstatement", "allowance-for-sampling-risk", "monetary-unit-sampling"],
    match: ["projected", "tainting", "projection"],
  },
  {
    slug: "required-communications-with-governance",
    term: "Required communications with those charged with governance",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "The auditor must communicate certain matters to those charged with governance, including the auditor's responsibilities, the planned scope and timing of the audit, and significant findings from the audit.",
    takeaways: [
      "Significant findings include views on accounting practices, significant difficulties, disagreements with management and uncorrected misstatements.",
      "Significant findings are communicated in writing if oral communication wouldn't be adequate.",
      "For public companies, communications include the auditor's independence.",
    ],
    related: ["those-charged-with-governance", "audit-committee", "summary-of-uncorrected-misstatements"],
    match: ["communication", "governance", "significant findings"],
  },
  {
    slug: "performance-audit",
    term: "Performance audit",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "A performance audit under Government Auditing Standards gives findings and conclusions on a government program's effectiveness, economy and efficiency, internal control or compliance, based on evaluating evidence against criteria.",
    takeaways: [
      "It isn't a financial statement audit and doesn't give an opinion on financial statements.",
      "It is planned to give reasonable assurance that findings are supported.",
      "Reports include findings, conclusions and recommendations, with the views of responsible officials.",
    ],
    related: ["government-auditing-standards", "compliance-audit", "single-audit"],
    match: ["performance audit", "effectiveness", "efficiency"],
  },
  {
    slug: "reasonableness-test",
    term: "Reasonableness test",
    section: "aud",
    topic: "analytical-procedures",
    definition:
      "A reasonableness test is a substantive analytical procedure that builds an expectation for an account from operating or financial data, such as rental units × occupancy × average rent for rental income.",
    takeaways: [
      "It is often more precise than comparing balances with last year.",
      "The data used must be reliable and, ideally, independent of the account tested.",
      "Differences above the threshold are investigated and corroborated.",
    ],
    related: ["substantive-analytical-procedures", "analytical-procedures"],
    match: ["reasonableness", "expectation"],
  },
];
