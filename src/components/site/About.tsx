import { Heart, PawPrint, Store } from "lucide-react";
import loja from "@/assets/loja.jpg";
import { units } from "@/data/units";
import { SectionTitle } from "./SectionTitle";

const highlights = [
  { icon: Store, value: `${units.length}`, label: "unidades em João Pessoa" },
  { icon: PawPrint, value: "Cães e gatos", label: "produtos para toda a família pet" },
  { icon: Heart, value: "Atendimento próximo", label: "equipe apaixonada por animais" },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={loja}
            alt="Interior de uma loja Hobby Bichos com prateleiras de produtos para pets"
            width={1200}
            height={800}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-4xl object-cover shadow-brand"
          />
          <div className="absolute -right-3 -top-6 hidden rounded-3xl bg-brand-yellow px-5 py-4 shadow-soft sm:block">
            <p className="font-display text-2xl leading-none text-brand-blue-deep">
              Seu Pet,
              <span className="block text-brand-red">nossa paixão!</span>
            </p>
          </div>
        </div>

        <div>
          <SectionTitle
            align="left"
            eyebrow="Sobre nós"
            title="Uma rede pet feita para quem ama animais"
            description="A Hobby Bichos é uma rede de pet shops de João Pessoa que reúne produtos, alimentação, acessórios e serviços de banho & tosa em lojas espalhadas pelos principais bairros da cidade. Nossa proposta é simples: oferecer atendimento próximo, variedade e cuidado de verdade com cada pet."
          />
          <p className="mt-4 rounded-2xl border border-dashed border-border bg-muted/60 p-4 text-sm text-muted-foreground">
            Espaço reservado para a história oficial da marca, tempo de atuação no mercado pet e
            números institucionais — pronto para receber o texto e as fotos oficiais.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <item.icon className="h-7 w-7 text-brand-blue" aria-hidden />
                <p className="mt-3 font-display text-lg leading-tight text-brand-blue-deep">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
