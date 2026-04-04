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

const reviewAuthors = ["Jana K.", "Olena M.", "Marketa P."];

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
    <main className="bg-[var(--color-pink-light)]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Page title */}
        <p className="text-center text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
          {t.about.ourStory}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-navy)] text-center mb-12 tracking-wide">
          {t.about.title}
        </h1>

        {/* 2-column: storefront + story/info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left: storefront image */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="/images/about-photo.jpg"
              alt="Lovely Present"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: story + info */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-gray-700 text-lg leading-relaxed">{t.about.story}</p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {/* Address */}
              <div className="bg-white rounded-2xl p-5 border border-[var(--color-pink-border)] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[var(--color-pink-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-semibold text-[var(--color-navy)]">{t.about.address}</p>
                </div>
                <p className="text-gray-700">5. Kvetna 1298/14</p>
                <p className="text-gray-700">Prague 14000</p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-5 border border-[var(--color-pink-border)] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[var(--color-pink-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-[var(--color-navy)]">{t.about.hours}</p>
                </div>
                <p className="text-gray-700">{t.about.hoursValue}</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 4.377 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-4.331-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <p className="font-semibold text-[var(--color-navy)]">WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/420773038118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline font-medium cursor-pointer"
                >
                  +420 773 038 118
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-2xl p-5 border border-[var(--color-pink-border)] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[var(--color-pink-brand)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.84.37 3.252.148 4.771 1.691 4.919 4.919.058 1.264.369 1.644.369 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.84.37-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <p className="font-semibold text-[var(--color-navy)]">Instagram</p>
                </div>
                <a
                  href="https://www.instagram.com/lovelypresent.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-pink-brand)] hover:underline font-medium cursor-pointer"
                >
                  @lovelypresent.cz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location CTA */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-16 border-4 border-white bg-white">
          <div className="relative w-full h-[220px] bg-gradient-to-br from-[var(--color-pink-light)] to-white flex flex-col items-center justify-center gap-4 p-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[var(--color-pink-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <p className="font-serif font-bold text-[var(--color-navy)] text-lg">5. Kvetna 1298/14</p>
                <p className="text-gray-500 text-sm">Prague 14000, Czech Republic</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=5.+Kv%C4%9Btna+1298%2F14%2C+140+00+Praha+4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-navy)] text-white font-semibold text-sm hover:bg-[var(--color-navy)]/90 transition-all shadow-md cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {t.about.getDirections}
            </a>
          </div>
        </div>

        {/* Customer reviews */}
        <section>
          <p className="text-center text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            {t.about.testimonials}
          </p>
          <h2 className="font-serif text-3xl font-bold text-[var(--color-navy)] text-center mb-4 tracking-wide">
            {t.about.reviews}
          </h2>

          {/* Rating badges */}
          <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
            <div className="flex items-center gap-2 bg-white border border-[var(--color-pink-border)] rounded-full px-5 py-2.5 shadow-sm">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold text-[var(--color-navy)]">9.2 / 10</span>
              <span className="text-gray-500 text-sm">on Wolt</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-[var(--color-pink-border)] rounded-full px-5 py-2.5 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a4.36 4.36 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span className="font-bold text-[var(--color-navy)]">4.3</span>
              <span className="text-gray-500 text-sm">on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {langReviews.map((quote, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[var(--color-pink-border)]"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <p className="text-sm font-semibold text-[var(--color-navy)] mt-auto">
                  — {reviewAuthors[i]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
