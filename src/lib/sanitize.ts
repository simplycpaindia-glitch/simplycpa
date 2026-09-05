import sanitizeHtml from "sanitize-html";

/**
 * Allow-list for content saved from the admin Tiptap editor (study material,
 * revision notes, blog posts). Run on every save — never trust content
 * coming back from the client, even from staff accounts.
 */
export function sanitizeContentHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h2", "h3", "h4", "p", "br", "strong", "em", "u", "s",
      "ul", "ol", "li",
      "table", "thead", "tbody", "tr", "th", "td",
      "a", "blockquote", "code", "pre", "hr",
      "div", "span",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      div: ["class"],
      span: ["class"],
      table: ["class"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
    },
    allowedClasses: {
      div: ["callout", "callout-tip", "callout-warning", "callout-example", "callout-important"],
      span: ["callout-label"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
  });
}
