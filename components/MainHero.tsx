import React from 'react';
import { ArrowDown, Server, ShoppingCart, Code2, Globe2, Sparkles, BarChart3, Search, Smartphone } from 'lucide-react';
import Threads from './Threads';

const MainHero: React.FC = () => {

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-5xl reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 uppercase" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.02em'}}>
            Future-Proof <span className="text-brand-accent">Software Experiences.</span>
          </h1>

          <div className="mb-8 w-full">
            <div className="inline-flex px-4 py-2.5 rounded-lg bg-brand-surface/30 border border-brand-border/50 backdrop-blur-md" style={{boxShadow: '0 0 30px rgba(0, 255, 179, 0.2)'}}>
              <p className="text-sm md:text-base text-brand-accent leading-relaxed font-semibold tracking-wide">
                Websites • PWAs • AI Integration • E-commerce
              </p>
            </div>
          </div>

          {/* Value Stack - 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="px-5 py-4 bg-brand-surface/20 border border-brand-border/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-bold text-sm mb-2">Intelligent Design</h3>
              <p className="text-xs text-brand-muted leading-relaxed">User research, UX, and clarity that converts visitors into customers.</p>
            </div>
            <div className="px-5 py-4 bg-brand-surface/20 border border-brand-border/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-bold text-sm mb-2">Scalable Engineering</h3>
              <p className="text-xs text-brand-muted leading-relaxed">Custom apps, PWAs, and automation built to handle speed and scale.</p>
            </div>
            <div className="px-5 py-4 bg-brand-surface/20 border border-brand-border/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-bold text-sm mb-2">Measurable Impact</h3>
              <p className="text-xs text-brand-muted leading-relaxed">SEO, analytics, and optimisation to ensure measurable ROI.</p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-16">
            <a
              href="#enquire"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-black text-lg px-8 py-3 rounded-lg shadow-[0_4px_20px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,179,0.6)] transition-all duration-300 group uppercase tracking-wide"
            >
              Book a Consult
              <ArrowDown size={20} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-brand-border pt-10 pb-8 md:pb-0">
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

    </section>
  );
};

export default MainHero;