# 🌊 Pathy — Moda Praia

<p align="center">
  <strong>E-commerce responsivo de moda praia desenvolvido com foco em experiência, performance e qualidade.</strong>
</p>

<p align="center">
  <a href="https://pathy-moda-praia.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Acessar%20Projeto-Vercel-black?style=for-the-badge" />
  </a>
  <a href="https://github.com/Shersirotzky/pathy-modaPraia">
    <img src="https://img.shields.io/badge/GitHub-Repositório-black?style=for-the-badge&logo=github" />
  </a>
</p>

---

## ✨ Sobre o projeto

A **Pathy** é um protótipo de e-commerce de moda praia desenvolvido para oferecer uma experiência mais moderna, leve e responsiva.

O projeto foi construído inicialmente como uma proposta de modernização de um catálogo existente, priorizando:

- experiência visual;
- responsividade;
- navegação simples;
- apresentação dos produtos;
- interação com o usuário;
- estrutura preparada para futuras automações de QA.

🔗 **Deploy:**  
https://pathy-moda-praia.vercel.app/

---

## 🖥️ Funcionalidades

### Home
- Hero responsivo
- Efeito de máquina de escrever
- Categorias de produtos
- Novidades da estação
- Produtos em destaque
- Carrossel responsivo
- Integração visual com WhatsApp

### Catálogo
- Listagem de produtos
- Busca
- Filtros
- Ordenação
- Informações de disponibilidade
- Visualização responsiva

### Produto
- Galeria de imagens
- Seleção de cor
- Seleção de tamanho
- Controle de estoque por variante
- Validação antes de adicionar ao carrinho

### Carrinho
- Adição e remoção de produtos
- Alteração de quantidade
- Cálculo de subtotal
- Persistência utilizando `localStorage`

---

## 🎨 Experiência e interações

O projeto também possui interações voltadas para uma experiência mais fluida:

- zoom suave nas imagens dos produtos;
- troca de imagem no hover;
- CTA `Ver produto`;
- carrossel com navegação por setas;
- swipe em dispositivos móveis;
- animações sutis no hero;
- suporte a `prefers-reduced-motion`.

---

## 📱 Responsividade

A interface foi desenvolvida com abordagem **mobile-first**.

Testada para diferentes tamanhos de tela:

| Dispositivo | Experiência |
|---|---|
| 📱 Mobile | ✅ |
| Tablet | ✅ |
| 💻 Desktop | ✅ |

---

## 🛠️ Tecnologias

<p>
  <img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3" />
  <img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" />
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github" />
</p>

---

## 🧱 Estrutura do projeto

```text
pathy/
├── app/
│   ├── carrinho/
│   ├── catalogo/
│   ├── produto/
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── FeaturedCarousel.tsx
│   ├── ProductGallery.tsx
│   └── Footer.tsx
│
├── data/
│   └── products.ts
│
├── hooks/
│   └── useCart.tsx
│
├── public/
│   └── images/
│
└── types/
    └── product.ts
