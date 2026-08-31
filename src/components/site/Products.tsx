import { Bone, Cat, Dog, Droplets, ShieldPlus, ShoppingBasket } from "lucide-react";
import gato from "@/assets/gato.jpg";
import { SectionTitle } from "./SectionTitle";

const categories = [
  { icon: Dog, name: "Cães", text: "Rações, coleiras e cuidados diários" },
  { icon: Cat, name: "Gatos", text: "Alimentação, areia e acessórios" },
  { icon: ShoppingBasket, name: "Alimentação", text: "Rações secas e úmidas" },
  { icon: Bone, name: "Petiscos", text: "Recompensas e mordedores" },
  { icon: Droplets, name: "Higiene", text: "Shampoos, tapetes e limpeza" },
  { icon: ShieldPlus, name: "Saúde e cuidados", text: "Itens de cuidado e prevenção" },
];

export function Products() {
  return (
    <section id="produtos" className="bg-brand-blue py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <SectionTitle
            align="left"
            tone="light"
            eyebrow="Produtos"
            title="Variedade para cada fase e cada bicho"
            description="Categorias disponíveis nas lojas Hobby Bichos. A lista pode ser ampliada conforme o mix de cada unidade."
          />
          <img
            src={gato}
            alt="Gato laranja curioso"
            width={900}
            height={900}
            loading="lazy"
            className="ml-auto hidden h-48 w-48 rounded-4xl object-cover shadow-brand lg:block"
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="group flex items-center gap-4 rounded-3xl bg-background/95 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-brand"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow text-brand-blue-deep transition-transform duration-300 group-hover:scale-105">
                <cat.icon className="h-7 w-7" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg leading-tight text-brand-blue-deep">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cat.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
