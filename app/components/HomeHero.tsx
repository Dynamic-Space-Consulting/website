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
      const contentTransform = scrollY * 0.35;
      contentRef.current.style.transform = `translateY(-${contentTransform}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Fixed Poster Background */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('/hero-poster.jpg')",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Video Layer */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
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

        {/* Hero Content */}
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

      {/* ===== CONTENT WRAPPER (White Background Section) ===== */}
      <div className="relative z-20 bg-white w-full -mt-40 pt-40 md:pt-52 rounded-t-3xl shadow-lg">
        {/* 👇 This div acts as the first section overlaying the hero */}
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-[#0A3D62]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Build Impactful Funding Solutions
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568] max-w-3xl mx-auto">
            From grant strategies to partnership development, our team helps you
            navigate the complex world of funding — creating clarity, growth,
            and sustainability for your mission.
          </p>
        </div>
      </div>
    </div>
  );
}
