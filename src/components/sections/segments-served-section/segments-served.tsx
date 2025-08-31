import { Container } from "@/components/container";
import { CircleCheckBig, Factory, ShoppingCart } from "lucide-react";
import { SegmentsCard } from "./components/segments-card";

export function SegmentsServed() {
  const cards = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Supermercados/Açougues",
      description:
        "Consultoria especializada para redes de supermercados e estabelecimentos de varejo alimentar",
      icon_text: CircleCheckBig,
      list_text: [
        "Adequação de Processos de recebimento",
        "Controle de Temperatura e Armazenamento",
        "Treinamento de Equipes de Manipulação",
        "Documentação para Vigilância Sanitária",
      ],
    },
    {
      id: 2,
      icon: Factory,
      title: "Indústrias de Produtos de Origem Animal",
      description:
        "Serviços especializados para indústrias que processam produtos de origem animal",
      icon_text: CircleCheckBig,
      list_text: [
        "Implementação de HACCP, PACS",
        "Adequação às normas dos Órgãos Fiscalizadores",
        "Controle de Qualidade Microbiológica",
        "Certificações e Auditorias",
      ],
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Segmentos Atendidos
          </h2>
          <p className="text-center text-lg lg:text-2xl">
            Experiência especializada nos principais setores da indústria de
            alimentos
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center lg:justify-between lg:flex-row">
          {cards.map((card) => (
            <SegmentsCard
              key={card.id}
              icon_card={card.icon}
              title={card.title}
              description={card.description}
              icon_text={card.icon_text}
              list_text={card.list_text}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
