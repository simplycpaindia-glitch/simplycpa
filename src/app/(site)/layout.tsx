import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      {/* First focusable element: lets keyboard and screen-reader users jump past the navigation. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper-50"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
