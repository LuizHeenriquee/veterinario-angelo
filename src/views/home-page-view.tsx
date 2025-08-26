import { HeaderHomePage } from "@/components/header-home-page";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { SpecializedServicesSection } from "@/components/sections/specialized-services-section/specialized-services-section";

export function HomePageView() {
  return (
    <div className="flex flex-col gap-14">
      <HeaderHomePage />
      <HeroSection />
      <SpecializedServicesSection />
    </div>
  );
}
