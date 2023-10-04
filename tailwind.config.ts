/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'Sora-Regular']
      },
      colors: {
        astral: {
          50: '#f1f9fa',
          100: '#daeff3',
          200: '#badfe7',
          300: '#8ac8d6',
          400: '#53a8bd',
          500: '#35869c',
          600: '#317289',
          700: '#2d5d71',
          800: '#2c4f5e',
          900: '#284351',
          950: '#162b36'
        }
      },
      backgroundImage: {
        'gradient-top':
          'linear-gradient(0deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-right':
          'linear-gradient(90deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-bottom':
          'linear-gradient(180deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-left':
          'linear-gradient(270deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-top-right':
          'linear-gradient(45deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-bottom-right':
          'linear-gradient(135deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-top-left':
          'linear-gradient(225deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-bottom-left':
          'linear-gradient(315deg, #c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)',
        'gradient-radial': 'radial-gradient(#c5c5c5ff, #4c5b61ff, #829191ff, #949b96ff, #2c423fff)'
      }
    }
  },
  plugins: []
}
