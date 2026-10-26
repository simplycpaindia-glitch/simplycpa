import type { GlossaryTerm } from "../types";

/** FAR and AUD terms, tenth batch. */
export const farTermsJ: GlossaryTerm[] = [
  {
    slug: "gross-and-net-methods",
    term: "Gross and net methods (purchase discounts)",
    section: "far",
    topic: "inventory",
    definition:
      "Under the gross method, purchases are recorded at the invoice price and discounts taken reduce inventory cost. Under the net method, purchases are recorded net of the available discount, and discounts missed are recorded separately as a financing expense.",
    takeaways: [
      "The net method shows the cost of failing to pay on time.",
      "Terms of 2/10, net 30 mean a 2% discount if paid within 10 days, otherwise the full amount in 30.",
      "The same choice applies to sales discounts offered to customers.",
    ],
    example: "A $10,000 purchase on 2/10, net 30 is recorded at $9,800 under the net method; paying on day 25 records $200 of discounts lost.",
    related: ["fob-shipping-terms", "variable-consideration"],
    match: ["purchase discount", "discounts lost", "2/10"],
  },
  {
    slug: "lease-incentives",
    term: "Lease incentives",
    section: "far",
    topic: "leases",
    definition:
      "Lease incentives are payments a lessor makes to or on behalf of a lessee, such as cash for moving costs or reimbursement of improvements. The lessee deducts them from the lease payments, reducing the right-of-use asset.",
    takeaways: [
      "In an operating lease, the incentive lowers the straight-line lease cost over the term.",
      "Rent-free periods are handled by spreading the total payments evenly over the lease term.",
      "Incentives received after commencement reduce the asset when received.",
    ],
    related: ["right-of-use-asset", "operating-lease", "variable-lease-payments"],
    match: ["incentive", "rent holiday", "free rent"],
  },
  {
    slug: "internally-developed-intangibles",
    term: "Internally developed intangibles",
    section: "far",
    topic: "intangible-assets-and-goodwill",
    definition:
      "Costs of internally developing, maintaining or restoring intangible assets that aren't specifically identifiable, or that are inherent in a continuing business, such as internally generated goodwill, are expensed as incurred.",
    takeaways: [
      "Legal and registration fees for a patent or trademark are capitalized, but the research behind it is expensed.",
      "Costs of successfully defending a patent are capitalized; if the defense fails, they are expensed and the patent written off.",
      "Purchased intangibles are recorded at cost.",
    ],
    related: ["research-and-development-costs", "finite-lived-intangible", "goodwill"],
    match: ["internally developed", "patent", "legal fees", "trademark"],
  },
  {
    slug: "significant-influence",
    term: "Significant influence",
    section: "far",
    topic: "investments-debt-and-equity-securities",
    definition:
      "Significant influence is the ability to influence an investee's operating and financial policies without controlling it. It is presumed when an investor holds 20% to 50% of the voting stock, and leads to the equity method.",
    takeaways: [
      "Indicators include board representation, taking part in policy-making, material intercompany transactions and exchanging managers.",
      "The 20% presumption can be overcome, for example if the investee opposes the investor's influence.",
      "An investor can elect the fair value option instead of the equity method.",
    ],
    related: ["equity-method", "fair-value-option", "voting-interest-model"],
    match: ["significant influence", "20%"],
  },
  {
    slug: "petty-cash",
    term: "Petty cash",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "Petty cash is a small imprest fund kept on hand for minor payments. A custodian keeps receipts, and when the fund is replenished, the expenses are recorded and cash is restored to the fixed amount.",
    takeaways: [
      "The petty cash account itself changes only when the fund's size is increased or decreased.",
      "Differences between the receipts and cash missing go to cash over and short.",
      "Unreplenished receipts at year-end should be recorded as expenses.",
    ],
    related: ["cash-equivalents", "bank-reconciliation"],
    match: ["petty cash", "imprest"],
  },
  {
    slug: "direct-write-off-method",
    term: "Direct write-off method",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "Under the direct write-off method, bad debt expense is recorded only when a specific account is determined to be uncollectible. It isn't acceptable under generally accepted accounting principles unless the effect is immaterial.",
    takeaways: [
      "It doesn't match bad debts with the revenue of the period and overstates receivables.",
      "It is the method required for federal income tax purposes, creating a temporary difference.",
      "The allowance method, using expected credit losses, is required for financial reporting.",
    ],
    related: ["allowance-method", "cecl", "temporary-difference"],
    match: ["direct write-off", "uncollectible"],
  },
  {
    slug: "aging-of-receivables",
    term: "Aging of receivables",
    section: "far",
    topic: "cash-receivables-and-bad-debts",
    definition:
      "An aging schedule groups accounts receivable by how long they have been outstanding and applies a higher expected loss rate to older groups. The total is the required ending balance of the allowance for credit losses.",
    takeaways: [
      "Bad debt expense is the amount needed to bring the allowance to that required balance.",
      "Under the expected credit loss model, the rates are adjusted for current conditions and reasonable forecasts.",
      "It is a balance sheet approach, unlike a percentage-of-sales estimate.",
    ],
    example: "A required allowance of $18,000 when the account already has a $5,000 credit balance gives bad debt expense of $13,000.",
    related: ["allowance-method", "cecl"],
    match: ["aging", "past due"],
  },
  {
    slug: "asset-acquisition",
    term: "Asset acquisition",
    section: "far",
    topic: "business-combinations-and-consolidations",
    definition:
      "Buying a group of assets that isn't a business is an asset acquisition. The cost, including transaction costs, is allocated to the assets based on their relative fair values, and no goodwill is recognized.",
    takeaways: [
      "If substantially all the fair value is in a single asset or a group of similar assets, the set isn't a business.",
      "In-process research and development with no alternative future use is expensed.",
      "In a business combination, by contrast, transaction costs are expensed and goodwill can arise.",
    ],
    related: ["acquisition-method", "goodwill", "bargain-purchase"],
    match: ["asset acquisition", "not a business", "screen"],
  },
  {
    slug: "serial-bonds",
    term: "Serial bonds",
    section: "far",
    topic: "long-term-debt",
    definition:
      "Serial bonds mature in installments over a series of years rather than all on one date. Each maturity is effectively a separate bond, with its own price and discount or premium.",
    takeaways: [
      "The installment due within the next year is reported as a current liability.",
      "Discount or premium is amortized with the effective interest method.",
      "Term bonds, by contrast, all mature on the same date.",
    ],
    related: ["bond-discount-and-premium", "effective-interest-method", "classified-balance-sheet"],
    match: ["serial bond", "term bond"],
  },
  {
    slug: "participating-preferred-stock",
    term: "Participating preferred stock",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "Participating preferred stock receives its stated dividend and then shares in further dividends with common stock once common shareholders have received a matching rate. Fully participating shares share without limit; partially participating shares up to a cap.",
    takeaways: [
      "Cumulative and participating are separate features that can be combined.",
      "Earnings per share uses the two-class method when participating securities exist.",
      "Most preferred stock is nonparticipating.",
    ],
    related: ["cumulative-preferred-stock", "basic-eps"],
    match: ["participating", "two-class"],
  },
  {
    slug: "antidilution",
    term: "Antidilution",
    section: "far",
    topic: "equity-and-earnings-per-share",
    definition:
      "A potential common share is antidilutive if including it would increase earnings per share or reduce loss per share. Antidilutive securities are left out of diluted earnings per share.",
    takeaways: [
      "When there is a loss from continuing operations, all potential common shares are antidilutive.",
      "Income from continuing operations is the control number for deciding dilution.",
      "Securities are added in order from most to least dilutive.",
    ],
    related: ["diluted-eps", "treasury-stock-method", "if-converted-method"],
    match: ["antidilut", "anti-dilut"],
  },
  {
    slug: "income-tax-rate-reconciliation",
    term: "Income tax rate reconciliation",
    section: "far",
    topic: "income-taxes",
    definition:
      "Public business entities reconcile income tax at the statutory rate to reported income tax expense, in both percentages and amounts, using specified categories such as state taxes, foreign rate differences and tax credits.",
    takeaways: [
      "Items equal to 5% or more of tax at the statutory rate are shown separately.",
      "Income taxes paid are also broken down by federal, state and foreign jurisdictions.",
      "The expanded disclosures apply to public business entities for annual periods beginning after December 15, 2024.",
    ],
    related: ["permanent-difference", "deferred-tax-liability"],
    match: ["rate reconciliation", "effective tax rate", "statutory rate"],
  },
  {
    slug: "agency-transactions",
    term: "Agency transactions (not-for-profits)",
    section: "far",
    topic: "not-for-profit-accounting",
    definition:
      "When a not-for-profit receives assets as an agent, trustee or intermediary to pass on to a beneficiary specified by the donor, with little discretion, it records a liability to the beneficiary rather than contribution revenue.",
    takeaways: [
      "If the donor gives it variance power to redirect the assets, it is a contribution.",
      "If the organization and the beneficiary are financially interrelated, the beneficiary's interest is recognized differently.",
      "The specified beneficiary records the contribution.",
    ],
    related: ["conditional-promise-to-give", "net-assets-with-donor-restrictions"],
    match: ["agent", "intermediary", "variance power"],
  },
  {
    slug: "governmental-funds-reconciliation",
    term: "Reconciliation of governmental funds to government-wide statements",
    section: "far",
    topic: "governmental-accounting",
    definition:
      "Governments reconcile their governmental fund statements, prepared on the modified accrual basis, to the governmental activities column of the government-wide statements, prepared on the full accrual basis.",
    takeaways: [
      "Capital outlays are expenditures in the funds but capital assets, depreciated, government-wide.",
      "Debt proceeds are an other financing source in the funds but a liability government-wide.",
      "Internal service funds are usually added in, and long-term accruals such as compensated absences recognized.",
    ],
    related: ["modified-accrual-basis", "net-position", "internal-service-fund"],
    match: ["reconciliation", "government-wide", "full accrual"],
  },
  {
    slug: "valuation-techniques",
    term: "Fair value valuation techniques",
    section: "far",
    topic: "conceptual-framework-and-financial-statement-presentation",
    definition:
      "Fair value is estimated using one or more of three approaches: the market approach (prices of identical or comparable items), the income approach (discounted future amounts) and the cost approach (current replacement cost).",
    takeaways: [
      "Techniques should maximize the use of observable inputs and minimize unobservable ones.",
      "The level in the fair value hierarchy depends on the inputs, not the technique.",
      "Changing a technique is a change in estimate.",
    ],
    related: ["fair-value-hierarchy", "principal-market"],
    match: ["market approach", "income approach", "cost approach"],
  },
];

export const audTermsJ: GlossaryTerm[] = [
  {
    slug: "indicators-of-material-weakness",
    term: "Indicators of a material weakness",
    section: "aud",
    topic: "understanding-the-entity-and-internal-control",
    definition:
      "Certain findings strongly suggest a material weakness in internal control: fraud by senior management of any size, a restatement to correct a material misstatement, a material misstatement the entity's controls wouldn't have caught, and ineffective audit committee oversight.",
    takeaways: [
      "The auditor still evaluates severity, but these usually lead to a material weakness conclusion.",
      "A material weakness requires an adverse opinion on internal control in an integrated audit.",
      "Material weaknesses are communicated in writing.",
    ],
    related: ["material-weakness", "significant-deficiency", "opinion-on-internal-control"],
    match: ["indicator", "material weakness"],
  },
  {
    slug: "positive-and-negative-confirmations",
    term: "Positive and negative confirmations",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "A positive confirmation asks the recipient to reply in every case, either agreeing with stated information or filling in a blank. A negative confirmation asks for a reply only if the recipient disagrees.",
    takeaways: [
      "Blank forms, where the recipient fills in the balance, give more reliable evidence but get fewer replies.",
      "Negative confirmations alone are suitable only when risk is low, controls are effective, balances are many and small, and few exceptions are expected.",
      "An unreturned negative confirmation doesn't prove the recipient agreed.",
    ],
    related: ["external-confirmation", "confirmation-nonresponses"],
    match: ["positive confirmation", "negative confirmation", "blank form"],
  },
  {
    slug: "confirmation-nonresponses",
    term: "Confirmation nonresponses",
    section: "aud",
    topic: "evidence-types-and-procedures",
    definition:
      "When a positive confirmation isn't returned, the auditor performs alternative procedures, such as examining cash received after year-end and the shipping documents and invoices supporting the balance.",
    takeaways: [
      "Second requests are usually sent first.",
      "If a reply is essential to obtain enough evidence, alternative procedures won't do, and the auditor considers the effect on the opinion.",
      "If management refuses to allow a confirmation, the auditor asks why and evaluates the implications, including fraud risk.",
    ],
    related: ["external-confirmation", "positive-and-negative-confirmations", "scope-limitation"],
    match: ["nonresponse", "alternative procedure", "second request"],
  },
  {
    slug: "stratification",
    term: "Stratification",
    section: "aud",
    topic: "audit-sampling",
    definition:
      "Stratification divides a population into subgroups (strata) of items with similar characteristics, often by dollar size, so each stratum can be sampled separately.",
    takeaways: [
      "It reduces variability within each stratum, which lowers the overall sample size needed.",
      "Items above a set amount are often tested 100%, with sampling used for the rest.",
      "Monetary unit sampling stratifies automatically by favoring large items.",
    ],
    related: ["classical-variables-sampling", "monetary-unit-sampling", "sample-selection-methods"],
    match: ["stratif", "strata"],
  },
  {
    slug: "channel-stuffing",
    term: "Channel stuffing",
    section: "aud",
    topic: "fraud-risk",
    definition:
      "Channel stuffing is pushing distributors or retailers to buy more than they need near the end of a period, often with extra discounts, extended payment terms or generous return rights, to inflate revenue.",
    takeaways: [
      "Warning signs include sharp year-end sales, rising receivables and days sales outstanding, and heavy returns after year-end.",
      "Side agreements giving customers return rights can mean control hasn't passed.",
      "Auditors respond with confirmations of terms, cutoff tests and review of subsequent returns.",
    ],
    related: ["revenue-recognition-fraud-presumption", "cutoff", "bill-and-hold-arrangement"],
    match: ["channel stuffing", "side agreement", "trade loading"],
  },
  {
    slug: "direct-assistance",
    term: "Direct assistance from internal auditors",
    section: "aud",
    topic: "group-audits-and-using-others-work",
    definition:
      "Internal auditors provide direct assistance when they perform audit procedures under the direction, supervision and review of the external auditor.",
    takeaways: [
      "It isn't allowed for procedures involving significant judgments or high assessed risks.",
      "It isn't allowed if threats to the internal auditors' objectivity are significant or their competence is insufficient.",
      "The entity must agree in writing not to interfere with the work.",
    ],
    related: ["internal-audit-function", "component-auditor"],
    match: ["direct assistance", "internal auditor"],
  },
  {
    slug: "auditors-responsibilities-section",
    term: "Auditor's responsibilities section",
    section: "aud",
    topic: "audit-reports",
    definition:
      "The auditor's responsibilities section of the report explains that the auditor's objective is reasonable assurance, describes the use of professional judgment and skepticism, and summarizes the work on risks, internal control, accounting estimates and going concern.",
    takeaways: [
      "It states that reasonable assurance is a high level of assurance but not absolute.",
      "It explains that the risk of not detecting fraud is higher than for error.",
      "It notes required communications with those charged with governance.",
    ],
    related: ["basis-for-opinion-section", "reasonable-assurance", "unmodified-opinion"],
    match: ["auditor's responsibilities", "responsibilities section"],
  },
  {
    slug: "alert-restricting-use",
    term: "Alert restricting use",
    section: "aud",
    topic: "audit-reports",
    definition:
      "An alert in the report restricts its use to specified parties, typically when the subject matter is based on criteria suitable only for certain users, such as a contractual or regulatory basis of accounting, or for communications about internal control deficiencies.",
    takeaways: [
      "It warns other readers that the report wasn't intended for them.",
      "Compliance reports issued in connection with an audit are also restricted.",
      "The auditor isn't responsible for controlling who actually gets the report.",
    ],
    related: ["special-purpose-framework", "significant-deficiency"],
    match: ["restricting use", "restricted use", "specified parties"],
  },
  {
    slug: "opinion-on-internal-control",
    term: "Opinion on internal control over financial reporting",
    section: "aud",
    topic: "audit-reports",
    definition:
      "In an integrated audit, the auditor gives an opinion on whether the company maintained effective internal control over financial reporting as of year-end. One or more material weaknesses lead to an adverse opinion.",
    takeaways: [
      "The financial statement opinion can still be unmodified when there is a material weakness.",
      "The two opinions can be given in a combined report or separate reports.",
      "A scope limitation leads to a disclaimer or withdrawal.",
    ],
    related: ["integrated-audit", "material-weakness", "indicators-of-material-weakness"],
    match: ["internal control over financial reporting", "ICFR", "adverse opinion"],
  },
  {
    slug: "change-in-engagement",
    term: "Change in engagement",
    section: "aud",
    topic: "reviews-compilations-and-aup",
    definition:
      "A client may ask an accountant to change an audit to a review or compilation, or a review to a compilation, before it is finished. The accountant considers whether there is a reasonable justification.",
    takeaways: [
      "A change in the client's needs, or a misunderstanding about the service, is usually reasonable.",
      "A request that seems meant to avoid the effects of a scope limitation or of incorrect information isn't reasonable.",
      "If the change is made, the new report doesn't mention the original engagement.",
    ],
    related: ["review-engagement", "compilation-engagement", "engagement-letter"],
    match: ["change in engagement", "change to a review"],
  },
  {
    slug: "suitable-criteria",
    term: "Suitable criteria",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "In an attestation engagement, criteria are the benchmarks used to measure or evaluate the subject matter. They must be suitable, meaning relevant, objective, measurable and complete, and available to the intended users.",
    takeaways: [
      "Criteria set by standard-setters or regulators are generally suitable.",
      "Criteria suitable only for certain parties lead to a restricted-use report.",
      "Without suitable criteria, the practitioner can't accept the engagement.",
    ],
    related: ["examination-engagement", "direct-engagement", "trust-services-criteria"],
    match: ["criteria", "subject matter"],
  },
  {
    slug: "cooling-off-period",
    term: "Cooling-off period",
    section: "aud",
    topic: "professional-ethics-and-independence",
    definition:
      "Securities and Exchange Commission rules impair a firm's independence if a former member of the audit team takes a financial reporting oversight role at a public audit client, such as chief financial officer, within one year before the audit begins.",
    takeaways: [
      "The rule covers the lead partner, concurring partner and others on the engagement team.",
      "American Institute of Certified Public Accountants rules address the threat through safeguards rather than a fixed period.",
      "It reduces familiarity and self-interest threats.",
    ],
    related: ["independence", "audit-partner-rotation", "threats-and-safeguards"],
    match: ["cooling-off", "cooling off", "employment"],
  },
  {
    slug: "schedule-of-expenditures-of-federal-awards",
    term: "Schedule of expenditures of federal awards",
    section: "aud",
    topic: "attestation-and-soc-engagements",
    definition:
      "In a single audit, the auditee prepares a schedule of expenditures of federal awards listing its spending under each federal program. The auditor reports on it in relation to the financial statements as a whole.",
    takeaways: [
      "It is the starting point for identifying major programs.",
      "It is prepared on the basis of accounting used for the financial statements, with notes explaining it.",
      "Findings are reported in the schedule of findings and questioned costs.",
    ],
    related: ["single-audit", "major-program", "supplementary-information-in-relation-to"],
    match: ["expenditures of federal awards", "federal award"],
  },
  {
    slug: "component-materiality",
    term: "Component performance materiality",
    section: "aud",
    topic: "group-audits-and-using-others-work",
    definition:
      "In a group audit, the group auditor sets component performance materiality for work on each component lower than group materiality, to reduce the risk that misstatements across components add up to a material amount.",
    takeaways: [
      "Different components can have different amounts.",
      "The group auditor also sets a threshold above which misstatements are reported back.",
      "Component auditors use the amount the group auditor sets.",
    ],
    related: ["group-audit", "component-auditor", "performance-materiality"],
    match: ["component materiality", "aggregation risk"],
  },
  {
    slug: "end-user-computing-controls",
    term: "End-user computing controls",
    section: "aud",
    topic: "it-controls-in-audit",
    definition:
      "End-user computing tools, such as spreadsheets used in financial reporting, often lack the controls of formal systems. Controls include restricting access, version control, reviewing formulas and reconciling results to source data.",
    takeaways: [
      "Common risks are formula errors, hard-coded numbers and unauthorized changes.",
      "Spreadsheets that feed significant accounts need the same scrutiny as system reports.",
      "Locking cells and keeping a change log reduce risk.",
    ],
    related: ["information-produced-by-the-entity", "application-controls", "it-general-controls"],
    match: ["spreadsheet", "end-user", "end user"],
  },
  {
    slug: "roll-forward-procedures",
    term: "Roll-forward procedures",
    section: "aud",
    topic: "responding-to-assessed-risks",
    definition:
      "When substantive procedures are performed at an interim date, the auditor performs further procedures for the remaining period to year-end, so the conclusions extend to the balance sheet date.",
    takeaways: [
      "They include comparing interim and year-end balances, investigating unusual changes and testing significant transactions in between.",
      "For higher risks, interim testing may not be appropriate at all.",
      "Effective controls over the remaining period make interim testing more reliable.",
    ],
    related: ["substantive-procedures", "analytical-procedures"],
    match: ["roll-forward", "roll forward", "interim date"],
  },
];
