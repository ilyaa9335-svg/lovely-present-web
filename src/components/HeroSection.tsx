import Link from "next/link";
import Image from "next/image";
import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = getTranslations(lang);

  return (
    <section className="relative h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden">
      {/* Background image using next/image for optimization */}
      <Image
        src="/images/hero.jpg"
        alt="Lovely Present flowers"
        fill
        className="object-cover"
        sizes="100vw"
        priority
        quality={90}
      />

      {/* Elegant gradient overlay - darker at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/65" />

      {/* Subtle backdrop blur layer at the bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[2px]" />

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
