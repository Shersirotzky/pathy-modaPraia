"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [selected, setSelected] = useState(0);
  return <div className="gallery">
    <div className="gallery-main"><Image src={images[selected]} alt={`${name}, imagem ${selected + 1}`} fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
    {images.length > 1 && <div className="gallery-thumbnails">{images.map((image, index) => <button className={selected === index ? "selected" : ""} onClick={() => setSelected(index)} key={`${image}-${index}`} aria-label={`Ver imagem ${index + 1} de ${name}`}><Image src={image} alt="" fill sizes="90px" /></button>)}</div>}
  </div>;
}
