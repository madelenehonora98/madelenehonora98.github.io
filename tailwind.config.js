/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        accent: '#f59e0b'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        fadeLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)'
          }
        }
      },
      animation: {
        fadeLeft: 'fadeLeft 2000ms cubic-bezier(0.4, 0, 0.2, 1) forwards'
      }
    }
  },
  plugins: []
}
