import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServicesCard({ icon: Icon, title, description }: Props) {
  return (
    <Card className="flex flex-col items-center justify-between h-[238px] lg:w-[250px] lg:h-[266px] hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Icon className="text-primary" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-center text-lg">{description}</p>
    </Card>
  );
}
