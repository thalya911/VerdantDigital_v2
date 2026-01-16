import React, { useState, useRef } from 'react';
import { ArrowRight, Building2, ShoppingBag, Server, Code2, Palette, Search, Zap, CreditCard, Database, Users, Settings, LayoutDashboard, ChevronDown } from 'lucide-react';
import WebsiteEnquiryModal from './WebsiteEnquiryModal';

const processSteps = [
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
];

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
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<{ title: string; bestFor: string } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleEnquireClick = (type: typeof websiteTypes[0]) => {
    setSelectedWebsiteType({ title: type.title, bestFor: type.bestFor });
    setIsEnquiryModalOpen(true);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveStep(newIndex);
    }
  };

  const scrollToStep = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

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

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              High-Performance Websites{' '}
              <span className="text-brand-accent">That Drive Growth.</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
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

        {/* Section Divider */}
        <div className="max-w-xl mx-auto px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        </div>

        {/* Types of Websites */}
        <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                Choose Your <span className="text-brand-accent">Solution</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                We don't believe in one-size-fits-all. We engineer the right platform for your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {websiteTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 hover:border-brand-accent/50 transition-all flex flex-col"
                  >
                    <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1.5 group-hover:text-brand-accent transition-colors">
                      {type.title}
                    </h3>

                    <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">
                      Best for: {type.bestFor}
                    </p>

                    <p className="text-brand-muted text-sm mb-3 leading-relaxed">
                      {type.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
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

                    <button
                      onClick={() => handleEnquireClick(type)}
                      className="mt-auto w-full py-2 px-4 bg-brand-accent/10 border border-brand-accent/30 hover:bg-brand-accent hover:text-brand-black text-brand-accent font-bold text-sm rounded-lg transition-all"
                    >
                      Enquire
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-xl mx-auto px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        </div>

        {/* Value Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                Built for Performance,{' '}
                <span className="text-brand-accent">Not Just Looks</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 reveal reveal-delay-100">
              {valueStack.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center p-5 bg-brand-surface/20 border border-brand-border/30 rounded-xl hover:border-brand-accent/40 transition-all">
                    <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mx-auto mb-3">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-xl mx-auto px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        </div>

        {/* Pricing & Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2 uppercase">
                <span className="text-brand-accent">Investment</span>
              </h2>
              <p className="text-brand-muted text-lg">
                Every project is unique, but we believe in transparency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 reveal reveal-delay-100">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-3 sm:p-4 hover:border-brand-accent/50 transition-all">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-1">Standard Project</p>
                <p className="text-2xl sm:text-2xl font-display font-black text-white mb-0.5">
                  From $4,800 <span className="text-xs sm:text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-xs sm:text-sm mb-2">Marketing & Corporate Sites</p>
                <ul className="space-y-1 text-xs sm:text-sm text-brand-bone">
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Strategy & site architecture
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Custom design & branding
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Mobile responsiveness
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> CMS setup & training
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Basic SEO optimisation
                  </li>
                </ul>
              </div>

              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-3 sm:p-4 hover:border-brand-accent/50 transition-all relative">
                <div className="absolute -top-2.5 sm:-top-3 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-brand-accent text-brand-black text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-1">E-Commerce & Custom</p>
                <p className="text-2xl sm:text-2xl font-display font-black text-white mb-0.5">
                  From $8,500 <span className="text-xs sm:text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-xs sm:text-sm mb-2">Stores & Web Platforms</p>
                <ul className="space-y-1 text-xs sm:text-sm text-brand-bone">
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Everything in Standard
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Product/content migration
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Payment gateway setup
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Advanced functionality
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-brand-accent">•</span> Custom integrations
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-5 reveal reveal-delay-200">
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

        {/* Section Divider */}
        <div className="max-w-xl mx-auto px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        </div>

        {/* How We Build */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                How We <span className="text-brand-accent">Build</span>
              </h2>
            </div>

            {/* Mobile: Progress Stepper + Carousel */}
            <div className="md:hidden reveal reveal-delay-100">
              {/* Progress Stepper */}
              <div className="flex items-center justify-center mb-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <button
                      onClick={() => scrollToStep(index)}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-xs transition-colors ${
                        activeStep === index
                          ? 'bg-brand-accent text-brand-black'
                          : 'bg-brand-surface/40 text-brand-muted border border-brand-border/50'
                      }`}
                    >
                      {step.step}
                    </button>
                    {index < processSteps.length - 1 && (
                      <div className={`w-2 h-[1px] mx-1 transition-colors ${
                        activeStep > index ? 'bg-brand-accent' : 'bg-brand-border/50'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Carousel */}
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {processSteps.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full snap-center px-2"
                  >
                    <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 cursor-grab active:cursor-grabbing text-center">
                      <h3 className="text-xl font-display font-bold text-white uppercase mb-2">{item.title}</h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-5">
                {processSteps.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => scrollToStep(index)}
                    className={`block rounded-full cursor-pointer transition-all ${
                      activeStep === index ? 'bg-brand-accent h-2.5 w-6' : 'bg-brand-border h-2.5 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Side by Side Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 reveal reveal-delay-100">
              {processSteps.map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors text-center"
                >
                  <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-1">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-xl mx-auto px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        </div>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                Common <span className="text-brand-accent">Questions</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Straight answers to what businesses ask most.
              </p>
            </div>

            <div className="space-y-3">
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
                <div
                  key={i}
                  className="reveal bg-brand-surface/20 border border-brand-border/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-accent/40"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-brand-accent flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-brand-muted text-sm leading-relaxed px-5 pb-5">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-4 sm:pt-6 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 mb-4">
          <div className="max-w-3xl mx-auto">
            <div className="reveal relative bg-gradient-to-br from-brand-surface/50 to-brand-surface/20 border border-brand-border/30 rounded-2xl p-6 sm:p-8 overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase">
                  Ready to <span className="text-brand-accent">Start?</span>
                </h2>
                <p className="text-brand-muted text-sm sm:text-base mb-4 max-w-xl mx-auto">
                  Tell us about your business. We'll tell you exactly what it takes to build something great.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/enquire"
                    className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Get a Proposal
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://calendly.com/verdantdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Website Enquiry Modal */}
      <WebsiteEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        websiteType={selectedWebsiteType}
      />
    </div>
  );
};

export default WebsitesPage;
