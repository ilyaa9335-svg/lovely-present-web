import { Lang } from "@/lib/types";
import HeroSection from "@/components/HeroSection";
import CategoryStrip from "@/components/CategoryStrip";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import InstagramPreview from "@/components/InstagramPreview";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (langParam as Lang) || "cz";

  return (
    <>
      <HeroSection lang={lang} />
      <CategoryStrip lang={lang} />
      <FeaturedProducts lang={lang} />
      <WhyChooseUs lang={lang} />
      <InstagramPreview lang={lang} />
    </>
  );
}
