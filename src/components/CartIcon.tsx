"use client";

import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { toggleCart, itemCount } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 hover:text-[var(--color-pink-brand)] transition-colors"
      aria-label="Open cart"
    >
      {/* Shopping bag SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[var(--color-pink-brand)] text-white text-[10px] font-bold px-1 leading-none">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}
