"use client";

import { useMemo, useState } from "react";
import NewsCard from "./NewsCard";
import NewsCardFeatured from "./NewsCardFeatured";
import NewsCategoryFilter, { type Filter } from "./NewsCategoryFilter";
import {
  getNewsByCategory,
  type NewsCategory,
  type NewsItem,
} from "@/data/news";

export default function NewsGrid({
  initial,
  available,
}: {
  initial: NewsItem[];
  available: NewsCategory[];
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(
    () => (filter === "all" ? initial : getNewsByCategory(filter)),
    [filter, initial],
  );

  if (items.length === 0) {
    return (
      <div>
        <NewsCategoryFilter
          active={filter}
          available={available}
          onChange={setFilter}
        />
        <p className="mt-10 text-base tracking-[0.48px] text-black/55">
          Скоро тут з&apos;являться новини.
        </p>
      </div>
    );
  }

  const [featured, ...rest] = items;
  const showFeatured = filter === "all" && items.length > 1;

  return (
    <div>
      <NewsCategoryFilter
        active={filter}
        available={available}
        onChange={setFilter}
      />

      {showFeatured && (
        <div className="mt-10 border-b border-black/10 pb-12 md:mt-14 md:pb-16">
          <NewsCardFeatured item={featured} />
        </div>
      )}

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {(showFeatured ? rest : items).map((item, i) => (
          <NewsCard key={item.slug} item={item} priority={i === 0 && !showFeatured} />
        ))}
      </div>
    </div>
  );
}
