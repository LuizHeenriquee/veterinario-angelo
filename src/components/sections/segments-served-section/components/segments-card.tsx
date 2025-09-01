import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Props = {
  icon_card: LucideIcon;
  title: string;
  description: string;
  icon_text: LucideIcon;
  list_text: string[];
};

export function SegmentsCard({
  icon_card: Icon,
  title,
  description,
  icon_text: IconText,
  list_text,
}: Props) {
  return (
    <Card className="flex flex-col items-center min-w-[343.2px] min-h-[430px] justify-between hover:shadow-xl transition-shadow duration-300 ease-in-out lg:p-4">
      <Icon className="text-primary" />
      <h3 className="text-2xl text-center font-bold">{title}</h3>
      <p className="text-center text-lg pl-4 pr-4">{description}</p>
      <ul className="flex flex-col gap-3 pl-4 pr-4">
        {list_text.map((text, index) => (
          <li key={index} className="flex items-center gap-2">
            <IconText className="text-primary w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" />
            <p className="text-sm lg:text-[16px]">{text}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
