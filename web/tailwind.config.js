module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
         brand: { // definindo novos tons para a cor 'brand'
            300: '#996DFF',
            500: '#8257e6'
         }
      },
      borderRadius: {
         md: '4px' //sobreescrevendo a propriedade 'md' do Tailwindcss
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
  ],
}
