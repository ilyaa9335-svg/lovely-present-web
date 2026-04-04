"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-serif font-bold text-[var(--color-navy)]">Lovely Present</span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-5 py-6 space-y-1">
          {[
            { href: `/${lang}`, label: t.nav.home },
            { href: `/${lang}/shop`, label: t.nav.shop },
            { href: `/${lang}/about`, label: t.nav.about },
            { href: `/${lang}/contact`, label: t.nav.contact },
            { href: `/${lang}/cart`, label: t.nav.cart },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="block px-4 py-3 rounded-xl text-[var(--color-navy)] font-medium hover:bg-[var(--color-pink-light)] hover:text-[var(--color-pink-brand)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Language switcher at bottom */}
        <div className="px-5 py-5 border-t border-gray-100">
          <LanguageSwitcher dropUp />
        </div>
      </div>
    </>
  );
}
