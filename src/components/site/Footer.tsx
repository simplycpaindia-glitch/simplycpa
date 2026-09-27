import Link from "next/link";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Study",
    links: [
      { label: "FAR", href: "/cpa/far" },
      { label: "AUD", href: "/cpa/aud" },
      { label: "REG", href: "/cpa/reg" },
      { label: "Disciplines", href: "/cpa" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Question of the Day", href: "/#question-of-the-day" },
      { label: "Quick Sheets", href: "/quick-sheets" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "CPA for Indians", href: "/indian-candidates" },
      { label: "Blog", href: "/blog" },
      { label: "CPA Radar", href: "/radar" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Fee Estimator", href: "/fees" },
      { label: "Official Sources", href: "/sources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-paper-50/10 bg-ink-950 text-paper-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-paper-50/50">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-paper-50/80 hover:text-paper-50">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-paper-50/10 pt-8">
          <p className="font-display text-lg mb-2">
            Simply<span className="text-gold-400">CPA</span>
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-paper-50/50">
            SimplyCPA is an independent educational resource and is not affiliated with or
            endorsed by AICPA, NASBA, Prometric, or any State Board of Accountancy unless
            explicitly stated. CPA Exam eligibility, fees, deadlines, and licensing requirements
            can change — always verify current details with the relevant official authority
            before making decisions based on this content. Nothing on this site is personalized
            investment, financial, tax, or legal advice, and no outcome (including exam success)
            is guaranteed.
          </p>
          <p className="mt-4 text-xs text-paper-50/40">
            © {new Date().getFullYear()} SimplyCPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
