import Link from "next/link";

export default function NewsCTA() {
  return (
    <div className="my-12 border border-black/10 px-6 py-8 md:px-10 md:py-10">
      <p className="font-sans text-xl font-normal leading-[1.2] tracking-[0.48px] md:text-2xl">
        Розглядаєте Circle Hotel як інвестицію?
      </p>
      <p className="mt-3 max-w-[520px] text-base leading-[1.55] tracking-[0.48px] text-black/65 md:text-lg">
        Залиште заявку — менеджер підбере номер під ваш бюджет і покаже актуальну
        фінансову модель.
      </p>
      <Link
        href="/invest"
        className="mt-6 inline-flex items-center justify-center rounded-[50px] bg-[#AF5235] px-7 py-3 text-sm font-semibold tracking-[0.48px] text-white transition-colors duration-200 hover:bg-[#9A4730] md:text-base"
      >
        Залишити заявку
      </Link>
    </div>
  );
}
