import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Loader2, Building2, ShoppingBag, Server } from 'lucide-react';

interface WebsiteEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteType: {
    title: string;
    bestFor: string;
  } | null;
}

const WebsiteEnquiryModal: React.FC<WebsiteEnquiryModalProps> = ({ isOpen, onClose, websiteType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Get icon based on website type
  const getIcon = () => {
    if (!websiteType) return Building2;
    if (websiteType.title.includes('E-Commerce')) return ShoppingBag;
    if (websiteType.title.includes('Custom')) return Server;
    return Building2;
  };
  const Icon = getIcon();

  // Auto-focus name input when modal opens
  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName('');
        setEmail('');
        setPhone('');
        setBusinessName('');
        setProjectDetails('');
        setIsSuccess(false);
        setError('');
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name.split(' ')[0],
          lastName: name.split(' ').slice(1).join(' ') || '',
          email: email || 'Not provided',
          phone,
          preferredContact: 'phone',
          business: businessName || 'Not provided',
          message: `Website Enquiry: ${websiteType?.title || 'General'}

Best For: ${websiteType?.bestFor || 'Not specified'}

Project Details:
${projectDetails || 'Not provided'}

Submitted from: Websites service page`,
          source: 'website-enquiry'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Success state
  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative w-full max-w-md bg-brand-black border border-brand-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-accent/20 rounded-full flex items-center justify-center">
              <Check size={32} className="text-brand-accent" />
            </div>

            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Enquiry Received
            </h2>
            <p className="text-brand-muted mb-6">
              We'll be in touch within 24 hours to discuss your {websiteType?.title?.toLowerCase() || 'website'} project.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-brand-accent hover:bg-white text-brand-black font-bold rounded-lg transition-all duration-200"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-brand-black border border-brand-border/50 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header with website type */}
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-brand-border/30">
            <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0">
              <Icon size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                {websiteType?.title || 'Website Enquiry'}
              </h2>
              <p className="text-brand-muted text-sm">
                Best for: {websiteType?.bestFor || 'All businesses'}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Your Name *
              </label>
              <input
                ref={nameInputRef}
                type="text"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  placeholder="0400 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Acme Inc."
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Tell us about your project
              </label>
              <textarea
                placeholder="What are you looking to build? Any specific features or integrations needed?"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !name.trim() || !phone.trim()}
              className="w-full py-4 px-6 bg-brand-accent hover:bg-white text-brand-black font-bold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Enquiry'
              )}
            </button>

            <p className="text-center text-brand-muted text-sm">
              Prefer to email?{' '}
              <a
                href="mailto:hello@verdantdigital.com.au"
                className="text-brand-accent hover:underline"
              >
                hello@verdantdigital.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteEnquiryModal;
