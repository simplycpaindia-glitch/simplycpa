import type { TopicContent } from "../types";

export const payrollBenefits: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) tests which employer-provided benefits employees can exclude from income, how payroll taxes are computed for employees and the self-employed, and the rules for classifying workers. Figures are for 2026 unless stated.</p>

<h2>Payroll taxes</h2>
<table>
<thead><tr><th>Tax</th><th>Employee</th><th>Employer</th><th>Wage base</th></tr></thead>
<tbody>
<tr><td>Social Security (Old-Age, Survivors, and Disability Insurance (OASDI))</td><td>6.2%</td><td>6.2%</td><td>First <strong>$184,500</strong> of wages (2026)</td></tr>
<tr><td>Medicare (Hospital Insurance)</td><td>1.45%</td><td>1.45%</td><td>All wages</td></tr>
<tr><td><strong>Additional Medicare Tax</strong></td><td><strong>0.9%</strong></td><td>None</td><td>Wages above $200,000 (single) / $250,000 (joint) / $125,000 (separate) — employers withhold once wages exceed <strong>$200,000</strong>, regardless of filing status</td></tr>
<tr><td>Federal Unemployment Tax Act (FUTA) tax</td><td>None</td><td>6.0%, less a credit of up to 5.4% for state unemployment taxes = <strong>0.6%</strong> net</td><td>First <strong>$7,000</strong> per employee</td></tr>
</tbody>
</table>
<p>Together, Social Security and Medicare are the Federal Insurance Contributions Act (FICA) taxes. An employee with two employers may have excess Social Security withheld; the excess is claimed as a credit on the individual return (each employer still pays its own share).</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An employer has 10 employees who each earn more than $7,000 and receives the full state credit. FUTA tax = 0.6% × $7,000 × 10 = <strong>$420</strong>.</p></div>

<h3>Self-employment tax</h3>
<ul>
<li>Net earnings from self-employment = net self-employment income × <strong>92.35%</strong>.</li>
<li>Rate: <strong>15.3%</strong> (12.4% Social Security up to the wage base, reduced by any wages already subject to it, + 2.9% Medicare on all), plus the 0.9% Additional Medicare Tax above the thresholds.</li>
<li>No tax if net earnings are under $400.</li>
<li><strong>Half</strong> of self-employment tax (excluding the Additional Medicare Tax) is deductible as an adjustment to adjusted gross income.</li>
</ul>

<h2>Employee fringe benefits — what's excluded</h2>
<table>
<thead><tr><th>Benefit</th><th>Exclusion rule</th></tr></thead>
<tbody>
<tr><td>Employer-provided health insurance and payments for medical care</td><td>Fully excluded (for more-than-2% S corporation shareholders, included in wages)</td></tr>
<tr><td><strong>Group-term life insurance</strong></td><td>Cost of the first <strong>$50,000</strong> of coverage excluded; cost of coverage above that (from Internal Revenue Service (IRS) tables) is taxable</td></tr>
<tr><td>Health flexible spending account (FSA)</td><td>Salary reductions up to $3,400 (2026)</td></tr>
<tr><td>Health savings account (HSA) contributions by the employer</td><td>Excluded within the annual limits ($4,400 / $8,750)</td></tr>
<tr><td><strong>Dependent care assistance</strong></td><td>Up to <strong>$7,500</strong> per year from 2026 (raised from $5,000 by the One Big Beautiful Bill Act (OBBBA))</td></tr>
<tr><td><strong>Educational assistance</strong> (Section 127)</td><td>Up to <strong>$5,250</strong> per year, including payments of the employee's student loans — made permanent by OBBBA and indexed after 2026</td></tr>
<tr><td>No-additional-cost services</td><td>Excluded (for example, airline standby seats for airline employees)</td></tr>
<tr><td>Qualified employee discounts</td><td>Goods: up to the gross profit percentage; services: up to 20%</td></tr>
<tr><td><strong>Working condition fringes</strong></td><td>Excluded if the employee could have deducted the cost as a business expense (professional dues, business use of a company car, job-related subscriptions)</td></tr>
<tr><td><strong>De minimis fringes</strong></td><td>Small, infrequent items (holiday gifts of property such as a ham, occasional meals or tickets). <strong>Cash and cash equivalents (gift cards) are always taxable.</strong></td></tr>
<tr><td>Qualified transportation fringes</td><td>Transit passes and parking up to <strong>$340 per month</strong> each (2026); bicycle commuting reimbursements are taxable</td></tr>
<tr><td>Meals and lodging</td><td>Excluded if provided on the employer's premises for the <strong>convenience of the employer</strong> (lodging must also be a condition of employment)</td></tr>
<tr><td>On-premises athletic facilities</td><td>Excluded</td></tr>
<tr><td>Adoption assistance</td><td>Excluded up to the adoption credit limit</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An employer gives each employee a $50 gift card and a $50 holiday ham. The <strong>gift card is taxable wages</strong> (a cash equivalent); the ham is an excluded de minimis fringe.</p></div>

<h2>Stock-based compensation</h2>
<table>
<thead><tr><th></th><th>Incentive stock options</th><th>Nonqualified stock options</th></tr></thead>
<tbody>
<tr><td>At grant</td><td>No income</td><td>No income (unless readily valued)</td></tr>
<tr><td>At exercise</td><td>No regular income — but the bargain element is an alternative minimum tax adjustment</td><td><strong>Ordinary income</strong> = fair market value − exercise price; employer deducts the same amount</td></tr>
<tr><td>At sale</td><td>Long-term capital gain if held 2 years from grant and 1 year from exercise; otherwise a disqualifying disposition (ordinary income)</td><td>Capital gain or loss on later appreciation</td></tr>
</tbody>
</table>
<p>Restricted stock is taxed when it vests, unless the employee makes a Section 83(b) election within 30 days to be taxed at grant.</p>

<h2>Worker classification</h2>
<p>Employees receive a Form W-2 and have payroll taxes withheld; independent contractors receive Form 1099-NEC and pay self-employment tax. The Internal Revenue Service weighs:</p>
<ul>
<li><strong>Behavioral control</strong> — does the business control how, when, and where the work is done, or provide training?</li>
<li><strong>Financial control</strong> — who invests in equipment, bears expenses, and can make a profit or loss?</li>
<li><strong>Relationship</strong> — written contracts, benefits, permanence, and whether the work is a key activity of the business.</li>
</ul>
<p>Misclassification exposes the employer to back payroll taxes, penalties, and interest. Section 530 relief may apply if the employer had a reasonable basis and treated workers consistently.</p>

<h2>Reporting</h2>
<ul>
<li><strong>Form W-4</strong> (employee withholding certificate); <strong>Form W-2</strong> to employees and the Social Security Administration by <strong>January 31</strong>.</li>
<li><strong>Form 941</strong> quarterly (income tax withholding and FICA); <strong>Form 940</strong> annually (FUTA).</li>
<li><strong>Form 1099-NEC</strong> for nonemployee compensation — the reporting threshold rises from $600 to <strong>$2,000</strong> for payments after 2025 under OBBBA (indexed after 2026).</li>
<li>Household employers report nanny taxes on Schedule H.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Pick the benefits employees can exclude, and compute taxable group-term life coverage.</li>
<li>Compute FICA, FUTA, and self-employment tax.</li>
<li>Apply the Additional Medicare Tax withholding rule.</li>
<li>Classify a worker as an employee or independent contractor.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Cash is never a de minimis fringe — even a small gift card is taxable. And FUTA is paid only by the employer, while the 0.9% Additional Medicare Tax is paid only by the employee.</p></div>
`,
  revision: `
<h3>Payroll taxes (2026)</h3>
<ul>
<li>Social Security 6.2% + 6.2% up to $184,500. Medicare 1.45% + 1.45%, no cap.</li>
<li>Additional Medicare Tax 0.9%, employee only; withhold above $200,000.</li>
<li>Federal Unemployment Tax Act (FUTA): employer only, 0.6% net × $7,000 = $42 per employee.</li>
<li>Self-employment: 92.35% × net income × 15.3%; deduct half; none under $400.</li>
</ul>

<h3>Excluded benefits</h3>
<ul>
<li>Health insurance · group-term life to $50,000 · dependent care $7,500 (2026) · educational assistance $5,250 (incl. student loans).</li>
<li>No-additional-cost services · employee discounts · working condition fringes · de minimis (<strong>not cash or gift cards</strong>).</li>
<li>Transit and parking $340 per month each · meals and lodging for employer's convenience.</li>
</ul>

<h3>Stock options</h3>
<p>Incentive options: no income at exercise (alternative minimum tax adjustment); hold 2 years from grant / 1 from exercise. Nonqualified: ordinary income at exercise.</p>

<h3>Classification</h3>
<p>Behavioral control · financial control · relationship.</p>

<h3>Forms</h3>
<p>W-2 by January 31 · 941 quarterly · 940 annual · 1099-NEC threshold $2,000 from 2026.</p>
`,
};
