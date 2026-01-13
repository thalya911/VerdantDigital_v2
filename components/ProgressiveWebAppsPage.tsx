import React from 'react';
import { ArrowRight, Globe, Zap, Smartphone, Monitor, Search, Building2, Users, Rocket, Layout, Cpu, Lock, WifiOff } from 'lucide-react';

const pwaAdvantages = [
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Skip the 2-week App Store approval process. Push updates to your users instantly, the moment the code is written."
  },
  {
    icon: Monitor,
    title: "Universal Access",
    description: "Your app works on an iPhone, a Samsung tablet, and a Windows laptop from a single URL."
  },
  {
    icon: Smartphone,
    title: "Native Feel",
    description: "Full-screen mode, home screen icons, and smooth transitions that make users forget they are in a browser."
  },
  {
    icon: Search,
    title: "SEO Discoverability",
    description: "Unlike App Store apps, your PWA can be found via Google, driving organic traffic directly into your app."
  }
];

const useCases = [
  {
    icon: Building2,
    title: "Internal Operations",
    description: "Build custom dashboards for field teams that work in 'Dead Zones.' Data is saved locally and synced to the cloud once a signal is found."
  },
  {
    icon: Users,
    title: "Customer Loyalty Portals",
    description: "Give your repeat customers a 'Home Screen' experience for bookings, orders, and support without the barrier of a 100MB download."
  },
  {
    icon: Rocket,
    title: "SaaS MVPs",
    description: "Launch your software product faster. Reach 100% of your market with 50% of the development cost."
  }
];

const ProgressiveWebAppsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Globe size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Progressive Web Platforms</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              App Power.{' '}
              <span className="text-brand-accent">Browser Reach.</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              High-performance Progressive Web Apps (PWAs) that deliver a native mobile experience without the friction of an App Store. One codebase for iOS, Android, and Desktop.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Check Compatibility for My Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* The PWA Advantage */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Why Choose a{' '}
                <span className="text-brand-accent">Progressive Platform?</span>
              </h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                The business benefits, not just the features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pwaAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div
                    key={index}
                    className="reveal group bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                          {advantage.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Engineering for{' '}
                <span className="text-brand-accent">Specific Outcomes</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="p-6 bg-brand-surface/20 border border-brand-border/30 rounded-xl hover:border-brand-accent/30 transition-colors">
                    <div className="w-11 h-11 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
                Investment{' '}
                <span className="text-brand-accent">One Build. Every Device.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-100">
              {/* PWA Foundation */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">PWA Foundation</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $12,500 <span className="text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Core Web Application</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Layout size={14} className="text-brand-accent" />
                  <span>Home-screen installation</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">
                  A core web application with home-screen installation, offline caching for key pages, and a responsive UI.
                </p>
              </div>

              {/* Advanced Web Platform */}
              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all relative">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-brand-accent text-brand-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most Common
                </div>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">Advanced Web Platform</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  From $22,000 <span className="text-sm font-normal text-brand-muted">AUD</span>
                </p>
                <p className="text-brand-muted text-sm mb-4">Full-Scale Platform</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <WifiOff size={14} className="text-brand-accent" />
                  <span>Offline data-sync</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">
                  Full-scale platforms with push notifications, complex database integrations, user authentication, and offline data-sync.
                </p>
              </div>

              {/* Bridge Package */}
              <div className="bg-brand-surface/20 border border-brand-border/30 rounded-xl p-6 hover:border-brand-accent/50 transition-all">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">The "Bridge" Package</p>
                <p className="text-2xl font-display font-black text-white mb-1">
                  Custom Quote
                </p>
                <p className="text-brand-muted text-sm mb-4">Best of Both Worlds</p>
                <div className="flex items-center gap-2 text-sm text-brand-bone mb-4">
                  <Smartphone size={14} className="text-brand-accent" />
                  <span>PWA + App Store</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">
                  We build your PWA and then "wrap" it for the App Stores, giving you the best of both worlds.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 reveal reveal-delay-200">
              <a
                href="/enquire"
                className="group inline-flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors"
              >
                Need a custom scope? Let's talk
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* The Process - The Verdant Way */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                The Verdant <span className="text-brand-accent">Way</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  step: '01',
                  icon: Layout,
                  title: 'Architecture',
                  desc: "We map out the data structures and determine which features need to work offline."
                },
                {
                  step: '02',
                  icon: Zap,
                  title: 'Performance Design',
                  desc: "We design for 'Instant Loading,' optimising every asset for speed."
                },
                {
                  step: '03',
                  icon: Cpu,
                  title: 'Service Worker Engineering',
                  desc: "The 'magic' layer that handles offline sync and background tasks."
                },
                {
                  step: '04',
                  icon: Lock,
                  title: 'Security & SSL',
                  desc: "Hardening the app to ensure user data is protected to banking standards."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
                        <Icon size={16} className="text-brand-accent" />
                      </div>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase">
                Common <span className="text-brand-accent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  q: 'Are there limits to what a Web App can do?',
                  a: "Web apps are incredibly powerful for 95% of business needs. We only recommend Native Apps if you need heavy 3D processing (gaming) or deep access to hardware like the Apple Watch."
                },
                {
                  q: "How do users 'Install' it?",
                  a: "We trigger a simple 'Add to Home Screen' prompt. No searching the App Store, no forgotten passwords, no friction. Just one tap and your icon is on their phone."
                },
                {
                  q: 'What about push notifications on iPhone?',
                  a: "Apple now supports Web Push Notifications as of iOS 16.4. We can now reach your iPhone users just like a 'normal' app."
                },
                {
                  q: 'Who owns the code?',
                  a: "You do. Once the project is complete and paid for, you own 100% of the intellectual property and source code. No lock-in, no surprises."
                }
              ].map((faq, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Ready to <span className="text-brand-accent">Build?</span>
            </h2>
            <p className="text-brand-muted mb-8 text-lg">
              Tell us what you're trying to build. We'll tell you honestly if a PWA is the right approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Check Compatibility for My Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://calendly.com/verdantdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-brand-border hover:border-brand-accent text-white hover:text-brand-accent font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgressiveWebAppsPage;
