import React, { useState } from 'react';
import { Home, Wrench, User, Images, Mail, ArrowRight, Plus, Minus } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const pages = [
    {
      icon: Home,
      color: 'brand-accent',
      borderColor: 'brand-accent',
      title: 'Home',
      description: 'Your main landing page with a clear message, strong call to action and professional first impression.',
      features: [
        'Hero section with compelling headline and clear value proposition',
        'Click-to-call buttons prominently displayed',
        'Service area information for local SEO',
        'Trust signals (years in business, certifications, testimonials)',
        'Mobile-optimised layout for on-the-go customers',
        'Fast loading time for better search rankings'
      ]
    },
    {
      icon: Wrench,
      color: 'blue-400',
      borderColor: 'blue-500/50',
      title: 'Services',
      description: 'A breakdown of the work you offer so customers understand exactly what you do.',
      features: [
        'Clear descriptions of each service you provide',
        'Pricing guidance (starting from, typical range, or by quote)',
        'Service area mapping showing where you operate',
        'Process overview for each type of job',
        'Before/after examples where applicable',
        'Easy quote request buttons on each service'
      ]
    },
    {
      icon: User,
      color: 'purple-400',
      borderColor: 'purple-500/50',
      title: 'About',
      description: 'Your business story, experience and credibility to help customers feel confident choosing you.',
      features: [
        'Your business story and what sets you apart',
        'Years of experience and qualifications',
        'Licenses, insurance and certifications',
        'Team member profiles (if applicable)',
        'Why customers should trust you',
        'Your commitment to quality and service'
      ]
    },
    {
      icon: Images,
      color: 'orange-400',
      borderColor: 'orange-500/50',
      title: 'Gallery',
      description: 'Photos of completed jobs to show workmanship and quality.',
      features: [
        'Professional photo gallery of your best work',
        'Organised by job type or service category',
        'Before and after comparisons where relevant',
        'Mobile-optimised image loading',
        'Easy navigation and filtering',
        'Option to add new photos as you complete jobs'
      ]
    },
    {
      icon: Mail,
      color: 'green-400',
      borderColor: 'green-500/50',
      title: 'Contact & Quote Request',
      description: 'Intelligent forms designed to get you qualified leads with all the detail you need - without follow-up calls.',
      features: [
        'Smart quote forms with job-type specific questions',
        'Photo upload to help you quote faster (sometimes without a site visit)',
        'Urgency filters (emergency, soon, flexible) so you can prioritise',
        'Budget comfort indicators - no awkward money conversations',
        'Access notes (pets, gates, parking) save you time on arrival',
        'Auto-filtering to protect your time from tyre-kickers'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center reveal">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded">
            2026 NEW YEAR SPECIAL
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase">
            Everything You Get <br />
            <span className="text-brand-accent">For $399</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A complete 5-page website built to generate leads and grow your business. Here's exactly what each page includes:
          </p>

          {/* Disclaimer */}
          <div className="mt-8 max-w-4xl mx-auto bg-orange-500/10 border border-orange-500/30 rounded-lg p-5">
            <p className="text-orange-400 text-sm md:text-base leading-relaxed">
              <strong className="font-bold">Note:</strong> The examples below are for visual reference only. Your website will be custom-designed with colours, fonts and styling unique to your brand, not the generic style shown here.
            </p>
          </div>
        </div>

        {/* Pages Grid */}
        <div className="space-y-4">
          {pages.map((page, index) => {
            const Icon = page.icon;
            const isOpen = openIndex === index;

            // Get explicit class names based on index
            const getBorderColor = () => {
              if (index === 0) return isOpen ? 'border-brand-accent' : 'border-brand-border';
              if (index === 1) return isOpen ? 'border-blue-500/50' : 'border-brand-border';
              if (index === 2) return isOpen ? 'border-purple-500/50' : 'border-brand-border';
              if (index === 3) return isOpen ? 'border-orange-500/50' : 'border-brand-border';
              if (index === 4) return isOpen ? 'border-green-500/50' : 'border-brand-border';
              return 'border-brand-border';
            };

            const getIconBorderColor = () => {
              if (index === 0) return 'border-brand-accent';
              if (index === 1) return 'border-blue-500/50';
              if (index === 2) return 'border-purple-500/50';
              if (index === 3) return 'border-orange-500/50';
              if (index === 4) return 'border-green-500/50';
              return 'border-brand-border';
            };

            const getIconColor = () => {
              if (index === 0) return 'text-brand-accent';
              if (index === 1) return 'text-blue-400';
              if (index === 2) return 'text-purple-400';
              if (index === 3) return 'text-orange-400';
              if (index === 4) return 'text-green-400';
              return 'text-white';
            };

            const getTitleColor = () => {
              if (!isOpen) return 'text-white';
              if (index === 0) return 'text-brand-accent';
              if (index === 1) return 'text-blue-400';
              if (index === 2) return 'text-purple-400';
              if (index === 3) return 'text-orange-400';
              if (index === 4) return 'text-green-400';
              return 'text-white';
            };

            const getButtonBg = () => {
              if (!isOpen) return 'bg-brand-surface border border-brand-border text-gray-400';
              if (index === 0) return 'bg-brand-accent text-brand-black';
              if (index === 1) return 'bg-blue-400 text-brand-black';
              if (index === 2) return 'bg-purple-400 text-brand-black';
              if (index === 3) return 'bg-orange-400 text-brand-black';
              if (index === 4) return 'bg-green-400 text-brand-black';
              return 'bg-brand-surface border border-brand-border text-gray-400';
            };

            const getRingColor = () => {
              if (!isOpen) return '';
              if (index === 0) return 'ring-2 ring-brand-accent';
              if (index === 1) return 'ring-2 ring-blue-500/50';
              if (index === 2) return 'ring-2 ring-purple-500/50';
              if (index === 3) return 'ring-2 ring-orange-500/50';
              if (index === 4) return 'ring-2 ring-green-500/50';
              return '';
            };

            return (
              <div
                key={index}
                className={`border rounded-lg transition-all duration-300 ${getBorderColor()} ${
                  isOpen ? 'bg-brand-surface' : 'bg-transparent hover:border-gray-600'
                }`}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-start gap-4 text-left group"
                >
                  <div className={`bg-brand-black ${getIconBorderColor()} border rounded-lg p-3 shrink-0 transition-all ${getRingColor()}`}>
                    <Icon size={28} className={getIconColor()} />
                  </div>
                  <div className="flex-grow">
                    <h2 className={`text-2xl md:text-3xl font-display font-bold mb-2 transition-colors ${getTitleColor()}`}>
                      {page.title}
                    </h2>
                    <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                  <div className={`rounded-full p-2 transition-all shrink-0 ${getButtonBg()}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 pt-2 border-t border-brand-border/50 mt-2">
                    {/* Browser Mockup with Sample Content */}
                    <div className="mb-6 mt-4">
                      <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-2xl">
                        {/* Browser Chrome */}
                        <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b-2 border-gray-300">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-grow ml-4 bg-white border border-gray-300 rounded px-3 py-1 text-xs text-gray-600 font-sans">
                            yourbusiness.com.au/{page.title.toLowerCase()}
                          </div>
                        </div>
                        {/* Page Content Preview */}
                        <div className="bg-white p-6 md:p-8 min-h-[300px]">
                          {index === 0 && ( // Home page mockup
                            <div className="space-y-6">
                              <div className="text-center space-y-4">
                                <div className="inline-block bg-blue-600 text-white px-4 py-1 text-xs font-bold uppercase">
                                  Licensed & Insured
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans">
                                  Melbourne's Trusted Plumber
                                  <br />
                                  <span className="text-blue-600">Fast, Reliable Service</span>
                                </h1>
                                <p className="text-gray-600 text-base max-w-2xl mx-auto font-sans">
                                  Professional plumbing with upfront pricing. Available 24/7 for emergencies.
                                </p>
                                <div className="flex gap-3 justify-center flex-wrap">
                                  <div className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold text-base shadow-lg">
                                    📞 0400 123 456
                                  </div>
                                  <div className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-bold text-base">
                                    Get Free Quote
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-gray-200">
                                <div className="text-center">
                                  <div className="text-blue-600 font-bold text-2xl font-sans">15+</div>
                                  <div className="text-xs text-gray-600 font-sans">Years Experience</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-blue-600 font-bold text-2xl font-sans">2,500+</div>
                                  <div className="text-xs text-gray-600 font-sans">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-orange-500 font-bold text-2xl font-sans">4.9★</div>
                                  <div className="text-xs text-gray-600 font-sans">Google Rating</div>
                                </div>
                              </div>
                            </div>
                          )}
                          {index === 1 && ( // Services page mockup
                            <div className="space-y-4">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Our Services</h2>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 border-2 border-blue-200 rounded-lg p-5">
                                  <h3 className="text-blue-700 font-bold mb-2 flex items-center gap-2 text-lg font-sans">
                                    <Wrench size={20} /> Emergency Repairs
                                  </h3>
                                  <p className="text-gray-700 text-sm mb-3 font-sans">
                                    24/7 callout for urgent plumbing issues. Fast response times guaranteed.
                                  </p>
                                  <div className="text-sm text-gray-800 mb-2 font-semibold font-sans">From $150 callout</div>
                                  <div className="text-sm text-orange-600 font-bold font-sans">→ Get a Quote</div>
                                </div>
                                <div className="bg-gray-50 border-2 border-blue-200 rounded-lg p-5">
                                  <h3 className="text-blue-700 font-bold mb-2 flex items-center gap-2 text-lg font-sans">
                                    <Wrench size={20} /> New Installations
                                  </h3>
                                  <p className="text-gray-700 text-sm mb-3 font-sans">
                                    Quality installations with certified materials and workmanship guarantee.
                                  </p>
                                  <div className="text-sm text-gray-800 mb-2 font-semibold font-sans">Custom pricing</div>
                                  <div className="text-sm text-orange-600 font-bold font-sans">→ Get a Quote</div>
                                </div>
                              </div>
                              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 text-sm text-gray-700 font-sans">
                                <strong className="text-blue-700">Service Areas:</strong> Melbourne CBD, Inner Suburbs, Outer East
                              </div>
                            </div>
                          )}
                          {index === 2 && ( // About page mockup
                            <div className="space-y-4">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">About Us</h2>
                              <div className="flex gap-4 items-start">
                                <div className="w-24 h-24 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center shrink-0">
                                  <User size={40} className="text-blue-600" />
                                </div>
                                <div className="space-y-2">
                                  <h3 className="text-gray-900 font-bold text-lg font-sans">John Smith Plumbing</h3>
                                  <p className="text-gray-700 text-sm leading-relaxed font-sans">
                                    With over 15 years serving Melbourne families and businesses, we've built our reputation on honest work, fair pricing and showing up when we say we will. Fully licensed, insured and ready to help.
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 pt-3">
                                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                                  <div className="text-blue-700 text-sm font-bold mb-1 font-sans">✓ Licensed Plumber</div>
                                  <div className="text-gray-600 text-xs font-sans">VIC License #123456</div>
                                </div>
                                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                                  <div className="text-blue-700 text-sm font-bold mb-1 font-sans">✓ Fully Insured</div>
                                  <div className="text-gray-600 text-xs font-sans">$20M Public Liability</div>
                                </div>
                              </div>
                            </div>
                          )}
                          {index === 3 && ( // Gallery page mockup
                            <div className="space-y-4">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Recent Projects</h2>
                              <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                  <div key={i} className="aspect-square bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-400 transition-colors">
                                    <Images size={28} className="text-gray-400" />
                                  </div>
                                ))}
                              </div>
                              <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-center">
                                <div className="text-sm text-gray-700 font-sans">
                                  View: <span className="text-blue-600 font-bold">All Projects</span> | <span className="text-gray-500">Residential</span> | <span className="text-gray-500">Commercial</span>
                                </div>
                              </div>
                            </div>
                          )}
                          {index === 4 && ( // Contact page mockup
                            <div className="space-y-3">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">Get Your Free Quote</h2>
                              <div className="space-y-3">
                                {/* Service Type */}
                                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                                  <div className="text-sm font-bold text-gray-900 mb-2 font-sans">What do you need help with?</div>
                                  <div className="flex flex-wrap gap-2">
                                    <div className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-sans">✓ Blocked Drain</div>
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Hot Water</div>
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Leak Repair</div>
                                  </div>
                                </div>

                                {/* Smart Follow-up Question */}
                                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                                  <div className="text-xs font-bold text-blue-900 mb-2 font-sans">Is it affecting multiple drains?</div>
                                  <div className="text-xs text-gray-600 font-sans italic mb-2">Helps us check if it's a main line issue</div>
                                  <div className="flex gap-2">
                                    <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-sans">✓ Yes</div>
                                    <div className="bg-white border border-gray-400 text-gray-700 px-3 py-1 rounded text-xs font-sans">No</div>
                                  </div>
                                </div>

                                {/* Property Type */}
                                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-3">
                                  <div className="text-sm font-bold text-gray-900 mb-2 font-sans">Are you the property owner?</div>
                                  <div className="flex gap-2">
                                    <div className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-sans">✓ Owner</div>
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Tenant</div>
                                  </div>
                                </div>

                                {/* Urgency */}
                                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-3">
                                  <div className="text-sm font-bold text-gray-900 mb-2 font-sans">When do you need this done?</div>
                                  <div className="flex gap-2 flex-wrap">
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Emergency</div>
                                    <div className="bg-orange-500 text-white px-3 py-1.5 rounded text-xs font-sans">✓ This Week</div>
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Flexible</div>
                                  </div>
                                </div>

                                {/* Budget Bands */}
                                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-3">
                                  <div className="text-sm font-bold text-gray-900 mb-2 font-sans">Budget comfort range</div>
                                  <div className="text-xs text-gray-600 font-sans mb-2">No surprises - just helps us recommend the right solution</div>
                                  <div className="flex gap-2 flex-wrap">
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Under $300</div>
                                    <div className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-sans">✓ $300-$600</div>
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">$600+</div>
                                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-sans">Unsure</div>
                                  </div>
                                </div>

                                {/* Photo Upload */}
                                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-3">
                                  <div className="text-sm font-bold text-green-900 mb-1 font-sans">📸 Got photos? (Optional)</div>
                                  <div className="text-xs text-gray-600 font-sans">Share pics to help us quote faster - sometimes without a site visit!</div>
                                </div>

                                {/* Access Notes */}
                                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-3">
                                  <div className="text-sm font-bold text-gray-900 mb-1 font-sans">Access details</div>
                                  <div className="text-xs text-gray-500 font-sans">Gate code, pets, parking notes</div>
                                </div>

                                {/* Submit */}
                                <div className="bg-orange-500 text-white px-6 py-2.5 rounded-md text-center font-bold text-sm shadow-lg font-sans">
                                  Get My Free Quote
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 mt-6">
                      What's Included:
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {page.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-brand-bone">
                          <ArrowRight size={16} className={`${getIconColor()} mt-0.5 shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Smart Quote Form Deep Dive */}
        <div className="mt-20 pt-16 border-t border-brand-border reveal">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest rounded">
              CONVERSION-FOCUSED FORMS
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Quote Forms That Actually Work
            </h2>
            <p className="text-brand-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Most websites ask "What do you need?" and hope for the best. Ours use conversion psychology and smart logic to get you qualified leads with all the detail you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Benefits for Tradie */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-brand-accent">✓</span> Protects Your Time
              </h3>
              <ul className="space-y-3 text-sm text-brand-bone">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Filters low-value jobs</strong> before they waste your time (e.g., tenants without approval)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Flags emergencies</strong> so you can prioritise profitable urgent work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Gathers access details upfront</strong> (parking, pets, gate codes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Encourages photo uploads</strong> so you can quote faster, sometimes without a site visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-0.5">•</span>
                  <span><strong className="text-white">Budget comfort indicators</strong> help you avoid bill-shock disputes</span>
                </li>
              </ul>
            </div>

            {/* Right: Benefits for Customer */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span> Builds Customer Trust
              </h3>
              <ul className="space-y-3 text-sm text-brand-bone">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Easy tick-box choices</strong> instead of intimidating blank fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Shows expertise</strong> with helpful microcopy like "Helps us check if it's a simple valve or full replacement"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">No scary pricing questions</strong> - budget bands feel collaborative, not confrontational</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Frames you as an adviser</strong>, not a salesperson</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span><strong className="text-white">Sets clear expectations</strong> about timeline and process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Psychological Principles */}
          <div className="bg-gradient-to-br from-brand-surface/50 to-brand-black border border-brand-border rounded-xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-display font-bold text-white mb-6 text-center uppercase tracking-wide">
              Built on Conversion Psychology
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">Cognitive Ease</h4>
                <p className="text-xs text-brand-muted">Tick-boxes before free-text. Plain language, no jargon.</p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Commitment & Consistency</h4>
                <p className="text-xs text-brand-muted">Starts with tiny choices, builds momentum to completion.</p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Authority & Reciprocity</h4>
                <p className="text-xs text-brand-muted">"Share photos to help us give you the fastest answer."</p>
              </div>
            </div>
          </div>

          {/* Example Smart Logic */}
          <div className="bg-brand-black border-2 border-brand-accent/20 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-display font-bold text-white mb-2 uppercase tracking-wide">
              Example: Adaptive Smart Logic
            </h3>
            <p className="text-sm text-brand-muted mb-6">Forms adapt based on what the customer selects, asking only relevant follow-up questions:</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-brand-accent font-mono text-xs bg-brand-surface px-2 py-1 rounded mt-0.5">IF</span>
                <div>
                  <span className="text-white">Customer selects <strong>"Blocked Drain"</strong></span>
                  <div className="text-brand-muted mt-1 ml-4 space-y-1">
                    <div>→ Ask about gurgling, multiple fixtures affected, sewer smell</div>
                    <div>→ Flag potential main line issue vs. single fixture</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-mono text-xs bg-brand-surface px-2 py-1 rounded mt-0.5">IF</span>
                <div>
                  <span className="text-white">Customer selects <strong>"I'm a Tenant"</strong></span>
                  <div className="text-brand-muted mt-1 ml-4 space-y-1">
                    <div>→ Ask: "Do you have landlord/agent approval?"</div>
                    <div>→ Protects you from wasted quotes on unauthorised jobs</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-mono text-xs bg-brand-surface px-2 py-1 rounded mt-0.5">IF</span>
                <div>
                  <span className="text-white">Customer selects <strong>"Gas Work"</strong></span>
                  <div className="text-brand-muted mt-1 ml-4 space-y-1">
                    <div>→ Show compliance notice and safety priority tag</div>
                    <div>→ Ask if gas smell present (auto-flags as urgent)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-brand-border text-center reveal">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Plus, Every Month for $99:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Hosting & Security</h4>
              <p className="text-brand-muted text-sm">Fast, secure hosting with SSL certificate and regular backups</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Unlimited Updates</h4>
              <p className="text-brand-muted text-sm">Text changes, new photos, pricing updates - whenever you need</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">Priority Support</h4>
              <p className="text-brand-muted text-sm">Fast response times and direct access to our team</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic mb-8">
            Need more pages, custom features or e-commerce? We can quote for anything additional.
          </p>

          <a
            href="/tradie#pricing"
            className="inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-extrabold text-lg py-4 px-8 rounded-lg shadow-[0_4px_14px_rgba(0,255,179,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,179,0.6)] transition-all uppercase tracking-wide"
          >
            Get Started Now
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
