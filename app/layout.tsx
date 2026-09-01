import type { Metadata } from "next";
import { CartProvider } from "@/hooks/useCart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = { title: { default: "Pathy | Moda para viver o verão", template: "%s | Pathy" }, description: "Moda praia leve, contemporânea e feita para os seus melhores dias." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><CartProvider><Header /><main>{children}</main><Footer /><WhatsAppButton /></CartProvider></body></html>;
}
