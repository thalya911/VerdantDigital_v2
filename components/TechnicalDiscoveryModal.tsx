import React, { useState, useEffect, useRef } from 'react';
import { X, Rocket, RefreshCw, Plus, Check, Loader2, Smartphone, Calendar } from 'lucide-react';

interface TechnicalDiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProjectType = 'new' | 'rebuild' | 'features' | null;
type Platform = 'ios' | 'android' | 'both' | null;
type Timeline = 'asap' | '1-3' | '3-6' | 'flexible' | null;

const TechnicalDiscoveryModal: React.FC<TechnicalDiscoveryModalProps> = ({ isOpen, onClose }) => {
  // Form state
  const [projectType, setProjectType] = useState<ProjectType>(null);
  const [platform, setPlatform] = useState<Platform>('both'); // Smart default
  const [timeline, setTimeline] = useState<Timeline>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [availability, setAvailability] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Calculate progress (0-100)
  const progress = [
    projectType ? 25 : 0,
    platform ? 25 : 0,
    timeline ? 25 : 0,
    (name && phone) ? 25 : 0
  ].reduce((a, b) => a + b, 0);

  // Auto-focus name input when contact section reveals
  useEffect(() => {
    if (timeline && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 300);
    }
  }, [timeline]);

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
        setProjectType(null);
        setPlatform('both');
        setTimeline(null);
        setName('');
        setEmail('');
        setPhone('');
        setAvailability('');
        setIsSuccess(false);
        setError('');
      }, 300);
    }
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const projectTypeLabels = {
      new: 'Build a new app',
      rebuild: 'Rebuild or redesign existing app',
      features: 'Add features to current app'
    };

    const platformLabels = {
      ios: 'iOS only',
      android: 'Android only',
      both: 'iOS & Android'
    };

    const timelineLabels = {
      asap: 'ASAP',
      '1-3': '1-3 months',
      '3-6': '3-6 months',
      flexible: 'Flexible'
    };

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
          message: `Technical Discovery Request (Mobile App)

Project Type: ${projectType ? projectTypeLabels[projectType] : 'Not specified'}
Platforms: ${platform ? platformLabels[platform] : 'Not specified'}
Timeline: ${timeline ? timelineLabels[timeline] : 'Not specified'}
Availability: ${availability || 'Not specified'}

Submitted from: Mobile App Development page`,
          source: 'mobile-app-discovery'
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
    const platformLabels = {
      ios: 'iOS',
      android: 'Android',
      both: 'iOS & Android'
    };
    const timelineLabels = {
      asap: 'ASAP',
      '1-3': '1-3 months',
      '3-6': '3-6 months',
      flexible: 'Flexible'
    };

    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-md bg-brand-black border border-brand-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="p-8 text-center">
            {/* Success icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-accent/20 rounded-full flex items-center justify-center">
              <Check size={32} className="text-brand-accent" />
            </div>

            <h2 className="text-2xl font-display font-bold text-white mb-2">
              You're booked in
            </h2>
            <p className="text-brand-muted mb-6">
              We'll email you within 24 hours to confirm a time for your discovery call.
            </p>

            {/* Summary card */}
            <div className="bg-brand-surface/30 border border-brand-border/30 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone size={18} className="text-brand-accent" />
                <span className="text-white text-sm">
                  {projectType === 'new' && 'New app'}
                  {projectType === 'rebuild' && 'Rebuild/redesign'}
                  {projectType === 'features' && 'Add features'}
                  {platform && ` · ${platformLabels[platform]}`}
                </span>
              </div>
              {timeline && (
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-brand-accent" />
                  <span className="text-white text-sm">Timeline: {timelineLabels[timeline]}</span>
                </div>
              )}
            </div>

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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-brand-black border border-brand-border/50 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {/* Progress bar */}
          <div className="h-1 bg-brand-surface/50 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-brand-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Let's scope your app
            </h2>
            <p className="text-brand-muted text-sm">
              30-minute discovery call · No obligation
            </p>
          </div>

          {/* Section 1: Project Type */}
          <div className="mb-8">
            <label className="block text-white text-sm font-medium mb-3">
              I want to...
            </label>
            <div className="space-y-2">
              {[
                { value: 'new' as const, icon: Rocket, label: 'Build a new app' },
                { value: 'rebuild' as const, icon: RefreshCw, label: 'Rebuild or redesign an existing app' },
                { value: 'features' as const, icon: Plus, label: 'Add features to my current app' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setProjectType(option.value)}
                  className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl border transition-all duration-200 text-left group
                    ${projectType === option.value
                      ? 'bg-brand-accent/10 border-brand-accent text-white'
                      : 'bg-brand-surface/20 border-brand-border/30 text-brand-bone hover:border-brand-accent/50 hover:bg-brand-surface/30'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                    ${projectType === option.value
                      ? 'bg-brand-accent text-brand-black'
                      : 'bg-brand-surface/50 text-brand-accent group-hover:bg-brand-accent/20'
                    }`}
                  >
                    <option.icon size={18} />
                  </div>
                  <span className="font-medium text-sm">{option.label}</span>
                  {projectType === option.value && (
                    <Check size={18} className="ml-auto text-brand-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Platforms - reveals after project type */}
          <div className={`transition-all duration-300 ease-out overflow-hidden ${projectType ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
            <label className="block text-white text-sm font-medium mb-3">
              Platforms
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'ios' as const, label: 'iOS' },
                { value: 'android' as const, label: 'Android' },
                { value: 'both' as const, label: 'Both' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setPlatform(option.value)}
                  className={`px-5 py-2.5 rounded-full border font-medium text-sm transition-colors duration-200 outline-none ring-0 shadow-none focus:outline-none focus:ring-0
                    ${platform === option.value
                      ? 'bg-brand-accent text-brand-black border-brand-accent'
                      : 'bg-transparent text-brand-bone border-brand-border/50 hover:bg-transparent hover:border-brand-border/50 hover:shadow-none'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Timeline - reveals after platform */}
          <div className={`transition-all duration-300 ease-out overflow-hidden ${projectType && platform ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
            <label className="block text-white text-sm font-medium mb-3">
              Timeline
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'asap' as const, label: 'ASAP' },
                { value: '1-3' as const, label: '1-3 months' },
                { value: '3-6' as const, label: '3-6 months' },
                { value: 'flexible' as const, label: 'Flexible' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTimeline(option.value)}
                  className={`px-5 py-2.5 rounded-full border font-medium text-sm transition-colors duration-200 outline-none ring-0 shadow-none focus:outline-none focus:ring-0
                    ${timeline === option.value
                      ? 'bg-brand-accent text-brand-black border-brand-accent'
                      : 'bg-transparent text-brand-bone border-brand-border/50 hover:bg-transparent hover:border-brand-border/50 hover:shadow-none'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Contact Details - reveals after timeline */}
          <div className={`transition-all duration-300 ease-out overflow-hidden ${timeline ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <label className="block text-white text-sm font-medium mb-3">
              Your details
            </label>
            <div className="space-y-4">
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
              <textarea
                placeholder="Availability / preferred contact time (optional)"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-brand-surface/30 border border-brand-border/30 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all resize-none"
              />

              {/* Error message */}
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !name.trim() || !phone.trim()}
                className="w-full py-4 px-6 bg-brand-accent hover:bg-white text-brand-black font-bold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Requesting...
                  </>
                ) : (
                  'Request Discovery Call'
                )}
              </button>

              {/* Escape hatch */}
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
    </div>
  );
};

export default TechnicalDiscoveryModal;
