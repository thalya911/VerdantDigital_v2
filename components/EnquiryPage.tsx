import React from 'react';
import MainContact from './MainContact';

const EnquiryPage: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-3 tracking-tight">
            GET IN <span className="text-brand-accent">TOUCH</span>
         </h1>
         <p className="text-brand-muted text-base md:text-lg max-w-2xl">
            Tell us about your goals and we'll tell you how we can help.
         </p>
      </div>
      <MainContact />
    </div>
  );
};

export default EnquiryPage;