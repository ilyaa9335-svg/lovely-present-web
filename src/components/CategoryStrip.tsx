import Image from "next/image";
import Link from "next/link";
import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";
import { categories, products } from "@/lib/products";

interface CategoryStripProps {
  lang: Lang;
}

// Pick a representative product image for each category
function getCategoryImage(slug: string): string {
  const product = products.find((p) => p.category === slug);
  return product?.image ?? "/images/products/cutie.jpg";
}

export default function CategoryStrip({ lang }: CategoryStripProps) {
  const t = getTranslations(lang);

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
          Browse
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-navy)] text-center mb-6 tracking-wide">
          {t.home.categories}
        </h2>
        <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${lang}/shop?category=${cat.slug}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative w-36 h-44 md:w-40 md:h-52 rounded-2xl overflow-hidden shadow-sm border border-[var(--color-pink-border)] group-hover:shadow-lg group-hover:border-[var(--color-pink-brand)]/40 transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={getCategoryImage(cat.slug)}
                  alt={cat.label[lang]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="160px"
                />
                {/* Gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-white font-serif font-semibold text-sm tracking-wide drop-shadow-md">
                    {cat.label[lang]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
