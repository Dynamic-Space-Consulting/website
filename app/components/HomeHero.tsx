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
    <div className="relative">
      {/* FIXED poster background for reliable "sticky" effect */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/hero-poster.jpg')", // ensure file exists in /public
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -30,
        }}
      />

      {/* decorative video layer (not fixed) - plays on top of poster */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: -20 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
        >
          <source src="/dynamic_hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* HERO CONTENT (keeps your original layout & copy) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-visible z-10">
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

      {/* White overlay section that scrolls over the hero video/poster */}
      <div className="relative z-20 -mt-40 pt-40 bg-white rounded-t-3xl shadow-[0_-15px_40px_rgba(10,61,98,0.08)]">
        {/* Keep this empty or put the first page content here (this div creates the white surface) */}
      </div>
    </div>
  );
}
