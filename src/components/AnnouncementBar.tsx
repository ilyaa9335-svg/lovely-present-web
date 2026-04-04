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
    <div className="bg-[var(--color-navy)] text-white text-center text-xs py-2.5 px-4 font-medium tracking-[0.15em] uppercase">
      <span className="inline-flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[var(--color-pink-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {text}
      </span>
    </div>
  );
}
