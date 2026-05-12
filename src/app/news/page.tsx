import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import NewsBreadcrumbs from "@/components/news/NewsBreadcrumbs";
import NewsGrid from "@/components/news/NewsGrid";
import { getAllNewsSorted, getUsedCategories } from "@/data/news";

export const metadata: Metadata = {
  title: "Новини проєкту — Circle Hotel",
  description:
    "Що пишуть про Circle Hotel у ЗМІ, прес-релізи, апдейти будівництва та події проєкту.",
  openGraph: {
    title: "Новини проєкту — Circle Hotel",
    description:
      "Публікації у ЗМІ, прес-релізи та апдейти Circle Hotel.",
    type: "website",
    url: "/news",
  },
};

export default function NewsListPage() {
  const items = getAllNewsSorted();
  const available = getUsedCategories();

  return (
    <>
      <Header />
      <main
        data-theme="light"
        className="bg-white pt-[120px] pb-24 text-black md:pt-[140px] md:pb-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <NewsBreadcrumbs
            trail={[
              { label: "Головна", href: "/" },
              { label: "Новини" },
            ]}
          />

          <div className="mt-8 max-w-[820px]">
            <p className="text-base tracking-[0.48px] text-black/60">
              Журнал
            </p>
            <h1 className="mt-3 font-sans text-[44px] font-normal leading-[1.05] tracking-[0.48px] sm:text-[64px] md:text-[80px]">
              Новини{" "}
              <span className="font-serif italic">проєкту</span>
            </h1>
            <p className="mt-5 text-base leading-[1.5] tracking-[0.48px] text-black/65 md:text-lg">
              Що пишуть про Circle Hotel, як рухається будівництво і чим живе
              команда.
            </p>
          </div>

          <div className="mt-10 md:mt-14">
            <NewsGrid initial={items} available={available} />
          </div>
        </div>
      </main>
    </>
  );
}
