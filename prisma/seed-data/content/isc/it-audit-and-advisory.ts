import type { TopicContent } from "../types";

export const itAuditAdvisory: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Certified public accountants (CPAs) increasingly deliver information technology (IT) audit and advisory services — supporting financial statement audits, testing internal control, assessing cybersecurity, and reviewing system implementations. Information Systems and Controls (ISC) tests the types of engagements, how IT is audited, how data used as evidence is validated, and the independence limits on advisory work.</p>

<h2>Types of IT engagements</h2>
<table>
<thead><tr><th>Engagement</th><th>Purpose</th><th>Standards and output</th></tr></thead>
<tbody>
<tr><td>IT audit in support of a financial statement audit</td><td>Understand the IT environment; test IT general controls (ITGCs) and automated controls the audit relies on</td><td>Generally accepted auditing standards (GAAS) or Public Company Accounting Oversight Board (PCAOB) standards; supports the audit opinion</td></tr>
<tr><td>Integrated audit of internal control over financial reporting (ICFR)</td><td>Test IT controls as part of the opinion on ICFR for public companies</td><td>PCAOB Auditing Standard 2201</td></tr>
<tr><td>System and Organization Controls (SOC) examinations</td><td>Report on a service organization's controls</td><td>Attestation standards; SOC 1, 2, 3 reports</td></tr>
<tr><td>Cybersecurity risk assessment or program review</td><td>Evaluate security posture against a framework</td><td>Consulting standards, or a SOC for Cybersecurity examination if assurance is needed</td></tr>
<tr><td>Pre- and post-implementation reviews</td><td>Assess controls, data conversion, and project governance for a new system</td><td>Consulting</td></tr>
<tr><td>Data analytics and forensic technology</td><td>Analyze full populations, investigate fraud</td><td>Consulting or part of an audit</td></tr>
<tr><td>Agreed-upon procedures on IT matters</td><td>Report findings on specific procedures</td><td>Attestation standards (findings only)</td></tr>
</tbody>
</table>

<h2>Planning an IT audit</h2>
<ol>
<li>Understand the business and how technology supports it: key applications, databases, operating systems, networks, cloud services, interfaces, and service providers.</li>
<li>Identify <strong>risks arising from the use of IT</strong> — unauthorized access, unauthorized changes, inappropriate manual overrides, data loss, interface failures.</li>
<li>Identify the relevant controls — ITGCs and application controls — and decide which to test based on reliance and risk.</li>
<li>Determine the use of <strong>IT specialists</strong> and data analytics, and coordinate with the financial audit team.</li>
</ol>

<h2>Auditing approaches</h2>
<ul>
<li><strong>Auditing around the computer:</strong> compare inputs with outputs without testing the processing — acceptable only for simple, well-documented systems.</li>
<li><strong>Auditing through the computer:</strong> test the processing itself — test data, integrated test facilities, parallel simulation, and review of program logic and configurations.</li>
<li><strong>Auditing with the computer:</strong> using data analytics and generalized audit software to analyze whole populations.</li>
</ul>

<h2>Testing controls</h2>
<ul>
<li><strong>ITGCs:</strong> sample user provisioning, terminations, access reviews, changes, and backup jobs across the period (see the IT General Controls topic).</li>
<li><strong>Automated application controls:</strong> inspect the configuration and perform a test of one (or a few) transactions, supported by effective ITGCs; later years may use <strong>benchmarking</strong>.</li>
<li><strong>IT-dependent manual controls:</strong> a manual review of a system report depends on the report being complete and accurate — test both the manual review and the report.</li>
</ul>

<h2>Validating data used as evidence</h2>
<p>Information produced by the entity (IPE) — system reports and data extracts — must be tested for <strong>completeness and accuracy</strong> before relying on it:</p>
<ul>
<li>Test the report logic (parameters, queries) or obtain assurance through ITGCs over the report.</li>
<li>Reconcile totals to the general ledger; check record counts to the source.</li>
<li>Observe the extraction, or extract data independently.</li>
<li>For data analytics, document data sources, transformations, and how the data set was validated.</li>
</ul>

<h2>Frameworks and professional standards</h2>
<ul>
<li><strong>Control Objectives for Information and Related Technologies (COBIT) 2019</strong> — governance and management objectives for enterprise IT.</li>
<li>The Information Systems Audit and Control Association (ISACA) IT Audit Framework — standards and guidance for IT audit professionals.</li>
<li><strong>National Institute of Standards and Technology (NIST) Cybersecurity Framework</strong> and Special Publication 800-53 for security assessments.</li>
<li>The American Institute of Certified Public Accountants (AICPA) Statement on Standards for Consulting Services governs advisory engagements: competence, due care, planning and supervision, sufficient relevant data, a client understanding, and communicating significant reservations.</li>
</ul>

<h2>Independence and advisory services</h2>
<ul>
<li>For <strong>attest clients</strong>, the AICPA independence rules allow many IT advisory services if the client makes all management decisions, designates a competent overseer, and the understanding is documented. But <strong>designing, developing, or implementing</strong> a financial information system for an attest client, or operating its network or controls, generally <strong>impairs independence</strong> (a self-review threat and management participation).</li>
<li>For <strong>issuer</strong> audit clients, the Sarbanes-Oxley Act prohibits financial information systems design and implementation services outright.</li>
<li>The auditor may evaluate and recommend improvements to controls without impairing independence — as long as management decides and implements.</li>
</ul>

<h2>Reporting results</h2>
<ul>
<li>IT audit findings are communicated with the condition, criteria, cause, effect (risk), and recommendation.</li>
<li>In a financial audit, deficiencies are evaluated for severity (deficiency, significant deficiency, material weakness) and communicated appropriately.</li>
<li>Advisory reports go to the client for management's decisions and are usually restricted.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match an objective to an IT engagement type and standard.</li>
<li>Choose between auditing around, through, and with the computer.</li>
<li>Identify how to test the completeness and accuracy of IPE.</li>
<li>Decide whether an IT service impairs independence.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> An IT-dependent manual control is only as good as the report it relies on. If a question asks what else must be tested when a manager reviews a system report, the answer is the completeness and accuracy of that report.</p></div>
`,
  revision: `
<h3>Engagements</h3>
<p>Information technology (IT) audit for financial statements · integrated audit of internal control · System and Organization Controls (SOC) examinations · cybersecurity assessments · implementation reviews · analytics and forensics · agreed-upon procedures.</p>

<h3>Approaches</h3>
<p>Around the computer (inputs vs outputs) · through (test processing: test data, integrated test facility, parallel simulation) · with (analytics on full populations).</p>

<h3>Testing</h3>
<ul>
<li>IT general controls (ITGCs): sample across period.</li>
<li>Automated controls: test one + ITGCs; benchmarking later.</li>
<li>IT-dependent manual controls: test the review <strong>and</strong> the report.</li>
<li>Information produced by the entity (IPE): completeness and accuracy — logic, reconciliations, record counts.</li>
</ul>

<h3>Independence</h3>
<p>Designing or implementing an attest client's financial system → impaired. Issuers: prohibited by the Sarbanes-Oxley Act (SOX). Recommending is fine; management decides.</p>

<h3>Frameworks</h3>
<p>Control Objectives for Information and Related Technologies (COBIT) 2019 · National Institute of Standards and Technology (NIST) · consulting standards.</p>
`,
};
