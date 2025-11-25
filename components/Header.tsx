import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, ChevronDown, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentView = location.pathname === '/tradie' ? 'tradie'
    : location.pathname === '/enquire' ? 'enquire'
    : location.pathname === '/success' ? 'success'
    : 'agency';

  const handleNavClick = (path: string, hash?: string) => {
    navigate(path);
    setIsMenuOpen(false);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const tradieLinks = [
    { name: 'The Deal', action: () => handleNavClick('/tradie', 'pricing') },
    { name: 'Why Us', action: () => handleNavClick('/tradie', 'comparison') },
    { name: 'Process', action: () => handleNavClick('/tradie', 'process') },
  ];

  const renderNavLink = (name: string, isActive: boolean, action: () => void) => (
    <button 
      key={name} 
      onClick={action}
      className={`text-sm font-semibold uppercase tracking-widest font-display relative group transition-colors ${
        isActive ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-accent'
      }`}
    >
      {name}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
         isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </button>
  );

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled || currentView === 'enquire' ? 'bg-brand-black/90 backdrop-blur-lg border-b border-brand-surface' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo - Primary White on Dark */}
            <div
              className="flex-shrink-0 cursor-pointer group p-2"
              onClick={() => handleNavClick('/')}
            >
              <div className="flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-80">
                <span className="font-display font-black text-2xl tracking-tight text-white leading-none">
                  VERDANT
                </span>
                <span className="font-display font-black text-2xl tracking-tight text-white leading-none">
                  DIGITAL
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {renderNavLink('Home', location.pathname === '/', () => handleNavClick('/'))}
              {renderNavLink('Our Services', location.pathname === '/' && location.hash === '#expertise', () => handleNavClick('/', 'expertise'))}
              {renderNavLink('Our Work', location.pathname === '/' && location.hash === '#work', () => handleNavClick('/', 'work'))}

              {/* Industries Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest font-display text-brand-muted group-hover:text-brand-accent transition-colors py-4">
                    Industries <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-brand-black border border-brand-border rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1 relative z-50">
                        <button
                            onClick={() => handleNavClick('/tradie')}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors flex items-center justify-between group/item"
                        >
                            For Tradies
                            <Hammer size={16} className="text-brand-muted group-hover/item:text-brand-accent transition-colors" />
                        </button>
                    </div>
                </div>
              </div>

              {/* About Us Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest font-display text-brand-muted group-hover:text-brand-accent transition-colors py-4">
                    About Us <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-brand-black border border-brand-border rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1 relative z-50">
                        <button
                            onClick={() => handleNavClick('/about', 'about')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => handleNavClick('/about', 'founders')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Founders
                        </button>
                        <button
                            onClick={() => handleNavClick('/about', 'philosophy')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Philosophy
                        </button>
                        <button
                            onClick={() => handleNavClick('/about', 'how-we-work')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            How We Work
                        </button>
                        <button
                            onClick={() => handleNavClick('/about', 'why-choose-us')}
                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display text-brand-muted hover:bg-brand-surface hover:text-brand-accent transition-colors"
                        >
                            Why Choose Us
                        </button>
                    </div>
                </div>
              </div>

              {/* CTA Button - Get In Touch or Start Your Build */}
              {currentView === 'tradie' ? (
                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold py-2 px-6 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm"
                >
                  Start Your Build
                  <Hammer size={18} className="fill-current" />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick('/', 'enquire')}
                  className="text-sm font-extrabold uppercase tracking-widest font-display bg-brand-accent hover:bg-white text-brand-black px-6 py-2 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all"
                >
                  Get In Touch
                </button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-brand-muted hover:text-brand-accent p-2 transition-colors"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-black border-t border-brand-surface absolute w-full shadow-2xl h-screen z-50 overflow-y-auto pb-20">
            <div className="px-6 pt-8 pb-6 space-y-4">
              <button
                onClick={() => handleNavClick('/')}
                className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('/', 'expertise')}
                className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
              >
                Our Services
              </button>
              <button
                onClick={() => handleNavClick('/', 'work')}
                className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
              >
                Our Work
              </button>

              {/* Mobile Industries Accordion */}
              <div className="rounded-lg overflow-hidden bg-brand-surface/20 border border-brand-surface/50">
                <button
                  onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                  className="w-full text-left px-4 py-4 text-xl font-display font-bold text-brand-bone hover:text-brand-accent flex justify-between items-center"
                >
                  Industries
                  <ChevronDown size={20} className={`transition-transform ${mobileIndustryOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileIndustryOpen && (
                  <div className="bg-brand-black/50 px-4 pb-2 border-t border-brand-surface/30">
                    <button
                      onClick={() => handleNavClick('/tradie')}
                      className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all flex items-center gap-3"
                    >
                      <Hammer size={18} />
                      For Tradies
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile About Us Accordion */}
              <div className="rounded-lg overflow-hidden bg-brand-surface/20 border border-brand-surface/50">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full text-left px-4 py-4 text-xl font-display font-bold text-brand-bone hover:text-brand-accent flex justify-between items-center"
                >
                  About Us
                  <ChevronDown size={20} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="bg-brand-black/50 px-4 pb-2 border-t border-brand-surface/30 space-y-1">
                    <button
                      onClick={() => handleNavClick('/about', 'about')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => handleNavClick('/about', 'founders')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Founders
                    </button>
                    <button
                      onClick={() => handleNavClick('/about', 'philosophy')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Philosophy
                    </button>
                    <button
                      onClick={() => handleNavClick('/about', 'how-we-work')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      How We Work
                    </button>
                    <button
                      onClick={() => handleNavClick('/about', 'why-choose-us')}
                      className="w-full text-left block px-4 py-3 rounded-lg text-sm font-display font-semibold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all uppercase tracking-widest"
                    >
                      Why Choose Us
                    </button>
                  </div>
                )}
              </div>

              {/* CTA Button - Get In Touch or Start Your Build */}
              {currentView === 'tradie' ? (
                <button
                  onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
                  className="w-full text-center bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all text-lg uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  Start Your Build
                  <Hammer size={20} className="fill-current" />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick('/', 'enquire')}
                  className="w-full text-center bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all text-lg uppercase tracking-wide"
                >
                  Get In Touch
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;