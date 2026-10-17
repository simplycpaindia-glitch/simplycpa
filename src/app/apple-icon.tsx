import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS adds its own rounded corners, so this one is a plain square.
export default function AppleIcon() {
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
          color: BRAND.gold,
          fontSize: 132,
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
