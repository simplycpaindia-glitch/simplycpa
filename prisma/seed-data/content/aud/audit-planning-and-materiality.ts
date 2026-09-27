import type { TopicContent } from "../types";

export const planningMateriality: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Planning sets the direction for the whole audit. Auditing and Attestation (AUD) Area II (Assessing Risk and Developing a Planned Response, 25–35%) tests the audit risk model, materiality levels, the overall strategy and audit plan, and required planning activities. The guidance is in generally accepted auditing standards (GAAS), codified in the clarified auditing standards sections (AU-C) — mainly AU-C 300 (planning) and AU-C 320 (materiality).</p>

<h2>Planning activities</h2>
<ul>
<li><strong>Preliminary engagement activities:</strong> perform acceptance and continuance procedures, evaluate compliance with ethical and independence requirements, and establish the terms of the engagement.</li>
<li><strong>Overall audit strategy:</strong> sets the scope, timing, and direction of the audit — characteristics of the engagement, reporting objectives and deadlines, significant factors, and the nature and timing of resources.</li>
<li><strong>Audit plan:</strong> more detailed — the nature, timing, and extent of risk assessment procedures, further audit procedures at the assertion level, and other required procedures.</li>
<li><strong>Direction and supervision</strong> of team members and review of their work.</li>
<li>Consider the need for specialists, the use of internal auditors, and component auditors.</li>
</ul>
<p>Planning is <strong>continuous and iterative</strong>: the strategy and plan are updated as the audit progresses. The engagement partner and other key members must participate in planning, including the required discussion of susceptibility to material misstatement (including fraud).</p>
<p>The auditor may discuss elements of planning with management to coordinate the audit, but the <strong>strategy and plan remain the auditor's responsibility</strong>, and discussing detailed procedures could compromise effectiveness.</p>

<h2>The audit risk model</h2>
<p><strong>Audit risk (AR)</strong> is the risk that the auditor expresses an inappropriate opinion when the financial statements are materially misstated.</p>
<table>
<thead><tr><th>Component</th><th>Meaning</th><th>Auditor controls it?</th></tr></thead>
<tbody>
<tr><td>Inherent risk (IR)</td><td>Susceptibility of an assertion to material misstatement before considering controls</td><td>No — assessed</td></tr>
<tr><td>Control risk (CR)</td><td>Risk that controls will not prevent, or detect and correct, a material misstatement</td><td>No — assessed</td></tr>
<tr><td>Detection risk (DR)</td><td>Risk that the auditor's procedures will not detect an existing material misstatement</td><td><strong>Yes</strong> — set through the nature, timing, and extent of substantive procedures</td></tr>
</tbody>
</table>
<p><strong>AR = IR × CR × DR</strong>, where the risk of material misstatement (RMM) = IR × CR. Rearranged: <strong>DR = AR ÷ (IR × CR)</strong>.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Acceptable audit risk is 5%, inherent risk 60%, and control risk 50%. Maximum detection risk = 0.05 ÷ (0.60 × 0.50) = <strong>16.7%</strong>. If control risk rises to 100%, detection risk falls to 8.3%, so more (or more effective) substantive testing is needed.</p></div>

<p>The relationship between RMM and detection risk is <strong>inverse</strong>: higher RMM → lower acceptable detection risk → more persuasive substantive procedures (more reliable nature, timing at or near year-end, larger extent). Detection risk can never be zero because of sampling risk and non-sampling risk (human error or inappropriate procedures).</p>

<h2>Materiality</h2>
<p>Misstatements are material if, individually or in aggregate, there is a substantial likelihood they would influence the judgment of a reasonable user. Materiality is a matter of professional judgment, considering both <strong>quantitative</strong> size and <strong>qualitative</strong> nature.</p>

<h3>Levels of materiality</h3>
<table>
<thead><tr><th>Level</th><th>Purpose</th><th>Typical approach</th></tr></thead>
<tbody>
<tr><td>Overall (financial statement) materiality</td><td>Used to evaluate whether the statements as a whole are fairly presented</td><td>A percentage of a benchmark</td></tr>
<tr><td>Specific materiality</td><td>Lower amounts for particular classes, balances, or disclosures users are sensitive to (related party transactions, executive compensation)</td><td>Below overall materiality</td></tr>
<tr><td>Performance materiality</td><td>Set below overall materiality to reduce to an acceptably low level the probability that the <strong>aggregate</strong> of uncorrected and undetected misstatements exceeds materiality</td><td>Often 50–75% of overall materiality, depending on risk and expected misstatements</td></tr>
<tr><td>Tolerable misstatement</td><td>Performance materiality applied to a particular sampling procedure</td><td>≤ performance materiality</td></tr>
<tr><td>Clearly trivial threshold</td><td>Misstatements below this need not be accumulated</td><td>A small fraction of overall materiality</td></tr>
</tbody>
</table>

<h3>Common benchmarks</h3>
<table>
<thead><tr><th>Entity</th><th>Benchmark</th><th>Illustrative range</th></tr></thead>
<tbody>
<tr><td>Profit-oriented, stable earnings</td><td>Pretax income from continuing operations</td><td>About 5%</td></tr>
<tr><td>Volatile earnings or near break-even</td><td>Total revenue or total assets</td><td>About 0.5–1% of revenue or 1–2% of assets</td></tr>
<tr><td>Not-for-profit organization</td><td>Total revenue or total expenses</td><td>About 0.5–2%</td></tr>
<tr><td>Asset-based (investment fund)</td><td>Net assets</td><td>About 1%</td></tr>
</tbody>
</table>

<h3>Qualitative factors that can make small misstatements material</h3>
<ul>
<li>It changes a loss into income (or vice versa), or affects compliance with debt covenants or regulatory requirements.</li>
<li>It masks a change in earnings trends or hides a failure to meet analysts' expectations.</li>
<li>It involves fraud or illegal acts, or increases management's compensation.</li>
<li>It affects segment information that is important to operations.</li>
</ul>

<h3>Revising materiality</h3>
<p>Revise materiality when new information would have led to a different amount initially — for example, actual results differ significantly from those anticipated. If lowered, reconsider performance materiality and the nature, timing, and extent of further procedures. Document all materiality levels and any revisions.</p>

<h2>Using the work of others in planning</h2>
<ul>
<li><strong>Auditor's specialist</strong> (valuation, actuarial, information technology): consider competence, capabilities, and objectivity; agree on the scope of work.</li>
<li><strong>Internal audit:</strong> may reduce, but not eliminate, the external auditor's work; the external auditor remains solely responsible for the opinion.</li>
<li><strong>Service organizations:</strong> determine whether a System and Organization Controls (SOC) 1 report is needed.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute maximum acceptable detection risk.</li>
<li>Identify the purpose of performance materiality and the clearly trivial threshold.</li>
<li>Choose an appropriate benchmark for an entity.</li>
<li>Distinguish the overall audit strategy from the audit plan.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The auditor cannot change inherent or control risk — only assess them. The only lever the auditor controls is detection risk, through the nature, timing, and extent of substantive procedures.</p></div>
`,
  revision: `
<h3>Audit risk model</h3>
<ul>
<li>Audit risk (AR) = inherent risk (IR) × control risk (CR) × detection risk (DR).</li>
<li>Risk of material misstatement (RMM) = IR × CR (assessed, not controlled).</li>
<li>DR = AR ÷ (IR × CR); higher RMM → lower DR → more persuasive substantive work.</li>
</ul>

<h3>Materiality levels</h3>
<ul>
<li>Overall → evaluate statements as a whole.</li>
<li>Specific → sensitive items (related parties, executive pay).</li>
<li>Performance → below overall (≈ 50–75%) to cover <strong>aggregate</strong> undetected misstatements.</li>
<li>Tolerable misstatement → performance materiality applied to a sample.</li>
<li>Clearly trivial → don't accumulate.</li>
</ul>

<h3>Benchmarks</h3>
<p>Profit entity: ≈ 5% of pretax income. Volatile: revenue or assets. Not-for-profit: revenue or expenses.</p>

<h3>Planning</h3>
<ul>
<li>Strategy = scope, timing, direction. Plan = detailed nature, timing, extent of procedures.</li>
<li>Iterative; revise materiality when results differ.</li>
<li>Qualitative factors: covenants, loss-to-profit swings, fraud, compensation.</li>
</ul>
`,
};
