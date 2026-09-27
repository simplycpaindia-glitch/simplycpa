import type { TopicContent } from "../types";

export const attestationSoc: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Attestation engagements report on subject matter other than historical financial statements — internal controls at a service organization, compliance with laws, prospective information, sustainability metrics. They follow the Statements on Standards for Attestation Engagements (SSAEs). Auditing and Attestation (AUD) tests the three types of attestation engagements, the elements of an engagement, and System and Organization Controls (SOC) reports.</p>

<h2>Elements of an attestation engagement</h2>
<ul>
<li><strong>Subject matter</strong> — what is measured (for example, controls at a service organization, greenhouse gas emissions, compliance with a contract).</li>
<li><strong>Criteria</strong> — the benchmarks used to measure or evaluate the subject matter. They must be <strong>suitable</strong> (relevant, objective, measurable, complete) and <strong>available</strong> to intended users.</li>
<li><strong>Responsible party</strong> — usually management; the <strong>engaging party</strong> hires the practitioner and may be the same.</li>
<li><strong>Assertion</strong> — a statement by the responsible party about the subject matter measured against the criteria.</li>
</ul>
<p>Preconditions include independence (for all attestation engagements), a responsible party that accepts responsibility, suitable and available criteria, and access to evidence.</p>

<h2>Three types of attestation engagements</h2>
<table>
<thead><tr><th></th><th>Examination</th><th>Review</th><th>Agreed-upon procedures</th></tr></thead>
<tbody>
<tr><td>Assurance</td><td><strong>Reasonable</strong></td><td><strong>Limited</strong></td><td>None — findings only</td></tr>
<tr><td>Output</td><td><strong>Opinion</strong></td><td><strong>Conclusion</strong> ("not aware of any material modifications")</td><td>Procedures and findings</td></tr>
<tr><td>Procedures</td><td>Risk assessment, tests of controls where relevant, substantive procedures — like an audit</td><td>Primarily inquiry and analytical procedures</td><td>Specific procedures the engaging party acknowledges as appropriate</td></tr>
<tr><td>Written assertion</td><td>Requested; if the engaging party is also the responsible party and refuses, withdraw (unless a direct examination under SSAE No. 21, where the practitioner measures the subject matter itself)</td><td>Requested; refusal by an engaging responsible party → withdraw</td><td>Not required</td></tr>
<tr><td>Independence</td><td>Required</td><td>Required</td><td>Required</td></tr>
</tbody>
</table>
<p>Reports may be <strong>restricted</strong> when criteria are available only to specified parties or are suitable only for them.</p>

<h2>System and Organization Controls (SOC) reports</h2>
<table>
<thead><tr><th>Report</th><th>Subject matter</th><th>Users</th></tr></thead>
<tbody>
<tr><td><strong>SOC 1</strong></td><td>Controls at a service organization relevant to user entities' <strong>internal control over financial reporting</strong> (for example, payroll processing)</td><td>Restricted — user entities and their auditors</td></tr>
<tr><td><strong>SOC 2</strong></td><td>Controls relevant to the <strong>Trust Services Criteria</strong>: security, availability, processing integrity, confidentiality, and privacy</td><td>Restricted — knowledgeable users (customers, regulators, business partners)</td></tr>
<tr><td><strong>SOC 3</strong></td><td>Same criteria as SOC 2, without the detailed description of tests and results</td><td><strong>General use</strong> — can be posted on a website</td></tr>
<tr><td>SOC for Cybersecurity</td><td>An entity-wide cybersecurity risk management program</td><td>General use</td></tr>
<tr><td>SOC for Supply Chain</td><td>Controls over producing, manufacturing, or distributing goods</td><td>Customers and business partners</td></tr>
</tbody>
</table>

<h3>Type 1 versus Type 2</h3>
<ul>
<li><strong>Type 1:</strong> fairness of management's description of the system and the <strong>suitability of design</strong> of controls <strong>as of a point in time</strong>.</li>
<li><strong>Type 2:</strong> everything in Type 1 plus the <strong>operating effectiveness</strong> of controls <strong>throughout a period</strong> (usually 6–12 months), with a description of tests and results.</li>
<li>A user auditor needs a <strong>Type 2</strong> report to reduce assessed control risk.</li>
</ul>

<h3>SOC 2 Trust Services Criteria</h3>
<ul>
<li><strong>Security</strong> (the common criteria) is included in <strong>every</strong> SOC 2 engagement.</li>
<li>Availability, processing integrity, confidentiality, and privacy are included as the service organization chooses.</li>
<li>The common criteria are organized using the Committee of Sponsoring Organizations of the Treadway Commission (COSO) internal control components.</li>
</ul>

<h3>Subservice organizations and user controls</h3>
<ul>
<li><strong>Inclusive method:</strong> the subservice organization's relevant controls are included in the description and testing.</li>
<li><strong>Carve-out method:</strong> the subservice organization's controls are excluded; the description identifies the services it performs and any complementary subservice organization controls expected.</li>
<li><strong>Complementary user entity controls (CUECs):</strong> controls the service organization assumes its customers will have (for example, reviewing payroll reports). The user entity and its auditor must evaluate them.</li>
</ul>

<h3>Using a SOC 1 report as a user auditor</h3>
<ul>
<li>Evaluate the service auditor's professional competence and independence.</li>
<li>Check that the report covers the relevant period (a gap requires bridge letters or additional procedures), the relevant controls, and the relevant subservice organizations.</li>
<li>Consider exceptions noted by the service auditor and test CUECs.</li>
<li>Do not refer to the service auditor in the user auditor's report.</li>
</ul>

<h2>Other attestation subjects</h2>
<table>
<thead><tr><th>Subject</th><th>Key rules</th></tr></thead>
<tbody>
<tr><td>Prospective financial information</td><td><strong>Forecasts</strong> (expected results) may be for general use; <strong>projections</strong> (results under hypothetical assumptions) are restricted to parties negotiating directly with the entity. Practitioners may examine, compile, or apply agreed-upon procedures; an examination opinion covers whether the assumptions provide a reasonable basis. Reports warn that results may differ.</td></tr>
<tr><td>Pro forma financial information</td><td>Shows the effect of a transaction as if it occurred earlier; examination or review; the historical statements must have been audited or reviewed</td></tr>
<tr><td>Compliance attestation</td><td>Compliance with laws, regulations, contracts, or grants; examination or agreed-upon procedures (reviews are not permitted for compliance)</td></tr>
<tr><td>Sustainability and greenhouse gas information</td><td>Examination (reasonable assurance) or review (limited assurance) of metrics against suitable criteria</td></tr>
</tbody>
</table>

<h2>How it is tested</h2>
<ul>
<li>Match an engagement type to its assurance, report form, and assertion requirements.</li>
<li>Choose the SOC report and type a user needs.</li>
<li>Apply the carve-out and inclusive methods and CUECs.</li>
<li>Know the restrictions on projections and compliance engagements.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> SOC 1 = financial reporting (for auditors). SOC 2 = Trust Services Criteria with security always included (for knowledgeable users). SOC 3 = general use. Type 2 = operating effectiveness over a period — the one a user auditor relies on.</p></div>
`,
  revision: `
<h3>Attestation (Statements on Standards for Attestation Engagements (SSAEs))</h3>
<ul>
<li>Elements: subject matter, <strong>suitable and available</strong> criteria, responsible party, assertion.</li>
<li>Examination = reasonable assurance, opinion. Review = limited, conclusion. Agreed-upon procedures = findings.</li>
<li>Independence required for all three.</li>
<li>Assertion refused by engaging responsible party → withdraw (except direct examinations).</li>
</ul>

<h3>System and Organization Controls (SOC) reports</h3>
<ul>
<li>SOC 1: controls over user entities' financial reporting; restricted.</li>
<li>SOC 2: Trust Services Criteria — <strong>security always</strong> + availability, processing integrity, confidentiality, privacy; restricted.</li>
<li>SOC 3: general use.</li>
<li>Type 1: design at a point in time. Type 2: + operating effectiveness over a period.</li>
</ul>

<h3>Subservice organizations</h3>
<p>Inclusive (controls included) vs carve-out (excluded). Complementary user entity controls (CUECs) must be tested by users.</p>

<h3>Other</h3>
<ul>
<li>Forecast: general use. Projection: restricted.</li>
<li>Compliance: examination or agreed-upon procedures — no review.</li>
</ul>
`,
};
