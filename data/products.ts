import type { Category, Product, ProductVariant } from "@/types/product";

const palette = {
  Preto: "#252525",
  Verde: "#34776f",
  Rosa: "#d98991",
  Coral: "#d87562",
  Turquesa: "#137f87",
  Areia: "#c8ad8d",
  Azul: "#315f84",
  Branco: "#f4f0e8",
  Estampado: "#d79b7f",
};

function variants(colors: (keyof typeof palette)[], sizes: string[], seed = 1): ProductVariant[] {
  return colors.flatMap((color, colorIndex) =>
    sizes.map((size, sizeIndex) => ({
      color,
      colorHex: palette[color],
      size,
      stock: (colorIndex * 3 + sizeIndex + seed) % 6,
    })),
  );
}

const bikini = "/images/bikini-eden.png";
const coverup = "/images/saida-solar.png";
const swimsuit = "/images/maio-atlantico.png";

export const products: Product[] = [
  {
    id: "prod_001", name: "Biquíni Eden", slug: "biquini-eden", category: "Biquínis",
    description: "Biquíni de toque macio com modelagem ajustável e acabamento delicado. Feito para acompanhar dias inteiros de sol com conforto.",
    images: [bikini, "/images/bikini-eden.png"], price: 70, promotionalPrice: 59.9, isNew: true, featured: true,
    variants: variants(["Preto", "Verde", "Rosa"], ["P", "M", "G", "GG"], 1),
  },
  {
    id: "prod_002", name: "Maiô Atlântico", slug: "maio-atlantico", category: "Maiôs",
    description: "Maiô assimétrico com linhas limpas e sustentação confortável. Uma peça versátil para a praia e além dela.",
    images: [swimsuit, "/images/maio-atlantico.png"], price: 129.9, featured: true,
    variants: variants(["Turquesa", "Preto", "Coral"], ["P", "M", "G", "GG"], 2),
  },
  {
    id: "prod_003", name: "Saída Solar", slug: "saida-solar", category: "Saídas",
    description: "Saída longa e fluida em tecido leve, com caimento suave e estampa inspirada nas tardes de verão.",
    images: [coverup, "/images/saida-solar.png"], price: 159.9, promotionalPrice: 139.9, isNew: true, featured: true,
    variants: variants(["Estampado", "Branco"], ["P", "M", "G"], 3),
  },
  {
    id: "prod_004", name: "Biquíni Brisa", slug: "biquini-brisa", category: "Biquínis",
    description: "Conjunto clássico com alças finas e calcinha de amarração lateral.", images: [bikini], price: 84.9, featured: true,
    variants: variants(["Verde", "Coral", "Preto"], ["P", "M", "G"], 4),
  },
  {
    id: "prod_005", name: "Maiô Aurora", slug: "maio-aurora", category: "Maiôs",
    description: "Modelagem elegante com decote assimétrico e tecido de alta elasticidade.", images: [swimsuit], price: 119.9, isNew: true,
    variants: variants(["Coral", "Turquesa"], ["P", "M", "G", "GG"], 5),
  },
  {
    id: "prod_006", name: "Kimono Maré", slug: "kimono-mare", category: "Saídas",
    description: "Kimono leve para sobreposição, com movimento e toque sedoso.", images: [coverup], price: 149.9,
    variants: variants(["Estampado", "Areia"], ["P", "M", "G"], 1),
  },
  {
    id: "prod_007", name: "Short Areia", slug: "short-areia", category: "Shorts",
    description: "Short de cintura alta, tecido fresco e bolsos laterais.", images: [coverup], price: 89.9, promotionalPrice: 69.9,
    variants: variants(["Areia", "Branco", "Verde"], ["36", "38", "40", "42"], 2),
  },
  {
    id: "prod_008", name: "Sunga Oceano", slug: "sunga-oceano", category: "Masculino",
    description: "Sunga masculina de secagem rápida e ajuste anatômico.", images: [swimsuit], price: 74.9,
    variants: variants(["Azul", "Preto", "Turquesa"], ["P", "M", "G", "GG"], 3),
  },
  {
    id: "prod_009", name: "Short Marinho", slug: "short-marinho", category: "Masculino",
    description: "Short de banho masculino com cós ajustável e bolso funcional.", images: [swimsuit], price: 99.9, isNew: true,
    variants: variants(["Azul", "Preto"], ["P", "M", "G", "GG"], 4),
  },
  {
    id: "prod_010", name: "Maiô Mini Sol", slug: "maio-mini-sol", category: "Infantil",
    description: "Maiô infantil confortável, com toque macio e proteção para brincar ao sol.", images: [swimsuit], price: 69.9,
    variants: variants(["Rosa", "Turquesa"], ["2", "4", "6", "8"], 5),
  },
  {
    id: "prod_011", name: "Biquíni Mini Coral", slug: "biquini-mini-coral", category: "Infantil",
    description: "Conjunto infantil alegre e confortável para os dias de praia.", images: [bikini], price: 64.9, promotionalPrice: 54.9,
    variants: variants(["Coral", "Verde"], ["4", "6", "8", "10"], 1),
  },
  {
    id: "prod_012", name: "Biquíni Essência", slug: "biquini-essencia", category: "Biquínis",
    description: "Biquíni minimalista com acabamento premium e ajuste versátil.", images: [bikini], price: 79.9,
    variants: variants(["Preto"], ["P", "M", "G"], 0).map((variant) => ({ ...variant, stock: 0 })),
  },
];

export const categories: { name: Category; image: string; tone: string }[] = [
  { name: "Biquínis", image: bikini, tone: "#ead9cb" },
  { name: "Maiôs", image: swimsuit, tone: "#d7e3df" },
  { name: "Saídas", image: coverup, tone: "#f1d9cb" },
  { name: "Masculino", image: swimsuit, tone: "#dbe4e5" },
  { name: "Infantil", image: bikini, tone: "#eee0d5" },
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const hasStock = (product: Product) => product.variants.some((variant) => variant.stock > 0);
