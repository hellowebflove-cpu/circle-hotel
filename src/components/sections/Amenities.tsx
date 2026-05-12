const groups = [
  {
    title: "Комфорт і безпека",
    items: [
      "Вхідні двері з картковим доступом — зручно та безпечно.",
      "Клімат-контроль підтримує комфортну температуру у будь-яку пору року.",
      "Алюмінієві енергозберігаючі панорамні вікна пропускають максимум світла, забезпечуючи затишок і приватність.",
    ],
  },
  {
    title: "Затишок і атмосфера",
    items: [
      "Зона релаксу з м'якими меблями — простір для тиші чи спілкування.",
      "Освітлення має режими для роботи, відпочинку або вечора.",
      "Автоматизовані штори дозволяють швидко змінити атмосферу приміщення.",
      "Водонагрівач забезпечує постійний доступ до гарячої води.",
    ],
  },
];

export default function Amenities() {
  return (
    <section data-theme="light" className="bg-white py-20 text-black md:py-[100px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="text-base tracking-[0.48px] text-black/60">
          Начинка
        </p>
        <h2 className="mt-3 font-sans text-[40px] font-normal leading-[1.05] tracking-[0.48px] sm:text-[56px] md:text-[64px]">
          Комплектація та{" "}
          <span className="font-serif italic">зручності</span>
        </h2>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-black/80">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 text-base leading-[1.5] tracking-[0.48px] text-black/75 md:text-lg"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.7em] h-[6px] w-[6px] rounded-full bg-[#AF5235]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
