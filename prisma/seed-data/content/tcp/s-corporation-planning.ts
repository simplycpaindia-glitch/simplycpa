import type { TopicContent } from "../types";

export const sCorporationPlanning: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>S corporations are popular with owner-operated businesses because income is taxed once and payroll taxes can be reduced. Tax Compliance and Planning (TCP) tests Form 1120-S compliance, reasonable compensation, shareholder basis tracking, converting from a C corporation, protecting the election, and exit planning.</p>

<h2>Compliance basics</h2>
<ul>
<li><strong>Form 1120-S</strong> is due the 15th day of the 3rd month (March 15 for calendar years), with a 6-month extension. Shareholders receive Schedule K-1 (and Schedule K-3 for international items).</li>
<li>S corporations generally must use a <strong>calendar year</strong> unless they have a business purpose or make a Section 444 election (with required payments).</li>
<li>Shareholders must attach <strong>Form 7203</strong> to report stock and debt basis when they claim losses, receive distributions, dispose of stock, or receive loan repayments.</li>
<li>Late filing penalties are assessed per shareholder, per month.</li>
</ul>

<h2>Reasonable compensation</h2>
<ul>
<li>Shareholder-employees must receive <strong>reasonable compensation</strong> as W-2 wages (subject to Social Security, Medicare, and withholding) before taking distributions.</li>
<li>Remaining profits pass through <strong>without self-employment tax</strong> — the main payroll tax advantage over a sole proprietorship or partnership.</li>
<li>Setting salary too low invites the Internal Revenue Service (IRS) to reclassify distributions as wages, with back payroll taxes and penalties. Factors: training, duties, time devoted, comparable pay, and the company's profitability.</li>
<li>Wages also affect the <strong>qualified business income (QBI) deduction</strong>: higher wages reduce QBI (and so the 20% deduction) but can increase the W-2 wage limitation for higher-income owners — model both effects.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An S corporation earns $200,000 before owner pay. Paying a reasonable $90,000 salary incurs about $13,770 of combined Social Security and Medicare taxes (15.3%). The remaining $110,000 (less the employer's payroll tax) passes through free of self-employment tax — compared with self-employment tax on nearly all $200,000 as a sole proprietor.</p></div>

<h2>Fringe benefits for owners</h2>
<ul>
<li>For <strong>more-than-2% shareholders</strong>, health insurance premiums paid by the corporation are included in W-2 wages (not subject to Social Security and Medicare if under a plan) — the shareholder then takes the self-employed health insurance deduction.</li>
<li>Other fringe benefits (such as group-term life, dependent care assistance) are taxable to more-than-2% shareholders.</li>
</ul>

<h2>Basis, distributions, and loans</h2>
<ul>
<li>Track stock basis yearly: increase for income (including tax-exempt), then decrease for <strong>distributions</strong>, then nondeductible expenses, then losses.</li>
<li>Losses are deductible up to stock basis plus <strong>debt basis</strong> — only for loans the shareholder <strong>personally</strong> made to the corporation. Guaranteeing a bank loan does not create basis; borrowing personally and lending to the corporation does.</li>
<li>Repaying a shareholder loan when debt basis has been reduced by losses triggers gain (ordinary if the loan was an open account, capital if evidenced by a note).</li>
<li>Distributions must be <strong>proportionate to share ownership</strong> — disproportionate distributions risk creating a second class of stock.</li>
<li>For former C corporations with earnings and profits: distributions come first from the <strong>accumulated adjustments account</strong>, then are dividends, then return of basis. An election can distribute earnings and profits first (for example, to avoid the passive income termination rule).</li>
</ul>

<h2>Converting from a C corporation</h2>
<ul>
<li><strong>Built-in gains tax:</strong> net unrealized built-in gain at conversion is taxed at 21% if recognized within the <strong>5-year recognition period</strong>. Plan by obtaining an appraisal at conversion, deferring sales of appreciated assets until after 5 years, and using built-in losses to offset gains.</li>
<li><strong>Inventory recapture:</strong> a corporation using last-in, first-out (LIFO) inventory includes its LIFO reserve in the final C corporation year, paying the tax over 4 years.</li>
<li>Accumulated earnings and profits carry over, triggering the <strong>passive investment income</strong> rules (tax on excess passive income, and termination after 3 years above 25% of gross receipts).</li>
<li>C corporation net operating losses can't pass through; they can offset built-in gains only.</li>
</ul>

<h2>Protecting the election</h2>
<ul>
<li>Watch shareholder eligibility on every transfer — sales to a nonresident alien, partnership, or corporation terminate the election. Shareholder agreements should restrict transfers.</li>
<li>Trusts can hold stock only as grantor trusts, qualified subchapter S trusts, or electing small business trusts — each needs the right elections on time.</li>
<li><strong>Relief</strong> is available for late elections and inadvertent terminations if corrective action is taken promptly (often through simplified revenue procedures, otherwise a private letter ruling).</li>
<li>A <strong>qualified subchapter S subsidiary</strong> (a 100%-owned corporation for which an election is made) is disregarded — its items are treated as the parent's.</li>
</ul>

<h2>State and exit planning</h2>
<ul>
<li>Many states allow an elective <strong>pass-through entity tax</strong>: the S corporation pays state tax (deductible federally) and shareholders get a credit — a workaround to the individual state and local tax deduction cap.</li>
<li><strong>Selling the business:</strong> buyers prefer asset purchases (stepped-up basis); sellers usually prefer stock sales (capital gain). A <strong>Section 338(h)(10)</strong> or <strong>Section 336(e)</strong> election treats a stock sale as an asset sale for tax purposes — the buyer gets a step-up, and the shareholders are taxed as if the corporation sold its assets (with possible ordinary income from recapture).</li>
<li>Qualified small business stock treatment is not available for S corporation stock.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Evaluate reasonable compensation and its payroll and QBI effects.</li>
<li>Compute basis, deductible losses, and the tax on distributions.</li>
<li>Plan a C-to-S conversion around the built-in gains tax.</li>
<li>Identify events that terminate the election and available relief.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> An owner who wants loss deductions from an S corporation should lend money to the corporation personally rather than guarantee a bank loan — only direct loans create debt basis.</p></div>
`,
  revision: `
<h3>Compliance</h3>
<p>Form 1120-S due March 15; Schedule K-1; calendar year usually required; Form 7203 for shareholder basis.</p>

<h3>Reasonable compensation</h3>
<ul>
<li>Pay salary first (payroll taxes); rest passes through without self-employment tax.</li>
<li>Too low → Internal Revenue Service (IRS) reclassifies distributions as wages.</li>
<li>Wages reduce qualified business income (QBI) but may raise the wage limit.</li>
<li>More-than-2% shareholders: health insurance in wages, then deduct.</li>
</ul>

<h3>Basis</h3>
<ul>
<li>Order: + income → − distributions → − nondeductible → − losses.</li>
<li>Debt basis only for <strong>direct shareholder loans</strong> (not guarantees).</li>
<li>Distributions must be proportionate (one class of stock).</li>
</ul>

<h3>C-to-S conversion</h3>
<p>Built-in gains tax 21% for 5 years · last-in, first-out (LIFO) inventory reserve recapture over 4 years · passive income limits with earnings and profits.</p>

<h3>Protect and exit</h3>
<ul>
<li>Restrict transfers to ineligible shareholders; trust elections; relief for late or inadvertent errors.</li>
<li>Pass-through entity tax avoids the state and local tax cap.</li>
<li>Section 338(h)(10) / 336(e): stock sale taxed as asset sale → buyer basis step-up.</li>
</ul>
`,
};
