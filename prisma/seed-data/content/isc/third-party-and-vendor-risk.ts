import type { TopicContent } from "../types";

export const thirdPartyRisk: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Organizations outsource payroll, hosting, software, payment processing, and more — but they cannot outsource accountability for the risks. Information Systems and Controls (ISC) Area III (considerations for System and Organization Controls (SOC) engagements, 15–25%) tests how organizations manage third-party risk across the vendor life cycle and how they use SOC reports as part of that monitoring.</p>

<h2>Types of third-party risk</h2>
<table>
<thead><tr><th>Risk</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Security and privacy</td><td>A vendor with access to customer data suffers a breach</td></tr>
<tr><td>Operational and availability</td><td>A cloud provider outage halts order processing</td></tr>
<tr><td>Financial</td><td>A critical supplier becomes insolvent</td></tr>
<tr><td>Compliance and legal</td><td>A processor mishandles data covered by privacy laws; the company is still liable</td></tr>
<tr><td>Reputational</td><td>A supplier's labor or ethics scandal</td></tr>
<tr><td>Concentration</td><td>Many critical services depend on one provider</td></tr>
<tr><td><strong>Fourth-party</strong> (nth-party)</td><td>Your vendor's own subcontractors (subservice organizations) introduce risk you don't see directly</td></tr>
</tbody>
</table>

<h2>The third-party risk management life cycle</h2>
<ol>
<li><strong>Planning and risk assessment</strong> — define the need; <strong>tier</strong> vendors by criticality and the sensitivity of data or access involved, so effort matches risk.</li>
<li><strong>Due diligence</strong> — before signing: security questionnaires, SOC reports, certifications (for example, International Organization for Standardization (ISO) 27001), financial stability, references, insurance, business continuity capability, and use of subcontractors.</li>
<li><strong>Contracting</strong> — include:
<ul>
<li>Scope, performance standards, and <strong>service level agreements (SLAs)</strong> with remedies;</li>
<li>Security and privacy requirements, data ownership, and data location;</li>
<li><strong>Right-to-audit</strong> clauses and obligations to provide SOC reports;</li>
<li><strong>Breach notification</strong> timelines;</li>
<li>Subcontractor approval and flow-down requirements;</li>
<li>Business continuity obligations;</li>
<li>Termination rights and <strong>exit provisions</strong> (return or destruction of data, transition assistance).</li>
</ul></li>
<li><strong>Onboarding</strong> — grant least-privilege access, set up monitoring, record the vendor in an inventory.</li>
<li><strong>Ongoing monitoring</strong> — review SOC reports annually, track SLA performance and incidents, reassess risk when services change, monitor news and financial health.</li>
<li><strong>Termination (offboarding)</strong> — remove all access promptly, retrieve or certify destruction of data, transition services.</li>
</ol>

<h2>Using SOC reports in vendor monitoring</h2>
<table>
<thead><tr><th>Report</th><th>Use</th></tr></thead>
<tbody>
<tr><td>SOC 1 Type 2</td><td>Vendor processes that affect the customer's financial reporting (payroll, claims processing) — relied on by the customer's management and auditors</td></tr>
<tr><td>SOC 2 Type 2</td><td>Security, availability, processing integrity, confidentiality, and privacy of the vendor's system (cloud hosting, software as a service)</td></tr>
<tr><td>SOC 3</td><td>A general-use summary — useful for initial screening, not detailed reliance</td></tr>
</tbody>
</table>
<p>When reviewing a SOC report, the customer should check:</p>
<ul>
<li><strong>Scope</strong> — the right services, locations, and systems are covered.</li>
<li><strong>Period</strong> — it covers enough of the customer's fiscal year; for a gap, obtain a <strong>bridge (gap) letter</strong> from the vendor's management and consider other procedures.</li>
<li><strong>Opinion</strong> — unmodified, or qualified (and why).</li>
<li><strong>Exceptions</strong> noted in testing and management's responses — assess the effect on the customer.</li>
<li><strong>Complementary user entity controls (CUECs)</strong> — controls the vendor expects the customer to operate (for example, reviewing reports, managing its own user access). The customer must implement and test these.</li>
<li><strong>Subservice organizations</strong> — whether the carve-out or inclusive method was used; for carve-outs, obtain those providers' SOC reports or other assurance, and review complementary subservice organization controls.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company's payroll provider issues a SOC 1 Type 2 report covering January 1 to September 30. The company's year ends December 31. The company obtains a bridge letter stating there were no significant control changes from October 1 to December 31, reviews the report's exceptions, and confirms it performs the listed complementary user entity controls — such as reviewing payroll registers before approving each payroll.</p></div>

<h2>Other assurance options</h2>
<ul>
<li>Vendor questionnaires (standardized versions exist), on-site or virtual assessments, and penetration test summaries.</li>
<li>Continuous monitoring services that rate vendors' external security posture.</li>
<li>Certifications (ISO 27001, the Payment Card Industry Data Security Standard (PCI DSS)) — useful but narrower than a SOC 2 report.</li>
</ul>

<h2>Governance</h2>
<ul>
<li>Board and senior management oversight, with a third-party risk policy and clear ownership (usually the business relationship owner, supported by procurement, security, legal, and compliance).</li>
<li>A complete vendor <strong>inventory</strong> with risk tiers.</li>
<li>For banks, federal regulators' interagency guidance on third-party relationships (2023) sets expectations across the life cycle.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Order and describe the vendor life cycle stages.</li>
<li>Identify contract provisions that manage vendor risk.</li>
<li>Evaluate a SOC report for scope, period gaps, exceptions, and CUECs.</li>
<li>Recognize fourth-party and concentration risk.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A clean SOC report doesn't finish the job — the customer must still operate the complementary user entity controls and cover any period not included in the report.</p></div>
`,
  revision: `
<h3>Risks</h3>
<p>Security · operational · financial · compliance · reputational · concentration · fourth-party (subcontractors).</p>

<h3>Life cycle</h3>
<ol>
<li>Plan and <strong>tier</strong> by criticality</li>
<li>Due diligence (questionnaires, System and Organization Controls (SOC) reports, financials)</li>
<li>Contract: service level agreements (SLAs), security, <strong>right to audit</strong>, breach notice, subcontractors, exit terms</li>
<li>Onboard with least privilege</li>
<li>Monitor (annual SOC review, SLA tracking)</li>
<li>Offboard: remove access, return or destroy data</li>
</ol>

<h3>Reviewing a SOC report</h3>
<ul>
<li>Scope · period (<strong>bridge letter</strong> for gaps) · opinion · exceptions.</li>
<li>Complementary user entity controls (CUECs) — customer must perform.</li>
<li>Carve-out subservice organizations → get their assurance too.</li>
</ul>

<h3>Which report</h3>
<p>SOC 1 → financial reporting. SOC 2 → security and other trust criteria. SOC 3 → screening only.</p>
`,
};
