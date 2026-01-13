import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, Server, ShoppingCart, Code2, Globe2, Sparkles, BarChart3, Search, Smartphone } from 'lucide-react';
import Threads from './Threads';

const MainHero: React.FC = () => {
  const acceleratedRef = useRef<HTMLSpanElement>(null);
  const [, setAcceleratedWidth] = useState<number | null>(null);

  useEffect(() => {
    if (acceleratedRef.current) {
      setAcceleratedWidth(acceleratedRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="relative bg-brand-black pt-40 pb-20 lg:pt-60 lg:pb-40 overflow-hidden min-h-screen flex flex-col justify-center" style={{ isolation: 'isolate', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
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

      {/* Animated Gradient Blob - Reduced blur on mobile */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none animate-pulse duration-[10000ms] z-[1]" style={{ transform: 'translateZ(0)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-5xl reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 uppercase" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.02em'}}>
            Build What <span ref={acceleratedRef} className="animate-text-starspeed inline-block">Matters</span>
          </h1>

          <div className="mb-3 w-full">
            <div className="px-4 py-2.5 rounded-lg bg-brand-surface/30 border border-brand-border/50 backdrop-blur-md" style={{boxShadow: '0 0 30px rgba(0, 255, 179, 0.2)'}}>
              <p className="text-base md:text-lg text-brand-muted leading-relaxed font-light">
                Custom Websites • Mobile Apps • Progressive Web Apps • AI-Powered Solutions
              </p>
            </div>
          </div>

          <p className="text-brand-muted text-sm md:text-base mb-8 font-light italic">
            From idea to launch. Products that grow.
          </p>

          {/* Value Deck Scroll */}
          <div className="mb-8 overflow-hidden">
            <div className="flex gap-4 animate-scroll-horizontal pb-4">
              {/* First set */}
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for customers</p>
                <p className="text-xs text-brand-muted">user research & UX</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for growth</p>
                <p className="text-xs text-brand-muted">analytics & optimisation</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for scale</p>
                <p className="text-xs text-brand-muted">apps + automation</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build with intelligence</p>
                <p className="text-xs text-brand-muted">AI-enabled experiences</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for performance</p>
                <p className="text-xs text-brand-muted">speed & reliability</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for conversion</p>
                <p className="text-xs text-brand-muted">design that sells</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for clarity</p>
                <p className="text-xs text-brand-muted">simple & intuitive</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for commerce</p>
                <p className="text-xs text-brand-muted">Shopify & e-commerce</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for discovery</p>
                <p className="text-xs text-brand-muted">SEO & visibility</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for impact</p>
                <p className="text-xs text-brand-muted">measurable results</p>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for customers</p>
                <p className="text-xs text-brand-muted">user research & UX</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for growth</p>
                <p className="text-xs text-brand-muted">analytics & optimisation</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for scale</p>
                <p className="text-xs text-brand-muted">apps + automation</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build with intelligence</p>
                <p className="text-xs text-brand-muted">AI-enabled experiences</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for performance</p>
                <p className="text-xs text-brand-muted">speed & reliability</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for conversion</p>
                <p className="text-xs text-brand-muted">design that sells</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for clarity</p>
                <p className="text-xs text-brand-muted">simple & intuitive</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for commerce</p>
                <p className="text-xs text-brand-muted">Shopify & e-commerce</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for discovery</p>
                <p className="text-xs text-brand-muted">SEO & visibility</p>
              </div>
              <div className="flex-shrink-0 px-4 py-3 bg-brand-surface/20 border border-brand-border/50 rounded-lg">
                <p className="text-xs md:text-sm text-white font-semibold">Build for impact</p>
                <p className="text-xs text-brand-muted">measurable results</p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-16">
            <a
              href="#enquire"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-black text-lg px-8 py-3 rounded-lg shadow-[0_4px_20px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,179,0.6)] transition-all duration-300 group uppercase tracking-wide"
            >
              Get in touch
              <ArrowDown size={20} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-brand-border pt-10 pb-20 md:pb-0">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Powered by Modern Technology Stack</span>

             {/* Clarified Technology Section with visual badges */}
             <div className="flex flex-wrap gap-3 md:gap-5">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <Code2 size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">React / Next.js</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <Smartphone size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">React Native</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <ShoppingCart size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">Shopify Plus</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <Sparkles size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">OpenAI / Claude</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <BarChart3 size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">Google Analytics</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <Search size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">SEO Tools</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <Globe2 size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">Google Ads</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-brand-accent hover:shadow-[0_0_15px_rgba(0,255,179,0.2)] transition-all duration-300 group cursor-default">
                  <Server size={16} className="text-brand-accent drop-shadow-[0_0_8px_rgba(0,255,179,0.5)]" />
                  <span className="text-white font-bold text-xs tracking-wide">AWS / Vercel</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <a href="#expertise" className="absolute bottom-10 left-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-4 text-brand-muted/50 hover:text-brand-accent transition-colors animate-bounce reveal reveal-delay-300 cursor-pointer z-30">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default MainHero;