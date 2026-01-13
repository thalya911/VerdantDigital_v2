import React, { useState } from 'react';
import { FAQ_CATEGORIES } from '../constants';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const toggle = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-black min-h-screen">
      {/* Section Navigation */}
      <nav className="bg-brand-black border-b border-brand-border mt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 md:gap-8 py-3 md:py-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent whitespace-nowrap">
              Frequently Asked Questions
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
              Support
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              FREQUENTLY ASKED <br/>
              <span className="animate-text-starspeed inline-block">QUESTIONS</span>
            </h1>
            <p className="text-brand-muted text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about working with Verdant Digital. Can't find what you're looking for? <a href="/enquire" className="text-brand-accent hover:underline">Get in touch</a>.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {FAQ_CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wide border-l-4 border-brand-accent pl-4">
                    {category.category}
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openIndex === itemIndex;

                    return (
                      <div
                        key={faqIndex}
                        className={`border rounded-xl transition-all duration-300 ${
                          isOpen
                            ? 'border-brand-accent bg-brand-black'
                            : 'border-brand-border bg-transparent hover:border-gray-600'
                        }`}
                      >
                        <button
                          onClick={() => toggle(itemIndex)}
                          className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left group"
                        >
                          <h3
                            className={`font-bold text-base md:text-lg pr-4 ${
                              isOpen
                                ? 'text-brand-accent'
                                : 'text-brand-bone group-hover:text-white'
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <div
                            className={`rounded-full p-1 transition-colors flex-shrink-0 ${
                              isOpen
                                ? 'bg-brand-accent text-brand-black'
                                : 'bg-brand-surface border border-brand-border text-gray-400'
                            }`}
                          >
                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-brand-muted leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-brand-surface/30 border border-brand-border rounded-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-brand-muted mb-6 max-w-xl mx-auto">
                We're here to help. Get in touch and we'll answer any questions you have about working with Verdant Digital.
              </p>
              <a
                href="/enquire"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Tradie CTA */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-brand-surface/30 border border-brand-border rounded-xl p-6 md:p-8 max-w-2xl">
              <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-4">
                <span className="text-white font-bold">Looking for a quick website solution?</span> Our Tradie Express Build gets trade and service businesses online in 7 days.
              </p>
              <a href="/tradie" className="inline-flex items-center gap-2 text-brand-accent hover:text-white font-bold uppercase tracking-wide text-xs transition-colors group">
                View Tradie Express Build
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
