import { Clock, Instagram, MapPin, MessageCircle, Pill, Truck } from "lucide-react";
import logo from "@/assets/hobby-bichos-logo-amarela.png.asset.json";
import { BRAND, CLINIC, units, whatsappLink } from "@/data/units";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Unidades", href: "#unidades" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Hobby Bichos Pet Shop"
              width={80}
              height={80}
              loading="lazy"
              className="h-20 w-20 rounded-2xl object-contain"
            />
            <p className="font-display text-xl leading-tight">
              Hobby Bichos
              <span className="block text-sm font-semibold text-brand-yellow">
                {BRAND.tagline}
              </span>
            </p>
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/75">
            Rede de pet shops com {units.length} unidades em {BRAND.city}/{BRAND.state}. Produtos,
            alimentação, acessórios e banho &amp; tosa para cães e gatos.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2">
              <Pill className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden />
              Farmácia completa em todas as unidades
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden />
              Entrega (delivery) de medicamentos, rações e acessórios
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden />
              {BRAND.city} — {BRAND.state}
            </li>
          </ul>

          <div className="mt-6 max-w-md rounded-3xl bg-primary-foreground/10 p-5">
            <p className="flex items-center gap-2 font-display text-lg text-brand-yellow">
              <Clock className="h-5 w-5" aria-hidden />
              {CLINIC.label}
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              {CLINIC.description} — {CLINIC.street}, {CLINIC.neighborhood}, {CLINIC.city}/
              {CLINIC.state}. Telefone {CLINIC.phone}.
            </p>
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:underline"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              {CLINIC.instagramHandle}
            </a>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="font-display text-lg text-brand-yellow">Navegue</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-primary-foreground/80 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg text-brand-yellow">Fale com a gente</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-brand-yellow"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp {BRAND.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-brand-yellow"
              >
                <Instagram className="h-4 w-4" aria-hidden />
                {BRAND.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/15 px-4 pt-6 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Hobby Bichos Pet Shop · {BRAND.city}/{BRAND.state}. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
