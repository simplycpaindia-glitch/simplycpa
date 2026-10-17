/**
 * New CPA licensure pathways by jurisdiction, from NASBA's "New Licensure Pathways
 * Legislation" list (the list says it is current as of 1 October 2026), plus which
 * jurisdictions let candidates test outside the US (NASBA international administration page).
 *
 * `pathwayEffective`:
 *   - ISO date: NASBA lists a new pathway law with this effective date
 *   - "listed": on NASBA's list but no effective date published yet
 *   - null: not on NASBA's list
 * Re-check against NASBA when updating; don't infer anything the list doesn't say.
 */
export const PATHWAYS_SOURCE = "https://nasba.org/pathways/";
export const PATHWAYS_SOURCE_AS_OF = "2026-10-01";
export const INTERNATIONAL_SOURCE = "https://nasba.org/internationalexam/";
export const PATHWAYS_CHECKED = "2026-10-17";
/** International test fee per section in India (in addition to normal exam fees), per NASBA. */
export const INDIA_INTERNATIONAL_FEE_USD = 460;

export type Jurisdiction = {
  name: string;
  pathwayEffective: string | "listed" | null;
  /** False where NASBA lists the jurisdiction as not taking part in international testing. */
  testsInIndia: boolean;
};

const NO_INTERNATIONAL = new Set(["Alabama", "Idaho", "North Carolina", "U.S. Virgin Islands"]);

const RAW: [string, string | "listed" | null][] = [
  ["Alabama", "2026-10-15"],
  ["Alaska", "2026-01-01"],
  ["Arizona", "2026-12-31"],
  ["Arkansas", "2026-03-05"],
  ["California", "2027-01-01"],
  ["Colorado", "2027-01-01"],
  ["Connecticut", "2025-10-01"],
  ["Delaware", "2026-07-01"],
  ["District of Columbia", "2026-09-25"],
  ["Florida", null],
  ["Georgia", "2026-01-01"],
  ["Guam", null],
  ["Hawaii", "2025-04-10"],
  ["Idaho", "2026-07-01"],
  ["Illinois", "2027-01-01"],
  ["Indiana", "2027-01-01"],
  ["Iowa", "2026-07-01"],
  ["Kansas", "2026-04-23"],
  ["Kentucky", "2026-07-14"],
  ["Louisiana", "2026-08-01"],
  ["Maine", null],
  ["Maryland", "2026-10-01"],
  ["Massachusetts", null],
  ["Michigan", null],
  ["Minnesota", "2026-01-01"],
  ["Mississippi", "2026-07-01"],
  ["Missouri", "2026-08-28"],
  ["Montana", "2026-01-01"],
  ["Nebraska", "2026-07-17"],
  ["Nevada", "2026-02-27"],
  ["New Hampshire", "2026-04-22"],
  ["New Jersey", "2026-02-11"],
  ["New Mexico", "2026-01-01"],
  ["New York", "2026-11-21"],
  ["North Carolina", "2026-01-01"],
  ["North Dakota", null],
  ["Northern Mariana Islands", null],
  ["Ohio", "2026-01-01"],
  ["Oklahoma", "2026-11-01"],
  ["Oregon", "2026-01-01"],
  ["Pennsylvania", "2025-07-01"],
  ["Puerto Rico", "2026-03-18"],
  ["Rhode Island", null],
  ["South Carolina", "2025-06-30"],
  ["South Dakota", "2026-07-01"],
  ["Tennessee", "2026-01-01"],
  ["Texas", "2026-08-01"],
  ["U.S. Virgin Islands", null],
  ["Utah", "2026-07-01"],
  ["Vermont", "2026-05-29"],
  ["Virginia", "2026-01-01"],
  ["Washington", "2025-11-20"],
  ["West Virginia", "2026-05-24"],
  ["Wisconsin", "2026-04-04"],
  ["Wyoming", "listed"],
];

export const JURISDICTIONS: Jurisdiction[] = RAW.map(([name, pathwayEffective]) => ({
  name,
  pathwayEffective,
  testsInIndia: !NO_INTERNATIONAL.has(name),
}));

export type PathwayStatus = "in-effect" | "upcoming" | "listed" | "none";

export function pathwayStatus(j: Jurisdiction, today: string): PathwayStatus {
  if (j.pathwayEffective === null) return "none";
  if (j.pathwayEffective === "listed") return "listed";
  return j.pathwayEffective <= today ? "in-effect" : "upcoming";
}
