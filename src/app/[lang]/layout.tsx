import { ReactNode } from "react";
import { Lang } from "@/lib/types";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartPanel from "@/components/CartPanel";

const LANGS: Lang[] = ["cz", "en", "ua", "ru"];

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (langParam as Lang) || "cz";

  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
      <CartPanel />
    </CartProvider>
  );
}
