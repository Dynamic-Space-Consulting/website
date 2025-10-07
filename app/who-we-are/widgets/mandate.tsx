import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Mandate() {
    return (
        <div className="my-12 max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
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
            <p className=" font-normal text-base md:text-lg">
              <span className="font-semibold text-[#1A202C]">
                Dynamic Space Consulting (DSC){" "}
              </span>{" "}
              is an international fundraising and grant consulting firm
              dedicated to empowering nonprofits, startups, and social
              enterprises with the resources they need to thrive.
            </p>
            <p className=" font-normal text-base md:text-lg">
              We specialize in grant writing, sponsorships, fundraising
              strategy, and donor engagement, delivering results-driven
              solutions tailored to each client’s unique mission.
            </p>
            <h3 className="font-semibold text-base md:text-lg text-[#1A202C]">
              Vision
            </h3>
            <p className=" font-normal text-base md:text-lg">
              To be the trusted global partner that transforms bold ideas into
              lasting impact.{" "}
            </p>
            <h3 className="font-semibold text-base md:text-lg text-[#1A202C]">
              Mission
            </h3>
            <p className=" font-normal text-base md:text-lg">
              To empower changemakers with tailored strategies, research-driven
              insights, and practical fundraising solutions.
            </p>
            <Link href="/contact-us">
              <Button className="mt-3">Book a Free Consultation</Button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-end">
            <div className="absolute bottom-2 right-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
            <Image
              src="/mandate.png"
              alt="Mandate"
              className="relative rounded-lg z-10 w-full max-w-md object-cover"
              width={400}
              height={300}
            />
          </div>
        </section>
      </div>
    )
}