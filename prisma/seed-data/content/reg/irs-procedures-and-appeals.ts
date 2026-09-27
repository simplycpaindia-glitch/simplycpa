import type { TopicContent } from "../types";

export const irsProcedures: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) Area I tests how the Internal Revenue Service (IRS) examines returns, how taxpayers dispute results, which courts hear tax cases, and the statutes of limitations for assessment, refunds, and collection. These rules are fixed in the Internal Revenue Code (IRC), so they are dependable exam material.</p>

<h2>Examinations</h2>
<table>
<thead><tr><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Correspondence examination</td><td>Conducted by mail; simple issues (documentation for a deduction)</td></tr>
<tr><td>Office examination</td><td>At an IRS office; more complex individual issues</td></tr>
<tr><td>Field examination</td><td>At the taxpayer's business; complex business returns</td></tr>
</tbody>
</table>
<p>Returns are selected through computer scoring (the Discriminant Function System), information-matching (Forms W-2 and 1099), related examinations, and specific compliance initiatives. Mathematical and clerical errors are corrected by notice without examination rights.</p>

<h2>The dispute path</h2>
<ol>
<li><strong>Revenue agent's report</strong> proposing adjustments. The taxpayer may agree (Form 870) or disagree.</li>
<li><strong>30-day letter</strong>: explains appeal rights. The taxpayer can file a <strong>written protest</strong> (required if the amount exceeds $25,000 for a field exam; a small case request otherwise) and request a conference with the <strong>IRS Independent Office of Appeals</strong>. Appeals considers the hazards of litigation and can settle.</li>
<li><strong>90-day letter (statutory notice of deficiency)</strong>: if unresolved or no response, the IRS issues this notice. The taxpayer has <strong>90 days</strong> (150 days if addressed outside the United States) to petition the <strong>US Tax Court</strong>. If no petition is filed, the tax is assessed.</li>
</ol>

<h2>Which court?</h2>
<table>
<thead><tr><th>Court</th><th>Pay tax first?</th><th>Jury?</th><th>Appeal to</th></tr></thead>
<tbody>
<tr><td><strong>US Tax Court</strong></td><td><strong>No</strong> — the only prepayment forum</td><td>No</td><td>US Court of Appeals for the taxpayer's circuit</td></tr>
<tr><td>Tax Court small case (S case) — disputes of <strong>$50,000 or less</strong> per year</td><td>No</td><td>No</td><td><strong>No appeal</strong>; not precedential</td></tr>
<tr><td>US District Court</td><td>Yes — pay, claim a refund, then sue</td><td><strong>Yes</strong> (the only jury option)</td><td>US Court of Appeals for the circuit</td></tr>
<tr><td>US Court of Federal Claims</td><td>Yes</td><td>No</td><td>US Court of Appeals for the Federal Circuit</td></tr>
</tbody>
</table>
<p>Final appeal is to the <strong>US Supreme Court</strong> by writ of certiorari (rarely granted). The Tax Court follows the precedent of the circuit to which a case would be appealed (the Golsen rule).</p>

<h2>Burden of proof</h2>
<ul>
<li>Generally on the <strong>taxpayer</strong>.</li>
<li>Shifts to the IRS if the taxpayer introduces credible evidence, has complied with substantiation and record-keeping requirements, cooperated with reasonable IRS requests, and (for entities) meets net worth limitations.</li>
<li>The IRS bears the burden for <strong>civil fraud</strong> (clear and convincing evidence), for penalties (burden of production), and for income reconstructed solely from statistical information.</li>
</ul>

<h2>Statutes of limitations</h2>
<table>
<thead><tr><th>Situation</th><th>Period for the IRS to assess</th></tr></thead>
<tbody>
<tr><td>General rule</td><td><strong>3 years</strong> from the later of the due date or the date the return was filed (early returns are treated as filed on the due date)</td></tr>
<tr><td>Omission of more than <strong>25% of gross income</strong> reported (or certain foreign asset omissions over $5,000)</td><td><strong>6 years</strong></td></tr>
<tr><td>Fraudulent return, willful evasion, or <strong>no return filed</strong></td><td><strong>Unlimited</strong></td></tr>
<tr><td>Collection after assessment</td><td><strong>10 years</strong> from assessment</td></tr>
</tbody>
</table>

<h3>Refund claims</h3>
<ul>
<li>File by the later of <strong>3 years from the date the return was filed</strong> or <strong>2 years from the date the tax was paid</strong>.</li>
<li>Individuals use Form 1040-X; corporations use Form 1120-X.</li>
<li><strong>Bad debts and worthless securities:</strong> <strong>7 years</strong> from the due date of the return for the year the loss occurred.</li>
<li>The amount refundable is limited to tax paid within the lookback period.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A calendar-year individual files the 2023 return on March 1, 2024 (due April 15, 2024). The return is treated as filed on April 15, 2024, so the IRS can assess until <strong>April 15, 2027</strong>. If the taxpayer omitted income equal to 30% of reported gross income, the period extends to April 15, 2030.</p></div>

<h2>Guidance and rulings</h2>
<ul>
<li><strong>Private letter rulings</strong> apply only to the taxpayer who requested them.</li>
<li><strong>Revenue rulings and procedures</strong> are published guidance; <strong>Treasury Regulations</strong> interpret the IRC (legislative regulations carry the force of law).</li>
<li>Technical advice memoranda address issues during an examination.</li>
</ul>

<h2>Collection tools and relief</h2>
<ul>
<li><strong>Federal tax lien</strong> (a claim against property) and <strong>levy</strong> (seizure), after notice and the right to a collection due process hearing.</li>
<li><strong>Installment agreements</strong> and <strong>offers in compromise</strong> (based on doubt as to liability, doubt as to collectibility, or effective tax administration).</li>
<li><strong>Innocent spouse relief</strong>, separation of liability, and equitable relief for joint filers.</li>
<li><strong>Taxpayer Bill of Rights:</strong> the right to be informed, to quality service, to pay no more than the correct amount, to challenge the IRS, to appeal, to finality, to privacy, to confidentiality, to retain representation, and to a fair and just system.</li>
<li>The <strong>Taxpayer Advocate Service</strong> helps taxpayers facing hardship or unresolved problems.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify the court a taxpayer should use given their goals (no prepayment, jury trial).</li>
<li>Apply the 3-year, 6-year, and unlimited assessment periods.</li>
<li>Compute the refund claim deadline.</li>
<li>Follow the sequence from examination to 30-day letter to 90-day letter.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Don't want to pay first" → Tax Court. "Want a jury" → District Court. "Small case, final decision, no appeal" → Tax Court small case procedure.</p></div>
`,
  revision: `
<h3>Dispute path</h3>
<p>Examination → 30-day letter (protest, Independent Office of Appeals) → 90-day letter (statutory notice of deficiency) → petition Tax Court within 90 days.</p>

<h3>Courts</h3>
<ul>
<li>Tax Court: <strong>no prepayment</strong>, no jury.</li>
<li>Small case: ≤ $50,000 per year; no appeal.</li>
<li>District Court: pay first; <strong>jury</strong> available.</li>
<li>Court of Federal Claims: pay first; appeal to the Federal Circuit.</li>
</ul>

<h3>Limitations</h3>
<ul>
<li>Assessment: 3 years (early return → due date).</li>
<li>&gt; 25% gross income omitted: 6 years.</li>
<li>Fraud or no return: unlimited.</li>
<li>Collection: 10 years after assessment.</li>
<li>Refund: later of 3 years from filing or 2 years from payment. Bad debts, worthless securities: 7 years.</li>
</ul>

<h3>Burden of proof</h3>
<p>Taxpayer, unless credible evidence + records + cooperation. Internal Revenue Service (IRS) proves civil fraud (clear and convincing).</p>

<h3>Rulings</h3>
<p>Private letter ruling: binds only that taxpayer.</p>
`,
};
