import type { SubjectSeed } from "./types";

export const reg: SubjectSeed = {
  slug: "reg",
  name: "Taxation and Regulation",
  shortName: "REG",
  type: "CORE",
  description:
    "REG covers federal taxation of individuals, entities, and property transactions, along with business law and professional ethics. Roughly three-quarters of the exam is tax. It rewards candidates who can apply rules to specific numbers, not just recite them.",
  difficulty: "HARD",
  estimatedHours: 130,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/reg-cpa-exam-blueprint",
  order: 3,
  topics: [
    {
      slug: "circular-230-and-practitioner-ethics",
      title: "Circular 230 & Practitioner Ethics",
      shortDescription: "IRS rules governing tax practitioner conduct, due diligence, and conflicts of interest.",
      blueprintArea: "Area I: Ethics, Professional Responsibilities & Federal Tax Procedures",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 1,
      studyMaterialHtml: `
<h2>Who Circular 230 covers</h2>
<p>Circular 230 governs practice before the IRS by attorneys, CPAs, enrolled agents, enrolled actuaries, and enrolled retirement plan agents. "Practice" means communicating with the IRS on a taxpayer's behalf — representation, correspondence, filing documents — and includes preparing and filing returns.</p>

<h3>Core duties</h3>
<ul>
<li><strong>Due diligence</strong> — in preparing returns, in determining the correctness of representations to the IRS and to clients</li>
<li><strong>Reliance on others</strong> — permitted if reasonable care is used in engaging, supervising, and evaluating the person</li>
<li><strong>Prompt disposition</strong> of pending matters; no unreasonable delay</li>
<li><strong>Return client records</strong> on request — even if fees are unpaid (state law may allow retaining the practitioner's own work product)</li>
<li><strong>Notify the client of errors or omissions</strong> discovered on a filed return and the consequences — but the practitioner may <em>not</em> notify the IRS without client consent</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> When a practitioner discovers a client error, the duty is to <strong>inform the client</strong> — not to correct it unilaterally, not to inform the IRS, and not necessarily to resign. If the client refuses to correct a material error, the practitioner should consider whether to continue the relationship.</p></div>

<h3>Fees</h3>
<table>
<thead><tr><th>Fee type</th><th>Permitted?</th></tr></thead>
<tbody>
<tr><td>Unconscionable fee</td><td>Never</td></tr>
<tr><td>Contingent fee for preparing an <strong>original</strong> return</td><td>Not permitted</td></tr>
<tr><td>Contingent fee for an <strong>amended return / refund claim</strong> filed within 120 days of a written IRS examination notice</td><td>Permitted</td></tr>
<tr><td>Contingent fee for an IRS examination, judicial proceeding, or claim for interest/penalty refund</td><td>Permitted</td></tr>
</tbody>
</table>

<h3>Conflicts of interest</h3>
<p>A conflict exists if representing one client is directly adverse to another, or if there is a significant risk that representation will be materially limited. Representation may continue only if the practitioner reasonably believes competent representation is possible, it is not prohibited by law, and each client gives <strong>informed written consent</strong> — retained for at least 36 months.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Distinguish Circular 230 (IRS discipline: censure, suspension, disbarment, monetary penalty) from the AICPA Statements on Standards for Tax Services (professional standards) and from the IRC preparer penalties (§6694 and friends). Questions often set up which body's rules apply.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Circular 230 covers attorneys, CPAs, EAs, enrolled actuaries, ERPAs practicing before the IRS</li>
<li>Client error discovered → <strong>tell the client</strong>; do not tell the IRS without consent; do not unilaterally correct</li>
<li>Return client records on request even if fees unpaid</li>
<li>Contingent fees: banned for original returns; allowed for amended returns/refund claims within 120 days of a written exam notice, IRS exams, and judicial proceedings</li>
<li>Conflicts: need informed <strong>written</strong> consent, retained 36 months</li>
<li>Sanctions: censure, suspension, disbarment, monetary penalty</li>
</ul>
`,
      mcqs: [
        {
          question: "A CPA discovers that a client's previously filed return contains a material error. Under Circular 230, what must the CPA do?",
          options: [
            { label: "A", text: "Notify the IRS of the error immediately", isCorrect: false, rationale: "The practitioner may not disclose the error to the IRS without the client's consent — doing so would breach confidentiality." },
            { label: "B", text: "Advise the client of the error and the consequences of not correcting it", isCorrect: true, rationale: "Correct — Circular 230 requires the practitioner to promptly inform the client of the error or omission and the consequences under the Code and regulations." },
            { label: "C", text: "File an amended return on the client's behalf without discussing it", isCorrect: false, rationale: "The practitioner cannot unilaterally file an amended return; the decision belongs to the client." },
            { label: "D", text: "Immediately withdraw from the engagement", isCorrect: false, rationale: "Withdrawal may be considered if the client refuses to act, but the immediate required step is notifying the client." },
          ],
          explanation: "Circular 230 requires a practitioner who discovers a client's error or omission to advise the client promptly of the error and the consequences. The practitioner cannot notify the IRS without client consent, and cannot correct the return unilaterally.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["Circular 230", "ethics"],
        },
        {
          question: "Which contingent fee arrangement is PERMITTED under Circular 230?",
          options: [
            { label: "A", text: "A fee based on a percentage of the refund shown on an original tax return", isCorrect: false, rationale: "Contingent fees for preparing original returns are prohibited." },
            { label: "B", text: "A fee contingent on the outcome of an IRS examination of an already-filed return", isCorrect: true, rationale: "Correct — contingent fees are permitted for services in connection with an IRS examination or challenge to an original return, among other specified circumstances." },
            { label: "C", text: "A fee based on the tax savings achieved on a first-time return filing", isCorrect: false, rationale: "This is a contingent fee tied to an original return, which is prohibited." },
            { label: "D", text: "An unconscionable fee if disclosed to the client in writing", isCorrect: false, rationale: "Unconscionable fees are prohibited regardless of disclosure or consent." },
          ],
          explanation: "Circular 230 generally prohibits contingent fees for preparing original returns, but permits them for services rendered in connection with an IRS examination or challenge, a claim for refund filed within 120 days of a written notice of examination, a claim for credit or refund of interest and penalties, and judicial proceedings.",
          difficulty: "MEDIUM",
          questionType: "EXCEPTION",
          tags: ["Circular 230", "fees"],
        },
      ],
    },
    {
      slug: "irs-procedures-and-appeals",
      title: "IRS Procedures & Appeals",
      shortDescription: "Audits, the appeals process, statutes of limitation, and where tax disputes get litigated.",
      blueprintArea: "Area I: Ethics, Professional Responsibilities & Federal Tax Procedures",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 2,
      studyMaterialHtml: `
<h2>Statutes of limitation</h2>
<table>
<thead><tr><th>Situation</th><th>Assessment period</th></tr></thead>
<tbody>
<tr><td>General rule</td><td><strong>3 years</strong> from the later of the due date or the filing date</td></tr>
<tr><td>Omission of more than 25% of gross income</td><td><strong>6 years</strong></td></tr>
<tr><td>Fraudulent return or no return filed</td><td><strong>Unlimited</strong></td></tr>
<tr><td>Refund claim by taxpayer</td><td>Later of <strong>3 years</strong> from filing or <strong>2 years</strong> from payment</td></tr>
</tbody>
</table>

<h3>The dispute path</h3>
<ol>
<li><strong>Examination</strong> — correspondence, office, or field audit</li>
<li><strong>30-day letter</strong> — proposes adjustments and offers an Appeals conference</li>
<li><strong>Appeals Office</strong> — independent; settles based on hazards of litigation</li>
<li><strong>90-day letter (statutory notice of deficiency)</strong> — the "ticket to Tax Court"</li>
<li><strong>Litigation</strong></li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The <strong>U.S. Tax Court</strong> is the only forum where the taxpayer can litigate <em>without first paying</em> the disputed tax. To sue in the U.S. District Court or the Court of Federal Claims, the taxpayer must pay first and sue for a refund. The District Court is also the only forum offering a <strong>jury trial</strong>.</p></div>

<h3>Key taxpayer penalties</h3>
<table>
<thead><tr><th>Penalty</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Failure to file</td><td>5% per month, max 25% (minimum applies if &gt;60 days late)</td></tr>
<tr><td>Failure to pay</td><td>0.5% per month, max 25%</td></tr>
<tr><td>Accuracy-related (negligence or substantial understatement)</td><td>20% of the underpayment</td></tr>
<tr><td>Civil fraud</td><td>75% of the underpayment attributable to fraud</td></tr>
</tbody>
</table>
<p>When failure-to-file and failure-to-pay both apply in the same month, the failure-to-file penalty is reduced by the failure-to-pay penalty.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Substantial understatement" for an individual generally means the understatement exceeds the greater of 10% of the tax required to be shown or $5,000. Reasonable cause and good faith is a defense to accuracy-related penalties — but never to fraud.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Assessment SOL: <strong>3 years</strong> normally; <strong>6 years</strong> if &gt;25% of gross income omitted; <strong>unlimited</strong> for fraud or no return</li>
<li>Refund claim: later of 3 years from filing or 2 years from payment</li>
<li>30-day letter → Appeals; 90-day letter (notice of deficiency) → Tax Court</li>
<li><strong>Tax Court = no prepayment required</strong>; District Court/Court of Federal Claims require payment first</li>
<li><strong>District Court = only jury trial</strong> option</li>
<li>Penalties: FTF 5%/mo (max 25%), FTP 0.5%/mo, accuracy 20%, fraud 75%</li>
</ul>
`,
      mcqs: [
        {
          question: "A taxpayer wishes to dispute a proposed deficiency without first paying the disputed amount. Which court must the taxpayer use?",
          options: [
            { label: "A", text: "U.S. District Court", isCorrect: false, rationale: "The District Court requires the taxpayer to pay the tax first and then sue for a refund." },
            { label: "B", text: "U.S. Tax Court", isCorrect: true, rationale: "Correct — the Tax Court is the only forum in which a taxpayer can litigate a deficiency before paying it." },
            { label: "C", text: "U.S. Court of Federal Claims", isCorrect: false, rationale: "This court also requires full payment before filing a refund suit." },
            { label: "D", text: "U.S. Court of Appeals", isCorrect: false, rationale: "The Court of Appeals hears appeals; it is not a trial-level forum for initiating a tax dispute." },
          ],
          explanation: "The U.S. Tax Court is the only trial forum where a taxpayer may litigate a deficiency without prepaying the tax. Both the U.S. District Court and the U.S. Court of Federal Claims require payment first, followed by a suit for refund — and only the District Court offers a jury trial.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["IRS procedures", "litigation"],
        },
        {
          question: "A taxpayer filed a return omitting gross income equal to 30% of the gross income reported. How long does the IRS have to assess additional tax?",
          options: [
            { label: "A", text: "Three years from the later of the due date or filing date", isCorrect: false, rationale: "The three-year period applies to the general rule, not where more than 25% of gross income is omitted." },
            { label: "B", text: "Six years from the later of the due date or filing date", isCorrect: true, rationale: "Correct — an omission of more than 25% of gross income extends the assessment statute of limitations to six years." },
            { label: "C", text: "The statute is unlimited", isCorrect: false, rationale: "An unlimited period applies to fraudulent returns or where no return was filed, not to a simple substantial omission." },
            { label: "D", text: "Two years from the date the tax was paid", isCorrect: false, rationale: "This relates to the taxpayer's refund claim window, not the IRS assessment period." },
          ],
          explanation: "The general assessment statute of limitations is three years, but it extends to six years when the taxpayer omits gross income exceeding 25% of the gross income stated on the return. Fraud or failure to file leaves the statute open indefinitely.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["statute of limitations"],
        },
      ],
    },
    {
      slug: "business-law-contracts",
      title: "Business Law: Contracts",
      shortDescription: "Formation, the Statute of Frauds, UCC vs. common law, performance, breach, and remedies.",
      blueprintArea: "Area II: Business Law",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 3,
      studyMaterialHtml: `
<h2>Which law applies?</h2>
<table>
<thead><tr><th>Subject of the contract</th><th>Governing law</th></tr></thead>
<tbody>
<tr><td>Sale of <strong>goods</strong> (movable, tangible)</td><td>UCC Article 2</td></tr>
<tr><td>Services, real estate, employment, intangibles</td><td>Common law</td></tr>
<tr><td>Mixed contract</td><td>Whichever element <strong>predominates</strong></td></tr>
</tbody>
</table>

<h3>Formation: offer, acceptance, consideration</h3>
<ul>
<li><strong>Offer</strong> — definite terms, communicated, showing present intent to contract</li>
<li><strong>Acceptance</strong> — under common law it must <strong>mirror</strong> the offer; under the UCC, additional terms between merchants can become part of the contract unless they materially alter it, the offer limits acceptance, or timely objection is made</li>
<li><strong>Consideration</strong> — bargained-for exchange. Past consideration is not consideration. Under the <strong>UCC a modification needs no new consideration</strong> (good faith is enough); under <strong>common law a modification generally does</strong>.</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — the mailbox rule:</strong> Acceptance is effective <strong>when dispatched</strong>; revocations, rejections, and counteroffers are effective <strong>when received</strong>. So an acceptance mailed before a revocation arrives creates a contract.</p></div>

<h3>Statute of Frauds — "MY LEGS"</h3>
<ul>
<li><strong>M</strong>arriage — contracts in consideration of marriage</li>
<li><strong>Y</strong>ear — cannot be performed within one year</li>
<li><strong>L</strong>and — interests in real property</li>
<li><strong>E</strong>xecutor — personal promise to pay estate debts</li>
<li><strong>G</strong>oods $500 or more (UCC)</li>
<li><strong>S</strong>uretyship — promise to answer for another's debt</li>
</ul>

<h3>Remedies</h3>
<table>
<thead><tr><th>Remedy</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Compensatory damages</td><td>Put the injured party where performance would have</td></tr>
<tr><td>Consequential damages</td><td>Foreseeable special losses the breaching party knew of</td></tr>
<tr><td>Liquidated damages</td><td>Agreed amount — enforceable only if reasonable, not a penalty</td></tr>
<tr><td>Specific performance</td><td>For unique goods and real estate; never for personal services</td></tr>
<tr><td>Rescission / restitution</td><td>Unwind the contract and restore what was given</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A contract induced by <strong>fraud</strong>, duress, or undue influence is generally <strong>voidable</strong> by the injured party (not automatically void). A contract with an illegal purpose is <strong>void</strong>.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Goods → UCC Art. 2; services/real estate → common law; mixed → whichever predominates</li>
<li>Common law acceptance must mirror the offer; UCC allows additional terms between merchants</li>
<li><strong>UCC modification needs no new consideration</strong>; common law modification does</li>
<li>Mailbox rule: acceptance effective on <strong>dispatch</strong>; everything else on <strong>receipt</strong></li>
<li>Statute of Frauds = <strong>MY LEGS</strong> (Marriage, Year, Land, Executor, Goods ≥$500, Suretyship)</li>
<li>Specific performance: unique goods & real estate, never personal services</li>
<li>Fraud/duress → voidable; illegal purpose → void</li>
</ul>
`,
      mcqs: [
        {
          question: "On June 1, a merchant seller mails an offer to sell goods. On June 3, the seller mails a revocation. On June 4, the buyer mails an acceptance. On June 5, the buyer receives the revocation. Is there a contract?",
          options: [
            { label: "A", text: "No, because the revocation was mailed before the acceptance", isCorrect: false, rationale: "Revocations are effective on receipt, not dispatch, so the June 3 mailing did not terminate the offer before acceptance." },
            { label: "B", text: "Yes, because the acceptance was effective when mailed on June 4, before the revocation was received", isCorrect: true, rationale: "Correct — under the mailbox rule, acceptance is effective on dispatch while revocation is effective only on receipt, so a contract formed on June 4." },
            { label: "C", text: "No, because the buyer received the revocation before performance began", isCorrect: false, rationale: "The contract was already formed when the acceptance was dispatched; later receipt of the revocation is irrelevant." },
            { label: "D", text: "Yes, but only if the buyer is also a merchant", isCorrect: false, rationale: "The mailbox rule applies regardless of merchant status." },
          ],
          explanation: "Under the mailbox rule, an acceptance is effective when dispatched, while revocations, rejections, and counteroffers are effective only when received. Because the acceptance was mailed on June 4 and the revocation was not received until June 5, a binding contract was formed.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["contracts", "mailbox rule"],
        },
        {
          question: "A buyer and seller of goods orally agree to increase the contract price from $10,000 to $11,000 because of a supplier cost increase. No new consideration is exchanged. Under the UCC, is the modification enforceable?",
          options: [
            { label: "A", text: "No, because a contract modification always requires new consideration", isCorrect: false, rationale: "That is the common law rule; the UCC eliminates the consideration requirement for modifications." },
            { label: "B", text: "Yes, if the modification was made in good faith — although a written record is needed since the contract price exceeds $500", isCorrect: true, rationale: "Correct — UCC §2-209 allows modification without new consideration if made in good faith, but the modified contract must satisfy the Statute of Frauds for goods of $500 or more." },
            { label: "C", text: "No, because oral modifications of written contracts are never enforceable", isCorrect: false, rationale: "Oral modifications can be enforceable unless the Statute of Frauds or a no-oral-modification clause applies." },
            { label: "D", text: "Yes, and no writing is required regardless of amount", isCorrect: false, rationale: "The modified contract must still satisfy the Statute of Frauds, which applies to goods of $500 or more." },
          ],
          explanation: "Under UCC §2-209 a modification of a contract for the sale of goods needs no new consideration, provided it is sought in good faith. However, the contract as modified must still satisfy the Statute of Frauds — meaning a written record is required where the price is $500 or more.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["contracts", "UCC"],
        },
      ],
    },
    {
      slug: "business-law-agency-and-business-structures",
      title: "Business Law: Agency & Business Structures",
      shortDescription: "Agency authority and liability, plus the legal characteristics of partnerships, LLCs, and corporations.",
      blueprintArea: "Area II: Business Law",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 4,
      studyMaterialHtml: `
<h2>Three kinds of authority</h2>
<table>
<thead><tr><th>Type</th><th>Source</th></tr></thead>
<tbody>
<tr><td><strong>Actual express</strong></td><td>Principal's words — spoken or written</td></tr>
<tr><td><strong>Actual implied</strong></td><td>Reasonably necessary to carry out express authority, or customary for the position</td></tr>
<tr><td><strong>Apparent</strong></td><td>The <em>principal's</em> conduct causes a third party to reasonably believe authority exists</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Apparent authority comes from the <strong>principal's</strong> manifestations to the third party — never from the agent's own claims. That's why an agent who says "I have authority" creates none. Apparent authority can survive termination of actual authority until third parties get proper notice.</p></div>

<h3>Duties</h3>
<ul>
<li><strong>Agent owes the principal</strong>: loyalty, obedience, reasonable care, accounting, notification</li>
<li><strong>Principal owes the agent</strong>: compensation, reimbursement, indemnification, cooperation</li>
</ul>

<h3>Business entity comparison</h3>
<table>
<thead><tr><th>Entity</th><th>Owner liability</th><th>Federal tax treatment (default)</th></tr></thead>
<tbody>
<tr><td>Sole proprietorship</td><td>Unlimited personal</td><td>Schedule C — no separate entity</td></tr>
<tr><td>General partnership</td><td>Unlimited, joint and several</td><td>Flow-through (Form 1065)</td></tr>
<tr><td>Limited partnership</td><td>General partner unlimited; limited partners limited to investment</td><td>Flow-through</td></tr>
<tr><td>LLP</td><td>Partners shielded from other partners' malpractice</td><td>Flow-through</td></tr>
<tr><td>LLC</td><td>Limited for all members</td><td>Single member → disregarded; multi-member → partnership; may elect corporate treatment</td></tr>
<tr><td>C corporation</td><td>Limited</td><td>Entity-level tax, then dividends taxed again</td></tr>
<tr><td>S corporation</td><td>Limited</td><td>Flow-through (Form 1120-S), with eligibility restrictions</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A limited partner who takes part in <strong>control</strong> of the business risks losing limited liability protection to third parties who reasonably believed the limited partner was a general partner.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Authority: actual express, actual implied, <strong>apparent</strong> (arises from the principal's conduct, never the agent's claims)</li>
<li>Agent duties: loyalty, obedience, care, accounting, notification</li>
<li>GP → unlimited joint & several; LP → GP unlimited, limited partners limited; LLP → shielded from partners' malpractice</li>
<li>LLC: single member disregarded, multi-member taxed as partnership by default, can elect corporate</li>
<li>C corp double tax; S corp flow-through with eligibility limits</li>
<li>Limited partner participating in control can lose limited liability</li>
</ul>
`,
      mcqs: [
        {
          question: "A principal fires an agent but does not notify a long-standing supplier who had regularly dealt with that agent. The former agent places an order with the supplier in the principal's name. Who is liable to the supplier?",
          options: [
            { label: "A", text: "No one, because the agent's actual authority terminated upon firing", isCorrect: false, rationale: "Termination of actual authority does not automatically end apparent authority as to third parties who lack notice." },
            { label: "B", text: "The principal, because apparent authority continued until the supplier received notice", isCorrect: true, rationale: "Correct — apparent authority persists with respect to third parties who previously dealt with the agent until they receive appropriate notice of termination." },
            { label: "C", text: "The supplier, for failing to verify the agent's status", isCorrect: false, rationale: "The third party is entitled to rely on the appearance of authority the principal created." },
            { label: "D", text: "Only the former agent, in all circumstances", isCorrect: false, rationale: "The principal is bound where apparent authority existed; the agent may then be liable to the principal." },
          ],
          explanation: "Apparent authority arises from the principal's manifestations to third parties. When actual authority is terminated, the principal must give actual notice to third parties who previously dealt with the agent; otherwise apparent authority persists and the principal remains bound.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["agency", "apparent authority"],
        },
      ],
    },
    {
      slug: "debtor-creditor-and-bankruptcy",
      title: "Debtor-Creditor & Bankruptcy",
      shortDescription: "Secured transactions, perfection and priority, suretyship, and the bankruptcy claim hierarchy.",
      blueprintArea: "Area II: Business Law",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 5,
      studyMaterialHtml: `
<h2>Secured transactions: attachment then perfection</h2>
<p><strong>Attachment</strong> makes the security interest enforceable against the <em>debtor</em>. It requires: (1) value given by the creditor, (2) the debtor has rights in the collateral, and (3) a security agreement authenticated by the debtor (or the creditor takes possession/control).</p>
<p><strong>Perfection</strong> makes it effective against <em>third parties</em>. Methods: filing a financing statement (most common), possession, control (deposit accounts, investment property), or automatic perfection (a PMSI in consumer goods).</p>

<h3>Priority rules</h3>
<table>
<thead><tr><th>Contest</th><th>Winner</th></tr></thead>
<tbody>
<tr><td>Perfected vs. unperfected</td><td>Perfected</td></tr>
<tr><td>Two perfected creditors</td><td>First to <strong>file or perfect</strong></td></tr>
<tr><td>Two unperfected creditors</td><td>First to attach</td></tr>
<tr><td>PMSI in <strong>inventory</strong></td><td>Priority if perfected <em>before</em> the debtor receives the goods <strong>and</strong> notice is given to existing secured parties</td></tr>
<tr><td>PMSI in <strong>non-inventory</strong> (equipment)</td><td>Priority if perfected within <strong>20 days</strong> of the debtor receiving possession</td></tr>
<tr><td>Buyer in the ordinary course of business</td><td>Takes free of a security interest created by the seller, even if perfected</td></tr>
</tbody>
</table>

<h3>Bankruptcy chapters</h3>
<ul>
<li><strong>Chapter 7</strong> — liquidation; trustee sells non-exempt assets and distributes</li>
<li><strong>Chapter 11</strong> — business reorganization</li>
<li><strong>Chapter 13</strong> — individual with regular income repays under a plan</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — order of distribution:</strong> <strong>Secured creditors</strong> are paid first from their collateral (any shortfall becomes an unsecured claim). Then come priority unsecured claims, in order: domestic support obligations; administrative expenses; gap creditors; wages within limits; employee benefit plan contributions; certain farmer/fisherman claims; consumer deposits; certain taxes. General unsecured creditors come next, and equity holders last.</p></div>

<h3>Avoidable transfers</h3>
<ul>
<li><strong>Preference</strong> — payment to a creditor on an antecedent debt within <strong>90 days</strong> before filing (one year for insiders) while insolvent, giving that creditor more than it would receive in Chapter 7</li>
<li><strong>Fraudulent transfer</strong> — transfer with intent to hinder/delay/defraud creditors, or for less than reasonably equivalent value while insolvent, within two years</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Debts <strong>not discharged</strong> include most taxes, student loans (absent undue hardship), domestic support, debts from fraud or willful and malicious injury, and DUI-related personal injury claims.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Attachment (vs. debtor) = value + debtor's rights + authenticated security agreement</li>
<li>Perfection (vs. third parties) = filing, possession, control, or automatic (PMSI in consumer goods)</li>
<li>Priority: perfected beats unperfected; between perfected, <strong>first to file or perfect</strong></li>
<li>PMSI inventory → perfect before delivery + notify; PMSI equipment → within <strong>20 days</strong></li>
<li>Buyer in ordinary course takes free of the seller's security interest</li>
<li>Preference window: <strong>90 days</strong> (1 year for insiders)</li>
<li>Distribution: secured → priority unsecured (support, admin, wages…) → general unsecured → equity</li>
</ul>
`,
      mcqs: [
        {
          question: "A creditor takes a purchase money security interest in equipment and files a financing statement 15 days after the debtor receives possession. An earlier creditor had already perfected a security interest covering all of the debtor's equipment. Who has priority in the new equipment?",
          options: [
            { label: "A", text: "The earlier perfected creditor, because it filed first", isCorrect: false, rationale: "A properly perfected PMSI in non-inventory collateral takes priority over an earlier-filed general security interest." },
            { label: "B", text: "The PMSI creditor, because it perfected within 20 days of the debtor receiving possession", isCorrect: true, rationale: "Correct — a PMSI in non-inventory collateral has priority over a conflicting earlier-perfected interest if it is perfected within 20 days after the debtor takes possession." },
            { label: "C", text: "The two creditors share pro rata", isCorrect: false, rationale: "UCC priority rules produce a ranking, not pro rata sharing." },
            { label: "D", text: "Neither, because the PMSI attached after the general security interest", isCorrect: false, rationale: "Timing of attachment does not defeat the PMSI superpriority rule." },
          ],
          explanation: "A purchase money security interest in non-inventory collateral such as equipment obtains priority over a conflicting earlier-perfected security interest if it is perfected before or within 20 days after the debtor receives possession of the collateral. (For inventory, the PMSI must be perfected before delivery and prior notice given to existing secured parties.)",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["secured transactions", "PMSI"],
        },
      ],
    },
    {
      slug: "federal-tax-procedures-and-penalties",
      title: "Federal Tax Procedures & Penalties",
      shortDescription: "Filing requirements, estimated tax safe harbors, and preparer penalties under the Internal Revenue Code.",
      blueprintArea: "Area I: Ethics, Professional Responsibilities & Federal Tax Procedures",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 6,
      studyMaterialHtml: `
<h2>Estimated tax safe harbors (individuals)</h2>
<p>No underpayment penalty applies if withholding plus estimated payments equal at least the <strong>lesser</strong> of:</p>
<ul>
<li><strong>90%</strong> of the current year's tax, or</li>
<li><strong>100%</strong> of the prior year's tax — increased to <strong>110%</strong> if prior-year AGI exceeded $150,000</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Prior-year AGI was $200,000 and prior-year tax was $40,000. Current-year tax turns out to be $60,000. The safe harbor is the lesser of 90% × $60,000 = $54,000, or 110% × $40,000 = $44,000. Paying $44,000 in withholding and estimates avoids the penalty even though the actual liability is far higher.</p></div>

<h3>Preparer penalties (IRC §6694)</h3>
<table>
<thead><tr><th>Position type</th><th>Standard to avoid penalty</th></tr></thead>
<tbody>
<tr><td>Undisclosed position</td><td><strong>Substantial authority</strong> (roughly 40% likelihood)</td></tr>
<tr><td>Disclosed position</td><td><strong>Reasonable basis</strong> (roughly 20% likelihood)</td></tr>
<tr><td>Tax shelter / reportable transaction</td><td><strong>More likely than not</strong> (&gt;50%)</td></tr>
</tbody>
</table>
<p>§6694(a) applies to an unreasonable position — the greater of $1,000 or 50% of the income derived. §6694(b) applies to willful or reckless conduct — the greater of $5,000 or 75% of income derived.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The hierarchy of confidence levels, weakest to strongest: <strong>reasonable basis</strong> → <strong>substantial authority</strong> → <strong>more likely than not</strong> → <strong>should</strong> → <strong>will</strong>. Disclosure lowers the standard the preparer must meet, which is why Form 8275 disclosure matters.</p></div>

<h3>Other preparer requirements</h3>
<ul>
<li>Sign the return and include the <strong>PTIN</strong></li>
<li>Furnish a copy to the taxpayer</li>
<li>Retain records for three years</li>
<li>Exercise due diligence on refundable credits (EITC, CTC, AOTC) and head-of-household status — Form 8867</li>
</ul>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Individual estimated tax safe harbor: lesser of <strong>90% current year</strong> or <strong>100% prior year</strong> (<strong>110%</strong> if prior-year AGI &gt; $150,000)</li>
<li>§6694 standards: undisclosed → substantial authority; disclosed → reasonable basis; tax shelter → more likely than not</li>
<li>§6694(a) unreasonable position: greater of $1,000 or 50% of income derived; §6694(b) willful/reckless: greater of $5,000 or 75%</li>
<li>Confidence ladder: reasonable basis &lt; substantial authority &lt; more likely than not &lt; should &lt; will</li>
<li>Preparer must sign, use PTIN, give the taxpayer a copy, keep records 3 years, complete Form 8867 due diligence</li>
</ul>
`,
      mcqs: [
        {
          question: "A taxpayer's prior-year AGI was $250,000 with a tax liability of $50,000. To avoid an underpayment penalty for the current year using the prior-year safe harbor, how much must the taxpayer pay in through withholding and estimates?",
          options: [
            { label: "A", text: "$45,000 (90% of prior-year tax)", isCorrect: false, rationale: "The 90% test applies to the current year's tax, not the prior year's." },
            { label: "B", text: "$50,000 (100% of prior-year tax)", isCorrect: false, rationale: "The 100% figure applies only when prior-year AGI is $150,000 or less." },
            { label: "C", text: "$55,000 (110% of prior-year tax)", isCorrect: true, rationale: "Correct — because prior-year AGI exceeded $150,000, the prior-year safe harbor is 110% of the prior year's tax: 110% × $50,000 = $55,000." },
            { label: "D", text: "The full current-year liability, whatever it turns out to be", isCorrect: false, rationale: "The safe harbors exist precisely so the taxpayer need not predict the current-year liability exactly." },
          ],
          explanation: "Individuals avoid the estimated tax underpayment penalty by paying the lesser of 90% of the current year's tax or 100% of the prior year's tax. When prior-year AGI exceeds $150,000, the prior-year percentage rises to 110% — here, 110% × $50,000 = $55,000.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["estimated tax", "penalties"],
        },
      ],
    },
    {
      slug: "property-transactions-basis-and-cost-recovery",
      title: "Property Transactions: Basis & Cost Recovery",
      shortDescription: "Determining basis, MACRS depreciation, Section 179 expensing, and 100% bonus depreciation under OBBBA.",
      blueprintArea: "Area III: Federal Taxation of Property Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 7,
      studyMaterialHtml: `
<h2>Determining basis</h2>
<table>
<thead><tr><th>How acquired</th><th>Basis</th></tr></thead>
<tbody>
<tr><td>Purchase</td><td>Cost, including sales tax, freight, and installation</td></tr>
<tr><td><strong>Gift</strong></td><td>Generally the donor's basis (carryover). But for computing a <strong>loss</strong>, use the lesser of donor's basis or FMV at the date of gift — the "double basis" rule</td></tr>
<tr><td><strong>Inheritance</strong></td><td><strong>FMV at date of death</strong> (or alternate valuation date if elected) — a step-up (or step-down). Always long-term holding period</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (double basis):</strong> Donor's basis $10,000, FMV at gift $6,000. If the donee later sells for $12,000 → gain of $2,000 (use $10,000). Sells for $4,000 → loss of $2,000 (use $6,000). Sells for $8,000 → <strong>no gain and no loss</strong>, because the price falls between the two bases.</p></div>

<h3>MACRS at a glance</h3>
<table>
<thead><tr><th>Property</th><th>Recovery period</th><th>Method / convention</th></tr></thead>
<tbody>
<tr><td>Equipment, machinery</td><td>5 or 7 years</td><td>200% declining balance; half-year (or mid-quarter if &gt;40% placed in service in Q4)</td></tr>
<tr><td>Residential rental</td><td>27.5 years</td><td>Straight-line, mid-month</td></tr>
<tr><td>Nonresidential real</td><td>39 years</td><td>Straight-line, mid-month</td></tr>
</tbody>
</table>

<h3>Section 179 and bonus depreciation after OBBBA</h3>
<div class="callout callout-important"><p><strong>IMPORTANT — the One Big Beautiful Bill Act (OBBBA), testable on REG and TCP from July 1, 2026:</strong></p>
<ul>
<li><strong>Bonus depreciation is restored to 100%</strong> and made permanent for qualifying property acquired after January 19, 2025 — it has <strong>no annual dollar cap</strong> and <strong>can create or increase a net operating loss</strong>.</li>
<li><strong>Section 179</strong> expensing limit increased to <strong>$2.5 million</strong>, with the phase-out threshold beginning at <strong>$4 million</strong> of property placed in service.</li>
</ul></div>

<p>Key distinction: §179 is <strong>limited to taxable business income</strong> (excess carries forward) and phases out dollar-for-dollar above the threshold. Bonus depreciation has neither limitation. Order of application: §179 first, then bonus, then regular MACRS on any remaining basis.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Land is never depreciated. Land improvements (fences, parking lots) are 15-year property and can qualify for bonus depreciation.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Gift basis: carryover for gain; <strong>lesser of donor's basis or FMV</strong> for loss (no gain/loss between the two)</li>
<li>Inherited basis: <strong>FMV at death</strong>, automatically long-term</li>
<li>MACRS: equipment 5/7 yr 200% DB half-year (mid-quarter if &gt;40% in Q4); residential rental 27.5 yr; nonresidential 39 yr, both mid-month straight-line</li>
<li><strong>OBBBA: bonus depreciation 100% permanent</strong> (property acquired after Jan 19, 2025), no dollar cap, <strong>can create an NOL</strong></li>
<li><strong>OBBBA: §179 limit $2.5M, phase-out from $4M</strong>; §179 limited to business income (carries forward)</li>
<li>Order: §179 → bonus → MACRS. Land is never depreciated.</li>
</ul>
`,
      mcqs: [
        {
          question: "Under the One Big Beautiful Bill Act, which statement about bonus depreciation is correct for qualifying property acquired after January 19, 2025?",
          options: [
            { label: "A", text: "Bonus depreciation is limited to 40% and phases down annually", isCorrect: false, rationale: "The 40% rate applied in 2025 before OBBBA restored the full rate; the phase-down was eliminated." },
            { label: "B", text: "Bonus depreciation is 100%, has no annual dollar cap, and may create a net operating loss", isCorrect: true, rationale: "Correct — OBBBA permanently restored 100% bonus depreciation, which unlike Section 179 has no dollar limitation and is not restricted to taxable business income." },
            { label: "C", text: "Bonus depreciation is capped at $2.5 million per year", isCorrect: false, rationale: "The $2.5 million cap applies to Section 179 expensing, not bonus depreciation." },
            { label: "D", text: "Bonus depreciation cannot exceed taxable income from the business", isCorrect: false, rationale: "That limitation applies to Section 179; bonus depreciation can generate a loss." },
          ],
          explanation: "The One Big Beautiful Bill Act permanently restored 100% bonus depreciation for qualifying property acquired after January 19, 2025. Unlike Section 179 — which is capped at $2.5 million, phases out above $4 million of additions, and is limited to taxable business income — bonus depreciation has no dollar cap and can create or increase a net operating loss.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["OBBBA", "depreciation", "bonus depreciation"],
        },
        {
          question: "A donor gives property with an adjusted basis of $10,000 and a fair market value of $6,000 at the date of gift. The donee later sells it for $8,000. What is the donee's recognized gain or loss?",
          options: [
            { label: "A", text: "$2,000 loss", isCorrect: false, rationale: "For loss purposes the basis is the $6,000 FMV, and $8,000 exceeds that — so there is no loss." },
            { label: "B", text: "$2,000 gain", isCorrect: false, rationale: "For gain purposes the basis is the $10,000 carryover basis, and $8,000 is below that — so there is no gain." },
            { label: "C", text: "No gain or loss", isCorrect: true, rationale: "Correct — when the sale price falls between the FMV at the date of gift ($6,000) and the donor's carryover basis ($10,000), neither a gain nor a loss is recognized." },
            { label: "D", text: "$4,000 loss", isCorrect: false, rationale: "This incorrectly uses the donor's basis for a loss calculation, which the double-basis rule prohibits." },
          ],
          explanation: "Under the double-basis rule for gifted property that has declined in value, the donee uses the donor's carryover basis to compute gain and the lower FMV at the date of gift to compute loss. When the sales price falls between those two amounts, no gain or loss is recognized.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["basis", "gifts"],
        },
      ],
    },
    {
      slug: "property-transactions-gains-losses-and-like-kind-exchanges",
      title: "Property Transactions: Gains, Losses & Like-Kind Exchanges",
      shortDescription: "Capital vs. ordinary treatment, Section 1231, depreciation recapture, and Section 1031 exchanges.",
      blueprintArea: "Area III: Federal Taxation of Property Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 8,
      studyMaterialHtml: `
<h2>Character of gain or loss</h2>
<table>
<thead><tr><th>Asset type</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Capital assets (investments, personal-use property)</td><td>Capital gain/loss</td></tr>
<tr><td>Inventory, receivables, self-created works</td><td>Ordinary</td></tr>
<tr><td><strong>§1231</strong> — depreciable property and land used in a trade or business held &gt;1 year</td><td>Net gain → <strong>long-term capital</strong>; net loss → <strong>ordinary</strong> (the best of both worlds)</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — recapture:</strong> Before §1231 treatment applies, recapture converts some gain to ordinary income.
<br/>• <strong>§1245</strong> (personal property, e.g. equipment): recapture <em>all</em> depreciation taken, as ordinary income, up to the amount of gain.
<br/>• <strong>§1250</strong> (real property): recapture applies to excess of accelerated over straight-line depreciation. For most modern real estate on straight-line, there's no §1250 recapture, but individuals face <strong>unrecaptured §1250 gain</strong> taxed at a maximum 25% rate.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Equipment cost $50,000, accumulated depreciation $30,000 (adjusted basis $20,000), sold for $55,000. Total gain = $35,000. §1245 recaptures the $30,000 of depreciation as <strong>ordinary income</strong>; the remaining $5,000 (excess over original cost) is <strong>§1231 gain</strong>.</p></div>

<h3>Capital loss rules for individuals</h3>
<p>Capital losses offset capital gains; excess losses are deductible against ordinary income up to <strong>$3,000</strong> per year, with the remainder carried forward <strong>indefinitely</strong> (retaining short/long character). C corporations get no ordinary offset at all — capital losses only offset capital gains, carried back 3 years and forward 5.</p>

<h3>Section 1031 like-kind exchanges</h3>
<p>Since the TCJA, §1031 applies <strong>only to real property</strong> held for productive use in a trade or business or for investment. Personal property no longer qualifies.</p>
<ul>
<li><strong>Timing</strong>: identify replacement property within <strong>45 days</strong>; complete the exchange within <strong>180 days</strong> (or the return due date, if earlier)</li>
<li><strong>Boot</strong> (cash or non-like-kind property received) triggers gain recognition equal to the <strong>lesser of realized gain or boot received</strong></li>
<li><strong>Losses are never recognized</strong> in a like-kind exchange</li>
<li>Basis of replacement = FMV of replacement − deferred gain (or: basis of old + gain recognized + boot paid − boot received)</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Relief from a mortgage counts as boot <em>received</em>; assuming a mortgage counts as boot <em>paid</em>. Net them, but remember you can never net down to a recognized loss.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>§1231: net gain → long-term capital; net loss → ordinary</li>
<li><strong>§1245</strong>: recapture all depreciation as ordinary (personal property); <strong>§1250</strong>: excess accelerated over SL; unrecaptured §1250 gain taxed max 25%</li>
<li>Individual capital losses: $3,000/yr against ordinary, carry forward indefinitely</li>
<li>C corp capital losses: only offset capital gains; back 3, forward 5</li>
<li><strong>§1031 now real property only</strong>; 45-day identification, 180-day completion</li>
<li>Gain recognized = <strong>lesser of realized gain or boot received</strong>; losses never recognized</li>
</ul>
`,
      mcqs: [
        {
          question: "A business sells equipment for $55,000. Original cost was $50,000 and accumulated depreciation was $30,000. How is the gain characterized?",
          options: [
            { label: "A", text: "$35,000 of Section 1231 gain", isCorrect: false, rationale: "Section 1245 recapture applies first to the depreciation taken, converting part of the gain to ordinary income." },
            { label: "B", text: "$30,000 ordinary income under Section 1245 and $5,000 Section 1231 gain", isCorrect: true, rationale: "Correct — total gain is $35,000 ($55,000 − $20,000 adjusted basis). Section 1245 recaptures the $30,000 of depreciation as ordinary income, and the $5,000 exceeding original cost is Section 1231 gain." },
            { label: "C", text: "$35,000 of ordinary income", isCorrect: false, rationale: "Recapture is limited to depreciation taken ($30,000); gain above original cost is Section 1231." },
            { label: "D", text: "$5,000 ordinary income and $30,000 long-term capital gain", isCorrect: false, rationale: "This reverses the treatment — depreciation recapture is the ordinary portion." },
          ],
          explanation: "Adjusted basis is $50,000 − $30,000 = $20,000, so the gain is $35,000. Section 1245 recaptures depreciation previously taken ($30,000) as ordinary income. Only the portion of gain exceeding the original cost ($55,000 − $50,000 = $5,000) receives Section 1231 treatment.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["1231", "1245", "recapture"],
        },
        {
          question: "In a Section 1031 exchange, a taxpayer's realized gain is $80,000 and the taxpayer receives $30,000 of cash boot. How much gain is recognized?",
          options: [
            { label: "A", text: "$0", isCorrect: false, rationale: "Receipt of boot triggers recognition up to the amount of boot received." },
            { label: "B", text: "$30,000", isCorrect: true, rationale: "Correct — gain is recognized to the extent of the lesser of realized gain ($80,000) or boot received ($30,000)." },
            { label: "C", text: "$80,000", isCorrect: false, rationale: "The full realized gain is only recognized if boot equals or exceeds it." },
            { label: "D", text: "$50,000", isCorrect: false, rationale: "This subtracts boot from realized gain, which is the deferred amount, not the recognized amount." },
          ],
          explanation: "In a like-kind exchange, gain is recognized to the extent of the lesser of realized gain or boot received. Here that is $30,000; the remaining $50,000 of gain is deferred and reduces the basis of the replacement property.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["1031", "like-kind exchange", "boot"],
        },
      ],
    },
    {
      slug: "individual-taxation-gross-income",
      title: "Individual Taxation: Gross Income",
      shortDescription: "What counts as gross income, common exclusions, and OBBBA's new tips and overtime deductions.",
      blueprintArea: "Area IV: Federal Taxation of Individuals",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 65,
      order: 9,
      studyMaterialHtml: `
<h2>Gross income: broadly defined</h2>
<p>IRC §61 defines gross income as "all income from whatever source derived" — deliberately broad. Unless the Code specifically excludes an item, assume it's taxable.</p>

<h3>Commonly taxable items</h3>
<ul>
<li>Wages, salaries, bonuses, tips</li>
<li>Interest (except municipal bond interest) and dividends</li>
<li>Business and rental income</li>
<li>Alimony from agreements executed <strong>before 2019</strong> (post-2018 agreements: not taxable to recipient, not deductible by payer)</li>
<li>Gambling winnings in full (losses deductible only as itemized deductions, capped at winnings)</li>
<li>Prizes, awards, and unemployment compensation</li>
<li>Debt forgiveness (unless bankruptcy, insolvency, or another exception applies)</li>
</ul>

<h3>Common exclusions</h3>
<table>
<thead><tr><th>Item</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Municipal bond interest</td><td>Excluded from federal gross income</td></tr>
<tr><td>Life insurance death benefits</td><td>Excluded (exceptions: transfer for value)</td></tr>
<tr><td>Gifts and inheritances received</td><td>Excluded to the recipient</td></tr>
<tr><td>Child support</td><td>Excluded</td></tr>
<tr><td>Employer-paid health insurance premiums</td><td>Excluded</td></tr>
<tr><td>Scholarships</td><td>Excluded for tuition and required course materials; room and board is taxable</td></tr>
<tr><td>Qualified employee discounts, de minimis fringes</td><td>Excluded within limits</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — OBBBA additions (testable on REG/TCP from July 1, 2026):</strong> For tax years <strong>2025 through 2028</strong>, individuals may deduct up to <strong>$25,000 of qualified tips</strong> and up to <strong>$12,500 of qualified overtime</strong> ($25,000 for married filing jointly). These deductions phase out for taxpayers with income above <strong>$150,000</strong> ($300,000 for joint filers). Note the mechanism: the income is still <em>included</em> in gross income and remains subject to payroll taxes — the relief comes through a <strong>deduction</strong>.</p></div>

<h3>Social Security benefits</h3>
<p>Up to <strong>85%</strong> of Social Security benefits may be taxable depending on "provisional income" (AGI + tax-exempt interest + 50% of benefits) relative to threshold amounts.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a question lists several receipts and asks for gross income, work item by item and default to <em>taxable</em> unless you can name the specific exclusion.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>§61: all income from whatever source derived, unless specifically excluded</li>
<li>Alimony: pre-2019 agreements taxable/deductible; post-2018 neither</li>
<li>Excluded: muni interest, life insurance death benefit, gifts/inheritances received, child support, employer health premiums, scholarships (tuition/materials only)</li>
<li><strong>OBBBA 2025–2028</strong>: deduct up to <strong>$25,000 tips</strong> and <strong>$12,500 overtime</strong> ($25,000 MFJ); phases out above <strong>$150k / $300k</strong> income</li>
<li>Tips/overtime still in gross income and still subject to payroll tax — relief is a deduction</li>
<li>Social Security: up to 85% taxable based on provisional income</li>
</ul>
`,
      mcqs: [
        {
          question: "Under the One Big Beautiful Bill Act, how is qualified tip income treated for an eligible employee in tax year 2026?",
          options: [
            { label: "A", text: "It is entirely excluded from gross income and exempt from payroll taxes", isCorrect: false, rationale: "The provision is a deduction, not an exclusion — the income remains in gross income and remains subject to payroll taxes." },
            { label: "B", text: "It is included in gross income, but the taxpayer may deduct up to $25,000 of qualified tips subject to income phase-outs", isCorrect: true, rationale: "Correct — OBBBA created a deduction of up to $25,000 for qualified tips for tax years 2025 through 2028, phasing out above $150,000 of income ($300,000 for joint filers)." },
            { label: "C", text: "It is taxed at a preferential capital gains rate", isCorrect: false, rationale: "Tips are ordinary compensation income; no preferential rate applies." },
            { label: "D", text: "It is excluded only for taxpayers with income above $150,000", isCorrect: false, rationale: "The relationship is reversed — the benefit phases out above that income level." },
          ],
          explanation: "The One Big Beautiful Bill Act provides a deduction — not an exclusion — of up to $25,000 for qualified tips for tax years 2025 through 2028. The tips remain includible in gross income and subject to payroll taxes, and the deduction phases out for taxpayers with income above $150,000 ($300,000 married filing jointly).",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["OBBBA", "gross income", "tips"],
        },
        {
          question: "Which of the following items is included in a taxpayer's federal gross income?",
          options: [
            { label: "A", text: "Interest earned on a municipal bond", isCorrect: false, rationale: "Municipal bond interest is specifically excluded from federal gross income." },
            { label: "B", text: "A $10,000 gift received from a parent", isCorrect: false, rationale: "Gifts received are excluded from the recipient's gross income." },
            { label: "C", text: "Gambling winnings from a casino", isCorrect: true, rationale: "Correct — gambling winnings are fully includible in gross income; losses are deductible only as an itemized deduction and only up to winnings." },
            { label: "D", text: "Life insurance proceeds received upon the death of a spouse", isCorrect: false, rationale: "Life insurance death benefits are generally excluded from the beneficiary's gross income." },
          ],
          explanation: "Gambling winnings are taxable in full and included in gross income. Municipal bond interest, gifts received, and life insurance death benefits are all specifically excluded under the Internal Revenue Code.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["gross income", "exclusions"],
        },
      ],
    },
    {
      slug: "individual-taxation-adjustments-and-deductions",
      title: "Individual Taxation: Adjustments & Deductions",
      shortDescription: "Above-the-line adjustments, the standard deduction, itemized deductions, and the expanded SALT cap.",
      blueprintArea: "Area IV: Federal Taxation of Individuals",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 10,
      studyMaterialHtml: `
<h2>The individual tax formula</h2>
<p>Gross income − <strong>adjustments</strong> = AGI − (greater of standard or itemized deductions) − <strong>QBI deduction</strong> = taxable income → apply rates → subtract credits → tax due.</p>

<h3>Common above-the-line adjustments</h3>
<ul>
<li>Educator expenses; HSA contributions</li>
<li>Deductible portion of self-employment tax (half); self-employed health insurance; self-employed retirement plan contributions</li>
<li>Traditional IRA contributions (subject to phase-outs if covered by an employer plan)</li>
<li>Student loan interest (limited and phased out)</li>
<li>Alimony paid under <strong>pre-2019</strong> agreements</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — AGI is the gateway.</strong> Many deductions and credits phase out based on AGI, so an above-the-line adjustment is worth more than an itemized deduction of the same size — it reduces AGI and therefore expands other benefits.</p></div>

<h3>Major itemized deductions</h3>
<table>
<thead><tr><th>Category</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Medical expenses</td><td>Deductible only to the extent they exceed <strong>7.5% of AGI</strong></td></tr>
<tr><td>State and local taxes (SALT)</td><td><strong>OBBBA raised the cap to $40,000</strong> (temporarily; scheduled to revert to $10,000 in 2030)</td></tr>
<tr><td>Home mortgage interest</td><td>On acquisition indebtedness up to applicable limits</td></tr>
<tr><td>Charitable contributions</td><td>Cash to public charities generally up to 60% of AGI; capital gain property to public charities up to 30% of AGI; 5-year carryforward</td></tr>
<tr><td>Casualty losses</td><td>Only for federally declared disasters</td></tr>
</tbody>
</table>

<h3>The QBI deduction (§199A)</h3>
<p>OBBBA made §199A <strong>permanent</strong> at <strong>20%</strong> of qualified business income from pass-through entities, and added a <strong>minimum deduction of $400</strong> for taxpayers with at least $1,000 of QBI from an active trade or business in which they materially participate. Above income thresholds, limitations based on W-2 wages and the unadjusted basis of qualified property apply, and specified service trades or businesses (SSTBs) phase out entirely.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> QBI is deducted <em>after</em> AGI, along with (not instead of) the standard or itemized deduction. It does not reduce self-employment tax.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Formula: Gross income − adjustments = <strong>AGI</strong> − standard/itemized − QBI = taxable income</li>
<li>Adjustments beat itemized deductions because they lower AGI (which drives other phase-outs)</li>
<li>Medical: only above <strong>7.5% of AGI</strong></li>
<li><strong>SALT cap $40,000 under OBBBA</strong> (reverts to $10,000 in 2030)</li>
<li>Charitable cash to public charity: up to 60% AGI; capital gain property: 30% AGI; 5-year carryforward</li>
<li>Casualty losses: federally declared disasters only</li>
<li><strong>§199A permanent at 20%</strong>, minimum $400 deduction if ≥$1,000 QBI from active business; SSTB phase-outs above thresholds</li>
</ul>
`,
      mcqs: [
        {
          question: "Under the One Big Beautiful Bill Act, what is the state and local tax (SALT) deduction cap, and is it permanent?",
          options: [
            { label: "A", text: "$10,000, made permanent", isCorrect: false, rationale: "$10,000 was the pre-OBBBA cap; OBBBA raised it, though the increase is temporary." },
            { label: "B", text: "$40,000, but scheduled to revert to $10,000 in 2030", isCorrect: true, rationale: "Correct — OBBBA temporarily increased the SALT cap to $40,000, with the cap scheduled to return to $10,000 beginning in 2030." },
            { label: "C", text: "Unlimited, restoring pre-2018 law", isCorrect: false, rationale: "The SALT deduction remains capped; it was not fully restored." },
            { label: "D", text: "$40,000, made permanent with no sunset", isCorrect: false, rationale: "Unlike some other OBBBA provisions, the SALT increase includes a scheduled reversion." },
          ],
          explanation: "OBBBA increased the SALT deduction cap from $10,000 to $40,000, but unlike the permanent QBI and estate tax changes, this increase is temporary — the cap is scheduled to revert to $10,000 beginning in 2030.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["OBBBA", "SALT", "itemized deductions"],
        },
        {
          question: "A taxpayer has AGI of $100,000 and incurs $12,000 of unreimbursed qualified medical expenses. What amount is deductible as an itemized deduction?",
          options: [
            { label: "A", text: "$12,000", isCorrect: false, rationale: "Medical expenses are deductible only to the extent they exceed the AGI floor." },
            { label: "B", text: "$4,500", isCorrect: true, rationale: "Correct — the floor is 7.5% × $100,000 = $7,500, so the deductible amount is $12,000 − $7,500 = $4,500." },
            { label: "C", text: "$7,500", isCorrect: false, rationale: "$7,500 is the non-deductible floor, not the deductible amount." },
            { label: "D", text: "$0", isCorrect: false, rationale: "The expenses exceed the floor, so a portion is deductible." },
          ],
          explanation: "Qualified medical expenses are deductible only to the extent they exceed 7.5% of AGI. With AGI of $100,000, the floor is $7,500, leaving $4,500 of the $12,000 in expenses deductible as an itemized deduction.",
          difficulty: "EASY",
          questionType: "CALCULATION",
          tags: ["itemized deductions", "medical"],
        },
      ],
    },
    {
      slug: "filing-status-credits-and-amt",
      title: "Filing Status, Credits & AMT",
      shortDescription: "Choosing the right filing status, refundable vs. nonrefundable credits, and the alternative minimum tax.",
      blueprintArea: "Area IV: Federal Taxation of Individuals",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 11,
      studyMaterialHtml: `
<h2>Filing status</h2>
<table>
<thead><tr><th>Status</th><th>Key requirement</th></tr></thead>
<tbody>
<tr><td>Single</td><td>Unmarried and not qualifying for another status</td></tr>
<tr><td>Married filing jointly</td><td>Married as of the last day of the year (or spouse died during the year)</td></tr>
<tr><td>Married filing separately</td><td>Married but electing separate returns — often disadvantageous</td></tr>
<tr><td><strong>Head of household</strong></td><td>Unmarried (or considered unmarried), pays &gt;50% of the cost of maintaining a home that is the principal residence of a qualifying person for &gt;half the year</td></tr>
<tr><td>Qualifying surviving spouse</td><td>Spouse died in one of the two preceding years, taxpayer has a dependent child and hasn't remarried — uses joint rates</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> A dependent parent does <strong>not</strong> have to live with the taxpayer for head-of-household status, as long as the taxpayer pays more than half the cost of maintaining the parent's main home. That's the classic exception tested.</p></div>

<h3>Refundable vs. nonrefundable credits</h3>
<table>
<thead><tr><th>Refundable (can create a refund)</th><th>Nonrefundable (limited to tax liability)</th></tr></thead>
<tbody>
<tr><td>Earned Income Tax Credit</td><td>Child and Dependent Care Credit</td></tr>
<tr><td>Additional Child Tax Credit (refundable portion)</td><td>Lifetime Learning Credit</td></tr>
<tr><td>American Opportunity Credit (40% refundable)</td><td>Foreign Tax Credit; Retirement Savings Contributions Credit</td></tr>
<tr><td>Premium Tax Credit</td><td>Adoption Credit (carries forward 5 years)</td></tr>
</tbody>
</table>

<h3>Alternative minimum tax</h3>
<p>AMT = a parallel calculation. Start with regular taxable income, add back <strong>preferences and adjustments</strong>, subtract the AMT exemption (which phases out at higher income), and apply AMT rates. The taxpayer pays the <strong>higher</strong> of regular tax or tentative minimum tax.</p>
<ul>
<li>Common add-backs: state and local taxes deducted, certain private activity bond interest, incentive stock option bargain element, excess depletion/accelerated depreciation</li>
<li>The <strong>standard deduction is not allowed</strong> for AMT purposes</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Exercising an ISO creates no regular taxable income but does create an AMT adjustment equal to the bargain element (FMV − exercise price) — a classic AMT trigger question.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>HOH: unmarried + pays &gt;50% of home cost + qualifying person lives there &gt;half year (<strong>dependent parent need not live with you</strong>)</li>
<li>Qualifying surviving spouse: 2 years after spouse's death, dependent child, not remarried — joint rates</li>
<li>Refundable: EITC, additional CTC, AOTC (40%), premium tax credit</li>
<li>Nonrefundable: child & dependent care, Lifetime Learning, foreign tax, adoption (5-yr carryforward)</li>
<li>AMT: add back preferences (SALT, ISO bargain element, private activity bond interest), no standard deduction; pay the <strong>higher</strong> of regular or tentative minimum tax</li>
</ul>
`,
      mcqs: [
        {
          question: "An unmarried taxpayer pays more than half the cost of maintaining a separate household that is the principal residence of the taxpayer's dependent mother. The mother does not live with the taxpayer. What filing status may the taxpayer use?",
          options: [
            { label: "A", text: "Single, because the dependent does not live with the taxpayer", isCorrect: false, rationale: "The dependent-parent exception permits head of household even though the parent lives elsewhere." },
            { label: "B", text: "Head of household", isCorrect: true, rationale: "Correct — a taxpayer who pays more than half the cost of maintaining the principal home of a dependent parent qualifies for head of household even though the parent does not live with the taxpayer." },
            { label: "C", text: "Qualifying surviving spouse", isCorrect: false, rationale: "That status requires a deceased spouse and a dependent child." },
            { label: "D", text: "Married filing separately", isCorrect: false, rationale: "The taxpayer is unmarried." },
          ],
          explanation: "Head of household normally requires the qualifying person to live with the taxpayer for more than half the year, but a dependent parent is a specific exception: the taxpayer qualifies by paying more than half the cost of maintaining the parent's principal residence, even if that home is separate.",
          difficulty: "MEDIUM",
          questionType: "EXCEPTION",
          tags: ["filing status", "head of household"],
        },
      ],
    },
    {
      slug: "retirement-plans-and-tax-planning-basics",
      title: "Retirement Plans & Tax Planning Basics",
      shortDescription: "Traditional vs. Roth IRAs, employer plans, and the tax consequences of distributions.",
      blueprintArea: "Area IV: Federal Taxation of Individuals",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 12,
      studyMaterialHtml: `
<h2>Traditional vs. Roth</h2>
<table>
<thead><tr><th></th><th>Traditional IRA</th><th>Roth IRA</th></tr></thead>
<tbody>
<tr><td>Contribution</td><td>Potentially deductible (phased out if covered by an employer plan)</td><td>Never deductible</td></tr>
<tr><td>Growth</td><td>Tax-deferred</td><td>Tax-free</td></tr>
<tr><td>Qualified distribution</td><td>Taxable as ordinary income</td><td><strong>Tax-free</strong></td></tr>
<tr><td>Required minimum distributions</td><td>Yes</td><td><strong>None during the owner's lifetime</strong></td></tr>
<tr><td>Income limits to contribute</td><td>No (deduction may be limited)</td><td>Yes</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — the Roth qualified distribution test:</strong> A Roth distribution is tax-free only if the <strong>5-year holding period</strong> is met <strong>AND</strong> one of: age 59½, death, disability, or first-time home purchase (up to a lifetime limit). Contributions (not earnings) can always be withdrawn tax- and penalty-free.</p></div>

<h3>Early distribution penalty</h3>
<p>Distributions before age 59½ generally incur a <strong>10% additional tax</strong> on top of ordinary income tax. Exceptions include: death, disability, qualified higher education expenses, first-time home purchase (IRAs, limited), substantially equal periodic payments, medical expenses above the AGI threshold, and a qualified birth or adoption.</p>

<h3>Employer plans</h3>
<ul>
<li><strong>401(k)</strong> — elective deferrals reduce taxable wages (but not Social Security/Medicare wages); employer matches are not currently taxable</li>
<li><strong>SEP</strong> — employer-funded, useful for self-employed taxpayers</li>
<li><strong>SIMPLE</strong> — for small employers, with mandatory employer contributions</li>
<li><strong>Defined benefit</strong> — promises a specified benefit; employer bears the investment risk</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A direct trustee-to-trustee <strong>rollover</strong> avoids withholding entirely. An indirect (60-day) rollover from an employer plan triggers <strong>mandatory 20% withholding</strong>, and the taxpayer must replace that withheld amount from other funds to roll over the full balance.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Traditional: maybe deductible now, taxable later, <strong>RMDs required</strong></li>
<li>Roth: never deductible, <strong>tax-free qualified distributions</strong>, <strong>no lifetime RMDs</strong>, income limits to contribute</li>
<li>Roth qualified = 5-year holding <strong>AND</strong> (59½ / death / disability / first home)</li>
<li>Early distribution penalty 10%; exceptions include death, disability, education, first home, SEPP, medical, birth/adoption</li>
<li>Direct rollover = no withholding; indirect from employer plan = <strong>mandatory 20% withholding</strong></li>
</ul>
`,
      mcqs: [
        {
          question: "A 45-year-old taxpayer takes a distribution from a Roth IRA opened three years ago, withdrawing an amount that exceeds total contributions. How is the excess (earnings) portion treated?",
          options: [
            { label: "A", text: "Tax-free, because Roth distributions are always tax-free", isCorrect: false, rationale: "Roth earnings are tax-free only if the distribution is qualified, which requires both the 5-year period and a qualifying event." },
            { label: "B", text: "Taxable as ordinary income and subject to the 10% early distribution penalty", isCorrect: true, rationale: "Correct — the 5-year holding period is not met and the taxpayer is under 59½, so the earnings portion is a nonqualified distribution: taxable and generally subject to the 10% additional tax." },
            { label: "C", text: "Taxable but exempt from the 10% penalty", isCorrect: false, rationale: "No exception applies on these facts, so the penalty also applies." },
            { label: "D", text: "Treated as a return of capital and excluded from income", isCorrect: false, rationale: "Contributions come out first tax-free, but the question specifies amounts exceeding contributions — the earnings portion." },
          ],
          explanation: "A qualified Roth distribution requires the account to have been held 5 years AND the owner to be at least 59½ (or meet death, disability, or first-time homebuyer conditions). Here neither test is satisfied, so the earnings portion is taxable and subject to the 10% early distribution penalty. Contributions themselves always come out tax- and penalty-free first.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["retirement", "Roth IRA"],
        },
      ],
    },
    {
      slug: "c-corporation-taxation",
      title: "C Corporation Taxation",
      shortDescription: "Corporate taxable income, book-tax differences, the dividends-received deduction, and distributions.",
      blueprintArea: "Area V: Federal Taxation of Entities",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 13,
      studyMaterialHtml: `
<h2>Formation: Section 351</h2>
<p>No gain or loss is recognized on a transfer of property to a corporation solely in exchange for stock if the transferors are in <strong>control (80%)</strong> immediately after. Boot received triggers gain up to the lesser of realized gain or boot. Services contributed are <strong>not</strong> property — the recipient recognizes compensation income.</p>

<h3>Key book-tax differences</h3>
<table>
<thead><tr><th>Item</th><th>Book</th><th>Tax</th></tr></thead>
<tbody>
<tr><td>Municipal bond interest</td><td>Income</td><td>Excluded (permanent)</td></tr>
<tr><td>Federal income tax expense</td><td>Expense</td><td>Not deductible (permanent)</td></tr>
<tr><td>Life insurance premiums (company is beneficiary)</td><td>Expense</td><td>Not deductible (permanent)</td></tr>
<tr><td>50% of meals</td><td>Expense</td><td>Partially disallowed (permanent)</td></tr>
<tr><td>Fines and penalties</td><td>Expense</td><td>Not deductible (permanent)</td></tr>
<tr><td>Depreciation</td><td>Book method</td><td>MACRS/bonus (temporary)</td></tr>
<tr><td>Bad debts</td><td>Allowance</td><td>Direct write-off (temporary)</td></tr>
<tr><td>Warranty accrual</td><td>Accrued</td><td>When paid (temporary)</td></tr>
</tbody>
</table>

<h3>Dividends-received deduction (DRD)</h3>
<table>
<thead><tr><th>Ownership in the payer</th><th>DRD percentage</th></tr></thead>
<tbody>
<tr><td>Less than 20%</td><td>50%</td></tr>
<tr><td>20% to less than 80%</td><td>65%</td></tr>
<tr><td>80% or more (affiliated)</td><td>100%</td></tr>
</tbody>
</table>
<p>A taxable income limitation applies (the DRD generally cannot exceed the same percentage of taxable income before the DRD), unless taking the full DRD creates or increases a net operating loss.</p>

<h3>Distributions to shareholders</h3>
<p>Ordering: taxable <strong>dividend</strong> to the extent of current and accumulated <strong>earnings and profits (E&P)</strong> → then a tax-free <strong>return of capital</strong> reducing stock basis → then <strong>capital gain</strong>.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> A corporation distributing <strong>appreciated property</strong> recognizes gain as if it sold the property at FMV. It does <strong>not</strong> recognize loss on distributing depreciated property.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Corporate charitable contributions are limited to <strong>10% of taxable income</strong> (computed before the charitable deduction, DRD, and NOL carrybacks), with a 5-year carryforward. Corporate capital losses offset only capital gains — back 3, forward 5.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>§351: no gain if transferors control <strong>80%</strong> after; services ≠ property</li>
<li>Permanent differences: muni interest, federal tax expense, key-person life insurance, fines, 50% meals</li>
<li>Temporary: depreciation, bad debts, warranty accruals</li>
<li><strong>DRD</strong>: &lt;20% → 50%; 20–80% → 65%; ≥80% → 100%</li>
<li>Distributions: dividend (to E&P) → return of capital (reduces basis) → capital gain</li>
<li>Distributing appreciated property → corporation recognizes gain (never loss)</li>
<li>Charitable limit <strong>10% of taxable income</strong>, 5-year carryforward</li>
</ul>
`,
      mcqs: [
        {
          question: "A corporation owns 30% of the stock of another domestic corporation and receives a $100,000 dividend. Ignoring the taxable income limitation, what is the dividends-received deduction?",
          options: [
            { label: "A", text: "$50,000", isCorrect: false, rationale: "The 50% rate applies to ownership of less than 20%." },
            { label: "B", text: "$65,000", isCorrect: true, rationale: "Correct — ownership of at least 20% but less than 80% qualifies for a 65% dividends-received deduction: 65% × $100,000 = $65,000." },
            { label: "C", text: "$100,000", isCorrect: false, rationale: "The 100% DRD requires ownership of 80% or more (affiliated group)." },
            { label: "D", text: "$0", isCorrect: false, rationale: "Domestic corporate dividends qualify for a DRD based on ownership percentage." },
          ],
          explanation: "The dividends-received deduction is tiered by ownership: less than 20% ownership gives a 50% deduction, 20% to less than 80% gives 65%, and 80% or more gives 100%. At 30% ownership, the DRD is 65% × $100,000 = $65,000.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["C corporation", "DRD"],
        },
        {
          question: "A corporation with no current or accumulated earnings and profits distributes $50,000 cash to a shareholder whose stock basis is $30,000. How is the distribution treated by the shareholder?",
          options: [
            { label: "A", text: "$50,000 dividend income", isCorrect: false, rationale: "Dividend treatment requires earnings and profits, and there are none here." },
            { label: "B", text: "$30,000 tax-free return of capital and $20,000 capital gain", isCorrect: true, rationale: "Correct — with no E&P, the distribution first reduces stock basis tax-free ($30,000), and the excess ($20,000) is treated as gain from the sale of stock." },
            { label: "C", text: "$50,000 tax-free return of capital", isCorrect: false, rationale: "Only amounts up to stock basis are tax-free; the excess is capital gain." },
            { label: "D", text: "$20,000 ordinary income", isCorrect: false, rationale: "Amounts exceeding basis are capital gain, not ordinary income." },
          ],
          explanation: "Corporate distributions follow a three-tier ordering: dividend income to the extent of current and accumulated E&P, then a tax-free return of capital reducing stock basis, then capital gain. With no E&P, $30,000 reduces basis to zero and the remaining $20,000 is capital gain.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["C corporation", "distributions", "E&P"],
        },
      ],
    },
    {
      slug: "s-corporation-taxation",
      title: "S Corporation Taxation",
      shortDescription: "Eligibility requirements, flow-through taxation, shareholder basis, and the accumulated adjustments account.",
      blueprintArea: "Area V: Federal Taxation of Entities",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 14,
      studyMaterialHtml: `
<h2>Eligibility — strictly enforced</h2>
<ul>
<li>Domestic corporation</li>
<li><strong>No more than 100 shareholders</strong> (family members can elect to count as one)</li>
<li>Shareholders limited to <strong>individuals, estates, and certain trusts</strong> — no partnerships, no corporations, and <strong>no nonresident aliens</strong></li>
<li><strong>Only one class of stock</strong> (differences in voting rights are permitted)</li>
</ul>
<p>An election requires <strong>unanimous</strong> shareholder consent, filed by the 15th day of the third month of the tax year to be effective for that year.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Violating any eligibility requirement — for example, transferring one share to a nonresident alien or a corporation — <strong>terminates the S election immediately</strong>. After termination, the corporation generally cannot re-elect for five years without IRS consent.</p></div>

<h3>Shareholder basis ordering</h3>
<ol>
<li><strong>Increase</strong> for income items (separately and non-separately stated) and additional contributions</li>
<li><strong>Decrease</strong> for distributions</li>
<li><strong>Decrease</strong> for nondeductible expenses</li>
<li><strong>Decrease</strong> for losses and deductions (only to the extent of remaining basis)</li>
</ol>
<p>Losses in excess of basis are suspended and carried forward indefinitely until basis is restored.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — the key S vs. partnership difference:</strong> An S corporation shareholder's basis includes <strong>direct loans from the shareholder to the corporation</strong> but <strong>not</strong> a share of general corporate debt. A partner's basis <em>does</em> include a share of partnership liabilities. This distinction is heavily tested.</p></div>

<h3>Distributions and the AAA</h3>
<p>For an S corporation with no accumulated E&P, distributions are tax-free to the extent of basis, then capital gain. If the corporation has accumulated E&P from prior C years, the ordering is: <strong>AAA</strong> (tax-free to the extent of basis) → <strong>accumulated E&P</strong> (taxable dividend) → remaining basis (tax-free) → capital gain.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A &gt;2% shareholder-employee's health insurance premiums are included in W-2 wages, then deducted above the line as self-employed health insurance. S corporation income is <strong>not</strong> subject to self-employment tax — but reasonable compensation must be paid as wages, and the IRS actively challenges under-compensation.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>≤100 shareholders; individuals/estates/certain trusts only; <strong>no NRAs, no corporate/partnership shareholders</strong>; <strong>one class of stock</strong></li>
<li>Election requires <strong>unanimous</strong> consent; violation terminates immediately (5-year wait to re-elect)</li>
<li>Basis order: income ↑ → distributions ↓ → nondeductibles ↓ → losses ↓ (suspended if basis exhausted)</li>
<li><strong>S corp basis includes direct shareholder loans, NOT a share of entity debt</strong> (unlike partnerships)</li>
<li>With accumulated E&P: AAA → E&P (dividend) → basis → capital gain</li>
<li>S corp income is <strong>not</strong> self-employment income; reasonable wages required</li>
</ul>
`,
      mcqs: [
        {
          question: "Which of the following would immediately terminate a corporation's S election?",
          options: [
            { label: "A", text: "Issuing shares with different voting rights to existing shareholders", isCorrect: false, rationale: "Differences in voting rights alone do not create a second class of stock." },
            { label: "B", text: "Transferring shares to a nonresident alien individual", isCorrect: true, rationale: "Correct — nonresident aliens are ineligible S corporation shareholders, so such a transfer terminates the election immediately." },
            { label: "C", text: "Having 90 shareholders", isCorrect: false, rationale: "The limit is 100 shareholders, so 90 is permissible." },
            { label: "D", text: "Distributing appreciated property to a shareholder", isCorrect: false, rationale: "This has tax consequences but does not terminate the S election." },
          ],
          explanation: "S corporation shareholders must be individuals (who are U.S. citizens or residents), estates, or certain trusts. Transferring even one share to a nonresident alien violates the eligibility requirements and terminates the S election immediately.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["S corporation", "eligibility"],
        },
        {
          question: "How does an S corporation shareholder's stock basis differ from a partner's basis in a partnership with respect to entity-level debt?",
          options: [
            { label: "A", text: "Both include a proportionate share of entity liabilities", isCorrect: false, rationale: "Only partners include a share of entity liabilities in basis." },
            { label: "B", text: "An S corporation shareholder includes only direct loans made to the corporation, while a partner includes a share of partnership liabilities", isCorrect: true, rationale: "Correct — this is the fundamental basis distinction between the two pass-through forms, and it determines how much loss each owner can currently deduct." },
            { label: "C", text: "Neither includes any form of debt in basis", isCorrect: false, rationale: "Both include some debt — S shareholders through direct loans, partners through their share of liabilities." },
            { label: "D", text: "An S corporation shareholder includes a share of all corporate debt", isCorrect: false, rationale: "S shareholders do not get basis for general corporate borrowings, only for loans they personally make to the corporation." },
          ],
          explanation: "A partner's basis includes a share of partnership liabilities, which increases the losses the partner can deduct. An S corporation shareholder gets basis only from stock investment and direct loans made personally to the corporation — never from the corporation's third-party debt.",
          difficulty: "HARD",
          questionType: "CONCEPTUAL",
          tags: ["S corporation", "basis"],
        },
      ],
    },
    {
      slug: "partnership-taxation",
      title: "Partnership Taxation",
      shortDescription: "Formation, partner basis including liabilities, guaranteed payments, and distributions.",
      blueprintArea: "Area V: Federal Taxation of Entities",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 15,
      studyMaterialHtml: `
<h2>Formation: Section 721</h2>
<p>Generally <strong>no gain or loss</strong> is recognized when a partner contributes property in exchange for a partnership interest — with no control requirement (unlike §351 for corporations). Exceptions: contributing services (compensation income), and contributions where liability relief exceeds basis.</p>

<h3>Partner basis — the outside basis formula</h3>
<p>Initial basis = cash + adjusted basis of property contributed + share of partnership liabilities assumed.</p>
<p>Then adjust: <strong>+</strong> share of income and additional contributions and increases in liability share; <strong>−</strong> distributions, share of losses, decreases in liability share.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> A partner's share of partnership liabilities is included in outside basis. An <strong>increase</strong> in a partner's liability share is treated as a deemed cash <strong>contribution</strong>; a <strong>decrease</strong> is a deemed cash <strong>distribution</strong> — which can trigger gain if it exceeds basis.</p></div>

<h3>Guaranteed payments</h3>
<p>Payments to a partner for services or use of capital, determined <strong>without regard to partnership income</strong>. They are deductible by the partnership (reducing ordinary income allocated to all partners) and are ordinary income to the recipient partner, subject to self-employment tax.</p>

<h3>Distributions</h3>
<table>
<thead><tr><th>Type</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Current (non-liquidating) cash</td><td>Tax-free to the extent of basis; excess is capital gain</td></tr>
<tr><td>Current property</td><td>Carryover basis to the partner, limited to the partner's remaining outside basis; no gain generally recognized</td></tr>
<tr><td>Liquidating</td><td>Basis is fully allocated to distributed property; loss recognized only if the distribution is all cash, unrealized receivables, and inventory</td></tr>
</tbody>
</table>

<h3>Hot assets (§751)</h3>
<p>Unrealized receivables and substantially appreciated inventory produce <strong>ordinary income</strong> — even on the sale of a partnership interest that would otherwise generate capital gain. This prevents converting ordinary income into capital gain by selling the interest.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Losses are limited in three sequential hurdles: <strong>basis</strong>, then <strong>at-risk</strong>, then <strong>passive activity</strong> rules. Always apply them in that order.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>§721: no gain on contribution, <strong>no control requirement</strong> (unlike §351's 80%)</li>
<li>Outside basis includes <strong>share of partnership liabilities</strong>; increases = deemed contribution, decreases = deemed distribution</li>
<li>Guaranteed payments: fixed regardless of income; deductible by partnership, ordinary + SE income to partner</li>
<li>Cash distributions tax-free to basis, excess = capital gain</li>
<li><strong>Hot assets (§751)</strong>: unrealized receivables + appreciated inventory → ordinary income on sale of interest</li>
<li>Loss limits in order: <strong>basis → at-risk → passive</strong></li>
</ul>
`,
      mcqs: [
        {
          question: "A partner has an outside basis of $20,000, which includes a $12,000 share of partnership liabilities. The partnership repays all of its debt. What is the tax consequence to the partner?",
          options: [
            { label: "A", text: "No consequence, because no cash was actually distributed", isCorrect: false, rationale: "A reduction in a partner's share of liabilities is treated as a deemed cash distribution." },
            { label: "B", text: "A deemed cash distribution of $12,000, reducing basis to $8,000 with no gain recognized", isCorrect: true, rationale: "Correct — the $12,000 decrease in liability share is a deemed distribution. Because it does not exceed the $20,000 basis, no gain is recognized and basis simply falls to $8,000." },
            { label: "C", text: "A $12,000 capital gain", isCorrect: false, rationale: "Gain arises only when a deemed distribution exceeds outside basis, which is not the case here." },
            { label: "D", text: "A $12,000 ordinary loss", isCorrect: false, rationale: "Debt repayment does not create a loss to the partner." },
          ],
          explanation: "A decrease in a partner's share of partnership liabilities is treated as a deemed cash distribution to that partner. It reduces outside basis and triggers gain only to the extent it exceeds basis. Here, $12,000 is less than the $20,000 basis, so basis simply falls to $8,000.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["partnership", "basis", "liabilities"],
        },
      ],
    },
    {
      slug: "trusts-estates-and-gift-tax-basics",
      title: "Trusts, Estates & Gift Tax Basics",
      shortDescription: "Fiduciary income tax, distributable net income, and the expanded estate and gift tax exemption.",
      blueprintArea: "Area V: Federal Taxation of Entities",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 16,
      studyMaterialHtml: `
<h2>Gift tax essentials</h2>
<ul>
<li><strong>Annual exclusion</strong> per donee, per year — available only for gifts of a <strong>present interest</strong>. Gifts of a future interest do not qualify.</li>
<li><strong>Gift splitting</strong> — married couples may elect to treat gifts as made half by each, doubling the exclusion</li>
<li><strong>Unlimited exclusions</strong>: transfers to a U.S. citizen spouse, transfers to qualified charities, and amounts paid <strong>directly</strong> to an educational institution for tuition or to a medical provider for care</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — OBBBA:</strong> The lifetime <strong>estate and gift tax exemption is $15 million per individual</strong> ($30 million for a married couple) beginning in <strong>2026</strong>, indexed for inflation from 2027. Unlike the TCJA version, this amount is <strong>permanent</strong> — there is no scheduled sunset.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A grandparent pays $40,000 directly to a university for a grandchild's tuition and separately gives the grandchild $18,000 in cash. The tuition payment is entirely excluded (direct payment to the institution), and the cash gift is measured against the annual exclusion. Paying the grandchild who then pays the school would <em>not</em> qualify for the tuition exclusion.</p></div>

<h3>Fiduciary income tax (Form 1041)</h3>
<p>Trusts and estates are conduits: income taxed to the entity is reduced by amounts distributed to beneficiaries. The bridge is <strong>distributable net income (DNI)</strong>.</p>
<ul>
<li>DNI <strong>limits</strong> the distribution deduction the entity can take</li>
<li>DNI <strong>limits and characterizes</strong> the amount taxable to beneficiaries — the character (interest, dividends, tax-exempt) flows through proportionally</li>
<li>Tax-exempt income stays exempt in the beneficiary's hands</li>
</ul>

<h3>Simple vs. complex trusts</h3>
<table>
<thead><tr><th>Simple trust</th><th>Complex trust</th></tr></thead>
<tbody>
<tr><td>Must distribute all income currently</td><td>May accumulate income</td></tr>
<tr><td>No charitable contributions</td><td>May make charitable contributions</td></tr>
<tr><td>No principal distributions</td><td>May distribute principal</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Trusts reach the top marginal rate at a very low income level compared to individuals — which is exactly why distributing income to beneficiaries in lower brackets is a core planning technique tested in TCP.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Annual exclusion applies only to gifts of a <strong>present interest</strong>; gift splitting doubles it</li>
<li>Unlimited: spouse (US citizen), charity, <strong>direct</strong> tuition and medical payments</li>
<li><strong>OBBBA: $15M estate/gift exemption per person ($30M couple) from 2026 — permanent</strong>, indexed from 2027</li>
<li><strong>DNI</strong> caps the entity's distribution deduction and the beneficiary's taxable amount, and carries character through</li>
<li>Simple trust: distributes all income, no charity, no principal. Complex: may accumulate, give to charity, distribute principal</li>
<li>Trusts hit top rates at very low income → distribute to lower-bracket beneficiaries</li>
</ul>
`,
      mcqs: [
        {
          question: "Under the One Big Beautiful Bill Act, what is the lifetime estate and gift tax exemption per individual beginning in 2026, and is it scheduled to sunset?",
          options: [
            { label: "A", text: "$5 million, sunsetting in 2030", isCorrect: false, rationale: "This reflects pre-TCJA levels, not current law." },
            { label: "B", text: "$15 million, permanent with inflation indexing from 2027", isCorrect: true, rationale: "Correct — OBBBA set the exemption at $15 million per individual ($30 million per married couple) starting in 2026, made it permanent, and provided for inflation adjustment beginning in 2027." },
            { label: "C", text: "$15 million, sunsetting after 2028", isCorrect: false, rationale: "Unlike the TCJA provisions, the OBBBA exemption has no sunset." },
            { label: "D", text: "$30 million per individual", isCorrect: false, rationale: "$30 million is the combined amount for a married couple; the per-individual amount is $15 million." },
          ],
          explanation: "The One Big Beautiful Bill Act set the lifetime estate and gift tax exemption at $15 million per individual ($30 million for married couples) beginning in 2026. Unlike the Tax Cuts and Jobs Act version, this amount is permanent with no scheduled sunset, and is indexed for inflation starting in 2027.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["OBBBA", "estate tax", "gift tax"],
        },
        {
          question: "What is the primary function of distributable net income (DNI) in fiduciary income taxation?",
          options: [
            { label: "A", text: "It determines the trust's tax rate bracket", isCorrect: false, rationale: "Rate brackets are determined by taxable income, not by DNI's conduit function." },
            { label: "B", text: "It limits the entity's distribution deduction and the amount taxable to beneficiaries, and carries the character of income through", isCorrect: true, rationale: "Correct — DNI is the ceiling on both the fiduciary's deduction and the beneficiaries' inclusion, and it preserves the character of the underlying income items." },
            { label: "C", text: "It measures the trust's accumulated principal", isCorrect: false, rationale: "DNI relates to income, not corpus/principal." },
            { label: "D", text: "It determines whether the trust is simple or complex", isCorrect: false, rationale: "That classification depends on the trust's distribution requirements and powers, not on DNI." },
          ],
          explanation: "DNI serves as the conduit mechanism in fiduciary taxation: it caps the distribution deduction available to the trust or estate, caps the amount beneficiaries must include in income, and determines the character (e.g., tax-exempt, dividend, interest) of the income the beneficiaries report.",
          difficulty: "HARD",
          questionType: "CONCEPTUAL",
          tags: ["trusts", "DNI"],
        },
      ],
    },
    {
      slug: "employee-benefits-and-payroll-tax",
      title: "Employee Benefits & Payroll Tax",
      shortDescription: "Fringe benefit taxation, employer payroll obligations, and worker classification.",
      blueprintArea: "Area IV: Federal Taxation of Individuals",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 17,
      studyMaterialHtml: `
<h2>Payroll taxes at a glance</h2>
<table>
<thead><tr><th>Tax</th><th>Who pays</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Social Security (OASDI) 6.2%</td><td>Employee + employer each</td><td>Applies up to an annual wage base</td></tr>
<tr><td>Medicare 1.45%</td><td>Employee + employer each</td><td><strong>No wage cap</strong></td></tr>
<tr><td>Additional Medicare 0.9%</td><td><strong>Employee only</strong></td><td>On wages above a threshold; no employer match</td></tr>
<tr><td>FUTA</td><td><strong>Employer only</strong></td><td>Federal unemployment; credit for state unemployment taxes paid</td></tr>
</tbody>
</table>
<p>Self-employed taxpayers pay <strong>both halves</strong> (self-employment tax) on net earnings from self-employment, and deduct one half as an above-the-line adjustment.</p>

<h3>Employee vs. independent contractor</h3>
<p>Classification turns on the degree of <strong>control</strong> — behavioral control, financial control, and the nature of the relationship. Misclassification exposes the employer to back payroll taxes, interest, and penalties.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> An employer that fails to remit withheld payroll taxes faces the <strong>trust fund recovery penalty</strong> — 100% of the unpaid withheld amounts, assessable personally against any "responsible person" who willfully failed to pay, including officers, bookkeepers, or anyone with authority over disbursements.</p></div>

<h3>Common fringe benefits</h3>
<table>
<thead><tr><th>Excluded from employee income</th><th>Taxable</th></tr></thead>
<tbody>
<tr><td>Employer-paid health insurance premiums</td><td>Personal use of a company car</td></tr>
<tr><td>Group-term life insurance up to $50,000 of coverage</td><td>Coverage above $50,000 (imputed cost)</td></tr>
<tr><td>De minimis fringes; qualified employee discounts</td><td>Cash and cash equivalents (including gift cards)</td></tr>
<tr><td>Working condition fringes; qualified transportation within limits</td><td>Most awards not meeting qualified plan rules</td></tr>
<tr><td>Dependent care assistance within limits; educational assistance within limits</td><td>Excess above statutory limits</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Cash is <strong>never</strong> de minimis. A $25 turkey is excludable; a $25 gift card is taxable wages.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Social Security 6.2% each side (wage base cap); Medicare 1.45% each side (<strong>no cap</strong>); additional 0.9% <strong>employee only</strong></li>
<li>FUTA is <strong>employer only</strong>; SE taxpayers pay both halves and deduct half above the line</li>
<li>Worker classification driven by <strong>control</strong> (behavioral, financial, relationship)</li>
<li><strong>Trust fund recovery penalty</strong> = 100% of unremitted withholding, personally against responsible persons</li>
<li>Group-term life excluded up to <strong>$50,000</strong> of coverage; excess is imputed income</li>
<li><strong>Cash and gift cards are never de minimis</strong></li>
</ul>
`,
      mcqs: [
        {
          question: "An employer provides each employee with a $50 gift card at year end and a $50 holiday ham. How are these treated for the employees?",
          options: [
            { label: "A", text: "Both are excludable de minimis fringe benefits", isCorrect: false, rationale: "Cash and cash equivalents such as gift cards can never qualify as de minimis." },
            { label: "B", text: "The gift card is taxable wages; the ham is an excludable de minimis fringe benefit", isCorrect: true, rationale: "Correct — cash equivalents like gift cards are always taxable compensation, while a low-value non-cash item such as a holiday ham qualifies as a de minimis fringe." },
            { label: "C", text: "Both are taxable wages", isCorrect: false, rationale: "The non-cash item of small value qualifies as de minimis and is excludable." },
            { label: "D", text: "The gift card is excludable because it is under $100", isCorrect: false, rationale: "There is no dollar threshold that makes a cash equivalent excludable." },
          ],
          explanation: "De minimis fringe benefits are small-value non-cash items where accounting for them would be impractical — a holiday ham qualifies. Cash and cash equivalents, including gift cards, are never de minimis and are always includible in the employee's wages.",
          difficulty: "EASY",
          questionType: "APPLICATION",
          tags: ["fringe benefits", "payroll"],
        },
      ],
    },
    {
      slug: "exempt-organizations-basics",
      title: "Exempt Organizations Basics",
      shortDescription: "501(c)(3) qualification, private foundations vs. public charities, and unrelated business income tax.",
      blueprintArea: "Area V: Federal Taxation of Entities",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 18,
      studyMaterialHtml: `
<h2>Qualifying under 501(c)(3)</h2>
<p>The organization must be organized and operated <strong>exclusively</strong> for exempt purposes — charitable, religious, educational, scientific, literary, testing for public safety, fostering amateur sports, or preventing cruelty to children or animals.</p>
<ul>
<li><strong>No private inurement</strong> — net earnings may not benefit any private shareholder or individual</li>
<li><strong>Limited lobbying</strong> — no substantial part of activities may attempt to influence legislation</li>
<li><strong>No political campaign activity</strong> — an absolute prohibition; violation can cost the exemption entirely</li>
</ul>

<h3>Public charity vs. private foundation</h3>
<table>
<thead><tr><th>Public charity</th><th>Private foundation</th></tr></thead>
<tbody>
<tr><td>Broad public support or specific type (church, school, hospital)</td><td>Typically funded by a single family or corporation</td></tr>
<tr><td>More favorable donor deduction limits</td><td>Lower donor deduction limits</td></tr>
<tr><td>Files Form 990</td><td>Files Form 990-PF; subject to excise taxes and minimum distribution requirements</td></tr>
</tbody>
</table>
<p>All 501(c)(3) organizations are presumed to be private foundations unless they demonstrate public charity status.</p>

<h3>Unrelated business income tax (UBIT)</h3>
<p>Even an exempt organization pays regular corporate tax on income from a business that is:</p>
<ol>
<li>A <strong>trade or business</strong>,</li>
<li><strong>Regularly carried on</strong>, and</li>
<li><strong>Not substantially related</strong> to the exempt purpose</li>
</ol>
<p>All three must be present. A specific deduction (commonly $1,000) applies, and Form 990-T is filed.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — common UBIT exclusions:</strong> dividends, interest, royalties, and most rents from real property; income from a business where <strong>substantially all work is performed by volunteers</strong>; sale of donated merchandise (thrift shops); and activities carried on primarily for the convenience of members, students, or patients.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A museum gift shop selling art books related to its exhibits is <em>substantially related</em> (no UBIT). The same shop selling unrelated consumer electronics generates unrelated business income.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>501(c)(3): exclusively exempt purposes, <strong>no private inurement</strong>, limited lobbying, <strong>zero political campaign activity</strong></li>
<li>Presumed a private foundation unless public charity status is established</li>
<li>Public charity → Form 990; private foundation → Form 990-PF + excise taxes + minimum distributions</li>
<li><strong>UBIT test (all three)</strong>: trade or business + regularly carried on + not substantially related</li>
<li>Excluded from UBIT: dividends, interest, royalties, most real property rents, volunteer-run activities, donated merchandise sales, member convenience</li>
</ul>
`,
      mcqs: [
        {
          question: "A tax-exempt museum operates a gift shop. Which activity would most likely generate unrelated business taxable income?",
          options: [
            { label: "A", text: "Selling reproductions of artwork displayed in the museum's collection", isCorrect: false, rationale: "This is substantially related to the museum's educational exempt purpose." },
            { label: "B", text: "Selling consumer electronics unrelated to the collection", isCorrect: true, rationale: "Correct — selling unrelated merchandise is a trade or business, regularly carried on, and not substantially related to the exempt purpose, so it generates UBTI." },
            { label: "C", text: "Selling donated used books once per year at a fundraising sale", isCorrect: false, rationale: "Sales of donated merchandise are specifically excluded from UBIT, and an annual sale is also not regularly carried on." },
            { label: "D", text: "Receiving dividend income from an endowment portfolio", isCorrect: false, rationale: "Dividends are passive investment income specifically excluded from UBIT." },
          ],
          explanation: "Unrelated business income requires a trade or business, regularly carried on, that is not substantially related to the exempt purpose. Selling art reproductions furthers the museum's educational purpose, but selling unrelated consumer electronics does not — that activity generates UBTI. Passive dividends and sales of donated goods are specifically excluded.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["exempt organizations", "UBIT"],
        },
      ],
    },
  ],
};
