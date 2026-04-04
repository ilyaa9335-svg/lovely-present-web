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
    <div className="max-w-6xl mx-auto px-4 py-14">
      {/* Main product section */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <div>
            <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] tracking-wide">
              {product.name[lang]}
            </h1>
          </div>

          <p className="text-3xl font-bold text-[var(--color-gold)]">
            {product.price} Kc
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            {product.description[lang]}
          </p>

          {/* Quantity selector */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-navy)] mb-3 tracking-wide">
              {t.product.quantity}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-full border-2 border-[var(--color-pink-border)] flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-all duration-300 text-xl leading-none font-medium cursor-pointer bg-white"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 text-center text-lg font-semibold text-[var(--color-navy)]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-full border-2 border-[var(--color-pink-border)] flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-all duration-300 text-xl leading-none font-medium cursor-pointer bg-white"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-base hover:bg-[#d1177d] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            {t.product.addToCart}
          </button>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            You may also like
          </p>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-8 tracking-wide">
            {t.product.related}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p, i) => (
              <div
                key={p.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
