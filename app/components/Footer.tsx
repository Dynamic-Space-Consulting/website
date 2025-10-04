"use client";

import { Linkedin, Twitter, Instagram, Facebook, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuInstagram } from "react-icons/lu";
import { AiOutlineFacebook } from "react-icons/ai";
import Socials from "./Socials";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current || !contentRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerTop = footerRef.current.offsetTop;

      // Calculate how much of the footer is visible
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollY + windowHeight - footerTop) / windowHeight)
      );

      // Apply opposite parallax only when footer is in view
      if (scrollProgress > 0) {
        // Opposite parallax: content moves down as you scroll down
        const parallaxOffset = scrollProgress * 50; // Adjust multiplier for effect strength
        contentRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      } else {
        // Reset transform when footer is not in view
        contentRef.current.style.transform = `translateY(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      //   ref={footerRef}
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div ref={contentRef} className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info Column */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/logo.svg"
                    alt="Dynamic Space Consulting"
                    className="h-12 md:h-16 w-auto"
                    width={48}
                    height={48}
                  />
                </Link>
              </div>

              <p className="text-[#FAFAFA] text-base font-semibold justify-start flex mb-6 md:max-w-[22rem] leading-relaxed">
                We bridge the gap between bold ideas and sustainable growth,
                equipping visionaries with the strategies, skills, and
                connections required to secure funding and scale.
              </p>

              <div className="mb-6">
                <p className="text-[#FAFAFA] text-base justify-start flex mb-6 md:max-w-[22rem] leading-relaxed font-semibold">
                  Stay updated with the latest trends and insights. Follow us on
                  social media for engaging, up-to-date posts.
                </p>
              </div>

              {/* Social Media Icons */}
              <Socials />
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-yellow font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Terms & Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-yellow-500 font-semibold text-lg mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Blog Post
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Need Help?
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-yellow-500 font-semibold text-lg mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Prospect Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Grants & Sponsorships
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Fundraising Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[#CAD4DC] mx-10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <p className="text-center text-[#FAFAFA] text-sm">
              © Dynamic Space Consulting 2025. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
