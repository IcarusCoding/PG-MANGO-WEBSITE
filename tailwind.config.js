const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./util/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'mango-light': '#ffaa00',
                'mango-dark': '#212749', // 212529 #1c1b22 #141728 #212749
                'mango-slate-darker': colors.slate["900"],
                'mango-slate-dark': '#141728',
                'mango-gray-lighter': colors.gray["100"],
                'mango-gray-light': colors.gray["200"],
                'mango-gray-medium': colors.gray["300"],
                'mango-gray-dark': colors.gray["700"], //'#5844f4'
                'mango-gray-darker': colors.gray["800"],
            },
            height: {
                'nav-base': '54px',
                'nav-full': '70px'
            }
        },
    },
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/typography')
    ],
}
