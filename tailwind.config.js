/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/**/*.{js,jsx}',
    'src/pages/**/*.{js,jsx}',
    'src/base/layouts/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'sm-custom': '500px',
      },
    },
  },
  plugins: [],
};
