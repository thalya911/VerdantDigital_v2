import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, PenTool, Cpu, Handshake } from 'lucide-react';

const pillars = [
  {
    icon: PenTool,
    title: "Intentional Design",
    description: "Every interaction is calculated to guide behaviour and turn traffic into revenue."
  },
  {
    icon: Cpu,
    title: "Engineering-Grade Code",
    description: "Modern stacks—React, Next.js, Shopify—for zero technical debt and fast load times."
  },
  {
    icon: Handshake,
    title: "Direct Partnership",
    description: "No account managers. You work directly with the experts building your product."
  }
];

const MainPhilosophy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll to update active index
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = window.innerWidth * 0.80; // 80vw
      const gap = 12; // gap-3 = 0.75rem = 12px
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(newIndex, 0), pillars.length - 1));
    }
  };

  // Scroll to specific index
  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth * 0.80; // 80vw
      const gap = 12; // gap-3 = 0.75rem = 12px
      carouselRef.current.scrollTo({ left: (cardWidth + gap) * index, behavior: 'smooth' });
    }
  }, []);

  // Auto-advance carousel
  const advanceCarousel = useCallback(() => {
    if (!isPaused && carouselRef.current) {
      const nextIndex = (activeIndex + 1) % pillars.length;
      scrollToIndex(nextIndex);
    }
  }, [activeIndex, isPaused, scrollToIndex]);

  // Set up auto-cycling interval
  useEffect(() => {
    const interval = setInterval(advanceCarousel, 4000);
    return () => clearInterval(interval);
  }, [advanceCarousel]);

  // Pause on user interaction, resume after 6 seconds
  const handleInteraction = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 6000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section className="pt-8 pb-16 sm:pt-10 bg-brand-black relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-6 sm:mb-10 reveal text-left">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            The Approach
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-4 uppercase" style={{letterSpacing: '0.02em'}}>
            INTEGRATED DIGITAL <span className="text-brand-accent">ARCHITECTURE.</span>
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-light max-w-2xl">
            Aesthetics meets engineering. Platforms that are fast, robust, and built to convert.
          </p>
        </div>

        {/* 3 Pillars - Horizontal scroll on mobile, grid on desktop */}
        <div className="relative reveal reveal-delay-100 -mx-4 sm:mx-0">
          {/* Scroll container */}
          <div
            ref={carouselRef}
            onScroll={() => { handleScroll(); handleInteraction(); }}
            onTouchStart={handleInteraction}
            className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-hide px-[10vw] sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-surface/30 border border-brand-border rounded-lg p-5 sm:p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col active:scale-[0.98] w-[80vw] min-w-[80vw] max-w-[80vw] sm:w-auto sm:min-w-0 sm:max-w-none snap-center shrink-0 sm:shrink"
                >
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-brand-black border-2 border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:border-brand-accent transition-all duration-300 shadow-lg shrink-0">
                      <Icon size={20} className="sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-sm sm:text-lg font-display font-bold text-white uppercase group-hover:text-brand-accent transition-colors leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-brand-muted leading-snug sm:leading-relaxed font-light text-xs sm:text-sm flex-grow">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dot indicators & swipe hint - mobile only */}
          <div className="flex sm:hidden flex-col items-center gap-2 mt-3">
            <div className="flex justify-center gap-2">
              {pillars.map((_, index) => (
                <span
                  key={index}
                  onClick={() => { scrollToIndex(index); handleInteraction(); }}
                  className={`block rounded-full cursor-pointer transition-all ${
                    activeIndex === index ? 'bg-brand-accent h-2 w-5' : 'bg-brand-border h-2 w-2'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-brand-muted/50">Swipe to explore</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 sm:mt-10 flex justify-center reveal reveal-delay-200">
          <a
            href="/about"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 border border-brand-accent/60 sm:border-2 sm:border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all uppercase tracking-wider text-xs sm:text-sm active:scale-[0.97]"
          >
            About Us
            <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPhilosophy;
