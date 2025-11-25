# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript marketing website for Verdant Digital agency, built as a Google AI Studio app with Gemini API integration. The site uses React Router for navigation with multiple page routes.

**Legal Entity**: Verdant Labs Pty Ltd (ABN: 62 690 480 516 7)
**Contact Email**: hello@verdantdigital.com.au
**Social Media**:
- Instagram: https://www.instagram.com/verdant.digital/
- Facebook: https://www.facebook.com/share/1Aom3Vwm4c/?mibextid=wwXIfr

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run preview      # Preview production build
```

**Environment Setup**:
- `GEMINI_API_KEY`: For AI content generation (service falls back to mock data if missing)
- `VITE_STRIPE_PUBLISHABLE`: Stripe publishable key (note: no `_KEY` suffix)
- `STRIPE_SECRET`: Stripe secret key for backend (note: no `_KEY` suffix)
- `STRIPE_WEBHOOK_SECRET`: For verifying Stripe webhook signatures
- `STRIPE_RECURRING_PRICE_ID`: Stripe price ID for $99/mo recurring subscription
- `RESEND_API_KEY`: For sending emails via Resend API

## Deployment

**Platform**: Vercel (not Netlify)

**API Routes**: Serverless functions in `/api/` directory (ES modules):
- `api/contact-form.js`: Handles contact form submissions, sends emails via Resend
- `api/create-checkout-session.js`: Creates Stripe checkout sessions
- `api/stripe-webhook.js`: Receives Stripe webhook events, sends payment receipts

**Important**: All API files use ES module syntax (`import`/`export`) because `package.json` has `"type": "module"`

**vercel.json Configuration**:
```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
The catch-all rewrite ensures SPA routing works (prevents 404s on client-side routes like `/success`)

## Architecture

### Routing Structure

The app uses React Router for navigation with the following routes:

**Routes** (defined in App.tsx):
- `/` - Agency homepage (MainHero, MainPhilosophy, MainExpertise, MainPortfolio, MainContact)
- `/tradie` - Tradie services page (Hero, Comparison, Workflow, CtaSection, Faq, MainContact)
- `/about` - About page with founders info, philosophy, how we work, why choose us
- `/faq` - FAQ page with categorized questions
- `/enquire` - Contact/enquiry form page
- `/success` - Success page (shown after successful Stripe payment)

**Page Components**:
- **AgencyPage**: Homepage with hero, philosophy, expertise, portfolio sections
- **TradiePage**: Tradie-focused landing page with pricing and conversion focus
- **About**: Company information, founders (Thalya Tilt MacSporran & Jacob Paterson), philosophy, process
- **FaqPage**: Comprehensive FAQ organized into 5 categories (20+ questions)
- **EnquiryPage**: Contact form
- **SuccessPage**: Payment confirmation

### Scroll Animation System

Uses Intersection Observer with CSS classes for reveal-on-scroll:

```tsx
// In components: add .reveal class
<div className="reveal">...</div>

// App.tsx observes and adds .active class when in viewport
// Safety timeout forces reveal after 1s to prevent blank pages (App.tsx:48-51)
```

Classes: `.reveal`, `.reveal-delay-100`, `.reveal-delay-200`, `.reveal-delay-300`

### WebGL Background Animation

**Threads.tsx** is a custom WebGL component using the OGL library:

- Implements Perlin2D noise-based animated lines
- Custom vertex/fragment shaders for performance
- Props: `color`, `amplitude`, `distance`, `enableMouseInteraction`
- **Critical**: Proper cleanup required (RAF cancellation, event removal, WebGL context loss)
- Only used in MainHero to minimize performance impact

### Styling Architecture

**No separate CSS files** - everything is inline in `index.html`:

- Tailwind CSS loaded via CDN with custom config in `<script>` tag
- Custom animations and styles in `<style>` tag
- Brand colors defined in Tailwind config (brand-accent: #00FF9D, brand-black: #0D0D0F, etc.)

**Key Custom Animations**:
- `.animate-text-starspeed`: Text with stroke + glow effect (used in hero "ACCELERATED.")
- `.reveal` system: Fade-in-up on scroll with staggered delays

### AI Content Generation Service

**services/geminiService.ts**:

```typescript
generateTradieContent(trade, location, tone) → {headline, bio}
```

- Uses Google Gemini API via `@google/genai`
- API key injected at build time from `GEMINI_API_KEY` env var (vite.config.ts)
- **Fallback behavior**: Returns mock data if API key missing
- Used in ContentGenerator component for tradie view

### Stripe Payment Integration

**services/stripeService.ts**:

```typescript
createCheckoutSession(params) → Promise<checkoutUrl>
redirectToCheckout(checkoutUrl) → Promise<void>
```

- Uses `@stripe/stripe-js` for client-side Stripe integration
- **Modern API**: Uses direct URL redirect (`window.location.href`), NOT deprecated `stripe.redirectToCheckout()`
- Requires backend API endpoint at `/api/create-checkout-session`
- Supports both one-time payments ($299 setup) and recurring subscriptions ($99/mo)
- Success URL: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`
- Cancel URL: `${origin}/tradie`
- Publishable key from `VITE_STRIPE_PUBLISHABLE` env var (no `_KEY` suffix)

**Payment Flow**:
1. User completes ExpressBuildModal qualification and path selection
2. Click "Pay Now $299" triggers `createCheckoutSession()`
3. Backend creates Stripe Checkout session with metadata
4. Backend returns `{ sessionId, url }` where `url` is the checkout URL
5. Frontend redirects to Stripe Checkout via `window.location.href = checkoutUrl`
6. After payment, Stripe redirects to `/success?session_id=...`
7. App.tsx detects session_id param and shows SuccessPage

**Backend Requirements** (`api/create-checkout-session.js`):
- Vercel serverless function (ES module)
- Stripe secret key from `STRIPE_SECRET` env var
- Handles both `mode: 'payment'` and `mode: 'subscription'`
- **Must return**: `{ sessionId, url }` where `url` is `session.url` from Stripe

**Webhook Configuration**:
- Endpoint: `https://yourdomain.com/api/stripe-webhook`
- Events: `checkout.session.completed`, `invoice.payment_succeeded`
- Purpose: Sends payment receipt emails via Resend
- **Critical**: Must be created in correct Stripe account (check if multiple accounts exist)

### Data & Constants

All static content lives in **constants.tsx**:
- `PACKAGES`: 3-tier pricing structure for tradie services
- `FAQS`: Tradie-focused FAQs (used on /tradie page)
- `FAQ_CATEGORIES`: Comprehensive categorized FAQs for /faq page (5 categories, 20+ questions)
- `TESTIMONIALS`: Client testimonials
- `BENEFITS`: Service benefits
- `WORKFLOW`: Process workflow steps

Types defined in **types.ts** (PackageItem, FaqItem, FaqCategory, etc.)

**FAQ Categories** (FAQ_CATEGORIES):
1. **Core FAQs**: What Verdant does, who it's for, pricing, timeline, support
2. **Process-Related FAQs**: Getting started, content help, maintenance, work progress, requirements
3. **Tech & Platform FAQs**: Platforms used, rebuilds, hosting, integrations
4. **Results & Value FAQs**: Performance tracking, lead generation, proactive decision-making
5. **Relationship & Delivery FAQs**: Who you work with, outsourcing, approach differences

## Key Technical Patterns

### Modal Management

Nested modal pattern with z-index layering:

**StartProjectModal** (z-index: 100):
- Controlled by `isOpen` state in Header component
- Two path options: "Express Build (Pay Now)" or "Book Free Call"
- Express Build opens ExpressBuildModal
- Fixed positioning with backdrop blur

**ExpressBuildModal** (z-index: 200):
- Nested modal launched from StartProjectModal
- **Two-screen streamlined flow** (consolidated from 4 screens):

  **Screen 1: Build Options**
  - Select package tier (The Starter $299, The Growth $599, The Dominator $1299)
  - Displays all features for selected package
  - "Continue" button advances to Screen 2

  **Screen 2: Qualification & Payment** (consolidated)
  - Shows package features and pricing at top
  - **Non-blocking qualification checkboxes** (3 items):
    - More than 5 pages needed
    - E-commerce or booking system
    - Custom calculators/advanced features
  - If ANY checkbox selected: Shows advisory message "Your project may benefit from a custom plan"
  - **Two payment options side-by-side**:
    - **Option A**: "PAY $299 + START BUILD" - Direct Stripe payment (immediate)
    - **Option B**: "GET CUSTOM PLAN" - Shows form (name, email, phone, business, additional requirements)
  - Form submission (Option B) shows success message without payment
  - Qualification checkboxes do NOT block payment or form submission

- State management: `selectedOption`, `qualifications`, `showForm`, `formSubmitted`, `isProcessing`
- Form data from Option B sent via contact form API
- Payment data from Option A passed as metadata to Stripe checkout

**No external modal library** - Custom implementation with React state

### Font Configuration

Three fonts loaded via Google Fonts (index.html):
- Inter: Body text (sans-serif)
- Montserrat: Headings (display font)
- IBM Plex Sans: Hero text ("DIGITAL ACCELERATED.")

### Build Configuration (vite.config.ts)

- Environment variable injection: `GEMINI_API_KEY` → `process.env.API_KEY`
- Path alias: `@/*` → project root
- Server: port 3000, host 0.0.0.0
- ESM module resolution with TypeScript extensions allowed

## Important Development Notes

1. **Not a standard CRA app** - Built for Google AI Studio framework
2. **No routing library** - Custom state-based navigation pattern
3. **No state management library** - Props passed from App.tsx root
4. **No CSS modules** - All styling inline in index.html
5. **React 19 features** - Uses modern hooks (useState, useEffect, useRef)
6. **TypeScript strict mode** - ES2022 target, ESNext modules

## Component Conventions

- Naming: `Main*` prefix for agency view, shorter names for tradie view
- All functional components with `React.FC` type annotation
- Shared components: Header, Footer, MainContact (reused across views)

## Performance Considerations

- WebGL animation (Threads) only on MainHero - expensive to render
- Intersection Observer properly disconnected in cleanup
- Safety timeout on scroll animations prevents blank page loads
- Gemini API calls use async/await with proper error handling

## Mobile Responsiveness

**Key Mobile Patterns**:
- Mobile-first Tailwind approach: base styles for mobile, `md:` and `lg:` for desktop
- Responsive spacing: Use `gap-4` on mobile, `lg:gap-0` or larger gaps on desktop
- Responsive sizing: Smaller text/components on mobile (e.g., `text-lg md:text-xl`)
- Responsive positioning: Elements may be positioned differently on mobile vs desktop

**Mobile-Specific Adjustments**:
- **Scroll indicator** (MainHero): `left-8` on mobile, `md:left-1/2 md:-translate-x-1/2` on desktop
- **Workflow cards**: `gap-4` between cards on mobile to prevent touching
- **Hero pricing section**: Increased `gap-6` and `py-4` spacing on mobile
- **Feature bullet points**: Keep concise to avoid wrapping on mobile screens
- **Modal buttons**: Stack vertically on mobile, side-by-side on desktop

**Testing on Mobile**:
- Always test form flows, modal interactions, and spacing on actual mobile devices
- Check for elements "touching" (insufficient gap/padding)
- Verify text doesn't wrap awkwardly or extend beyond viewport

## Business Model & Key Messaging

### Tradie Offering (Express Build)
- **Timeline**: 7 days from discovery call to launch
- **Pricing**: $299 upfront setup + $99/month ongoing
- **Contract Terms**: "24 Month Agreement • Then Month-to-Month"
- **After 24 months**: Switch to month-to-month at $50/mo (hosting & security only), or take site elsewhere
- **Limited Offer Badge**: "DECEMBER INTAKE - 3 SPOTS REMAINING" (update monthly)

### Service Model & Content Accuracy ⚠️

**CRITICAL**: Verdant builds, hosts, and manages ALL website changes. Clients do NOT manage their own sites.

- **Accurate messaging**: "We manage the platform, updates and improvements for you. You do not need technical skills or extra admin. You focus on the business, and we keep the digital side running properly."
- **For tradie clients**: "We build and host your site. Simply text or email us any changes (photos, text updates, new services) and we'll action them quickly—usually within 24 hours."
- **Never suggest**: Clients can manage/update their own site, use drag-and-drop editors, or have admin access
- **Change request process**: Clients text or email change requests → Verdant actions them within 24 hours
- **No self-service**: There is no client portal, CMS access, or DIY updates

**FAQ & Benefits Guidelines**:
- Correct FAQ wording: "Do we need to maintain the website ourselves?" Answer: "No. We manage the platform, updates and improvements for you..."
- Benefits title: "Quick Updates on Request" (not "Dead Simple Updates")
- Always clarify Verdant handles all technical work
- Emphasize partnership and support, not self-management

### Language & Localization
- **Australian English**: Use -ise/-isation spelling (optimise, not optimize)
- **Tone**: Direct, no-fluff, tradie-focused language
- **Key phrase**: "Built for tradies who want leads, not excuses"

### Important Copy Elements
- All timeline references should be "7 days" (not 4-6 weeks)
- Workflow steps: Day 1, Day 2-5, Day 6-7
- CTA button in Hero: "GET STARTED - $299 SETUP"
- Service area updates note: "(updates SEO automatically)"
- Portfolio: "BreadBloom" (one word, not "Bread Bloom")
- Contact forms: All fields are optional (no `required` attributes)

## About Page Content

### Company Positioning
Verdant Digital creates websites and digital platforms that help businesses operate with more **clarity, confidence and momentum**. Focus on:
- Usability, structure, performance and outcomes (not just visual presentation)
- Complete solutions where structure, technology and design work together
- Reducing friction and supporting better decision-making

### Founders
**Thalya Tilt MacSporran** (Director)
- Quote: "Better systems create better decisions, and better decisions create better businesses."

**Jacob Paterson** (Director)
- Quote: "Great technology should solve real problems and deliver results you can measure."

**Founder Story Key Points**:
- 12+ years' experience in insurance industry
- Background in operations, systems, performance, and digital processes
- Studies in behavioural science, computer science, design-thinking
- Focus on helping businesses move from reactive to proactive

### Philosophy
"We believe websites should be created as complete solutions, not as isolated parts. The structure, the technology and the design all work together to create clarity, reduce friction and support better decision making for both the business and the customer."

### How We Work (4-Step Process)
1. **Discovery and Strategy**: Understanding business, customers, goals, requirements
2. **Design and Architecture**: Planning flows, structure, technical approach together
3. **Build and Iterate**: Clear cycles with regular check-ins, early feedback incorporation
4. **Launch and Optimise**: Performance tracking, user behaviour insights, ongoing refinement

### Services Offered
- Modern, considered websites
- Shopify and e-commerce builds
- Digital solutions that reduce friction
- Custom applications
- Solutions for tradie businesses and established organisations

## Mobile Responsiveness Best Practices

The About page has been optimized for mobile with improved spacing:
- Section padding: `py-12 md:py-16` (reduced on mobile)
- Heading margins: `mb-10 md:mb-12` (more breathing room on mobile)
- Grid gaps: `gap-8 md:gap-12` (tighter on mobile)
- Text spacing: `space-y-5 md:space-y-6` (adjusted for mobile)
- Component padding: `p-5 md:p-6` (cards and boxes)
- Inner gaps: `gap-4 md:gap-6` (between flex items)

Always provide mobile-first responsive spacing to prevent elements from feeling cramped on smaller screens.

## Footer Configuration

**Social Media Links** (Connect section):
- Instagram: https://www.instagram.com/verdant.digital/ (primary social channel)
- Facebook: https://www.facebook.com/share/1Aom3Vwm4c/?mibextid=wwXIfr
- Email: hello@verdantdigital.com.au (mailto link with Mail icon)

**Note**: LinkedIn and Twitter have been removed. Footer only displays Instagram, Facebook, and Email icons.

**Footer Links**:
- Quick Links section includes: About Us, Terms & Privacy, FAQs (`/faq`), Sitemap, Contact Us
- FAQs link points to `/faq` (dedicated FAQ page), not `/#faq`
- Copyright: "© [Year] Verdant Labs Pty Ltd. All rights reserved."

## Key Component Files

**Pages**:
- `components/About.tsx`: Full about page with founders, philosophy, process
- `components/FaqPage.tsx`: Categorized FAQ page (5 sections, 20+ questions)
- `components/EnquiryPage.tsx`: Contact form
- `components/SuccessPage.tsx`: Payment success confirmation

**Shared Components**:
- `components/Header.tsx`: Navigation header
- `components/Footer.tsx`: Site footer with social links, Quick Links, copyright
- `components/MainContact.tsx`: Contact form section (reused on multiple pages)

**Constants & Types**:
- `constants.tsx`: All static content (PACKAGES, FAQS, FAQ_CATEGORIES, TESTIMONIALS, etc.)
- `types.ts`: TypeScript interfaces (PackageItem, FaqItem, FaqCategory, etc.)
