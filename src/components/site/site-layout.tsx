import { Link } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { brand, navItems, whatsappUrl } from "@/lib/site-data";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" aria-label="Ir para o início" className="group flex min-w-0 items-center gap-3">
      <span className={`grid size-10 shrink-0 place-items-center rounded-full border font-display text-xl italic ${inverse ? "border-primary-foreground/30 text-primary-foreground" : "border-gold/50 text-primary"}`}>A</span>
      <span className="min-w-0 leading-none">
        <strong className={`block truncate font-display text-lg font-medium ${inverse ? "text-primary-foreground" : "text-foreground"}`}>{brand.name}</strong>
        <span className={`mt-1 block text-[10px] uppercase tracking-[0.18em] ${inverse ? "text-primary-foreground/65" : "text-muted-foreground"}`}>Psicologia clínica</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <BrandMark />
        <div className="hidden items-center gap-5 lg:flex">
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
            {navItems.map((item) => <Link key={item.to} to={item.to} className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
          </nav>
          <Button asChild size="lg" className="rounded-full px-5"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Agendar atendimento</a></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Navegação móvel">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary">{item.label}</Link>)}
            <Button asChild className="mt-3 h-12 rounded-full"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Agendar atendimento</a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div><BrandMark inverse /><p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/70">Um espaço de escuta e cuidado emocional em Adamantina — SP.</p><p className="mt-3 text-xs text-primary-foreground/55">{brand.crp}</p></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Navegação</h2><div className="mt-5 grid grid-cols-2 gap-3">{navItems.slice(0, 6).map((item) => <Link key={item.to} to={item.to} className="text-sm text-primary-foreground/65 hover:text-primary-foreground">{item.label}</Link>)}</div></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Contato</h2><div className="mt-5 grid gap-4 text-sm text-primary-foreground/70"><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-foreground"><MessageCircle className="size-4" />{brand.phoneDisplay}</a><a href={brand.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-foreground"><Instagram className="size-4" />Instagram</a><span>{brand.location}</span></div></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</span><Link to="/privacidade" className="hover:text-primary-foreground">Aviso de privacidade</Link></div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) { return <><SiteHeader /><main>{children}</main><SiteFooter /></>; }

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"><span className="h-px w-8 bg-gold" />{children}</p>; }

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="bg-secondary"><div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-3xl"><Eyebrow>{eyebrow}</Eyebrow><h1 className="font-display text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{text}</p></div></div></section>;
}

export function FinalCta() {
  return <section className="bg-accent py-20 text-accent-foreground lg:py-28"><div className="mx-auto max-w-4xl px-5 text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Um convite ao cuidado</p><h2 className="mt-5 font-display text-4xl leading-tight text-balance sm:text-5xl">Dar o primeiro passo também é uma forma de cuidar de você.</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-accent-foreground/75">Se você sente que está na hora de olhar com mais atenção para sua saúde emocional, entre em contato para saber mais sobre o atendimento.</p><Button asChild size="lg" className="mt-9 h-12 rounded-full bg-background px-7 text-foreground hover:bg-secondary"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Agendar atendimento</a></Button></div></section>;
}
