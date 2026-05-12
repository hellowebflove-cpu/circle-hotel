import Image from "next/image";
import Link from "next/link";
import {
  CATEGORY_LABELS,
  formatNewsDate,
  readingTimeMinutes,
  type NewsItem,
} from "@/data/news";

export default function NewsCardFeatured({ item }: { item: NewsItem }) {
  const minutes = readingTimeMinutes(item);
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group grid gap-6 md:grid-cols-2 md:gap-10"
      aria-label={item.title}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/5 md:aspect-[4/3]">
        <Image
          src={item.cover}
          alt={item.coverAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority
        />
        <span className="absolute left-4 top-4 rounded-[50px] bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-black backdrop-blur">
          {CATEGORY_LABELS[item.category]}
        </span>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#AF5235]">
          Свіже
        </p>
        <h2 className="mt-3 font-sans text-[28px] font-normal leading-[1.1] tracking-[0.48px] text-black transition-colors duration-200 group-hover:text-[#AF5235] md:text-[40px] lg:text-[48px]">
          {item.title}
        </h2>
        <p className="mt-5 max-w-[560px] text-base leading-[1.55] tracking-[0.48px] text-black/70 md:text-lg">
          {item.dek}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm tracking-[0.48px] text-black/55">
          <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
          <span aria-hidden>·</span>
          <span>⏱ {minutes} хв</span>
          {item.source && (
            <>
              <span aria-hidden>·</span>
              <span>{item.source}</span>
            </>
          )}
        </div>
        <span className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-[0.48px] text-black transition-colors group-hover:text-[#AF5235]">
          Читати
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
