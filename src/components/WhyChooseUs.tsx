import { Lang } from "@/lib/types";
import { getTranslations } from "@/lib/translations";

interface WhyChooseUsProps {
  lang: Lang;
}

const icons = ["🌸", "🚀", "💐"];

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = getTranslations(lang);

  const reasons = [
    { title: t.home.why1, desc: t.home.why1desc },
    { title: t.home.why2, desc: t.home.why2desc },
    { title: t.home.why3, desc: t.home.why3desc },
  ];

  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-navy)] text-center mb-10">
          {t.home.why}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-5xl">{icons[i]}</span>
              <h3 className="font-serif text-lg font-semibold text-[var(--color-navy)]">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
