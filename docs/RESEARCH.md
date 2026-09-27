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
3. **All six sections have full-depth content.** Every one of the 93 topics has a study page and a 5-minute revision sheet in `prisma/seed-data/content/<section>/`, rewritten in September 2026 against the 2026 blueprints, current standards (including SAS 143/145/146, SQMS 1 and 2, ASU 2023-09, ASU 2024-03, ASU 2025-05), and the 2026 tax figures (Rev. Proc. 2025-32) and OBBBA provisions testable from July 1, 2026. Every short form is written out in full on first use on each page — `npm run content:check` enforces this. The MCQ bank (`prisma/seed-data/mcq-bank/`, `npm run mcq:validate`) has 10 questions for every FAR, AUD, and REG topic.
4. **MCQ depth is still below the long-term "50+ per topic" target.** Most topics have 3–8 questions. Growing the bank, especially for high-weight FAR, AUD, and REG topics, is ongoing content work.

## Licensure and exam-window changes (verified September 2026)

- **30-month credit window.** Most jurisdictions have replaced the old 18-month rule with a rolling 30-month window, generally measured from the score release of the first passed section.
- **120-credit licensure pathway.** Alongside the traditional 150 hours + 1 year of experience, many boards now license with a bachelor's (120 hours) + 2 years of experience. About two dozen jurisdictions had it in force by July 2026; New York's takes effect in November 2026. For Indian candidates, a 3-year B.Com alone is often evaluated below 120 hours, so the pathway doesn't remove the need for additional education in most cases.
- **Testing windows.** Core sections are offered year-round (continuous testing). Discipline sections are offered only in January, April, July, and October.

**Sources:** UWorld "120 vs. 150" licensure-pathways guide, 300Hours state-by-state requirements, Atlas CPA Index, Becker 2026–2027 testing schedule.

## Competitive/UX research (informing information architecture, not content)

Reviewed the general structure (not content) of Becker, UWorld/Roger, Surgent, Gleim, Ninja CPA, and Miles Education to understand how established providers organize subjects into topics, present MCQs with explanations, and structure revision material. No text, questions, or explanations were copied from any of these providers — SimplyCPA's study material, revision notes, and MCQs are original writing, informed by the same underlying GAAP/GAAS/tax rules and the official AICPA Blueprints.
