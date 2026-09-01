export type Category = "Biquínis" | "Maiôs" | "Saídas" | "Shorts" | "Masculino" | "Infantil";

export interface ProductVariant {
  color: string;
  colorHex: string;
  size: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: Category;
  images: string[];
  price: number;
  promotionalPrice?: number;
  isNew?: boolean;
  featured?: boolean;
  variants: ProductVariant[];
}

export interface CartItemData {
  id: string;
  productId: string;
  color: string;
  size: string;
  quantity: number;
}
