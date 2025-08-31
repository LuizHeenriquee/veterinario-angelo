import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Props = {
  icon_card: LucideIcon;
  title: string;
  description: string;
  icon_text: LucideIcon;
  list_text: string[];
};

export function DiscoverServicesCard({
  icon_card: Icon,
  title,
  description,
  icon_text: IconText,
  list_text,
}: Props) {
  return (
    <Card className="flex flex-col items-center gap-6 min-w-[394px] min-h-[419px] hover:shadow-xl transition-shadow duration-300 ease-in-out lg:p-4 lg:w-full">
      <div className="border rounded-full p-4">
        <Icon className="text-primary" />
      </div>
      <h3 className="text-2xl text-center font-bold">{title}</h3>
      <p className="text-center text-lg">{description}</p>
      <ul className="flex flex-col gap-2 pl-4 lg:pl-0">
        {list_text.map((text, index) => (
          <li key={index} className="flex items-center gap-2">
            <IconText className="text-primary" />
            <p className="text-md">{text}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
