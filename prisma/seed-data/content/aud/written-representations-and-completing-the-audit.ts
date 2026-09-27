import type { TopicContent } from "../types";

export const completingAudit: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>The completion phase pulls everything together: evaluating misstatements, reviewing subsequent events, obtaining written representations, communicating with those charged with governance, and dating the report. Auditing and Attestation (AUD) Area IV (Forming Conclusions and Reporting, 10–20%) tests each step and the auditor's duties for facts discovered after the report.</p>

<h2>Evaluating misstatements</h2>
<ul>
<li><strong>Accumulate</strong> all misstatements identified, other than those that are clearly trivial.</li>
<li>Classify them as <strong>factual</strong> (no doubt), <strong>judgmental</strong> (differences in estimates or policy choices), or <strong>projected</strong> (the auditor's best estimate from a sample).</li>
<li>Communicate them to the appropriate level of management on a timely basis and <strong>request correction</strong> of all of them.</li>
<li>If management refuses, understand the reasons and consider them in evaluating qualitative aspects of the entity's practices, including possible bias.</li>
<li>Evaluate whether <strong>uncorrected misstatements</strong>, individually or in aggregate, are material — considering size, nature, circumstances, and the effect of prior-period uncorrected misstatements.</li>
<li>If the aggregate approaches materiality, the risk that undetected misstatements push it over is higher — consider more procedures or further corrections.</li>
</ul>

<h2>Subsequent events</h2>
<table>
<thead><tr><th>Period</th><th>Auditor's responsibility</th></tr></thead>
<tbody>
<tr><td>Balance sheet date → report date</td><td><strong>Active</strong> — perform procedures to identify events requiring adjustment or disclosure</td></tr>
<tr><td>Report date → report release date</td><td><strong>Passive</strong> — no duty to search, but act on facts that become known</td></tr>
<tr><td>After report release</td><td>No duty to search; if facts become known that would have affected the report, apply the subsequent discovery rules</td></tr>
</tbody>
</table>

<h3>Subsequent events procedures (through the report date)</h3>
<ul>
<li>Understand management's procedures for identifying subsequent events.</li>
<li>Inquire of management and those charged with governance about subsequent events.</li>
<li>Read minutes of meetings held after year-end; read the latest interim financial statements.</li>
<li>Obtain the lawyers' letters (dated close to the report date) and written representations.</li>
<li>Examine significant transactions after year-end (cutoff, subsequent collections and payments).</li>
</ul>

<h3>Dating when a new subsequent event is found after the report date</h3>
<ul>
<li><strong>Dual dating:</strong> keep the original report date, and add a later date for the specific note ("…except for Note X, as to which the date is…"). Responsibility for events after the original date is limited to that note.</li>
<li><strong>Redating:</strong> move the whole report to the later date — responsibility extends to all events up to the new date, so subsequent events procedures must be extended.</li>
</ul>

<h2>Subsequent discovery of facts after the report is released</h2>
<p>If the auditor becomes aware of a fact that existed at the report date and would have changed the report:</p>
<ol>
<li>Discuss with management and those charged with governance; determine whether the statements need revision.</li>
<li>If revised: perform necessary procedures, issue a new report on the revised statements (with an emphasis-of-matter or other-matter paragraph referring to the revision), and ensure users are informed.</li>
<li>If management <strong>refuses</strong> and users are relying on the statements: notify management and those charged with governance, and take steps to <strong>prevent future reliance</strong> on the report — for example, notifying regulators and known users — generally after consulting legal counsel.</li>
</ol>

<h2>Omitted procedures discovered after the report release date</h2>
<p>Assess the importance of the omitted procedure. If it impairs the ability to support the opinion and users are still relying on the report, <strong>promptly perform</strong> the omitted procedure or alternative procedures. If results reveal facts that would have changed the report, apply the subsequent discovery rules. If the procedure can't be performed, consult legal counsel.</p>

<h2>Written representations</h2>
<ul>
<li>Requested from management with appropriate responsibility — normally the <strong>chief executive officer (CEO) and chief financial officer (CFO)</strong> — addressed to the auditor.</li>
<li>Dated the <strong>same as the auditor's report</strong>, covering all periods reported on.</li>
<li>Contents include: management fulfilled its responsibility for the financial statements under the framework; provided all relevant information and access; all transactions are recorded; responsibility for internal control; <strong>knowledge of fraud</strong> or suspected fraud; noncompliance with laws; <strong>related parties</strong>; subsequent events; litigation and claims; uncorrected misstatements are immaterial (with a summary attached); significant assumptions in estimates are reasonable.</li>
<li>Representations complement, but do not replace, other audit evidence.</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> If management <strong>refuses</strong> to provide representations about its responsibilities for the financial statements or providing information, or the auditor doubts their reliability, the auditor must <strong>disclaim</strong> an opinion or withdraw — a qualified opinion is not enough, because the missing representations are pervasive.</p></div>

<h2>Communicating with those charged with governance</h2>
<ul>
<li>The auditor's responsibilities and the planned scope and timing of the audit (without compromising effectiveness).</li>
<li>Significant findings: qualitative aspects of accounting practices, significant difficulties encountered, <strong>disagreements with management</strong>, uncorrected misstatements, material corrected misstatements, significant matters discussed with management, written representations requested, and consultations with other accountants.</li>
<li>Communication may be oral or written, but significant findings must be in writing if oral communication would not be adequate.</li>
</ul>

<h2>Final steps</h2>
<ul>
<li>Perform <strong>final analytical procedures</strong> (required).</li>
<li>Complete the engagement quality review where required — no report release until it is done.</li>
<li>Obtain lawyers' letters, review documentation, and evaluate the overall presentation.</li>
<li><strong>Report date</strong>: no earlier than the date sufficient appropriate evidence is obtained — including evidence that the statements and disclosures are prepared and management has asserted responsibility for them.</li>
<li>Assemble the final audit file within 60 days of the report release date.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Distinguish active and passive subsequent events responsibilities.</li>
<li>Choose dual dating versus redating.</li>
<li>Respond to subsequently discovered facts and omitted procedures.</li>
<li>Identify representation letter contents, date, signers, and the effect of refusal.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Three things share the same date: the auditor's report, the written representations, and (approximately) the lawyers' letters. Dual dating limits responsibility for later events to one specific note.</p></div>
`,
  revision: `
<h3>Misstatements</h3>
<p>Accumulate (above clearly trivial) · classify factual, judgmental, projected · request correction · evaluate uncorrected in aggregate.</p>

<h3>Subsequent events</h3>
<ul>
<li>Year-end → report date: <strong>active</strong> search (minutes, interim statements, inquiries, lawyers' letters).</li>
<li>Report date → release: passive.</li>
<li>Dual dating: responsibility only for that note. Redating: all events to the new date.</li>
</ul>

<h3>After release</h3>
<ul>
<li>Subsequently discovered facts: discuss → revise and reissue; if refused and users rely → prevent reliance (notify regulators, users).</li>
<li>Omitted procedure impairing the opinion → perform it promptly.</li>
</ul>

<h3>Representation letter</h3>
<ul>
<li>From the chief executive officer (CEO) and chief financial officer (CFO), addressed to the auditor, dated = report date.</li>
<li>Covers fraud, related parties, completeness, subsequent events, uncorrected misstatements.</li>
<li>Refusal → <strong>disclaimer</strong> or withdraw.</li>
</ul>

<h3>Governance communications</h3>
<p>Scope and timing · significant findings · disagreements · difficulties · uncorrected misstatements.</p>
`,
};
