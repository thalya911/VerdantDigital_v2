import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WorkflowProps {
  onOpenModal: () => void;
}

const workflowSteps = [
  {
    step: 1,
    title: "Book a Discovery Call",
    description: "Click Start Your Build to schedule a quick call where we learn about your business, the work you do and the areas you service."
  },
  {
    step: 2,
    title: "Confirm and Get Started",
    description: "If it feels like the right fit, you'll receive a link to make the setup payment. Once payment is received, we begin preparing your build."
  },
  {
    step: 3,
    title: "We Build Your Website",
    description: "We design and build your site based on what we gathered. You receive a staging link to review and request any changes."
  },
  {
    step: 4,
    title: "Go Live",
    description: "Once approved, your website is launched and fully set up so calls and quote requests come straight to you."
  }
];

const Workflow: React.FC<WorkflowProps> = ({ onOpenModal }) => {
  return (
    <section id="process" className="py-32 bg-transparent relative overflow-hidden scroll-mt-24">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase tracking-tight">THE PROCESS</h2>
          <p className="text-lg text-brand-muted">The simple way to get your new website live</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Workflow Steps (Horizontal) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((item, index) => (
              <div key={index} className="relative group">
                {/* Connecting Line - Hidden on last step */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-6 h-0.5 bg-brand-accent z-0" style={{transform: 'translateY(-50%)'}}></div>
                )}

                <div className="bg-brand-black/50 p-4 rounded-xl border border-brand-border hover:border-brand-accent transition-all duration-300 group-hover:-translate-y-1 relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-brand-black border-2 border-brand-border rounded-full flex items-center justify-center text-xl font-display font-bold text-white group-hover:border-brand-accent group-hover:text-brand-accent transition-colors shadow-xl shrink-0 mb-4">
                    0{item.step}
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm"
          >
            Start Your Build
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Workflow;