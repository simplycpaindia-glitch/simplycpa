"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const lines: { text: string; attribution?: string }[] = [
  { text: "Three Core sections. One Discipline. No shortcuts." },
  { text: "Price is what you pay. Value is what you get.", attribution: "Warren Buffett" },
  { text: "You can watch another 47 CPA YouTube videos. Or you can start here." },
  { text: "What gets measured gets managed.", attribution: "Peter Drucker" },
  { text: "Four sections. One designation. Zero shortcuts." },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % lines.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink-950 text-paper-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(216,178,98,0.15), transparent 45%), radial-gradient(circle at 85% 0%, rgba(107,116,148,0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28 lg:pb-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Built for Indian CPA candidates
        </p>
        <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Pass the CPA.
          <br />
          Then change the room.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-paper-50/70 leading-relaxed">
          The practical US CPA study platform built with Indian students in mind — study
          material, revision notes, and exam-style MCQs, organized the way the exam is
          actually structured.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/cpa" size="lg" variant="accent">
            Start Studying
          </Button>
          <Button href="/roadmap" size="lg" variant="outline-light">
            Explore the CPA
          </Button>
        </div>

        <div className="mt-16 h-14 border-t border-paper-50/10 pt-6">
          <div className="relative h-6 overflow-hidden">
            {lines.map((line, i) => (
              <p
                key={line.text}
                className={cn(
                  "absolute inset-0 text-sm text-paper-50/60 transition-all duration-700",
                  i === index ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                )}
              >
                “{line.text}”{line.attribution ? ` — ${line.attribution}` : ""}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
