/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      IranYekan: ['IranYekan'],
      'IranYekan-Bold': ['IranYekan-Bold'],
      Morabba: ['Morabba'],
    },
    extend: {
      flex: {
        3: '1 1 33.33%',
      },
      colors: {
        primary: '#0182FE',
        secondary: '#FE3E01',
        midnight: '#171F26',
        error: '#C30000',
        'error-pale': '#ED2E2E',
        'error-bg': '#FFF2F2',
        success: '#00966D',
        'success-pale': '#00BABB',
        'success-bg': '#F3FDFA',
        warning: '#A9791C',
        'warning-pale': '#F48B740',
        'warning-bg': '#FFF8E1',
        'ocean-blue': '#0172DE',
        'sky-blue': '#60B1FE',
        'pale-blue': '#DFEFFF',
        'rusty-orange': '#DE3601',
        blush: '#FFE7DF',
        salmon: '#FE8660',
        slate: '#414A51',
        silver: '#CBCBCB',
        'light-silver': '#EDEDED',
        'pale-silver': '#F2F2F2',
        white: '#FFFFFF',
        'deep-pink': '#D12879',
        'neon-green': '#2FDB9D',
      },

      screens: {
        '2xs': '260px',
        xs: '360px',
      },
    },
  },
  plugins: [],
}
