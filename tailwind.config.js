/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['"Baloo 2"', 'cursive'],
      },
    },
    colors: {
      white: '#ffffff',
      background: '#fafafa',
      transparent: 'transparent',
      purple: {
        light: '#ebe5f9',
        DEFAULT: '#8047f8',
        dark: '#4b2995',
      },
      yellow: {
        light: '#f1e9c9',
        DEFAULT: '#dbac2c',
        dark: '#c47f17',
      },
      base: {
        card: '#f3f2f2',
        input: '#ededed',
        button: '#e6e5e5',
        hover: '#d7d5d5',
        label: '#8d8686',
        text: '#574f4d',
        subtitle: '#403937',
        title: '#272221',
      },
    },
  },
  plugins: [],
}
