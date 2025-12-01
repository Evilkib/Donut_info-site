module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'donut-blue': '#007BFF' },
      backgroundImage: { 'gradient-blue': 'linear-gradient(135deg, #0a0a0a 0%, #007BFF 100%)' }
    }
  },
  plugins: []
};
