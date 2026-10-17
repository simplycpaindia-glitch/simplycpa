import { INDEXNOW_KEY } from "@/lib/indexnow";

// Proves to IndexNow-enabled search engines that this site owns the key (see lib/indexnow.ts).
export function GET() {
  return new Response(INDEXNOW_KEY, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
