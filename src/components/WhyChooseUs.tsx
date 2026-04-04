import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";

interface WhyChooseUsProps {
  lang: Lang;
}

function FlowerIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/20">
      <svg className="w-7 h-7 text-[var(--color-pink-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-1.5 6 0 9M12 3c1.5 3 1.5 6 0 9M12 12c-3 1.5-6 1.5-9 0M12 12c3 1.5 6 1.5 9 0" />
      </svg>
    </div>
  );
}

function DeliveryIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/20">
      <svg className="w-7 h-7 text-[var(--color-pink-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    </div>
  );
}

function CustomIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/20">
      <svg className="w-7 h-7 text-[var(--color-pink-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </div>
  );
}

const iconComponents = [FlowerIcon, DeliveryIcon, CustomIcon];

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = getTranslations(lang);

  const reasons = [
    { title: t.home.why1, desc: t.home.why1desc },
    { title: t.home.why2, desc: t.home.why2desc },
    { title: t.home.why3, desc: t.home.why3desc },
  ];

  return (
    <section className="py-16 px-4 bg-[var(--color-navy)]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
          Why us
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-wide">
          {t.home.why}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const IconComponent = iconComponents[i];
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <IconComponent />
                <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
