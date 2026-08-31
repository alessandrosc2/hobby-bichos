import { MapPin, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/units";
import { BrandButton } from "./BrandButton";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-brand-yellow px-6 py-14 text-center sm:px-12">
        <div className="paw-pattern pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="relative" data-reveal>
          <h2 className="text-balance-title font-display text-3xl leading-tight text-brand-blue-deep sm:text-4xl lg:text-5xl">
            Tem uma Hobby Bichos perto de você.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-blue-deep/80 sm:text-lg">
            Encontre a unidade mais próxima e fale agora com nossa equipe.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <BrandButton as="a" href="#unidades" size="lg">
              <MapPin className="h-5 w-5" aria-hidden />
              Encontrar unidade
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
        </div>
      </div>
    </section>
  );
}
