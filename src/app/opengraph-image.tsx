import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "SimplyCPA — The Free US CPA Study Library";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({
    eyebrow: "Free US CPA study library",
    title: "Study material, revision notes and practice MCQs for every CPA section",
    subtitle: "FAR · AUD · REG · BAR · ISC · TCP — checked against official AICPA and NASBA sources.",
  });
}
