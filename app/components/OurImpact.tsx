'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const OurImpact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.getElementById('parallax-bg');
      if (bg) {
        // Use negative translation to move background slower upward
        bg.style.transform = `translateY(${window.scrollY * -0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden text-white">
      {/* Parallax Background */}
      <div
        id="parallax-bg"
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/impact-bg.png)',
          height: '120%',
          top: '-10%'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-yellow-500 uppercase tracking-wider text-sm font-semibold">Why Choose Us</p>
          <h2 className="text-4xl font-bold text-white">Our Impact</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-shrink-0">
            <Image
              src="/impact.png"
              alt="Coin jar with plant"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {impactData.map(({ title, description }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-200">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition">
            Book a Free Consultation
          </button>
          <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition">
            Discover Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

const impactData = [
  {
    title: '$100K+ Funding Secured',
    description: 'Raised for top organizations through grants, partnerships, and fundraising strategies.',
  },
  {
    title: 'Tailored Solutions',
    description: 'Every client gets a customized roadmap that fits their unique funding journey.',
  },
  {
    title: 'Research-Driven Insights',
    description: 'Our strategies are backed by in-depth funding intelligence and market analysis.',
  },
  {
    title: 'Global Expertise',
    description: 'We serve diverse organizations across multiple regions and industries.',
  },
];

export default OurImpact;
