/**
 * Facts about sitting the CPA Exam in India, shared by every page that mentions them
 * so they never disagree. Re-check against the sources when updating.
 */

/** Indian cities with Prometric CPA test centres, as listed by NASBA. */
export const INDIA_TEST_CITIES = [
  "Ahmedabad",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "New Delhi",
  "Thiruvananthapuram (Trivandrum)",
] as const;

export const INDIA_TEST_CITIES_SOURCE = "https://nasba.org/cpaexam-india/";
export const PROMETRIC_LOCATOR = "https://www.prometric.com/exams/cpa/";

/**
 * US dollar to rupee rate used for every INR figure on the site. Update the rate and dates
 * together; pages show them next to any rupee amount.
 */
export const USD_INR = {
  rate: 94.94,
  /** Date the rate applies to. */
  asOf: "2026-10-23",
  /** Date we last checked it. */
  checked: "2026-10-26",
  source: "Reserve Bank of India reference rate (published by FBIL)",
  sourceUrl: "https://rbi.org.in/home.aspx",
} as const;

export const formatUsd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
/** Indian digit grouping: ₹3,45,996 */
export const formatInr = (n: number) => n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
export const toInr = (usd: number) => usd * USD_INR.rate;

/** "Ahmedabad, Bengaluru, … and Thiruvananthapuram (Trivandrum)" */
export const indiaTestCitiesText = () =>
  `${INDIA_TEST_CITIES.slice(0, -1).join(", ")} and ${INDIA_TEST_CITIES[INDIA_TEST_CITIES.length - 1]}`;
