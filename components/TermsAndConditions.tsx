import React from 'react';
import { Download } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-bone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-tight">Terms & Conditions</h1>
        <p className="text-brand-muted mb-2">Express Build Service Agreement</p>
        <p className="text-sm text-brand-muted mb-6">Last Updated: November 2025</p>

        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-brand-accent hover:bg-white text-brand-black font-bold py-3 px-5 rounded-lg transition-all text-sm uppercase tracking-wide shadow-lg print:hidden mb-12"
        >
          <Download size={16} />
          Download PDF
        </button>

        <div className="space-y-8 text-sm leading-relaxed">
          {/* 1. Agreement Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement Overview</h2>
            <p className="mb-3">
              This Service Agreement ("Agreement") is entered into between Verdant Labs Pty Ltd (ABN: 62 690 480 516 7)
              ("Verdant Digital", "we", "us", "our") and the client ("you", "your", "Client") for the provision of
              the Express Build website service.
            </p>
            <p>
              By making payment for the Express Build service, you acknowledge that you have read, understood, and
              agree to be bound by these Terms and Conditions.
            </p>
          </section>

          {/* 2. Service Description */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Service Description</h2>
            <p className="mb-3">The Express Build service includes:</p>

            <div className="ml-4 mb-4">
              <p className="font-bold text-brand-accent mb-2">Initial Setup ($399 one-time fee):</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Five (5) page website including: Home, Services, About, Gallery, and Contact pages</li>
                <li>Contact and quote request forms</li>
                <li>Mobile-optimised responsive design</li>
                <li>Google-friendly structure and basic SEO setup</li>
                <li>Click-to-call buttons on all pages</li>
                <li>Photo gallery functionality</li>
                <li>Service area mapping for local visibility</li>
              </ul>
            </div>

            <div className="ml-4 mb-4">
              <p className="font-bold text-brand-accent mb-2">Ongoing Services ($99/month):</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Website hosting and domain management</li>
                <li>Security monitoring and updates</li>
                <li>Unlimited content updates and edits</li>
                <li>Mobile optimisation maintenance</li>
                <li>Monthly performance summary</li>
                <li>Priority support (responses within 24 hours on business days)</li>
              </ul>
            </div>
          </section>

          {/* 3. Payment Terms */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Payment Terms</h2>
            <p className="mb-2"><strong>3.1 Setup Fee:</strong> The $399 setup fee is payable upfront via Stripe and is non-refundable once work has commenced.</p>
            <p className="mb-2"><strong>3.2 Monthly Fee:</strong> The $99 monthly fee is charged automatically via direct debit or credit card on the same date each month. The first monthly fee is charged in the month following your website launch. For example, if your website goes live in December 2025, your first $99 monthly payment will be charged in January 2026, and your 24-month contract will end in January 2028.</p>
            <p className="mb-2"><strong>3.3 Failed Payments:</strong> If a monthly payment fails, we will attempt to contact you and retry payment. Services may be suspended after 14 days of non-payment.</p>
            <p className="mb-2"><strong>3.4 Price Changes:</strong> Monthly fees are fixed for the duration of the 24-month contract period. After the contract period, fees may be adjusted with 30 days' written notice.</p>
          </section>

          {/* 4. Debt Recovery and Non-Payment */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Debt Recovery and Non-Payment</h2>
            <p className="mb-2"><strong>4.1 Overdue Accounts:</strong> Accounts that remain unpaid for more than 30 days may be subject to debt recovery action.</p>
            <p className="mb-2"><strong>4.2 Third-Party Collection:</strong> We reserve the right to engage third-party debt collection agencies to recover outstanding amounts. You will be responsible for all reasonable costs associated with debt recovery, including but not limited to collection agency fees, legal fees, and administrative charges.</p>
            <p className="mb-2"><strong>4.3 Credit Reporting:</strong> We may report payment defaults and outstanding debts to credit reporting bureaus in accordance with the Privacy Act 1988 (Cth) and the Privacy (Credit Reporting) Code. This may negatively impact your credit rating and ability to obtain credit in the future.</p>
            <p className="mb-2"><strong>4.4 Interest on Overdue Amounts:</strong> Overdue amounts may accrue interest at a rate of 2% per month (or the maximum rate permitted by law, whichever is lower) from the due date until payment is received in full.</p>
            <p className="mb-2"><strong>4.5 Service Suspension:</strong> Services will be suspended if payment is more than 14 days overdue. Access to your website may be restricted until all outstanding amounts are paid in full.</p>
          </section>

          {/* 5. Contract Duration and Termination */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contract Duration and Termination</h2>
            <p className="mb-2"><strong>5.1 Initial Term:</strong> This Agreement commences upon payment of the setup fee. The 24-month minimum contract period begins from your first monthly payment (the month following your website launch) and continues for 24 consecutive months.</p>
            <p className="mb-2"><strong>5.2 Post-Contract Options:</strong> After the 24-month period, you may:</p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Continue on a month-to-month basis at $50/month (hosting and security only)</li>
              <li>Take your website files and transfer to another provider at no additional cost</li>
              <li>Terminate the service with 30 days' written notice</li>
            </ul>
            <p className="mb-2"><strong>5.3 Early Termination:</strong> If you wish to terminate this Agreement before the 24-month period, you may buy out the remaining contract balance. The buyout amount is calculated as the number of months remaining multiplied by $99, similar to a phone plan contract.</p>
            <p className="mb-2"><strong>5.4 Termination by Verdant Digital:</strong> We reserve the right to terminate this Agreement immediately if you breach these terms, engage in illegal activity, or use the service in a manner that damages our reputation or infrastructure.</p>
          </section>

          {/* 6. Project Timeline */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Project Timeline</h2>
            <p className="mb-2"><strong>6.1 Strategy Call:</strong> A strategy call will be scheduled within 24 business hours of payment (Monday-Friday, 9am-5pm AEST, excluding public holidays). Payments made outside business hours or on weekends/public holidays will be processed on the next business day.</p>
            <p className="mb-2"><strong>6.2 Build Commencement:</strong> Website build commences after receipt of payment and completion of the strategy call, whichever occurs last.</p>
            <p className="mb-2"><strong>6.3 Launch Timeline:</strong> Your website will typically be live within 7 calendar days of the strategy call (including weekends, but excluding public holidays), subject to timely provision of required content and feedback.</p>
            <p className="mb-2"><strong>6.4 Client Delays:</strong> The 7-day launch timeline assumes minimal adjustment requests and timely provision of content, feedback, and approvals. Delays caused by late provision of materials, multiple rounds of revisions, or delayed approvals may extend the launch timeline accordingly.</p>
          </section>

          {/* 7. Content and Materials */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Content and Materials</h2>
            <p className="mb-2"><strong>7.1 Client-Provided Content:</strong> You are responsible for providing or approving all text, images, logos, and other materials for your website.</p>
            <p className="mb-2"><strong>7.2 Content Creation:</strong> If you do not have suitable content, we can create website copy and source stock imagery at no additional cost. If you do not have photos at launch, we will use placeholder images until you provide your own, which can be swapped in at no extra charge. This service does not include logo design, branding materials, custom photography, or other creative content creation.</p>
            <p className="mb-2"><strong>7.3 Content Rights:</strong> You warrant that all content you provide does not infringe on any third-party rights and that you have the necessary permissions to use all materials.</p>
            <p className="mb-2"><strong>7.4 Content Liability:</strong> You are solely responsible for the accuracy, legality, and appropriateness of all content on your website.</p>
          </section>

          {/* 8. Website Management */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Website Management</h2>
            <p className="mb-2"><strong>8.1 Full Management Service:</strong> Verdant Digital builds, hosts, and manages all website changes. You do not have direct access to edit the website.</p>
            <p className="mb-2"><strong>8.2 Change Requests:</strong> To request changes, simply text or email us at hello@verdantdigital.com.au. Changes are typically actioned within 24 hours on business days.</p>
            <p className="mb-2"><strong>8.3 Unlimited Updates:</strong> Your monthly fee includes unlimited content updates (text, images, minor layout adjustments) at no additional charge, provided the scope and frequency of changes remain reasonable. We reserve the right to determine what constitutes reasonable use based on the time and complexity involved. Minor changes that take 10-20 minutes are expected and welcomed. However, excessive requests that require significant ongoing time commitment (for example, 20+ substantial changes per month requiring 30+ minutes each) may be deemed to exceed the value of the $99 monthly fee and could incur additional charges or be deferred to the following month.</p>
            <p className="mb-2"><strong>8.4 Major Changes:</strong> Significant structural changes, additional pages beyond the initial five, or new functionality may incur additional costs, which will be quoted before work commences.</p>
          </section>

          {/* 9. Domain and Hosting */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Domain and Hosting</h2>
            <p className="mb-2"><strong>9.1 Domain Transfer:</strong> If you have an existing domain, we can transfer it at no additional cost. If you prefer, we can build your site on a temporary domain first and switch it over once approved.</p>
            <p className="mb-2"><strong>9.2 New Domains:</strong> If you need a new domain registered, domain registration fees are separate and will be quoted.</p>
            <p className="mb-2"><strong>9.3 Domain Ownership:</strong> Domain registration remains in your name, though we manage the technical aspects during the contract period.</p>
            <p className="mb-2"><strong>9.4 Hosting:</strong> Your website is hosted on our managed infrastructure as part of your monthly fee.</p>
          </section>

          {/* 10. Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Intellectual Property</h2>
            <p className="mb-2"><strong>10.1 License During Contract:</strong> During the contract period, you are granted a non-exclusive, non-transferable license to use the website for your business purposes. Verdant Digital retains all ownership rights to the website codebase, design templates, custom code, and infrastructure.</p>
            <p className="mb-2"><strong>10.2 Transfer of Ownership:</strong> Upon completion of the 24-month contract period and payment of all outstanding fees in full, ownership of the website content, design, and custom code transfers to you. You may then take your website files and move to another hosting provider at no additional cost.</p>
            <p className="mb-2"><strong>10.3 Suspension for Non-Payment:</strong> If payments are not kept current, we reserve the right to suspend access to the website and withhold transfer of ownership until all outstanding amounts are paid in full.</p>
            <p className="mb-2"><strong>10.4 Third-Party Components:</strong> Some website components may utilize third-party libraries, frameworks, or tools subject to their own licenses. These remain the property of their respective owners.</p>
            <p className="mb-2"><strong>10.5 Your Content:</strong> You retain all rights to content you provide (text, images, logos, etc.). By providing content, you grant us a license to use it for the purposes of building, hosting, and maintaining your website.</p>
            <p className="mb-2"><strong>10.6 Verdant Digital Portfolio:</strong> We reserve the right to display your website in our portfolio and marketing materials unless you request otherwise in writing.</p>
          </section>

          {/* 11. Limitations and Exclusions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. What's Not Included</h2>
            <p className="mb-2">Unless specifically agreed in writing, the Express Build service does not include:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>More than five (5) pages</li>
              <li>E-commerce functionality or booking systems</li>
              <li>Custom calculators or advanced interactive features</li>
              <li>Paid advertising management (available as optional add-on)</li>
              <li>Logo design or branding services</li>
              <li>Domain registration fees</li>
              <li>Email hosting (can be arranged separately)</li>
              <li>Third-party software or plugin subscriptions</li>
            </ul>
            <p className="mt-3">We can quote for any additional features or services upon request.</p>
          </section>

          {/* 12. Support and Maintenance */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Support and Maintenance</h2>
            <p className="mb-2"><strong>12.1 Priority Support:</strong> We provide priority support with responses typically within 24 hours during Australian business hours (Monday-Friday, 9am-5pm AEST, excluding public holidays).</p>
            <p className="mb-2"><strong>12.2 Maintenance:</strong> We handle all technical maintenance, security updates, and performance optimisation as part of your monthly fee.</p>
            <p className="mb-2"><strong>12.3 Uptime:</strong> While we strive for 99.9% uptime, occasional maintenance or unforeseen issues may result in temporary downtime. We are not liable for losses incurred due to website downtime.</p>
          </section>

          {/* 13. Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Limitation of Liability</h2>
            <p className="mb-2"><strong>13.1 Service Limitation:</strong> Our total liability for any claim arising from this Agreement is limited to the total amount paid by you in the 12 months preceding the claim.</p>
            <p className="mb-2"><strong>13.2 Indirect Damages:</strong> We are not liable for any indirect, consequential, or incidental damages including loss of profits, data, or business opportunities.</p>
            <p className="mb-2"><strong>13.3 Third-Party Services:</strong> We are not responsible for failures or issues caused by third-party services, hosting providers, or internet service disruptions beyond our control.</p>
          </section>

          {/* 14. Privacy and Data */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. Privacy and Data Protection</h2>
            <p className="mb-2"><strong>14.1 Privacy Compliance:</strong> We comply with Australian Privacy Principles and handle all personal data in accordance with applicable privacy laws.</p>
            <p className="mb-2"><strong>14.2 Data Collection:</strong> Your website may collect visitor data through forms and analytics. You are responsible for having appropriate privacy policies and obtaining necessary consents.</p>
            <p className="mb-2"><strong>14.3 Backups:</strong> We maintain regular backups of your website as part of our service.</p>
            <p className="mb-2"><strong>14.4 Data Security:</strong> We implement industry-standard security practices for data storage and transmission. However, we are not responsible for compliance with industry-specific data regulations or requirements that apply to your particular business or sector (such as specific data storage location requirements, industry-specific encryption standards, or regulatory compliance frameworks). You are responsible for advising us in writing of any such specific requirements prior to commencement of work. Failure to disclose these requirements may result in additional costs to modify the infrastructure or service delivery to meet your compliance obligations.</p>
          </section>

          {/* 15. Dispute Resolution */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">15. Dispute Resolution</h2>
            <p className="mb-2"><strong>15.1 Good Faith:</strong> Both parties agree to attempt to resolve any disputes through good faith negotiation before pursuing legal action.</p>
            <p className="mb-2"><strong>15.2 Governing Law:</strong> This Agreement is governed by the laws of Queensland, Australia.</p>
            <p className="mb-2"><strong>15.3 Jurisdiction:</strong> Both parties submit to the exclusive jurisdiction of the courts of Queensland, Australia.</p>
          </section>

          {/* 16. General Terms */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">16. General Terms</h2>
            <p className="mb-2"><strong>16.1 Entire Agreement:</strong> This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements or understandings.</p>
            <p className="mb-2"><strong>16.2 Amendments:</strong> We may update these terms from time to time. Material changes will be communicated with 30 days' notice.</p>
            <p className="mb-2"><strong>16.3 Severability:</strong> If any provision of this Agreement is found to be unenforceable, the remaining provisions will continue in full force.</p>
            <p className="mb-2"><strong>16.4 Assignment:</strong> You may not assign this Agreement without our written consent. We may assign this Agreement to a related entity or successor.</p>
            <p className="mb-2"><strong>16.5 Force Majeure:</strong> Neither party is liable for delays or failures due to circumstances beyond their reasonable control.</p>
          </section>

          {/* 17. Acceptance */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">17. Acceptance</h2>
            <p className="mb-3">
              By proceeding with payment for the Express Build service, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p>
              If you have any questions about these terms, please contact us at hello@verdantdigital.com.au
              before making payment.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-brand-surface border border-brand-border rounded-lg p-6 mt-12">
            <h2 className="text-xl font-bold text-white mb-3">Contact Information</h2>
            <p className="mb-1"><strong>Business Name:</strong> Verdant Labs Pty Ltd</p>
            <p className="mb-1"><strong>ABN:</strong> 62 690 480 516 7</p>
            <p className="mb-1"><strong>Email:</strong> hello@verdantdigital.com.au</p>
            <p className="mb-1"><strong>Website:</strong> verdantdigital.com.au</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
