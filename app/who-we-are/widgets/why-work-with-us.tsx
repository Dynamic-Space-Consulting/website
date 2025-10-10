"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({
  end,
  duration = 2000,
  formatter,
}: {
  end: number;
  duration?: number;
  formatter?: (n: number) => string;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  return <span>{formatter ? formatter(value) : value}</span>;
}

export default function WhyWorkWithUs() {
  const stats = [
    {
      end: 1000000,
      label: "Funding Secured",
      formatter: (n: number) => `$${Math.round(n / 1000000)}M+`,
    },
    { end: 95, label: "Success Rate", formatter: (n: number) => `${n}%` },
    {
      end: 10,
      label: "Years of Experience",
      formatter: (n: number) => `${n}+`,
    },
    {
      end: 50,
      label: "Successful Proposals",
      formatter: (n: number) => `${n}+`,
    },
  ];

  // Start animation only when the grid is visible
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!gridRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#CAD4DC] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sans-pro text-[#0A3D62] mb-10">
          Why Work With Us
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:border-r-2 md:border-[#A0AEC0] md:last:border-r-0"
            >
              <p className="text-3xl font-bold text-[#1A202C]">
                {start ? (
                  <CountUp
                    end={stat.end}
                    duration={1800}
                    formatter={stat.formatter}
                  />
                ) : stat.formatter ? (
                  stat.formatter(0)
                ) : (
                  0
                )}
              </p>
              <p className="text-sm md:text-base text-[#545556]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
