import type { Metadata } from "next";
import { TikTok_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sans = TikTok_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "600"],
});

const serif = localFont({
  src: "../../public/fonts/Mary.otf",
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Circle Hotel — Апарт-готель у Києві",
  description:
    "Стань співвласником найбільшого готелю у Києві. Купи номер та здай нам в оренду. Гарантований прибуток до 10.5%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
