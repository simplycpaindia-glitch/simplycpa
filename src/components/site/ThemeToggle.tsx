"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { THEME_KEY, type ThemeChoice } from "@/lib/theme";
import { cn } from "@/lib/utils";

const ORDER: ThemeChoice[] = ["system", "light", "dark"];
const LABEL: Record<ThemeChoice, string> = { system: "Theme: same as device", light: "Theme: light", dark: "Theme: dark" };

/** Cycles device → light → dark. The choice is remembered in this browser. */
export function ThemeToggle({ className, withLabel = false }: { className?: string; withLabel?: boolean }) {
  const [choice, setChoice] = useState<ThemeChoice>("system");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch {
      // storage unavailable: stay on the device setting
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read once after mount so server and client HTML match
    if (saved === "light" || saved === "dark") setChoice(saved);
  }, []);

  function cycle() {
    const next = ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length];
    setChoice(next);
    try {
      if (next === "system") localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, next);
    } catch {
      // not remembered, but applied below for this visit
    }
    const apply = (window as unknown as { __applyTheme?: () => void }).__applyTheme;
    if (apply && next !== "system") document.documentElement.dataset.theme = next;
    else if (apply) apply();
    else document.documentElement.dataset.theme = next === "dark" ? "dark" : "light";
  }

  const Icon = choice === "dark" ? Moon : choice === "light" ? Sun : Monitor;
  const nextLabel = LABEL[ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length]].replace("Theme: ", "");
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${LABEL[choice]}. Switch to ${nextLabel}.`}
      title={LABEL[choice]}
      className={cn(
        "flex items-center justify-center gap-2 rounded-md text-ink-800 hover:bg-ink-950/5 hover:text-ink-950",
        withLabel ? "h-10 px-3 text-sm" : "size-10",
        className,
      )}
    >
      <Icon className="size-[18px]" aria-hidden />
      {withLabel && <span>{LABEL[choice]}</span>}
    </button>
  );
}
