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
      const contentTransform = scrollY * 0.4;
      contentRef.current.style.transform = `translateY(-${contentTransform}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* ✅ Fixed Background Video (Parallax Effect) */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ position: "fixed", zIndex: "-10" }}
        >
          <source src="/dynamic_hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ✅ Content Layer (moves slightly for parallax) */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 font-sans-pro-700">
          {mainText}
        </h1>

        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
          {subText}
        </p>

        {button && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="text-base px-6 py-3">
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-base px-6 py-3 border-white text-white hover:bg-white hover:text-[#0A3D62]"
            >
              <Link href="/what-we-do">Discover Our Services</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
