import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Brain, Shield, Users, Layers, Database, Bot, FileText, Zap, Target, Rocket, CheckCircle, ChevronDown } from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

const capabilities = [
  {
    icon: Database,
    step: '01',
    title: 'Instant Answers from Your Docs',
    desc: 'Turn PDFs, Notion pages, and internal docs into a searchable knowledge base. Your team gets answers in seconds.'
  },
  {
    icon: Bot,
    step: '02',
    title: 'AI That Takes Action',
    desc: 'AI that acts, not just responds. Draft emails, update your CRM, and move data between apps automatically.'
  },
  {
    icon: Layers,
    step: '03',
    title: 'AI Inside Your Software',
    desc: 'Plug AI into your existing tools. Summaries, analysis, and automation where your team already works.'
  },
  {
    icon: FileText,
    step: '04',
    title: 'Content at Scale',
    desc: 'Generate SEO content, product descriptions, and social posts. All filtered through your brand voice.'
  }
];

const labApproach = [
  {
    icon: Shield,
    title: 'Security-First',
    desc: 'Your data is never used to train public models. Zero-retention APIs and private deployments.'
  },
  {
    icon: Users,
    title: 'Human-in-the-Loop',
    desc: 'AI does the heavy lifting. Humans provide the final check. 100% accuracy.'
  },
  {
    icon: Layers,
    title: 'Tech-Agnostic',
    desc: 'OpenAI, Anthropic, or open-source. We use what fits your budget and security needs.'
  }
];

const AISolutionsPage: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const capabilityCarouselRef = useRef<HTMLDivElement>(null);
  const approachCarouselRef = useRef<HTMLDivElement>(null);

  const handleCapabilityScroll = () => {
    if (capabilityCarouselRef.current) {
      const scrollLeft = capabilityCarouselRef.current.scrollLeft;
      const cardWidth = capabilityCarouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveCapability(newIndex);
    }
  };

  const handleApproachScroll = () => {
    if (approachCarouselRef.current) {
      const scrollLeft = approachCarouselRef.current.scrollLeft;
      const cardWidth = approachCarouselRef.current.offsetWidth;
      setActiveApproach(Math.round(scrollLeft / cardWidth));
    }
  };

  const scrollToCapability = (index: number) => {
    if (capabilityCarouselRef.current) {
      const cardWidth = capabilityCarouselRef.current.offsetWidth;
      capabilityCarouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  const scrollToApproach = (index: number) => {
    if (approachCarouselRef.current) {
      const cardWidth = approachCarouselRef.current.offsetWidth;
      approachCarouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  // Auto-cycling state
  const [isCapabilityPaused, setIsCapabilityPaused] = useState(false);
  const [isApproachPaused, setIsApproachPaused] = useState(false);
  const capabilityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const approachTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance capabilities carousel
  const advanceCapability = useCallback(() => {
    if (!isCapabilityPaused && capabilityCarouselRef.current) {
      const nextIndex = (activeCapability + 1) % capabilities.length;
      scrollToCapability(nextIndex);
    }
  }, [activeCapability, isCapabilityPaused]);

  // Auto-advance approach carousel
  const advanceApproach = useCallback(() => {
    if (!isApproachPaused && approachCarouselRef.current) {
      const nextIndex = (activeApproach + 1) % labApproach.length;
      scrollToApproach(nextIndex);
    }
  }, [activeApproach, isApproachPaused]);

  // Set up auto-cycling intervals
  useEffect(() => {
    const capabilityInterval = setInterval(advanceCapability, 4000);
    return () => clearInterval(capabilityInterval);
  }, [advanceCapability]);

  useEffect(() => {
    const approachInterval = setInterval(advanceApproach, 4000);
    return () => clearInterval(approachInterval);
  }, [advanceApproach]);

  // Pause on user interaction, resume after 6 seconds
  const handleCapabilityInteraction = () => {
    setIsCapabilityPaused(true);
    if (capabilityTimeoutRef.current) clearTimeout(capabilityTimeoutRef.current);
    capabilityTimeoutRef.current = setTimeout(() => setIsCapabilityPaused(false), 6000);
  };

  const handleApproachInteraction = () => {
    setIsApproachPaused(true);
    if (approachTimeoutRef.current) clearTimeout(approachTimeoutRef.current);
    approachTimeoutRef.current = setTimeout(() => setIsApproachPaused(false), 6000);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (capabilityTimeoutRef.current) clearTimeout(capabilityTimeoutRef.current);
      if (approachTimeoutRef.current) clearTimeout(approachTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Brain size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">AI Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-black text-white mb-5 tracking-tight uppercase leading-[1] sm:leading-[0.95]">
              Custom AI.{' '}
              <span className="text-brand-accent">Built for Your Workflow.</span>
            </h1>

            <p className="text-brand-muted text-base sm:text-lg md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              AI agents and automations that plug into your existing tools. We handle the complexity. You get hours back.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Get a Free Workflow Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                See What We Build
              </a>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section id="capabilities" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                What We <span className="text-brand-accent">Build</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                AI that lives inside your existing tools. Not another app to manage.
              </p>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              {/* Carousel */}
              <div
                ref={capabilityCarouselRef}
                onScroll={() => { handleCapabilityScroll(); handleCapabilityInteraction(); }}
                onTouchStart={handleCapabilityInteraction}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x overscroll-x-contain"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {capabilities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full snap-center px-1 cursor-grab active:cursor-grabbing"
                    >
                      <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 text-center select-none">
                        <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                          <Icon size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Swipe hint */}
              <p className="text-center text-[10px] text-brand-muted/50 mt-3">Swipe to explore</p>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-5">
                {capabilities.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => { scrollToCapability(index); handleCapabilityInteraction(); }}
                    className={`block rounded-full cursor-pointer transition-all ${
                      activeCapability === index ? 'bg-brand-accent h-2.5 w-6' : 'bg-brand-border h-2.5 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-5">
              {capabilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why the "Lab" Approach - Trust Building */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                How We <span className="text-brand-accent">Work</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Practical AI. Not science fiction.
              </p>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              <div
                ref={approachCarouselRef}
                onScroll={() => { handleApproachScroll(); handleApproachInteraction(); }}
                onTouchStart={handleApproachInteraction}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x overscroll-x-contain"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {labApproach.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex-shrink-0 w-full snap-center px-1 cursor-grab active:cursor-grabbing">
                      <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 text-center select-none">
                        <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                          <Icon size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-[10px] text-brand-muted/50 mt-3">Swipe to explore</p>
              <div className="flex justify-center gap-2 mt-4">
                {labApproach.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => { scrollToApproach(index); handleApproachInteraction(); }}
                    className={`block rounded-full cursor-pointer transition-all ${
                      activeApproach === index ? 'bg-brand-accent h-2.5 w-6' : 'bg-brand-border h-2.5 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 3-column Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              {labApproach.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing & Pilot Programs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Investment <span className="text-brand-accent">Tiers</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Start small, prove the ROI, then scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Discovery & Pilot */}
              <div className="reveal reveal-delay-100 group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Target size={20} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Most Popular</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">AI Discovery & Pilot</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-brand-muted text-sm">Starts From:</span>
                  <span className="text-3xl font-display font-black text-brand-accent">$6,500</span>
                  <span className="text-brand-muted text-sm">AUD</span>
                </div>

                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  A 3-week deep dive. We audit your workflows, identify the "Highest ROI" opportunity, and build a functioning Proof of Concept (PoC).
                </p>

                <ul className="space-y-3 mb-8">
                  {['Workflow audit & mapping', 'ROI opportunity analysis', 'Working PoC delivery', 'Implementation roadmap'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                      <CheckCircle size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="block w-full text-center bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-6 rounded-lg transition-all text-sm"
                >
                  Start Discovery
                </button>
              </div>

              {/* Custom AI Integration */}
              <div className="reveal reveal-delay-200 group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Zap size={20} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">Custom AI Integration</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-brand-muted text-sm">Starts From:</span>
                  <span className="text-3xl font-display font-black text-brand-accent">$15,000</span>
                  <span className="text-brand-muted text-sm">AUD</span>
                </div>

                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  A production-ready solution. Full integration into your CRM/Slack/Software, employee training, and security hardening.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Full system integration', 'Security hardening', 'Team training included', 'Ongoing support period'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                      <CheckCircle size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/enquire"
                  className="block w-full text-center bg-transparent border-2 border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent/10 text-white font-bold py-3 px-6 rounded-lg transition-all text-sm"
                >
                  Get Started
                </a>
              </div>

              {/* Enterprise Automation */}
              <div className="reveal reveal-delay-300 group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Rocket size={20} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">Enterprise Automation</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-display font-black text-brand-accent">Custom Quote</span>
                </div>

                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  Multi-agent systems, local model hosting (on-prem), and large-scale data processing pipelines.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Multi-agent orchestration', 'On-premise deployment', 'Data pipeline architecture', 'Dedicated support team'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                      <CheckCircle size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/enquire"
                  className="block w-full text-center bg-transparent border-2 border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent/10 text-white font-bold py-3 px-6 rounded-lg transition-all text-sm"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                  q: 'Will AI replace my staff?',
                  a: "We view AI as an \"Exoskeleton.\" It makes your existing team 10x more productive by removing the \"boring\" work, allowing them to focus on high-value strategy and creativity."
                },
                {
                  q: "How do we know it's working?",
                  a: "We set \"Accuracy Benchmarks\" during the pilot phase. If the AI doesn't hit a 95%+ success rate on a task, we don't deploy it to production until it does."
                },
                {
                  q: 'What if the AI makes a mistake (hallucinates)?',
                  a: 'We use a technique called RAG (Retrieval-Augmented Generation) which forces the AI to only answer using your provided documents, drastically reducing the risk of it making things up.'
                },
                {
                  q: 'What about our data security?',
                  a: "We use enterprise AI providers with SOC 2 compliance. Your data is never used to train public models. For highly sensitive data, we can deploy fully private, on-premise AI solutions."
                },
                {
                  q: 'Do we need to hire AI people?',
                  a: "No. We handle the technical side completely. Your team just uses the tools we build. We provide training and documentation for anything user-facing."
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
        <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 mb-4">
          <div className="max-w-3xl mx-auto">
            <div className="reveal relative bg-gradient-to-br from-brand-surface/50 to-brand-surface/20 border border-brand-border/30 rounded-2xl p-6 sm:p-8 overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase">
                  Ready to Deploy <span className="text-brand-accent">Intelligence?</span>
                </h2>
                <p className="text-brand-muted text-sm sm:text-base mb-4 max-w-xl mx-auto">
                  Tell us what eats up your team's time. We'll show you where AI can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setIsAuditModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Free Workflow Audit
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
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

      {/* Workflow Audit Modal */}
      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
};

export default AISolutionsPage;
