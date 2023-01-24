/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      'background-gray':'#fafafa',
      'light-gray':'#909296',
      'white':'#fff',
      'black':'#000',
      'dark-blue':'#012a93',
      'dark-blue-900':'#031e63',
      'blue-100':'#f5f6fb',
      'green-800':'#30984c',
      'red':'#b20c0c',
      'blue-200':'#2d62ed',
      'green-1000':'#103c6e'

        }
  },
  plugins: [],
}
