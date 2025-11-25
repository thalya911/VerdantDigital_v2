<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1q1ekKdqcneXYw5xZe9YI2u2RswPjkHYs

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the following environment variables in a `.env` file:
   - `API_KEY`: Your Gemini API key.
   - `STRIPE_SECRET_KEY`: Your Stripe secret key.
   - `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret.
   - `STRIPE_RECURRING_PRICE_ID`: Your Stripe recurring price ID.
   - `RESEND_API_KEY`: Your Resend API key.
   - `VITE_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key.
3. Run the app:
   `npm run dev`
