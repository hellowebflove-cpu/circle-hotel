import { slugify } from "@/lib/slugify";

export type NewsCategory =
  | "media"
  | "press"
  | "investment"
  | "events"
  | "construction";

export const CATEGORY_LABELS: Record<NewsCategory, string> = {
  media: "ЗМІ про нас",
  press: "Прес-реліз",
  investment: "Інвестиції",
  events: "Події",
  construction: "Будівництво",
};

export type NewsBlock =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "pullquote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "gallery";
      images: { src: string; alt: string; caption?: string }[];
    };

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  title: string;
  dek: string;
  excerpt: string;
  source?: string;
  sourceUrl?: string;
  date: string; // ISO YYYY-MM-DD
  cover: string;
  coverAlt: string;
  coverCaption?: string;
  body: NewsBlock[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "forbes-pro-circle-hotel",
    category: "media",
    title: "Forbes Ukraine: Circle Hotel — нова модель власності у столиці",
    dek: "Як апарт-готель у форматі fractional ownership пропонує співвласникам прибуток до 10,5% без операційних турбот.",
    excerpt:
      "Forbes досліджує модель Circle Hotel: інвестор купує номер, готель здає його в оренду, дохід ділиться щомісяця.",
    source: "Forbes Ukraine",
    sourceUrl: "https://forbes.ua/",
    date: "2026-04-22",
    cover: "/images/ambiance/desktop/architecture/architecture-1.webp",
    coverAlt: "Архітектура Circle Hotel",
    coverCaption: "Візуалізація фасаду Circle Hotel у Києві",
    body: [
      {
        type: "lead",
        text: "Український ринок гостинності змінюється: професійне управління готелем поєднується з приватним правом власності. Circle Hotel пропонує інвестору купити окремий номер і отримувати дохід від оренди — без необхідності самостійно займатися гостями, прибиранням чи бронюваннями.",
      },
      {
        type: "h2",
        text: "Що таке модель Circle",
      },
      {
        type: "p",
        text: "Це апарт-готель, у якому **кожен номер має свого власника**. Готель централізовано приймає гостей, обслуговує локацію та розподіляє дохід між власниками номерів за прозорою формулою. Така модель давно популярна у країнах Альпійського регіону та в США (Marriott Residences, Aman Residences), а в Україні стає окремою категорією інвестицій.",
      },
      {
        type: "p",
        text: "За оцінками *Forbes Ukraine*, Circle Hotel — один із перших проєктів у Києві, який пропонує таку модель у форматі повністю керованого готелю, а не приватної здачі квартир.",
      },
      {
        type: "image",
        src: "/images/ambiance/desktop/lobby/lobby-1.webp",
        alt: "Лобі Circle Hotel",
        caption: "Лобі готелю — спільний простір для гостей та власників.",
      },
      {
        type: "h2",
        text: "Цифри проєкту",
      },
      {
        type: "ul",
        items: [
          "4 типи номерів: Solo 18, Side by Side 25, Studio 35, Extravagant 58",
          "Прогнозована дохідність — від 8,05% до 10,45% річних",
          "Загальний дохід власника за 10 років — до $390 000",
          "Гарантоване професійне управління готелем",
        ],
      },
      {
        type: "h3",
        text: "Як рахується дохід",
      },
      {
        type: "p",
        text: "Готель формує загальний пул виручки, віднімає операційні витрати та податки, а решту розподіляє між власниками номерів пропорційно до площі і категорії юніту. Звіт надсилається власнику щомісяця.",
      },
      {
        type: "pullquote",
        text: "Це не «здати квартиру в подобову оренду». Це частка у працюючому готельному бізнесі, з контрактом і прозорою фінансовою моделлю.",
      },
      {
        type: "h2",
        text: "Хто інвестує у Circle",
      },
      {
        type: "p",
        text: "За даними команди проєкту, серед перших інвесторів — представники українського IT-сектору, медичні підприємці та родини, що раніше тримали гроші в депозитах. Середній чек — від $65 000 (Solo 18) до $160 000 (Extravagant 58).",
      },
      {
        type: "quote",
        text: "Власник Circle Hotel — це не лендлорд, а партнер готельного оператора. Ми робимо все, щоб номер працював, він — отримує дохід.",
        author: "Команда Circle Hotel",
      },
      {
        type: "h2",
        text: "Атмосфера готелю",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/ambiance/desktop/bedroom/bedroom-1.webp",
            alt: "Спальня апартаменту Circle Hotel",
            caption: "Спальня у форматі Studio 35.",
          },
          {
            src: "/images/ambiance/desktop/bath/bath-1.webp",
            alt: "Ванна кімната Circle Hotel",
            caption: "Ванна кімната з душовою системою.",
          },
          {
            src: "/images/ambiance/desktop/kitchen/kitchen-1.webp",
            alt: "Кухня апартаменту Circle Hotel",
            caption: "Облаштована кухонна зона.",
          },
          {
            src: "/images/ambiance/desktop/lobby/lobby-3.webp",
            alt: "Лобі Circle Hotel",
            caption: "Лобі — спільний простір для гостей і власників.",
          },
        ],
      },
      {
        type: "h2",
        text: "Що далі",
      },
      {
        type: "p",
        text: "Перший корпус готелю планується ввести в експлуатацію у 2027 році. На етапі будівництва ціна за квадратний метр нижча — від $2 723. Команда проєкту прогнозує зростання вартості метра після введення в експлуатацію щонайменше на 40%.",
      },
    ],
  },
  {
    slug: "circle-hotel-bgv-spivpratsya",
    category: "press",
    title: "Circle Hotel і BGV: новий етап партнерства",
    dek: "SAGA Development та BGV оголошують про спільну реалізацію Circle Hotel — апарт-готелю на 1 200+ номерів у Києві.",
    excerpt:
      "Поєднання девелоперської експертизи SAGA та інвестиційного капіталу BGV — фундамент для нового стандарту гостинності.",
    date: "2026-03-15",
    cover: "/images/ambiance/desktop/architecture/architecture-3.webp",
    coverAlt: "Архітектура Circle Hotel",
    body: [
      {
        type: "lead",
        text: "SAGA Development разом із BGV оголошують про спільне партнерство у проєкті Circle Hotel — наймасштабнішому апарт-готелі бізнес-класу в історії Києва.",
      },
      {
        type: "h2",
        text: "Концепція проєкту",
      },
      {
        type: "p",
        text: "Circle Hotel — це сучасний апарт-готель у форматі співвласності, що поєднує виразну архітектуру, продуману внутрішню логістику та якісне готельне обслуговування. Проєкт відповідає міжнародним стандартам гостинності та формує нову якість житлово-готельної інфраструктури столиці.",
      },
      {
        type: "p",
        text: "Архітектурне рішення — стримана пластика фасадів, панорамне скління та озеленені тераси. Громадські простори — лобі, ко-воркінг, кафе, лаунж-зона на даху — спроєктовані як точки тяжіння для мешканців кварталу.",
      },
      {
        type: "image",
        src: "/images/ambiance/desktop/lobby/lobby-5.webp",
        alt: "Громадський простір Circle Hotel",
        caption: "Громадські простори — серце готелю.",
      },
      {
        type: "h2",
        text: "Партнерство",
      },
      {
        type: "p",
        text: "BGV виступає інвестиційним партнером проєкту. Об'єднання девелоперської експертизи SAGA та інвестиційно-управлінських компетенцій BGV створює підґрунтя для реалізації проєктів нової якості — таких, що відповідають сучасним вимогам міського розвитку.",
      },
      {
        type: "quote",
        text: "Попри загальне сповільнення темпів нового будівництва в Україні, ми вважаємо Circle Hotel символом відновлення галузі та віри у розвиток столиці.",
        author: "Команда SAGA Development",
      },
      {
        type: "h2",
        text: "Дорожня карта",
      },
      {
        type: "ul",
        items: [
          "2026: завершення проєктування та старт продажів першого корпусу",
          "2027: введення першого корпусу в експлуатацію",
          "2028: запуск керуючої компанії та початок виплат власникам",
        ],
      },
    ],
  },
  {
    slug: "finalna-stadiya-circle-hotel",
    category: "construction",
    title: "Фінальна стадія будівництва першого корпусу",
    dek: "Завершуємо конструктив першого корпусу — введення в експлуатацію за графіком.",
    excerpt:
      "Залишилось менше ніж пів року до введення першого корпусу. Доступні номери — за стартовою ціною етапу будівництва.",
    date: "2026-02-04",
    cover: "/images/ambiance/desktop/architecture/architecture-5.webp",
    coverAlt: "Будівельний майданчик Circle Hotel",
    body: [
      {
        type: "lead",
        text: "На майданчику Circle Hotel завершується конструктив першого корпусу. Введення в експлуатацію заплановане за графіком — менш ніж через шість місяців.",
      },
      {
        type: "p",
        text: "На цей момент доступні **усі чотири формати** номерів — від Solo 18 до Extravagant 58. Стартова ціна за метр на етапі будівництва — $2 723. Після введення в експлуатацію ціна зросте.",
      },
      {
        type: "p",
        text: "Для покупців на цьому етапі діє розстрочка на 24 місяці без подорожчання. Військовослужбовцям, родинам із дітьми та внутрішньо переміщеним особам — додаткова знижка до 10%.",
      },
      {
        type: "p",
        text: "Залишити заявку або отримати консультацію щодо доступних номерів можна на сторінці [Інвестувати](/invest).",
      },
    ],
  },
  {
    slug: "grafik-roboty-vidnesno-svyat",
    category: "events",
    title: "Графік роботи відділу продажу у святковий період",
    dek: "Як зв'язатися з командою Circle Hotel під час травневих свят.",
    excerpt:
      "Відділ продажу працює у скороченому режимі з 1 по 9 травня. Заявки приймаємо онлайн без перерви.",
    date: "2026-04-28",
    cover: "/images/ambiance/desktop/lobby/lobby-7.webp",
    coverAlt: "Інтер'єр Circle Hotel",
    body: [
      {
        type: "lead",
        text: "Шановні інвестори, інформуємо про графік роботи команди Circle Hotel у святковий період.",
      },
      {
        type: "ul",
        items: [
          "1–2 травня — вихідні",
          "3–8 травня — робота у скороченому режимі, з 10:00 до 16:00",
          "9 травня — вихідний",
          "З 10 травня — звичайний графік",
        ],
      },
      {
        type: "p",
        text: "Заявки, залишені на сайті у будь-який час, отримують відповідь упродовж однієї робочої доби.",
      },
    ],
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}

export function getLatestNews(limit = 3, excludeSlug?: string): NewsItem[] {
  return [...newsItems]
    .filter((n) => n.slug !== excludeSlug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function getAllNewsSorted(): NewsItem[] {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsByCategory(
  cat: NewsCategory | "all",
): NewsItem[] {
  const all = getAllNewsSorted();
  return cat === "all" ? all : all.filter((n) => n.category === cat);
}

export function readingTimeMinutes(item: NewsItem): number {
  let words =
    item.title.split(/\s+/).length + item.dek.split(/\s+/).length;
  for (const block of item.body) {
    if ("text" in block) {
      words += block.text.split(/\s+/).length;
    } else if ("items" in block) {
      words += block.items.join(" ").split(/\s+/).length;
    } else if ("images" in block) {
      for (const img of block.images) {
        if (img.caption) words += img.caption.split(/\s+/).length;
      }
    }
  }
  return Math.max(1, Math.round(words / 180));
}

export type TocEntry = { id: string; text: string };

export function tableOfContents(item: NewsItem): TocEntry[] {
  return item.body
    .filter(
      (b): b is Extract<NewsBlock, { type: "h2" }> => b.type === "h2",
    )
    .map((b) => ({ id: b.id ?? slugify(b.text), text: b.text }));
}

export function formatNewsDate(iso: string): string {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function getUsedCategories(): NewsCategory[] {
  const set = new Set<NewsCategory>();
  for (const n of newsItems) set.add(n.category);
  return Array.from(set);
}
