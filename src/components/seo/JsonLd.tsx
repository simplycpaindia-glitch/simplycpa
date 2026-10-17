/**
 * Renders schema.org structured data. `<` is escaped so text containing "</script>"
 * (e.g. in a post title or FAQ answer) can't break out of the tag.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
