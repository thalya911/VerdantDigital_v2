import React, { useState, useEffect } from 'react';
import { X, Check, Zap, FileText, ArrowRight, X as XIcon } from 'lucide-react';
import { createCheckoutSession, redirectToCheckout } from '../services/stripeService';

interface ExpressBuildModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExpressBuildModal: React.FC<ExpressBuildModalProps> = ({ isOpen, onClose }) => {
  const [qualificationPassed, setQualificationPassed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'quick' | 'detailed' | null>(null);
  const [expressConfirmed, setExpressConfirmed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
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

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setQualificationPassed(false);
      setSelectedOption(null);
      setExpressConfirmed(false);
      setIsProcessing(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleQuickPay = async () => {
    setIsProcessing(true);
    try {
      // Create Stripe Checkout session for one-time payment
      const sessionId = await createCheckoutSession({
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/tradie`,
        metadata: {
          product: 'Express Build Setup',
          amount: '299',
        },
      });

      // Redirect to Stripe Checkout
      await redirectToCheckout(sessionId);
    } catch (error) {
      console.error('Payment error:', error);
      alert('There was an error processing your payment. Please try again or contact support.');
      setIsProcessing(false);
    }
  };

  const handleDetailedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create Stripe Checkout session with customer info
      const sessionId = await createCheckoutSession({
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/tradie`,
        customerEmail: formData.email,
        metadata: {
          product: 'Express Build Setup',
          name: formData.name,
          business: formData.business,
          phone: formData.phone,
          location: formData.location,
          trade: formData.trade,
          currentWebsite: formData.currentWebsite,
          goals: formData.goals,
          advertising: formData.advertising.toString(),
        },
      });

      // Redirect to Stripe Checkout
      await redirectToCheckout(sessionId);
    } catch (error) {
      console.error('Payment error:', error);
      alert('There was an error processing your payment. Please try again or contact support.');
      setIsProcessing(false);
    }
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
          {!qualificationPassed && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-black text-white mb-3 uppercase">Quick Check: Is Express Right for You?</h2>
                <p className="text-brand-muted text-lg">Our Express Build includes a standard 5-page website. Let's make sure it fits your needs!</p>
              </div>

              <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
                {/* What's Included */}
                <div className="bg-brand-black border-2 border-brand-accent rounded-xl p-6">
                  <h3 className="text-xl font-display font-bold text-brand-accent mb-4 uppercase">Express Build Includes:</h3>
                  <ul className="space-y-3">
                    {[
                      "5 pages (Home, About, Services, Gallery, Contact)",
                      "Contact form & quote request system",
                      "Mobile responsive design",
                      "Google Business integration",
                      "Live in 7 days guaranteed"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                        <Check size={16} className="text-brand-accent shrink-0 mt-0.5" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's NOT Included */}
                <div className="bg-brand-black border-2 border-red-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-display font-bold text-red-400 mb-4 uppercase">Express Build is NOT for:</h3>
                  <ul className="space-y-3">
                    {[
                      "E-commerce or online stores",
                      "Booking/scheduling systems",
                      "Custom calculators or complex forms",
                      "More than 5 pages"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                        <XIcon size={16} className="text-red-400 shrink-0 mt-0.5" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-muted text-xs mt-4 pt-4 border-t border-brand-border">
                    <span className="text-white font-bold">Need these?</span> Book a free consultation instead.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <button
                  onClick={() => setQualificationPassed(true)}
                  className="flex-1 bg-brand-accent hover:bg-white text-brand-black font-black text-lg py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-xl"
                >
                  Perfect! Continue with Express Build
                </button>
                <a
                  href="https://meetings-ap1.hubspot.com/thalya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-transparent border-2 border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold text-lg py-4 px-6 rounded-lg transition-all uppercase tracking-wide inline-block text-center"
                >
                  I need custom features - Book Free Call
                </a>
              </div>
            </div>
          )}

          {qualificationPassed && !selectedOption && (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-3 uppercase leading-tight">Express Build - Choose Your Path</h2>
                <p className="text-brand-muted text-lg font-light">How would you like to get started?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Quick Pay Option */}
                <button
                  onClick={() => setSelectedOption('quick')}
                  className="bg-brand-black border-2 border-brand-accent rounded-xl p-8 text-left hover:bg-brand-surface/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap size={24} className="text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Quick Start</h3>
                  <p className="text-brand-muted text-sm mb-6 leading-relaxed">Pay now, we'll arrange a strategy call to get all your details and start building immediately.</p>

                  <ul className="space-y-2 mb-6">
                    {[
                      "Pay $299 setup now",
                      "We book your strategy call",
                      "Start building within 24 hours",
                      "Live in 7 days"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                        <Check size={16} className="text-brand-accent shrink-0 mt-0.5" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wider text-sm">
                    Continue <ArrowRight size={16} />
                  </div>
                </button>

                {/* Detailed Form Option */}
                <button
                  onClick={() => setSelectedOption('detailed')}
                  className="bg-brand-black border-2 border-brand-border rounded-xl p-8 text-left hover:border-brand-accent hover:bg-brand-surface/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Detailed Plan First</h3>
                  <p className="text-brand-muted text-sm mb-6 leading-relaxed">Share your details now, we'll create a custom plan, get your sign-off, then you pay to proceed.</p>

                  <ul className="space-y-2 mb-6">
                    {[
                      "Fill in project details",
                      "We create a custom plan",
                      "Review & approve the plan",
                      "Pay to start building"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-bone">
                        <Check size={16} className="text-gray-400 shrink-0 mt-0.5" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm group-hover:text-brand-accent transition-colors">
                    Continue <ArrowRight size={16} />
                  </div>
                </button>
              </div>
            </>
          )}

          {selectedOption === 'quick' && (
            <div className="animate-fade-in-up">
              <button onClick={() => setSelectedOption(null)} className="text-brand-muted hover:text-white mb-6 flex items-center gap-2 text-sm">
                ← Back to options
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-black text-white mb-3 uppercase">Quick Start Payment</h2>
                <p className="text-brand-muted text-lg">Pay $299 setup fee to secure your spot</p>
              </div>

              <div className="max-w-md mx-auto bg-brand-black border border-brand-accent rounded-xl p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="text-5xl font-display font-black text-white mb-2">$299</div>
                  <div className="text-brand-accent font-bold uppercase tracking-widest text-sm">One-time Setup</div>
                  <div className="text-brand-muted text-sm mt-2">+ $99/mo starting after launch</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    "Strategy call scheduled within 24 hours",
                    "Building starts immediately after call",
                    "Live website in 7 days",
                    "All features included"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                      <Check size={16} className="text-brand-accent shrink-0 mt-0.5" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleQuickPay}
                  disabled={isProcessing}
                  className="w-full bg-brand-accent hover:bg-white text-brand-black font-black text-lg py-4 px-6 rounded-lg transition-all uppercase tracking-wide shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Pay $299 Now'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">Secure payment via Stripe</p>
              </div>
            </div>
          )}

          {selectedOption === 'detailed' && (
            <div className="animate-fade-in-up">
              <button onClick={() => setSelectedOption(null)} className="text-brand-muted hover:text-white mb-6 flex items-center gap-2 text-sm">
                ← Back to options
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-black text-white mb-3 uppercase">Project Details</h2>
                <p className="text-brand-muted text-lg">Tell us about your business and we'll create a custom plan</p>
              </div>

              <form onSubmit={handleDetailedSubmit} className="max-w-3xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Your Name *</label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Business Name *</label>
                    <input
                      type="text" name="business" required
                      value={formData.business} onChange={handleChange}
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
                      value={formData.email} onChange={handleChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="john@acmeplumbing.com.au"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Phone *</label>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleChange}
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
                      value={formData.trade} onChange={handleChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="e.g. Plumber, Electrician"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Service Location *</label>
                    <input
                      type="text" name="location" required
                      value={formData.location} onChange={handleChange}
                      className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                      placeholder="e.g. Sydney, Melbourne"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Current Website (if any)</label>
                  <input
                    type="url" name="currentWebsite"
                    value={formData.currentWebsite} onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                    placeholder="https://yourwebsite.com.au"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Your Goals *</label>
                  <textarea
                    name="goals" required rows={4}
                    value={formData.goals} onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm resize-none"
                    placeholder="What do you want to achieve with your new website? (e.g. More leads, better online presence, replace old site)"
                  ></textarea>
                </div>

                <div className="bg-brand-black border border-brand-border rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="advertising"
                      checked={formData.advertising} onChange={handleChange}
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
                  {isProcessing ? 'Processing...' : 'Submit & Continue to Payment'}
                  {!isProcessing && <ArrowRight size={20} />}
                </button>

                <p className="text-xs text-gray-500 text-center">After submission, you'll be redirected to secure Stripe payment</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpressBuildModal;
