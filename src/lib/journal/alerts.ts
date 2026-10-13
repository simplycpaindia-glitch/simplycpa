import "server-only";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

/**
 * Emails moderators when something is waiting for review (a held post, or a post hidden
 * after reports). Throttled so it can't flood inboxes or use up the email quota:
 * at most one alert per 30 minutes and 10 per day. The email contains only the number of
 * items waiting and a link — never post text or member details.
 *
 * Recipients: MODERATOR_ALERT_EMAILS (comma-separated) if set, otherwise every ADMIN and
 * MODERATOR account.
 */
const MIN_GAP_MS = 30 * 60_000;
const MAX_PER_DAY = 10;
const ALERT_ACTION = "moderation.alert_sent";

export async function notifyModeratorsOfQueue(trigger: "held" | "reported") {
  try {
    const now = Date.now();
    const [last, today] = await Promise.all([
      prisma.auditLog.findFirst({ where: { action: ALERT_ACTION }, orderBy: { createdAt: "desc" }, select: { createdAt: true } }),
      prisma.auditLog.count({ where: { action: ALERT_ACTION, createdAt: { gte: new Date(now - 24 * 3_600_000) } } }),
    ]);
    if ((last && now - last.createdAt.getTime() < MIN_GAP_MS) || today >= MAX_PER_DAY) return;

    const waiting = await prisma.journalPost.count({ where: { status: { in: ["HELD_FOR_REVIEW", "HIDDEN_BY_REPORTS"] } } });
    if (waiting === 0) return;

    const configured = (process.env.MODERATOR_ALERT_EMAILS ?? "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);
    const recipients = configured.length
      ? configured
      : (await prisma.user.findMany({ where: { role: { in: ["ADMIN", "MODERATOR"] } }, select: { email: true } })).map((u) => u.email);
    if (!recipients.length) return;

    // Record first, so concurrent requests don't both send.
    await prisma.auditLog.create({
      data: { action: ALERT_ACTION, entityType: "JournalPost", entityId: "queue", metadata: { trigger, waiting, recipients: recipients.length } },
    });

    const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.simplycpa.in").replace(/\/$/, "");
    const link = `${site}/admin/journal`;
    const subject = `${waiting} study-wall post${waiting === 1 ? "" : "s"} waiting for review`;
    const why = trigger === "held" ? "A post was held by the automatic checks." : "A post was hidden after reports from members.";
    for (const to of recipients) {
      await sendEmail({
        to,
        subject,
        text: `${why}\n\n${waiting} item(s) are waiting in the moderation queue:\n${link}\n\nYou get at most one of these emails every 30 minutes.`,
        html: `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:480px;margin:auto;color:#05070d">
<p>${why}</p>
<p><strong>${waiting}</strong> item(s) are waiting in the moderation queue.</p>
<p><a href="${link}" style="display:inline-block;background:#05070d;color:#fbfaf7;padding:10px 16px;border-radius:6px;text-decoration:none">Open the queue</a></p>
<p style="color:#6b7494;font-size:13px">You get at most one of these emails every 30 minutes.</p>
</div>`,
      });
    }
  } catch (err) {
    console.error("Moderator alert failed", err);
  }
}
