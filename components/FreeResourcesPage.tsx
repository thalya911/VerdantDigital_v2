import React, { useState, useEffect } from 'react';
import { BookOpen, TrendingUp, ArrowRight, Brain, Sparkles, Lock } from 'lucide-react';

const STORAGE_KEY = 'verdant_newsletter_subscribed';

const FreeResourcesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Check localStorage on mount
  useEffect(() => {
    const subscribed = localStorage.getItem(STORAGE_KEY);
    if (subscribed === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName || 'Newsletter',
          lastName: 'Subscriber',
          email,
          phone: 'N/A',
          preferredContact: 'Email',
          helpWith: 'Newsletter Subscription',
          message: 'Subscribed via Resources page gate.'
        }),
      });

      if (response.ok) {
        localStorage.setItem(STORAGE_KEY, 'true');
        setIsUnlocked(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const guides = [
    {
      id: 'advertising-guide',
      title: 'Complete Advertising Guide',
      description: 'The complete guide to promoting your website and generating real customers online. Covers Google Ads, Facebook/Instagram, TikTok, budgeting, tracking, and the exact formulas that work for Australian businesses.',
      icon: TrendingUp,
      sections: 8,
      readTime: '15 min',
      link: '/resources/advertising-guide',
      tags: ['Marketing', 'Paid Ads', 'Growth']
    },
    {
      id: 'conversion-psychology',
      title: 'The Conversion Psychology Playbook',
      description: 'Understand how users think, decide, and convert. Learn the psychological principles behind high-converting websites - trust triggers, friction reducers, CTA hierarchy, and how to reduce mental load to guide visitors naturally toward action.',
      icon: Brain,
      sections: 6,
      readTime: '20 min',
      link: '/resources/conversion-psychology',
      tags: ['Website Optimisation', 'UX/UI', 'Psychology']
    }
  ];

  // Get all unique tags
  const allTags = ['All', ...Array.from(new Set(guides.flatMap(guide => guide.tags)))];

  // Filter guides based on active filter
  const filteredGuides = activeFilter === 'All'
    ? guides
    : guides.filter(guide => guide.tags.includes(activeFilter));

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-black pt-32 pb-20 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Newsletter gate - shown when not unlocked
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-brand-black pt-32 pb-20">
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

        {/* Ambient glows */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Lock Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent/10 border border-brand-accent/30 rounded-2xl mb-8">
              <Lock size={36} className="text-brand-accent" />
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight uppercase">
              Unlock Free <span className="text-brand-accent">Resources</span>
            </h1>

            <p className="text-brand-muted text-base md:text-lg mb-8 leading-relaxed">
              Get instant access to our digital guides, playbooks, and resources.
              Just enter your email below - no spam, just valuable content.
            </p>

            {/* Sign-up Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="space-y-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name (optional)"
                  className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-lg px-4 py-3.5 outline-none transition-all text-sm placeholder:text-brand-muted/50"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-brand-surface border border-brand-border focus:border-brand-accent text-white rounded-lg px-4 py-3.5 outline-none transition-all text-sm placeholder:text-brand-muted/50"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-brand-accent hover:bg-white text-brand-black font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
              >
                {isSubmitting ? (
                  'Unlocking...'
                ) : (
                  <>
                    <Sparkles size={18} />
                    Unlock Free Access
                  </>
                )}
              </button>

              <p className="text-brand-muted/60 text-xs">
                By subscribing, you'll also receive occasional updates about new resources and guides.
              </p>
            </form>

            {/* What's Inside Preview */}
            <div className="mt-12 pt-8 border-t border-brand-border/30">
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-6">What you'll get access to:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-4 text-left">
                  <TrendingUp size={24} className="text-brand-accent mb-2" />
                  <p className="text-white text-sm font-bold">Advertising Guide</p>
                  <p className="text-brand-muted text-xs mt-1">Google Ads, Facebook, TikTok & more</p>
                </div>
                <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-4 text-left">
                  <Brain size={24} className="text-brand-accent mb-2" />
                  <p className="text-white text-sm font-bold">Conversion Playbook</p>
                  <p className="text-brand-muted text-xs mt-1">Psychology of high-converting sites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main content - shown when unlocked
  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            Free Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">
            Self-Service <br />
            <span className="text-brand-accent">Digital Guides</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Not every business has thousands of dollars for full-service packages. These guides help you tackle digital marketing and website optimisation yourself with proven strategies and clear step-by-step instructions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 reveal flex flex-wrap justify-center gap-3">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === tag
                  ? 'bg-brand-accent text-brand-black'
                  : 'bg-brand-surface/30 border border-brand-border text-brand-muted hover:border-brand-accent hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {filteredGuides.map((guide) => {
            const IconComponent = guide.icon;
            return (
              <a
                key={guide.id}
                href={guide.link}
                className="bg-brand-surface/30 border border-brand-border rounded-2xl p-6 md:p-8 hover:border-brand-accent transition-all duration-300 group block"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-black text-white mb-2 uppercase group-hover:text-brand-accent transition-colors">
                      {guide.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-brand-muted">
                      <span>{guide.sections} Sections</span>
                      <span>•</span>
                      <span>{guide.readTime} read</span>
                    </div>
                  </div>
                </div>

                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {guide.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-wider rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-brand-accent font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  <span>View Guide</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Coming Soon Placeholder */}
        <div className="mt-8 text-center reveal">
          <div className="bg-brand-surface/10 border border-brand-border/50 rounded-2xl p-8">
            <BookOpen size={40} className="text-brand-muted mx-auto mb-4" />
            <p className="text-brand-muted text-sm">
              More guides coming soon. Follow us on social media for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResourcesPage;
