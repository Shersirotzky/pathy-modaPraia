"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import type { Category } from "@/types/product";

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";
interface Props { categories: Category[]; selected: string; sort: SortOption; inStockOnly: boolean; onCategory: (value: string) => void; onSort: (value: SortOption) => void; onStock: (value: boolean) => void }

export function ProductFilters(props: Props) {
  const [open, setOpen] = useState(false);
  return <>
    <button className="filter-toggle" onClick={() => setOpen(true)}><SlidersHorizontal /> Filtrar produtos</button>
    <aside className={`filters ${open ? "open" : ""}`} aria-label="Filtros de produtos">
      <div className="filter-mobile-head"><strong>Filtros</strong><button aria-label="Fechar filtros" onClick={() => setOpen(false)}><X /></button></div>
      <fieldset><legend>Categorias</legend>
        <label><input type="radio" name="category" checked={!props.selected} onChange={() => props.onCategory("")} /> Todas</label>
        {props.categories.map((category) => <label key={category}><input type="radio" name="category" checked={props.selected === category} onChange={() => props.onCategory(category)} /> {category}</label>)}
      </fieldset>
      <fieldset><legend>Disponibilidade</legend><label><input type="checkbox" checked={props.inStockOnly} onChange={(event) => props.onStock(event.target.checked)} /> Apenas em estoque</label></fieldset>
      <button className="button button-dark apply-filter" onClick={() => setOpen(false)}>Ver produtos</button>
    </aside>
    {open && <button className="filter-backdrop" aria-label="Fechar filtros" onClick={() => setOpen(false)} />}
  </>;
}
