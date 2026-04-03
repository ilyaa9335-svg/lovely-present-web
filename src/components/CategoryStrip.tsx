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
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-navy)] text-center mb-6">
          {t.home.categories}
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${lang}/shop?category=${cat.slug}`}
              className="flex-shrink-0 group flex flex-col items-center gap-2"
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={getCategoryImage(cat.slug)}
                  alt={cat.label[lang]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="96px"
                />
              </div>
              <span className="text-xs font-semibold text-[var(--color-navy)] text-center whitespace-nowrap group-hover:text-[var(--color-pink-brand)] transition-colors">
                {cat.label[lang]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
