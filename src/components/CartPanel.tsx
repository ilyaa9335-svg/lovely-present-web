"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function CartPanel() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, deliveryMethod, setDeliveryMethod, subtotal, deliveryFee, total } = useCart();
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm cursor-pointer" onClick={closeCart} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-serif font-bold text-[var(--color-navy)]">{t.cart.title}</h2>
            <p className="text-xs text-gray-400 mt-0.5">{items.length} {t.cart.items}</p>
          </div>
          <button onClick={closeCart} className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer" aria-label="Close cart">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-300">
              <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg font-serif text-gray-400">{t.cart.empty}</p>
              <Link href={`/${lang}/shop`} onClick={closeCart} className="text-sm text-[var(--color-pink-brand)] hover:underline cursor-pointer">
                {t.checkout.browseBouquets}
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 bg-[var(--color-pink-light)] rounded-2xl p-4 border border-[var(--color-pink-border)]">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={product.image} alt={product.name[lang]} fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-[var(--color-navy)] text-base leading-tight">{product.name[lang]}</p>
                        <p className="text-[var(--color-pink-brand)] font-bold text-lg mt-1">{product.price.toLocaleString()} Kč</p>
                      </div>
                      <button onClick={() => removeItem(product.id)} className="p-1.5 rounded-full hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors cursor-pointer" aria-label="Remove">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors cursor-pointer bg-white text-lg font-medium">−</button>
                      <span className="w-8 text-center text-base font-bold text-[var(--color-navy)]">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors cursor-pointer bg-white text-lg font-medium">+</button>
                      <span className="ml-auto text-sm text-gray-500 font-medium">{(product.price * quantity).toLocaleString()} Kč</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4 bg-white">
            {/* Delivery */}
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setDeliveryMethod("pickup")} className={`p-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer ${deliveryMethod === "pickup" ? "border-[var(--color-pink-brand)] bg-[var(--color-pink-light)] text-[var(--color-pink-brand)]" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                {t.cart.pickup}
                <span className="block text-xs text-gray-400 mt-0.5">{t.cart.free}</span>
              </button>
              <button onClick={() => setDeliveryMethod("wolt")} className={`p-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer ${deliveryMethod === "wolt" ? "border-[var(--color-pink-brand)] bg-[var(--color-pink-light)] text-[var(--color-pink-brand)]" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M3.375 14.25h.008" /></svg>
                {t.cart.wolt}
                <span className="block text-xs text-gray-400 mt-0.5">{t.cart.woltFee}</span>
              </button>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600"><span>{t.cart.subtotal}</span><span>{subtotal.toLocaleString()} Kč</span></div>
              <div className="flex justify-between text-gray-600"><span>{t.cart.delivery}</span><span>{deliveryFee === 0 ? t.cart.free : `${deliveryFee} Kč`}</span></div>
              <div className="flex justify-between font-bold text-[var(--color-navy)] text-lg pt-2 border-t border-gray-200"><span>{t.cart.total}</span><span>{total.toLocaleString()} Kč</span></div>
            </div>

            {/* Checkout button - links to checkout page */}
            <Link
              href={`/${lang}/checkout`}
              onClick={closeCart}
              className="block w-full py-4 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold hover:bg-[#d1177d] transition-all duration-300 text-base cursor-pointer shadow-lg hover:shadow-xl text-center"
            >
              {t.cart.checkout} — {total.toLocaleString()} Kč
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
