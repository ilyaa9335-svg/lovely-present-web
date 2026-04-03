import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    slug: "cutie",
    name: { cz: "Kytice CUTIE", en: "CUTIE Bouquet", ua: "Букет CUTIE", ru: "Букет CUTIE" },
    description: {
      cz: "Jemná pastelová kytice s růžovými a modrými květy",
      en: "Delicate pastel bouquet with pink and blue flowers",
      ua: "Ніжний пастельний букет з рожевими та блакитними квітами",
      ru: "Нежный пастельный букет с розовыми и голубыми цветами",
    },
    price: 750,
    category: "do-1000",
    image: "/images/products/cutie.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "spring",
    name: { cz: "Kytice SPRING", en: "SPRING Bouquet", ua: "Букет SPRING", ru: "Букет SPRING" },
    description: {
      cz: "Jarní mix s tulipány a ranunculus",
      en: "Spring mix with tulips and ranunculus",
      ua: "Весняний мікс з тюльпанами та ранункулюсами",
      ru: "Весенний микс с тюльпанами и ранункулюсами",
    },
    price: 1135,
    category: "od-1000",
    image: "/images/products/spring.jpg",
  },
  {
    id: "3",
    slug: "blue-waters",
    name: { cz: "Kytice BLUE WATERS", en: "BLUE WATERS Bouquet", ua: "Букет BLUE WATERS", ru: "Букет BLUE WATERS" },
    description: {
      cz: "Kytice v modrých a fialových tónech",
      en: "Bouquet in blue and purple tones",
      ua: "Букет у блакитних та фіолетових тонах",
      ru: "Букет в голубых и фиолетовых тонах",
    },
    price: 1150,
    category: "od-1000",
    image: "/images/products/blue-waters.jpg",
  },
  {
    id: "4",
    slug: "spring-bouquet",
    name: { cz: "Jarní kytice", en: "Spring Bouquet", ua: "Весняний букет", ru: "Весенний букет" },
    description: {
      cz: "Pastelová jarní kytice s pivoňkami",
      en: "Pastel spring bouquet with peonies",
      ua: "Пастельний весняний букет з піонами",
      ru: "Пастельный весенний букет с пионами",
    },
    price: 1555,
    category: "od-1000",
    image: "/images/products/spring-bouquet.jpg",
  },
  {
    id: "5",
    slug: "gisele",
    name: { cz: "Kytice GISELE", en: "GISELE Bouquet", ua: "Букет GISELE", ru: "Букет GISELE" },
    description: {
      cz: "Elegantní bílá kytice s jemným detailem",
      en: "Elegant white bouquet with delicate detail",
      ua: "Елегантний білий букет з ніжними деталями",
      ru: "Элегантный белый букет с нежными деталями",
    },
    price: 1600,
    category: "od-1000",
    image: "/images/products/gisele.jpg",
    featured: true,
  },
  {
    id: "6",
    slug: "xmas",
    name: { cz: "Vánoční kytice", en: "Xmas Bouquet", ua: "Різдвяний букет", ru: "Рождественский букет" },
    description: {
      cz: "Zimní kytice v bílé a stříbrné",
      en: "Winter bouquet in white and silver",
      ua: "Зимовий букет у білому та сріблястому",
      ru: "Зимний букет в белом и серебристом",
    },
    price: 1690,
    category: "od-1000",
    image: "/images/products/xmas.jpg",
  },
  {
    id: "7",
    slug: "sweet-love",
    name: { cz: "Kytice SWEET LOVE", en: "SWEET LOVE Bouquet", ua: "Букет SWEET LOVE", ru: "Букет SWEET LOVE" },
    description: {
      cz: "Romantická růžová kytice s pivoňkami",
      en: "Romantic pink bouquet with peonies",
      ua: "Романтичний рожевий букет з піонами",
      ru: "Романтический розовый букет с пионами",
    },
    price: 2300,
    category: "od-2000",
    image: "/images/products/sweet-love.jpg",
    featured: true,
  },
  {
    id: "8",
    slug: "mixed",
    name: { cz: "Smíšená kytice", en: "Mixed Bouquet", ua: "Змішаний букет", ru: "Смешанный букет" },
    description: {
      cz: "Luxusní mix růží a pivoněk v růžové",
      en: "Luxury mix of roses and peonies in pink",
      ua: "Люксовий мікс троянд та піонів у рожевому",
      ru: "Люксовый микс роз и пионов в розовом",
    },
    price: 2500,
    category: "od-2000",
    image: "/images/products/mixed.jpg",
  },
  {
    id: "9",
    slug: "peonies-roses",
    name: { cz: "Pivoňky a růže", en: "Peonies & Roses", ua: "Піони та троянди", ru: "Пионы и розы" },
    description: {
      cz: "Pivoňky a růže v pastelových barvách",
      en: "Peonies and roses in pastel colors",
      ua: "Піони та троянди в пастельних кольорах",
      ru: "Пионы и розы в пастельных тонах",
    },
    price: 2500,
    category: "od-2000",
    image: "/images/products/peonies-roses.jpg",
  },
  {
    id: "10",
    slug: "luxury",
    name: { cz: "Luxusní kytice", en: "Luxury Bouquet", ua: "Розкішний букет", ru: "Роскошный букет" },
    description: {
      cz: "Velká luxusní kytice smíšených květin",
      en: "Large luxury mixed flower bouquet",
      ua: "Великий розкішний букет змішаних квітів",
      ru: "Большой роскошный букет смешанных цветов",
    },
    price: 4500,
    category: "od-4000",
    image: "/images/products/luxury.jpg",
  },
  {
    id: "11",
    slug: "dubai",
    name: { cz: "Kytice DUBAI", en: "DUBAI Bouquet", ua: "Букет DUBAI", ru: "Букет DUBAI" },
    description: {
      cz: "Prémiová exotická kytice",
      en: "Premium exotic bouquet",
      ua: "Преміальний екзотичний букет",
      ru: "Премиальный экзотический букет",
    },
    price: 4690,
    category: "od-4000",
    image: "/images/products/dubai.jpg",
    featured: true,
  },
  {
    id: "12",
    slug: "101-roses",
    name: { cz: "101 růží", en: "101 Roses", ua: "101 троянда", ru: "101 роза" },
    description: {
      cz: "101 červených růží - ultimate gift",
      en: "101 red roses - the ultimate gift",
      ua: "101 червона троянда - найкращий подарунок",
      ru: "101 красная роза - лучший подарок",
    },
    price: 5500,
    category: "od-5000",
    image: "/images/products/101-roses.jpg",
  },
];

export const categories = [
  { slug: "do-1000" as const, label: { cz: "Do 1000 Kč", en: "Under 1000 Kč", ua: "До 1000 Kč", ru: "До 1000 Kč" } },
  { slug: "od-1000" as const, label: { cz: "Od 1000 Kč", en: "From 1000 Kč", ua: "Від 1000 Kč", ru: "От 1000 Kč" } },
  { slug: "od-2000" as const, label: { cz: "Od 2000 Kč", en: "From 2000 Kč", ua: "Від 2000 Kč", ru: "От 2000 Kč" } },
  { slug: "od-3000" as const, label: { cz: "Od 3000 Kč", en: "From 3000 Kč", ua: "Від 3000 Kč", ru: "От 3000 Kč" } },
  { slug: "od-4000" as const, label: { cz: "Od 4000 Kč", en: "From 4000 Kč", ua: "Від 4000 Kč", ru: "От 4000 Kč" } },
  { slug: "od-5000" as const, label: { cz: "Od 5000 Kč", en: "From 5000 Kč", ua: "Від 5000 Kč", ru: "От 5000 Kč" } },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
