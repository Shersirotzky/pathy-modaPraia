import type { Metadata } from "next";
import { CatalogClient } from "@/components/CatalogClient";

export const metadata: Metadata = { title: "Catálogo" };
export default async function CatalogPage({ searchParams }: { searchParams: Promise<{ busca?: string; categoria?: string }> }) {
  const params = await searchParams;
  return <section className="catalog-page page-shell"><header className="page-title"><p className="eyebrow">Coleção Pathy</p><h1>Encontre seu novo favorito</h1><p>Leveza, conforto e personalidade para aproveitar cada raio de sol.</p></header><CatalogClient initialSearch={params.busca} initialCategory={params.categoria} /></section>;
}
