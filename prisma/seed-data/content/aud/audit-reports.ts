import type { TopicContent } from "../types";

export const auditReports: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>The auditor's report is the product of the audit. Auditing and Attestation (AUD) Area IV tests the structure of the report for nonissuers (Statement on Auditing Standards (SAS) No. 134) and issuers (Public Company Accounting Oversight Board (PCAOB) standards), the four opinion types, when to add emphasis-of-matter or other-matter paragraphs, and special reporting situations. Task-based simulations often ask you to pick the right opinion or fix a draft report.</p>

<h2>The unmodified report for a nonissuer (SAS No. 134)</h2>
<ol>
<li><strong>Title</strong> including the word "independent" (Independent Auditor's Report).</li>
<li><strong>Addressee</strong> — usually the board of directors or shareholders.</li>
<li><strong>Opinion</strong> section — <em>first</em>: identifies the entity and statements audited, and states the opinion ("present fairly, in all material respects… in accordance with accounting principles generally accepted in the United States of America").</li>
<li><strong>Basis for Opinion</strong> — audit conducted in accordance with generally accepted auditing standards (GAAS); the auditor is independent and has met ethical responsibilities; evidence is sufficient and appropriate.</li>
<li>Going concern section and key audit matters, if applicable.</li>
<li><strong>Responsibilities of Management</strong> for the financial statements, internal control, and (when required) evaluating going concern.</li>
<li><strong>Auditor's Responsibilities</strong> — reasonable assurance (not absolute); professional judgment and skepticism; risk assessment; considering internal control but not opining on it (unless engaged to); evaluating going concern; communicating with those charged with governance.</li>
<li>Other reporting responsibilities (other information, supplementary information, required supplementary information) if applicable.</li>
<li><strong>Signature</strong> of the firm, <strong>city and state</strong>, and <strong>date</strong>.</li>
</ol>

<h2>The four opinions</h2>
<table>
<thead><tr><th>Cause</th><th>Material but not pervasive</th><th>Material and pervasive</th></tr></thead>
<tbody>
<tr><td>Financial statements are <strong>materially misstated</strong> (departure from the framework, including inadequate disclosure)</td><td><strong>Qualified</strong> ("except for")</td><td><strong>Adverse</strong> ("do not present fairly")</td></tr>
<tr><td>Inability to obtain sufficient appropriate evidence (<strong>scope limitation</strong>)</td><td><strong>Qualified</strong> ("except for the possible effects")</td><td><strong>Disclaimer</strong> ("we do not express an opinion")</td></tr>
</tbody>
</table>
<p><strong>Pervasive</strong> effects are not confined to specific elements, or, if confined, represent a substantial portion of the statements, or are fundamental to users' understanding of disclosures.</p>

<h3>How modifications change the report</h3>
<ul>
<li>The Opinion section is retitled "Qualified Opinion", "Adverse Opinion", or "Disclaimer of Opinion".</li>
<li>The Basis section is retitled (for example, "Basis for Qualified Opinion") and describes the matter and, where practicable, its financial effect.</li>
<li>In a <strong>disclaimer</strong>, the auditor does not state that evidence is sufficient; the Auditor's Responsibilities section is amended; and there is no reference to the audit being conducted "in accordance with GAAS" beyond the required statements. A disclaimer still describes the matters giving rise to it.</li>
<li>Scope limitations imposed by <strong>management</strong> after acceptance: request removal; if refused, communicate with those charged with governance, then qualify, disclaim, or withdraw.</li>
</ul>

<h2>Emphasis-of-matter and other-matter paragraphs</h2>
<table>
<thead><tr><th></th><th>Emphasis-of-matter paragraph</th><th>Other-matter paragraph</th></tr></thead>
<tbody>
<tr><td>Refers to</td><td>A matter <strong>appropriately presented or disclosed</strong> in the financial statements that is fundamental to users' understanding</td><td>A matter <strong>not presented</strong> in the statements that is relevant to users' understanding of the audit, the auditor's responsibilities, or the report</td></tr>
<tr><td>Required examples</td><td>Justified change in accounting principle with a material effect (consistency); correction of a material misstatement in previously issued statements; special purpose framework</td><td>Omitted or incomplete required supplementary information; restricting use of the report; prior-period statements audited by a predecessor (unless reissued); prior-period opinion that differs from the original</td></tr>
<tr><td>Voluntary examples</td><td>Major catastrophe, significant related party transactions, significant subsequent events, uncertainty about litigation</td><td>—</td></tr>
<tr><td>Effect on opinion</td><td>None — the opinion remains unmodified</td><td>None</td></tr>
</tbody>
</table>

<h2>Key audit matters</h2>
<p>For nonissuers, key audit matters (KAMs) are communicated only if the auditor is <strong>engaged</strong> to do so (or required by law). They are matters that, in the auditor's judgment, were of most significance in the audit, selected from matters communicated to those charged with governance.</p>

<h2>Issuer audits (PCAOB standards)</h2>
<ul>
<li>Report titled "Report of Independent Registered Public Accounting Firm", with the Opinion section first.</li>
<li>States the audit was conducted in accordance with the <strong>standards of the PCAOB</strong> and that the firm is registered with the PCAOB and required to be independent.</li>
<li>Discloses the <strong>year the auditor began serving</strong> consecutively as the company's auditor (tenure).</li>
<li><strong>Critical audit matters (CAMs)</strong>: matters communicated to the audit committee that relate to material accounts or disclosures and involved especially challenging, subjective, or complex judgment. Required for most issuer audits (not emerging growth companies, brokers and dealers, or certain investment companies). If none, the report states so.</li>
<li><strong>Integrated audit</strong> of internal control over financial reporting (ICFR) (Auditing Standard (AS) 2201) for accelerated and large accelerated filers — separate or combined reports; a material weakness results in an <strong>adverse</strong> opinion on ICFR.</li>
</ul>

<h2>Other reporting situations</h2>
<table>
<thead><tr><th>Situation</th><th>Reporting</th></tr></thead>
<tbody>
<tr><td>Other information in the annual report (SAS No. 137)</td><td>Read it for material inconsistencies with the statements; include an "Other Information" section; describe any uncorrected material misstatement of the other information (the opinion is unaffected)</td></tr>
<tr><td>Supplementary information accompanying the statements</td><td>Report on whether it is fairly stated in relation to the statements as a whole</td></tr>
<tr><td>Required supplementary information (for example, management's discussion and analysis for governments)</td><td>Limited procedures; omission or problems → other-matter paragraph; opinion unmodified</td></tr>
<tr><td>Special purpose frameworks (cash, tax, regulatory, contractual basis)</td><td>Emphasis-of-matter paragraph describing the framework; regulatory and contractual bases may require restricted use</td></tr>
<tr><td>Comparative statements</td><td>Update the prior-period opinion; a different opinion on the prior period requires an other-matter paragraph explaining why</td></tr>
<tr><td>Predecessor's prior-year report not reissued</td><td>Successor adds an other-matter paragraph describing the predecessor's report and date</td></tr>
<tr><td>Single financial statement or specific element</td><td>Permitted; materiality set relative to that statement or element</td></tr>
</tbody>
</table>

<h2>How it is tested</h2>
<ul>
<li>Choose the opinion from a scenario (misstatement or scope; pervasive or not).</li>
<li>Identify missing or misplaced report elements.</li>
<li>Decide between emphasis-of-matter and other-matter paragraphs.</li>
<li>Compare nonissuer and issuer reports (tenure, CAMs, PCAOB wording).</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Use the two-by-two grid: <em>What's wrong?</em> (misstatement or scope limitation) and <em>How bad?</em> (material or pervasive). Misstatement goes to qualified or adverse; scope goes to qualified or disclaimer. An emphasis-of-matter paragraph never changes the opinion.</p></div>
`,
  revision: `
<h3>Nonissuer report (Statement on Auditing Standards (SAS) No. 134)</h3>
<p>Title (independent) · Addressee · <strong>Opinion first</strong> · Basis for Opinion · (Going concern, key audit matters) · Management's responsibilities · Auditor's responsibilities · Other reporting · Signature, city and state, date.</p>

<h3>Opinion grid</h3>
<table>
<thead><tr><th></th><th>Material</th><th>Pervasive</th></tr></thead>
<tbody>
<tr><td>Misstatement</td><td>Qualified</td><td>Adverse</td></tr>
<tr><td>Scope limitation</td><td>Qualified</td><td>Disclaimer</td></tr>
</tbody>
</table>

<h3>Paragraphs (opinion unchanged)</h3>
<ul>
<li>Emphasis-of-matter: matter <strong>in</strong> the statements — consistency change, restatement, special purpose framework.</li>
<li>Other-matter: matter <strong>not in</strong> the statements — omitted required supplementary information, restricted use, predecessor's report.</li>
</ul>

<h3>Issuers (Public Company Accounting Oversight Board (PCAOB))</h3>
<ul>
<li>Auditor tenure disclosed; critical audit matters (CAMs) required for most.</li>
<li>Internal control over financial reporting: material weakness → adverse.</li>
</ul>

<h3>Other</h3>
<p>Other information: separate section; opinion unaffected. Management scope limitation → qualify, disclaim, or withdraw.</p>
`,
};
