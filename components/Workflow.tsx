import React from 'react';
import { WORKFLOW } from '../constants';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface WorkflowProps {
  onOpenModal: () => void;
}

const Workflow: React.FC<WorkflowProps> = ({ onOpenModal }) => {
  return (
    <section id="process" className="py-32 bg-transparent relative overflow-hidden scroll-mt-24">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">FROM START TO LIVE IN 7 DAYS</h2>
          <button onClick={onOpenModal} className="inline-flex items-center text-brand-accent font-bold uppercase tracking-widest hover:text-white transition-colors">
            Start your build <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Workflow Steps (Vertical) */}
          <div className="flex flex-col gap-4 lg:gap-0 lg:justify-between lg:h-[455px]">
            {WORKFLOW.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex gap-4 md:gap-6 items-start bg-brand-black/50 p-4 md:p-6 rounded-xl border border-brand-border hover:border-brand-accent transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-black border-2 border-brand-border rounded-full flex items-center justify-center text-xl md:text-2xl font-display font-bold text-white group-hover:border-brand-accent group-hover:text-brand-accent transition-colors shadow-xl shrink-0">
                    0{item.step}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual Mockup */}
          <div className="relative perspective-1000 hidden lg:block reveal reveal-delay-200 self-start sticky top-32">
            {/* Back decorative elements */}
            <div className="absolute inset-0 bg-brand-accent/5 blur-3xl transform rotate-12 rounded-full"></div>

            {/* Main Floating Card */}
            <div className="relative z-10 transform rotate-y-[-12deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-700 ease-out preserve-3d">
              <div className="bg-brand-surface border border-brand-border/50 rounded-xl p-2 shadow-2xl">
                <div className="bg-brand-black rounded-lg overflow-hidden border border-brand-border relative group">

                  {/* Mock Browser Header */}
                  <div className="h-12 bg-[#111] flex items-center gap-3 px-4 border-b border-brand-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="bg-[#080808] px-4 py-1.5 rounded text-[10px] text-brand-accent font-mono flex-grow text-center border border-brand-border/30 shadow-inner tracking-wider">
                      LIVE JOBS - DASHBOARD
                    </div>
                  </div>

                  {/* Mock Website Content */}
                  <div className="relative">
                     <img
                       src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                       alt="Industrial Website"
                       className="w-full h-[385px] object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>

                     {/* Lead Cards */}
                     <div className="absolute bottom-6 left-6 right-6 space-y-3">
                       {/* Lead 1 - Most Recent */}
                       <div className="bg-[#111]/95 backdrop-blur-md border-l-4 border-brand-accent p-3 rounded-r flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.7)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,157,0.4)] shrink-0">
                            <PhoneCall className="text-brand-black" size={18} />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-brand-accent font-bold text-xs font-display uppercase tracking-wider">New Quote Request</div>
                            <div className="text-white text-xs font-bold truncate">Full House Rewire - Bondi</div>
                            <div className="text-brand-muted text-[10px] font-mono mt-0.5">2 mins ago</div>
                          </div>
                       </div>

                       {/* Lead 2 */}
                       <div className="bg-[#111]/95 backdrop-blur-md border-l-4 border-blue-500 p-3 rounded-r flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.7)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/50 shrink-0">
                            <PhoneCall className="text-blue-400" size={18} />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-blue-400 font-bold text-xs font-display uppercase tracking-wider">Quote Request</div>
                            <div className="text-white text-xs font-bold truncate">Kitchen Renovation - Manly</div>
                            <div className="text-brand-muted text-[10px] font-mono mt-0.5">4 hours ago</div>
                          </div>
                       </div>

                       {/* Lead 3 */}
                       <div className="bg-[#111]/95 backdrop-blur-md border-l-4 border-gray-500 p-3 rounded-r flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.7)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-900 delay-200">
                          <div className="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center border border-gray-500/50 shrink-0">
                            <PhoneCall className="text-gray-400" size={18} />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-gray-400 font-bold text-xs font-display uppercase tracking-wider">Quote Request</div>
                            <div className="text-white text-xs font-bold truncate">Switchboard Upgrade - Parramatta</div>
                            <div className="text-brand-muted text-[10px] font-mono mt-0.5">Yesterday</div>
                          </div>
                       </div>

                       {/* View All Button */}
                       <div className="pt-2">
                         <button className="w-full bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/30 text-brand-accent font-bold text-xs py-2 px-4 rounded transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
                           <span>View All Leads</span>
                           <ArrowRight size={14} />
                         </button>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;