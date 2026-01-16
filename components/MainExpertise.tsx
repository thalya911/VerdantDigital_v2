import React from 'react';
import { TrendingUp, Layout, Search, MousePointerClick, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "UX/UI Design",
    description: "Interfaces that feel natural and guide customers exactly where you want them.",
    icon: Layout
  },
  {
    title: "SEO Strategy",
    description: "Content strategy, technical optimisation and authority building for long-term traffic.",
    icon: Search
  },
  {
    title: "Performance Marketing",
    description: "Smarter targeting across Google, Meta and TikTok. Real returns on ad spend.",
    icon: TrendingUp
  },
  {
    title: "Conversion Optimisation",
    description: "Data-driven testing that turns more traffic into paying customers.",
    icon: MousePointerClick
  }
];

const MainExpertise: React.FC = () => {
  return (
    <section id="expertise" className="pt-8 pb-16 sm:pt-10 bg-brand-black relative overflow-hidden scroll-mt-24">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-6 sm:mb-10 reveal text-left">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            How We Grow It
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-4 uppercase" style={{letterSpacing: '0.02em'}}>
            GROWTH & <span className="text-brand-accent">PERFORMANCE.</span>
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-light max-w-2xl">
            Once we build it, we help you grow it.
          </p>
        </div>

        {/* Service Cards Grid - 2x2 on mobile, 4 across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 reveal reveal-delay-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-brand-surface/30 border border-brand-border rounded-lg p-3 sm:p-6 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col active:scale-[0.98]"
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-brand-black border-2 border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:border-brand-accent transition-all duration-300 shadow-lg shrink-0">
                    <Icon size={18} className="sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm sm:text-lg font-display font-bold text-white uppercase group-hover:text-brand-accent transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brand-muted leading-snug sm:leading-relaxed font-light text-xs sm:text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-6 sm:mt-10 flex justify-center reveal reveal-delay-200">
          <a
            href="/services"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 border border-brand-accent/60 sm:border-2 sm:border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all uppercase tracking-wider text-xs sm:text-sm active:scale-[0.97]"
          >
            All Services
            <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainExpertise;