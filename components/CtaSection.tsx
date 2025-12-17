import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CtaSectionProps {
  onOpenModal: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenModal: _onOpenModal }) => {
  return (
    <section className="py-16 bg-brand-accent relative overflow-hidden">
       {/* Animated Divider */}
       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

       <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
         <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black mb-6 tracking-tight">
           READY TO GET MORE JOBS?
         </h2>

         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://meetings-ap1.hubspot.com/thalya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-black text-white hover:bg-brand-surface font-bold text-base py-3 px-6 rounded-lg shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-1"
            >
              Start Your Build - Book Discovery Call
              <ArrowRight size={18} />
            </a>
            <a
              href="/#work"
              className="bg-white/20 hover:bg-white/30 text-brand-black border-2 border-brand-black font-bold text-base py-3 px-6 rounded-lg transition-all inline-block"
            >
              See Live Examples
            </a>
         </div>

         <div className="flex flex-wrap justify-center gap-6 text-brand-black/70 font-bold text-xs uppercase tracking-wider">
           <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-black"/> No Obligation</span>
           <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-black"/> 15 Minute Chat</span>
         </div>
       </div>
    </section>
  );
};

export default CtaSection;