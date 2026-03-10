/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1A1A2E',
        'brand-teal': '#0F86A6',
        'brand-light': '#F8F9FA',
        'text-primary': '#1A1A2E',
        'text-secondary': '#64748B',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'float': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin-slow 60s linear infinite',
      },
      keyframes: {
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
