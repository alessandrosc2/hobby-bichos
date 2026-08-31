import { MapPin, MessageCircle, PawPrint } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import { BRAND, units, whatsappLink } from "@/data/units";
import { BrandButton } from "./BrandButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-yellow pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <div className="paw-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">
            <PawPrint className="h-3.5 w-3.5" aria-hidden />
            {BRAND.tagline}
          </span>
          <h1 className="text-balance-title mt-5 text-4xl leading-[1.05] text-brand-blue-deep sm:text-5xl lg:text-6xl">
            Seu pet merece cuidado, carinho e tudo o que precisa em{" "}
            <span className="relative inline-block text-brand-red">um só lugar.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-blue-deep/80">
            A Hobby Bichos está presente em {units.length} unidades em {BRAND.city}/{BRAND.state},
            com produtos, alimentação, acessórios e banho &amp; tosa para cães e gatos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BrandButton as="a" href="#unidades" size="lg">
              <MapPin className="h-5 w-5" aria-hidden />
              Encontrar uma unidade
            </BrandButton>
            <BrandButton
              as="a"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar pelo WhatsApp
            </BrandButton>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {[
              { value: `${units.length}`, label: "unidades em João Pessoa" },
              { value: "Cães & Gatos", label: "produtos e cuidados" },
              { value: "Banho & Tosa", label: "equipe especializada" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-background/80 px-4 py-3 shadow-soft backdrop-blur"
              >
                <dt className="font-display text-xl text-brand-blue">{item.value}</dt>
                <dd className="mt-1 text-xs font-semibold leading-snug text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-4xl bg-brand-blue/90" aria-hidden />
          <img
            src={heroPets}
            alt="Cachorros felizes vestindo camisetas amarelas da Hobby Bichos"
            width={1200}
            height={1200}
            loading="eager"
            fetchPriority="high"
            className="relative aspect-square w-full rounded-4xl object-cover shadow-brand"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-3xl bg-background px-4 py-3 shadow-brand sm:left-8">
            <PawPrint className="h-8 w-8 text-brand-red" aria-hidden />
            <p className="font-display text-sm leading-tight text-brand-blue-deep">
              Cuidado de verdade
              <span className="block text-xs font-semibold text-muted-foreground">
                para cada pet da família
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
