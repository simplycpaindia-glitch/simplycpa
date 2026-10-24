import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { QotdView } from "@/components/practice/QotdView";
import { istDate, isValidDate } from "@/lib/qotd";
import { formatIsoDate } from "@/lib/utils";

export async function generateMetadata({ params }: PageProps<"/question-of-the-day/[date]">): Promise<Metadata> {
  const { date } = await params;
  return {
    title: isValidDate(date) ? `CPA Question of the Day — ${formatIsoDate(date)}` : "CPA Question of the Day",
    // Each day repeats an MCQ that lives on its topic page, so only the main page is indexed.
    robots: { index: false, follow: true },
    alternates: { canonical: `/question-of-the-day/${date}` },
  };
}

export default async function QotdDatePage({ params }: PageProps<"/question-of-the-day/[date]">) {
  const { date } = await params;
  const today = istDate(new Date());
  if (!isValidDate(date) || date > today) notFound(); // no peeking at future questions
  if (date === today) redirect("/question-of-the-day");
  const view = await QotdView({ date });
  if (!view) notFound();
  return view;
}
