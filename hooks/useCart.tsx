"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItemData, Product } from "@/types/product";
import { products } from "@/data/products";

interface EnrichedCartItem extends CartItemData { product: Product; unitPrice: number; stock: number }
interface CartContextValue {
  items: EnrichedCartItem[];
  count: number;
  total: number;
  hydrated: boolean;
  addItem: (product: Product, color: string, size: string, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "pathy-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [rawItems, setRawItems] = useState<CartItemData[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let storedItems: CartItemData[] = [];
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) storedItems = JSON.parse(stored) as CartItemData[];
    } catch { window.localStorage.removeItem(STORAGE_KEY); }
    const timer = window.setTimeout(() => {
      setRawItems(storedItems);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rawItems));
  }, [rawItems, hydrated]);

  const items = useMemo(() => rawItems.flatMap((item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    const variant = product?.variants.find((candidate) => candidate.color === item.color && candidate.size === item.size);
    if (!product || !variant) return [];
    return [{ ...item, product, stock: variant.stock, unitPrice: product.promotionalPrice ?? product.price }];
  }), [rawItems]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    hydrated,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
    addItem(product, color, size, quantity) {
      const id = `${product.id}-${color}-${size}`;
      const stock = product.variants.find((variant) => variant.color === color && variant.size === size)?.stock ?? 0;
      setRawItems((current) => {
        const existing = current.find((item) => item.id === id);
        if (existing) return current.map((item) => item.id === id ? { ...item, quantity: Math.min(item.quantity + quantity, stock) } : item);
        return [...current, { id, productId: product.id, color, size, quantity: Math.min(quantity, stock) }];
      });
    },
    updateQuantity(id, quantity) {
      setRawItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
    },
    removeItem(id) { setRawItems((current) => current.filter((item) => item.id !== id)); },
  }), [items, hydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart deve ser usado dentro de CartProvider");
  return value;
}
