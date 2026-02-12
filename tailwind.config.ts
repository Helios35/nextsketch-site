import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#814AC8',
          accent: '#DF7AFE',
          dark: '#000000',
          surface: '#0D0D0D',
        },
        neutral: {
          50: '#FFFFFF',
          200: '#E2E8F0',
          300: '#A1A1AA',
          400: '#71717A',
          700: '#222222',
          800: '#222222',
        },
      },
      fontFamily: {
        heading: ['var(--font-figtree)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        display: ['4rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        'display-sm': [
          '2.75rem',
          { lineHeight: '1.15', letterSpacing: '-0.02em' },
        ],
        h1: ['3rem', { lineHeight: '1.2' }],
        h2: ['2.25rem', { lineHeight: '1.3' }],
        h3: ['1.875rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        section: '6rem',
        container: '1200px',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(129, 74, 200, 0.3)',
        'glow-lg': '0 0 40px rgba(129, 74, 200, 0.4)',
        'glow-accent': '0 0 20px rgba(223, 122, 254, 0.3)',
        'card-hover':
          '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(129, 74, 200, 0.15)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(15px) translateX(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(129, 74, 200, 0.3)' },
          '50%': { borderColor: 'rgba(129, 74, 200, 0.6)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        grain: 'grain 8s steps(10) infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
