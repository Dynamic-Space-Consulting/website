import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQ";
import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import OurImpact from "../components/OurImpact";
import ServiceSection from "../components/ServiceSection";

export default function WhatWeDo() {
  return (
    <main>
      <Navbar />
      <HeroSection
        bgImage="/what-we-do-hero.png"
        mainText="What We Do"
        subText="Empowering organizations with strategies that unlock funding, fuel growth, and drive sustainable impact."
        button={false}
      />
      <div className="flex flex-col items-center justify-center h-full text-center bg-[#CAD4DC]  p-8 md:py-40 space-y-4 ">
        <h3 className="text-4xl font-bold font-sans-pro text-[#0A3D62]">
          Our Services
        </h3>
        <p className="text-lg font-normal font-inter text-[#0A3D62] max-w-6xl">
          At Dynamic Space Consulting (DSC), we provide research-driven
          fundraising solutions that help startups, nonprofits, and social
          enterprises unlock the capital they need to grow and scale
          sustainably. Whether it&apos;s a grant, sponsorship, or a blended
          funding strategy, our services are tailored to deliver measurable
          impact for every client.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-12 flex flex-col gap-10 md:gap-20">
        <ServiceSection
          title="Prospect Research"
          subtitle="Identify the right funders, sponsors, and partners."
          description="We help you cut through the noise by pinpointing funding opportunities that align with your vision. From corporate sponsorships to government grants, our in-depth research ensures you pursue only the most relevant and high-potential options."
          points={[
            "Comprehensive database search",
            "Tailored funder matching",
            "Ongoing opportunity tracking",
          ]}
          image="/what-we-do-one.png"
          reverse
        />

        <ServiceSection
          title="Grants & Sponsorships"
          subtitle="Writing, applying, and managing successful proposals."
          description="Our team specializes in grant writing and sponsorship strategies that resonate with funders. We handle the entire process from crafting compelling proposals to managing reporting requirements so you can focus on delivering impact."
          points={[
            "Professional grant writing (corporate, foundation, government)",
            "Proposal management and submission",
            "Sponsorship strategy development",
          ]}
          image="/what-we-do-two.png"
        />

        <ServiceSection
          title="Fundraising Training"
          subtitle="Equipping your team to fundraise effectively."
          description=" We don&apos;t just secure funding for you we also empower your team with the skills to keep fundraising sustainable long term. Our interactive training workshops and coaching sessions cover everything from proposal writing to donor stewardship."
          points={[
            "Practical, hands-on workshops",
            "Custom training for startups, nonprofits, and social enterprises",
            "Long-term fundraising capacity building",
          ]}
          image="/what-we-do-three.png"
          reverse
        />
      </div>

      <OurImpact />
      <FAQSection />
      <CTASection />
    </main>
  );
}
