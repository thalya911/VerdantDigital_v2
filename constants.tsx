import { PackageItem, FaqItem, FaqCategory, TestimonialItem, BenefitItem, WorkflowStep } from './types';

export const PACKAGES: PackageItem[] = [
  {
    name: "The Starter",
    priceBuild: 399,
    priceMonthly: 99,
    features: [
      "Professional 5-Page Website",
      "Mobile & Tablet Responsive",
      "Contact Form & Click-to-Call",
      "Basic SEO Setup",
      "Hosting & Security Included",
      "Monthly Backups",
      "1hr Content Updates / Mo"
    ],
    cta: "Get Started"
  },
  {
    name: "The Growth",
    priceBuild: 699,
    priceMonthly: 149,
    popular: true,
    features: [
      "Everything in Starter",
      "Google Business Profile Setup",
      "Project Gallery / Portfolio",
      "Social Media Integration",
      "Speed Optimisation Pack",
      "Priority Email Support",
      "2hr Content Updates / Mo"
    ],
    cta: "Most Popular"
  },
  {
    name: "The Dominator",
    priceBuild: 1399,
    priceMonthly: 299,
    features: [
      "Everything in Growth",
      "Copywriting Included (5 Pages)",
      "Logo Design / Refresh",
      "Booking System Integration",
      "Monthly SEO Reporting",
      "Google Ads Setup (Ad spend extra)",
      "Dedicated Account Manager"
    ],
    cta: "Go Premium"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "I'm not tech savvy, can I still work with you?",
    answer: "Yes. You don't need to manage anything technical. You simply send us updates and we take care of them for you."
  },
  {
    question: "How long does it take to go live?",
    answer: (
      <>
        Your website is typically ready within 7 calendar days of getting started, depending on how quickly feedback is provided after the staging preview. See our <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Terms & Conditions (Section 6)</a> for full timeline details.
      </>
    )
  },
  {
    question: "Will this help me get more work, or just look better?",
    answer: "The structure, wording and layout are designed to increase enquiries, build trust and make customers choose you over competitors."
  },
  {
    question: "Do I need to advertise, or will people find me naturally?",
    answer: "Your site is built Google-friendly, but organic rankings take time. If you want leads faster, the optional advertising add-on can accelerate results."
  },
  {
    question: "What if I don't have photos or wording?",
    answer: (
      <>
        No problem. We can create the copy and source stock imagery for you. If you send photos later, we'll swap them in at no extra cost. Note: This doesn't include logo design or custom photography. See <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Terms & Conditions (Section 7)</a> for details.
      </>
    )
  },
  {
    question: "What if I already have a website?",
    answer: "We can replace it and transfer your domain with no hassle. If you prefer, we can build privately first and switch it over once approved."
  },
  {
    question: "Do I have to manage the website myself?",
    answer: (
      <>
        No. We manage updates, changes, optimisation and hosting. You focus on the work, we handle the website. Learn more in our <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Terms & Conditions (Section 8)</a>.
      </>
    )
  },
  {
    question: "What happens after launch?",
    answer: (
      <>
        You continue to receive hosting, updates, mobile optimisation and priority support as part of your monthly plan. Full details in our <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Terms & Conditions (Sections 5 & 12)</a>.
      </>
    )
  },
  {
    question: "Are there any hidden costs?",
    answer: (
      <>
        No. The only costs are the $399 setup fee and the $99/month ongoing fee for 24 months. Optional extras, like advertising, additional pages, or logo design, are quoted only if requested. See <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Terms & Conditions (Section 11)</a> for what's not included.
      </>
    )
  },
  {
    question: "Can I take my website with me in the future?",
    answer: (
      <>
        Yes. After 24 months, you own the website and can continue month-to-month at $50/mo (hosting and security only) or take your website files to another provider at no cost. If you need to exit earlier, you can buy out the remaining contract balance (number of months remaining x $99). Full details in our <a href="/tradie/terms" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Terms & Conditions (Sections 5 & 10)</a>.
      </>
    )
  }
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "Core FAQs",
    faqs: [
      {
        question: "What does Verdant Digital actually do?",
        answer: "We design and build websites and digital platforms that help businesses operate with more clarity, efficiency and momentum. Our work focuses on usability, structure, performance and outcomes, not just visual presentation."
      },
      {
        question: "Who is Verdant Digital for?",
        answer: "We work with small to mid-sized businesses, professional services, trade businesses and growing brands that want digital solutions that are easy to use, simple to manage and designed to support real business growth."
      },
      {
        question: "How much does a website cost?",
        answer: "Pricing depends on scope, complexity and required functionality. Smaller business websites start at an accessible entry price, while more advanced platforms and e-commerce builds require deeper planning. We provide fixed pricing once requirements are defined."
      },
      {
        question: "How long does a project take?",
        answer: "A typical website build takes between 3 and 8 weeks depending on the size of the site, content readiness and required features. More complex platforms may take longer, but you see progress throughout the build."
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes. We provide hosting, maintenance, optimisation and refinements based on real-world performance and user behaviour, so your digital solution continues to improve over time."
      }
    ]
  },
  {
    category: "Process-Related FAQs",
    faqs: [
      {
        question: "What do you need from us to get started?",
        answer: "We begin with a discussion about your goals, audience, content and requirements. If you do not have this defined, we guide you through it."
      },
      {
        question: "Can you help with content and wording?",
        answer: "Yes. We write or refine copy to ensure clarity, structure and usability, and to reduce cognitive load for your users."
      },
      {
        question: "Do we need to maintain the website ourselves?",
        answer: "No. We manage the platform, updates and improvements for you. You do not need technical skills or extra admin. You focus on the business, and we keep the digital side running properly."
      },
      {
        question: "Do we get to see work in progress?",
        answer: "Yes. You see working outputs early so there are no surprises and feedback can be incorporated throughout the build."
      },
      {
        question: "What if we don't know exactly what we need yet?",
        answer: "Part of our process is helping businesses define the right solution so they are not over-building or under-building."
      }
    ]
  },
  {
    category: "Tech & Platform FAQs",
    faqs: [
      {
        question: "Which platforms do you build on?",
        answer: "We work with modern, reliable and scalable platforms including custom builds, Shopify for e-commerce and solutions based on business needs."
      },
      {
        question: "Can you rebuild or improve an existing website?",
        answer: "Yes. We can review your current setup, identify limitations and recommend whether optimisation or rebuilding is the smarter investment."
      },
      {
        question: "Do you offer hosting and domain management?",
        answer: "Yes. Hosting is included in our ongoing service packages, and we can manage domains so everything stays simple and centralised."
      },
      {
        question: "Do you integrate booking systems, CRMs or other tools?",
        answer: "Yes. We can connect systems so information flows cleanly and supports decision-making rather than creating more admin."
      }
    ]
  },
  {
    category: "Results & Value FAQs",
    faqs: [
      {
        question: "How will we know the new website is working?",
        answer: "We set clear success measures and monitor performance, enquiries and user behaviour to ensure the solution is delivering value."
      },
      {
        question: "Do your websites help generate leads?",
        answer: "Yes. We focus on structure, clarity, navigation pathways and calls to action that support conversions, enquiries and customer flow."
      },
      {
        question: "Can you help us move from reactive to proactive decision-making?",
        answer: "Yes. Our platforms support cleaner data visibility and more reliable information, which helps businesses plan rather than react."
      }
    ]
  },
  {
    category: "Relationship & Delivery FAQs",
    faqs: [
      {
        question: "Who will we be working with?",
        answer: "You work directly with the founders, Thalya and Jacob. There is no hand-off, account manager or disconnect between discussion and delivery."
      },
      {
        question: "Do you outsource work?",
        answer: "No. All strategy, design and development is completed in-house to maintain quality, alignment and consistency."
      },
      {
        question: "What makes your approach different?",
        answer: "We combine structure, usability, modern technology and business logic to create digital solutions that actually work, not just look good."
      }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Dave M.",
    role: "Sparky in Brisbane",
    quote: "Verdant made it dead simple. I spent 20 mins on the phone, sent some photos, and the site was live. The best part is I don't have to worry about technical stuff.",
    rating: 5,
    result: "Leads up 45% in 90 days"
  },
  {
    name: "Sarah T.",
    role: "Landscaping Business Owner",
    quote: "I was quoted $5k by another agency. Verdant did it for a fraction of that. The new site actually brings in qualified leads, not just tyre kickers.",
    rating: 5,
    result: "20+ Enquiries per month"
  },
  {
    name: "Mikey R.",
    role: "Roofing Contractor",
    quote: "No fluff, no tech jargon. Just a solid site that works on mobile. The boys at Verdant know what they're doing.",
    rating: 5,
    result: "Ranked #1 in Local Search"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Lead-Optimised Design",
    description: "Built for smartphone users and local search. We ensure your phone number is clickable and your quote form is never more than a scroll away.",
    iconName: "Smartphone"
  },
  {
    title: "Fast Turnaround",
    description: "We get you live quickly so you don't miss the next job. Our process is streamlined to get your business online in 7 days.",
    iconName: "Clock"
  },
  {
    title: "Quick Updates on Request",
    description: "Need to add photos or update your services? Just text or email us. We handle all changes quickly—no technical skills needed on your end.",
    iconName: "Settings"
  },
  {
    title: "Ongoing Support & Growth",
    description: "We’re there as your business grows. Need a new page for a new service? Just let us know.",
    iconName: "TrendingUp"
  }
];

export const WORKFLOW: WorkflowStep[] = [
  {
    step: 1,
    title: "Day 1: Discovery Call",
    description: "15 minutes. You tell us your services, locations and details."
  },
  {
    step: 2,
    title: "Days 2–5: Build and Review",
    description: "You get a staging link and request any changes."
  },
  {
    step: 3,
    title: "Days 6–7: Launch",
    description: "We go live and set up indexing, speed and tracking."
  }
];