import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/hobby-bichos-logo.png.asset.json";
import { BRAND, units, whatsappLink } from "@/data/units";

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
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 rounded-2xl bg-brand-yellow object-contain p-1"
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
          <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/75">
            <MapPin className="h-4 w-4 text-brand-yellow" aria-hidden />
            {BRAND.city} — {BRAND.state}
          </p>
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
