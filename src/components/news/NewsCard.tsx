import Image from "next/image";
import Link from "next/link";
import {
  CATEGORY_LABELS,
  formatNewsDate,
  readingTimeMinutes,
  type NewsItem,
} from "@/data/news";

export default function NewsCard({
  item,
  priority = false,
}: {
  item: NewsItem;
  priority?: boolean;
}) {
  const minutes = readingTimeMinutes(item);
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex flex-col gap-4"
      aria-label={item.title}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
        <Image
          src={item.cover}
          alt={item.coverAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
        <span className="absolute left-3 top-3 rounded-[50px] bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-black backdrop-blur">
          {CATEGORY_LABELS[item.category]}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-[0.48px] text-black/55">
        <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
        <span aria-hidden>·</span>
        <span>⏱ {minutes} хв</span>
        {item.source && (
          <>
            <span aria-hidden>·</span>
            <span className="truncate">{item.source}</span>
          </>
        )}
      </div>

      <h3 className="font-sans text-xl font-normal leading-[1.15] tracking-[0.48px] text-black transition-colors duration-200 group-hover:text-[#AF5235] md:text-2xl">
        {item.title}
      </h3>

      <p className="line-clamp-2 text-base leading-[1.5] tracking-[0.48px] text-black/65">
        {item.excerpt}
      </p>
    </Link>
  );
}
