"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, Product, DeliveryMethod } from "@/lib/types";

interface CartContextType {
  items: CartItem[];
  deliveryMethod: DeliveryMethod;
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setDeliveryMethod: (method: DeliveryMethod) => void;
  toggleCart: () => void;
  closeCart: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lovely-present-cart");
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch {}
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("lovely-present-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) { removeItem(productId); return; }
    setItems((prev) => prev.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === "wolt" ? 99 : 0;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, deliveryMethod, isOpen, addItem, removeItem, updateQuantity,
      setDeliveryMethod, toggleCart: () => setIsOpen((o) => !o),
      closeCart: () => setIsOpen(false), subtotal, deliveryFee, total, itemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
