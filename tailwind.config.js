/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      extend: {
          colors: {
            'login':'rgba(255,255,255,0.55)'
          },
          boxShadow: {
              'login':'0 4px 30px #4747470b',
          }
    },
  },
  plugins: [],
}
