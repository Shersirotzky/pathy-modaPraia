"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroCopy = "Peças que acompanham seus melhores dias, da areia ao pôr do sol.";

export function Hero() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = window.setTimeout(() => setVisibleCharacters(heroCopy.length), 0);
      return () => window.clearTimeout(reducedMotionTimer);
    }

    let currentCharacter = 0;
    const interval = window.setInterval(() => {
      currentCharacter += 1;
      setVisibleCharacters(currentCharacter);
      if (currentCharacter === heroCopy.length) window.clearInterval(interval);
    }, 42);

    return () => window.clearInterval(interval);
  }, []);

  return <section className="hero">
    <Image src="/images/hero-pathy.png" alt="Coleção de moda praia Pathy em uma praia tropical" fill priority sizes="100vw" className="hero-image" />
    <div className="hero-overlay" />
    <div className="hero-content page-shell"><p className="eyebrow">Coleção alto verão 26</p><h1>O verão<br />veste leve.</h1><p className="hero-typewriter" aria-label={heroCopy}><span className="hero-copy-space" aria-hidden="true">{heroCopy}</span><span className="hero-copy-animated" aria-hidden="true">{heroCopy.slice(0, visibleCharacters)}<span className="typewriter-cursor" /></span></p><Link className="button button-primary" href="/catalogo">Descobrir coleção <ArrowRight /></Link></div>
  </section>;
}
