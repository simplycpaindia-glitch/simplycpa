/**
 * Gives each <h2> in stored (already sanitized) content HTML a stable id, and returns the
 * list of headings — used to build "On this page" contents lists. Runs at render time
 * only; the stored HTML is never changed.
 */
export type Heading = { id: string; text: string };

const decode = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60) || "section";

export function withHeadingIds(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (whole, attrs: string | undefined, inner: string) => {
    if (attrs && /\sid=/i.test(attrs)) return whole; // already has an id
    const text = decode(inner);
    if (!text) return whole;
    let id = slugify(text);
    for (let n = 2; used.has(id); n++) id = `${slugify(text)}-${n}`;
    used.add(id);
    headings.push({ id, text });
    return `<h2${attrs ?? ""} id="${id}">${inner}</h2>`;
  });
  return { html: out, headings };
}
