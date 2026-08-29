import { Sparkles } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

type Highlight = {
  id: string;
  badge: string;
  title: string;
  text: string;
  tone: "yellow" | "blue" | "red";
};

/** Estrutura pronta para promoções, novidades e campanhas. */
const highlights: Highlight[] = [
  {
    id: "vacinacao",
    badge: "Campanha",
    title: "Dia D da Vacinação Antirrábica",
    text: "Ação de vacinação realizada na unidade Epitácio Pessoa, em parceria com a cidade.",
    tone: "blue",
  },
  {
    id: "banho",
    badge: "Serviço",
    title: "Banho & Tosa na Epitácio Pessoa",
    text: "Atendimento de segunda a sábado, por ordem de chegada e com limite de vagas diárias.",
    tone: "yellow",
  },
  {
    id: "proximo",
    badge: "Em breve",
    title: "Espaço para nova campanha",
    text: "Área reservada para promoções, lançamentos e datas comemorativas das lojas.",
    tone: "red",
  },
];

const toneClasses: Record<Highlight["tone"], string> = {
  yellow: "bg-brand-yellow text-brand-blue-deep",
  blue: "bg-brand-blue text-primary-foreground",
  red: "bg-brand-red text-primary-foreground",
};

export function Highlights() {
  return (
    <section id="dicas" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Destaques & dicas"
          title="Novidades, campanhas e cuidados com o seu pet"
          description="Espaço para as campanhas e conteúdos da Hobby Bichos, no mesmo estilo dos posts da marca."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.id}
              className={`group flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-4xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand ${toneClasses[item.tone]}`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-background/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
                  {item.badge}
                </span>
                <Sparkles className="h-5 w-5 opacity-70 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
