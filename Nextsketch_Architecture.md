# Next Sketch Architecture

## Document Purpose

This document defines the **structural and technical implementation** of the Next Sketch rebrand. It covers site architecture, component structure, navigation, content sections, file organization, and coding standards.

**For strategic foundation:** See `System_Context.md`

---

## Table of Contents

1. [Site Architecture](#1-site-architecture)
2. [Page Structure](#2-page-structure)
3. [Section Breakdown](#3-section-breakdown)
4. [Component Architecture](#4-component-architecture)
5. [File Structure](#5-file-structure)
6. [Navigation & Routing](#6-navigation--routing)
7. [Design Tokens](#7-design-tokens)
8. [Animation System](#8-animation-system)
9. [CTA Implementation](#9-cta-implementation)
10. [Content Management](#10-content-management)
11. [Technical Stack](#11-technical-stack)
12. [Coding Standards](#12-coding-standards)

---

## 1. Site Architecture

### Phase 1: Single-Page Application

```
/
└── Homepage (Single-page scroll)
    ├── Hero Section
    ├── Offering 1: AI-First Product Development
    ├── Offering 2: AI Workflow Integration
    ├── Process Visualization
    ├── Benefits Section
    ├── FAQ
    └── Footer + CTA
```

### Future Expansion Structure (Post-Phase 1)

```
/
├── Homepage (/)
├── About (/about)
├── Product Development (/product-development)
├── Workflow Integration (/workflow-integration)
├── Approach (/approach)
└── Contact (/contact)
    └── Conversation Qualifier
```

### URL Strategy
- **Phase 1:** All content on root (`/`)
- **Phase 2+:** Expansion into sub-routes without breaking existing URLs
- **Conversation Qualifier:** Can be modal or `/start-conversation` page (TBD)

---

## 2. Page Structure

### Homepage Layout (Single-Page Scroll)

**Overall Structure:**
```
┌─────────────────────────────────────┐
│         Navigation Bar              │ ← Sticky (optional)
├─────────────────────────────────────┤
│                                     │
│         Hero Section                │ ← Viewport height
│      (Value Prop + CTA)             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   Offering 1: AI-First Product Dev  │ ← Primary offering
│        (Detailed section)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   Offering 2: AI Workflow           │ ← Secondary offering
│        (Supporting section)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     Process Visualization           │ ← How we work
│      (4-step framework)             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      Benefits Section               │ ← Why Next Sketch
│    (3-4 key value props)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         FAQ Section                 │ ← Qualification
│     (Accordion or cards)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    Footer + Final CTA               │ ← Conversion
│                                     │
└─────────────────────────────────────┘
```

### Viewport Sizing
- **Hero:** 100vh (full viewport)
- **Sections:** Min 60vh, max-content based
- **Footer:** Auto height

---

## 3. Section Breakdown

### Section 1: Hero

**Purpose:** Immediate clarity on what Next Sketch does and who it's for

**Content Elements:**
- **Headline:** Core positioning statement
  - "Next Sketch helps founders decide what to build, why it matters, and who it's for—then build and validate it quickly using AI-first workflows."
- **Subheadline:** Expansion or clarification (optional)
- **Primary CTA:** "Start a Conversation"
- **Visual Element:** Abstract/technical animation or static graphic (not portfolio)

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│         [Brand Logo/Name]               │
│                                         │
│     ┌─────────────────────────┐         │
│     │     HEADLINE TEXT       │         │
│     │   (Large, centered)     │         │
│     └─────────────────────────┘         │
│                                         │
│       Subheadline explanation           │
│                                         │
│      [Start a Conversation CTA]         │
│                                         │
│     [Visual Element/Animation]          │
│                                         │
└─────────────────────────────────────────┘
```

**Design Considerations:**
- Generous whitespace
- Focal point on headline
- CTA prominent but not aggressive
- Visual supports message (doesn't distract)

---

### Section 2: AI-First Product Development (Primary Offering)

**Purpose:** Detail the core offering for founders

**Content Elements:**
- **Section Header:** "AI-First Product Development" or similar
- **Positioning Statement:** "Decide what to build—fast"
- **What We Build:** List (SaaS, tools, platforms)
- **Positioning Pillars:** 4 key principles
  - Strategy first, but fast
  - Decisions before code
  - Validation before scale
  - Evidence-driven evolution
- **Visual Element:** Process illustration, UI mockup, or workflow diagram
- **CTA:** "Learn About Product Development" or "Start a Conversation"

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│  AI-First Product Development          │
│  ────────────────────────────           │
│                                         │
│  [Positioning Statement]                │
│                                         │
│  ┌────────────┐  ┌────────────┐        │
│  │  What We   │  │  Interactive│        │
│  │   Build    │  │   Visual    │        │
│  │   • SaaS   │  │   Element   │        │
│  │   • Tools  │  │             │        │
│  │   • Platforms│ │             │        │
│  └────────────┘  └────────────┘        │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   │
│  │Pill1│  │Pill2│  │Pill3│  │Pill4│   │
│  │ ar 1│  │ ar 2│  │ ar 3│  │ ar 4│   │
│  └─────┘  └─────┘  └─────┘  └─────┘   │
│                                         │
│           [Section CTA]                 │
│                                         │
└─────────────────────────────────────────┘
```

**Interactive Element Ideas (Xtract-inspired):**
- Animated task completion flow
- Product roadmap visualization
- Decision tree diagram
- Code/design switching view

---

### Section 3: AI Workflow & Process Integration (Secondary Offering)

**Purpose:** Present the operational offering without overshadowing primary

**Content Elements:**
- **Section Header:** "AI Workflow & Process Integration"
- **Positioning Statement:** "Same discipline applied inward"
- **What We Build:** List (operations, automation, friction reduction)
- **Positioning Pillars:** 3-4 key principles
- **Visual Element:** Workflow diagram or automation sequence
- **CTA:** "Explore Workflow Integration" or "Start a Conversation"

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│  AI Workflow & Process Integration      │
│  ────────────────────────────────       │
│                                         │
│  [Positioning Statement]                │
│                                         │
│  ┌────────────────────────────────┐    │
│  │   Interactive Workflow Viz      │    │
│  │                                 │    │
│  │   Step 1 → Step 2 → Step 3     │    │
│  │     ↓         ↓         ↓       │    │
│  │  Automated  Reduced  Improved   │    │
│  │                                 │    │
│  └────────────────────────────────┘    │
│                                         │
│  • Internal tools                       │
│  • Workflow automation                  │
│  • Friction reduction                   │
│  • Cost optimization                    │
│                                         │
│           [Section CTA]                 │
│                                         │
└─────────────────────────────────────────┘
```

**Design Considerations:**
- Less visual weight than primary offering
- Equally professional, but supporting role
- Clear differentiation from Product Development
- Emphasize extension of methodology

---

### Section 4: Process Visualization

**Purpose:** Show how strategy moves to execution quickly

**Content Elements:**
- **Section Header:** "How We Work" or "Our Process"
- **Process Steps:** 3-4 key phases
  1. **Rapid Strategy** (days not months)
  2. **Immediate Execution** (build based on decisions)
  3. **Evidence Collection** (validate with data)
  4. **Continuous Evolution** (iterate based on proof)
- **Timeline Indicator:** Visual representation of speed
- **Differentiator:** Emphasis on "fast" at each stage

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│           Our Process                   │
│  Strategy That Moves at Product Speed   │
│  ──────────────────────────────────     │
│                                         │
│  ┌──────┐    ┌──────┐    ┌──────┐      │
│  │Step 1│───▶│Step 2│───▶│Step 3│───▶  │
│  │Rapid │    │Build │    │Valid │      │
│  │Strat │    │Fast  │    │Evide │      │
│  └──────┘    └──────┘    └──────┘      │
│     ↓            ↓            ↓         │
│  Days not    Decisions  Proof not      │
│  months      to code     assumptions    │
│                                         │
│  [Timeline: Week 1 → Week 2 → Ongoing] │
│                                         │
└─────────────────────────────────────────┘
```

**Interactive Element Ideas:**
- Animated timeline progression
- Hover states showing more detail per step
- Comparison: Traditional vs Next Sketch timeline
- Drag-to-explore timeline (Xtract style)

---

### Section 5: Benefits

**Purpose:** Communicate why Next Sketch vs alternatives

**Content Elements:**
- **Section Header:** "Why Next Sketch" or "The Advantage"
- **Benefit Cards:** 3-4 key differentiators
  1. **Speed Without Sacrifice** (fast but rigorous)
  2. **Modern Tooling** (AI-first workflows)
  3. **Evidence-Driven** (validation before scale)
  4. **Continuous Partnership** (retainer continuity implied)
- **Supporting Copy:** Brief explanation per benefit

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│         Why Next Sketch                 │
│  ──────────────────────                 │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ Benefit  │  │ Benefit  │  │Benefit│ │
│  │    1     │  │    2     │  │   3   │ │
│  │          │  │          │  │       │ │
│  │ [Icon]   │  │ [Icon]   │  │[Icon] │ │
│  │  Speed   │  │  Modern  │  │Evidence││
│  │ Without  │  │ Tooling  │  │Driven │ │
│  │Sacrifice │  │          │  │       │ │
│  │          │  │          │  │       │ │
│  └──────────┘  └──────────┘  └───────┘ │
│                                         │
│  [Optional 4th benefit card]            │
│                                         │
└─────────────────────────────────────────┘
```

**Alternative Layout:** Horizontal scroll carousel (Xtract style)
- Benefits as larger cards
- Drag or arrow navigation
- More visual space per benefit

---

### Section 6: FAQ

**Purpose:** Address objections and reinforce positioning

**Content Elements:**
- **Section Header:** "Frequently Asked Questions"
- **Question/Answer Pairs:** 5-8 strategic FAQs
  - Example questions:
    - "How is this different from a traditional agency?"
    - "What's your typical engagement timeline?"
    - "Do you work with early-stage startups?"
    - "What does 'fast strategy' actually mean?"
    - "How do you price engagements?"
- **Format:** Accordion (collapsible) or card-based

**Layout (Accordion):**
```
┌─────────────────────────────────────────┐
│                                         │
│   Frequently Asked Questions            │
│  ──────────────────────────              │
│                                         │
│  ▼ How is this different from...        │
│     [Answer text expanded]              │
│                                         │
│  ▸ What's your typical timeline?        │
│                                         │
│  ▸ Do you work with early-stage...      │
│                                         │
│  ▸ What does 'fast strategy' mean?      │
│                                         │
│  ▸ How do you price engagements?        │
│                                         │
└─────────────────────────────────────────┘
```

**Strategic FAQ Answers:**
- Use answers to reinforce positioning
- Exclude wrong buyers implicitly
- Emphasize speed, rigor, retainer model
- Link to conversation qualifier where appropriate

---

### Section 7: Footer + Final CTA

**Purpose:** Final conversion opportunity and legal/contact info

**Content Elements:**
- **Final CTA:** "Start a Conversation" (repeated)
- **Company Info:** Next Sketch LLC, copyright
- **Legal Links:** Privacy Policy (if needed), Terms (if needed)
- **Contact:** Email or form link
- **NO Social Links** (unless strategic decision made)

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│    Ready to Move Fast?                  │
│                                         │
│    [Start a Conversation - Large CTA]   │
│                                         │
│  ────────────────────────────────       │
│                                         │
│  Next Sketch LLC                        │
│  Strategy-first, AI-driven partner      │
│                                         │
│  © 2026 Next Sketch LLC                 │
│  [Privacy] [Terms] [Contact]            │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. Component Architecture

### Component Hierarchy

```
App
├── Layout
│   ├── Navigation (optional sticky header)
│   └── Footer
├── Sections
│   ├── HeroSection
│   │   ├── Headline
│   │   ├── Subheadline
│   │   ├── PrimaryCTA
│   │   └── HeroVisual
│   ├── OfferingSection (reusable)
│   │   ├── OfferingHeader
│   │   ├── OfferingContent
│   │   ├── OfferingPillars (cards)
│   │   ├── OfferingVisual (interactive)
│   │   └── OfferingCTA
│   ├── ProcessSection
│   │   ├── ProcessHeader
│   │   ├── ProcessSteps (array)
│   │   └── ProcessTimeline
│   ├── BenefitsSection
│   │   ├── BenefitsHeader
│   │   └── BenefitCards (array)
│   ├── FAQSection
│   │   ├── FAQHeader
│   │   └── FAQAccordion (items array)
│   └── FooterCTA
├── UI Components
│   ├── Button
│   ├── Card
│   ├── Accordion
│   ├── AnimatedElement (scroll trigger wrapper)
│   └── InteractiveVisual (custom per section)
└── ConversationQualifier
    ├── QualifierModal (if modal approach)
    └── QualifierForm
```

### Reusable Components

**Button Component:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'text';
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
}
```

**Card Component:**
```typescript
interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'offering' | 'benefit';
  interactive?: boolean;
  children?: React.ReactNode;
}
```

**Accordion Component:**
```typescript
interface AccordionItem {
  question: string;
  answer: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number[];
}
```

**AnimatedElement Wrapper:**
```typescript
interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number; // IntersectionObserver threshold
}
```

---

## 5. File Structure

### Recommended Directory Organization

```
/nextsketch-rebrand
├── /public
│   ├── /images
│   │   ├── hero-visual.svg
│   │   ├── offering-1-visual.svg
│   │   ├── offering-2-visual.svg
│   │   └── icons/
│   └── /fonts (if custom fonts)
├── /src
│   ├── /components
│   │   ├── /layout
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── /sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── OfferingSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── FooterCTA.tsx
│   │   ├── /ui
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── AnimatedElement.tsx
│   │   └── /qualifier
│   │       ├── QualifierModal.tsx
│   │       └── QualifierForm.tsx
│   ├── /lib
│   │   ├── /constants
│   │   │   ├── content.ts (all copy)
│   │   │   ├── config.ts (site config)
│   │   │   └── faqs.ts (FAQ data)
│   │   └── /utils
│   │       ├── animations.ts
│   │       └── helpers.ts
│   ├── /styles
│   │   ├── globals.css (Tailwind imports)
│   │   └── animations.css (custom keyframes)
│   ├── /app (Next.js 13+ app directory)
│   │   ├── layout.tsx
│   │   ├── page.tsx (homepage)
│   │   └── /start-conversation (if separate page)
│   │       └── page.tsx
│   └── /types
│       └── index.ts (TypeScript types)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### File Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Utilities:** camelCase (e.g., `animations.ts`)
- **Constants:** camelCase (e.g., `content.ts`)
- **Types:** PascalCase for interfaces (e.g., `ButtonProps`)

---

## 6. Navigation & Routing

### Phase 1: No Navigation Bar

**Rationale:**
- Single-page scroll doesn't need traditional nav
- Reduces cognitive load
- Focuses attention on content flow
- Clean, minimal aesthetic

**Alternative:** Floating "Start Conversation" CTA (optional)
- Small, persistent button in corner
- Appears after hero section scroll
- Non-intrusive

### Future Navigation (Post-Phase 1)

When expanding to multi-page:

```
┌────────────────────────────────────────────┐
│ [Logo]    About  Approach  Contact   [CTA] │
└────────────────────────────────────────────┘
```

**Structure:**
- Logo: Links to home
- Links: About, Approach, Contact
- CTA: "Start a Conversation" (prominent)
- Mobile: Hamburger menu

---

## 7. Design Tokens

### Color System (To Be Defined)

**Base Structure:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#______', // Main brand color
          secondary: '#______', // Accent color
          dark: '#______', // Headings, emphasis
          light: '#______', // Backgrounds, subtle
        },
        neutral: {
          50: '#______',
          100: '#______',
          200: '#______',
          // ... through 900
        },
        success: '#______',
        warning: '#______',
        error: '#______',
      },
    },
  },
};
```

**Usage Examples:**
- `text-brand-primary` (headlines)
- `bg-brand-secondary` (CTAs)
- `text-brand-dark` (body copy)
- `bg-neutral-50` (section backgrounds)

### Typography System

```javascript
// tailwind.config.js - typography extension
fontSize: {
  'display': ['4rem', { lineHeight: '1.1' }], // Hero headlines
  'h1': ['3rem', { lineHeight: '1.2' }],
  'h2': ['2.25rem', { lineHeight: '1.3' }],
  'h3': ['1.875rem', { lineHeight: '1.4' }],
  'body-lg': ['1.125rem', { lineHeight: '1.6' }],
  'body': ['1rem', { lineHeight: '1.6' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5' }],
}

fontWeight: {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}
```

### Spacing System

```javascript
// Use Tailwind defaults, extend if needed
spacing: {
  'section': '6rem', // Space between sections
  'container': '1200px', // Max content width
}
```

### Border Radius

```javascript
borderRadius: {
  'sm': '0.25rem',
  'md': '0.5rem',
  'lg': '1rem',
  'xl': '1.5rem',
  'full': '9999px',
}
```

---

## 8. Animation System

### Scroll-Triggered Animations

**Implementation:** IntersectionObserver + Framer Motion

**Base AnimatedElement Component:**
```typescript
const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
}) => {
  const [ref, inView] = useInView({ threshold });

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[animation]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
```

### Animation Patterns

**Hero Section:**
- Headline: Fade in
- Subheadline: Slide up (delay 0.2s)
- CTA: Scale (delay 0.4s)
- Visual: Fade in (delay 0.6s)

**Offering Sections:**
- Header: Slide up
- Content: Fade in (staggered)
- Visual: Slide from side
- CTA: Scale

**Process Section:**
- Steps: Slide up (staggered 0.1s each)
- Timeline: Draw/animate from left to right

**Benefits:**
- Cards: Slide up (staggered)
- Hover states: Subtle scale + shadow

### Performance Considerations

**Only Animate:**
- `transform` (translate, scale, rotate)
- `opacity`

**Never Animate:**
- `width`, `height` (causes reflow)
- `top`, `left` (use translate instead)
- `background-color` (use opacity overlay instead)

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. CTA Implementation

### Primary CTA: "Start a Conversation"

**Placement:**
1. Hero section (primary)
2. End of each offering section (secondary)
3. Footer (final conversion)
4. Optional: Floating button after scroll

### CTA Component

```typescript
interface CTAButtonProps {
  text?: string; // Default: "Start a Conversation"
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text = 'Start a Conversation',
  variant = 'primary',
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-8 py-4 rounded-lg font-semibold transition-all',
        'hover:scale-105 focus:outline-none focus:ring-4',
        variant === 'primary' && 'bg-brand-primary text-white hover:bg-brand-primary/90',
        variant === 'secondary' && 'bg-brand-secondary text-white hover:bg-brand-secondary/90',
        className
      )}
    >
      {text}
    </button>
  );
};
```

### Conversation Qualifier Flow

**Option 1: Modal Approach**
```
User clicks CTA → Modal opens → Form appears → User fills qualifier → Submit → Redirect to calendar/email
```

**Option 2: Dedicated Page**
```
User clicks CTA → Navigate to /start-conversation → Form on page → Submit → Thank you + next steps
```

**Option 3: Hybrid**
```
User clicks CTA → Modal with short qualifier → If qualified, link to full page → Schedule/contact
```

**Recommended:** Option 1 (Modal) for Phase 1
- Less friction
- Keeps user on page
- Can be converted to page later

---

## 10. Content Management

### CMS Integration (Lightweight)

**Recommended Options:**
1. **Contentful** (Headless CMS)
2. **Sanity** (Structured content)
3. **DatoCMS** (Developer-friendly)

**What to Make Editable:**
- ✅ All copy (headlines, body text, CTAs)
- ✅ FAQ questions/answers
- ✅ Offering descriptions
- ✅ Process steps
- ❌ Component structure (hardcoded)
- ❌ Layout (hardcoded)
- ❌ Design tokens (in code)

### Content Structure

**Example: Offering Content Type**
```typescript
interface OfferingContent {
  id: string;
  title: string; // "AI-First Product Development"
  slug: string; // "product-development"
  tagline: string; // "Decide what to build—fast"
  description: string; // Long-form description
  whatWeBuild: string[]; // Array of bullet points
  pillars: {
    title: string;
    description: string;
  }[];
  ctaText: string; // "Learn About Product Development"
  visualType: 'workflow' | 'mockup' | 'diagram';
  isPrimary: boolean; // Determines visual weight
}
```

### Content Constants (Fallback)

If no CMS initially, store content in `/lib/constants/content.ts`:

```typescript
// content.ts
export const heroContent = {
  headline: "Next Sketch helps founders decide what to build...",
  subheadline: "Strategy that moves at product speed.",
  ctaText: "Start a Conversation",
};

export const offerings = {
  productDevelopment: {
    title: "AI-First Product Development",
    tagline: "Decide what to build—fast",
    // ... rest of content
  },
  workflowIntegration: {
    // ... content
  },
};

export const faqs = [
  {
    question: "How is this different from a traditional agency?",
    answer: "We're not an agency. We're a strategic partner...",
  },
  // ... more FAQs
];
```

---

## 11. Technical Stack

### Core Technologies

**Framework:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+

**Styling:**
- Tailwind CSS 3+
- CSS Modules (if needed for component-specific styles)
- Framer Motion (animations)

**Content:**
- Contentful / Sanity / DatoCMS (CMS)
- Or local content files initially

**Deployment:**
- Vercel (recommended for Next.js)
- Netlify (alternative)
- Custom hosting (if needed)

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "clsx": "^2.0.0", // Conditional classnames
    "tailwind-merge": "^2.0.0" // Merge Tailwind classes
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Build Configuration

**Next.js Config:**
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['your-cms-domain.com'], // If using CMS images
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
};
```

**Tailwind Config:**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Design tokens here
    },
  },
  plugins: [],
};
```

---

## 12. Coding Standards

### TypeScript Standards

**Component Props:**
```typescript
// Always define explicit interfaces
interface ComponentProps {
  title: string;
  description?: string; // Optional props marked with ?
  onClick: () => void; // Functions explicitly typed
  children?: React.ReactNode;
}

// Use FC type
const Component: React.FC<ComponentProps> = ({ title, description, onClick }) => {
  // Component logic
};
```

**Event Handlers:**
```typescript
// Explicit event types
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  // Handler logic
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // Handler logic
};
```

### Component Standards

**File Organization:**
```typescript
// Component.tsx structure:

// 1. Imports
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// 2. Types/Interfaces
interface ComponentProps {
  // Props definition
}

// 3. Constants (if needed)
const ANIMATION_DURATION = 0.6;

// 4. Component
export const Component: React.FC<ComponentProps> = (props) => {
  // 5. Hooks
  const [state, setState] = useState();
  
  // 6. Handlers
  const handleClick = () => {};
  
  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

**Component Size Limit:** 200 lines maximum
- If exceeding, split into smaller components
- Extract logic into custom hooks
- Move constants to separate files

### Naming Conventions

**Components:** PascalCase
- `HeroSection`, `Button`, `AnimatedElement`

**Functions:** camelCase
- `handleClick`, `calculateScore`, `fetchData`

**Constants:** SCREAMING_SNAKE_CASE
- `MAX_WIDTH`, `ANIMATION_DURATION`

**Props/Interfaces:** PascalCase + Props/Interface suffix
- `ButtonProps`, `UserInterface`

### Accessibility Standards

**Semantic HTML:**
```tsx
// Good
<nav>
  <a href="#offerings">Offerings</a>
</nav>

// Bad
<div onClick={handleNav}>
  <span>Offerings</span>
</div>
```

**ARIA Attributes:**
```tsx
<button
  aria-label="Start a conversation"
  aria-expanded={isOpen}
>
  Start a Conversation
</button>

<section aria-labelledby="offerings-heading">
  <h2 id="offerings-heading">Our Offerings</h2>
</section>
```

**Keyboard Navigation:**
- All interactive elements must be keyboard-accessible
- Tab order should be logical
- Focus states must be visible

**Color Contrast:**
- WCAG AA minimum: 4.5:1 for normal text
- WCAG AA minimum: 3:1 for large text (18pt+)
- Test all text/background combinations

### Performance Standards

**Code Splitting:**
```typescript
// Lazy load non-critical components
const QualifierModal = lazy(() => import('@/components/qualifier/QualifierModal'));
```

**Image Optimization:**
```tsx
import Image from 'next/image';

<Image
  src="/images/hero-visual.svg"
  alt="Product development visualization"
  width={800}
  height={600}
  priority // For hero images
  placeholder="blur" // If possible
/>
```

**Font Optimization:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

### Testing Checklist

**Component Tests:**
- [ ] Component renders without errors
- [ ] Props are passed correctly
- [ ] Event handlers function as expected
- [ ] Accessibility attributes present

**Visual Tests:**
- [ ] Desktop layout (1920px, 1440px, 1024px)
- [ ] Tablet layout (768px)
- [ ] Mobile layout (375px, 320px)
- [ ] Dark mode (if applicable)

**Interaction Tests:**
- [ ] Hover states work
- [ ] Click/tap interactions function
- [ ] Keyboard navigation works
- [ ] Focus states visible

**Performance Tests:**
- [ ] Lighthouse score >90
- [ ] Load time <2 seconds
- [ ] No layout shift (CLS <0.1)
- [ ] Images lazy-load correctly

---

## 13. Deployment Checklist

### Pre-Launch
- [ ] All content finalized and reviewed
- [ ] CTA flow tested (qualifier + follow-up)
- [ ] Forms validated and spam-protected
- [ ] Analytics installed (if using)
- [ ] SEO meta tags configured
- [ ] Favicon and OG images added
- [ ] 404 page designed
- [ ] Mobile tested on real devices
- [ ] Performance audit completed
- [ ] Accessibility audit completed

### Launch Day
- [ ] DNS configured
- [ ] SSL certificate active
- [ ] Monitoring configured
- [ ] Backup created
- [ ] Team notified

### Post-Launch
- [ ] Monitor performance metrics
- [ ] Track qualifier completion rate
- [ ] Review user feedback
- [ ] Iterate based on data

---

## Document Version Control

**Version:** 1.0  
**Date:** February 2026  
**Status:** Initial Architecture  
**Next Review:** After Phase 1 implementation

**Related Documents:**
- `System_Context.md` - Strategic foundation
- `Brand_Direction.md` - Brand evolution
- `Messaging___Positioning.md` - Content strategy
- `Technical_Scope.md` - Phase 1 requirements

---

**End of Architecture Document**

This document should be referenced throughout development for all structural, technical, and implementation decisions. Updates should be made as the project evolves.
