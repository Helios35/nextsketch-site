import type { QualifierQuestion } from '@/types';

export const qualifierQuestions: QualifierQuestion[] = [
  {
    id: 'stage',
    label: 'What stage is your product or company?',
    type: 'select',
    options: [
      'Pre-seed / Idea stage',
      'Seed — building first product',
      'Series A — scaling product',
      'Growth — expanding product line',
      'Established — optimizing operations',
    ],
    required: true,
  },
  {
    id: 'goal',
    label: "What's your primary goal?",
    type: 'select',
    options: [
      'Build a new product from scratch',
      'Validate and improve existing product',
      'Integrate AI into operations',
      'Both product development and operations',
    ],
    required: true,
  },
  {
    id: 'timeline',
    label: "What's your timeline expectation?",
    type: 'select',
    options: [
      'Immediate — need to start this month',
      'Near-term — within the next quarter',
      'Planning — within 6 months',
      'Exploring — no fixed timeline',
    ],
    required: true,
  },
  {
    id: 'budget',
    label: 'Do you have budget allocated for a retainer engagement?',
    type: 'select',
    options: [
      'Yes — budget is approved',
      'Likely — pending final approval',
      'Exploring — need to understand costs first',
      'No — looking for project-based pricing',
    ],
    required: true,
  },
  {
    id: 'challenge',
    label: 'Describe your challenge in one sentence.',
    type: 'textarea',
    placeholder:
      "e.g., We have a product vision but can't align on what to build first...",
    required: true,
  },
];
