"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "@/hooks/useTranslation";
import CheckoutModal from "./CheckoutModal";

export default function CartPanel() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, deliveryMethod, setDeliveryMethod, subtotal, deliveryFee, total } = useCart();
  const { t } = useTranslation();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-serif font-bold text-[var(--color-navy)]">
            {t.cart.title}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400 px-8 text-center">
              <svg className="w-16 h-16 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-base">{t.cart.empty}</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 px-5">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="py-4 flex gap-3">
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[var(--color-pink-light)]">
                    <Image
                      src={product.image}
                      alt={product.name.en}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[var(--color-navy)] text-sm leading-tight truncate">
                      {product.name.cz}
                    </p>
                    <p className="text-[var(--color-pink-brand)] font-semibold text-sm mt-0.5">
                      {product.price} Kč
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors text-lg leading-none"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors text-lg leading-none"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(product.id)}
                    className="self-start p-1.5 rounded-full hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors"
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - only show if cart has items */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-4">
            {/* Delivery method */}
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 hover:border-[var(--color-pink-brand)] transition-colors">
                <input
                  type="radio"
                  name="delivery"
                  value="pickup"
                  checked={deliveryMethod === "pickup"}
                  onChange={() => setDeliveryMethod("pickup")}
                  className="accent-[var(--color-pink-brand)]"
                />
                <span className="text-sm text-gray-700">{t.cart.pickupLabel}</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 hover:border-[var(--color-pink-brand)] transition-colors">
                <input
                  type="radio"
                  name="delivery"
                  value="wolt"
                  checked={deliveryMethod === "wolt"}
                  onChange={() => setDeliveryMethod("wolt")}
                  className="accent-[var(--color-pink-brand)]"
                />
                <span className="text-sm text-gray-700">{t.cart.woltLabel}</span>
              </label>
            </div>

            {/* Order summary */}
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>{t.cart.subtotal}</span>
                <span>{subtotal} Kč</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{t.cart.delivery}</span>
                <span>{deliveryFee === 0 ? t.cart.free : `${deliveryFee} Kč`}</span>
              </div>
              <div className="flex justify-between font-bold text-[var(--color-navy)] text-base pt-1.5 border-t border-gray-100">
                <span>{t.cart.total}</span>
                <span>{total} Kč</span>
              </div>
            </div>

            {/* Checkout button */}
            <button
              onClick={() => setCheckoutOpen(true)}
              className="w-full py-3.5 rounded-xl bg-[var(--color-pink-brand)] text-white font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              {t.cart.checkout}
            </button>
          </div>
        )}
      </div>

      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}
