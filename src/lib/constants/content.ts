import type {
  HeroContent,
  OfferingContent,
  ProcessStep,
  BenefitItem,
  PricingTier,
} from '@/types';

export const heroContent: HeroContent = {
  overline: 'Strategy-First, AI-Driven Product Partner',
  headline: 'Decide what to build.\nValidate why it matters.\nShip it fast.',
  headlineParts: [
    { text: 'Decide what to build. ' },
    { text: 'Validate why it matters. ', gradient: true },
    { text: 'Ship it fast.' },
  ],
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
    icon: 'bolt',
  },
  {
    title: 'AI-First Methodology',
    description:
      'Modern tools for modern problems. AI is integrated into our workflow from day one — not bolted on as an afterthought.',
    icon: 'brain',
  },
  {
    title: 'Unified Strategy & Execution',
    description:
      'No handoff between strategists and builders. The people who make decisions are the people who ship product.',
    icon: 'link',
  },
  {
    title: 'Continuous Partnership',
    description:
      'Not consultants who audit and leave. Not agencies who build and disappear. A partner who evolves your systems with you.',
    icon: 'handshake',
  },
  {
    title: 'Evidence-Driven Decisions',
    description:
      'Every iteration is backed by real data from real users. No guesswork, no gut-feeling pivots — just proof.',
    icon: 'chart',
  },
  {
    title: 'Scalable Foundations',
    description:
      'We build for today and architect for tomorrow. Products that grow with your business without requiring rewrites.',
    icon: 'layers',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Essentials',
    price: '$5,000',
    period: '/month',
    description:
      'For early-stage founders who need strategic clarity and fast initial execution.',
    features: [
      'Rapid strategy sprint',
      'AI-first product scoping',
      'Weekly execution cycles',
      'Async communication',
      'Up to 1 active workstream',
    ],
    ctaText: 'Start a Conversation',
  },
  {
    name: 'Growth',
    price: '$12,000',
    period: '/month',
    description:
      'For product-stage companies scaling fast with continuous development and validation.',
    features: [
      'Everything in Essentials',
      'Continuous product development',
      'Evidence collection & analysis',
      'Priority communication',
      'Up to 3 active workstreams',
      'AI workflow integration',
    ],
    ctaText: 'Start a Conversation',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description:
      'For organizations that need a dedicated product and AI systems partner at scale.',
    features: [
      'Everything in Growth',
      'Dedicated team allocation',
      'Full product & ops integration',
      'Strategic advisory sessions',
      'Unlimited workstreams',
      'Custom AI system development',
      'SLA-backed support',
    ],
    ctaText: 'Schedule a Call',
  },
];
