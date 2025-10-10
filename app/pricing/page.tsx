import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import ServicesPricingSection from "./widgets/service-pricing-section";

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection
        bgImage="/pricing.png"
        mainText="Pricing"
        subText="Simple plans for everyone"
        button={false}
      />
      <section className="w-full bg-[#CAD4DC] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans-pro text-[#0A3D62] mb-10">
            Our Pricing
          </h2>
          <p className="text-lg md:text-xl text-[#545556]">
            At{" "}
            <span className="font-semibold text-[#0A3D62]">
              Dynamic Space Consulting
            </span>
            , we believe in clarity, quality, and value. Our pricing reflects
            our commitment to delivering expert, research-driven fundraising
            solutions that help you connect with the right funders and
            opportunities.
          </p>
        </div>
      </section>
      <ServicesPricingSection />
    </main>
  );
}
