import "server-only";
import { SITE_URL } from "@/lib/site";

/**
 * IndexNow: tells Bing, Yandex, Seznam, Naver and others that a URL changed, so they
 * re-crawl it within minutes instead of days. Google doesn't use IndexNow (it reads the
 * sitemap). The key is public by design — it's served at /indexnow-key.txt to prove we
 * own the site — so it lives in code rather than in a secret.
 */
export const INDEXNOW_KEY = "1859671c5ffd7b09617de2526378daf3";

/** Fire-and-forget: never throws, only runs on the live site. */
export async function pingIndexNow(paths: string[]) {
  if (process.env.VERCEL_ENV !== "production" || !SITE_URL.startsWith("https://") || paths.length === 0) return;
  try {
    const host = new URL(SITE_URL).host;
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/indexnow-key.txt`,
        urlList: paths.map((p) => `${SITE_URL}${p}`),
      }),
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok && res.status !== 202) console.error("IndexNow ping failed", res.status);
  } catch (err) {
    console.error("IndexNow ping failed", err);
  }
}
