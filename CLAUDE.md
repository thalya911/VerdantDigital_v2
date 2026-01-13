# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript marketing website for Verdant Digital, a digital product studio based in Brisbane, Australia. The site showcases the company's expanded service offering beyond web design to include mobile apps, AI solutions, and progressive web applications.

**Positioning**: Digital Product Studio (not just a web design agency)
**Core Services**: Mobile App Development, AI Solutions, Progressive Web Apps, Websites & Web Platforms
**Technology Stack**: React 19, TypeScript, React Router, Tailwind CSS, Vite

**Recent Updates (December 2024)**:
- ✅ Repositioned from "web design agency" to "digital product studio"
- ✅ Added 4 premium service pages with consistent design system
- ✅ Updated homepage with MainServices component showcasing service pillars
- ✅ Enhanced navigation with Services dropdown (8 links)
- ✅ Implemented premium UI/UX design patterns (gradients, glows, animations)

**Legal Entity**: Verdant Labs Pty Ltd (ABN: 62 690 480 516)
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
- `STRIPE_SETUP_FEE_PRICE_ID`: Stripe price ID for $399 one-time setup fee
- `STRIPE_RECURRING_PRICE_ID`: Stripe price ID for $99/mo recurring subscription
- `RESEND_API_KEY`: For sending emails via Resend API

## Deployment

**Platform**: Vercel (not Netlify)

**API Routes**: Serverless functions in `/api/` directory (ES modules):
- `api/contact-form.js`: Handles contact form submissions, sends dual branded emails via Resend (notification to team + confirmation to customer)
- `api/create-checkout-session.js`: Creates Stripe checkout sessions with combined pricing (setup fee + subscription)
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
- `/` - Agency homepage (MainHero, MainServices, MainPhilosophy, MainExpertise, MainPortfolio, MainContact)
- `/tradie` - Tradie services page (Hero, Comparison, Workflow, CtaSection, Faq, MainContact)
- `/about` - About page with founders info, philosophy, how we work, why choose us
- `/faq` - FAQ page with categorized questions
- `/enquire` - Contact/enquiry form page
- `/success` - Success page (shown after successful Stripe payment)
- `/services/mobile-app-development` - Mobile app development service page
- `/services/ai-solutions` - AI solutions service page
- `/services/progressive-web-apps` - Progressive web apps service page
- `/services/websites` - Websites & web platforms service page

**Page Components**:
- **AgencyPage**: Homepage with hero, services overview, philosophy, expertise, portfolio sections
- **TradiePage**: Tradie-focused landing page with pricing and conversion focus
- **About**: Company information, founders (Thalya Tilt MacSporran & Jacob Paterson), philosophy, process
- **FaqPage**: Comprehensive FAQ organized into 5 categories (20+ questions)
- **EnquiryPage**: Contact form
- **SuccessPage**: Payment confirmation
- **MobileAppDevelopmentPage**: Service detail page for mobile app development (334 lines, premium design)
- **AISolutionsPage**: Service detail page for AI/automation solutions (289 lines, premium design)
- **ProgressiveWebAppsPage**: Service detail page for PWAs (289 lines, premium design)
- **WebsitesPage**: Service detail page for websites & platforms (289 lines, premium design)

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

### Service Pages Design System

All service pages (`/services/*`) follow a premium, consistent design pattern established in December 2024:

**Visual Design Language**:
- **Fixed ambient glows**: 2-3 floating blur circles per page (brand-accent, purple, blue, green variations)
- **Grid pattern overlay**: Fixed background with subtle opacity
- **Gradient badges**: Pill-shaped with icon, backdrop blur, border glow
- **Hero typography**: text-5xl → text-8xl with glow effects on accent text
- **Dual CTAs**: Primary (Start Your Project) + Secondary (See How It Works) with hover animations

**Component Structure** (consistent across all service pages):

1. **Hero Section** (mb-24):
   - Gradient badge with service icon
   - Large headline (text-8xl) with glowing accent span
   - Descriptive paragraph (text-xl, max-w-3xl)
   - Dual CTA buttons with scale/glow hover effects

2. **What We Deliver** (mb-28):
   - Section heading with description
   - 3-column icon grid (md:grid-cols-3)
   - Cards with gradient backgrounds, top accent bar on hover
   - Icon boxes with scale-110 on hover
   - Shadow glow effects: `shadow-[0_0_30px_rgba(0,255,179,0.1)]`

3. **Ideal For** (mb-28):
   - 3 large impact cards with custom color gradients
   - Each card has unique gradient (blue/green/purple/yellow)
   - Icons with glowing backgrounds
   - Scale-105 + rotate-1 on hover
   - Shadow effects on hover

4. **Our Process** (mb-28, id="process"):
   - Timeline-style vertical layout
   - Gradient step numbers (01-05) with glow shadows
   - Process icons from lucide-react (Target, Star, Code, Rocket, TrendingUp)
   - Connector lines between steps
   - Horizontal flex layout: number + icon/title/description

5. **Tech & Capabilities** (mb-28):
   - Pill-shaped tags in flex-wrap layout
   - Gradient backgrounds with hover glow
   - Scale-105 on hover
   - Rounded-full borders

6. **FAQ Section** (mb-28):
   - Gradient card backgrounds
   - Hover border color change to brand-accent
   - Heading turns brand-accent on hover
   - Glow shadow on hover

7. **Bottom CTA** (rounded-3xl, p-16):
   - Multiple overlapping ambient glows
   - Large heading (text-6xl)
   - Dual CTA buttons
   - Overflow hidden for contained glows

**Premium Design Patterns**:
```tsx
// Fixed ambient glows
<div className="fixed top-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

// Gradient badge
<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 border border-brand-accent/30 rounded-full backdrop-blur-sm">

// Hero glow effect
<span className="text-brand-accent inline-block relative">
  Text
  <div className="absolute -inset-4 bg-brand-accent/10 blur-xl -z-10"></div>
</span>

// Feature card with top accent bar
<div className="group relative bg-gradient-to-br from-brand-surface/40 to-brand-surface/20 border border-brand-border/50 rounded-2xl p-6 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,179,0.1)]">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

// Timeline step with glow
<div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/70 text-brand-black rounded-2xl flex items-center justify-center font-display font-black text-2xl shadow-[0_0_30px_rgba(0,255,179,0.3)] group-hover:scale-110 transition-transform">

// Tech pill tags
<div className="bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-brand-accent/50 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-brand-accent/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,179,0.15)]">
```

**Icon Usage**:
- All icons from `lucide-react` library
- Common icons: ArrowRight, Smartphone, Sparkles, Globe, Layout, Zap, Brain, Target, Code, Star, Rocket, TrendingUp, CheckCircle
- Icon sizes: 16px (badges), 20-28px (cards), 36px (large impact cards)
- strokeWidth: 2-2.5 for consistency

**Color Gradients**:
- Blue/Accent: `from-blue-500/10 to-brand-accent/10`
- Accent/Green: `from-brand-accent/10 to-green-500/10`
- Purple/Accent: `from-purple-500/10 to-brand-accent/10`
- Yellow/Accent: `from-yellow-500/10 to-brand-accent/10`
- Surface gradients: `from-brand-surface/40 to-brand-surface/20`

**Spacing & Layout**:
- Section margins: `mb-24` (hero), `mb-28` (content sections)
- Card gaps: `gap-6` (grids), `gap-8` (impact cards)
- Padding: `p-6` (cards), `p-8` (impact cards), `p-12 md:p-16` (CTAs)
- Max widths: `max-w-3xl` (hero text), `max-w-6xl` (grids), `max-w-3xl` (process/FAQ)

**Animation Timing**:
- Transitions: `duration-300` (standard), `duration-500` (impact cards)
- Hover scales: `scale-[1.02]` (cards), `scale-105` (buttons/pills), `scale-110` (icons)
- Delays: `reveal-delay-100`, `reveal-delay-200`, `reveal-delay-300`, `reveal-delay-400`, `reveal-delay-500`

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
- Success URL: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`
- Cancel URL: `${origin}/tradie`
- Publishable key from `VITE_STRIPE_PUBLISHABLE` env var (no `_KEY` suffix)

**Current Pricing Model** (Tradie Express Build):
- **$399 upfront** - One-time setup fee (charged immediately)
- **$99/month** - Recurring subscription for 24 months
- **30-day trial** - First recurring payment starts 30 days after signup
- **Total commitment**: $399 + ($99 × 24 months) = $2,775 over 24 months

**Payment Flow**:
1. User completes ExpressBuildModal qualification and path selection
2. Click "Pay Now" triggers `createCheckoutSession()` with `mode: 'subscription'`
3. Backend creates Stripe Checkout session with both line items (setup fee + subscription)
4. Backend returns `{ sessionId, url }` where `url` is the checkout URL
5. Frontend redirects to Stripe Checkout via `window.location.href = checkoutUrl`
6. Customer pays $399 immediately; $99/month starts after 30 days
7. After payment, Stripe redirects to `/success?session_id=...`
8. App.tsx detects session_id param and shows SuccessPage

**Backend Requirements** (`api/create-checkout-session.js`):
- Vercel serverless function (ES module)
- Stripe secret key from `STRIPE_SECRET` env var
- Handles both `mode: 'payment'` (legacy) and `mode: 'subscription'` (current)
- For subscription mode: Includes both `STRIPE_SETUP_FEE_PRICE_ID` and `STRIPE_RECURRING_PRICE_ID` as line items
- Adds 30-day trial period via `subscription_data.trial_period_days: 30`
- **Must return**: `{ sessionId, url }` where `url` is `session.url` from Stripe

**Webhook Configuration**:
- Endpoint: `https://yourdomain.com/api/stripe-webhook`
- Events: `checkout.session.completed`, `invoice.payment_succeeded`
- Purpose: Sends payment receipt emails via Resend
- **Critical**: Must be created in correct Stripe account (check if multiple accounts exist)

### Contact Form & Email Integration

**api/contact-form.js**:

Handles contact form submissions and sends dual branded emails via Resend API.

**Email Flow**:
1. Customer submits contact form (MainContact.tsx or ContactFormModal.tsx)
2. Backend validates required fields (firstName, lastName, email, phone, preferredContact)
3. Sends **two emails** simultaneously:
   - **Internal notification** to `thalya@verdantlabs.com.au` with full enquiry details
   - **Customer confirmation** to customer's email with branded acknowledgment

**Email Templates**:
- Professional HTML templates with Verdant Digital branding
- Gradient header with logo and message
- Clean field display with accent border highlights
- Footer with contact info and social links
- Customer email includes "What happens next?" section

**Sender Configuration** (CRITICAL):
- **Must use root domain**: `verdantdigital.com.au` (NOT subdomains like `send.verdantdigital.com.au`)
- Internal notification: `from: 'Verdant Digital <noreply@verdantdigital.com.au>'`
- Customer confirmation: `from: 'Verdant Digital <hello@verdantdigital.com.au>'`
- Reply-to addresses set appropriately (customer email for internal, hello@ for customer)
- **Reason**: Subdomains may not be verified in Resend, causing delivery failures

**DNS Requirements** (Resend):
- Domain must be verified in Resend Dashboard
- Required DNS records: SPF, DKIM, DMARC
- DNS records must be set to "DNS only" (not proxied) in Cloudflare
- Allow up to 48 hours for DNS propagation

**Success/Error Messages**:
- Success: "✓ Message sent!\n\nThanks for getting in touch. We'll get back to you within 24 hours.\n\nYou should receive a confirmation email shortly."
- Error: "Something went wrong.\n\nPlease try again, or email us directly at hello@verdantdigital.com.au"
- Connection error: "Connection error.\n\nPlease check your internet connection and try again, or email us at hello@verdantdigital.com.au"

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
- **Pricing**: $399 upfront setup + $99/month for 24 months
- **Trial Period**: First $99 payment starts 30 days after signup (30-day trial)
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

**Digital Product Studio** - Verdant Digital builds digital products—websites, mobile apps, progressive web applications and AI-powered solutions—that help businesses operate with more **clarity, confidence and momentum**.

Focus on:
- Usability, structure, performance and outcomes (not just visual presentation)
- Complete solutions where structure, technology and design work together
- Reducing friction and supporting better decision-making
- Full-stack product development (not just web design)

**Service Pillars**:
1. **Mobile App Development**: Native and cross-platform apps (React Native, Swift, Kotlin)
2. **AI Solutions**: Custom AI integrations, automation, chatbots, workflow optimization
3. **Progressive Web Apps**: Offline-first, installable web applications
4. **Websites & Web Platforms**: Custom websites, Shopify Plus, e-commerce, CMS solutions

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
- **Mobile App Development**: Native iOS/Android apps, cross-platform solutions (React Native), app-like experiences
- **AI Solutions**: GPT integrations, intelligent chatbots, workflow automation, document processing, predictive analytics
- **Progressive Web Apps**: Offline-first architecture, home screen installation, push notifications, cross-platform compatibility
- **Websites & Web Platforms**: Custom websites, Shopify Plus e-commerce, headless CMS, SEO-optimized builds
- **Tradie Express Build**: 7-day website builds specifically for trade businesses ($399 setup + $99/month)

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

**Service Pages** (Premium Design):
- `components/MobileAppDevelopmentPage.tsx`: Mobile app development service page (334 lines)
- `components/AISolutionsPage.tsx`: AI solutions service page (289 lines)
- `components/ProgressiveWebAppsPage.tsx`: Progressive web apps service page (289 lines)
- `components/WebsitesPage.tsx`: Websites & web platforms service page (289 lines)

**Homepage Sections**:
- `components/MainHero.tsx`: Hero section with WebGL animation
- `components/MainServices.tsx`: 4-pillar service overview with links to service pages
- `components/MainPhilosophy.tsx`: Company philosophy and approach
- `components/MainExpertise.tsx`: Technical expertise and capabilities
- `components/MainPortfolio.tsx`: Project showcase and case studies

**Shared Components**:
- `components/Header.tsx`: Navigation header with Services dropdown (8 links: Free Audit, Services Overview, 4 service pages, Digital Guides)
- `components/Footer.tsx`: Site footer with social links, Quick Links, copyright
- `components/MainContact.tsx`: Contact form section (reused on multiple pages)

**Constants & Types**:
- `constants.tsx`: All static content (PACKAGES, FAQS, FAQ_CATEGORIES, TESTIMONIALS, etc.)
- `types.ts`: TypeScript interfaces (PackageItem, FaqItem, FaqCategory, etc.)
