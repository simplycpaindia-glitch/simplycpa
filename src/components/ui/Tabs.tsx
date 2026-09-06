"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  defaultTab,
}: {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  defaultTab?: string;
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  // Respect a URL hash (e.g. #mcqs) so links from other pages can open the right tab.
  // Deliberately set after mount (not a lazy useState initializer) so the server-rendered
  // default tab matches the client's first paint and only switches once hydrated,
  // avoiding a hydration mismatch.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabs.some((t) => t.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActive(hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto border-b border-ink-950/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            id={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              active === tab.id
                ? "border-gold-500 text-ink-950"
                : "border-transparent text-ink-400 hover:text-ink-800"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-6">{activeTab?.content}</div>
    </div>
  );
}
