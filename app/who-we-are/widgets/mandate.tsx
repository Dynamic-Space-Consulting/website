"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Mandate() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const opts: IntersectionObserverInit = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target === sectionRef.current) {
          // Start text animation immediately
          setTextVisible(true);
          // Start image animation after 400ms
          setTimeout(() => setImageVisible(true), 400);
          observer.disconnect();
        }
      });
    }, opts);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      <section
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10  md:my-16 p-8 md:p-0"
      >
        {/* Text Section */}
        <div
          className={`w-full md:w-1/2 space-y-2 transition-all duration-900 ease-out transform ${
            textVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <p className=" font-normal text-base md:text-lg">
            <span className="font-semibold text-[#1A202C]">
              Dynamic Space Consulting (DSC){" "}
            </span>{" "}
            is a global fundraising consultancy firm dedicated
            to empower nonprofits, startups, and social enterprises 
            with the resources they need to thrive. 
          </p>
          <p className=" font-normal text-base md:text-lg">
            We specialize in grant writing, sponsorships, fundraising strategy,
            and donor engagement, delivering results-driven solutions tailored
            to each client’s unique mission.
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
        <div
          className={`relative w-full md:w-1/2 flex justify-end transition-all duration-900 ease-out transform ${
            imageVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="absolute bottom-2 right-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
          <Image
            src="/mandate_new.png"
            alt="Mandate"
            className="relative rounded-lg z-10 w-full max-w-md object-cover"
            width={400}
            height={300}
          />
        </div>
      </section>
    </div>
  );
}
