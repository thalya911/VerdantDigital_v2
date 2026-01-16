import React, { useState, useRef } from 'react';
import { ArrowRight, Smartphone, Users, Building2, Brain, Wifi, Code2, Link2, WifiOff, Store, Rocket, Search, Wrench, TestTube, Clock, ChevronDown } from 'lucide-react';
import TechnicalDiscoveryModal from './TechnicalDiscoveryModal';
import MobileAppEnquiryModal from './MobileAppEnquiryModal';

const appSolutions = [
  {
    icon: Users,
    title: "Consumer Apps",
    description: "Engaging interfaces designed for growth and seamless user journeys."
  },
  {
    icon: Building2,
    title: "Enterprise Tools",
    description: "Apps that streamline your workforce, integrated with your existing systems."
  },
  {
    icon: Brain,
    title: "AI-Powered Apps",
    description: "Smart automation, intelligent search, and personalised experiences."
  },
  {
    icon: Wifi,
    title: "IoT Integration",
    description: "Connecting your app to the physical world via Bluetooth, NFC, or APIs."
  }
];

const valueProps = [
  {
    icon: Code2,
    title: "Cross-Platform Excellence",
    description: "React Native for speed-to-market. Fully native when performance demands it."
  },
  {
    icon: Link2,
    title: "System Integration",
    description: "Connected to your ERPs, payment gateways, and auth providers."
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description: "Apps that work in low-connectivity, syncing perfectly when back online."
  },
  {
    icon: Store,
    title: "Store-Ready",
    description: "We handle App Store and Play Store submissions, compliance, and metadata."
  }
];

const MobileAppDevelopmentPage: React.FC = () => {
  const [isDiscoveryModalOpen, setIsDiscoveryModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ title: string; price: string; description: string } | null>(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const solutionsCarouselRef = useRef<HTMLDivElement>(null);
  const valuesCarouselRef = useRef<HTMLDivElement>(null);

  const handleEnquireClick = (pkg: { title: string; price: string; description: string }) => {
    setSelectedPackage(pkg);
    setIsEnquiryModalOpen(true);
  };

  const handleSolutionsScroll = () => {
    if (solutionsCarouselRef.current) {
      const scrollLeft = solutionsCarouselRef.current.scrollLeft;
      const cardWidth = solutionsCarouselRef.current.offsetWidth;
      setActiveSolution(Math.round(scrollLeft / cardWidth));
    }
  };

  const handleValuesScroll = () => {
    if (valuesCarouselRef.current) {
      const scrollLeft = valuesCarouselRef.current.scrollLeft;
      const cardWidth = valuesCarouselRef.current.offsetWidth;
      setActiveValue(Math.round(scrollLeft / cardWidth));
    }
  };

  const scrollToSolution = (index: number) => {
    if (solutionsCarouselRef.current) {
      const cardWidth = solutionsCarouselRef.current.offsetWidth;
      solutionsCarouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  const scrollToValue = (index: number) => {
    if (valuesCarouselRef.current) {
      const cardWidth = valuesCarouselRef.current.offsetWidth;
      valuesCarouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

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

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              High-Performance Mobile Apps.{' '}
              <span className="text-brand-accent">Built for Scale.</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              From concept to App Store. We engineer native and cross-platform mobile experiences that solve complex business problems and delight users.
            </p>

            <button
              onClick={() => setIsDiscoveryModalOpen(true)}
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Book a Technical Discovery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Specialized App Solutions */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                What We <span className="text-brand-accent">Build</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                The right technology for your business goals, not our preference.
              </p>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              <div
                ref={solutionsCarouselRef}
                onScroll={handleSolutionsScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x overscroll-x-contain"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {appSolutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div key={index} className="flex-shrink-0 w-full snap-center px-1 cursor-grab active:cursor-grabbing">
                      <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 text-center select-none">
                        <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                          <Icon size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">{solution.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-[10px] text-brand-muted/50 mt-3">Swipe to explore</p>
              <div className="flex justify-center gap-2 mt-4">
                {appSolutions.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => scrollToSolution(index)}
                    className={`block rounded-full cursor-pointer transition-all ${
                      activeSolution === index ? 'bg-brand-accent h-2.5 w-6' : 'bg-brand-border h-2.5 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-5">
              {appSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-1.5">{solution.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Verdant for Mobile */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                How We <span className="text-brand-accent">Build</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Reliable engineering. Beautiful UX. Every time.
              </p>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              <div
                ref={valuesCarouselRef}
                onScroll={handleValuesScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x overscroll-x-contain"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {valueProps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex-shrink-0 w-full snap-center px-1 cursor-grab active:cursor-grabbing">
                      <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 text-center select-none">
                        <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                          <Icon size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-[10px] text-brand-muted/50 mt-3">Swipe to explore</p>
              <div className="flex justify-center gap-2 mt-4">
                {valueProps.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => scrollToValue(index)}
                    className={`block rounded-full cursor-pointer transition-all ${
                      activeValue === index ? 'bg-brand-accent h-2.5 w-6' : 'bg-brand-border h-2.5 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-5">
              {valueProps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-xl hover:border-brand-accent/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing & Engagement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Investment & <span className="text-brand-accent">Timelines</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Building a quality app is an investment in your business infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">
              {/* MVP */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all flex flex-col">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">MVP</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $20,000 <span className="text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Minimum Viable Product</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Clock size={14} className="text-brand-accent" />
                  <span>8–12 weeks</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed flex-grow">
                  The leanest version of your idea, focused on core value. Perfect for startups or validating new internal tools.
                </p>
                <button
                  onClick={() => handleEnquireClick({ title: 'MVP', price: 'From $20,000 AUD', description: 'Minimum Viable Product - 8-12 weeks' })}
                  className="mt-4 inline-flex items-center justify-center gap-2 border border-brand-accent/50 hover:bg-brand-accent hover:text-brand-black text-brand-accent font-bold py-2 px-4 rounded-lg transition-all text-xs uppercase tracking-wider"
                >
                  Enquire
                </button>
              </div>

              {/* Full-Scale */}
              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all relative flex flex-col">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-brand-accent text-brand-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most Common
                </div>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Full-Scale Custom</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $45,000 <span className="text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Complete Application</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Clock size={14} className="text-brand-accent" />
                  <span>4–6 months</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed flex-grow">
                  Feature-rich applications with complex logic, multiple integrations, and high-level security.
                </p>
                <button
                  onClick={() => handleEnquireClick({ title: 'Full-Scale Custom', price: 'From $45,000 AUD', description: 'Complete Application - 4-6 months' })}
                  className="mt-4 inline-flex items-center justify-center gap-2 border border-brand-accent/50 hover:bg-brand-accent hover:text-brand-black text-brand-accent font-bold py-2 px-4 rounded-lg transition-all text-xs uppercase tracking-wider"
                >
                  Enquire
                </button>
              </div>

              {/* Monthly Support */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all flex flex-col">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Growth & Support</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $1,500 <span className="text-sm font-normal text-brand-muted">/month</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Ongoing Partnership</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Clock size={14} className="text-brand-accent" />
                  <span>Continuous</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed flex-grow">
                  Ongoing maintenance, OS updates (iOS/Android versions), and iterative feature releases.
                </p>
                <button
                  onClick={() => handleEnquireClick({ title: 'Growth & Support', price: 'From $1,500/month', description: 'Ongoing Partnership - Continuous' })}
                  className="mt-4 inline-flex items-center justify-center gap-2 border border-brand-accent/50 hover:bg-brand-accent hover:text-brand-black text-brand-accent font-bold py-2 px-4 rounded-lg transition-all text-xs uppercase tracking-wider"
                >
                  Enquire
                </button>
              </div>
            </div>

            <div className="text-center mt-8 reveal reveal-delay-200">
              <a
                href="/enquire"
                className="group inline-flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors"
              >
                Need a custom scope? Let's talk
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                Our <span className="text-brand-accent">Process</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  step: '01',
                  icon: Search,
                  title: 'Technical Discovery',
                  desc: "We don't just quote; we consult. We audit your requirements and define the right tech stack for your goals."
                },
                {
                  step: '02',
                  icon: Rocket,
                  title: 'Rapid Prototyping',
                  desc: "You'll interact with a clickable prototype before we write a single line of code. No surprises."
                },
                {
                  step: '03',
                  icon: Wrench,
                  title: 'Agile Development',
                  desc: "We work in 2-week sprints. You see the app grow on your own testing device every fortnight."
                },
                {
                  step: '04',
                  icon: TestTube,
                  title: 'QA & Launch',
                  desc: "Rigorous testing across multiple devices and OS versions to ensure a five-star launch."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
                        <Icon size={16} className="text-brand-accent" />
                      </div>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-16 md:pt-20 pb-6 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
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
                  q: 'Native or cross-platform?',
                  a: 'React Native works for most projects and cuts development time significantly. We recommend fully native (Swift/Kotlin) only when you need platform-specific features or maximum performance, like intensive graphics or hardware access.'
                },
                {
                  q: 'Who owns the code?',
                  a: 'You do. Once the project is complete and paid for, you own 100% of the intellectual property and source code. No lock-in, no surprises.'
                },
                {
                  q: 'Do you provide the backend/API too?',
                  a: "Yes. We build the 'brains' of the app (the servers and databases) using scalable cloud infrastructure like AWS or Vercel. You get a complete solution, not just a front-end."
                },
                {
                  q: 'What about after launch?',
                  a: 'We offer ongoing support packages covering maintenance, bug fixes, OS updates, and feature development. Analytics help us identify what to improve next.'
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="reveal bg-brand-surface/20 border border-brand-border/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-accent/40"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-brand-accent flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-brand-muted text-sm leading-relaxed px-5 pb-5">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-4 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 mb-4">
          <div className="max-w-3xl mx-auto">
            <div className="reveal relative bg-gradient-to-br from-brand-surface/50 to-brand-surface/20 border border-brand-border/30 rounded-2xl p-6 sm:p-8 overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase">
                  Ready to <span className="text-brand-accent">Build?</span>
                </h2>
                <p className="text-brand-muted text-sm sm:text-base mb-4 max-w-xl mx-auto">
                  Tell us about your app idea. We'll show you exactly what it takes to bring it to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setIsDiscoveryModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Book a Technical Discovery
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="mailto:hello@verdantdigital.com.au"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Email Us Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Technical Discovery Modal */}
      <TechnicalDiscoveryModal
        isOpen={isDiscoveryModalOpen}
        onClose={() => setIsDiscoveryModalOpen(false)}
      />

      <MobileAppEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        packageType={selectedPackage}
      />
    </div>
  );
};

export default MobileAppDevelopmentPage;
