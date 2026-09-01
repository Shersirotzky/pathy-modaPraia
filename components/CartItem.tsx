"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/currency";
import { useCart } from "@/hooks/useCart";

export function CartItem({ id }: { id: string }) {
  const { items, updateQuantity, removeItem } = useCart();
  const item = items.find((candidate) => candidate.id === id);
  if (!item) return null;
  return <article className="cart-item">
    <Link href={`/produto/${item.product.slug}`} className="cart-image"><Image src={item.product.images[0]} alt={item.product.name} fill sizes="130px" /></Link>
    <div className="cart-item-info"><p>{item.product.category}</p><h2><Link href={`/produto/${item.product.slug}`}>{item.product.name}</Link></h2><dl><div><dt>Cor</dt><dd>{item.color}</dd></div><div><dt>Tamanho</dt><dd>{item.size}</dd></div></dl><button className="remove-mobile" onClick={() => removeItem(id)}><Trash2 /> Remover</button></div>
    <div className="cart-quantity"><span>Quantidade</span><div className="quantity"><button onClick={() => updateQuantity(id, item.quantity - 1)} disabled={item.quantity <= 1} aria-label={`Diminuir quantidade de ${item.product.name}`}><Minus /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(id, Math.min(item.stock, item.quantity + 1))} disabled={item.quantity >= item.stock} aria-label={`Aumentar quantidade de ${item.product.name}`}><Plus /></button></div></div>
    <div className="cart-price"><span>Subtotal</span><strong>{formatCurrency(item.unitPrice * item.quantity)}</strong><small>{formatCurrency(item.unitPrice)} cada</small></div>
    <button className="remove-desktop" onClick={() => removeItem(id)} aria-label={`Remover ${item.product.name}`}><Trash2 /></button>
  </article>;
}
