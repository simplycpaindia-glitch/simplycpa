/**
 * Tests for the CPA tracker data and the score-release date finder.
 *
 *   npm run test:trackers
 */
import { estimateRelease, CORE_ROLLING, DISCIPLINE_WINDOWS } from "../src/lib/trackers/score-release";
import { PASS_RATES, SECTIONS } from "../src/lib/trackers/pass-rates";
import { JURISDICTIONS, pathwayStatus } from "../src/lib/trackers/pathways";

let failed = 0;
function eq(name: string, actual: unknown, expected: unknown) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${ok ? "" : `\n      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`}`);
}
const pick = (r: ReturnType<typeof estimateRelease>) =>
  r.kind === "rolling" ? `rolling ${r.release} next ${r.ifLater?.release ?? "-"}` : r.kind === "window" ? `window ${r.window.release}` : r.kind === "no-testing" ? `none next ${r.next?.from ?? "-"}` : r.kind;

// Core, rolling schedule (keyed on the date the AICPA receives the file)
eq("core: file by the cutoff day itself", pick(estimateRelease("core", "2026-10-23")), "rolling 2026-11-10 next 2026-11-24");
eq("core: day after a cutoff rolls to the next", pick(estimateRelease("core", "2026-10-24")), "rolling 2026-11-24 next 2026-12-16");
eq("core: year end crosses into 2027", pick(estimateRelease("core", "2026-12-20")), "rolling 2027-01-12 next 2027-02-09");
eq("core: last rolling cutoff has no 'next'", pick(estimateRelease("core", "2027-06-25")), "rolling 2027-07-13 next -");
eq("core: platform switch gap (1–11 July 2027)", pick(estimateRelease("core", "2027-07-05")), "none next 2027-07-12");
eq("core: new-platform window", pick(estimateRelease("core", "2027-08-01")), "window 2027-10-19");
eq("core: blackout after the 15th of a window's last month", pick(estimateRelease("core", "2027-12-20")), "none next 2028-01-01");
eq("core: before the published schedule", pick(estimateRelease("core", "2026-05-01")), "out-of-range");
eq("core: after the published schedule", pick(estimateRelease("core", "2028-07-01")), "out-of-range");

// Discipline windows
eq("discipline: inside October 2026 window", pick(estimateRelease("discipline", "2026-10-17")), "window 2026-12-15");
eq("discipline: outside a window points to the next", pick(estimateRelease("discipline", "2026-11-10")), "none next 2027-01-01");
eq("discipline: shortened July 2027 window", pick(estimateRelease("discipline", "2027-08-12")), "window 2027-09-28");
eq("discipline: just after the shortened window", pick(estimateRelease("discipline", "2027-08-13")), "none next 2027-10-01");

// Data integrity
eq("rolling cutoffs are in order", CORE_ROLLING.every((r, i) => i === 0 || r.receivedBy > CORE_ROLLING[i - 1].receivedBy), true);
eq("every release is after its cutoff", CORE_ROLLING.every((r) => r.release > r.receivedBy) && DISCIPLINE_WINDOWS.every((w) => w.release > w.to), true);
eq("pass rates: every section, every quarter", PASS_RATES.every((y) => SECTIONS.every((s) => y.rates[s].quarterly.length === y.quarters.length)), true);
eq("pass rates: values are percentages", PASS_RATES.every((y) => SECTIONS.every((s) => [...y.rates[s].quarterly, y.rates[s].cumulative].every((v) => v > 0 && v < 100))), true);
eq("55 jurisdictions, no duplicates", [JURISDICTIONS.length, new Set(JURISDICTIONS.map((j) => j.name)).size], [55, 55]);
eq("46 on NASBA's pathway list", JURISDICTIONS.filter((j) => j.pathwayEffective !== null).length, 46);
eq("4 jurisdictions without international testing", JURISDICTIONS.filter((j) => !j.testsInIndia).map((j) => j.name), ["Alabama", "Idaho", "North Carolina", "U.S. Virgin Islands"]);
eq("status: effective date today counts as in effect", pathwayStatus({ name: "x", pathwayEffective: "2026-10-17", testsInIndia: true }, "2026-10-17"), "in-effect");
eq("status: future date is upcoming", pathwayStatus({ name: "x", pathwayEffective: "2027-01-01", testsInIndia: true }, "2026-10-17"), "upcoming");

console.log(failed ? `\n${failed} failed` : "\nAll passed");
process.exit(failed ? 1 : 0);
