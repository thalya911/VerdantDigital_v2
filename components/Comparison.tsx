import React from 'react';
import { Award, TrendingUp, Users, Settings, Zap } from 'lucide-react';

const Comparison: React.FC = () => {
  const benefits = [
    {
      icon: <Award size={20} />,
      title: "Professional presence",
      description: "Your business looks credible, experienced and trustworthy, so customers feel confident contacting you."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "More of the right enquiries",
      description: "Your website guides visitors to call, request a quote or book, without confusion or wasted steps."
    },
    {
      icon: <Users size={20} />,
      title: "Simple for customers",
      description: "Clear services, service areas and contact options so people know you are the right choice."
    },
    {
      icon: <Settings size={20} />,
      title: "No website admin",
      description: "We handle updates, maintenance and management so you can stay focused on the work, not the tech."
    },
    {
      icon: <Zap size={20} />,
      title: "Built properly",
      description: "Fast-loading, modern and reliable websites that work on every device and keep performing over time."
    }
  ];

  return (
    <section className="py-24 bg-transparent relative scroll-mt-24" id="comparison">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
            WHY TRADES <br/>
            <span className="text-brand-accent">CHOOSE US</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="reveal reveal-delay-100">
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 mb-6">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="bg-brand-surface/30 border border-brand-border rounded-xl p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 shadow-lg shrink-0">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-white group-hover:text-brand-accent transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-brand-muted leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-6">
            {benefits.slice(3, 5).map((benefit, index) => (
              <div
                key={index + 3}
                className="bg-brand-surface/30 border border-brand-border rounded-xl p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 shadow-lg shrink-0">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-white group-hover:text-brand-accent transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-brand-muted leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;