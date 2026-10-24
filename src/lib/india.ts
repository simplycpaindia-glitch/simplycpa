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

/** "Ahmedabad, Bengaluru, … and Thiruvananthapuram (Trivandrum)" */
export const indiaTestCitiesText = () =>
  `${INDIA_TEST_CITIES.slice(0, -1).join(", ")} and ${INDIA_TEST_CITIES[INDIA_TEST_CITIES.length - 1]}`;
