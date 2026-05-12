"use client";

import { CATEGORY_LABELS, type NewsCategory } from "@/data/news";

export type Filter = NewsCategory | "all";

export default function NewsCategoryFilter({
  active,
  available,
  onChange,
}: {
  active: Filter;
  available: NewsCategory[];
  onChange: (next: Filter) => void;
}) {
  const chips: { id: Filter; label: string }[] = [
    { id: "all", label: "Усі" },
    ...available.map((c) => ({ id: c, label: CATEGORY_LABELS[c] })),
  ];

  return (
    <div
      className="flex flex-wrap gap-1.5 md:gap-3"
      role="tablist"
      aria-label="Категорії новин"
    >
      {chips.map((chip) => {
        const selected = chip.id === active;
        return (
          <button
            key={chip.id}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(chip.id)}
            className={`cursor-pointer rounded-[50px] px-3 py-1.5 text-xs font-semibold tracking-[0.48px] transition-colors duration-200 md:px-5 md:py-2.5 md:text-sm ${
              selected
                ? "bg-black text-white"
                : "border border-black/20 text-black/70 hover:border-black/50 hover:text-black"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
