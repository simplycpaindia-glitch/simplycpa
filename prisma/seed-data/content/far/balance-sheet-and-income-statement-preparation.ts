import type { TopicContent } from "../types";

export const balanceSheetIncomeStatement: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Preparing and reading the balance sheet and income statement is the core skill of the Financial Accounting and Reporting (FAR) section. Area I (Financial Reporting) carries 30–40% of the exam, and task-based simulations (TBSs) often ask you to build or correct a statement from a trial balance. You need to classify every item correctly, apply the rules for discontinued operations, and present earnings per share (EPS) in the right places.</p>

<h2>The classified balance sheet</h2>
<p>Under US Generally Accepted Accounting Principles (GAAP), assets and liabilities are generally presented in order of <strong>liquidity</strong> (most liquid first), split into current and noncurrent.</p>

<h3>Current versus noncurrent</h3>
<ul>
<li><strong>Current assets:</strong> cash and other assets expected to be realized in cash, sold, or consumed within <strong>one year or the operating cycle, whichever is longer</strong>. Examples: cash, trading securities, receivables, inventory, prepaid expenses.</li>
<li><strong>Current liabilities:</strong> obligations expected to be settled using current assets or by creating other current liabilities, within the same period.</li>
<li>Cash restricted for the purchase of long-term assets or the repayment of long-term debt is <strong>noncurrent</strong>.</li>
</ul>

<table>
<thead><tr><th>Section</th><th>Typical line items</th></tr></thead>
<tbody>
<tr><td>Current assets</td><td>Cash and cash equivalents, short-term investments, accounts receivable (net), inventory, prepaid expenses</td></tr>
<tr><td>Investments and funds</td><td>Long-term investments, bond sinking funds, land held for speculation</td></tr>
<tr><td>Property, plant, and equipment (PP&amp;E)</td><td>Land, buildings, equipment, less accumulated depreciation</td></tr>
<tr><td>Intangible assets</td><td>Patents, trademarks, goodwill</td></tr>
<tr><td>Current liabilities</td><td>Accounts payable, accrued liabilities, unearned revenue, current portion of long-term debt</td></tr>
<tr><td>Long-term liabilities</td><td>Bonds payable, lease liabilities, deferred tax liabilities, pension obligations</td></tr>
<tr><td>Stockholders' equity</td><td>Common and preferred stock, additional paid-in capital (APIC), retained earnings, accumulated other comprehensive income (AOCI), treasury stock, noncontrolling interest</td></tr>
</tbody>
</table>

<h3>Classifying debt — the rules that trip candidates up</h3>
<ul>
<li><strong>Current portion of long-term debt</strong> (principal due within 12 months) is current.</li>
<li><strong>Short-term debt expected to be refinanced</strong> may be classified as noncurrent only if, before the financial statements are issued, the entity has (1) actually refinanced it on a long-term basis, or (2) entered into a non-cancelable financing agreement to do so.</li>
<li><strong>Covenant violations:</strong> long-term debt that becomes callable because of a violation at the balance sheet date is current, unless the creditor waives the right to demand repayment for more than one year (or the violation is cured within a grace period).</li>
<li>Deferred tax assets and liabilities are always <strong>noncurrent</strong> (Accounting Standards Update (ASU) 2015-17).</li>
</ul>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Assets and liabilities are generally <em>not</em> offset. A customer's credit balance in accounts receivable is a current liability, and a bank overdraft is a liability unless a legal right of offset exists at the same bank.</p></div>

<h2>The income statement</h2>
<p>GAAP allows a single-step format (all revenues less all expenses) or a multiple-step format. The multiple-step format is what exam questions usually expect:</p>
<table>
<thead><tr><th>Multiple-step income statement</th></tr></thead>
<tbody>
<tr><td>Net sales (sales − returns, allowances, and discounts)</td></tr>
<tr><td>− Cost of goods sold (COGS)</td></tr>
<tr><td><strong>= Gross profit</strong></td></tr>
<tr><td>− Selling, general, and administrative expenses</td></tr>
<tr><td><strong>= Operating income</strong></td></tr>
<tr><td>± Other income and expenses (interest, gains and losses, unusual or infrequent items)</td></tr>
<tr><td><strong>= Income from continuing operations before income taxes</strong></td></tr>
<tr><td>− Income tax expense</td></tr>
<tr><td><strong>= Income from continuing operations</strong></td></tr>
<tr><td>± Discontinued operations, <strong>net of tax</strong></td></tr>
<tr><td><strong>= Net income</strong> (then attributed to the parent and to noncontrolling interest)</td></tr>
</tbody>
</table>

<h3>Unusual or infrequent items</h3>
<p>Extraordinary items were eliminated by ASU 2015-01. An item that is unusual in nature, infrequent, or both is reported as a <strong>separate line within continuing operations, before tax</strong> (or disclosed in the notes). It is never shown net of tax, and no per-share amount is presented on the face of the statement.</p>

<h2>Discontinued operations</h2>
<p>A disposal of a component (or group of components) is reported as a discontinued operation when it:</p>
<ol>
<li>represents a <strong>strategic shift</strong> that has, or will have, a <strong>major effect</strong> on operations and financial results (for example, a major geographic area, a major line of business, or a major equity-method investment); and</li>
<li>has been disposed of, or is classified as <strong>held for sale</strong>.</li>
</ol>
<p>A business acquired and immediately classified as held for sale also qualifies.</p>

<h3>What goes into the discontinued operations line</h3>
<ul>
<li>The component's operating income or loss for the whole period, even before the decision to sell.</li>
<li>Any gain or loss on disposal, or any impairment loss when written down to fair value less costs to sell.</li>
<li>All amounts presented <strong>net of the related tax effect</strong> (intraperiod tax allocation), with prior periods restated for comparability.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company sells a division that meets the criteria. The division lost $200,000 from operations this year and the sale produced a $100,000 pretax loss. With a 25% tax rate, discontinued operations = ($200,000 + $100,000) × (1 − 25%) = <strong>$225,000 loss, net of tax</strong>. Income from continuing operations is unaffected.</p></div>

<h3>Held for sale measurement</h3>
<ul>
<li>Measured at the <strong>lower of carrying amount or fair value less costs to sell</strong>.</li>
<li>Depreciation and amortization <strong>stop</strong> once classified as held for sale.</li>
<li>Later increases in fair value less costs to sell may be recognized, but only up to losses previously recognized.</li>
</ul>

<h2>Earnings per share presentation</h2>
<p>Public entities present basic and diluted EPS on the face of the income statement for income from continuing operations and net income. When discontinued operations are reported, EPS for discontinued operations is shown on the face of the statement or in the notes.</p>

<h2>Recent presentation updates to know</h2>
<ul>
<li><strong>Expense disaggregation (ASU 2024-03):</strong> public business entities will disclose, in the notes, how relevant expense captions break down into purchases of inventory, employee compensation, depreciation, intangible amortization, and certain other natural categories. It applies to annual periods beginning after December 15, 2026.</li>
<li><strong>Segment disclosures (ASU 2023-07):</strong> public entities disclose significant segment expenses regularly provided to the chief operating decision maker (covered in the Securities and Exchange Commission (SEC) Reporting topic).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute gross profit, operating income, or income from continuing operations from a list of accounts.</li>
<li>Decide whether a disposal qualifies as a discontinued operation, and compute the net-of-tax amount.</li>
<li>Classify debt as current or noncurrent given refinancing agreements or covenant violations.</li>
<li>Calculate working capital (current assets − current liabilities) and the current ratio after a reclassification.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Only two things are routinely reported net of tax on the income statement: discontinued operations and items of other comprehensive income. Everything else inside continuing operations — including unusual or infrequent items — is pretax.</p></div>
`,
  revision: `
<h3>Balance sheet</h3>
<ul>
<li>Current = realized or settled within <strong>1 year or the operating cycle, whichever is longer</strong>.</li>
<li>Deferred tax assets and liabilities: always <strong>noncurrent</strong>.</li>
<li>Short-term debt → noncurrent only if refinanced, or a non-cancelable refinancing agreement exists, <strong>before the statements are issued</strong>.</li>
<li>Covenant violation making debt callable → <strong>current</strong>, unless waived for more than 1 year.</li>
<li>No offsetting: customer credit balances are liabilities.</li>
</ul>

<h3>Income statement order</h3>
<p>Net sales − Cost of goods sold (COGS) = Gross profit − Operating expenses = Operating income ± Other items = Pretax income from continuing operations − Tax = Income from continuing operations ± Discontinued operations (net of tax) = Net income.</p>

<h3>Discontinued operations</h3>
<ul>
<li>Test: <strong>strategic shift + major effect</strong>, and disposed of or held for sale.</li>
<li>Includes full-year operating results + disposal gain/loss or impairment.</li>
<li>Reported <strong>net of tax</strong>; prior periods restated.</li>
<li>Held for sale: lower of carrying amount or fair value less costs to sell; <strong>no depreciation</strong>.</li>
</ul>

<h3>Unusual or infrequent items</h3>
<p>Separate line in continuing operations, <strong>pretax</strong>, no earnings per share (EPS) on the face. Extraordinary items no longer exist.</p>

<h3>Formula</h3>
<p>Working capital = current assets − current liabilities · Current ratio = current assets ÷ current liabilities.</p>
`,
};
