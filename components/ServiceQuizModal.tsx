import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, HelpCircle, DollarSign, TrendingUp, Wrench, Search, Code, Lightbulb, Hammer, Check as CheckIcon, Rocket, MessageCircleQuestion, CreditCard, Calendar, Clock, Waves, Store, Briefcase, Package, MessageSquare, Phone, ShoppingCart } from 'lucide-react';

interface ServiceQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (recommendation: string, answers: QuizAnswers, reasons: string[]) => void;
}

interface QuizAnswers {
  businessType: string;
  goals: string[];
  hasWebsite: string;
  needsEcommerce: string;
  needsBooking: string;
  budget: string;
  timeline: string;
}

const ServiceQuizModal: React.FC<ServiceQuizModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [reasons, setReasons] = useState<string[]>([]);
  const [answers, setAnswers] = useState<QuizAnswers>({
    businessType: '',
    goals: [],
    hasWebsite: '',
    needsEcommerce: '',
    needsBooking: '',
    budget: '',
    timeline: ''
  });

  const allQuestions = [
    {
      id: 'businessType',
      question: "What type of business are you?",
      field: 'businessType' as keyof QuizAnswers,
      multiSelect: false,
      options: [
        { label: 'Trade/Service Business', value: 'trade', icon: Hammer, description: 'Plumber, electrician, landscaper, etc.' },
        { label: 'Retail/E-commerce', value: 'retail', icon: Store, description: 'Selling physical products online' },
        { label: 'Professional Services', value: 'professional', icon: Briefcase, description: 'Consulting, accounting, legal, etc.' },
        { label: 'Other/Not Sure', value: 'other', icon: MessageCircleQuestion, description: 'Help me figure it out' }
      ]
    },
    {
      id: 'goals',
      question: "What are your primary goals? (Select all that apply)",
      field: 'goals' as keyof QuizAnswers,
      multiSelect: true,
      options: [
        { label: 'Increase Online Sales', value: 'increase_sales', icon: DollarSign },
        { label: 'Get More Leads', value: 'more_leads', icon: TrendingUp },
        { label: 'Improve Existing Website', value: 'improve_website', icon: Wrench },
        { label: 'Better Search Visibility', value: 'better_visibility', icon: Search },
        { label: 'Build Custom Solution', value: 'custom_solution', icon: Code },
        { label: 'Understand My Options', value: 'explore_options', icon: Lightbulb }
      ]
    },
    {
      id: 'hasWebsite',
      question: "Do you currently have a website?",
      field: 'hasWebsite' as keyof QuizAnswers,
      multiSelect: false,
      options: [
        { label: 'Yes, but needs work', value: 'yes_needs_work', icon: Hammer },
        { label: 'Yes, working well', value: 'yes_working', icon: CheckIcon },
        { label: 'No, starting fresh', value: 'no_starting_fresh', icon: Rocket },
        { label: 'Not sure / Need advice', value: 'not_sure', icon: MessageCircleQuestion }
      ]
    },
    {
      id: 'needsEcommerce',
      question: "Do you need to sell products online?",
      field: 'needsEcommerce' as keyof QuizAnswers,
      multiSelect: false,
      condition: (answers: QuizAnswers) => answers.businessType === 'retail' || answers.goals.includes('increase_sales'),
      options: [
        { label: 'Yes, full e-commerce', value: 'yes_full', icon: ShoppingCart },
        { label: 'Just a few products', value: 'yes_few', icon: Package },
        { label: 'No, just information', value: 'no', icon: MessageSquare },
      ]
    },
    {
      id: 'needsBooking',
      question: "Do you need online booking/scheduling?",
      field: 'needsBooking' as keyof QuizAnswers,
      multiSelect: false,
      condition: (answers: QuizAnswers) => answers.businessType === 'trade' || answers.businessType === 'professional',
      options: [
        { label: 'Yes, essential', value: 'yes_essential', icon: Calendar },
        { label: 'Nice to have', value: 'nice_to_have', icon: Clock },
        { label: 'Not needed', value: 'not_needed', icon: Phone },
      ]
    },
    {
      id: 'budget',
      question: "What's your budget range?",
      field: 'budget' as keyof QuizAnswers,
      multiSelect: false,
      options: [
        { label: 'Under $5,000', value: 'under_5k', icon: CreditCard },
        { label: '$5,000 - $10,000', value: '5k_10k', icon: CreditCard },
        { label: '$10,000 - $20,000', value: '10k_20k', icon: CreditCard },
        { label: '$20,000+', value: '20k_plus', icon: DollarSign },
        { label: 'Not sure yet', value: 'not_sure', icon: HelpCircle }
      ]
    },
    {
      id: 'timeline',
      question: "What's your timeline?",
      field: 'timeline' as keyof QuizAnswers,
      multiSelect: false,
      options: [
        { label: 'Urgent (1-2 months)', value: 'urgent', icon: Clock },
        { label: '2-3 months', value: '2_3_months', icon: Calendar },
        { label: '3-6 months', value: '3_6_months', icon: Calendar },
        { label: 'Flexible / Exploring', value: 'flexible', icon: Waves }
      ]
    }
  ];

  // Filter questions based on conditions
  const questions = allQuestions.filter(q => !q.condition || q.condition(answers));

  const getRecommendationAndReasons = (answers: QuizAnswers): { service: string; reasons: string[] } => {
    const reasons: string[] = [];

    // Free Website Audit recommendation
    if (answers.goals.includes('explore_options') || answers.budget === 'not_sure' || answers.hasWebsite === 'not_sure') {
      reasons.push("You're exploring your options - a free audit will help clarify your needs");
      reasons.push("We'll provide actionable insights tailored to your business");
      reasons.push("No obligation - just valuable information to guide your decision");
      return { service: 'Free Website Audit', reasons };
    }

    // E-commerce Development
    if (answers.needsEcommerce === 'yes_full' || (answers.businessType === 'retail' && answers.goals.includes('increase_sales'))) {
      reasons.push("You need to sell products online with full e-commerce functionality");
      if (answers.businessType === 'retail') reasons.push("As a retail business, a robust online store is essential");
      reasons.push("We'll build a Shopify store optimized for conversions");
      if (answers.budget === '5k_10k' || answers.budget === '10k_20k' || answers.budget === '20k_plus') {
        reasons.push("Your budget aligns with a quality e-commerce solution");
      }
      return { service: 'E-commerce Development', reasons };
    }

    // Custom App Development
    if (answers.goals.includes('custom_solution') && (answers.budget === '10k_20k' || answers.budget === '20k_plus')) {
      reasons.push("You need a custom solution tailored to your specific workflow");
      reasons.push("Your budget supports custom development work");
      if (answers.needsBooking === 'yes_essential') reasons.push("We can integrate advanced booking systems");
      reasons.push("We'll build scalable technology that grows with your business");
      return { service: 'Custom App Development', reasons };
    }

    // SEO Strategy
    if (answers.goals.includes('better_visibility') && answers.hasWebsite === 'yes_working') {
      reasons.push("You want to improve your search engine visibility");
      reasons.push("Your existing website is a good foundation to build on");
      reasons.push("SEO will drive long-term organic traffic and leads");
      if (answers.timeline !== 'urgent') reasons.push("Your timeline allows for sustainable SEO growth");
      return { service: 'SEO Strategy', reasons };
    }

    // Performance Marketing
    if (answers.goals.includes('more_leads') && answers.hasWebsite === 'yes_working') {
      reasons.push("You're ready to drive qualified leads to your existing site");
      reasons.push("Your website is performing well and can convert traffic");
      if (answers.timeline === 'urgent') reasons.push("Paid ads deliver fast results");
      reasons.push("We'll optimize your ad spend for maximum ROI");
      return { service: 'Performance Marketing', reasons };
    }

    // UX/UI Design
    if (answers.goals.includes('improve_website') && answers.hasWebsite === 'yes_needs_work') {
      reasons.push("Your existing website needs improvement");
      reasons.push("Better design will improve user experience and conversions");
      if (answers.goals.includes('more_leads')) reasons.push("Optimized UX will help convert more visitors into leads");
      reasons.push("We'll create a modern, conversion-focused design");
      return { service: 'UX/UI Design', reasons };
    }

    // Conversion Optimisation
    if ((answers.goals.includes('more_leads') || answers.goals.includes('increase_sales')) && answers.hasWebsite === 'yes_needs_work') {
      reasons.push("Your website has potential but needs optimization");
      reasons.push("Small improvements can significantly boost conversions");
      reasons.push("Data-driven testing will show what works best");
      if (answers.budget === 'under_5k' || answers.budget === '5k_10k') {
        reasons.push("This is a cost-effective way to improve results");
      }
      return { service: 'Conversion Optimisation', reasons };
    }

    // Website Design & Development (general)
    if (answers.hasWebsite === 'no_starting_fresh' || answers.hasWebsite === 'yes_needs_work') {
      if (answers.businessType === 'trade') {
        reasons.push("As a trade business, you need a simple, lead-focused website");
        reasons.push("Contact forms and click-to-call are essential for your industry");
        reasons.push("We'll make it easy for customers to reach you");
      } else {
        reasons.push("You need a professional website to establish credibility");
        reasons.push("We'll build a site that reflects your brand and drives results");
      }
      if (answers.needsBooking && answers.needsBooking !== 'not_needed') {
        reasons.push("We'll integrate booking functionality to streamline scheduling");
      }
      return { service: 'Website Design & Development', reasons };
    }

    // Default to Free Website Audit with generic reasons
    reasons.push("We recommend starting with a comprehensive audit");
    reasons.push("This will help us understand your specific needs");
    reasons.push("We'll provide clear recommendations for next steps");
    return { service: 'Free Website Audit', reasons };
  };

  const handleAnswer = (field: keyof QuizAnswers, value: string, multiSelect: boolean) => {
    let newAnswers;

    if (multiSelect && field === 'goals') {
      // Toggle selection in array for multi-select
      const currentGoals = answers.goals || [];
      if (currentGoals.includes(value)) {
        newAnswers = { ...answers, goals: currentGoals.filter(g => g !== value) };
      } else {
        newAnswers = { ...answers, goals: [...currentGoals, value] };
      }
    } else {
      newAnswers = { ...answers, [field]: value };
    }

    setAnswers(newAnswers);

    // Don't auto-advance on multi-select - user needs to click Continue
    if (!multiSelect) {
      // Auto-advance to next question for single-select
      if (step < questions.length - 1) {
        setTimeout(() => setStep(step + 1), 300);
      } else {
        // Quiz complete - show results
        setTimeout(() => {
          const { service, reasons } = getRecommendationAndReasons(newAnswers);
          setRecommendation(service);
          setReasons(reasons);
          setShowResults(true);
        }, 300);
      }
    }
  };

  const handleClose = () => {
    setStep(0);
    setShowResults(false);
    setRecommendation('');
    setReasons([]);
    setAnswers({
      businessType: '',
      goals: [],
      hasWebsite: '',
      needsEcommerce: '',
      needsBooking: '',
      budget: '',
      timeline: ''
    });
    onClose();
  };

  const handleContinue = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Last question - show results
      const { service, reasons } = getRecommendationAndReasons(answers);
      setRecommendation(service);
      setReasons(reasons);
      setShowResults(true);
    }
  };

  const handleProceedToContact = () => {
    onComplete(recommendation, answers, reasons);
    handleClose();
  };

  if (!isOpen) return null;

  const currentQuestion = !showResults ? questions[step] : null;
  const progress = !showResults ? ((step + 1) / questions.length) * 100 : 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-md transition-opacity animate-fade-in-up"
        onClick={handleClose}
      ></div>

      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors z-10 bg-brand-black/50 rounded-full p-2 hover:bg-brand-black"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10">
          {showResults ? (
            <>
              {/* Results Screen - Header */}
              <div className="text-center mb-8">
                <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-2 justify-center">
                  <CheckCircle2 size={12} />
                  Results
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3 uppercase leading-tight">
                  We Recommend
                </h2>
              </div>

              {/* Recommended Service */}
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-surface/50 border-2 border-brand-accent rounded-2xl p-6 md:p-8 mb-6">
                <div className="text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-display font-black text-brand-accent mb-2 uppercase">
                    {recommendation}
                  </h3>
                  <p className="text-brand-muted text-sm">
                    Based on your specific needs
                  </p>
                </div>

                {/* Reasons */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">
                    Why This Service?
                  </h4>
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                      <p className="text-brand-bone text-sm leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleProceedToContact}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 px-6 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-wide text-sm"
                >
                  Get In Touch About This Service
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => {
                    setShowResults(false);
                    setStep(0);
                  }}
                  className="sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-accent hover:bg-brand-accent/10 text-brand-accent font-bold py-4 px-6 rounded-lg transition-all uppercase tracking-wide text-sm"
                >
                  <ArrowLeft size={16} />
                  Retake Quiz
                </button>
              </div>
            </>
          ) : currentQuestion ? (
            <>
              {/* Quiz Questions - Header */}
              <div className="text-center mb-8">
                <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-2 justify-center">
                  <HelpCircle size={12} />
                  Service Finder
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3 uppercase leading-tight">
                  Let's Find The Perfect Service For You
                </h2>
                <p className="text-brand-muted text-sm">
                  Answer a few quick questions and we'll recommend the best service for your needs
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-brand-muted mb-2">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-brand-black rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-accent transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 text-center">
                  {currentQuestion.question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentQuestion.options.map((option) => {
                    const IconComponent = option.icon;
                    const isSelected = currentQuestion.multiSelect
                      ? (answers[currentQuestion.field] as string[])?.includes(option.value)
                      : answers[currentQuestion.field] === option.value;

                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.field, option.value, currentQuestion.multiSelect)}
                        className={`p-4 rounded-xl border-2 transition-all text-left group ${
                          isSelected
                            ? 'border-brand-accent bg-brand-accent/10'
                            : 'border-brand-border bg-brand-black hover:border-brand-accent/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 ${isSelected ? 'text-brand-accent' : 'text-brand-muted group-hover:text-brand-accent'} transition-colors`}>
                            <IconComponent size={20} />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-white group-hover:text-brand-accent transition-colors block">
                              {option.label}
                            </span>
                            {'description' in option && (option as { description?: string }).description && (
                              <span className="text-xs text-brand-muted mt-1 block">
                                {(option as { description?: string }).description}
                              </span>
                            )}
                          </div>
                          {isSelected && (
                            <CheckCircle2 size={20} className="text-brand-accent ml-auto flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Continue Button for Multi-Select Questions */}
                {currentQuestion.multiSelect && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleContinue}
                      disabled={!answers[currentQuestion.field] || (answers[currentQuestion.field] as string[]).length === 0}
                      className="inline-flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-8 rounded-lg transition-all uppercase tracking-wide text-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-brand-accent"
                    >
                      Continue
                      <ArrowRight size={16} />
                    </button>
                    <p className="text-xs text-brand-muted mt-2">
                      {(answers[currentQuestion.field] as string[])?.length > 0
                        ? `${(answers[currentQuestion.field] as string[]).length} selected`
                        : 'Select at least one option'}
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-brand-border">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-bold text-sm uppercase tracking-wide"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                <div className="text-xs text-brand-muted">
                  {step === questions.length - 1 ? 'Last question!' : currentQuestion?.multiSelect ? 'Select options and click Continue' : 'Select an option to continue'}
                </div>

                <button
                  onClick={handleClose}
                  className="text-brand-muted hover:text-white transition-colors font-bold text-sm uppercase tracking-wide"
                >
                  Skip Quiz
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ServiceQuizModal;
