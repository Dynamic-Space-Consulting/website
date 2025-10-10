'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const OurImpact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('impact-section');
      const bg = document.getElementById('parallax-bg');
      
      if (bg && section) {
        const rect = section.getBoundingClientRect();
        const scrolled = window.scrollY - (section.offsetTop - window.innerHeight);
        
        // Only apply parallax when section is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          bg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="impact-section" className="relative overflow-hidden text-white  md:max-h-[80rem]">
      {/* Parallax Background */}
      <div
        id="parallax-bg"
        className="absolute -z-10 bg-cover bg-center bg-no-repeat w-full"
        style={{ 
          backgroundImage: 'url(/impact-bg.png)',
          height: '150%',
          top: '-25%',
          left: 0,
          right: 0,
          willChange: 'transform'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center mb-12">
          <p className="text-yellow uppercase tracking-wider text-sm font-semibold py-2">Why Choose Us</p>
          <h2 className="text-4xl font-bold font-sans-pro text-white">Our Impact</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:px-10">
          {/* Left - Image */}
          <div className="flex justify-start lg:w-1/2">
            <Image
              src="/impact.png"
              alt="Coin jar with plant"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Impact Cards */}
          <div className="grid grid-cols-1 gap-6 lg:w-1/2 md:max-w-xl">
            {impactData.map(({ title, description }) => (
              <div key={title} className="bg-[#FAFAFA1A]/10 backdrop-blur-sm rounded-lg p-2 border border-[#CAD4DC]/20 flex flex-row justify-between space-x-4 items-center">
                <h3 className="font-semibold text-base text-white mb-2 w-1/3">{title}</h3>
                <p className="text-sm text-[#E2E8F0] w-2/3">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild className="text-sm sm:text-base px-6 py-3">
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="text-sm sm:text-base px-6 py-3">
              <Link href="/contact-us">Discover Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const impactData = [
  {
    title: '$1M+ Funding Secured',
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
