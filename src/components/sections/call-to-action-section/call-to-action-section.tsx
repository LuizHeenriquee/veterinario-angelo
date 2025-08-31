import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsAppRedIcon from "../../../assets/wpp-logo-red.png";
import Image from "next/image";

export function CallToActionSection() {
  return (
    <div className="flex flex-col items-center gap-4 bg-primary text-primary-foreground p-4 pt-7 pb-7 lg:pt-14 lg:pb-14">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-2xl font-bold lg:text-4xl">
          Pronto para garantir a segurança dos seus alimentos?
        </h2>
        <p className="text-center text-xl">
          Entre em contato agora e receba uma consultoria personalizada para
          suas necessidades
        </p>
      </div>
      <Link href="#">
        <Button
          variant="outline"
          className="text-primary hover:text-primary hover:cursor-pointer"
        >
          <Image src={WhatsAppRedIcon} alt="WhatsApp Icon" width={15} />
          Receber mais informações no WhatsApp
        </Button>
      </Link>
    </div>
  );
}
