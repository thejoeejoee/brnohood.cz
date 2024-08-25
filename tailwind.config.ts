import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#fdf3ff',
                    '100': '#f9e6ff',
                    '200': '#f3ccff',
                    '300': '#eda4ff',
                    '400': '#e46eff',
                    '500': '#d540fe',
                    '600': '#bb17e2',
                    '700': '#9e0fbc',
                    '800': '#830f99',
                    '900': '#6e127d',
                    '950': '#490055',
                    DEFAULT: '#d540fe', // 500
                },
                secondary: {
                    '50': '#fefee8',
                    '100': '#ffffc2',
                    '200': '#fffb87',
                    '300': '#fff143',
                    '400': '#ffe005',
                    '500': '#efc803',
                    '600': '#ce9c00',
                    '700': '#a46f04',
                    '800': '#88570b',
                    '900': '#734710',
                    '950': '#432505',
                    DEFAULT: '#efc803', // 500
                },
                tertiary: {
                    '50': '#faffe4',
                    '100': '#f2ffc5',
                    '200': '#e3ff92',
                    '300': '#cdff53',
                    '400': '#b5fb20',
                    '500': '#a9fe00',
                    '600': '#73b500',
                    '700': '#578902',
                    '800': '#466c08',
                    '900': '#3c5b0c',
                    '950': '#1d3300',
                    DEFAULT: '#a9fe00', // 500
                },

            }
        }
    }
}
