import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StartProjectModal from './components/StartProjectModal';

// Tradie Components
import Hero from './components/Hero';
import Comparison from './components/Comparison';
// import Packages from './components/Packages'; // Removed as per request to move deal to hero
import Workflow from './components/Workflow';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';

// Agency Components
import MainHero from './components/MainHero';
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
import FreeResourcesPage from './components/FreeResourcesPage';
import AdvertisingGuidePage from './components/AdvertisingGuidePage';
import ConversionPsychologyGuidePage from './components/ConversionPsychologyGuidePage';

// Page layout components
const AgencyPage: React.FC = () => (
  <>
    <MainHero />
    <MainPhilosophy />
    <MainExpertise />
    <MainPortfolio />
    <MainContact />
  </>
);

const TradiePage: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => (
  <div className="relative">
    {/* Background Grid & Noise */}
    <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
    <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.1] pointer-events-none"></div>

    {/* Neon Glows */}
    <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="relative z-10">
      {/* Section Navigation */}
      <nav className="sticky top-[72px] bg-brand-black/95 backdrop-blur-md border-b border-brand-border z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Stacked Layout */}
          <div className="md:hidden py-3">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider mb-2">
              <span className="text-brand-muted">Industries</span>
              <span className="text-brand-muted">›</span>
              <span className="text-brand-accent">Tradies</span>
            </div>
            {/* Navigation Links - Scrollable */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
              <a href="#pricing" className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Pricing
              </a>
              <span className="text-brand-border text-xs">|</span>
              <a href="#comparison" className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Why Us
              </a>
              <span className="text-brand-border text-xs">|</span>
              <a href="#process" className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Process
              </a>
              <span className="text-brand-border text-xs">|</span>
              <a href="#faq" className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                FAQ
              </a>
              <span className="text-brand-border text-xs">|</span>
              <a href="#enquire" className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:flex items-center justify-between py-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
              <span className="text-brand-muted">Industries</span>
              <span className="text-brand-muted">›</span>
              <span className="text-brand-accent">Tradies</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 lg:gap-8">
              <a href="#pricing" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Pricing
              </a>
              <span className="text-brand-border">|</span>
              <a href="#comparison" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Why Us
              </a>
              <span className="text-brand-border">|</span>
              <a href="#process" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                Process
              </a>
              <span className="text-brand-border">|</span>
              <a href="#faq" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
                FAQ
              </a>
              <span className="text-brand-border">|</span>
              <a href="#enquire" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors whitespace-nowrap">
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

// Main layout wrapper with scroll animations
const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-surface/20 z-[100]">
        <div
          className="h-full bg-gradient-to-r from-brand-accent to-brand-accent/60 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,255,157,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AgencyPage />} />
          <Route path="/services" element={<ServicesPage />} />
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