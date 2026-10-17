import Link from "next/link";

/** Byline used on articles and study topics: content is credited to SimplyCPA as an organisation. */
export function Byline({ updated, published }: { updated?: string; published?: string }) {
  return (
    <p className="text-sm text-ink-400">
      By{" "}
      <Link href="/editorial-standards" className="font-medium text-ink-800 hover:underline">
        SimplyCPA
      </Link>
      {published && <> · {published}</>}
      {updated && <> · Updated {updated}</>}
    </p>
  );
}

/** Short "who wrote this" box shown at the end of articles and study topics. */
export function AboutSimplyCPA() {
  return (
    <aside aria-label="About SimplyCPA" className="mt-12 rounded-xl border border-ink-950/10 bg-paper-100/60 p-5 text-sm text-ink-800">
      <p className="font-semibold text-ink-950">About SimplyCPA</p>
      <p className="mt-2 leading-relaxed">
        SimplyCPA is a free US CPA study library, built for candidates in India and organised the way you&apos;ll study:
        section by section, topic by topic. We write against the AICPA&apos;s exam Blueprints and point you to the
        official sources — AICPA, NASBA, FASB, the IRS — wherever we can.
      </p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        <Link href="/editorial-standards" className="font-medium text-gold-600 hover:underline">
          How we write and check content →
        </Link>
        <Link href="/contact" className="font-medium text-gold-600 hover:underline">
          Spotted an error? Tell us →
        </Link>
      </p>
    </aside>
  );
}
