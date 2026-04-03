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
    <section className="py-12 px-4 bg-[var(--color-pink-light)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-navy)] text-center mb-8">
          {t.home.featured}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
