import type { TopicContent } from "../types";

export const reviewsCompilationsAup: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Many private companies need something less than an audit. The Statements on Standards for Accounting and Review Services (SSARS) cover preparation, compilation, and review engagements; the attestation standards cover agreed-upon procedures (AUP) engagements; and generally accepted auditing standards (GAAS) cover reviews of interim financial information. Auditing and Attestation (AUD) tests which engagement requires independence, what procedures each involves, and what each report says.</p>

<h2>The three SSARS engagements compared</h2>
<table>
<thead><tr><th></th><th>Preparation</th><th>Compilation</th><th>Review</th></tr></thead>
<tbody>
<tr><td>Assurance</td><td>None</td><td>None</td><td><strong>Limited</strong></td></tr>
<tr><td>Independence required?</td><td>No — and no need to determine it</td><td>No — but lack of independence must be <strong>disclosed</strong> in the report</td><td><strong>Yes</strong></td></tr>
<tr><td>Report</td><td>None; each page must state "No assurance is provided" (or issue a disclaimer)</td><td>Compilation report</td><td>Review report</td></tr>
<tr><td>Engagement letter</td><td>Required, signed by accountant and management</td><td>Required</td><td>Required</td></tr>
<tr><td>Main procedures</td><td>Prepare the statements; read them for obvious material misstatements</td><td>Read the statements for obvious material misstatements; understand the framework and the entity's accounting</td><td><strong>Analytical procedures and inquiries</strong>; reconcile to records</td></tr>
<tr><td>Management representation letter</td><td>No</td><td>No</td><td><strong>Required</strong></td></tr>
<tr><td>Understanding internal control, assessing fraud risk, obtaining corroborating evidence</td><td>No</td><td>No</td><td>No — a review does not require these</td></tr>
</tbody>
</table>
<p>In all three, the accountant must be engaged by the client; merely preparing statements as part of bookkeeping is a preparation engagement if the accountant is engaged to prepare them. Omitting substantially all disclosures is allowed in preparation and compilation engagements (if clearly indicated), but not in a review.</p>

<h2>Compilation engagements</h2>
<ul>
<li>Performed to assist management in presenting financial information without assurance.</li>
<li>Report elements: a statement that management is responsible for the statements; that the accountant performed the compilation in accordance with SSARS; that the accountant did not audit or review and does not express an opinion, conclusion, or any assurance; signature, city and state, and date.</li>
<li><strong>Lack of independence</strong>: add a final paragraph stating the accountant is not independent; describing the reasons is optional, but if any reasons are given, <strong>all</strong> must be given.</li>
<li>Departures from the framework are disclosed in a separate paragraph (with the effect if known).</li>
<li>Supplementary information and omitted disclosures must be addressed in the report.</li>
</ul>

<h2>Review engagements</h2>
<ul>
<li>Objective: obtain <strong>limited assurance</strong> that no material modifications are needed for the statements to conform with the framework.</li>
<li>Procedures focus on areas where the accountant believes risks of material misstatement are higher; <strong>materiality</strong> is determined and applied.</li>
<li>Inquiries include: accounting principles and practices, procedures for recording and summarizing transactions, actions at board and shareholder meetings, significant or unusual transactions, subsequent events, going concern, fraud knowledge, related parties, and litigation.</li>
<li>Analytical procedures: compare with prior periods, expectations, and industry data; investigate unexpected fluctuations.</li>
<li>Reconcile the financial statements to the accounting records.</li>
<li>If the accountant becomes aware that information is incorrect, incomplete, or unsatisfactory, perform additional procedures.</li>
<li><strong>Representation letter</strong> from management, dated as of the review report date; refusal → the accountant cannot complete the review and must withdraw (no report).</li>
</ul>

<h3>Review report</h3>
<ul>
<li>Title including "independent" (Independent Accountant's Review Report).</li>
<li>States that a review is <strong>substantially less in scope</strong> than an audit, and that the accountant does not express an opinion.</li>
<li>Conclusion: "we are <strong>not aware of any material modifications</strong> that should be made…" (limited assurance, expressed negatively).</li>
<li>Modifications for known departures from the framework; emphasis-of-matter and other-matter paragraphs as needed.</li>
<li>There is no "disclaimer" in a review: if the accountant cannot complete the review because of a scope limitation, it withdraws.</li>
</ul>

<h2>Changing from an audit to a review or compilation</h2>
<p>Acceptable if there is reasonable justification (changed circumstances or a misunderstanding). The new report does not mention the original engagement. If the change is sought to avoid an audit problem (refusal to allow a confirmation with the lawyer, for example), the accountant generally should not issue a review or compilation report.</p>

<h2>Agreed-upon procedures (Statement on Standards for Attestation Engagements (SSAE) No. 19)</h2>
<ul>
<li>The practitioner performs specific procedures and reports <strong>findings</strong> — no opinion or conclusion.</li>
<li><strong>Independence is required</strong>.</li>
<li>The <strong>engaging party</strong> must acknowledge that the procedures are appropriate for the intended purpose before the report is issued; other users need not agree to the procedures.</li>
<li>Procedures may be developed or refined during the engagement.</li>
<li>Findings are reported without vague terms such as "nothing came to our attention" or "reasonable".</li>
<li>The report may be <strong>general use</strong> unless the practitioner decides to restrict it.</li>
<li>A written assertion from the responsible party is not required (only requested where appropriate).</li>
</ul>

<h2>Reviews of interim financial information</h2>
<ul>
<li><strong>Nonissuers</strong>: performed by the entity's auditor under GAAS — the clarified auditing standards (AU-C), section AU-C 930 — requiring an understanding of the entity and its internal control; limited assurance.</li>
<li><strong>Issuers</strong>: quarterly reviews under Public Company Accounting Oversight Board (PCAOB) Auditing Standard (AS) 4105 are required before Form 10-Q filing.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match an engagement to its independence, assurance, and procedure requirements.</li>
<li>Identify required report language (limited assurance, disclosure of lack of independence).</li>
<li>Respond to a refusal to provide representations in a review.</li>
<li>Apply SSAE No. 19 rules for agreed-upon procedures.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Only the review (among SSARS engagements) requires independence and a representation letter. A compilation can be done without independence — the report just has to say so.</p></div>
`,
  revision: `
<h3>Statements on Standards for Accounting and Review Services (SSARS)</h3>
<table>
<thead><tr><th></th><th>Preparation</th><th>Compilation</th><th>Review</th></tr></thead>
<tbody>
<tr><td>Assurance</td><td>None</td><td>None</td><td>Limited</td></tr>
<tr><td>Independence</td><td>No</td><td>No (disclose)</td><td><strong>Yes</strong></td></tr>
<tr><td>Report</td><td>No — "no assurance" on each page</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Representation letter</td><td>No</td><td>No</td><td><strong>Yes</strong></td></tr>
</tbody>
</table>
<ul>
<li>Review = analytical procedures + inquiries; no internal control testing or corroboration.</li>
<li>Review report: "not aware of any material modifications"; substantially less in scope than an audit.</li>
<li>Rep letter refused in a review → withdraw.</li>
<li>Compilation, not independent: disclose; if giving reasons, give all.</li>
</ul>

<h3>Agreed-upon procedures (Statement on Standards for Attestation Engagements (SSAE) No. 19)</h3>
<p>Findings only · independence required · engaging party acknowledges procedures · general use allowed.</p>

<h3>Interim reviews</h3>
<p>Nonissuer: generally accepted auditing standards (GAAS), limited assurance. Issuer: quarterly review required before Form 10-Q.</p>
`,
};
