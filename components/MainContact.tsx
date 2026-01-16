import React, { useState, useEffect } from 'react';
import { Send, Clock, MapPin, MessageSquare } from 'lucide-react';
import { trackFormSubmit, trackFormStart } from '../services/analytics';

const MainContact: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    business: '',
    helpWith: '',
    message: ''
  });

  useEffect(() => {
    const handlePrefill = () => {
      const message = sessionStorage.getItem('prefillMessage');
      const helpWith = sessionStorage.getItem('prefillHelpWith');

      if (message || helpWith) {
        setFormState(prev => ({
          ...prev,
          message: message || prev.message,
          helpWith: helpWith || prev.helpWith
        }));

        // Clear from session storage
        sessionStorage.removeItem('prefillMessage');
        sessionStorage.removeItem('prefillHelpWith');
      }
    };

    window.addEventListener('prefillForm', handlePrefill);
    return () => window.removeEventListener('prefillForm', handlePrefill);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      await response.json();

      if (response.ok) {
        trackFormSubmit('main_contact', true);
        alert('✓ Message sent!\n\nThanks for getting in touch. We\'ll get back to you within 24 hours.\n\nYou should receive a confirmation email shortly.');
        // Reset form
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredContact: '',
          business: '',
          helpWith: '',
          message: ''
        });
        setHasStartedForm(false);
      } else {
        trackFormSubmit('main_contact', false);
        alert('Something went wrong.\n\nPlease try again, or email us directly at hello@verdantdigital.com.au');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Connection error.\n\nPlease check your internet connection and try again, or email us at hello@verdantdigital.com.au');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    // Track form start on first interaction
    if (!hasStartedForm) {
      trackFormStart('main_contact');
      setHasStartedForm(true);
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="enquire" className="pt-10 sm:pt-20 pb-10 bg-brand-black relative scroll-mt-24">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 animate-pulse" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 lg:gap-24 items-start">

          {/* Left Side - Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-3 sm:mb-6 leading-tight uppercase max-w-6xl" style={{letterSpacing: '0.02em'}}>
              Ready to Build <span className="text-brand-accent">Something That Works?</span>
            </h2>

            <p className="text-brand-muted text-sm sm:text-base lg:text-lg mb-4 sm:mb-10 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            {/* Feature pills - compact on mobile, expanded on desktop */}
            <div className="flex flex-wrap gap-2 sm:hidden mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-surface/30 border border-brand-border rounded-full">
                <Clock size={14} className="text-brand-accent" />
                <span className="text-xs text-white font-medium">24hr Response</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-surface/30 border border-brand-border rounded-full">
                <MapPin size={14} className="text-brand-accent" />
                <span className="text-xs text-white font-medium">Australian</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-surface/30 border border-brand-border rounded-full">
                <MessageSquare size={14} className="text-brand-accent" />
                <span className="text-xs text-white font-medium">Free Consult</span>
              </div>
            </div>

            {/* Full feature list - desktop only */}
            <div className="hidden sm:block space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-black border border-brand-accent/40 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-lg">Fast Response</h3>
                  <p className="text-brand-muted text-sm">You'll hear from us within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-black border border-brand-accent/40 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-lg">Australian Based</h3>
                  <p className="text-brand-muted text-sm">Local team, local support.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-black border border-brand-accent/40 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 shadow-lg">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-lg">No Obligation</h3>
                  <p className="text-brand-muted text-sm">Free consultation to discuss your needs.</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block pt-8">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Questions?</p>
              <a href="mailto:hello@verdantdigital.com.au" className="text-sm font-bold text-white hover:text-brand-accent transition-colors font-display">
                hello@verdantdigital.com.au
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-brand-surface/50 md:bg-brand-black border border-brand-accent/30 md:border-brand-border p-3 sm:p-6 md:p-8 rounded-2xl shadow-2xl h-fit w-full mt-0 md:mt-12">
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
              {/* Name fields - always side by side */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-0.5 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">First Name</label>
                  <input
                    type="text" name="firstName"
                    value={formState.firstName} onChange={handleChange}
                    required
                    className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 outline-none transition-all text-sm"
                    placeholder="John"
                  />
                </div>

                <div className="space-y-0.5 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    type="text" name="lastName"
                    value={formState.lastName} onChange={handleChange}
                    required
                    className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 outline-none transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Phone & Email - always side by side */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-0.5 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Phone</label>
                  <input
                    type="tel" name="phone"
                    value={formState.phone} onChange={handleChange}
                    required
                    className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 outline-none transition-all text-sm"
                    placeholder="0400 000 000"
                  />
                </div>

                <div className="space-y-0.5 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email" name="email"
                    value={formState.email} onChange={handleChange}
                    required
                    className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 outline-none transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Contact Method & Service - side by side on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-0.5 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Contact Via</label>
                  <select
                    name="preferredContact"
                    value={formState.preferredContact} onChange={handleChange}
                    required
                    className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 pr-6 outline-none transition-all h-[36px] sm:h-[42px] text-sm"
                  >
                    <option value="" disabled>Select</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Either">Either</option>
                  </select>
                </div>

                <div className="space-y-0.5 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Service</label>
                  <select
                    name="helpWith"
                    value={formState.helpWith} onChange={handleChange}
                    className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 pr-6 outline-none transition-all h-[36px] sm:h-[42px] text-sm"
                  >
                    <option value="">Select</option>
                    <option value="Mobile App Development">Mobile App</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Progressive Web App">Web App (PWA)</option>
                    <option value="Website / Web Platform">Website</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Business Name - hidden on mobile */}
              <div className="hidden sm:block space-y-1.5">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Business Name <span className="text-[10px]">(Optional)</span></label>
                <input
                  type="text" name="business"
                  value={formState.business} onChange={handleChange}
                  className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2.5 outline-none transition-all text-sm"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Message <span className="text-[10px]">(Optional)</span></label>
                <textarea
                  name="message"
                  value={formState.message} onChange={handleChange}
                  className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-md p-2 sm:p-2.5 outline-none transition-all text-sm resize-none"
                  placeholder="Tell us about your project..."
                  rows={2}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent hover:bg-white text-brand-black font-extrabold text-sm sm:text-base py-2 sm:py-2.5 rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                {!isSubmitting && <Send size={14} className="sm:w-4 sm:h-4" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainContact;