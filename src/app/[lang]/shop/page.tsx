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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
        {t.shop.title}
      </h1>

      {/* Filter bar */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-sm -mx-4 px-4 py-3 border-b border-gray-100 shadow-sm mb-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {/* All button */}
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-[var(--color-pink-brand)] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-[var(--color-pink-light)] hover:text-[var(--color-pink-brand)]"
            }`}
          >
            {t.shop.all}
          </button>

          {/* Category buttons */}
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.slug
                  ? "bg-[var(--color-pink-brand)] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-[var(--color-pink-light)] hover:text-[var(--color-pink-brand)]"
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-8 text-gray-400">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
