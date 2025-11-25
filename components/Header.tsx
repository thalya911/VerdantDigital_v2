import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
          <div className="flex justify-between items-center h-28">
            {/* Logo - Enhanced for Visibility */}
            <div
              className="flex-shrink-0 cursor-pointer group"
              onClick={() => handleNavClick('/')}
            >
              <div className="flex items-stretch border-3 border-white bg-black shadow-[0_0_20px_rgba(0,255,157,0.15)] transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-[#00FF9D] flex items-center px-4 py-2 border-r-0">
                  <span className="font-display font-black text-xl tracking-tighter text-black leading-none">
                    VERDANT
                  </span>
                </div>
                <div className="bg-white flex items-center px-4 py-2 relative overflow-hidden">
                   {/* Subtle shine effect on the white part */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-gray-100 opacity-50"></div>
                  <span className="font-display font-black text-xl tracking-tighter text-black leading-none relative z-10 drop-shadow-sm">
                    DIGITAL
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {currentView === 'tradie' ? (
                tradieLinks.map((link) => renderNavLink(link.name, false, link.action))
              ) : (
                <>
                  {renderNavLink('Expertise', false, () => handleNavClick('/', 'expertise'))}
                  {renderNavLink('Work', false, () => handleNavClick('/', 'work'))}

                  {/* Industry Dropdown */}
                  <div className="relative group h-full flex items-center">
                    <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest font-display text-brand-muted group-hover:text-brand-accent transition-colors py-4">
                        Industry <ChevronDown size={14} />
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
                </>
              )}
              
              {currentView === 'agency' || currentView === 'enquire' ? (
                <button
                  onClick={() => handleNavClick('/enquire')}
                  className="bg-brand-accent hover:brightness-110 text-brand-black font-bold py-3 px-6 rounded shadow-[0_4px_12px_rgba(0,255,157,0.3)] transition-all transform hover:-translate-y-0.5 uppercase tracking-wide text-sm ml-4"
                >
                  Enquire
                </button>
              ) : (
                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2 bg-brand-accent hover:brightness-110 text-brand-black font-bold py-3 px-6 rounded shadow-[0_4px_12px_rgba(0,255,157,0.3)] transition-all transform hover:-translate-y-0.5 uppercase tracking-wide text-sm ml-4"
                >
                  Start Project
                  <Hammer size={18} className="fill-current" />
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
              {currentView === 'tradie' ? (
                 tradieLinks.map((link) => (
                    <button 
                      key={link.name} 
                      onClick={link.action}
                      className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
                    >
                      {link.name}
                    </button>
                  ))
              ) : (
                <>
                   <button
                      onClick={() => handleNavClick('/', 'expertise')}
                      className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
                    >
                      Expertise
                    </button>
                    <button
                      onClick={() => handleNavClick('/', 'work')}
                      className="w-full text-left block px-4 py-4 rounded-lg text-xl font-display font-bold text-brand-bone hover:text-brand-accent hover:bg-brand-surface border-l-2 border-transparent hover:border-brand-accent transition-all"
                    >
                      Work
                    </button>

                    {/* Mobile Industry Accordion */}
                    <div className="rounded-lg overflow-hidden bg-brand-surface/20 border border-brand-surface/50">
                        <button
                          onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                          className="w-full text-left px-4 py-4 text-xl font-display font-bold text-brand-bone hover:text-brand-accent flex justify-between items-center"
                        >
                          Industry
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
                </>
              )}
              
              {currentView === 'agency' || currentView === 'enquire' ? (
                <button
                  onClick={() => handleNavClick('/enquire')}
                  className="w-full text-center bg-brand-accent text-brand-black font-bold py-5 rounded-lg mt-8 shadow-[0_0_20px_rgba(0,255,157,0.2)] text-lg flex items-center justify-center gap-2 uppercase"
                >
                  Enquire
                </button>
              ) : (
                <button
                  onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
                  className="w-full text-center bg-brand-accent text-brand-black font-bold py-5 rounded-lg mt-8 shadow-[0_0_20px_rgba(0,255,157,0.2)] text-lg flex items-center justify-center gap-2 uppercase"
                >
                  Start Project
                  <Hammer size={20} className="fill-current" />
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