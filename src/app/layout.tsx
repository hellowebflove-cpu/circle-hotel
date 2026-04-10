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
  metadataBase: new URL("https://circle-hotel-iota.vercel.app"),
  title: "Circle Hotel — Апарт-готель у Києві",
  description:
    "Стань співвласником найбільшого готелю у Києві. Купи номер та здай нам в оренду. Гарантований прибуток до 10.5%",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    title: "Circle Hotel — Апарт-готель у Києві",
    description:
      "Стань співвласником найбільшого готелю у Києві. Гарантований прибуток до 10.5%",
    siteName: "Circle Hotel",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Circle Hotel — найбільший апарт-готель у Києві",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circle Hotel — Апарт-готель у Києві",
    description:
      "Стань співвласником найбільшого готелю у Києві. Гарантований прибуток до 10.5%",
    images: ["/images/og-image.jpg"],
  },
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
