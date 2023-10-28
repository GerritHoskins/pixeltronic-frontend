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
        primary: '#35869c',
        gray: colors.gray,
      },
    },
  },
  plugins: [],
});

export default config;
