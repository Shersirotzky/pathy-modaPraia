"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, hydrated } = useCart();

  return <>
    <div className="announcement">Frete grátis em compras acima de R$ 299 <span>•</span> Enviamos para todo o Brasil</div>
    <header className="site-header">
      <div className="header-inner">
        <button className="icon-button mobile-only" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <Link className="logo" href="/" aria-label="Pathy, página inicial">Pathy<span>.</span></Link>
        <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
          <Link href="/" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link href="/catalogo" onClick={() => setMenuOpen(false)}>Novidades</Link>
          <Link href="/catalogo?categoria=Biqu%C3%ADnis" onClick={() => setMenuOpen(false)}>Moda praia</Link>
          <Link href="/catalogo?categoria=Masculino" onClick={() => setMenuOpen(false)}>Masculino</Link>
          <Link href="/catalogo?categoria=Infantil" onClick={() => setMenuOpen(false)}>Infantil</Link>
        </nav>
        <div className="header-actions">
          <button className="icon-button search-trigger" aria-label="Abrir busca" onClick={() => setSearchOpen(!searchOpen)}><Search /></button>
          <Link className="cart-link" href="/carrinho" aria-label={`Carrinho com ${hydrated ? count : 0} itens`}>
            <ShoppingBag /><span className="cart-count">{hydrated ? count : 0}</span>
          </Link>
        </div>
      </div>
      {searchOpen && <form className="header-search" action="/catalogo">
        <label className="sr-only" htmlFor="header-query">Buscar produtos</label>
        <Search size={19} aria-hidden="true" />
        <input id="header-query" name="busca" placeholder="O que você procura?" autoFocus />
        <button type="submit">Buscar</button>
      </form>}
    </header>
  </>;
}
