import React from 'react';
import { ArrowRight, Smartphone, CheckCircle } from 'lucide-react';

const MobileAppDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Smartphone size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Mobile App Development</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              Your App,{' '}
              <span className="text-brand-accent">Done Properly</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Native or cross-platform iOS and Android apps that integrate with your systems and keep users coming back.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Start a Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* What You Get - Simple list */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-8 uppercase text-center reveal">
              What You <span className="text-brand-accent">Get</span>
            </h2>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                'Native iOS and Android, or cross-platform with React Native',
                'Integrations with your existing systems (CRMs, payment, booking, etc.)',
                'App store submission and ongoing maintenance',
                'Push notifications, offline support, analytics',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-brand-surface/20 border border-brand-border/30 rounded-lg">
                  <CheckCircle size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                  <p className="text-brand-bone text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - Compact */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase text-center reveal">
              How It <span className="text-brand-accent">Works</span>
            </h2>
            <p className="text-brand-muted text-center mb-8 reveal">From idea to app store</p>

            <div className="space-y-3 reveal reveal-delay-200">
              {[
                { step: '01', title: 'Discover', desc: 'Requirements, user research, technical planning' },
                { step: '02', title: 'Design', desc: 'Wireframes, prototypes, UI system' },
                { step: '03', title: 'Build', desc: 'Agile sprints, integrations, QA' },
                { step: '04', title: 'Launch & Iterate', desc: 'Deployment, analytics, ongoing improvements' }
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

        {/* FAQs - Just 3 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-8 uppercase text-center reveal">
              Common <span className="text-brand-accent">Questions</span>
            </h2>

            <div className="space-y-4 reveal reveal-delay-300">
              {[
                {
                  q: 'Native or cross-platform?',
                  a: 'React Native works for most projects and cuts development time significantly. We recommend native only when you need platform-specific features or maximum performance.'
                },
                {
                  q: 'How long does it take?',
                  a: 'A simple MVP takes 8-12 weeks. More complex apps take 3-6 months. We work in sprints so you see progress weekly.'
                },
                {
                  q: 'What about after launch?',
                  a: 'We handle ongoing support, bug fixes, OS updates, and feature development. Analytics help us identify what to improve next.'
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
              Ready to <span className="text-brand-accent">Start?</span>
            </h2>
            <p className="text-brand-muted mb-8">
              Tell us about your project. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Get in Touch
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

export default MobileAppDevelopmentPage;
