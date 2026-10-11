/**
 * Regression tests for the "What I Studied This Week" automatic checks.
 *
 *   npm run test:moderation
 *
 * Add a case here whenever a real post is wrongly blocked or wrongly allowed.
 * Non-ASCII test strings use \u escapes so editors and shells can't corrupt them.
 */
import { checkPost, checkUsername } from "../src/lib/journal/moderation";

type Expect = "ok" | "held" | `blocked:${string}`;

const FULLWIDTH_FUCKING = "ｆｕｃｋｉｎｇ";
const ZERO_WIDTH = "​";
const CYRILLIC_O = "о";

const cases: [string, Expect][] = [
  // Legitimate study posts (must publish)
  ["This week I finished leases in FAR. ASC 842 finally clicked once I built the amortisation schedule myself.", "ok"],
  ["Studied assets, liabilities and the assessment of going concern. Class notes helped a lot.", "ok"],
  ["Analysis of variances in BAR - material price variance was favourable, quantity unfavourable.", "ok"],
  ["Passed AUD today! 4 months of study. Biggest lesson: learn the audit report wording early.", "ok"],
  ["Struggled with governmental funds. Modified accrual vs full accrual is the key distinction.", "ok"],
  ["Watched the therapist analogy video about cognitive bias in audit judgement. Very useful.", "ok"],
  ["Section 1231 netting and the five-year lookback rule - took me three attempts to get it.", "ok"],
  ["Did 120 MCQs on REG individual tax. 2026 standard deduction is $16,100 for single filers.", "ok"],
  ["U.S. GAAP vs Ind AS differences: LIFO, revaluation, impairment reversals. Chapter 1. In short, lots to unlearn.", "ok"],
  ["Bhai FAR bahut tough hai par consistent rehna padega. Aaj 3 ghante padha. Chhod do mat!", "ok"],
  ["Studied Scunthorpe example in data validation - false positives in keyword filters are real.", "ok"],
  ["Sum of the parts: 50% MCQ and 50% TBS. I killed it on the simulations this time.", "ok"],
  ["Week 3 of ISC: CIA triad, SOC 1 vs SOC 2, and Type 1 vs Type 2 reports. \u{1F44D}\u{1F4DA}", "ok"],
  ["Bond issued at $92,418 with 10% market rate - interest expense $9,242 in year one.", "ok"],
  ["Studied cocktail of topics: pensions, derivatives and the class action risk disclosures.", "ok"],
  ["Done! Finished all of FAR today. Next up is AUD in the October window.", "ok"],

  // Links and contact details (blocked)
  ["Great notes here https://example.com/notes for everyone studying FAR this month.", "blocked:LINK"],
  ["Check www.example.com for free FAR notes, it really helped me this week.", "blocked:LINK"],
  ["My notes are on mysite.in - studied FAR leases and revenue all week long.", "blocked:LINK"],
  ["Join the group at t.me/cpagroup for daily FAR questions and discussion.", "blocked:LINK"],
  ["Notes at mysite dot com - studied FAR leases and revenue all week long.", "blocked:LINK"],
  ["Notes at mysite[.]com - studied FAR leases and revenue all week long.", "blocked:LINK"],
  ["Email me at student.cpa@gmail.com for my revision sheets on REG tax.", "blocked:EMAIL"],
  ["Call 98765 43210 if you want to form a study group for FAR this month.", "blocked:PHONE"],
  ["Ping me on +91-9876543210 for the AUD study group starting Monday.", "blocked:PHONE"],
  ["Anyone studying FAR, DM me and we can make a group to study together.", "blocked:SOLICITATION"],
  ["Join my WhatsApp group for CPA preparation, very active members daily.", "blocked:SOLICITATION"],

  // Promotion and exam trading (blocked)
  ["Earn money from home while studying CPA, guaranteed income every month.", "blocked:PROMOTION"],
  ["CPA exam dumps available for FAR and AUD, latest questions this quarter.", "blocked:EXAM_TRADE"],

  // Sexual and abusive (blocked, including disguises)
  ["Studying is boring, watching porn instead lol. Will start FAR tomorrow.", "blocked:SEXUAL"],
  ["Studying is boring, watching p0rn instead lol. Will start FAR tomorrow.", "blocked:SEXUAL"],
  ["Studying is boring, watching p o r n instead lol. Will start FAR tomorrow.", "blocked:SEXUAL"],
  [`Studying is boring, watching p${CYRILLIC_O}rn instead lol. Will start FAR tomorrow.`, "blocked:SEXUAL"],
  ["Send nudes lol, this FAR chapter is killing me slowly today.", "blocked:SEXUAL"],
  ["This fucking chapter on leases took forever to understand today.", "blocked:PROFANITY"],
  ["This fuuuuuck1ng chapter on leases took forever to understand today.", "blocked:PROFANITY"],
  ["This f.u.c.k.i.n.g chapter on leases took forever to understand today.", "blocked:PROFANITY"],
  [`This ${FULLWIDTH_FUCKING} chapter on leases took forever to understand today.`, "blocked:PROFANITY"],
  [`This fu${ZERO_WIDTH}cking chapter on leases took forever to understand today.`, "blocked:PROFANITY"],
  ["Examiner is a chutiya for putting this question type in FAR, seriously.", "blocked:PROFANITY"],
  ["Ye REG wala topic bhenchod samajh nahi aaya, kal phir padhunga.", "blocked:PROFANITY"],
  ["This shit is hard but I will keep going with FAR revenue recognition.", "blocked:PROFANITY"],

  // Spam shapes (blocked)
  ["Studied today!!!!!!!!!!!!!!!!!!!! FAR is great and so is AUD and REG.", "blocked:REPEATED_CHARACTERS"],
  ["I STUDIED FAR LEASES TODAY AND IT WAS VERY HARD BUT I WILL PASS FOR SURE", "blocked:ALL_CAPS"],
  ["far far far far far far far - leases today and nothing else at all.", "blocked:REPEATED_WORDS"],
  ["short", "blocked:TOO_SHORT"],
  ["Studied " + "leases and revenue ".repeat(120), "blocked:TOO_LONG"],

  // Held for review
  ["Exam debrief: the exact question on my FAR exam was about a lease with a purchase option.", "held"],
  ["In my exam there was a sim on partnership basis with three partners and a liability shift.", "held"],
  ["Studied the sexual harassment rules in business law and employer liability today.", "held"],
  ["Failed again and I honestly want to die. Not sure how to keep studying for this.", "held"],
];

let failures = 0;
for (const [input, expected] of cases) {
  const r = checkPost(input);
  const actual: Expect = r.blocked.length
    ? (`blocked:${r.blocked.map((b) => b.code).join(",")}` as Expect)
    : r.held.length
      ? "held"
      : "ok";
  const pass =
    expected === actual ||
    (expected.startsWith("blocked:") && actual.startsWith("blocked:") && actual.includes(expected.slice(8)));
  if (!pass) {
    failures++;
    console.log(`FAIL  expected ${expected}, got ${actual}\n      ${input.slice(0, 100)}`);
  }
}

const helpline = checkPost("Failed again and I honestly want to die. Not sure how to keep studying for this.");
if (!helpline.showHelpline) {
  failures++;
  console.log("FAIL  self-harm text should show the helpline");
}

const usernames: [string, boolean][] = [
  ["priya_cpa", true],
  ["meet115", true],
  ["far2026", true],
  ["classact", true],
  ["assetsguy", true],
  ["ab", false],
  ["12345", false],
  ["admin", false],
  ["simplycpa_team", false],
  ["fuckfar", false],
  ["chutiya123", false],
  ["Rahul.CPA", false],
  ["_rahul", false],
];
for (const [name, ok] of usernames) {
  const err = checkUsername(name);
  if (ok !== (err === null)) {
    failures++;
    console.log(`FAIL  username ${name}: expected ${ok ? "allowed" : "rejected"}, got ${err ?? "allowed"}`);
  }
}

console.log(`${cases.length + usernames.length + 1} checks, ${failures} failed`);
if (failures) process.exit(1);
