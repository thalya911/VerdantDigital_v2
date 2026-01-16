import React from 'react';
import { ArrowDown, Server, ShoppingCart, Code2, Globe2, Sparkles, BarChart3, Search, Smartphone } from 'lucide-react';
import Threads from './Threads';

const MainHero: React.FC = () => {

  return (
    <section className="relative bg-brand-black pt-24 pb-6 sm:pt-32 sm:pb-8 md:pt-40 md:pb-10 lg:pt-60 lg:pb-16 overflow-hidden min-h-screen flex flex-col justify-center" style={{ isolation: 'isolate', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
      {/* Threads Background Animation */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <Threads
          color={[0, 1, 0.616]}
          amplitude={1.5}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      {/* Background Effects - CSS-based grain (no blend mode to avoid compositing issues) */}
      <div className="absolute -inset-[20%] z-[1] opacity-[0.08] pointer-events-none grain-texture" style={{ transform: 'translateZ(0)' }}></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-5xl reveal">
          {/* Main Headline - Optimized for mobile readability */}
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] sm:leading-[0.95] mb-5 sm:mb-4 uppercase" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.02em'}}>
            Future-Proof <span className="text-brand-accent block sm:inline">Software Experiences.</span>
          </h1>

          {/* Services Tag - Mobile optimized with wrapping support */}
          <div className="mb-6 sm:mb-8 w-full">
            <div className="inline-flex flex-wrap px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-brand-surface/30 border border-brand-border/50 backdrop-blur-md" style={{boxShadow: '0 0 30px rgba(0, 255, 179, 0.2)'}}>
              <p className="text-xs sm:text-sm md:text-base text-brand-accent leading-relaxed font-semibold tracking-wide">
                Websites • PWAs • AI Integration • E-commerce
              </p>
            </div>
          </div>

          {/* Value Stack - 3 Core Pillars */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-6 sm:mb-8">
            <div className="group px-2 py-2 sm:px-4 sm:py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg backdrop-blur-sm hover:border-brand-accent/40 hover:bg-brand-surface/30 transition-all duration-300 active:scale-[0.98]">
              <h3 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1 group-hover:text-brand-accent transition-colors">
                <span className="sm:hidden">Design</span>
                <span className="hidden sm:inline">Intelligent Design</span>
              </h3>
              <p className="text-[10px] sm:text-sm text-brand-muted leading-snug">UX that converts.</p>
            </div>
            <div className="group px-2 py-2 sm:px-4 sm:py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg backdrop-blur-sm hover:border-brand-accent/40 hover:bg-brand-surface/30 transition-all duration-300 active:scale-[0.98]">
              <h3 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1 group-hover:text-brand-accent transition-colors">
                <span className="sm:hidden">Engineering</span>
                <span className="hidden sm:inline">Scalable Engineering</span>
              </h3>
              <p className="text-[10px] sm:text-sm text-brand-muted leading-snug">Built to scale.</p>
            </div>
            <div className="group px-2 py-2 sm:px-4 sm:py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg backdrop-blur-sm hover:border-brand-accent/40 hover:bg-brand-surface/30 transition-all duration-300 active:scale-[0.98]">
              <h3 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1 group-hover:text-brand-accent transition-colors">
                <span className="sm:hidden">Impact</span>
                <span className="hidden sm:inline">Measurable Impact</span>
              </h3>
              <p className="text-[10px] sm:text-sm text-brand-muted leading-snug">Data-driven ROI.</p>
            </div>
          </div>

          {/* Primary CTA - Enhanced touch target for mobile */}
          <div className="mb-10 sm:mb-16">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 sm:gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-lg transition-all duration-300 group uppercase tracking-wide w-full sm:w-auto active:scale-[0.97] touch-manipulation"
            >
              Book a Consult
              <ArrowDown size={18} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Technology Stack Section - Infinite scroll marquee */}
          <div className="flex flex-col items-start gap-3 sm:gap-4 border-t border-brand-border pt-6 sm:pt-8 md:pt-10 pb-0 w-full">
             <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">Powered by Modern Technology Stack</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee - Full width infinite scroll */}
      <div className="relative w-full overflow-hidden mt-3 sm:mt-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex gap-3 sm:gap-4 shrink-0 px-1.5 sm:px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Code2 size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">React / Next.js</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Smartphone size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">React Native</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <ShoppingCart size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Shopify</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">AI / LLMs</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <BarChart3 size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Analytics</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Search size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">SEO</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Globe2 size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Ads</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Server size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Cloud</span>
            </div>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-3 sm:gap-4 shrink-0 px-1.5 sm:px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Code2 size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">React / Next.js</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Smartphone size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">React Native</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <ShoppingCart size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Shopify</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">AI / LLMs</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <BarChart3 size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Analytics</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Search size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">SEO</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Globe2 size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Ads</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Server size={14} className="text-brand-accent shrink-0" />
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-wide whitespace-nowrap">Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default MainHero;