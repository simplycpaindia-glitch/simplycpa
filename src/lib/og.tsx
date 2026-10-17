import { ImageResponse } from "next/og";
import { BRAND, SITE_TAGLINE } from "@/lib/site";

/** Size and type every share image uses (the 1.91:1 size WhatsApp, LinkedIn and X expect). */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** The one share-image design: eyebrow, title, and the SimplyCPA wordmark. */
export function ogImage({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  const titleSize = title.length > 80 ? 52 : title.length > 50 ? 62 : 72;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND.paper,
          padding: "64px 72px",
          borderTop: `16px solid ${BRAND.gold}`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: BRAND.goldDark }}>
              {eyebrow}
            </div>
          )}
          <div style={{ marginTop: 20, fontSize: titleSize, fontWeight: 700, lineHeight: 1.12, color: BRAND.ink }}>{title}</div>
          {subtitle && <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.35, color: BRAND.muted }}>{subtitle}</div>}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: BRAND.ink }}>
            Simply<span style={{ color: BRAND.goldDark }}>CPA</span>
          </div>
          <div style={{ fontSize: 26, color: BRAND.muted }}>{SITE_TAGLINE}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

/** Keeps share-image text to a sensible length. */
export function clip(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
