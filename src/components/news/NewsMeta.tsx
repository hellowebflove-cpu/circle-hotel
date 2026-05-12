import { formatNewsDate, type NewsItem } from "@/data/news";

export default function NewsMeta({
  item,
  readingTime,
  className = "",
}: {
  item: NewsItem;
  readingTime: number;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm tracking-[0.48px] text-black/55 ${className}`}
    >
      <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
      <span aria-hidden>·</span>
      <span>⏱ {readingTime} хв читання</span>
      {item.source && (
        <>
          <span aria-hidden>·</span>
          <span>
            Джерело:{" "}
            {item.sourceUrl ? (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/75 underline-offset-4 transition-colors hover:text-[#AF5235] hover:underline"
              >
                {item.source}
              </a>
            ) : (
              <span className="text-black/75">{item.source}</span>
            )}
          </span>
        </>
      )}
    </div>
  );
}
