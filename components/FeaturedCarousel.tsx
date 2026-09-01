"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function FeaturedCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollBack(track.scrollLeft > 1);
    setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return <div className="featured-carousel">
    <div className="carousel-controls" aria-label="Controles do carrossel">
      <button type="button" onClick={() => scroll(-1)} disabled={!canScrollBack} aria-label="Produtos anteriores"><ChevronLeft /></button>
      <button type="button" onClick={() => scroll(1)} disabled={!canScrollForward} aria-label="Próximos produtos"><ChevronRight /></button>
    </div>
    <div className="carousel-track" ref={trackRef} onScroll={updateControls}>
      {products.map((product) => <div className="carousel-slide" key={product.id}><ProductCard product={product} /></div>)}
    </div>
  </div>;
}
