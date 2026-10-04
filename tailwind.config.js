/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette (electric indigo / ink)
        brand: {
          ink: '#0a0a0a',          // near-black for headlines
          indigo: '#5b3df5',       // primary accent
          'indigo-dark': '#4a2fd6',// hover / pressed
          violet: '#8b6cff',       // lighter accent / gradients
          surface: '#f4f4f5',      // light surface
          border: '#e4e4e7',       // hairline border
          subtext: '#52525b',      // secondary text
        },
        // Legacy "apple" tokens repointed to the new theme so existing
        // components inherit the retheme without per-file edits.
        apple: {
          blue: '#5b3df5',
          darkblue: '#4a2fd6',
          black: '#0a0a0a',
          gray: '#0a0a0a',
          lightgray: '#f4f4f5',
          bg: '#ffffff',
          text: '#0a0a0a',
          subtext: '#52525b',
          border: '#e4e4e7',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Display type scale — heavy grotesk headlines with tight tracking
      fontSize: {
        'display-2xl': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-xl': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'headline': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'title': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'lead': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.5', letterSpacing: '-0.005em', fontWeight: '400' }],
      },
      letterSpacing: {
        tight: '-0.015em',
        tighter: '-0.03em',
        mono: '0.15em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
      },
      maxWidth: {
        'content': '76rem',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.04), 0 10px 30px -10px rgba(0,0,0,0.08)',
        'card': '0 2px 8px rgba(0,0,0,0.04), 0 20px 40px -24px rgba(0,0,0,0.12)',
        'glow': '0 0 0 1px rgba(91,61,245,0.08), 0 20px 60px -20px rgba(91,61,245,0.45)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        'grid-pan': 'grid-pan 20s linear infinite',
      },
    },
  },
  plugins: [],
}
