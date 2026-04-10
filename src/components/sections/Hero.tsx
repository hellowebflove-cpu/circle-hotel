import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Circle Hotel — архітектурний рендер будівлі"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — lighter to show building */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-12 pt-[75px] md:px-10 md:pb-20">
        {/* Main content — centered */}
        <div className="flex flex-1 flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-[780px] font-sans text-[36px] font-normal leading-[1.05] tracking-[0.48px] sm:text-[48px] md:text-[60px] lg:text-[68px]">
            Стань співвласником
            <br />
            <span className="font-serif italic">найбільшого</span>{" "}
            готелю у Києві
          </h1>

          <p className="mt-6 max-w-[600px] text-base font-normal leading-[1.4] tracking-[0.48px] text-white/80 sm:text-lg md:text-xl">
            Купи номер та здай нам в оренду
          </p>

          <p className="mt-4 rounded-[50px] border border-white/25 px-6 py-2.5 text-sm font-semibold tracking-[0.48px] text-white/90 md:text-base">
            Гарантований прибуток до 10.5%
          </p>

          <a
            href="/invest"
            className="mt-10 inline-flex items-center justify-center rounded-[50px] bg-[#AF5235] px-14 py-4 text-lg font-semibold tracking-[0.48px] text-white transition-colors duration-200 hover:bg-[#9A4730] md:text-2xl"
          >
            Інвестувати
          </a>
        </div>

        {/* Partner logos — bottom */}
        <div className="mt-12 flex items-center justify-center gap-12 md:mt-16">
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
