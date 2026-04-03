"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, lang } = useTranslation();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products: same category, fill with others if < 4
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.id !== product.id
  );
  const related = [...sameCategory, ...others].slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Main product section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src={product.image}
              alt={product.name[lang]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h1 className="font-serif text-3xl font-bold text-[var(--color-navy)]">
            {product.name[lang]}
          </h1>

          <p className="text-3xl font-bold text-[var(--color-pink-brand)]">
            {product.price} Kč
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            {product.description[lang]}
          </p>

          {/* Quantity selector */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-navy)] mb-2">
              {t.product.quantity}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors text-xl leading-none font-medium"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-lg font-semibold text-[var(--color-navy)]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors text-xl leading-none font-medium"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-md"
          >
            {t.product.addToCart}
          </button>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-6">
            {t.product.related}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
