/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'about': '0 35px 35px rgba(255, 255, 255, 0.5)'
      },
      keyframes: {
        rightappear: {
          '0%': {transform: 'translateX(-2rem)', opacity: 0},
          '100%': {transform: 'translateX(0)', opacity: 1}
        },
        leftappear: {
          '0%': {transform: 'translateX(2rem)', opacity: 0},
          '100%': {transform: 'translateX(0)', opacity: 1}
        },
        topappear: {
          '0%': {transform: 'translateY(-2rem)', opacity: 0},
          '100%': {transform: 'translateX(0)', opacity: 1}
        },
        bottomappear: {
          '0%': {transform: 'translateY(2rem)', opacity: 0},
          '100%': {transform: 'translateX(0)', opacity: 1}
        }
      },
      animation: {
        rightappear: 'rightappear 1s ease forwards',
        leftappear: 'leftappear 1s ease forwards',
        topappear: 'topappear 1s ease forwards',
        bottomappear: 'bottomappear 1s ease forwards'
      }
    },
  },
  plugins: [],
}
