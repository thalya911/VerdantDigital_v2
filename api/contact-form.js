import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      business,
      website,
      helpWith,
      message,
      // Additional fields from specialized forms
      preferredTime,
      source,
      teamSize,
      additionalInfo
    } = req.body;

    // Validate required fields (lastName is optional for some forms)
    if (!firstName || !email || !phone || !preferredContact) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const fullName = lastName ? `${firstName} ${lastName}` : firstName;

    // Build notification email HTML for internal team
    const notificationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #0D0D0F; margin: 0; padding: 0; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #0D0D0F 0%, #1a1a1c 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
          .logo { font-size: 24px; font-weight: 800; color: #00FF9D; margin-bottom: 8px; letter-spacing: 0.5px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; }
          .content { padding: 32px 24px; }
          .intro { font-size: 16px; color: #2c2c2c; margin-bottom: 24px; }
          .field { margin: 16px 0; padding: 16px; background: #f9fafb; border-left: 4px solid #00FF9D; border-radius: 4px; }
          .label { font-weight: 700; color: #4a5568; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; display: block; }
          .value { color: #1a202c; font-size: 15px; line-height: 1.5; }
          .cta { text-align: center; margin: 32px 0; }
          .button { display: inline-block; background: #00FF9D; color: #0D0D0F; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; letter-spacing: 0.5px; }
          .footer { background: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 4px 0; color: #718096; font-size: 13px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">VERDANT DIGITAL</div>
            <h1>New Enquiry Received</h1>
          </div>
          <div class="content">
            <p class="intro">You've received a new contact form submission from your website.</p>

            <div class="field">
              <span class="label">Contact Name</span>
              <div class="value">${fullName}</div>
            </div>
            <div class="field">
              <span class="label">Email Address</span>
              <div class="value"><a href="mailto:${email}" style="color: #00FF9D; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <span class="label">Phone Number</span>
              <div class="value"><a href="tel:${phone}" style="color: #00FF9D; text-decoration: none;">${phone}</a></div>
            </div>
            <div class="field">
              <span class="label">Preferred Contact</span>
              <div class="value">${preferredContact}</div>
            </div>
            ${business ? `
            <div class="field">
              <span class="label">Business Name</span>
              <div class="value">${business}</div>
            </div>
            ` : ''}
            ${website ? `
            <div class="field">
              <span class="label">Current Website</span>
              <div class="value"><a href="${website.startsWith('http') ? website : 'https://' + website}" style="color: #00FF9D; text-decoration: none;" target="_blank">${website}</a></div>
            </div>
            ` : ''}
            ${helpWith ? `
            <div class="field">
              <span class="label">Enquiring About</span>
              <div class="value">${helpWith}</div>
            </div>
            ` : ''}
            ${preferredTime ? `
            <div class="field">
              <span class="label">Preferred Contact Time</span>
              <div class="value">${preferredTime}</div>
            </div>
            ` : ''}
            ${teamSize ? `
            <div class="field">
              <span class="label">Team Size</span>
              <div class="value">${teamSize}</div>
            </div>
            ` : ''}
            ${source ? `
            <div class="field">
              <span class="label">Enquiry Source</span>
              <div class="value">${source}</div>
            </div>
            ` : ''}
            ${message ? `
            <div class="field">
              <span class="label">Message / Details</span>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            ${additionalInfo ? `
            <div class="field">
              <span class="label">Additional Information</span>
              <div class="value">${additionalInfo.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}

            <div class="cta">
              <a href="mailto:${email}" class="button">REPLY TO ${firstName.toUpperCase()}</a>
            </div>
          </div>
          <div class="footer">
            <p><strong>Verdant Digital</strong></p>
            <p>hello@verdantdigital.com.au</p>
            <p style="margin-top: 16px; font-size: 11px;">This is an automated notification from your website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Build confirmation email for customer
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #0D0D0F; margin: 0; padding: 0; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #0D0D0F 0%, #1a1a1c 100%); color: #ffffff; padding: 40px 24px; text-align: center; }
          .logo { font-size: 28px; font-weight: 800; color: #00FF9D; margin-bottom: 16px; letter-spacing: 0.5px; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; line-height: 1.3; }
          .content { padding: 40px 32px; }
          .greeting { font-size: 18px; color: #2c2c2c; margin-bottom: 24px; font-weight: 600; }
          .message { font-size: 15px; color: #4a5568; line-height: 1.8; margin-bottom: 16px; }
          .highlight { background: #f0fdf4; border-left: 4px solid #00FF9D; padding: 20px; margin: 24px 0; border-radius: 4px; }
          .highlight p { margin: 0; color: #166534; font-size: 14px; }
          .footer { background: #f9fafb; padding: 32px 24px; text-align: center; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 8px 0; color: #718096; font-size: 13px; }
          .social { margin-top: 16px; }
          .social a { color: #00FF9D; text-decoration: none; margin: 0 8px; font-size: 13px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">VERDANT DIGITAL</div>
            <h1>Thanks for Getting in Touch</h1>
          </div>
          <div class="content">
            <p class="greeting">Hi ${firstName},</p>

            <p class="message">We've received your enquiry and will get back to you within 24 hours.</p>

            <p class="message">We're looking forward to learning more about your project and how we can help.</p>

            <div class="highlight">
              <p><strong>What happens next?</strong></p>
              <p style="margin-top: 8px;">We'll review your enquiry and reach out via ${preferredContact.toLowerCase()} to discuss your needs and answer any questions you have.</p>
            </div>

            <p class="message">In the meantime, if you have any urgent questions, feel free to email us directly at <a href="mailto:hello@verdantdigital.com.au" style="color: #00FF9D; text-decoration: none;">hello@verdantdigital.com.au</a></p>

            <p class="message" style="margin-top: 32px;">Thanks,<br><strong>The Verdant Digital Team</strong></p>
          </div>
          <div class="footer">
            <p><strong>Verdant Digital</strong></p>
            <p>Building digital solutions that work.</p>
            <p style="margin-top: 16px;"><a href="mailto:hello@verdantdigital.com.au" style="color: #00FF9D; text-decoration: none;">hello@verdantdigital.com.au</a></p>
            <div class="social">
              <a href="https://www.instagram.com/verdant.digital/">Instagram</a> •
              <a href="https://www.facebook.com/share/1Aom3Vwm4c/">Facebook</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send notification email to internal team
    await resend.emails.send({
      from: 'Verdant Digital <noreply@verdantdigital.com.au>',
      to: 'thalya@verdantlabs.com.au',
      replyTo: email,
      subject: `${helpWith ? `[${helpWith}] ` : ''}New Enquiry: ${fullName}${business ? ` (${business})` : ''}`,
      html: notificationHtml,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'Verdant Digital <hello@verdantdigital.com.au>',
      to: email,
      replyTo: 'hello@verdantdigital.com.au',
      subject: `We've received your enquiry - Verdant Digital`,
      html: confirmationHtml,
    });

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      error: 'Failed to send contact form',
      details: error.message
    });
  }
}
