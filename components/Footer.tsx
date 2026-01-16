import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-muted py-6 md:py-6 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 mb-2 md:mb-4">

          {/* Logo & Business Info Section - Left on mobile */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-1.5 md:gap-2">
            <div className="flex-shrink-0 w-fit group cursor-default">
              <div className="flex items-center gap-1.5 md:gap-2 transition-opacity duration-300 group-hover:opacity-70">
                <span className="font-display font-black text-base md:text-xl tracking-tight text-white leading-none">
                  VERDANT
                </span>
                <span className="font-display font-black text-base md:text-xl tracking-tight text-white leading-none">
                  DIGITAL
                </span>
              </div>
            </div>

            {/* Business Identity */}
            <div className="text-xs md:text-sm -space-y-0.5 md:space-y-0 leading-tight">
              <p className="text-brand-bone font-semibold">Verdant Labs Pty Ltd</p>
              <p className="text-gray-500">ABN: 62 690 480 516</p>
              <p className="text-gray-500">Brisbane, Queensland, Australia</p>
            </div>

            {/* Social Links Section - Under business info */}
            <div>
              <h3 className="text-brand-bone font-bold text-xs md:text-sm uppercase tracking-widest mb-1.5 md:mb-1.5">Connect</h3>
              <div className="flex -space-x-4 md:space-x-0 md:gap-3">
                <a
                  href="https://www.instagram.com/verdant.digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="md:w-4 md:h-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Aom3Vwm4c/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="md:w-4 md:h-4" />
                </a>
                <a
                  href="mailto:hello@verdantdigital.com.au"
                  className="text-gray-500 hover:text-brand-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} className="md:w-4 md:h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links only */}
          <div className="col-span-1 md:col-span-7 -ml-8 md:ml-0">
            {/* Navigation Links Section */}
            <div className="mt-6 md:mt-0">
              <h3 className="text-brand-bone font-bold text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-1">Quick Links</h3>
              {/* Mobile: Two columns */}
              <div className="flex gap-x-3 md:hidden">
                <ul className="-space-y-0.5 leading-tight">
                  <li><a href="/services" className="text-xs text-gray-500 hover:text-brand-accent transition-colors">Our Services</a></li>
                  <li><a href="/about" className="text-xs text-gray-500 hover:text-brand-accent transition-colors">About Us</a></li>
                  <li><a href="/terms-and-privacy" className="text-xs text-gray-500 hover:text-brand-accent transition-colors">Terms & Privacy</a></li>
                </ul>
                <ul className="-space-y-0.5 leading-tight">
                  <li><a href="/faq" className="text-xs text-gray-500 hover:text-brand-accent transition-colors">FAQs</a></li>
                  <li><a href="/sitemap" className="text-xs text-gray-500 hover:text-brand-accent transition-colors">Sitemap</a></li>
                  <li><a href="/enquire" className="text-xs text-gray-500 hover:text-brand-accent transition-colors">Contact Us</a></li>
                </ul>
              </div>
              {/* Desktop: Compact vertical list */}
              <ul className="hidden md:block -space-y-0.5 leading-tight">
                <li><a href="/services" className="text-xs md:text-sm text-gray-500 hover:text-brand-accent transition-colors">Our Services</a></li>
                <li><a href="/about" className="text-xs md:text-sm text-gray-500 hover:text-brand-accent transition-colors">About Us</a></li>
                <li><a href="/terms-and-privacy" className="text-xs md:text-sm text-gray-500 hover:text-brand-accent transition-colors">Terms & Privacy</a></li>
                <li><a href="/faq" className="text-xs md:text-sm text-gray-500 hover:text-brand-accent transition-colors">FAQs</a></li>
                <li><a href="/sitemap" className="text-xs md:text-sm text-gray-500 hover:text-brand-accent transition-colors">Sitemap</a></li>
                <li><a href="/enquire" className="text-xs md:text-sm text-gray-500 hover:text-brand-accent transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-3 md:pt-3 border-t border-brand-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2 text-xs text-gray-600">
            <p>&copy; 2025 Verdant Labs Pty Ltd. All rights reserved.</p>
            <p>Made with ❤️ in Brisbane, Australia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;