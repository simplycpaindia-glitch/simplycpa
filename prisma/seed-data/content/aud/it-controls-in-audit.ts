import type { TopicContent } from "../types";

export const itControlsInAudit: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Nearly every entity processes transactions through information technology (IT). Statement on Auditing Standards (SAS) No. 145 requires the auditor to understand the IT environment, identify risks arising from the use of IT, and evaluate the general IT controls that address them. Auditing and Attestation (AUD) tests the difference between application controls and IT general controls (ITGCs), their effect on reliance, and computer-assisted audit techniques.</p>

<h2>Understanding the IT environment</h2>
<ul>
<li>The IT applications and supporting infrastructure (networks, operating systems, databases) relevant to financial reporting.</li>
<li>The IT processes: managing access, managing program changes, and managing IT operations.</li>
<li>Whether the entity uses <strong>service organizations</strong> or cloud providers for processing.</li>
<li>Risks arising from IT: unauthorized access to data (improper changes or fictitious transactions), unauthorized program changes, failure to apply necessary changes, inappropriate manual intervention, and loss of data.</li>
</ul>

<h2>Two layers of controls</h2>
<table>
<thead><tr><th></th><th>IT general controls</th><th>Application controls</th></tr></thead>
<tbody>
<tr><td>Scope</td><td>The IT environment as a whole — support the continued functioning of application controls and the integrity of data</td><td>Specific business processes and transactions</td></tr>
<tr><td>Examples</td><td>User access and password management; program change management; program development; computer operations (backups, job scheduling, incident management)</td><td>Edit and validation checks, three-way match, credit limit checks, batch totals, automated calculations, exception reports</td></tr>
<tr><td>Effect of weakness</td><td>Can undermine <strong>all</strong> application controls and system-generated reports that rely on the affected system</td><td>Affects the specific assertion the control addresses</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company's automated three-way match (purchase order, receiving report, invoice) is well designed. However, application programmers have unrestricted access to change the production program. Because this weakness in change management means the program could be altered without detection, the auditor cannot rely on the automated control without other evidence.</p></div>

<h3>IT general control categories</h3>
<ul>
<li><strong>Access to programs and data:</strong> authentication (passwords, multi-factor authentication), authorization based on least privilege, periodic user access reviews, prompt removal of terminated users, restricted privileged ("superuser") access.</li>
<li><strong>Program changes:</strong> changes are requested, authorized, tested (by users), approved, and migrated to production by someone other than the developer; emergency changes are reviewed after the fact.</li>
<li><strong>Program development and acquisition:</strong> new systems are tested and approved, and data conversion is controlled.</li>
<li><strong>Computer operations:</strong> job scheduling and monitoring, backup and recovery, and problem management.</li>
</ul>

<h3>Segregation of duties in IT</h3>
<p>Separate systems development (programmers), IT operations (computer operators), and users. Programmers should not have access to production programs or live data; operators should not be able to change programs; database administration should be separate from application programming.</p>

<h2>Application controls by stage</h2>
<table>
<thead><tr><th>Stage</th><th>Controls</th></tr></thead>
<tbody>
<tr><td>Input</td><td><strong>Field (format) check</strong> — correct data type; <strong>validity check</strong> — value on an approved list; <strong>limit (reasonableness) check</strong> — within a set range; <strong>check digit</strong> — detects transposed identification numbers; <strong>completeness check</strong> — required fields filled; <strong>closed-loop verification</strong> — displays the customer name for an entered number</td></tr>
<tr><td>Processing</td><td><strong>Batch controls</strong>: record count, financial total (sum of amounts), <strong>hash total</strong> (sum of a meaningless field such as account numbers); run-to-run totals; sequence checks</td></tr>
<tr><td>Output</td><td>Reconciliation of output to input totals, review of exception reports, controlled distribution of reports</td></tr>
</tbody>
</table>

<h2>Testing IT controls</h2>
<ul>
<li>An <strong>automated control</strong> performs consistently unless the program changes. With effective ITGCs (especially change management), testing one instance, or a small number, may be sufficient.</li>
<li><strong>Benchmarking:</strong> if an automated control was tested in a prior year, has not changed, and ITGCs are effective, the auditor may rely on prior testing without fully retesting each year (verifying the control hasn't changed).</li>
<li>If ITGCs are ineffective, the auditor may test the application controls more extensively, test compensating manual controls, or rely on substantive procedures.</li>
<li><strong>System-generated reports</strong> used as audit evidence (aging reports, inventory listings) require evidence about their accuracy and completeness — often by testing the report logic and related ITGCs.</li>
</ul>

<h2>Computer-assisted audit techniques</h2>
<table>
<thead><tr><th>Technique</th><th>How it works</th></tr></thead>
<tbody>
<tr><td>Generalized audit software and data analytics</td><td>The auditor's software reads client data to recalculate, select samples, stratify, find duplicates or gaps, age balances, and test 100% of a population</td></tr>
<tr><td>Test data</td><td>The auditor runs fictitious transactions (valid and invalid) through the <strong>client's program</strong> to see if controls work — tests the program at a point in time</td></tr>
<tr><td>Parallel simulation</td><td>The auditor processes <strong>real client data</strong> through the auditor's own program and compares results with the client's</td></tr>
<tr><td>Integrated test facility</td><td>Fictitious transactions are processed alongside live data using a dummy entity in the client's system</td></tr>
<tr><td>Embedded audit modules</td><td>Code within the client's system that continuously captures transactions meeting audit criteria</td></tr>
<tr><td>Tagging and tracing</td><td>Marking transactions to follow them through processing</td></tr>
</tbody>
</table>

<h2>Service organizations</h2>
<p>When a client outsources processing (payroll, cloud hosting), the user auditor may use a System and Organization Controls (SOC) 1 report: a <strong>Type 1</strong> report covers design at a point in time; a <strong>Type 2</strong> report also covers operating effectiveness over a period and is needed to reduce control risk. The user auditor must also test <strong>complementary user entity controls</strong> and consider any gap between the report's period and the audit period.</p>

<h2>How it is tested</h2>
<ul>
<li>Classify a control as an ITGC or application control.</li>
<li>Identify the effect of an ITGC deficiency on reliance.</li>
<li>Match input and batch controls to the errors they prevent.</li>
<li>Choose the right computer-assisted technique for an objective.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Test data uses <em>fake data in the client's program</em>; parallel simulation uses <em>real data in the auditor's program</em>. A hash total adds numbers that mean nothing financially (account numbers) — a financial total adds dollar amounts.</p></div>
`,
  revision: `
<h3>Two layers</h3>
<ul>
<li>Information technology general controls (ITGCs): access, program changes, development, operations. Weakness undermines every application control relying on that system.</li>
<li>Application controls: input, processing, output.</li>
</ul>

<h3>Input checks</h3>
<p>Field · validity · limit/reasonableness · check digit · completeness · closed-loop verification.</p>

<h3>Batch controls</h3>
<p>Record count · financial total · <strong>hash total</strong> (meaningless field).</p>

<h3>Segregation</h3>
<p>Programmers ≠ operators ≠ users; programmers no access to production.</p>

<h3>Testing</h3>
<ul>
<li>Automated control + effective change management → test one instance; benchmarking in later years.</li>
<li>System reports → test accuracy and completeness.</li>
</ul>

<h3>Techniques</h3>
<ul>
<li>Test data: fake data, client program.</li>
<li>Parallel simulation: real data, auditor program.</li>
<li>Integrated test facility: dummy entity in live system.</li>
<li>Embedded audit module: continuous monitoring.</li>
</ul>

<h3>Service organizations</h3>
<p>System and Organization Controls (SOC) 1 Type 2 to rely on controls; test complementary user entity controls.</p>
`,
};
