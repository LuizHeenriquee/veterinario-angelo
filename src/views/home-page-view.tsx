import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section/call-to-action-section";
import { SpecializedServicesSection } from "@/components/sections/specialized-services-section/specialized-services-section";

export function HomePageView() {
  return (
    <div className="flex flex-col gap-14">
      <HeroSection />
      <SpecializedServicesSection />
      <CallToActionSection />
    </div>
  );
}
