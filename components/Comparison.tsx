import React from 'react';
import { BENEFITS } from '../constants';
import { TrendingDown, Clock, AlertTriangle, Smartphone, Settings, TrendingUp, CheckCircle2, XCircle, Clock as ClockIcon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={20} />,
  Clock: <ClockIcon size={20} />,
  Settings: <Settings size={20} />,
  TrendingUp: <TrendingUp size={20} />
};

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative scroll-mt-24" id="comparison">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* LEFT SIDE - THE REALITY */}
          <div className="bg-brand-surface/20 rounded-3xl p-8 lg:p-12 border border-brand-border/50 flex flex-col reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest rounded w-fit">
              <XCircle size={14} /> The Reality
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Is your website <span className="text-brand-muted">costing you jobs?</span>
            </h2>

            <div className="space-y-6 mt-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center flex-shrink-0 text-red-500 border border-brand-border shadow-lg">
                  <TrendingDown size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Phone Not Ringing</h3>
                  <p className="text-brand-muted text-xs lg:text-sm leading-relaxed">Visitors can't find your number. They call your competitor instead.</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center flex-shrink-0 text-red-500 border border-brand-border shadow-lg">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Looks Outdated</h3>
                  <p className="text-brand-muted text-xs lg:text-sm leading-relaxed">Customers judge you in 3 seconds. Outdated site = they assume outdated work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - OUR SOLUTION */}
          <div className="bg-brand-black rounded-3xl p-8 lg:p-12 border-2 border-brand-accent relative overflow-hidden shadow-[0_0_40px_rgba(0,255,157,0.1)] flex flex-col reveal reveal-delay-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-widest rounded w-fit">
              <CheckCircle2 size={14} /> Our Solution
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">
              <span className="text-brand-accent">LEADS, NOT EXCUSES.</span>
            </h2>

            <div className="space-y-6 mt-4 relative z-10">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-accent border border-brand-accent/20 group-hover:scale-110 transition-transform">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Built to Convert</h3>
                  <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">Click-to-call buttons. Quote forms above the fold. Mobile-first design.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-accent border border-brand-accent/20 group-hover:scale-110 transition-transform">
                  <ClockIcon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Live in 7 Days</h3>
                  <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">No 12-week waits. You'll be taking calls from your new site within a week.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;