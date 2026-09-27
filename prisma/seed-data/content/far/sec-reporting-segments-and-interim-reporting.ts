import type { TopicContent } from "../types";

export const secSegmentsInterim: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Public companies report to the Securities and Exchange Commission (SEC) on a regular schedule, and must present segment information (Accounting Standards Codification (ASC) 280) and interim financial statements (ASC 270). Financial Accounting and Reporting (FAR) tests filing deadlines and form types, the quantitative thresholds for reportable segments, and the "integral view" of interim reporting.</p>

<h2>SEC reporting</h2>
<h3>Regulations and key forms</h3>
<ul>
<li><strong>Regulation S-X</strong> governs the form and content of financial statements; <strong>Regulation S-K</strong> governs non-financial disclosures (business description, risk factors, management's discussion and analysis (MD&amp;A), executive compensation).</li>
<li>Form <strong>S-1</strong>: registration statement for an initial public offering (IPO). Form S-3: short-form registration for seasoned issuers.</li>
</ul>
<table>
<thead><tr><th>Form</th><th>Purpose</th><th>Deadline</th></tr></thead>
<tbody>
<tr><td>10-K</td><td>Annual report with audited financial statements, MD&amp;A, and (for accelerated filers) the auditor's internal control attestation</td><td>Large accelerated filer: <strong>60 days</strong>; accelerated filer: <strong>75 days</strong>; non-accelerated filer: <strong>90 days</strong></td></tr>
<tr><td>10-Q</td><td>Quarterly report with reviewed (not audited) interim statements — first three quarters only</td><td>Large accelerated and accelerated: <strong>40 days</strong>; non-accelerated: <strong>45 days</strong></td></tr>
<tr><td>8-K</td><td>Current report of significant events: acquisitions or dispositions, change in auditor, director departures, bankruptcy, material cybersecurity incidents</td><td>Generally <strong>4 business days</strong> after the event</td></tr>
<tr><td>Proxy statement (Schedule 14A)</td><td>Information for shareholder votes</td><td>Before the annual meeting</td></tr>
</tbody>
</table>

<h3>Filer status</h3>
<table>
<thead><tr><th>Category</th><th>Public float</th></tr></thead>
<tbody>
<tr><td>Large accelerated filer</td><td>$700 million or more</td></tr>
<tr><td>Accelerated filer</td><td>$75 million to under $700 million (and annual revenue of $100 million or more)</td></tr>
<tr><td>Non-accelerated filer</td><td>Under $75 million, or smaller reporting companies with revenue under $100 million</td></tr>
</tbody>
</table>
<p>A <strong>smaller reporting company</strong> (public float under $250 million, or revenue under $100 million with float under $700 million) may use scaled disclosures, such as two years of audited financial statements instead of three years of income statements. Form 10-K Item 1C requires disclosure of cybersecurity risk management, strategy, and governance.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "60-75-90" for the 10-K and "40-40-45" for the 10-Q, in the order large accelerated / accelerated / non-accelerated. There is no fourth-quarter 10-Q.</p></div>

<h2>Segment reporting (ASC 280)</h2>
<h3>Management approach</h3>
<p>An <strong>operating segment</strong> is a component that earns revenues and incurs expenses, whose operating results are regularly reviewed by the <strong>chief operating decision maker (CODM)</strong>, and for which discrete financial information is available. Segment information is reported on the same basis used internally, even if that basis differs from Generally Accepted Accounting Principles (GAAP).</p>

<h3>Quantitative thresholds — the 10% tests</h3>
<p>An operating segment is <strong>reportable</strong> if it meets <strong>any one</strong> of these:</p>
<ol>
<li><strong>Revenue test:</strong> reported revenue (external <strong>and intersegment</strong>) ≥ 10% of the combined revenue of all operating segments.</li>
<li><strong>Profit or loss test:</strong> the absolute amount of its profit or loss ≥ 10% of the greater of (a) combined profit of all segments reporting a profit, or (b) combined loss of all segments reporting a loss (in absolute terms).</li>
<li><strong>Asset test:</strong> assets ≥ 10% of combined assets of all operating segments.</li>
</ol>
<p><strong>75% test:</strong> total <em>external</em> revenue of reportable segments must be at least 75% of consolidated revenue; if not, add segments until it is. A practical limit of about <strong>10</strong> reportable segments applies. Segments with similar economic characteristics may be aggregated.</p>

<div class="callout callout-example"><p><strong>EXAMPLE (profit test):</strong> Segments report profits of $400,000, $300,000, and $100,000, and losses of $(500,000) and $(50,000). Combined profits = $800,000; combined losses = $550,000. The threshold is 10% × $800,000 = $80,000. Every segment except the one with a $50,000 loss passes the profit test.</p></div>

<h3>Segment disclosures (updated by Accounting Standards Update (ASU) 2023-07)</h3>
<ul>
<li>A measure of profit or loss and total assets for each reportable segment.</li>
<li><strong>Significant segment expenses</strong> regularly provided to the CODM, and an amount for "other segment items".</li>
<li>The title and position of the CODM and how the CODM uses the reported measures.</li>
<li>Reconciliations of segment totals to consolidated revenue, profit or loss, and assets.</li>
<li>Most annual segment disclosures are now also required in interim periods. Entities with a single reportable segment provide all the disclosures.</li>
</ul>

<h3>Entity-wide disclosures</h3>
<p>Required even for single-segment companies: revenue by product or service, revenue and long-lived assets by geographic area (domestic versus foreign), and the existence of any <strong>major customer</strong> providing <strong>10% or more</strong> of revenue — with the total amount and the segments involved (the customer's name is not required).</p>

<h2>Interim reporting (ASC 270)</h2>
<p>US GAAP treats each interim period as an <strong>integral part of the annual period</strong>, not as a standalone (discrete) period.</p>
<table>
<thead><tr><th>Item</th><th>Interim treatment</th></tr></thead>
<tbody>
<tr><td>Revenue and most costs</td><td>Recognized as incurred, on the same basis as the annual period</td></tr>
<tr><td>Costs benefiting several quarters (annual repairs, property taxes, advertising)</td><td>May be allocated across quarters</td></tr>
<tr><td>Income tax expense</td><td>Apply the <strong>estimated annual effective tax rate</strong> to year-to-date pretax income, then subtract tax expense already recognized</td></tr>
<tr><td>Inventory market decline</td><td>Recognize unless temporary and expected to recover by year-end</td></tr>
<tr><td>Temporary last-in, first-out (LIFO) liquidation expected to be replaced by year-end</td><td>Charge cost of sales at expected replacement cost</td></tr>
<tr><td>Gross profit method</td><td>Allowed for interim inventory estimates (disclose)</td></tr>
<tr><td>Unusual or infrequent items, discontinued operations</td><td>Recognized in the interim period in which they occur — not allocated</td></tr>
<tr><td>Changes in accounting principle</td><td>Retrospective application, as in annual reporting</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> The estimated annual effective tax rate is 25% in the first quarter and 24% in the second. Year-to-date pretax income is $100,000 after the first quarter and $250,000 after the second. First-quarter tax = <strong>$25,000</strong>. Second-quarter tax = 250,000 × 24% − 25,000 = <strong>$35,000</strong>.</p></div>

<p>Interim statements are condensed and must disclose seasonal effects, significant changes in estimates, and material events since the last annual report.</p>

<h2>How it is tested</h2>
<ul>
<li>Match an event or report to the correct SEC form and deadline.</li>
<li>Apply the 10% and 75% tests to identify reportable segments.</li>
<li>Compute interim-period income tax expense.</li>
<li>Decide whether an item is allocated across quarters or recognized immediately.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The revenue test for segments uses <em>total</em> revenue including intersegment sales, but the 75% test uses <em>external</em> revenue only. Many distractors swap these.</p></div>
`,
  revision: `
<h3>Securities and Exchange Commission (SEC) forms</h3>
<ul>
<li>10-K: 60 / 75 / 90 days (large accelerated / accelerated / non-accelerated).</li>
<li>10-Q: 40 / 40 / 45 days; first three quarters only; reviewed, not audited.</li>
<li>8-K: significant events, 4 business days.</li>
<li>S-1: initial public offering (IPO) registration. Regulation S-X = financial statements; S-K = narrative disclosures.</li>
<li>Large accelerated filer: public float ≥ $700 million.</li>
</ul>

<h3>Segments (chief operating decision maker (CODM) view)</h3>
<ul>
<li>Reportable if any: revenue (incl. intersegment) ≥ 10%; |profit or loss| ≥ 10% of greater of total profits or total losses; assets ≥ 10%.</li>
<li>External revenue of reportable segments ≥ <strong>75%</strong> of consolidated.</li>
<li>Disclose significant segment expenses and CODM details.</li>
<li>Major customer: ≥ 10% of revenue — amount, not name.</li>
</ul>

<h3>Interim reporting</h3>
<ul>
<li><strong>Integral</strong> view.</li>
<li>Tax: year-to-date income × estimated annual effective rate − tax already recorded.</li>
<li>Temporary inventory declines and temporary last-in, first-out (LIFO) liquidations: not recognized.</li>
<li>Unusual items and discontinued operations: in the quarter they occur.</li>
</ul>
`,
};
