import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Sparkles size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">AI Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              Stop Doing Work{' '}
              <span className="text-brand-accent">a Machine Should Do</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              You're probably spending hours on tasks that could take minutes. We build AI tools that handle the repetitive stuff so your team can focus on work that actually matters.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Let's Talk About Your Workflow
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* What AI Can Do For You - Concrete examples */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3 uppercase text-center reveal">
              What This <span className="text-brand-accent">Looks Like</span>
            </h2>
            <p className="text-brand-muted text-center mb-10 reveal">
              Real examples, not buzzwords
            </p>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  title: 'Customer support that never sleeps',
                  desc: 'A chatbot that answers common questions instantly, escalates complex ones to your team, and learns from every conversation.'
                },
                {
                  title: 'Documents that process themselves',
                  desc: 'Drop an invoice, contract, or form into a folder. The data gets extracted and lands in your system automatically.'
                },
                {
                  title: 'Content drafts in seconds',
                  desc: 'Product descriptions, email responses, report summaries. AI writes the first draft, your team polishes it.'
                },
                {
                  title: 'Answers from your own data',
                  desc: 'Ask questions in plain English and get answers from your internal docs, policies, or knowledge base.'
                }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work - Simple process */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase text-center reveal">
              How We <span className="text-brand-accent">Work</span>
            </h2>
            <p className="text-brand-muted text-center mb-8 reveal">No black box. You'll understand what we're building and why.</p>

            <div className="space-y-3 reveal reveal-delay-200">
              {[
                { step: '01', title: 'Understand', desc: 'We map your current workflow and find where AI actually helps (not everywhere)' },
                { step: '02', title: 'Build', desc: 'We connect AI to your existing tools. No new systems to learn.' },
                { step: '03', title: 'Test', desc: 'We run it on real work, measure accuracy, and fix what needs fixing.' },
                { step: '04', title: 'Improve', desc: 'AI gets better with use. We monitor and refine over time.' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
                    <p className="text-brand-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-8 uppercase text-center reveal">
              Honest <span className="text-brand-accent">Answers</span>
            </h2>

            <div className="space-y-4 reveal reveal-delay-300">
              {[
                {
                  q: 'Is AI actually reliable enough?',
                  a: "For well-defined tasks (data extraction, classification, Q&A from docs), yes. For anything subjective, we build human-in-the-loop systems where AI drafts and people approve. We'll tell you upfront if something isn't a good fit."
                },
                {
                  q: 'What about our data security?',
                  a: "We use enterprise AI providers with SOC 2 compliance. Your data is not used to train public models. If you need fully private, on-premise AI, we can do that too."
                },
                {
                  q: 'Do we need to hire AI people?',
                  a: 'No. We handle the technical side. Your team just uses the tools we build. We provide training and documentation for anything user-facing.'
                }
              ].map((faq, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA - Simple */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Not Sure Where <span className="text-brand-accent">to Start?</span>
            </h2>
            <p className="text-brand-muted mb-8">
              Tell us what eats up your team's time. We'll tell you honestly whether AI can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Describe Your Problem
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://calendly.com/verdantdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISolutionsPage;
