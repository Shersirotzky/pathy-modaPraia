"use client";

import { ArrowRight, Lock } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/lib/currency";

export function CartSummary() {
  const { total, count } = useCart();
  const [notice, setNotice] = useState(false);
  return <aside className="cart-summary"><h2>Resumo do pedido</h2><div><span>Subtotal ({count} {count === 1 ? "item" : "itens"})</span><strong>{formatCurrency(total)}</strong></div><div><span>Entrega</span><span>Calculada no checkout</span></div><hr /><div className="cart-total"><span>Total</span><strong>{formatCurrency(total)}</strong></div><p>ou em até 3x sem juros</p><button className="button button-primary checkout-button" onClick={() => setNotice(true)}><Lock /> Finalizar compra <ArrowRight /></button>{notice && <p className="checkout-notice" role="status">O checkout será implementado em uma próxima etapa. Seu carrinho está salvo.</p>}<small>Ambiente demonstrativo. Nenhum pagamento será realizado.</small></aside>;
}
