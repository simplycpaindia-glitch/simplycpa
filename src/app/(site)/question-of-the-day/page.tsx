import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QotdView } from "@/components/practice/QotdView";
import { istDate } from "@/lib/qotd";

export const metadata: Metadata = {
  title: "CPA Question of the Day",
  description: "One US CPA exam practice question every day, with a full explanation. Answer daily to build a streak.",
  alternates: { canonical: "/question-of-the-day" },
};

export default async function QuestionOfTheDayPage() {
  const view = await QotdView({ date: istDate(new Date()) });
  if (!view) notFound();
  return view;
}
