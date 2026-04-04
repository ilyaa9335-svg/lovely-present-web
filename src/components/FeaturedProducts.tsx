import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  lang: Lang;
}

export default function FeaturedProducts({ lang }: FeaturedProductsProps) {
  const t = getTranslations(lang);
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-10 px-4 bg-[var(--color-muted)]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
          Curated for you
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-navy)] text-center mb-6 tracking-wide">
          {t.home.featured}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
