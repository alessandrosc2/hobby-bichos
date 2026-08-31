import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { BRAND, mapsDirectionsLink, whatsappLink, type Unit } from "@/data/units";
import { BrandButton } from "./BrandButton";
import { cn } from "@/lib/utils";

type Props = {
  unit: Unit;
  active?: boolean;
  onSelect?: (unit: Unit) => void;
};

export function UnitCard({ unit, active, onSelect }: Props) {
  return (
    <article
      itemScope
      itemType="https://schema.org/PetStore"
      onClick={() => onSelect?.(unit)}
      className={cn(
        "group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border-2 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand",
        active ? "border-brand-blue shadow-brand" : "border-border",
      )}
    >
      {unit.photo ? (
        <img
          src={unit.photo}
          alt={`Fachada da ${unit.name}`}
          loading="lazy"
          className="h-40 w-full object-cover"
        />
      ) : (
        <div className="flex h-40 flex-col items-center justify-center gap-2 bg-brand-yellow-soft text-center">
          <MapPin className="h-9 w-9 text-brand-blue-deep" aria-hidden />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue-deep">
            Foto em breve
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">
            {unit.neighborhood}
          </p>
          <h3
            className="mt-1 font-display text-xl leading-tight text-brand-blue-deep"
            itemProp="name"
          >
            {unit.name}
          </h3>
        </div>

        <address
          className="not-italic text-sm leading-relaxed text-muted-foreground"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">{unit.street}</span>
          <br />
          <span itemProp="addressLocality">{unit.neighborhood}</span>,{" "}
          <span itemProp="addressRegion">{unit.state}</span>
          <br />
          <span itemProp="postalCode">CEP {unit.postalCode}</span>
        </address>

        {unit.hours ? (
          <ul className="space-y-1 text-sm text-muted-foreground">
            {unit.hours.map((h) => (
              <li key={h} className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-xl border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
            Consulte horários e disponibilidade pelo WhatsApp.
          </p>
        )}

        <p className="flex items-center gap-2 text-sm font-semibold text-brand-blue-deep">
          {unit.whatsapp || unit.phone ? (
            <Phone className="h-4 w-4 text-brand-blue" aria-hidden />
          ) : (
            <MessageCircle className="h-4 w-4 text-brand-blue" aria-hidden />
          )}
          <span itemProp={unit.whatsapp || unit.phone ? "telephone" : undefined}>
            {unit.phone ??
              (unit.whatsapp ? BRAND.whatsappDisplay : "Fale com a equipe pelo WhatsApp")}
          </span>
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
          <BrandButton
            as="a"
            href={mapsDirectionsLink(unit.mapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Navigation className="h-4 w-4" aria-hidden />
            Como chegar
          </BrandButton>
          <BrandButton
            as="a"
            href={whatsappLink(
              unit.whatsapp ?? BRAND.whatsapp,
              `Olá! Gostaria de falar com a ${unit.name}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
            className="flex-1"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </BrandButton>
        </div>
      </div>
    </article>
  );
}
