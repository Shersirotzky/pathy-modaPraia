import Link from "next/link";
export default function NotFound() { return <section className="empty-page page-shell"><p className="eyebrow">Erro 404</p><h1>Esta página saiu para pegar um sol.</h1><p>O endereço pode ter mudado ou não existe.</p><Link className="button button-primary" href="/">Voltar ao início</Link></section>; }
