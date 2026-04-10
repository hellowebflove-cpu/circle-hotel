import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Investment from "@/components/sections/Investment";
import FloatingPhone from "@/components/ui/FloatingPhone";

export const metadata: Metadata = {
  title: "Інвестиції — Circle Hotel",
  description:
    "Обери тип номеру і подивись скільки можна заробити на оренді в Circle Hotel.",
};

export default function InvestPage() {
  return (
    <>
      <Header />
      <main>
        <Investment />
      </main>
      <FloatingPhone />
    </>
  );
}
