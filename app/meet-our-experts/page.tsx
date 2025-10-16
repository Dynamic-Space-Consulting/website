"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import Navbar from "../../components/Navbar"; // ✅ Correct relative path for Vercel

export default function MeetOurExperts() {
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
    <main className="w-full min-h-screen bg-white">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/meet-our-experts.png"
          alt="Meet Our Experts Hero"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center text-white px-6 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Experts</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Our success is driven by passionate professionals dedicated to helping
            nonprofits, startups, and social enterprises secure sustainable funding
            and build lasting impact.
          </p>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="w-full py-6 md:py-16">
        {/* John James Section */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-10">
          <section
            ref={sectionRef}
            className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10 md:my-16 p-8 md:p-0"
          >
            {/* Image Section */}
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
                alt="John James - CEO"
                className="relative rounded-lg z-10 w-full max-w-md object-cover"
                width={400}
                height={300}
              />
            </div>

            {/* Text Section */}
            <div
              className={`w-full md:w-1/2 space-y-2 md:px-4 transition-all duration-900 ease-out transform ${
                textVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-[#0A3D62] text-xl md:text-2xl font-semibold">
                John James – Co-Founder / CEO
              </h3>
              <p className="font-normal text-base md:text-lg text-[#545556] leading-relaxed">
                John James is a certified grant writer and fundraising strategist
                with over seven years of experience helping organizations access
                diverse funding opportunities, strengthen donor relations, and
                build long-term sustainability frameworks. His approach combines
                analytical precision, storytelling, and stakeholder insight to
                create compelling fundraising narratives that resonate with funders.
              </p>
              <p className="font-normal text-base md:text-lg text-[#545556] leading-relaxed">
                With a dual background in Accounting and Law, John brings a rare
                mix of financial literacy, compliance understanding, and strategic
                foresight. At Dynamic Space Consulting, he leads with a mission to
                ensure that every visionary organization has the tools and
                strategies needed to thrive in a competitive funding landscape.
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

        {/* Damilola Ayoola Section */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-20 pt-10">
          <section
            ref={section2Ref}
            className="flex flex-col md:flex-row-reverse items-center justify-between md:space-x-0 md:space-x-reverse gap-20 p-8 md:p-0"
          >
            {/* Image Section */}
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
                alt="Damilola Ayoola - COO"
                className="relative rounded-lg z-10 w-full max-w-md object-cover"
                width={400}
                height={300}
              />
            </div>

            {/* Text Section */}
            <div
              className={`w-full md:w-[45%] space-y-2 transition-all duration-900 ease-out transform ${
                text2Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-[#0A3D62] text-xl md:text-2xl font-semibold">
                Damilola Ayoola – Co-Founder / COO
              </h3>
              <p className="font-normal text-base md:text-lg text-[#545556] leading-relaxed">
                Damilola Ayoola is an international fundraising consultant and
                grant writer with extensive experience supporting organizations in
                education, humanitarian, and development sectors. With a background
                in Nutrition and Dietetics, she brings a unique perspective that
                balances empathy, structure, and innovation.
              </p>
              <p className="font-normal text-base md:text-lg text-[#545556] leading-relaxed">
                Over the past five years, she has helped numerous nonprofits and
                startups develop winning proposals, strengthen donor engagement,
                and implement impactful funding strategies. At Dynamic Space
                Consulting, Damilola oversees operations and ensures every project
                delivers measurable value, sustainable growth, and social impact.
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
      </section>
    </main>
  );
}
