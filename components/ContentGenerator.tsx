import React, { useState } from 'react';
import { generateTradieContent } from '../services/geminiService';
import { Sparkles, Loader2, Copy, Check, Zap, ChevronRight, Send, ArrowRight } from 'lucide-react';

const ContentGenerator: React.FC = () => {
  const [trade, setTrade] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ headline: string, bio: string } | null>(null);
  const [copied, setCopied] = useState<'headline' | 'bio' | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trade || !location) return;

    setLoading(true);
    const data = await generateTradieContent(trade, location, 'Professional, Aussie, Trustworthy');
    setResult(data);
    setLoading(false);
  };

  const copyToClipboard = (text: string, field: 'headline' | 'bio') => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="content-generator" className="py-32 bg-brand-accent relative overflow-hidden">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 text-brand-black mb-6 px-4 py-1.5 bg-white rounded-full border border-brand-black/10 shadow-lg">
              <Zap size={14} className="fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">Free AI Tool</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-8 leading-[0.9]">
              DON'T KNOW WHAT TO SAY?<br />
              <span className="text-brand-black/60">LET AI WRITE IT.</span>
            </h2>
            <p className="text-brand-black/80 text-lg mb-10 max-w-md font-medium">
              Generate your professional headline and bio in seconds, then copy and paste it into your enquiry form below. We'll use it to build your site.
            </p>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-brand-black uppercase tracking-widest ml-1">Your Trade</label>
                  <input
                    type="text"
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    placeholder="e.g. Plumber"
                    className="w-full bg-white border-2 border-brand-black/20 focus:border-brand-black text-brand-black rounded-lg p-4 outline-none transition-all placeholder-gray-500 font-medium focus:ring-2 focus:ring-brand-black/10"
                  />
                </div>
                <div className="space-y-2">
                   <label className="block text-xs font-bold text-brand-black uppercase tracking-widest ml-1">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Richmond"
                    className="w-full bg-white border-2 border-brand-black/20 focus:border-brand-black text-brand-black rounded-lg p-4 outline-none transition-all placeholder-gray-500 font-medium focus:ring-2 focus:ring-brand-black/10"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading || !trade || !location}
                className="w-full bg-brand-black hover:bg-brand-surface disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-lg py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                GENERATE COPY
                {!loading && <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />}
              </button>
            </form>
          </div>

          {/* Terminal Output UI */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-brand-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
             <div className="relative bg-[#0a0a0a] border border-brand-border rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
               {/* Terminal Header */}
               <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#333] flex items-center gap-3">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                 </div>
                 <span className="text-gray-500 text-xs tracking-widest ml-2">bash -- verdant-ai-v2.0</span>
               </div>

               {/* Content Area */}
               <div className="p-8 min-h-[380px] flex flex-col font-mono">
                 {!result && !loading && (
                   <div className="flex-grow flex flex-col justify-center text-gray-700 space-y-6">
                     <div className="text-[10px] text-gray-500 uppercase tracking-widest">{'>'}{'>'}  Example Output</div>
                     <div className="space-y-6 opacity-50">
                       <div>
                         <div className="text-[10px] text-gray-600 mb-2 uppercase tracking-widest">Headline:</div>
                         <div className="text-brand-accent font-bold text-base leading-snug border-l-2 border-gray-700 pl-4">
                           "Licensed Electrician in Sydney - Fast, Reliable & Affordable"
                         </div>
                       </div>
                       <div>
                         <div className="text-[10px] text-gray-600 mb-2 uppercase tracking-widest">Bio:</div>
                         <div className="text-gray-400 text-xs leading-relaxed border-l-2 border-gray-700 pl-4">
                           G'day! I'm a fully licensed electrician serving Sydney's Northern Beaches. With 15+ years experience, I handle everything from switchboard upgrades to complete rewires. No job too big or small. Call now for a free quote.
                         </div>
                       </div>
                     </div>
                     <p className="text-xs text-gray-700 text-center pt-4 border-t border-gray-800">
                       <span className="text-brand-accent">root@verdant:~$</span> Enter your details to generate custom copy
                     </p>
                   </div>
                 )}

                 {loading && (
                   <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                     <Loader2 className="animate-spin text-brand-accent w-10 h-10" />
                     <div className="text-brand-accent text-xs animate-pulse space-y-1">
                       <p>{'>'} Analyzing local competitors...</p>
                       <p>{'>'} Extracting keywords...</p>
                       <p>{'>'} Compiling response...</p>
                     </div>
                   </div>
                 )}

                 {result && !loading && (
                   <div className="space-y-8 animate-fade-in-up">
                     <div className="group relative">
                       <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest">{'>'}{'>'}  Generated Headline</div>
                       <div className="text-brand-accent font-bold text-lg md:text-xl leading-snug border-l-2 border-brand-accent pl-4">
                         "{result.headline}"
                       </div>
                       <button 
                          onClick={() => copyToClipboard(result.headline, 'headline')}
                          className="absolute right-0 top-0 text-gray-500 hover:text-brand-accent transition-colors"
                        >
                          {copied === 'headline' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                     </div>

                     <div className="group relative">
                       <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest">{'>'}{'>'}  Generated Bio</div>
                       <div className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#333] pl-4">
                         {result.bio}
                       </div>
                        <button 
                          onClick={() => copyToClipboard(result.bio, 'bio')}
                          className="absolute right-0 top-0 text-gray-500 hover:text-brand-accent transition-colors"
                        >
                          {copied === 'bio' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                     </div>
                     
                     <div className="mt-auto pt-6 border-t border-[#222] text-[10px] text-gray-600 flex justify-between uppercase tracking-wider">
                        <span>Execution Time: 0.45s</span>
                        <span className="text-brand-accent">Done</span>
                     </div>
                   </div>
                 )}
               </div>
             </div>

             {/* Send to Us Button - Shows after generation */}
             {result && !loading && (
               <div className="mt-6 text-center">
                 <button
                   onClick={() => {
                     const message = `I used your AI tool to generate my website copy:\n\nHeadline: "${result.headline}"\n\nBio: ${result.bio}\n\nTrade: ${trade}\nLocation: ${location}\n\nI'd like to discuss building my website.`;

                     // Store in sessionStorage so MainContact can pick it up
                     sessionStorage.setItem('prefillMessage', message);
                     sessionStorage.setItem('prefillIndustry', 'Trade');

                     // Scroll to enquiry form
                     document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });

                     // Trigger a custom event to notify MainContact
                     window.dispatchEvent(new CustomEvent('prefillForm'));
                   }}
                   className="bg-brand-black hover:bg-brand-surface text-white border-2 border-brand-accent hover:border-white font-bold text-sm py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide mx-auto shadow-xl"
                 >
                   <Send size={16} className="shrink-0" />
                   Send These Details to Us
                   <ArrowRight size={16} className="shrink-0" />
                 </button>
                 <p className="text-xs text-gray-600 mt-3">We'll use this to build your site</p>
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentGenerator;