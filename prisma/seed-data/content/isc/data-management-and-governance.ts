import type { TopicContent } from "../types";

export const dataManagementGovernance: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Reliable financial reporting depends on reliable data. Information Systems and Controls (ISC) Area I tests data governance roles, the data life cycle, how relational databases are structured and queried, data storage architectures, and the controls that protect data integrity. The 2026 blueprint added clarifications to the data management tasks, so expect practical questions.</p>

<h2>Data governance</h2>
<p>Data governance is the framework of policies, roles, and processes for managing data as an asset — ensuring it is accurate, secure, available, and used appropriately.</p>
<table>
<thead><tr><th>Role</th><th>Responsibility</th></tr></thead>
<tbody>
<tr><td><strong>Data owner</strong></td><td>A senior business manager accountable for a data set — decides classification and who gets access</td></tr>
<tr><td><strong>Data steward</strong></td><td>Manages data quality, definitions, and adherence to policy day to day</td></tr>
<tr><td><strong>Data custodian</strong></td><td>Usually information technology staff — implements storage, backups, and technical controls</td></tr>
<tr><td>Data user</td><td>Uses data for authorized purposes</td></tr>
<tr><td>Chief data officer or governance council</td><td>Sets enterprise data strategy and policy</td></tr>
</tbody>
</table>

<h3>Data classification</h3>
<p>Organizations label data by sensitivity (for example, public, internal, confidential, restricted) so controls match the risk. Personal information, payment card data, and health information are typically restricted and subject to legal requirements.</p>

<h2>The data life cycle</h2>
<ol>
<li><strong>Create or collect</strong> — capture only what is needed (data minimization); validate at input.</li>
<li><strong>Store</strong> — secure, backed up, encrypted where sensitive.</li>
<li><strong>Use</strong> — access limited by role; activity logged.</li>
<li><strong>Share</strong> — only with authorized parties, under agreements; secure transmission.</li>
<li><strong>Archive</strong> — retained per the <strong>records retention policy</strong> and legal requirements (tax, regulatory, litigation holds).</li>
<li><strong>Destroy</strong> — secure disposal (overwriting, degaussing, physical destruction) when retention ends, with documentation.</li>
</ol>

<h2>Relational databases</h2>
<ul>
<li>Data is stored in <strong>tables</strong> (relations) of rows (records) and columns (fields or attributes).</li>
<li>A <strong>primary key</strong> uniquely identifies each row; a <strong>foreign key</strong> is a field that matches a primary key in another table, linking the tables.</li>
<li><strong>Referential integrity</strong> means every foreign key value must match an existing primary key (you can't record a sale for a customer that doesn't exist).</li>
<li><strong>Normalization</strong> organizes tables to reduce redundancy and update anomalies (first, second, and third normal forms); <strong>denormalization</strong> is sometimes used in reporting databases for speed.</li>
<li>A <strong>database management system (DBMS)</strong> controls access, enforces integrity rules, and logs changes. The <strong>data dictionary</strong> holds metadata — definitions, formats, and relationships.</li>
</ul>

<h3>Structured query language (SQL) basics</h3>
<table>
<thead><tr><th>Clause</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>SELECT</td><td>Choose the columns to return</td></tr>
<tr><td>FROM</td><td>The table(s)</td></tr>
<tr><td>WHERE</td><td>Filter rows before grouping</td></tr>
<tr><td>JOIN … ON</td><td>Combine tables on matching keys — an inner join returns only matches; a left join returns all rows from the left table</td></tr>
<tr><td>GROUP BY</td><td>Aggregate rows (with SUM, COUNT, AVG)</td></tr>
<tr><td>HAVING</td><td>Filter groups after aggregation</td></tr>
<tr><td>ORDER BY</td><td>Sort results</td></tr>
</tbody>
</table>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> To list customers with total 2026 sales above $100,000: SELECT customer_id, SUM(amount) FROM sales WHERE year = 2026 GROUP BY customer_id HAVING SUM(amount) &gt; 100000 ORDER BY SUM(amount) DESC.</p></div>

<h2>Data storage architectures</h2>
<table>
<thead><tr><th>Architecture</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Operational (transactional) database</td><td>Online transaction processing (OLTP) — supports day-to-day transactions; normalized, current</td></tr>
<tr><td><strong>Data warehouse</strong></td><td>Integrated, cleaned, historical data from many sources, structured for analysis — online analytical processing (OLAP)</td></tr>
<tr><td>Data mart</td><td>A subset of a warehouse for one department or subject</td></tr>
<tr><td><strong>Data lake</strong></td><td>Raw data of all types (structured and unstructured) stored in native format; flexible but needs strong governance to avoid a "data swamp"</td></tr>
<tr><td>Data lakehouse</td><td>Combines lake storage with warehouse-style structure and governance</td></tr>
</tbody>
</table>
<p>Data moves from sources into warehouses through <strong>extract, transform, and load (ETL)</strong> (or extract, load, transform). Controls include reconciling record counts and control totals between source and target, validating transformations, and logging failures.</p>

<h2>Data integrity and quality controls</h2>
<ul>
<li><strong>Input controls:</strong> validation rules, required fields, drop-down lists, duplicate checks.</li>
<li><strong>Master data management:</strong> a single, governed "golden record" for customers, vendors, and products — changes to master data (for example, vendor bank accounts) require independent approval and review of change reports.</li>
<li><strong>Database controls:</strong> restricted direct database access, logging of changes, segregation between database administrators and application users.</li>
<li><strong>Data quality monitoring:</strong> exception reports, reconciliations, and data profiling.</li>
<li><strong>Data lineage</strong> documents where data came from and how it was transformed — important for trust in reports and analytics.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Assign responsibilities to data owners, stewards, and custodians.</li>
<li>Order and apply the data life cycle, including retention and destruction.</li>
<li>Interpret keys, referential integrity, and simple SQL queries.</li>
<li>Choose between a warehouse, mart, and lake, and identify ETL controls.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The data <em>owner</em> decides (classification and access); the data <em>custodian</em> implements (backups, technical controls). Questions often swap these roles.</p></div>
`,
  revision: `
<h3>Roles</h3>
<p>Owner (accountable, decides access) · steward (quality, definitions) · custodian (technical implementation) · user.</p>

<h3>Life cycle</h3>
<p>Create → store → use → share → archive (retention policy) → destroy (securely, documented).</p>

<h3>Relational databases</h3>
<ul>
<li>Primary key = unique row identifier; foreign key links tables; referential integrity.</li>
<li>Normalization reduces redundancy. Database management system (DBMS) enforces rules; data dictionary = metadata.</li>
<li>Structured query language (SQL): SELECT · FROM · WHERE (rows) · JOIN · GROUP BY · HAVING (groups) · ORDER BY.</li>
</ul>

<h3>Storage</h3>
<p>Online transaction processing (OLTP) database · data warehouse (online analytical processing (OLAP), cleaned history) · data mart (subset) · data lake (raw, all types).</p>

<h3>Controls</h3>
<p>Extract, transform, and load (ETL) reconciliations · master data change approval · restricted database access · data lineage.</p>
`,
};
