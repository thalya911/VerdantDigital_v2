import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    name: "BreadBloom",
    category: "E-commerce / Brand",
    desc: "Artisan aesthetics meet seamless checkout. Online ordering, subscriptions, and delivery scheduling that feels as good as it works.",
    result: "Increased conversion rate 47% through mobile-first redesign and streamlined checkout flow.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=1926&auto=format&fit=crop",
    website: "BreadBloom.com.au",
    altText: "Artisan bread loaves on display - BreadBloom e-commerce website portfolio project"
  },
  {
    name: "Newstead Plant Co",
    category: "Shopify E-commerce",
    desc: "Beautiful product photography optimised for mobile conversion. Care guides and location-based delivery in an interface plant lovers actually enjoy using.",
    result: "Reduced cart abandonment by 32% with location-based delivery integration and optimised mobile experience.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
    website: "newsteadplantco.com.au",
    altText: "Indoor plants and greenery display - Newstead Plant Co Shopify e-commerce website portfolio project"
  }
];

const MainPortfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-brand-black relative scroll-mt-24">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 reveal text-left">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] uppercase max-w-3xl" style={{letterSpacing: '0.02em'}}>
            RECENT WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg border border-brand-border group-hover:border-brand-accent/50 transition-all duration-500 h-40 cursor-pointer mb-4">
                <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start flex-grow">
                <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors flex items-center gap-2">
                  {project.name}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" size={18} />
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed mb-3">
                  {project.desc}
                </p>
                <p className="text-brand-accent text-xs font-medium leading-relaxed mb-4 italic">
                  {project.result}
                </p>
                <a href="#enquire" className="mt-auto text-white text-[10px] font-bold uppercase tracking-widest border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">
                  Enquire about this project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPortfolio;