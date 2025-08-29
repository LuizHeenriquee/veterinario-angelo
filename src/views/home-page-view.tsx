import { HeaderHomePage } from "@/components/header-home-page";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section/call-to-action-section";
import { SpecializedServicesSection } from "@/components/sections/specialized-services-section/specialized-services-section";
import { FooterHomePage } from "@/components/footer-home-page";

export function HomePageView() {
  return (
    <div className="flex flex-col gap-14">
      <HeaderHomePage />
      <HeroSection />
      <SpecializedServicesSection />
      <CallToActionSection />
      <FooterHomePage />
    </div>
  );
}
