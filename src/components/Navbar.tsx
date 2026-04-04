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
      <header className="sticky top-0 z-30 bg-[#FDF2F8]/95 backdrop-blur-md border-b border-[var(--color-pink-border)] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between gap-3">
          {/* Left: Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Lovely Present logo"
              width={48}
              height={48}
              className="rounded-full object-cover ring-2 ring-[var(--color-pink-border)]"
              priority
            />
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-[var(--color-navy)] text-xl tracking-wide leading-tight block">
                Lovely Present
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-medium">
                Prague Flower Studio
              </span>
            </div>
          </Link>

          {/* Center: Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={`/${lang}`}
              className="px-5 py-2 rounded-full text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-all duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={`/${lang}/shop`}
              className="px-5 py-2 rounded-full text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-all duration-300 cursor-pointer"
            >
              {t.nav.shop}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="px-5 py-2 rounded-full text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-all duration-300 cursor-pointer"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-5 py-2 rounded-full text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-light)] transition-all duration-300 cursor-pointer"
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
              className="md:hidden p-2 rounded-lg hover:bg-[var(--color-pink-light)] transition-colors duration-300 cursor-pointer"
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
