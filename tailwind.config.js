/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables toggling dark mode using the 'dark' class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'spacing': 'margin, padding',
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.42, 0, 1, 1)',
        'out-expo': 'cubic-bezier(0, 0, 0.58, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
