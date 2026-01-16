import React, { useState } from 'react';
import { Layout, Code2, ShoppingBag, TrendingUp, Globe, MousePointerClick, ClipboardCheck, Check, ArrowRight, HelpCircle } from 'lucide-react';
import ContactFormModal from './ContactFormModal';
import ServiceQuizModal from './ServiceQuizModal';

interface QuizAnswers {
  businessType: string;
  goals: string[];
  hasWebsite: string;
  needsEcommerce: string;
  needsBooking: string;
  budget: string;
  timeline: string;
}

const services = [
  {
    icon: ClipboardCheck,
    title: "Free Website Audit",
    tagline: "Know exactly where you stand",
    description: "Get a comprehensive analysis of your website's performance, SEO, user experience, and conversion potential. We'll identify what's working, what's not, and provide actionable recommendations to improve results.",
    features: [
      "Technical performance analysis",
      "SEO health check and keyword opportunities",
      "User experience and mobile responsiveness review",
      "Conversion funnel analysis",
      "Competitor comparison",
      "Detailed report with prioritised recommendations"
    ],
    deliverables: "Comprehensive audit report with actionable insights",
    pricing: "Free - No obligation",
    highlight: true
  },
  {
    icon: Layout,
    title: "UX/UI Design",
    tagline: "Interfaces that convert",
    description: "Your customers get interfaces that feel natural and guide them exactly where you want them to go. We design with purpose - reducing friction, building trust, and making the path to conversion obvious.",
    features: [
      "User research and customer journey mapping",
      "Wireframing and prototyping",
      "Mobile-first responsive design",
      "Accessibility compliance (WCAG 2.1)",
      "Brand-aligned visual design",
      "Interactive design systems"
    ],
    deliverables: "High-fidelity designs, prototypes, design system documentation",
    pricing: "From $3,000"
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    tagline: "Professional sites that perform",
    description: "You get a custom-built website designed to establish credibility, attract customers, and drive results. Perfect for businesses starting fresh or needing a complete rebuild. We create mobile-responsive sites with clean design, clear messaging, and conversion-focused features.",
    features: [
      "Custom website design and development",
      "Mobile-responsive and fast-loading",
      "Contact forms and lead capture",
      "Content management system (CMS)",
      "SEO-friendly structure and setup",
      "Optional booking/scheduling integration"
    ],
    deliverables: "Fully functional website with CMS, training, and documentation",
    pricing: "From $4,000"
  },
  {
    icon: Code2,
    title: "Custom App Development",
    tagline: "Built for your workflow",
    description: "When off-the-shelf doesn't cut it, you get a custom web application built to solve your specific workflow challenges. We use modern technology (React, Node, Python) to create fast, scalable solutions that grow with your business.",
    features: [
      "Custom web application development",
      "API development and integrations",
      "Database design and architecture",
      "Cloud hosting and infrastructure",
      "Ongoing maintenance and support",
      "Scalable architecture for growth"
    ],
    deliverables: "Fully functional web application with documentation and training",
    pricing: "From $10,000"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Development",
    tagline: "Shopify stores that sell",
    description: "You get a Shopify storefront that looks premium and converts browsers into buyers. Your brand stands out, your checkout is seamless, and your customers keep coming back.",
    features: [
      "Custom Shopify theme development",
      "Product catalogue setup and optimisation",
      "Payment gateway integration",
      "Inventory and order management",
      "Email marketing automation setup",
      "Analytics and conversion tracking"
    ],
    deliverables: "Fully configured Shopify store ready to accept orders",
    pricing: "From $5,000"
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    tagline: "Ad spend that delivers",
    description: "Your ad spend goes further with smarter targeting across Google, Meta and TikTok. We focus on real returns - not vanity metrics. Every dollar is tracked, tested, and optimised for maximum ROI.",
    features: [
      "Google Ads campaign setup and management",
      "Meta (Facebook & Instagram) advertising",
      "TikTok advertising and creative strategy",
      "Audience research and targeting",
      "A/B testing and optimisation",
      "Monthly reporting and strategy calls"
    ],
    deliverables: "Managed ad campaigns with monthly performance reports",
    pricing: "From $1,500/month + ad spend"
  },
  {
    icon: Globe,
    title: "SEO Strategy",
    tagline: "Own your niche",
    description: "You own your niche with content strategy, technical optimisation and authority building that brings the right traffic for the long term. We focus on sustainable growth, not quick fixes.",
    features: [
      "Keyword research and content strategy",
      "Technical SEO optimisation",
      "On-page SEO and content creation",
      "Link building and authority development",
      "Local SEO for Australian businesses",
      "Monthly ranking reports and insights"
    ],
    deliverables: "SEO strategy document, optimised content, monthly progress reports",
    pricing: "From $2,000/month"
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimisation",
    tagline: "Turn traffic into customers",
    description: "Your current traffic starts converting better. We use data-driven testing to show you exactly what makes more visitors become paying customers. Small changes, big impact.",
    features: [
      "Conversion funnel analysis",
      "A/B testing and multivariate testing",
      "Heatmaps and user session recordings",
      "Form optimisation and checkout improvements",
      "Landing page design and testing",
      "Analytics setup and insights"
    ],
    deliverables: "Testing roadmap, implemented optimisations, performance reports",
    pricing: "From $2,500/month"
  }
];

const ServicesPage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [quizAnswersMessage, setQuizAnswersMessage] = useState('');

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      const offset = 120; // Account for header and nav bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGetQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setQuizAnswersMessage('');
    setIsContactModalOpen(true);
  };

  const handleQuizComplete = (recommendation: string, answers: QuizAnswers, reasons: string[]) => {
    // Format quiz answers into a message
    const answerLabels: Record<string, Record<string, string>> = {
      businessType: {
        trade: 'Trade/Service Business',
        retail: 'Retail/E-commerce',
        professional: 'Professional Services',
        other: 'Other/Not Sure'
      },
      goals: {
        increase_sales: 'Increase Online Sales',
        more_leads: 'Get More Leads',
        improve_website: 'Improve Existing Website',
        better_visibility: 'Better Search Visibility',
        custom_solution: 'Build Custom Solution',
        explore_options: 'Understand My Options'
      },
      hasWebsite: {
        yes_needs_work: 'Yes, but needs work',
        yes_working: 'Yes, working well',
        no_starting_fresh: 'No, starting fresh',
        not_sure: 'Not sure / Need advice'
      },
      needsEcommerce: {
        yes_full: 'Yes, full e-commerce',
        yes_few: 'Just a few products',
        no: 'No, just information'
      },
      needsBooking: {
        yes_essential: 'Yes, essential',
        nice_to_have: 'Nice to have',
        not_needed: 'Not needed'
      },
      budget: {
        under_5k: 'Under $5,000',
        '5k_10k': '$5,000 - $10,000',
        '10k_20k': '$10,000 - $20,000',
        '20k_plus': '$20,000+',
        not_sure: 'Not sure yet'
      },
      timeline: {
        urgent: 'Urgent (1-2 months)',
        '2_3_months': '2-3 months',
        '3_6_months': '3-6 months',
        flexible: 'Flexible / Exploring'
      }
    };

    // Format goals as a list
    const goalsText = answers.goals.map(g => answerLabels.goals[g] || g).join(', ');

    const message = `Service Finder Results:\n\nRecommended Service: ${recommendation}\n\nWhy This Service:\n${reasons.map(r => `• ${r}`).join('\n')}\n\nYour Answers:\n- Business Type: ${answerLabels.businessType[answers.businessType] || answers.businessType}\n- Goals: ${goalsText}\n- Current Website: ${answerLabels.hasWebsite[answers.hasWebsite] || answers.hasWebsite}${answers.needsEcommerce ? `\n- E-commerce Needs: ${answerLabels.needsEcommerce[answers.needsEcommerce] || answers.needsEcommerce}` : ''}${answers.needsBooking ? `\n- Booking Needs: ${answerLabels.needsBooking[answers.needsBooking] || answers.needsBooking}` : ''}\n- Budget: ${answerLabels.budget[answers.budget] || answers.budget}\n- Timeline: ${answerLabels.timeline[answers.timeline] || answers.timeline}`;

    setSelectedService(recommendation);
    setQuizAnswersMessage(message);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">
            Digital Solutions <br />
            <span className="animate-text-starspeed inline-block">That Deliver Results</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
            From strategy to execution, we provide end-to-end digital services designed to help Australian businesses grow. Every service is backed by data, built for performance, and focused on ROI.
          </p>
          <button
            onClick={() => setIsQuizModalOpen(true)}
            className="inline-flex items-center gap-2 bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-brand-black border-2 border-brand-accent font-bold py-3 px-6 rounded-lg transition-all uppercase tracking-wide text-sm group"
          >
            <HelpCircle size={18} className="group-hover:rotate-12 transition-transform" />
            Not Sure? Take Our Quick Quiz
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Navigation */}
        <div className="mb-12 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => scrollToService(`service-${index}`)}
                className={`px-3 py-2.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide md:tracking-wider transition-all leading-tight ${
                  service.highlight
                    ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/30 hover:bg-brand-accent hover:text-brand-black'
                    : 'bg-brand-black text-brand-muted border border-brand-border hover:text-brand-accent hover:border-brand-accent'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                id={`service-${index}`}
                className={`reveal reveal-delay-${index * 100} ${
                  service.highlight
                    ? 'bg-gradient-to-br from-brand-accent/10 to-brand-surface/50 border-2 border-brand-accent'
                    : 'bg-brand-surface/30 border border-brand-border'
                } rounded-2xl p-5 md:p-6 hover:border-brand-accent transition-all duration-300 group relative scroll-mt-32`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 -right-3 bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg rotate-12">
                    Free Offer
                  </div>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Icon & Title */}
                  <div className="md:col-span-1">
                    <div className="w-14 h-14 bg-brand-black border border-brand-border rounded-xl flex items-center justify-center text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-black text-white mb-2 uppercase">
                      {service.title}
                    </h2>
                    <p className="text-brand-accent font-bold text-xs uppercase tracking-wide mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column - Features & Deliverables */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">
                        What's Included:
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                            <Check size={16} className="text-brand-accent shrink-0 mt-0.5" strokeWidth={3} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-brand-border pt-4">
                      <h3 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
                        Deliverables:
                      </h3>
                      <p className="text-sm text-brand-bone">
                        {service.deliverables}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleGetQuote(service.title)}
                        className="inline-flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-2.5 px-5 rounded-lg transition-all uppercase tracking-wide text-sm group/btn"
                      >
                        {service.highlight ? 'Get Your Free Audit' : 'Get Quote'}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center reveal">
          <div className="bg-gradient-to-br from-brand-surface/50 to-brand-black border border-brand-border rounded-2xl p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Not Sure Which Service <br />
              <span className="text-brand-accent">You Need?</span>
            </h2>
            <p className="text-brand-muted text-lg mb-8 max-w-2xl mx-auto">
              Start with a free website audit. We'll analyse your current digital presence and recommend the best path forward based on your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleGetQuote('Free Website Audit')}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 px-8 rounded-lg transition-all uppercase tracking-widest text-sm"
              >
                <ClipboardCheck size={18} />
                Request Free Audit
              </button>
              <a
                href="/#enquire"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-accent hover:bg-brand-accent/10 text-brand-accent font-extrabold py-4 px-8 rounded-lg transition-all uppercase tracking-widest text-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Free Resources Section */}
        <div className="mt-20 reveal">
          <div className="bg-brand-surface/20 border border-brand-border rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest rounded">
                Self-Service Resources
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-4 uppercase leading-tight">
                Free Digital Marketing <span className="text-orange-500">Guides</span>
              </h2>
              <p className="text-brand-muted text-base md:text-lg mb-6 leading-relaxed">
                We understand not every business has thousands of dollars to invest in full-service digital marketing packages. That's why we've built a series of free guides to help you tackle certain aspects yourself with proven strategies and clear instructions.
              </p>
              <a
                href="/resources"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-white text-brand-black hover:text-brand-black font-extrabold py-4 px-8 rounded-lg shadow-[0_4px_14px_rgba(249,115,22,0.4)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.6)] transition-all uppercase tracking-widest text-sm"
              >
                View Free Resource Library
                <ArrowRight size={18} />
              </a>
              <p className="text-brand-muted text-xs mt-4">
                Currently featuring: Complete Advertising Guide • Conversion Psychology Playbook
              </p>
            </div>
          </div>
        </div>
      </div>

      <ServiceQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onComplete={handleQuizComplete}
      />

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledHelpWith={selectedService}
        initialMessage={quizAnswersMessage}
      />
    </div>
  );
};

export default ServicesPage;
