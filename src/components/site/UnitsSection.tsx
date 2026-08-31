import { useState } from "react";
import { units, type Unit } from "@/data/units";
import { SectionTitle } from "./SectionTitle";
import { UnitCard } from "./UnitCard";
import { MapSection } from "./MapSection";

export function UnitsSection() {
  const [selected, setSelected] = useState<Unit>(units[0]!);

  return (
    <section id="unidades" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nossas unidades"
          title="Tem uma Hobby Bichos pertinho de você"
          description="Escolha a unidade mais próxima, veja o endereço completo e fale direto com a equipe pelo WhatsApp."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              active={selected.id === unit.id}
              onSelect={setSelected}
            />
          ))}
        </div>

        <MapSection selected={selected} onSelect={setSelected} />
      </div>
    </section>
  );
}
