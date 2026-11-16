import "server-only";
import type { Simulation } from "./types";
import { farSimulations } from "./data/far";
import { audSimulations } from "./data/aud";
import { regSimulations } from "./data/reg";
import { barSimulations } from "./data/bar";
import { iscSimulations } from "./data/isc";
import { tcpSimulations } from "./data/tcp";

const BY_SUBJECT: Record<string, Simulation[]> = {
  far: farSimulations,
  aud: audSimulations,
  reg: regSimulations,
  bar: barSimulations,
  isc: iscSimulations,
  tcp: tcpSimulations,
};

export function getSimulations(subject: string): Simulation[] {
  return BY_SUBJECT[subject] ?? [];
}

export function getSimulation(subject: string, slug: string): Simulation | undefined {
  return getSimulations(subject).find((s) => s.slug === slug);
}

export function allSimulations(): Simulation[] {
  return Object.values(BY_SUBJECT).flat();
}
