import { siteConfig } from '@/lib/constants/config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-brand-dark">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-neutral-50">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-body-sm text-neutral-400">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-body-sm text-neutral-300 transition-colors hover:text-neutral-50"
            >
              {siteConfig.email}
            </a>
            <div className="flex gap-4 text-body-sm text-neutral-400">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-800 pt-6 text-center text-body-sm text-neutral-400">
          &copy; {year} {siteConfig.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
