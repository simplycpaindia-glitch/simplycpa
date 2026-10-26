import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { formatIsoDate } from "@/lib/utils";
import { INDIA_TEST_CITIES, INDIA_TEST_CITIES_SOURCE, PROMETRIC_LOCATOR, USD_INR, formatInr, formatUsd, toInr } from "@/lib/india";

const PATH = "/cpa-exam-centres-india";

export const metadata: Metadata = {
  title: "CPA Exam Centres in India (2026): Cities and Booking",
  description: `The ${INDIA_TEST_CITIES.length} Indian cities where you can sit the US CPA Exam at a Prometric centre, how booking works, the India testing fee in rupees, and what to bring.`,
  alternates: { canonical: PATH },
};

export const revalidate = 3600;

export default async function ExamCentresIndiaPage() {
  const intl = await prisma.fee.findFirst({ where: { feeType: "INTERNATIONAL_ADMIN" }, select: { amount: true, sourceUrl: true } });
  const fee = Number(intl?.amount ?? 0);

  const steps = [
    { title: "Get your Notice to Schedule", body: "Apply to your chosen state board (through NASBA for most boards). Once you are approved and have paid for a section, you receive a Notice to Schedule (NTS) for it. How long it stays valid depends on your board." },
    { title: "Register and pay for testing in India", body: `Testing outside the United States has its own registration with NASBA, and an extra fee of ${formatUsd(fee)} (about ${formatInr(toInr(fee))}) per section, paid before you book. It is non-refundable.` },
    { title: "Book a seat with Prometric", body: "Choose a city and date on Prometric's site. Popular centres and dates can fill up, so book as early as you can." },
    { title: "Sit the exam", body: "All six sections (FAR, AUD and REG, and the BAR, ISC and TCP Discipline sections) can be taken in India, with the same exam and scoring as in the United States." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "CPA for Indians", item: `${SITE_URL}/indian-candidates` },
      { "@type": "ListItem", position: 3, name: "CPA exam centres in India", item: `${SITE_URL}${PATH}` },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container className="max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/indian-candidates" className="hover:text-ink-950">CPA for Indians</Link>
            <span>/</span>
            <span className="text-ink-950">Exam centres in India</span>
          </div>
          <h1 className="font-display text-4xl font-medium text-balance text-ink-950">CPA exam centres in India</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Where you can sit the US CPA Exam without travelling abroad, how booking works, and what it costs in rupees.
          </p>
        </Container>
      </div>

      <Container className="max-w-4xl py-10">
        <div className="rounded-lg border-l-4 border-gold-500 bg-paper-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">In short</p>
          <p className="mt-2 leading-relaxed text-ink-950">
            You can take every section of the US CPA Exam at Prometric centres in {INDIA_TEST_CITIES.length} Indian cities. You pay an
            extra international testing fee of {formatUsd(fee)} (about {formatInr(toInr(fee))}) for each section you sit in India.
          </p>
        </div>

        <section aria-labelledby="cities" className="mt-10">
          <h2 id="cities" className="font-display text-2xl font-medium text-ink-950">The {INDIA_TEST_CITIES.length} cities</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {INDIA_TEST_CITIES.map((city) => (
              <li key={city} className="rounded-lg border border-ink-950/10 bg-paper-50 px-4 py-3 font-medium text-ink-950">
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-400">
            As listed by{" "}
            <a href={INDIA_TEST_CITIES_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">NASBA</a>.
            Centre addresses and seat availability are on{" "}
            <a href={PROMETRIC_LOCATOR} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Prometric&apos;s CPA page</a>
            ; check them when you book, because centres can change.
          </p>
        </section>

        <section aria-labelledby="booking" className="mt-10">
          <h2 id="booking" className="font-display text-2xl font-medium text-ink-950">How booking works</h2>
          <ol className="mt-4 flex flex-col gap-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-lg border border-ink-950/10 p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-950 text-sm font-semibold text-paper-50">{i + 1}</span>
                <div>
                  <p className="font-medium text-ink-950">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-800">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="tips" className="mt-10">
          <h2 id="tips" className="font-display text-2xl font-medium text-ink-950">Before test day</h2>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-ink-800">
            <li><strong>Bring your passport.</strong> For testing outside the United States, a valid passport is the identification you need, and the name on it must match the name on your Notice to Schedule exactly.</li>
            <li><strong>Book well ahead.</strong> The international fee is paid per section before booking and can&apos;t be refunded, so don&apos;t pay it until you are ready to schedule.</li>
            <li><strong>Avoid late changes.</strong> Prometric charges more for rescheduling the closer you are to your appointment; check its current policy before you change a date.</li>
            <li><strong>Watch your Notice to Schedule expiry.</strong> If it expires before you test, the fees for that section are generally lost.</li>
          </ul>
        </section>

        <p className="mt-10 rounded-lg border border-ink-950/10 bg-paper-100/60 p-5 text-sm leading-relaxed text-ink-800">
          Rupee amounts use the {USD_INR.source}: ₹{USD_INR.rate} per US dollar on {formatIsoDate(USD_INR.asOf)}. Your bank will apply
          its own rate and charges.{" "}
          {intl?.sourceUrl && (
            <>
              <a href={intl.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Fee source</a>.
            </>
          )}
        </p>

        <nav aria-label="More for Indian candidates" className="mt-10 border-t border-ink-950/10 pt-6 text-sm">
          <p className="font-medium text-ink-950">More for Indian candidates</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            <li><Link href="/us-cpa-fees-in-inr" className="underline underline-offset-2">US CPA fees in INR</Link></li>
            <li><Link href="/indian-candidates" className="underline underline-offset-2">The CPA process for Indian candidates</Link></li>
            <li><Link href="/fees" className="underline underline-offset-2">Fee estimator</Link></li>
          </ul>
        </nav>
      </Container>
    </>
  );
}
