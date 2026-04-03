"use client";

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

  return (
    <div className="rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <Link href={`/${lang}/product/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="p-4">
        <Link href={`/${lang}/product/${product.slug}`}>
          <h3 className="font-serif text-[var(--color-navy)] font-semibold text-base leading-tight hover:text-[var(--color-pink-brand)] transition-colors">
            {product.name[lang]}
          </h3>
        </Link>
        <p className="font-bold text-[var(--color-navy)] mt-1">
          {product.price} Kč
        </p>
        <button
          onClick={() => addItem(product)}
          className="mt-3 w-full py-2 rounded-full bg-[var(--color-pink-brand)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          {t.shop.addToCart}
        </button>
      </div>
    </div>
  );
}
