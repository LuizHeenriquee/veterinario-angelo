import Image from "next/image";
import Logo from "../assets/logo-black-red.png";
import WhatsAppIcon from "../assets/icons/wpp-icon.svg";
import Link from "next/link";
import { Button } from "./ui/button";

export function HeaderHomePage() {
  return (
    <div className="flex items-center justify-between pt-4">
      <Image src={Logo} alt="Angelo T.C. Logo" width={200} height={200} />
      <Link href="#">
        <Button>
          <Image src={WhatsAppIcon} alt="WhatsApp Icon" width={15} />
          WhatsApp
        </Button>
      </Link>
    </div>
  );
}
