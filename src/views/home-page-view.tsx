import { HeaderHomePage } from "@/components/header-home-page";
import { HeroSection } from "@/components/sections/hero-section";

export function HomePageView() {
  return (
    <div className="flex flex-col gap-10">
      <HeaderHomePage />
      <HeroSection />
    </div>
  );
}
