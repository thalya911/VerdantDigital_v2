import React from 'react';
import { ArrowRight, Target, Layers, Users } from 'lucide-react';

const MainPhilosophy: React.FC = () => {
  return (
    <section className="py-16 bg-brand-black relative overflow-hidden">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
            WE DON'T SEPARATE <br/>
            <span className="animate-text-starspeed inline-block">DESIGN FROM CODE.</span>
          </h2>
          <div className="space-y-4 text-brand-muted text-base lg:text-lg leading-relaxed font-light">
            <p>
              Most agencies throw designs over the fence to developers. We think that's backwards.
            </p>
            <p>
              At Verdant Digital, designers and developers work as one team. The people shaping your user flows understand performance. The people writing your code care about typography, clarity and how it feels to use.
            </p>
            <p className="font-semibold text-white">What that means for you:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Products that are fast, stable and beautiful to use</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Interfaces that reduce cognitive load so customers know exactly what to do next</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Fewer "that's not technically possible" roadblocks and rework</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Boxes in one line */}
        <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">

          {/* Strategic Design */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Strategic Design</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                You get a website where every layout, colour and interaction has a purpose. Your customers know exactly what to do next, turning more visits into real business outcomes.
              </p>
          </div>

          {/* Technical Excellence */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Technical Excellence</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                You get platforms (React, Node, Shopify) that are fast, stable and built to scale with your business. No frustrating slowdowns, no technical debt holding you back.
              </p>
          </div>

          {/* Integrated Approach */}
          <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300 flex flex-col items-start">
             <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Integrated Approach</h3>
              <p className="text-brand-muted leading-relaxed font-light text-sm">
                You get a team that feels like your own. Clear updates, no confusing jargon, and people who care about your success as much as you do.
              </p>
          </div>

        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 text-center md:text-left reveal reveal-delay-200">
            <a href="#enquire" className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-6 py-3 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm">
              Start a conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#philosophy" className="group inline-flex items-center justify-center gap-3 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-widest text-sm">
              Read more in About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default MainPhilosophy;