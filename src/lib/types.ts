export type Lang = "cz" | "en" | "ua" | "ru";

export type Category = "do-1000" | "od-1000" | "od-2000" | "od-3000" | "od-4000" | "od-5000" | "custom";

export interface Product {
  id: string;
  slug: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type DeliveryMethod = "pickup" | "wolt";
