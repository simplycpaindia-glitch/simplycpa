import type { TopicContent } from "../types";

export const socEngagements: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Area III of Information Systems and Controls (ISC) — Considerations for System and Organization Controls (SOC) Engagements — is 15–25% of the section. It tests how a service auditor plans, performs, and reports on SOC 1 and SOC 2 examinations under the Statements on Standards for Attestation Engagements (SSAEs), and how the report is structured.</p>

<h2>The SOC family</h2>
<table>
<thead><tr><th>Report</th><th>Subject</th><th>Criteria</th><th>Distribution</th></tr></thead>
<tbody>
<tr><td><strong>SOC 1</strong></td><td>Controls relevant to user entities' <strong>internal control over financial reporting</strong></td><td>Control objectives specified by management</td><td>Restricted to management, user entities, and their auditors</td></tr>
<tr><td><strong>SOC 2</strong></td><td>Controls relevant to security, availability, processing integrity, confidentiality, or privacy</td><td><strong>Trust Services Criteria</strong> (and description criteria)</td><td>Restricted to knowledgeable users</td></tr>
<tr><td><strong>SOC 3</strong></td><td>Same as SOC 2, summarized</td><td>Trust Services Criteria</td><td>General use</td></tr>
<tr><td>SOC for Cybersecurity</td><td>An entity's cybersecurity risk management program</td><td>Description criteria + control criteria (such as the Trust Services Criteria)</td><td>General use</td></tr>
<tr><td>SOC for Supply Chain</td><td>Controls over producing, manufacturing, or distributing goods</td><td>Trust Services Criteria</td><td>Restricted</td></tr>
</tbody>
</table>
<p>A <strong>SOC 2+</strong> report adds criteria from other frameworks (for example, health information requirements) to a SOC 2 examination.</p>

<h3>Type 1 versus Type 2</h3>
<ul>
<li><strong>Type 1:</strong> the fairness of the description and the <strong>suitability of design</strong> of controls, <strong>as of a specified date</strong>.</li>
<li><strong>Type 2:</strong> the same, plus the <strong>operating effectiveness</strong> of controls <strong>throughout a specified period</strong> (typically 6–12 months), with a description of tests and results.</li>
</ul>

<h2>The Trust Services Criteria</h2>
<ul>
<li><strong>Security</strong> — the <strong>common criteria</strong>, required in every SOC 2 — protection against unauthorized access, disclosure, and damage. They are organized using the Committee of Sponsoring Organizations of the Treadway Commission (COSO) components: control environment, communication and information, risk assessment, monitoring, and control activities, plus logical and physical access, system operations, change management, and risk mitigation.</li>
<li><strong>Availability</strong> — systems are available for operation as committed (capacity, backup, recovery).</li>
<li><strong>Processing integrity</strong> — processing is complete, valid, accurate, timely, and authorized.</li>
<li><strong>Confidentiality</strong> — confidential information is protected as committed.</li>
<li><strong>Privacy</strong> — personal information is collected, used, retained, disclosed, and disposed of as committed.</li>
</ul>
<p>Points of focus illustrate each criterion but are not all required.</p>

<h2>Parts of a SOC report</h2>
<ol>
<li><strong>Service auditor's report</strong> (opinion).</li>
<li><strong>Management's assertion</strong> — management's written statement about the description and controls (required).</li>
<li><strong>Management's description of the system</strong> — services, infrastructure, software, people, procedures, data, principal service commitments and system requirements (SOC 2), relevant aspects of the control environment, control objectives or criteria and related controls, complementary user entity controls, and subservice organizations.</li>
<li>For Type 2: <strong>description of the tests of controls and results</strong>.</li>
<li>Optional: other information provided by the service organization (not covered by the opinion).</li>
</ol>

<h2>Performing the engagement</h2>
<ul>
<li><strong>Acceptance:</strong> independence; management's agreement to provide an assertion and access; suitable criteria; a reasonable period of coverage.</li>
<li><strong>Planning:</strong> understand the system, assess risks that the description is not fairly presented and that controls are not suitably designed or operating effectively; set materiality (considering qualitative factors).</li>
<li><strong>Evidence:</strong> evaluate the description against the description criteria; test design (inquiry plus observation and inspection, walkthroughs); for Type 2, test operating effectiveness across the whole period (inquiry combined with inspection, observation, and reperformance; sampling).</li>
<li><strong>Deviations:</strong> investigate their nature and cause; determine whether they mean the control objective or criterion was not achieved.</li>
<li><strong>Using internal audit:</strong> the service auditor may use internal auditors' work or direct assistance within limits, and must describe that use in the tests section.</li>
<li><strong>Written representations</strong> from management, and consideration of <strong>subsequent events</strong> up to the report date.</li>
</ul>

<h2>Subservice organizations</h2>
<ul>
<li><strong>Carve-out method:</strong> the subservice organization's controls are excluded from the description and testing; the description identifies the services it performs and the <strong>complementary subservice organization controls</strong> expected.</li>
<li><strong>Inclusive method:</strong> its relevant controls are included and tested; it must provide its own written assertion.</li>
</ul>

<h2>Modified opinions</h2>
<table>
<thead><tr><th>Situation</th><th>Opinion</th></tr></thead>
<tbody>
<tr><td>The description is not fairly presented, or controls are not suitably designed, or (Type 2) not operating effectively — material but not pervasive</td><td><strong>Qualified</strong> — the opinion paragraph identifies the affected control objectives or criteria</td></tr>
<tr><td>The same, but <strong>pervasive</strong></td><td><strong>Adverse</strong></td></tr>
<tr><td>Scope limitation — unable to obtain sufficient evidence, or management refuses to provide an assertion or representations</td><td><strong>Qualified</strong> or <strong>disclaimer</strong> (or withdraw)</td></tr>
</tbody>
</table>
<p>Deviations that don't prevent achievement of a control objective are described in the tests section but don't modify the opinion.</p>

<h2>How it is tested</h2>
<ul>
<li>Choose the SOC report and type for a user's need.</li>
<li>Identify required elements of management's description and the report.</li>
<li>Apply carve-out versus inclusive treatment.</li>
<li>Decide the opinion when deviations or description misstatements are found.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Management owns the <em>description</em> and the <em>assertion</em>; the service auditor opines on them. If management won't provide an assertion, the service auditor can't issue an unmodified opinion.</p></div>
`,
  revision: `
<h3>System and Organization Controls (SOC) reports</h3>
<ul>
<li>SOC 1: user entities' financial reporting; management's control objectives; restricted.</li>
<li>SOC 2: Trust Services Criteria; restricted. SOC 3: general use. SOC 2+: extra frameworks.</li>
<li>Type 1: description + design at a date. Type 2: + operating effectiveness over a period, with tests and results.</li>
</ul>

<h3>Trust Services Criteria</h3>
<p>Security (common criteria, always) · availability · processing integrity · confidentiality · privacy.</p>

<h3>Report parts</h3>
<p>Auditor's opinion · management's assertion · system description · tests and results (Type 2) · optional other information.</p>

<h3>Subservice organizations</h3>
<p>Carve-out (excluded; complementary subservice organization controls listed) vs inclusive (tested; their own assertion).</p>

<h3>Opinions</h3>
<p>Material description or control failure → qualified; pervasive → adverse; scope limitation or no assertion → qualified, disclaimer, or withdraw.</p>
`,
};
