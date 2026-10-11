/**
 * Word and phrase lists for the automatic post checks. These lists are necessarily
 * explicit. All entries are lowercase and are compared against text that has already
 * been normalised by `normaliseForMatching` (accents removed, l33t-speak decoded,
 * letter runs collapsed), so each entry is passed through the same normaliser.
 *
 * EXACT lists match whole words only, which avoids the "Scunthorpe problem"
 * (e.g. "assets", "assessment", "analysis", "therapist", "cocktail" are safe).
 * PREFIX lists match the start of a word and are used only for stems that are not
 * the start of any common English or accounting word.
 */

/** Sexual or explicit — always rejected. */
export const SEXUAL_EXACT = [
  "porn", "porno", "pornography", "pornographic", "nude", "nudes", "nudity", "xxx", "nsfw",
  "onlyfans", "boobs", "boob", "tits", "titties", "pussy", "penis", "vagina", "dildo",
  "blowjob", "handjob", "horny", "milf", "hentai", "orgasm", "sexting", "sext", "sexy",
  "erotic", "erotica", "fetish", "camgirl", "escorts", "callgirl", "callgirls", "stripper",
  "rape", "rapist",
];
export const SEXUAL_PREFIX = ["porn", "onlyfans", "blowjob", "handjob", "hentai", "dildo", "pornograph"];
export const SEXUAL_PHRASES = ["call girl", "call girls", "escort service", "send nudes", "adult video", "adult videos"];

/** Profanity, slurs and abuse in English and Hindi/Hinglish — always rejected. */
export const PROFANITY_EXACT = [
  // English
  "fuck", "fucks", "fucked", "fucking", "fucker", "fuckers", "motherfucker", "shit", "shits",
  "shitty", "bullshit", "bitch", "bitches", "bastard", "bastards", "cunt", "cunts", "dick",
  "dicks", "cock", "cocks", "asshole", "assholes", "ass", "arse", "wanker", "twat", "slut",
  "sluts", "whore", "whores", "piss", "pissed",
  // Slurs
  "retard", "retarded", "faggot", "fag", "nigger", "nigga", "chink", "paki",
  // Hindi / Hinglish
  "chutiya", "chutiye", "chutia", "madarchod", "maderchod", "behenchod", "bhenchod",
  "bhosdike", "bhosdi", "bhosda", "bsdk", "randi", "gaandu", "gandu", "gaand", "lund",
  "lauda", "lavda", "loda", "harami", "haramkhor", "jhaat", "jhatu", "chodu", "mkc", "bkl",
];
export const PROFANITY_PREFIX = [
  "fuck", "motherfuck", "bullshit", "chutiy", "madarchod", "behenchod", "bhenchod", "bhosd", "gaandu",
];

/** Asking people to move off-site or to contact the poster — rejected (spam and safety). */
export const SOLICITATION_PHRASES = [
  "whatsapp", "whats app", "telegram", "dm me", "dm for", "message me", "msg me", "contact me",
  "inbox me", "call me", "text me", "my number", "join my group", "join our group", "instagram",
  "insta id", "snapchat", "follow me", "subscribe to my", "my channel", "my youtube",
];

/** Advertising and scams — rejected. */
export const PROMO_PHRASES = [
  "earn money", "make money", "work from home", "trading signals", "crypto signals", "crypto trading",
  "forex", "casino", "betting", "loan offer", "discount code", "promo code", "referral code",
  "coupon code", "buy now", "limited offer", "click here", "100% guaranteed", "guaranteed pass",
  "pass guaranteed",
];

/** Selling or trading exam content — rejected. */
export const EXAM_TRADE_PHRASES = [
  "exam dump", "exam dumps", "cpa dump", "cpa dumps", "dumps available", "leaked questions",
  "leaked paper", "leaked exam", "real questions for sale", "buy questions", "sell questions",
  "selling questions", "actual exam questions for",
];

/**
 * Possible disclosure of real exam questions — held for review rather than rejected,
 * because general debriefs ("lots of lease questions") are fine but specifics are not.
 */
export const EXAM_DISCLOSURE_PHRASES = [
  "exact question", "exact questions", "actual question", "actual questions", "same question came",
  "question came in my exam", "questions came in my exam", "question i got", "questions i got",
  "got a question on", "got a question about", "got a sim on", "my sim was", "the sim asked",
  "my exam asked", "exam asked me", "asked me to calculate", "on my exam there was",
  "in my exam there was", "real exam question", "questions from my exam", "my testlet had",
  "the question was", "one question was",
];

/** Words with legitimate study uses ("naked option", "sexual harassment law") — held for review. */
export const REVIEW_EXACT = ["sex", "sexual", "naked", "cum"];

/** Self-harm language — held for review, and the helpline is shown immediately. */
export const SELF_HARM_PHRASES = [
  "suicide", "suicidal", "kill myself", "killing myself", "end my life", "ending my life",
  "want to die", "wanna die", "self harm", "self-harm", "hurt myself", "no reason to live",
];

/** Throwaway inbox providers — sign-in codes are not sent to these. */
export const DISPOSABLE_EMAIL_DOMAINS = [
  "mailinator.com", "10minutemail.com", "10minutemail.net", "guerrillamail.com", "guerrillamail.net",
  "sharklasers.com", "yopmail.com", "yopmail.net", "tempmail.com", "temp-mail.org", "temp-mail.io",
  "throwawaymail.com", "trashmail.com", "getnada.com", "nada.email", "dispostable.com",
  "maildrop.cc", "mintemail.com", "fakeinbox.com", "mohmal.com", "emailondeck.com",
  "tempinbox.com", "mailnesia.com", "mytemp.email", "tempr.email", "discard.email",
  "spamgourmet.com", "burnermail.io", "inboxkitten.com", "1secmail.com",
];

/** Usernames that could impersonate staff or the site. */
export const RESERVED_USERNAMES = [
  "admin", "administrator", "moderator", "mod", "mods", "staff", "support", "help", "simplycpa",
  "simply_cpa", "official", "aicpa", "nasba", "irs", "system", "root", "owner", "team", "editor",
  "null", "undefined", "anonymous", "everyone", "here",
];
