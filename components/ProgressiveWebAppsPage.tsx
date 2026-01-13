import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const ProgressiveWebAppsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Globe size={16} className="text-brand-accent" />
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Web Apps</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
              Apps Without the{' '}
              <span className="text-brand-accent">App Store</span>
            </h1>

            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Web apps that work like mobile apps. Install to home screens, work offline, send notifications. No app store approval, no separate iOS and Android builds. One app, every device.
            </p>

            <a
              href="/enquire"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
            >
              Tell Us What You Need
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3 uppercase text-center reveal">
              How It <span className="text-brand-accent">Works</span>
            </h2>
            <p className="text-brand-muted text-center mb-10 reveal">
              The best of websites and mobile apps, combined
            </p>

            <div className="space-y-4 reveal reveal-delay-100">
              {[
                {
                  title: 'Install it like an app',
                  desc: 'Users add it to their home screen with one tap. Opens full-screen, no browser bar. Feels like a real app.'
                },
                {
                  title: 'Works without internet',
                  desc: 'The app loads even when offline. Users can keep working, and everything syncs when they reconnect.'
                },
                {
                  title: 'Push notifications',
                  desc: 'Send alerts to bring users back. New orders, messages, updates, whatever you need.'
                },
                {
                  title: 'One codebase, every device',
                  desc: 'No separate iOS and Android versions. One app that works on phones, tablets, and desktop.'
                }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Good For */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3 uppercase text-center reveal">
              Good <span className="text-brand-accent">For</span>
            </h2>
            <p className="text-brand-muted text-center mb-10 reveal">
              When a web app makes more sense than a native app
            </p>

            <div className="space-y-4 reveal reveal-delay-200">
              {[
                {
                  title: 'Field teams and remote workers',
                  desc: 'Job tracking, timesheets, forms that work in areas with bad signal. Data syncs when they get back online.'
                },
                {
                  title: 'E-commerce and ordering',
                  desc: 'Fast browsing, saved carts, checkout that works even on slow connections.'
                },
                {
                  title: 'Booking and scheduling',
                  desc: 'Availability calendars, instant confirmations, reminders via push notification.'
                }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase text-center reveal">
              Our <span className="text-brand-accent">Process</span>
            </h2>
            <p className="text-brand-muted text-center mb-8 reveal">From idea to installed app</p>

            <div className="space-y-3 reveal reveal-delay-200">
              {[
                { step: '01', title: 'Plan', desc: 'We figure out what the app needs to do, especially offline' },
                { step: '02', title: 'Design', desc: 'App-like interface that works on any screen size' },
                { step: '03', title: 'Build', desc: 'We build the app and make sure offline mode actually works' },
                { step: '04', title: 'Launch', desc: 'Deploy, test on real devices, set up notifications' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-brand-surface/20 border border-brand-border/30 rounded-lg hover:border-brand-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white uppercase">{item.title}</h3>
                    <p className="text-brand-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-8 uppercase text-center reveal">
              Common <span className="text-brand-accent">Questions</span>
            </h2>

            <div className="space-y-4 reveal reveal-delay-300">
              {[
                {
                  q: 'What is the difference between this and a normal app?',
                  a: 'A web app runs in the browser but looks and feels like a mobile app. It installs to your home screen, works offline, and sends notifications. The difference: no app store approval needed, and one version works on every device.'
                },
                {
                  q: 'Does it work on iPhone?',
                  a: 'Yes. iPhones support web apps including home screen installation and offline mode. Push notifications on iPhone have some limitations, but the core features work.'
                },
                {
                  q: 'When should I choose this over a native app?',
                  a: 'Web apps are great when you want one codebase for all devices, when app store approval is a hassle, or when your users access from many device types. For graphics-heavy apps or deep hardware access, native is still better.'
                }
              ].map((faq, i) => (
                <div key={i} className="p-5 bg-brand-surface/20 border border-brand-border/30 rounded-lg">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Not Sure If This Is <span className="text-brand-accent">Right?</span>
            </h2>
            <p className="text-brand-muted mb-8">
              Tell us what you are trying to build. We will tell you honestly if a web app is the right approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/enquire"
                className="group inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all text-sm"
              >
                Describe Your Project
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
