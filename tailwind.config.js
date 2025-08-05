/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e8f0fe',
          100: '#d0e3ff',
          500: '#3f51b5',
          600: '#2c3e50',
        },
        secondary: {
          500: '#6a1b9a',
        },
        gray: {
          50: '#f8f8f8',
          100: '#f0f4f8',
          200: '#e0e0e0',
          300: '#ddd',
          600: '#2d3436',
        }
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
} 