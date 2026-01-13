import React from 'react';
import { ArrowRight, Check, Home, Wrench, User, Images, Mail, Zap, Award, MapPin, Headphones } from 'lucide-react';
import { trackStartBuildClick } from '../services/analytics';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <>
      <section className="relative bg-transparent pt-32 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        {/* Animated Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content - Full Width */}
          <div className="max-w-4xl mx-auto">
            <div className="text-left reveal">

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-brand-surface/70 border border-brand-accent/40 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8 hover:border-brand-accent/50 transition-colors cursor-default backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
                </span>
                Accepting New Clients
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-6" style={{fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.01em'}}>
                A WEBSITE THAT HELPS YOU<br/>
                <span className="animate-text-starspeed inline-block">
                  WIN MORE WORK
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-brand-accent font-bold mb-8 max-w-3xl leading-relaxed">
                Built for trade businesses that want steady enquiries, a professional online presence and less admin.
              </p>

              {/* CTA Button */}
              <div className="mb-8">
                <button
                  onClick={() => {
                    trackStartBuildClick('hero_main');
                    onOpenModal();
                  }}
                  className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm"
                >
                  Start Your Build
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Key Benefits List */}
              <div className="max-w-2xl">
                <p className="text-sm md:text-base text-brand-muted font-semibold mb-4 text-left">
                  What you can expect:
                </p>
                <div className="space-y-2 mb-0">
                  {[
                    "Job enquiries sent directly to you",
                    "Professional design that builds trust",
                    "Simple navigation for customers",
                    "Fully managed and maintained"
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-3 items-start justify-start">
                      <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                        <Check size={12} className="text-brand-black stroke-[4]" />
                      </div>
                      <span className="text-sm md:text-base text-brand-bone leading-snug text-left">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-8 border-t border-brand-border/30">
                  {/* 7-Day Launch */}
                  <div className="flex flex-col items-center text-center p-3 bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/30 md:border-brand-border/40 rounded-lg hover:border-brand-accent/40 transition-colors">
                    <Zap size={20} className="text-brand-accent mb-2" />
                    <span className="text-xs font-bold text-white leading-tight">7-Day Launch</span>
                    <span className="text-[10px] text-brand-muted mt-0.5">Guaranteed</span>
                  </div>

                  {/* Australian Owned */}
                  <div className="flex flex-col items-center text-center p-3 bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/30 md:border-brand-border/40 rounded-lg hover:border-brand-accent/40 transition-colors">
                    <MapPin size={20} className="text-brand-accent mb-2" />
                    <span className="text-xs font-bold text-white leading-tight">Australian</span>
                    <span className="text-[10px] text-brand-muted mt-0.5">Owned & Operated</span>
                  </div>

                  {/* Built for Tradies */}
                  <div className="flex flex-col items-center text-center p-3 bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/30 md:border-brand-border/40 rounded-lg hover:border-brand-accent/40 transition-colors">
                    <Award size={20} className="text-brand-accent mb-2" />
                    <span className="text-xs font-bold text-white leading-tight">Built for</span>
                    <span className="text-[10px] text-brand-muted mt-0.5">Trade Businesses</span>
                  </div>

                  {/* Priority Support */}
                  <div className="flex flex-col items-center text-center p-3 bg-brand-surface/60 md:bg-brand-surface/30 border border-brand-accent/30 md:border-brand-border/40 rounded-lg hover:border-brand-accent/40 transition-colors">
                    <Headphones size={20} className="text-brand-accent mb-2" />
                    <span className="text-xs font-bold text-white leading-tight">Priority</span>
                    <span className="text-[10px] text-brand-muted mt-0.5">Support Included</span>
                  </div>
                </div>
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
                NEW YEAR, NEW WEBSITE
              </h2>
              <p className="text-brand-muted text-lg mt-2 italic">2026 New Year Special — Ends 15 February</p>
            </div>

            <div className="reveal reveal-delay-100">
              {/* Pricing Card */}
              <div className="bg-brand-surface/60 backdrop-blur-lg border-2 border-brand-accent rounded-2xl p-6 md:p-8 lg:p-10 mx-auto shadow-[0_0_50px_rgba(0,255,179,0.15)] text-center transform hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">

                {/* Top Section - Centered Badge, Pricing & CTA */}
                <div className="mb-8">
                  {/* Urgency Badge */}
                  <div className="bg-brand-accent text-brand-black text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded inline-block mb-6">
                    2026 NEW YEAR SPECIAL
                  </div>

                  {/* Valued At Strikethrough */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <span className="text-gray-500 text-sm font-bold">VALUED AT $5,000</span>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 rotate-[-5deg]"></div>
                    </div>
                  </div>

                  {/* Pricing Display - Horizontal */}
                  <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 flex-wrap">
                    <div className="text-center">
                      <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none block">$399</span>
                      <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mt-2 block">Setup (one-time)</span>
                    </div>
                    <span className="text-2xl font-light text-white/40">+</span>
                    <div className="text-center">
                      <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none block">$99/mo</span>
                      <span className="text-brand-muted font-bold text-xs uppercase tracking-widest mt-2 block">For 24 months</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="max-w-sm mx-auto">
                    <button
                      onClick={() => {
                        trackStartBuildClick('pricing_card');
                        onOpenModal();
                      }}
                      className="w-full bg-brand-accent hover:bg-white text-brand-black font-black text-sm py-3 px-6 rounded-xl shadow-[0_4px_20px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,179,0.6)] transition-all flex items-center justify-center gap-2 uppercase tracking-wide transform group-hover:-translate-y-1"
                    >
                      Start Your Build
                    </button>
                  </div>
                </div>

                {/* Feature Lists - Two Column Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6 text-left px-8 md:px-12 max-w-3xl mx-auto">
                  {/* What You Get Upfront */}
                  <div>
                    <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-3">What you get straight away:</h4>
                    <div className="space-y-2">
                      {[
                        "Mobile-optimised website",
                        "Google-friendly structure",
                        "Click-to-call buttons on every page",
                        "Quote request forms that work",
                        "Photo gallery for your best jobs",
                        "Service area mapping for local SEO",
                        "Lead dashboard to track enquiries"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                            <Check size={12} className="text-brand-black stroke-[4]" />
                          </div>
                          <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Then, Every Month */}
                  <div>
                    <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-3">Then, every month:</h4>
                    <div className="space-y-2">
                      {[
                        "Hosting and security",
                        "Unlimited updates and edits",
                        "Mobile optimisation maintenance",
                        "Monthly analytics report",
                        "Priority support"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                            <Check size={12} className="text-brand-black stroke-[4]" />
                          </div>
                          <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Partnership Terms - Full Width Bottom */}
                <div className="text-center bg-brand-accent/20 border border-brand-accent/40 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2 text-brand-accent font-bold text-xs mb-2">
                    <Check className="bg-brand-accent text-brand-black rounded-full p-0.5" size={14} strokeWidth={3} />
                    <span className="uppercase tracking-wider">Partnership Terms</span>
                  </div>
                  <p className="text-white text-xs font-medium mb-1.5">24 Month Agreement • Then Month-to-Month</p>
                  <p className="text-brand-muted text-[11px] leading-relaxed">
                    After 24 months: Switch to month-to-month at $50/mo (hosting & security only), or take your site wherever you want - its yours!
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="flex justify-center my-12">
              <div className="w-0.5 h-16 bg-brand-accent"></div>
            </div>

            {/* What's Included - Browser Mockup */}
            <div className="reveal reveal-delay-200">
              <h4 className="text-2xl md:text-3xl font-bold text-brand-accent uppercase tracking-tight mb-8 text-center">What's included for $399?</h4>

              {/* Browser Window Mockup */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-brand-surface border border-brand-border/50 rounded-xl overflow-hidden shadow-2xl">

                  {/* Browser Header */}
                  <div className="h-10 bg-[#1a1a1a] flex items-center gap-3 px-4 border-b border-brand-border/30">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <div className="bg-brand-black/50 px-4 py-1 rounded text-[10px] text-brand-accent font-mono border border-brand-border/30">
                        yourwebsite.com.au
                      </div>
                    </div>
                  </div>

                  {/* Browser Navigation Tabs */}
                  <div className="bg-[#0f0f0f] border-b border-brand-border/30 flex gap-1 px-2 py-2 overflow-x-auto">
                    <div className="flex items-center gap-2 bg-brand-black px-3 py-1.5 rounded-t border border-brand-accent/30 min-w-fit">
                      <Home size={12} className="text-brand-accent" />
                      <span className="text-xs text-white font-medium">Home</span>
                    </div>
                    <div className="flex items-center gap-2 bg-brand-surface/30 px-3 py-1.5 rounded-t border border-brand-border/30 hover:border-brand-accent/20 transition-colors min-w-fit">
                      <Wrench size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Services</span>
                    </div>
                    <div className="flex items-center gap-2 bg-brand-surface/30 px-3 py-1.5 rounded-t border border-brand-border/30 hover:border-brand-accent/20 transition-colors min-w-fit">
                      <User size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-400">About</span>
                    </div>
                    <div className="flex items-center gap-2 bg-brand-surface/30 px-3 py-1.5 rounded-t border border-brand-border/30 hover:border-brand-accent/20 transition-colors min-w-fit">
                      <Images size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Gallery</span>
                    </div>
                    <div className="flex items-center gap-2 bg-brand-surface/30 px-3 py-1.5 rounded-t border border-brand-border/30 hover:border-brand-accent/20 transition-colors min-w-fit">
                      <Mail size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Contact</span>
                    </div>
                  </div>

                  {/* Browser Content Area - Page Cards */}
                  <div className="bg-brand-black p-6 md:p-8">
                    <div className="grid gap-4">
                      {/* Home Page */}
                      <div className="bg-brand-surface/60 md:bg-brand-surface/40 border-l-4 border-brand-accent rounded-r-lg p-4 hover:bg-brand-surface/60 transition-all">
                        <div className="flex items-start gap-3">
                          <Home size={18} className="text-brand-accent mt-1 shrink-0" />
                          <div>
                            <h5 className="text-sm font-bold text-white mb-1">Home</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">Your main landing page with a clear message, strong call to action and professional first impression.</p>
                          </div>
                        </div>
                      </div>

                      {/* Services Page */}
                      <div className="bg-brand-surface/60 md:bg-brand-surface/40 border-l-4 border-blue-500 md:border-blue-500/50 rounded-r-lg p-4 hover:bg-brand-surface/60 transition-all">
                        <div className="flex items-start gap-3">
                          <Wrench size={18} className="text-blue-400 mt-1 shrink-0" />
                          <div>
                            <h5 className="text-sm font-bold text-white mb-1">Services</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">A breakdown of the work you offer so customers understand exactly what you do.</p>
                          </div>
                        </div>
                      </div>

                      {/* About Page */}
                      <div className="bg-brand-surface/60 md:bg-brand-surface/40 border-l-4 border-purple-500 md:border-purple-500/50 rounded-r-lg p-4 hover:bg-brand-surface/60 transition-all">
                        <div className="flex items-start gap-3">
                          <User size={18} className="text-purple-400 mt-1 shrink-0" />
                          <div>
                            <h5 className="text-sm font-bold text-white mb-1">About</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">Your business story, experience and credibility to help customers feel confident choosing you.</p>
                          </div>
                        </div>
                      </div>

                      {/* Gallery Page */}
                      <div className="bg-brand-surface/60 md:bg-brand-surface/40 border-l-4 border-orange-500 md:border-orange-500/50 rounded-r-lg p-4 hover:bg-brand-surface/60 transition-all">
                        <div className="flex items-start gap-3">
                          <Images size={18} className="text-orange-400 mt-1 shrink-0" />
                          <div>
                            <h5 className="text-sm font-bold text-white mb-1">Gallery</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">Photos of completed jobs to show workmanship and quality.</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Page */}
                      <div className="bg-brand-surface/60 md:bg-brand-surface/40 border-l-4 border-green-500 md:border-green-500/50 rounded-r-lg p-4 hover:bg-brand-surface/60 transition-all">
                        <div className="flex items-start gap-3">
                          <Mail size={18} className="text-green-400 mt-1 shrink-0" />
                          <div>
                            <h5 className="text-sm font-bold text-white mb-1">Contact & Quote Request</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">Easy ways for customers to get in touch, request a quote and confirm you service their area.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="/tradie/whats-included"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-white transition-colors uppercase tracking-widest border-b-2 border-brand-accent/30 hover:border-brand-accent pb-1"
                >
                  See What's Included
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <p className="text-sm text-gray-500 italic mt-6 text-center">Need more pages, custom features or e-commerce? We can quote for anything additional.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;