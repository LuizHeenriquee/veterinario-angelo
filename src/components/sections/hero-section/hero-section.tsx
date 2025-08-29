import Image from "next/image";
import LogoSolo from "../../../assets/logo-solo-black-red.png";
import WhatsAppIcon from "../../../assets/icons/wpp-icon.svg";

import Link from "next/link";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 lg:w-[800px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <Badge variant="outline" className="p-3">
              <Image src={LogoSolo} alt="Logo Solo - Angelo T.C." width={30} />
            </Badge>
            <div className="flex flex-col gap-4 items-center lg:flex-row">
              <Badge
                variant="secondary"
                className="text-primary-foreground lg:text-[14px]"
              >
                Médico Veterinário | SC-14906
              </Badge>
              <Badge
                variant="secondary"
                className="text-primary-foreground lg:text-[14px]"
              >
                Responsável Técnico
              </Badge>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="flex flex-col items-center font-extrabold text-4xl lg:text-7xl">
              <span className="block">Inspeção de Alimentos</span>
              <span className="block text-primary">com Excelência</span>
            </h1>
            <p className="text-center text-xl lg:text-2xl">
              Garantindo a segurança de alimentos através de serviços
              especializados em documentação, controle de qualidade e
              treinamentos para sua empresa.
            </p>
            <div className="flex gap-4">
              <Link href="#">
                <Button className="hover:cursor-pointer">
                  <Image src={WhatsAppIcon} alt="WhatsApp Icon" width={15} />
                  Falar no WhatsApp
                </Button>
              </Link>
              <Button variant="outline" className="hover:cursor-pointer">
                Conhecer Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
