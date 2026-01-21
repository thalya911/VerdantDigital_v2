import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Check, Phone, Mail, MapPin, Star, Shield, Clock, Zap, ChevronRight, Menu, X, Home, Wrench, Users, MessageSquare, FileText, Building2, Lightbulb, Power, ShieldCheck, Image, Map } from 'lucide-react';

type PageType = 'home' | 'services' | 'about' | 'reviews' | 'contact';

const TradieExampleSitePage: React.FC = () => {
  // Detect if user is on mobile and set default view accordingly
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'mobile';
    }
    return 'desktop';
  });
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageUrls: Record<PageType, string> = {
    home: 'sparkproelectrical.com.au',
    services: 'sparkproelectrical.com.au/services',
    about: 'sparkproelectrical.com.au/about',
    reviews: 'sparkproelectrical.com.au/reviews',
    contact: 'sparkproelectrical.com.au/contact',
  };

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/30 rounded-full mb-6">
              <Zap size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-sm font-medium">Express Build Example</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              What Your Site <span className="text-brand-accent">Could Look Like</span>
            </h1>
            <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
              Your Express Build includes <span className="text-white font-semibold">4 core pages + 1 optional page</span> of your choice. Click the navigation to explore.
            </p>

            {/* View Toggle - Mobile first on mobile devices */}
            <div className={`inline-flex bg-brand-surface/30 border border-brand-border/30 rounded-full p-1 ${isMobileDevice ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => setActiveView('desktop')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'desktop'
                    ? 'bg-brand-accent text-brand-black'
                    : 'text-brand-muted hover:text-white'
                }`}
              >
                <Monitor size={16} />
                Desktop
              </button>
              <button
                onClick={() => setActiveView('mobile')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'mobile'
                    ? 'bg-brand-accent text-brand-black'
                    : 'text-brand-muted hover:text-white'
                }`}
              >
                <Smartphone size={16} />
                Mobile
              </button>
            </div>
          </div>
        </section>

        {/* Browser/Phone Mockup */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {activeView === 'desktop' ? (
              <DesktopMockup currentPage={currentPage} setCurrentPage={setCurrentPage} pageUrl={pageUrls[currentPage]} />
            ) : (
              <MobileMockup currentPage={currentPage} setCurrentPage={setCurrentPage} />
            )}
          </div>
        </section>

        {/* 4 Core Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-4 uppercase">
              <span className="text-brand-accent">4 Core Pages</span> Included
            </h2>
            <p className="text-brand-muted text-center mb-10 max-w-2xl mx-auto">
              Every Express Build includes these 4 essential pages to showcase your business and generate leads.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { page: 'home' as PageType, icon: Home, title: 'Home', desc: 'Introduces what you do, where you operate, and makes it easy for customers to enquire.' },
                { page: 'services' as PageType, icon: Wrench, title: 'Services', desc: 'Clearly outlines the services you offer so visitors can quickly find what they need.' },
                { page: 'about' as PageType, icon: Users, title: 'About', desc: 'Builds trust by showing who you are, how long you\'ve been operating, and why customers choose you.' },
                { page: 'contact' as PageType, icon: FileText, title: 'Contact', desc: 'Makes it easy to get in touch, with clear contact details and enquiry options.' },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(item.page)}
                  className={`text-left bg-brand-surface/20 border rounded-lg p-4 transition-all hover:border-brand-accent/50 ${
                    currentPage === item.page ? 'border-brand-accent' : 'border-brand-border/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                    currentPage === item.page ? 'bg-brand-accent/20' : 'bg-brand-surface/30'
                  }`}>
                    <item.icon size={16} className={currentPage === item.page ? 'text-brand-accent' : 'text-brand-muted'} />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  <p className="text-brand-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Optional Fifth Page */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-4 uppercase">
              Plus <span className="text-brand-accent">1 Optional</span> Fifth Page
            </h2>
            <p className="text-brand-muted text-center mb-10 max-w-2xl mx-auto">
              Choose one additional page based on what will add the most value for your business.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Gallery Option */}
              <div className={`bg-brand-surface/20 border rounded-xl p-5 transition-all hover:border-brand-accent/50 ${currentPage === 'reviews' ? 'border-brand-border/30' : 'border-brand-border/30'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10">
                    <Image size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Gallery / Our Work</h3>
                    <p className="text-brand-muted text-xs">Option A</p>
                  </div>
                </div>
                <p className="text-brand-muted text-sm mb-4">Shows real examples of your work and helps customers visualise the quality you deliver.</p>
                <div className="bg-brand-black/30 rounded-lg p-3">
                  <p className="text-xs text-brand-muted/80 mb-2 font-medium">Best if:</p>
                  <p className="text-xs text-brand-muted">You have quality photos of completed jobs and want customers to see the standard of your work before calling.</p>
                </div>
              </div>

              {/* Service Areas Option */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 transition-all hover:border-brand-accent/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/10">
                    <Map size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Service Areas</h3>
                    <p className="text-brand-muted text-xs">Option B</p>
                  </div>
                </div>
                <p className="text-brand-muted text-sm mb-4">Clearly shows where you operate and helps you appear in local search results.</p>
                <div className="bg-brand-black/30 rounded-lg p-3">
                  <p className="text-xs text-brand-muted/80 mb-2 font-medium">Best if:</p>
                  <p className="text-xs text-brand-muted">You service multiple suburbs or regions and local visibility and SEO are important for your business.</p>
                </div>
              </div>

              {/* Reviews Option */}
              <button
                onClick={() => setCurrentPage('reviews')}
                className={`text-left bg-brand-surface/20 border rounded-xl p-5 transition-all hover:border-brand-accent/50 ${currentPage === 'reviews' ? 'border-brand-accent ring-1 ring-brand-accent/30' : 'border-brand-border/30'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 'reviews' ? 'bg-brand-accent/20' : 'bg-purple-500/10'}`}>
                    <MessageSquare size={20} className={currentPage === 'reviews' ? 'text-brand-accent' : 'text-purple-400'} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Reviews / Testimonials</h3>
                    <p className="text-brand-muted text-xs">Option C {currentPage === 'reviews' && <span className="text-brand-accent ml-1">• Viewing</span>}</p>
                  </div>
                </div>
                <p className="text-brand-muted text-sm mb-4">Builds social proof and trust. Reassures first-time visitors and reduces hesitation.</p>
                <div className="bg-brand-black/30 rounded-lg p-3">
                  <p className="text-xs text-brand-muted/80 mb-2 font-medium">Best if:</p>
                  <p className="text-xs text-brand-muted">You already have real, verifiable customer reviews and want to highlight strong feedback.</p>
                </div>
              </button>
            </div>

            <div className="mt-8 bg-brand-surface/10 border border-brand-border/20 rounded-lg p-4 text-center">
              <p className="text-brand-muted text-sm">
                <span className="text-white font-medium">Not sure which to choose?</span> That's completely fine. We'll recommend the best fit based on your business and goals.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included vs Custom */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Included */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5">
                <h3 className="text-white font-display font-bold text-sm uppercase mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-brand-accent" />
                  </div>
                  Included in Express Build
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Mobile responsive design',
                    'Click-to-call buttons',
                    'Contact form to your inbox',
                    'Fast-loading, optimised pages',
                    'Basic SEO setup',
                    'Google Maps integration',
                    'SSL security certificate',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-muted">
                      <Check size={14} className="text-brand-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="bg-brand-surface/10 border border-brand-border/20 rounded-xl p-5">
                <h3 className="text-brand-muted font-display font-bold text-sm uppercase mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-surface/30 rounded-full flex items-center justify-center">
                    <X size={14} className="text-brand-muted/60" />
                  </div>
                  Requires Custom Plan
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'E-commerce / online payments',
                    'Booking or scheduling systems',
                    'Custom calculators or tools',
                    'More than 5 pages',
                    'Complex integrations',
                    'Ongoing content updates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-muted/60">
                      <X size={14} className="text-brand-muted/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-brand-muted/50 mt-4 pt-3 border-t border-brand-border/20">
                  Need these features? We can create a custom plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-8">
              <h3 className="text-xl font-display font-bold text-white mb-3 uppercase">
                Ready to Get Started?
              </h3>
              <p className="text-brand-muted text-sm mb-6">
                Your 4+1 page site delivered in 7 days. $399 setup + $99/month.
              </p>
              <a
                href="/tradie"
                className="inline-flex items-center gap-2 bg-brand-accent text-brand-black font-bold px-6 py-3 rounded-lg hover:bg-brand-accent/90 transition-colors"
              >
                Start Your Build
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Desktop Browser Mockup
const DesktopMockup: React.FC<{ currentPage: PageType; setCurrentPage: (page: PageType) => void; pageUrl: string }> = ({ currentPage, setCurrentPage, pageUrl }) => {
  return (
    <div className="bg-brand-surface/30 border border-brand-border/50 rounded-xl overflow-hidden shadow-2xl">
      {/* Browser Chrome */}
      <div className="bg-brand-surface/60 border-b border-brand-border/50 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 max-w-xl mx-auto">
          <div className="bg-brand-black/50 rounded-md px-4 py-1.5 text-sm text-brand-muted flex items-center gap-2">
            <Shield size={12} className="text-green-500" />
            {pageUrl}
          </div>
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-slate-900 overflow-y-auto max-h-[700px]">
        <ExampleSiteContent view="desktop" currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

// Mobile Phone Mockup
const MobileMockup: React.FC<{ currentPage: PageType; setCurrentPage: (page: PageType) => void }> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
          {/* Notch */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10"></div>

          {/* Screen */}
          <div className="bg-slate-900 rounded-[2.25rem] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-slate-800 px-6 py-2 flex justify-between items-center text-xs text-white">
              <span>9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-2/3 h-full bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[580px]">
              <ExampleSiteContent view="mobile" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The actual example website content
const ExampleSiteContent: React.FC<{ view: 'desktop' | 'mobile'; currentPage: PageType; setCurrentPage: (page: PageType) => void }> = ({ view, currentPage, setCurrentPage }) => {
  const isMobile = view === 'mobile';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-white">
      {/* Navigation */}
      <nav className={`bg-slate-800 ${isMobile ? 'px-4 py-3' : 'px-8 py-4'}`}>
        <div className="flex items-center justify-between">
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-slate-900" />
            </div>
            <span className={`font-bold text-white ${isMobile ? 'text-sm' : 'text-lg'}`}>
              Spark Pro
            </span>
          </button>
          {isMobile ? (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center gap-6 text-sm h-8">
              <button onClick={() => handleNavClick('services')} className={`flex items-center h-full transition-colors ${currentPage === 'services' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Services</button>
              <button onClick={() => handleNavClick('about')} className={`flex items-center h-full transition-colors ${currentPage === 'about' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>About</button>
              <button onClick={() => handleNavClick('reviews')} className={`flex items-center h-full transition-colors ${currentPage === 'reviews' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Reviews</button>
              <button onClick={() => handleNavClick('contact')} className="bg-yellow-500 text-slate-900 font-semibold px-4 rounded-lg hover:bg-yellow-400 flex items-center h-full">
                Get Quote
              </button>
            </div>
          )}
        </div>
        {isMobile && mobileMenuOpen && (
          <div className="mt-4 space-y-3 pb-2">
            <button onClick={() => handleNavClick('services')} className={`block w-full text-left py-2 border-b border-slate-700 ${currentPage === 'services' ? 'text-yellow-500' : 'text-gray-300'}`}>Services</button>
            <button onClick={() => handleNavClick('about')} className={`block w-full text-left py-2 border-b border-slate-700 ${currentPage === 'about' ? 'text-yellow-500' : 'text-gray-300'}`}>About</button>
            <button onClick={() => handleNavClick('reviews')} className={`block w-full text-left py-2 border-b border-slate-700 ${currentPage === 'reviews' ? 'text-yellow-500' : 'text-gray-300'}`}>Reviews</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full bg-yellow-500 text-slate-900 font-semibold px-4 py-3 rounded-lg text-center mt-4">
              Get Quote
            </button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <HomePage isMobile={isMobile} onNavigate={handleNavClick} />}
      {currentPage === 'services' && <ServicesPage isMobile={isMobile} onNavigate={handleNavClick} />}
      {currentPage === 'about' && <AboutPage isMobile={isMobile} />}
      {currentPage === 'reviews' && <ReviewsPage isMobile={isMobile} onNavigate={handleNavClick} />}
      {currentPage === 'contact' && <ContactPage isMobile={isMobile} />}

      {/* Footer */}
      <footer className={`bg-slate-900 border-t border-slate-800 ${isMobile ? 'px-4 py-4' : 'px-8 py-4'}`}>
        <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-between'}`}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
              <Zap size={14} className="text-slate-900" />
            </div>
            <span className={`font-bold text-white ${isMobile ? 'text-sm' : 'text-sm'}`}>Spark Pro</span>
            <span className="text-gray-600 text-xs">Lic: 12345678</span>
          </div>
          <div className={`flex items-center ${isMobile ? 'justify-between' : 'gap-6'} text-gray-400 text-xs`}>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              <Phone size={12} />
              0400 123 456
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              <Mail size={12} />
              info@sparkpro.com.au
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// HOME PAGE
const HomePage: React.FC<{ isMobile: boolean; onNavigate: (page: PageType) => void }> = ({ isMobile, onNavigate }) => (
  <>
    {/* Hero Section */}
    <section className={`bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 ${isMobile ? 'px-4 py-12' : 'px-8 py-20'}`}>
      <div>
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-500 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
          <Shield size={14} />
          Licensed & Insured • Est. 2009
        </div>
        <h1 className={`font-bold text-white mb-4 leading-tight ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
          Brisbane's Trusted<br /><span className="text-yellow-500">Electricians</span>
        </h1>
        <p className={`text-gray-400 mb-8 leading-relaxed ${isMobile ? 'text-sm' : 'text-lg'}`}>
          Professional electrical services for homes and businesses.<br className={isMobile ? 'hidden' : ''} />
          Fast response. Fair pricing. Quality guaranteed.
        </p>
        <div className={`flex ${isMobile ? 'flex-col gap-3' : 'gap-4'}`}>
          <button onClick={() => onNavigate('contact')} className={`bg-yellow-500 text-slate-900 font-bold rounded-lg text-center hover:bg-yellow-400 transition-colors ${isMobile ? 'px-6 py-3.5 text-sm' : 'px-8 py-4'}`}>
            Get a Free Quote
          </button>
          <a href="tel:0400123456" className={`bg-slate-700 text-white font-semibold rounded-lg text-center hover:bg-slate-600 flex items-center justify-center gap-2 transition-colors ${isMobile ? 'px-6 py-3.5 text-sm' : 'px-8 py-4'}`}>
            <Phone size={18} />
            0400 123 456
          </a>
        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className={`bg-yellow-500 ${isMobile ? 'px-4 py-4' : 'px-8 py-5'}`}>
      <div className={`flex ${isMobile ? 'justify-between' : 'justify-center gap-12'}`}>
        {[
          { icon: Clock, text: '24/7 Emergency' },
          { icon: Shield, text: 'Fully Licensed' },
          { icon: Star, text: '5-Star Rated' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-900">
            <item.icon size={isMobile ? 16 : 20} className="text-slate-900" />
            <span className={`font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>{item.text}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Services Grid */}
    <section className={`bg-slate-900 ${isMobile ? 'px-4 py-10' : 'px-8 py-16'}`}>
      <h2 className={`font-bold text-white mb-2 ${isMobile ? 'text-xl text-center' : 'text-2xl text-center'}`}>
        Our Services
      </h2>
      <p className={`text-gray-400 text-center mb-8 ${isMobile ? 'text-xs' : 'text-sm'}`}>
        Professional solutions for every electrical need
      </p>
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-3 gap-4'}`}>
        {[
          { name: 'Residential', Icon: Home, desc: 'Home electrical' },
          { name: 'Commercial', Icon: Building2, desc: 'Business solutions' },
          { name: 'Emergency', Icon: Zap, desc: '24/7 call-outs' },
          { name: 'Lighting', Icon: Lightbulb, desc: 'LED & smart' },
          { name: 'Switchboards', Icon: Power, desc: 'Upgrades & repairs' },
          { name: 'Safety Checks', Icon: ShieldCheck, desc: 'Inspections' },
        ].map((service, i) => (
          <button
            key={i}
            onClick={() => onNavigate('services')}
            className={`bg-slate-800 rounded-xl text-center hover:bg-slate-700 hover:scale-[1.02] transition-all ${isMobile ? 'p-4' : 'p-5'}`}
          >
            <div className={`flex justify-center ${isMobile ? 'mb-2' : 'mb-3'}`}>
              <div className={`bg-yellow-500/10 rounded-lg flex items-center justify-center ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}`}>
                <service.Icon size={isMobile ? 20 : 24} className="text-yellow-500" />
              </div>
            </div>
            <h3 className={`font-semibold text-white ${isMobile ? 'text-xs' : 'text-sm'}`}>{service.name}</h3>
            <p className={`text-gray-500 mt-1 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{service.desc}</p>
          </button>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section className={`bg-slate-800 ${isMobile ? 'px-4 py-10' : 'px-8 py-16'}`}>
      <h2 className={`font-bold text-white mb-2 ${isMobile ? 'text-xl text-center' : 'text-2xl text-center'}`}>
        Why Choose Spark Pro?
      </h2>
      <p className={`text-gray-400 text-center mb-8 ${isMobile ? 'text-xs' : 'text-sm'}`}>
        15+ years serving Brisbane homes and businesses
      </p>
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-4 gap-4'}`}>
        {[
          { title: 'Fast Response', desc: 'Same-day service available' },
          { title: 'Fair Pricing', desc: 'Upfront quotes, no surprises' },
          { title: 'Quality Work', desc: '5-year workmanship warranty' },
          { title: 'Fully Licensed', desc: 'Insured & certified team' },
        ].map((item, i) => (
          <div key={i} className={`text-center ${isMobile ? 'p-3' : 'p-4'}`}>
            <div className={`bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3 ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <Check size={isMobile ? 18 : 22} className="text-yellow-500" />
            </div>
            <h3 className={`font-semibold text-white ${isMobile ? 'text-xs' : 'text-sm'}`}>{item.title}</h3>
            <p className={`text-gray-500 mt-1 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonial */}
    <section className={`bg-slate-900 ${isMobile ? 'px-4 py-10' : 'px-8 py-16'}`}>
      <div className={isMobile ? '' : 'max-w-xl mx-auto text-center'}>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={isMobile ? 16 : 20} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className={`text-gray-300 italic mb-4 ${isMobile ? 'text-sm' : 'text-lg'}`}>
          "Best sparky we've ever used. On time, professional, and the price was exactly what they quoted. Highly recommend!"
        </p>
        <p className={`text-white font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>Sarah M.</p>
        <p className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>Paddington, Brisbane</p>
        <button
          onClick={() => onNavigate('reviews')}
          className={`text-yellow-500 font-medium hover:text-yellow-400 inline-flex items-center gap-1 mt-4 ${isMobile ? 'text-xs' : 'text-sm'}`}
        >
          Read More Reviews <ChevronRight size={16} />
        </button>
      </div>
    </section>

    {/* CTA */}
    <section className={`bg-yellow-500 ${isMobile ? 'px-4 py-10' : 'px-8 py-14'}`}>
      <div className="text-center">
        <h2 className={`font-bold text-slate-900 mb-2 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
          Ready to Get Started?
        </h2>
        <p className={`text-slate-700 mb-6 ${isMobile ? 'text-sm' : ''}`}>
          Free quotes • No call-out fees • Same-day service
        </p>
        <div className={`flex justify-center ${isMobile ? 'flex-col gap-3' : 'gap-4'}`}>
          <button
            onClick={() => onNavigate('contact')}
            className={`bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors ${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'}`}
          >
            Get Your Free Quote
          </button>
          <a
            href="tel:0400123456"
            className={`bg-white text-slate-900 font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors ${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'}`}
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  </>
);

// SERVICES PAGE
const ServicesPage: React.FC<{ isMobile: boolean; onNavigate: (page: PageType) => void }> = ({ isMobile, onNavigate }) => (
  <>
    <section className={`bg-gradient-to-br from-slate-800 to-slate-900 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <h1 className={`font-bold text-white mb-2 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
        Our <span className="text-yellow-500">Services</span>
      </h1>
      <p className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>
        Professional electrical services for every need
      </p>
    </section>

    <section className={`bg-slate-900 ${isMobile ? 'px-4 py-8' : 'pl-6 pr-10 py-12'}`}>
      <div className={`grid ${isMobile ? 'gap-4' : 'grid-cols-2 gap-5'}`}>
        {[
          { name: 'Residential Electrical', Icon: Home, desc: 'Complete home electrical services including rewiring, upgrades, and repairs.' },
          { name: 'Commercial Electrical', Icon: Building2, desc: 'Office fitouts, retail lighting, and commercial maintenance contracts.' },
          { name: 'Emergency Call-Outs', Icon: Zap, desc: '24/7 emergency service for power outages, faults, and urgent repairs.' },
          { name: 'Lighting Installation', Icon: Lightbulb, desc: 'LED upgrades, downlights, outdoor lighting, and smart lighting systems.' },
          { name: 'Switchboard Upgrades', Icon: Power, desc: 'Safety switch installation, meter box upgrades, and capacity increases.' },
          { name: 'Safety Inspections', Icon: ShieldCheck, desc: 'Pre-purchase inspections, compliance certificates, and safety audits.' },
        ].map((service, i) => (
          <div key={i} className={`bg-slate-800 rounded-lg ${isMobile ? 'p-4' : 'p-6'}`}>
            <div className={`${isMobile ? 'mb-2' : 'mb-3'}`}>
              <service.Icon size={isMobile ? 24 : 32} className="text-yellow-500" />
            </div>
            <h3 className={`font-semibold text-white mb-2 ${isMobile ? 'text-sm' : ''}`}>{service.name}</h3>
            <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className={`bg-slate-800 ${isMobile ? 'px-4 py-8' : 'px-8 py-10'} text-center`}>
      <h2 className={`font-bold text-white mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>Need a Quote?</h2>
      <p className={`text-gray-400 mb-4 ${isMobile ? 'text-sm' : ''}`}>Get a free, no-obligation quote today</p>
      <button onClick={() => onNavigate('contact')} className="bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400">
        Request Quote
      </button>
    </section>
  </>
);

// ABOUT PAGE
const AboutPage: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <>
    <section className={`bg-gradient-to-br from-slate-800 to-slate-900 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <h1 className={`font-bold text-white mb-2 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
        About <span className="text-yellow-500">Spark Pro</span>
      </h1>
      <p className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>
        Brisbane's trusted electrical team since 2009
      </p>
    </section>

    <section className={`bg-slate-900 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <div className={isMobile ? '' : 'max-w-2xl mx-auto'}>
        <p className={`text-gray-300 mb-6 ${isMobile ? 'text-sm' : ''}`}>
          With over 15 years of experience serving Brisbane and surrounding areas, Spark Pro Electrical has built a reputation for quality workmanship, honest pricing, and reliable service.
        </p>
        <p className={`text-gray-300 mb-6 ${isMobile ? 'text-sm' : ''}`}>
          Founded by master electrician Dave Thompson, our team of licensed professionals takes pride in every job—from simple repairs to complete home rewires.
        </p>

        <h2 className={`font-bold text-white mb-4 mt-8 ${isMobile ? 'text-lg' : 'text-xl'}`}>Why Choose Us?</h2>
        <div className={`grid ${isMobile ? 'gap-3' : 'grid-cols-2 gap-4'}`}>
          {[
            'Licensed Master Electricians',
            'Fully Insured & Certified',
            'Same-Day Service Available',
            'Upfront Pricing Guarantee',
            'Clean & Tidy Workmanship',
            '5-Year Warranty on Work',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-yellow-500" />
              </div>
              <span className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={`bg-slate-800 ${isMobile ? 'px-4 py-8' : 'px-8 py-10'}`}>
      <h2 className={`font-bold text-white mb-4 text-center ${isMobile ? 'text-lg' : 'text-xl'}`}>Service Areas</h2>
      <p className={`text-gray-400 text-center ${isMobile ? 'text-sm' : ''}`}>
        Brisbane CBD • Northside • Southside • Bayside • Redlands • Logan • Ipswich
      </p>
    </section>
  </>
);

// REVIEWS PAGE
const ReviewsPage: React.FC<{ isMobile: boolean; onNavigate: (page: PageType) => void }> = ({ isMobile, onNavigate }) => (
  <>
    <section className={`bg-gradient-to-br from-slate-800 to-slate-900 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <h1 className={`font-bold text-white mb-2 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
        Customer <span className="text-yellow-500">Reviews</span>
      </h1>
      <div className="flex items-center gap-2 mt-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <span className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>4.9 from 127 reviews</span>
      </div>
    </section>

    <section className={`bg-slate-900 ${isMobile ? 'px-4 py-8' : 'pl-6 pr-10 py-12'}`}>
      <div className={`${isMobile ? 'space-y-4' : 'grid grid-cols-2 gap-4'}`}>
        {[
          { name: 'Sarah M.', text: 'Prompt, professional, and reasonably priced. Fixed our switchboard issue same day!', location: 'Paddington', date: '2 weeks ago' },
          { name: 'Mike T.', text: 'Best sparky we\'ve used. Always on time and explains everything clearly.', location: 'New Farm', date: '1 month ago' },
          { name: 'Jenny L.', text: 'Dave and the team did a full rewire of our Queenslander. Fantastic job, highly recommend!', location: 'Ashgrove', date: '1 month ago' },
          { name: 'Peter K.', text: 'Called for an emergency at 10pm and they were here within 30 minutes. Lifesavers!', location: 'Bulimba', date: '2 months ago' },
        ].map((testimonial, i) => (
          <div key={i} className={`bg-slate-800 rounded-lg ${isMobile ? 'p-4' : 'p-5'}`}>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className={`text-gray-300 mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>"{testimonial.text}"</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className={`text-white font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>{testimonial.name}</p>
                  <p className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{testimonial.location}</p>
                </div>
              </div>
              <span className={`text-gray-600 ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className={`bg-slate-800 ${isMobile ? 'px-4 py-8' : 'px-8 py-10'} text-center`}>
      <h2 className={`font-bold text-white mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>Ready to Experience the Difference?</h2>
      <button onClick={() => onNavigate('contact')} className="bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400">
        Get Your Free Quote
      </button>
    </section>
  </>
);

// CONTACT PAGE
const ContactPage: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <>
    <section className={`bg-gradient-to-br from-slate-800 to-slate-900 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <h1 className={`font-bold text-white mb-2 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
        Get a <span className="text-yellow-500">Free Quote</span>
      </h1>
      <p className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>
        We'll get back to you within 2 hours
      </p>
    </section>

    <section className={`bg-slate-900 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <div className={isMobile ? '' : 'max-w-md mx-auto'}>
        <div className="space-y-3 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${isMobile ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'}`}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={`w-full bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${isMobile ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'}`}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${isMobile ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'}`}
          />
          <select
            className={`w-full bg-slate-800 border border-slate-700 rounded-lg text-gray-400 focus:outline-none focus:border-yellow-500 ${isMobile ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'}`}
          >
            <option>Select Service Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Emergency</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Tell us about your job..."
            rows={4}
            className={`w-full bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 resize-none ${isMobile ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'}`}
          />
          <button className={`w-full bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 ${isMobile ? 'py-3 text-sm' : 'py-3'}`}>
            Send Request
          </button>
        </div>

        <div className={`border-t border-slate-800 pt-6 ${isMobile ? 'space-y-3' : 'space-y-4'}`}>
          <h3 className={`font-semibold text-white ${isMobile ? 'text-sm' : ''}`}>Or contact us directly:</h3>
          <a href="#" className={`flex items-center gap-3 text-gray-300 hover:text-white ${isMobile ? 'text-sm' : ''}`}>
            <Phone size={18} className="text-yellow-500" />
            0400 123 456
          </a>
          <a href="#" className={`flex items-center gap-3 text-gray-300 hover:text-white ${isMobile ? 'text-sm' : ''}`}>
            <Mail size={18} className="text-yellow-500" />
            info@sparkpro.com.au
          </a>
          <div className={`flex items-center gap-3 text-gray-300 ${isMobile ? 'text-sm' : ''}`}>
            <MapPin size={18} className="text-yellow-500" />
            Servicing all of Brisbane
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TradieExampleSitePage;
