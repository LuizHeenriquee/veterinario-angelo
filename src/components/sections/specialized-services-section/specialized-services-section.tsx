import { FilePenLine } from "lucide-react";
import { ServicesCard } from "./components/services-card";
import { ChartColumnIncreasing } from "lucide-react";
import { Tag } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/container";

export function SpecializedServicesSection() {
  const cards = [
    {
      id: 1,
      icon: FilePenLine,
      title: "Documentações",
      description:
        "Elaboração e revisão de documentos técnicos para conformidade com normas sanitárias e regulamentações.",
    },
    {
      id: 2,
      icon: ChartColumnIncreasing,
      title: "Planilhas de Controle",
      description:
        "Desenvolvimento de sistemas de monitoramento e controle de qualidade para processos de manipulação de alimentos.",
    },
    {
      id: 3,
      icon: Tag,
      title: "Rotulagem",
      description:
        "Consultoria especializada em rotulagem nutricional e adequação às normas da ANVISA.",
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Treinamentos",
      description:
        "Capacitação de equipes e manipuladores em boas práticas de fabricação em segurança de alimentos.",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Serviços Especializados
          </h2>
          <p className="text-center text-lg lg:text-2xl">
            Soluções completas para garantir a conformidade e qualidade dos seus
            produtos
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center lg:justify-between lg:flex-row">
          {cards.map((card) => (
            <ServicesCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
