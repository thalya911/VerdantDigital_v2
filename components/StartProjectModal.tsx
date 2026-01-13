import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, MapPin } from 'lucide-react';
import ExpressBuildModal from './ExpressBuildModal';
import ContactFormModal from './ContactFormModal';
import { trackModalOpen, trackCtaClick } from '../services/analytics';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose }) => {
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Track modal open
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('start_project');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-md transition-opacity animate-fade-in-up" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors z-10 bg-brand-black/50 rounded-full p-2 hover:bg-brand-black"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-3 uppercase leading-tight">How Would You Like to Proceed?</h2>
          <p className="text-brand-muted text-lg mb-10 font-light">Choose the option that works best for your business</p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            
            {/* Express Build */}
            <div className="bg-brand-black border-2 border-brand-accent rounded-xl p-6 md:p-8 relative flex flex-col shadow-[0_0_30px_rgba(0,255,179,0.05)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(0,255,179,0.4)] whitespace-nowrap flex items-center gap-2">
                 Most Popular
              </div>
              
              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Express Build</h3>
                <p className="text-brand-muted text-sm mb-4">Book a call, then get your website underway</p>
                <div className="flex flex-col gap-0.5 mb-1">
                   <span className="text-2xl font-bold text-white">$399 setup</span>
                   <span className="text-brand-muted text-sm font-bold">+ $99/mo for 24 months</span>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">What you get upfront:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "5 pages (Home, Services, About, Gallery, Contact)",
                    "Contact & Quote Request forms",
                    "Mobile-optimised website",
                    "Google-friendly structure",
                    "Click-to-call buttons on every page",
                    "Photo gallery for your completed jobs",
                    "Service area mapping for local visibility"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                      <div className="bg-brand-accent/10 p-0.5 rounded-full mt-0.5">
                        <Check size={12} className="text-brand-accent shrink-0" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">Then, every month:</h4>
                <ul className="space-y-2">
                  {[
                    "Hosting and security",
                    "Unlimited updates and edits",
                    "Mobile optimisation maintenance",
                    "Monthly performance summary",
                    "Priority support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                      <div className="bg-brand-accent/10 p-0.5 rounded-full mt-0.5">
                        <Check size={12} className="text-brand-accent shrink-0" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="w-full block text-center bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-[0_4px_14px_rgba(0,255,179,0.3)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.5)] hover:-translate-y-1 transform"
                onClick={() => {
                  trackCtaClick('express_build_start', 'start_project_modal');
                  setIsExpressModalOpen(true);
                }}
              >
                Start Now
                <span className="block text-[10px] opacity-70 font-normal normal-case mt-0.5">No waiting, instant setup</span>
              </button>
            </div>

            {/* Consultation First */}
            <div className="bg-brand-black border border-brand-border rounded-xl p-6 md:p-8 flex flex-col hover:border-brand-muted/50 transition-colors">
              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Consultation First</h3>
                <p className="text-brand-muted text-sm mb-4">Free 15-min call, then pay</p>
                <div className="flex items-baseline gap-1 mb-1">
                   <span className="text-3xl font-bold text-white">Free</span>
                   <span className="text-brand-muted text-sm font-bold ml-1">no obligation</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Discuss your specific needs",
                  "Get custom recommendations",
                  "Review portfolio examples",
                  "Ask all your questions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                    <div className="bg-gray-800 p-0.5 rounded-full mt-0.5">
                      <Check size={12} className="text-gray-400 shrink-0" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-brand-surface/50 rounded-lg p-4 mb-6 border border-brand-border">
                 <p className="text-xs text-brand-muted leading-relaxed">
                   <span className="text-white font-bold block mb-1 text-[10px] uppercase tracking-wider">✓ Perfect for:</span>
                   Businesses who want to understand the full package or discuss the lead generation add-on.
                 </p>
              </div>

              <button
                onClick={() => {
                  trackCtaClick('consultation_start', 'start_project_modal');
                  setIsContactModalOpen(true);
                }}
                className="w-full block text-center bg-transparent border-2 border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-6 rounded-lg transition-all uppercase tracking-wide group"
              >
                GET IN TOUCH
                <span className="block text-[10px] text-brand-muted group-hover:text-brand-accent font-normal normal-case mt-0.5 transition-colors">We'll respond within 24 hours</span>
              </button>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-brand-border flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-accent"/> Australian Based Support</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-accent"/> 24 Month Agreement</span>
          </div>
        </div>
      </div>

      <ExpressBuildModal isOpen={isExpressModalOpen} onClose={() => setIsExpressModalOpen(false)} />
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledHelpWith="2026 New Year Special - Tradie Website"
      />
    </div>
  );
};

export default StartProjectModal;