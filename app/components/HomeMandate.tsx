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
      <section className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10  md:my-16 p-8 md:p-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-2">
          <p className=" font-normal text-base md:text-lg text-[#1A202C]">
            Dynamic Space Consulting (DSC) is a global fundraising
            consultancy firm dedicated to empowering non profits,
            startups, and social enterprises with the resources they 
            need to thrive.
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
