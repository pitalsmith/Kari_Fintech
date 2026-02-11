// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

//   presets: [require('nativewind/preset')],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };




/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add './*.{js,ts,tsx}' to cover files like ProfileScreen.tsx in the root
  content: [
    './App.{js,ts,tsx}', 
    './ProfileScreen.{js,ts,tsx}', 
    './components/**/*.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};