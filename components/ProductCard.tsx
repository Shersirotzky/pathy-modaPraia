import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/currency";
import { hasStock } from "@/data/products";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const inStock = hasStock(product);
  const colors = [...new Map(product.variants.map((variant) => [variant.color, variant])).values()];
  return <article className={`product-card ${!inStock ? "sold-out" : ""}`}>
    <Link href={`/produto/${product.slug}`} className="product-image-wrap" aria-label={`Ver ${product.name}`}>
      <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw" className="product-image" />
      {product.isNew && inStock && <span className="badge">Novo</span>}
      {!inStock && <span className="out-badge">Esgotado</span>}
    </Link>
    <div className="product-info">
      <p className="product-category">{product.category}</p>
      <h3><Link href={`/produto/${product.slug}`}>{product.name}</Link></h3>
      <div className="price-row">
        {product.promotionalPrice ? <><span className="old-price">{formatCurrency(product.price)}</span><strong>{formatCurrency(product.promotionalPrice)}</strong></> : <strong>{formatCurrency(product.price)}</strong>}
      </div>
      <div className="color-dots" aria-label={`${colors.length} cores disponíveis`}>
        {colors.map((variant) => <span key={variant.color} title={variant.color} style={{ background: variant.colorHex }} />)}
        <small>{colors.length} {colors.length === 1 ? "cor" : "cores"}</small>
      </div>
    </div>
  </article>;
}
