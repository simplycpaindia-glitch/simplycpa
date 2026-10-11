import { requireStaff } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/Badge";
import { daysAgo } from "@/lib/utils";
import { PostModerationButtons, UnbanButton } from "@/components/admin/JournalModerationButtons";
import { REPORT_REASON_LABEL, TAG_LABEL, type JournalTagValue, type ReportReasonValue } from "@/lib/journal/constants";

const ist = (d: Date) => d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" });

const FLAG_LABEL: Record<string, string> = {
  EXAM_DISCLOSURE: "May disclose exam questions",
  SENSITIVE_WORD: "Contains a word checked by hand",
  WELLBEING: "Self-harm language — consider reaching out",
};

export default async function AdminJournalPage() {
  await requireStaff();
  const since = daysAgo(7);

  const [queue, recent, blocked, signIns, banned, counts] = await Promise.all([
    prisma.journalPost.findMany({
      where: { status: { in: ["HELD_FOR_REVIEW", "HIDDEN_BY_REPORTS"] } },
      orderBy: { createdAt: "asc" },
      include: {
        user: { select: { id: true, username: true, email: true } },
        reports: { where: { resolvedAt: null }, select: { reason: true, details: true, createdAt: true } },
      },
    }),
    prisma.journalPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
      take: 30,
      include: {
        user: { select: { id: true, username: true } },
        _count: { select: { reports: { where: { resolvedAt: null } } } },
      },
    }),
    prisma.blockedPostAttempt.findMany({
      where: { createdAt: { gte: since } },
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { user: { select: { username: true, email: true } } },
    }),
    prisma.signInEvent.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { user: { select: { email: true, username: true } } },
    }),
    prisma.user.findMany({ where: { isBanned: true }, select: { id: true, email: true, username: true, bannedAt: true, bannedReason: true } }),
    Promise.all([
      prisma.journalPost.count({ where: { status: "PUBLISHED" } }),
      prisma.user.count({ where: { username: { not: null } } }),
      prisma.signInEvent.count({ where: { createdAt: { gte: since } } }),
    ]),
  ]);

  return (
    <div className="max-w-5xl">
      <h1 className="font-display text-3xl font-medium">Study wall moderation</h1>
      <p className="mt-2 text-sm text-ink-400">
        {counts[0]} published posts · {counts[1]} members with a username · {counts[2]} sign-ins in the last 7 days. Times in IST.
      </p>

      <Section title={`Needs review (${queue.length})`}>
        {queue.length === 0 && <Empty>Nothing waiting. Held and report-hidden posts appear here.</Empty>}
        {queue.map((p) => (
          <div key={p.id} className="rounded-lg border border-ink-950/10 bg-paper-50 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
              <strong className="text-ink-950">@{p.user.username}</strong>
              <span>{p.user.email}</span>
              <span>· {ist(p.createdAt)}</span>
              <Badge tone="amber">{p.status === "HELD_FOR_REVIEW" ? "Held by automatic check" : "Hidden after reports"}</Badge>
              <Badge>{TAG_LABEL[p.tag as JournalTagValue]}</Badge>
            </div>
            {p.flagReasons.length > 0 && (
              <p className="mt-2 text-xs font-medium text-signal-amber">{p.flagReasons.map((f) => FLAG_LABEL[f] ?? f).join(" · ")}</p>
            )}
            <p className="mt-2 whitespace-pre-wrap break-words text-sm text-ink-950">{p.body}</p>
            {p.reports.length > 0 && (
              <ul className="mt-2 space-y-1 rounded-md bg-signal-red/5 p-2 text-xs text-ink-800">
                {p.reports.map((r, i) => (
                  <li key={i}>
                    <strong>{REPORT_REASON_LABEL[r.reason as ReportReasonValue]}</strong>
                    {r.details && <> — {r.details}</>} <span className="text-ink-400">({ist(r.createdAt)})</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-3">
              <PostModerationButtons postId={p.id} authorId={p.user.id} status={p.status} hasReports={p.reports.length > 0} />
            </div>
          </div>
        ))}
      </Section>

      <Section title="Recently published">
        {recent.length === 0 && <Empty>No posts yet.</Empty>}
        {recent.map((p) => (
          <div key={p.id} className="rounded-lg border border-ink-950/10 bg-paper-50 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
              <strong className="text-ink-950">@{p.user.username}</strong>
              <span>· {ist(p.createdAt)}</span>
              {p._count.reports > 0 && <Badge tone="red">{p._count.reports} open report(s)</Badge>}
            </div>
            <p className="mt-2 line-clamp-4 whitespace-pre-wrap break-words text-sm text-ink-950">{p.body}</p>
            <div className="mt-3">
              <PostModerationButtons postId={p.id} authorId={p.user.id} status={p.status} hasReports={p._count.reports > 0} />
            </div>
          </div>
        ))}
      </Section>

      <Section title="Rejected by automatic checks (last 7 days)">
        {blocked.length === 0 && <Empty>None.</Empty>}
        {blocked.length > 0 && (
          <table className="w-full text-left text-xs">
            <thead className="text-ink-400"><tr><th className="py-1">When</th><th>Member</th><th>Reasons</th><th>Excerpt</th></tr></thead>
            <tbody className="divide-y divide-ink-950/5">
              {blocked.map((b) => (
                <tr key={b.id} className="align-top">
                  <td className="py-1.5 pr-3 whitespace-nowrap">{ist(b.createdAt)}</td>
                  <td className="pr-3">@{b.user.username ?? "—"}<br /><span className="text-ink-400">{b.user.email}</span></td>
                  <td className="pr-3">{b.reasons.join(", ")}</td>
                  <td className="max-w-xs break-words text-ink-400">{b.excerpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Section>

      <Section title={`Suspended members (${banned.length})`}>
        {banned.length === 0 && <Empty>None.</Empty>}
        {banned.map((u) => (
          <div key={u.id} className="flex items-center justify-between gap-4 rounded-lg border border-ink-950/10 bg-paper-50 p-3 text-sm">
            <span>
              @{u.username ?? "—"} <span className="text-ink-400">{u.email}</span>
              <span className="block text-xs text-ink-400">{u.bannedAt ? ist(u.bannedAt) : ""} — {u.bannedReason}</span>
            </span>
            <UnbanButton userId={u.id} />
          </div>
        ))}
      </Section>

      <Section title="Recent sign-ins">
        <table className="w-full text-left text-xs">
          <thead className="text-ink-400"><tr><th className="py-1">When</th><th>Email</th><th>Username</th><th>Method</th><th>New?</th></tr></thead>
          <tbody className="divide-y divide-ink-950/5">
            {signIns.map((s) => (
              <tr key={s.id}>
                <td className="py-1.5 pr-3 whitespace-nowrap">{ist(s.createdAt)}</td>
                <td className="pr-3">{s.user.email}</td>
                <td className="pr-3">{s.user.username ? `@${s.user.username}` : "—"}</td>
                <td className="pr-3">{s.method}</td>
                <td>{s.isNewUser ? "New" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 font-semibold text-ink-950">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-ink-400">{children}</p>;
}
