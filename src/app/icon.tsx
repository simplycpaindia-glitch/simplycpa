import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

// 192px: Google shows favicons from 48px multiples; browsers scale it down for tabs.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.ink,
          borderRadius: 36,
          color: BRAND.gold,
          fontSize: 140,
          fontWeight: 700,
          lineHeight: 1,
          paddingBottom: 8,
        }}
      >
        S
      </div>
    ),
    size,
  );
}
