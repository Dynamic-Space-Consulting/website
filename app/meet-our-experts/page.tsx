"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { Navbar } from "../components/Navbar"; // ✅ Corrected import

export default function MeetOurExperts() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="min-h-screen bg-white py-20 px-6 sm:px-12 md:px-20 lg:px-28 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Experts
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-16">
            Our expert team combines years of experience, innovation, and
            dedication to help clients achieve sustainable results. Meet the
            professionals driving Dynamic Space Consulting’s global impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10">
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/meet-our-expert.png"
                  alt="Jacinta Ngozi Elobuike"
                  width={500}
                  height={500}
                  className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mt-4">
                Jacinta Ngozi Elobuike
              </h2>
              <p className="text-gray-500 text-sm">Chief Executive Officer</p>
              <div className="flex justify-center mt-3">
                <Link
                  href="https://www.linkedin.com/in/jacinta-elobuike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/expert2.png"
                  alt="Michael Johnson"
                  width={500}
                  height={500}
                  className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mt-4">
                Michael Johnson
              </h2>
              <p className="text-gray-500 text-sm">
                Head of Strategy & Partnerships
              </p>
              <div className="flex justify-center mt-3">
                <Link
                  href="https://www.linkedin.com/in/michaeljohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/expert3.png"
                  alt="Sophia Adeyemi"
                  width={500}
                  height={500}
                  className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mt-4">
                Sophia Adeyemi
              </h2>
              <p className="text-gray-500 text-sm">
                Director of Fundraising & Development
              </p>
              <div className="flex justify-center mt-3">
                <Link
                  href="https://www.linkedin.com/in/sophiaadeyemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <Link
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold py-4 px-8 rounded-full transition-colors duration-300"
            >
              Get in Touch With Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
