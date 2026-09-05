# SimplyCPA — Research Findings & Content Assumptions

This document records what was researched before writing any content, so future edits (by a human or an AI-assisted draft) start from the same grounding rather than re-deriving it. Anything time-sensitive here should be treated as a starting point to reverify, not a permanent fact — that's exactly why the app stores fees, eligibility requirements, and testing locations as structured, sourced, dated database rows instead of hard-coded copy.

## Exam structure (as of the 2026 Blueprint refresh)

- Three **Core** sections, mandatory for every candidate: **FAR** (Financial Accounting and Reporting), **AUD** (Auditing and Attestation), **REG** (Taxation and Regulation).
- One **Discipline** section, chosen by the candidate: **BAR** (Business Analysis and Reporting), **ISC** (Information Systems and Controls), or **TCP** (Tax Compliance and Planning).
- All four combinations lead to the identical CPA license — the Discipline choice reflects career direction, not a harder/easier track.
- Each section is 4 hours, mixing MCQs and task-based simulations (TBS) across five testlets.
- Discipline sections (BAR/ISC/TCP) are only offered in four testing windows per year (January, April, July, October); Core sections are available more continuously. Once registered for a Discipline attempt, a candidate cannot switch without forfeiting it.
- The 2026 Blueprint update is a **refinement**, not a structural change: updated references, clarified task statements, and alignment with current standards (notably SQMS No. 1 in AUD). Section count, format, and general weighting structure are unchanged from prior Blueprints.

**Sources:** AICPA & CIMA Blueprints (aicpa-cima.com), NASBA blog and international-administration pages, UWorld and Becker CPA Exam guides (secondary, cross-checked against the above).

## Section-level content areas used to build the topic lists

- **FAR**: Area I Financial Reporting (30–40%), Area II Select Balance Sheet Accounts (30–40%), Area III Select Transactions (25–35%). Used to derive the 20 FAR topics in `prisma/seed-data/far.ts`.
- **AUD**: Area I Ethics & Professional Responsibilities (15–25%), Area II Assessing Risk & Planned Response (25–35%), Area III Performing Procedures & Obtaining Evidence (30–40%), Area IV Forming Conclusions & Reporting (10–20%).
- **REG**: standard five-area structure — Ethics/Tax Procedures, Business Law, Property Transactions, Individual Taxation, Entity Taxation.
- **BAR / ISC / TCP**: topic lists were derived from secondary provider summaries (UWorld, Becker) describing each Discipline's scope, since full official Blueprint area breakdowns for the Disciplines were not independently line-item verified in this session. These are marked `blueprintStatus: PROVISIONAL` in the database and flagged in the admin "Alerts" panel — treat them as a reasonable starting structure that should be checked against the official AICPA Blueprint PDF before being considered final.

## Indian candidate process

- NASBA administers the CPA Exam internationally, with Prometric testing centers in eight Indian cities (Ahmedabad, Bengaluru, Kolkata, Chennai, Hyderabad, Mumbai, New Delhi, Trivandrum) at the time of research. Availability can change — verify at scheduling time.
- Eligibility is established through a **US state board**, not through residency — Indian candidates commonly select a jurisdiction based on which one's education/experience requirements they can meet.
- Most state boards require a **credential evaluation** from a NACES-member agency; NASBA's own **NIES** (NASBA International Evaluation Services) is one option built specifically to help place international candidates with a suitable board.
- The path is: eligibility → jurisdiction selection → credential evaluation → application → NTS (Notice to Schedule) → international administration fee payment → Prometric scheduling.
- Passing all four sections and holding a **CPA license** are different milestones — most states require a verified experience period (and sometimes a separate ethics exam) before licensure.

## Fees — deliberately not hard-coded

During research, the same fee figure was reported differently across otherwise reputable sources within the same week:

- NASBA per-section fee: reported as both **$262.64** and **$268.59** for 2026.
- India international administration fee: reported as a flat **$460**/section by one source and **$390 (Core) / $510 (Discipline)** by another.

This is exactly the scenario the brief anticipated, and it's why every fee in this app lives in the `Fee` table with `amount`, `effectiveFrom`, `sourceUrl`, and `lastVerified` fields, surfaced on `/fees` with an explicit "estimate — verify with NASBA" disclaimer, rather than being asserted as fact in prose anywhere on the site.

## Assumptions and gaps to revisit

1. **Discipline topic lists (BAR/ISC/TCP) are provisional.** They were built from secondary-source descriptions of each Discipline's scope, not a line-by-line pass against the official AICPA Blueprint PDF for each. Before relying on them as a study plan, cross-check against the current Blueprint.
2. **State-specific eligibility detail is intentionally generic.** The `/indian-candidates` and `/roadmap` pages describe the *process* accurately but avoid asserting specific state-by-state credit-hour thresholds, since these vary by board and change. The `EligibilityRequirement` model exists for this data but was not populated with real per-state rows in the initial seed — that's a good next content task.
3. **Only FAR received full-depth content in this build.** Per the "flagship-deep" scope decision, FAR has all 20 topics fully written (study material + revision notes), with MCQs on a representative subset. AUD, REG, BAR, ISC, and TCP each have one fully-worked demo topic and real (but not yet content-complete) topic lists for the rest, marked "Coming Soon" on the public site. This is intentional V1 scoping, not an oversight — see `CONTENT-MANAGEMENT-GUIDE.md` for how to fill these in via the admin panel.
4. **MCQ count is well below the "50+ per topic" long-term target** described in the brief — the seed data demonstrates the full MCQ engine (server-graded, explained, tagged) with a realistic but small starter set. Building the bank out to depth is ongoing content work, not an architecture limitation.

## Competitive/UX research (informing information architecture, not content)

Reviewed the general structure (not content) of Becker, UWorld/Roger, Surgent, Gleim, Ninja CPA, and Miles Education to understand how established providers organize subjects into topics, present MCQs with explanations, and structure revision material. No text, questions, or explanations were copied from any of these providers — SimplyCPA's study material, revision notes, and MCQs are original writing, informed by the same underlying GAAP/GAAS/tax rules and the official AICPA Blueprints.
