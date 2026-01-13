import React from 'react';
import { ArrowRight, Smartphone, Sparkles, Globe, Layout } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android apps that people actually use.",
    link: "/services/mobile-app-development"
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    description: "Automation that saves your team hours every week.",
    link: "/services/ai-solutions"
  },
  {
    icon: Globe,
    title: "Web Apps",
    description: "Apps that work offline and install like native.",
    link: "/services/progressive-web-apps"
  },
  {
    icon: Layout,
    title: "Websites",
    description: "Sites that load fast and convert visitors.",
    link: "/services/websites"
  }
];

const MainServices: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-black relative overflow-hidden scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
            What We <span className="text-brand-accent">Build</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl">
            We handle the technical side. You focus on running your business.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal reveal-delay-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                className="group bg-brand-surface/20 border border-brand-border/30 rounded-lg p-6 hover:border-brand-accent/50 transition-all flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-bold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </a>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-10 flex justify-center reveal reveal-delay-200">
          <a
            href="/services"
            className="group inline-flex items-center justify-center gap-3 border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold px-6 py-3 rounded-lg transition-all text-sm"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
