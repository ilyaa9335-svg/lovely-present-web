"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function CheckoutPage() {
  const { items, deliveryMethod, setDeliveryMethod, subtotal, deliveryFee, total } = useCart();
  const { t, lang } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <svg className="w-20 h-20 mx-auto text-gray-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h1 className="font-serif text-2xl text-[var(--color-navy)] mb-4">Your cart is empty</h1>
        <Link href={`/${lang}/shop`} className="text-[var(--color-pink-brand)] hover:underline cursor-pointer">
          Browse our bouquets
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl text-[var(--color-navy)] mb-3">Order Received!</h1>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you, {form.name}! We&apos;ll confirm your order via WhatsApp shortly. Our team will prepare your bouquet with love.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/420773038118" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact via WhatsApp
          </a>
          <Link href={`/${lang}`} className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-[var(--color-navy)] rounded-full font-medium hover:border-[var(--color-pink-brand)] transition-colors cursor-pointer">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl font-bold text-[var(--color-navy)] mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Form - 3 cols */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
            <h2 className="font-serif text-lg font-bold text-[var(--color-navy)]">Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--color-pink-brand)] transition-colors" placeholder="Jan Novak" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--color-pink-brand)] transition-colors" placeholder="+420 ..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--color-pink-brand)] transition-colors" placeholder="jan@example.com" />
            </div>
          </div>

          {/* Delivery method */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
            <h2 className="font-serif text-lg font-bold text-[var(--color-navy)]">Delivery Method</h2>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setDeliveryMethod("pickup")} className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${deliveryMethod === "pickup" ? "border-[var(--color-pink-brand)] bg-[var(--color-pink-light)]" : "border-gray-200 hover:border-gray-300"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-[var(--color-pink-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span className="font-semibold text-[var(--color-navy)]">Pickup</span>
                </div>
                <p className="text-xs text-gray-500">5. Kvetna 1298/14, Prague</p>
                <p className="text-sm font-medium text-green-600 mt-1">Free</p>
              </button>
              <button type="button" onClick={() => setDeliveryMethod("wolt")} className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${deliveryMethod === "wolt" ? "border-[var(--color-pink-brand)] bg-[var(--color-pink-light)]" : "border-gray-200 hover:border-gray-300"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-[var(--color-pink-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M3.375 14.25h.008" /></svg>
                  <span className="font-semibold text-[var(--color-navy)]">Wolt Delivery</span>
                </div>
                <p className="text-xs text-gray-500">Delivered to your door</p>
                <p className="text-sm font-medium text-[var(--color-pink-brand)] mt-1">+99 Kč</p>
              </button>
            </div>

            {deliveryMethod === "wolt" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
                <input type="text" name="address" required value={form.address} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--color-pink-brand)] transition-colors" placeholder="Street, City, Zip" />
              </div>
            )}
          </div>

          {/* Note */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-1">Order Note (optional)</label>
            <textarea name="note" value={form.note} onChange={handleChange} rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--color-pink-brand)] transition-colors resize-none" placeholder="Any special requests for your bouquet..." />
          </div>

          <button type="submit" className="w-full py-4 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-lg hover:bg-[#d1177d] transition-all shadow-lg hover:shadow-xl cursor-pointer">
            Place Order — {total.toLocaleString()} Kč
          </button>

          <p className="text-xs text-gray-400 text-center">
            We&apos;ll confirm your order via WhatsApp. No online payment required yet.
          </p>
        </form>

        {/* Right: Order summary - 2 cols */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
            <h2 className="font-serif text-lg font-bold text-[var(--color-navy)] mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 items-center">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={product.image} alt={product.name[lang]} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--color-navy)] truncate">{product.name[lang]}</p>
                    <p className="text-xs text-gray-500">Qty: {quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-navy)]">{(product.price * quantity).toLocaleString()} Kč</p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>{subtotal.toLocaleString()} Kč</span></div>
              <div className="flex justify-between text-gray-600"><span>Delivery</span><span>{deliveryFee === 0 ? "Free" : `${deliveryFee} Kč`}</span></div>
              <div className="flex justify-between font-bold text-[var(--color-navy)] text-xl pt-2 border-t border-gray-100"><span>Total</span><span>{total.toLocaleString()} Kč</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
