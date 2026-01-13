import React from 'react';
import { Check, Zap, Info } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-brand-black relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            NEW YEAR, NEW WEBSITE
          </h2>
          <p className="text-brand-muted text-lg italic">2026 New Year Special — Ends 15 February</p>
          <p className="text-brand-muted text-xl max-w-2xl mx-auto font-light mt-4">
            Simple Pricing. Big Results.
          </p>
        </div>

        <div className="max-w-md mx-auto reveal reveal-delay-100">
            <div className="relative bg-brand-black border-2 border-brand-accent rounded-2xl shadow-[0_0_50px_rgba(0,255,179,0.15)] overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              
              {/* Badge */}
              <div className="bg-brand-accent text-brand-black text-xs font-extrabold uppercase tracking-widest py-3 text-center">
                2026 NEW YEAR SPECIAL
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-display font-black text-white mb-2 uppercase italic leading-none">
                  Tradie Starter Pack
                </h3>
                <p className="text-brand-muted text-sm mb-8 border-b border-brand-border pb-8 leading-relaxed mt-4">
                  Everything you need to get online and get work.
                </p>

                {/* Pricing */}
                <div className="flex flex-col items-center mb-10 text-center">
                   {/* Valued At Strikethrough */}
                   <div className="relative mb-3">
                      <span className="text-gray-500 text-xl font-bold">VALUED AT $2,500</span>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 rotate-[-10deg]"></div>
                   </div>

                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl text-brand-accent font-bold">$</span>
                     <span className="text-8xl font-display font-black text-white tracking-tighter">299</span>
                   </div>
                   <span className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-2">Setup</span>

                   <div className="flex items-center gap-3 bg-brand-surface px-8 py-4 rounded-xl border border-brand-border w-full justify-center shadow-inner mb-3">
                      <span className="text-2xl font-bold text-white">+ $99</span>
                      <span className="text-sm text-brand-muted font-medium opacity-80">/ month</span>
                   </div>

                   {/* What's Included in Monthly */}
                   <div className="bg-brand-black/50 rounded-xl p-4 mb-6 border border-brand-accent/20">
                      <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">What's Included for $99/mo:</h4>
                      <div className="space-y-2">
                         {[
                            "Hosting & security (worth $50/mo)",
                            "Unlimited updates & edits",
                            "Mobile optimisation",
                            "Lead tracking dashboard",
                            "Monthly performance report",
                            "Priority support (respond within 4 hours)"
                         ].map((item, i) => (
                            <div key={i} className="flex gap-2 items-start">
                               <div className="mt-0.5 bg-brand-accent rounded-full p-0.5 shrink-0">
                                  <Check size={9} className="text-brand-black stroke-[4]" />
                               </div>
                               <span className="text-xs text-gray-300 leading-tight">{item}</span>
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Contract Details - Made Prominent */}
                   <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-4 w-full mb-6">
                     <div className="flex items-center justify-center gap-2 text-brand-accent font-bold uppercase text-[11px] tracking-widest mb-2">
                       <Info size={14} />
                       Partnership Terms
                     </div>
                     <p className="text-white text-sm font-medium mb-2">
                       24 Month Agreement • Then Month-to-Month
                     </p>
                     <p className="text-brand-muted text-xs leading-relaxed">
                       After 24 months: Switch to month-to-month at $50/mo (hosting & security only), or take your site wherever you want.
                     </p>
                   </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {[
                    "Mobile-optimised website",
                    "Google-friendly structure (we handle all the SEO basics)",
                    "Click-to-call buttons on every page",
                    "Quote request forms that work on all devices",
                    "Photo gallery for your best jobs",
                    "Service area mapping for local SEO",
                    "Monthly analytics report (see where leads come from)"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-brand-accent/10 p-1 rounded-full text-brand-accent flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#enquire" className="w-full bg-brand-accent hover:bg-white text-brand-black font-bold text-lg py-5 rounded-xl shadow-[0_4px_20px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_30px_rgba(0,255,179,0.6)] transition-all transform hover:-translate-y-1 uppercase tracking-wider flex items-center justify-center gap-3 group">
                  <Zap size={20} className="fill-current group-hover:scale-110 transition-transform" />
                  GET STARTED
                </a>

              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;