"use client";

import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const colors = [...new Map(product.variants.map((variant) => [variant.color, variant])).values()];
  const sizes = [...new Set(product.variants.map((variant) => variant.size))];
  const selectedVariant = useMemo(() => product.variants.find((variant) => variant.color === color && variant.size === size), [product, color, size]);
  const max = selectedVariant?.stock ?? 0;
  const productAvailable = product.variants.some((variant) => variant.stock > 0);

  function chooseColor(value: string) { setColor(value); setSize(""); setQuantity(1); setMessage(""); }
  function submit() {
    if (!color || !size) { setMessage("Escolha uma cor e um tamanho antes de continuar."); return; }
    if (!selectedVariant?.stock) { setMessage("Essa combinação está sem estoque. Escolha outra opção."); return; }
    addItem(product, color, size, quantity); setMessage("Produto adicionado ao carrinho.");
  }

  return <div className="purchase-panel">
    <fieldset><legend>Cor <span>{color || "Selecione"}</span></legend><div className="color-options">{colors.map((variant) => {
      const enabled = product.variants.some((item) => item.color === variant.color && item.stock > 0);
      return <button type="button" key={variant.color} className={color === variant.color ? "selected" : ""} disabled={!enabled} onClick={() => chooseColor(variant.color)} aria-label={`Cor ${variant.color}${!enabled ? ", indisponível" : ""}`}><span style={{ background: variant.colorHex }} />{variant.color}</button>;
    })}</div></fieldset>
    <fieldset><legend>Tamanho <span>{size || "Selecione"}</span></legend><div className="size-options">{sizes.map((value) => {
      const variant = product.variants.find((item) => item.color === color && item.size === value);
      const enabled = Boolean(color && variant?.stock);
      return <button type="button" key={value} className={size === value ? "selected" : ""} disabled={!enabled} onClick={() => { setSize(value); setQuantity(1); setMessage(""); }} aria-label={`Tamanho ${value}${!enabled ? ", indisponível" : ""}`}>{value}</button>;
    })}</div>{!color && <small className="helper">Escolha a cor para ver os tamanhos disponíveis.</small>}</fieldset>
    <div className="stock-status">{selectedVariant ? selectedVariant.stock > 0 ? <><Check /> Em estoque — {selectedVariant.stock} unidades</> : "Combinação indisponível" : productAvailable ? "Disponível para envio" : "Produto esgotado"}</div>
    <div className="purchase-actions">
      <div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Diminuir quantidade"><Minus /></button><span aria-live="polite">{quantity}</span><button onClick={() => setQuantity(Math.min(max || 1, quantity + 1))} disabled={!max || quantity >= max} aria-label="Aumentar quantidade"><Plus /></button></div>
      <button className="button button-primary add-button" onClick={submit} disabled={!productAvailable}><ShoppingBag /> Adicionar ao carrinho</button>
    </div>
    {message && <p className={message.includes("adicionado") ? "form-message success" : "form-message"} role="status">{message}</p>}
  </div>;
}
