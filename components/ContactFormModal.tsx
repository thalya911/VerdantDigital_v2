import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { trackModalOpen, trackFormSubmit, trackFormStart } from '../services/analytics';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledHelpWith?: string;
  initialMessage?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose, prefilledHelpWith, initialMessage }) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    business: '',
    website: '',
    helpWith: prefilledHelpWith || '',
    message: initialMessage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  // Track modal open
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('contact_form');
      setHasStartedForm(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialMessage) {
      setFormState(prev => ({ ...prev, message: initialMessage }));
    }
    if (prefilledHelpWith) {
      setFormState(prev => ({ ...prev, helpWith: prefilledHelpWith }));
    }
  }, [initialMessage, prefilledHelpWith]);

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
        trackFormSubmit('contact_modal', true);
        alert('✓ Message sent!\n\nThanks for getting in touch. We\'ll get back to you within 24 hours.\n\nYou should receive a confirmation email shortly.');
        onClose();
        // Reset form
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredContact: '',
          business: '',
          website: '',
          helpWith: prefilledHelpWith || '',
          message: ''
        });
      } else {
        trackFormSubmit('contact_modal', false);
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
      trackFormStart('contact_modal');
      setHasStartedForm(true);
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-md transition-opacity animate-fade-in-up"
        onClick={onClose}
      ></div>

      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors z-10 bg-brand-black/50 rounded-full p-2 hover:bg-brand-black"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
              GET IN TOUCH
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-black text-white mb-3 uppercase leading-tight">
              Let's Talk About Your Project
            </h2>
            <p className="text-brand-muted text-base">Fill out the form and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">First Name</label>
                <input
                  type="text" name="firstName"
                  value={formState.firstName} onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="John"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Last Name</label>
                <input
                  type="text" name="lastName"
                  value={formState.lastName} onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  type="tel" name="phone"
                  value={formState.phone} onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="0400 000 000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email" name="email"
                  value={formState.email} onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Preferred Contact Method</label>
              <select
                name="preferredContact"
                value={formState.preferredContact} onChange={handleChange}
                required
                className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all h-[46px] text-sm"
              >
                <option value="" disabled>Select preferred method</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Either">Either</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Business Name <span className="text-[10px]">(Optional)</span></label>
              <input
                type="text" name="business"
                value={formState.business} onChange={handleChange}
                className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                placeholder="Acme Inc."
              />
            </div>

            {(formState.helpWith === 'Free Website Audit' || prefilledHelpWith === 'Free Website Audit') && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">
                  Current Website Address {!prefilledHelpWith && <span className="text-[10px] text-brand-muted">(Optional)</span>}
                </label>
                <input
                  type="url" name="website"
                  value={formState.website} onChange={handleChange}
                  required={!!prefilledHelpWith}
                  className="w-full bg-brand-black border border-brand-accent/30 focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="https://www.yourwebsite.com.au"
                />
                <p className="text-xs text-brand-muted/70 ml-1">
                  Don't have a website yet? Just type "none" or leave blank.
                </p>
              </div>
            )}

            {prefilledHelpWith ? (
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Enquiry Type</label>
                <input
                  type="text"
                  value={prefilledHelpWith}
                  disabled
                  className="w-full bg-brand-surface/50 border border-brand-accent/30 text-brand-accent rounded-lg p-3 outline-none text-sm font-semibold cursor-not-allowed"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">I Need Help With <span className="text-[10px]">(Optional)</span></label>
                <select
                  name="helpWith"
                  value={formState.helpWith} onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all h-[46px] text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="Free Website Audit">Free Website Audit</option>
                  <option value="Google Ads & Paid Search">Google Ads & Paid Search</option>
                  <option value="SEO & Organic Growth">SEO & Organic Growth</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="E-commerce Solutions">E-commerce Solutions</option>
                  <option value="Full Digital Marketing Suite">Full Digital Marketing Suite</option>
                  <option value="Something Else">Something Else</option>
                </select>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Message <span className="text-[10px]">(Optional)</span></label>
              <textarea
                name="message"
                value={formState.message} onChange={handleChange}
                className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm resize-none"
                placeholder="Tell us about your project..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-accent hover:bg-white text-brand-black font-extrabold text-lg py-3 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all flex items-center justify-center gap-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
