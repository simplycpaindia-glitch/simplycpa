import type { McqBank } from "./types";
import { farBankA } from "./far-a";
import { farBankB } from "./far-b";
import { farBankC } from "./far-c";
import { audBankA } from "./aud-a";
import { audBankB } from "./aud-b";
import { audBankC } from "./aud-c";
import { regBankA } from "./reg-a";
import { regBankB } from "./reg-b";
import { regBankC } from "./reg-c";
import { barBank } from "./bar";
import { iscBank } from "./isc";
import { tcpBank } from "./tcp";

/**
 * Every question bank, merged into one lookup keyed by topic slug.
 *
 * Banks are merged by concatenating the arrays for any slug that appears in
 * more than one file, so a topic's questions can be split across files as the
 * bank grows. The seed script dedupes on question text, so a question
 * accidentally repeated across two banks is inserted only once.
 */
const banks: McqBank[] = [
  farBankA,
  farBankB,
  farBankC,
  audBankA,
  audBankB,
  audBankC,
  regBankA,
  regBankB,
  regBankC,
  barBank,
  iscBank,
  tcpBank,
];

export const mcqBank: McqBank = banks.reduce<McqBank>((merged, bank) => {
  for (const [slug, questions] of Object.entries(bank)) {
    merged[slug] = [...(merged[slug] ?? []), ...questions];
  }
  return merged;
}, {});

export type { McqBank };
