import { Bath, Cat, Clock, Dog, Pill, ShoppingBag, Syringe, Truck } from "lucide-react";
import banhoTosa from "@/assets/banho-tosa.jpg";
import gato from "@/assets/gato.jpg";
import { BrandButton } from "./BrandButton";
import { SectionTitle } from "./SectionTitle";
import { CLINIC, whatsappLink } from "@/data/units";

const services = [
  {
    icon: Pill,
    title: "Farmácia completa",
    text: "Todas as unidades da rede contam com farmácia veterinária completa.",
  },
  {
    icon: Clock,
    title: "Clínica 24 horas",
    text: `${CLINIC.label} — ${CLINIC.description}, em ${CLINIC.neighborhood}.`,
  },
  {
    icon: Truck,
    title: "Entrega (delivery)",
    text: "Medicamentos, rações, petiscos e acessórios entregues no conforto da sua casa.",
  },
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
          description="Encontre produtos, cuidados e serviços para facilitar a rotina com o seu pet."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={banhoTosa}
                alt="Cachorro sorrindo durante o banho no pet shop"
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-3xl object-cover object-top"
              />
              <img
                src={gato}
                alt="Gato tranquilo sendo cuidado na Hobby Bichos"
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-3xl object-cover object-center"
              />
            </div>
            <div className="rounded-3xl bg-brand-blue p-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
