module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        Urbanist: ['Urbanist', 'sans-serif'],
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12:'12',
        13:'13',
        14:'14',
        15:'15',
        16:'16',
        17:'17',
        18:'18',
        19:'19',
        20:'20',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
