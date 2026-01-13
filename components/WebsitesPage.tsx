import React from 'react';
import { ArrowRight, Building2, ShoppingBag, Server, Code2, Palette, Search, Zap, CreditCard, Database, Users, Settings, LayoutDashboard } from 'lucide-react';

const websiteTypes = [
  {
    icon: Building2,
    title: "Marketing & Corporate Websites",
    bestFor: "Service businesses, B2B, and Brands",
    description: "Custom-designed sites focused on storytelling, credibility, and lead generation. Built on a user-friendly CMS so your team can publish content easily.",
    bullets: [
      { icon: Search, text: "SEO-Optimised Structure" },
      { icon: Zap, text: "Fast Page Load Speeds" },
      { icon: Users, text: "Lead Capture Integration" }
    ]
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    bestFor: "Brands selling physical or digital products",
    description: "High-converting online stores built on Shopify or custom headless setups. We focus on checkout flow, inventory management, and maximising average order value.",
    bullets: [
      { icon: ShoppingBag, text: "Shopify / Shopify Plus" },
      { icon: CreditCard, text: "Payment Gateway Setup" },
      { icon: Database, text: "Inventory Sync" }
    ]
  },
  {
    icon: Server,
    title: "Custom Web Platforms",
    bestFor: "Startups and businesses with unique workflows",
    description: "When a standard website isn't enough. We build React/Next.js platforms with user logins, dashboards, and custom functionality.",
    bullets: [
      { icon: LayoutDashboard, text: "User Portals & Dashboards" },
      { icon: Settings, text: "API Integrations" },
      { icon: Code2, text: "Interactive Tools" }
    ]
  }
];

const valueStack = [
  {
    icon: Code2,
    title: "Pixel-Perfect Implementation",
    description: "We don't rely on restrictive templates. We write clean code that ensures your design stands out and fits your brand guidelines perfectly."
  },
  {
    icon: Palette,
    title: "Total Content Control",
    description: "Whether we use Sanity, WordPress, or Shopify, we build a backend that makes editing text and swapping images effortless for you."
  },
  {
    icon: Server,
    title: "Managed Infrastructure",
    description: "Forget about server headaches. We handle the hosting, SSL encryption, daily backups, and security patches."
  }
];

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
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Websites</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              High-Performance Websites{' '}
              <span className="text-brand-accent">That Drive Growth.</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We build fast, secure, and scalable websites designed to convert visitors into customers. From custom marketing sites to complex web platforms.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Get a Proposal
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Types of Websites */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Choose Your <span className="text-brand-accent">Solution</span>
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                We don't believe in one-size-fits-all. We engineer the right platform for your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {websiteTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                      {type.title}
                    </h3>

                    <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
                      Best for: {type.bestFor}
                    </p>

                    <p className="text-brand-muted text-sm mb-5 leading-relaxed">
                      {type.description}
                    </p>

                    <ul className="space-y-2">
                      {type.bullets.map((bullet, i) => {
                        const BulletIcon = bullet.icon;
                        return (
                          <li key={i} className="text-sm text-brand-bone flex items-center gap-2">
                            <BulletIcon size={14} className="text-brand-accent flex-shrink-0" />
                            {bullet.text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Built for Performance,{' '}
                <span className="text-brand-accent">Not Just Looks</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">
              {valueStack.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center p-6">
                    <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing & Packages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                <span className="text-brand-accent">Investment</span>
              </h2>
              <p className="text-brand-muted text-lg">
                Every project is unique, but we believe in transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 reveal reveal-delay-100">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Standard Project</p>
                <p className="text-3xl font-display font-black text-white mb-1">
                  From $4,800 <span className="text-lg font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Marketing & Corporate Sites</p>
                <ul className="space-y-2 text-sm text-brand-bone">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Strategy & site architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Custom design & branding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Mobile responsiveness
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> CMS setup & training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Basic SEO optimisation
                  </li>
                </ul>
              </div>

              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all relative">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-brand-accent text-brand-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">E-Commerce & Custom Builds</p>
                <p className="text-3xl font-display font-black text-white mb-1">
                  From $8,500 <span className="text-lg font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Stores & Web Platforms</p>
                <ul className="space-y-2 text-sm text-brand-bone">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Product/content migration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Payment gateway setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Advanced functionality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">•</span> Custom integrations
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8 reveal reveal-delay-200">
              <a
                href="/enquire"
                className="group inline-flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors"
              >
                Looking for a custom quote? Get a Project Estimate
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* How We Build */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                How We <span className="text-brand-accent">Build</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  desc: 'We map out your site architecture and user flow before writing a line of code.'
                },
                {
                  step: '02',
                  title: 'Design & UX',
                  desc: 'We create interactive mockups so you can see exactly how the site will look and feel.'
                },
                {
                  step: '03',
                  title: 'Development',
                  desc: 'We build using modern standards: clean code, fast loading, ensuring it works on every device.'
                },
                {
                  step: '04',
                  title: 'Launch & Growth',
                  desc: 'We handle the DNS and go-live, then train your team on how to use it.'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white uppercase mb-1">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                Common <span className="text-brand-accent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  q: 'How long does it take?',
                  a: 'Marketing sites typically take 4-6 weeks. E-commerce or web platforms take 6-10 weeks depending on complexity. You see progress weekly, not just at the end.'
                },
                {
                  q: 'What technology do you use?',
                  a: 'For most marketing sites, we use flexible CMS solutions like WordPress or Webflow. For high-performance or complex needs, we engineer custom solutions using React, Next.js, and Sanity. We choose the best tool for your specific goals.'
                },
                {
                  q: 'What about hosting and maintenance?',
                  a: 'Managed infrastructure is included. We handle hosting, SSL encryption, daily backups, security patches, and technical support. Your site stays fast and secure without you worrying about it.'
                },
                {
                  q: 'Can I update the site myself?',
                  a: 'Absolutely. We build every site with a content management system that makes editing text, swapping images, and adding pages effortless. We train your team on how to use it.'
                }
              ].map((faq, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Ready to <span className="text-brand-accent">Start?</span>
            </h2>
            <p className="text-brand-muted mb-8 text-lg">
              Tell us about your business. We'll tell you exactly what it takes to build something great.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Get a Proposal
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
