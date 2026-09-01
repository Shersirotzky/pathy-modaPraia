import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CreditCard, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { categories, products } from "@/data/products";

export default function Home() {
  return <>
    <Hero />
    <section className="home-section page-shell"><div className="section-heading"><div><p className="eyebrow">Encontre seu estilo</p><h2>Feito para cada momento</h2></div><Link href="/catalogo">Ver todas <ArrowRight /></Link></div>
      <div className="category-grid">{categories.map((category) => <Link href={`/catalogo?categoria=${encodeURIComponent(category.name)}`} className="category-card" key={category.name} style={{ backgroundColor: category.tone }}><Image src={category.image} alt="" fill sizes="(max-width: 640px) 45vw, 20vw" /><span>{category.name}</span></Link>)}</div>
    </section>
    <section className="home-section page-shell"><div className="section-heading"><div><p className="eyebrow">Acabou de chegar</p><h2>Novidades da estação</h2></div><Link href="/catalogo">Explorar coleção <ArrowRight /></Link></div><ProductGrid products={products.filter((p) => p.isNew).slice(0, 4)} /></section>
    <section className="editorial-banner page-shell"><div><p className="eyebrow">Entre o mar e a cidade</p><h2>Peças que vão<br />além da praia.</h2><p>Texturas leves, cores naturais e modelagens que valorizam seu ritmo.</p><Link className="button button-light" href="/catalogo?categoria=Sa%C3%ADdas">Ver saídas de praia <ArrowRight /></Link></div><Image src="/images/saida-solar.png" alt="Saída de praia floral da coleção Pathy" fill sizes="(max-width: 800px) 100vw, 50vw" /></section>
    <section className="home-section page-shell"><div className="section-heading"><div><p className="eyebrow">Os mais desejados</p><h2>Escolhas da Pathy</h2></div></div><ProductGrid products={products.filter((p) => p.featured)} /></section>
    <section className="benefits"><div className="page-shell benefits-grid"><div><PackageCheck /><h3>Entrega para todo Brasil</h3><p>Acompanhe cada etapa do seu pedido.</p></div><div><CreditCard /><h3>Compra facilitada</h3><p>Pagamento seguro no futuro checkout.</p></div><div><RefreshCw /><h3>Troca descomplicada</h3><p>Atendimento próximo e sem burocracia.</p></div><div><ShieldCheck /><h3>Qualidade Pathy</h3><p>Peças escolhidas com cuidado.</p></div></div></section>
  </>;
}
