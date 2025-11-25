import React from 'react';

const TermsAndPrivacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-bone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-tight">Terms of Use & Privacy Policy</h1>
        <p className="text-brand-muted mb-2">Verdant Digital Website</p>
        <p className="text-sm text-brand-muted mb-12">Last Updated: November 2025</p>

        <div className="space-y-8 text-sm leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p className="mb-3">
              Welcome to Verdant Digital. This website is operated by Verdant Labs Pty Ltd (ABN: 62 690 480 516 7) ("Verdant Digital", "we", "us", "our"). By accessing and using this website, you agree to be bound by these Terms of Use and Privacy Policy.
            </p>
            <p>
              If you do not agree with these terms, please do not use our website. For specific service agreements (such as our Express Build service), separate terms and conditions apply.
            </p>
          </section>

          {/* 2. Website Terms of Use */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Website Terms of Use</h2>
            <p className="mb-2"><strong>2.1 Acceptable Use:</strong> You may use this website for lawful purposes only. You must not use our website in any way that breaches applicable laws or regulations, or in any way that is unlawful or fraudulent.</p>
            <p className="mb-2"><strong>2.2 Intellectual Property:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of Verdant Digital or our licensors and is protected by Australian and international intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.</p>
            <p className="mb-2"><strong>2.3 Links to Third-Party Websites:</strong> Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites.</p>
            <p className="mb-2"><strong>2.4 Changes to Website:</strong> We reserve the right to modify, suspend, or discontinue any part of our website at any time without notice.</p>
          </section>

          {/* 3. Privacy Policy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Privacy Policy</h2>
            <p className="mb-2"><strong>3.1 Information We Collect:</strong> We collect information that you provide directly to us through contact forms, email communications, or when engaging our services. This may include your name, email address, phone number, business name, and any other information you choose to provide.</p>
            <p className="mb-2"><strong>3.2 Automatic Information:</strong> We may automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and time spent on our site. We use cookies and similar technologies to collect this information.</p>
            <p className="mb-2"><strong>3.3 How We Use Your Information:</strong> We use the information we collect to:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Respond to your enquiries and provide customer service</li>
                <li>Deliver and improve our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyse website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </p>
            <p className="mb-2"><strong>3.4 Information Sharing:</strong> We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations. We may also disclose information when required by law or to protect our rights.</p>
            <p className="mb-2"><strong>3.5 Data Security:</strong> We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
            <p className="mb-2"><strong>3.6 Data Retention:</strong> We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
            <p className="mb-2"><strong>3.7 Your Rights:</strong> Under the Australian Privacy Principles, you have the right to access, correct, and request deletion of your personal information. You may also object to certain processing activities or request restriction of processing. To exercise these rights, please contact us at hello@verdantdigital.com.au.</p>
          </section>

          {/* 4. Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Cookies and Tracking Technologies</h2>
            <p className="mb-2"><strong>4.1 What Are Cookies:</strong> Cookies are small text files stored on your device when you visit our website. We use cookies to improve your browsing experience, analyse site traffic, and personalise content.</p>
            <p className="mb-2"><strong>4.2 Types of Cookies We Use:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements</li>
              </ul>
            </p>
            <p className="mb-2"><strong>4.3 Managing Cookies:</strong> You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>
            <p className="mb-2"><strong>4.4 Google Analytics:</strong> We use Google Analytics to analyse website usage. Google Analytics uses cookies to collect information about how visitors use our site. This information is used to compile reports and help us improve our website. The information collected is anonymous and does not identify individual visitors.</p>
          </section>

          {/* 5. Marketing Communications */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Marketing Communications</h2>
            <p className="mb-2"><strong>5.1 Consent:</strong> We will only send you marketing communications if you have consented to receive them or if we have a legitimate business interest to do so.</p>
            <p className="mb-2"><strong>5.2 Opt-Out:</strong> You can opt out of receiving marketing communications at any time by clicking the unsubscribe link in any email we send, or by contacting us directly at hello@verdantdigital.com.au.</p>
            <p className="mb-2"><strong>5.3 Types of Communications:</strong> Marketing communications may include newsletters, service updates, promotional offers, and other information about our services that we think may interest you.</p>
          </section>

          {/* 6. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
            <p className="mb-2"><strong>6.1 Service Providers:</strong> We may use third-party service providers to help operate our website and deliver our services, including hosting providers, analytics services, email marketing platforms, and payment processors.</p>
            <p className="mb-2"><strong>6.2 Social Media:</strong> Our website may include social media features and widgets. These features may collect your IP address and which page you are visiting, and may set cookies to enable the feature to function properly. Your interactions with these features are governed by the privacy policies of the companies providing them.</p>
            <p className="mb-2"><strong>6.3 Payment Processing:</strong> We use Stripe for payment processing. When you make a payment, your payment information is processed directly by Stripe and is subject to Stripe's privacy policy and terms of service. We do not store your complete payment card details.</p>
          </section>

          {/* 7. Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and stored on servers located outside of Australia. By using our website and services, you consent to the transfer of your information to countries outside of Australia. We will take appropriate steps to ensure that your information receives an adequate level of protection in the jurisdictions in which we process it.
            </p>
          </section>

          {/* 9. Changes to This Policy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
            <p className="mb-2">
              We may update these Terms of Use and Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              Your continued use of our website after such changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* 10. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Limitation of Liability</h2>
            <p className="mb-2"><strong>10.1 Website Disclaimer:</strong> This website and all information, content, and materials provided are offered on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content.</p>
            <p className="mb-2"><strong>10.2 No Liability:</strong> To the maximum extent permitted by law, Verdant Digital will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use, arising from your access to or use of this website.</p>
            <p className="mb-2"><strong>10.3 Australian Consumer Law:</strong> Nothing in these terms excludes, restricts, or modifies any guarantee, warranty, term, or condition, right, or remedy implied or imposed by the Australian Consumer Law or any other applicable law that cannot lawfully be excluded, restricted, or modified.</p>
          </section>

          {/* 11. Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Governing Law and Jurisdiction</h2>
            <p className="mb-2"><strong>11.1 Governing Law:</strong> These Terms of Use and Privacy Policy are governed by the laws of Queensland, Australia.</p>
            <p className="mb-2"><strong>11.2 Jurisdiction:</strong> Any disputes arising from or relating to these terms or your use of our website will be subject to the exclusive jurisdiction of the courts of Queensland, Australia.</p>
          </section>

          {/* 12. Contact Information */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact Us</h2>
            <p className="mb-2">
              If you have any questions, concerns, or requests regarding these Terms of Use and Privacy Policy, or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-6 mt-4">
              <p className="mb-1"><strong>Business Name:</strong> Verdant Labs Pty Ltd</p>
              <p className="mb-1"><strong>ABN:</strong> 62 690 480 516 7</p>
              <p className="mb-1"><strong>Email:</strong> hello@verdantdigital.com.au</p>
              <p className="mb-1"><strong>Website:</strong> verdantdigital.com.au</p>
              <p className="mb-1"><strong>Location:</strong> Brisbane, Queensland, Australia</p>
            </div>
          </section>

          {/* Note about Express Build */}
          <section className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-bold text-brand-accent mb-2">Express Build Service</h3>
            <p className="text-sm">
              If you are entering into an Express Build service agreement with Verdant Digital, separate terms and conditions apply. Please refer to our <a href="/terms" className="text-brand-accent hover:underline font-semibold">Express Build Terms & Conditions</a> for specific service-related terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
