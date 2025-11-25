import React from 'react';
import { ArrowRight, PhoneCall, Check } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <>
      <section className="relative bg-transparent pt-48 pb-32 lg:pt-64 lg:pb-40 overflow-hidden">
        {/* Animated Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content - Full Width */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center reveal">

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-brand-surface/50 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8 hover:border-brand-accent/50 transition-colors cursor-default backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
                </span>
                Accepting New Clients
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.01em'}}>
                STOP LOSING JOBS TO<br/>
                <span className="animate-text-starspeed inline-block">
                  COMPETITORS WITH<br/>
                  BETTER WEBSITES
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-brand-accent font-bold mb-8 max-w-3xl mx-auto leading-relaxed">
                Mobile-first sites that convert lookers into bookers. Live in 7 days.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-3 mb-0 max-w-2xl mx-auto">
                {[
                  "Mobile-first design (87% of your leads are on phones)",
                  "Google My Business integration",
                  "Quote forms that actually work",
                  "Launch in 7 days, guaranteed"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start justify-center lg:justify-center">
                    <div className="mt-1 bg-brand-accent rounded-full p-0.5 shrink-0">
                      <Check size={12} className="text-brand-black stroke-[4]" />
                    </div>
                    <span className="text-base md:text-lg text-brand-bone leading-tight text-left">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section - Separate */}
      <section id="pricing" className="relative bg-transparent py-16 lg:py-24 overflow-hidden scroll-mt-24">
        {/* Animated Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-8 reveal">
              <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
                THE DEAL
              </h2>
            </div>

            <div className="reveal reveal-delay-100">
              {/* Pricing Card */}
              <div className="bg-brand-surface/60 backdrop-blur-lg border-2 border-brand-accent rounded-2xl p-6 md:p-8 lg:p-10 mx-auto shadow-[0_0_50px_rgba(0,255,157,0.15)] text-left transform hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">

                {/* 3-Column Layout */}
                <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-6 lg:gap-8 mb-6">

                  {/* LEFT COLUMN - Badge, Pricing & CTA */}
                  <div className="flex flex-col justify-between gap-6 lg:gap-0">
                    {/* Urgency Badge */}
                    <div className="bg-brand-accent text-brand-black text-[10px] font-black uppercase tracking-widest py-2 px-3 rounded text-center">
                      DECEMBER INTAKE - 3 SPOTS REMAINING
                    </div>

                    {/* Pricing Section - Centered */}
                    <div className="flex-1 flex flex-col justify-center py-4 lg:py-0">
                      {/* Valued At Strikethrough */}
                      <div className="text-center mb-6">
                        <div className="relative inline-block">
                          <span className="text-gray-500 text-sm font-bold">VALUED AT $5,000</span>
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 rotate-[-5deg]"></div>
                        </div>
                      </div>

                      {/* Pricing Display */}
                      <div className="text-center">
                        <div className="mb-4">
                          <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none block">$299</span>
                          <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mt-2 block">Setup [One-time]</span>
                        </div>
                        <span className="text-2xl font-light text-white/40 block my-3">+</span>
                        <div>
                          <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none block">$99</span>
                          <span className="text-brand-muted font-bold text-xs uppercase tracking-widest mt-2 block">/mo [24 Months]</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <a
                        href="https://meetings-ap1.hubspot.com/thalya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-brand-accent hover:bg-white text-brand-black font-black text-sm py-3 px-4 rounded-xl shadow-[0_4px_20px_rgba(0,255,157,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,157,0.6)] transition-all flex items-center justify-center gap-2 uppercase tracking-wide transform group-hover:-translate-y-1"
                      >
                        START YOUR BUILD - BOOK DISCOVERY CALL
                      </a>
                    </div>
                  </div>

                  {/* MIDDLE COLUMN - Feature Lists */}
                  <div className="border-l border-r border-white/10 px-6 lg:px-8">
                    <div className="space-y-6">
                      {/* What You Get Upfront */}
                      <div>
                        <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">What You Get Upfront:</h4>
                        <div className="space-y-2">
                          {[
                            "Mobile-optimised website",
                            "Google-friendly structure",
                            "Click-to-call buttons on every page",
                            "Quote request forms that work",
                            "Photo gallery for your best jobs",
                            "Service area mapping for local SEO",
                            "Lead tracking dashboard"
                          ].map((item, i) => (
                            <div key={i} className="flex gap-2.5 items-start">
                              <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                                <Check size={10} className="text-brand-black stroke-[4]" />
                              </div>
                              <span className="text-xs text-gray-300 leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Then, Every Month */}
                      <div>
                        <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">Then, Every Month:</h4>
                        <div className="space-y-2">
                          {[
                            "Hosting & security (worth $50/mo)",
                            "Unlimited updates & edits",
                            "Mobile optimisation maintenance",
                            "Monthly analytics report",
                            "Priority support"
                          ].map((item, i) => (
                            <div key={i} className="flex gap-2.5 items-start">
                              <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                                <Check size={10} className="text-brand-black stroke-[4]" />
                              </div>
                              <span className="text-xs text-gray-300 leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN - Advertising Package */}
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 h-fit">
                    <div className="text-center mb-3">
                      <span className="bg-orange-500 text-brand-black text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded inline-block mb-2">Optional Add On</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Turn It Into A Lead Machine</h4>
                    </div>

                    <div className="mb-4">
                      <div className="text-center mb-3">
                        <span className="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-1">Add:</span>
                        <span className="text-white font-bold text-base block">Advertising Package</span>
                        <span className="text-orange-400 font-bold text-lg">$497/mo</span>
                      </div>

                      <div className="space-y-2 mb-3">
                        {[
                          "$300/mo ad budget",
                          "Conversion tracking",
                          "Monthly reports",
                          "A/B testing",
                          "Lead quality filtering"
                        ].map((item, i) => (
                          <div key={i} className="flex gap-2.5 items-start">
                            <div className="mt-0.5 bg-orange-500 rounded-full p-0.5 shrink-0">
                              <Check size={10} className="text-brand-black stroke-[4]" />
                            </div>
                            <span className="text-xs text-gray-300 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-orange-500/20 pt-2">
                        <p className="text-orange-400 text-xs font-bold mb-0.5">Typical results:</p>
                        <p className="text-white text-xs mb-1">20-40 leads/mo • $10-15/lead</p>
                        <p className="text-gray-500 text-[10px] italic">*Results may vary based on location and industry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partnership Terms - Full Width Bottom */}
                <div className="text-center bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-center gap-2 text-brand-accent font-bold text-xs mb-2">
                    <Check className="bg-brand-accent text-brand-black rounded-full p-0.5" size={14} strokeWidth={3} />
                    <span className="uppercase tracking-wider">Partnership Terms</span>
                  </div>
                  <p className="text-white text-xs font-medium mb-1.5">24 Month Agreement • Then Month-to-Month</p>
                  <p className="text-brand-muted text-[11px] leading-relaxed">
                    After 24 months: Switch to month-to-month at $50/mo (hosting & security only), or take your site wherever you want.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;