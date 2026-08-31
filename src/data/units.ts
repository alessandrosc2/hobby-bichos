import unidade1 from "@/assets/unidade-1.jpg";
import unidade2 from "@/assets/unidade-2.jpg";
import unidade3 from "@/assets/unidade-3.jpg";

export type Unit = {
  id: string;
  name: string;
  neighborhood: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  /** Telefone/WhatsApp — preencher quando confirmado pela marca */
  phone?: string;
  whatsapp?: string;
  /** Horários — preencher quando confirmados */
  hours?: string[];
  /** Foto da unidade — preencher quando disponível */
  photo?: string;
  /** Coordenadas — opcional, usadas apenas se confirmadas */
  mapQuery: string;
};

export const BRAND = {
  name: "Hobby Bichos",
  tagline: "Seu Pet, nossa paixão!",
  city: "João Pessoa",
  state: "PB",
  instagram: "https://instagram.com/hobbybichospet",
  instagramHandle: "@hobbybichospet",
  /** WhatsApp central divulgado na comunicação da unidade Epitácio Pessoa */
  whatsapp: "5583999842360",
  whatsappDisplay: "(83) 99984-2360",
};

/** Clínica veterinária 24 horas da rede */
export const CLINIC = {
  name: "Minha Cria Hobby Bichos",
  label: "Minha Cria Hobby Bichos | 24 horas",
  description: "Clínica Veterinária e Petshop 24 horas",
  street: "R. Dr. Frutuoso Dantas, 63",
  neighborhood: "Cabo Branco",
  city: "João Pessoa",
  state: "PB",
  phone: "3247-6144",
  instagram: "https://instagram.com/minhacria_hobbybichos",
  instagramHandle: "@minhacria_hobbybichos",
  mapQuery: "Minha Cria Hobby Bichos, R. Dr. Frutuoso Dantas, 63, Cabo Branco, João Pessoa - PB",
};

export const whatsappLink = (
  number: string = BRAND.whatsapp,
  message = "Olá! Vim pelo site da Hobby Bichos e gostaria de mais informações.",
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const mapsDirectionsLink = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const mapsEmbedLink = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const units: Unit[] = [
  {
    id: "epitacio",
    photo: unidade1,
    name: "Hobby Bichos Epitácio",
    neighborhood: "Miramar",
    street: "Av. Presidente Epitácio Pessoa, 4129",
    city: "João Pessoa",
    state: "PB",
    postalCode: "58032-000",
    whatsapp: "5583999842360",
    hours: [
      "Banho & Tosa · Segunda a quinta: 07h às 15h",
      "Banho & Tosa · Sexta e sábado: 07h às 14h",
    ],
    mapQuery: "Hobby Bichos, Av. Presidente Epitácio Pessoa, 4129, Miramar, João Pessoa - PB",
  },
  {
    id: "manaira",
    photo: unidade2,
    name: "Hobby Bichos Manaíra",
    neighborhood: "Manaíra",
    street: "Av. Monteiro da Franca, 1149",
    city: "João Pessoa",
    state: "PB",
    postalCode: "58038-320",
    mapQuery: "Hobby Bichos, Av. Monteiro da Franca, 1149, Manaíra, João Pessoa - PB",
  },
  {
    id: "altiplano",
    photo: unidade3,
    name: "Hobby Bichos Altiplano",
    neighborhood: "Altiplano Cabo Branco",
    street: "Rua Poeta Targino Teixeira, 251",
    city: "João Pessoa",
    state: "PB",
    postalCode: "58046-090",
    mapQuery:
      "Hobby Bichos, Rua Poeta Targino Teixeira, 251, Altiplano Cabo Branco, João Pessoa - PB",
  },
  {
    id: "geisel",
    name: "Hobby Bichos Geisel",
    neighborhood: "Ernesto Geisel",
    street: "Rua Abelardo Targino da Fonseca, 670",
    city: "João Pessoa",
    state: "PB",
    postalCode: "58075-418",
    mapQuery:
      "Hobby Bichos, Rua Abelardo Targino da Fonseca, 670, Ernesto Geisel, João Pessoa - PB",
  },
  {
    id: "bessa",
    name: "Hobby Bichos Bessa",
    neighborhood: "Jardim Oceania",
    street: "Av. Fernando Luiz Henriques dos Santos, 70",
    city: "João Pessoa",
    state: "PB",
    postalCode: "58037-050",
    mapQuery:
      "Hobby Bichos, Av. Fernando Luiz Henriques dos Santos, 70, Jardim Oceania, João Pessoa - PB",
  },
  {
    id: "tambau",
    name: "Hobby Bichos Tambaú",
    neighborhood: "Tambaú",
    street: "Rua Nossa Senhora dos Navegantes, 952",
    city: "João Pessoa",
    state: "PB",
    postalCode: "58039-111",
    mapQuery: "Hobby Bichos, Rua Nossa Senhora dos Navegantes, 952, Tambaú, João Pessoa - PB",
  },
  // Sétima unidade: aguardando confirmação. Basta adicionar o objeto aqui.
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Nossas Unidades", href: "#unidades" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Dicas", href: "#dicas" },
  { label: "Contato", href: "#contato" },
];
