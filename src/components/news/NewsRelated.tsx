import NewsCard from "./NewsCard";
import type { NewsItem } from "@/data/news";

export default function NewsRelated({ items }: { items: NewsItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-20 border-t border-black/10 pt-14">
      <p className="text-base tracking-[0.48px] text-black/55">Далі</p>
      <h2 className="mt-3 font-sans text-[32px] font-normal leading-[1.05] tracking-[0.48px] md:text-[44px]">
        Інші <span className="font-serif italic">новини</span>
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
