"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const apartments = [
  {
    id: "solo",
    name: "Solo 18",
    area: "18,26 м²",
    pricePerM2: "3 536",
    priceUnit: "64 559",
    yield: "8,05",
    incomeYear: "5 198",
    income10y: "51 975",
    priceIn10y: "90 383",
    totalProfit: "142 358",
    images: [
      "/images/hero-bg.jpg",
      "/images/hero-bg.jpg",
    ],
    description: "Компактний номер для одного — ідеальна інвестиція з низьким порогом входу",
  },
  {
    id: "sidebyside",
    name: "Side by Side 25",
    area: "25,69 м²",
    pricePerM2: "3 152",
    priceUnit: "80 966",
    yield: "9,03",
    incomeYear: "7 312",
    income10y: "73 124",
    priceIn10y: "113 352",
    totalProfit: "186 476",
    images: [
      "/images/hero-bg.jpg",
      "/images/hero-bg.jpg",
    ],
    description: "Простір для двох з окремими зонами — оптимальний баланс ціни та дохідності",
  },
  {
    id: "studio",
    name: "Studio 35",
    area: "35,75 м²",
    pricePerM2: "2 904",
    priceUnit: "103 812",
    yield: "9,80",
    incomeYear: "10 176",
    income10y: "101 759",
    priceIn10y: "145 337",
    totalProfit: "247 096",
    images: [
      "/images/hero-bg.jpg",
      "/images/hero-bg.jpg",
    ],
    description: "Повноцінна студія з кухнею — найпопулярніший формат серед гостей",
  },
  {
    id: "extravagant",
    name: "Extravagant 58",
    area: "58,62 м²",
    pricePerM2: "2 723",
    priceUnit: "159 629",
    yield: "10,45",
    incomeYear: "16 686",
    income10y: "166 856",
    priceIn10y: "223 481",
    totalProfit: "390 337",
    images: [
      "/images/hero-bg.jpg",
      "/images/hero-bg.jpg",
    ],
    description: "Преміальний апартамент з максимальною дохідністю та простором",
  },
];

export default function Investment() {
  const [active, setActive] = useState(0);
  const apt = apartments[active];

  return (
    <section data-theme="light" className="bg-white py-20 text-black md:py-[100px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section header */}
        <p className="text-base tracking-[0.48px] text-black/60">
          Інвестиції
        </p>
        <h2 className="mt-3 font-sans text-[40px] font-normal leading-[1.05] tracking-[0.48px] sm:text-[56px] md:text-[64px]">
          Скільки я{" "}
          <span className="font-serif italic">заробю?</span>
        </h2>

        {/* Apartment type tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {apartments.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-[50px] px-5 py-2.5 text-sm font-semibold tracking-[0.48px] transition-colors duration-200 md:text-base ${
                active === i
                  ? "bg-black text-white"
                  : "border border-black/20 text-black/70 hover:border-black/50 hover:text-black"
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>

        {/* Card content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — Photo slider */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-none">
            <Swiper
              key={apt.id}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-full w-full investment-swiper"
            >
              {apt.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-full w-full">
                    <Image
                      src={img}
                      alt={`${apt.name} — фото ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right — Financial info */}
          <div className="flex flex-col justify-between">
            {/* Top: name + description */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <h3 className="font-sans text-[32px] font-normal leading-[1.1] tracking-[0.48px] md:text-[40px]">
                  {apt.name}
                </h3>
                <span className="font-serif italic text-[26px] leading-[1] text-[#AF5235] md:text-[32px]">
                  {apt.area}
                </span>
              </div>
              <p className="mt-4 max-w-[440px] text-base leading-[1.5] tracking-[0.48px] text-black/60">
                {apt.description}
              </p>
            </div>

            {/* Accent: total profit */}
            <div className="mt-8 border-t border-black/10 pt-8">
              <p className="text-sm tracking-[0.48px] text-black/50">
                Загальний прибуток за 10 років
              </p>
              <p className="mt-2 font-sans text-[48px] font-normal leading-[1] tracking-[0.48px] text-[#AF5235] md:text-[56px]">
                {apt.totalProfit}$
              </p>
            </div>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm tracking-[0.48px] text-black/50">
                  Ціна юніту
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[0.48px] md:text-2xl">
                  {apt.priceUnit}$
                </p>
              </div>
              <div>
                <p className="text-sm tracking-[0.48px] text-black/50">
                  Дохідність
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[0.48px] md:text-2xl">
                  {apt.yield}%
                </p>
              </div>
              <div>
                <p className="text-sm tracking-[0.48px] text-black/50">
                  Дохід на рік
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[0.48px] md:text-2xl">
                  {apt.incomeYear}$
                </p>
              </div>
              <div>
                <p className="text-sm tracking-[0.48px] text-black/50">
                  Ціна / м²
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[0.48px] md:text-2xl">
                  {apt.pricePerM2}$
                </p>
              </div>
              <div>
                <p className="text-sm tracking-[0.48px] text-black/50">
                  Дохід за 10 років
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[0.48px] md:text-2xl">
                  {apt.income10y}$
                </p>
              </div>
              <div>
                <p className="text-sm tracking-[0.48px] text-black/50">
                  Вартість через 10 років
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[0.48px] md:text-2xl">
                  {apt.priceIn10y}$
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/invest"
              className="mt-10 inline-flex w-full items-center justify-center rounded-[50px] bg-[#AF5235] px-14 py-4 text-lg font-semibold tracking-[0.48px] text-white transition-colors duration-200 hover:bg-[#9A4730] sm:w-auto sm:self-start md:text-xl"
            >
              Обрати цей номер
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
