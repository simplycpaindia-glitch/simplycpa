import type { TopicContent } from "../types";

export const governmentWideAcfr: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Business Analysis and Reporting (BAR) Area III, based on Governmental Accounting Standards Board (GASB) standards, tests how a government's fund statements are converted into government-wide statements, the format of the statement of activities, the reporting entity (component units), and the contents of the Annual Comprehensive Financial Report (ACFR). Reconciliation questions are common in task-based simulations.</p>

<h2>The Annual Comprehensive Financial Report</h2>
<table>
<thead><tr><th>Section</th><th>Contents</th></tr></thead>
<tbody>
<tr><td><strong>Introductory</strong></td><td>Letter of transmittal, organizational chart, list of principal officials (unaudited)</td></tr>
<tr><td><strong>Financial</strong></td><td>Auditor's report; management's discussion and analysis (MD&amp;A); <strong>basic financial statements</strong> (government-wide statements, fund statements, notes); required supplementary information (RSI); combining and individual fund statements</td></tr>
<tr><td><strong>Statistical</strong></td><td>Ten-year trend data: financial trends, revenue capacity, debt capacity, demographic and economic information, operating information (unaudited)</td></tr>
</tbody>
</table>
<p>The minimum requirement for general-purpose external reporting is MD&amp;A, the basic financial statements, and RSI; the ACFR is broader.</p>

<h2>Government-wide statements</h2>
<ul>
<li><strong>Statement of net position:</strong> assets + deferred outflows − liabilities − deferred inflows = net position, split into <strong>net investment in capital assets</strong>, <strong>restricted</strong>, and <strong>unrestricted</strong>. Columns for governmental activities, business-type activities, a total for the primary government, and component units.</li>
<li><strong>Statement of activities:</strong> a "net cost" format showing, for each function or program, expenses less program revenues:</li>
</ul>
<table>
<thead><tr><th>Program revenues (by function)</th><th>General revenues (below the functions)</th></tr></thead>
<tbody>
<tr><td>Charges for services (fees, fines, licenses)</td><td>All taxes — property, sales, income — even if restricted to a purpose</td></tr>
<tr><td>Operating grants and contributions</td><td>Unrestricted grants and investment earnings</td></tr>
<tr><td>Capital grants and contributions</td><td>Special items (unusual <strong>or</strong> infrequent, within management's control) and extraordinary items (unusual <strong>and</strong> infrequent) — replaced by a single "unusual or infrequent items" category under GASB Statement No. 103</td></tr>
</tbody>
</table>
<p>Depreciation is reported as a direct expense of the functions that use the assets (general infrastructure may be shown separately). Interest on long-term debt is usually an indirect expense shown separately.</p>

<h2>Reconciling governmental funds to government-wide</h2>
<h3>Fund balance → net position (governmental activities)</h3>
<table>
<thead><tr><th>Adjustment</th><th>Direction</th></tr></thead>
<tbody>
<tr><td>Capital assets, net of accumulated depreciation</td><td>+</td></tr>
<tr><td>Long-term liabilities (bonds, leases, compensated absences, net pension liability)</td><td>−</td></tr>
<tr><td>Accrued interest payable not due yet</td><td>−</td></tr>
<tr><td>Deferred inflows for revenues not "available" (now recognized)</td><td>+</td></tr>
<tr><td>Internal service fund net position (mostly serving governmental funds)</td><td>+</td></tr>
<tr><td>Pension and other postemployment benefit deferred outflows and inflows</td><td>±</td></tr>
</tbody>
</table>

<h3>Net change in fund balance → change in net position</h3>
<table>
<thead><tr><th>Adjustment</th><th>Direction</th></tr></thead>
<tbody>
<tr><td>Capital outlay expenditures (capitalized)</td><td>+</td></tr>
<tr><td>Depreciation expense</td><td>−</td></tr>
<tr><td>Bond proceeds (other financing sources, now liabilities)</td><td>−</td></tr>
<tr><td>Principal repayments (expenditures, now liability reductions)</td><td>+</td></tr>
<tr><td>Revenues recognized now that were deferred in the funds</td><td>+</td></tr>
<tr><td>Increases in accrued long-term liabilities (compensated absences, pension expense above contributions)</td><td>−</td></tr>
<tr><td>Proceeds from sale of capital assets versus gain or loss</td><td>− (remove proceeds, add gain)</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> The net change in governmental fund balances is $500,000. Capital outlay was $2,000,000; depreciation $800,000; bond proceeds $1,500,000; principal repaid $600,000. Change in net position = 500,000 + 2,000,000 − 800,000 − 1,500,000 + 600,000 = <strong>$800,000</strong>.</p></div>

<h2>Capital assets and infrastructure</h2>
<ul>
<li>All capital assets, including <strong>infrastructure</strong> (roads, bridges, water systems), are reported in the government-wide statements.</li>
<li>The <strong>modified approach</strong> lets eligible infrastructure not be depreciated if the government uses an asset management system and documents that assets are preserved at a condition level it sets. Preservation costs are expensed; additions and improvements are capitalized. Condition assessments are RSI.</li>
<li>Works of art and historical treasures need not be capitalized if held for public exhibition, protected, and sale proceeds are used to buy other collection items.</li>
</ul>

<h2>The reporting entity — component units</h2>
<p>A legally separate organization is a component unit if the primary government is <strong>financially accountable</strong> for it (appoints a voting majority of its board <strong>and</strong> can impose its will or there is a financial benefit or burden relationship; or the organization is fiscally dependent on it), or if excluding it would be misleading.</p>
<table>
<thead><tr><th>Presentation</th><th>When</th></tr></thead>
<tbody>
<tr><td><strong>Blended</strong> (reported as if part of the primary government)</td><td>Substantively the same governing body with operational responsibility, services almost entirely benefit the government, debt repaid by the government, or the unit is a not-for-profit whose sole member is the government</td></tr>
<tr><td><strong>Discretely presented</strong> (separate column)</td><td>All other component units</td></tr>
</tbody>
</table>

<h2>Pensions, postemployment benefits, and other disclosures</h2>
<ul>
<li>GASB Statement No. 68 (pensions) and No. 75 (other postemployment benefits): the <strong>net pension liability</strong> (total pension liability − fiduciary net position) appears in the government-wide and proprietary statements; ten-year schedules are RSI.</li>
<li>GASB Statement No. 77 requires disclosure of <strong>tax abatement</strong> agreements that reduce tax revenues.</li>
<li>GASB Statement No. 103 (for fiscal years beginning after June 15, 2025) refines MD&amp;A, requires separate presentation of unusual or infrequent items, and makes budgetary comparisons RSI.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Classify revenues as program or general revenues.</li>
<li>Prepare the reconciliations from fund to government-wide statements.</li>
<li>Decide whether a component unit is blended or discretely presented.</li>
<li>Identify the sections and contents of the ACFR.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> All taxes are <em>general</em> revenues — even a gas tax restricted to road repairs. Program revenues come from the program's own users or from grants tied to that program.</p></div>
`,
  revision: `
<h3>Annual Comprehensive Financial Report (ACFR)</h3>
<p>Introductory (transmittal letter) · Financial (auditor's report, management's discussion and analysis (MD&amp;A), basic statements, required supplementary information (RSI)) · Statistical (10-year trends).</p>

<h3>Statement of activities</h3>
<ul>
<li>Program revenues: charges for services, operating grants, capital grants.</li>
<li>General revenues: <strong>all taxes</strong>, unrestricted grants, investment earnings.</li>
<li>Special items: unusual <strong>or</strong> infrequent, in management's control. Extraordinary: unusual <strong>and</strong> infrequent.</li>
</ul>

<h3>Reconciliation (funds → government-wide)</h3>
<ul>
<li>+ capital outlay − depreciation.</li>
<li>− bond proceeds + principal repaid.</li>
<li>+ previously deferred revenues; − accrued long-term expenses.</li>
<li>+ internal service fund net position.</li>
</ul>

<h3>Net position</h3>
<p>Net investment in capital assets · restricted · unrestricted.</p>

<h3>Component units</h3>
<p>Financially accountable → include. Blended if same board with operational responsibility or serves the government exclusively; otherwise discrete column.</p>

<h3>Other</h3>
<p>Infrastructure modified approach; net pension liability; tax abatement disclosures.</p>
`,
};
