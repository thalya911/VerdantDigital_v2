import React, { useState } from 'react';
import {
  ArrowRight,
  Wrench,
  CheckCircle,
  FileText,
  Hammer,
  Eye,
  Rocket,
  Globe,
  X,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import StartProjectModal from './StartProjectModal';

const TradieExpressBuildPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Wrench size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Tradie Express Build</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              A tradie website built in 7 days.{' '}
              <span className="text-brand-accent">Fixed price. No headaches.</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              If your website isn't bringing in enquiries consistently, or you don't have one at all, the Tradie Express Build gives you a professional, lead-focused site without the usual back-and-forth.
            </p>

            <p className="text-white text-base font-semibold mb-2">
              We build it. We host it. We manage it.
            </p>
            <p className="text-brand-accent text-base font-semibold mb-10">
              You focus on the job.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Get Started - $399 Setup
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* What This Is */}
        <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-5 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                What <span className="text-brand-accent">This Is</span>
              </h2>
              <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                The Tradie Express Build is a <strong className="text-white">done-for-you website</strong>, built and launched in <strong className="text-white">7 days</strong>.
              </p>
            </div>

            {/* Pages Included */}
            <div className="mt-10 reveal reveal-delay-200">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white text-center mb-6 uppercase">
                <span className="text-brand-accent">5 Pages</span> Included
              </h3>

              {/* 4 Core Pages */}
              <div className="mb-6">
                <p className="text-brand-muted text-sm text-center mb-4">4 core pages included with every build:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { title: 'Home', desc: 'Introduces what you do and where you operate' },
                    { title: 'Services', desc: 'Outlines the services you offer' },
                    { title: 'About', desc: 'Shows who you are and why customers choose you' },
                    { title: 'Contact', desc: 'Makes it easy to get in touch' },
                  ].map((page, i) => (
                    <div key={i} className="bg-brand-surface/20 border border-brand-border/30 rounded-lg p-3 text-center">
                      <h4 className="text-white font-semibold text-sm mb-1">{page.title}</h4>
                      <p className="text-brand-muted text-xs leading-snug">{page.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Fifth Page */}
              <div className="bg-brand-surface/10 border border-brand-border/20 rounded-xl p-5">
                <p className="text-white font-semibold text-sm text-center mb-4">
                  Plus <span className="text-brand-accent">ONE optional fifth page</span> — choose the best fit:
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    {
                      title: 'Gallery / Our Work',
                      best: 'You have quality job photos',
                      does: 'Shows real examples of your work'
                    },
                    {
                      title: 'Service Areas',
                      best: 'You service multiple suburbs',
                      does: 'Helps you rank in local search'
                    },
                    {
                      title: 'Reviews',
                      best: 'You have customer testimonials',
                      does: 'Builds trust and social proof'
                    },
                  ].map((option, i) => (
                    <div key={i} className="bg-brand-black/30 rounded-lg p-3">
                      <h4 className="text-white font-semibold text-sm mb-2">{option.title}</h4>
                      <p className="text-brand-muted text-xs mb-1">
                        <span className="text-brand-accent">Best if:</span> {option.best}
                      </p>
                      <p className="text-brand-muted/70 text-xs">{option.does}</p>
                    </div>
                  ))}
                </div>
                <p className="text-brand-muted/60 text-xs text-center mt-4">
                  Not sure which to choose? We'll recommend the best fit for your business.
                </p>
              </div>

              {/* Link to example */}
              <div className="text-center mt-5">
                <a
                  href="/tradie/example-site"
                  className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium hover:underline"
                >
                  See an example site
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="process" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                How It <span className="text-brand-accent">Works</span>
              </h2>
            </div>

            {/* Steps - Clean linear layout */}
            <div className="reveal reveal-delay-100 space-y-3">
              {[
                {
                  num: '01',
                  title: 'Pay & Get Started',
                  icon: Rocket,
                  who: 'you',
                  desc: 'Choose Express Build and complete payment. You will receive a confirmation and link to the intake form.'
                },
                {
                  num: '02',
                  title: 'Complete Intake Form',
                  icon: FileText,
                  who: 'you',
                  desc: 'Fill in your business details, services, branding preferences, and upload any photos or content you have.'
                },
                {
                  num: '03',
                  title: 'We Build Your Site',
                  icon: Hammer,
                  who: 'us',
                  desc: 'We handle everything internally — no meetings, no approvals, no back-and-forth.'
                },
                {
                  num: '04',
                  title: 'Review',
                  icon: Eye,
                  who: 'you',
                  desc: 'You receive a preview link and can request minor text edits, photo swaps, or contact detail changes.'
                },
                {
                  num: '05',
                  title: 'Launch',
                  icon: CheckCircle,
                  who: 'us',
                  desc: 'We launch your site, test everything, and move you onto ongoing support.'
                }
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-4 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-display font-bold text-white uppercase">{step.title}</h3>
                      <step.icon size={14} className="text-brand-accent flex-shrink-0" />
                      <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${step.who === 'you' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-surface/40 text-brand-muted'}`}>
                        {step.who === 'you' ? 'You' : 'Us'}
                      </span>
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included & Not Included */}
        <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                What's <span className="text-brand-accent">Included</span>
              </h2>
              <p className="text-brand-muted">Everything you need to get online and start generating leads</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 reveal reveal-delay-100">
              {/* Included */}
              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-5">
                <h3 className="text-white font-display font-bold text-sm uppercase mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-brand-accent" />
                  </div>
                  Included in Express Build
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { text: '4 core pages + 1 optional', highlight: true },
                    { text: 'Website copy written for you' },
                    { text: 'Mobile-first, responsive design' },
                    { text: 'Hosting, security & SSL' },
                    { text: 'Contact form to your inbox' },
                    { text: 'Basic local SEO setup' },
                    { text: 'Ongoing hosting & maintenance' },
                    { text: 'Small updates on request' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className={item.highlight ? 'text-white font-medium' : 'text-brand-muted'}>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-brand-border/30">
                  <p className="text-brand-accent text-xs font-medium">
                    You never need to log in or manage the site yourself.
                  </p>
                </div>
              </div>

              {/* Not Included */}
              <div className="bg-brand-surface/10 border border-brand-border/20 rounded-xl p-5">
                <h3 className="text-brand-muted font-display font-bold text-sm uppercase mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-surface/30 rounded-full flex items-center justify-center">
                    <X size={14} className="text-brand-muted/60" />
                  </div>
                  Not Part of Express Build
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Custom design concepts or mood boards',
                    'Unlimited revisions',
                    'E-commerce or online payments',
                    'Booking or scheduling systems',
                    'More than 5 pages',
                    'Mid-build structural changes',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted/60">
                      <X size={14} className="text-brand-muted/40 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-brand-border/20">
                  <p className="text-brand-muted/60 text-xs">
                    Need these features? We can create a <a href="/enquire" className="text-brand-accent hover:underline">custom plan</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domains */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                <span className="text-brand-accent">Domains</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-100">
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Globe size={24} className="text-brand-accent flex-shrink-0" />
                  <div>
                    <p className="text-brand-muted text-base leading-relaxed mb-4">
                      If you already own a domain, we'll connect it and handle all technical setup.
                    </p>
                    <p className="text-brand-muted text-base leading-relaxed">
                      If you don't have a domain yet, we'll help you choose one and guide you through purchasing it in your own name.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-border/30">
                  <p className="text-brand-accent text-sm font-semibold mb-3">Important:</p>
                  <ul className="space-y-2 text-brand-muted text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0" />
                      <span>You own your domain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0" />
                      <span>Domain fees are paid directly by you</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0" />
                      <span>We manage all technical configuration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-6 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                <span className="text-brand-accent">Pricing</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-100">
              <div className="bg-brand-surface/30 border border-brand-accent/30 rounded-2xl p-6 md:p-8 text-center">
                <p className="text-5xl md:text-6xl font-display font-black text-white mb-2">
                  $399 <span className="text-brand-accent">+</span> $99<span className="text-2xl md:text-3xl text-brand-muted">/mo</span>
                </p>
                <p className="text-brand-muted text-lg mb-5">Setup fee + monthly management</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-brand-muted">
                    <CheckCircle size={16} className="text-brand-accent" />
                    <span>Fixed scope</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-muted">
                    <CheckCircle size={16} className="text-brand-accent" />
                    <span>Fixed timeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-muted">
                    <CheckCircle size={16} className="text-brand-accent" />
                    <span>No hidden fees</span>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-brand-border/30">
                  <p className="text-brand-muted text-sm">
                    After 24 months, your plan moves to month-to-month hosting and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Is This Right for You? */}
        <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Is This Right <span className="text-brand-accent">for You?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 reveal reveal-delay-100">
              {/* Good Fit */}
              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={18} className="text-brand-accent" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white uppercase">Good Fit</h3>
                </div>
                <p className="text-brand-muted text-sm mb-3">This is a good fit if you:</p>
                <ul className="space-y-2.5">
                  {[
                    'Want a website quickly',
                    "Don't want to manage tech or design",
                    'Care more about enquiries than endless options'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not the Right Fit */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 bg-brand-muted/10 rounded-full flex items-center justify-center">
                    <AlertCircle size={18} className="text-brand-muted" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white uppercase">Not the Right Fit</h3>
                </div>
                <p className="text-brand-muted text-sm mb-3">It's not the right fit if you want:</p>
                <ul className="space-y-2.5">
                  {[
                    'Complex functionality',
                    'Ongoing design collaboration',
                    'A DIY platform'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X size={14} className="text-brand-muted/60 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3 uppercase">
                Common <span className="text-brand-accent">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'What if I need more than 5 pages?',
                  a: "If your project needs more pages or features, we'll recommend a custom build with a tailored quote. The Express Build is designed for straightforward trade websites."
                },
                {
                  q: 'Can I make changes after launch?',
                  a: "Yes. Small text and image updates are included in your monthly plan. Just email or text us the changes and we'll action them, usually within 24 hours."
                },
                {
                  q: 'What happens after 24 months?',
                  a: 'Your plan moves to month-to-month at a reduced hosting and support rate. You can also take your site elsewhere if you prefer - no lock-in.'
                },
                {
                  q: 'Do I get a say in the design?',
                  a: "The Express Build uses our proven trade website template. You can request minor tweaks during review, but this isn't a design collaboration. If you want full creative control, a custom build is a better fit."
                },
                {
                  q: 'What if I already have a website?',
                  a: "No problem. We'll build your new site and handle the switchover. Your old site stays live until the new one is ready to launch."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="reveal bg-brand-surface/20 border border-brand-border/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-accent/40"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-brand-accent flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-brand-muted text-sm leading-relaxed px-5 pb-5">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section id="get-started" className="pt-4 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 mb-4">
          <div className="max-w-2xl mx-auto">
            <div className="reveal bg-gradient-to-br from-brand-surface/50 to-brand-surface/20 border border-brand-border/30 rounded-2xl p-6 sm:p-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase">
                  Ready to Get <span className="text-brand-accent">Started?</span>
                </h2>
                <p className="text-brand-muted text-sm sm:text-base mb-6 max-w-xl mx-auto">
                  Start your Tradie Express Build today and we'll take it from there.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Get Started - $399 Setup
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="mailto:hello@verdantdigital.com.au"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-3 px-6 rounded-lg transition-all text-sm"
                  >
                    Email Us First
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TradieExpressBuildPage;
