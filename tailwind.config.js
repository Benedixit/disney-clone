module.exports = {
    theme: {
        screens: {
            'xs': '250px',

            'sm': '460px',

            'md': '640px',

            'lg': '1024px',

            'xl': '1280px',
        },
        gradientColorStops: theme => ({
            ...theme('colors'),
            'primary': '#2878BA',
        })
    }
}