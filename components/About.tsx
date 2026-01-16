import React, { useState, useRef } from 'react';
import { Target, Layers, Users, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      num: '01',
      title: 'Discovery and Strategy',
      desc: 'We start by understanding your business, your customers and what success looks like. Every project begins with your specific goals, requirements and challenges.'
    },
    {
      num: '02',
      title: 'Design and Architecture',
      desc: 'We plan user flows, structure and technical approach together so the solution is logical, scalable and aligned with how the business operates.'
    },
    {
      num: '03',
      title: 'Build and Iterate',
      desc: 'Development progresses in clear cycles with regular check-ins. You see progress early and often. Feedback is incorporated during the build, not after everything is finished.'
    },
    {
      num: '04',
      title: 'Launch and Optimise',
      desc: 'We do not disappear after launch. Performance tracking, user behaviour insights and ongoing refinement ensure your digital solution continues to improve over time.'
    }
  ];

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
    <div className="bg-brand-black">
      {/* Section Navigation */}
      <nav className="bg-brand-black border-b border-brand-border mt-[56px] md:mt-[64px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center gap-4 md:gap-6 py-3 md:py-2 min-w-max w-fit mx-auto">
              <a href="#about" className="flex items-center text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap leading-none">
                About Us
              </a>
              <span className="text-brand-border leading-none">|</span>
              <a href="#founders" className="flex items-center text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap leading-none">
                Founders
              </a>
              <span className="text-brand-border leading-none">|</span>
              <a href="#philosophy" className="flex items-center text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap leading-none">
                Philosophy
              </a>
              <span className="text-brand-border leading-none">|</span>
              <a href="#how-we-work" className="flex items-center text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap leading-none">
                How We Work
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - About Verdant Digital */}
      <section id="about" className="pt-12 pb-12 md:pt-16 md:pb-16 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 md:mb-8 reveal">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
              About Us
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              ABOUT <span className="text-brand-accent">VERDANT DIGITAL</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 reveal reveal-delay-100">
            <div className="space-y-5 md:space-y-6 text-brand-muted text-sm lg:text-base leading-relaxed">
              <p>
                Verdant Digital builds digital products (websites, mobile apps, progressive web applications and AI-powered solutions) that help businesses run with more clarity, confidence and momentum.
              </p>
              <p>
                We focus on building solutions that feel easy to use, simple to manage and aligned to how real customers think and behave. When design, content, structure and technology all work together, digital products become more than tools to use. They become systems that support better decisions, stronger communication and real business growth.
              </p>
            </div>

            <div className="space-y-5 md:space-y-6 text-brand-muted text-sm lg:text-base leading-relaxed">
              <p>
                We specialise in mobile applications, progressive web apps, custom websites, AI-powered automation and e-commerce platforms that reduce friction and make day-to-day operations smoother. Whether it is a growing business that needs more enquiries or an established organisation that needs a cleaner, more scalable platform, we bring the same thoughtful approach and commitment to outcomes.
              </p>
              <p className="text-brand-accent font-bold">
                Clear communication. Simple handovers. Digital work that helps your business move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founders */}
      <section id="founders" className="py-12 md:py-16 bg-brand-black relative scroll-mt-24">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 md:mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              ABOUT THE <span className="text-brand-accent">FOUNDERS</span>
            </h2>
          </div>

          {/* Directors */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-12 reveal reveal-delay-100">
            {/* Director 1 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-24 h-24 rounded-full bg-brand-surface border-2 border-brand-accent/50 overflow-hidden flex-shrink-0">
                <img
                  src="/Thalya.jpeg"
                  alt="Thalya Tilt MacSporran"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback: hide image, background color will show
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-1">Thalya Tilt MacSporran</h3>
                <p className="text-brand-accent font-semibold text-xs uppercase tracking-widest mb-4">Director</p>
                <p className="text-brand-muted text-sm leading-relaxed italic">
                  "Better systems enable better decisions, and better decisions create better businesses."
                </p>
              </div>
            </div>

            {/* Director 2 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-24 h-24 rounded-full bg-brand-surface border-2 border-brand-accent/50 overflow-hidden flex-shrink-0">
                <img
                  src="/Jacob.jpeg"
                  alt="Jacob Paterson"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback: hide image, background color will show
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-1">Jacob Paterson</h3>
                <p className="text-brand-accent font-semibold text-xs uppercase tracking-widest mb-4">Director</p>
                <p className="text-brand-muted text-sm leading-relaxed italic">
                  "Great technology should solve real problems and deliver results you can measure."
                </p>
              </div>
            </div>
          </div>

          {/* Founders Story */}
          <div className="space-y-5 md:space-y-4 text-brand-muted text-sm lg:text-base leading-relaxed reveal reveal-delay-200">
            <p>
              With our roots in the insurance industry, we bring 12+ years of experience improving operations, systems and digital processes while partnering with suppliers, stakeholders and clients to align expectations, simplify complexity and deliver measurable outcomes.
            </p>
            <p>
              We have always shared a love for technology, building things and solving problems with logic and smart design. Together with studies in behavioural science, computer science and design-thinking, we saw how clarity, usability and well-constructed digital experiences influence how people decide, navigate and trust a business both online and through communication.
            </p>
            <p>
              We created Verdant Digital to offer something better. A digital product studio that helps businesses move from reactive to proactive through apps, websites, AI solutions and platforms that:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-white">support data-led decisions</strong> instead of guesswork</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>are <strong className="text-white">designed for humans first</strong>, not just technical requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-white">reduce overwhelm and operational friction</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-white">support real business growth</strong>, not surface improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-white">scale cleanly</strong> as the business grows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-white">communicate with clarity, confidence and intention</strong></span>
              </li>
            </ul>
            <p>
              It is the same thoughtful approach, calm delivery and relationship-focused way of working, now applied to help more businesses operate with clarity, confidence and momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="philosophy" className="py-12 md:py-16 bg-brand-black relative scroll-mt-24">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 md:mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              OUR <span className="text-brand-accent">PHILOSOPHY</span>
            </h2>
            <div className="space-y-5 md:space-y-4 text-brand-muted text-sm lg:text-base leading-relaxed">
              <p>
                We believe digital products should be created as complete solutions, not as isolated parts. The structure, the technology and the design all work together to create clarity, reduce friction and support better decision making for both the business and the customer.
              </p>
              <p>
                When digital experiences are aligned in this way, they become tools that help a business operate with <span className="text-brand-accent font-bold">more confidence, control and momentum</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-6 reveal reveal-delay-100">
            <div className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-4 md:p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-3 shadow-lg">
                <Target size={22} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Strategic Design</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Every layout, colour and interaction has a purpose. Your customers know exactly what to do next, turning more visits into real business outcomes.
              </p>
            </div>

            <div className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-4 md:p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-3 shadow-lg">
                <Layers size={22} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Technical Excellence</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Platforms that are fast, stable and built to scale with your business. No frustrating slowdowns, no technical debt holding you back.
              </p>
            </div>

            <div className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-4 md:p-5 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-3 shadow-lg">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Integrated Approach</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                A team that feels like your own. Clear updates, no confusing jargon, and people who care about your success as much as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-12 md:py-16 bg-brand-black relative scroll-mt-24">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 md:mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              HOW WE <span className="text-brand-accent">WORK</span>
            </h2>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden reveal reveal-delay-100">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center pr-4"
                >
                  <div className="bg-brand-surface/30 border border-brand-border rounded-xl p-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-black text-xl">
                          {step.num}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
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
                  className={`block rounded-full cursor-pointer ${
                    activeStep === index ? 'bg-brand-accent h-2.5 w-6' : 'bg-brand-border h-2.5 w-2.5'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 reveal reveal-delay-100">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-black text-xl">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-brand-black relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-brand-surface/30 border border-brand-border rounded-xl p-4 md:p-6 text-center reveal">
            <h2 className="text-xl md:text-2xl font-display font-black text-white mb-3 uppercase" style={{letterSpacing: '0.02em'}}>
              Ready to Start <span className="text-brand-accent">Building?</span>
            </h2>
            <p className="text-brand-muted text-sm md:text-base mb-4 max-w-xl mx-auto leading-relaxed">
              Whether you have a project in mind or want to explore what's possible, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/enquire"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-6 py-3 rounded-lg transition-all uppercase tracking-widest text-xs"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-widest text-xs"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
