import type { McqBank } from "./types";
import { farBankA } from "./far-a";
import { farBankB } from "./far-b";
import { farBankC } from "./far-c";
import { farBankD } from "./far-d";
import { farBankE } from "./far-e";
import { farBankF } from "./far-f";
import { audBankA } from "./aud-a";
import { audBankB } from "./aud-b";
import { audBankC } from "./aud-c";
import { audBankD } from "./aud-d";
import { audBankE } from "./aud-e";
import { audBankF } from "./aud-f";
import { audBankG } from "./aud-g";
import { regBankA } from "./reg-a";
import { regBankB } from "./reg-b";
import { regBankC } from "./reg-c";
import { regBankD } from "./reg-d";
import { regBankE } from "./reg-e";
import { regBankF } from "./reg-f";
import { barBank } from "./bar";
import { barBankB } from "./bar-b";
import { barBankC } from "./bar-c";
import { barBankD } from "./bar-d";
import { barBankE } from "./bar-e";
import { iscBank } from "./isc";
import { iscBankB } from "./isc-b";
import { iscBankC } from "./isc-c";
import { iscBankD } from "./isc-d";
import { iscBankE } from "./isc-e";
import { tcpBank } from "./tcp";
import { tcpBankB } from "./tcp-b";
import { tcpBankC } from "./tcp-c";
import { tcpBankD } from "./tcp-d";
import { tcpBankE } from "./tcp-e";

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
  farBankD,
  farBankE,
  farBankF,
  audBankA,
  audBankB,
  audBankC,
  audBankD,
  audBankE,
  audBankF,
  audBankG,
  regBankA,
  regBankB,
  regBankC,
  regBankD,
  regBankE,
  regBankF,
  barBank,
  barBankB,
  barBankC,
  barBankD,
  barBankE,
  iscBank,
  iscBankB,
  iscBankC,
  iscBankD,
  iscBankE,
  tcpBank,
  tcpBankB,
  tcpBankC,
  tcpBankD,
  tcpBankE,
];

export const mcqBank: McqBank = banks.reduce<McqBank>((merged, bank) => {
  for (const [slug, questions] of Object.entries(bank)) {
    merged[slug] = [...(merged[slug] ?? []), ...questions];
  }
  return merged;
}, {});

export type { McqBank };
