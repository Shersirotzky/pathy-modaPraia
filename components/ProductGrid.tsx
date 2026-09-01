import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <div className="empty-state"><h2>Nenhum produto encontrado</h2><p>Tente ajustar sua busca ou remover alguns filtros.</p></div>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
