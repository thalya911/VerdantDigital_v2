import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Briefcase, HelpCircle, Mail, Building2, BookOpen } from 'lucide-react';

const Sitemap: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Agency homepage and services overview' },
        { name: 'Our Services', path: '/services', description: 'Complete breakdown of all services offered' },
        { name: 'About Us', path: '/about', description: 'Our story, founders, philosophy and approach' },
        { name: 'Contact', path: '/enquire', description: 'Get in touch with our team' },
      ]
    },
    {
      title: 'Industries',
      icon: Building2,
      links: [
        { name: 'Tradies', path: '/tradie', description: 'Express Build package for trade businesses' },
      ]
    },
    {
      title: 'Free Resources',
      icon: BookOpen,
      links: [
        { name: 'Resource Library', path: '/resources', description: 'Self-service digital marketing guides' },
        { name: 'Complete Advertising Guide', path: '/resources/advertising-guide', description: 'Comprehensive guide to online advertising' },
        { name: 'Conversion Psychology Playbook', path: '/resources/conversion-psychology', description: 'How users think, decide, and convert' },
      ]
    },
    {
      title: 'Information',
      icon: HelpCircle,
      links: [
        { name: 'FAQs', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Terms & Privacy', path: '/terms-and-privacy', description: 'Terms and conditions, privacy policy' },
        { name: 'Tradie Terms & Conditions', path: '/tradie/terms', description: 'Express Build service terms' },
      ]
    },
    {
      title: 'Get Started',
      icon: Briefcase,
      links: [
        { name: 'Enquiry Form', path: '/enquire', description: 'Submit your project enquiry' },
        { name: 'Success', path: '/success', description: 'Payment confirmation' },
      ]
    }
  ];

  const handleNavigation = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      navigate(route || '/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            Navigation
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">
            Site Map
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Find your way around our website. All pages and sections listed below.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div
                key={sectionIndex}
                className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8 reveal"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border">
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-2.5">
                    <Icon size={20} className="text-brand-accent" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-white uppercase tracking-wide">
                    {section.title}
                  </h2>
                </div>

                {/* Links List */}
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleNavigation(link.path)}
                        className="w-full text-left group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-brand-accent mt-1">→</div>
                          <div className="flex-1">
                            <div className="font-semibold text-brand-bone group-hover:text-brand-accent transition-colors mb-1">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center reveal">
          <div className="bg-gradient-to-br from-brand-surface/50 to-brand-black border border-brand-border rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase">
              Ready to Get Started?
            </h3>
            <p className="text-brand-muted text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a website for your business or a custom digital solution, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavigation('/enquire')}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-extrabold py-4 px-8 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-widest text-sm"
              >
                <Mail size={18} />
                Get In Touch
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-accent hover:bg-brand-accent/10 text-brand-accent font-extrabold py-4 px-8 rounded-lg transition-all uppercase tracking-widest text-sm"
              >
                <Briefcase size={18} />
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
