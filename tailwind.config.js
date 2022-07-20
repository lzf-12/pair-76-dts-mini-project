/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      spacing: {
        '2/3': '66.666667%'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
