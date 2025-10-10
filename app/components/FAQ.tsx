"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveRight, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "We work with startups, nonprofit organizations, and social enterprises across Canada, the United States, the United Kingdom, Australia, and Nigeria. Whether you're seeking your first grant, building partnerships, or scaling your funding strategy, we provide tailored solutions for your stage and sector.",
    isJSX: false,
  },
  {
    question: "What services does Dynamic Space Consulting offer?",
    answer:
      "Our core services include:\n• Prospect Research – identifying the right funders, sponsors, and donors for your organization.\n• Grants & Sponsorships – developing and managing proposals for government, foundation, and corporate funding.\n• Fundraising Training – equipping teams with the knowledge and tools to build sustainable fundraising systems.",
    isJSX: false,
  },
  {
    question: "Do you help organizations write grant proposals?",
    answer:
      "Yes. Our team provides end-to-end grant writing support, from identifying the best opportunities to drafting compelling proposals and managing submission requirements. We also review and refine existing proposals to improve success rates.",
    isJSX: false,
  },
  {
    question: "How affordable are your services?",
    answer:
      "We understand that every organization has different financial realities. That's why we design flexible service packages to suit your size, stage, and funding capacity. Whether you're a small startup or a large nonprofit, we'll create a plan that delivers value and fits your budget without compromising on quality.",
    isJSX: false,
  },
  {
    question: "Can you help secure corporate sponsorships?",
    answer:
      "Absolutely. We help organizations identify and approach corporate partners, develop sponsorship proposals, and negotiate mutually beneficial agreements. Our goal is to help you build long-term, value-driven partnerships with brands that align with your mission.",
    isJSX: false,
  },
  {
    question: "Do you only work with nonprofits?",
    answer:
      "No. While we support nonprofits, we also work extensively with startups and social enterprises. We understand that today's changemakers operate across both social and commercial spaces. So, our strategies are flexible and tailored to each client's model.",
    isJSX: false,
  },
  {
    question: "What makes Dynamic Space Consulting different?",
    answer:
      "We combine fundraising expertise, strategic insight, and global perspective. Our consultants don't just write proposals, we help clients build lasting funding systems, develop impact-driven partnerships, and strengthen their long-term capacity to raise resources.",
    isJSX: false,
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Our fees depend on the scope of work. We offer project-based, retainer, and training package options. Each engagement begins with a free consultation to understand your needs and design a customized plan that fits your goals and budget.",
    isJSX: false,
  },
  {
    question: "Do you work with international clients remotely?",
    answer:
      "Yes, we do. We serve clients across multiple countries using virtual tools in order to ensure seamless collaboration no matter your location. Our team is experienced in working across time zones and cultures.",
    isJSX: false,
  },
  {
    question: "How can I get started?",
    answer: (
      <>
        Simply reach out through our{" "}
        <Link
          href="/contact-us"
          className="font-bold text-[#0A3D62] hover:underline"
        >
          Contact page
        </Link>{" "}
        or email us at{" "}
        <a
          href="mailto:info@dynamicspaceconsulting.com"
          className="font-bold text-[#0A3D62] hover:underline"
        >
          info@dynamicspaceconsulting.com
        </a>
        . We'll schedule a brief consultation to understand your needs and
        recommend the best fundraising support package for you.
      </>
    ),
    isJSX: true,
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-6">
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
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? -1 : index)
                  }
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
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  {faq.isJSX ? (
                    <div className="leading-relaxed">{faq.answer}</div>
                  ) : (
                    <p className="leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Answer (desktop) */}
          <div className="hidden md:block">
            {faqs[activeIndex]?.isJSX ? (
              <div className="text-[#1A202C] leading-relaxed">
                {faqs[activeIndex]?.answer}
              </div>
            ) : (
              <p className="text-[#1A202C] leading-relaxed whitespace-pre-line">
                {faqs[activeIndex]?.answer}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
