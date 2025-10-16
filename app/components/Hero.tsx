"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  bgImage?: string;
  mainText?: ReactNode;
  subText?: ReactNode;
  button?: boolean;
  overlay?: boolean;
  height?: string;
};

export function HeroSection({
  bgImage = "/hero-img.png",
  mainText = (
    <>
      Fueling Lasting Growth.
      <br />
      Unlocking Meaningful Impact.
    </>
  ),
  subText = (
    <>
      Empowering startups, nonprofits, and social enterprises to secure
      funding, scale sustainably, and create global change.
    </>
  ),
  button = true,
  overlay = true,
  height = "h-[90vh]",
}: HeroProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* ✅ Sticky Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* ✅ Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/50 z-0"></div>}

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans-pro-700 leading-tight mb-4 md:mb-6">
          {mainText}
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-6 md:mb-8">
          {subText}
        </p>

        {button && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="text-sm sm:text-base px-6 py-3">
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-sm sm:text-base px-6 py-3"
            >
              <Link href="/what-we-do">Discover Our Services</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
