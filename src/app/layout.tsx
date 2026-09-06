import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "SimplyCPA — The Free US CPA Study Library",
    template: "%s · SimplyCPA",
  },
  description:
    "Free, exam-focused study material, revision notes, and practice questions for every US CPA section — organized topic by topic. No expensive coaching. No scattered PDFs. Just CPA.",
  openGraph: {
    type: "website",
    siteName: "SimplyCPA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper-50 text-ink-950">
        {children}
      </body>
    </html>
  );
}
