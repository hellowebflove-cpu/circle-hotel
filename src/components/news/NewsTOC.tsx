"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/data/news";

export default function NewsTOC({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(
    entries[0]?.id ?? null,
  );

  useEffect(() => {
    if (entries.length === 0) return;
    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 },
    );
    for (const e of entries) {
      const el = document.getElementById(e.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <>
      {/* Mobile: collapsed */}
      <details className="group mt-8 border-y border-black/10 py-3 lg:hidden">
        <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold uppercase tracking-[0.15em] text-black/70">
          Зміст
          <span
            aria-hidden
            className="transition-transform group-open:rotate-180"
          >
            ⌄
          </span>
        </summary>
        <ul className="mt-4 space-y-2">
          {entries.map((e) => (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                className="block text-sm leading-snug tracking-[0.48px] text-black/70 transition-colors hover:text-[#AF5235]"
              >
                {e.text}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop: sticky sidebar */}
      <aside className="sticky top-[100px] hidden lg:block">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/45">
          Зміст
        </p>
        <ul className="mt-4 space-y-3 border-l border-black/10 pl-4">
          {entries.map((e) => {
            const active = e.id === activeId;
            return (
              <li key={e.id}>
                <a
                  href={`#${e.id}`}
                  className={`block text-sm leading-snug tracking-[0.48px] transition-colors ${
                    active
                      ? "text-[#AF5235]"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {e.text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
