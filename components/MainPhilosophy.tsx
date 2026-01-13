import React from 'react';
import { ArrowRight } from 'lucide-react';

const MainPhilosophy: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl reveal">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase">
            Design and Code,{' '}
            <span className="text-brand-accent">Together</span>
          </h2>

          <div className="space-y-4 text-brand-muted text-base lg:text-lg leading-relaxed mb-8">
            <p>
              Most agencies throw designs over the fence to developers. We think that is backwards.
            </p>
            <p>
              Our designers understand performance. Our developers care about typography. The result: products that look good and actually work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#enquire"
              className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold px-6 py-3 rounded-lg transition-all text-sm"
            >
              Start a Conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/about"
              className="group inline-flex items-center justify-center gap-3 border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold px-6 py-3 rounded-lg transition-all text-sm"
            >
              About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPhilosophy;
