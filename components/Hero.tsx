import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return <section className="hero">
    <Image src="/images/hero-pathy.png" alt="Coleção de moda praia Pathy em uma praia tropical" fill priority sizes="100vw" className="hero-image" />
    <div className="hero-overlay" />
    <div className="hero-content page-shell"><p className="eyebrow">Coleção alto verão 26</p><h1>O verão<br />veste leve.</h1><p>Peças que acompanham seus melhores dias, da areia ao pôr do sol.</p><Link className="button button-primary" href="/catalogo">Descobrir coleção <ArrowRight /></Link></div>
  </section>;
}
