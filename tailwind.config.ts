import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    plugins: [
        require('@tailwindcss/typography'),
        require("tailwindcss-view-transitions")({
            styles: {
                root: {
                    old: { animationDuration: "300ms" },
                    new: { animationDuration: "300ms" },
                },
            },
        }),
    ],

    content: [
        './pages/**/*.{html,js,vue}',
        './components/**/*.{html,js,vue}',
        './assets/**/*.{css,js,vue}',
        './content/**/*.*',
    ],

    theme: {
        extend: {
            // https://uicolors.app/create
            colors: {
                primary: {
                    '50': '#f5f5fd',
                    '100': '#eeedfa',
                    '200': '#e0ddf7',
                    '300': '#c9c2f0',
                    '400': '#ac9fe6',
                    '500': '#9078da',
                    '600': '#7c5acd',
                    '700': '#6b46b8',
                    '800': '#5b3c9b',
                    '900': '#4c337f',
                    '950': '#2e1f56',
                    DEFAULT: '#6b46b8', // 700
                },
                secondary: {
                    '50': '#fffdea',
                    '100': '#fff8c5',
                    '200': '#fff185',
                    '300': '#ffe346',
                    '400': '#ffd21b',
                    '500': '#ffb202',
                    '600': '#e28700',
                    '700': '#bb5e02',
                    '800': '#984908',
                    '900': '#7c3c0b',
                    '950': '#481e00',
                    DEFAULT: '#ffb202', // 500
                },
                tertiary: {
                    '50': '#faffe6',
                    '100': '#f1ffc8',
                    '200': '#e4ff97',
                    '300': '#cdfb5b',
                    '400': '#b6f12a',
                    '500': '#97d70b',
                    '600': '#7fbc04',
                    '700': '#588308',
                    '800': '#47670d',
                    '900': '#3c5710',
                    '950': '#1e3102',
                    DEFAULT: '#7fbc04', // 600
                },

            }
        }
    }
}
