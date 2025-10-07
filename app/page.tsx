import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQ";
import { HeroSection } from "./components/Hero";
import HomeMandate from "./components/HomeMandate";
import { Navbar } from "./components/Navbar";
import OurImpact from "./components/OurImpact";
import OurPromise from "./components/OurPromise";
import SuccessfulClients from "./components/SuccessfulClients";

export default function HomePage() {
  return (
    <main className="text-white">
      <Navbar />
      <HeroSection />
      <HomeMandate />
      <SuccessfulClients />
      <OurPromise />
      <OurImpact />
      <FAQSection />
      <CTASection />
    </main>
  );
}
