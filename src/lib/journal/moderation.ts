/**
 * Automatic checks for "What I Studied This Week" posts and usernames.
 *
 * Runs identically in the browser (instant feedback while typing) and on the server
 * (the authoritative check — client results are never trusted). No external services:
 * everything here is free, deterministic and testable (see prisma/test-journal-moderation.ts).
 *
 * Outcomes:
 *   blocked — the post is rejected and the user is told why;
 *   held    — the post is accepted but kept out of the feed until a moderator looks;
 *   neither — the post is published immediately.
 */
import {
  POST_MAX_CHARS,
  POST_MAX_LINES,
  POST_MIN_CHARS,
  USERNAME_MAX,
  USERNAME_MIN,
} from "./constants";
import {
  EXAM_DISCLOSURE_PHRASES,
  EXAM_TRADE_PHRASES,
  PROFANITY_EXACT,
  PROFANITY_PREFIX,
  PROMO_PHRASES,
  RESERVED_USERNAMES,
  REVIEW_EXACT,
  SELF_HARM_PHRASES,
  SEXUAL_EXACT,
  SEXUAL_PHRASES,
  SEXUAL_PREFIX,
  SOLICITATION_PHRASES,
} from "./wordlists";

export type Issue = { code: string; message: string };

export type PostCheck = {
  /** The cleaned text that would be stored. */
  text: string;
  blocked: Issue[];
  held: Issue[];
  /** True when self-harm language was found — show the helpline immediately. */
  showHelpline: boolean;
};

// ── Text cleaning ──────────────────────────────────────────────────────────────

// Zero-width characters, bidirectional overrides, BOM and other invisible format
// characters that are used to hide words from filters or to spoof text direction.
const INVISIBLE = /[­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️﻿ﾠ]/g;
// Control characters other than tab and newline.
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;

/** Normalises user input into the plain text we store. */
export function cleanPostText(input: string): string {
  return input
    .normalize("NFKC")
    .replace(/\r\n?/g, "\n")
    .replace(INVISIBLE, "")
    .replace(CONTROL, "")
    .replace(/\t/g, "  ")
    .split("\n")
    .map((line) => line.replace(/\s+$/u, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Latin look-alikes from Cyrillic and Greek, used to disguise words.
const HOMOGLYPHS: Record<string, string> = {
  "а": "a", "в": "b", "е": "e", "ё": "e", "к": "k", "м": "m", "н": "h", "о": "o", "р": "p",
  "с": "c", "т": "t", "у": "y", "х": "x", "і": "i", "ї": "i", "ј": "j", "ѕ": "s", "ԁ": "d",
  "ӏ": "l", "ԛ": "q", "ԝ": "w", "α": "a", "β": "b", "ε": "e", "ι": "i", "κ": "k", "ν": "v",
  "ο": "o", "ρ": "p", "τ": "t", "υ": "u", "χ": "x",
};
const LEET: Record<string, string> = { "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "8": "b", "@": "a", "$": "s", "!": "i", "|": "l" };

function stripAccents(s: string) {
  return s.normalize("NFKD").replace(/\p{M}+/gu, "");
}

/** Collapse runs of 3+ identical letters to 2 ("fuuuck" → "fuuck"). */
const collapse3 = (w: string) => w.replace(/(\p{L})\1{2,}/gu, "$1$1");
/** Collapse any run of identical letters to 1 ("fuuck" → "fuck"). */
const collapse1 = (w: string) => w.replace(/(\p{L})\1+/gu, "$1");

/**
 * Turns text into lowercase match tokens: accents and look-alike letters removed,
 * l33t-speak decoded inside words that contain letters, and runs of single letters
 * ("f u c k", "f.u.c.k") joined back together.
 */
export function tokensForMatching(text: string): string[] {
  const lowered = stripAccents(text.toLowerCase()).replace(/./gu, (ch) => HOMOGLYPHS[ch] ?? ch);
  const rawTokens = lowered.split(/[^\p{L}\p{N}@$!|]+/u).filter(Boolean);
  // Symbols count as letters only inside a word ("f@ck"), not at its edges ("done!").
  const decoded = rawTokens
    .map((t) => t.replace(/^[@$!|]+|[@$!|]+$/g, ""))
    .map((t) => (/\p{L}/u.test(t) ? t.replace(/[0134578@$!|]/g, (c) => LEET[c] ?? c).replace(/[^\p{L}]/gu, "") : t))
    .filter(Boolean);

  const tokens: string[] = [];
  let run: string[] = [];
  const flush = () => {
    if (run.length >= 3) tokens.push(run.join(""));
    else tokens.push(...run);
    run = [];
  };
  for (const t of decoded) {
    if (t.length === 1 && /\p{L}/u.test(t)) run.push(t);
    else {
      flush();
      tokens.push(t);
    }
  }
  flush();
  return tokens.map(collapse3);
}

function makeMatcher(exact: string[], prefix: string[] = []) {
  const exactSet = new Set(exact.map(collapse3));
  // Fully collapsed forms catch stretched spellings, but only for words long enough
  // not to collide with ordinary words ("ass" → "as" is excluded).
  const collapsedSet = new Set(exact.map(collapse1).filter((w) => w.length >= 4));
  const prefixes = prefix.map(collapse1);
  return (tokens: string[]) => {
    for (const t of tokens) {
      if (exactSet.has(t) || collapsedSet.has(collapse1(t))) return t;
      const c = collapse1(t);
      if (prefixes.some((p) => c.startsWith(p))) return t;
    }
    return null;
  };
}

function phraseMatcher(phrases: string[]) {
  const normalised = phrases.map((p) => ` ${tokensForMatching(p).join(" ")} `);
  return (tokens: string[]) => {
    const hay = ` ${tokens.join(" ")} `;
    return normalised.find((p) => hay.includes(p))?.trim() ?? null;
  };
}

const matchSexual = makeMatcher(SEXUAL_EXACT, SEXUAL_PREFIX);
const matchSexualPhrase = phraseMatcher(SEXUAL_PHRASES);
const matchProfanity = makeMatcher(PROFANITY_EXACT, PROFANITY_PREFIX);
const matchReview = makeMatcher(REVIEW_EXACT);
const matchSolicitation = phraseMatcher(SOLICITATION_PHRASES);
const matchPromo = phraseMatcher(PROMO_PHRASES);
const matchExamTrade = phraseMatcher(EXAM_TRADE_PHRASES);
const matchExamDisclosure = phraseMatcher(EXAM_DISCLOSURE_PHRASES);
const matchSelfHarm = phraseMatcher(SELF_HARM_PHRASES);

// ── Pattern checks on the raw text ─────────────────────────────────────────────

const TLDS =
  "com|net|org|io|co|in|me|ly|gg|xyz|info|biz|app|dev|link|site|online|store|shop|live|club|top|ru|cn|tk|us|uk|ai|edu|gov|tv|cc|ws|pw|click|link|page";
const LINK_PATTERNS: RegExp[] = [
  /(?:https?|hxxps?|ftp):\/\//i,
  /:\/\//,
  /\bwww\s*\.\s*\S/i,
  new RegExp(`\\b[a-z0-9][a-z0-9-]{1,62}\\.(?:${TLDS})(?![a-z0-9])`, "i"),
  new RegExp(`\\b[a-z0-9][a-z0-9-]{1,62}\\s*(?:\\[\\s*\\.\\s*\\]|\\(\\s*\\.\\s*\\)|\\[\\s*dot\\s*\\]|\\(\\s*dot\\s*\\)|\\{\\s*dot\\s*\\})\\s*[a-z]{2,}`, "i"),
  new RegExp(`\\b[a-z0-9][a-z0-9-]{1,62}\\s+dot\\s+(?:${TLDS})\\b`, "i"),
  /\b(?:t\.me|wa\.me|bit\.ly|tinyurl|goo\.gl|linktr\.ee)\b/i,
  /\[[^\]\n]*\]\([^)\n]*\)/, // markdown link
];
const EMAIL_PATTERNS: RegExp[] = [
  /[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+/i,
  /@\s*(?:gmail|yahoo|outlook|hotmail|rediffmail|icloud|proton|protonmail)\b/i,
  /\b(?:at|\[at\]|\(at\))\s+(?:gmail|yahoo|outlook|hotmail|rediffmail|icloud|proton)\b/i,
];
const PHONE_PATTERNS: RegExp[] = [
  /(?<!\d)(?:\+?91[\s-]?|0)?[6-9]\d{4}[\s-]?\d{5}(?!\d)/, // Indian mobile numbers
  /\+\d{1,3}[\s-]?\d(?:[\s-]?\d){7,13}/, // international format
];

function check(patterns: RegExp[], text: string) {
  return patterns.some((p) => p.test(text));
}

// ── Main post check ────────────────────────────────────────────────────────────

export function checkPost(input: string): PostCheck {
  const text = cleanPostText(input);
  const blocked: Issue[] = [];
  const held: Issue[] = [];
  const add = (list: Issue[], code: string, message: string) => {
    if (!list.some((i) => i.code === code)) list.push({ code, message });
  };

  // Length and shape
  const length = [...text].length;
  if (length < POST_MIN_CHARS) add(blocked, "TOO_SHORT", `Write at least ${POST_MIN_CHARS} characters.`);
  if (length > POST_MAX_CHARS) add(blocked, "TOO_LONG", `Keep it under ${POST_MAX_CHARS.toLocaleString("en-IN")} characters (you have ${length.toLocaleString("en-IN")}).`);
  if (text.split("\n").length > POST_MAX_LINES) add(blocked, "TOO_MANY_LINES", `Keep it under ${POST_MAX_LINES} lines.`);

  // Links, contact details and off-site solicitation
  if (check(LINK_PATTERNS, text)) add(blocked, "LINK", "Links aren't allowed — please share what you learnt in your own words.");
  if (check(EMAIL_PATTERNS, text)) add(blocked, "EMAIL", "Please don't share email addresses.");
  if (check(PHONE_PATTERNS, text)) add(blocked, "PHONE", "Please don't share phone numbers.");

  const tokens = tokensForMatching(text);
  if (matchSolicitation(tokens)) add(blocked, "SOLICITATION", "Please don't ask people to contact you or move to other apps.");
  if (matchPromo(tokens)) add(blocked, "PROMOTION", "Advertising and promotions aren't allowed.");
  if (matchExamTrade(tokens)) add(blocked, "EXAM_TRADE", "Buying, selling or sharing exam questions isn't allowed.");

  // Sexual and abusive content
  if (matchSexual(tokens) || matchSexualPhrase(tokens)) add(blocked, "SEXUAL", "Sexual or explicit content isn't allowed.");
  if (matchProfanity(tokens)) add(blocked, "PROFANITY", "Please keep the language clean — abusive words and slurs aren't allowed.");

  // Spam patterns
  if (/([\s\S])\1{9,}/u.test(text)) add(blocked, "REPEATED_CHARACTERS", "That looks like spam — please avoid long runs of the same character.");
  const letters = text.match(/\p{L}/gu)?.length ?? 0;
  const upper = text.match(/\p{Lu}/gu)?.length ?? 0;
  if (letters >= 30 && upper / letters > 0.7) add(blocked, "ALL_CAPS", "Please don't write mostly in capital letters.");
  const nonSpace = text.replace(/\s/g, "").length;
  if (nonSpace >= 40 && letters / nonSpace < 0.4) add(blocked, "MOSTLY_SYMBOLS", "Please write mostly in words — there are too many symbols or numbers.");
  const emoji = text.match(/\p{Extended_Pictographic}/gu)?.length ?? 0;
  if (emoji > 20) add(blocked, "TOO_MANY_EMOJI", "Please use fewer emoji.");
  const words = tokens.filter((t) => /\p{L}/u.test(t));
  let streak = 1;
  for (let i = 1; i < words.length; i++) {
    streak = words[i] === words[i - 1] ? streak + 1 : 1;
    if (streak >= 5) {
      add(blocked, "REPEATED_WORDS", "That looks like spam — please avoid repeating the same word.");
      break;
    }
  }
  if (words.length >= 30 && new Set(words).size / words.length < 0.2) {
    add(blocked, "REPEATED_WORDS", "That looks like spam — please avoid repeating the same words.");
  }

  // Held for a human look (only if nothing blocked it outright)
  if (matchExamDisclosure(tokens)) {
    add(held, "EXAM_DISCLOSURE", "This may describe real exam questions, which candidates agree not to share. A moderator will check it before it appears.");
  }
  if (matchReview(tokens)) add(held, "SENSITIVE_WORD", "This contains a word we check by hand. A moderator will review it shortly.");
  const showHelpline = !!matchSelfHarm(tokens);
  if (showHelpline) add(held, "WELLBEING", "We'll have a person look at this post before it appears.");

  return { text, blocked, held, showHelpline };
}

/** Lowercase letters and digits only — used to detect copy-pasted duplicates. */
export function fingerprintSource(text: string): string {
  return tokensForMatching(text).join("");
}

// ── Usernames ──────────────────────────────────────────────────────────────────

export function normaliseUsername(input: string): string {
  return input.trim().replace(/^@/, "").toLowerCase();
}

/** Returns an error message, or null when the username is acceptable. */
export function checkUsername(input: string): string | null {
  const name = normaliseUsername(input);
  if (name.length < USERNAME_MIN || name.length > USERNAME_MAX) {
    return `Usernames must be ${USERNAME_MIN}–${USERNAME_MAX} characters.`;
  }
  if (!/^[a-z0-9_]+$/.test(name)) return "Use only lowercase letters, numbers and underscores.";
  if (/^\d+$/.test(name)) return "Usernames need at least one letter.";
  if (/^_|_$|__/.test(name)) return "Underscores can't be at the start or end, or doubled.";
  if (RESERVED_USERNAMES.includes(name) || /admin|moderator|simplycpa|official|support/.test(name)) {
    return "That username is reserved — please choose another.";
  }
  const tokens = tokensForMatching(name.replace(/_/g, " "));
  const joined = [collapse3(name.replace(/_/g, ""))];
  if (matchSexual(tokens) || matchProfanity(tokens) || matchSexual(joined) || matchProfanity(joined)) {
    return "Please choose a different username.";
  }
  return null;
}
