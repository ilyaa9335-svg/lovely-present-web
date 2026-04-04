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
    <section className="relative bg-[var(--color-pink-light)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div>
              <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                Prague Flower Studio
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-navy)] leading-[1.1] tracking-tight">
                Lovely{" "}
                <span className="italic text-[var(--color-pink-brand)]">Present</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              {t.hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
              <Link
                href={`/${lang}/shop`}
                className="inline-block px-8 py-3.5 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-base hover:bg-[#d1177d] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {t.hero.cta}
              </Link>

              {/* Wolt rating badge */}
              <div className="flex items-center gap-2 bg-white border border-[var(--color-pink-border)] rounded-full px-4 py-2.5 shadow-sm">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold text-[var(--color-navy)] text-sm">9.2</span>
                <span className="text-gray-500 text-xs">on Wolt</span>
              </div>
            </div>
          </div>

          {/* Right: Overlapping image cards */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem]">
              {/* Back card - rotated */}
              <div className="absolute -left-6 top-6 w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg rotate-[-6deg] border-4 border-white">
                <Image
                  src="/images/products/dubai.jpg"
                  alt="Dubai bouquet"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              {/* Front card */}
              <div className="absolute right-0 top-0 w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-[3deg] border-4 border-white z-10">
                <Image
                  src="/images/products/gisele.jpg"
                  alt="Gisele bouquet"
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority
                />
              </div>
              {/* Small accent card */}
              <div className="absolute -bottom-4 left-4 w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden shadow-lg rotate-[-3deg] border-4 border-white z-20">
                <Image
                  src="/images/products/peonies-roses.jpg"
                  alt="Peonies and roses"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
