"use client";

import { useEffect, useState } from "react";

const STEPS = [0.9, 1, 1.1, 1.2, 1.3] as const;
const KEY = "simplycpa:reading-scale";

/** A− / A+ text size for study reading. Sets --reading-scale (used by .prose-cpa) and remembers it in this browser. */
export function ReadingControls() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let saved = 1;
    try {
      saved = Number(localStorage.getItem(KEY)) || 1;
    } catch {
      // storage unavailable (private mode): fall back to the default size
    }
    if (STEPS.includes(saved as (typeof STEPS)[number])) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- read once after mount so server and client HTML match
      setScale(saved);
      document.documentElement.style.setProperty("--reading-scale", String(saved));
    }
  }, []);

  function change(dir: -1 | 1) {
    const i = STEPS.indexOf(scale as (typeof STEPS)[number]);
    const next = STEPS[Math.min(STEPS.length - 1, Math.max(0, (i < 0 ? 1 : i) + dir))];
    setScale(next);
    document.documentElement.style.setProperty("--reading-scale", String(next));
    try {
      localStorage.setItem(KEY, String(next));
    } catch {
      // not remembered, but still applied for this page
    }
  }

  const btn =
    "flex h-8 min-w-8 items-center justify-center rounded-md border border-ink-950/15 px-2 text-sm font-medium text-ink-800 hover:border-ink-950/40 disabled:opacity-40";
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Text size">
      <span className="mr-1 text-xs text-ink-400">Text size</span>
      <button type="button" className={btn} onClick={() => change(-1)} disabled={scale <= STEPS[0]} aria-label="Smaller text">
        A−
      </button>
      <button type="button" className={btn} onClick={() => change(1)} disabled={scale >= STEPS[STEPS.length - 1]} aria-label="Larger text">
        A+
      </button>
    </div>
  );
}
