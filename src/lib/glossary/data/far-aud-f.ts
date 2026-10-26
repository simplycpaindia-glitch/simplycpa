import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, sixth batch. */
export const farTermsF: GlossaryTerm[] = [
  {
    slug: "retail-inventory-method",
    term: "Retail inventory method",
    section: "far",
    topic: "inventory",
    definition:
      "The retail inventory method estimates ending inventory at cost by converting ending inventory at retail prices to cost, using the ratio of cost to retail for the goods available for sale.",
    takeaways: [
      "The conventional (lower of cost or market) approach includes net markups but leaves out net markdowns from the ratio, giving a lower ratio.",
      "Freight-in is added to cost only; purchase returns reduce both cost and retail.",
      "Normal shrinkage is deducted from retail after the ratio is computed; abnormal losses reduce both cost and retail before it.",
    ],
    example: "Goods available cost $60,000 and retail $100,000 (ratio 60%). Sales are $70,000, so ending inventory is $30,000 at retail and $18,000 at cost.",
    related: ["gross-profit-method", "lower-of-cost-and-net-realizable-value"],
    match: ["retail method", "retail inventory", "cost-to-retail"],
  },
  {
    slug: "dollar-value-lifo",
    term: "Dollar-value LIFO",
    section: "far",
    topic: "inventory",
    definition:
      "Dollar-value last-in, first-out (LIFO) applies LIFO to pools of inventory measured in dollars instead of units, using a price index to separate real increases in quantity from price changes.",
    takeaways: [
      "Convert ending inventory to base-year prices with the index, then compare with the prior year to find any new layer.",
      "A new layer is valued at base-year cost × the current year's index.",
      "A decrease removes the most recent layers first.",
    ],
    example: "Ending inventory of $132,000 at current cost with an index of 1.10 is $120,000 at base-year prices. Against $100,000 last year, the $20,000 layer × 1.10 = $22,000, so inventory is $122,000.",
    related: ["lifo", "weighted-average-cost"],
    match: ["dollar-value", "price index", "LIFO"],
  },
  {
    slug: "subsequent-expenditures",
    term: "Costs after acquisition (additions, improvements and repairs)",
    section: "far",
    topic: "property-plant-and-equipment",
    definition:
      "Costs incurred on property, plant and equipment after it is acquired are capitalized if they extend its useful life, increase its capacity or efficiency, or improve the quality of its output. Ordinary repairs and maintenance are expensed.",
    takeaways: [
      "Additions, such as a new wing, are capitalized as new assets.",
      "When a component is replaced, the old component's carrying amount is removed and the cost of the new one capitalized.",
      "Rearrangement and relocation costs are capitalized only if they bring a material future benefit.",
    ],
    related: ["capitalized-interest", "impairment"],
    match: ["repairs", "improvement", "addition", "betterment"],
  },
  {
    slug: "software-development-costs",
    term: "Software development costs",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Costs of software to be sold are research and development expense until technological feasibility is reached, then capitalized until the product is available for release. For internal-use software, costs in the application development stage are capitalized.",
    takeaways: [
      "Capitalized costs of software to be sold are amortized at the greater of the revenue-ratio amount and the straight-line amount.",
      "Internal-use software: preliminary-project and post-implementation costs, including training, are expensed.",
      "A 2025 update replaces the internal-use stages with a probable-to-complete threshold, effective for years beginning after December 15, 2027.",
    ],
    related: ["research-and-development-costs", "finite-lived-intangible"],
    match: ["software", "technological feasibility", "internal-use"],
  },
  {
    slug: "acquisition-method",
    term: "Acquisition method",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "The acquisition method is how all business combinations are accounted for: identify the acquirer, set the acquisition date, measure the identifiable assets acquired, liabilities assumed and any noncontrolling interest at fair value, and recognize goodwill or a bargain purchase gain.",
    takeaways: [
      "Acquisition-related costs, such as legal and advisory fees, are expensed.",
      "Costs of issuing debt or equity reduce the proceeds of that debt or equity.",
      "Contingent consideration is measured at fair value on the acquisition date.",
    ],
    related: ["goodwill", "bargain-purchase", "noncontrolling-interest", "measurement-period"],
    match: ["acquisition method", "acquirer", "acquisition date"],
  },
  {
    slug: "measurement-period",
    term: "Measurement period",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "The measurement period is the time after a business combination, up to one year from the acquisition date, during which the acquirer adjusts provisional amounts for new information about facts that existed at the acquisition date.",
    takeaways: [
      "Adjustments are recognized in the period they are determined, usually with the offset to goodwill, not by restating prior periods.",
      "Changes from events after the acquisition date, such as meeting an earnout target, aren't measurement-period adjustments.",
      "Contingent consideration classified as a liability is remeasured through earnings.",
    ],
    related: ["acquisition-method", "goodwill"],
    match: ["measurement period", "provisional"],
  },
  {
    slug: "contract-modification",
    term: "Contract modification",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A contract modification is a change in the scope or price of a contract approved by the parties. How it is accounted for depends on whether it adds distinct goods or services and at what price.",
    takeaways: [
      "If it adds distinct goods at their standalone selling prices, it is a separate contract.",
      "If the remaining goods are distinct, treat it as ending the old contract and starting a new one (prospectively).",
      "If they aren't distinct, adjust revenue with a cumulative catch-up.",
    ],
    related: ["performance-obligation", "standalone-selling-price", "transaction-price"],
    match: ["modification", "change order"],
  },
  {
    slug: "material-right",
    term: "Material right",
    section: "far",
    topic: "revenue-recognition",
    definition:
      "A material right is an option, such as a discount on future purchases or loyalty points, that a customer receives only because it entered into the contract. It is a separate performance obligation.",
    takeaways: [
      "Part of the transaction price is allocated to the option, based on its estimated standalone selling price.",
      "That revenue is recognized when the option is exercised or expires.",
      "An option to buy at the normal standalone selling price isn't a material right.",
    ],
    related: ["performance-obligation", "standalone-selling-price", "contract-liability"],
    match: ["material right", "loyalty", "customer option"],
  },
  {
    slug: "change-in-reporting-entity",
    term: "Change in reporting entity",
    section: "far",
    topic: "accounting-changes-and-error-corrections",
    definition:
      "A change in reporting entity occurs when financial statements present a different entity than before, such as presenting consolidated statements in place of individual company statements or changing which subsidiaries are consolidated.",
    takeaways: [
      "It is applied retrospectively to all periods presented.",
      "A business combination accounted for under the acquisition method is not a change in reporting entity.",
      "The nature of and reason for the change are disclosed.",
    ],
    related: ["retrospective-application", "restatement"],
    match: ["reporting entity"],
  },
  {
    slug: "imputed-interest",
    term: "Imputed interest",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "When a note has no stated interest or an unreasonably low rate, it is recorded at its present value using a market rate (the imputed rate). The difference from face value is a discount amortized as interest over the note's life.",
    takeaways: [
      "If the note is exchanged for goods, the goods' fair value may set the note's value instead.",
      "It doesn't apply to receivables from normal trade terms of a year or less.",
      "The discount is amortized with the effective interest method.",
    ],
    example: "A $100,000 non-interest-bearing note due in 2 years, at 8%, is recorded at $85,734; $14,266 is interest income over the 2 years.",
    related: ["effective-interest-method", "bond-discount-and-premium"],
    match: ["imputed", "non-interest-bearing", "zero-interest"],
  },
  {
    slug: "gain-contingency",
    term: "Gain contingency",
    section: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    definition:
      "A gain contingency is a possible gain that depends on a future event, such as a pending lawsuit in which the company is the plaintiff. It isn't recognized until it is realized or realizable.",
    takeaways: [
      "It may be disclosed, but without misleading statements about how likely it is.",
      "Compare loss contingencies, which are accrued when probable and reasonably estimable.",
      "A gain from a settled lawsuit after the balance sheet date isn't recognized in the earlier period.",
    ],
    related: ["loss-contingency", "subsequent-events"],
    match: ["gain contingenc"],
  },
  {
    slug: "exit-or-disposal-costs",
    term: "Exit or disposal costs",
    section: "far",
    topic: "current-liabilities-contingencies-and-commitments",
    definition:
      "Costs of an exit or disposal activity, such as closing a plant, are recognized as a liability at fair value when they are incurred, not when management commits to the plan.",
    takeaways: [
      "One-time termination benefits are recognized when communicated to employees, or over the future service period if employees must work beyond the minimum retention period.",
      "Costs to end a contract early are recognized when the contract is terminated.",
      "Relocation and similar costs are recognized when incurred.",
    ],
    related: ["discontinued-operation", "loss-contingency"],
    match: ["exit", "disposal", "restructuring", "termination benefit"],
  },
  {
    slug: "endowment",
    term: "Endowment",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "An endowment is a fund of assets a not-for-profit invests to provide income over the long term. A donor-restricted endowment must be kept in perpetuity or for a stated term; a board-designated endowment is set aside by the board and has no donor restrictions.",
    takeaways: [
      "Donor-restricted endowment gifts are reported as net assets with donor restrictions.",
      "Investment returns on donor-restricted endowments stay with donor restrictions until appropriated for spending.",
      "Endowments whose value has fallen below the original gift (underwater endowments) must be disclosed.",
    ],
    related: ["net-assets-with-donor-restrictions", "conditional-promise-to-give"],
    match: ["endowment", "in perpetuity", "board-designated"],
  },
  {
    slug: "deferred-inflows-of-resources",
    term: "Deferred inflows of resources",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "Deferred inflows of resources are a government's acquisition of net position that applies to a future period, such as property taxes levied for next year. They are a separate element, reported after liabilities, not as liabilities.",
    takeaways: [
      "In governmental funds, revenue that isn't yet available is reported as a deferred inflow (unavailable revenue).",
      "Deferred outflows of resources are the mirror image, reported after assets.",
      "Some pension-related amounts are reported as deferred inflows or outflows.",
    ],
    related: ["modified-accrual-basis", "net-position", "general-fund"],
    match: ["deferred inflow", "deferred outflow", "unavailable revenue"],
  },
  {
    slug: "capital-projects-fund",
    term: "Capital projects fund",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "A capital projects fund is a governmental fund for resources restricted, committed or assigned to spending on capital outlays, such as building a new school, other than those financed through proprietary funds.",
    takeaways: [
      "Bond proceeds are reported as an other financing source, not as revenue or a liability.",
      "Construction costs are expenditures in the fund; the capital asset appears only in the government-wide statements.",
      "Encumbrances are often used to control spending on contracts.",
    ],
    related: ["general-fund", "modified-accrual-basis", "encumbrance"],
    match: ["capital projects", "capital outlay", "bond proceeds"],
  },
];

export const audTermsF: GlossaryTerm[] = [
  {
    slug: "control-risk",
    term: "Control risk",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "Control risk is the risk that a material misstatement in an assertion won't be prevented, or detected and corrected on time, by the entity's internal control.",
    takeaways: [
      "If the auditor doesn't plan to test controls, control risk is assessed at the maximum.",
      "A lower assessment must be supported by tests of controls and allows less substantive testing.",
      "Like inherent risk, it exists independently of the audit; the auditor assesses it but can't change it.",
    ],
    related: ["inherent-risk", "detection-risk", "risk-of-material-misstatement", "tests-of-controls"],
    match: ["control risk"],
  },
  {
    slug: "risk-of-material-misstatement",
    term: "Risk of material misstatement",
    section: "aud",
    topic: "assessing-risk-of-material-misstatement",
    definition:
      "The risk of material misstatement is the risk that the financial statements are materially misstated before the audit. At the assertion level it combines inherent risk and control risk.",
    takeaways: [
      "It is assessed at both the financial statement level and the assertion level.",
      "American Institute of Certified Public Accountants standards require inherent and control risk to be assessed separately.",
      "The higher the assessed risk, the lower the acceptable detection risk and the more persuasive the evidence needed.",
    ],
    related: ["audit-risk", "inherent-risk", "control-risk", "significant-risk"],
    match: ["risk of material misstatement", "RMM"],
  },
  {
    slug: "component-auditor",
    term: "Component auditor",
    section: "aud",
    topic: "group-audits-and-using-others-work",
    definition:
      "A component auditor performs audit work on the financial information of a component, such as a subsidiary or division, for a group audit. The group engagement partner remains responsible for the group audit opinion.",
    takeaways: [
      "The group auditor evaluates the component auditor's competence, capabilities and independence.",
      "Under American Institute of Certified Public Accountants standards, the group auditor may make reference to the component auditor's report, which divides responsibility.",
      "If reference isn't made, the group auditor must be involved in the component auditor's work.",
    ],
    related: ["group-audit", "predecessor-auditor"],
    match: ["component auditor", "component"],
  },
  {
    slug: "omitted-procedures",
    term: "Omitted procedures",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "Omitted procedures are audit procedures the auditor finds, after the report has been released, were considered necessary but weren't performed. The auditor assesses whether the omission impairs the ability to support the opinion.",
    takeaways: [
      "If it does, and people are relying on the report, the auditor promptly performs the procedure or alternatives.",
      "If the procedures then find a problem, the auditor follows the guidance for subsequently discovered facts.",
      "Omissions often come to light in a post-issuance review or peer review.",
    ],
    related: ["subsequently-discovered-facts", "audit-documentation"],
    match: ["omitted procedure"],
  },
  {
    slug: "summary-of-uncorrected-misstatements",
    term: "Summary of uncorrected misstatements",
    section: "aud",
    topic: "written-representations-and-completing-the-audit",
    definition:
      "The auditor accumulates misstatements found during the audit, other than clearly trivial ones, asks management to correct them, and evaluates whether those left uncorrected are material, alone or together.",
    takeaways: [
      "A summary of the uncorrected misstatements is included in or attached to the management representation letter.",
      "Uncorrected misstatements are communicated to those charged with governance.",
      "Prior-period uncorrected misstatements are considered when evaluating the current period.",
    ],
    related: ["management-representation-letter", "materiality", "those-charged-with-governance"],
    match: ["uncorrected misstatement", "passed adjustment", "clearly trivial"],
  },
  {
    slug: "opening-balances",
    term: "Opening balances",
    section: "aud",
    topic: "audit-planning-and-materiality",
    definition:
      "In an initial audit engagement, the auditor obtains sufficient appropriate evidence that the opening balances don't contain misstatements that materially affect the current period, and that accounting policies have been applied consistently.",
    takeaways: [
      "Procedures include reviewing the predecessor auditor's working papers and testing opening balances through current-period procedures.",
      "If the auditor can't get enough evidence, the opinion is qualified or disclaimed for the effect on results and cash flows.",
      "Communication with the predecessor auditor is required before accepting the engagement.",
    ],
    related: ["predecessor-auditor", "sufficient-appropriate-audit-evidence"],
    match: ["opening balance", "initial audit"],
  },
  {
    slug: "audit-data-analytics",
    term: "Audit data analytics",
    section: "aud",
    topic: "analytical-procedures",
    definition:
      "Audit data analytics is the analysis of patterns, anomalies and other information in the data behind an audit area, using modeling and visualization, to plan or perform the audit.",
    takeaways: [
      "They can examine 100% of a population, for example every journal entry or every sales transaction.",
      "Items flagged need follow-up; a large number of exceptions may point to a control deficiency or a problem with the test.",
      "The auditor must evaluate whether the underlying data is accurate and complete.",
    ],
    related: ["analytical-procedures", "information-produced-by-the-entity", "computer-assisted-audit-techniques"],
    match: ["data analytic", "anomal", "entire population"],
  },
  {
    slug: "substantive-analytical-procedures",
    term: "Substantive analytical procedures",
    section: "aud",
    topic: "analytical-procedures",
    definition:
      "Substantive analytical procedures are analytical procedures used as substantive evidence: the auditor develops an expectation precise enough to detect a material misstatement, compares it with the recorded amount, and investigates significant differences.",
    takeaways: [
      "They work best for large volumes of transactions that are predictable over time, such as payroll or interest.",
      "Their reliability depends on the data used to develop the expectation.",
      "For a significant risk addressed only by substantive procedures, tests of details must be included.",
    ],
    related: ["analytical-procedures", "substantive-procedures", "tests-of-details"],
    match: ["substantive analytical", "expectation", "threshold"],
  },
  {
    slug: "managements-specialist",
    term: "Management's specialist",
    section: "aud",
    topic: "auditing-accounting-estimates",
    definition:
      "A management's specialist is a person or firm with expertise in a field other than accounting or auditing, such as an actuary or appraiser, whose work the entity uses to prepare its financial statements.",
    takeaways: [
      "The auditor evaluates the specialist's competence, capabilities and objectivity.",
      "The auditor obtains an understanding of the work and evaluates the appropriateness of the specialist's assumptions, methods and data.",
      "An auditor's specialist, by contrast, is engaged by the auditor.",
    ],
    related: ["auditors-specialist", "auditing-accounting-estimates"],
    match: ["management's specialist", "actuar", "apprais", "specialist"],
  },
  {
    slug: "limited-assurance",
    term: "Limited assurance (negative assurance)",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "Limited assurance is the level of assurance in a review engagement: the accountant concludes that they are not aware of any material modifications needed for the financial statements to conform with the framework.",
    takeaways: [
      "It rests mainly on inquiry and analytical procedures, not tests of details.",
      "An audit gives reasonable assurance; a compilation gives no assurance.",
      "The conclusion is worded negatively, which is why it is also called negative assurance.",
    ],
    related: ["review-engagement", "compilation-engagement", "reasonable-assurance"],
    match: ["limited assurance", "negative assurance"],
  },
  {
    slug: "prospective-financial-information",
    term: "Prospective financial information",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "Prospective financial information is financial information about the future: forecasts, based on expected conditions, and projections, based on one or more hypothetical assumptions. Accountants can examine, compile or apply agreed-upon procedures to it.",
    takeaways: [
      "An examination report gives an opinion on whether the information is presented in line with the guidelines and whether the assumptions provide a reasonable basis.",
      "Projections are restricted to parties negotiating directly with the entity.",
      "The accountant never vouches for whether the results will be achieved.",
    ],
    related: ["financial-forecast-vs-projection", "examination-engagement", "agreed-upon-procedures"],
    match: ["prospective", "forecast", "projection"],
  },
  {
    slug: "threats-and-safeguards",
    term: "Threats and safeguards",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Under the conceptual framework in the American Institute of Certified Public Accountants' Code of Professional Conduct, members identify threats to compliance with the rules, evaluate their significance and apply safeguards to eliminate or reduce them to an acceptable level.",
    takeaways: [
      "The threats are adverse interest, advocacy, familiarity, management participation, self-interest, self-review and undue influence.",
      "Safeguards can come from the profession, the firm or the client.",
      "If no safeguards are enough, the member declines or ends the engagement.",
    ],
    related: ["independence", "nonattest-services"],
    match: ["threat", "safeguard", "conceptual framework"],
  },
  {
    slug: "contingent-fees",
    term: "Contingent fees",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "A contingent fee is a fee charged only if a specified finding or result is attained, or whose amount depends on the result. Members may not charge one to an attest client or for preparing an original or amended tax return.",
    takeaways: [
      "Attest clients here include audit, review and examination clients, and compilation clients when the report will be used by third parties and doesn't disclose a lack of independence.",
      "Fees fixed by courts or government agencies aren't contingent fees.",
      "A contingent fee for representing a client in a tax examination is allowed.",
    ],
    related: ["independence", "threats-and-safeguards"],
    match: ["contingent fee"],
  },
  {
    slug: "dual-purpose-test",
    term: "Dual-purpose test",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "A dual-purpose test performs a test of controls and a test of details on the same transaction at the same time, such as examining an invoice both for evidence of approval and for the accuracy of its amount.",
    takeaways: [
      "It must be designed to meet both objectives.",
      "The sample size is the larger of the sizes each test would need on its own.",
      "Results are evaluated separately for the control and for misstatements.",
    ],
    related: ["tests-of-controls", "tests-of-details"],
    match: ["dual-purpose", "dual purpose"],
  },
  {
    slug: "journal-entry-testing",
    term: "Journal entry testing",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Because management override of controls is a risk in every audit, auditors test the appropriateness of journal entries and other adjustments, particularly those made at the end of the period.",
    takeaways: [
      "Entries chosen for testing often involve unusual accounts, round numbers, users who don't normally post entries, or posting after the period is closed.",
      "The auditor also asks people involved in financial reporting about inappropriate or unusual entries.",
      "The other required responses are reviewing estimates for bias and evaluating significant unusual transactions.",
    ],
    related: ["management-override-of-controls", "fraud-triangle", "audit-data-analytics"],
    match: ["journal entr", "top-side", "override"],
  },
];
