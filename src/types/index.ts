import type { ReactNode } from 'react';

// UI Component Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: 'default' | 'offering' | 'benefit';
  className?: string;
  children?: ReactNode;
}

export interface AccordionItemData {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
}

export type AnimationVariant =
  | 'fadeIn'
  | 'slideUp'
  | 'slideLeft'
  | 'slideRight'
  | 'scale';

export interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

// Content Types
export interface HeroContent {
  overline: string;
  headline: string;
  subheadline: string;
  ctaText: string;
}

export interface OfferingPillar {
  title: string;
  description: string;
}

export interface OfferingContent {
  id: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  whatWeBuild: string[];
  pillars: OfferingPillar[];
  ctaText: string;
  isPrimary: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeframe: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Qualifier Types
export interface QualifierQuestion {
  id: string;
  label: string;
  type: 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
  required: boolean;
}

export interface QualifierFormData {
  [key: string]: string;
}
