import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (langParam as Lang) || "cz";
  const t = getTranslations(lang);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page title */}
      <h1 className="font-serif text-4xl font-bold text-[var(--color-navy)] text-center mb-10">
        {t.contact.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column: contact cards + address/hours */}
        <div className="flex flex-col gap-5">
          {/* WhatsApp card */}
          <a
            href="https://wa.me/420773038118"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 text-white text-2xl">
              💬
            </div>
            <div>
              <p className="font-semibold text-[var(--color-navy)] group-hover:text-green-700 transition-colors">
                {t.contact.whatsapp}
              </p>
              <p className="text-green-700 text-sm font-medium">+420 773 038 118</p>
            </div>
          </a>

          {/* Instagram card */}
          <a
            href="https://www.instagram.com/lovelypresent.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[var(--color-pink-light)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-pink-brand)] flex items-center justify-center shrink-0 text-white text-2xl">
              📷
            </div>
            <div>
              <p className="font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-pink-brand)] transition-colors">
                {t.contact.instagram}
              </p>
              <p className="text-[var(--color-pink-brand)] text-sm font-medium">@lovelypresent.cz</p>
            </div>
          </a>

          {/* Address */}
          <div className="bg-gray-50 rounded-2xl p-5 shadow-sm">
            <p className="font-semibold text-[var(--color-navy)] mb-1">{t.about.address}</p>
            <p className="text-gray-700 text-sm">5. Května 1298/14, Prague 14000</p>
          </div>

          {/* Hours */}
          <div className="bg-gray-50 rounded-2xl p-5 shadow-sm">
            <p className="font-semibold text-[var(--color-navy)] mb-1">{t.about.hours}</p>
            <p className="text-gray-700 text-sm">{t.about.hoursValue}</p>
          </div>
        </div>

        {/* Right column: contact form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
