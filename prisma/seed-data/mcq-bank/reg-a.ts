import type { McqBank } from "./types";

/**
 * REG question bank — topics 1 through 9.
 *
 * Deliberately built around structural rules and figures supplied in the
 * question stem rather than annually indexed amounts (standard deduction,
 * phase-out thresholds, and similar), which change every filing season and
 * would date the bank. Where a threshold is quoted it is one that is fixed in
 * statute rather than inflation-adjusted.
 */
export const regBankA: McqBank = {
  "circular-230-and-practitioner-ethics": [
    {
      question: "Under Circular 230, a practitioner who discovers that a client has made an error on a prior year return must:",
      options: [
        { label: "A", text: "Immediately notify the IRS of the error", isCorrect: false, rationale: "Disclosing client information to the IRS without consent would violate confidentiality." },
        { label: "B", text: "Promptly advise the client of the error and the consequences of not correcting it", isCorrect: true, rationale: "Correct — the practitioner's duty runs to the client, who then decides whether to correct it." },
        { label: "C", text: "Withdraw from the engagement immediately", isCorrect: false, rationale: "Withdrawal may become appropriate but is not the required first step." },
        { label: "D", text: "Amend the return without the client's knowledge", isCorrect: false, rationale: "A practitioner cannot file an amended return without client authorization." },
      ],
      explanation: "Circular 230 requires a practitioner who learns of a client's error or omission to promptly advise the client of it and of the consequences under the Code and regulations. The practitioner is not required — and generally not permitted — to notify the IRS. If the client refuses to correct a material error, the practitioner considers whether to withdraw.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["Circular 230", "ethics"],
    },
    {
      question: "Under Circular 230, a practitioner may generally charge a contingent fee for:",
      options: [
        { label: "A", text: "Preparing an original tax return", isCorrect: false, rationale: "Contingent fees are prohibited for preparing original returns." },
        { label: "B", text: "Services in connection with an IRS examination of an original return", isCorrect: true, rationale: "Correct — representation in an examination of a filed return is a permitted exception." },
        { label: "C", text: "Any service, provided the client agrees in writing", isCorrect: false, rationale: "Client consent does not override the restrictions." },
        { label: "D", text: "Preparing a return for a new client only", isCorrect: false, rationale: "Whether the client is new is irrelevant to the prohibition." },
      ],
      explanation: "Circular 230 generally prohibits contingent fees but permits them for services in connection with an IRS examination or challenge to an original or amended return, for claims solely for refund of interest and penalties, and for judicial proceedings under the Code.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["Circular 230", "contingent fees"],
    },
    {
      question: "A client requests the return of records needed to comply with tax obligations, but has not paid the practitioner's fee. Under Circular 230, the practitioner must:",
      options: [
        { label: "A", text: "Retain all records until the fee is paid", isCorrect: false, rationale: "A fee dispute does not justify withholding the client's own records." },
        { label: "B", text: "Return the client's own records, even though the fee is unpaid", isCorrect: true, rationale: "Correct — records belonging to the client must be returned regardless of a fee dispute." },
        { label: "C", text: "Destroy the records and notify the client", isCorrect: false, rationale: "Destroying client records would be a serious violation." },
        { label: "D", text: "Transfer the records directly to the IRS", isCorrect: false, rationale: "This would breach client confidentiality." },
      ],
      explanation: "Circular 230 requires a practitioner to promptly return any records of the client necessary for the client to comply with federal tax obligations, notwithstanding a fee dispute. Where state law permits a lien, the practitioner must still provide access to review and copy those records. The practitioner's own work product prepared but withheld pending payment is treated differently.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["Circular 230", "client records"],
    },
    {
      question: "Circular 230 permits a practitioner to represent conflicting interests before the IRS only if:",
      options: [
        { label: "A", text: "The conflict is immaterial in the practitioner's judgment", isCorrect: false, rationale: "Materiality alone does not satisfy the requirement." },
        { label: "B", text: "The practitioner reasonably believes competent representation can be provided and each affected client waives the conflict in writing", isCorrect: true, rationale: "Correct — informed written consent from each affected client is required, along with the practitioner's reasonable belief." },
        { label: "C", text: "The clients are related parties", isCorrect: false, rationale: "A family or business relationship does not eliminate the conflict rules." },
        { label: "D", text: "The IRS grants advance approval", isCorrect: false, rationale: "The IRS does not pre-approve conflict waivers." },
      ],
      explanation: "Representation despite a conflict of interest requires that the practitioner reasonably believes competent and diligent representation can be provided to each client, the representation is not prohibited by law, and each affected client gives informed consent in writing. The written consents must be retained for at least 36 months.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["Circular 230", "conflicts of interest"],
    },
  ],

  "irs-procedures-and-appeals": [
    {
      question: "The general statute of limitations for the IRS to assess additional tax is:",
      options: [
        { label: "A", text: "Two years from the date the return was filed", isCorrect: false, rationale: "Two years relates to certain refund claims measured from payment, not to assessment." },
        { label: "B", text: "Three years from the later of the due date or the date the return was filed", isCorrect: true, rationale: "Correct — three years is the general assessment period." },
        { label: "C", text: "Six years in all cases", isCorrect: false, rationale: "Six years applies only when gross income is substantially omitted." },
        { label: "D", text: "There is no statute of limitations on assessment", isCorrect: false, rationale: "The unlimited period applies only to fraud or failure to file." },
      ],
      explanation: "The general assessment period is three years from the later of the return's due date or the date actually filed. It extends to six years if the taxpayer omits gross income exceeding 25% of the amount reported, and is unlimited where the return is fraudulent or no return was filed at all.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["IRS procedures", "statute of limitations"],
    },
    {
      question: "A taxpayer must generally file a claim for refund by the later of:",
      options: [
        { label: "A", text: "Three years from filing the return, or two years from paying the tax", isCorrect: true, rationale: "Correct — this is the standard refund claim limitation period." },
        { label: "B", text: "Two years from filing the return, or three years from paying the tax", isCorrect: false, rationale: "The periods are reversed." },
        { label: "C", text: "Six years from filing the return", isCorrect: false, rationale: "Six years relates to the extended assessment period, not refund claims." },
        { label: "D", text: "One year from the date of the IRS notice", isCorrect: false, rationale: "This is not the refund claim period." },
      ],
      explanation: "A refund claim must be filed within three years from the date the return was filed or two years from the date the tax was paid, whichever is later. A return filed before its due date is treated as filed on the due date for this purpose.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["IRS procedures", "refund claims"],
    },
    {
      question: "A taxpayer who wishes to litigate a deficiency WITHOUT first paying the disputed tax should petition:",
      options: [
        { label: "A", text: "The U.S. District Court", isCorrect: false, rationale: "District Court requires the taxpayer to pay the tax first and sue for refund." },
        { label: "B", text: "The U.S. Tax Court", isCorrect: true, rationale: "Correct — the Tax Court is the only forum where the deficiency need not be paid before litigating." },
        { label: "C", text: "The U.S. Court of Federal Claims", isCorrect: false, rationale: "This court also requires prepayment and a refund suit." },
        { label: "D", text: "The U.S. Supreme Court", isCorrect: false, rationale: "The Supreme Court is an appellate court of last resort, not a trial forum." },
      ],
      explanation: "The Tax Court is the sole prepayment forum: the taxpayer petitions within 90 days of the statutory notice of deficiency without paying first. District Court and the Court of Federal Claims both require the tax to be paid and a refund claim filed. Only District Court offers a jury trial.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["IRS procedures", "tax litigation"],
    },
    {
      question: "After receiving a statutory notice of deficiency (90-day letter), the taxpayer has how long to petition the Tax Court?",
      options: [
        { label: "A", text: "30 days", isCorrect: false, rationale: "30 days is the response period for a revenue agent's report, the '30-day letter.'" },
        { label: "B", text: "90 days", isCorrect: true, rationale: "Correct — the taxpayer has 90 days from the notice date to petition the Tax Court." },
        { label: "C", text: "6 months", isCorrect: false, rationale: "This exceeds the statutory period." },
        { label: "D", text: "3 years", isCorrect: false, rationale: "Three years relates to assessment, not to the petition deadline." },
      ],
      explanation: "The statutory notice of deficiency, or 90-day letter, gives the taxpayer 90 days (150 days if addressed outside the United States) to petition the Tax Court. Missing the deadline means the IRS may assess and collect, leaving the taxpayer to pay and pursue a refund suit instead.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["IRS procedures", "notice of deficiency"],
    },
  ],

  "business-law-contracts": [
    {
      question: "Under the UCC, a merchant's firm offer is irrevocable without consideration if it is:",
      options: [
        { label: "A", text: "Oral and made in the ordinary course of business", isCorrect: false, rationale: "A firm offer must be in a signed writing." },
        { label: "B", text: "In a signed writing giving assurance it will be held open, for the stated time up to three months", isCorrect: true, rationale: "Correct — these are the requirements for a UCC firm offer." },
        { label: "C", text: "Supported by nominal consideration of at least $1", isCorrect: false, rationale: "The point of a firm offer is that no consideration is needed." },
        { label: "D", text: "Made to another merchant only", isCorrect: false, rationale: "The offeror must be a merchant, but the offeree need not be." },
      ],
      explanation: "Under UCC 2-205, an offer by a merchant to buy or sell goods in a signed writing that gives assurance it will be held open is irrevocable, without consideration, for the time stated or a reasonable time — but in no event beyond three months. At common law, an option requires consideration to be binding.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["contracts", "UCC", "firm offer"],
    },
    {
      question: "Which contract must be in writing to be enforceable under the statute of frauds?",
      options: [
        { label: "A", text: "A contract to paint a house for $2,000, to be completed in two months", isCorrect: false, rationale: "A services contract performable within one year need not be written." },
        { label: "B", text: "A contract for the sale of land", isCorrect: true, rationale: "Correct — contracts involving an interest in land fall squarely within the statute of frauds." },
        { label: "C", text: "A contract for the sale of goods for $300", isCorrect: false, rationale: "The UCC writing requirement applies to sales of goods of $500 or more." },
        { label: "D", text: "An oral agreement to work for an employer for six months", isCorrect: false, rationale: "A contract capable of performance within one year need not be in writing." },
      ],
      explanation: "The statute of frauds covers contracts remembered as MY LEGS: Marriage, contracts not performable within one Year, Land, Executor's promise to pay estate debts personally, Goods of $500 or more under the UCC, and Surety contracts. A contract for the sale of land must be evidenced by a signed writing.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["contracts", "statute of frauds"],
    },
    {
      question: "Under the UCC, a contract for the sale of goods may be formed even though:",
      options: [
        { label: "A", text: "The parties never intended to be bound", isCorrect: false, rationale: "Intent to contract remains essential." },
        { label: "B", text: "One or more terms are left open, if the parties intended to contract and there is a reasonably certain basis for a remedy", isCorrect: true, rationale: "Correct — the UCC permits open terms, including open price, and fills gaps with default rules." },
        { label: "C", text: "There is no identified subject matter", isCorrect: false, rationale: "Without identified goods there is nothing to enforce." },
        { label: "D", text: "Neither party gives consideration", isCorrect: false, rationale: "Consideration remains required to form a sales contract." },
      ],
      explanation: "The UCC is far more permissive than the common law about indefiniteness. A sales contract does not fail for missing terms if the parties intended to make a contract and there is a reasonably certain basis for giving a remedy — the Code supplies gap fillers for price, place and time of delivery, and payment terms.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["contracts", "UCC"],
    },
    {
      question: "Under the common law mirror image rule, an offeree's response that adds new terms is:",
      options: [
        { label: "A", text: "An acceptance, with the new terms treated as proposals", isCorrect: false, rationale: "That is the UCC approach for sales of goods between non-merchants, not the common law rule." },
        { label: "B", text: "A counteroffer that rejects the original offer", isCorrect: true, rationale: "Correct — at common law any variation in terms constitutes a rejection and counteroffer." },
        { label: "C", text: "An acceptance in all cases", isCorrect: false, rationale: "The common law requires the acceptance to mirror the offer exactly." },
        { label: "D", text: "A revocation of the original offer", isCorrect: false, rationale: "Only the offeror can revoke an offer." },
      ],
      explanation: "Under the common law mirror image rule, an acceptance must match the offer exactly; any variation is a counteroffer that terminates the original offer. UCC 2-207 rejects this for sales of goods: a definite expression of acceptance forms a contract even with additional terms, whose treatment depends on whether both parties are merchants.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["contracts", "mirror image rule"],
    },
  ],

  "business-law-agency-and-business-structures": [
    {
      question: "Apparent authority exists when:",
      options: [
        { label: "A", text: "The principal expressly grants authority to the agent in writing", isCorrect: false, rationale: "That describes express actual authority." },
        { label: "B", text: "The principal's conduct leads a third party to reasonably believe the agent has authority", isCorrect: true, rationale: "Correct — apparent authority arises from the principal's manifestations to the third party." },
        { label: "C", text: "The agent believes in good faith that authority exists", isCorrect: false, rationale: "The agent's own belief cannot create apparent authority." },
        { label: "D", text: "The agent has authority reasonably necessary to carry out express authority", isCorrect: false, rationale: "That describes implied actual authority." },
      ],
      explanation: "Apparent authority is created by the principal's conduct toward the third party, not by anything the agent says or believes. If the principal's manifestations lead a third party to reasonably believe the agent is authorized, the principal is bound even where actual authority was never granted or has been revoked without notice.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["agency", "apparent authority"],
    },
    {
      question: "In a general partnership, each partner's liability for partnership obligations is:",
      options: [
        { label: "A", text: "Limited to the partner's capital contribution", isCorrect: false, rationale: "That limitation applies to limited partners and LLC members, not general partners." },
        { label: "B", text: "Joint and several, extending to the partner's personal assets", isCorrect: true, rationale: "Correct — general partners face unlimited personal liability for partnership obligations." },
        { label: "C", text: "Limited to the partner's percentage of profits", isCorrect: false, rationale: "Profit share governs internal allocation, not liability to creditors." },
        { label: "D", text: "Nonexistent, because the partnership is a separate legal entity", isCorrect: false, rationale: "Partnership status does not shield general partners from personal liability." },
      ],
      explanation: "General partners are jointly and severally liable for the obligations of the partnership, exposing personal assets. This unlimited liability is the principal reason parties choose an LLC, LLP, or limited partnership, all of which provide a liability shield for at least some owners.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["business structures", "partnership liability"],
    },
    {
      question: "A limited partner in a limited partnership risks losing limited liability protection by:",
      options: [
        { label: "A", text: "Voting on the admission of a new partner", isCorrect: false, rationale: "Voting on specified extraordinary matters is a protected safe harbor activity." },
        { label: "B", text: "Actively participating in the day-to-day management of the business", isCorrect: true, rationale: "Correct — taking part in control of the business can expose a limited partner to general partner liability." },
        { label: "C", text: "Contributing additional capital to the partnership", isCorrect: false, rationale: "Contributing capital is the limited partner's normal role." },
        { label: "D", text: "Receiving distributions of partnership profits", isCorrect: false, rationale: "Receiving distributions is expected and does not affect liability status." },
      ],
      explanation: "A limited partner's liability is generally capped at the amount invested, but participating in control of the business can strip that protection as to third parties who reasonably believed the limited partner was a general partner. Safe harbors permit consulting, voting on extraordinary matters, and acting as a surety without forfeiting the shield.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["business structures", "limited partnership"],
    },
    {
      question: "An agent who enters a contract on behalf of an undisclosed principal is:",
      options: [
        { label: "A", text: "Never personally liable on the contract", isCorrect: false, rationale: "Non-disclosure of the principal exposes the agent personally." },
        { label: "B", text: "Personally liable on the contract, and the principal may also be held liable once discovered", isCorrect: true, rationale: "Correct — the third party may hold either the agent or the principal once the principal is revealed." },
        { label: "C", text: "Liable only if the principal refuses to perform", isCorrect: false, rationale: "Agent liability arises from the undisclosed status itself, not from the principal's default." },
        { label: "D", text: "Liable only for torts, not contracts", isCorrect: false, rationale: "Contractual liability is precisely what arises here." },
      ],
      explanation: "When the principal is fully disclosed, the agent is generally not personally liable. With a partially disclosed or undisclosed principal, the third party contracted in reliance on the agent's own credit, so the agent is personally liable — and once the principal is discovered, the third party may elect to hold the principal liable instead.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["agency", "undisclosed principal"],
    },
  ],

  "debtor-creditor-and-bankruptcy": [
    {
      question: "Which bankruptcy chapter provides for liquidation of the debtor's nonexempt assets by a trustee?",
      options: [
        { label: "A", text: "Chapter 7", isCorrect: true, rationale: "Correct — Chapter 7 is the liquidation chapter." },
        { label: "B", text: "Chapter 11", isCorrect: false, rationale: "Chapter 11 provides for reorganization, typically of a business." },
        { label: "C", text: "Chapter 13", isCorrect: false, rationale: "Chapter 13 is an adjustment of debts for individuals with regular income." },
        { label: "D", text: "Chapter 15", isCorrect: false, rationale: "Chapter 15 addresses cross-border insolvency cases." },
      ],
      explanation: "Chapter 7 liquidates the debtor's nonexempt assets through a trustee who distributes proceeds to creditors by statutory priority. Chapter 11 reorganizes a business under a confirmed plan, and Chapter 13 lets an individual with regular income repay debts over three to five years while retaining assets.",
      difficulty: "EASY",
      questionType: "CONCEPTUAL",
      tags: ["bankruptcy", "chapters"],
    },
    {
      question: "A payment made by an insolvent debtor to an ordinary trade creditor 60 days before filing bankruptcy, on an old debt, may be:",
      options: [
        { label: "A", text: "Retained by the creditor without challenge", isCorrect: false, rationale: "Payments within the look-back period on antecedent debt are vulnerable." },
        { label: "B", text: "Set aside by the trustee as a preferential transfer", isCorrect: true, rationale: "Correct — a transfer on an antecedent debt while insolvent within 90 days of filing may be avoided." },
        { label: "C", text: "Set aside only if the creditor knew of the insolvency", isCorrect: false, rationale: "Creditor knowledge is not an element of a preference for a non-insider." },
        { label: "D", text: "Converted into a secured claim", isCorrect: false, rationale: "Avoidance returns the payment to the estate; it does not create security." },
      ],
      explanation: "A preferential transfer is a transfer of the debtor's property to or for a creditor, on account of an antecedent debt, made while insolvent, within 90 days before filing (one year for insiders), enabling that creditor to receive more than it would in Chapter 7. Defenses include contemporaneous exchange for new value and payments in the ordinary course of business.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["bankruptcy", "preferential transfers"],
    },
    {
      question: "Which debt is NOT discharged in a Chapter 7 bankruptcy?",
      options: [
        { label: "A", text: "Unsecured credit card balances", isCorrect: false, rationale: "Ordinary unsecured consumer debt is dischargeable." },
        { label: "B", text: "Recent federal income taxes and domestic support obligations", isCorrect: true, rationale: "Correct — these are among the statutory exceptions to discharge." },
        { label: "C", text: "Medical bills", isCorrect: false, rationale: "Medical debt is generally dischargeable." },
        { label: "D", text: "Trade payables from a failed business", isCorrect: false, rationale: "Ordinary business trade debt is dischargeable." },
      ],
      explanation: "Nondischargeable debts include most recent taxes, domestic support obligations such as alimony and child support, student loans absent undue hardship, debts from fraud or willful and malicious injury, government fines and penalties, and liabilities from death or injury caused by intoxicated driving.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["bankruptcy", "discharge"],
    },
    {
      question: "The filing of a bankruptcy petition triggers an automatic stay, which:",
      options: [
        { label: "A", text: "Discharges all of the debtor's existing debts immediately", isCorrect: false, rationale: "Discharge comes later in the case, if at all; the stay only halts collection." },
        { label: "B", text: "Halts most collection actions, lawsuits, and lien enforcement against the debtor", isCorrect: true, rationale: "Correct — the stay takes effect immediately upon filing and stops most creditor activity." },
        { label: "C", text: "Applies only after the court approves it at a hearing", isCorrect: false, rationale: "The stay is automatic upon filing, requiring no court order." },
        { label: "D", text: "Prevents the debtor from operating a business", isCorrect: false, rationale: "A Chapter 11 debtor in possession typically continues operating." },
      ],
      explanation: "The automatic stay is effective the moment the petition is filed and stops most collection efforts, lawsuits, foreclosures, and lien enforcement, giving the debtor breathing room and ensuring orderly distribution. Certain proceedings — criminal prosecutions and domestic support collection, among others — are excepted, and creditors may seek relief from the stay.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["bankruptcy", "automatic stay"],
    },
  ],

  "federal-tax-procedures-and-penalties": [
    {
      question: "The accuracy-related penalty for negligence or substantial understatement of income tax is:",
      options: [
        { label: "A", text: "5% of the underpayment", isCorrect: false, rationale: "5% per month is the failure-to-file penalty rate." },
        { label: "B", text: "20% of the underpayment attributable to the misconduct", isCorrect: true, rationale: "Correct — the accuracy-related penalty is 20% of the relevant underpayment." },
        { label: "C", text: "75% of the underpayment", isCorrect: false, rationale: "75% is the civil fraud penalty rate." },
        { label: "D", text: "100% of the underpayment", isCorrect: false, rationale: "No accuracy-related penalty reaches this level." },
      ],
      explanation: "The accuracy-related penalty is 20% of the portion of an underpayment attributable to negligence, disregard of rules, substantial understatement of income tax, or substantial valuation misstatement. Civil fraud carries a far heavier 75% penalty, and the two do not stack on the same underpayment.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["penalties", "accuracy-related"],
    },
    {
      question: "The failure-to-file penalty and the failure-to-pay penalty differ in that failure to file is:",
      options: [
        { label: "A", text: "0.5% per month, versus 5% per month for failure to pay", isCorrect: false, rationale: "The rates are reversed." },
        { label: "B", text: "5% per month, versus 0.5% per month for failure to pay, each capped at 25%", isCorrect: true, rationale: "Correct — failing to file is penalized ten times more heavily per month than failing to pay." },
        { label: "C", text: "Identical in rate to failure to pay", isCorrect: false, rationale: "The rates differ substantially." },
        { label: "D", text: "Not subject to any maximum", isCorrect: false, rationale: "Both penalties are capped at 25% of the tax due." },
      ],
      explanation: "The failure-to-file penalty is 5% of the tax due per month or part month, capped at 25%. The failure-to-pay penalty is 0.5% per month, also capped at 25%. When both apply in the same month, the failure-to-file penalty is reduced by the failure-to-pay amount. The practical lesson is to always file on time, even when unable to pay.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["penalties", "failure to file"],
    },
    {
      question: "A tax return preparer who takes an unreasonable position resulting in an understatement of tax may avoid the preparer penalty by showing:",
      options: [
        { label: "A", text: "The client instructed the preparer to take the position", isCorrect: false, rationale: "Client instruction does not relieve the preparer of professional responsibility." },
        { label: "B", text: "Substantial authority for the position, or reasonable basis with adequate disclosure", isCorrect: true, rationale: "Correct — the required level of authority depends on whether the position is disclosed." },
        { label: "C", text: "The understatement was less than $1,000", isCorrect: false, rationale: "No such de minimis exception exists for the preparer penalty." },
        { label: "D", text: "The IRS did not examine the return", isCorrect: false, rationale: "Whether the return is examined is irrelevant to whether the position was reasonable." },
      ],
      explanation: "A preparer avoids the penalty for an unreasonable position by having substantial authority for an undisclosed position, or a reasonable basis where the position is adequately disclosed. Tax shelters and reportable transactions require the higher 'more likely than not' standard. Reasonable cause and good faith also provide a defense.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["penalties", "preparer penalties"],
    },
    {
      question: "The civil fraud penalty applies at what rate, and who bears the burden of proof?",
      options: [
        { label: "A", text: "20%, with the taxpayer bearing the burden", isCorrect: false, rationale: "20% is the accuracy-related rate, not the fraud rate." },
        { label: "B", text: "75% of the underpayment attributable to fraud, with the IRS bearing the burden by clear and convincing evidence", isCorrect: true, rationale: "Correct — fraud carries a 75% penalty and the government must prove it by clear and convincing evidence." },
        { label: "C", text: "75%, with the taxpayer bearing the burden", isCorrect: false, rationale: "The IRS, not the taxpayer, must prove fraud." },
        { label: "D", text: "100%, with no burden of proof required", isCorrect: false, rationale: "Neither the rate nor the burden statement is correct." },
      ],
      explanation: "The civil fraud penalty is 75% of the underpayment attributable to fraud. Because fraud requires proving intent to evade tax, the IRS bears the burden by clear and convincing evidence — a higher standard than the preponderance standard applying to most tax disputes. Once fraud is established for part of an underpayment, the whole underpayment is presumed fraudulent unless the taxpayer proves otherwise.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["penalties", "fraud"],
    },
  ],

  "property-transactions-basis-and-cost-recovery": [
    {
      question: "A taxpayer receives property as a gift. The donor's adjusted basis was $10,000 and the fair market value at the date of gift was $7,000. The donee later sells the property for $6,000. What is the recognized loss?",
      options: [
        { label: "A", text: "$4,000", isCorrect: false, rationale: "This uses the donor's carryover basis, which applies only for determining gain." },
        { label: "B", text: "$1,000", isCorrect: true, rationale: "Correct — for loss purposes the basis is the $7,000 FMV at the date of gift, so the loss is $1,000." },
        { label: "C", text: "$3,000", isCorrect: false, rationale: "This is the built-in loss at the date of the gift, which is not recognized by the donee." },
        { label: "D", text: "$0", isCorrect: false, rationale: "A loss is recognized because the sale price is below the FMV loss basis." },
      ],
      explanation: "When FMV at the date of gift is below the donor's basis, a dual basis rule applies: the donor's basis is used to compute gain, and FMV at the gift date is used to compute loss. Selling at $6,000 against the $7,000 loss basis produces a $1,000 loss. A sale between $7,000 and $10,000 would produce neither gain nor loss.",
      difficulty: "HARD",
      questionType: "CALCULATION",
      tags: ["basis", "gifted property"],
    },
    {
      question: "Property acquired from a decedent generally takes a basis equal to:",
      options: [
        { label: "A", text: "The decedent's adjusted basis immediately before death", isCorrect: false, rationale: "Carryover basis applies to gifts, not to inherited property." },
        { label: "B", text: "Fair market value at the date of death, or the alternate valuation date if elected", isCorrect: true, rationale: "Correct — inherited property receives a stepped-up (or down) basis to fair market value." },
        { label: "C", text: "The original purchase price paid by the decedent", isCorrect: false, rationale: "Historical cost is not the measure for inherited property." },
        { label: "D", text: "Zero, until the property is sold", isCorrect: false, rationale: "Basis is established at the date of death." },
      ],
      explanation: "Inherited property takes a basis equal to fair market value at the date of death, or at the alternate valuation date six months later if the executor validly elects it. The holding period is automatically long-term regardless of how long either the decedent or the heir actually held the property.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["basis", "inherited property"],
    },
    {
      question: "Equipment costing $100,000 with accumulated depreciation of $60,000 is sold for $110,000. How much of the gain is recaptured as ordinary income under Section 1245?",
      options: [
        { label: "A", text: "$70,000", isCorrect: false, rationale: "$70,000 is the total realized gain; recapture is limited to depreciation taken." },
        { label: "B", text: "$60,000", isCorrect: true, rationale: "Correct — recapture is the lesser of depreciation taken ($60,000) or realized gain ($70,000)." },
        { label: "C", text: "$10,000", isCorrect: false, rationale: "$10,000 is the Section 1231 gain remaining after recapture." },
        { label: "D", text: "$0", isCorrect: false, rationale: "Section 1245 requires recapture whenever depreciation has been claimed and a gain results." },
      ],
      explanation: "Adjusted basis is $100,000 − $60,000 = $40,000, so the realized gain on a $110,000 sale is $70,000. Section 1245 recaptures the lesser of depreciation taken or realized gain as ordinary income — here $60,000. The remaining $10,000, representing appreciation above original cost, is Section 1231 gain.",
      difficulty: "HARD",
      questionType: "CALCULATION",
      tags: ["cost recovery", "Section 1245", "recapture"],
    },
    {
      question: "The holding period for property received as a gift, where the donee uses the donor's carryover basis, is:",
      options: [
        { label: "A", text: "Always short-term, beginning at the date of the gift", isCorrect: false, rationale: "The holding period tacks when carryover basis applies." },
        { label: "B", text: "Tacked, including the donor's holding period", isCorrect: true, rationale: "Correct — when the donee takes the donor's basis, the donor's holding period carries over as well." },
        { label: "C", text: "Always long-term regardless of the facts", isCorrect: false, rationale: "Automatic long-term treatment applies to inherited property, not gifts." },
        { label: "D", text: "Determined by the donee's intended holding period", isCorrect: false, rationale: "Intent does not determine the holding period." },
      ],
      explanation: "Where the donee uses the donor's carryover basis, the donor's holding period tacks on, so the combined period determines long- or short-term treatment. If instead the FMV loss basis is used, the holding period begins at the date of the gift. Inherited property, by contrast, is always long-term automatically.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["basis", "holding period"],
    },
  ],

  "property-transactions-gains-losses-and-like-kind-exchanges": [
    {
      question: "Following the Tax Cuts and Jobs Act, Section 1031 like-kind exchange treatment is available only for:",
      options: [
        { label: "A", text: "Any property held for productive use or investment", isCorrect: false, rationale: "This was the pre-2018 rule, which included personal property." },
        { label: "B", text: "Real property held for productive use in a trade or business or for investment", isCorrect: true, rationale: "Correct — like-kind exchange treatment is now limited to real property." },
        { label: "C", text: "Machinery and equipment used in a trade or business", isCorrect: false, rationale: "Personal property exchanges no longer qualify." },
        { label: "D", text: "Inventory held for resale", isCorrect: false, rationale: "Inventory and stock in trade have always been excluded from Section 1031." },
      ],
      explanation: "Section 1031 now applies only to exchanges of real property held for productive use in a trade or business or for investment. Personal property, intangibles, inventory, partnership interests, and securities do not qualify. Property held primarily for resale is excluded regardless of type.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["like-kind exchange", "Section 1031"],
    },
    {
      question: "In a qualifying like-kind exchange, a taxpayer realizes a gain of $50,000 and receives $20,000 of cash boot. How much gain is recognized?",
      options: [
        { label: "A", text: "$50,000", isCorrect: false, rationale: "The full realized gain is recognized only if boot equals or exceeds it." },
        { label: "B", text: "$20,000", isCorrect: true, rationale: "Correct — recognized gain is the lesser of realized gain ($50,000) or boot received ($20,000)." },
        { label: "C", text: "$30,000", isCorrect: false, rationale: "$30,000 is the deferred portion of the gain, not the recognized portion." },
        { label: "D", text: "$0", isCorrect: false, rationale: "Receiving boot triggers recognition to the extent of the boot." },
      ],
      explanation: "In a like-kind exchange, realized gain is recognized only to the extent of boot received — the lesser of realized gain or boot. Here $20,000 is recognized and $30,000 is deferred through a reduced basis in the replacement property. Realized losses are never recognized in a like-kind exchange, even when boot is received.",
      difficulty: "MEDIUM",
      questionType: "CALCULATION",
      tags: ["like-kind exchange", "boot"],
    },
    {
      question: "An individual has net capital losses exceeding capital gains for the year. What amount may be deducted against ordinary income?",
      options: [
        { label: "A", text: "The full amount of the net capital loss", isCorrect: false, rationale: "The deduction against ordinary income is statutorily capped." },
        { label: "B", text: "$3,000 ($1,500 if married filing separately), with the excess carried forward indefinitely", isCorrect: true, rationale: "Correct — this fixed statutory limit applies, and unused losses carry forward without expiration." },
        { label: "C", text: "$3,000, with the excess carried back three years", isCorrect: false, rationale: "Individuals carry capital losses forward, not back; carryback applies to corporations." },
        { label: "D", text: "No deduction is permitted against ordinary income", isCorrect: false, rationale: "A limited deduction is allowed." },
      ],
      explanation: "Individuals may deduct net capital losses against ordinary income up to $3,000 per year ($1,500 for married filing separately), carrying the excess forward indefinitely with its character preserved. Corporations differ sharply: they may deduct capital losses only against capital gains, carrying back three years and forward five.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["capital losses", "individual taxation"],
    },
    {
      question: "A taxpayer sells stock at a loss and repurchases substantially identical stock 20 days later. The result is:",
      options: [
        { label: "A", text: "The loss is fully deductible in the year of sale", isCorrect: false, rationale: "The wash sale rules disallow the loss." },
        { label: "B", text: "The loss is disallowed and added to the basis of the replacement stock", isCorrect: true, rationale: "Correct — a wash sale defers the loss by increasing the replacement shares' basis." },
        { label: "C", text: "The loss is permanently forfeited", isCorrect: false, rationale: "The loss is deferred, not lost — it is preserved in the new basis." },
        { label: "D", text: "The loss is converted to ordinary income", isCorrect: false, rationale: "No character conversion occurs." },
      ],
      explanation: "A wash sale occurs when substantially identical securities are acquired within 30 days before or after a loss sale — a 61-day window. The loss is disallowed, but it is not lost: it is added to the basis of the replacement securities and the holding period tacks. Note that the wash sale rules apply only to losses, never to gains.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["wash sales", "capital transactions"],
    },
  ],

  "individual-taxation-gross-income": [
    {
      question: "Which item is EXCLUDED from a recipient's gross income?",
      options: [
        { label: "A", text: "Interest earned on a corporate bond", isCorrect: false, rationale: "Corporate bond interest is fully taxable." },
        { label: "B", text: "Life insurance proceeds received by a beneficiary because of the insured's death", isCorrect: true, rationale: "Correct — death benefit proceeds are excluded from gross income." },
        { label: "C", text: "Unemployment compensation", isCorrect: false, rationale: "Unemployment compensation is fully includible in gross income." },
        { label: "D", text: "Gambling winnings", isCorrect: false, rationale: "Gambling winnings are includible; losses are deductible only to the extent of winnings for those who itemize." },
      ],
      explanation: "Life insurance proceeds paid by reason of the insured's death are excluded from gross income. Other common exclusions include municipal bond interest, gifts and inheritances received, qualified scholarships covering tuition and required fees, and most personal injury damages for physical injury. Unemployment compensation and gambling winnings are both taxable.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["gross income", "exclusions"],
    },
    {
      question: "A cash-basis taxpayer receives a check for services on December 30 but does not deposit it until January 3. The income is recognized in:",
      options: [
        { label: "A", text: "The year of deposit, because that is when funds became available", isCorrect: false, rationale: "Constructive receipt occurs when the check is available, not when deposited." },
        { label: "B", text: "The year the check was received", isCorrect: true, rationale: "Correct — under constructive receipt, income is recognized when it is made available without substantial restriction." },
        { label: "C", text: "Either year, at the taxpayer's election", isCorrect: false, rationale: "Timing is not elective." },
        { label: "D", text: "Neither year, since the amount was not yet spent", isCorrect: false, rationale: "Spending the funds is irrelevant to recognition." },
      ],
      explanation: "The constructive receipt doctrine treats income as received when it is credited to the taxpayer's account, set apart, or otherwise made available without substantial limitation — even if not physically reduced to possession. A taxpayer cannot defer income simply by declining to cash or deposit a check already received.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["gross income", "constructive receipt"],
    },
    {
      question: "A taxpayer received a state income tax refund for a prior year in which the taxpayer claimed the standard deduction. The refund is:",
      options: [
        { label: "A", text: "Fully includible in gross income", isCorrect: false, rationale: "Inclusion depends on whether a tax benefit was obtained in the prior year." },
        { label: "B", text: "Excluded from gross income under the tax benefit rule", isCorrect: true, rationale: "Correct — no deduction was taken for state taxes, so no tax benefit arose and the refund is not income." },
        { label: "C", text: "Includible only to the extent it exceeds $1,000", isCorrect: false, rationale: "No such threshold exists." },
        { label: "D", text: "Treated as a reduction of the current year's state tax deduction", isCorrect: false, rationale: "That is not the mechanism the tax benefit rule uses here." },
      ],
      explanation: "Under the tax benefit rule, a recovery is included in income only to the extent the earlier deduction produced a tax benefit. A taxpayer who claimed the standard deduction never deducted state income taxes, so the refund produces no income. A taxpayer who itemized and deducted those taxes would include the refund to the extent of the benefit received.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["gross income", "tax benefit rule"],
    },
    {
      question: "Which type of income is generally treated as portfolio income rather than passive income?",
      options: [
        { label: "A", text: "Income from a rental real estate activity in which the taxpayer does not materially participate", isCorrect: false, rationale: "Rental activities are generally passive by default." },
        { label: "B", text: "Interest and dividends from investments", isCorrect: true, rationale: "Correct — interest, dividends, annuities, and royalties not derived in the ordinary course of business are portfolio income." },
        { label: "C", text: "Income from a limited partnership interest", isCorrect: false, rationale: "A limited partner generally does not materially participate, making the income passive." },
        { label: "D", text: "Income from a business in which the taxpayer does not materially participate", isCorrect: false, rationale: "Non-material participation in a trade or business produces passive income." },
      ],
      explanation: "Income falls into three baskets: active (wages and businesses with material participation), passive (rentals and businesses without material participation), and portfolio (interest, dividends, annuities, and royalties). The distinction matters because passive losses may generally offset only passive income — they cannot shelter active or portfolio income.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["gross income", "passive activity"],
    },
  ],
};
