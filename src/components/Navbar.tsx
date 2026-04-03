"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import CartIcon from "./CartIcon";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { t, lang } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lovely Present logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
            <span className="hidden sm:block font-serif font-bold text-[var(--color-navy)] text-lg leading-tight">
              Lovely Present
            </span>
          </Link>

          {/* Center: Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={`/${lang}/shop`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-colors"
            >
              {t.nav.shop}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right: Language switcher (desktop) + Cart + Hamburger (mobile) */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <CartIcon />
            {/* Hamburger - mobile only */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-5 h-5 text-[var(--color-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
