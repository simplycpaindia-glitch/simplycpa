import type { TopicContent } from "../types";

export const agencyBusinessStructures: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) Business Law covers how agents bind principals, and the legal features of sole proprietorships, partnerships, limited liability companies (LLCs), and corporations — formation, liability, management, and dissolution. The tax side of each entity is covered in the entity taxation topics; here the focus is legal rights and liability.</p>

<h2>Agency</h2>
<h3>Creating an agency</h3>
<ul>
<li>An agency is a consensual <strong>fiduciary relationship</strong>: the agent acts on the principal's behalf and subject to its control. It needs no consideration and usually no writing — but if the agent will sign a contract that must be in writing (for example, a sale of land), the authority must also be in writing (the equal dignity rule). A power of attorney is a written authorization.</li>
<li>Agencies arise by agreement, by ratification, or by estoppel.</li>
<li>Principals must have capacity; agents need not (a minor can be an agent).</li>
</ul>

<h3>Types of authority</h3>
<table>
<thead><tr><th>Authority</th><th>Source</th><th>Principal bound?</th></tr></thead>
<tbody>
<tr><td><strong>Express actual</strong></td><td>Principal's words to the agent</td><td>Yes</td></tr>
<tr><td><strong>Implied actual</strong></td><td>Reasonably necessary to carry out express authority, or from the agent's position</td><td>Yes</td></tr>
<tr><td><strong>Apparent</strong></td><td>The <strong>principal's</strong> conduct toward the <strong>third party</strong> makes it reasonable for the third party to believe the agent has authority</td><td>Yes — even if the agent had no actual authority</td></tr>
<tr><td><strong>Ratification</strong></td><td>After the fact, the principal (with knowledge of all material facts) accepts the entire unauthorized contract</td><td>Yes, retroactively</td></tr>
</tbody>
</table>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A principal fires a purchasing agent but does not notify a supplier the agent had dealt with for years. The agent later places an order with that supplier. The principal is bound by <strong>apparent authority</strong> until the supplier receives notice of the termination.</p></div>

<h3>Liability on contracts</h3>
<table>
<thead><tr><th>Principal status</th><th>Principal liable?</th><th>Agent liable?</th></tr></thead>
<tbody>
<tr><td>Disclosed (third party knows the principal's identity)</td><td>Yes</td><td>No (if authorized)</td></tr>
<tr><td>Partially disclosed (third party knows there is a principal but not who)</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Undisclosed (third party thinks the agent acts for itself)</td><td>Yes, once discovered — the third party may elect to hold the principal <em>or</em> the agent</td><td>Yes</td></tr>
</tbody>
</table>
<p>An agent who acts without authority is personally liable for breach of the implied warranty of authority.</p>

<h3>Liability for torts</h3>
<ul>
<li><strong>Respondeat superior:</strong> an employer is vicariously liable for torts an employee commits <strong>within the scope of employment</strong>, even without employer fault. Minor detours are within scope; a frolic for purely personal reasons is not.</li>
<li>Generally no liability for an <strong>independent contractor's</strong> torts, except for inherently dangerous activities or non-delegable duties.</li>
<li>Intentional torts are within scope only if they serve the employer's purpose.</li>
<li>The agent is always personally liable for their own torts; the principal may seek indemnification.</li>
</ul>

<h3>Duties</h3>
<ul>
<li><strong>Agent to principal:</strong> loyalty (no self-dealing, no competing, no secret profits), obedience, reasonable care, accounting, and notification.</li>
<li><strong>Principal to agent:</strong> compensation, reimbursement of expenses, indemnification for losses in authorized acts, and cooperation.</li>
</ul>

<h3>Termination</h3>
<ul>
<li><strong>By act of the parties:</strong> agreement, fulfillment of purpose, lapse of time, revocation by the principal, or renunciation by the agent. Third parties who dealt with the agent must receive <strong>actual notice</strong>; others need constructive notice (publication) — otherwise apparent authority continues.</li>
<li><strong>By operation of law:</strong> death or incapacity of either party, bankruptcy, destruction of the subject matter, or illegality — no notice required.</li>
<li>An <strong>agency coupled with an interest</strong> (the agent holds an interest in the subject matter, such as a lender's power to sell collateral) is not terminated by the principal's death or revocation.</li>
</ul>

<h2>Business structures</h2>
<table>
<thead><tr><th>Structure</th><th>Formation</th><th>Owner liability</th><th>Management</th></tr></thead>
<tbody>
<tr><td>Sole proprietorship</td><td>No formalities</td><td>Unlimited personal liability</td><td>The owner</td></tr>
<tr><td>General partnership</td><td>Agreement (may be oral, even implied from sharing profits)</td><td><strong>Joint and several</strong> unlimited liability for partnership obligations</td><td>Equal rights for each partner unless agreed otherwise; each partner is an agent of the partnership</td></tr>
<tr><td>Limited partnership (LP)</td><td>Certificate filed with the state; at least one general partner</td><td>General partners unlimited; limited partners liable up to their investment</td><td>General partners; limited partners may lose protection if they participate in control (under older rules)</td></tr>
<tr><td>Limited liability partnership (LLP)</td><td>State filing</td><td>Partners generally not liable for other partners' malpractice; liable for their own</td><td>All partners</td></tr>
<tr><td>Limited liability company (LLC)</td><td>Articles of organization filed with the state</td><td>Limited to investment</td><td>Member-managed or manager-managed; operating agreement governs</td></tr>
<tr><td>Corporation</td><td>Articles of incorporation filed with the state</td><td>Shareholders limited to investment</td><td>Board of directors; officers manage day to day</td></tr>
</tbody>
</table>

<h3>General partnerships</h3>
<ul>
<li>Profits are shared <strong>equally</strong> unless otherwise agreed (not in proportion to capital); losses follow profit shares.</li>
<li>Ordinary matters: majority vote. Extraordinary matters (admitting a partner, amending the agreement): unanimous.</li>
<li>A partner's <strong>transferable interest</strong> (the right to distributions) can be assigned; the assignee does not become a partner or gain management rights.</li>
<li>New partners are liable for pre-existing debts only up to their capital contribution; a withdrawing partner remains liable for existing debts unless released (novation), and for new debts to creditors lacking notice.</li>
<li>Creditors of the partnership are paid first from partnership assets; personal creditors first from personal assets (the marshaling of assets rule).</li>
</ul>

<h3>Corporations</h3>
<ul>
<li><strong>Promoters</strong> are personally liable on pre-incorporation contracts until the corporation adopts them and the other party agrees to a novation.</li>
<li><strong>Directors</strong> owe duties of care and loyalty and are protected by the <strong>business judgment rule</strong> when acting in good faith, on an informed basis, and without conflicts.</li>
<li><strong>Shareholders</strong> elect directors, approve fundamental changes (mergers, dissolution, amending articles), and have rights to inspect books for a proper purpose and to bring derivative suits.</li>
<li><strong>Piercing the corporate veil</strong> removes limited liability when the corporation is a sham — commingling funds, inadequate capitalization, or ignoring corporate formalities to commit fraud.</li>
<li>Dividends may be paid only if the corporation remains solvent; directors who approve illegal dividends can be personally liable.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify the type of authority that binds a principal.</li>
<li>Allocate contract and tort liability between principal and agent.</li>
<li>Compare liability and management across entity types.</li>
<li>Apply partnership rules on profit sharing, new partners, and withdrawal.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Apparent authority is created by the <em>principal's</em> words or conduct toward the <em>third party</em> — never by what the agent says about their own authority.</p></div>
`,
  revision: `
<h3>Authority</h3>
<ul>
<li>Express and implied actual authority → principal bound.</li>
<li>Apparent: from the <strong>principal's</strong> conduct to the third party; continues after firing until notice.</li>
<li>Ratification: principal knows all material facts; accepts the whole contract.</li>
<li>Equal dignity rule: authority to sign a written-required contract must be written.</li>
</ul>

<h3>Liability</h3>
<ul>
<li>Undisclosed or partially disclosed principal → agent also liable.</li>
<li>Torts: employer liable within scope (respondeat superior); not for independent contractors.</li>
</ul>

<h3>Termination</h3>
<p>By act → notice needed (actual to prior dealers). By operation of law (death, bankruptcy) → automatic. Agency coupled with an interest survives.</p>

<h3>Entities</h3>
<ul>
<li>General partnership: joint and several unlimited liability; profits equal unless agreed; assignee gets distributions only.</li>
<li>Limited partnership (LP): at least one general partner; limited partners risk liability by controlling.</li>
<li>Limited liability company (LLC) and corporation: limited liability; veil can be pierced.</li>
<li>Directors: business judgment rule. Promoters: liable until novation.</li>
</ul>
`,
};
