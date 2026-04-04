"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { products, categories } from "@/lib/products";
import { Category } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

function ShopContent() {
  const { t, lang } = useTranslation();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  // Sync with URL changes
  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setActiveCategory(cat);
  }, [searchParams]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === (activeCategory as Category));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page title */}
      <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
        Collection
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-8 tracking-wide">
        {t.shop.title}
      </h1>

      {/* Filter bar */}
      <div className="sticky top-18 z-20 bg-[var(--color-pink-light)]/95 backdrop-blur-sm -mx-4 px-4 py-3 border-b border-[var(--color-pink-border)] mb-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {/* All button */}
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-[var(--color-pink-brand)] text-white shadow-md"
                : "bg-white text-gray-700 border border-[var(--color-pink-border)] hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)]"
            }`}
          >
            {t.shop.all}
          </button>

          {/* Category buttons */}
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.slug
                  ? "bg-[var(--color-pink-brand)] text-white shadow-md"
                  : "bg-white text-gray-700 border border-[var(--color-pink-border)] hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)]"
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, i) => (
          <div
            key={product.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-serif">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-8 text-gray-400 font-serif">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
