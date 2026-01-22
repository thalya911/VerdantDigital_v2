import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { mode, customerEmail, metadata, embedded } = req.body;

    // Get the origin from request headers
    const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, '') || 'http://localhost:3000';

    let sessionConfig = {
      payment_method_types: ['card'],
      mode: mode,
      customer_email: customerEmail,
      allow_promotion_codes: true, // Allow customers to enter coupon codes at checkout
      metadata: {
        ...metadata,
        receipt_email: 'thalya@verdantlabs.com.au', // Always send receipts here
      },
    };

    // Use embedded checkout if requested
    if (embedded) {
      sessionConfig.ui_mode = 'embedded';
      sessionConfig.return_url = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
    } else {
      sessionConfig.success_url = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
      sessionConfig.cancel_url = `${origin}/tradie`;
    }

    if (mode === 'subscription') {
      // Tradie Express Build: $399 upfront + $99/month for 24 months
      // Customer pays $399 today, then $99/month starting in 30 days (first month free)
      sessionConfig.line_items = [
        {
          // One-time setup fee: $399
          price: process.env.STRIPE_SETUP_FEE_PRICE_ID,
          quantity: 1,
        },
        {
          // Recurring monthly fee: $99/month for 24 months
          price: process.env.STRIPE_RECURRING_PRICE_ID,
          quantity: 1,
        },
      ];
      sessionConfig.subscription_data = {
        description: '24-month agreement • First month free',
        metadata: {
          build_type: 'tradie_express',
          delivery_timeline: '7_days',
          included_pages: '5',
          managed_service: 'true',
          plan_duration_months: '24',
          receipt_email: 'thalya@verdantlabs.com.au',
          ...metadata,
        },
        // Trial period delays the first $99 payment by 30 days (first month free)
        trial_period_days: 30,
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({
      sessionId: session.id,
      url: session.url, // Return the checkout URL for direct redirect
      clientSecret: session.client_secret, // For embedded checkout
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ error: error.message });
  }
}
