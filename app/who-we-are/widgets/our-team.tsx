"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button"; // ✅ FIXED: added this import

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [text2Visible, setText2Visible] = useState(false);
  const [image2Visible, setImage2Visible] = useState(false);

  useEffect(() => {
    const opts: IntersectionObserverInit = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target === sectionRef.current) {
          setTextVisible(true);
          setTimeout(() => setImageVisible(true), 400);
          observer.unobserve(e.target);
        }
        if (e.isIntersecting && e.target === section2Ref.current) {
          setText2Visible(true);
          setTimeout(() => setImage2Visible(true), 400);
          observer.unobserve(e.target);
        }
      });
    }, opts);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-6 md:py-16">
      <div className="text-center mb-12">
        <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
          OUR TEAM
        </p>
        <h2 className="text-2xl md:text-4xl font-bold font-sans-pro text-[#0A3D62]">
          Meet Our Experts
        </h2>
      </div>

      <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-10">
        {/* CEO Section */}
        <section
          ref={sectionRef}
          className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10 md:my-16 p-8 md:p-0"
        >
          {/* Image */}
          <div
            className={`relative w-full md:w-1/2 flex justify-end transition-all duration-900 ease-out transform ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute bottom-2 right-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
            <Image
              src="/team_member_one.png"
              alt="Team Member One"
              className="relative rounded-lg z-10 w-full max-w-md object-cover"
              width={400}
              height={300}
            />
          </div>

          {/* Text */}
          <div
            className={`w-full md:w-1/2 space-y-2 md:px-4 transition-all duration-900 ease-out transform ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
              John James – Co-Founder / CEO
            </h3>
            <p className="font-normal text-base md:text-lg text-[#545556]">
              John is a certified grant writer and experienced fundraising
              consultant with over seven years of experience helping
              organizations build strong funding pipelines...
            </p>
            <Link
              href="https://www.linkedin.com/in/johnjames111"
              target="_blank"
              className="text-[#0A3D62] font-semibold inline-flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </section>
      </div>

      <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-20 pt-10">
        {/* COO Section */}
        <section
          ref={section2Ref}
          className="flex flex-col md:flex-row-reverse items-center justify-between md:space-x-0 md:space-x-reverse gap-20 p-8 md:p-0"
        >
          {/* Image */}
          <div
            className={`relative w-full md:w-[45%] transition-all duration-900 ease-out transform ${
              image2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute bottom-2 left-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
            <Image
              src="/team_member_two.png"
              alt="Team Member Two"
              className="relative rounded-lg z-10 w-full max-w-md object-cover"
              width={400}
              height={300}
            />
          </div>

          {/* Text */}
          <div
            className={`w-full md:w-[45%] space-y-2 transition-all duration-900 ease-out transform ${
              text2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
              Damilola Ayoola – Co-Founder / COO
            </h3>
            <p className="font-normal text-base md:text-lg text-[#545556]">
              Damilola has over six years of experience in international grant
              writing and fundraising. She has helped nonprofits and social
              enterprises secure vital funding...
            </p>
            <Link
              href="https://www.linkedin.com/in/damilola-oluwafemi-a6b898129"
              target="_blank"
              className="text-[#0A3D62] font-semibold inline-flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </section>
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-12">
        <Button
          asChild
          className="px-8 py-4 text-base font-semibold bg-[#FAB443] hover:bg-[#0A3D62] hover:text-white text-[#0A3D62] rounded-lg transition-colors"
        >
          <Link href="/meet-our-experts">Learn More</Link>
        </Button>
      </div>
    </section>
  );
}
