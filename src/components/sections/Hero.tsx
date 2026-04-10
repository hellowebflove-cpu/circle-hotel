import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image — mobile */}
      <Image
        src="/images/hero-bg-mobile.png"
        alt="Circle Hotel — архітектурний рендер будівлі"
        fill
        priority
        className="object-cover object-center md:hidden"
        sizes="100vw"
      />
      {/* Background image — desktop */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="hidden object-cover object-center md:block"
        sizes="100vw"
      />

      {/* Hourglass gradient — dark top + dark bottom, transparent middle */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-black/70 via-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-[75px] md:px-10 md:pb-12">
        {/* Zone 1 — title, upper quarter */}
        <div className="mt-[6vh] text-center text-white md:mt-[8vh]">
          <h1 className="mx-auto max-w-[780px] font-sans text-[36px] font-normal leading-[1.05] tracking-[0.48px] sm:text-[48px] md:text-[60px] lg:text-[68px]">
            Стань співвласником
            <br />
            <span className="font-serif italic">найбільшого</span>{" "}
            готелю у Києві
          </h1>
        </div>

        {/* Spacer — building breathes */}
        <div className="flex-1" />

        {/* Zone 2 — subtitle + CTA, over stylobate */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="text-base leading-[1.6] text-white/85 sm:text-lg">
            <p>Купи номер та здай нам в оренду.</p>
            <p>
              Гарантований прибуток{" "}
              <span className="font-semibold text-white">до 10.5%</span>
            </p>
          </div>

          <a
            href="/invest"
            className="mt-6 inline-flex items-center justify-center rounded-[50px] bg-[#AF5235] px-9 py-2.5 text-sm font-semibold tracking-[0.48px] text-white transition-colors duration-200 hover:bg-[#9A4730] md:text-base"
          >
            Інвестувати
          </a>
        </div>

        {/* Zone 3 — partner logos */}
        <div className="mt-8 flex items-center justify-center gap-12 md:mt-10">
          <Image
            src="/images/saga-logo.png"
            alt="SAGA Development"
            width={160}
            height={50}
            className="h-10 w-auto object-contain opacity-70 md:h-12"
          />
          <Image
            src="/images/bgv-logo.png"
            alt="BGV Development"
            width={160}
            height={50}
            className="h-10 w-auto object-contain opacity-70 md:h-12"
          />
        </div>
      </div>
    </section>
  );
}
