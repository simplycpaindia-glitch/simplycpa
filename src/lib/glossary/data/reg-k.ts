import type { GlossaryTerm } from "../types";

/** REG terms, eleventh batch. */
export const regTermsK: GlossaryTerm[] = [
  {
    slug: "premium-tax-credit",
    term: "Premium tax credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The premium tax credit is a refundable credit that helps eligible individuals pay for health insurance bought through a government health insurance marketplace. It is often paid in advance to the insurer and reconciled on the tax return.",
    takeaways: [
      "The reconciliation is done on Form 8962; excess advance payments must be repaid.",
      "From 2026, the One Big Beautiful Bill Act removes the caps on repaying excess advance payments.",
      "The temporarily enhanced credit amounts ended after 2025.",
    ],
    related: ["refundable-credit", "self-employed-health-insurance-deduction"],
    match: ["premium tax credit", "marketplace", "8962"],
  },
  {
    slug: "savers-credit",
    term: "Saver's credit",
    section: "reg",
    topic: "filing-status-credits-and-amt",
    definition:
      "The saver's credit is a nonrefundable credit of 10%, 20% or 50% of up to $2,000 ($4,000 on a joint return) of contributions to retirement plans and individual retirement accounts by low- and moderate-income taxpayers.",
    takeaways: [
      "The taxpayer must be at least 18, not a full-time student and not claimed as a dependent.",
      "The rate depends on adjusted gross income and filing status.",
      "From 2027 it is replaced by the Saver's Match, a federal contribution paid into the taxpayer's retirement account.",
    ],
    related: ["traditional-ira", "roth-ira", "refundable-credit"],
    match: ["saver's credit", "savers credit", "retirement savings"],
  },
  {
    slug: "converted-personal-use-property",
    term: "Property converted from personal to business use",
    section: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    definition:
      "When personal-use property, such as a home, is converted to business or rental use, its basis for depreciation and for measuring a loss is the lower of its adjusted basis and its fair market value at the date of conversion.",
    takeaways: [
      "For measuring a gain, the regular adjusted basis is used.",
      "The rule stops a decline in value during personal use from becoming a deductible loss.",
      "A sale between the two bases gives no gain or loss.",
    ],
    related: ["adjusted-basis", "gifted-property-basis", "macrs"],
    match: ["converted", "personal use", "conversion"],
  },
  {
    slug: "section-1239-ordinary-income",
    term: "Section 1239 (related-party sales of depreciable property)",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Gain on a sale of property that is depreciable to the buyer, between related parties such as a shareholder and a corporation they own more than 50% of, is ordinary income to the seller.",
    takeaways: [
      "It stops the seller getting capital gain while the related buyer depreciates a stepped-up basis.",
      "Related parties include controlled entities and certain trusts.",
      "It applies on top of the normal depreciation recapture rules.",
    ],
    related: ["depreciation-recapture", "related-party-losses", "attribution-rules"],
    match: ["1239", "related part", "depreciable"],
  },
  {
    slug: "collectibles-gain",
    term: "Collectibles gain",
    section: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    definition:
      "Long-term gain on collectibles, such as art, antiques, stamps, coins, gems and precious metals, is taxed at a maximum rate of 28%, rather than the usual 20% maximum for long-term capital gains.",
    takeaways: [
      "Investment products holding physical precious metals can also be collectibles.",
      "Short-term collectibles gain is taxed at ordinary rates.",
      "The taxable part of a gain on qualified small business stock is also taxed at up to 28%.",
    ],
    related: ["capital-asset", "holding-period", "unrecaptured-section-1250-gain"],
    match: ["collectible", "28%"],
  },
  {
    slug: "current-and-accumulated-earnings-and-profits",
    term: "Current and accumulated earnings and profits",
    section: "reg",
    topic: "c-corporation-taxation",
    definition:
      "Corporate distributions are dividends first to the extent of current-year earnings and profits, shared pro rata among the year's distributions, then to the extent of accumulated earnings and profits, in date order.",
    takeaways: [
      "With positive current earnings and profits, distributions are dividends even if there is an accumulated deficit.",
      "With a current deficit and positive accumulated earnings and profits, the two are netted at the date of each distribution.",
      "Amounts beyond both are a tax-free return of basis, then capital gain.",
    ],
    related: ["earnings-and-profits", "constructive-dividend", "property-distributions-by-corporations"],
    match: ["current earnings", "accumulated earnings", "earnings and profits"],
  },
  {
    slug: "partnership-formation",
    term: "Partnership formation",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "Partners generally recognize no gain or loss when they contribute property to a partnership in exchange for a partnership interest. A partner's outside basis is the money plus the adjusted basis of property contributed.",
    takeaways: [
      "The partnership takes the partner's basis and holding period in the property.",
      "A partner who receives an interest for services has taxable income.",
      "Gain can arise if the partner is relieved of liabilities exceeding their basis.",
    ],
    related: ["outside-basis", "inside-basis", "partnership-liabilities", "section-351"],
    match: ["contribut", "formation", "721"],
  },
  {
    slug: "partnership-liabilities",
    term: "Partnership liabilities and basis",
    section: "reg",
    topic: "partnership-taxation",
    definition:
      "An increase in a partner's share of partnership liabilities is treated as a cash contribution that increases outside basis, and a decrease is treated as a cash distribution that reduces it.",
    takeaways: [
      "Recourse liabilities are shared by the partners who bear the economic risk of loss.",
      "Nonrecourse liabilities are generally shared in proportion to profits.",
      "A deemed distribution larger than outside basis produces gain.",
    ],
    related: ["outside-basis", "at-risk-rules", "nonliquidating-distribution"],
    match: ["liabilit", "recourse", "nonrecourse"],
  },
  {
    slug: "excess-passive-investment-income-tax",
    term: "Excess passive investment income tax",
    section: "reg",
    topic: "s-corporation-taxation",
    definition:
      "An S corporation with earnings and profits from its C corporation years pays corporate-level tax, at 21%, on excess net passive income when its passive investment income is more than 25% of gross receipts.",
    takeaways: [
      "Passive investment income includes royalties, rents, dividends, interest and annuities.",
      "Exceeding the 25% limit for three consecutive years ends the S election.",
      "Distributing the old earnings and profits removes the exposure.",
    ],
    related: ["s-corporation-termination", "built-in-gains-tax", "earnings-and-profits"],
    match: ["passive investment income", "25%"],
  },
  {
    slug: "gift-tax-return",
    term: "Gift tax return",
    section: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    definition:
      "A donor files Form 709 for gifts to anyone (other than a spouse) above the annual exclusion, gifts of future interests, gift splitting and the five-year election for section 529 contributions. It is due April 15 of the following year.",
    takeaways: [
      "An extension of the income tax return also extends the gift tax return.",
      "The donor, not the recipient, pays any gift tax.",
      "Tuition and medical expenses paid directly to the provider aren't taxable gifts.",
    ],
    related: ["gift-tax-annual-exclusion", "gift-splitting", "unified-credit"],
    match: ["709", "gift tax return"],
  },
  {
    slug: "exemption-application",
    term: "Application for tax exemption",
    section: "reg",
    topic: "exempt-organizations-basics",
    definition:
      "An organization seeking charitable (section 501(c)(3)) status generally applies on Form 1023. Filing within 27 months of formation makes the exemption effective from the date it was formed.",
    takeaways: [
      "Small organizations can use the shorter Form 1023-EZ.",
      "Churches are exempt without applying, though many apply anyway.",
      "Other exempt organizations generally use Form 1024.",
    ],
    related: ["form-990", "private-foundation"],
    match: ["1023", "exemption", "501(c)(3)"],
  },
  {
    slug: "termination-of-agency",
    term: "Termination of agency",
    section: "reg",
    topic: "business-law-agency-and-business-structures",
    definition:
      "An agency ends by act of the parties, such as fulfillment of its purpose, expiry, mutual agreement, revocation by the principal or renunciation by the agent, or by operation of law, such as death, insanity or bankruptcy of either party.",
    takeaways: [
      "Apparent authority can continue until third parties who dealt with the agent are notified.",
      "Death of the principal ends actual authority immediately, even without notice.",
      "An agency coupled with an interest isn't ended by the principal's revocation or death.",
    ],
    related: ["apparent-authority", "agent-duties"],
    match: ["terminat", "revocation", "renunciation"],
  },
  {
    slug: "contract-mistake",
    term: "Mistake (contracts)",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "A mutual mistake about a material fact lets either party cancel (rescind) the contract. A unilateral mistake generally doesn't, unless the other party knew or should have known of it, or it was an obvious clerical or arithmetic error.",
    takeaways: [
      "A mistake about value or quality judgments isn't grounds to cancel.",
      "Mistakes of law generally aren't grounds either.",
      "The mistaken fact must be basic to the bargain.",
    ],
    related: ["void-and-voidable-contracts", "consideration"],
    match: ["mistake", "rescind", "rescission"],
  },
  {
    slug: "assignment-and-delegation",
    term: "Assignment and delegation",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "An assignment transfers a party's rights under a contract; a delegation transfers its duties. Both are generally allowed unless the contract prohibits them, the duty involves personal services, or the change would materially alter the other party's position.",
    takeaways: [
      "The assignee takes the rights subject to any defenses the other party had against the assignor.",
      "A party who delegates duties remains liable if the delegate doesn't perform.",
      "Notice to the obligor makes it pay the assignee rather than the original party.",
    ],
    related: ["third-party-beneficiary", "consideration"],
    match: ["assign", "delegat"],
  },
  {
    slug: "third-party-beneficiary",
    term: "Third-party beneficiary",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "A third-party beneficiary is someone not party to a contract who benefits from it. An intended beneficiary, such as a creditor or donee beneficiary, can enforce the contract; an incidental beneficiary can't.",
    takeaways: [
      "Life insurance beneficiaries are a common example of intended beneficiaries.",
      "The beneficiary's rights generally vest once they learn of the contract and rely on or accept it.",
      "After vesting, the parties can't change the beneficiary's rights without consent.",
    ],
    related: ["assignment-and-delegation", "consideration"],
    match: ["third-party beneficiary", "intended beneficiary", "incidental"],
  },
  {
    slug: "accord-and-satisfaction",
    term: "Accord and satisfaction",
    section: "reg",
    topic: "business-law-contracts",
    definition:
      "An accord is an agreement to accept a different performance, often a smaller payment, in settlement of a disputed claim. Its performance (the satisfaction) discharges the original obligation.",
    takeaways: [
      "Paying less on an undisputed, fixed debt isn't consideration for releasing the rest.",
      "If the accord isn't performed, the creditor can sue on the original claim or the accord.",
      "Cashing a check marked as payment in full of a disputed claim can create one.",
    ],
    related: ["consideration", "promissory-estoppel"],
    match: ["accord", "satisfaction", "payment in full"],
  },
  {
    slug: "priority-of-security-interests",
    term: "Priority of security interests",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Between competing perfected security interests in the same collateral, the first to file or perfect generally wins. A perfected interest beats an unperfected one; between unperfected interests, the first to attach wins.",
    takeaways: [
      "A buyer in the ordinary course of business takes goods free of security interests created by the seller.",
      "Purchase-money security interests can take priority over earlier interests if perfected on time.",
      "A bankruptcy trustee can defeat an unperfected security interest.",
    ],
    related: ["perfection-of-security-interest", "attachment-of-security-interest", "purchase-money-security-interest"],
    match: ["priority", "first to file", "ordinary course"],
  },
  {
    slug: "chapter-13-bankruptcy",
    term: "Chapter 13 bankruptcy",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Chapter 13 lets an individual with regular income and debts below set limits keep their property and repay creditors under a court-approved plan lasting three to five years.",
    takeaways: [
      "Debts covered by the plan are discharged once all plan payments are made.",
      "Only the debtor can file; creditors can't force a Chapter 13 case.",
      "The automatic stay also protects co-debtors on consumer debts.",
    ],
    related: ["chapter-7-bankruptcy", "chapter-11-reorganization", "automatic-stay"],
    match: ["Chapter 13", "repayment plan", "regular income"],
  },
  {
    slug: "involuntary-bankruptcy-petition",
    term: "Involuntary bankruptcy petition",
    section: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    definition:
      "Creditors can file an involuntary petition to put a debtor into Chapter 7 or Chapter 11. With 12 or more creditors, at least 3 with unsecured claims totaling at least a set dollar amount must join; with fewer than 12, one can file.",
    takeaways: [
      "The court grants relief if the debtor generally isn't paying debts as they come due.",
      "Involuntary petitions can't be filed against farmers or charitable organizations.",
      "A debtor can recover costs and damages for a petition filed in bad faith.",
    ],
    related: ["chapter-7-bankruptcy", "chapter-11-reorganization", "automatic-stay"],
    match: ["involuntary", "petition"],
  },
  {
    slug: "conflicts-of-interest-circular-230",
    term: "Conflicts of interest (Circular 230)",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "A practitioner may not represent a client before the Internal Revenue Service if there is a conflict of interest, unless they reasonably believe they can represent each client competently and diligently, the representation isn't prohibited by law, and each affected client gives informed written consent.",
    takeaways: [
      "A conflict exists if clients are directly adverse or the practitioner's responsibilities materially limit the representation.",
      "Written consents should be obtained within 30 days and kept for 36 months after the representation ends.",
      "Consent must be available to the agency on request.",
    ],
    related: ["circular-230", "written-tax-advice"],
    match: ["conflict of interest", "informed consent"],
  },
  {
    slug: "written-tax-advice",
    term: "Written tax advice standards",
    section: "reg",
    topic: "circular-230-and-practitioner-ethics",
    definition:
      "Circular 230 requires practitioners giving written advice on federal tax matters to base it on reasonable factual and legal assumptions, consider all relevant facts, avoid unreasonable reliance on others' statements, and relate the law to the facts.",
    takeaways: [
      "The advice may not consider the chance that a return won't be audited or an issue won't be raised.",
      "The standard is reasonableness, considering all facts and circumstances.",
      "Practitioners can rely on others' advice only if it is reasonable and in good faith.",
    ],
    related: ["circular-230", "substantial-authority", "conflicts-of-interest-circular-230"],
    match: ["written advice", "10.37"],
  },
  {
    slug: "collection-due-process",
    term: "Collection due process hearing",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "Before the Internal Revenue Service levies on property, and after it files a federal tax lien, the taxpayer can request a collection due process hearing with the agency's independent appeals office within 30 days of the notice.",
    takeaways: [
      "The taxpayer can propose alternatives, such as an installment agreement or an offer in compromise.",
      "The underlying liability can be challenged only if the taxpayer had no earlier chance to dispute it.",
      "The appeals decision can be challenged in the Tax Court.",
    ],
    related: ["installment-agreement", "offer-in-compromise", "tax-court"],
    match: ["collection due process", "levy", "lien"],
  },
  {
    slug: "tax-litigation-forums",
    term: "Tax litigation forums",
    section: "reg",
    topic: "irs-procedures-and-appeals",
    definition:
      "A taxpayer can litigate a federal tax dispute in the Tax Court without paying first, or pay the tax and sue for a refund in a federal district court or the Court of Federal Claims.",
    takeaways: [
      "A jury trial is available only in a district court.",
      "Tax Court and district court decisions are appealed to the regional circuit courts; Court of Federal Claims decisions to the Federal Circuit.",
      "Further appeal is to the Supreme Court, which hears few tax cases.",
    ],
    related: ["tax-court", "golsen-rule", "claim-for-refund"],
    match: ["district court", "Court of Federal Claims", "refund suit"],
  },
];
