import { Container } from "@/components/container";
import { DiscoverServicesCard } from "./components/discover-services-card";
import { ChartColumnIncreasing } from "lucide-react";
import { Tag } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { CallToActionSection } from "../call-to-action-section/call-to-action-section";

export function DiscoverServicesSection() {
  const cards = [
    {
      id: 1,
      icon: FilePenLine,
      title: "Documentações",
      description: "Documentos técnicos para conformidade regulatória",
      icon_text: CircleCheckBig,
      list_text: [
        "Manuais de BPF",
        "POPS (Procedimentos Operacionais Padrão)",
        "Memoriais Descritivos",
      ],
    },
    {
      id: 2,
      icon: ChartColumnIncreasing,
      title: "Planilhas de Controle",
      description: "Sistemas de monitoramento e controle de qualidade",
      icon_text: CircleCheckBig,
      list_text: [
        "Limpeza e Higienização",
        "Controle de Temperaturas",
        "Rastreabilidade de Matéria Prima",
        "Manutenção de Instalações e Equipamentos",
        "Controle de ASOS",
        "Controle de Pragas",
      ],
    },
    {
      id: 3,
      icon: Tag,
      title: "Rotulagem",
      description: "Consultoria especializada em rotulagem",
      icon_text: CircleCheckBig,
      list_text: [
        "Elaboração de Rotulagem",
        "Correção de Rotulagem",
        "Tabela Nutricional",
      ],
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Treinamentos",
      description: "Capacitação especializada para sua equipe",
      icon_text: CircleCheckBig,
      list_text: [
        "Boas Práticas de Fabricação",
        "Manipulação Segura de Alimentos",
      ],
    },
  ];

  return (
    <>
      <Container>
        <div className="flex flex-col items-center gap-4 mt-[56px] mb-4">
          <h1 className="text-3xl font-bold lg:text-5xl">Conhecer Serviços</h1>
          <p className="text-center text-lg lg:text-2xl">
            Conheça em detalhes cada um dos meus serviços especializados em
            inspeção e segurança de alimentos
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-14 lg:grid-cols-2">
          {cards.map((card) => (
            <DiscoverServicesCard
              key={card.id}
              icon_card={card.icon}
              title={card.title}
              description={card.description}
              icon_text={card.icon_text}
              list_text={card.list_text}
            />
          ))}
        </div>
      </Container>
      <CallToActionSection />
    </>
  );
}
