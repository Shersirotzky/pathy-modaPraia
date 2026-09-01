"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { hasStock, products } from "@/data/products";
import type { Category } from "@/types/product";
import { ProductFilters, type SortOption } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";

const categoryNames = [...new Set(products.map((product) => product.category))] as Category[];

export function CatalogClient({ initialSearch = "", initialCategory = "" }: { initialSearch?: string; initialCategory?: string }) {
  const [query, setQuery] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return products.filter((product) => (!category || product.category === category) && (!inStockOnly || hasStock(product)) && (!normalized || `${product.name} ${product.category}`.toLocaleLowerCase("pt-BR").includes(normalized))).sort((a, b) => {
      if (sort === "price-asc") return (a.promotionalPrice ?? a.price) - (b.promotionalPrice ?? b.price);
      if (sort === "price-desc") return (b.promotionalPrice ?? b.price) - (a.promotionalPrice ?? a.price);
      if (sort === "newest") return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [query, category, sort, inStockOnly]);

  return <div className="catalog-layout">
    <ProductFilters categories={categoryNames} selected={category} sort={sort} inStockOnly={inStockOnly} onCategory={setCategory} onSort={setSort} onStock={setInStockOnly} />
    <div className="catalog-products">
      <div className="catalog-toolbar">
        <label className="catalog-search"><span className="sr-only">Buscar no catálogo</span><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar produtos" /></label>
        <span className="result-count">{filtered.length} produtos</span>
        <label className="sort-label">Ordenar por <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)}><option value="featured">Destaques</option><option value="newest">Mais recentes</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option></select></label>
      </div>
      <ProductGrid products={filtered} />
    </div>
  </div>;
}
