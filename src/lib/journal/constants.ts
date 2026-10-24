/**
 * Limits and labels for "What I Studied This Week". Every limit here is also shown
 * to users on the page and in the community guidelines — keep them in sync.
 */

export const POST_MIN_CHARS = 20;
export const POST_MAX_CHARS = 2000;
export const POST_MAX_LINES = 60;
/** Posts allowed per user in any rolling 24-hour period. */
export const POSTS_PER_24H = 3;
/** Distinct users reporting a post before it is hidden pending review. */
export const REPORTS_TO_HIDE = 3;
/** Reports a single user may file in 24 hours. */
export const REPORTS_PER_24H = 10;
/** Rejected attempts in 24 hours before posting is paused for that user. */
export const BLOCKED_ATTEMPTS_BEFORE_COOLDOWN = 10;
export const FEED_PAGE_SIZE = 20;
/** Optional "hours this update covers" on a post. */
export const STUDY_HOURS_MIN = 0.5;
export const STUDY_HOURS_MAX = 100;

/** Bump when the community guidelines change materially; users re-accept. */
export const GUIDELINES_VERSION = "2026-10-13";

/**
 * SimplyCPA's own account(s). Posts from these show an "Official" badge. The names are
 * already reserved for members by checkUsername (anything containing "simplycpa").
 */
export const OFFICIAL_USERNAMES: readonly string[] = ["simplycpa"];

export const USERNAME_MIN = 3;
export const USERNAME_MAX = 20;

export const JOURNAL_TAGS = ["GENERAL", "FAR", "AUD", "REG", "BAR", "ISC", "TCP", "EXAM_DEBRIEF"] as const;
export type JournalTagValue = (typeof JOURNAL_TAGS)[number];

export const TAG_LABEL: Record<JournalTagValue, string> = {
  GENERAL: "General",
  FAR: "FAR",
  AUD: "AUD",
  REG: "REG",
  BAR: "BAR",
  ISC: "ISC",
  TCP: "TCP",
  EXAM_DEBRIEF: "Exam debrief",
};

export const REPORT_REASONS = [
  "SPAM",
  "SEXUAL",
  "OFFENSIVE",
  "HARASSMENT",
  "EXAM_CONTENT",
  "OFF_TOPIC",
  "OTHER",
] as const;
export type ReportReasonValue = (typeof REPORT_REASONS)[number];

export const REPORT_REASON_LABEL: Record<ReportReasonValue, string> = {
  SPAM: "Spam or advertising",
  SEXUAL: "Sexual or explicit",
  OFFENSIVE: "Abusive or offensive language",
  HARASSMENT: "Harassment of a person",
  EXAM_CONTENT: "Shares real exam questions",
  OFF_TOPIC: "Not about studying or the CPA",
  OTHER: "Something else",
};

/** India's government mental-health helpline (Tele-MANAS), shown with self-harm checks. */
export const HELPLINE_TEXT =
  "If you're struggling, you're not alone. In India you can call Tele-MANAS, the government's free 24×7 mental health helpline, on 14416 or 1-800-891-4416.";
