"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Socials from "./Socials";
import { Mail } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("footer-section");
      const bg = document.getElementById("footer-parallax-bg");

      if (bg && section) {
        const rect = section.getBoundingClientRect();
        const scrolled = window.scrollY - (section.offsetTop - window.innerHeight);

        // Apply parallax only when section is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          bg.style.transform = `translateY(${scrolled * 0.2}px)`; // subtle movement
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer-section"
      className="relative overflow-hidden bg-[#0A3D62] text-white"
    >
      {/* ✅ Sticky Parallax Background */}
      <div
        id="footer-parallax-bg"
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.png')",
          backgroundAttachment: "fixed", // makes it sticky
          transform: "translateY(0px)",
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* ✅ Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="relative z-10 pt-10 pb-2 px-8 md:px-18 2xl:px-40">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-12">
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

              <p className="text-[#FAFAFA] text-base font-semibold mb-6 md:max-w-[22rem] leading-relaxed">
                We bridge the gap between bold ideas and sustainable growth,
                equipping visionaries with the strategies, skills, and
                connections required to secure funding and scale.
              </p>

              <p className="text-[#FAFAFA] text-base font-semibold mb-6 md:max-w-[22rem] leading-relaxed">
                Stay updated with the latest trends and insights. Follow us on
                social media for engaging, up-to-date posts.
              </p>

              <Socials />

              <div className="mt-6">
                <p className="text-[#FAFAFA] text-sm font-semibold flex items-center">
                  <Mail className="inline mr-2 font-bold" size={20} />{" "}
                  <a
                    href="mailto:info@dynamicspaceconsulting.com"
                    className="text-[#FAFAFA] hover:text-yellow-500 transition-colors text-sm"
                  >
                    info@dynamicspaceconsulting.com
                  </a>
                </p>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-yellow font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/terms-and-conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Terms & Services
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
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
                    href="/blog"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Blog Post
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Need Help?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meet-our-experts"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Meet Our Experts
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
                    href="/what-we-do"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Prospect Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Grants & Sponsorships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do"
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
        <div className="border-t border-[#CAD4DC]/40">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <p className="text-center text-[#FAFAFA] text-sm">
              © Dynamic Space Consulting 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
