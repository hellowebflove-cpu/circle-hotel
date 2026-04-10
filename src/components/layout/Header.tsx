"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HEADER_HEIGHT = 75;

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-theme="light"]');
    if (sections.length === 0) return;

    let raf = 0;
    const check = () => {
      const overlap = Array.from(sections).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < HEADER_HEIGHT && r.bottom > 0;
      });
      setIsDark(overlap);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        check();
        raf = 0;
      });
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[75px] flex items-center justify-between px-6 md:px-10">
      <Link href="/">
        <Image
          src="/images/circle-logo-white.svg"
          alt="Circle"
          width={153}
          height={45}
          style={{ width: "auto" }}
          className={`h-6 md:h-[30px] transition-[filter] duration-300 ${
            isDark ? "brightness-0" : ""
          }`}
          priority
        />
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          href="/invest"
          className={`rounded-[50px] px-5 py-2 text-xs font-semibold tracking-[0.48px] transition-colors duration-300 ${
            isDark
              ? "bg-black text-white hover:bg-black/90"
              : "bg-white text-black hover:bg-white/90"
          }`}
        >
          Інвестувати
        </Link>
        <button
          className="flex flex-col gap-[5px] cursor-pointer"
          aria-label="Відкрити меню"
        >
          <span
            className={`w-6 h-[2px] transition-colors duration-300 ${
              isDark ? "bg-black" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-[2px] transition-colors duration-300 ${
              isDark ? "bg-black" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-[2px] transition-colors duration-300 ${
              isDark ? "bg-black" : "bg-white"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
