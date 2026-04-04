"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Lang } from "@/lib/types";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "cz", label: "CZ" },
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" },
  { code: "ru", label: "RU" },
];

export default function LanguageSwitcher({ dropUp = false }: { dropUp?: boolean }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = (params?.lang as Lang) || "cz";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLanguage(lang: Lang) {
    setOpen(false);
    // Replace the lang segment in the pathname
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is the lang code
    segments[1] = lang;
    router.push(segments.join("/"));
  }

  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className={`absolute right-0 w-20 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 ${dropUp ? "bottom-full mb-1" : "mt-1"}`}
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                role="option"
                aria-selected={lang.code === currentLang}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-[var(--color-pink-light)] transition-colors ${
                  lang.code === currentLang
                    ? "text-[var(--color-pink-brand)] font-semibold bg-[var(--color-pink-light)]"
                    : "text-gray-700"
                }`}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
