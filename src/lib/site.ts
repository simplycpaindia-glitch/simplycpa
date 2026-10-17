/** Site identity shared by metadata, structured data and generated images. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "SimplyCPA";
export const SITE_TAGLINE = "The Free US CPA Study Library";

/** Brand colours (mirrors globals.css) for places CSS variables can't reach, like generated images. */
export const BRAND = {
  ink: "#05070d",
  paper: "#fbfaf7",
  gold: "#c19a44",
  goldDark: "#a17f35",
  muted: "#6b7494",
} as const;
