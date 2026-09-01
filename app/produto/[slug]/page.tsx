import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductPurchase } from "@/components/ProductPurchase";
import { ProductGrid } from "@/components/ProductGrid";
import { formatCurrency } from "@/lib/currency";
import { getProductBySlug, products } from "@/data/products";

export async function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = getProductBySlug((await params).slug); return product ? { title: product.name, description: product.description } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProductBySlug((await params).slug); if (!product) notFound();
  return <div className="product-page page-shell">
    <nav className="breadcrumbs" aria-label="Navegação estrutural"><Link href="/">Início</Link><ChevronRight /><Link href="/catalogo">Catálogo</Link><ChevronRight /><span>{product.name}</span></nav>
    <div className="product-detail"><ProductGallery images={product.images} name={product.name} /><section className="product-copy"><p className="eyebrow">{product.category}</p>{product.isNew && <span className="inline-badge">Novidade</span>}<h1>{product.name}</h1><div className="detail-price">{product.promotionalPrice ? <><span>{formatCurrency(product.price)}</span><strong>{formatCurrency(product.promotionalPrice)}</strong><small>Economize {formatCurrency(product.price - product.promotionalPrice)}</small></> : <strong>{formatCurrency(product.price)}</strong>}</div><p className="installments">ou 3x de {formatCurrency((product.promotionalPrice ?? product.price) / 3)} sem juros</p><p className="description">{product.description}</p><ProductPurchase product={product} /><div className="shipping-note"><Truck /><div><strong>Entrega em todo o Brasil</strong><span>Prazo e valor calculados no futuro checkout.</span></div></div></section></div>
    <section className="related"><div className="section-heading"><div><p className="eyebrow">Você também pode gostar</p><h2>Combine com</h2></div></div><ProductGrid products={products.filter((item) => item.id !== product.id).slice(0, 4)} /></section>
  </div>;
}
