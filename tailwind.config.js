/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'green': {
          '600': theme('colors.green.600'),
          '700': theme('colors.green.700'),
        },
      }),
    },
  },
  plugins: [],
}

