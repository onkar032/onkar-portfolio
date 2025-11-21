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
        apple: {
          blue: '#52525b',      // Grey-600 (was blue) - Main accent
          darkblue: '#3f3f46',  // Grey-700 (was dark blue) - Darker accent
          gray: '#1d1d1f',      // Dark grey (unchanged)
          lightgray: '#f5f5f7', // Light grey (unchanged)
          text: '#1d1d1f',      // Text color (unchanged)
          subtext: '#86868b',   // Subtext (unchanged)
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.015em',
        tighter: '-0.03em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
      },
    },
  },
  plugins: [],
}


