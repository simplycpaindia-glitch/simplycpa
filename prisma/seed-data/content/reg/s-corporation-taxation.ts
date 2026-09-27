import type { TopicContent } from "../types";

export const sCorporations: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>An S corporation is a corporation under state law that elects to be taxed like a pass-through entity: income flows to shareholders and is taxed once. Taxation and Regulation (REG) tests eligibility, the election and its termination, allocation of income, shareholder basis and loss limits, distributions, and the entity-level taxes that can still apply.</p>

<h2>Eligibility</h2>
<ul>
<li><strong>Domestic</strong> corporation (not an ineligible corporation such as a bank using the reserve method or an insurance company).</li>
<li>No more than <strong>100 shareholders</strong> — members of a family (up to six generations from a common ancestor) and their spouses count as <strong>one</strong> shareholder.</li>
<li>Shareholders must be <strong>individuals</strong> (US citizens or residents), <strong>estates</strong>, certain <strong>trusts</strong> (grantor trusts, qualified subchapter S trusts, electing small business trusts), and certain <strong>tax-exempt organizations</strong> (charities, qualified retirement plans).</li>
<li><strong>No</strong> nonresident alien, partnership, or C corporation shareholders.</li>
<li><strong>One class of stock</strong> — all shares have identical rights to distributions and liquidation proceeds. <strong>Differences in voting rights are allowed.</strong></li>
</ul>

<h2>Making and ending the election</h2>
<ul>
<li>File Form 2553 with the consent of <strong>all shareholders</strong> on the date of the election (and all who held shares earlier in the year if it is to be effective that year).</li>
<li>To be effective for the current year, file by the <strong>15th day of the 3rd month</strong> of the tax year (March 15 for calendar-year corporations); later elections take effect the next year (late-election relief is available for reasonable cause).</li>
<li><strong>Termination:</strong>
<ul>
<li>Voluntary revocation by shareholders holding <strong>more than 50%</strong> of the shares.</li>
<li>Ceasing to be eligible (for example, a partnership or nonresident alien acquires shares) — effective <strong>on that date</strong>.</li>
<li>Passive investment income above <strong>25% of gross receipts</strong> for <strong>3 consecutive years</strong> while the corporation has accumulated earnings and profits from C corporation years — effective the first day of the fourth year.</li>
</ul></li>
<li>After termination, the corporation generally must wait <strong>5 years</strong> to re-elect without Internal Revenue Service (IRS) consent.</li>
</ul>

<h2>Pass-through of income</h2>
<ul>
<li>The S corporation files <strong>Form 1120-S</strong> (due March 15 for calendar years) and gives each shareholder a Schedule K-1.</li>
<li>Ordinary business income and <strong>separately stated items</strong> (capital gains and losses, Section 1231 gains and losses, charitable contributions, tax-exempt income, Section 179 expense, investment interest, dividends) flow to shareholders.</li>
<li>Allocation is <strong>per share, per day</strong> — unless all affected shareholders elect to close the books when a shareholder's interest terminates.</li>
<li>Shareholder-employees must receive <strong>reasonable compensation</strong>, which is subject to payroll taxes; the remaining pass-through income is not subject to self-employment tax.</li>
<li>Fringe benefits for shareholders owning more than 2% (such as health insurance) are treated as wages, and the shareholder may deduct self-employed health insurance.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An S corporation earns $365,000 of ordinary income in a non-leap year. A shareholder owned 50% for the first 146 days and then sold all of it. Allocation = $365,000 × 146/365 × 50% = <strong>$73,000</strong>.</p></div>

<h2>Shareholder basis</h2>
<table>
<thead><tr><th>Stock basis adjustments (in this order each year)</th></tr></thead>
<tbody>
<tr><td>Beginning stock basis (initial: cash + adjusted basis of property contributed)</td></tr>
<tr><td>+ Income items, including tax-exempt income</td></tr>
<tr><td>− <strong>Distributions</strong> (non-dividend)</td></tr>
<tr><td>− Nondeductible expenses (fines, 50% of meals)</td></tr>
<tr><td>− Losses and deductions</td></tr>
<tr><td>= Ending stock basis (never below zero)</td></tr>
</tbody>
</table>
<ul>
<li>Losses first reduce stock basis, then <strong>debt basis</strong> — loans the shareholder <strong>personally made</strong> to the corporation. Later income restores debt basis before stock basis.</li>
<li><strong>Corporate debt owed to third parties does not create basis</strong>, even if the shareholder guarantees it — a key difference from partnerships.</li>
<li>Losses above stock and debt basis are suspended and carried forward indefinitely (lost if the stock is sold).</li>
<li>Losses must then pass the at-risk, passive activity, and excess business loss limits.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A shareholder has stock basis of $10,000, has personally lent the corporation $5,000, and is allocated a $25,000 loss. Deductible loss = <strong>$15,000</strong> (stock basis to zero, then debt basis to zero); $10,000 is suspended.</p></div>

<h2>Distributions</h2>
<table>
<thead><tr><th>S corporation without accumulated earnings and profits</th><th>S corporation with accumulated earnings and profits (former C corporation)</th></tr></thead>
<tbody>
<tr><td>1. Tax-free to the extent of stock basis<br>2. Excess = capital gain</td><td>1. Tax-free to the extent of the <strong>accumulated adjustments account (AAA)</strong> — undistributed S corporation income already taxed<br>2. <strong>Dividend</strong> to the extent of accumulated earnings and profits<br>3. Return of remaining basis<br>4. Capital gain</td></tr>
</tbody>
</table>
<p>Distributing <strong>appreciated property</strong> triggers gain at the corporate level (as if sold), which passes through to shareholders; losses on distributed property are not recognized.</p>

<h2>Entity-level taxes</h2>
<ul>
<li><strong>Built-in gains tax:</strong> a C corporation converting to S status pays tax at <strong>21%</strong> on net unrealized built-in gain existing at conversion if recognized within the <strong>5-year recognition period</strong>. The gain (net of tax) also passes through.</li>
<li><strong>Excess passive investment income tax:</strong> 21% on excess net passive income when passive investment income exceeds 25% of gross receipts and the corporation has accumulated earnings and profits.</li>
<li><strong>Inventory recapture</strong> on conversion from a C corporation using last-in, first-out (LIFO) inventory — the LIFO reserve is taxed, paid over 4 years.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Decide whether a corporation qualifies, or whether an event terminates the election.</li>
<li>Allocate income per share, per day.</li>
<li>Compute shareholder basis and the deductible loss.</li>
<li>Taxation of distributions with and without accumulated earnings and profits; built-in gains tax.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> An S shareholder gets basis only for loans they <em>personally</em> made to the corporation. A partner, by contrast, gets basis for their share of the partnership's liabilities.</p></div>
`,
  revision: `
<h3>Eligibility</h3>
<p>Domestic · ≤ 100 shareholders (family = 1) · individuals (US), estates, certain trusts, exempt organizations · no partnerships, C corporations, or nonresident aliens · one class of stock (voting differences OK).</p>

<h3>Election</h3>
<ul>
<li>Form 2553, all shareholders consent; by March 15 for the current year.</li>
<li>Revoke: &gt; 50% of shares. Ineligible shareholder → terminates that day.</li>
<li>Passive income &gt; 25% for 3 years with earnings and profits → terminates. Wait 5 years to re-elect.</li>
</ul>

<h3>Pass-through</h3>
<p>Per share, per day. Separately stated items. Reasonable salary for shareholder-employees.</p>

<h3>Basis and losses</h3>
<ul>
<li>Order: + income → − distributions → − nondeductible expenses → − losses.</li>
<li>Losses: stock basis, then shareholder's <strong>own loans</strong>. No basis for third-party corporate debt.</li>
</ul>

<h3>Distributions</h3>
<ul>
<li>No earnings and profits: tax-free to basis, then capital gain.</li>
<li>With earnings and profits: accumulated adjustments account (AAA) → dividend → basis → gain.</li>
</ul>

<h3>Entity taxes</h3>
<p>Built-in gains: 21% within 5 years of conversion. Excess passive income tax. Last-in, first-out (LIFO) recapture.</p>
`,
};
