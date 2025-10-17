"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function PrivacyPolicy() {
  // Parallax effect for hero image
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-image");
      if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A3D62] text-[#FAFAFA] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Parallax */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          id="hero-image"
          src="/privacy-policy.png"
          alt="Privacy Policy"
          fill
          className="object-cover object-center sticky top-0"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <p>
          Welcome to Dynamic Space Consulting's Privacy Policy. Your privacy is of paramount importance to us. This policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          1. Information We Collect
        </h2>
        <p>
          We collect information you provide directly to us, information from your use of our services, and information from third-party sources. This includes, but is not limited to, your name, email address, contact preferences, and usage data.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          2. How We Use Information
        </h2>
        <p>
          The information we collect helps us improve our services, communicate with you, personalize your experience, and comply with legal obligations. We do not sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          3. Cookies and Tracking
        </h2>
        <p>
          Our website uses cookies and similar technologies to enhance user experience, analyze site usage, and assist with marketing efforts. You can adjust your cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          4. Data Security
        </h2>
        <p>
          We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          5. Third-Party Services
        </h2>
        <p>
          We may share your data with trusted third-party service providers who perform services on our behalf, such as analytics, email delivery, and hosting. All third parties are required to maintain confidentiality and comply with privacy laws.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          6. Your Rights
        </h2>
        <p>
          You have the right to access, correct, or delete your personal information. You may also object to certain processing of your data. To exercise these rights, please contact us at the email provided below.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          7. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500">
          8. Contact Us
        </h2>
        <p className="flex items-center gap-2">
          <Mail size={20} />{" "}
          <a
            href="mailto:info@dynamicspaceconsulting.com"
            className="text-yellow-500 hover:text-yellow-400"
          >
            info@dynamicspaceconsulting.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="relative bg-[#0A3D62] overflow-hidden">
      <div className="relative z-10 pt-10 pb-2 px-8 md:px-18 2xl:px-40">
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            
            {/* Company Info */}
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

            {/* Legal */}
            <div>
              <h3 className="text-yellow-500 font-semibold text-lg mb-6">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms-and-conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Terms & Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAFAFA] font-semibold hover:text-yellow-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
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

            {/* Services */}
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

        <div className="border-t border-[#CAD4DC]">
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
