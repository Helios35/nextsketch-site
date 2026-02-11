import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ClientProviders } from '@/components/ClientProviders';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next Sketch — Strategy-First, AI-Driven Product Partner',
  description:
    "Next Sketch helps founders decide what to build, why it matters, and who it's for — then build and validate it quickly using AI-first workflows.",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://nextsketch.com'),
  openGraph: {
    title: 'Next Sketch — Strategy-First, AI-Driven Product Partner',
    description:
      'Decide what to build. Validate why it matters. Ship it fast.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Next Sketch',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next Sketch — Strategy-First, AI-Driven Product Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Sketch — Strategy-First, AI-Driven Product Partner',
    description:
      'Decide what to build. Validate why it matters. Ship it fast.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
