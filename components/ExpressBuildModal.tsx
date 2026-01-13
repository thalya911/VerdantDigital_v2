import React, { useState, useEffect } from 'react';
import { X, Check, Zap, FileText, ArrowRight, AlertCircle } from 'lucide-react';
import { createCheckoutSession, redirectToCheckout } from '../services/stripeService';
import ContactFormModal from './ContactFormModal';
import { trackModalOpen, trackCheckoutStart, trackFormSubmit } from '../services/analytics';

interface ExpressBuildModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExpressBuildModal: React.FC<ExpressBuildModalProps> = ({ isOpen, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [qualifications, setQualifications] = useState({
    moreThan5Pages: false,
    ecommerceBooking: false,
    customCalculators: false
  });
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    location: '',
    trade: '',
    currentWebsite: '',
    goals: '',
    advertising: false
  });

  // Reset states when modal opens & track
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('express_build');
      setShowForm(false);
      setFormSubmitted(false);
      setIsProcessing(false);
      setQualifications({
        moreThan5Pages: false,
        ecommerceBooking: false,
        customCalculators: false
      });
      setFormData({
        name: '',
        business: '',
        email: '',
        phone: '',
        location: '',
        trade: '',
        currentWebsite: '',
        goals: '',
        advertising: false
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const hasQualificationIssues = Object.values(qualifications).some(v => v);

  const handleQualificationChange = (field: keyof typeof qualifications) => {
    setQualifications(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleQuickPay = async () => {
    setIsProcessing(true);
    trackCheckoutStart('Express Build - Tradie Website', 399);

    try {
      // Create Stripe Checkout session for subscription
      // Pricing: $399 upfront + $99/month for 24 months (starting next month)
      const checkoutUrl = await createCheckoutSession({
        mode: 'subscription',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/tradie`,
        metadata: {
          product: 'Express Build - Tradie Website',
          setup_fee: '399',
          monthly_fee: '99',
          plan_duration: '24_months',
        },
      });

      // Redirect to Stripe Checkout
      await redirectToCheckout(checkoutUrl);
    } catch (error) {
      console.error('Payment error:', error);
      console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
      alert(`There was an error processing your payment. Please try again or contact support.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsProcessing(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate form submission (you can add actual API call here)
    setTimeout(() => {
      setIsProcessing(false);
      setFormSubmitted(true);
      trackFormSubmit('express_build_details', true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-black/95 backdrop-blur-md transition-opacity animate-fade-in-up"
        onClick={onClose}
      ></div>

      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors z-10 bg-brand-black/50 rounded-full p-2 hover:bg-brand-black"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10">
          {!showForm && !formSubmitted && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase">Express Build - Get Started</h2>
                <p className="text-brand-muted text-sm">Choose your path to a professional website</p>
              </div>

              {/* Qualification Checkboxes */}
              <div className="bg-brand-surface border border-brand-border rounded-xl p-3 mb-6 max-w-xl mx-auto">
                <h3 className="text-xs font-bold text-white mb-2 uppercase tracking-wider text-center">Does your project need any of these?</h3>
                <div className="space-y-2">
                  <label className="flex items-center justify-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={qualifications.moreThan5Pages}
                      onChange={() => handleQualificationChange('moreThan5Pages')}
                      className="w-4 h-4 accent-brand-accent cursor-pointer"
                    />
                    <span className="text-sm text-brand-bone group-hover:text-white transition-colors">
                      My project needs more than 5 pages
                    </span>
                  </label>
                  <label className="flex items-center justify-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={qualifications.ecommerceBooking}
                      onChange={() => handleQualificationChange('ecommerceBooking')}
                      className="w-4 h-4 accent-brand-accent cursor-pointer"
                    />
                    <span className="text-sm text-brand-bone group-hover:text-white transition-colors">
                      I need e-commerce or booking features
                    </span>
                  </label>
                  <label className="flex items-center justify-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={qualifications.customCalculators}
                      onChange={() => handleQualificationChange('customCalculators')}
                      className="w-4 h-4 accent-brand-accent cursor-pointer"
                    />
                    <span className="text-sm text-brand-bone group-hover:text-white transition-colors">
                      I need custom calculators
                    </span>
                  </label>
                </div>

                {/* Recommendation Message */}
                {hasQualificationIssues && (
                  <div className="mt-4 pt-4 border-t border-brand-border">
                    <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <AlertCircle size={20} className="text-brand-accent" />
                      </div>
                      <p className="text-sm text-white font-bold mb-2">We recommend a consultation for your needs</p>
                      <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="text-sm text-brand-accent hover:text-white font-bold underline transition-colors"
                      >
                        GET IN TOUCH →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Path Options */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Option A: Pay Now */}
                <div className="bg-brand-black border-2 border-brand-accent rounded-xl p-6 md:p-8 flex flex-col">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap size={24} className="text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">PAY NOW - START TODAY</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-display font-black text-brand-accent">$399</span>
                    <span className="text-brand-muted text-sm">to begin</span>
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Strategy call scheduled within 24 hours",
                      "Build begins after your strategy call",
                      "Website live within 7 days of call",
                      "Then $99/mo (24 months)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                        <Check size={16} className="text-brand-accent shrink-0 mt-0.5" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-brand-muted text-center mb-4 leading-relaxed">
                    By proceeding with payment, I agree to the{' '}
                    <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                      Terms and Conditions
                    </a>
                  </p>

                  <button
                    onClick={handleQuickPay}
                    disabled={isProcessing}
                    className="w-full bg-brand-accent hover:bg-white text-brand-black font-black text-lg py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'PAY $399 NOW'}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">Secure payment via Stripe</p>
                </div>

                {/* Option B: Get Custom Plan */}
                <div className="bg-brand-black border-2 border-brand-border rounded-xl p-6 md:p-8 flex flex-col hover:border-brand-accent transition-colors">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <FileText size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">SUBMIT DETAILS FIRST</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-display font-black text-white">Free</span>
                    <span className="text-brand-muted text-sm">project plan</span>
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Get a free custom project plan",
                      "Review plan before committing",
                      "Pay only when you're ready",
                      "Plan delivered within 24 hours"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                        <Check size={16} className="text-gray-400 shrink-0 mt-0.5" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-transparent border-2 border-brand-border hover:border-brand-accent hover:bg-brand-accent/10 text-white font-bold text-lg py-4 px-6 rounded-lg transition-all uppercase tracking-wide"
                  >
                    GET CUSTOM PLAN
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">No payment required</p>
                </div>
              </div>
            </div>
          )}

          {showForm && !formSubmitted && (
            <div className="animate-fade-in-up">
              <button
                onClick={() => setShowForm(false)}
                className="text-brand-muted hover:text-white mb-6 flex items-center gap-2 text-sm"
              >
                ← Back to options
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-black text-white mb-3 uppercase">Project Details</h2>
                <p className="text-brand-muted text-lg">Tell us about your business and we'll create a custom plan before payment is required</p>
              </div>

              <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Your Name *</label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleFormChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Business Name *</label>
                    <input
                      type="text" name="business" required
                      value={formData.business} onChange={handleFormChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="Acme Plumbing"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Email *</label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleFormChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="john@acmeplumbing.com.au"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Phone *</label>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleFormChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Your Trade *</label>
                    <input
                      type="text" name="trade" required
                      value={formData.trade} onChange={handleFormChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="e.g. Plumber, Electrician"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Service Location *</label>
                    <input
                      type="text" name="location" required
                      value={formData.location} onChange={handleFormChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="e.g. Sydney, Melbourne"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Current Website (if any)</label>
                  <input
                    type="url" name="currentWebsite"
                    value={formData.currentWebsite} onChange={handleFormChange}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                    placeholder="https://yourwebsite.com.au"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Your Goals *</label>
                  <textarea
                    name="goals" required rows={4}
                    value={formData.goals} onChange={handleFormChange}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm resize-none"
                    placeholder="What do you want to achieve with your new website? (e.g. More leads, better online presence, replace old site)"
                  ></textarea>
                </div>

                <div className="bg-brand-black border border-brand-border rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="advertising"
                      checked={formData.advertising} onChange={handleFormChange}
                      className="mt-1 w-4 h-4 accent-brand-accent"
                    />
                    <div>
                      <span className="text-white font-bold text-sm">I'm interested in the advertising add-on ($497/mo)</span>
                      <p className="text-brand-muted text-xs mt-1">Get 20-40 leads/month with our managed Google & Meta ads package</p>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-brand-accent hover:bg-white text-brand-black font-black text-lg py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Submitting...' : 'Submit Project Details'}
                  {!isProcessing && <ArrowRight size={20} />}
                </button>

                <p className="text-xs text-gray-500 text-center">We'll email your custom plan within 24 hours</p>
              </form>
            </div>
          )}

          {formSubmitted && (
            <div className="animate-fade-in-up text-center py-12">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-brand-black" strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-4 uppercase">Thank You!</h2>
              <p className="text-brand-muted text-lg mb-8 max-w-md mx-auto">
                We've received your project details. We'll email your custom plan to <span className="text-white font-bold">{formData.email}</span> within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-8 rounded-lg transition-all uppercase tracking-wide"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledHelpWith="2026 New Year Special - Tradie Website"
      />
    </div>
  );
};

export default ExpressBuildModal;
