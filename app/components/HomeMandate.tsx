import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeMandate() {
  return (
    <div className="my-12 max-w-6xl mx-auto px-6">
      <div className="text-center md:4 md:mb-12">
        <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
          WHO WE ARE
        </p>
        <h2 className="text-4xl font-bold font-sans-pro text-[#0A3D62]">
          Our Mandate
        </h2>
      </div>
      {/* Our mandate  */}
      <section
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10  md:my-16 p-8 md:p-0"
      >
        {/* Text Section */}
        <div
          className={`w-full md:w-1/2 space-y-2 transition-all duration-900 ease-out transform ${
            textVisible
             {/* Text Section */}
<div
  className={`w-full md:w-1/2 space-y-4 transition-all duration-900 ease-out transform ${
    textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
  }`}
>
  {/* Company Header */}
  <h3 className="uppercase font-extrabold text-[#0A3D62] text-2xl md:text-3xl mb-2">
    Dynamic Space Consulting (DSC)
  </h3>

  {/* Description Paragraph */}
  <p className="font-normal text-base md:text-lg text-[#1A202C] leading-relaxed">
    Dynamic Space Consulting (DSC) is a global fundraising consultancy firm dedicated 
    to empowering nonprofits, startups, and social enterprises with the resources 
    they need to thrive. We specialize in grant writing, sponsorships, fundraising 
    strategy, and donor engagement, delivering results-driven solutions tailored to 
    each client’s unique mission.
  </p>
</div>

          </p>
          <p className=" font-normal text-base md:text-lg text-[#1A202C]">
            We bridge the gap between bold ideas and sustainable growth,
            equipping visionaries with the strategies, skills, and connections
            required to secure funding and scale.
          </p>
          <Link href="/contact-us">
            <Button className="mt-3">Discover Our Services</Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/home_mandate.png"
            alt="Mandate"
            className=""
            width={400}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
