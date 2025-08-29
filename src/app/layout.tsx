import type { Metadata } from "next";
import SatoshiRegular from "next/font/local";

import "./globals.css";
import { HeaderHomePage } from "@/components/header-home-page";
import { FooterHomePage } from "@/components/footer-home-page";
import { DevelopedBy } from "@/components/developed-by";

const satoshi = SatoshiRegular({
  src: "../../public/fonts/satoshi/Satoshi-Regular.otf",
});

export const metadata: Metadata = {
  title: "Angelo Tamanini | Veterinário",
  description: "Veterinário Angelo Tamanini Cipriani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${satoshi.className}`}>
        <HeaderHomePage />
        {children}
        <div className="flex flex-col gap-14 mt-[56px]">
          <FooterHomePage />
          <DevelopedBy />
        </div>
      </body>
    </html>
  );
}
