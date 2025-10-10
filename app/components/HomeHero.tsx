"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

type HeroProps = {
  mainText?: ReactNode;
  subText?: ReactNode;
  button?: boolean;
};

export function HomeHeroSection({
  mainText = (
    <>
      Fueling Lasting Growth.
      <br />
      Unlocking Meaningful Impact.
    </>
  ),
  subText = (
    <>
      Empowering startups, nonprofits, and social enterprises to secure funding,
      scale sustainably, and create global change.
    </>
  ),
  button = true,
}: HeroProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const contentTransform = scrollY * 0.5;
      contentRef.current.style.transform = `translateY(-${contentTransform}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen max-h-[50rem] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/dynamic_hero.mp4" type="video/mp4" />
      </video>

      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans-pro-700 leading-tight md:leading-20 mb-4 md:mb-6">
          {mainText}
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-6 md:mb-8 px-2">
          {subText}
        </p>

        {button && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
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
