import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import NewsBreadcrumbs from "@/components/news/NewsBreadcrumbs";
import NewsMeta from "@/components/news/NewsMeta";
import NewsShare from "@/components/news/NewsShare";
import NewsTOC from "@/components/news/NewsTOC";
import NewsBody from "@/components/news/NewsBody";
import NewsRelated from "@/components/news/NewsRelated";
import NewsCTA from "@/components/news/NewsCTA";
import NewsReadingProgress from "@/components/news/NewsReadingProgress";
import {
  CATEGORY_LABELS,
  getLatestNews,
  getNewsItem,
  newsItems,
  readingTimeMinutes,
  tableOfContents,
} from "@/data/news";

type RouteParams = { slug: string };

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return { title: "Новина не знайдена — Circle Hotel" };
  const url = `/news/${item.slug}`;
  return {
    title: `${item.title} — Circle Hotel`,
    description: item.dek,
    openGraph: {
      title: item.title,
      description: item.dek,
      type: "article",
      url,
      publishedTime: item.date,
      images: [{ url: item.cover, alt: item.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.dek,
      images: [item.cover],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  const minutes = readingTimeMinutes(item);
  const toc = tableOfContents(item);
  const related = getLatestNews(3, item.slug);
  const pathname = `/news/${item.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.dek,
    image: [item.cover],
    datePublished: item.date,
    dateModified: item.date,
    author: { "@type": "Organization", name: item.source ?? "Circle Hotel" },
    publisher: {
      "@type": "Organization",
      name: "Circle Hotel",
      logo: { "@type": "ImageObject", url: "/images/circle-logo.svg" },
    },
    mainEntityOfPage: pathname,
  };

  return (
    <>
      <Header />
      <NewsReadingProgress targetId="article-body" />

      <main
        data-theme="light"
        className="bg-white pt-[110px] pb-24 text-black md:pt-[130px] md:pb-32"
      >
        <article id="article-body" className="mx-auto max-w-[1400px] px-6 md:px-10">
          <NewsBreadcrumbs
            trail={[
              { label: "Головна", href: "/" },
              { label: "Новини", href: "/news" },
              { label: item.title },
            ]}
          />

          {/* Article header */}
          <header className="mt-8 max-w-[820px]">
            <span className="inline-block rounded-[50px] border border-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/70">
              {CATEGORY_LABELS[item.category]}
            </span>
            <h1 className="mt-5 font-sans text-[34px] font-normal leading-[1.08] tracking-[0.48px] sm:text-[48px] md:text-[60px]">
              {item.title}
            </h1>
            <p className="mt-5 text-lg leading-[1.5] tracking-[0.48px] text-black/70 md:text-xl">
              {item.dek}
            </p>
            <NewsMeta item={item} readingTime={minutes} className="mt-6" />
            <div className="mt-5">
              <NewsShare title={item.title} pathname={pathname} />
            </div>
          </header>

          {/* Cover */}
          <figure className="mt-10 md:mt-14">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
              <Image
                src={item.cover}
                alt={item.coverAlt}
                fill
                priority
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover"
              />
            </div>
            {item.coverCaption && (
              <figcaption className="mt-3 text-sm tracking-[0.48px] text-black/55">
                {item.coverCaption}
              </figcaption>
            )}
          </figure>

          {/* Body with optional TOC + sticky share on lg */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,720px)_60px] lg:gap-16">
            {/* Left: TOC */}
            <div className="hidden lg:block">
              {toc.length >= 2 && <NewsTOC entries={toc} />}
            </div>

            {/* Center: content */}
            <div className="min-w-0">
              {toc.length >= 2 && (
                <div className="lg:hidden">
                  <NewsTOC entries={toc} />
                </div>
              )}

              <NewsBody blocks={item.body} />

              {item.source && item.sourceUrl && (
                <p className="mt-10 border-t border-black/10 pt-6 text-sm tracking-[0.48px] text-black/55">
                  Джерело:{" "}
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/80 underline-offset-4 transition-colors hover:text-[#AF5235] hover:underline"
                  >
                    {item.source} — читати оригінал ↗
                  </a>
                </p>
              )}

              <NewsCTA />

              <div className="mt-2">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 rounded-[50px] border border-black px-5 py-2.5 text-xs font-semibold tracking-[0.48px] text-black transition-colors hover:bg-black hover:text-white"
                >
                  <span aria-hidden>←</span> Назад до новин
                </Link>
              </div>
            </div>

            {/* Right: sticky share */}
            <aside className="hidden lg:block">
              <div className="sticky top-[100px]">
                <NewsShare
                  title={item.title}
                  pathname={pathname}
                  variant="column"
                />
              </div>
            </aside>
          </div>

          <NewsRelated items={related} />
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
