import Link from "next/link";
import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = getTranslations(lang);

  return (
    <section
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Lovely Present
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow">
          {t.hero.tagline}
        </p>
        <Link
          href={`/${lang}/shop`}
          className="mt-8 inline-block px-8 py-3 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          {t.hero.cta}
        </Link>
      </div>
    </section>
  );
}
