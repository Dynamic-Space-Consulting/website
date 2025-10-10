"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  description,
  points,
  image,
  reverse = false,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);

  useEffect(() => {
    const opts: IntersectionObserverInit = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target === sectionRef.current) {
          // Start first element animation immediately
          setFirstVisible(true);
          // Start second element animation after 400ms
          setTimeout(() => setSecondVisible(true), 400);
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
    <section
      ref={sectionRef}
      className={`flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10  md:my-16 p-8 md:p-0 ${
        reverse ? "md:flex-row-reverse md:space-x-20" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className={`relative w-full md:w-1/2 flex justify-center transition-all duration-900 ease-out transform ${
          reverse ? "md:justify-end md:mr-40" : "md:justify-start"
        } ${
          reverse
            ? secondVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
            : firstVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
        }`}
      >
        <div
          className={`absolute -bottom-8 ${reverse ? "-right-4 md:-right-8" : "-right-4 md:-left-8"} w-[80%] h-[90%] bg-[#0A3D62] rounded-lg`}
        ></div>
        <Image
          src={image}
          alt={title}
          className="relative rounded-lg z-10 w-full max-w-md object-cover"
          width={400}
          height={300}
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-full md:w-1/2 space-y-2 transition-all duration-900 ease-out transform ${
          reverse
            ? firstVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
            : secondVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
        }`}
      >
        <h3 className="text-[#0A3D62] font-semibold text-xl md:text-3xl">
          {title}
        </h3>
        <h4 className="text-[#1A202C] font-semibold">{subtitle}</h4>
        <p className="text-[#1A202C]">{description}</p>

        <ul className="list-disc list-inside text-[#1A202C] space-y-1">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <Link href="/contact-us">
          <Button className="mt-3">Book a Free Consultation</Button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;
