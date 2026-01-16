import React from 'react';
import { ArrowRight, Smartphone, Sparkles, Globe, Layout } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android apps that people actually use.",
    bullets: [
      "Native or cross-platform (React Native)",
      "Integrates with your existing systems",
      "We handle app store submission and updates"
    ],
    link: "/services/mobile-app-development"
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Custom agents and workflows that integrate into your tech stack.",
    bullets: [
      "Knowledge bases & RAG for instant team answers",
      "Agentic workflows that draft, update, and automate",
      "Custom LLM integration into your existing software"
    ],
    link: "/services/ai-solutions"
  },
  {
    icon: Globe,
    title: "Web Apps",
    description: "Fast web apps that work offline and feel native.",
    bullets: [
      "Works on any device, installs like an app",
      "Offline support and push notifications",
      "No app store approval needed"
    ],
    link: "/services/progressive-web-apps"
  },
  {
    icon: Layout,
    title: "Websites",
    description: "Websites that load fast and convert visitors.",
    bullets: [
      "Custom design or Shopify/WordPress",
      "SEO and performance baked in",
      "We handle hosting and updates"
    ],
    link: "/services/websites"
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-6 tracking-tight uppercase">
              <span className="text-brand-accent">SERVICES</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Apps, websites, AI tools. We handle the technical side so you can focus on running your business.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-12 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <a
                    key={index}
                    href={service.link}
                    className="reveal group block bg-brand-surface/20 border border-brand-border/30 rounded-xl p-4 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <h2 className="text-xl font-display font-bold text-white mb-0.5 group-hover:text-brand-accent transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-brand-muted text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-3">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-brand-bone flex items-center gap-2">
                          <span className="text-brand-accent flex-shrink-0">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-bold group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-brand-surface/30 border border-brand-border rounded-xl p-6 md:p-8 text-center reveal">
              <h2 className="text-xl md:text-2xl font-display font-black text-white mb-3 uppercase">
                Not Sure What <span className="text-brand-accent">You Need?</span>
              </h2>
              <p className="text-brand-muted text-sm md:text-base mb-6">
                Tell us about your problem. We will tell you honestly what would help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/enquire"
                  className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold py-3 px-6 rounded-lg transition-all text-xs uppercase tracking-widest"
                >
                  Describe Your Problem
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://calendly.com/verdantdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-3 px-6 rounded-lg transition-all text-xs uppercase tracking-widest"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
