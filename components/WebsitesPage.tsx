import React from 'react';
import { ArrowRight, Layout } from 'lucide-react';

const WebsitesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Layout size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Websites</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              A Website That{' '}
              <span className="text-brand-accent">Works For You</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Websites that look good, load fast, and actually help your business grow. We build it, we host it, we keep it running.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Tell Us What You Need
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3 uppercase text-center reveal">
              What You <span className="text-brand-accent">Get</span>
            </h2>
            <p className="text-brand-muted text-center mb-10 reveal">
              Everything you need, nothing you don't
            </p>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  title: 'Custom design that looks like you',
                  desc: 'Not a template with your logo slapped on. Design that matches your brand and speaks to your customers.'
                },
                {
                  title: 'You can update it yourself',
                  desc: 'Change text, swap images, add pages. We set up a simple system and show you how to use it.'
                },
                {
                  title: 'Fast and Google-friendly',
                  desc: 'Loads quickly, works on mobile, built so search engines can find you.'
                },
                {
                  title: 'We handle the technical stuff',
                  desc: 'Hosting, security, updates, backups. You focus on your business, we keep the site running.'
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

        {/* How We Work */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase text-center reveal">
              How It <span className="text-brand-accent">Works</span>
            </h2>
            <p className="text-brand-muted text-center mb-8 reveal">From first call to live site</p>

            <div className="space-y-3 reveal reveal-delay-200">
              {[
                { step: '01', title: 'Plan', desc: 'We learn about your business, your customers, and what you want the site to do' },
                { step: '02', title: 'Design', desc: 'You see mockups before we build anything. We refine until you love it.' },
                { step: '03', title: 'Build', desc: 'We build the site, test everything, and make sure it works on all devices' },
                { step: '04', title: 'Launch & Support', desc: 'We go live, train you on updates, and stick around for ongoing support' }
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

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-8 uppercase text-center reveal">
              Common <span className="text-brand-accent">Questions</span>
            </h2>

            <div className="space-y-4 reveal reveal-delay-300">
              {[
                {
                  q: 'How long does it take?',
                  a: 'Most websites take 4-6 weeks. E-commerce or complex sites take 6-10 weeks. You see progress weekly, not just at the end.'
                },
                {
                  q: 'Can I update the site myself?',
                  a: 'Yes. We build sites with a content management system so you can change text, images, and pages without us. We train you on how it works.'
                },
                {
                  q: 'What about hosting and maintenance?',
                  a: 'Included. We handle hosting, security updates, backups, and technical support. Your site stays fast and secure without you worrying about it.'
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

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Need a <span className="text-brand-accent">Website?</span>
            </h2>
            <p className="text-brand-muted mb-8">
              Tell us about your business. We will tell you what it would take to build something great.
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

export default WebsitesPage;
