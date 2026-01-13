import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-muted py-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8">

          {/* Logo & Business Info Section */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex-shrink-0 w-fit group cursor-default">
              <div className="flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-70">
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  VERDANT
                </span>
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  DIGITAL
                </span>
              </div>
            </div>

            {/* Business Identity */}
            <div className="text-sm space-y-1">
              <p className="text-brand-bone font-semibold">Verdant Labs Pty Ltd</p>
              <p className="text-gray-500">ABN: 62 690 480 516</p>
              <p className="text-gray-500">Brisbane, Queensland, Australia</p>
            </div>

            {/* Tagline */}
            <p className="text-xs text-gray-600 max-w-xs">
              Custom Websites • Mobile Apps • Progressive Web Apps • AI-Powered Solutions
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="md:col-span-4">
            <h3 className="text-brand-bone font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-sm text-gray-500 hover:text-brand-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-500 hover:text-brand-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms-and-privacy" className="text-sm text-gray-500 hover:text-brand-accent transition-colors">
                  Terms & Privacy
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-gray-500 hover:text-brand-accent transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/sitemap" className="text-sm text-gray-500 hover:text-brand-accent transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="/enquire" className="text-sm text-gray-500 hover:text-brand-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="md:col-span-3">
            <h3 className="text-brand-bone font-bold text-sm uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/verdant.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1Aom3Vwm4c/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:hello@verdantdigital.com.au"
                className="text-gray-500 hover:text-brand-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-brand-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2025 Verdant Labs Pty Ltd. All rights reserved.</p>
            <p>Made with ❤️ in Brisbane, Australia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;