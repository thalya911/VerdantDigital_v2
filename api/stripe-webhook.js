import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET);
const resend = new Resend(process.env.RESEND_API_KEY);

// Disable body parsing for webhook verification
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to get raw body
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let buffer = [];
    req.on('data', (chunk) => buffer.push(chunk));
    req.on('end', () => resolve(Buffer.concat(buffer)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Get raw body for signature verification
    const rawBody = await getRawBody(req);

    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: 'Webhook signature verification failed' });
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;

        // Send receipt email via Resend
        await sendReceiptEmail(session);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log('Payment succeeded:', paymentIntent.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}

async function sendReceiptEmail(session) {
  const { customer_email, metadata, amount_total, currency } = session;

  // Format amount (Stripe uses smallest currency unit, e.g., cents)
  const amount = (amount_total / 100).toFixed(2);
  const currencyFormatted = currency.toUpperCase();

  // Extract metadata for email
  const {
    product = 'Express Build Setup',
    name = '',
    business = '',
    phone = '',
    location = '',
    trade = '',
    currentWebsite = '',
    goals = '',
    advertising = 'false',
  } = metadata || {};

  // Get first name for personalization
  const firstName = name ? name.split(' ')[0] : 'there';

  // Build intake form link with prefilled data
  const intakeFormLink = `https://www.verdantdigital.com.au/intake?email=${encodeURIComponent(customer_email || '')}&name=${encodeURIComponent(name)}&session_id=${session.id}`;

  // Build CUSTOMER confirmation email HTML
  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: 'Aptos', Calibri, 'Segoe UI', sans-serif; font-size: 11pt; line-height: 1.7; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0D0D0F 0%, #1a1a1c 100%); color: #ffffff; padding: 32px; }
        .header-content { display: flex; align-items: center; justify-content: space-between; }
        .logo { font-size: 20px; font-weight: 800; color: #00FF9D; letter-spacing: 0.5px; margin: 0; }
        .header-title { text-align: right; }
        .header-title h1 { margin: 0; font-size: 18px; font-weight: 700; color: #ffffff; }
        .header-title p { margin: 4px 0 0 0; font-size: 10pt; color: #a0a0a0; }
        .content { padding: 40px 32px; font-size: 11pt; }
        .greeting { font-size: 11pt; color: #1a1a1a; margin-bottom: 24px; }
        .message { font-size: 11pt; color: #4a5568; margin-bottom: 16px; }
        .highlight-box { background: #f0fdf4; border-left: 4px solid #00FF9D; padding: 20px; margin: 28px 0; border-radius: 4px; }
        .highlight-box p { margin: 0 0 8px 0; color: #166534; font-size: 11pt; }
        .highlight-box strong { color: #0D0D0F; }
        .cta-button { display: inline-block; background: #00FF9D; color: #0D0D0F !important; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 11pt; margin: 24px 0; }
        .steps { background: #f9fafb; border-radius: 8px; padding: 24px; margin: 24px 0; }
        .steps p { margin: 8px 0; font-size: 11pt; color: #4a5568; }
        .steps strong { color: #1a1a1a; }
        .reassurance { font-size: 11pt; color: #4a5568; margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0; }
        .signature { margin-top: 32px; font-size: 11pt; color: #4a5568; }
        .signature strong { color: #1a1a1a; display: block; margin-bottom: 4px; }
        .footer { background: #0D0D0F; padding: 32px; text-align: center; }
        .footer p { margin: 8px 0; color: #718096; font-size: 10pt; }
        .footer a { color: #00FF9D; text-decoration: none; }
        .tagline { color: #a0a0a0; font-size: 10pt; font-style: italic; margin-top: 16px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="left" valign="middle">
                <div class="logo">VERDANT DIGITAL</div>
              </td>
              <td align="right" valign="middle">
                <div class="header-title">
                  <h1>Tradie Express Build</h1>
                  <p>Your build is underway</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="content">
          <p class="greeting">Hi ${firstName},</p>

          <p class="message">Thanks for getting started with Verdant Digital! Your Tradie Express Build is officially underway.</p>

          <p class="message">We build your website for you, end-to-end. No logins or technical setup on your side.</p>

          <div class="highlight-box">
            <p><strong>Next step (important):</strong></p>
            <p>Please complete the short intake form below. This is all we need to begin your build.</p>
          </div>

          <div style="text-align: center;">
            <a href="${intakeFormLink}" class="cta-button">COMPLETE INTAKE FORM</a>
          </div>

          <div class="steps">
            <p><strong>Once the form is submitted:</strong></p>
            <p>✓ We lock the scope</p>
            <p>✓ Start the build immediately</p>
            <p>✓ Send your site through for final review before launch</p>
          </div>

          <p class="reassurance">You don't need to organise anything else — we'll take it from here.</p>

          <p class="message">If you have any questions, you can reply directly to this email.</p>

          <div class="signature">
            <strong>Warmly,</strong>
            <strong>Thalya</strong>
            Verdant Digital<br>
            <a href="mailto:hello@verdantdigital.com.au" style="color: #00FF9D;">hello@verdantdigital.com.au</a>
          </div>
        </div>
        <div class="footer">
          <p><strong style="color: #00FF9D;">VERDANT DIGITAL</strong></p>
          <p class="tagline">Design-led websites, custom applications & performance marketing<br>engineered to grow your business.</p>
          <p style="margin-top: 16px;"><a href="https://www.verdantdigital.com.au">verdantdigital.com.au</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Build INTERNAL receipt email HTML
  const internalEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0D0D0F; color: #00FF9D; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .receipt-item { margin: 10px 0; padding: 10px; background: white; border-left: 3px solid #00FF9D; }
        .label { font-weight: bold; color: #555; }
        .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Payment Receipt</h1>
          <p>New Express Build Payment!</p>
        </div>
        <div class="content">
          <h2>Order Details</h2>
          <div class="receipt-item">
            <p><span class="label">Product:</span> ${product}</p>
            <p><span class="label">Amount Paid:</span> $${amount} ${currencyFormatted}</p>
            <p><span class="label">Customer Email:</span> ${customer_email || 'Not provided'}</p>
            <p><span class="label">Session ID:</span> ${session.id}</p>
          </div>

          ${name ? `
          <h2>Customer Information</h2>
          <div class="receipt-item">
            ${name ? `<p><span class="label">Name:</span> ${name}</p>` : ''}
            ${business ? `<p><span class="label">Business:</span> ${business}</p>` : ''}
            ${phone ? `<p><span class="label">Phone:</span> ${phone}</p>` : ''}
            ${location ? `<p><span class="label">Location:</span> ${location}</p>` : ''}
            ${trade ? `<p><span class="label">Trade:</span> ${trade}</p>` : ''}
            ${currentWebsite ? `<p><span class="label">Current Website:</span> ${currentWebsite}</p>` : ''}
            ${goals ? `<p><span class="label">Goals:</span> ${goals}</p>` : ''}
            ${advertising === 'true' ? `<p><span class="label">Advertising Add-on:</span> Interested</p>` : ''}
          </div>
          ` : ''}

          <h2>Intake Form Link</h2>
          <div class="receipt-item">
            <p><a href="${intakeFormLink}" style="color: #00FF9D;">${intakeFormLink}</a></p>
          </div>
        </div>
        <div class="footer">
          <p>Verdant Digital | hello@verdantdigital.com.au</p>
          <p>This is an automated receipt for internal records.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send confirmation email to CUSTOMER
    if (customer_email) {
      await resend.emails.send({
        from: 'Thalya from Verdant Digital <hello@verdantdigital.com.au>',
        to: customer_email,
        replyTo: 'hello@verdantdigital.com.au',
        subject: `Your Express Build is underway - Next step inside`,
        html: customerEmailHtml,
      });
      console.log('Customer confirmation email sent to:', customer_email);
    }

    // Send internal receipt to team
    await resend.emails.send({
      from: 'Verdant Digital <noreply@verdantdigital.com.au>',
      to: 'thalya@verdantlabs.com.au',
      subject: `💰 New Payment - ${product} - $${amount} ${currencyFormatted} - ${name || customer_email}`,
      html: internalEmailHtml,
    });

    console.log('Internal receipt email sent to thalya@verdantlabs.com.au');
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}
