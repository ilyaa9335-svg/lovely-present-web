"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[var(--color-pink-light)] rounded-2xl p-8 text-center">
        <p className="text-[var(--color-pink-brand)] text-4xl mb-4">✓</p>
        <p className="text-[var(--color-navy)] font-semibold text-lg">{t.contact.thanks}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[var(--color-navy)] mb-1"
        >
          {t.contact.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-brand)] focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[var(--color-navy)] mb-1"
        >
          {t.contact.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-brand)] focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[var(--color-navy)] mb-1"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-brand)] focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-start px-8 py-3 rounded-full bg-[var(--color-pink-brand)] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow"
      >
        {t.contact.send}
      </button>
    </form>
  );
}
