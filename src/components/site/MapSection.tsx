import { MessageCircle, Navigation } from "lucide-react";
import {
  BRAND,
  mapsDirectionsLink,
  mapsEmbedLink,
  units,
  whatsappLink,
  type Unit,
} from "@/data/units";
import { BrandButton } from "./BrandButton";
import { cn } from "@/lib/utils";

type Props = {
  selected: Unit;
  onSelect: (unit: Unit) => void;
};

export function MapSection({ selected, onSelect }: Props) {
  return (
    <div className="mt-16 overflow-hidden rounded-4xl border-2 border-border bg-card shadow-soft" data-reveal>
      <div className="grid lg:grid-cols-[minmax(0,320px)_1fr]">
        <div className="border-b border-border bg-muted/50 p-5 lg:border-b-0 lg:border-r">
          <p className="font-display text-lg text-brand-blue-deep">Unidades no mapa</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Toque em uma unidade para vê-la no mapa de {BRAND.city}.
          </p>
          <ul className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {units.map((unit) => (
              <li key={unit.id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => onSelect(unit)}
                  aria-pressed={selected.id === unit.id}
                  className={cn(
                    "w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition-colors",
                    selected.id === unit.id
                      ? "bg-brand-blue text-primary-foreground"
                      : "bg-background text-brand-blue-deep hover:bg-accent",
                  )}
                >
                  {unit.neighborhood}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <iframe
            key={selected.id}
            title={`Mapa da ${selected.name}`}
            src={mapsEmbedLink(selected.mapQuery)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 sm:h-[26rem]"
          />
          <div className="border-t border-border bg-card p-5">
            <p className="font-display text-lg leading-tight text-brand-blue-deep">
              {selected.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {selected.street} — {selected.neighborhood}, {selected.city}/{selected.state}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <BrandButton
                as="a"
                href={mapsDirectionsLink(selected.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Como chegar
              </BrandButton>
              <BrandButton
                as="a"
                href={whatsappLink(
                  selected.whatsapp ?? BRAND.whatsapp,
                  `Olá! Gostaria de falar com a ${selected.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar no WhatsApp
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
