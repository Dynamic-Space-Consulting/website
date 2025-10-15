"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function OurPromise() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [row1Visible, setRow1Visible] = useState(false);
  const [row2Visible, setRow2Visible] = useState(false);
  const [row3Visible, setRow3Visible] = useState(false);

  useEffect(() => {
    const opts: IntersectionObserverInit = { threshold: 0.30 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target === containerRef.current) {
          // Start row 1 immediately
          setRow1Visible(true);
          // Start row 2 after 500ms
          setTimeout(() => setRow2Visible(true), 500);
          // Start row 3 after 1000ms
          setTimeout(() => setRow3Visible(true), 1000);
          observer.disconnect();
        }
      });
    }, opts);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <div className="text-center md:4 md:mb-12">
        <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
          WHAT WE DO
        </p>
        <h2 className="text-4xl font-bold font-sans-pro text-[#0A3D62]">
          Our Services
        </h2>
      </div>

      <div ref={containerRef} className="flex flex-col gap-6 my-10">
        {/* Row 1: Image (70%) + Card (30%) */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
          <div
            className={`w-full md:w-[70%] rounded-2xl overflow-hidden h-64 md:h-80 transition-all duration-900 ease-out transform ${
              row1Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/promise_one.png"
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`w-full md:w-[30%] bg-[#CAD4DC] p-8 rounded-2xl text-left hover:shadow-md transition-all duration-900 ease-out h-64 md:h-auto transform ${
              row1Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#0A3251] mb-4">
              Proposal Research
            </h3>
            <p className="text-gray-700 mb-6">
              We identify the right funders, sponsors, and partners.
            </p>
            <Link
              href="/what-we-do"
              className="text-[#0A3D62] font-semibold inline-flex items-center gap-2"
            >
              Learn More <span>→</span>
            </Link>
          </div>
        </div>

        {/* Row 2: Card (30%) + Image (70%) with animation */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-6">
          <div
            className={`w-full md:w-[30%] bg-[#FAECD5] p-8 rounded-2xl text-left hover:shadow-md transition-all duration-1200 ease-out h-64 md:h-auto transform ${
              row2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#0A3251] mb-4">
              Grants and Sponsorships
            </h3>
            <p className="text-gray-700 mb-6">
              Write, apply, and manage high-quality proposals.
            </p>
            <Link
              href="/what-we-do"
              className="text-[#0A3D62] font-semibold inline-flex items-center gap-2"
            >
              Learn More <span>→</span>
            </Link>
          </div>
          <div
            className={`w-full md:w-[70%] rounded-2xl overflow-hidden h-64 md:h-80 transition-all duration-1200 ease-out transform ${
              row2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/promise_two.png"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Image (70%) + Card (30%) with animation */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
          <div
            className={`w-full md:w-[70%] rounded-2xl overflow-hidden h-64 md:h-80 transition-all duration-1200 ease-out transform ${
              row3Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/promise_three.png"
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`w-full md:w-[30%] bg-[#DBF3E5] p-8 rounded-2xl text-left hover:shadow-md transition-all duration-1200 ease-out h-64 md:h-auto transform ${
              row3Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#0A3251] mb-4">
              Fundraising Training
            </h3>
            <p className="text-gray-700 mb-6">
              Build long-term capacity with practical skills for your team.
            </p>
            <Link
              href="/what-we-do"
              className="text-[#0A3D62] font-semibold inline-flex items-center gap-2"
            >
              Learn More <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
