import React from 'react';
import { Target, Layers, Users, CheckCircle, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
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
              <span className="text-brand-border leading-none">|</span>
              <a href="#why-choose-us" className="flex items-center text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap leading-none">
                Why Choose Us
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
            <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              ABOUT <br/>
              <span className="animate-text-starspeed inline-block">VERDANT DIGITAL</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 reveal reveal-delay-100">
            <div className="space-y-5 md:space-y-6 text-brand-muted text-sm lg:text-base leading-relaxed">
              <p>
                Verdant Digital builds digital products—websites, mobile apps, progressive web applications and AI-powered solutions—that help businesses run with more clarity, confidence and momentum.
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
                No clutter. No confusion. No complicated handovers. Just digital work that helps your business move forward.
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
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              ABOUT THE <br/>
              <span className="animate-text-starspeed inline-block">FOUNDERS</span>
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
                  "Better systems create better decisions, and better decisions create better businesses."
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
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 md:mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              OUR <br/>
              <span className="animate-text-starspeed inline-block">PHILOSOPHY</span>
            </h2>
            <div className="space-y-5 md:space-y-4 text-brand-muted text-sm lg:text-base leading-relaxed">
              <p>
                We believe websites should be created as complete solutions, not as isolated parts. The structure, the technology and the design all work together to create clarity, reduce friction and support better decision making for both the business and the customer.
              </p>
              <p>
                When digital experiences are aligned in this way, they become tools that help a business operate with <span className="text-brand-accent font-bold">more confidence, control and momentum</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-6 reveal reveal-delay-100">
            <div className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-5 md:p-6 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">Strategic Design</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Every layout, colour and interaction has a purpose. Your customers know exactly what to do next, turning more visits into real business outcomes.
              </p>
            </div>

            <div className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-5 md:p-6 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">Technical Excellence</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Platforms that are fast, stable and built to scale with your business. No frustrating slowdowns, no technical debt holding you back.
              </p>
            </div>

            <div className="bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/20 md:border-brand-border rounded-lg p-5 md:p-6 group hover:border-brand-accent hover:bg-brand-surface/60 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-black border border-brand-accent/30 md:border-brand-border rounded-lg flex items-center justify-center text-brand-accent group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 shadow-lg">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">Integrated Approach</h3>
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
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              HOW WE <br/>
              <span className="animate-text-starspeed inline-block">WORK</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-8 reveal reveal-delay-100">
            {/* Step 1 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-black text-xl">
                  01
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Discovery and Strategy</h3>
                <p className="text-brand-muted leading-relaxed">
                  We start by understanding your business, your customers and what success looks like. No cookie-cutter solutions. Every project begins with your specific goals, requirements and challenges.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-black text-xl">
                  02
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Design and Architecture</h3>
                <p className="text-brand-muted leading-relaxed">
                  We plan user flows, structure and technical approach together so the solution is logical, scalable and aligned with how the business operates. Design decisions are made with technical feasibility in mind, and technical decisions consider how users actually behave.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-black text-xl">
                  03
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Build and Iterate</h3>
                <p className="text-brand-muted leading-relaxed">
                  Development progresses in clear cycles with regular check-ins. You see progress early and often. Feedback is incorporated during the build, not after everything is finished.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-black text-xl">
                  04
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Launch and Optimise</h3>
                <p className="text-brand-muted leading-relaxed">
                  We do not disappear after launch. Performance tracking, user behaviour insights and ongoing refinement ensure your digital solution continues to improve and support proactive decision making over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section id="why-choose-us" className="py-12 pb-16 md:py-16 md:pb-24 bg-brand-black relative scroll-mt-24">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 md:mb-12 reveal">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] mb-6 uppercase" style={{letterSpacing: '0.02em'}}>
              WHY CLIENTS <br/>
              <span className="animate-text-starspeed inline-block">CHOOSE US</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 mb-10 md:mb-12 reveal reveal-delay-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-lg mb-1">We Actually Deliver</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  No endless revisions or missed deadlines. We scope properly, build efficiently, and deliver on time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-lg mb-1">Speed Matters</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Fast websites convert better. Fast development means you get to market quicker. We optimise for both.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-lg mb-1">Built to Last</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Clean code, proper architecture, and scalable infrastructure. Your platform grows with your business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                <TrendingUp size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-lg mb-1">ROI-Focused</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Every decision is measured against business outcomes. More conversions, more leads, more revenue.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                <Users size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-lg mb-1">Local Team</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Australian-based, in your timezone, speaking your language. Real support when you need it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-black border border-brand-border rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                <Target size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-display text-lg mb-1">No Jargon</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Clear communication, plain language, honest timelines. You always know where your project stands.
                </p>
              </div>
            </div>
          </div>

          {/* Tradie CTA */}
          <div className="mt-12 mb-8 text-center reveal reveal-delay-200">
            <div className="inline-block bg-brand-surface/30 border border-brand-border rounded-xl p-6 md:p-8 max-w-2xl">
              <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-4">
                <span className="text-white font-bold">Trade or service business?</span> We also offer a streamlined 7-day website build specifically designed for tradies.
              </p>
              <a href="/tradie" className="inline-flex items-center gap-2 text-brand-accent hover:text-white font-bold uppercase tracking-wide text-xs transition-colors group">
                Learn about Tradie Express Build
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="text-center reveal reveal-delay-200">
            <a href="/enquire" className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm">
              Start a Conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
