import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { UnitsSection } from "@/components/site/UnitsSection";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Highlights } from "@/components/site/Highlights";
import { InstagramSection } from "@/components/site/InstagramSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { units } from "@/data/units";

const title = "Hobby Bichos Pet Shop | Pet shop em João Pessoa - PB";
const description =
  "Rede de pet shops em João Pessoa/PB com unidades em Miramar, Manaíra, Altiplano, Geisel, Bessa e Tambaú. Produtos, alimentação, acessórios e banho & tosa para cães e gatos.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Hobby Bichos João Pessoa, pet shop João Pessoa, pet shop Manaíra, pet shop Tambaú, pet shop Altiplano, pet shop Bessa, pet shop Geisel, pet shop Miramar, banho e tosa João Pessoa",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hobby Bichos Pet Shop",
          slogan: "Seu Pet, nossa paixão!",
          url: "/",
          sameAs: ["https://instagram.com/hobbybichospet"],
          department: units.map((unit) => ({
            "@type": "PetStore",
            name: unit.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: unit.street,
              addressLocality: `${unit.neighborhood}, ${unit.city}`,
              addressRegion: unit.state,
              postalCode: unit.postalCode,
              addressCountry: "BR",
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <UnitsSection />
        <Services />
        <Products />
        <Highlights />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
