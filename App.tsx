import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Clarity from '@microsoft/clarity';
import Header from './components/Header';
import Footer from './components/Footer';
import StartProjectModal from './components/StartProjectModal';
import ContactFormModal from './components/ContactFormModal';

// Initialize Microsoft Clarity
const CLARITY_PROJECT_ID = 'uio6a88ptj';
Clarity.init(CLARITY_PROJECT_ID);

// Tradie Components
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Workflow from './components/Workflow';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';

// Agency Components
import MainHero from './components/MainHero';
import MainServices from './components/MainServices';
import MainExpertise from './components/MainExpertise';
import MainPhilosophy from './components/MainPhilosophy';
import MainPortfolio from './components/MainPortfolio';
import MainContact from './components/MainContact';

// Pages
import EnquiryPage from './components/EnquiryPage';
import SuccessPage from './components/SuccessPage';
import About from './components/About';
import FaqPage from './components/FaqPage';
import TermsAndConditions from './components/TermsAndConditions';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import WhatsIncluded from './components/WhatsIncluded';
import Sitemap from './components/Sitemap';
import ServicesPage from './components/ServicesPage';
import MobileAppDevelopmentPage from './components/MobileAppDevelopmentPage';
import AISolutionsPage from './components/AISolutionsPage';
import ProgressiveWebAppsPage from './components/ProgressiveWebAppsPage';
import WebsitesPage from './components/WebsitesPage';
import FreeResourcesPage from './components/FreeResourcesPage';
import AdvertisingGuidePage from './components/AdvertisingGuidePage';
import ConversionPsychologyGuidePage from './components/ConversionPsychologyGuidePage';

// Page layout components
const AgencyPage: React.FC = () => (
  <>
    <MainHero />
    <MainServices />
    <MainPhilosophy />
    <MainExpertise />
    <MainPortfolio />
    <MainContact />
  </>
);

const TradiePage: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div className="relative">
    {/* Background Grid & Noise - CSS grain instead of external SVG */}
    <div className="fixed -inset-[20%] opacity-[0.08] pointer-events-none grain-texture" style={{ transform: 'translateZ(0)' }}></div>
    <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.1] pointer-events-none"></div>

    {/* Neon Glows - Reduced blur on mobile via CSS */}
    <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" style={{ transform: 'translateZ(0)' }}></div>
    <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" style={{ transform: 'translateZ(0)' }}></div>

    <div className="relative z-10">
      {/* Section Navigation */}
      <nav className={`fixed left-0 right-0 bg-brand-black/95 backdrop-blur-md border-b border-brand-border transition-all duration-300 ${scrolled ? 'top-[48px] lg:top-[56px] z-50' : 'top-[56px] lg:top-[64px] z-40'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile/Tablet: Responsive Layout */}
          <div className="lg:hidden py-2">
            {/* Single row: Breadcrumb + Nav Links */}
            <div className="flex items-center gap-4 overflow-x-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider flex-shrink-0">
                <span className="text-brand-muted">Industries</span>
                <span className="text-brand-muted/60">›</span>
                <span className="text-brand-accent">Tradies</span>
              </div>

              {/* Separator */}
              <span className="w-px h-4 bg-brand-border/50 flex-shrink-0"></span>

              {/* Navigation Links */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <a href="#pricing" className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                  Pricing
                </a>
                <span className="w-px h-3 bg-brand-border/40"></span>
                <a href="#comparison" className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                  Why Us
                </a>
                <span className="w-px h-3 bg-brand-border/40"></span>
                <a href="#process" className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                  Process
                </a>
                <span className="w-px h-3 bg-brand-border/40"></span>
                <a href="#faq" className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                  FAQ
                </a>
                <span className="w-px h-3 bg-brand-border/40"></span>
                <a href="#enquire" className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent hover:text-brand-glow transition-colors whitespace-nowrap min-h-0">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Layout - Centered */}
          <div className="hidden lg:flex items-center justify-center py-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
              <span className="text-brand-muted">Industries</span>
              <span className="text-brand-muted">›</span>
              <span className="text-brand-accent">Tradies</span>
            </div>

            {/* Separator */}
            <span className="w-px h-4 bg-brand-border/50 mx-4 lg:mx-6"></span>

            {/* Navigation Links */}
            <div className="flex items-center gap-4 lg:gap-6">
              <a href="#pricing" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                Pricing
              </a>
              <span className="w-px h-3 bg-brand-border/50"></span>
              <a href="#comparison" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                Why Us
              </a>
              <span className="w-px h-3 bg-brand-border/50"></span>
              <a href="#process" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                Process
              </a>
              <span className="w-px h-3 bg-brand-border/50"></span>
              <a href="#faq" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                FAQ
              </a>
              <span className="w-px h-3 bg-brand-border/50"></span>
              <a href="#enquire" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap min-h-0">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Hero onOpenModal={onOpenModal} />
      {/* Packages section removed - Pricing now in Hero */}
      <Comparison />
      <Workflow onOpenModal={onOpenModal} />
      <CtaSection onOpenModal={onOpenModal} />
      <Faq />
      <MainContact />
    </div>
  </div>
  );
};

// Main layout wrapper with scroll animations
const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalPrefill, setContactModalPrefill] = useState('');
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle Scroll Progress - Use refs to avoid React re-renders
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = Math.min((scrollTop / scrollableHeight) * 100, 100);

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${progress}%`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
      }
    );

    // Slight delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // Safety net: force reveal after longer delay to prevent blank pages (only for above-fold content)
    const safetyTimeout = setTimeout(() => {
       const viewportHeight = window.innerHeight;
       document.querySelectorAll('.reveal').forEach(el => {
         const rect = el.getBoundingClientRect();
         // Only force reveal for elements in initial viewport
         if (rect.top < viewportHeight) {
           el.classList.add('active');
         }
       });
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes

  // Reset scroll position when switching routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white selection:bg-brand-accent selection:text-brand-black">
      {/* Scroll Progress Bar - Uses ref for direct DOM updates to avoid re-renders */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-surface/20 z-[100]">
        <div
          ref={scrollProgressRef}
          className="h-full bg-gradient-to-r from-brand-accent to-brand-accent/60 shadow-[0_0_10px_rgba(0,255,157,0.5)]"
          style={{ width: '0%', transition: 'none' }}
        />
      </div>

      <Header
        onOpenModal={() => setIsModalOpen(true)}
        onOpenAuditModal={() => {
          setContactModalPrefill('Free Website Audit');
          setIsContactModalOpen(true);
        }}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AgencyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/services/progressive-web-apps" element={<ProgressiveWebAppsPage />} />
          <Route path="/services/websites" element={<WebsitesPage />} />
          <Route path="/resources" element={<FreeResourcesPage />} />
          <Route path="/resources/advertising-guide" element={<AdvertisingGuidePage />} />
          <Route path="/resources/conversion-psychology" element={<ConversionPsychologyGuidePage />} />
          <Route path="/tradie" element={<TradiePage onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/tradie/whats-included" element={<WhatsIncluded />} />
          <Route path="/tradie/terms" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/enquire" element={<EnquiryPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>

      <Footer />
      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledHelpWith={contactModalPrefill}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;