import Image from "next/image";
import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";

const reviews: Record<Lang, string[]> = {
  cz: [
    "Nádherné květiny, vždy čerstvé a krásně zabalené!",
    "Objednávám pravidelně, nikdy nezklamali.",
    "Moc krásná dekorace! Doporučuji všem.",
  ],
  en: [
    "Beautiful flowers, always fresh and beautifully wrapped!",
    "I order regularly, they never disappoint.",
    "Very beautiful decoration! I recommend to everyone.",
  ],
  ua: [
    "Чудові квіти, завжди свіжі та гарно загорнуті!",
    "Замовляю регулярно — ніколи не підводили.",
    "Дуже гарне оформлення! Рекомендую всім.",
  ],
  ru: [
    "Восхитительные цветы, всегда свежие и красиво упакованные!",
    "Заказываю регулярно, никогда не подводили.",
    "Очень красивое оформление! Рекомендую всем.",
  ],
};

const reviewAuthors = ["Jana K.", "Olena M.", "Markéta P."];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (langParam as Lang) || "cz";
  const t = getTranslations(lang);

  const langReviews = reviews[lang] || reviews.cz;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Page title */}
      <h1 className="font-serif text-4xl font-bold text-[var(--color-navy)] text-center mb-8">
        {t.about.title}
      </h1>

      {/* 2-column: storefront + story/info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left: storefront image */}
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/storefront.jpg"
            alt="Lovely Present storefront"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: story + info */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-gray-700 text-lg leading-relaxed">{t.about.story}</p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Address */}
            <div className="bg-[var(--color-pink-light)] rounded-xl p-4">
              <p className="font-semibold text-[var(--color-navy)] mb-1">{t.about.address}</p>
              <p className="text-gray-700">5. Května 1298/14</p>
              <p className="text-gray-700">Prague 14000</p>
            </div>

            {/* Hours */}
            <div className="bg-[var(--color-pink-light)] rounded-xl p-4">
              <p className="font-semibold text-[var(--color-navy)] mb-1">{t.about.hours}</p>
              <p className="text-gray-700">{t.about.hoursValue}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-[var(--color-navy)] mb-1">WhatsApp</p>
              <a
                href="https://wa.me/420773038118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-medium"
              >
                +420 773 038 118
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-[var(--color-pink-light)] rounded-xl p-4">
              <p className="font-semibold text-[var(--color-navy)] mb-1">Instagram</p>
              <a
                href="https://www.instagram.com/lovelypresent.cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-pink-brand)] hover:underline font-medium"
              >
                @lovelypresent.cz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="w-full rounded-xl overflow-hidden shadow-md mb-12 h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d14.4394!3d50.0546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93926ad8a5e7%3A0x3a847f9e03be1b0d!2z5S4ga3bEm3RuYSAxMjk4LzE0LCAxNDAgMDAgUHJhaGE!5e0!3m2!1sen!2scz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lovely Present location"
        />
      </div>

      {/* Customer reviews */}
      <section>
        <h2 className="font-serif text-3xl font-bold text-[var(--color-navy)] text-center mb-4">
          {t.about.reviews}
        </h2>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="font-bold text-[var(--color-navy)]">9.2 / 10</span>
            <span className="text-gray-500 text-sm">on Wolt</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <span className="font-bold text-[var(--color-navy)]">5.0</span>
            <span className="text-gray-500 text-sm">on Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {langReviews.map((quote, i) => (
            <div
              key={i}
              className="bg-[var(--color-pink-light)] rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-[var(--color-pink-brand)] text-xl tracking-widest">★★★★★</p>
              <p className="text-gray-700 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
              <p className="text-sm font-semibold text-[var(--color-navy)] mt-auto">
                — {reviewAuthors[i]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
