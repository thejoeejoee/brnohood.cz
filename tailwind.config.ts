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
        require("tailwindcss-fluid-type"),
    ],
    corePlugins: {
        fontSize: false,
    },

    content: [
        './pages/**/*.{html,js,vue}',
        './components/**/*.{html,js,vue}',
        './assets/**/*.{css,js,vue}',
        './content/**/*.*',
        './stores/**/*.*',
    ],

    theme: {
        extend: {
            fontFamily: {
                'brand': ["Karla", "sans-serif"],
            },
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
                    '50': '#fff9ec',
                    '100': '#fff2d3',
                    '200': '#ffe1a6',
                    '300': '#ffcb6d',
                    '400': '#ffa933',
                    '500': '#ff8d0b',
                    '600': '#fe7501',
                    '700': '#cb5403',
                    '800': '#a1420b',
                    '900': '#81370d',
                    '950': '#461a04',
                    DEFAULT: '#fe7501', // 600
                },
                tertiary: {
                    '50': '#faffe5',
                    '100': '#f1ffc8',
                    '200': '#e3ff97',
                    '300': '#cefc5a',
                    '400': '#b6f229',
                    '500': '#97d80a',
                    '600': '#7ebc03',
                    '700': '#588308',
                    '800': '#47670d',
                    '900': '#3c5710',
                    '950': '#1e3102',
                    DEFAULT: '#7ebc03', // 600
                },
                quaternary: {
                    '50': '#fffdea',
                    '100': '#fff8c5',
                    '200': '#fff285',
                    '300': '#ffe446',
                    '400': '#ffd31b',
                    '500': '#ffb200',
                    '600': '#e28800',
                    '700': '#bb5f02',
                    '800': '#984908',
                    '900': '#7c3c0b',
                    '950': '#481e00',
                    DEFAULT: '#ffb200', // 500
                },

            },
            backgroundImage: {
                'radial-transparent-to-white': 'radial-gradient(50% 50% at 50% 50%, transparent 10%, white 100%)',
            },
        }
    }
}
