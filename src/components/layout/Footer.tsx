'use client';

import { siteConfig, sectionIds } from '@/lib/constants/config';

const linkGroups = [
  {
    title: 'Links',
    links: [
      { label: 'Services', href: `#${sectionIds.productDev}` },
      { label: 'Process', href: `#${sectionIds.process}` },
      { label: 'Benefits', href: `#${sectionIds.benefits}` },
      { label: 'Pricing', href: `#${sectionIds.pricing}` },
      { label: 'FAQ', href: `#${sectionIds.faq}` },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

const socials = [
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-700/50 bg-brand-dark">
      {/* Top gradient accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"
      />

      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="font-heading text-lg font-bold text-neutral-50">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-body-sm text-neutral-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-body-sm text-neutral-300 transition-colors hover:text-neutral-50"
            >
              {siteConfig.email}
            </a>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700/50 bg-brand-surface text-neutral-400 transition-all duration-200 hover:border-neutral-700 hover:text-neutral-50"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-sm text-neutral-300 transition-colors hover:text-neutral-50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Back to top + newsletter-style CTA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Stay in touch
            </h4>
            <p className="text-body-sm text-neutral-400 leading-relaxed">
              Have a product challenge? Let&apos;s talk.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-flex items-center gap-2 text-body-sm text-brand-primary transition-colors hover:text-brand-accent"
            >
              hello@nextsketch.com
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-body-sm text-neutral-400 transition-colors hover:text-neutral-50"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 12V4M8 4L4 8M8 4L12 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-neutral-700/50 pt-6 text-center text-body-sm text-neutral-400">
          &copy; {year} {siteConfig.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
