"use client";

import { useState } from "react";
import { MoveRight, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does Dynamic Space Consulting?",
    answer:
      "At Dynamic Space Consulting, we believe that access to opportunities, funding, and resources should not be limited by background or circumstance. Our mission is to empower individuals, startups, and organizations with the tools, knowledge, and financial support they need to transform ideas into impactful solutions. This grant will enable us to expand our digital fundraising platform, streamline grant applications, and connect changemakers with resources that can scale their work globally",
  },
  {
    question: "Does Dynamic Space Consulting train grant writers?",
    answer:
      "Yes. Our programs train and mentor grant writers to develop high-quality proposals, streamline application processes, and increase funding success rates.",
  },
  {
    question: "How many grants have Dynamic Space won?",
    answer:
      "Dynamic Space Consulting has successfully supported numerous organizations in securing multiple grants across sectors — from education and tech to community development.",
  },
  {
    question: "Does Dynamic Space Consulting provide fundraising support?",
    answer:
      "We offer digital fundraising strategy support, proposal reviews, and partnership facilitation to help organizations secure and scale sustainable funding.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
            FAQ
          </p>
          <h2 className="text-4xl font-bold font-sans-pro text-[#0A3D62]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Questions */}
          <div className="flex flex-col divide-y divide-[#A0AEC0]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-3">
                <button
                  onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                  className={`w-full flex items-center text-left text-lg transition-colors ${
                    activeIndex === index
                      ? "text-yellow font-semibold"
                      : "text-[#4A5568] hover:text-yellow"
                  }`}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <span>{faq.question}</span>
                  </div>

                  {/* Mobile: toggle up/down; Desktop: small chevron */}
                  <span className="ml-4 md:hidden">
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>

                  <span className="hidden md:inline ml-2">
                    <MoveRight
                      className={`h-5 w-5 transition-transform ${
                        activeIndex === index ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Mobile: show answer inline */}
                <div
                  className={`mt-2 md:hidden text-sm text-[#4A5568] transition-all overflow-hidden ${
                    activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Answer (desktop) */}
          <div className="hidden md:block">
            <p className="text-[#1A202C] leading-relaxed">
              {faqs[activeIndex]?.answer}
            </p>

            {activeIndex === 0 && (
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                <li>Limited access to structured fundraising channels.</li>
                <li>Complex, time-consuming grant application processes.</li>
                <li>
                  Lack of visibility and digital presence to attract investors
                  and donors.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
