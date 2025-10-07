import Image from "next/image";

const values = [
  {
    icon: <Image src="/icons/icon_one.svg" alt="Impact" width={28} height={28} />,
    title: "Impact",
    description:
      "Connecting startups, changemakers, nonprofits, and entrepreneurs with the grants and funding they need to grow.",
  },
  {
    icon: <Image src="/icons/icon_two.svg" alt="Integrity" width={28} height={28} />,
    title: "Integrity",
    description:
      "We uphold honesty and transparency in every partnership, ensuring clients can trust us with their most important fundraising goals.",
  },
  {
    icon: <Image src="/icons/icon_three.svg" alt="Innovation" width={28} height={28} />,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking approaches, helping organizations stand out in a competitive funding space.",
  },
  {
    icon: <Image src="/icons/icon_four.svg" alt="Global Perspective" width={28} height={28} />,
    title: "Global Perspective",
    description:
      "We bring international insight and diverse strategies, enabling organizations to compete, connect, and thrive on a global stage.",
  },
  {
    icon: <Image src="/icons/icon_five.svg" alt="Collaboration" width={28} height={28} />,
    title: "Collaboration",
    description:
      "We work side by side with our clients, aligning strategies with their mission, culture, and long-term vision.",
  },
  {
    icon: <Image src="/icons/icon_six.svg" alt="Excellence" width={28} height={28} />,
    title: "Excellence",
    description:
      "We deliver strategies backed by research, industry expertise, and best practices to guarantee measurable results.",
  },
];

export default function BrandValues() {
  return (
    <section className="w-full bg-white py-20 md:mx-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-center mb-12">
          <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">
            Brand Value
          </p>
          <h2 className="text-4xl font-bold font-sans-pro text-[#0A3D62]">
            What We Represent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Small top, Large bottom */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#CAD4DC] border-[1px] border-[#A0AEC0] p-6 rounded-2xl text-left hover:shadow-md transition-all duration-300 md:h-[16rem] lg:h-48">
              <div className="mb-4">{values[0].icon}</div>
              <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">
                {values[0].title}
              </h3>
              <p className="text-[#1A202C] text-sm leading-relaxed">
                {values[0].description}
              </p>
            </div>
            <div className="bg-[#CAD4DC] border-[1px] border-[#A0AEC0] p-6 rounded-2xl text-left hover:shadow-md transition-all duration-300 md:h-[18rem] lg:h-64">
              <div className="mb-4">{values[3].icon}</div>
              <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">
                {values[3].title}
              </h3>
              <p className="text-[#1A202C] text-sm leading-relaxed">
                {values[3].description}
              </p>
            </div>
          </div>

          {/* Column 2: Large top, Small bottom */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#CAD4DC] border-[1px] border-[#A0AEC0] p-6 rounded-2xl text-left hover:shadow-md transition-all duration-300 md:h-[19rem] lg:h-64">
              <div className="mb-4">{values[1].icon}</div>
              <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">
                {values[1].title}
              </h3>
              <p className="text-[#1A202C] text-sm leading-relaxed">
                {values[1].description}
              </p>
            </div>
            <div className="bg-[#CAD4DC] border-[1px] border-[#A0AEC0] p-6 rounded-2xl text-left hover:shadow-md transition-all duration-300 md:[18rem] lg:h-48">
              <div className="mb-4">{values[4].icon}</div>
              <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">
                {values[4].title}
              </h3>
              <p className="text-[#1A202C] text-sm leading-relaxed">
                {values[4].description}
              </p>
            </div>
          </div>

          {/* Column 3: Small top, Large bottom */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#CAD4DC] border-[1px] border-[#A0AEC0] p-6 rounded-2xl text-left hover:shadow-md transition-all duration-300 md:h-[16rem] lg:h-48">
              <div className="mb-4">{values[2].icon}</div>
              <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">
                {values[2].title}
              </h3>
              <p className="text-[#1A202C] text-sm leading-relaxed">
                {values[2].description}
              </p>
            </div>
            <div className="bg-[#CAD4DC] border-[1px] border-[#A0AEC0] p-6 rounded-2xl text-left hover:shadow-md transition-all duration-300 md:h-[18rem] lg:h-64">
              <div className="mb-4">{values[5].icon}</div>
              <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">
                {values[5].title}
              </h3>
              <p className="text-[#1A202C] text-sm leading-relaxed">
                {values[5].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
