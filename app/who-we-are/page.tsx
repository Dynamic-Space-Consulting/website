import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";

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
    </main>
  );
}
