import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

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
    },
  },
  plugins: [],
});

export default config;
