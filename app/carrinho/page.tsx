"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { CartItem } from "@/components/CartItem";
import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { items, hydrated } = useCart();
  if (!hydrated) return <div className="page-shell page-loading" role="status"><span className="loader" /><p>Carregando seu carrinho…</p></div>;
  return <section className="cart-page page-shell"><header className="page-title cart-title"><p className="eyebrow">Sua seleção</p><h1>Meu carrinho</h1></header>{items.length ? <><div className="cart-layout"><div className="cart-list">{items.map((item) => <CartItem key={item.id} id={item.id} />)}<Link className="continue-shopping" href="/catalogo"><ArrowLeft /> Continuar comprando</Link></div><CartSummary /></div></> : <div className="empty-cart"><ShoppingBag /><h2>Seu carrinho está vazio</h2><p>Que tal descobrir as novidades que preparamos para você?</p><Link className="button button-primary" href="/catalogo">Continuar comprando</Link></div>}</section>;
}
