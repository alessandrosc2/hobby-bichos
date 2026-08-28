import { Bath, Cat, Dog, ShoppingBag, Syringe } from "lucide-react";
import banhoTosa from "@/assets/banho-tosa.jpg";
import { BrandButton } from "./BrandButton";
import { SectionTitle } from "./SectionTitle";
import { whatsappLink } from "@/data/units";

const services = [
  {
    icon: ShoppingBag,
    title: "Pet Shop",
    text: "Alimentação, higiene, acessórios e cuidados para cães e gatos em todas as unidades.",
  },
  {
    icon: Bath,
    title: "Banho & Tosa",
    text: "Equipe especializada, com atendimento por ordem de chegada e limite de vagas diárias.",
  },
  {
    icon: Dog,
    title: "Produtos para cães",
    text: "Rações, petiscos, brinquedos e itens de cuidado para cães de todos os portes.",
  },
  {
    icon: Cat,
    title: "Produtos para gatos",
    text: "Alimentação, areia, arranhadores e acessórios pensados para o dia a dia felino.",
  },
  {
    icon: Syringe,
    title: "Campanhas de vacinação",
    text: "Ações e campanhas realizadas nas unidades, como o Dia D da vacinação antirrábica.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Serviços"
          title="Tudo o que o seu pet precisa"
          description="Serviços confirmados na comunicação oficial da Hobby Bichos. Novos serviços podem ser adicionados a qualquer momento."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative overflow-hidden rounded-4xl bg-brand-blue">
            <img
              src={banhoTosa}
              alt="Cachorro sorrindo durante o banho no pet shop"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full max-h-[30rem] w-full object-cover opacity-95"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue-deep/95 to-transparent p-6">
              <p className="font-display text-2xl text-primary-foreground">Banho &amp; Tosa</p>
              <p className="mt-1 text-sm text-primary-foreground/85">
                Unidade Epitácio Pessoa: segunda a quinta, 07h às 15h · sexta e sábado, 07h às 14h.
                Atendimento por ordem de chegada.
              </p>
              <BrandButton
                as="a"
                href={whatsappLink(
                  undefined,
                  "Olá! Gostaria de informações sobre banho e tosa na Hobby Bichos.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow"
                size="sm"
                className="mt-4"
              >
                Agendar informações
              </BrandButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border-2 border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-blue-deep">
                  <service.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl leading-tight text-brand-blue-deep">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            ))}
            <article className="flex flex-col justify-center rounded-3xl border-2 border-dashed border-brand-blue/25 bg-muted/40 p-6 text-sm text-muted-foreground">
              Espaço reservado para novos serviços confirmados pela marca.
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
