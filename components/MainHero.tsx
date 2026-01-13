import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Threads from './Threads';

const MainHero: React.FC = () => {
  return (
    <section className="relative bg-brand-black pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center" style={{ isolation: 'isolate', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
      {/* Threads Background Animation */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <Threads
          color={[0, 1, 0.616]}
          amplitude={1.5}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      {/* Grain texture */}
      <div className="absolute -inset-[20%] z-[1] opacity-[0.08] pointer-events-none grain-texture" style={{ transform: 'translateZ(0)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-6 uppercase" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.02em'}}>
            We Build <span className="text-brand-accent">Digital Products</span>
          </h1>

          <p className="text-brand-muted text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            Websites, mobile apps, AI tools. We handle the technical side so you can focus on your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold px-8 py-4 rounded-lg transition-all text-sm"
            >
              Tell Us What You Need
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-3 border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold px-8 py-4 rounded-lg transition-all text-sm"
            >
              See What We Do
            </a>
          </div>

          <div className="border-t border-brand-border/50 pt-8">
            <p className="text-xs text-brand-muted mb-4 uppercase tracking-widest">Australian-based team</p>
            <p className="text-sm text-brand-muted">
              We respond within 24 hours. No sales pitch, just a conversation about what you need.
            </p>
          </div>
        </div>
      </div>

      <a href="#services" className="absolute bottom-10 left-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-4 text-brand-muted/50 hover:text-brand-accent transition-colors animate-bounce reveal reveal-delay-300 cursor-pointer z-30">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default MainHero;
