import CTASection from "../components/CTASection";
import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import Mandate from "./widgets/mandate";
import WhyWorkWithUs from "./widgets/why-work-with-us";
import BrandValues from "./widgets/what-we-represent";
import OurTeam from "./widgets/our-team";

export default function WhoWeAre() {
  return (
    <main>
      <Navbar />
      <HeroSection
        bgImage="/who-we-are-hero.png"
        mainText="Who We Are"
        subText="Driving Sustainable Growth Through Strategic Fundraising."
        button={false}
      />
      <Mandate />
      <WhyWorkWithUs />
      <BrandValues />
      <OurTeam />
      {/* <OurPromise /> */}
      <CTASection />
    </main>
  );
}
