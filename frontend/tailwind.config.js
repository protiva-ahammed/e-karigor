/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50:  '#f1f8f1',
            100: '#dceddc',
            200: '#b8dbb8',
            300: '#8cc48c',
            400: '#5aaa5a',
            500: '#2d8a2d',
            600: '#236e23',
            700: '#1a541a',
            800: '#123c12',
            900: '#0a280a',
            //  50:  '#fffbeb',
  // 100: '#fef3c7',
  // 200: '#fde68a',
  // 300: '#fcd34d',
  // 400: '#fbbf24',
  // 500: '#f59e0b',
  // 600: '#d97706',
  // 700: '#b45309',
  // 800: '#92400e',
  // 900: '#78350f',
        },
        dark: '#1a1410',
        card: '#fefce8',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        bangla:  ['Hind Siliguri', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-left': 'slideLeft 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
