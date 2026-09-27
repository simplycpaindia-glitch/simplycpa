import type { TopicContent } from "../types";

export const businessCombinationsAdvanced: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Financial Accounting and Reporting (FAR) covers the basic acquisition method. Business Analysis and Reporting (BAR) Area II (Technical Accounting and Reporting, 35–45%) goes further: step acquisitions, changes in a parent's ownership, deconsolidation, variable interest entities (VIEs), noncontrolling interest (NCI) with intra-entity transactions, push-down accounting, and joint venture formations.</p>

<h2>Step acquisitions (business combinations achieved in stages)</h2>
<ul>
<li>When an investor that already holds an equity interest obtains control, it <strong>remeasures its previously held interest to fair value</strong> at the acquisition date and recognizes any <strong>gain or loss in earnings</strong>. Amounts previously in other comprehensive income (OCI) are reclassified.</li>
<li>Goodwill = consideration transferred + fair value of NCI + fair value of the previously held interest − fair value of identifiable net assets.</li>
</ul>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An investor holds 30% of a company (equity-method carrying amount $280,000; fair value $330,000) and buys another 50% for $550,000, obtaining control. NCI (20%) fair value is $220,000; identifiable net assets are $900,000.<br>Gain on remeasurement = 330,000 − 280,000 = <strong>$50,000</strong>.<br>Goodwill = 550,000 + 220,000 + 330,000 − 900,000 = <strong>$200,000</strong>.</p></div>

<h2>Changes in ownership</h2>
<table>
<thead><tr><th>Event</th><th>Accounting</th></tr></thead>
<tbody>
<tr><td>Parent buys more shares from NCI, or sells some shares <strong>but keeps control</strong></td><td><strong>Equity transaction</strong> — no gain or loss; adjust NCI, and record the difference in additional paid-in capital (APIC). Goodwill is not remeasured.</td></tr>
<tr><td>Parent <strong>loses control</strong> (deconsolidation)</td><td>Derecognize the subsidiary's assets, liabilities, and NCI; <strong>remeasure any retained investment to fair value</strong>; recognize a gain or loss in net income</td></tr>
</tbody>
</table>
<p>Gain or loss on deconsolidation = (fair value of consideration received + fair value of retained interest + carrying amount of NCI) − carrying amount of the subsidiary's net assets.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A parent owns 90% of a subsidiary (NCI carrying amount $50,000; net assets $500,000). It sells 60% for $420,000, keeping 30% with a fair value of $210,000 and losing control. Gain = (420,000 + 210,000 + 50,000) − 500,000 = <strong>$180,000</strong>.</p></div>

<h2>Noncontrolling interest and intra-entity transactions</h2>
<ul>
<li>NCI's share of subsidiary income is adjusted for its share of fair value amortization.</li>
<li><strong>Downstream sales</strong> (parent to subsidiary): unrealized profit is eliminated entirely against the <strong>parent</strong> (controlling interest).</li>
<li><strong>Upstream sales</strong> (subsidiary to parent): unrealized profit is eliminated and <strong>allocated between the parent and NCI</strong> in proportion to ownership, because the subsidiary recorded the profit.</li>
<li>Intra-entity debt: if one affiliate buys another's bonds from outsiders, the debt is treated as retired in consolidation, with a gain or loss on constructive retirement.</li>
<li>Consolidated net income is attributed to the parent and NCI; losses are attributed to NCI even if its balance becomes negative.</li>
</ul>

<h2>Variable interest entities</h2>
<p>A legal entity is a <strong>VIE</strong> if, for example:</p>
<ul>
<li>Its equity at risk is <strong>insufficient</strong> to finance its activities without additional subordinated financial support; or</li>
<li>The equity holders, as a group, lack the power to direct the most significant activities, the obligation to absorb expected losses, or the right to receive expected residual returns; or</li>
<li>Voting rights are disproportionate to economics, and substantially all activities involve an investor with few votes.</li>
</ul>
<p>The <strong>primary beneficiary</strong> consolidates the VIE. It has <strong>both</strong>:</p>
<ol>
<li>the <strong>power to direct</strong> the activities that most significantly affect the VIE's economic performance; and</li>
<li>the <strong>obligation to absorb losses or the right to receive benefits</strong> that could potentially be significant to the VIE.</li>
</ol>
<p>The assessment is ongoing. Private companies may elect not to apply the VIE guidance to certain common-control arrangements (including leasing arrangements) if criteria are met.</p>

<h2>Other topics</h2>
<ul>
<li><strong>Push-down accounting:</strong> an acquired entity may elect to apply the acquirer's new basis (fair values and goodwill) in its own separate financial statements when control changes. Once applied, the election is irrevocable. Bargain purchase gains are recognized in APIC, not income, of the acquiree.</li>
<li><strong>Joint venture formation (Accounting Standards Update (ASU) 2023-05):</strong> a newly formed joint venture recognizes its contributed net assets at <strong>fair value</strong> (a new basis), with goodwill for any excess — effective for joint ventures formed on or after January 1, 2025.</li>
<li><strong>Common control transactions</strong> (entities under the same parent): recorded at the <strong>carrying amounts</strong> of the transferring entity — no step-up or goodwill — and prior periods are retrospectively combined.</li>
<li><strong>Reverse acquisitions:</strong> the legal acquirer (usually the entity issuing shares) is identified as the <strong>accounting acquiree</strong>, for example when a private operating company merges into a public shell.</li>
<li><strong>Consolidated statement of cash flows:</strong> acquisitions are investing outflows net of cash acquired; dividends paid to NCI are financing outflows.</li>
<li><strong>Combined financial statements</strong> present entities under common control or management without a parent-subsidiary relationship.</li>
</ul>

<h2>Differences from International Financial Reporting Standards (IFRS)</h2>
<ul>
<li>IFRS 3 allows NCI to be measured either at fair value (full goodwill) or at its proportionate share of identifiable net assets (partial goodwill); US Generally Accepted Accounting Principles (GAAP) require fair value.</li>
<li>IFRS 10 uses a single control model rather than separate voting-interest and VIE models.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute the remeasurement gain and goodwill in a step acquisition.</li>
<li>Account for ownership changes with and without loss of control.</li>
<li>Allocate upstream unrealized profit between the parent and NCI.</li>
<li>Identify a VIE and its primary beneficiary.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Gains and losses in consolidations appear only when control <em>changes</em> — obtaining control (remeasure the old interest) or losing it (remeasure the retained interest). While control continues, ownership changes go through equity.</p></div>
`,
  revision: `
<h3>Step acquisition</h3>
<ul>
<li>Remeasure previously held interest to fair value → gain or loss in earnings.</li>
<li>Goodwill = consideration + noncontrolling interest (NCI) fair value + previously held interest fair value − net assets.</li>
</ul>

<h3>Ownership changes</h3>
<ul>
<li>Control kept → equity transaction (additional paid-in capital (APIC)), no gain or loss.</li>
<li>Control lost → deconsolidate; retained interest at fair value; gain or loss in income.</li>
</ul>

<h3>Intra-entity profit</h3>
<p>Downstream: all to parent. Upstream: shared between parent and NCI.</p>

<h3>Variable interest entities (VIEs)</h3>
<ul>
<li>Insufficient equity at risk, or equity holders lack power, loss absorption, or returns.</li>
<li>Primary beneficiary = <strong>power</strong> + <strong>significant losses or benefits</strong> → consolidates.</li>
</ul>

<h3>Other</h3>
<ul>
<li>Push-down accounting: optional, irrevocable.</li>
<li>New joint ventures: fair value basis (from 2025).</li>
<li>Common control: carrying amounts, no goodwill.</li>
<li>Reverse acquisition: legal acquirer = accounting acquiree.</li>
</ul>
`,
};
