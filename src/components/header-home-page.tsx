import Image from "next/image";
import Logo from "../assets/logo-black-red.png";
import WhatsAppIcon from "../assets/icons/wpp-icon.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import { Container } from "./container";

export function HeaderHomePage() {
  return (
    <Container>
      <div className="flex items-center justify-between pt-4">
        <Image src={Logo} alt="Angelo T.C. Logo" width={150} height={150} />
        <Link href="#">
          <Button className="hover:cursor-pointer">
            <Image src={WhatsAppIcon} alt="WhatsApp Icon" width={15} />
            WhatsApp
          </Button>
        </Link>
      </div>
    </Container>
  );
}
