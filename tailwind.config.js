/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(288px, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 32rem) minmax(0, 15rem)',
      },
    },
  },
  plugins: [],
}
