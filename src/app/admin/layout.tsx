import Link from "next/link";
import { requireStaff } from "@/lib/dal";
import { signOut } from "@/lib/auth";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/subjects", label: "Subjects" },
  { href: "/admin/topics", label: "Topics" },
  { href: "/admin/mcqs", label: "MCQs" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/comments", label: "Comments" },
  { href: "/admin/sources", label: "Sources" },
];

export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  const user = await requireStaff();

  return (
    <div className="flex min-h-screen bg-paper-100">
      <aside className="w-56 shrink-0 border-r border-ink-950/10 bg-paper-50 p-5">
        <Link href="/admin" className="font-display text-lg font-semibold">
          Simply<span className="text-gold-600">CPA</span> <span className="text-xs text-ink-400 font-sans">Admin</span>
        </Link>
        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-800 hover:bg-ink-950/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 border-t border-ink-950/10 pt-4">
          <p className="text-xs text-ink-400">{user.email}</p>
          <p className="text-xs text-ink-400">{user.role}</p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit" className="mt-2 text-xs text-signal-red hover:underline">
              Sign out
            </button>
          </form>
          <Link href="/" className="mt-2 block text-xs text-ink-400 hover:underline">
            ← Back to site
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
