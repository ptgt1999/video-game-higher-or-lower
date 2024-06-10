const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*/ *.index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arcade': "src(assets/images/arcade-carpet-blurred.jpg)"
      },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'cyan': '#0891b2',
      'fuschia': '#a21caf',
      'pink': '#db2777',
      'orange': '#ea580c',
      'emerald': '#10b981',
      'amber': '##f59e0b',
      'gray-dark': '#1c1917',
      'gray': '#8492a6',
      'gray-light': '#d6d3d1',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
