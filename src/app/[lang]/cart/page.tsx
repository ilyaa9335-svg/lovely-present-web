"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function CartPage() {
  const { items, removeItem, updateQuantity, deliveryMethod, setDeliveryMethod, subtotal, deliveryFee, total } = useCart();
  const { t, lang } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl md:text-4xl italic text-[var(--color-navy)] mb-10">
        {t.cart.title}
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <svg className="w-24 h-24 mx-auto text-gray-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p className="text-lg text-gray-400 font-serif mb-4">{t.cart.empty}</p>
          <Link href={`/${lang}/shop`} className="inline-block px-8 py-3 rounded-full bg-[var(--color-pink-brand)] text-white font-medium hover:bg-[#d1177d] transition-colors cursor-pointer">
            Browse Bouquets
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Cart items - 2 cols */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-gray-100">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-5 py-6">
                  {/* Product image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover" />
                  </div>

                  {/* Name + unit price */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/${lang}/product/${product.slug}`} className="font-serif text-lg italic text-[var(--color-navy)] hover:text-[var(--color-pink-brand)] transition-colors cursor-pointer">
                      {product.name[lang]}
                    </Link>
                    <p className="text-sm text-gray-500 mt-0.5">{product.price.toLocaleString()} Kč</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer text-lg"
                    >
                      −
                    </button>
                    <span className="w-10 h-10 flex items-center justify-center text-sm font-semibold text-[var(--color-navy)] border-x border-gray-200 bg-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Line total */}
                  <p className="font-semibold text-[var(--color-navy)] text-base md:text-lg min-w-[80px] text-right">
                    {(product.price * quantity).toLocaleString()} Kč
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-2 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Summary - 1 col */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
              <h2 className="font-serif text-xl italic text-[var(--color-navy)] mb-5 pb-4 border-b border-gray-100">
                {t.cart.title}
              </h2>

              <div className="space-y-3 text-base mb-5">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.cart.subtotal}</span>
                  <span className="font-medium text-[var(--color-navy)]">{subtotal.toLocaleString()} Kč</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.cart.delivery}</span>
                  <span className="text-gray-500">
                    {deliveryFee === 0 ? t.cart.free : <>{deliveryFee} Kč <span className="text-xs text-gray-400">(estimated)</span></>}
                  </span>
                </div>
              </div>

              {/* Delivery toggle */}
              <div className="flex gap-2 mb-5">
                <button
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    deliveryMethod === "pickup"
                      ? "bg-[var(--color-navy)] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Pickup (free)
                </button>
                <button
                  onClick={() => setDeliveryMethod("wolt")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    deliveryMethod === "wolt"
                      ? "bg-[var(--color-navy)] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Wolt (+99 Kč)
                </button>
              </div>

              <div className="flex justify-between items-baseline pt-4 border-t border-gray-100 mb-6">
                <span className="font-bold text-[var(--color-navy)] text-lg">{t.cart.total}</span>
                <span className="font-bold text-[var(--color-pink-brand)] text-2xl">{total.toLocaleString()} Kč</span>
              </div>

              <Link
                href={`/${lang}/checkout`}
                className="block w-full py-4 rounded-full bg-[var(--color-navy)] text-white font-semibold text-center hover:bg-[var(--color-navy)]/90 transition-all cursor-pointer text-base"
              >
                {t.cart.checkout}
              </Link>

              <Link
                href={`/${lang}/shop`}
                className="block text-center text-sm text-gray-500 hover:text-[var(--color-navy)] mt-4 transition-colors cursor-pointer"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
