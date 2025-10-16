"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

export default function MeetOurExpertsPage() {
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
    <main className="w-full">
      {/* Hero */}
      <div className="bg-[url('/footer-bg.png')] bg-cover bg-center py-24">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
            OUR TEAM
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Meet Our Experts
          </h1>
          <p className="text-white/90 mt-3 max-w-2xl mx-auto">
            A team of fundraising, grants and strategy experts dedicated to
            helping organisations secure funding and scale their impact.
          </p>
        </div>
      </div>

      {/* First Member */}
      <section className="md:my-12 max-w-6xl mx-auto px-6 md:px-10">
        <section
          ref={sectionRef}
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:py-12"
        >
          {/* Image */}
          <div
            className={`relative w-full md:w-1/2 flex justify-end transition-all duration-700 ease-out transform ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute bottom-2 right-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg" />
            <Image
              src="/team_member_one.png"
              alt="John James"
              className="relative rounded-lg z-10 w-full max-w-md object-cover"
              width={500}
              height={400}
              priority={true}
            />
          </div>

          {/* Text */}
          <div
            className={`w-full md:w-1/2 space-y-4 transition-all duration-700 ease-out transform ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-[#0A3D62] text-2xl font-semibold">
              John James — Co-Founder & CEO
            </h3>
            <p className="text-[#545556] text-base md:text-lg leading-relaxed">
              John is a certified grant writer and fundraising consultant with
              7+ years helping organisations build funding pipelines, craft
              winning proposals and form strategic partnerships.
            </p>
            <p className="text-[#545556]">
              Background in Accounting & Law — blends analytical rigor with
              strategic thinking to help ideas find long-term funding.
            </p>
            <Link
              href="https://www.linkedin.com/in/johnjames111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0A3D62] font-semibold"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </section>
      </section>

      {/* Second Member */}
      <section className="md:my-12 max-w-6xl mx-auto px-6 md:px-20 pt-10">
        <section
          ref={section2Ref}
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:py-12"
        >
          {/* Image */}
          <div
            className={`relative w-full md:w-[45%] transition-all duration-700 ease-out transform ${
              image2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute bottom-2 left-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg" />
            <Image
              src="/team_member_two.png"
              alt="Damilola Ayoola"
              className="relative rounded-lg z-10 w-full max-w-md object-cover"
              width={500}
              height={400}
            />
          </div>

          {/* Text */}
          <div
            className={`w-full md:w-[45%] space-y-4 transition-all duration-700 ease-out transform ${
              text2Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-[#0A3D62] text-2xl font-semibold">
              Damilola Ayoola — Co-Founder & COO
            </h3>
            <p className="text-[#545556] text-base md:text-lg leading-relaxed">
              Damilola has 5+ years in international grant writing and fundraising,
              focusing on humanitarian, education and social development sectors.
            </p>
            <p className="text-[#545556]">
              She helps organisations design competitive proposals and build durable donor partnerships.
            </p>
            <Link
              href="https://www.linkedin.com/in/damilola-oluwafemi-a6b898129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0A3D62] font-semibold"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
