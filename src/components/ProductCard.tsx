"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "@/hooks/useTranslation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { t, lang } = useTranslation();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="rounded-2xl border border-[var(--color-pink-border)] bg-[var(--color-card)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      <Link href={`/${lang}/product/${product.slug}`} className="block relative aspect-square overflow-hidden cursor-pointer">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="p-5">
        <Link href={`/${lang}/product/${product.slug}`} className="cursor-pointer">
          <h3 className="font-serif text-[var(--color-navy)] font-semibold text-base leading-tight hover:text-[var(--color-pink-brand)] transition-colors duration-300 tracking-wide">
            {product.name[lang]}
          </h3>
        </Link>
        <p className="font-bold text-[var(--color-gold)] mt-1.5 text-lg tracking-tight">
          {product.price.toLocaleString()} Kč
        </p>
        <button
          onClick={handleAdd}
          className={`mt-4 w-full py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
            added
              ? "border-green-500 bg-green-500 text-white"
              : "border-[var(--color-pink-brand)] text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-brand)] hover:text-white"
          }`}
        >
          {added ? "✓ Added!" : t.shop.addToCart}
        </button>
      </div>
    </div>
  );
}
