const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./public/*.{html}"
    ],
    theme: {
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '50%': '50%',
            '16': '4rem',
        },
        extend: {
            colors: {
                shelfBg: `#f7f2ed`,
                accent: '#daaa63',
                primary: `#2c1810`,
                secondary: `#aea5a4`
            },
            fontFamily: {
                'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
                'serif': ['"Libre Caslon Text"', ...defaultTheme.fontFamily.serif]
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
