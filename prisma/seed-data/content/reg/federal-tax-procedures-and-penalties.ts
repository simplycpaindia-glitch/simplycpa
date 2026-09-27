import type { TopicContent } from "../types";

export const taxProceduresPenalties: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) Area I tests filing deadlines, estimated tax requirements, and the penalties that apply to taxpayers and return preparers. Penalty questions are often calculation-based — especially the combined failure-to-file and failure-to-pay penalties.</p>

<h2>Filing deadlines (calendar-year taxpayers)</h2>
<table>
<thead><tr><th>Return</th><th>Due date</th><th>Extension</th></tr></thead>
<tbody>
<tr><td>Individual (Form 1040)</td><td>April 15</td><td>6 months (October 15)</td></tr>
<tr><td>C corporation (Form 1120)</td><td>April 15 (15th day of the 4th month)</td><td>6 months (October 15)</td></tr>
<tr><td>S corporation (Form 1120-S)</td><td>March 15 (15th day of the 3rd month)</td><td>6 months (September 15)</td></tr>
<tr><td>Partnership (Form 1065)</td><td>March 15</td><td>6 months (September 15)</td></tr>
<tr><td>Trust or estate (Form 1041)</td><td>April 15</td><td>5½ months (September 30)</td></tr>
<tr><td>Exempt organization (Form 990)</td><td>May 15 (15th day of the 5th month)</td><td>6 months (November 15)</td></tr>
<tr><td>Gift tax (Form 709)</td><td>April 15</td><td>Follows the income tax extension</td></tr>
<tr><td>Estate tax (Form 706)</td><td>9 months after death</td><td>6 months</td></tr>
</tbody>
</table>
<p>An extension extends the time to <strong>file</strong>, not the time to <strong>pay</strong>. Interest and the failure-to-pay penalty run from the original due date.</p>

<h2>Estimated tax</h2>
<h3>Individuals</h3>
<ul>
<li>Four installments: April 15, June 15, September 15, and January 15 of the following year.</li>
<li><strong>No penalty</strong> if the tax due after withholding and credits is <strong>less than $1,000</strong>.</li>
<li>Safe harbors — pay the lesser of: <strong>90% of the current year's tax</strong>, or <strong>100% of the prior year's tax</strong> (<strong>110%</strong> if prior-year adjusted gross income (AGI) exceeded $150,000; $75,000 if married filing separately). The prior-year safe harbor requires a 12-month prior-year return.</li>
<li>The annualized income installment method helps taxpayers with uneven income.</li>
<li>Withholding is treated as paid evenly through the year, regardless of when withheld.</li>
</ul>

<h3>Corporations</h3>
<ul>
<li>Installments on the 15th day of the 4th, 6th, 9th, and 12th months.</li>
<li>No penalty if the tax is less than <strong>$500</strong>.</li>
<li>Safe harbors: 100% of current-year tax, or 100% of prior-year tax (the prior-year safe harbor is <strong>not</strong> available to a large corporation — taxable income of $1 million or more in any of the 3 prior years — except for the first installment, or if the prior year showed no tax or was a short year).</li>
</ul>

<h2>Taxpayer penalties</h2>
<table>
<thead><tr><th>Penalty</th><th>Rate</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><strong>Failure to file</strong></td><td>5% of net tax due per month or part of a month, maximum 25%</td><td>If more than 60 days late, a minimum penalty applies (the lesser of an indexed dollar amount or 100% of the tax due). Fraudulent failure to file: 15% per month, max 75%.</td></tr>
<tr><td><strong>Failure to pay</strong></td><td>0.5% per month or part of a month, maximum 25%</td><td>Rises to 1% per month after an Internal Revenue Service (IRS) notice of intent to levy; reduced to 0.25% during an installment agreement for timely filers</td></tr>
<tr><td>Both in the same month</td><td>Failure to file is <strong>reduced by</strong> the failure-to-pay penalty — a combined 5% per month</td><td></td></tr>
<tr><td><strong>Accuracy-related</strong></td><td><strong>20%</strong> of the underpayment</td><td>Negligence or disregard of rules; <strong>substantial understatement</strong> (individuals: exceeds the greater of 10% of the correct tax or $5,000; corporations: the lesser of 10% of correct tax (or $10,000 if greater) and $10 million); substantial valuation misstatements. 40% for gross valuation misstatements.</td></tr>
<tr><td><strong>Civil fraud</strong></td><td><strong>75%</strong> of the underpayment attributable to fraud</td><td>The IRS must prove fraud by clear and convincing evidence; not combined with the accuracy penalty on the same portion</td></tr>
<tr><td>Frivolous return</td><td>A flat penalty (indexed)</td><td>Positions based on frivolous arguments</td></tr>
<tr><td>Erroneous refund claim</td><td>20% of the excessive amount</td><td>Without reasonable cause</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A taxpayer files 2 months and 10 days late, owing $10,000 with no payment, and has no reasonable cause. The partial month counts as a full month, so 3 months apply.<br>Failure to pay = 0.5% × 3 × $10,000 = <strong>$150</strong>.<br>Failure to file = (5% − 0.5%) × 3 × $10,000 = <strong>$1,350</strong>.<br>Total = <strong>$1,500</strong> (plus interest).</p></div>

<h3>Avoiding or reducing penalties</h3>
<ul>
<li><strong>Reasonable cause</strong> and absence of willful neglect (serious illness, natural disaster, reliance on a competent professional's advice).</li>
<li><strong>First-time abatement</strong> of failure-to-file and failure-to-pay penalties for taxpayers with a clean 3-year compliance history.</li>
<li>For the substantial understatement penalty: the understatement is reduced by positions with <strong>substantial authority</strong>, or with a <strong>reasonable basis that are adequately disclosed</strong> (Form 8275) — not for tax shelters.</li>
</ul>

<h3>Interest</h3>
<p>Interest on underpayments runs from the original due date until paid, at the federal short-term rate plus 3 percentage points (plus 5 for large corporate underpayments), compounded daily. Interest is not a penalty and generally cannot be abated for reasonable cause. It also runs on penalties.</p>

<h2>Tax return preparer penalties</h2>
<table>
<thead><tr><th>Provision</th><th>Conduct</th><th>Penalty</th></tr></thead>
<tbody>
<tr><td>§6694(a)</td><td>Understatement due to an <strong>unreasonable position</strong> (the preparer knew or should have known)</td><td>The <strong>greater of $1,000 or 50%</strong> of the income derived from the return</td></tr>
<tr><td>§6694(b)</td><td>Understatement due to <strong>willful</strong> or <strong>reckless</strong> conduct</td><td>The <strong>greater of $5,000 or 75%</strong> of the income derived</td></tr>
<tr><td>§6695</td><td>Procedural failures: not furnishing a copy to the taxpayer, not signing, not including a Preparer Tax Identification Number (PTIN), not keeping copies, negotiating a refund check, failing due diligence for refundable credits and head of household status</td><td>Per-failure amounts (indexed); negotiating a refund check has its own penalty</td></tr>
<tr><td>§7216 / §6713</td><td>Unauthorized disclosure or use of taxpayer information</td><td>Civil penalty per disclosure; criminal misdemeanor if knowing or reckless</td></tr>
<tr><td>§6701</td><td>Aiding and abetting an understatement</td><td>Flat penalty per return</td></tr>
</tbody>
</table>

<h3>Standards to avoid the §6694(a) penalty</h3>
<table>
<thead><tr><th>Position</th><th>Standard needed</th></tr></thead>
<tbody>
<tr><td>Undisclosed position</td><td><strong>Substantial authority</strong> (roughly 40% likelihood of being sustained)</td></tr>
<tr><td>Disclosed position</td><td><strong>Reasonable basis</strong> (roughly 20%)</td></tr>
<tr><td>Tax shelter or reportable transaction</td><td>Reasonable belief that it is <strong>more likely than not</strong> (over 50%) to be sustained</td></tr>
</tbody>
</table>
<p>Reasonable cause and good faith is also a defense. A preparer may rely in good faith on client information but may not ignore implications of information furnished and must make reasonable inquiries if it seems incorrect or incomplete.</p>

<h2>Criminal provisions</h2>
<ul>
<li>Willful attempt to evade tax (a felony), willful failure to file or pay (a misdemeanor), and willfully making a false return (a felony).</li>
<li>Generally a 6-year statute of limitations for criminal prosecution.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute combined failure-to-file and failure-to-pay penalties.</li>
<li>Apply the estimated tax safe harbors, including the 110% rule.</li>
<li>Test the substantial understatement threshold.</li>
<li>Match preparer conduct to the penalty and the standard needed to avoid it.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Remember the ladder of certainty: reasonable basis (with disclosure) → substantial authority (without disclosure) → more likely than not (tax shelters). Each step up protects a riskier position.</p></div>
`,
  revision: `
<h3>Due dates (calendar year)</h3>
<p>Partnership and S corporation: March 15 · Individual, C corporation, trust: April 15 · Exempt organization: May 15 · Estate tax: 9 months after death. Extensions: time to file, <strong>not to pay</strong>.</p>

<h3>Estimated tax</h3>
<ul>
<li>Individuals: no penalty if &lt; $1,000 due; pay lesser of 90% current or 100% prior (110% if prior adjusted gross income (AGI) &gt; $150,000).</li>
<li>Corporations: &lt; $500 due → none; 100% current or prior (large corporations: current only, after the first installment).</li>
</ul>

<h3>Taxpayer penalties</h3>
<ul>
<li>Failure to file: 5% per month (max 25%). Failure to pay: 0.5% per month (max 25%). Same month → combined 5%.</li>
<li>Accuracy-related: 20%. Substantial understatement (individual): &gt; greater of 10% of correct tax or $5,000.</li>
<li>Civil fraud: 75%; Internal Revenue Service (IRS) proves by clear and convincing evidence.</li>
<li>Partial month = full month.</li>
</ul>

<h3>Preparer penalties</h3>
<ul>
<li>Unreasonable position: greater of $1,000 or 50% of fee income.</li>
<li>Willful or reckless: greater of $5,000 or 75%.</li>
<li>Standards: undisclosed → substantial authority; disclosed → reasonable basis; tax shelter → more likely than not.</li>
</ul>
`,
};
