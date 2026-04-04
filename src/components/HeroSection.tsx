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
      {/* Decorative background circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-[var(--color-pink-brand)]/5" />
      <div className="absolute bottom-[-60px] left-[20%] w-[200px] h-[200px] rounded-full bg-[var(--color-pink-brand)]/5" />
      <div className="absolute top-[40%] left-[45%] w-[120px] h-[120px] rounded-full bg-[var(--color-gold)]/5" />

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          {/* Left: Text content - takes 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-5 text-center md:text-left">
            <div>
              <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                Prague Flower Studio
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-[var(--color-navy)] leading-[1.1] tracking-tight">
                Lovely{" "}
                <span className="italic text-[var(--color-pink-brand)]">Present</span>
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t.hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 md:justify-start justify-center">
              <Link
                href={`/${lang}/shop`}
                className="inline-block px-8 py-3.5 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-base hover:bg-[#d1177d] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {t.hero.cta}
              </Link>
              <div className="flex items-center gap-2 bg-white border border-[var(--color-pink-border)] rounded-full px-4 py-2.5 shadow-sm">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold text-[var(--color-navy)] text-sm">9.2</span>
                <span className="text-gray-500 text-xs">on Wolt</span>
              </div>
            </div>

            {/* Quick stats row */}
            <div className="flex items-center gap-6 mt-2 justify-center md:justify-start">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[var(--color-navy)]">5k+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Followers</p>
              </div>
              <div className="w-px h-8 bg-[var(--color-pink-border)]" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[var(--color-navy)]">176</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Bouquets</p>
              </div>
              <div className="w-px h-8 bg-[var(--color-pink-border)]" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[var(--color-navy)]">7/7</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Open Daily</p>
              </div>
            </div>
          </div>

          {/* Right: 3-image collage filling the space - takes 3 cols */}
          <div className="md:col-span-3 grid grid-cols-2 gap-3">
            {/* Large main image */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4]">
              <Image
                src="/images/products/gisele.jpg"
                alt="Gisele bouquet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 35vw"
                priority
              />
            </div>
            {/* Top right image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-square">
              <Image
                src="/images/products/dubai.jpg"
                alt="Dubai bouquet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            {/* Bottom right image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-square">
              <Image
                src="/images/products/sweet-love.jpg"
                alt="Sweet Love bouquet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
