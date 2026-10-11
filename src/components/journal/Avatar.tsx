import { cn } from "@/lib/utils";

// Muted tones that sit with the site's ink/paper/gold palette.
const TONES = [
  "bg-[#e8dcc0] text-[#5c4a1f]",
  "bg-[#d9e4dc] text-[#2f5a43]",
  "bg-[#dde0f0] text-[#2a3358]",
  "bg-[#f0dcd6] text-[#7a3a2a]",
  "bg-[#e3dcef] text-[#4b3670]",
  "bg-[#d6e6ec] text-[#244c5a]",
];

function toneFor(name: string) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return TONES[h % TONES.length];
}

/** Initial-letter avatar — no uploaded images, by design. */
export function Avatar({ username, size = "md" }: { username: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-8 w-8 text-sm", md: "h-10 w-10 text-base", lg: "h-16 w-16 text-2xl" };
  return (
    <span
      aria-hidden
      className={cn("inline-flex shrink-0 items-center justify-center rounded-full font-semibold uppercase", sizes[size], toneFor(username))}
    >
      {username.charAt(0) || "?"}
    </span>
  );
}
