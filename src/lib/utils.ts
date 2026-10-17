import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutes(minutes: number | null | undefined) {
  if (!minutes) return null;
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rem = minutes % 60;
  return rem === 0 ? `${hours} hr` : `${hours} hr ${rem} min`;
}

/** The moment `days` days before now. */
export function daysAgo(days: number) {
  return new Date(Date.now() - days * 24 * 3_600_000);
}

/** Today's date in India as YYYY-MM-DD. */
export function todayIst() {
  return new Date(Date.now() + 5.5 * 3_600_000).toISOString().slice(0, 10);
}

/** Formats a calendar date ("2026-12-15") without time-zone drift: "15 December 2026". */
export function formatIsoDate(iso: string, opts: { weekday?: boolean } = {}) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
    ...(opts.weekday && { weekday: "short" }),
  });
}

export function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
