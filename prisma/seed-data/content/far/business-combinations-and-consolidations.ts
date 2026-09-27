import type { TopicContent } from "../types";

export const businessCombinations: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Business combinations (Accounting Standards Codification (ASC) 805) and consolidations (ASC 810) are tested in Financial Accounting and Reporting (FAR) Area III. You need to apply the acquisition method, compute goodwill or a bargain purchase gain, and prepare basic consolidation eliminations. More advanced issues — step acquisitions, changes in ownership, and variable interest entities — are covered in Business Analysis and Reporting (BAR).</p>

<h2>Is it a business?</h2>
<p>Apply the <strong>screen test</strong> first: if substantially all of the fair value of the gross assets acquired is concentrated in a single identifiable asset or group of similar assets, it is an <strong>asset acquisition</strong>, not a business combination. Otherwise, a business needs at least an input and a substantive process that together significantly contribute to creating outputs.</p>
<table>
<thead><tr><th></th><th>Business combination</th><th>Asset acquisition</th></tr></thead>
<tbody>
<tr><td>Goodwill</td><td>Recognized</td><td>Never — excess allocated to assets by relative fair value</td></tr>
<tr><td>Transaction costs</td><td><strong>Expensed</strong></td><td>Capitalized into the assets</td></tr>
<tr><td>In-process research and development (IPR&amp;D)</td><td>Capitalized (indefinite-lived)</td><td>Expensed if no alternative future use</td></tr>
</tbody>
</table>

<h2>The acquisition method</h2>
<ol>
<li><strong>Identify the acquirer</strong> — the entity that obtains control.</li>
<li><strong>Determine the acquisition date</strong> — the date control is obtained.</li>
<li><strong>Recognize and measure</strong> identifiable assets acquired, liabilities assumed, and any noncontrolling interest (NCI), generally at <strong>fair value</strong>.</li>
<li><strong>Recognize goodwill</strong> or a gain from a bargain purchase.</li>
</ol>

<h3>Consideration transferred</h3>
<ul>
<li>Fair value of cash, other assets, equity issued, and liabilities incurred.</li>
<li><strong>Contingent consideration</strong> at acquisition-date fair value. Later changes: liability-classified → remeasure through earnings; equity-classified → not remeasured.</li>
<li><strong>Acquisition-related costs</strong> (legal, advisory, valuation fees) are <strong>expensed</strong>. Costs to issue debt or equity reduce the debt's carrying amount or additional paid-in capital (APIC).</li>
</ul>

<h3>Recognition exceptions and specifics</h3>
<ul>
<li>Identifiable intangibles (contractual-legal or separable) are recognized separately from goodwill — customer lists, trademarks, technology, order backlogs. An assembled workforce is <em>not</em> separately recognized; it is part of goodwill.</li>
<li>Deferred taxes, employee benefit obligations, and leases follow their own standards rather than fair value.</li>
<li>Contract assets and liabilities from customer contracts are measured under ASC 606 as if the acquirer had originated them (Accounting Standards Update (ASU) 2021-08).</li>
</ul>

<h2>Goodwill and bargain purchases</h2>
<table>
<thead><tr><th>Goodwill calculation</th></tr></thead>
<tbody>
<tr><td>Consideration transferred</td></tr>
<tr><td>+ Fair value of noncontrolling interest</td></tr>
<tr><td>+ Fair value of any previously held equity interest</td></tr>
<tr><td>− Fair value of identifiable net assets acquired</td></tr>
<tr><td><strong>= Goodwill</strong> (if positive) or <strong>bargain purchase gain</strong> (if negative)</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Acquirer pays $800,000 for 80% of Target. The fair value of the 20% NCI is $200,000. Target's identifiable net assets have a fair value of $900,000.<br>Goodwill = 800,000 + 200,000 − 900,000 = <strong>$100,000</strong>. NCI is reported at $200,000.</p></div>

<p>For a bargain purchase, the acquirer first <strong>reassesses</strong> that it has identified and measured everything correctly. Any remaining excess is recognized as a <strong>gain in earnings</strong> on the acquisition date, attributed entirely to the acquirer.</p>

<h3>Measurement period</h3>
<p>Up to <strong>one year</strong> from the acquisition date. New information about facts that existed at the acquisition date adjusts the provisional amounts — generally against goodwill — in the period the adjustment is identified (no retrospective restatement).</p>

<h2>Consolidation basics</h2>
<p>A parent consolidates entities it controls — usually more than 50% of voting interests (the voting interest model) — or variable interest entities (VIEs) of which it is the primary beneficiary. Consolidated statements present the parent and subsidiaries as a single economic entity.</p>

<h3>Typical elimination entries</h3>
<table>
<thead><tr><th>Eliminate</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Investment in subsidiary against the subsidiary's equity; record fair value adjustments, goodwill, and NCI</td><td>Avoids double-counting net assets</td></tr>
<tr><td>Intercompany receivables and payables</td><td>An entity can't owe itself</td></tr>
<tr><td>Intercompany sales and purchases</td><td>Only sales to outsiders count</td></tr>
<tr><td>Unrealized profit in ending inventory (and in fixed assets transferred)</td><td>Profit is realized only when sold outside the group</td></tr>
<tr><td>Intercompany dividends, interest, and rent</td><td>Transfers within one entity</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> The parent sells inventory costing $60,000 to its subsidiary for $80,000, and 25% remains unsold at year-end. Eliminate sales and cost of goods sold of $80,000, and remove unrealized profit of 20,000 × 25% = <strong>$5,000</strong> from ending inventory.</p></div>

<h3>Intercompany fixed asset transfers</h3>
<p>If a parent sells equipment to a subsidiary at a gain, eliminate the gain and restore the original cost and accumulated depreciation. Each year, eliminate the excess depreciation created by the stepped-up basis — the unrealized gain is realized gradually through lower consolidated depreciation.</p>

<h3>Noncontrolling interest</h3>
<ul>
<li>Presented in <strong>equity</strong>, separately from the parent's equity.</li>
<li>Consolidated net income and comprehensive income are attributed to the parent and to NCI; NCI's share of the subsidiary's income is adjusted for its share of fair value amortization (and, for upstream sales, unrealized profit).</li>
<li>Losses are attributed to NCI even if it becomes negative.</li>
<li>Changes in a parent's ownership that do not change control are <strong>equity transactions</strong> — no gain or loss.</li>
<li>Losing control: deconsolidate and recognize a gain or loss, remeasuring any retained interest to fair value.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute goodwill or a bargain purchase gain.</li>
<li>Decide the treatment of acquisition costs and contingent consideration.</li>
<li>Prepare elimination entries and compute unrealized intercompany profit.</li>
<li>Compute NCI in net income and in the balance sheet.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In consolidated statements, 100% of the subsidiary's assets and liabilities are included (at fair value at acquisition), even if the parent owns only 80%. The minority's 20% shows up as noncontrolling interest in equity — not as a reduction of each asset.</p></div>
`,
  revision: `
<h3>Business or asset?</h3>
<p>Screen test: substantially all fair value in one asset (or similar group) → asset acquisition (no goodwill, costs capitalized).</p>

<h3>Acquisition method</h3>
<ul>
<li>Assets and liabilities at <strong>fair value</strong>; separately recognize intangibles that are contractual-legal or separable.</li>
<li>Acquisition costs → <strong>expense</strong>. Stock issue costs → reduce additional paid-in capital (APIC).</li>
<li>Contingent consideration at fair value; liability → remeasure through earnings; equity → no remeasurement.</li>
</ul>

<h3>Goodwill</h3>
<p>Consideration + fair value of noncontrolling interest (NCI) + previously held interest − fair value of net assets. Negative → reassess, then <strong>gain</strong> to the acquirer.</p>
<p>Measurement period: up to 1 year; adjust goodwill prospectively.</p>

<h3>Consolidation</h3>
<ul>
<li>Eliminate investment vs subsidiary equity, intercompany balances, sales, dividends, and unrealized profit.</li>
<li>Unrealized inventory profit = markup × % still held.</li>
<li>NCI: in equity, separate from parent. Ownership changes without loss of control → equity transactions.</li>
<li>Include 100% of the subsidiary's assets and liabilities.</li>
</ul>
`,
};
