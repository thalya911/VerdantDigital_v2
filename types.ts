import React from 'react';

export interface PackageItem {
  name: string;
  priceBuild: number;
  priceMonthly: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface FaqCategory {
  category: string;
  faqs: FaqItem[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  result?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}