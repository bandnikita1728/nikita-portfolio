/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#1A0E2E',
        'bg-purple': '#5B2A86',
        'bg-magenta': '#C13584',
        'bg-blue': '#4FACFE',
        'text-muted': 'rgba(255,255,255,0.65)',
        'text-faint': 'rgba(255,255,255,0.45)',
        glass: 'rgba(255,255,255,0.06)',
        'glass-border': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'monospace'],
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(90deg, #4FACFE 0%, #A78BFA 100%)',
        'page-grad': 'radial-gradient(circle at 75% 35%, #C13584 0%, #5B2A86 35%, #1A0E2E 70%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
