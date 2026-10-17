/**
 * Official CPA Exam score release targets, copied from the AICPA's score-release page.
 * All dates are the AICPA's TARGET dates and can change.
 *
 * Core sections (AUD, FAR, REG), until June 2027: scores follow the date the AICPA
 * RECEIVES your exam file from Prometric, not the
 * test date itself. From July 2027 (new delivery platform), every section uses fixed
 * testing windows with one release date per window.
 */
export const SCORE_RELEASE_SOURCE = "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score";
export const SCORE_RELEASE_CHECKED = "2026-10-17";

/** Core sections, rolling: if the AICPA receives your file by `receivedBy`, target release is `release`. */
export const CORE_ROLLING: { receivedBy: string; release: string }[] = [
  { receivedBy: "2026-07-23", release: "2026-08-07" },
  { receivedBy: "2026-08-15", release: "2026-08-25" },
  { receivedBy: "2026-09-07", release: "2026-09-15" },
  { receivedBy: "2026-09-30", release: "2026-10-09" },
  { receivedBy: "2026-10-23", release: "2026-11-10" },
  { receivedBy: "2026-11-15", release: "2026-11-24" },
  { receivedBy: "2026-12-08", release: "2026-12-16" },
  { receivedBy: "2026-12-31", release: "2027-01-12" },
  { receivedBy: "2027-01-23", release: "2027-02-09" },
  { receivedBy: "2027-02-14", release: "2027-02-23" },
  { receivedBy: "2027-03-09", release: "2027-03-17" },
  { receivedBy: "2027-03-31", release: "2027-04-09" },
  { receivedBy: "2027-04-23", release: "2027-05-11" },
  { receivedBy: "2027-05-16", release: "2027-05-25" },
  { receivedBy: "2027-06-08", release: "2027-06-16" },
  { receivedBy: "2027-06-30", release: "2027-07-13" },
];

export type Window = { from: string; to: string; release: string };

/** Core sections on the new platform (from July 2027): fixed windows. */
export const CORE_WINDOWS: Window[] = [
  { from: "2027-07-12", to: "2027-09-30", release: "2027-10-19" },
  { from: "2027-10-01", to: "2027-12-15", release: "2027-12-28" },
  { from: "2028-01-01", to: "2028-03-15", release: "2028-03-28" },
  { from: "2028-04-01", to: "2028-06-15", release: "2028-06-27" },
];

/** Discipline sections (BAR, ISC, TCP): tested only in set windows, one release per window. */
export const DISCIPLINE_WINDOWS: Window[] = [
  { from: "2026-07-01", to: "2026-07-31", release: "2026-09-11" },
  { from: "2026-10-01", to: "2026-10-31", release: "2026-12-15" },
  { from: "2027-01-01", to: "2027-01-31", release: "2027-03-16" },
  { from: "2027-04-01", to: "2027-04-30", release: "2027-06-09" },
  { from: "2027-07-12", to: "2027-08-12", release: "2027-09-28" },
  { from: "2027-10-01", to: "2027-10-31", release: "2027-12-17" },
  { from: "2028-01-01", to: "2028-01-31", release: "2028-03-17" },
  { from: "2028-04-01", to: "2028-04-30", release: "2028-06-16" },
];

export type ReleaseEstimate =
  | { kind: "rolling"; receivedBy: string; release: string; ifLater?: { receivedBy: string; release: string } }
  | { kind: "window"; window: Window }
  | { kind: "no-testing"; reason: string; next?: Window }
  | { kind: "out-of-range" };

/**
 * Target release for a test date (YYYY-MM-DD). Pure, so it runs in the browser and in tests.
 * For rolling Core dates it gives the earliest possible target (file received the same day)
 * and the next one, in case the file arrives after the test date.
 */
export function estimateRelease(section: "core" | "discipline", testDate: string): ReleaseEstimate {
  if (section === "core") {
    if (testDate <= CORE_ROLLING[CORE_ROLLING.length - 1].receivedBy) {
      const i = CORE_ROLLING.findIndex((r) => testDate <= r.receivedBy);
      if (i === 0 && testDate < "2026-07-01") return { kind: "out-of-range" };
      return { kind: "rolling", ...CORE_ROLLING[i], ifLater: CORE_ROLLING[i + 1] ?? undefined };
    }
    const w = CORE_WINDOWS.find((x) => testDate >= x.from && testDate <= x.to);
    if (w) return { kind: "window", window: w };
    const next = CORE_WINDOWS.find((x) => testDate < x.from);
    if (next) return { kind: "no-testing", reason: "The AICPA hasn't published a Core testing window that includes this date.", next };
    return { kind: "out-of-range" };
  }
  const w = DISCIPLINE_WINDOWS.find((x) => testDate >= x.from && testDate <= x.to);
  if (w) return { kind: "window", window: w };
  if (testDate < DISCIPLINE_WINDOWS[0].from) return { kind: "out-of-range" };
  const next = DISCIPLINE_WINDOWS.find((x) => testDate < x.from);
  if (next) return { kind: "no-testing", reason: "Discipline sections (BAR, ISC, TCP) are only tested in set windows.", next };
  return { kind: "out-of-range" };
}
