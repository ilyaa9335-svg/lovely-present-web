"use client";

import { useTranslation } from "@/hooks/useTranslation";

const announcements = {
  cz: "Doprava zdarma u objednavek nad 2000 Kc",
  en: "Free delivery on orders over 2000 Kc",
  ua: "Bezkoshtovna dostavka vid 2000 Kc",
  ru: "Besplatnaya dostavka ot 2000 Kc",
};

export default function AnnouncementBar() {
  const { lang } = useTranslation();
  const text = announcements[lang] || announcements.cz;

  return (
    <div className="bg-[var(--color-pink-brand)] text-white text-center text-xs sm:text-sm py-1.5 px-4 font-medium tracking-wide">
      {text}
    </div>
  );
}
