import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders plain text, turning "Label (/internal-path)" into a link on "Label", where the
 * label is the run of Capitalised Words just before the brackets ("use our Fee Estimator
 * (/fees)" links "Fee Estimator"). Lets admin-written plain text such as FAQ answers link
 * to other pages without allowing HTML. Only site-relative paths are linked.
 */
const PATTERN = /((?:[A-Z][\w'’-]*\s)*[A-Z][\w'’-]*) \((\/[a-z0-9\-/#]*)\)/g;

export function LinkedText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(PATTERN)) {
    const start = m.index ?? 0;
    parts.push(text.slice(last, start));
    parts.push(
      <Link key={start} href={m[2]} className="font-medium text-ink-950 underline underline-offset-2">
        {m[1]}
      </Link>,
    );
    last = start + m[0].length;
  }
  parts.push(text.slice(last));
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}
