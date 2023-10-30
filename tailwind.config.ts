import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import defineTailwindConfig from './src/config';

const config: Config = defineTailwindConfig({
  content: ['./src/**/*.{js,vue,ts}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#60cfe6',
          100: '#093138',
          200: '#126171',
          300: '#1a92a9',
          400: '#28bfdd',
          500: '#60cfe6',
          600: '#80d9eb',
          700: '#a0e3f0',
          800: '#bfecf5',
          900: '#dff6fa',
        },
      },
      boxShadow: {
        'logo-shadow': '-15px -16px #80d9eb',
      },
      animation: {
        'pulse-slow': 'pulse 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
});

export default config;
