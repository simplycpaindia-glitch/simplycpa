import type { TopicContent } from "../types";

export const businessProcessAutomation: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Information Systems and Controls (ISC) expects candidates to understand how business processes flow through systems, where risks arise, which automated controls address them, and how automation technologies change the control environment. This topic links transaction cycles, process documentation, and automation such as robotic process automation (RPA).</p>

<h2>Transaction cycles and key controls</h2>
<table>
<thead><tr><th>Cycle</th><th>Process steps</th><th>Key risks</th><th>Key controls</th></tr></thead>
<tbody>
<tr><td><strong>Revenue (order to cash)</strong></td><td>Customer order → credit approval → shipping → billing → cash receipt</td><td>Sales to bad-credit customers, unbilled shipments, fictitious sales, cutoff errors, stolen receipts</td><td>Automated credit limit checks; matching shipping documents to invoices; sequential invoice numbering with gap reports; segregation of cash receipts from recording; lockbox; reconciliations</td></tr>
<tr><td><strong>Expenditure (procure to pay)</strong></td><td>Requisition → purchase order → receiving → vendor invoice → payment</td><td>Unauthorized purchases, fictitious vendors, duplicate payments, paying for goods not received</td><td><strong>Three-way match</strong> (purchase order, receiving report, invoice); approved vendor master file with change controls; duplicate invoice checks; payment approval; positive pay with the bank</td></tr>
<tr><td><strong>Payroll (hire to retire)</strong></td><td>Hiring → time capture → payroll processing → payment → reporting</td><td>Ghost employees, unauthorized rate changes, incorrect hours</td><td>Human resources separate from payroll; approved rate changes; timekeeping controls; payroll register review; direct deposit account change verification</td></tr>
<tr><td>Inventory and production</td><td>Planning → materials → production → finished goods</td><td>Theft, obsolescence, costing errors</td><td>Physical security; perpetual records with cycle counts; standard cost variance review</td></tr>
<tr><td>Financial close (record to report)</td><td>Journal entries → reconciliations → consolidation → statements</td><td>Unauthorized or erroneous entries, management override</td><td>Journal entry approval and review; account reconciliations; close checklists; restricted access to post entries</td></tr>
</tbody>
</table>

<h2>Documenting processes</h2>
<ul>
<li><strong>Narratives:</strong> written descriptions — easy to prepare, harder to analyze.</li>
<li><strong>Flowcharts:</strong> document flows and system flowcharts use standard symbols to show documents, processes, decisions, and data stores — good for spotting control gaps and segregation issues.</li>
<li><strong>Data flow diagrams:</strong> show how data moves between processes, stores, and external entities (without controls or timing).</li>
<li><strong>Business process model and notation:</strong> a standard notation for modeling workflows.</li>
<li><strong>Risk and control matrices:</strong> map each risk to the control addressing it, the control owner, frequency, and type.</li>
</ul>

<h2>Automated versus manual controls</h2>
<table>
<thead><tr><th></th><th>Automated controls</th><th>Manual controls</th></tr></thead>
<tbody>
<tr><td>Consistency</td><td>Performed the same way every time (if the program doesn't change)</td><td>Subject to human error and fatigue</td></tr>
<tr><td>Dependency</td><td>Rely on information technology (IT) general controls (ITGCs), especially change management and access</td><td>Rely on competent, available people</td></tr>
<tr><td>Testing</td><td>Test once (plus ITGCs) — benchmarking in later years</td><td>Sample across the period</td></tr>
<tr><td>Best for</td><td>High-volume, rules-based processing</td><td>Judgment, unusual items, reviews</td></tr>
</tbody>
</table>
<p>Configurable controls in enterprise systems (tolerance settings, approval workflows, required fields) are only as good as their configuration — changes to settings need change management.</p>

<h2>Automation technologies</h2>
<table>
<thead><tr><th>Technology</th><th>What it does</th><th>Control considerations</th></tr></thead>
<tbody>
<tr><td><strong>Robotic process automation (RPA)</strong></td><td>Software "bots" mimic user actions to perform repetitive, rules-based tasks (data entry, reconciliations, report preparation)</td><td>Bots need unique credentials with least privilege (not shared human accounts); bot changes go through change management; monitor for failures when source systems change; logs of bot activity</td></tr>
<tr><td>Workflow automation</td><td>Routes documents and approvals electronically</td><td>Approval rules and delegations must be controlled</td></tr>
<tr><td>Electronic data interchange (EDI)</td><td>Structured business documents exchanged system to system (purchase orders, invoices)</td><td>Authentication of trading partners, encryption, acknowledgment and control totals</td></tr>
<tr><td>Intelligent automation and machine learning</td><td>Classify invoices, match transactions, flag anomalies</td><td>Model governance, training data quality, human review of exceptions, explainability</td></tr>
<tr><td>Continuous monitoring and continuous auditing</td><td>Automated tests run on all transactions, flagging exceptions in near real time</td><td>Tuning thresholds, follow-up on exceptions</td></tr>
</tbody>
</table>

<h2>Benefits and risks of automation</h2>
<ul>
<li><strong>Benefits:</strong> speed, consistency, fewer manual errors, full-population testing, better audit trails.</li>
<li><strong>Risks:</strong> errors replicate at scale; logic can be wrong from the start; dependence on source data quality; reduced human judgment; key-person risk for bot developers; bots failing silently when screens or formats change.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify the control that addresses a risk in a transaction cycle.</li>
<li>Read a flowchart and spot missing controls or segregation issues.</li>
<li>Compare automated and manual controls.</li>
<li>Identify control considerations for RPA and other automation.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The three-way match is the classic expenditure-cycle control: it ensures the company pays only for goods it ordered <em>and</em> received, at the agreed price.</p></div>
`,
  revision: `
<h3>Cycles</h3>
<ul>
<li>Order to cash: credit check, shipping-to-invoice matching, invoice sequence gaps, segregate cash handling.</li>
<li>Procure to pay: <strong>three-way match</strong>, controlled vendor master, duplicate checks.</li>
<li>Payroll: human resources separate from payroll; approved rate changes.</li>
<li>Close: journal entry approval, reconciliations.</li>
</ul>

<h3>Documentation</h3>
<p>Narratives · flowcharts · data flow diagrams · risk and control matrices.</p>

<h3>Automated vs manual</h3>
<p>Automated = consistent, depends on information technology general controls (ITGCs), test once. Manual = judgment, sample over time.</p>

<h3>Automation</h3>
<ul>
<li>Robotic process automation (RPA): unique bot credentials, least privilege, change management, activity logs, failure monitoring.</li>
<li>Electronic data interchange (EDI): authentication, encryption, control totals.</li>
<li>Machine learning: model governance, data quality, human review.</li>
</ul>

<h3>Risk</h3>
<p>Automation repeats errors at scale — bad logic or bad data affects every transaction.</p>
`,
};
