function range(start, end, increment = 1) {
  const count = Math.floor((end - start + 1) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 140;

const minSpacingPixel = 0;
const maxSpacingPixel = 1000;
const spacingPixelIncrement = 5;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'msm': '320px',
        'mmd': '375px',
        'mlg': '425px',
        'lap': '890px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontfamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {}),
      },
      colors: {
        white: '#FFFFFF',
        'dark-jungle': '#1F1F1F',
        dawn: '#A2A2A2',
        headerColor: '#0D0D0D',
        pink: 'rgb(255,192,203)',
        redpink: '#FC364C',
        navLine1: '#665AEF',
        navLine2: '#FC364C',
        bodycolor1: 'rgba(83, 80, 233, 0.3)',
        bodycolor2: 'rgba(252, 54, 76, 0)',
        woodsmoke: '#0D0D0D',
        oslogrey: '#8E8B8F',
        rhino: '#2E2D66',
        tuna: '#3A273F',
        rangoon: '#181818',
      },
      textIndent: {
        57: '57px',
      },
      boxShadow:{
        navSearch: '0_4px_4px_rgba(0,0,0,0.25)',
      }
    },
    spacing: {
      //...range(minSpacingPixel, 100, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...range(minSpacingPixel, maxSpacingPixel, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      '1/2': '50%',
      '40p': '40%',
      '85p' : '85%',
      '1/10' : '10%',
      '1/20' : '5%',
      '2/10' : '20%',
      '1/4' : '25%',
      '1/2' : '50%',
      '1/7' : '14%',
      '1/14' : '7%',
      '1/16' : '8%',
      '3/10':'30%',
      min: 'min-content',
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
      ...range(minSpacingPixel, 50, 5).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },
    maxWidth: {
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '1440px',
      xl: '36rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      657: '657px',
      800: '800px',
      '1/2': '50%',
    },
  },
  plugins: [],
}
