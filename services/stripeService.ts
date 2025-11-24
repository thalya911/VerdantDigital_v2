import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE || 'pk_test_your_key_here';

let stripePromise: ReturnType<typeof loadStripe>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

interface CreateCheckoutSessionParams {
  priceId?: string;
  mode: 'payment' | 'subscription' | 'setup';
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
}

export const createCheckoutSession = async (params: CreateCheckoutSessionParams) => {
  try {
    console.log('Creating checkout session with params:', params);

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Response error data:', errorData);
      throw new Error(`Failed to create checkout session: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Response data:', data);

    if (!data.sessionId) {
      throw new Error('No sessionId in response');
    }

    return data.sessionId;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export const redirectToCheckout = async (sessionId: string) => {
  console.log('Redirecting to checkout with sessionId:', sessionId);
  console.log('Stripe publishable key:', STRIPE_PUBLISHABLE_KEY ? 'Set' : 'Not set');

  const stripe = await getStripe();
  if (!stripe) {
    console.error('Stripe failed to load - check publishable key');
    throw new Error('Stripe failed to load - check publishable key in environment variables');
  }

  console.log('Stripe loaded successfully, redirecting...');
  const { error } = await stripe.redirectToCheckout({ sessionId });

  if (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};
