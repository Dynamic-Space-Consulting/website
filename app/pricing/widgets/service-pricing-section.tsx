"use client";

import React from "react";

const services = [
  {
    title: "Prospect Research",
    subtitle:
      "We help you identify and qualify funding opportunities that match your organization’s goals, mission, and eligibility.",
    items: [
      {
        price: "$400.00",
        title: "20 Leads",
        description:
          "Receive a curated list of 25 verified funding opportunities tailored to your organization’s focus area, funding needs, and geography, including grant details, eligibility, and deadlines.",
      },
      {
        price: "$800.00",
        title: "50 Leads",
        description:
          "Get an expanded report of 50 high-potential funding opportunities, complete with funder profiles, giving history, application insights, and strategic recommendations to strengthen your outreach.",
      },
    ],
  },
  {
    title: "Grant Writing",
    subtitle:
      "We craft compelling proposals that align your mission with funder priorities — turning great ideas into fundable projects.",
    items: [
      {
        price: "$250.00",
        title: "Corporate Sponsorship Proposal",
        description:
          "Professionally written sponsorship proposal designed to attract and engage corporate partners. It includes tailored messaging, benefit alignment, and partnership structure.",
      },
      {
        price: "$400.00",
        title: "Foundation Grant Proposal",
        description:
          "Full proposal development for foundation funding, including narrative, budget guidance, and case for support, customized to each funder’s requirements.",
      },
      {
        price: "$800.00",
        title: "Government Grant Proposal",
        description:
          "Comprehensive grant application package for government funding programs, including eligibility review, narrative writing, compliance formatting, and submission guidance.",
      },
    ],
  },
];

export default function ServicesPricingSection() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-24">
        {services.map((section, idx) => (
          <div key={idx} className="space-y-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
                {section.title}
              </h2>
              <p className="text-[#545556] mt-2 max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            <div
              className={`grid ${
                section.items.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-3"
              } gap-6`}
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0B3558] text-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow/20 hover:border-2 hover:border-yellow cursor-pointer"
                >
                  <p className="text-3xl font-bold text-yellow">
                    {item.price}
                  </p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#E2E8F0]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-sm text-[#0A3D62] font-semibold mt-2 md:mt-8 space-y-2">
          <p >
            • All pricing above applies to one-off service engagements.
          </p>
          <p>
            • For ongoing support, fundraising strategy development, or
            capacity-building partnerships, custom retainer packages are
            available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
