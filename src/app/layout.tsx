import type { Metadata } from "next";
import SatoshiRegular from "next/font/local";

import "./globals.css";

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
      <body className={`${satoshi.className}`}>{children}</body>
    </html>
  );
}
