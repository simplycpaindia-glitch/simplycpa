/** Site identity shared by metadata, structured data and generated images. */
/**
 * The canonical origin. The live site is served at www.simplycpa.in and the bare domain
 * redirects there, so a bare-domain setting is corrected here: otherwise every canonical
 * tag, sitemap entry and structured-data URL would point at a redirect.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
  .replace(/\/$/, "")
  .replace(/^https?:\/\/simplycpa\.in$/, "https://www.simplycpa.in");
export const SITE_NAME = "SimplyCPA";
export const SITE_TAGLINE = "The Free US CPA Study Library";
/** Public contact address (shown on /contact and in structured data). */
export const CONTACT_EMAIL = "simplycpa.india@gmail.com";

/** Brand colours (mirrors globals.css) for places CSS variables can't reach, like generated images. */
export const BRAND = {
  ink: "#05070d",
  paper: "#fbfaf7",
  gold: "#c19a44",
  goldDark: "#7f6223",
  muted: "#545c7c",
} as const;
