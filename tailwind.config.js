// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
};
