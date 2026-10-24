import type { Heading } from "@/lib/content/headings";

/**
 * "On this page" contents list. `sidebar` is sticky on wide screens; `inline` is a
 * collapsible list on phones — pass `alwaysInline` on single-column pages (blog) so it
 * also shows on wide screens, where there is no sidebar.
 */
export function OnThisPage({
  headings,
  variant,
  alwaysInline = false,
}: {
  headings: Heading[];
  variant: "sidebar" | "inline";
  alwaysInline?: boolean;
}) {
  if (headings.length < 3) return null;
  const list = (
    <ol className="mt-2 space-y-1.5 text-sm">
      {headings.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="block py-0.5 text-ink-400 hover:text-ink-950 hover:underline">
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );

  if (variant === "sidebar") {
    return (
      <nav aria-label="On this page" className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-700">On this page</p>
        {list}
      </nav>
    );
  }
  return (
    <details className={`mb-8 rounded-lg border border-ink-950/10 bg-paper-100/60 p-4 ${alwaysInline ? "" : "lg:hidden"}`}>
      <summary className="cursor-pointer text-sm font-semibold text-ink-950">On this page ({headings.length})</summary>
      <nav aria-label="On this page">{list}</nav>
    </details>
  );
}
