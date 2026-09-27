import type { TopicContent } from "../types";

export const conceptualFramework: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>The Financial Accounting Standards Board (FASB) Conceptual Framework is the set of objectives and concepts the board uses when it writes new standards. It is <strong>not</strong> authoritative Generally Accepted Accounting Principles (GAAP) — the FASB Accounting Standards Codification (ASC) is — but it explains <em>why</em> GAAP looks the way it does. On the Financial Accounting and Reporting (FAR) section it appears in Area I (Financial Reporting, 30–40% of the exam) as conceptual multiple-choice questions, and it is the tiebreaker whenever two answers look plausible and the question asks which treatment is <em>most</em> consistent with GAAP.</p>

<h3>The hierarchy of US GAAP</h3>
<ul>
<li><strong>Authoritative:</strong> the FASB Accounting Standards Codification, amended through Accounting Standards Updates (ASUs). For public companies, rules and interpretive releases of the Securities and Exchange Commission (SEC) are also authoritative.</li>
<li><strong>Non-authoritative:</strong> the Conceptual Framework, textbooks, industry practice, International Financial Reporting Standards (IFRS), and similar sources — used only when the Codification is silent.</li>
</ul>
<p>State and local governments follow the Governmental Accounting Standards Board (GASB), and federal agencies follow the Federal Accounting Standards Advisory Board (FASAB). Private companies may use Private Company Council (PCC) alternatives within the Codification.</p>

<h2>The Conceptual Framework — chapter by chapter</h2>
<table>
<thead><tr><th>Concepts Statement</th><th>What it covers</th></tr></thead>
<tbody>
<tr><td>No. 8, Chapter 1</td><td>Objective of general-purpose financial reporting: provide information useful to existing and potential investors, lenders, and other creditors in making decisions about providing resources to the entity.</td></tr>
<tr><td>No. 8, Chapter 3</td><td>Qualitative characteristics of useful financial information.</td></tr>
<tr><td>No. 8, Chapter 4</td><td>Elements of financial statements (issued December 2021).</td></tr>
<tr><td>No. 8, Chapter 5</td><td>Recognition and derecognition (issued 2023): recognize an item when it meets the definition of an element, can be measured with a relevant measurement attribute, and can be faithfully represented.</td></tr>
<tr><td>No. 8, Chapter 6</td><td>Measurement — entry prices (historical) and exit prices (current).</td></tr>
<tr><td>No. 8, Chapter 7</td><td>Presentation — how line items are grouped and displayed.</td></tr>
<tr><td>No. 8, Chapter 8</td><td>Notes to financial statements — what disclosures should do.</td></tr>
</tbody>
</table>

<h2>Qualitative characteristics</h2>
<p>Useful information must have both <strong>fundamental</strong> characteristics. The <strong>enhancing</strong> characteristics make useful information better but cannot rescue information that is irrelevant or unfaithful.</p>
<table>
<thead><tr><th>Type</th><th>Characteristic</th><th>Components / meaning</th></tr></thead>
<tbody>
<tr><td rowspan="2">Fundamental</td><td>Relevance</td><td>Predictive value, confirmatory value, and materiality (an entity-specific aspect of relevance)</td></tr>
<tr><td>Faithful representation</td><td>Complete, neutral, and free from error</td></tr>
<tr><td rowspan="4">Enhancing</td><td>Comparability</td><td>Includes consistency — same methods period to period and across entities</td></tr>
<tr><td>Verifiability</td><td>Independent observers could reach consensus (direct or indirect verification)</td></tr>
<tr><td>Timeliness</td><td>Available in time to influence decisions</td></tr>
<tr><td>Understandability</td><td>Clear to users with reasonable business knowledge who study it diligently</td></tr>
</tbody>
</table>
<p><strong>Pervasive constraint:</strong> cost. The benefits of reporting information should justify its cost.</p>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Conservatism (prudence) and reliability are <em>not</em> part of the current framework. Reliability was replaced by faithful representation, and conservatism conflicts with neutrality. Materiality is not a separate enhancing characteristic — it sits inside relevance.</p></div>

<h2>Elements of financial statements</h2>
<p>Concepts Statement No. 8, Chapter 4 defines the building blocks:</p>
<ul>
<li><strong>Asset:</strong> a present right of an entity to an economic benefit.</li>
<li><strong>Liability:</strong> a present obligation of an entity to transfer an economic benefit.</li>
<li><strong>Equity (net assets for not-for-profits):</strong> the residual interest in assets after deducting liabilities.</li>
<li><strong>Revenues and expenses:</strong> inflows and outflows from delivering goods or services that are the entity's ongoing major or central operations.</li>
<li><strong>Gains and losses:</strong> increases or decreases in equity from peripheral or incidental transactions.</li>
<li><strong>Investments by and distributions to owners</strong>, and <strong>comprehensive income</strong> — the change in equity from all non-owner sources.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A logistics company sells a used delivery truck for $4,000 more than its carrying amount. Selling trucks is not its central operation, so the $4,000 is a <strong>gain</strong> reported in income from continuing operations — not revenue. A truck dealer selling the same truck would record revenue and cost of goods sold.</p></div>

<h2>Measurement attributes</h2>
<table>
<thead><tr><th>Attribute</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Historical cost</td><td>Property, plant, and equipment; most inventory</td></tr>
<tr><td>Current cost (replacement cost)</td><td>Rarely required today</td></tr>
<tr><td>Fair value</td><td>Trading and available-for-sale securities, derivatives, business combination assets</td></tr>
<tr><td>Net realizable value</td><td>Receivables (after credit losses); inventory under first-in, first-out (FIFO) or average cost</td></tr>
<tr><td>Present value of future cash flows</td><td>Long-term receivables and payables, lease liabilities, asset retirement obligations</td></tr>
</tbody>
</table>
<p><strong>Fair value</strong> (ASC 820) is an exit price: what would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date. Inputs are ranked Level 1 (quoted prices for identical items in active markets), Level 2 (other observable inputs), and Level 3 (unobservable inputs).</p>

<h2>Underlying assumptions and principles</h2>
<ul>
<li><strong>Economic entity:</strong> the business is separate from its owners.</li>
<li><strong>Going concern:</strong> the entity will continue operating; if liquidation is imminent, the liquidation basis of accounting is used.</li>
<li><strong>Monetary unit:</strong> the dollar is stable enough to measure transactions.</li>
<li><strong>Periodicity:</strong> activity can be divided into periods (months, quarters, years).</li>
<li><strong>Accrual basis:</strong> revenue is recognized when earned and expenses are matched to the revenue or period they relate to, not when cash moves.</li>
</ul>

<h2>The general-purpose financial statements</h2>
<p>A full set of financial statements includes:</p>
<ol>
<li>Statement of financial position (balance sheet) — at a point in time</li>
<li>Statement of operations (income statement) — for a period</li>
<li>Statement of comprehensive income — may be one continuous statement with the income statement, or two consecutive statements</li>
<li>Statement of cash flows</li>
<li>Statement of changes in stockholders' equity (may be shown in the notes)</li>
<li>Notes to the financial statements, including the summary of significant accounting policies</li>
</ol>

<h3>Other comprehensive income</h3>
<p>Comprehensive income = net income + other comprehensive income (OCI). Accumulated other comprehensive income (AOCI) is reported in equity, and items are "recycled" (reclassified) to net income when realized.</p>
<table>
<thead><tr><th>OCI item (memory aid: PUFI)</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>P</strong>ension and other postretirement adjustments</td><td>Actuarial gains and losses, prior service cost not yet in pension cost</td></tr>
<tr><td><strong>U</strong>nrealized gains/losses on available-for-sale (AFS) debt securities</td><td>Fair value change on an AFS bond (excluding credit losses)</td></tr>
<tr><td><strong>F</strong>oreign currency items</td><td>Translation adjustments; effective portion of certain hedges</td></tr>
<tr><td><strong>I</strong>nstrument-specific credit risk; cash flow hedges</td><td>Own-credit change on liabilities under the fair value option; effective portion of cash flow hedges</td></tr>
</tbody>
</table>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Unrealized gains and losses on <em>equity</em> securities go to net income, not OCI (since ASU 2016-01). Only AFS <em>debt</em> securities use OCI.</p></div>

<h2>How it is tested</h2>
<ul>
<li>Identify which qualitative characteristic a scenario illustrates (for example, "free from error" versus "verifiability").</li>
<li>Classify a transaction as revenue, gain, OCI, or an owner transaction.</li>
<li>Pick the correct measurement attribute or fair value level for an asset.</li>
<li>Name which statements make up a complete set, and what can be combined.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a question asks whether something is revenue or a gain, ask "Is this what the company is in business to do?" When it asks about a characteristic, first decide fundamental (relevance, faithful representation) versus enhancing (comparability, verifiability, timeliness, understandability) — most wrong answers mix the two lists.</p></div>
`,
  revision: `
<h3>Framework in one minute</h3>
<ul>
<li>The Conceptual Framework is <strong>non-authoritative</strong>; the Financial Accounting Standards Board (FASB) Accounting Standards Codification (ASC) is authoritative Generally Accepted Accounting Principles (GAAP).</li>
<li>Objective: useful information for investors, lenders, and other creditors.</li>
</ul>

<h3>Qualitative characteristics</h3>
<table>
<thead><tr><th>Fundamental (2)</th><th>Enhancing (4)</th></tr></thead>
<tbody>
<tr><td>Relevance = predictive + confirmatory value + materiality</td><td>Comparability (includes consistency)</td></tr>
<tr><td>Faithful representation = complete + neutral + free from error</td><td>Verifiability, Timeliness, Understandability</td></tr>
</tbody>
</table>
<p><strong>Constraint:</strong> cost. <strong>Not in the framework:</strong> conservatism, reliability.</p>

<h3>Elements</h3>
<ul>
<li>Revenue = central operations; gain = peripheral or incidental.</li>
<li>Equity = assets − liabilities (net assets for not-for-profits).</li>
<li>Comprehensive income = all changes in equity from non-owner sources.</li>
</ul>

<h3>Other comprehensive income (OCI) — "PUFI"</h3>
<p><strong>P</strong>ension adjustments · <strong>U</strong>nrealized gains/losses on available-for-sale (AFS) <em>debt</em> securities · <strong>F</strong>oreign currency translation · <strong>I</strong>nstrument-specific credit risk and cash flow hedges.</p>
<p>Equity securities: fair value changes go to <strong>net income</strong>, never OCI.</p>

<h3>Fair value levels</h3>
<p>Level 1 quoted identical/active · Level 2 other observable · Level 3 unobservable. Fair value is an <strong>exit</strong> price.</p>

<h3>Full set of statements</h3>
<p>Balance sheet · Income statement · Comprehensive income (one or two statements) · Cash flows · Changes in equity · Notes.</p>
`,
};
