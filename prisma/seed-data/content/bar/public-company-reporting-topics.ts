import type { TopicContent } from "../types";

export const publicCompanyReporting: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Public companies face reporting requirements beyond those of private companies: complex diluted earnings per share (EPS), Securities and Exchange Commission (SEC) disclosure rules, management's discussion and analysis (MD&amp;A), measures that depart from Generally Accepted Accounting Principles (GAAP), internal control certifications under the Sarbanes-Oxley Act (SOX), and several recent disclosure standards. Business Analysis and Reporting (BAR) Area II builds on the basics covered in Financial Accounting and Reporting (FAR).</p>

<h2>Diluted EPS with several securities</h2>
<ol>
<li>Compute basic EPS.</li>
<li>Compute the <strong>incremental EPS</strong> for each potentially dilutive security — the increase in the numerator ÷ the increase in shares:
<ul>
<li>Options and warrants (treasury stock method): numerator effect $0, so they are the most dilutive when in the money.</li>
<li>Convertible preferred stock: preferred dividends ÷ shares on conversion.</li>
<li>Convertible bonds: after-tax interest ÷ shares on conversion.</li>
</ul></li>
<li><strong>Rank</strong> securities from lowest to highest incremental EPS and add them one at a time, recomputing diluted EPS. Stop when the next security would <strong>increase</strong> EPS (antidilutive).</li>
<li>The <strong>control number</strong> is income from continuing operations attributable to common shareholders — the same shares are then used for net income per share even if antidilutive there.</li>
</ol>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Net income $1,000,000; 500,000 shares; basic EPS $2.00.<br>Convertible bonds: after-tax interest $120,000 for 100,000 shares → incremental $1.20.<br>Convertible preferred: dividends $300,000 for 100,000 shares → incremental $3.00 (above $2.00 → antidilutive).<br>Diluted EPS with bonds = (1,000,000 + 120,000) ÷ 600,000 = <strong>$1.87</strong>. The preferred stock is excluded.</p></div>

<h3>Other EPS rules</h3>
<ul>
<li><strong>Participating securities</strong> (shares or units entitled to dividends with common) require the <strong>two-class method</strong>, allocating undistributed earnings between common and participating securities.</li>
<li><strong>Contingently issuable shares</strong> are included in diluted EPS if the conditions would be met if the period ended at the reporting date.</li>
<li>Convertible instruments that may be settled in cash or shares are presumed settled in shares for diluted EPS (Accounting Standards Update (ASU) 2020-06), using the if-converted method.</li>
<li>For year-to-date diluted EPS, the number of incremental shares is a year-to-date weighted average of the quarterly amounts.</li>
</ul>

<h2>SEC disclosure framework</h2>
<ul>
<li><strong>Regulation S-X</strong> — form and content of financial statements (for example, three years of income statements and cash flows, two years of balance sheets for most registrants).</li>
<li><strong>Regulation S-K</strong> — non-financial disclosures: business description, <strong>risk factors</strong>, legal proceedings, MD&amp;A, executive compensation, and cybersecurity risk management and governance (Item 106).</li>
<li><strong>Inline eXtensible Business Reporting Language (XBRL)</strong> tagging is required for financial statement data in SEC filings.</li>
<li>Material cybersecurity incidents must be disclosed on Form 8-K within four business days after the company determines they are material.</li>
</ul>

<h3>Management's discussion and analysis</h3>
<p>MD&amp;A explains results "through the eyes of management":</p>
<ul>
<li>Results of operations — reasons for material changes in revenues and expenses.</li>
<li>Liquidity and capital resources — sources and uses of cash, material cash requirements.</li>
<li><strong>Known trends, demands, commitments, events, or uncertainties</strong> reasonably likely to have a material effect.</li>
<li><strong>Critical accounting estimates</strong> — estimates involving significant uncertainty, their sensitivity, and how they changed.</li>
</ul>

<h3>Non-GAAP financial measures (Regulation G and Item 10(e))</h3>
<p>Measures that exclude or include amounts compared with measures computed under GAAP — adjusted earnings, adjusted earnings before interest, taxes, depreciation, and amortization (EBITDA), free cash flow — are allowed if the company:</p>
<ul>
<li>Presents the most directly comparable GAAP measure with <strong>equal or greater prominence</strong>.</li>
<li>Provides a <strong>quantitative reconciliation</strong> to that GAAP measure.</li>
<li>Explains why the measure is useful, and doesn't use misleading adjustments (for example, excluding normal, recurring cash operating expenses).</li>
</ul>

<h2>Internal control certifications (SOX)</h2>
<ul>
<li><strong>Section 302:</strong> the chief executive officer (CEO) and chief financial officer (CFO) certify each quarterly and annual report — that it is not misleading, fairly presents the financial condition, and that they are responsible for disclosure controls and internal control.</li>
<li><strong>Section 404(a):</strong> management assesses and reports on the effectiveness of <strong>internal control over financial reporting (ICFR)</strong> annually, usually using the Committee of Sponsoring Organizations of the Treadway Commission (COSO) framework.</li>
<li><strong>Section 404(b):</strong> the external auditor attests to ICFR for <strong>accelerated and large accelerated filers</strong> (not non-accelerated filers or emerging growth companies).</li>
<li>Section 906: criminal certification of periodic reports.</li>
</ul>

<h2>Recent disclosure standards</h2>
<table>
<thead><tr><th>Update</th><th>Requirement</th></tr></thead>
<tbody>
<tr><td>ASU 2023-07 — segment reporting</td><td>Significant segment expenses regularly provided to the chief operating decision maker, interim segment disclosures, and full disclosures even for single-segment companies</td></tr>
<tr><td>ASU 2023-09 — income tax disclosures</td><td>Rate reconciliation in specified categories (percentages and amounts) and income taxes paid disaggregated by jurisdiction; public business entities from 2025 annual periods</td></tr>
<tr><td>ASU 2024-03 — expense disaggregation</td><td>Notes break relevant expense captions into purchases of inventory, employee compensation, depreciation, intangible amortization, and other natural categories; annual periods beginning after December 15, 2026</td></tr>
<tr><td>ASU 2023-08 — crypto assets</td><td>Fair value through net income, separate presentation</td></tr>
</tbody>
</table>
<p>The SEC's 2024 climate-related disclosure rule was stayed in litigation and the SEC stopped defending it in 2025, so it is not currently in effect.</p>

<h2>Other public company topics</h2>
<ul>
<li><strong>Emerging growth companies</strong> (revenue under about $1.235 billion) may use scaled disclosures and delayed adoption of new standards for up to five years after an initial public offering (IPO).</li>
<li><strong>Pro forma information</strong> for material business combinations shows revenue and earnings as if the acquisition happened at the start of the period.</li>
<li><strong>Subsequent events:</strong> SEC filers evaluate through the issuance date and do not disclose that date.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute diluted EPS with ranking and antidilution tests.</li>
<li>Identify required MD&amp;A content and non-GAAP presentation rules.</li>
<li>Match SOX sections to their requirements and filers.</li>
<li>Recognize the requirements of recent disclosure standards.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Rank dilutive securities by <em>incremental EPS</em> (lowest first) and add them one at a time. A security whose incremental EPS is higher than the running diluted EPS is antidilutive and excluded.</p></div>
`,
  revision: `
<h3>Diluted earnings per share (EPS)</h3>
<ol>
<li>Incremental EPS = numerator effect ÷ added shares (options: $0 numerator).</li>
<li>Rank lowest to highest; add one at a time; stop when antidilutive.</li>
<li>Control number: income from continuing operations.</li>
</ol>
<p>Participating securities → two-class method. Convertibles presumed settled in shares.</p>

<h3>Securities and Exchange Commission (SEC) rules</h3>
<ul>
<li>Regulation S-X (financial statements) · Regulation S-K (risk factors, management's discussion and analysis (MD&amp;A), cybersecurity).</li>
<li>MD&amp;A: results, liquidity, known trends and uncertainties, critical accounting estimates.</li>
<li>Measures other than Generally Accepted Accounting Principles (GAAP) measures: show the GAAP measure with equal prominence + a reconciliation.</li>
<li>Cyber incidents: Form 8-K within 4 business days of materiality determination.</li>
</ul>

<h3>Sarbanes-Oxley Act (SOX)</h3>
<p>302: chief executive officer (CEO) and chief financial officer (CFO) certify · 404(a): management's internal control report · 404(b): auditor attestation for accelerated and large accelerated filers.</p>

<h3>Recent standards</h3>
<p>Segment expenses (2023-07) · income tax disclosures (2023-09) · expense disaggregation (2024-03, from 2027) · crypto at fair value (2023-08).</p>
`,
};
