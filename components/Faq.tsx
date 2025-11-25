import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-transparent relative">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase tracking-tight">F.A.Q.</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div key={index} className={`border rounded-lg transition-all duration-300 ${openIndex === index ? 'border-brand-accent bg-brand-black' : 'border-brand-border bg-transparent hover:border-gray-600'}`}>
              <button
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 flex justify-between items-center text-left group"
              >
                <h3 className={`font-bold text-base ${openIndex === index ? 'text-brand-accent' : 'text-brand-bone group-hover:text-white'}`}>
                  {faq.question}
                </h3>
                <div className={`rounded-full p-1 transition-colors shrink-0 ml-3 ${openIndex === index ? 'bg-brand-accent text-brand-black' : 'bg-brand-surface border border-brand-border text-gray-400'}`}>
                   {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 pt-1 text-brand-muted leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;