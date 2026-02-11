import type {
  HeroContent,
  OfferingContent,
  ProcessStep,
  BenefitItem,
} from '@/types';

export const heroContent: HeroContent = {
  overline: 'Strategy-First, AI-Driven Product Partner',
  headline: 'Decide what to build.\nValidate why it matters.\nShip it fast.',
  subheadline:
    'Next Sketch helps founders move from product vision to validated execution — using AI-first workflows and fast strategy that cuts through the noise.',
  ctaText: 'Start a Conversation',
};

export const offerings: OfferingContent[] = [
  {
    id: 'product-development',
    label: 'Primary Offering',
    title: 'AI-First Product Development',
    tagline: 'Decide what to build — fast.',
    description:
      'For founders who need to make product decisions and execute quickly. We take you from unclear product vision to validated, shipping product — without months of discovery or exploratory workshops.',
    whatWeBuild: [
      'SaaS products',
      'Internal and external tools',
      'Platforms and integrated UIs',
      'Monetization-aware product foundations',
    ],
    pillars: [
      {
        title: 'Strategy first, but fast',
        description:
          'Decisions in days, not months. Planning sets constraints — execution follows immediately.',
      },
      {
        title: 'Decisions before code',
        description:
          'Know what to build before building it. No wasted sprints on unvalidated assumptions.',
      },
      {
        title: 'Validation before scale',
        description:
          'Prove assumptions with evidence before investing in growth. Ship to learn, then scale what works.',
      },
      {
        title: 'Evidence-driven evolution',
        description:
          'Every iteration backed by data. Product evolution driven by proof, not opinions.',
      },
    ],
    ctaText: 'Start a Conversation',
    isPrimary: true,
  },
  {
    id: 'workflow-integration',
    label: 'Expansion Offering',
    title: 'AI Workflow & Process Integration',
    tagline: 'Same discipline, applied inward.',
    description:
      'Product thinking applied to your internal operations. We identify friction points and build AI-powered systems that reduce costs, accelerate decisions, and actually fit how your team works.',
    whatWeBuild: [
      'Internal operational tools',
      'Workflow automation systems',
      'Friction reduction across teams',
      'Cost-reducing intelligent systems',
    ],
    pillars: [
      {
        title: 'Same discipline, different surface',
        description:
          'Product rigor applied to operations. Strategy and speed for internal systems too.',
      },
      {
        title: 'Friction reduction',
        description:
          'Remove bottlenecks and accelerate decision flow across your organization.',
      },
      {
        title: 'Cost through intelligence',
        description:
          'Automation that delivers real ROI — not pilot programs that gather dust.',
      },
      {
        title: 'Team-aware systems',
        description:
          'Built for how people actually work. Not theoretical workflows that nobody follows.',
      },
    ],
    ctaText: 'Start a Conversation',
    isPrimary: false,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Rapid Strategy',
    description:
      'We compress discovery into focused decision-making. Clear constraints, defined scope, and an execution plan — in days, not months.',
    timeframe: 'Days',
  },
  {
    number: '02',
    title: 'Immediate Execution',
    description:
      'Decisions translate directly to build. No handoff gaps, no strategy decks that sit on shelves. We build based on what was decided.',
    timeframe: 'Weeks',
  },
  {
    number: '03',
    title: 'Evidence Collection',
    description:
      'Ship to real users and measure what matters. Assumptions get validated or killed — quickly and without attachment.',
    timeframe: 'Ongoing',
  },
  {
    number: '04',
    title: 'Continuous Evolution',
    description:
      'Iterate based on proof, not hunches. Every product decision backed by evidence from real usage.',
    timeframe: 'Ongoing',
  },
];

export const benefitItems: BenefitItem[] = [
  {
    title: 'Speed Without Sacrifice',
    description:
      'Fast is a feature, not a compromise. Our process is built for velocity — without cutting corners on strategy or quality.',
    icon: '⚡',
  },
  {
    title: 'AI-First Methodology',
    description:
      'Modern tools for modern problems. AI is integrated into our workflow from day one — not bolted on as an afterthought.',
    icon: '🧠',
  },
  {
    title: 'Unified Strategy & Execution',
    description:
      'No handoff between strategists and builders. The people who make decisions are the people who ship product.',
    icon: '🔗',
  },
  {
    title: 'Continuous Partnership',
    description:
      'Not consultants who audit and leave. Not agencies who build and disappear. A partner who evolves your systems with you.',
    icon: '🤝',
  },
];
