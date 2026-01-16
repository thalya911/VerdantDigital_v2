import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Hammer, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
  onOpenAuditModal?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Throttled scroll handler using requestAnimationFrame
  useEffect(() => {
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

  const currentView = location.pathname === '/tradie' ? 'tradie'
    : location.pathname === '/enquire' ? 'enquire'
    : location.pathname === '/success' ? 'success'
    : 'agency';

  // Handle smooth scroll to hash on same page
  const scrollToHash = (hash: string) => {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle navigation with menu close
  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
    navigate(path);
  };

  // Close mobile menu
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-lg ${
          scrolled || currentView === 'enquire' ? 'bg-brand-black/90 border-b border-brand-surface' : 'bg-brand-black/0'
        }`}
        style={{ transform: 'translateZ(0)', willChange: 'background-color' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'}`}>
            {/* Logo - Primary White on Dark - Always Visible */}
            <Link
              to="/"
              className="flex-shrink-0 group p-2 transition-all duration-300 opacity-100 visible"
            >
              <div className="flex items-center gap-1 md:gap-2 transition-opacity duration-300 group-hover:opacity-80">
                <span className={`font-display font-black tracking-tight text-white leading-none transition-all duration-300 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl'}`}>
                  VERDANT
                </span>
                <span className={`font-display font-black tracking-tight text-white leading-none transition-all duration-300 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl'}`}>
                  DIGITAL
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Shows at lg (1024px) for proper spacing */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="relative group h-full flex items-center">
                <Link
                  to="/"
                  className={`flex items-center text-sm font-semibold uppercase tracking-widest font-display relative transition-colors py-4 ${
                    location.pathname === '/' ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-accent'
                  }`}
                >
                  Home
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                    location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </div>

              {/* Our Services Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest font-display text-brand-muted group-hover:text-brand-accent transition-colors py-4">
                    Services <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-brand-black border border-brand-border rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1 relative z-50">
                        <button
                            onClick={() => handleNavClick('/services')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Overview
                        </button>
                        <div className="h-px bg-brand-accent/50 my-1"></div>
                        <button
                            onClick={() => handleNavClick('/services/mobile-app-development')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Mobile App Development
                        </button>
                        <button
                            onClick={() => handleNavClick('/services/ai-solutions')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            AI Solutions
                        </button>
                        <button
                            onClick={() => handleNavClick('/services/progressive-web-apps')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Progressive Web Apps
                        </button>
                        <button
                            onClick={() => handleNavClick('/services/websites')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Websites & Platforms
                        </button>
                        <div className="h-px bg-brand-accent/50 my-1"></div>
                        <button
                            onClick={() => handleNavClick('/resources')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Digital Guides
                        </button>
                    </div>
                </div>
              </div>

              {/* About Us Dropdown */}
              <div className="relative group h-full flex items-center">
                <span className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest font-display text-brand-muted group-hover:text-brand-accent transition-colors py-4 cursor-default">
                    About Us <ChevronDown size={14} />
                </span>
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-brand-black border border-brand-border rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1 relative z-50">
                        <Link
                            to="/about#about"
                            onClick={() => scrollToHash('about')}
                            className="block px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/about#founders"
                            onClick={() => scrollToHash('founders')}
                            className="block px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Founders
                        </Link>
                        <Link
                            to="/about#philosophy"
                            onClick={() => scrollToHash('philosophy')}
                            className="block px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Philosophy
                        </Link>
                        <Link
                            to="/about#how-we-work"
                            onClick={() => scrollToHash('how-we-work')}
                            className="block px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            How We Work
                        </Link>
                        <Link
                            to="/about#why-choose-us"
                            onClick={() => scrollToHash('why-choose-us')}
                            className="block px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Why Choose Us
                        </Link>
                    </div>
                </div>
              </div>

              {/* CTA Button - Get In Touch or Start Your Build */}
              {currentView === 'tradie' ? (
                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold py-2 px-6 rounded-lg transition-all uppercase tracking-widest text-sm"
                >
                  Start Your Build
                  <Hammer size={18} className="fill-current" />
                </button>
              ) : (
                <Link
                  to="/#enquire"
                  onClick={() => scrollToHash('enquire')}
                  className="flex items-center text-sm font-extrabold uppercase tracking-widest font-display bg-brand-accent hover:bg-white text-brand-black px-6 py-2 rounded-lg transition-all"
                >
                  Get In Touch
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button - Shows until lg (1024px) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-muted hover:text-brand-accent p-2 transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-brand-black border-t border-brand-surface absolute w-full shadow-2xl h-screen z-50 overflow-y-auto pb-20">
            <div className="px-6 pt-8 pb-6 space-y-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="rounded-lg overflow-hidden bg-brand-surface/20 border border-brand-surface/50">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left px-4 py-4 text-xl font-display font-bold text-brand-bone hover:text-brand-accent flex justify-between items-center"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown size={20} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-brand-black/50 px-4 pb-2 border-t border-brand-surface/30 space-y-1">
                    <button
                      onClick={() => handleNavClick('/services')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Overview
                    </button>
                    <div className="h-px bg-brand-accent/50 my-2 mx-4"></div>
                    <button
                      onClick={() => handleNavClick('/services/mobile-app-development')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Mobile App Development
                    </button>
                    <button
                      onClick={() => handleNavClick('/services/ai-solutions')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      AI Solutions
                    </button>
                    <button
                      onClick={() => handleNavClick('/services/progressive-web-apps')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Progressive Web Apps
                    </button>
                    <button
                      onClick={() => handleNavClick('/services/websites')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Websites & Platforms
                    </button>
                    <div className="h-px bg-brand-accent/50 my-2 mx-4"></div>
                    <button
                      onClick={() => handleNavClick('/resources')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Digital Guides
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile About Us Accordion */}
              <div className="rounded-lg overflow-hidden bg-brand-surface/20 border border-brand-surface/50">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full text-left px-4 py-4 text-xl font-display font-bold text-brand-bone hover:text-brand-accent flex justify-between items-center"
                  aria-expanded={mobileAboutOpen}
                >
                  About Us
                  <ChevronDown size={20} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="bg-brand-black/50 px-4 pb-2 border-t border-brand-surface/30 space-y-1">
                    <Link
                      to="/about#about"
                      onClick={() => { closeMobileMenu(); scrollToHash('about'); }}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/about#founders"
                      onClick={() => { closeMobileMenu(); scrollToHash('founders'); }}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Founders
                    </Link>
                    <Link
                      to="/about#philosophy"
                      onClick={() => { closeMobileMenu(); scrollToHash('philosophy'); }}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Philosophy
                    </Link>
                    <Link
                      to="/about#how-we-work"
                      onClick={() => { closeMobileMenu(); scrollToHash('how-we-work'); }}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      How We Work
                    </Link>
                    <Link
                      to="/about#why-choose-us"
                      onClick={() => { closeMobileMenu(); scrollToHash('why-choose-us'); }}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Why Choose Us
                    </Link>
                  </div>
                )}
              </div>

              {/* CTA Button - Get In Touch or Start Your Build */}
              {currentView === 'tradie' ? (
                <button
                  onClick={() => { closeMobileMenu(); onOpenModal(); }}
                  className="w-full text-center bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 rounded-lg transition-all text-lg uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  Start Your Build
                  <Hammer size={20} className="fill-current" />
                </button>
              ) : (
                <Link
                  to="/#enquire"
                  onClick={() => { closeMobileMenu(); scrollToHash('enquire'); }}
                  className="block w-full text-center bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 rounded-lg transition-all text-lg uppercase tracking-wide"
                >
                  Get In Touch
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
