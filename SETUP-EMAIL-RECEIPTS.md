# Email Receipts Setup Guide (Vercel)

This guide will help you configure email receipts for all form submissions to be sent to `thalya@verdantlabs.com.au`.

## Overview

Your application now has three Vercel Serverless Functions that handle form submissions and payment receipts:

1. **create-checkout-session.js** - Handles Stripe payment checkout sessions
2. **stripe-webhook.js** - Listens for successful payments and sends receipt emails via Resend
3. **contact-form.js** - Handles contact form submissions and sends notifications via Resend

All emails are automatically sent to: **thalya@verdantlabs.com.au**

## Setup Steps

### 1. Configure Resend

1. Go to [https://resend.com](https://resend.com) and sign up for a free account
2. Verify your email address
3. Add your sending domain (verdantdigital.com.au):
   - Go to Domains → Add Domain
   - Add the required DNS records to your domain provider
   - Wait for verification (usually takes a few minutes)
4. Generate an API key:
   - Go to API Keys → Create API Key
   - Copy the key (starts with `re_`)
   - Save it for the next step

**Note:** Until your domain is verified, Resend will send emails from a generic domain. For testing, you can send to verified email addresses only.

### 2. Configure Stripe

#### 2.1 Get Stripe API Keys

1. Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)
4. Save these for the next step

#### 2.2 Create Recurring Price (for $99/mo subscription)

1. Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products)
2. Click "Create product"
3. Enter product details:
   - Name: "Express Build - Monthly Subscription"
   - Description: "Monthly website hosting and support"
4. Set pricing:
   - Price: $99 AUD
   - Billing period: Monthly
   - Recurring
5. Click "Save product"
6. Copy the **Price ID** (starts with `price_`)

#### 2.3 Set Up Webhook

1. Go to [https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL:
   ```
   https://YOUR_VERCEL_SITE.vercel.app/api/stripe-webhook
   ```
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Click "Add endpoint"
6. Copy the **Signing secret** (starts with `whsec_`)

### 3. Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add the following environment variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` | Stripe publishable key (frontend) |
| `STRIPE_SECRET_KEY` | `sk_test_...` | Stripe secret key (backend) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Stripe webhook signing secret |
| `STRIPE_RECURRING_PRICE_ID` | `price_...` | Stripe recurring price ID for $99/mo |
| `RESEND_API_KEY` | `re_...` | Resend API key for sending emails |

**Important:** Make sure to set these for **all environments** (Production, Preview, and Development) by checking all three boxes when adding each variable.

### 4. Deploy to Vercel

1. Push your code to your Git repository:
   ```bash
   git add .
   git commit -m "Add email receipt functionality"
   git push
   ```

2. Vercel will automatically detect the changes and deploy

3. Wait for the deployment to complete (usually 1-2 minutes)

### 5. Test the Setup

#### Test Contact Form
1. Go to your website
2. Navigate to the contact section
3. Fill out the form and submit
4. Check that thalya@verdantlabs.com.au receives an email notification

pk_test_51SVBDmIwwHLGd8BaFhIDLestyMz8u3TIzUs4XhnsZBS9UyvFggQCqhj4FwcIewo3v6a3kN9vv4RE2EaPjh7yjdof0004TNR0h4

pk_live_51SVBDYIXN4PzuK3wlL9JEZua57lfB3jkeVwUMtPhI4NtGIsA7qpujVQbQXOI183iFjX2LdZ4h7sRjRE0tIzEb73V00FDOvz5Ub

#### Test Payment Receipt
1. Go to your website
2. Click "Get Started" and choose "Express Build"
3. Complete the qualification and choose "Quick Start"
4. Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC
   - Any postal code
5. Complete the payment
6. Check that thalya@verdantlabs.com.au receives a payment receipt email

## Email Templates

### Contact Form Email
- **To:** thalya@verdantlabs.com.au
- **From:** noreply@verdantdigital.com.au
- **Reply-To:** Customer's email (for easy replies)
- **Subject:** New Contact Form - [Name] from [Business]
- **Contains:** Name, Business, Email, Phone, Industry, Message

### Payment Receipt Email
- **To:** thalya@verdantlabs.com.au
- **From:** noreply@verdantdigital.com.au
- **Subject:** New Payment Receipt - [Product] - $[Amount] AUD
- **Contains:**
  - Payment details (amount, session ID)
  - Customer information (name, business, phone, location, trade, etc.)
  - Project details (goals, advertising interest)

## Troubleshooting

### Emails not being received

1. **Check Resend domain verification**
   - Go to Resend dashboard → Domains
   - Ensure your domain is verified (green checkmark)

2. **Check Vercel Functions logs**
   - Go to Vercel dashboard → Your Project → Logs
   - Filter by the function that's having issues (e.g., `/api/stripe-webhook`)
   - Check the logs for errors

3. **Check Stripe webhook logs**
   - Go to Stripe dashboard → Webhooks
   - Click on your webhook endpoint
   - Check recent webhook events for errors

4. **Verify environment variables**
   - Go to Vercel dashboard → Settings → Environment Variables
   - Ensure all variables are set correctly
   - Click "Redeploy" after adding/changing variables

### Contact form not submitting

1. Check browser console for errors
2. Verify the API endpoint is accessible: `https://YOUR_SITE.vercel.app/api/contact-form`
3. Check Vercel Functions logs for error details

### Stripe payment not working

1. Ensure `STRIPE_SECRET_KEY` is set in Vercel
2. Ensure `STRIPE_WEBHOOK_SECRET` matches the webhook in Stripe dashboard
3. Check that the webhook URL is correct and accessible
4. Verify the webhook is receiving events in Stripe dashboard

## Production Checklist

Before going live with real payments:

- [ ] Replace test Stripe keys with live keys (`pk_live_...` and `sk_live_...`)
- [ ] Create new webhook endpoint in Stripe for production URL
- [ ] Update `STRIPE_WEBHOOK_SECRET` with production webhook secret
- [ ] Verify Resend domain is fully verified
- [ ] Test all forms with real data
- [ ] Ensure thalya@verdantlabs.com.au is receiving all emails

## Support

If you encounter any issues:
1. Check the Vercel Functions logs (Vercel Dashboard → Logs)
2. Check the Resend dashboard for failed emails
3. Check the Stripe dashboard for webhook errors
4. Review the browser console for frontend errors

All receipts and form submissions will be automatically sent to thalya@verdantlabs.com.au once everything is configured correctly.
