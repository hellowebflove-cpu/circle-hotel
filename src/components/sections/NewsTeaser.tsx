import Link from "next/link";
import NewsCard from "@/components/news/NewsCard";
import { getLatestNews } from "@/data/news";

export default function NewsTeaser() {
  const items = getLatestNews(3);
  if (items.length === 0) return null;

  return (
    <section
      data-theme="light"
      className="bg-white py-20 text-black md:py-[100px]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-base tracking-[0.48px] text-black/60">Преса</p>
            <h2 className="mt-3 font-sans text-[40px] font-normal leading-[1.05] tracking-[0.48px] sm:text-[56px] md:text-[64px]">
              Що пишуть{" "}
              <span className="font-serif italic">про нас</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden rounded-[50px] border border-black px-5 py-2.5 text-xs font-semibold tracking-[0.48px] text-black transition-colors duration-200 hover:bg-black hover:text-white md:inline-flex"
          >
            Усі новини
          </Link>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {items.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link
            href="/news"
            className="inline-flex rounded-[50px] border border-black px-5 py-2.5 text-xs font-semibold tracking-[0.48px] text-black"
          >
            Усі новини
          </Link>
        </div>
      </div>
    </section>
  );
}
