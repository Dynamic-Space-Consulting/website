'use client';

import { useEffect, useState } from 'react';

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Target launch date (you can customize this)
  const launchDate = new Date('2025-10-10T00:00:00');
  const timeUntilLaunch = launchDate.getTime() - currentTime.getTime();
  
  const days = Math.floor(timeUntilLaunch / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeUntilLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilLaunch % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeUntilLaunch % (1000 * 60)) / 1000);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-foreground/5 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-foreground/10 to-transparent rounded-full animate-pulse opacity-20"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-foreground/10 to-transparent rounded-full animate-pulse opacity-20 animation-delay-1000"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Logo/Brand area */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-foreground/10">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-sm"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Something Amazing
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-foreground/70 mb-8">
              is coming soon
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            We&apos;re working hard to bring you an incredible experience.
            Stay tuned for something that will change the way you think about consulting.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-foreground/50 mb-6 uppercase tracking-wider">
              Launch Countdown
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-foreground/60 font-medium">Days</div>
              </div>
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-foreground/60 font-medium">Hours</div>
              </div>
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-foreground/60 font-medium">Minutes</div>
              </div>
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-foreground/60 font-medium">Seconds</div>
              </div>
            </div>
          </div>

          {/* Email subscription */}
          {/* <div className="mb-8">
            <h3 className="text-sm font-medium text-foreground/50 mb-4 uppercase tracking-wider">
              Get Notified When We Launch
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-foreground/5 backdrop-blur-sm rounded-xl border border-foreground/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20"
              />
              <button className="px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 focus:ring-offset-background">
                Notify Me
              </button>
            </div>
          </div> */}

          {/* Social links */}
          {/* <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div> */}
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-foreground/20 rounded-full animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
