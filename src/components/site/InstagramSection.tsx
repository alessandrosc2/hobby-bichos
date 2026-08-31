import { Instagram } from "lucide-react";
import instaBanho from "@/assets/insta-banho-tosa.jpg";
import instaVacinacao from "@/assets/insta-vacinacao.jpg";
import instaFarmacia from "@/assets/insta-farmacia.jpg";
import instaDelivery from "@/assets/insta-delivery.jpg";
import { BRAND } from "@/data/units";
import { BrandButton } from "./BrandButton";
import { SectionTitle } from "./SectionTitle";

/** Estrutura pronta para receber os posts reais do Instagram. */
const posts = [
  {
    id: "1",
    label: "Banho & Tosa",
    tone: "bg-brand-yellow text-brand-blue-deep",
    image: instaBanho,
  },
  {
    id: "2",
    label: "Campanhas de vacinação",
    tone: "bg-brand-blue text-primary-foreground",
    image: instaVacinacao,
  },
  {
    id: "3",
    label: "Farmácia completa",
    tone: "bg-brand-cream text-brand-blue-deep",
    image: instaFarmacia,
  },
  {
    id: "4",
    label: "Fazemos entregas",
    tone: "bg-brand-red text-primary-foreground",
    image: instaDelivery,
  },
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

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagram}
              aria-label={`Ver ${post.label} no Instagram`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand ${post.tone}`}
            >
              <img
                src={post.image}
                alt={post.label}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/85 via-brand-blue-deep/20 to-transparent"
                aria-hidden
              />
              <Instagram
                className="absolute right-4 top-4 h-7 w-7 text-primary-foreground/90"
                aria-hidden
              />
              <p className="relative font-display text-lg leading-tight text-primary-foreground">
                {post.label}
              </p>
              <span className="relative mt-1 text-xs font-semibold text-primary-foreground/80">
                {BRAND.instagramHandle}
              </span>
            </a>
          ))}
        </div>

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
