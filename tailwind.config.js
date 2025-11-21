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
          blue: '#0071e3',
          darkblue: '#0051a8',
          gray: '#1d1d1f',
          lightgray: '#f5f5f7',
          text: '#1d1d1f',
          subtext: '#86868b',
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


