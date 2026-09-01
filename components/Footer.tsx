import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return <footer className="footer">
    <div className="footer-grid page-shell">
      <div><Link className="logo footer-logo" href="/">Pathy<span>.</span></Link><p>Moda para viver o verão do seu jeito, com leveza, cor e conforto.</p></div>
      <div><h2>Explore</h2><Link href="/catalogo">Catálogo</Link><Link href="/catalogo?categoria=Biqu%C3%ADnis">Biquínis</Link><Link href="/catalogo?categoria=Mai%C3%B4s">Maiôs</Link><Link href="/catalogo?categoria=Sa%C3%ADdas">Saídas de praia</Link></div>
      <div><h2>Atendimento</h2><p><MessageCircle /> WhatsApp</p><p><Mail /> contato@pathy.com.br</p><p><MapPin /> Fortaleza, CE</p></div>
      <div><h2>Siga a Pathy</h2><p><Instagram /> @usepathy</p><small>Imagens e informações deste protótipo são demonstrativas.</small></div>
    </div>
    <div className="footer-bottom page-shell"><span>© 2026 Pathy. Todos os direitos reservados.</span><span>Feito para dias de sol.</span></div>
  </footer>;
}
