"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { Navbar } from "../components/Navbar";

export default function MeetOurExperts() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const section4Ref = useRef<HTMLElement | null>(null);
  const section5Ref = useRef<HTMLElement | null>(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const [text2Visible, setText2Visible] = useState(false);
  const [image2Visible, setImage2Visible] = useState(false);

  const [text3Visible, setText3Visible] = useState(false);
  const [image3Visible, setImage3Visible] = useState(false);

  const [text4Visible, setText4Visible] = useState(false);
  const [image4Visible, setImage4Visible] = useState(false);

  const [text5Visible, setText5Visible] = useState(false);
  const [image5Visible, setImage5Visible] = useState(false);

  useEffect(() => {
    const opts: IntersectionObserverInit = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (e.target === sectionRef.current) {
            setTextVisible(true);
            setTimeout(() => setImageVisible(true), 400);
          } else if (e.target === section2Ref.current) {
            setText2Visible(true);
            setTimeout(() => setImage2Visible(true), 400);
          } else if (e.target === section3Ref.current) {
            setText3Visible(true);
            setTimeout(() => setImage3Visible(true), 400);
          } else if (e.target === section4Ref.current) {
            setText4Visible(true);
            setTimeout(() => setImage4Visible(true), 400);
          } else if (e.target === section5Ref.current) {
            setText5Visible(true);
            setTimeout(() => setImage5Visible(true), 400);
          }
          observer.unobserve(e.target);
        }
      });
    }, opts);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/meet-our-experts.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our Experts
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Get to know the creative minds behind Dynamic Space Consulting.
          </p>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="w-full py-6 md:py-16">
        <div className="text-center mb-12">
          <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
            OUR TEAM
          </p>
          <h2 className="text-2xl md:text-4xl font-bold font-sans-pro text-[#0A3D62]">
            Meet Our Experts
          </h2>
        </div>

        {/* Member 1 - John James */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-10">
          <section
            ref={sectionRef}
            className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10 md:my-16 p-8 md:p-0"
          >
            <div
              className={`relative w-full md:w-1/2 flex justify-end transition-all duration-900 ease-out transform ${
                imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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

            <div
              className={`w-full md:w-1/2 space-y-2 md:px-4 transition-all duration-900 ease-out transform ${
                textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
                John James - Co-Founder/CEO
              </h3>
              <p className="font-normal text-base md:text-lg text-[#545556]">
                John is a certified grant writer and experienced fundraising
                consultant with over seven years of experience helping
                organizations build strong funding pipelines, craft winning
                proposals, and form strategic partnerships that drive meaningful
                change.
              </p>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                With a dual background in Accounting and Law, he brings a rare
                blend of analytical thinking, financial clarity, and strategic
                insight to every engagement. At Dynamic Space Consulting, he
                leads with the belief that every great idea deserves the
                opportunity to thrive.
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

        {/* Member 2 - Damilola Ayoola */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-20 pt-10">
          <section
            ref={section2Ref}
            className="flex flex-col md:flex-row-reverse items-center justify-between md:space-x-0 md:space-x-reverse gap-20 p-8 md:p-0"
          >
            <div
              className={`relative w-full md:w-[45%] transition-all duration-900 ease-out transform ${
                image2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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

            <div
              className={`w-full md:w-[45%] space-y-2 transition-all duration-900 ease-out transform ${
                text2Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
                Damilola Ayoola - Co-Founder/COO
              </h3>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                With a background in Nutrition and Dietetics and over five years
                of experience in international grant writing and fundraising,
                Damilola Ayoola has helped nonprofits and social enterprises
                secure vital funding and strengthen donor partnerships. Her work
                spans the humanitarian, education, and social development
                sectors, where she combines strategy, clarity, and compassion to
                drive meaningful results.
              </p>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                At Dynamic Space Consulting, Damilola plays a key leadership role
                in guiding purpose-driven organizations to develop competitive
                proposals, build lasting partnerships, and design funding
                strategies that create measurable impact.
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

        {/* Member 3 - Saima Ashraf */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-10">
          <section
            ref={section3Ref}
            className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10 md:my-16 p-8 md:p-0"
          >
            <div
              className={`relative w-full md:w-1/2 flex justify-end transition-all duration-900 ease-out transform ${
                image3Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="absolute bottom-2 right-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
              <Image
                src="/team_member_three.png"
                alt="Saima Ashraf"
                className="relative rounded-lg z-10 w-full max-w-md object-cover"
                width={400}
                height={300}
              />
            </div>

            <div
              className={`w-full md:w-1/2 space-y-2 md:px-4 transition-all duration-900 ease-out transform ${
                text3Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
                Saima Ashraf - Grant Specialist
              </h3>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                Saima Ashraf holds a Master’s degree in Business Administration and brings
                15 years of experience in the development sector, with a strong focus on
                Water, Sanitation and Hygiene (WASH) and Disability-inclusive programming.
              </p>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                She has 6 years of grant writing experience and has prepared proposals for
                both non-profit and for-profit organisations. Her subject-matter experience
                includes Digital Skills Training, Humanities, Climate Change, Education,
                Health, and Disability-focused initiatives.
              </p>
            </div>
          </section>
        </div>

        {/* Member 4 - Dr. Ijaz Ul Haq */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-20 pt-10">
          <section
            ref={section4Ref}
            className="flex flex-col md:flex-row-reverse items-center justify-between gap-20 p-8 md:p-0"
          >
            <div
              className={`relative w-full md:w-[45%] transition-all duration-900 ease-out transform ${
                image4Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="absolute bottom-2 left-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
              <Image
                src="/team_member_four.png"
                alt="Dr. Ijaz Ul Haq"
                className="relative rounded-lg z-10 w-full max-w-md object-cover"
                width={400}
                height={300}
              />
            </div>

            <div
              className={`w-full md:w-[45%] space-y-2 transition-all duration-900 ease-out transform ${
                text4Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
                Dr. Ijaz Ul Haq - Senior Grant Consultant
              </h3>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                Ijaz has an educational background in Project Management and 
                Engineering, with over five years of grant writing experience 
                spanning environmental, educational, engineering, and vocational 
                training projects. He has successfully secured grants for The 
                Able Plus Research Center and multiple clients in the development sector.
              </p>

              <p className="font-normal text-base md:text-lg text-[#545556]">
               He currently leads a team of grant writers, developing compelling 
                proposals for NGOs, private organizations, and educational institutions 
                to achieve impactful and sustainable project outcomes.
              </p>
            </div>
          </section>
        </div>

        {/* Member 5 - Aneel Shahzad */}
        <div className="md:my-12 max-w-6xl mx-auto px-6 md:px-10">
          <section
            ref={section5Ref}
            className="flex flex-col md:flex-row items-center justify-between md:space-x-20 gap-10 md:my-16 p-8 md:p-0"
          >
            <div
              className={`relative w-full md:w-1/2 flex justify-end transition-all duration-900 ease-out transform ${
                image5Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="absolute bottom-2 right-3 w-[80%] h-[83%] bg-[#0A3D62] rounded-lg"></div>
              <Image
                src="/team_member_five.png"
                alt="Aneel Shahzad"
                className="relative rounded-lg z-10 w-full max-w-md object-cover"
                width={400}
                height={300}
              />
            </div>

            <div
              className={`w-full md:w-1/2 space-y-2 md:px-4 transition-all duration-900 ease-out transform ${
                text5Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-semibold text-[#0A3D62] text-xl md:text-2xl">
                Aneel Shahzad - Grant Writer Specialist
              </h3>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                I am a Grant Writer Specialist offering nonprofit proposal writing,
                RFP bid proposal development, and one-to-one coaching and training
                for individuals, startups, incubators, accelerators, and organizations
                to enhance their proposal writing capabilities.
              </p>

              <p className="font-normal text-base md:text-lg text-[#545556]">
                I have completed grant applications resulting in over $10 million USD
                in successful proposals across the US, UK, and other regions. My expertise
                includes concept notes, RFP responses, and full proposals focused on
                community development.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
