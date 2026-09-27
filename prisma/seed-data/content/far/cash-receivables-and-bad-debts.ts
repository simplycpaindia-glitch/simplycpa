import type { TopicContent } from "../types";

export const cashReceivables: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Cash and receivables sit in Financial Accounting and Reporting (FAR) Area II (Select Balance Sheet Accounts, 30–40%). Questions focus on what counts as cash, bank reconciliations, estimating the allowance for credit losses under the current expected credit loss (CECL) model, and transfers of receivables (factoring and pledging).</p>

<h2>Cash and cash equivalents</h2>
<table>
<thead><tr><th>Included in cash and cash equivalents</th><th>Excluded (report elsewhere)</th></tr></thead>
<tbody>
<tr><td>Currency, coins, checking and savings accounts</td><td>Postdated checks received (receivable)</td></tr>
<tr><td>Checks received but not yet deposited</td><td>Certificates of deposit with original maturity over 3 months (short-term investment)</td></tr>
<tr><td>Petty cash</td><td>Legally restricted compensating balances (separate; noncurrent if tied to long-term debt)</td></tr>
<tr><td>Treasury bills, commercial paper, money market funds with <strong>original</strong> maturity of 3 months or less</td><td>Cash restricted for plant expansion or debt retirement (noncurrent)</td></tr>
<tr><td></td><td>Loans and travel advances to employees, postage stamps (receivables or prepaids)</td></tr>
</tbody>
</table>
<p>Bank overdrafts are current liabilities unless the entity has other accounts at the same bank with a right of offset.</p>

<h2>Bank reconciliation</h2>
<table>
<thead><tr><th>Balance per bank</th><th>Balance per books</th></tr></thead>
<tbody>
<tr><td>+ Deposits in transit</td><td>+ Collections by the bank (notes collected, interest earned)</td></tr>
<tr><td>− Outstanding checks</td><td>− Bank service charges and non-sufficient funds (NSF) checks</td></tr>
<tr><td>± Bank errors</td><td>± Book errors</td></tr>
<tr><td colspan="2"><strong>Both sides must equal the correct cash balance.</strong> Only book-side items need journal entries.</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Bank balance $50,000; deposits in transit $8,000; outstanding checks $12,000; an unrecorded $100 service charge. Correct cash = 50,000 + 8,000 − 12,000 = <strong>$46,000</strong>. The $100 charge is a reconciling item on the <em>book</em> side and requires an adjusting entry.</p></div>

<h2>Accounts receivable — initial measurement</h2>
<ul>
<li>Recorded at the transaction price under Accounting Standards Codification (ASC) 606, net of expected returns and allowances.</li>
<li><strong>Cash (sales) discounts:</strong> the gross method records the full amount and recognizes discounts when taken; the net method records the net amount and recognizes "discounts forfeited" as income. Under ASC 606, expected discounts are variable consideration that reduce the transaction price.</li>
<li><strong>Trade discounts</strong> are never recorded — the invoice price is the price.</li>
</ul>

<h2>Credit losses — the CECL model (ASC 326)</h2>
<p>The CECL model requires an allowance for <strong>lifetime expected credit losses</strong> on financial assets measured at amortized cost — trade receivables, loans, held-to-maturity debt securities, and net investments in leases. Estimates use historical experience, current conditions, and <strong>reasonable and supportable forecasts</strong>. There is no "probable" threshold: a loss is recognized from day one.</p>

<h3>Estimation approaches</h3>
<ul>
<li><strong>Aging schedule / percentage of receivables:</strong> a balance sheet approach — compute the required ending allowance, then plug the expense.</li>
<li><strong>Loss-rate, probability-of-default, and discounted cash flow methods</strong> are also acceptable.</li>
<li>The old <strong>percentage-of-sales</strong> (income statement) approach does not directly produce a CECL allowance.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Receivables total $400,000 and 5% are expected to be uncollectible, so the allowance must be $20,000 credit. Before adjustment the allowance has a $3,000 <strong>debit</strong> balance (write-offs exceeded prior estimates). Credit loss expense = 20,000 + 3,000 = <strong>$23,000</strong>.</p></div>

<h3>Allowance roll-forward</h3>
<table>
<thead><tr><th>Allowance for credit losses</th></tr></thead>
<tbody>
<tr><td>Beginning balance</td></tr>
<tr><td>+ Credit loss expense (provision)</td></tr>
<tr><td>− Write-offs</td></tr>
<tr><td>+ Recoveries of accounts previously written off</td></tr>
<tr><td>= Ending balance</td></tr>
</tbody>
</table>
<p>A <strong>write-off</strong> (debit allowance, credit receivable) does not change net receivables, total assets, or net income. A <strong>recovery</strong> reverses the write-off and then records the cash collection.</p>

<h3>New practical expedient for current receivables</h3>
<p>Accounting Standards Update (ASU) 2025-05 lets any entity assume, for <strong>current accounts receivable and current contract assets</strong> arising under ASC 606, that conditions at the balance sheet date do not change over the asset's remaining life — so no forecast adjustment is needed. Entities other than public business entities that elect it may also consider cash collected after the balance sheet date. It is effective for annual periods beginning after December 15, 2025 and became eligible for testing in 2026.</p>

<h3>Direct write-off method</h3>
<p>Expensing bad debts only when an account is written off is <strong>not</strong> Generally Accepted Accounting Principles (GAAP) unless the effect is immaterial — it violates matching. It is, however, the method required for tax purposes.</p>

<h2>Notes receivable</h2>
<ul>
<li>Long-term notes are recorded at <strong>present value</strong>. If a note carries no stated interest or an unreasonably low rate, impute interest at the market rate; the discount is amortized to interest income using the effective interest method.</li>
<li>Short-term trade receivables due within one year are not discounted.</li>
</ul>

<h2>Transfers of receivables (ASC 860)</h2>
<table>
<thead><tr><th>Arrangement</th><th>Accounting</th></tr></thead>
<tbody>
<tr><td>Pledging (collateral for a loan)</td><td>Receivables stay on the books; disclose the pledge; record the loan</td></tr>
<tr><td>Assignment</td><td>Specific receivables collateralize a loan; reclassify as "assigned"; record the loan</td></tr>
<tr><td>Factoring <strong>without</strong> recourse</td><td>Sale: remove receivables; record cash, a due-from-factor for any holdback, and a loss for the fee</td></tr>
<tr><td>Factoring <strong>with</strong> recourse</td><td>Sale if control is surrendered (isolated from transferor, transferee can pledge or exchange, no effective control retained); record the recourse obligation as a liability at fair value. Otherwise, a secured borrowing</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (factoring without recourse):</strong> $200,000 of receivables are sold for $185,000 cash, with no holdback.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody><tr><td>Cash</td><td>185,000</td><td></td></tr><tr><td>Loss on sale of receivables</td><td>15,000</td><td></td></tr><tr><td>Accounts receivable</td><td></td><td>200,000</td></tr></tbody></table></div>

<h2>How it is tested</h2>
<ul>
<li>Compute the cash and cash equivalents balance from a list of items.</li>
<li>Prepare a bank reconciliation and identify required book entries.</li>
<li>Calculate credit loss expense or the ending allowance, including recoveries.</li>
<li>Record factoring transactions with and without recourse.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For allowance questions, always solve for the <em>required ending balance</em> first, then compare to the unadjusted balance — watch for a debit balance, which increases the expense.</p></div>
`,
  revision: `
<h3>Cash</h3>
<ul>
<li>Cash equivalents: <strong>original</strong> maturity ≤ 3 months.</li>
<li>Exclude postdated checks, certificates of deposit over 3 months, restricted balances, employee advances.</li>
<li>Bank reconciliation: bank side = deposits in transit, outstanding checks; book side = bank charges, non-sufficient funds (NSF) checks, collections — <strong>only book items need entries</strong>.</li>
</ul>

<h3>Credit losses — current expected credit loss (CECL) model</h3>
<ul>
<li>Lifetime expected losses from day one; history + current conditions + forecasts.</li>
<li>Expense = required ending allowance − unadjusted balance (add a debit balance).</li>
<li>Roll-forward: Beginning + expense − write-offs + recoveries = Ending.</li>
<li>Write-off: no effect on net receivables, assets, or income.</li>
<li>Direct write-off: not Generally Accepted Accounting Principles (GAAP) unless immaterial; required for tax.</li>
<li>Accounting Standards Update (ASU) 2025-05: may assume current conditions persist for current receivables and contract assets.</li>
</ul>

<h3>Transfers</h3>
<ul>
<li>Pledging → keep receivables, disclose.</li>
<li>Factoring without recourse → sale, loss = fee.</li>
<li>With recourse → sale only if control surrendered; recourse liability at fair value; else secured borrowing.</li>
</ul>

<h3>Notes receivable</h3>
<p>Long-term at present value; impute interest if none or unreasonable.</p>
`,
};
