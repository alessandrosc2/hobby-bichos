import { Instagram, PawPrint } from "lucide-react";
import { BRAND } from "@/data/units";
import { BrandButton } from "./BrandButton";
import { SectionTitle } from "./SectionTitle";

/** Estrutura pronta para receber os posts reais do Instagram. */
const posts = [
  { id: "1", label: "Banho & Tosa", tone: "bg-brand-cream text-brand-blue-deep" },
  { id: "2", label: "Dia D Vacinação", tone: "bg-brand-blue text-primary-foreground" },
  { id: "3", label: "Antirrábica gratuita", tone: "bg-brand-yellow text-brand-blue-deep" },
  { id: "4", label: "Dia Mundial do Cão", tone: "bg-brand-red text-primary-foreground" },
];

export function InstagramSection() {
  return (
    <section className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Instagram"
          title="Acompanhe a Hobby Bichos"
          description={`Novidades, campanhas e muita fofura no ${BRAND.instagramHandle}.`}
        />

        <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand ${post.tone}`}
            >
              <PawPrint
                className="absolute right-4 top-4 h-8 w-8 opacity-25 transition-transform duration-300 group-hover:scale-110"
                aria-hidden
              />
              <p className="font-display text-lg leading-tight">{post.label}</p>
              <span className="mt-1 text-xs font-semibold opacity-80">{BRAND.instagramHandle}</span>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
          Estrutura preparada para exibir os posts reais do perfil quando as imagens forem enviadas.
        </p>

        <div className="mt-8 flex justify-center">
          <BrandButton
            as="a"
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            Seguir no Instagram
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
